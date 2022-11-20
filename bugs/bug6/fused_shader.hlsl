#include "header.hlsli"

#pragma warning( disable: 3556 3571 )
float2 vec2_ctor(float x0, float x1)
{
  return float2(x0, x1);
}
float2x2 mat2_ctor(float2 x0, float x1, float x2)
{
  return float2x2(x0, x1, x2);
}
float3 vec3_ctor(float x0)
{
  return float3(x0, x0, x0);
}
float3 vec3_ctor(float x0, float x1, float x2)
{
  return float3(x0, x1, x2);
}
float3 vec3_ctor(float2 x0, float x1)
{
  return float3(x0, x1);
}
float3 vec3_ctor(float3 x0)
{
  return float3(x0);
}
float3x3 mat3_ctor(float3 x0, float3 x1, float3 x2)
{
  return float3x3(x0, x1, x2);
}
float4 vec4_ctor(float3 x0, float x1)
{
  return float4(x0, x1);
}
// Uniforms

#ifdef ANGLE_ENABLE_LOOP_FLATTEN
#define LOOP [loop]
#define FLATTEN [flatten]
#else
#define LOOP
#define FLATTEN
#endif

#define ATOMIC_COUNTER_ARRAY_STRIDE 4

// Varyings

static float4 out_fragColor = {0, 0, 0, 0};
static float4 gl_FragCoord = float4(0, 0, 0, 0);


#define GL_USES_FRAG_COORD
float mod_emu(float x, float y)
{
  return x - y * floor(x / y);
}


static float4 _fragColor_1 = {0, 0, 0, 0};
static float4 _fragColor_2 = {0, 0, 0, 0};
float f_hash(in float _n)
{
  return frac((sin(_n) * 687.31232));
}
float f_noise(in float2 _x)
{
  float2 _p5618 = floor(_x);
  float2 _f5619 = frac(_x);
  _f5619 = ((_f5619 * _f5619) * (3.0 - (2.0 * _f5619)));
  float _n5620 = (_p5618.x + (_p5618.y * 157.0));
  return lerp(lerp(f_hash((_n5620 + 0.0)), f_hash((_n5620 + 1.0)), _f5619.x), lerp(f_hash((_n5620 + 157.0)), f_hash((_n5620 + 158.0)), _f5619.x), _f5619.y);
}
float f_fbm(in float2 _p)
{
  float _f5624 = {0.0};
  _f5624 += (0.5 * f_noise(_p));
  _p = (mul(transpose(float2x2(0.80000001, -0.60000002, 0.60000002, 0.80000001)), _p) * 2.02);
  _f5624 += (0.25 * f_noise(_p));
  _p = (mul(transpose(float2x2(0.80000001, -0.60000002, 0.60000002, 0.80000001)), _p) * 2.03);
  _f5624 += (0.125 * f_noise(_p));
  _p = (mul(transpose(float2x2(0.80000001, -0.60000002, 0.60000002, 0.80000001)), _p) * 2.01);
  return (_f5624 / 0.9375);
}
float f_udRoundBox(in float3 _p, in float3 _b, in float _r)
{
  return (length(max((abs(_p) - _b), 0.0)) - _r);
}
float f_sdBox(in float3 _p, in float3 _b)
{
  float3 _d5632 = (abs(_p) - _b);
  return (min(max(_d5632.x, max(_d5632.y, _d5632.z)), 0.0) + length(max(_d5632, 0.0)));
}
float f_sdSphere(in float3 _p, in float _s)
{
  return (length(_p) - _s);
}
float f_sdCylinder(in float3 _p, in float2 _h)
{
  float2 _d5639 = (abs(vec2_ctor(length(_p.xz), _p.y)) - _h);
  return (min(max(_d5639.x, _d5639.y), 0.0) + length(max(_d5639, 0.0)));
}
float f_opU(in float _d2, in float _d1)
{
  return min(_d1, _d2);
}
float f_opS(in float _d2, in float _d1)
{
  return max((-_d1), _d2);
}
float f_smin(in float _a, in float _b, in float _k)
{
  return ((-log((exp(((-_k) * _a)) + exp(((-_k) * _b))))) / _k);
}
float f_mapCar(in float3 _p0)
{
  float3 _p5652 = (_p0 + float3(0.0, 1.24, 0.0));
  float _r5653 = length(_p5652.yz);
  float _d5654 = (length(max(vec3_ctor((abs(_p5652.x) - 0.34999999), (_r5653 - 1.92), ((-_p5652.y) + 1.4)), 0.0)) - 0.050000001);
  _d5654 = max(_d5654, (_p5652.z - 1.0));
  _p5652 = (_p0 + float3(0.0, -0.22, 0.38999999));
  _p5652.xz = (abs(_p5652.xz) - float2(0.52999997, 0.95999998));
  _p5652.x = abs(_p5652.x);
  _r5653 = length(_p5652.yz);
  _d5654 = f_smin(_d5654, (length(max(vec3_ctor((_p5652.x - 0.079999998), (_r5653 - 0.25), ((-_p5652.y) - 0.079999998)), 0.0)) - 0.039999999), 8.0);
  _d5654 = max(_d5654, (-max((_p5652.x - 0.16500001), (_r5653 - 0.23999999))));
  float _d25655 = (length(vec2_ctor(max((_p5652.x - 0.13), 0.0), (_r5653 - 0.2))) - 0.02);
  _d5654 = min(_d5654, _d25655);
  return _d5654;
}
static float _dL = {0};
float f_map_1(const float3 _p)
{
  float3 _pd5659 = _p;
  float _d5660 = {0};
  _pd5659.x = abs(_pd5659.x);
  _pd5659.z *= (-sign(_p.x));
  float _ch5661 = f_hash(floor(((_pd5659.z + (18.0 * (iTime + 95.300003))) / 40.0)));
  float _lh5662 = f_hash(floor((_pd5659.z / 13.0)));
  float3 _pdm5663 = vec3_ctor(_pd5659.x, _pd5659.y, (mod_emu(_pd5659.z, 10.0) - 5.0));
  _dL = f_sdSphere(vec3_ctor((_pdm5663.x - 8.1000004), (_pdm5663.y - 4.5), _pdm5663.z), 0.1);
  _dL = f_opU(_dL, f_sdBox(vec3_ctor((_pdm5663.x - 12.0), ((_pdm5663.y - 9.5) - _lh5662), (mod_emu(_pd5659.z, 91.0) - 45.5)), float3(0.2, 4.5, 0.2)));
  _dL = f_opU(_dL, f_sdBox(vec3_ctor((_pdm5663.x - 12.0), ((_pdm5663.y - 11.5) + _lh5662), (mod_emu(_pd5659.z, 31.0) - 15.5)), float3(0.22, 5.5, 0.2)));
  _dL = f_opU(_dL, f_sdBox(vec3_ctor((_pdm5663.x - 12.0), ((_pdm5663.y - 8.5) - _lh5662), (mod_emu(_pd5659.z, 41.0) - 20.5)), float3(0.23999999, 3.5, 0.2)));
  if ((_lh5662 > 0.5))
  {
    _dL = f_opU(_dL, f_sdBox(vec3_ctor((_pdm5663.x - 12.5), ((_pdm5663.y - 2.75) - _lh5662), (mod_emu(_pd5659.z, 13.0) - 6.5)), float3(0.1, 0.25, 3.2)));
  }
  float3 _pm5664 = vec3_ctor((mod_emu((_pd5659.x + (floor((_pd5659.z * 4.0)) * 0.25)), 0.5) - 0.25), _pd5659.y, (mod_emu(_pd5659.z, 0.25) - 0.125));
  _d5660 = f_udRoundBox(_pm5664, float3(0.245, 0.1, 0.12), 0.0049999999);
  _d5660 = f_opS(_d5660, (-(_p.x + 8.0)));
  _d5660 = f_opU(_d5660, _pd5659.y);
  float3 _pdc5665 = vec3_ctor(_pd5659.x, _pd5659.y, (mod_emu((_pd5659.z + (18.0 * (iTime + 95.300003))), 40.0) - 20.0));
  if ((_ch5661 > 0.75))
  {
    _pdc5665.x += ((_ch5661 - 0.75) * 4.0);
    _dL = f_opU(_dL, f_sdSphere(vec3_ctor((abs((_pdc5665.x - 5.0)) - 1.05), (_pdc5665.y - 0.55000001), _pdc5665.z), 0.025));
    _dL = f_opU(_dL, f_sdSphere(vec3_ctor((abs((_pdc5665.x - 5.0)) - 1.2), (_pdc5665.y - 0.64999998), (_pdc5665.z + 6.0500002)), 0.025));
    _d5660 = f_opU(_d5660, f_mapCar(((_pdc5665 - float3(5.0, -0.025, -2.3)) * 0.44999999)));
  }
  _d5660 = f_opU(_d5660, (13.0 - _pd5659.x));
  _d5660 = f_opU(_d5660, f_sdCylinder(vec3_ctor((_pdm5663.x - 8.5), _pdm5663.y, _pdm5663.z), float2(0.075000003, 4.5)));
  _d5660 = f_opU(_d5660, _dL);
  return _d5660;
}
float3 f_calcNormalSimple(in float3 _pos)
{
  float3 _n5669 = normalize(((((float3(0.0049999999, -0.0049999999, -0.0049999999) * f_map_1((_pos + float3(0.0049999999, -0.0049999999, -0.0049999999)))) + (float3(-0.0049999999, -0.0049999999, 0.0049999999) * f_map_1((_pos + float3(-0.0049999999, -0.0049999999, 0.0049999999))))) + (float3(-0.0049999999, 0.0049999999, -0.0049999999) * f_map_1((_pos + float3(-0.0049999999, 0.0049999999, -0.0049999999))))) + (float3(0.0049999999, 0.0049999999, 0.0049999999) * f_map_1((_pos + float3(0.0049999999, 0.0049999999, 0.0049999999))))));
  return _n5669;
}
float3 f_calcNormal(in float3 _pos)
{
  float3 _n5672 = f_calcNormalSimple(_pos);
  if ((_pos.y > 0.12))
  {
    return _n5672;
  }
  float2 _oc5673 = floor((vec2_ctor((_pos.x + (floor((_pos.z * 4.0)) * 0.25)), _pos.z) * float2(2.0, 4.0)));
  if ((abs(_pos.x) < 8.0))
  {
    _oc5673 = _pos.xz;
  }
  float3 _p5674 = (_pos * 250.0);
  float3 _xn5675 = (0.050000001 * vec3_ctor((f_noise(_p5674.xz) - 0.5), 0.0, (f_noise(_p5674.zx) - 0.5)));
  _xn5675 += (0.1 * vec3_ctor((f_fbm(_oc5673.xy) - 0.5), 0.0, (f_fbm(_oc5673.yx) - 0.5)));
  _n5672 = normalize((_xn5675 + _n5672));
  return _n5672;
}
static float3 _int1 = {0, 0, 0};
static float3 _int2 = {0, 0, 0};
static float3 _nor1 = {0, 0, 0};
static float4 _lint1 = {0, 0, 0, 0};
static float4 _lint2 = {0, 0, 0, 0};
float f_intersect(in float3 _ro, in float3 _rd)
{
  float _h5685 = {0.0020000001};
  float _t5686 = {0.0};
  _int1 = (_int2 = float3(-500.0, -500.0, -500.0));
  _lint1 = (_lint2 = float4(-500.0, -500.0, -500.0, -500.0));
  float _mld5687 = {100.0};
  { for(int _i5688 = {0}; (_i5688 < 128); (_i5688++))
    {
      _h5685 = f_map_1((_ro + (_rd * _t5686)));
      if ((_dL < _mld5687))
      {
        _mld5687 = _dL;
        _lint1.xyz = (_ro + (_rd * _t5686));
        _lint1.w = abs(_dL);
      }
      if ((_h5685 < 0.001))
      {
        _int1.xyz = (_ro + (_rd * _t5686));
        break;
      }
      _t5686 += max(_h5685, 0.0020000001);
    }
  }
  if (((_int1.z < -400.0) || (_t5686 > 300.0)))
  {
    float _d5689 = ((-(_ro.y + 0.1)) / _rd.y);
    if ((_d5689 > 0.0))
    {
      _int1.xyz = (_ro + (_rd * _d5689));
    }
    else
    {
      return -1.0;
    }
  }
  _ro = (_ro + (_rd * _t5686));
  _nor1 = f_calcNormal(_ro);
  _ro += (0.0099999998 * _nor1);
  _rd = reflect(_rd, _nor1);
  _t5686 = 0.0;
  _h5685 = 0.0020000001;
  _mld5687 = 100.0;
  { for(int _i5690 = {0}; (_i5690 < 48); (_i5690++))
    {
      _h5685 = f_map_1((_ro + (_rd * _t5686)));
      if ((_dL < _mld5687))
      {
        _mld5687 = _dL;
        _lint2.xyz = (_ro + (_rd * _t5686));
        _lint2.w = abs(_dL);
      }
      if ((_h5685 < 0.001))
      {
        _int2.xyz = (_ro + (_rd * _t5686));
        return 1.0;
      }
      _t5686 += max(_h5685, 0.0020000001);
    }
  }
  return 0.0;
}
float3 f_shade(in float3 _ro, in float3 _pos, in float3 _nor)
{
  float3 _col5695 = {0.5, 0.5, 0.5};
  if (((abs(_pos.x) > 15.0) || (abs(_pos.x) < 8.0)))
  {
    _col5695 = float3(0.02, 0.02, 0.02);
  }
  if ((_pos.y < 0.0099999998))
  {
    if ((abs(_int1.x) < 0.1))
    {
      _col5695 = float3(0.89999998, 0.89999998, 0.89999998);
    }
    if ((abs((abs(_int1.x) - 7.4000001)) < 0.1))
    {
      _col5695 = float3(0.89999998, 0.89999998, 0.89999998);
    }
  }
  float _sh5696 = clamp(dot(_nor, float3(-0.45749575, 0.45749575, -0.7624929)), 0.0, 1.0);
  _col5695 *= (_sh5696 * float3(0.018000001, 0.036000002, 0.054000005));
  if (((abs(_pos.x) > 12.9) && (_pos.y > 9.0)))
  {
    float _ha5697 = f_hash(((133.1234 * floor((_pos.y / 3.0))) + floor((_pos.z / 3.0))));
    if ((_ha5697 > 0.94999999))
    {
      _col5695 = (((_ha5697 - 0.94999999) * 10.0) * float3(1.0, 0.69999999, 0.40000001));
    }
  }
  _col5695 = lerp(float3(0.018000001, 0.036000002, 0.054000005), _col5695, exp(min((max((0.1 * _pos.y), 0.25) - (0.064999998 * distance(_pos, _ro))), 0.0)));
  return _col5695;
}
float3 f_getLightColor(in float3 _pos)
{
  float3 _lcol5700 = {1.0, 0.69999999, 0.5};
  float3 _pd5701 = _pos;
  _pd5701.x = abs(_pd5701.x);
  _pd5701.z *= (-sign(_pos.x));
  float _ch5702 = f_hash(floor(((_pd5701.z + (18.0 * (iTime + 95.300003))) / 40.0)));
  float3 _pdc5703 = vec3_ctor(_pd5701.x, _pd5701.y, (mod_emu((_pd5701.z + (18.0 * (iTime + 95.300003))), 40.0) - 20.0));
  if ((_ch5702 > 0.75))
  {
    _pdc5703.x += ((_ch5702 - 0.75) * 4.0);
    if ((f_sdSphere(vec3_ctor((abs((_pdc5703.x - 5.0)) - 1.05), (_pdc5703.y - 0.55000001), _pdc5703.z), 0.25) < 2.0))
    {
      _lcol5700 = float3(1.0, 0.050000001, 0.0099999998);
    }
  }
  if ((((_pd5701.y > 2.0) && (abs(_pd5701.x) > 10.0)) && (_pd5701.y < 5.0)))
  {
    float _fl5704 = floor((_pd5701.z / 13.0));
    _lcol5700 = ((0.40000001 * _lcol5700) + (0.5 * vec3_ctor(f_hash((0.15620001 + _fl5704)), f_hash((0.423134 + _fl5704)), 0.0)));
  }
  if (((abs(_pd5701.x) > 10.0) && (_pd5701.y > 5.0)))
  {
    float _fl5705 = floor((_pd5701.z / 2.0));
    _lcol5700 = ((0.5 * _lcol5700) + (0.5 * vec3_ctor(f_hash((0.15620001 + _fl5705)), f_hash((0.92313403 + _fl5705)), f_hash((0.423134 + _fl5705)))));
  }
  return _lcol5700;
}
float f_randomStart(in float2 _co)
{
  return (0.80000001 + (0.2 * f_hash((dot(_co, float2(123.42, 117.853)) * 412.453))));
}
void f_main_1()
{
  float2 _q5709 = (gl_FragCoord.xy / iResolution.xy);
  float2 _p5710 = (-1.0 + (2.0 * _q5709));
  _p5710.x *= (iResolution.x / iResolution.y);
  if (((_q5709.y < 0.12) || (_q5709.y >= 0.88)))
  {
    _fragColor_1 = float4(0.0, 0.0, 0.0, 1.0);
    _fragColor_1.w = 1.0;
    return;
  }
  else
  {
    float _z5711 = (iTime + 95.300003);
    float _x5712 = (-10.9 + (1.0 * sin(((iTime + 95.300003) * 0.2))));
    float3 _ro5713 = vec3_ctor(_x5712, (1.3 + (0.30000001 * cos(((iTime + 95.300003) * 0.25999999)))), (_z5711 - 1.0));
    float3 _ta5714 = vec3_ctor(-8.0, (1.3 + (0.40000001 * cos(((iTime + 95.300003) * 0.25999999)))), ((_z5711 + 4.0) + cos(((iTime + 95.300003) * 0.039999999))));
    float3 _ww5715 = normalize((_ta5714 - _ro5713));
    float3 _uu5716 = normalize(cross(_ww5715, float3(0.0, 1.0, 0.0)));
    float3 _vv5717 = normalize(cross(_uu5716, _ww5715));
    float3 _rd5718 = normalize(((((-_p5710.x) * _uu5716) + (_p5710.y * _vv5717)) + (2.2 * _ww5715)));
    float3 _col5719 = {0.018000001, 0.036000002, 0.054000005};
    float _ints5720 = f_intersect((_ro5713 + (f_randomStart(_p5710) * _rd5718)), _rd5718);
    if ((_ints5720 > -0.5))
    {
      float _r5721 = {0.090000004};
      if ((_int1.y > 0.12899999))
      {
        _r5721 = (0.025 * f_hash(((133.1234 * floor((_int1.y / 3.0))) + floor((_int1.z / 3.0)))));
      }
      if ((abs(_int1.x) < 8.0))
      {
        if ((_int1.y < 0.0099999998))
        {
          _r5721 = (0.0070000002 * f_fbm(_int1.xz));
        }
        else
        {
          _r5721 = 0.02;
        }
      }
      if ((abs(_int1.x) < 0.1))
      {
        _r5721 *= 4.0;
      }
      if ((abs((abs(_int1.x) - 7.4000001)) < 0.1))
      {
        _r5721 *= 4.0;
      }
      _r5721 *= 2.0;
      _col5719 = f_shade(_ro5713, _int1.xyz, _nor1);
      if ((_ints5720 > 0.5))
      {
        _col5719 += (_r5721 * f_shade(_int1.xyz, _int2.xyz, f_calcNormalSimple(_int2.xyz)));
      }
      if ((_lint2.w > 0.0))
      {
        _col5719 += (((_r5721 * 5.0) * exp(((-_lint2.w) * 7.0))) * f_getLightColor(_lint2.xyz));
      }
    }
    float2 _st5722 = (256.0 * ((_p5710 * float2(0.5, 0.0099999998)) + vec2_ctor((((iTime + 95.300003) * 0.13) - (_q5709.y * 0.60000002)), ((iTime + 95.300003) * 0.13))));
    float _f5723 = ((f_noise(_st5722) * f_noise((_st5722 * 0.773))) * 1.55);
    _f5723 = (0.25 + clamp((pow(max(abs(_f5723), 9.9999997e-10), 13.0) * 13.0), 0.0, (_q5709.y * 0.14)));
    if ((_lint1.w > 0.0))
    {
      _col5719 += (((_f5723 * 5.0) * exp(((-_lint1.w) * 7.0))) * f_getLightColor(_lint1.xyz));
    }
    _col5719 += ((0.25 * _f5723) * float3(0.21800001, 0.236, 0.25400001));
    _col5719 = pow(max(clamp(_col5719, 0.0, 1.0), 9.9999997e-10), float3(0.45449999, 0.45449999, 0.45449999));
    _col5719 *= float3(1.2, 1.1880001, 1.14);
    _col5719 = clamp(((1.0599999 * _col5719) - 0.029999999), 0.0, 1.0);
    _q5709.y = ((_q5709.y - 0.12) * 1.3157895);
    _col5719 *= (0.5 + (0.5 * pow(max(((((16.0 * _q5709.x) * _q5709.y) * (1.0 - _q5709.x)) * (1.0 - _q5709.y)), 9.9999997e-10), 0.1)));
    _fragColor_1 = vec4_ctor(_col5719, 1.0);
  }
  _fragColor_1.w = 1.0;
}
float f_hash_5_2(in float2 _p)
{
  return frac(((10000.0 * sin(((17.0 * _p.x) + (_p.y * 0.1)))) * (0.1 + abs(sin(((_p.y * 13.0) + _p.x))))));
}
float f_noise_1_2(in float2 _x)
{
  float2 _i5728 = floor(_x);
  float2 _f5729 = frac(_x);
  float _a5730 = f_hash_5_2(_i5728);
  float _b5731 = f_hash_5_2((_i5728 + float2(1.0, 0.0)));
  float _c5732 = f_hash_5_2((_i5728 + float2(0.0, 1.0)));
  float _d5733 = f_hash_5_2((_i5728 + float2(1.0, 1.0)));
  float2 _u5734 = ((_f5729 * _f5729) * (3.0 - (2.0 * _f5729)));
  return ((lerp(_a5730, _b5731, _u5734.x) + (((_c5732 - _a5730) * _u5734.y) * (1.0 - _u5734.x))) + (((_d5733 - _b5731) * _u5734.x) * _u5734.y));
}
float f_fbm_3(in float2 _p)
{
  float _f5738 = (0.5 * f_noise_1_2(_p));
  _p = (mul(transpose(float2x2(0.80000001, -0.60000002, 0.60000002, 0.80000001)), _p) * 2.02);
  _f5738 += (0.25 * f_noise_1_2(_p));
  _p = (mul(transpose(float2x2(0.80000001, -0.60000002, 0.60000002, 0.80000001)), _p) * 2.03);
  _f5738 += (0.125 * f_noise_1_2(_p));
  _p = (mul(transpose(float2x2(0.80000001, -0.60000002, 0.60000002, 0.80000001)), _p) * 2.01);
  _f5738 += (0.0625 * f_noise_1_2(_p));
  return _f5738;
}
float f_sdSphere_2(in float3 _p, in float _s)
{
  return (length(_p) - _s);
}
float f_sdCapsule(in float3 _p, in float3 _a, in float3 _b, in float _r)
{
  float3 _pa5747 = (_p - _a);
  float3 _ba5748 = (_b - _a);
  float _h5749 = clamp((dot(_pa5747, _ba5748) / dot(_ba5748, _ba5748)), 0.0, 1.0);
  return (length((_pa5747 - (_ba5748 * _h5749))) - _r);
}
float2 f_opU(in float2 _d1, in float2 _d2)
{
  float2 s1737 = {0, 0};
  if ((_d1.x < _d2.x))
  {
    s1737 = _d1;
  }
  else
  {
    s1737 = _d2;
  }
  return s1737;
}
float2 f_opS(in float2 _d1, in float2 _d2)
{
  float2 s1738 = {0, 0};
  if (((-_d1.x) > _d2.x))
  {
    s1738 = vec2_ctor((-_d1.x), _d1.y);
  }
  else
  {
    s1738 = _d2;
  }
  return s1738;
}
float2 f_opSU(in float2 _d1, in float2 _d2, in float _k)
{
  float _h5760 = clamp((0.5 + ((0.5 * (_d2.x - _d1.x)) / _k)), 0.0, 1.0);
  return vec2_ctor((lerp(_d2.x, _d1.x, _h5760) - ((_k * _h5760) * (1.0 - _h5760))), _d1.y);
}
float2x2 f_rot(in float _th)
{
  float2 _a5763 = sin((float2(1.5707963, 0.0) + _th));
  return mat2_ctor(_a5763, (-_a5763.y), _a5763.x);
}
float2 f_thinkingFace(in float3 _p)
{
  float2 _face5766 = vec2_ctor(f_sdSphere_2(_p, 1.0), 1.0);
  float3 _q5767 = _p;
  _q5767.x = abs(_q5767.x);
  _q5767.xz = mul(_q5767.xz, transpose(f_rot(-0.30000001)));
  _q5767.yz = mul(_q5767.yz, transpose(f_rot((-0.25 + (0.050000001 * step(0.0, _p.x))))));
  _q5767.y *= 0.80000001;
  _q5767.z *= 2.0;
  _q5767.z -= 2.0;
  float2 _eye5768 = vec2_ctor((f_sdSphere_2(_q5767, 0.11) * 0.5), 2.0);
  _q5767 = _p;
  _q5767.x = abs(_q5767.x);
  _q5767.xz = mul(_q5767.xz, transpose(f_rot(-0.34999999)));
  _q5767.yz = mul(_q5767.yz, transpose(f_rot(((-0.62 + (0.25999999 * step(0.0, _p.x))) + (pow(max(abs(_q5767.x), 9.9999997e-10), 1.7) * 0.5)))));
  _q5767.z -= 1.0;
  float2 _brow5769 = vec2_ctor((f_sdCapsule(_q5767, float3(0.2, 0.0, 0.0), float3(-0.2, 0.0, 0.0), 0.050000001) * 0.5), 4.0);
  _q5767 = _p;
  _q5767.yz = mul(_q5767.yz, transpose(f_rot((0.2 + pow(max(abs(_p.x), 9.9999997e-10), 1.8)))));
  _q5767.xy = mul(_q5767.xy, transpose(f_rot(-0.25)));
  _q5767.z -= 1.0;
  float2 _mouth5770 = vec2_ctor(f_sdCapsule(_q5767, float3(0.2, 0.0, 0.0), float3(-0.2, 0.0, 0.0), 0.045000002), 4.0);
  _p -= float3(-0.25, -0.73000002, 1.0);
  _p.xy = mul(_p.xy, transpose(f_rot(0.2)));
  _q5767 = _p;
  _q5767 = (_q5767 * float3(1.2, 1.0, 2.0));
  _q5767 -= float3(0.0, 0.0099999998, 0.0);
  float2 _hand5771 = vec2_ctor((f_sdSphere_2(_q5767, 0.30000001) * 0.5), 3.0);
  _q5767 = _p;
  float2 _finger15772 = vec2_ctor(f_sdCapsule((_q5767 - float3(0.30000001, 0.2, 0.02)), float3(0.2, 0.0, 0.0), float3(-0.2, 0.0, 0.0), 0.07), 3.0);
  float2 _finger25773 = vec2_ctor(f_sdCapsule(((_q5767 * float3(1.2, 1.0, 0.80000001)) - float3(0.2, 0.059999999, 0.02)), float3(0.1, 0.0, 0.0), float3(-0.1, 0.0, 0.0), 0.079999998), 3.0);
  float2 _finger35774 = vec2_ctor(f_sdCapsule(((_q5767 * float3(1.2, 1.0, 0.80000001)) - float3(0.15000001, -0.079999998, 0.015)), float3(0.1, 0.0, 0.0), float3(-0.1, 0.0, 0.0), 0.079999998), 3.0);
  float2 _finger45775 = vec2_ctor(f_sdCapsule(((_q5767 * float3(1.2, 1.0, 0.89999998)) - float3(0.1, -0.2, -0.0099999998)), float3(0.1, 0.0, 0.0), float3(-0.1, 0.0, 0.0), 0.079999998), 3.0);
  _p -= float3(-0.1, 0.30000001, 0.0);
  _q5767 = _p;
  _q5767.x -= (_q5767.y * 0.69999999);
  float2 _finger55776 = vec2_ctor(f_sdCapsule(_p, (float3(0.0, -0.2, 0.0) - _q5767), float3(0.0, 0.2, 0.0), (0.1 - (_p.y * 0.15000001))), 3.0);
  float2 _finger5777 = f_opU(_finger15772, f_opU(_finger55776, f_opSU(_finger25773, f_opSU(_finger35774, _finger45775, 0.035), 0.035)));
  _hand5771 = f_opSU(_hand5771, _finger5777, 0.02);
  float2 _d5778 = f_opU(_eye5768, _face5766);
  _d5778 = f_opU(_brow5769, _d5778);
  _d5778 = f_opS(_mouth5770, _d5778);
  _d5778 = f_opU(_hand5771, _d5778);
  return _d5778;
}
float2 f_map(in float3 _p)
{
  float2 _think5789 = f_thinkingFace((_p - float3(1.0, 3.5, 1.0)));
  return _think5789;
}
float f_hash_6(in float _n)
{
  return frac((sin(_n) * 43758.547));
}
float f_noise_2(in float3 _x)
{
  float3 _p5794 = floor(_x);
  float3 _f5795 = frac(_x);
  _f5795 = ((_f5795 * _f5795) * (3.0 - (2.0 * _f5795)));
  float _n5796 = ((_p5794.x + (_p5794.y * 57.0)) + (113.0 * _p5794.z));
  float _res5797 = lerp(lerp(lerp(f_hash_6((_n5796 + 0.0)), f_hash_6((_n5796 + 1.0)), _f5795.x), lerp(f_hash_6((_n5796 + 57.0)), f_hash_6((_n5796 + 58.0)), _f5795.x), _f5795.y), lerp(lerp(f_hash_6((_n5796 + 113.0)), f_hash_6((_n5796 + 114.0)), _f5795.x), lerp(f_hash_6((_n5796 + 170.0)), f_hash_6((_n5796 + 171.0)), _f5795.x), _f5795.y), _f5795.z);
  return _res5797;
}
static float3x3 _m = {0.0, 0.80000001, 0.60000002, -0.80000001, 0.36000001, -0.47999999, -0.60000002, -0.47999999, 0.63999999};
float f_fbm_4(in float3 _pos)
{
  float _o5801 = {0.0};
  { for(int _i5802 = {0}; (_i5802 < 5); (_i5802++))
    {
      _o5801 = ((_o5801 * 2.0) + abs(((f_noise_2(_pos) * 2.0) - 1.0)));
      _pos = (mul(transpose(_m), _pos) * 2.0);
    }
  }
  return (_o5801 / 40.0);
}
float3 f_normal(in float3 _pos, in float _eps)
{
  float2 _e5806 = (float2(0.57730001, -0.57730001) * _eps);
  float _intensity5807 = {0.02};
  float _n15808 = (f_fbm_4(((_pos * 1.5) + _e5806.xyy)) * _intensity5807);
  float _n25809 = (f_fbm_4(((_pos * 1.5) + _e5806.yyx)) * _intensity5807);
  float _n35810 = (f_fbm_4(((_pos * 1.5) + _e5806.yxy)) * _intensity5807);
  float _n45811 = (f_fbm_4(((_pos * 1.5) + _e5806.xxx)) * _intensity5807);
  return normalize(((((_e5806.xyy * (f_map((_pos + _e5806.xyy)).x + _n15808)) + (_e5806.yyx * (f_map((_pos + _e5806.yyx)).x + _n25809))) + (_e5806.yxy * (f_map((_pos + _e5806.yxy)).x + _n35810))) + (_e5806.xxx * (f_map((_pos + _e5806.xxx)).x + _n45811))));
}
float f_shadow(in float3 _p, in float3 _l)
{
  float _t5815 = {0.15000001};
  float _t_max5816 = {20.0};
  float _res5817 = {1.0};
  { for(int _i5818 = {0}; (_i5818 < 16); (++_i5818))
    {
      if ((_t5815 > _t_max5816))
      {
        break;
      }
      float _d5819 = f_map((_p + (_t5815 * _l))).x;
      if ((_d5819 < 0.0099999998))
      {
        return 0.0;
      }
      _t5815 += _d5819;
      _res5817 = min(_res5817, ((1.0 * _d5819) / _t5815));
    }
  }
  return _res5817;
}
static float3 _sunDir = {0, 0, 0};
float3 f_fakeSky(in float3 _rd)
{
  float3 _moning5823 = lerp(float3(0.93500006, 0.55000001, 0.22000001), float3(0.22000001, 0.55000001, 0.93500006), _rd.y);
  float3 _noon5824 = lerp(float3(0.25999999, 0.64999998, 1.105), float3(0.050000001, 0.2, 0.69999999), _rd.y);
  float3 _col5825 = _noon5824;
  _col5825 = lerp(_moning5823, _noon5824, 1.0);
  float3 _cloud5826 = {1.0, 0.94999999, 1.0};
  _col5825 = lerp(_col5825, _cloud5826, ((0.75 * step(0.0, _rd.y)) * smoothstep(0.40000001, 0.89999998, f_fbm_3((vec2_ctor((iTime + 1.42), 0.0) + ((_rd.xz / _rd.y) * 3.0))))));
  return (_col5825 * 3.0);
}
float f_ndfGGX(in float _NdotH, in float _roughness)
{
  float _alpha5830 = (_roughness * _roughness);
  float _alphaSq5831 = (_alpha5830 * _alpha5830);
  float _denom5832 = (((_NdotH * _NdotH) * (_alphaSq5831 - 1.0)) + 1.0);
  return (_alphaSq5831 / ((3.1415925 * _denom5832) * _denom5832));
}
float f_gaSchlickG1(in float _theta, in float _k)
{
  return (_theta / ((_theta * (1.0 - _k)) + _k));
}
float f_gaSchlickGGX(in float _NdotL, in float _NdotV, in float _roughness)
{
  float _r5840 = (_roughness + 1.0);
  float _k5841 = ((_r5840 * _r5840) / 8.0);
  return (f_gaSchlickG1(_NdotL, _k5841) * f_gaSchlickG1(_NdotV, _k5841));
}
float3 f_fresnelSchlick_roughness(in float3 _F0, in float _cosTheta, in float _roughness)
{
  float s1739 = max((1.0 - _cosTheta), 9.9999997e-10);
  return (_F0 + ((max(vec3_ctor((1.0 - _roughness)), _F0) - _F0) * ((((s1739 * s1739) * s1739) * s1739) * s1739)));
}
float3 f_shade(in float3 _pos, in float3 _albedo, in float _metalness, in float _roughness, in float3 _N, in float3 _V, in float3 _L, in float3 _Lradiance)
{
  float3 _H5855 = normalize((_L + _V));
  float _NdotV5856 = max(0.0, dot(_N, _V));
  float _NdotL5857 = max(0.0, dot(_N, _L));
  float _NdotH5858 = max(0.0, dot(_N, _H5855));
  float3 _F05859 = lerp(float3(0.039999999, 0.039999999, 0.039999999), _albedo, _metalness);
  float3 _F5860 = f_fresnelSchlick_roughness(_F05859, max(0.0, dot(_H5855, _L)), _roughness);
  float _D5861 = f_ndfGGX(_NdotH5858, _roughness);
  float _G5862 = f_gaSchlickGGX(_NdotL5857, _NdotV5856, _roughness);
  float3 _kd5863 = lerp((float3(1.0, 1.0, 1.0) - _F5860), float3(0.0, 0.0, 0.0), _metalness);
  float _shadow5864 = f_shadow(_pos, _L);
  float3 _diffuseBRDF5865 = ((_kd5863 * _albedo) / 3.1415925);
  float3 _specularBRDF5866 = (((_F5860 * _D5861) * _G5862) / max(9.9999997e-05, ((4.0 * _NdotL5857) * _NdotV5856)));
  return ((((_diffuseBRDF5865 + _specularBRDF5866) * _Lradiance) * _NdotL5857) * _shadow5864);
}
float3 f_EnvBRDFApprox(in float3 _SpecularColor, in float _Roughness, in float _NoV)
{
  float4 _r5873 = ((_Roughness * float4(-1.0, -0.0275, -0.57200003, 0.022)) + float4(1.0, 0.0425, 1.04, -0.039999999));
  float _a0045874 = ((min((_r5873.x * _r5873.x), exp2((-9.2799997 * _NoV))) * _r5873.x) + _r5873.y);
  float2 _AB5875 = ((float2(-1.04, 1.04) * _a0045874) + _r5873.zw);
  return ((_SpecularColor * _AB5875.x) + _AB5875.y);
}
float f_so(in float _NoV, in float _ao, in float _roughness)
{
  return clamp(((pow(max((_NoV + _ao), 9.9999997e-10), exp2(((-16.0 * _roughness) - 1.0))) - 1.0) + _ao), 0.0, 1.0);
}
float3 f_calcAmbient(in float3 _pos, in float3 _albedo, in float _metalness, in float _roughness, in float3 _N, in float3 _V, in float _t)
{
  float3 _F05888 = lerp(float3(0.039999999, 0.039999999, 0.039999999), _albedo, _metalness);
  float3 _F5889 = f_fresnelSchlick_roughness(_F05888, max(0.0, dot(_N, _V)), _roughness);
  float3 _kd5890 = lerp((float3(1.0, 1.0, 1.0) - _F5889), float3(0.0, 0.0, 0.0), _metalness);
  float _aoRange5891 = (_t / 40.0);
  float _occlusion5892 = max(0.0, (1.0 - (f_map((_pos + (_N * _aoRange5891))).x / _aoRange5891)));
  float s173a = max(_occlusion5892, 9.9999997e-10);
  _occlusion5892 = min(exp2((-0.80000001 * (s173a * s173a))), 1.0);
  float3 _ambientColor5893 = lerp(float3(0.1, 0.25, 0.42500001), float3(0.15000001, 0.1875, 0.60000002), (0.5 + (0.5 * _N.y)));
  _ambientColor5893 = lerp(float3(0.30000001, 0.15000001, 0.050000001), _ambientColor5893, (1.0 - smoothstep(0.2, -0.5, _sunDir.y)));
  _ambientColor5893 = lerp(float3(0.029999999, 0.029999999, 0.029999999), _ambientColor5893, (1.0 - smoothstep(-0.2, -0.5, _sunDir.y)));
  float3 _diffuseAmbient5894 = ((((_kd5890 * _albedo) * _ambientColor5893) * min(1.0, (0.75 + (0.5 * _N.y)))) * 3.0);
  float3 _R5895 = reflect((-_V), _N);
  float s173b = max((1.0 - max((-_R5895.y), 0.0)), 9.9999997e-10);
  float3 _col5896 = lerp((f_fakeSky(_R5895) * (((s173b * s173b) * s173b) * s173b)), _ambientColor5893, pow(max(_roughness, 9.9999997e-10), 0.5));
  float3 _ref5897 = f_EnvBRDFApprox(_F05888, _roughness, max(dot(_N, _V), 0.0));
  float3 _specularAmbient5898 = (_col5896 * _ref5897);
  _diffuseAmbient5894 *= _occlusion5892;
  _specularAmbient5898 *= f_so(max(0.0, dot(_N, _V)), _occlusion5892, _roughness);
  return vec3_ctor((_diffuseAmbient5894 + _specularAmbient5898));
}
float3 f_materialize(in float3 _p, in float3 _ray, in float _depth, in float2 _mat)
{
  float3 _col5904 = {0.0, 0.0, 0.0};
  float3 _nor5905 = f_normal(_p, 0.001);
  float3 _sky5906 = f_fakeSky(_ray);
  if ((_depth > 2000.0))
  {
    _col5904 = _sky5906;
  }
  else
  {
    float _roughness5908 = {0};
    float _metalness5909 = {0};
    if ((_mat.y == 1.0))
    {
      _col5904 = float3(0.60000002, 0.36723939, 0.043056872);
      _roughness5908 = 0.5;
      _metalness5909 = 0.0;
    }
    else
    {
      if ((_mat.y == 2.0))
      {
        _col5904 = float3(0.079925112, 0.033824462, 9.5093491e-21);
        _roughness5908 = 0.1;
        _metalness5909 = 0.0;
      }
      else
      {
        if ((_mat.y == 3.0))
        {
          _col5904 = float3(0.63528299, 0.19911645, 0.00084121758);
          _roughness5908 = 0.80000001;
          _metalness5909 = 0.0;
        }
        else
        {
          if ((_mat.y == 4.0))
          {
            _col5904 = float3(0.10656681, 0.045099281, 1.2679132e-20);
            _roughness5908 = 0.60000002;
            _metalness5909 = 0.0;
          }
        }
      }
    }
    float3 _result5910 = {0.0, 0.0, 0.0};
    _result5910 += (f_shade(_p, _col5904, _metalness5909, _roughness5908, _nor5905, (-_ray), normalize(_sunDir), float3(100.0, 98.0, 95.0)) * 1.0);
    _result5910 += (f_shade(_p, _col5904, _metalness5909, _roughness5908, _nor5905, (-_ray), normalize((-_sunDir)), float3(2.0, 1.96, 1.9)) * 0.0);
    _result5910 += f_calcAmbient(_p, _col5904, _metalness5909, _roughness5908, _nor5905, (-_ray), _depth);
    _col5904 = _result5910;
  }
  float _fo5911 = (1.0 - exp((-0.0015 * _depth)));
  _col5904 = lerp(_col5904, _sky5906, _fo5911);
  return _col5904;
}
float3 f_trace(in float3 _p, in float3 _ray)
{
  float _t5915 = {0.0};
  float3 _pos5916 = {0, 0, 0};
  float2 _mat5917 = {0, 0};
  { for(int _i5918 = {0}; (_i5918 < 100); (_i5918++))
    {
      _pos5916 = (_p + (_ray * _t5915));
      _mat5917 = f_map(_pos5916);
      if ((_mat5917.x < 9.9999997e-06))
      {
        break;
      }
      _t5915 += _mat5917.x;
    }
  }
  return f_materialize(_pos5916, _ray, _t5915, _mat5917);
}
float3x3 f_camera(in float3 _ro, in float3 _ta, in float _cr)
{
  float3 _cw5923 = normalize((_ta - _ro));
  float3 _cp5924 = vec3_ctor(sin(_cr), cos(_cr), 0.0);
  float3 _cu5925 = normalize(cross(_cw5923, _cp5924));
  float3 _cv5926 = normalize(cross(_cu5925, _cw5923));
  return mat3_ctor(_cu5925, _cv5926, _cw5923);
}
float f_luminance(in float3 _col)
{
  return dot(float3(0.29891199, 0.58661097, 0.114478), _col);
}
float3 f_reinhard(in float3 _col, in float _exposure, in float _white)
{
  _col *= _exposure;
  _white *= _exposure;
  float _lum5933 = f_luminance(_col);
  return ((_col * ((_lum5933 / (_white * _white)) + 1.0)) / (_lum5933 + 1.0));
}
void f_main_2()
{
  float2 _p5935 = (((gl_FragCoord.xy * 2.0) - iResolution.xy) / min(iResolution.x, iResolution.y));
  float _t5936 = (((((iTime + 1.42) * 3.1415925) * 2.0) / 6.0) - 1.5707963);
  _sunDir = normalize(vec3_ctor(0.5, sin(_t5936), cos(_t5936)));
  float3 _ro5937 = {-2.1500001, 1.3, 4.5};
  float3 _ta5938 = {2.4000001, 4.5999999, -0.30000001};
  float3x3 _c5939 = f_camera(_ro5937, _ta5938, 0.0);
  float3 _ray5940 = mul(transpose(_c5939), normalize(vec3_ctor(_p5935, 3.5)));
  float3 _col5941 = f_trace(_ro5937, _ray5940);
  _col5941 = f_reinhard(_col5941, 0.60000002, 30.0);
  _col5941 = pow(max(_col5941, 9.9999997e-10), float3(0.45454544, 0.45454544, 0.45454544));
  _fragColor_2 = vec4_ctor(_col5941, 1.0);
  _fragColor_2.w = 1.0;
}

float4 PS(VertexOut pIn) : SV_Target {
  gl_FragCoord = float4(pIn.posH.x, iResolution.y-pIn.posH.y, pIn.posH.z, pIn.posH.w);
  out_fragColor = float4(0.0, 0.0, 0.0, 0.0);
  f_main_1();
  out_fragColor += round((clamp(_fragColor_1, float4(0.0, 0.0, 0.0, 0.0), float4(1.0, 1.0, 1.0, 1.0)) * 255.0));
  f_main_2();
  out_fragColor = lerp(_fragColor_2, out_fragColor, iTime);
  return out_fragColor;
}

// INITIAL HLSL END



// FRAGMENT SHADER END
 