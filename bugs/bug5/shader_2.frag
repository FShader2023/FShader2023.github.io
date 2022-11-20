#version 300 es
precision highp float;

layout(location = 0) out vec4 fragColor;

uniform vec2 iResolution;

uniform float iTime;

uniform float iTimeDelta;

uniform vec4 iMouse;

uniform int iFrame;

struct bound3 {
 vec3 mMin;
 vec3 mMax;
} ;

bound3 BezierAABB(vec3 p0, vec3 p1, vec3 p2, vec3 p3)
{
 vec3 mi = min(p0, p3);
 vec3 ma = max(p0, p3);
 vec3 c = - 1.0 * p0 + 1.0 * p1;
 vec3 b = 1.0 * p0 - 2.0 * p1 + 1.0 * p2;
 vec3 a = - 1.0 * p0 + 3.0 * p1 - 3.0 * p2 + 1.0 * p3;
 vec3 h = b * b - a * c;
 if(any(greaterThan(h, vec3(0.0))))
  {
   vec3 g = sqrt(abs(h));
   vec3 t1 = clamp((- b - g) / a, 0.0, 1.0);
   vec3 s1 = 1.0 - t1;
   vec3 t2 = clamp((- b + g) / a, 0.0, 1.0);
   vec3 s2 = 1.0 - t2;
   vec3 q1 = s1 * s1 * s1 * p0 + 3.0 * s1 * s1 * t1 * p1 + 3.0 * s1 * t1 * t1 * p2 + t1 * t1 * t1 * p3;
   vec3 q2 = s2 * s2 * s2 * p0 + 3.0 * s2 * s2 * t2 * p1 + 3.0 * s2 * t2 * t2 * p2 + t2 * t2 * t2 * p3;
   if(h.x > 0.0)
    {
     mi.x = min(mi.x, min(q1.x, q2.x));
     ma.x = max(ma.x, max(q1.x, q2.x));
    }
   if(h.y > 0.0)
    {
     mi.y = min(mi.y, min(q1.y, q2.y));
     ma.y = max(ma.y, max(q1.y, q2.y));
    }
   if(h.z > 0.0)
    {
     mi.z = min(mi.z, min(q1.z, q2.z));
     ma.z = max(ma.z, max(q1.z, q2.z));
    }
  }
 return bound3(mi, ma);
}
float iEllipse(vec3 ro, vec3 rd, vec3 c, vec3 u, vec3 v)
{
 vec3 q = ro - c;
 vec3 r = vec3(dot(cross(u, v), q), dot(cross(q, u), rd), dot(cross(v, q), rd)) / dot(cross(v, u), rd);
 return (dot(r.yz, r.yz) < 1.0) ? r.x : - 1.0;
}
vec2 iBox(vec3 ro, vec3 rd, vec3 cen, vec3 rad)
{
 vec3 m = 1.0 / rd;
 vec3 n = m * (ro - cen);
 vec3 k = abs(m) * rad;
 vec3 t1 = - n - k;
 vec3 t2 = - n + k;
 float tN = max(max(t1.x, t1.y), t1.z);
 float tF = min(min(t2.x, t2.y), t2.z);
 if(tN > tF || tF < 0.0)
  {
   return vec2(- 1.0);
  }
 return vec2(tN, tF);
}
float length2(vec3 v)
{
 return dot(v, v);
}
vec3 iSegment(vec3 ro, vec3 rd, vec3 a, vec3 b)
{
 vec3 ba = b - a;
 vec3 oa = ro - a;
 float oad = dot(oa, rd);
 float dba = dot(rd, ba);
 float baba = dot(ba, ba);
 float oaba = dot(oa, ba);
 vec2 th = vec2(- oad * baba + dba * oaba, oaba - oad * dba) / (baba - dba * dba);
 th.x = max(th.x, 0.0);
 th.y = clamp(th.y, 0.0, 1.0);
 vec3 p = a + ba * th.y;
 vec3 q = ro + rd * th.x;
 return vec3(th, length2(p - q));
}
float iBezier(vec3 ro, vec3 rd, vec3 p0, vec3 p1, vec3 p2, vec3 p3, float width)
{
 const int kNum = 50;
 float hit = - 1.0;
 float res = 1e10;
 vec3 a = p0;
 for(int i = 1; i < kNum; i ++)
  {
   float t = float(i) / float(kNum - 1);
   float s = 1.0 - t;
   vec3 b = p0 * s * s * s + p1 * 3.0 * s * s * t + p2 * 3.0 * s * t * t + p3 * t * t * t;
   vec3 r = iSegment(ro, rd, a, b);
   if(r.z < width * width)
    {
     res = min(res, r.x);
     hit = 1.0;
    }
   a = b;
  }
 return res * hit;
}
float hash1(vec2 p)
{
 return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}
void main()
{
 vec3 tot = vec3(0.0);
 for(int m = 0; m < 3; m ++)
  {
   for(int n = 0; n < 3; n ++)
    {
     vec2 o = vec2(float(m), float(n)) / float(3) - 0.5;
     vec2 p = (- iResolution.xy + 2.0 * (gl_FragCoord.xy + o)) / iResolution.y;
     vec3 ro = vec3(- 0.5, 0.4, 1.5);
     vec3 ta = vec3(0.0, 0.0, 0.0);
     vec3 ww = normalize(ta - ro);
     vec3 uu = normalize(cross(ww, vec3(0.0, 1.0, 0.0)));
     vec3 vv = normalize(cross(uu, ww));
     vec3 rd = normalize(p.x * uu + p.y * vv + 1.5 * ww);
     float time = iTime * 0.5;
     vec3 p0 = vec3(0.8, 0.6, 0.8) * sin(time * 0.7 + vec3(3.0, 1.0, 2.0));
     vec3 p1 = vec3(0.8, 0.6, 0.8) * sin(time * 1.1 + vec3(0.0, 6.0, 1.0));
     vec3 p2 = vec3(0.8, 0.6, 0.8) * sin(time * 1.3 + vec3(4.0, 2.0, 3.0));
     vec3 p3 = vec3(0.8, 0.6, 0.8) * sin(time * 1.5 + vec3(1.0, 5.0, 4.0));
     float thickness = 0.01;
     vec3 col = vec3(0.4) * (1.0 - 0.3 * length(p));
     float t = iBezier(ro, rd, p0, p1, p2, p3, thickness);
     float tmin = 1e10;
     if(t > 0.0)
      {
       tmin = t;
       col = vec3(1.0, 0.75, 0.3);
      }
     bound3 bbox = BezierAABB(p0, p1, p2, p3);
     bbox.mMin -= thickness;
     bbox.mMax += thickness;
     vec3 bcen = 0.5 * (bbox.mMin + bbox.mMax);
     vec3 brad = 0.5 * (bbox.mMax - bbox.mMin);
     vec2 tbox = iBox(ro, rd, bcen, brad);
     if(tbox.x > 0.0)
      {
       if(tbox.y < tmin)
        {
         vec3 pos = ro + rd * tbox.y;
         vec3 e = smoothstep(brad - 0.03, brad - 0.02, abs(pos - bcen));
         float al = 1.0 - (1.0 - e.x * e.y) * (1.0 - e.y * e.z) * (1.0 - e.z * e.x);
         col = mix(col, vec3(0.0), 0.25 + 0.75 * al);
        }
       if(tbox.x < tmin)
        {
         vec3 pos = ro + rd * tbox.x;
         vec3 e = smoothstep(brad - 0.03, brad - 0.02, abs(pos - bcen));
         float al = 1.0 - (1.0 - e.x * e.y) * (1.0 - e.y * e.z) * (1.0 - e.z * e.x);
         col = mix(col, vec3(0.0), 0.15 + 0.85 * al);
        }
      }
     tot += col;
    }
  }
 tot /= float(3 * 3);
 tot += ((hash1(gl_FragCoord.xy) + hash1(gl_FragCoord.yx + 13.1)) / 2.0 - 0.5) / 256.0;
 fragColor = vec4(tot, 1.0);
 fragColor.w = 1.0;
}
