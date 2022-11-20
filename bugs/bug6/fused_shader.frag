#version 300 es
precision highp float;

layout(location = 0) out vec4 fragColor;

uniform vec2 iResolution;

uniform float iTime;

uniform float iTimeDelta;

uniform vec4 iMouse;

uniform int iFrame;

vec4 fragColor_1;

vec4 fragColor_2;

const vec3 backgroundColor = vec3(0.2, 0.4, 0.6) * 0.09;

float hash(float n)
{
 return fract(sin(n) * 687.3123);
}
float noise(vec2 x)
{
 vec2 p = floor(x);
 vec2 f = fract(x);
 f = f * f * (3.0 - 2.0 * f);
 float n = p.x + p.y * 157.0;
 return mix(mix(hash(n + 0.0), hash(n + 1.0), f.x), mix(hash(n + 157.0), hash(n + 158.0), f.x), f.y);
}
const mat2 m2 = mat2(0.80, - 0.60, 0.60, 0.80);

float fbm(vec2 p)
{
 float f = 0.0;
 f += 0.5000 * noise(p);
 p = m2 * p * 2.02;
 f += 0.2500 * noise(p);
 p = m2 * p * 2.03;
 f += 0.1250 * noise(p);
 p = m2 * p * 2.01;
 return f / 0.9375;
}
float udRoundBox(vec3 p, vec3 b, float r)
{
 return length(max(abs(p) - b, 0.0)) - r;
}
float sdBox(vec3 p, vec3 b)
{
 vec3 d = abs(p) - b;
 return min(max(d.x, max(d.y, d.z)), 0.0) + length(max(d, 0.0));
}
float sdSphere(vec3 p, float s)
{
 return length(p) - s;
}
float sdCylinder(vec3 p, vec2 h)
{
 vec2 d = abs(vec2(length(p.xz), p.y)) - h;
 return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));
}
float opU(float d2, float d1)
{
 return min(d1, d2);
}
float opS(float d2, float d1)
{
 return max(- d1, d2);
}
float smin(float a, float b, float k)
{
 return - log(exp(- k * a) + exp(- k * b)) / k;
}
float mapCar(vec3 p0)
{
 vec3 p = p0 + vec3(0.0, 1.24, 0.0);
 float r = length(p.yz);
 float d = length(max(vec3(abs(p.x) - 0.35, r - 1.92, - p.y + 1.4), 0.0)) - 0.05;
 d = max(d, p.z - 1.0);
 p = p0 + vec3(0.0, - 0.22, 0.39);
 p.xz = abs(p.xz) - vec2(0.5300, 0.9600);
 p.x = abs(p.x);
 r = length(p.yz);
 d = smin(d, length(max(vec3(p.x - 0.08, r - 0.25, - p.y - 0.08), 0.0)) - 0.04, 8.0);
 d = max(d, - max(p.x - 0.165, r - 0.24));
 float d2 = length(vec2(max(p.x - 0.13, 0.0), r - 0.2)) - 0.02;
 d = min(d, d2);
 return d;
}
float dL;

float map_1(const vec3 p)
{
 vec3 pd = p;
 float d;
 pd.x = abs(pd.x);
 pd.z *= - sign(p.x);
 float ch = hash(floor((pd.z + 18. * (iTime + 95.3)) / 40.));
 float lh = hash(floor(pd.z / 13.));
 vec3 pdm = vec3(pd.x, pd.y, mod(pd.z, 10.) - 5.);
 dL = sdSphere(vec3(pdm.x - 8.1, pdm.y - 4.5, pdm.z), 0.1);
 dL = opU(dL, sdBox(vec3(pdm.x - 12., pdm.y - 9.5 - lh, mod(pd.z, 91.) - 45.5), vec3(0.2, 4.5, 0.2)));
 dL = opU(dL, sdBox(vec3(pdm.x - 12., pdm.y - 11.5 + lh, mod(pd.z, 31.) - 15.5), vec3(0.22, 5.5, 0.2)));
 dL = opU(dL, sdBox(vec3(pdm.x - 12., pdm.y - 8.5 - lh, mod(pd.z, 41.) - 20.5), vec3(0.24, 3.5, 0.2)));
 if(lh > 0.5)
  {
   dL = opU(dL, sdBox(vec3(pdm.x - 12.5, pdm.y - 2.75 - lh, mod(pd.z, 13.) - 6.5), vec3(0.1, 0.25, 3.2)));
  }
 vec3 pm = vec3(mod(pd.x + floor(pd.z * 4.) * 0.25, 0.5) - 0.25, pd.y, mod(pd.z, 0.25) - 0.125);
 d = udRoundBox(pm, vec3(0.245, 0.1, 0.12), 0.005);
 d = opS(d, - (p.x + 8.));
 d = opU(d, pd.y);
 vec3 pdc = vec3(pd.x, pd.y, mod(pd.z + 18. * (iTime + 95.3), 40.) - 20.);
 if(ch > 0.75)
  {
   pdc.x += (ch - 0.75) * 4.;
   dL = opU(dL, sdSphere(vec3(abs(pdc.x - 5.) - 1.05, pdc.y - 0.55, pdc.z), 0.025));
   dL = opU(dL, sdSphere(vec3(abs(pdc.x - 5.) - 1.2, pdc.y - 0.65, pdc.z + 6.05), 0.025));
   d = opU(d, mapCar((pdc - vec3(5., - 0.025, - 2.3)) * 0.45));
  }
 d = opU(d, 13. - pd.x);
 d = opU(d, sdCylinder(vec3(pdm.x - 8.5, pdm.y, pdm.z), vec2(0.075, 4.5)));
 d = opU(d, dL);
 return d;
}
vec3 calcNormalSimple(vec3 pos)
{
 const vec2 e = vec2(1.0, - 1.0) * 0.005;
 vec3 n = normalize(e.xyy * map_1(pos + e.xyy) + e.yyx * map_1(pos + e.yyx) + e.yxy * map_1(pos + e.yxy) + e.xxx * map_1(pos + e.xxx));
 return n;
}
vec3 calcNormal(vec3 pos)
{
 vec3 n = calcNormalSimple(pos);
 if(pos.y > 0.12)
  {
   return n;
  }
 vec2 oc = floor(vec2(pos.x + floor(pos.z * 4.) * 0.25, pos.z) * vec2(2., 4.));
 if(abs(pos.x) < 8.)
  {
   oc = pos.xz;
  }
 vec3 p = pos * 250.;
 vec3 xn = 0.05 * vec3(noise(p.xz) - 0.5, 0., noise(p.zx) - 0.5);
 xn += 0.1 * vec3(fbm(oc.xy) - 0.5, 0., fbm(oc.yx) - 0.5);
 n = normalize(xn + n);
 return n;
}
vec3 int1, int2, nor1;

vec4 lint1, lint2;

float intersect(vec3 ro, vec3 rd)
{
 const float precis = 0.001;
 float h = precis * 2.0;
 float t = 0.;
 int1 = int2 = vec3(- 500.);
 lint1 = lint2 = vec4(- 500.);
 float mld = 100.;
 for(int i = 0; i < 128; i ++)
  {
   h = map_1(ro + rd * t);
   if(dL < mld)
    {
     mld = dL;
     lint1.xyz = ro + rd * t;
     lint1.w = abs(dL);
    }
   if(h < precis)
    {
     int1.xyz = ro + rd * t;
     break;
    }
   t += max(h, precis * 2.);
  }
 if(int1.z < - 400. || t > 300.)
  {
   float d = - (ro.y + 0.1) / rd.y;
   if(d > 0.)
    {
     int1.xyz = ro + rd * d;
    }
   else
    {
     return - 1.;
    }
  }
 ro = ro + rd * t;
 nor1 = calcNormal(ro);
 ro += 0.01 * nor1;
 rd = reflect(rd, nor1);
 t = 0.0;
 h = precis * 2.0;
 mld = 100.;
 for(int i = 0; i < 48; i ++)
  {
   h = map_1(ro + rd * t);
   if(dL < mld)
    {
     mld = dL;
     lint2.xyz = ro + rd * t;
     lint2.w = abs(dL);
    }
   if(h < precis)
    {
     int2.xyz = ro + rd * t;
     return 1.;
    }
   t += max(h, precis * 2.);
  }
 return 0.;
}
vec3 shade(vec3 ro, vec3 pos, vec3 nor)
{
 vec3 col = vec3(0.5);
 if(abs(pos.x) > 15. || abs(pos.x) < 8.)
  {
   col = vec3(0.02);
  }
 if(pos.y < 0.01)
  {
   if(abs(int1.x) < 0.1)
    {
     col = vec3(0.9);
    }
   if(abs(abs(int1.x) - 7.4) < 0.1)
    {
     col = vec3(0.9);
    }
  }
 float sh = clamp(dot(nor, normalize(vec3(- 0.3, 0.3, - 0.5))), 0., 1.);
 col *= (sh * backgroundColor);
 if(abs(pos.x) > 12.9 && pos.y > 9.)
  {
   float ha = hash(133.1234 * floor(pos.y / 3.) + floor((pos.z) / 3.));
   if(ha > 0.95)
    {
     col = ((ha - 0.95) * 10.) * vec3(1., 0.7, 0.4);
    }
  }
 col = mix(backgroundColor, col, exp(min(max(0.1 * pos.y, 0.25) - 0.065 * distance(pos, ro), 0.)));
 return col;
}
vec3 getLightColor(vec3 pos)
{
 vec3 lcol = vec3(1., .7, .5);
 vec3 pd = pos;
 pd.x = abs(pd.x);
 pd.z *= - sign(pos.x);
 float ch = hash(floor((pd.z + 18. * (iTime + 95.3)) / 40.));
 vec3 pdc = vec3(pd.x, pd.y, mod(pd.z + 18. * (iTime + 95.3), 40.) - 20.);
 if(ch > 0.75)
  {
   pdc.x += (ch - 0.75) * 4.;
   if(sdSphere(vec3(abs(pdc.x - 5.) - 1.05, pdc.y - 0.55, pdc.z), 0.25) < 2.)
    {
     lcol = vec3(1., 0.05, 0.01);
    }
  }
 if(pd.y > 2. && abs(pd.x) > 10. && pd.y < 5.)
  {
   float fl = floor(pd.z / 13.);
   lcol = 0.4 * lcol + 0.5 * vec3(hash(.1562 + fl), hash(.423134 + fl), 0.);
  }
 if(abs(pd.x) > 10. && pd.y > 5.)
  {
   float fl = floor(pd.z / 2.);
   lcol = 0.5 * lcol + 0.5 * vec3(hash(.1562 + fl), hash(.923134 + fl), hash(.423134 + fl));
  }
 return lcol;
}
float randomStart(vec2 co)
{
 return 0.8 + 0.2 * hash(dot(co, vec2(123.42, 117.853)) * 412.453);
}
void main_1()
{
 vec2 q = gl_FragCoord.xy / iResolution.xy;
 vec2 p = - 1.0 + 2.0 * q;
 p.x *= iResolution.x / iResolution.y;
 if(q.y < .12 || q.y >= .88)
  {
   fragColor_1 = vec4(0., 0., 0., 1.);
   fragColor_1.w = 1.0;
   return;
  }
 else
  {
   float z = (iTime + 95.3);
   float x = - 10.9 + 1. * sin((iTime + 95.3) * 0.2);
   vec3 ro = vec3(x, 1.3 + .3 * cos((iTime + 95.3) * 0.26), z - 1.);
   vec3 ta = vec3(- 8., 1.3 + .4 * cos((iTime + 95.3) * 0.26), z + 4. + cos((iTime + 95.3) * 0.04));
   vec3 ww = normalize(ta - ro);
   vec3 uu = normalize(cross(ww, vec3(0.0, 1.0, 0.0)));
   vec3 vv = normalize(cross(uu, ww));
   vec3 rd = normalize(- p.x * uu + p.y * vv + 2.2 * ww);
   vec3 col = backgroundColor;
   float ints = intersect(ro + randomStart(p) * rd, rd);
   if(ints > - 0.5)
    {
     float r = 0.09;
     if(int1.y > 0.129)
      {
       r = 0.025 * hash(133.1234 * floor(int1.y / 3.) + floor(int1.z / 3.));
      }
     if(abs(int1.x) < 8.)
      {
       if(int1.y < 0.01)
        {
         r = 0.007 * fbm(int1.xz);
        }
       else
        {
         r = 0.02;
        }
      }
     if(abs(int1.x) < 0.1)
      {
       r *= 4.;
      }
     if(abs(abs(int1.x) - 7.4) < 0.1)
      {
       r *= 4.;
      }
     r *= 2.;
     col = shade(ro, int1.xyz, nor1);
     if(ints > 0.5)
      {
       col += r * shade(int1.xyz, int2.xyz, calcNormalSimple(int2.xyz));
      }
     if(lint2.w > 0.)
      {
       col += (r * 5. * exp(- lint2.w * 7.0)) * getLightColor(lint2.xyz);
      }
    }
   vec2 st = 256. * (p * vec2(.5, .01) + vec2((iTime + 95.3) * .13 - q.y * .6, (iTime + 95.3) * .13));
   float f = noise(st) * noise(st * 0.773) * 1.55;
   f = 0.25 + clamp(pow(max(abs(f), 1e-9), 13.0) * 13.0, 0.0, q.y * .14);
   if(lint1.w > 0.)
    {
     col += (f * 5. * exp(- lint1.w * 7.0)) * getLightColor(lint1.xyz);
    }
   col += 0.25 * f * (0.2 + backgroundColor);
   col = pow(max(clamp(col, 0.0, 1.0), 1e-9), vec3(0.4545));
   col *= 1.2 * vec3(1., 0.99, 0.95);
   col = clamp(1.06 * col - 0.03, 0., 1.);
   q.y = (q.y - .12) * (1. / 0.76);
   col *= 0.5 + 0.5 * pow(max(16.0 * q.x * q.y * (1.0 - q.x) * (1.0 - q.y), 1e-9), 0.1);
   fragColor_1 = vec4(col, 1.0);
  }
 fragColor_1.w = 1.0;
}

float hash_5_2(vec2 p)
{
 return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x))));
}
float noise_1_2(vec2 x)
{
 vec2 i = floor(x);
 vec2 f = fract(x);
 float a = hash_5_2(i);
 float b = hash_5_2(i + vec2(1.0, 0.0));
 float c = hash_5_2(i + vec2(0.0, 1.0));
 float d = hash_5_2(i + vec2(1.0, 1.0));
 vec2 u = f * f * (3.0 - 2.0 * f);
 return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
float fbm_3(vec2 p)
{
 const mat2 m2 = mat2(0.8, - 0.6, 0.6, 0.8);
 float f = 0.5000 * noise_1_2(p);
 p = m2 * p * 2.02;
 f += 0.2500 * noise_1_2(p);
 p = m2 * p * 2.03;
 f += 0.1250 * noise_1_2(p);
 p = m2 * p * 2.01;
 f += 0.0625 * noise_1_2(p);
 return f;
}
float sdSphere_2(vec3 p, float s)
{
 return length(p) - s;
}
float sdCapsule(vec3 p, vec3 a, vec3 b, float r)
{
 vec3 pa = p - a;
 vec3 ba = b - a;
 float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
 return length(pa - ba * h) - r;
}
vec2 opU(vec2 d1, vec2 d2)
{
 return (d1.x < d2.x) ? d1 : d2;
}
vec2 opS(vec2 d1, vec2 d2)
{
 return (- d1.x > d2.x) ? vec2(- d1.x, d1.y) : d2;
}
vec2 opSU(vec2 d1, vec2 d2, float k)
{
 float h = clamp(0.5 + 0.5 * (d2.x - d1.x) / k, 0.0, 1.0);
 return vec2(mix(d2.x, d1.x, h) - k * h * (1.0 - h), d1.y);
}
mat2 rot(float th)
{
 vec2 a = sin(vec2(1.5707963, 0) + th);
 return mat2(a, - a.y, a.x);
}
vec2 thinkingFace(vec3 p)
{
 vec2 face = vec2(sdSphere_2(p, 1.0), 1.0);
 vec3 q = p;
 q.x = abs(q.x);
 q.xz *= rot(- .3);
 q.yz *= rot(- 0.25 + 0.05 * step(0.0, p.x));
 q.y *= 0.8;
 q.z *= 2.0;
 q.z -= 2.0;
 vec2 eye = vec2(sdSphere_2(q, .11) * 0.5, 2.0);
 q = p;
 q.x = abs(q.x);
 q.xz *= rot(- .35);
 q.yz *= rot(- 0.62 + 0.26 * step(0.0, p.x) + pow(max(abs(q.x), 1e-9), 1.7) * 0.5);
 q.z -= 1.0;
 vec2 brow = vec2(sdCapsule(q, vec3(0.2, 0.0, 0.0), vec3(- .2, 0.0, 0.0), .05) * 0.5, 4.0);
 q = p;
 q.yz *= rot(0.2 + pow(max(abs(p.x), 1e-9), 1.8));
 q.xy *= rot(- 0.25);
 q.z -= 1.0;
 vec2 mouth = vec2(sdCapsule(q, vec3(0.2, 0.0, 0.0), vec3(- .2, 0.0, 0.0), .045), 4.0);
 p -= vec3(- .25, - .73, 1.0);
 p.xy *= rot(0.2);
 q = p;
 q = (q * vec3(1.2, 1.0, 2.0));
 q -= vec3(0.0, 0.01, 0.0);
 vec2 hand = vec2(sdSphere_2(q, .3) * 0.5, 3.0);
 q = p;
 vec2 finger1 = vec2(sdCapsule(q - vec3(0.3, 0.2, 0.02), vec3(0.2, 0.0, 0.0), vec3(- .2, 0.0, 0.0), .07), 3.0);
 vec2 finger2 = vec2(sdCapsule(q * vec3(1.2, 1.0, .8) - vec3(0.2, 0.06, 0.02), vec3(0.1, 0.0, 0.0), vec3(- .1, 0.0, 0.0), .08), 3.0);
 vec2 finger3 = vec2(sdCapsule(q * vec3(1.2, 1.0, .8) - vec3(0.15, - 0.08, 0.015), vec3(0.1, 0.0, 0.0), vec3(- .1, 0.0, 0.0), .08), 3.0);
 vec2 finger4 = vec2(sdCapsule(q * vec3(1.2, 1.0, .9) - vec3(0.1, - 0.2, - 0.01), vec3(0.1, 0.0, 0.0), vec3(- .1, 0.0, 0.0), .08), 3.0);
 p -= vec3(- 0.1, 0.3, 0.0);
 q = p;
 q.x -= q.y * 0.7;
 vec2 finger5 = vec2(sdCapsule(p, vec3(0.0, - 0.2, 0.0) - q, vec3(0.0, 0.2, 0.0), .1 - p.y * 0.15), 3.0);
 vec2 finger = opU(finger1, opU(finger5, opSU(finger2, opSU(finger3, finger4, 0.035), 0.035)));
 hand = opSU(hand, finger, 0.02);
 vec2 d = opU(eye, face);
 d = opU(brow, d);
 d = opS(mouth, d);
 d = opU(hand, d);
 return d;
}
float Noise2d(vec2 x)
{
 float xhash = cos(x.x * 37.0);
 float yhash = cos(x.y * 57.0);
 return fract(415.92653 * (xhash + yhash));
}
float NoisyStarField(vec2 vSamplePos, float fThreshhold)
{
 float StarVal = Noise2d(vSamplePos);
 if(StarVal >= fThreshhold)
  {
   StarVal = pow(max((StarVal - fThreshhold) / (1.0 - fThreshhold), 1e-9), 6.0);
  }
 else
  {
   StarVal = 0.0;
  }
 return StarVal;
}
vec2 map(vec3 p)
{
 vec2 think = thinkingFace(p - vec3(1., 3.5, 1.));
 return think;
}
float hash_6(float n)
{
 return fract(sin(n) * 43758.5453);
}
float noise_2(vec3 x)
{
 vec3 p = floor(x);
 vec3 f = fract(x);
 f = f * f * (3.0 - 2.0 * f);
 float n = p.x + p.y * 57.0 + 113.0 * p.z;
 float res = mix(mix(mix(hash_6(n + 0.0), hash_6(n + 1.0), f.x), mix(hash_6(n + 57.0), hash_6(n + 58.0), f.x), f.y), mix(mix(hash_6(n + 113.0), hash_6(n + 114.0), f.x), mix(hash_6(n + 170.0), hash_6(n + 171.0), f.x), f.y), f.z);
 return res;
}
mat3 m = mat3(0.00, 0.80, 0.60, - 0.80, 0.36, - 0.48, - 0.60, - 0.48, 0.64);

float fbm_4(vec3 pos)
{
 float o = 0.;
 for(int i = 0; i < 5; i ++)
  {
   o = o * 2. + abs(noise_2(pos) * 2. - 1.);
   pos = m * pos * 2.;
  }
 return o / 40.0;
}
vec3 normal(vec3 pos, float eps)
{
 vec2 e = vec2(1.0, - 1.0) * 0.5773 * eps;
 float intensity = 0.02;
 float n1 = fbm_4(pos * 1.5 + e.xyy) * intensity;
 float n2 = fbm_4(pos * 1.5 + e.yyx) * intensity;
 float n3 = fbm_4(pos * 1.5 + e.yxy) * intensity;
 float n4 = fbm_4(pos * 1.5 + e.xxx) * intensity;
 return normalize(e.xyy * (map(pos + e.xyy).x + n1) + e.yyx * (map(pos + e.yyx).x + n2) + e.yxy * (map(pos + e.yxy).x + n3) + e.xxx * (map(pos + e.xxx).x + n4));
}
float shadow(vec3 p, vec3 l)
{
 float t = 0.15;
 float t_max = 20.0;
 float res = 1.0;
 for(int i = 0; i < 16; ++ i)
  {
   if(t > t_max)
    {
     break;
    }
   float d = map(p + t * l).x;
   if(d < 0.01)
    {
     return 0.0;
    }
   t += d;
   res = min(res, 1.0 * d / t);
  }
 return res;
}
vec3 sunDir;

vec3 fakeSky(vec3 rd)
{
 vec3 moning = mix(vec3(0.85, 0.5, 0.2) * 1.1, vec3(0.2, 0.5, 0.85) * 1.1, rd.y);
 vec3 noon = mix(vec3(0.2, 0.5, 0.85) * 1.3, vec3(0.05, 0.2, 0.7), rd.y);
 vec3 col = noon;
 col = mix(moning, noon, 1.0);
 vec3 cloud = mix(mix(vec3(1.0, 0.95, 1.0), vec3(1.0, 0.2, 0.1), 1.0 - 1.0), vec3(0.02), 0.0);
 col = mix(col, cloud, 0.75 * step(0.0, rd.y) * smoothstep(0.4, 0.9, fbm_3(vec2((iTime + 1.42), 0.0) + (rd.xz / rd.y) * 3.0)));
 return col * 3.0;
}
float ndfGGX(float NdotH, float roughness)
{
 float alpha = roughness * roughness;
 float alphaSq = alpha * alpha;
 float denom = (NdotH * NdotH) * (alphaSq - 1.0) + 1.0;
 return alphaSq / (3.1415926 * denom * denom);
}
float gaSchlickG1(float theta, float k)
{
 return theta / (theta * (1.0 - k) + k);
}
float gaSchlickGGX(float NdotL, float NdotV, float roughness)
{
 float r = roughness + 1.0;
 float k = (r * r) / 8.0;
 return gaSchlickG1(NdotL, k) * gaSchlickG1(NdotV, k);
}
vec3 fresnelSchlick_roughness(vec3 F0, float cosTheta, float roughness)
{
 return F0 + (max(vec3(1.0 - roughness), F0) - F0) * pow(max(1.0 - cosTheta, 1e-9), 5.0);
}
vec3 shade(vec3 pos, vec3 albedo, float metalness, float roughness, vec3 N, vec3 V, vec3 L, vec3 Lradiance)
{
 vec3 H = normalize(L + V);
 float NdotV = max(0.0, dot(N, V));
 float NdotL = max(0.0, dot(N, L));
 float NdotH = max(0.0, dot(N, H));
 vec3 F0 = mix(vec3(0.04), albedo, metalness);
 vec3 F = fresnelSchlick_roughness(F0, max(0.0, dot(H, L)), roughness);
 float D = ndfGGX(NdotH, roughness);
 float G = gaSchlickGGX(NdotL, NdotV, roughness);
 vec3 kd = mix(vec3(1.0) - F, vec3(0.0), metalness);
 float shadow = shadow(pos, L);
 vec3 diffuseBRDF = kd * albedo / 3.1415926;
 vec3 specularBRDF = (F * D * G) / max(0.0001, 4.0 * NdotL * NdotV);
 return (diffuseBRDF + specularBRDF) * Lradiance * NdotL * shadow;
}
vec3 EnvBRDFApprox(vec3 SpecularColor, float Roughness, float NoV)
{
 const vec4 c0 = vec4(- 1, - 0.0275, - 0.572, 0.022);
 const vec4 c1 = vec4(1, 0.0425, 1.04, - 0.04);
 vec4 r = Roughness * c0 + c1;
 float a004 = min(r.x * r.x, exp2(- 9.28 * NoV)) * r.x + r.y;
 vec2 AB = vec2(- 1.04, 1.04) * a004 + r.zw;
 return SpecularColor * AB.x + AB.y;
}
float so(float NoV, float ao, float roughness)
{
 return clamp(pow(max(NoV + ao, 1e-9), exp2(- 16.0 * roughness - 1.0)) - 1.0 + ao, 0.0, 1.0);
}
vec3 calcAmbient(vec3 pos, vec3 albedo, float metalness, float roughness, vec3 N, vec3 V, float t)
{
 vec3 F0 = mix(vec3(0.04), albedo, metalness);
 vec3 F = fresnelSchlick_roughness(F0, max(0.0, dot(N, V)), roughness);
 vec3 kd = mix(vec3(1.0) - F, vec3(0.0), metalness);
 float aoRange = t / 40.0;
 float occlusion = max(0.0, 1.0 - map(pos + N * aoRange).x / aoRange);
 occlusion = min(exp2(- .8 * pow(max(occlusion, 1e-9), 2.0)), 1.0);
 vec3 ambientColor = mix(vec3(0.2, 0.5, 0.85) * 0.5, vec3(0.2, 0.25, 0.8) * 0.75, 0.5 + 0.5 * N.y);
 ambientColor = mix(vec3(0.3, 0.15, 0.05), ambientColor, 1.0 - smoothstep(0.2, - 0.5, sunDir.y));
 ambientColor = mix(vec3(0.03), ambientColor, 1.0 - smoothstep(- 0.2, - 0.5, sunDir.y));
 vec3 diffuseAmbient = kd * albedo * ambientColor * min(1.0, 0.75 + 0.5 * N.y) * 3.0;
 vec3 R = reflect(- V, N);
 vec3 col = mix(fakeSky(R) * pow(max(1.0 - max(- R.y, 0.0), 1e-9), 4.0), ambientColor, pow(max(roughness, 1e-9), 0.5));
 vec3 ref = EnvBRDFApprox(F0, roughness, max(dot(N, V), 0.0));
 vec3 specularAmbient = col * ref;
 diffuseAmbient *= occlusion;
 specularAmbient *= so(max(0.0, dot(N, V)), occlusion, roughness);
 return vec3(diffuseAmbient + specularAmbient);
}
vec3 materialize(vec3 p, vec3 ray, float depth, vec2 mat)
{
 vec3 col = vec3(0.0);
 vec3 nor = normal(p, 0.001);
 vec3 sky = fakeSky(ray);
 if(depth > 2000.0)
  {
   col = sky;
  }
 else
  {
   float checker = mod(floor(p.x) + floor(p.z), 2.0);
   float roughness;
   float metalness;
   if(mat.y == 1.0)
    {
     col = pow(max(vec3(1.0, 204.0 / 255.0, 77.0 / 255.0), 1e-9), vec3(2.2)) * 0.6;
     roughness = 0.5;
     metalness = 0.0;
    }
   else
    {
     if(mat.y == 2.0)
      {
       col = pow(max(vec3(102.0 / 255.0, 69.0 / 255.0, 0.0), 1e-9), vec3(2.2)) * 0.6;
       roughness = 0.1;
       metalness = 0.0;
      }
     else
      {
       if(mat.y == 3.0)
        {
         col = pow(max(vec3(244.0 / 255.0, 144.0 / 255.0, 12.0 / 255.0), 1e-9), vec3(2.2)) * 0.7;
         roughness = 0.8;
         metalness = 0.0;
        }
       else
        {
         if(mat.y == 4.0)
          {
           col = pow(max(vec3(102.0 / 255.0, 69.0 / 255.0, 0.0), 1e-9), vec3(2.2)) * 0.8;
           roughness = 0.6;
           metalness = 0.0;
          }
        }
      }
    }
   vec3 result = vec3(0.);
   result += shade(p, col, metalness, roughness, nor, - ray, normalize(sunDir), vec3(1.0, 0.98, 0.95) * 100.) * 1.0;
   result += shade(p, col, metalness, roughness, nor, - ray, normalize(- sunDir), vec3(1.0, 0.98, 0.95) * 2.) * 0.0;
   result += calcAmbient(p, col, metalness, roughness, nor, - ray, depth);
   col = result;
  }
 float fo = 1.0 - exp(- 0.0015 * depth);
 col = mix(col, sky, fo);
 return col;
}
vec3 trace(vec3 p, vec3 ray)
{
 float t = 0.0;
 vec3 pos;
 vec2 mat;
 for(int i = 0; i < 100; i ++)
  {
   pos = p + ray * t;
   mat = map(pos);
   if(mat.x < 0.00001)
    {
     break;
    }
   t += mat.x;
  }
 return materialize(pos, ray, t, mat);
}
mat3 camera(vec3 ro, vec3 ta, float cr)
{
 vec3 cw = normalize(ta - ro);
 vec3 cp = vec3(sin(cr), cos(cr), 0.);
 vec3 cu = normalize(cross(cw, cp));
 vec3 cv = normalize(cross(cu, cw));
 return mat3(cu, cv, cw);
}
float luminance(vec3 col)
{
 return dot(vec3(0.298912, 0.586611, 0.114478), col);
}
vec3 reinhard(vec3 col, float exposure, float white)
{
 col *= exposure;
 white *= exposure;
 float lum = luminance(col);
 return (col * (lum / (white * white) + 1.0) / (lum + 1.0));
}
void main_2()
{
 vec2 p = (gl_FragCoord.xy * 2.0 - iResolution.xy) / min(iResolution.x, iResolution.y);
 float t = (iTime + 1.42) * 3.1415926 * 2.0 / 6.0 - 3.1415926 * 0.5;
 sunDir = normalize(vec3(.5, sin(t), cos(t)));
 vec3 ro = vec3(- 0.43 * 5.0, 1.3, 0.9 * 5.0);
 vec3 ta = vec3(2.4, 4.6, - 0.3);
 mat3 c = camera(ro, ta, 0.0);
 vec3 ray = c * normalize(vec3(p, 3.5));
 vec3 col = trace(ro, ray);
 col = reinhard(col, .6, 30.0);
 col = pow(max(col, 1e-9), vec3(1.0 / 2.2));
 fragColor_2 = vec4(col, 1.0);
 fragColor_2.w = 1.0;
}

void main()
{
    fragColor = vec4(0.0);
    main_1();
    fragColor += round(clamp(fragColor_1, vec4(0.0), vec4(1.0)) * 255.0);
    main_2();
    fragColor = mix(fragColor_2, fragColor, iTime);
}