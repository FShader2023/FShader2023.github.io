#version 300 es
precision highp float;

layout(location = 0) out vec4 fragColor;

uniform vec2 iResolution;

uniform float iTime;

uniform float iTimeDelta;

uniform vec4 iMouse;

uniform int iFrame;

float stretch, gunsUp, gunsForward, edWalk, edTwist, edDown, edShoot, doorOpen, glow = 0.0;

struct MarchData {
 float d;
 vec3 mat;
 float specPower;
} ;

mat2 rot(float a)
{
 float c = cos(a);
 float s = sin(a);
 return mat2(c, s, - s, c);
}
float remap(float f, float in1, float in2, float out1, float out2)
{
 return mix(out1, out2, clamp((f - in1) / (in2 - in1), 0., 1.));
}
float sdBox(vec3 p, vec3 b)
{
 vec3 q = abs(p) - b;
 return length(max(q, 0.)) + min(max(q.x, max(q.y, q.z)), 0.);
}
float sdChamferedCube(vec3 p, vec3 r, float c)
{
 float cube = sdBox(p, r);
 p.xz *= rot(.78525);
 r.xz *= - c / 1.41 + 1.41;
 return max(cube, sdBox(p, r));
}
float sdTriPrism(vec3 p, vec2 h)
{
 vec3 q = abs(p);
 return max(q.z - h.y, max(q.x * .866025 + p.y * .5, - p.y) - h.x * .5);
}
float sdCappedCone(vec3 p, vec3 a, vec3 b, float ra, float rb)
{
 float rba = rb - ra;
 float baba = dot(b - a, b - a);
 float papa = dot(p - a, p - a);
 float paba = dot(p - a, b - a) / baba;
 float x = sqrt(papa - paba * paba * baba);
 float cax = max(0., x - ((paba < .5) ? ra : rb));
 float cay = abs(paba - .5) - .5;
 float f = clamp((rba * (x - ra) + paba * baba) / (rba * rba + baba), 0., 1.);
 float cbx = x - ra - f * rba;
 float cby = paba - f;
 return ((cbx < 0. && cay < 0.) ? - 1. : 1.) * sqrt(min(cax * cax + cay * cay * baba, cbx * cbx + cby * cby * baba));
}
float sdCappedCylinder(vec3 p, float h, float r)
{
 vec2 d = abs(vec2(length(p.xy), p.z)) - vec2(h, r);
 return min(max(d.x, d.y), 0.) + length(max(d, 0.));
}
float sdCapsule(vec3 p, vec3 a, vec3 b, float r)
{
 vec3 pa = p - a;
 vec3 ba = b - a;
 return length(pa - ba * clamp(dot(pa, ba) / dot(ba, ba), 0., 1.)) - r;
}
float sdOctogon(vec2 p, float r)
{
 const vec3 k = vec3(- .92387953, .38268343, .41421356);
 p = abs(p);
 p -= 2. * min(dot(k.xy, p), 0.) * k.xy;
 p -= 2. * min(dot(vec2(- k.x, k.y), p), 0.) * vec2(- k.x, k.y);
 p -= vec2(clamp(p.x, - k.z * r, k.z * r), r);
 return length(p) * sign(p.y);
}
vec3 getRayDir(vec3 ro, vec3 lookAt, vec2 uv)
{
 vec3 forward = normalize(lookAt - ro);
 vec3 right = normalize(cross(vec3(0, 1, 0), forward));
 return normalize(forward + right * uv.x + cross(forward, right) * uv.y);
}
MarchData minResult(MarchData a, MarchData b)
{
 if(a.d < b.d)
  {
   return a;
  }
 return b;
}
void setBodyMaterial(inout MarchData mat)
{
 mat.mat = vec3(.36, .45, .5);
 mat.specPower = 30.;
}
float legWalkAngle(float f)
{
 return sin(edWalk * 3.141 * 6. * f) * .2;
}
float edZ()
{
 return mix(5., - 2., edWalk);
}
float fireShock()
{
 return abs(sin(edShoot * 78.5375));
}
float headSphere(vec3 p)
{
 return (length(p / vec3(1, .8, 1)) - 1.) * .8;
}
MarchData headVisor(vec3 p, float h, float bump)
{
 bump *= sin(p.x * 150.) * sin(p.y * 150.) * .002;
 MarchData result;
 result.d = sdBox(p, vec3(1, h, 2));
 result.d = max(mix(result.d, headSphere(p), .57), - p.y) - bump;
 result.mat = vec3(.05);
 result.specPower = 30.;
 return result;
}
MarchData headLower(vec3 p)
{
 vec3 op = p;
 MarchData r = headVisor(p * vec3(.95, - 1.4, .95), 1., 0.);
 r.d = min(r.d, max(max(headVisor((p + vec3(0, .01, 0)) * vec3(.95), 1., 0.).d, p.y - .35), p.y * .625 - p.z - .66));
 p.xy *= rot(.075 * (gunsUp - 1.) * sign(p.x));
 p.x = abs(p.x) - 1.33;
 p.y -= .1 - p.x * .1;
 r.d = min(r.d, sdBox(p, vec3(.4, .06 * (1. - p.x), .3 - p.x * .2)));
 p = op;
 p.y = abs(abs(p.y + .147) - .0556) - .0278;
 r.d = max(r.d, - sdBox(p + vec3(0, 0, 1.5), vec3(mix(.25, .55, - op.y), .015, .1)));
 p = op;
 p.y = abs(p.y + .16) - .06;
 p.z -= - 1.1;
 r.d = max(r.d, - max(max(sdCappedCylinder(p.xzy, 1., .03), - sdCappedCylinder(p.xzy, .55, 1.)), p.z + .2));
 setBodyMaterial(r);
 return r;
}
MarchData gunPod(vec3 p)
{
 MarchData r;
 setBodyMaterial(r);
 p.yz += vec2(.1, .45);
 vec3 pp = p;
 pp.z = abs(pp.z) - .5;
 r.d = sdCappedCone(pp, vec3(0), vec3(0, 0, - .1), .35 - .1, .35);
 r.d = min(r.d, sdCappedCylinder(p, .35, .4));
 pp = vec3(p.x, .28 - p.y, p.z);
 r.d = min(r.d, sdTriPrism(pp, vec2(.1, .5)));
 pp = p;
 pp.x = abs(p.x);
 pp.xy *= rot(.78525);
 float fs;
 float bump = sign(sin(pp.z * 33.3)) * .003;
 float d = sdBox(pp, vec3(.1 - bump, .38 - bump, .34)) - .02;
 pp = p - vec3(0, 0, - .6);
 pp.x = abs(pp.x) - .1;
 d = min(min(min(d, sdCappedCylinder(pp, .06, .15)), sdCappedCylinder(pp + vec3(0, .12, - .05), .06, .05)), sdBox(p + vec3(0, 0, .54), vec3(.1, .06, .04)));
 if(d < r.d)
  {
   d = max(d, - sdCappedCylinder(pp + vec3(0, 0, .1), .03, .2));
   r.d = d;
   r.mat = vec3(.02);
  }
 fs = fireShock();
 if(fs > .5)
  {
   d = sdCappedCylinder(pp, .01 + pp.z * .05, fract(fs * 3322.423) * .5 + .9);
   if(d < r.d)
    {
     r.d = d;
     r.mat = vec3(1);
     glow += .1 / (.01 + d * d * 4e2);
    }
  }
 return r;
}
MarchData arms(vec3 p)
{
 const vec3 wrist = vec3(1.5, 0, 0) - vec3(0, 0, .3);
 MarchData r;
 setBodyMaterial(r);
 p.x = abs(p.x);
 p.yz += vec2(.24, 0);
 p.xy *= rot(.15 * (gunsUp - 1.));
 r.d = min(sdCapsule(p, vec3(0), vec3(1.5, 0, 0), .2), sdCapsule(p, vec3(1.5, 0, 0), wrist, .2));
 p -= wrist;
 p.z -= gunsForward * .15;
 return minResult(r, gunPod(p));
}
float toe(vec3 p)
{
 p.yz += vec2(.1, .32);
 return max(sdBox(p, vec3(.3 + .2 * (p.z - .18) - p.y * .228, .3 + .2 * cos((p.z - .18) * 3.69), .35)), .1 - p.y);
}
float foot(vec3 p)
{
 p.z += .8;
 p.yz *= rot(.86);
 float d = toe(p);
 p.xz *= rot(1.57);
 p.x -= .43;
 p.z = .25 - abs(p.z);
 return min(d, toe(p));
}
MarchData waist(vec3 p)
{
 MarchData r;
 setBodyMaterial(r);
 p.y += .65;
 p.yz *= rot(- .2);
 float bump;
 float d;
 float legAngle = legWalkAngle(1.);
 p.xy *= rot(legAngle * .3);
 vec3 pp = p;
 pp.y += .3;
 r.d = max(sdCappedCylinder(pp.zyx, .5, .5), p.y + .15);
 bump = .5 - abs(sin(p.y * 40.)) * .03;
 d = sdBox(p, vec3(bump, .15, bump));
 bump = .3 - abs(sin(p.x * 40.)) * .03;
 pp.y += .18;
 d = min(d, sdCappedCylinder(pp.zyx, bump, .75));
 pp.x = abs(pp.x);
 pp.yz *= rot(- .58525 + legAngle * sign(p.x));
 pp.x -= .98;
 r.d = min(r.d, max(sdCappedCylinder(pp.zyx, .4, .24), - pp.y));
 r.d = min(r.d, sdBox(pp, vec3(.24, .2, .14 + .2 * pp.y)));
 p = pp;
 pp.xz = abs(pp.xz) - vec2(.12, .25);
 r.d = min(r.d, max(min(sdCappedCylinder(pp.xzy, .1, .325), sdCappedCylinder(pp.xzy, .05, .5)), pp.y));
 p.y += .68;
 r.d = min(r.d, sdBox(p, vec3(sign(abs(p.y) - .04) * .005 + .26, .2, .34)));
 if(d < r.d)
  {
   r.d = d;
   r.mat = vec3(.02);
  }
 return r;
}
MarchData legs(vec3 p)
{
 MarchData r;
 setBodyMaterial(r);
 float silver;
 float legAngle = legWalkAngle(1.);
 p.z += .27;
 p.yz *= rot(legAngle * sign(p.x));
 p.z -= .27;
 p.y += .65;
 p.yz *= rot(- .2);
 p.xy *= rot(legAngle * .3);
 vec3 cp;
 vec3 pp = p;
 pp.x = abs(pp.x);
 pp.y += .48;
 pp.yz *= rot(- .58525);
 pp.x -= .98;
 cp = pp;
 p = pp;
 pp.xz = abs(pp.xz) - vec2(.12, .25);
 p.y += .68;
 p.xy = abs(p.xy) - .12;
 silver = sdBox(p, vec3(.07, .05, 1.2));
 cp -= vec3(0, - .7, 0);
 r.d = sdBox(cp - vec3(0, 0, 1.15), vec3(.17, .17, .07)) - .04;
 cp.z ++;
 r.d = min(r.d, sdChamferedCube(cp.xzy, vec2(.28 - sign(abs(cp.z) - .3) * .01, .5).xyx, .18));
 r.d = min(r.d, foot(cp));
 if(silver < r.d)
  {
   r.d = silver;
   r.mat = vec3(.8);
  }
 return r;
}
MarchData ed209(vec3 p)
{
 p.yz += vec2(legWalkAngle(2.) * .2 + .1, - edZ());
 MarchData r = legs(p);
 float f = min(stretch * 2., 1.);
 float slide = f < .5 ? smoothstep(0., .5, f) : (1. - smoothstep(.5, 1., f) * .2);
 p.yz -= slide * .5;
 gunsUp = smoothstep(0., 1., clamp((stretch - .66) * 6., 0., 1.));
 gunsForward = smoothstep(0., 1., clamp((stretch - .83) * 6., 0., 1.)) + fireShock() * .5;
 r = minResult(r, waist(p));
 p.yz *= rot(.1 * (- edDown + legWalkAngle(2.) + smoothstep(0., 1., clamp((stretch - .5) * 6., 0., 1.)) - 1.));
 p.xz *= rot(edTwist * .2);
 return minResult(minResult(minResult(r, headLower(p)), headVisor(p, .8, 1.)), arms(p));
}
MarchData room(vec3 p)
{
 const vec3 frameInner = vec3(2.8, 2.6, .1);
 MarchData r;
 r.mat = vec3(.4);
 r.specPower = 1e7;
 vec2 xy = p.xy - vec2(0, 2);
 p.x = abs(p.x);
 p.yz += vec2(.5, - 3.4);
 float doorFrame;
 float doorWidth;
 float door;
 float d;
 float doorHole = sdBox(p, frameInner + vec3(0, 0, 1));
 float backWall = length(p.z - 8.);
 r.d = min(backWall, max(length(p.z), - doorHole + .1));
 if(r.d == backWall)
  {
   float ocp = min(abs(sdOctogon(xy, 2.6)), abs(sdOctogon(xy, 1.9)));
   ocp = min(max(ocp, min(.7 - abs(xy.x + 1.2), - xy.y)), max(abs(sdOctogon(xy, 1.2)), min(xy.x, .7 - abs(xy.y))));
   if(ocp < .3)
    {
     r.mat = vec3(.39, .57, .71);
    }
  }
 doorFrame = max(sdBox(p, frameInner + vec3(.4, .4, .1)), - doorHole);
 doorWidth = frameInner.x * .5;
 p.x -= frameInner.x;
 p.xz *= rot(doorOpen * 2.1);
 p.x += doorWidth;
 door = sdBox(p, vec3(doorWidth, frameInner.yz));
 p = abs(p) - vec3(doorWidth * .5, 1.1, .14);
 d = min(doorFrame, max(door, - max(sdBox(p, vec3(.45, .9, .1)), - sdBox(p, vec3(.35, .8, 1)))));
 if(d < r.d)
  {
   r.d = d;
   r.mat = vec3(.02, .02, .024);
   r.specPower = 10.;
  }
 return r;
}
MarchData map(vec3 p)
{
 MarchData r = minResult(room(p), ed209(p));
 float gnd = length(p.y + 3.);
 if(gnd < r.d)
  {
   r.d = gnd;
   r.mat = vec3(.1);
  }
 return r;
}
float calcShadow(vec3 p, vec3 lightPos)
{
 vec3 rd = normalize(lightPos - p);
 float res = 1.;
 float t = .1;
 for(float i = 0.; i < 30.; i ++)
  {
   float h = map(p + rd * t).d;
   res = min(res, 12. * h / t);
   t += h;
   if(res < .001 || t > 25.)
    {
     break;
    }
  }
 return clamp(res, 0., 1.);
}
vec3 calcNormal(vec3 p, float t)
{
 float d = .01 * t * .33;
 vec2 e = vec2(1, - 1) * .5773 * d;
 return normalize(e.xyy * map(p + e.xyy).d + e.yyx * map(p + e.yyx).d + e.yxy * map(p + e.yxy).d + e.xxx * map(p + e.xxx).d);
}
float ao(vec3 p, vec3 n, float h)
{
 return map(p + h * n).d / h;
}
vec3 vignette(vec3 col, vec2 fragCoord)
{
 vec2 q = fragCoord.xy / iResolution.xy;
 col *= .5 + .5 * pow(max(16. * q.x * q.y * (1. - q.x) * (1. - q.y), 1e-9), .4);
 return col;
}
vec3 applyLighting(vec3 p, vec3 rd, float d, MarchData data)
{
 vec3 sunDir = normalize(vec3(10, 10, - 10) - p);
 vec3 n = calcNormal(p, d);
 float primary = max(0., dot(sunDir, n));
 float bounce = max(0., dot(- sunDir, n)) * .2;
 float spe = pow(max(max(0., dot(rd, reflect(sunDir, n))), 1e-9), data.specPower) * 2.;
 float fre = smoothstep(.7, 1., 1. + dot(rd, n));
 float fog = exp(- length(p) * .05);
 primary *= mix(.2, 1., calcShadow(p, vec3(10, 10, - 10)));
 return mix(data.mat * ((primary + bounce) * ao(p, n, .33) + spe) * vec3(2, 1.6, 1.7), vec3(.01), fre) * fog;
}
vec3 getSceneColor(vec3 ro, vec3 rd)
{
 vec3 p;
 float g;
 float d = .01;
 MarchData h;
 for(float steps = 0.; steps < 120.; steps ++)
  {
   p = ro + rd * d;
   h = map(p);
   if(abs(h.d) < .0015 * d)
    {
     break;
    }
   if(d > 64.)
    {
     return vec3(0);
    }
   d += h.d;
  }
 g = glow;
 return applyLighting(p, rd, d, h) + fireShock() * .3 + g;
}
void main()
{
 edWalk = 1.;
 edTwist = 0.;
 edDown = 0.;
 edShoot = 0.;
 doorOpen = 1.;
 stretch = 1.;
 vec3 ro;
 vec3 lookAt;
 vec3 col;
 float startScene;
 float endScene;
 float dim;
 float time = mod(iTime + 4., 55.);
 if(time < 12.)
  {
   startScene = 0.;
   endScene = 12.;
   edWalk = 0.;
   ro = vec3(0, - 1.5, - .625);
   lookAt = vec3(0, - 1, edZ());
   doorOpen = smoothstep(0., 1., time / 5.);
   stretch = remap(time, 7., 10., 0., 1.);
  }
 else
  {
   if(time < 25.)
    {
     startScene = 12.;
     endScene = 25.;
     float t = time - startScene;
     edWalk = smoothstep(0., 1., remap(t, 3., 8., 0., 1.));
     ro = vec3(- .5 * cos(t * .7), .5 - t * .1, edZ() - 3.);
     lookAt = vec3(0, 0, edZ());
    }
   else
    {
     if(time < 29.)
      {
       startScene = 25.;
       endScene = 29.;
       ro = vec3(- 2, .5 + (time - startScene) * .1, edZ() - 3.);
       lookAt = vec3(0, 0, edZ());
      }
     else
      {
       if(time < 37.)
        {
         startScene = 29.;
         endScene = 37.;
         float t = time - startScene;
         ro = vec3(1.5, - 1. - t * .05, edZ() - 5.);
         lookAt = vec3(0, - 1, edZ());
         stretch = remap(t, 2., 5., 1., 0.);
        }
       else
        {
         if(time < 55.)
          {
           startScene = 37.;
           endScene = 55.;
           float t = time - startScene;
           ro = vec3(- 1.8, - .5, edZ() - 2.5);
           stretch = remap(t, 2., 3., 0., 1.) - remap(t, 11.5, 14.5, 0., 1.);
           lookAt = vec3(0, stretch * .5 - .5, edZ());
           edTwist = remap(t, 3., 3.2, 0., 1.) * stretch;
           edDown = remap(t, 3.2, 3.4, 0., 1.) * stretch;
           edShoot = t <= 9.5 ? remap(t, 4., 9.5, 0., 1.) : 0.;
          }
        }
      }
    }
  }
 dim = 1. - cos(min(1., 2. * min(abs(time - startScene), abs(time - endScene))) * 1.5705);
 col = vec3(0);
 vec2 coord = gl_FragCoord.xy;
 coord += (fract(fireShock() * vec2(23242.232, 978.23465)) - .5) * 10.;
 vec2 uv = (coord - .5 * iResolution.xy) / iResolution.y;
 col += getSceneColor(ro, getRayDir(ro, lookAt, uv));
 fragColor = vec4(vignette(pow(max(col * dim, 1e-9), vec3(.4545)), gl_FragCoord.xy), 1);
 fragColor.w = 1.0;
}
