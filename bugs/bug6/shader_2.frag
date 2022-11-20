#version 300 es
precision highp float;

layout(location = 0) out vec4 fragColor;

uniform vec2 iResolution;

uniform float iTime;

uniform float iTimeDelta;

uniform vec4 iMouse;

uniform int iFrame;

float hash_5(vec2 p)
{
 return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x))));
}
float noise_1(vec2 x)
{
 vec2 i = floor(x);
 vec2 f = fract(x);
 float a = hash_5(i);
 float b = hash_5(i + vec2(1.0, 0.0));
 float c = hash_5(i + vec2(0.0, 1.0));
 float d = hash_5(i + vec2(1.0, 1.0));
 vec2 u = f * f * (3.0 - 2.0 * f);
 return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
float fbm_3(vec2 p)
{
 const mat2 m2 = mat2(0.8, - 0.6, 0.6, 0.8);
 float f = 0.5000 * noise_1(p);
 p = m2 * p * 2.02;
 f += 0.2500 * noise_1(p);
 p = m2 * p * 2.03;
 f += 0.1250 * noise_1(p);
 p = m2 * p * 2.01;
 f += 0.0625 * noise_1(p);
 return f;
}
float sdSphere(vec3 p, float s)
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
 vec2 face = vec2(sdSphere(p, 1.0), 1.0);
 vec3 q = p;
 q.x = abs(q.x);
 q.xz *= rot(- .3);
 q.yz *= rot(- 0.25 + 0.05 * step(0.0, p.x));
 q.y *= 0.8;
 q.z *= 2.0;
 q.z -= 2.0;
 vec2 eye = vec2(sdSphere(q, .11) * 0.5, 2.0);
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
 vec2 hand = vec2(sdSphere(q, .3) * 0.5, 3.0);
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
void main()
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
 fragColor = vec4(col, 1.0);
 fragColor.w = 1.0;
}
