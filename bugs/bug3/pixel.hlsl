#include "header.hlsli"

#pragma warning( disable: 3556 3571 )
float float_ctor_int(int x0)
{
  return float(x0);
}
float2 vec2_ctor(float x0, float x1)
{
  return float2(x0, x1);
}
float3 vec3_ctor(float x0, float x1, float x2)
{
  return float3(x0, x1, x2);
}
float3 vec3_ctor_int(float x0, int x1, float x2)
{
  return float3(x0, x1, x2);
}
float3 vec3_ctor_int_int(int x0, float x1, int x2)
{
  return float3(x0, x1, x2);
}
float4 vec4_ctor(float x0, float x1, float x2, float x3)
{
  return float4(x0, x1, x2, x3);
}
float4 vec4_ctor(float3 x0, float x1)
{
  return float4(x0, x1);
}
// Uniforms

#define ANGLE_USES_NESTED_BREAK
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
float2 mod_emu(float2 x, float y)
{
  return x - y * floor(x / y);
}


float mod_emu(float x, float y)
{
  return x - y * floor(x / y);
}


static float4 _fragColor_1 = {0, 0, 0, 0};
static float4 _fragColor_2 = {0, 0, 0, 0};

float4 PS(VertexOut pIn) : SV_Target {
  gl_FragCoord = float4(pIn.posH.x, iResolution.y-pIn.posH.y, pIn.posH.z, pIn.posH.w);
  float2 _uv_main_15614 = {0, 0};
  float2 _mouse_main_15615 = {0, 0};
  float _yaw_main_15616 = {0};
  float _pitch_main_15617 = {0};
  float4 _cs_main_15618 = {0, 0, 0, 0};
  float3 _ro_main_15619 = {0, 0, 0};
  float3 _lookAt_main_15620 = {0, 0, 0};
  float3 _f_main_15621 = {0, 0, 0};
  float3 _r_main_15622 = {0, 0, 0};
  float3 _u_main_15623 = {0, 0, 0};
  float3 _c_main_15624 = {0, 0, 0};
  float3 _i_main_15625 = {0, 0, 0};
  float3 _rd_main_15626 = {0, 0, 0};
  float3 _col_main_15627 = {0, 0, 0};
  float3 _n_main_15628 = {0, 0, 0};
  float3 _reflOri_main_15629 = {0, 0, 0};
  float3 _reflDir_main_15630 = {0, 0, 0};
  int _r_int_main_15631 = {0};
  float3 _n_offset_15632 = {0, 0, 0};
  bool _offset_1_has_returned5633 = {0};
  float3 _offset_1_return_value5634 = {0, 0, 0};
  float3 _offset_1_return_value_inlined_115635 = {0, 0, 0};
  float3 _off_main_15636 = {0, 0, 0};
  float3 _ro_RayMarch_15637 = {0, 0, 0};
  float3 _rd_RayMarch_15638 = {0, 0, 0};
  float _side_RayMarch_15639 = {0};
  bool _RayMarch_1_has_returned5640 = {0};
  float _RayMarch_1_return_value5641 = {0};
  float _dO_RayMarch_15642 = {0};
  int _i_RayMarch_15643 = {0};
  float3 _p_RayMarch_15644 = {0, 0, 0};
  float3 _p_GetDist_15645 = {0, 0, 0};
  bool _GetDist_1_has_returned5646 = {0};
  float _GetDist_1_return_value5647 = {0};
  float3 _p_sdGrid_15648 = {0, 0, 0};
  bool _sdGrid_1_has_returned5649 = {0};
  float _sdGrid_1_return_value5650 = {0};
  float _plane_sdGrid_15651 = {0};
  float _sdGrid_1_return_value_inlined_45652 = {0};
  float _grid_GetDist_15653 = {0};
  float3 _p_sdSpheres_15654 = {0, 0, 0};
  bool _sdSpheres_1_has_returned5655 = {0};
  float _sdSpheres_1_return_value5656 = {0};
  float2 _p_Hash21_15657 = {0, 0};
  bool _Hash21_1_has_returned5658 = {0};
  float _Hash21_1_return_value5659 = {0};
  float _Hash21_1_return_value_inlined_35660 = {0};
  float _off_sdSpheres_15661 = {0};
  float _sphereY_sdSpheres_15662 = {0};
  float3 _pos_sdSpheres_15663 = {0, 0, 0};
  float _sdSpheres_1_return_value_inlined_55664 = {0};
  float _spheres_GetDist_15665 = {0};
  float _GetDist_1_return_value_inlined_105666 = {0};
  float _dS_RayMarch_15667 = {0};
  float _RayMarch_1_return_value_inlined_125668 = {0};
  float _d_main_15669 = {0};
  float3 _spec_main_15670 = {0, 0, 0};
  float _sdGrid_1_return_value_inlined_135671 = {0};
  float _sdSpheres_1_return_value_inlined_145672 = {0};
  float2 _p_Hash21Color_15673 = {0, 0};
  bool _Hash21Color_1_has_returned5674 = {0};
  float3 _Hash21Color_1_return_value5675 = {0, 0, 0};
  float _Hash21_1_return_value_inlined_05676 = {0};
  float _r_Hash21Color_15677 = {0};
  float _Hash21_1_return_value_inlined_15678 = {0};
  float _g_Hash21Color_15679 = {0};
  float _Hash21_1_return_value_inlined_25680 = {0};
  float _b_Hash21Color_15681 = {0};
  float3 _Hash21Color_1_return_value_inlined_155682 = {0, 0, 0};
  float3 _p_GetNormal_15683 = {0, 0, 0};
  bool _GetNormal_1_has_returned5684 = {0};
  float3 _GetNormal_1_return_value5685 = {0, 0, 0};
  float _GetDist_1_return_value_inlined_65686 = {0};
  float _d_GetNormal_15687 = {0};
  float2 _e_GetNormal_15688 = {0, 0};
  float _GetDist_1_return_value_inlined_75689 = {0};
  float _GetDist_1_return_value_inlined_85690 = {0};
  float _GetDist_1_return_value_inlined_95691 = {0};
  float3 _GetNormal_1_return_value_inlined_165692 = {0, 0, 0};
  float3 _p_GetLight_15693 = {0, 0, 0};
  float3 _n_GetLight_15694 = {0, 0, 0};
  bool _GetLight_1_has_returned5695 = {0};
  float _GetLight_1_return_value5696 = {0};
  float3 _l_GetLight_15697 = {0, 0, 0};
  float _diff_GetLight_15698 = {0};
  float _GetLight_1_return_value_inlined_175699 = {0};
  float _diff_main_15700 = {0};
  float _t_main_25701 = {0};
  float2 _m_main_25703 = {0, 0};
  float _s_main_25704 = {0};
  float2 _uv_Smiley_25708 = {0, 0};
  float2 _m_Smiley_25709 = {0, 0};
  float4 _Smiley_2_return_value5712 = {0, 0, 0, 0};
  float4 _col_Smiley_25713 = {0, 0, 0, 0};
  float2 _uv_Head_25715 = {0, 0};
  float4 _Head_2_return_value5717 = {0, 0, 0, 0};
  float4 _col_Head_25718 = {0, 0, 0, 0};
  float4 _Head_2_return_value_inlined_215737 = {0, 0, 0, 0};
  float4 _head_Smiley_25738 = {0, 0, 0, 0};
  float4 _rect_within_25740 = {0, 0, 0, 0};
  float2 _within_2_return_value5742 = {0, 0};
  float2 _within_2_return_value_inlined_225743 = {0, 0};
  float2 _uv_Eye_25744 = {0, 0};
  float4 _Eye_2_return_value5749 = {0, 0, 0, 0};
  float4 _irisCol_Eye_25751 = {0, 0, 0, 0};
  float4 _col_Eye_25752 = {0, 0, 0, 0};
  float2 _offs_Eye_25757 = {0, 0};
  float4 _Eye_2_return_value_inlined_235759 = {0, 0, 0, 0};
  float4 _eye_Smiley_25760 = {0, 0, 0, 0};
  float2 _uv_Mouth_25762 = {0, 0};
  float4 _Mouth_2_return_value5765 = {0, 0, 0, 0};
  float4 _col_Mouth_25766 = {0, 0, 0, 0};
  float2 _tUv_Mouth_25768 = {0, 0};
  float4 _Mouth_2_return_value_inlined_255771 = {0, 0, 0, 0};
  float4 _mouth_Smiley_25772 = {0, 0, 0, 0};
  float2 _within_2_return_value_inlined_265773 = {0, 0};
  float _smile_Brow_25775 = {0};
  float4 _col_Brow_25780 = {0, 0, 0, 0};
  float _d1_Brow_25782 = {0};
  float _s1_Brow_25783 = {0};
  float _d2_Brow_25784 = {0};
  float _s2_Brow_25785 = {0};
  float _browMask_Brow_25786 = {0};
  float4 _browCol_Brow_25789 = {0, 0, 0, 0};
  float4 _Brow_2_return_value_inlined_275791 = {0, 0, 0, 0};
  float4 _brow_Smiley_25792 = {0, 0, 0, 0};
  float4 _Smiley_2_return_value_inlined_285793 = {0, 0, 0, 0};
  out_fragColor = float4(1.0, 1.0, 1.0, 1.0);
  _uv_main_15614 = ((gl_FragCoord.xy - (iResolution.xy * 0.5)) / min(iResolution.x, iResolution.y));
  if (((iMouse.x == 0.0) && (iMouse.y == 0.0)))
  {
    _mouse_main_15615 = float2(0.0, 0.0);
  }
  else
  {
    _mouse_main_15615 = ((iMouse.xy / iResolution.xy) - 0.5);
  }
  _yaw_main_15616 = ((_mouse_main_15615.x * 2.0) * 3.1415927);
  _pitch_main_15617 = (_mouse_main_15615.y * 3.1415927);
  _cs_main_15618 = vec4_ctor(cos(_yaw_main_15616), sin(_yaw_main_15616), cos(_pitch_main_15617), sin(_pitch_main_15617));
  _ro_main_15619 = float3(0.0, 1.0, 0.0);
  _lookAt_main_15620 = (_ro_main_15619 + (_cs_main_15618.xwy * vec3_ctor_int(_cs_main_15618.z, 1, _cs_main_15618.z)));
  _f_main_15621 = normalize((_lookAt_main_15620 - _ro_main_15619));
  _r_main_15622 = normalize(cross(_f_main_15621, float3(0.0, 1.0, 0.0)));
  _u_main_15623 = cross(_r_main_15622, _f_main_15621);
  _c_main_15624 = (_ro_main_15619 + (_f_main_15621 * 1.0));
  _i_main_15625 = ((_c_main_15624 + (_uv_main_15614.x * _r_main_15622)) + (_uv_main_15614.y * _u_main_15623));
  _rd_main_15626 = normalize((_i_main_15625 - _ro_main_15619));
  _col_main_15627 = float3(0.0, 0.0, 0.0);
  _n_main_15628 = float3(0.0, 0.0, 0.0);
  _reflOri_main_15629 = _ro_main_15619;
  _reflDir_main_15630 = _rd_main_15626;
  { for((_r_int_main_15631 = 0); (_r_int_main_15631 <= 10); (_r_int_main_15631++))
    {
      _n_offset_15632 = _n_main_15628;
      _offset_1_has_returned5633 = false;
      _offset_1_return_value5634 = (0.0020000001 * _n_offset_15632);
      _offset_1_has_returned5633 = true;
      _offset_1_return_value_inlined_115635 = _offset_1_return_value5634;
      _off_main_15636 = _offset_1_return_value_inlined_115635;
      _reflOri_main_15629 += _off_main_15636;
      _ro_RayMarch_15637 = _reflOri_main_15629;
      _rd_RayMarch_15638 = _reflDir_main_15630;
      _side_RayMarch_15639 = 1.0;
      _RayMarch_1_has_returned5640 = false;
      _dO_RayMarch_15642 = 0.0;
      { for((_i_RayMarch_15643 = (0 + 0)); (_i_RayMarch_15643 < 1000); (_i_RayMarch_15643++))
        {
          _p_RayMarch_15644 = ((_ro_RayMarch_15637 + (_rd_RayMarch_15638 * _dO_RayMarch_15642)));
          _p_GetDist_15645 = (_p_RayMarch_15644);
          _GetDist_1_has_returned5646 = (false + false);
          _p_sdGrid_15648 = (_p_GetDist_15645);
          _sdGrid_1_has_returned5649 = (false + false);
          _plane_sdGrid_15651 = (_p_sdGrid_15648.y + 0.0);
          _plane_sdGrid_15651 += ((0.025 * smoothstep(0.050000001, 0.0, abs((_p_sdGrid_15648.x - round(_p_sdGrid_15648.x))))) + 0.0);
          _plane_sdGrid_15651 += ((0.025 * smoothstep(0.050000001, 0.0, abs((_p_sdGrid_15648.z - round(_p_sdGrid_15648.z))))) + 0.0);
          _sdGrid_1_return_value5650 = (_plane_sdGrid_15651 + 0.0);
          _sdGrid_1_has_returned5649 = (true + false);
          _sdGrid_1_return_value_inlined_45652 = (_sdGrid_1_return_value5650 + 0.0);
          _grid_GetDist_15653 = (_sdGrid_1_return_value_inlined_45652 + 0.0);
          _p_sdSpheres_15654 = (_p_GetDist_15645);
          _sdSpheres_1_has_returned5655 = (false + false);
          _p_Hash21_15657 = (round(_p_sdSpheres_15654.xz));
          _Hash21_1_has_returned5658 = (false + false);
          _p_Hash21_15657 = (frac((_p_Hash21_15657 * float2(123.34, 456.20999))));
          _p_Hash21_15657 += (dot(_p_Hash21_15657, (_p_Hash21_15657 + 45.32)) + 0.0);
          _Hash21_1_return_value5659 = (frac((_p_Hash21_15657.x * _p_Hash21_15657.y)) + 0.0);
          _Hash21_1_has_returned5658 = (true + false);
          _Hash21_1_return_value_inlined_35660 = (_Hash21_1_return_value5659 + 0.0);
          _off_sdSpheres_15661 = (_Hash21_1_return_value_inlined_35660 + 0.0);
          _sphereY_sdSpheres_15662 = (((0.2 * sin(((iTime + 4.0) + _off_sdSpheres_15661))) + 1.0) + 0.0);
          _pos_sdSpheres_15663 = (vec3_ctor_int_int(0, _sphereY_sdSpheres_15662, 0));
          _p_sdSpheres_15654.xz = ((mod_emu(_p_sdSpheres_15654.xz, 2.0) - 1.0));
          _sdSpheres_1_return_value5656 = ((length((_p_sdSpheres_15654 - _pos_sdSpheres_15663)) - 0.40000001) + 0.0);
          _sdSpheres_1_has_returned5655 = (true + false);
          _sdSpheres_1_return_value_inlined_55664 = (_sdSpheres_1_return_value5656 + 0.0);
          _spheres_GetDist_15665 = (_sdSpheres_1_return_value_inlined_55664 + 0.0);
          _GetDist_1_return_value5647 = (min(_grid_GetDist_15653, _spheres_GetDist_15665) + 0.0);
          _GetDist_1_has_returned5646 = (true + false);
          _GetDist_1_return_value_inlined_105666 = (_GetDist_1_return_value5647 + 0.0);
          _dS_RayMarch_15667 = ((_side_RayMarch_15639 * _GetDist_1_return_value_inlined_105666) + 0.0);
          if (((abs(_dS_RayMarch_15667) <= 0.001) || (_dO_RayMarch_15642 > 1000.0)))
          {
            break;
          }
          _dO_RayMarch_15642 += (_dS_RayMarch_15667 + 0.0);
        }
      }
      _RayMarch_1_return_value5641 = _dO_RayMarch_15642;
      _RayMarch_1_has_returned5640 = true;
      _RayMarch_1_return_value_inlined_125668 = _RayMarch_1_return_value5641;
      _d_main_15669 = _RayMarch_1_return_value_inlined_125668;
      _reflOri_main_15629 += (_reflDir_main_15630 * _d_main_15669);
      _spec_main_15670 = float3(0.0, 0.0, 0.0);
      _p_sdGrid_15648 = _reflOri_main_15629;
      _sdGrid_1_has_returned5649 = false;
      _plane_sdGrid_15651 = _p_sdGrid_15648.y;
      _plane_sdGrid_15651 += (0.025 * smoothstep(0.050000001, 0.0, abs((_p_sdGrid_15648.x - round(_p_sdGrid_15648.x)))));
      _plane_sdGrid_15651 += (0.025 * smoothstep(0.050000001, 0.0, abs((_p_sdGrid_15648.z - round(_p_sdGrid_15648.z)))));
      _sdGrid_1_return_value5650 = _plane_sdGrid_15651;
      _sdGrid_1_has_returned5649 = true;
      _sdGrid_1_return_value_inlined_135671 = _sdGrid_1_return_value5650;
      if ((_sdGrid_1_return_value_inlined_135671 <= 0.001))
      {
        _spec_main_15670 += mod_emu((floor(_reflOri_main_15629.x) + floor(_reflOri_main_15629.z)), 2.0);
      }
      else
      {
        _p_sdSpheres_15654 = _reflOri_main_15629;
        _sdSpheres_1_has_returned5655 = false;
        _p_Hash21_15657 = round(_p_sdSpheres_15654.xz);
        _Hash21_1_has_returned5658 = false;
        _p_Hash21_15657 = frac((_p_Hash21_15657 * float2(123.34, 456.20999)));
        _p_Hash21_15657 += dot(_p_Hash21_15657, (_p_Hash21_15657 + 45.32));
        _Hash21_1_return_value5659 = frac((_p_Hash21_15657.x * _p_Hash21_15657.y));
        _Hash21_1_has_returned5658 = true;
        _Hash21_1_return_value_inlined_35660 = _Hash21_1_return_value5659;
        _off_sdSpheres_15661 = _Hash21_1_return_value_inlined_35660;
        _sphereY_sdSpheres_15662 = ((0.2 * sin(((iTime + 4.0) + _off_sdSpheres_15661))) + 1.0);
        _pos_sdSpheres_15663 = vec3_ctor_int_int(0, _sphereY_sdSpheres_15662, 0);
        _p_sdSpheres_15654.xz = (mod_emu(_p_sdSpheres_15654.xz, 2.0) - 1.0);
        _sdSpheres_1_return_value5656 = (length((_p_sdSpheres_15654 - _pos_sdSpheres_15663)) - 0.40000001);
        _sdSpheres_1_has_returned5655 = true;
        _sdSpheres_1_return_value_inlined_145672 = _sdSpheres_1_return_value5656;
        if ((_sdSpheres_1_return_value_inlined_145672 <= 0.001))
        {
          _p_Hash21Color_15673 = round(_reflOri_main_15629.xz);
          _Hash21Color_1_has_returned5674 = false;
          _p_Hash21_15657 = _p_Hash21Color_15673;
          _Hash21_1_has_returned5658 = false;
          _p_Hash21_15657 = frac((_p_Hash21_15657 * float2(123.34, 456.20999)));
          _p_Hash21_15657 += dot(_p_Hash21_15657, (_p_Hash21_15657 + 45.32));
          _Hash21_1_return_value5659 = frac((_p_Hash21_15657.x * _p_Hash21_15657.y));
          _Hash21_1_has_returned5658 = true;
          _Hash21_1_return_value_inlined_05676 = _Hash21_1_return_value5659;
          _r_Hash21Color_15677 = _Hash21_1_return_value_inlined_05676;
          _p_Hash21_15657 = (_p_Hash21Color_15673 * 123.456);
          _Hash21_1_has_returned5658 = false;
          _p_Hash21_15657 = frac((_p_Hash21_15657 * float2(123.34, 456.20999)));
          _p_Hash21_15657 += dot(_p_Hash21_15657, (_p_Hash21_15657 + 45.32));
          _Hash21_1_return_value5659 = frac((_p_Hash21_15657.x * _p_Hash21_15657.y));
          _Hash21_1_has_returned5658 = true;
          _Hash21_1_return_value_inlined_15678 = _Hash21_1_return_value5659;
          _g_Hash21Color_15679 = _Hash21_1_return_value_inlined_15678;
          _p_Hash21_15657 = ((_p_Hash21Color_15673 - 789.01202) / 345.67801);
          _Hash21_1_has_returned5658 = false;
          _p_Hash21_15657 = frac((_p_Hash21_15657 * float2(123.34, 456.20999)));
          _p_Hash21_15657 += dot(_p_Hash21_15657, (_p_Hash21_15657 + 45.32));
          _Hash21_1_return_value5659 = frac((_p_Hash21_15657.x * _p_Hash21_15657.y));
          _Hash21_1_has_returned5658 = true;
          _Hash21_1_return_value_inlined_25680 = _Hash21_1_return_value5659;
          _b_Hash21Color_15681 = _Hash21_1_return_value_inlined_25680;
          _Hash21Color_1_return_value5675 = vec3_ctor(_r_Hash21Color_15677, _g_Hash21Color_15679, _b_Hash21Color_15681);
          _Hash21Color_1_has_returned5674 = true;
          _Hash21Color_1_return_value_inlined_155682 = _Hash21Color_1_return_value5675;
          _spec_main_15670 += _Hash21Color_1_return_value_inlined_155682;
        }
        else
        {
          break;
        }
      }
      _p_GetNormal_15683 = _reflOri_main_15629;
      _GetNormal_1_has_returned5684 = false;
      _p_GetDist_15645 = _p_GetNormal_15683;
      _GetDist_1_has_returned5646 = false;
      _p_sdGrid_15648 = _p_GetDist_15645;
      _sdGrid_1_has_returned5649 = false;
      _plane_sdGrid_15651 = _p_sdGrid_15648.y;
      _plane_sdGrid_15651 += (0.025 * smoothstep(0.050000001, 0.0, abs((_p_sdGrid_15648.x - round(_p_sdGrid_15648.x)))));
      _plane_sdGrid_15651 += (0.025 * smoothstep(0.050000001, 0.0, abs((_p_sdGrid_15648.z - round(_p_sdGrid_15648.z)))));
      _sdGrid_1_return_value5650 = _plane_sdGrid_15651;
      _sdGrid_1_has_returned5649 = true;
      _sdGrid_1_return_value_inlined_45652 = _sdGrid_1_return_value5650;
      _grid_GetDist_15653 = _sdGrid_1_return_value_inlined_45652;
      _p_sdSpheres_15654 = _p_GetDist_15645;
      _sdSpheres_1_has_returned5655 = false;
      _p_Hash21_15657 = round(_p_sdSpheres_15654.xz);
      _Hash21_1_has_returned5658 = false;
      _p_Hash21_15657 = frac((_p_Hash21_15657 * float2(123.34, 456.20999)));
      _p_Hash21_15657 += dot(_p_Hash21_15657, (_p_Hash21_15657 + 45.32));
      _Hash21_1_return_value5659 = frac((_p_Hash21_15657.x * _p_Hash21_15657.y));
      _Hash21_1_has_returned5658 = true;
      _Hash21_1_return_value_inlined_35660 = _Hash21_1_return_value5659;
      _off_sdSpheres_15661 = _Hash21_1_return_value_inlined_35660;
      _sphereY_sdSpheres_15662 = ((0.2 * sin(((iTime + 4.0) + _off_sdSpheres_15661))) + 1.0);
      _pos_sdSpheres_15663 = vec3_ctor_int_int(0, _sphereY_sdSpheres_15662, 0);
      _p_sdSpheres_15654.xz = (mod_emu(_p_sdSpheres_15654.xz, 2.0) - 1.0);
      _sdSpheres_1_return_value5656 = (length((_p_sdSpheres_15654 - _pos_sdSpheres_15663)) - 0.40000001);
      _sdSpheres_1_has_returned5655 = true;
      _sdSpheres_1_return_value_inlined_55664 = _sdSpheres_1_return_value5656;
      _spheres_GetDist_15665 = _sdSpheres_1_return_value_inlined_55664;
      _GetDist_1_return_value5647 = min(_grid_GetDist_15653, _spheres_GetDist_15665);
      _GetDist_1_has_returned5646 = true;
      _GetDist_1_return_value_inlined_65686 = _GetDist_1_return_value5647;
      _d_GetNormal_15687 = _GetDist_1_return_value_inlined_65686;
      _e_GetNormal_15688 = float2(0.001, 0.0);
      _p_GetDist_15645 = (_p_GetNormal_15683 - _e_GetNormal_15688.xyy);
      _GetDist_1_has_returned5646 = false;
      _p_sdGrid_15648 = _p_GetDist_15645;
      _sdGrid_1_has_returned5649 = false;
      _plane_sdGrid_15651 = _p_sdGrid_15648.y;
      _plane_sdGrid_15651 += (0.025 * smoothstep(0.050000001, 0.0, abs((_p_sdGrid_15648.x - round(_p_sdGrid_15648.x)))));
      _plane_sdGrid_15651 += (0.025 * smoothstep(0.050000001, 0.0, abs((_p_sdGrid_15648.z - round(_p_sdGrid_15648.z)))));
      _sdGrid_1_return_value5650 = _plane_sdGrid_15651;
      _sdGrid_1_has_returned5649 = true;
      _sdGrid_1_return_value_inlined_45652 = _sdGrid_1_return_value5650;
      _grid_GetDist_15653 = _sdGrid_1_return_value_inlined_45652;
      _p_sdSpheres_15654 = _p_GetDist_15645;
      _sdSpheres_1_has_returned5655 = false;
      _p_Hash21_15657 = round(_p_sdSpheres_15654.xz);
      _Hash21_1_has_returned5658 = false;
      _p_Hash21_15657 = frac((_p_Hash21_15657 * float2(123.34, 456.20999)));
      _p_Hash21_15657 += dot(_p_Hash21_15657, (_p_Hash21_15657 + 45.32));
      _Hash21_1_return_value5659 = frac((_p_Hash21_15657.x * _p_Hash21_15657.y));
      _Hash21_1_has_returned5658 = true;
      _Hash21_1_return_value_inlined_35660 = _Hash21_1_return_value5659;
      _off_sdSpheres_15661 = _Hash21_1_return_value_inlined_35660;
      _sphereY_sdSpheres_15662 = ((0.2 * sin(((iTime + 4.0) + _off_sdSpheres_15661))) + 1.0);
      _pos_sdSpheres_15663 = vec3_ctor_int_int(0, _sphereY_sdSpheres_15662, 0);
      _p_sdSpheres_15654.xz = (mod_emu(_p_sdSpheres_15654.xz, 2.0) - 1.0);
      _sdSpheres_1_return_value5656 = (length((_p_sdSpheres_15654 - _pos_sdSpheres_15663)) - 0.40000001);
      _sdSpheres_1_has_returned5655 = true;
      _sdSpheres_1_return_value_inlined_55664 = _sdSpheres_1_return_value5656;
      _spheres_GetDist_15665 = _sdSpheres_1_return_value_inlined_55664;
      _GetDist_1_return_value5647 = min(_grid_GetDist_15653, _spheres_GetDist_15665);
      _GetDist_1_has_returned5646 = true;
      _GetDist_1_return_value_inlined_75689 = _GetDist_1_return_value5647;
      _p_GetDist_15645 = (_p_GetNormal_15683 - _e_GetNormal_15688.yxy);
      _GetDist_1_has_returned5646 = false;
      _p_sdGrid_15648 = _p_GetDist_15645;
      _sdGrid_1_has_returned5649 = false;
      _plane_sdGrid_15651 = _p_sdGrid_15648.y;
      _plane_sdGrid_15651 += (0.025 * smoothstep(0.050000001, 0.0, abs((_p_sdGrid_15648.x - round(_p_sdGrid_15648.x)))));
      _plane_sdGrid_15651 += (0.025 * smoothstep(0.050000001, 0.0, abs((_p_sdGrid_15648.z - round(_p_sdGrid_15648.z)))));
      _sdGrid_1_return_value5650 = _plane_sdGrid_15651;
      _sdGrid_1_has_returned5649 = true;
      _sdGrid_1_return_value_inlined_45652 = _sdGrid_1_return_value5650;
      _grid_GetDist_15653 = _sdGrid_1_return_value_inlined_45652;
      _p_sdSpheres_15654 = _p_GetDist_15645;
      _sdSpheres_1_has_returned5655 = false;
      _p_Hash21_15657 = round(_p_sdSpheres_15654.xz);
      _Hash21_1_has_returned5658 = false;
      _p_Hash21_15657 = frac((_p_Hash21_15657 * float2(123.34, 456.20999)));
      _p_Hash21_15657 += dot(_p_Hash21_15657, (_p_Hash21_15657 + 45.32));
      _Hash21_1_return_value5659 = frac((_p_Hash21_15657.x * _p_Hash21_15657.y));
      _Hash21_1_has_returned5658 = true;
      _Hash21_1_return_value_inlined_35660 = _Hash21_1_return_value5659;
      _off_sdSpheres_15661 = _Hash21_1_return_value_inlined_35660;
      _sphereY_sdSpheres_15662 = ((0.2 * sin(((iTime + 4.0) + _off_sdSpheres_15661))) + 1.0);
      _pos_sdSpheres_15663 = vec3_ctor_int_int(0, _sphereY_sdSpheres_15662, 0);
      _p_sdSpheres_15654.xz = (mod_emu(_p_sdSpheres_15654.xz, 2.0) - 1.0);
      _sdSpheres_1_return_value5656 = (length((_p_sdSpheres_15654 - _pos_sdSpheres_15663)) - 0.40000001);
      _sdSpheres_1_has_returned5655 = true;
      _sdSpheres_1_return_value_inlined_55664 = _sdSpheres_1_return_value5656;
      _spheres_GetDist_15665 = _sdSpheres_1_return_value_inlined_55664;
      _GetDist_1_return_value5647 = min(_grid_GetDist_15653, _spheres_GetDist_15665);
      _GetDist_1_has_returned5646 = true;
      _GetDist_1_return_value_inlined_85690 = _GetDist_1_return_value5647;
      _p_GetDist_15645 = (_p_GetNormal_15683 - _e_GetNormal_15688.yyx);
      _GetDist_1_has_returned5646 = false;
      _p_sdGrid_15648 = _p_GetDist_15645;
      _sdGrid_1_has_returned5649 = false;
      _plane_sdGrid_15651 = _p_sdGrid_15648.y;
      _plane_sdGrid_15651 += (0.025 * smoothstep(0.050000001, 0.0, abs((_p_sdGrid_15648.x - round(_p_sdGrid_15648.x)))));
      _plane_sdGrid_15651 += (0.025 * smoothstep(0.050000001, 0.0, abs((_p_sdGrid_15648.z - round(_p_sdGrid_15648.z)))));
      _sdGrid_1_return_value5650 = _plane_sdGrid_15651;
      _sdGrid_1_has_returned5649 = true;
      _sdGrid_1_return_value_inlined_45652 = _sdGrid_1_return_value5650;
      _grid_GetDist_15653 = _sdGrid_1_return_value_inlined_45652;
      _p_sdSpheres_15654 = _p_GetDist_15645;
      _sdSpheres_1_has_returned5655 = false;
      _p_Hash21_15657 = round(_p_sdSpheres_15654.xz);
      _Hash21_1_has_returned5658 = false;
      _p_Hash21_15657 = frac((_p_Hash21_15657 * float2(123.34, 456.20999)));
      _p_Hash21_15657 += dot(_p_Hash21_15657, (_p_Hash21_15657 + 45.32));
      _Hash21_1_return_value5659 = frac((_p_Hash21_15657.x * _p_Hash21_15657.y));
      _Hash21_1_has_returned5658 = true;
      _Hash21_1_return_value_inlined_35660 = _Hash21_1_return_value5659;
      _off_sdSpheres_15661 = _Hash21_1_return_value_inlined_35660;
      _sphereY_sdSpheres_15662 = ((0.2 * sin(((iTime + 4.0) + _off_sdSpheres_15661))) + 1.0);
      _pos_sdSpheres_15663 = vec3_ctor_int_int(0, _sphereY_sdSpheres_15662, 0);
      _p_sdSpheres_15654.xz = (mod_emu(_p_sdSpheres_15654.xz, 2.0) - 1.0);
      _sdSpheres_1_return_value5656 = (length((_p_sdSpheres_15654 - _pos_sdSpheres_15663)) - 0.40000001);
      _sdSpheres_1_has_returned5655 = true;
      _sdSpheres_1_return_value_inlined_55664 = _sdSpheres_1_return_value5656;
      _spheres_GetDist_15665 = _sdSpheres_1_return_value_inlined_55664;
      _GetDist_1_return_value5647 = min(_grid_GetDist_15653, _spheres_GetDist_15665);
      _GetDist_1_has_returned5646 = true;
      _GetDist_1_return_value_inlined_95691 = _GetDist_1_return_value5647;
      _GetNormal_1_return_value5685 = normalize((_d_GetNormal_15687 - vec3_ctor(_GetDist_1_return_value_inlined_75689, _GetDist_1_return_value_inlined_85690, _GetDist_1_return_value_inlined_95691)));
      _GetNormal_1_has_returned5684 = true;
      _GetNormal_1_return_value_inlined_165692 = _GetNormal_1_return_value5685;
      _n_main_15628 = _GetNormal_1_return_value_inlined_165692;
      _p_GetLight_15693 = _reflOri_main_15629;
      _n_GetLight_15694 = _n_main_15628;
      _GetLight_1_has_returned5695 = false;
      _l_GetLight_15697 = normalize(((float3(10.0, 10.0, 10.0) * vec3_ctor(cos((iTime + 4.0)), 1.0, sin((iTime + 4.0)))) - _p_GetLight_15693));
      _diff_GetLight_15698 = max(0.0, dot(_n_GetLight_15694, _l_GetLight_15697));
      _GetLight_1_return_value5696 = _diff_GetLight_15698;
      _GetLight_1_has_returned5695 = true;
      _GetLight_1_return_value_inlined_175699 = _GetLight_1_return_value5696;
      _diff_main_15700 = _GetLight_1_return_value_inlined_175699;
      _spec_main_15670 += smoothstep(0.97500002, 1.0, _diff_main_15700);
      _col_main_15627 += ((_diff_main_15700 * _spec_main_15670) * pow(0.40000001, float_ctor_int(_r_int_main_15631)));
      _reflDir_main_15630 = reflect(_reflDir_main_15630, _n_main_15628);
    }
  }
  _fragColor_1 = vec4_ctor(_col_main_15627, 1.0);
  _fragColor_1.w = 1.0;
  out_fragColor = (round((clamp(_fragColor_1, float4(0.0, 0.0, 0.0, 0.0), float4(1.0, 1.0, 1.0, 1.0)) * 255.0)) / 255.0);
  _t_main_25701 = iTime;
  _uv_main_15614 = (gl_FragCoord.xy / iResolution.xy);
  _uv_main_15614 -= 0.5;
  _uv_main_15614.x *= (iResolution.x / iResolution.y);
  _m_main_25703 = (iMouse.xy / iResolution.xy);
  _m_main_25703 -= 0.5;
  if (((_m_main_25703.x < -0.49000001) && (_m_main_25703.y < -0.49000001)))
  {
    _s_main_25704 = sin((_t_main_25701 * 0.5));
    _sphereY_sdSpheres_15662 = cos((_t_main_25701 * 0.38));
    _m_main_25703 = (vec2_ctor(_s_main_25704, _sphereY_sdSpheres_15662) * 0.40000001);
  }
  if ((length(_m_main_25703) > 0.70700002))
  {
    _m_main_25703 *= 0.0;
  }
  _diff_main_15700 = dot(_uv_main_15614, _uv_main_15614);
  _uv_main_15614 -= (_m_main_25703 * clamp((0.23 - _diff_main_15700), 0.0, 1.0));
  _d_main_15669 = ((sin((_t_main_25701 * 0.5)) * 0.5) + 0.5);
  _uv_Smiley_25708 = _uv_main_15614;
  _m_Smiley_25709 = _m_main_25703;
  _dO_RayMarch_15642 = _d_main_15669;
  _Hash21_1_has_returned5658 = false;
  _col_Smiley_25713 = float4(0.0, 0.0, 0.0, 0.0);
  if ((length(_uv_Smiley_25708) < 0.5))
  {
    _GetLight_1_return_value5696 = sign(_uv_Smiley_25708.x);
    _uv_Smiley_25708.x = abs(_uv_Smiley_25708.x);
    _uv_Head_25715 = _uv_Smiley_25708;
    _sdGrid_1_has_returned5649 = false;
    _col_Head_25718 = float4(0.89999998, 0.64999998, 0.1, 1.0);
    _sdGrid_1_return_value5650 = length(_uv_Head_25715);
    _col_Head_25718.w = smoothstep(0.5, 0.49000001, _sdGrid_1_return_value5650);
    _GetDist_1_return_value_inlined_85690 = 0.34999999;
    _r_Hash21Color_15677 = 0.5;
    _side_RayMarch_15639 = _sdGrid_1_return_value5650;
    _GetNormal_1_has_returned5684 = false;
    _Hash21_1_return_value_inlined_15678 = clamp(((_side_RayMarch_15639 - _GetDist_1_return_value_inlined_85690) / (_r_Hash21Color_15677 - _GetDist_1_return_value_inlined_85690)), 0.0, 1.0);
    _GetNormal_1_has_returned5684 = true;
    _GetDist_1_return_value5647 = _Hash21_1_return_value_inlined_15678;
    _d_GetNormal_15687 = _GetDist_1_return_value5647;
    _d_GetNormal_15687 *= _d_GetNormal_15687;
    _col_Head_25718.xyz *= (1.0 - (_d_GetNormal_15687 * 0.5));
    _col_Head_25718.xyz = lerp(_col_Head_25718.xyz, float3(0.60000002, 0.30000001, 0.1), smoothstep(0.47, 0.47999999, _sdGrid_1_return_value5650));
    _off_sdSpheres_15661 = smoothstep(0.41, 0.405, _sdGrid_1_return_value5650);
    _spheres_GetDist_15665 = 0.41;
    _RayMarch_1_return_value_inlined_125668 = -0.1;
    _GetDist_1_return_value_inlined_75689 = 0.75;
    _sdSpheres_1_return_value5656 = 0.0;
    _GetDist_1_return_value_inlined_65686 = _uv_Head_25715.y;
    _Hash21Color_1_has_returned5674 = false;
    _plane_sdGrid_15651 = ((clamp(((_GetDist_1_return_value_inlined_65686 - _spheres_GetDist_15665) / (_RayMarch_1_return_value_inlined_125668 - _spheres_GetDist_15665)), 0.0, 1.0) * (_sdSpheres_1_return_value5656 - _GetDist_1_return_value_inlined_75689)) + _GetDist_1_return_value_inlined_75689);
    _Hash21Color_1_has_returned5674 = true;
    _Hash21_1_return_value_inlined_25680 = _plane_sdGrid_15651;
    _off_sdSpheres_15661 *= _Hash21_1_return_value_inlined_25680;
    _off_sdSpheres_15661 *= smoothstep(0.18000001, 0.19, length((_uv_Head_25715 - float2(0.20999999, 0.079999998))));
    _col_Head_25718.xyz = lerp(_col_Head_25718.xyz, float3(1.0, 1.0, 1.0), _off_sdSpheres_15661);
    _sdGrid_1_return_value5650 = length((_uv_Head_25715 - float2(0.25, -0.2)));
    _g_Hash21Color_15679 = (smoothstep(0.2, 0.0099999998, _sdGrid_1_return_value5650) * 0.40000001);
    _g_Hash21Color_15679 *= smoothstep(0.17, 0.16, _sdGrid_1_return_value5650);
    _col_Head_25718.xyz = lerp(_col_Head_25718.xyz, float3(1.0, 0.1, 0.1), _g_Hash21Color_15679);
    _Head_2_return_value5717 = _col_Head_25718;
    _sdGrid_1_has_returned5649 = true;
    _Head_2_return_value_inlined_215737 = _Head_2_return_value5717;
    _head_Smiley_25738 = _Head_2_return_value_inlined_215737;
    _col_Smiley_25713 = lerp(_col_Smiley_25713, _head_Smiley_25738, _head_Smiley_25738.w);
    if ((length((_uv_Smiley_25708 - float2(0.2, 0.075000003))) < 0.175))
    {
      _e_GetNormal_15688 = _uv_Smiley_25708;
      _rect_within_25740 = float4(0.029999999, -0.1, 0.37, 0.25);
      _RayMarch_1_has_returned5640 = false;
      _within_2_return_value5742 = ((_e_GetNormal_15688 - _rect_within_25740.xy) / (_rect_within_25740.zw - _rect_within_25740.xy));
      _RayMarch_1_has_returned5640 = true;
      _within_2_return_value_inlined_225743 = _within_2_return_value5742;
      _uv_Eye_25744 = _within_2_return_value_inlined_225743;
      _sdGrid_1_return_value_inlined_45652 = _GetLight_1_return_value5696;
      _mouse_main_15615 = _m_Smiley_25709;
      _pitch_main_15617 = _dO_RayMarch_15642;
      _offset_1_has_returned5633 = false;
      _uv_Eye_25744 -= 0.5;
      _uv_Eye_25744.x *= _sdGrid_1_return_value_inlined_45652;
      _Hash21_1_return_value5659 = length(_uv_Eye_25744);
      _irisCol_Eye_25751 = float4(0.30000001, 0.5, 1.0, 1.0);
      _col_Eye_25752 = lerp(float4(1.0, 1.0, 1.0, 1.0), _irisCol_Eye_25751, (smoothstep(0.1, 0.69999999, _Hash21_1_return_value5659) * 0.5));
      _col_Eye_25752.w = smoothstep(0.5, 0.47999999, _Hash21_1_return_value5659);
      _col_Eye_25752.xyz *= (1.0 - ((smoothstep(0.44999999, 0.5, _Hash21_1_return_value5659) * 0.5) * clamp(((-_uv_Eye_25744.y) - (_uv_Eye_25744.x * _sdGrid_1_return_value_inlined_45652)), 0.0, 1.0)));
      _Hash21_1_return_value5659 = length((_uv_Eye_25744 - (_mouse_main_15615 * 0.40000001)));
      _col_Eye_25752.xyz = lerp(_col_Eye_25752.xyz, float3(0.0, 0.0, 0.0), smoothstep(0.30000001, 0.28, _Hash21_1_return_value5659));
      _irisCol_Eye_25751.xyz *= (1.0 + smoothstep(0.30000001, 0.050000001, _Hash21_1_return_value5659));
      _GetLight_1_return_value_inlined_175699 = smoothstep(0.28, 0.25, _Hash21_1_return_value5659);
      _col_Eye_25752.xyz = lerp(_col_Eye_25752.xyz, _irisCol_Eye_25751.xyz, _GetLight_1_return_value_inlined_175699);
      _Hash21_1_return_value5659 = length((_uv_Eye_25744 - (_mouse_main_15615 * 0.44999999)));
      _b_Hash21Color_15681 = lerp(0.40000001, 0.16, _pitch_main_15617);
      _GetDist_1_return_value_inlined_105666 = smoothstep(_b_Hash21Color_15681, (_b_Hash21Color_15681 * 0.85000002), _Hash21_1_return_value5659);
      _GetDist_1_return_value_inlined_105666 *= _GetLight_1_return_value_inlined_175699;
      _col_Eye_25752.xyz = lerp(_col_Eye_25752.xyz, float3(0.0, 0.0, 0.0), _GetDist_1_return_value_inlined_105666);
      _yaw_main_15616 = (iTime * 3.0);
      _offs_Eye_25757 = vec2_ctor(sin((_yaw_main_15616 + (_uv_Eye_25744.y * 25.0))), sin((_yaw_main_15616 + (_uv_Eye_25744.x * 25.0))));
      _offs_Eye_25757 *= (0.0099999998 * (1.0 - _pitch_main_15617));
      _uv_Eye_25744 += _offs_Eye_25757;
      _Hash21_1_return_value_inlined_05676 = smoothstep(0.1, 0.090000004, length((_uv_Eye_25744 - float2(-0.15000001, 0.15000001))));
      _Hash21_1_return_value_inlined_05676 += smoothstep(0.07, 0.050000001, length((_uv_Eye_25744 + float2(-0.079999998, 0.079999998))));
      _col_Eye_25752.xyz = lerp(_col_Eye_25752.xyz, float3(1.0, 1.0, 1.0), _Hash21_1_return_value_inlined_05676);
      _Eye_2_return_value5749 = _col_Eye_25752;
      _offset_1_has_returned5633 = true;
      _Eye_2_return_value_inlined_235759 = _Eye_2_return_value5749;
      _eye_Smiley_25760 = _Eye_2_return_value_inlined_235759;
      _col_Smiley_25713 = lerp(_col_Smiley_25713, _eye_Smiley_25760, _eye_Smiley_25760.w);
    }
    if ((length((_uv_Smiley_25708 - float2(0.0, -0.15000001))) < 0.30000001))
    {
      _e_GetNormal_15688 = _uv_Smiley_25708;
      _rect_within_25740 = float4(-0.30000001, -0.43000001, 0.30000001, -0.13);
      _RayMarch_1_has_returned5640 = false;
      _within_2_return_value5742 = ((_e_GetNormal_15688 - _rect_within_25740.xy) / (_rect_within_25740.zw - _rect_within_25740.xy));
      _RayMarch_1_has_returned5640 = true;
      _p_Hash21_15657 = _within_2_return_value5742;
      _uv_Mouth_25762 = _p_Hash21_15657;
      _grid_GetDist_15653 = _dO_RayMarch_15642;
      _GetLight_1_has_returned5695 = false;
      _uv_Mouth_25762 -= 0.5;
      _col_Mouth_25766 = float4(0.5, 0.18000001, 0.050000001, 1.0);
      _uv_Mouth_25762.y *= 1.5;
      _uv_Mouth_25762.y -= (((_uv_Mouth_25762.x * _uv_Mouth_25762.x) * 2.0) * _grid_GetDist_15653);
      _uv_Mouth_25762.x *= lerp(2.5, 1.0, _grid_GetDist_15653);
      _sdSpheres_1_return_value_inlined_145672 = length(_uv_Mouth_25762);
      _col_Mouth_25766.w = smoothstep(0.5, 0.47999999, _sdSpheres_1_return_value_inlined_145672);
      _tUv_Mouth_25768 = _uv_Mouth_25762;
      _tUv_Mouth_25768.y += (((abs(_uv_Mouth_25762.x) * 0.5) + 0.1) * (1.0 - _grid_GetDist_15653));
      _Hash21_1_return_value_inlined_35660 = length((_tUv_Mouth_25768 - float2(0.0, 0.60000002)));
      _ro_RayMarch_15637 = (float3(1.0, 1.0, 1.0) * smoothstep(0.60000002, 0.34999999, _sdSpheres_1_return_value_inlined_145672));
      _col_Mouth_25766.xyz = lerp(_col_Mouth_25766.xyz, _ro_RayMarch_15637, smoothstep(0.40000001, 0.37, _Hash21_1_return_value_inlined_35660));
      _Hash21_1_return_value_inlined_35660 = length((_uv_Mouth_25762 + float2(0.0, 0.5)));
      _col_Mouth_25766.xyz = lerp(_col_Mouth_25766.xyz, float3(1.0, 0.5, 0.5), smoothstep(0.5, 0.2, _Hash21_1_return_value_inlined_35660));
      _Mouth_2_return_value5765 = _col_Mouth_25766;
      _GetLight_1_has_returned5695 = true;
      _Mouth_2_return_value_inlined_255771 = _Mouth_2_return_value5765;
      _mouth_Smiley_25772 = _Mouth_2_return_value_inlined_255771;
      _col_Smiley_25713 = lerp(_col_Smiley_25713, _mouth_Smiley_25772, _mouth_Smiley_25772.w);
    }
    if ((length((_uv_Smiley_25708 - float2(0.185, 0.32499999))) < 0.18000001))
    {
      _e_GetNormal_15688 = _uv_Smiley_25708;
      _rect_within_25740 = float4(0.029999999, 0.2, 0.40000001, 0.44999999);
      _RayMarch_1_has_returned5640 = false;
      _within_2_return_value5742 = ((_e_GetNormal_15688 - _rect_within_25740.xy) / (_rect_within_25740.zw - _rect_within_25740.xy));
      _RayMarch_1_has_returned5640 = true;
      _within_2_return_value_inlined_265773 = _within_2_return_value5742;
      _p_Hash21Color_15673 = _within_2_return_value_inlined_265773;
      _smile_Brow_25775 = _dO_RayMarch_15642;
      _GetDist_1_has_returned5646 = false;
      _GetDist_1_return_value_inlined_95691 = lerp(0.2, 0.0, _smile_Brow_25775);
      _p_Hash21Color_15673.y += _GetDist_1_return_value_inlined_95691;
      _dS_RayMarch_15667 = _p_Hash21Color_15673.y;
      _p_Hash21Color_15673.y += ((_p_Hash21Color_15673.x * lerp(0.5, 0.80000001, _smile_Brow_25775)) - lerp(0.1, 0.30000001, _smile_Brow_25775));
      _p_Hash21Color_15673.x -= lerp(0.0, 0.1, _smile_Brow_25775);
      _p_Hash21Color_15673 -= 0.5;
      _col_Brow_25780 = float4(0.0, 0.0, 0.0, 0.0);
      _sdGrid_1_return_value_inlined_135671 = 0.1;
      _d1_Brow_25782 = length(_p_Hash21Color_15673);
      _s1_Brow_25783 = smoothstep(0.44999999, (0.44999999 - _sdGrid_1_return_value_inlined_135671), _d1_Brow_25782);
      _d2_Brow_25784 = length((_p_Hash21Color_15673 - float2(0.07, -0.14)));
      _s2_Brow_25785 = smoothstep(0.5, (0.5 - _sdGrid_1_return_value_inlined_135671), _d2_Brow_25784);
      _browMask_Brow_25786 = clamp((_s1_Brow_25783 - _s2_Brow_25785), 0.0, 1.0);
      _GetDist_1_return_value_inlined_85690 = 0.69999999;
      _r_Hash21Color_15677 = 0.80000001;
      _side_RayMarch_15639 = _dS_RayMarch_15667;
      _GetNormal_1_has_returned5684 = false;
      _Hash21_1_return_value_inlined_15678 = clamp(((_side_RayMarch_15639 - _GetDist_1_return_value_inlined_85690) / (_r_Hash21Color_15677 - _GetDist_1_return_value_inlined_85690)), 0.0, 1.0);
      _GetNormal_1_has_returned5684 = true;
      _diff_GetLight_15698 = _Hash21_1_return_value_inlined_15678;
      _sdSpheres_1_return_value_inlined_55664 = (_diff_GetLight_15698 * 0.75);
      _sdSpheres_1_return_value_inlined_55664 *= smoothstep(0.60000002, 0.89999998, _browMask_Brow_25786);
      _sdSpheres_1_return_value_inlined_55664 *= _smile_Brow_25775;
      _browCol_Brow_25789 = lerp(float4(0.40000001, 0.2, 0.2, 1.0), float4(1.0, 0.75, 0.5, 1.0), _sdSpheres_1_return_value_inlined_55664);
      _p_Hash21Color_15673.y += (0.15000001 - (_GetDist_1_return_value_inlined_95691 * 0.5));
      _sdGrid_1_return_value_inlined_135671 += lerp(0.0, 0.1, _smile_Brow_25775);
      _d1_Brow_25782 = length(_p_Hash21Color_15673);
      _s1_Brow_25783 = smoothstep(0.44999999, (0.44999999 - _sdGrid_1_return_value_inlined_135671), _d1_Brow_25782);
      _d2_Brow_25784 = length((_p_Hash21Color_15673 - float2(0.07, -0.14)));
      _s2_Brow_25785 = smoothstep(0.5, (0.5 - _sdGrid_1_return_value_inlined_135671), _d2_Brow_25784);
      _RayMarch_1_return_value5641 = clamp((_s1_Brow_25783 - _s2_Brow_25785), 0.0, 1.0);
      _col_Brow_25780 = lerp(_col_Brow_25780, float4(0.0, 0.0, 0.0, 1.0), (smoothstep(0.0, 1.0, _RayMarch_1_return_value5641) * 0.5));
      _col_Brow_25780 = lerp(_col_Brow_25780, _browCol_Brow_25789, smoothstep(0.2, 0.40000001, _browMask_Brow_25786));
      _cs_main_15618 = _col_Brow_25780;
      _GetDist_1_has_returned5646 = true;
      _Brow_2_return_value_inlined_275791 = _cs_main_15618;
      _brow_Smiley_25792 = _Brow_2_return_value_inlined_275791;
      _col_Smiley_25713 = lerp(_col_Smiley_25713, _brow_Smiley_25792, _brow_Smiley_25792.w);
    }
  }
  _Smiley_2_return_value5712 = _col_Smiley_25713;
  _Hash21_1_has_returned5658 = true;
  _Smiley_2_return_value_inlined_285793 = _Smiley_2_return_value5712;
  _fragColor_2 = _Smiley_2_return_value_inlined_285793;
  _fragColor_2.w = 1.0;
  out_fragColor.xyz *= (dot((round((clamp(_fragColor_2, float4(0.0, 0.0, 0.0, 0.0), float4(1.0, 1.0, 1.0, 1.0)) * 255.0)) / 255.0).xyz, float3(1.0, 1.0, 1.0)) / 3.0);
  out_fragColor.xyz = pow(out_fragColor.xyz, float3(0.5, 0.5, 0.5));
  return out_fragColor;
}

// INITIAL HLSL END



// FRAGMENT SHADER END
 