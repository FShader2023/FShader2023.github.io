#version 300 es
precision highp float;

layout(location = 0) out vec4 fragColor;

uniform vec2 iResolution;

uniform float iTime;

uniform float iTimeDelta;

uniform vec4 iMouse;

uniform int iFrame;

float sdDeathStar(vec3 p2, float ra, float rb, float d)
{
 vec2 p = vec2(p2.x, length(p2.yz));
 float a = (ra * ra - rb * rb + d * d) / (2.0 * d);
 float b = sqrt(max(ra * ra - a * a, 0.0));
 if(p.x * b - p.y * a > d * max(b - p.y, 0.0))
  {
   return length(p - vec2(a, b));
  }
 else
  {
   return max((length(p) - ra), - (length(p - vec2(d, 0)) - rb));
  }
}
float map(vec3 pos)
{
 float ra = 0.5;
 float rb = 0.35 + 0.20 * cos(iTime * 1.1 + 4.0);
 float di = 0.50 + 0.15 * cos(iTime * 1.7);
 return sdDeathStar(pos, ra, rb, di);
}
float calcSoftshadow(vec3 ro, vec3 rd, float tmin, float tmax, const float k)
{
 float res = 1.0;
 float t = tmin;
 for(int i = 0; i < 64; i ++)
  {
   float h = map(ro + rd * t);
   res = min(res, k * h / t);
   t += clamp(h, 0.003, 0.10);
   if(res < 0.002 || t > tmax)
    {
     break;
    }
  }
 return clamp(res, 0.0, 1.0);
}
vec3 calcNormal(vec3 pos)
{
 vec2 e = vec2(1.0, - 1.0) * 0.5773;
 const float eps = 0.0005;
 return normalize(e.xyy * map(pos + e.xyy * eps) + e.yyx * map(pos + e.yyx * eps) + e.yxy * map(pos + e.yxy * eps) + e.xxx * map(pos + e.xxx * eps));
}
void main()
{
 float an = 1.0 * sin(0.38 * iTime + 3.0);
 vec3 ro = vec3(1.0 * cos(an), - 0.1, 1.0 * sin(an));
 vec3 ta = vec3(0.0, 0.0, 0.0);
 vec3 ww = normalize(ta - ro);
 vec3 uu = normalize(cross(ww, vec3(0.0, 1.0, 0.0)));
 vec3 vv = normalize(cross(uu, ww));
 vec3 tot = vec3(0.0);
 for(int m = 0; m < 3; m ++)
  {
   for(int n = 0; n < 3; n ++)
    {
     vec2 o = vec2(float(m), float(n)) / float(3) - 0.5;
     vec2 p = (2.0 * (gl_FragCoord.xy + o) - iResolution.xy) / iResolution.y;
     vec3 rd = normalize(p.x * uu + p.y * vv + 1.5 * ww);
     const float tmax = 5.0;
     float t = 0.0;
     for(int i = 0; i < 256; i ++)
      {
       vec3 pos = ro + t * rd;
       float h = map(pos);
       if(h < 0.0001 || t > tmax)
        {
         break;
        }
       t += h;
      }
     vec3 col = vec3(0.0);
     if(t < tmax)
      {
       vec3 pos = ro + t * rd;
       vec3 nor = calcNormal(pos);
       vec3 lig = vec3(0.57703);
       float dif = clamp(dot(nor, lig), 0.0, 1.0);
       if(dif > 0.001)
        {
         dif *= calcSoftshadow(pos + nor * 0.001, lig, 0.001, 1.0, 32.0);
        }
       float amb = 0.5 + 0.5 * dot(nor, vec3(0.0, 1.0, 0.0));
       col = vec3(0.2, 0.3, 0.4) * amb + vec3(0.8, 0.7, 0.5) * dif;
      }
     col = sqrt(col);
     tot += col;
    }
  }
 tot /= float(3 * 3);
 fragColor = vec4(tot, 1.0);
 fragColor.w = 1.0;
}
