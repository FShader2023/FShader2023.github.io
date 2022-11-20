#version 300 es
precision highp float;

layout(location = 0) out vec4 fragColor;

uniform vec2 iResolution;

uniform float iTime;

uniform float iTimeDelta;

uniform vec4 iMouse;

uniform int iFrame;

vec2 grad(ivec2 z)
{
 int n = z.x * 1 + z.y * 113;
 n = (n << 13) ^ n;
 n = (n * (n * n * 15731 + 789221) + 1376312589) >> 16;
 n &= 7;
 vec2 gr = vec2(n & 1, n >> 1) * 2.0 - 1.0;
 return (n >= 6) ? vec2(0.0, gr.x) : (n >= 4) ? vec2(gr.x, 0.0) : gr;
}
float noise(vec2 p)
{
 ivec2 i = ivec2(floor(p));
 vec2 f = fract(p);
 vec2 u = f * f * (3.0 - 2.0 * f);
 return mix(mix(dot(grad(i + ivec2(0, 0)), f - vec2(0.0, 0.0)), dot(grad(i + ivec2(1, 0)), f - vec2(1.0, 0.0)), u.x), mix(dot(grad(i + ivec2(0, 1)), f - vec2(0.0, 1.0)), dot(grad(i + ivec2(1, 1)), f - vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p)
{
 const mat2 m = mat2(1.6, 1.2, - 1.2, 1.6);
 float f = 0.0;
 float s = 0.5;
 for(int i = 0; i < 6; i ++)
  {
   f += s * noise(p);
   p = m * p;
   s = 0.5 * s;
  }
 return f;
}
float sdLine(vec2 p, vec2 a, vec2 b)
{
 vec2 pa = p - a;
 vec2 ba = b - a;
 float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
 return length(pa - h * ba);
}
vec2 altitude(vec2 c, vec2 a, vec2 b)
{
 vec2 w = b - a;
 return a + w * dot(c - a, w) / dot(w, w);
}
float cro(vec2 a, vec2 b)
{
 return a.x * b.y - a.y * b.x;
}
vec2 intersect(vec2 a1, vec2 b1, vec2 a2, vec2 b2)
{
 float h = cro(a1 - a2, b1 - a1) / cro(b2 - a2, b1 - a1);
 return a2 + (b2 - a2) * h;
}
vec3 blackboard(vec2 fragCoord)
{
 vec2 p = (2.0 * fragCoord - iResolution.xy) / iResolution.y;
 vec2 q = fragCoord / iResolution.xy;
 float v = sqrt(16.0 * q.x * q.y * (1.0 - q.x) * (1.0 - q.y));
 vec3 col = vec3(0.1 + 0.05 * v);
 col += 0.05 * fbm(p * 1.25 * vec2(1.0, 4.0));
 col += 0.02 * fbm(p * 20.0);
 vec2 ce_flattened_block_1 = vec2(2.0, - 10.0);
 vec2 w_flattened_block_1 = 2.5 * p - ce_flattened_block_1;
 w_flattened_block_1 = vec2(atan(w_flattened_block_1.y, w_flattened_block_1.x), length(w_flattened_block_1));
 float ff_flattened_block_1 = fbm(w_flattened_block_1 * 2.0 * vec2(1.0, 1.0));
 float fa_flattened_block_1 = smoothstep(1.5, 1.0, abs(w_flattened_block_1.y + ce_flattened_block_1.y - 0.7));
 fa_flattened_block_1 *= smoothstep(0.4, 0.2, abs(w_flattened_block_1.x - 1.8 + 0.5 * ff_flattened_block_1));
 col += v * 0.06 * smoothstep(- 0.5, 0.5, ff_flattened_block_1) * fa_flattened_block_1;
 float m = 0.0;
 float m2 = 0.0;
 for(int i = 0; i < 20; i ++)
  {
   vec2 p1 = vec2(3.0, 2.0) * sin(float(i) * 1.3 + vec2(0, 1));
   vec2 p2 = p1 + vec2(0.5, 2.0) * sin(float(i) * 11.1 + vec2(2, 4));
   float d = sdLine(2.5 * p + 0.5 * sin(2.5 * p + float(i) * vec2(1.7, 2.3)), p1, p2);
   d += 0.1 * fbm(1.25 * p);
   float ww = fbm(1.75 * p);
   m = max(m, smoothstep(0.05, 0.0, d));
   m2 = max(m2, smoothstep(0.2, - 0.2, d - abs(ww)));
  }
 col += v * 0.01 * m;
 col += v * 0.025 * m2;
 col += col.x * col.x * 0.75 * smoothstep(- 0.2, 0.2, fbm(p * 82.0));
 return col;
}
vec3 chalk(vec3 col, vec2 fragCoord)
{
 vec2 p1 = vec2(2.25 + 0.70 * sin(1.3 * iTime), 0.0);
 p1.y = 1.0 / p1.x;
 vec2 p2 = vec2(- 1.4 + 0.40 * sin(1.1 * iTime), 0.0);
 p2.y = 1.0 / p2.x;
 vec2 p3 = vec2(0.35 + 0.02 * sin(1.9 * iTime), 0.0);
 p3.y = 1.0 / p3.x;
 vec2 p = (2.0 * fragCoord - iResolution.xy) / iResolution.y;
 p *= 3.0;
 p -= vec2(- 0.3, - 0.7);
 float gf = 0.6;
 gf *= 0.9 + 0.2 * smoothstep(- 0.2, 0.2, fbm(p.yx * 10.0));
 float d = 0.0;
 if(abs(p.x) > 0.1)
  {
   float x = p.x;
   float y = 1.0 / x;
   float dy = - 1.0 / (x * x);
   d = abs(p.y - y) / sqrt(1.0 + dy * dy);
   d += 0.03 * fbm(p * 2.5);
   col = mix(col, 1.2 * 1.3 * vec3(160, 140, 80) / 255.0, gf * (1.0 - smoothstep(0.01, 0.03, d)));
  }
 d = sdLine(p, vec2(0.0, - 10.0), vec2(0.0, 3.4));
 d = min(d, sdLine(p, vec2(- 10.0, 0.0), vec2(5.2, 0.0)));
 d = min(d, sdLine(vec2(abs(p.x), p.y), vec2(0.07, 3.2), vec2(0.0, 3.4)));
 d = min(d, sdLine(vec2(p.x, abs(p.y)), vec2(5.0, 0.07), vec2(5.2, 0.0)));
 d += 0.02 * fbm(p * 2.5);
 col = mix(col, 1.2 * 1.1 * vec3(120, 90, 64) / 255.0, gf * (1.0 - smoothstep(0.01, 0.03, d)));
 d = sdLine(p, p1, p2);
 d = min(d, sdLine(p, p2, p3));
 d = min(d, sdLine(p, p3, p1));
 d += 0.03 * fbm(p * 2.5);
 col = mix(col, 1.2 * 1.4 * vec3(110, 150, 65) / 255.0, gf * (1.0 - smoothstep(0.01, 0.03, d)));
 vec2 q1 = altitude(p1, p2, p3);
 vec2 q2 = altitude(p2, p3, p1);
 vec2 q3 = altitude(p3, p1, p2);
 d = sdLine(p, p1, q1);
 d = min(d, sdLine(p, p2, q2));
 d = min(d, sdLine(p, p3, q3));
 vec2 o1 = normalize(p1 - q1) * 0.18;
 vec2 o2 = normalize(p2 - q2) * 0.18;
 vec2 o3 = normalize(p3 - q3) * 0.18;
 d = min(d, sdLine(p, q1 + vec2(o1.x + o1.y, o1.y - o1.x), q1 + vec2(o1.x, o1.y)));
 d = min(d, sdLine(p, q1 + vec2(o1.x + o1.y, o1.y - o1.x), q1 + vec2(o1.y, - o1.x)));
 d = min(d, sdLine(p, q2 + vec2(o2.x + o2.y, o2.y - o2.x), q2 + vec2(o2.x, o2.y)));
 d = min(d, sdLine(p, q2 + vec2(o2.x + o2.y, o2.y - o2.x), q2 + vec2(o2.y, - o2.x)));
 d = min(d, sdLine(p, q3 + vec2(o3.x + o3.y, o3.y - o3.x), q3 + vec2(o3.x, o3.y)));
 d = min(d, sdLine(p, q3 + vec2(o3.x + o3.y, o3.y - o3.x), q3 + vec2(o3.y, - o3.x)));
 d += 0.03 * fbm(p * 2.5);
 col = mix(col, 1.2 * 1.25 * vec3(70, 100, 70) / 255.0, gf * (1.0 - smoothstep(0.01, 0.03, d)));
 vec2 pc = intersect(p1, q1, p2, q2);
 d = length(p - pc) - 0.08;
 d += 0.05 * fbm((p - pc) * 8.0);
 col = mix(col, 1.1 * vec3(140, 200, 60) / 255.0, (1.0 - smoothstep(0.01, 0.03, d)));
 d = min(min(length(p - p1), length(p - p2)), length(p - p3)) - 0.06;
 d += 0.07 * fbm(p * 4.0);
 col = mix(col, 1.1 * vec3(255, 240, 8) / 255.0, (1.0 - smoothstep(0.01, 0.03, d)));
 return col;
}
void main()
{
 vec3 col = blackboard(gl_FragCoord.xy);
 col = chalk(col, gl_FragCoord.xy);
 fragColor = vec4(col, 1.0);
 fragColor.w = 1.0;
}
