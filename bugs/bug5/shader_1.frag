#version 300 es
precision highp float;

layout(location = 0) out vec4 fragColor;

uniform vec2 iResolution;

uniform float iTime;

uniform float iTimeDelta;

uniform vec4 iMouse;

uniform int iFrame;

float hash(vec2 p)
{
 float h = dot(p, vec2(127.1, 311.7));
 return fract(sin(h) * 458.325421) * 2.0 - 1.0;
}
float noise(vec2 p)
{
 vec2 i = floor(p);
 vec2 f = fract(p);
 f = f * f * (3.0 - 2.0 * f);
 return mix(mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
vec2 rot(vec2 p, float a)
{
 return vec2(p.x * cos(a) - p.y * sin(a), p.x * sin(a) + p.y * cos(a));
}
float nac(vec3 p, vec2 F, vec3 o)
{
 const float R = 0.0001;
 p += o;
 return length(max(abs(p.xy) - vec2(F), 0.0)) - R;
}
float by(vec3 p, float F, vec3 o)
{
 const float R = 0.0001;
 p += o;
 return length(max(abs(mod(p.xy, 3.0)) - F, 0.0)) - R;
}
float recta(vec3 p, vec3 F, vec3 o)
{
 const float R = 0.0001;
 p += o;
 return length(max(abs(p) - F, 0.0)) - R;
}
float map1(vec3 p, float scale)
{
 float G = 0.50;
 float F = 0.50 * scale;
 float t = nac(p, vec2(F, F), vec3(G, G, 0.0));
 t = min(t, nac(p, vec2(F, F), vec3(G, - G, 0.0)));
 t = min(t, nac(p, vec2(F, F), vec3(- G, G, 0.0)));
 t = min(t, nac(p, vec2(F, F), vec3(- G, - G, 0.0)));
 return t;
}
float map2(vec3 p)
{
 float t = map1(p, 0.9);
 t = max(t, recta(p, vec3(1.0, 1.0, 0.02), vec3(0.0, 0.0, 0.0)));
 return t;
}
float gennoise(vec2 p)
{
 float d = 0.5;
 mat2 h = mat2(1.6, 1.2, - 1.2, 1.6);
 float color = 0.0;
 for(int i = 0; i < 2; i ++)
  {
   color += d * noise(p * 5.0 + iTime);
   p *= h;
   d /= 2.0;
  }
 return color;
}
void main()
{
 fragColor = vec4(0.0);
 for(int count = 0; count < 2; count ++)
  {
   vec2 uv = - 1.0 + 2.0 * (gl_FragCoord.xy / iResolution.xy);
   uv *= 1.4;
   uv.x += hash(uv.xy + iTime + float(count)) / 512.0;
   uv.y += hash(uv.yx + iTime + float(count)) / 512.0;
   vec3 dir = normalize(vec3(uv * vec2(iResolution.x / iResolution.y, 1.0), 1.0 + sin(iTime) * 0.01));
   dir.xz = rot(dir.xz, (70.0 * 3.1415926535897921284 / 180.0));
   dir.xy = rot(dir.xy, (90.0 * 3.1415926535897921284 / 180.0));
   vec3 pos = vec3(- 0.1 + sin(iTime * 0.3) * 0.1, 2.0 + cos(iTime * 0.4) * 0.1, - 3.5);
   vec3 col = vec3(0.0);
   float t = 0.0;
   float M = 1.002;
   float bsh = 0.01;
   float dens = 0.0;
   for(int i = 0; i < 25 * 24; i ++)
    {
     float temp = map1(pos + dir * t, 0.6);
     if(temp < 0.2)
      {
       col += (vec3(0.5, 0.7, 1.7)) * 0.005 * dens;
      }
     t += bsh * M;
     bsh *= M;
     dens += 0.025;
    }
   t = 0.0;
   float y = 0.0;
   for(int i = 0; i < 25 * 50; i ++)
    {
     float temp = map2(pos + dir * t);
     if(temp < 0.1)
      {
       col += (vec3(0.15, 0.8, 1.7)) * 0.005;
      }
     t += temp;
     y ++;
    }
   col += ((2.0 + uv.x) * (vec3(0.15, 0.8, 1.7))) + (y / (25.0 * 50.0));
   col += gennoise(dir.xz) * 0.5;
   col *= 1.0 - uv.y * 0.5;
   col *= vec3(0.05);
   col = pow(max(col, 1e-9), vec3(0.717));
   fragColor += vec4(col, 1.0 / (t));
  }
 fragColor /= vec4(2.0);
 fragColor.w = 1.0;
}
