#version 300 es
precision highp float;

layout(location = 0) out vec4 fragColor;

uniform vec2 iResolution;

uniform float iTime;

uniform float iTimeDelta;

uniform vec4 iMouse;

uniform int iFrame;

float time;

float box(vec3 p, vec3 r)
{
 p = abs(p) - r;
 return max(max(p.x, p.y), p.z);
}
float sphere(vec3 p, float r)
{
 return length(p) - r;
}
float torus(vec3 p, vec2 t)
{
 vec2 q = vec2(length(p.xz) - t.x, p.y);
 return length(q) - t.y;
}
float map(vec3 p)
{
 p = mod(p + vec3(2., 10., 5.), vec3(4., 20., 10.)) - vec3(2., 10., 5.);
 float mainBox = box(p, vec3(sin(iTime) / 2. + .5));
 float leftSphere = sphere(p + vec3(0, 0, 3), sin(iTime + 3.1415926538 * 2. / 3.) / 2. + .5);
 float rightTorus = torus(p - vec3(0, 0, 3), vec2(1., (sin(iTime + 3.1415926538 * 4. / 3.) / 2. + .5) * .5));
 float scene = min(mainBox, leftSphere);
 scene = min(scene, rightTorus);
 return scene;
}
float raycast(vec3 ro, vec3 rd)
{
 float dist;
 float res = 0.;
 for(int i = 0; i < 128; i ++)
  {
   dist = map(ro + rd * res);
   if(dist < .0001 || res > 120.)
    {
     break;
    }
   res += dist;
  }
 if(res > 120.)
  {
   res = 0.;
  }
 return res;
}
void main()
{
 vec2 uv = (gl_FragCoord.xy / iResolution.xy - 0.5) / vec2(iResolution.y / iResolution.x, 1);
 time = mod(iTime, 62.82);
 vec3 rayOrigin = vec3(cos(time * .2) * 5., 2, sin(time * .2) * 5.);
 vec3 cameraForward = normalize(vec3(0) - rayOrigin);
 vec3 cameraLeft = normalize(cross(cameraForward, vec3(0, 1, 0)));
 vec3 cameraUp = normalize(cross(cameraLeft, cameraForward));
 vec3 rayDirection = mat3(cameraLeft, cameraUp, cameraForward) * normalize(vec3(uv, .5));
 vec3 lightDirection = normalize(vec3(- .1, .4, - .3));
 vec3 backgroundColor = vec3(.1, .1, .1) - length(uv) * .1;
 vec3 color = backgroundColor;
 float result = raycast(rayOrigin, rayDirection);
 if(result > 0.)
  {
   vec3 hitPos = rayOrigin + rayDirection * result;
   vec2 e = vec2(.00035, - .00035);
   vec3 normals = normalize(e.xyy * map(hitPos + e.xyy) + e.yyx * map(hitPos + e.yyx) + e.yxy * map(hitPos + e.yxy) + e.xxx * map(hitPos + e.xxx));
   vec3 albedo = vec3(.0, .2, .4);
   float diffuse = max(0., dot(normals, lightDirection));
   float fresnel = pow(max(1. + dot(normals, rayDirection), 1e-9), 4.);
   float specular = pow(max(max(dot(reflect(- lightDirection, normals), - rayDirection), 0.), 1e-9), 30.);
   float ao = clamp(map(hitPos + normals * .05) / .05, 0., 1.);
   float sss = smoothstep(0., 1., map(hitPos + lightDirection * .4) / .4);
   if(specular < 1.)
    {
     color = mix(specular + albedo * (ao + .2) * (diffuse + sss * .1), backgroundColor, fresnel);
    }
   color = mix(backgroundColor, color, exp(- .002 * result * result * result));
  }
 fragColor = vec4(pow(max(color, 1e-9), vec3(.4545)), 1);
 fragColor.w = 1.0;
}
