#version 300 es
precision highp float;

layout(location = 0) out vec4 fragColor;

uniform vec2 iResolution;

uniform float iTime;

uniform float iTimeDelta;

uniform vec4 iMouse;

uniform int iFrame;

float sdPlane(vec3 p)
{
 return p.y;
}
float sdBox(vec3 p, vec3 b)
{
 vec3 d = abs(p) - b;
 return min(max(d.x, max(d.y, d.z)), 0.0) + length(max(d, 0.0));
}
float map(vec3 pos)
{
 vec3 qos = vec3(fract(pos.x + 0.5) - 0.5, pos.yz);
 return min(sdPlane(pos.xyz - vec3(0.0, 0.00, 0.0)), sdBox(qos.xyz - vec3(0.0, 0.25, 0.0), vec3(0.2, 0.5, 0.2)));
}
float calcSoftshadow(vec3 ro, vec3 rd, float mint, float tmax, int technique)
{
 float res = 1.0;
 float t = mint;
 float ph = 1e10;
 for(int i = 0; i < 32; i ++)
  {
   float h = map(ro + rd * t);
   if(technique == 0)
    {
     res = min(res, 10.0 * h / t);
    }
   else
    {
     float y = h * h / (2.0 * ph);
     float d = sqrt(h * h - y * y);
     res = min(res, 10.0 * d / max(0.0, t - y));
     ph = h;
    }
   t += h;
   if(res < 0.0001 || t > tmax)
    {
     break;
    }
  }
 res = clamp(res, 0.0, 1.0);
 return res * res * (3.0 - 2.0 * res);
}
vec3 calcNormal(vec3 pos)
{
 vec2 e = vec2(1.0, - 1.0) * 0.5773 * 0.0005;
 return normalize(e.xyy * map(pos + e.xyy) + e.yyx * map(pos + e.yyx) + e.yxy * map(pos + e.yxy) + e.xxx * map(pos + e.xxx));
}
float castRay(vec3 ro, vec3 rd)
{
 float tmin = 1.0;
 float tmax = 20.0;
 float tp1 = (0.0 - ro.y) / rd.y;
 if(tp1 > 0.0)
  {
   tmax = min(tmax, tp1);
  }
 float tp2 = (1.0 - ro.y) / rd.y;
 if(tp2 > 0.0)
  {
   if(ro.y > 1.0)
    {
     tmin = max(tmin, tp2);
    }
   else
    {
     tmax = min(tmax, tp2);
    }
  }
 float t = tmin;
 for(int i = 0; i < 64; i ++)
  {
   float precis = 0.0005 * t;
   float res = map(ro + rd * t);
   if(res < precis || t > tmax)
    {
     break;
    }
   t += res;
  }
 if(t > tmax)
  {
   t = - 1.0;
  }
 return t;
}
float calcAO(vec3 pos, vec3 nor)
{
 float occ = 0.0;
 float sca = 1.0;
 for(int i = 0; i < 5; i ++)
  {
   float h = 0.001 + 0.15 * float(i) / 4.0;
   float d = map(pos + h * nor);
   occ += (h - d) * sca;
   sca *= 0.95;
  }
 return clamp(1.0 - 1.5 * occ, 0.0, 1.0);
}
vec3 render(vec3 ro, vec3 rd, int technique)
{
 vec3 col = vec3(0.0);
 float t = castRay(ro, rd);
 if(t > - 0.5)
  {
   vec3 pos = ro + t * rd;
   vec3 nor = calcNormal(pos);
   vec3 mate = vec3(0.3);
   vec3 lig = normalize(vec3(- 0.1, 0.3, 0.6));
   vec3 hal = normalize(lig - rd);
   float dif = clamp(dot(nor, lig), 0.0, 1.0) * calcSoftshadow(pos, lig, 0.01, 3.0, technique);
   float spe = pow(max(clamp(dot(nor, hal), 0.0, 1.0), 1e-9), 16.0) * dif * (0.04 + 0.96 * pow(max(clamp(1.0 + dot(hal, rd), 0.0, 1.0), 1e-9), 5.0));
   col = mate * 4.0 * dif * vec3(1.00, 0.70, 0.5);
   col += 12.0 * spe * vec3(1.00, 0.70, 0.5);
   float occ = calcAO(pos, nor);
   float amb = clamp(0.5 + 0.5 * nor.y, 0.0, 1.0);
   col += mate * amb * occ * vec3(0.0, 0.08, 0.1);
   col *= exp(- 0.0005 * t * t * t);
  }
 return col;
}
mat3 setCamera(vec3 ro, vec3 ta, float cr)
{
 vec3 cw = normalize(ta - ro);
 vec3 cp = vec3(sin(cr), cos(cr), 0.0);
 vec3 cu = normalize(cross(cw, cp));
 vec3 cv = normalize(cross(cu, cw));
 return mat3(cu, cv, cw);
}
void main()
{
 float an = 12.0 - sin(0.1 * iTime);
 vec3 ro = vec3(3.0 * cos(0.1 * an), 1.0, - 3.0 * sin(0.1 * an));
 vec3 ta = vec3(0.0, - 0.4, 0.0);
 mat3 ca = setCamera(ro, ta, 0.0);
 int technique = (fract(iTime / 2.0) > 0.5) ? 1 : 0;
 vec3 tot = vec3(0.0);
 for(int m = 0; m < 2; m ++)
  {
   for(int n = 0; n < 2; n ++)
    {
     vec2 o = vec2(float(m), float(n)) / float(2) - 0.5;
     vec2 p = (- iResolution.xy + 2.0 * (gl_FragCoord.xy + o)) / iResolution.y;
     vec3 rd = ca * normalize(vec3(p.xy, 2.0));
     vec3 col = render(ro, rd, technique);
     col = pow(max(col, 1e-9), vec3(0.4545));
     tot += col;
    }
  }
 tot /= float(2 * 2);
 fragColor = vec4(tot, 1.0);
 fragColor.w = 1.0;
}
