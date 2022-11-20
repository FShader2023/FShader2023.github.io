#version 300 es
precision highp float;

layout(location = 0) out vec4 fragColor;

uniform vec2 iResolution;

uniform float iTime;

uniform float iTimeDelta;

uniform vec4 iMouse;

uniform int iFrame;

mat2 Rot(float a)
{
 float s = sin(a);
 float c = cos(a);
 return mat2(c, - s, s, c);
}
float Hash21(vec2 p)
{
 p = fract(p * vec2(123.34, 456.21));
 p += dot(p, p + 45.32);
 return fract(p.x * p.y);
}
vec3 Hash21Color(vec2 p)
{
 float r = Hash21(p);
 float g = Hash21(p * 123.456);
 float b = Hash21((p - 789.012) / 345.678);
 return vec3(r, g, b);
}
float sdGrid(vec3 p)
{
 float plane = p.y;
 plane += 0.025 * smoothstep(0.05, 0.0, abs(p.x - round(p.x)));
 plane += 0.025 * smoothstep(0.05, 0.0, abs(p.z - round(p.z)));
 return plane;
}
float sdSpheres(vec3 p)
{
 float off = Hash21(round(p.xz));
 float sphereY = 0.2 * sin(iTime + 4. + off) + 1.0;
 vec3 pos = vec3(0, sphereY, 0);
 p.xz = mod(p.xz, 2.0) - 1.0;
 return length(p - pos) - 0.4;
}
float GetDist(vec3 p)
{
 float grid = sdGrid(p);
 float spheres = sdSpheres(p);
 return min(grid, spheres);
}
vec3 GetNormal(vec3 p)
{
 float d = GetDist(p);
 vec2 e = vec2(0.001, 0);
 return normalize(d - vec3(GetDist(p - e.xyy), GetDist(p - e.yxy), GetDist(p - e.yyx)));
}
float GetLight(vec3 p, vec3 n)
{
 vec3 l = normalize(vec3(10.0, 10.0, 10.0) * vec3(cos(iTime + 4.), 1., sin(iTime + 4.)) - p);
 float diff = max(0.0, dot(n, l));
 return diff;
}
float RayMarch(vec3 ro, vec3 rd, float side)
{
 float dO = 0.0;
 for(int i = 0; i < 1000; i ++)
  {
   vec3 p = ro + rd * dO;
   float dS = side * GetDist(p);
   if(abs(dS) <= 0.001 || dO > 1000.0)
    {
     break;
    }
   dO += dS;
  }
 return dO;
}
vec3 offset(vec3 n)
{
 return 0.001 * 2.0 * n;
}
void main()
{
 vec2 uv = (gl_FragCoord.xy - iResolution.xy * 0.5) / min(iResolution.x, iResolution.y);
 vec2 mouse;
 if(iMouse.x == 0.0 && iMouse.y == 0.0)
  {
   mouse = vec2(0, 0);
  }
 else
  {
   mouse = iMouse.xy / iResolution.xy - 0.5;
  }
 float yaw = mouse.x * 2.0 * 3.1415926535;
 float pitch = mouse.y * 3.1415926535;
 vec4 cs = vec4(cos(yaw), sin(yaw), cos(pitch), sin(pitch));
 vec3 ro = vec3(0, 1, 0);
 vec3 lookAt = ro + cs.xwy * vec3(cs.z, 1, cs.z);
 vec3 f = normalize(lookAt - ro);
 vec3 r = normalize(cross(f, vec3(0, 1, 0)));
 vec3 u = cross(r, f);
 vec3 c = ro + f * 1.0;
 vec3 i = c + uv.x * r + uv.y * u;
 vec3 rd = normalize(i - ro);
 vec3 col = vec3(0);
 vec3 n = vec3(0);
 vec3 reflOri = ro;
 vec3 reflDir = rd;
 for(int r_int = 0; r_int <= 10; r_int ++)
  {
   vec3 off = offset(n);
   reflOri += off;
   float d = RayMarch(reflOri, reflDir, 1.0);
   reflOri += reflDir * d;
   vec3 spec = vec3(0);
   if(sdGrid(reflOri) <= 0.001)
    {
     spec += mod(floor(reflOri.x) + floor(reflOri.z), 2.0);
    }
   else
    {
     if(sdSpheres(reflOri) <= 0.001)
      {
       spec += Hash21Color(round(reflOri.xz));
      }
     else
      {
       break;
      }
    }
   n = GetNormal(reflOri);
   float diff = GetLight(reflOri, n);
   spec += smoothstep(0.975, 1.0, diff);
   col += diff * spec * pow(max(0.4, 1e-9), float(r_int));
   reflDir = reflect(reflDir, n);
  }
 fragColor = vec4(col, 1.0);
 fragColor.w = 1.0;
}
