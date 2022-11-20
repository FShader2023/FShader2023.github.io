#version 300 es
precision highp float;

layout(location = 0) out vec4 fragColor;

uniform vec2 iResolution;

uniform float iTime;

uniform float iTimeDelta;

uniform vec4 iMouse;

uniform int iFrame;

float remap01(float a, float b, float t)
{
 return clamp((t - a) / (b - a), 0., 1.);
}
float remap(float a, float b, float c, float d, float t)
{
 return clamp((t - a) / (b - a), 0., 1.) * (d - c) + c;
}
vec2 within(vec2 uv, vec4 rect)
{
 return (uv - rect.xy) / (rect.zw - rect.xy);
}
vec4 Brow(vec2 uv, float smile)
{
 float offs = mix(.2, 0., smile);
 uv.y += offs;
 float y = uv.y;
 uv.y += uv.x * mix(.5, .8, smile) - mix(.1, .3, smile);
 uv.x -= mix(.0, .1, smile);
 uv -= .5;
 vec4 col = vec4(0.);
 float blur = .1;
 float d1 = length(uv);
 float s1 = smoothstep(.45, .45 - blur, d1);
 float d2 = length(uv - vec2(.1, - .2) * .7);
 float s2 = smoothstep(.5, .5 - blur, d2);
 float browMask = clamp(s1 - s2, 0., 1.);
 float colMask = remap01(.7, .8, y) * .75;
 colMask *= smoothstep(.6, .9, browMask);
 colMask *= smile;
 vec4 browCol = mix(vec4(.4, .2, .2, 1.), vec4(1., .75, .5, 1.), colMask);
 uv.y += .15 - offs * .5;
 blur += mix(.0, .1, smile);
 d1 = length(uv);
 s1 = smoothstep(.45, .45 - blur, d1);
 d2 = length(uv - vec2(.1, - .2) * .7);
 s2 = smoothstep(.5, .5 - blur, d2);
 float shadowMask = clamp(s1 - s2, 0., 1.);
 col = mix(col, vec4(0., 0., 0., 1.), smoothstep(.0, 1., shadowMask) * .5);
 col = mix(col, browCol, smoothstep(.2, .4, browMask));
 return col;
}
vec4 Eye(vec2 uv, float side, vec2 m, float smile)
{
 uv -= .5;
 uv.x *= side;
 float d = length(uv);
 vec4 irisCol = vec4(.3, .5, 1., 1.);
 vec4 col = mix(vec4(1.), irisCol, smoothstep(.1, .7, d) * .5);
 col.a = smoothstep(.5, .48, d);
 col.rgb *= 1. - smoothstep(.45, .5, d) * .5 * clamp(- uv.y - uv.x * side, 0., 1.);
 d = length(uv - m * .4);
 col.rgb = mix(col.rgb, vec3(0.), smoothstep(.3, .28, d));
 irisCol.rgb *= 1. + smoothstep(.3, .05, d);
 float irisMask = smoothstep(.28, .25, d);
 col.rgb = mix(col.rgb, irisCol.rgb, irisMask);
 d = length(uv - m * .45);
 float pupilSize = mix(.4, .16, smile);
 float pupilMask = smoothstep(pupilSize, pupilSize * .85, d);
 pupilMask *= irisMask;
 col.rgb = mix(col.rgb, vec3(0.), pupilMask);
 float t = iTime * 3.;
 vec2 offs = vec2(sin(t + uv.y * 25.), sin(t + uv.x * 25.));
 offs *= .01 * (1. - smile);
 uv += offs;
 float highlight = smoothstep(.1, .09, length(uv - vec2(- .15, .15)));
 highlight += smoothstep(.07, .05, length(uv + vec2(- .08, .08)));
 col.rgb = mix(col.rgb, vec3(1.), highlight);
 return col;
}
vec4 Mouth(vec2 uv, float smile)
{
 uv -= .5;
 vec4 col = vec4(.5, .18, .05, 1.);
 uv.y *= 1.5;
 uv.y -= uv.x * uv.x * 2. * smile;
 uv.x *= mix(2.5, 1., smile);
 float d = length(uv);
 col.a = smoothstep(.5, .48, d);
 vec2 tUv = uv;
 tUv.y += (abs(uv.x) * .5 + .1) * (1. - smile);
 float td = length(tUv - vec2(0., .6));
 vec3 toothCol = vec3(1.) * smoothstep(.6, .35, d);
 col.rgb = mix(col.rgb, toothCol, smoothstep(.4, .37, td));
 td = length(uv + vec2(0., .5));
 col.rgb = mix(col.rgb, vec3(1., .5, .5), smoothstep(.5, .2, td));
 return col;
}
vec4 Head(vec2 uv)
{
 vec4 col = vec4(.9, .65, .1, 1.);
 float d = length(uv);
 col.a = smoothstep(.5, .49, d);
 float edgeShade = remap01(.35, .5, d);
 edgeShade *= edgeShade;
 col.rgb *= 1. - edgeShade * .5;
 col.rgb = mix(col.rgb, vec3(.6, .3, .1), smoothstep(.47, .48, d));
 float highlight = smoothstep(.41, .405, d);
 highlight *= remap(.41, - .1, .75, 0., uv.y);
 highlight *= smoothstep(.18, .19, length(uv - vec2(.21, .08)));
 col.rgb = mix(col.rgb, vec3(1.), highlight);
 d = length(uv - vec2(.25, - .2));
 float cheek = smoothstep(.2, .01, d) * .4;
 cheek *= smoothstep(.17, .16, d);
 col.rgb = mix(col.rgb, vec3(1., .1, .1), cheek);
 return col;
}
vec4 Smiley(vec2 uv, vec2 m, float smile)
{
 vec4 col = vec4(0.);
 if(length(uv) < .5)
  {
   float side = sign(uv.x);
   uv.x = abs(uv.x);
   vec4 head = Head(uv);
   col = mix(col, head, head.a);
   if(length(uv - vec2(.2, .075)) < .175)
    {
     vec4 eye = Eye(within(uv, vec4(.03, - .1, .37, .25)), side, m, smile);
     col = mix(col, eye, eye.a);
    }
   if(length(uv - vec2(.0, - .15)) < .3)
    {
     vec4 mouth = Mouth(within(uv, vec4(- .3, - .43, .3, - .13)), smile);
     col = mix(col, mouth, mouth.a);
    }
   if(length(uv - vec2(.185, .325)) < .18)
    {
     vec4 brow = Brow(within(uv, vec4(.03, .2, .4, .45)), smile);
     col = mix(col, brow, brow.a);
    }
  }
 return col;
}
void main()
{
 float t = iTime;
 vec2 uv = gl_FragCoord.xy / iResolution.xy;
 uv -= .5;
 uv.x *= iResolution.x / iResolution.y;
 vec2 m = iMouse.xy / iResolution.xy;
 m -= .5;
 if(m.x < - .49 && m.y < - .49)
  {
   float s = sin(t * .5);
   float c = cos(t * .38);
   m = vec2(s, c) * .4;
  }
 if(length(m) > .707)
  {
   m *= 0.;
  }
 float d = dot(uv, uv);
 uv -= m * clamp(.23 - d, 0., 1.);
 float smile = sin(t * .5) * .5 + .5;
 fragColor = Smiley(uv, m, smile);
 fragColor.w = 1.0;
}
