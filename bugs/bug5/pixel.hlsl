#include "header.hlsli"

#pragma warning( disable: 3556 3571 )
struct _bound3_2
{
  float3 _mMin;
  float3 _mMax;
};
#pragma pack_matrix(row_major)
struct rm__bound3_2
{
  float3 _mMin;
  float3 _mMax;
};
#pragma pack_matrix(column_major)
struct std__bound3_2
{
  float3 _mMin;
  float3 _mMax;
};
#pragma pack_matrix(row_major)
struct std_rm__bound3_2
{
  float3 _mMin;
  float3 _mMax;
};
#pragma pack_matrix(column_major)
struct std_fp__bound3_2
{
  float3 _mMin;
  float pad_0;
  float3 _mMax;
  float pad_1;
};
#pragma pack_matrix(row_major)
struct std_rm_fp__bound3_2
{
  float3 _mMin;
  float pad_2;
  float3 _mMax;
  float pad_3;
};
#pragma pack_matrix(column_major)
_bound3_2 _bound3_2_ctor(float3 x0, float3 x1)
{
  _bound3_2 structure = { x0, x1};
  return structure;
}
float float_ctor_int(int x0)
{
  return float(x0);
}
float2 vec2_ctor(float x0, float x1)
{
  return float2(x0, x1);
}
float2 vec2_ctor(float2 x0)
{
  return float2(x0);
}
float3 vec3_ctor(float x0, float x1, float x2)
{
  return float3(x0, x1, x2);
}
float3 vec3_ctor(float2 x0, float x1)
{
  return float3(x0, x1);
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
static float4 _fragColor_1 = {0, 0, 0, 0};
static float4 _fragColor_2 = {0, 0, 0, 0};
;

float4 PS(VertexOut pIn) : SV_Target {
  gl_FragCoord = float4(pIn.posH.x, iResolution.y-pIn.posH.y, pIn.posH.z, pIn.posH.w);
  int _count_main_15616 = {0};
  float2 _uv_main_15617 = {0, 0};
  float2 _p_hash_15618 = {0, 0};
  bool _hash_1_has_returned5619 = {0};
  float _hash_1_return_value5620 = {0};
  float _h_hash_15621 = {0};
  float _hash_1_return_value_inlined_115622 = {0};
  float _hash_1_return_value_inlined_125623 = {0};
  float3 _dir_main_15624 = {0, 0, 0};
  float2 _p_rot_15625 = {0, 0};
  float _a_rot_15626 = {0};
  bool _rot_1_has_returned5627 = {0};
  float2 _rot_1_return_value5628 = {0, 0};
  float2 _rot_1_return_value_inlined_135629 = {0, 0};
  float2 _rot_1_return_value_inlined_145630 = {0, 0};
  float3 _pos_main_15631 = {0, 0, 0};
  float3 _col_main_15632 = {0, 0, 0};
  float _t_main_15633 = {0};
  float _M_main_15634 = {0};
  float _bsh_main_15635 = {0};
  float _dens_main_15636 = {0};
  int _i_main_15637 = {0};
  float3 _p_map1_15638 = {0, 0, 0};
  float _scale_map1_15639 = {0};
  bool _map1_1_has_returned5640 = {0};
  float _map1_1_return_value5641 = {0};
  float _G_map1_15642 = {0};
  float _F_map1_15643 = {0};
  float3 _p_nac_15644 = {0, 0, 0};
  float2 _F_nac_15645 = {0, 0};
  float3 _o_nac_15646 = {0, 0, 0};
  bool _nac_1_has_returned5647 = {0};
  float _nac_1_return_value5648 = {0};
  float _nac_1_return_value_inlined_45650 = {0};
  float _t_map1_15651 = {0};
  float _nac_1_return_value_inlined_55652 = {0};
  float _nac_1_return_value_inlined_65653 = {0};
  float _nac_1_return_value_inlined_75654 = {0};
  float _map1_1_return_value_inlined_155655 = {0};
  float _temp_main_15656 = {0};
  float _y_main_15657 = {0};
  float3 _p_map2_15658 = {0, 0, 0};
  bool _map2_1_has_returned5659 = {0};
  float _map2_1_return_value5660 = {0};
  float _map1_1_return_value_inlined_85661 = {0};
  float _t_map2_15662 = {0};
  float3 _p_recta_15663 = {0, 0, 0};
  float3 _F_recta_15664 = {0, 0, 0};
  float3 _o_recta_15665 = {0, 0, 0};
  bool _recta_1_has_returned5666 = {0};
  float _recta_1_return_value5667 = {0};
  float _recta_1_return_value_inlined_95669 = {0};
  float _map2_1_return_value_inlined_165670 = {0};
  float2 _p_gennoise_15671 = {0, 0};
  bool _gennoise_1_has_returned5672 = {0};
  float _gennoise_1_return_value5673 = {0};
  float _d_gennoise_15674 = {0};
  float2x2 _h_gennoise_15675 = {0, 0, 0, 0};
  float _color_gennoise_15676 = {0};
  int _i_gennoise_15677 = {0};
  float2 _p_noise_15678 = {0, 0};
  bool _noise_1_has_returned5679 = {0};
  float _noise_1_return_value5680 = {0};
  float2 _i_noise_15681 = {0, 0};
  float2 _f_noise_15682 = {0, 0};
  float _hash_1_return_value_inlined_05683 = {0};
  float _hash_1_return_value_inlined_15684 = {0};
  float _hash_1_return_value_inlined_25685 = {0};
  float _hash_1_return_value_inlined_35686 = {0};
  float _noise_1_return_value_inlined_105687 = {0};
  float _gennoise_1_return_value_inlined_175688 = {0};
  float3 _tot_main_25689 = {0, 0, 0};
  float3 _ro_main_25694 = {0, 0, 0};
  float3 _ww_main_25696 = {0, 0, 0};
  float3 _uu_main_25697 = {0, 0, 0};
  float3 _vv_main_25698 = {0, 0, 0};
  float3 _rd_main_25699 = {0, 0, 0};
  float3 _p0_main_25701 = {0, 0, 0};
  float3 _p2_main_25703 = {0, 0, 0};
  float3 _p3_main_25704 = {0, 0, 0};
  float3 _col_main_25706 = {0, 0, 0};
  float3 _ro_iBezier_25707 = {0, 0, 0};
  float3 _p0_iBezier_25709 = {0, 0, 0};
  float3 _p1_iBezier_25710 = {0, 0, 0};
  float3 _p3_iBezier_25712 = {0, 0, 0};
  float3 _a_iBezier_25719 = {0, 0, 0};
  float3 _b_iBezier_25723 = {0, 0, 0};
  float3 _ro_iSegment_25724 = {0, 0, 0};
  float3 _rd_iSegment_25725 = {0, 0, 0};
  float3 _b_iSegment_25727 = {0, 0, 0};
  float3 _iSegment_2_return_value5729 = {0, 0, 0};
  float3 _ba_iSegment_25730 = {0, 0, 0};
  float3 _oa_iSegment_25731 = {0, 0, 0};
  float3 _p_iSegment_25737 = {0, 0, 0};
  float3 _q_iSegment_25738 = {0, 0, 0};
  float3 _v_length2_25739 = {0, 0, 0};
  float3 _r_iBezier_25744 = {0, 0, 0};
  float3 _p0_BezierAABB_25748 = {0, 0, 0};
  float3 _p1_BezierAABB_25749 = {0, 0, 0};
  float3 _p2_BezierAABB_25750 = {0, 0, 0};
  float3 _p3_BezierAABB_25751 = {0, 0, 0};
  _bound3_2 _BezierAABB_2_return_value5753 = {0, 0, 0, 0, 0, 0};
  float3 _mi_BezierAABB_25754 = {0, 0, 0};
  float3 _ma_BezierAABB_25755 = {0, 0, 0};
  float3 _b_BezierAABB_25757 = {0, 0, 0};
  float3 _a_BezierAABB_25758 = {0, 0, 0};
  float3 _h_BezierAABB_25759 = {0, 0, 0};
  float3 _g_BezierAABB_25760 = {0, 0, 0};
  float3 _t1_BezierAABB_25761 = {0, 0, 0};
  float3 _s1_BezierAABB_25762 = {0, 0, 0};
  float3 _t2_BezierAABB_25763 = {0, 0, 0};
  float3 _s2_BezierAABB_25764 = {0, 0, 0};
  float3 _q1_BezierAABB_25765 = {0, 0, 0};
  float3 _q2_BezierAABB_25766 = {0, 0, 0};
  _bound3_2 _BezierAABB_2_return_value_inlined_215767 = {0, 0, 0, 0, 0, 0};
  _bound3_2 _bbox_main_25768 = {0, 0, 0, 0, 0, 0};
  float3 _bcen_main_25769 = {0, 0, 0};
  float3 _ro_iBox_25771 = {0, 0, 0};
  float3 _rd_iBox_25772 = {0, 0, 0};
  float3 _cen_iBox_25773 = {0, 0, 0};
  float3 _rad_iBox_25774 = {0, 0, 0};
  float3 _m_iBox_25777 = {0, 0, 0};
  float3 _n_iBox_25778 = {0, 0, 0};
  float3 _k_iBox_25779 = {0, 0, 0};
  float3 _pos_main_25786 = {0, 0, 0};
  float3 _e_main_25787 = {0, 0, 0};
  out_fragColor = float4(0.0, 0.0, 0.0, 0.0);
  _fragColor_1 = float4(0.0, 0.0, 0.0, 0.0);
  { for((_count_main_15616 = 0); (_count_main_15616 < 2); (_count_main_15616++))
    {
      _uv_main_15617 = (-1.0 + (2.0 * (gl_FragCoord.xy / iResolution.xy)));
      _uv_main_15617 *= 1.4;
      _p_hash_15618 = ((_uv_main_15617.xy + iTime) + float_ctor_int(_count_main_15616));
      _hash_1_has_returned5619 = false;
      _h_hash_15621 = dot(_p_hash_15618, float2(127.1, 311.70001));
      _hash_1_return_value5620 = ((frac((sin(_h_hash_15621) * 458.32541)) * 2.0) - 1.0);
      _hash_1_has_returned5619 = true;
      _hash_1_return_value_inlined_115622 = _hash_1_return_value5620;
      _uv_main_15617.x += (_hash_1_return_value_inlined_115622 / 512.0);
      _p_hash_15618 = ((_uv_main_15617.yx + iTime) + float_ctor_int(_count_main_15616));
      _hash_1_has_returned5619 = false;
      _h_hash_15621 = dot(_p_hash_15618, float2(127.1, 311.70001));
      _hash_1_return_value5620 = ((frac((sin(_h_hash_15621) * 458.32541)) * 2.0) - 1.0);
      _hash_1_has_returned5619 = true;
      _hash_1_return_value_inlined_125623 = _hash_1_return_value5620;
      _uv_main_15617.y += (_hash_1_return_value_inlined_125623 / 512.0);
      _dir_main_15624 = normalize(vec3_ctor((_uv_main_15617 * vec2_ctor((iResolution.x / iResolution.y), 1.0)), (1.0 + (sin(iTime) * 0.0099999998))));
      _p_rot_15625 = _dir_main_15624.xz;
      _a_rot_15626 = 1.2217306;
      _rot_1_has_returned5627 = false;
      _rot_1_return_value5628 = vec2_ctor(((_p_rot_15625.x * cos(_a_rot_15626)) - (_p_rot_15625.y * sin(_a_rot_15626))), ((_p_rot_15625.x * sin(_a_rot_15626)) + (_p_rot_15625.y * cos(_a_rot_15626))));
      _rot_1_has_returned5627 = true;
      _rot_1_return_value_inlined_135629 = _rot_1_return_value5628;
      _dir_main_15624.xz = _rot_1_return_value_inlined_135629;
      _p_rot_15625 = _dir_main_15624.xy;
      _a_rot_15626 = 1.5707964;
      _rot_1_has_returned5627 = false;
      _rot_1_return_value5628 = vec2_ctor(((_p_rot_15625.x * cos(_a_rot_15626)) - (_p_rot_15625.y * sin(_a_rot_15626))), ((_p_rot_15625.x * sin(_a_rot_15626)) + (_p_rot_15625.y * cos(_a_rot_15626))));
      _rot_1_has_returned5627 = true;
      _rot_1_return_value_inlined_145630 = _rot_1_return_value5628;
      _dir_main_15624.xy = _rot_1_return_value_inlined_145630;
      _pos_main_15631 = vec3_ctor((-0.1 + (sin((iTime * 0.30000001)) * 0.1)), (2.0 + (cos((iTime * 0.40000001)) * 0.1)), -3.5);
      _col_main_15632 = float3(0.0, 0.0, 0.0);
      _t_main_15633 = 0.0;
      _M_main_15634 = 1.002;
      _bsh_main_15635 = 0.0099999998;
      _dens_main_15636 = 0.0;
      { for((_i_main_15637 = (0 + 0)); (_i_main_15637 < 600); (_i_main_15637++))
        {
          _p_map1_15638 = ((_pos_main_15631 + (_dir_main_15624 * _t_main_15633)));
          _scale_map1_15639 = (0.60000002 + 0.0);
          _map1_1_has_returned5640 = (false + false);
          _G_map1_15642 = (0.5 + 0.0);
          _F_map1_15643 = ((0.5 * _scale_map1_15639) + 0.0);
          _p_nac_15644 = (_p_map1_15638);
          _F_nac_15645 = (vec2_ctor(_F_map1_15643, _F_map1_15643));
          _o_nac_15646 = (vec3_ctor(_G_map1_15642, _G_map1_15642, 0.0));
          _nac_1_has_returned5647 = (false + false);
          _p_nac_15644 += (_o_nac_15646);
          _nac_1_return_value5648 = ((length(max((abs(_p_nac_15644.xy) - vec2_ctor(_F_nac_15645)), 0.0)) - 9.9999997e-05) + 0.0);
          _nac_1_has_returned5647 = (true + false);
          _nac_1_return_value_inlined_45650 = (_nac_1_return_value5648 + 0.0);
          _t_map1_15651 = (_nac_1_return_value_inlined_45650 + 0.0);
          _p_nac_15644 = (_p_map1_15638);
          _F_nac_15645 = (vec2_ctor(_F_map1_15643, _F_map1_15643));
          _o_nac_15646 = (vec3_ctor(_G_map1_15642, (-_G_map1_15642), 0.0));
          _nac_1_has_returned5647 = (false + false);
          _p_nac_15644 += (_o_nac_15646);
          _nac_1_return_value5648 = ((length(max((abs(_p_nac_15644.xy) - vec2_ctor(_F_nac_15645)), 0.0)) - 9.9999997e-05) + 0.0);
          _nac_1_has_returned5647 = (true + false);
          _nac_1_return_value_inlined_55652 = (_nac_1_return_value5648 + 0.0);
          _t_map1_15651 = (min(_t_map1_15651, _nac_1_return_value_inlined_55652) + 0.0);
          _p_nac_15644 = (_p_map1_15638);
          _F_nac_15645 = (vec2_ctor(_F_map1_15643, _F_map1_15643));
          _o_nac_15646 = (vec3_ctor((-_G_map1_15642), _G_map1_15642, 0.0));
          _nac_1_has_returned5647 = (false + false);
          _p_nac_15644 += (_o_nac_15646);
          _nac_1_return_value5648 = ((length(max((abs(_p_nac_15644.xy) - vec2_ctor(_F_nac_15645)), 0.0)) - 9.9999997e-05) + 0.0);
          _nac_1_has_returned5647 = (true + false);
          _nac_1_return_value_inlined_65653 = (_nac_1_return_value5648 + 0.0);
          _t_map1_15651 = (min(_t_map1_15651, _nac_1_return_value_inlined_65653) + 0.0);
          _p_nac_15644 = (_p_map1_15638);
          _F_nac_15645 = (vec2_ctor(_F_map1_15643, _F_map1_15643));
          _o_nac_15646 = (vec3_ctor((-_G_map1_15642), (-_G_map1_15642), 0.0));
          _nac_1_has_returned5647 = (false + false);
          _p_nac_15644 += (_o_nac_15646);
          _nac_1_return_value5648 = ((length(max((abs(_p_nac_15644.xy) - vec2_ctor(_F_nac_15645)), 0.0)) - 9.9999997e-05) + 0.0);
          _nac_1_has_returned5647 = (true + false);
          _nac_1_return_value_inlined_75654 = (_nac_1_return_value5648 + 0.0);
          _t_map1_15651 = (min(_t_map1_15651, _nac_1_return_value_inlined_75654) + 0.0);
          _map1_1_return_value5641 = (_t_map1_15651 + 0.0);
          _map1_1_has_returned5640 = (true + false);
          _map1_1_return_value_inlined_155655 = (_map1_1_return_value5641 + 0.0);
          _temp_main_15656 = (_map1_1_return_value_inlined_155655 + 0.0);
          if ((_temp_main_15656 < 0.2))
          {
            _col_main_15632 += ((float3(0.0024999999, 0.0034999999, 0.0085000005) * _dens_main_15636));
          }
          _t_main_15633 += ((_bsh_main_15635 * _M_main_15634) + 0.0);
          _bsh_main_15635 *= (_M_main_15634 + 0.0);
          _dens_main_15636 += (0.025 + 0.0);
        }
      }
      _t_main_15633 = 0.0;
      _y_main_15657 = 0.0;
      { for((_i_main_15637 = (0 + 0)); (_i_main_15637 < 1250); (_i_main_15637++))
        {
          _p_map2_15658 = ((_pos_main_15631 + (_dir_main_15624 * _t_main_15633)));
          _map2_1_has_returned5659 = (false + false);
          _p_map1_15638 = (_p_map2_15658);
          _scale_map1_15639 = (0.89999998 + 0.0);
          _map1_1_has_returned5640 = (false + false);
          _G_map1_15642 = (0.5 + 0.0);
          _F_map1_15643 = ((0.5 * _scale_map1_15639) + 0.0);
          _p_nac_15644 = (_p_map1_15638);
          _F_nac_15645 = (vec2_ctor(_F_map1_15643, _F_map1_15643));
          _o_nac_15646 = (vec3_ctor(_G_map1_15642, _G_map1_15642, 0.0));
          _nac_1_has_returned5647 = (false + false);
          _p_nac_15644 += (_o_nac_15646);
          _nac_1_return_value5648 = ((length(max((abs(_p_nac_15644.xy) - vec2_ctor(_F_nac_15645)), 0.0)) - 9.9999997e-05) + 0.0);
          _nac_1_has_returned5647 = (true + false);
          _nac_1_return_value_inlined_45650 = (_nac_1_return_value5648 + 0.0);
          _t_map1_15651 = (_nac_1_return_value_inlined_45650 + 0.0);
          _p_nac_15644 = (_p_map1_15638);
          _F_nac_15645 = (vec2_ctor(_F_map1_15643, _F_map1_15643));
          _o_nac_15646 = (vec3_ctor(_G_map1_15642, (-_G_map1_15642), 0.0));
          _nac_1_has_returned5647 = (false + false);
          _p_nac_15644 += (_o_nac_15646);
          _nac_1_return_value5648 = ((length(max((abs(_p_nac_15644.xy) - vec2_ctor(_F_nac_15645)), 0.0)) - 9.9999997e-05) + 0.0);
          _nac_1_has_returned5647 = (true + false);
          _nac_1_return_value_inlined_55652 = (_nac_1_return_value5648 + 0.0);
          _t_map1_15651 = (min(_t_map1_15651, _nac_1_return_value_inlined_55652) + 0.0);
          _p_nac_15644 = (_p_map1_15638);
          _F_nac_15645 = (vec2_ctor(_F_map1_15643, _F_map1_15643));
          _o_nac_15646 = (vec3_ctor((-_G_map1_15642), _G_map1_15642, 0.0));
          _nac_1_has_returned5647 = (false + false);
          _p_nac_15644 += (_o_nac_15646);
          _nac_1_return_value5648 = ((length(max((abs(_p_nac_15644.xy) - vec2_ctor(_F_nac_15645)), 0.0)) - 9.9999997e-05) + 0.0);
          _nac_1_has_returned5647 = (true + false);
          _nac_1_return_value_inlined_65653 = (_nac_1_return_value5648 + 0.0);
          _t_map1_15651 = (min(_t_map1_15651, _nac_1_return_value_inlined_65653) + 0.0);
          _p_nac_15644 = (_p_map1_15638);
          _F_nac_15645 = (vec2_ctor(_F_map1_15643, _F_map1_15643));
          _o_nac_15646 = (vec3_ctor((-_G_map1_15642), (-_G_map1_15642), 0.0));
          _nac_1_has_returned5647 = (false + false);
          _p_nac_15644 += (_o_nac_15646);
          _nac_1_return_value5648 = ((length(max((abs(_p_nac_15644.xy) - vec2_ctor(_F_nac_15645)), 0.0)) - 9.9999997e-05) + 0.0);
          _nac_1_has_returned5647 = (true + false);
          _nac_1_return_value_inlined_75654 = (_nac_1_return_value5648 + 0.0);
          _t_map1_15651 = (min(_t_map1_15651, _nac_1_return_value_inlined_75654) + 0.0);
          _map1_1_return_value5641 = (_t_map1_15651 + 0.0);
          _map1_1_has_returned5640 = (true + false);
          _map1_1_return_value_inlined_85661 = (_map1_1_return_value5641 + 0.0);
          _t_map2_15662 = (_map1_1_return_value_inlined_85661 + 0.0);
          _p_recta_15663 = (_p_map2_15658);
          _F_recta_15664 = (float3(1.0, 1.0, 0.02));
          _o_recta_15665 = (float3(0.0, 0.0, 0.0));
          _recta_1_has_returned5666 = (false + false);
          _p_recta_15663 += (_o_recta_15665);
          _recta_1_return_value5667 = ((length(max((abs(_p_recta_15663) - _F_recta_15664), 0.0)) - 9.9999997e-05) + 0.0);
          _recta_1_has_returned5666 = (true + false);
          _recta_1_return_value_inlined_95669 = (_recta_1_return_value5667 + 0.0);
          _t_map2_15662 = (max(_t_map2_15662, _recta_1_return_value_inlined_95669) + 0.0);
          _map2_1_return_value5660 = (_t_map2_15662 + 0.0);
          _map2_1_has_returned5659 = (true + false);
          _map2_1_return_value_inlined_165670 = (_map2_1_return_value5660 + 0.0);
          _temp_main_15656 = (_map2_1_return_value_inlined_165670 + 0.0);
          if ((_temp_main_15656 < 0.1))
          {
            _col_main_15632 += (float3(0.00075000001, 0.0040000002, 0.0085000005));
          }
          _t_main_15633 += (_temp_main_15656 + 0.0);
          _y_main_15657++;
        }
      }
      _col_main_15632 += (((2.0 + _uv_main_15617.x) * float3(0.15000001, 0.80000001, 1.7)) + (_y_main_15657 / 1250.0));
      _p_gennoise_15671 = _dir_main_15624.xz;
      _gennoise_1_has_returned5672 = false;
      _d_gennoise_15674 = 0.5;
      _h_gennoise_15675 = float2x2(1.6, 1.2, -1.2, 1.6);
      _color_gennoise_15676 = 0.0;
      { for((_i_gennoise_15677 = (0 + 0)); (_i_gennoise_15677 < 2); (_i_gennoise_15677++))
        {
          _p_noise_15678 = (((_p_gennoise_15671 * 5.0) + iTime));
          _noise_1_has_returned5679 = (false + false);
          _i_noise_15681 = (floor(_p_noise_15678));
          _f_noise_15682 = (frac(_p_noise_15678));
          _f_noise_15682 = (((_f_noise_15682 * _f_noise_15682) * (3.0 - (2.0 * _f_noise_15682))));
          _p_hash_15618 = ((_i_noise_15681));
          _hash_1_has_returned5619 = (false + false);
          _h_hash_15621 = (dot(_p_hash_15618, float2(127.1, 311.70001)) + 0.0);
          _hash_1_return_value5620 = (((frac((sin(_h_hash_15621) * 458.32541)) * 2.0) - 1.0) + 0.0);
          _hash_1_has_returned5619 = (true + false);
          _hash_1_return_value_inlined_05683 = (_hash_1_return_value5620 + 0.0);
          _p_hash_15618 = ((_i_noise_15681 + float2(1.0, 0.0)));
          _hash_1_has_returned5619 = (false + false);
          _h_hash_15621 = (dot(_p_hash_15618, float2(127.1, 311.70001)) + 0.0);
          _hash_1_return_value5620 = (((frac((sin(_h_hash_15621) * 458.32541)) * 2.0) - 1.0) + 0.0);
          _hash_1_has_returned5619 = (true + false);
          _hash_1_return_value_inlined_15684 = (_hash_1_return_value5620 + 0.0);
          _p_hash_15618 = ((_i_noise_15681 + float2(0.0, 1.0)));
          _hash_1_has_returned5619 = (false + false);
          _h_hash_15621 = (dot(_p_hash_15618, float2(127.1, 311.70001)) + 0.0);
          _hash_1_return_value5620 = (((frac((sin(_h_hash_15621) * 458.32541)) * 2.0) - 1.0) + 0.0);
          _hash_1_has_returned5619 = (true + false);
          _hash_1_return_value_inlined_25685 = (_hash_1_return_value5620 + 0.0);
          _p_hash_15618 = ((_i_noise_15681 + float2(1.0, 1.0)));
          _hash_1_has_returned5619 = (false + false);
          _h_hash_15621 = (dot(_p_hash_15618, float2(127.1, 311.70001)) + 0.0);
          _hash_1_return_value5620 = (((frac((sin(_h_hash_15621) * 458.32541)) * 2.0) - 1.0) + 0.0);
          _hash_1_has_returned5619 = (true + false);
          _hash_1_return_value_inlined_35686 = (_hash_1_return_value5620 + 0.0);
          _noise_1_return_value5680 = (lerp(lerp(_hash_1_return_value_inlined_05683, _hash_1_return_value_inlined_15684, _f_noise_15682.x), lerp(_hash_1_return_value_inlined_25685, _hash_1_return_value_inlined_35686, _f_noise_15682.x), _f_noise_15682.y) + 0.0);
          _noise_1_has_returned5679 = (true + false);
          _noise_1_return_value_inlined_105687 = (_noise_1_return_value5680 + 0.0);
          _color_gennoise_15676 += ((_d_gennoise_15674 * _noise_1_return_value_inlined_105687) + 0.0);
          _p_gennoise_15671 = mul(_p_gennoise_15671, transpose((_h_gennoise_15675 + float2x2(0.0, 0.0, 0.0, 0.0))));
          _d_gennoise_15674 /= (2.0 + 0.0);
        }
      }
      _gennoise_1_return_value5673 = _color_gennoise_15676;
      _gennoise_1_has_returned5672 = true;
      _gennoise_1_return_value_inlined_175688 = _gennoise_1_return_value5673;
      _col_main_15632 += (_gennoise_1_return_value_inlined_175688 * 0.5);
      _col_main_15632 *= (1.0 - (_uv_main_15617.y * 0.5));
      _col_main_15632 *= float3(0.050000001, 0.050000001, 0.050000001);
      _col_main_15632 = pow(max(_col_main_15632, 9.9999997e-10), float3(0.71700001, 0.71700001, 0.71700001));
      _fragColor_1 += vec4_ctor(_col_main_15632, (1.0 / _t_main_15633));
    }
  }
  _fragColor_1 /= float4(2.0, 2.0, 2.0, 2.0);
  _fragColor_1.w = 1.0;
  out_fragColor += round((clamp(_fragColor_1, float4(0.0, 0.0, 0.0, 0.0), float4(1.0, 1.0, 1.0, 1.0)) * 255.0));
  _tot_main_25689 = float3(0.0, 0.0, 0.0);
  { for((_i_gennoise_15677 = 0); (_i_gennoise_15677 < 3); (_i_gennoise_15677++))
    {
      { for((_i_main_15637 = (0 + 0)); (_i_main_15637 < 3); (_i_main_15637++))
        {
          _F_nac_15645 = (((vec2_ctor(float_ctor_int(_i_gennoise_15677), float_ctor_int(_i_main_15637)) / 3.0) - 0.5));
          _p_rot_15625 = ((((-iResolution.xy) + (2.0 * (gl_FragCoord.xy + _F_nac_15645))) / iResolution.y));
          _ro_main_25694 = (float3(-0.5, 0.40000001, 1.5));
          _p_map1_15638 = (float3(0.0, 0.0, 0.0));
          _ww_main_25696 = (normalize((_p_map1_15638 - _ro_main_25694)));
          _uu_main_25697 = (normalize(cross(_ww_main_25696, float3(0.0, 1.0, 0.0))));
          _vv_main_25698 = (normalize(cross(_uu_main_25697, _ww_main_25696)));
          _rd_main_25699 = (normalize((((_p_rot_15625.x * _uu_main_25697) + (_p_rot_15625.y * _vv_main_25698)) + (1.5 * _ww_main_25696))));
          _scale_map1_15639 = ((iTime * 0.5) + 0.0);
          _p0_main_25701 = ((float3(0.80000001, 0.60000002, 0.80000001) * sin(((_scale_map1_15639 * 0.69999999) + float3(3.0, 1.0, 2.0)))));
          _pos_main_15631 = ((float3(0.80000001, 0.60000002, 0.80000001) * sin(((_scale_map1_15639 * 1.1) + float3(0.0, 6.0, 1.0)))));
          _p2_main_25703 = ((float3(0.80000001, 0.60000002, 0.80000001) * sin(((_scale_map1_15639 * 1.3) + float3(4.0, 2.0, 3.0)))));
          _p3_main_25704 = ((float3(0.80000001, 0.60000002, 0.80000001) * sin(((_scale_map1_15639 * 1.5) + float3(1.0, 5.0, 4.0)))));
          _dens_main_15636 = (0.0099999998 + 0.0);
          _col_main_25706 = ((float3(0.40000001, 0.40000001, 0.40000001) * (1.0 - (0.30000001 * length(_p_rot_15625)))));
          _ro_iBezier_25707 = (_ro_main_25694);
          _p_map2_15658 = (_rd_main_25699);
          _p0_iBezier_25709 = (_p0_main_25701);
          _p1_iBezier_25710 = (_pos_main_15631);
          _o_recta_15665 = (_p2_main_25703);
          _p3_iBezier_25712 = (_p3_main_25704);
          _gennoise_1_return_value_inlined_175688 = (_dens_main_15636 + 0.0);
          _gennoise_1_has_returned5672 = (false + false);
          _bsh_main_15635 = (-1.0 + 0.0);
          _map1_1_return_value_inlined_155655 = (10000000000.0 + 0.0);
          _a_iBezier_25719 = (_p0_iBezier_25709);
          { for((_count_main_15616 = (1 + 0)); (_count_main_15616 < 50); (_count_main_15616++))
            {
              _color_gennoise_15676 = ((float_ctor_int(_count_main_15616) / 49.0) + 0.0);
              _nac_1_return_value5648 = ((1.0 - _color_gennoise_15676) + 0.0);
              _b_iBezier_25723 = (((((((_p0_iBezier_25709 * _nac_1_return_value5648) * _nac_1_return_value5648) * _nac_1_return_value5648) + ((((_p1_iBezier_25710 * 3.0) * _nac_1_return_value5648) * _nac_1_return_value5648) * _color_gennoise_15676)) + ((((_o_recta_15665 * 3.0) * _nac_1_return_value5648) * _color_gennoise_15676) * _color_gennoise_15676)) + (((_p3_iBezier_25712 * _color_gennoise_15676) * _color_gennoise_15676) * _color_gennoise_15676)));
              _ro_iSegment_25724 = (_ro_iBezier_25707);
              _rd_iSegment_25725 = (_p_map2_15658);
              _dir_main_15624 = (_a_iBezier_25719);
              _b_iSegment_25727 = (_b_iBezier_25723);
              _map2_1_has_returned5659 = (false + false);
              _ba_iSegment_25730 = ((_b_iSegment_25727 - _dir_main_15624));
              _oa_iSegment_25731 = ((_ro_iSegment_25724 - _dir_main_15624));
              _temp_main_15656 = (dot(_oa_iSegment_25731, _rd_iSegment_25725) + 0.0);
              _noise_1_return_value5680 = (dot(_rd_iSegment_25725, _ba_iSegment_25730) + 0.0);
              _nac_1_return_value_inlined_45650 = (dot(_ba_iSegment_25730, _ba_iSegment_25730) + 0.0);
              _d_gennoise_15674 = (dot(_oa_iSegment_25731, _ba_iSegment_25730) + 0.0);
              _i_noise_15681 = ((vec2_ctor((((-_temp_main_15656) * _nac_1_return_value_inlined_45650) + (_noise_1_return_value5680 * _d_gennoise_15674)), (_d_gennoise_15674 - (_temp_main_15656 * _noise_1_return_value5680))) / (_nac_1_return_value_inlined_45650 - (_noise_1_return_value5680 * _noise_1_return_value5680))));
              _i_noise_15681.x = (max(_i_noise_15681.x, 0.0) + 0.0);
              _i_noise_15681.y = (clamp(_i_noise_15681.y, 0.0, 1.0) + 0.0);
              _p_iSegment_25737 = ((_dir_main_15624 + (_ba_iSegment_25730 * _i_noise_15681.y)));
              _q_iSegment_25738 = ((_ro_iSegment_25724 + (_rd_iSegment_25725 * _i_noise_15681.x)));
              _v_length2_25739 = ((_p_iSegment_25737 - _q_iSegment_25738));
              _noise_1_has_returned5679 = (false + false);
              _t_main_15633 = (dot(_v_length2_25739, _v_length2_25739) + 0.0);
              _noise_1_has_returned5679 = (true + false);
              _map1_1_return_value_inlined_85661 = (_t_main_15633 + 0.0);
              _iSegment_2_return_value5729 = (vec3_ctor(_i_noise_15681, _map1_1_return_value_inlined_85661));
              _map2_1_has_returned5659 = (true + false);
              _p_nac_15644 = (_iSegment_2_return_value5729);
              _r_iBezier_25744 = (_p_nac_15644);
              if ((_r_iBezier_25744.z < (_gennoise_1_return_value_inlined_175688 * _gennoise_1_return_value_inlined_175688)))
              {
                _map1_1_return_value_inlined_155655 = (min(_map1_1_return_value_inlined_155655, _r_iBezier_25744.x) + 0.0);
                _bsh_main_15635 = (1.0 + 0.0);
              }
              _a_iBezier_25719 = (_b_iBezier_25723);
            }
          }
          _hash_1_return_value_inlined_35686 = ((_map1_1_return_value_inlined_155655 * _bsh_main_15635) + 0.0);
          _gennoise_1_has_returned5672 = (true + false);
          _recta_1_return_value5667 = (_hash_1_return_value_inlined_35686 + 0.0);
          _nac_1_return_value_inlined_55652 = (_recta_1_return_value5667 + 0.0);
          _a_rot_15626 = (10000000000.0 + 0.0);
          if ((_nac_1_return_value_inlined_55652 > 0.0))
          {
            _a_rot_15626 = (_nac_1_return_value_inlined_55652 + 0.0);
            _col_main_25706 = (float3(1.0, 0.75, 0.30000001));
          }
          _p0_BezierAABB_25748 = (_p0_main_25701);
          _p1_BezierAABB_25749 = (_pos_main_15631);
          _p2_BezierAABB_25750 = (_p2_main_25703);
          _p3_BezierAABB_25751 = (_p3_main_25704);
          _rot_1_has_returned5627 = (false + false);
          _mi_BezierAABB_25754 = (min(_p0_BezierAABB_25748, _p3_BezierAABB_25751));
          _ma_BezierAABB_25755 = (max(_p0_BezierAABB_25748, _p3_BezierAABB_25751));
          _F_recta_15664 = (((-1.0 * _p0_BezierAABB_25748) + (1.0 * _p1_BezierAABB_25749)));
          _b_BezierAABB_25757 = ((((1.0 * _p0_BezierAABB_25748) - (2.0 * _p1_BezierAABB_25749)) + (1.0 * _p2_BezierAABB_25750)));
          _a_BezierAABB_25758 = (((((-1.0 * _p0_BezierAABB_25748) + (3.0 * _p1_BezierAABB_25749)) - (3.0 * _p2_BezierAABB_25750)) + (1.0 * _p3_BezierAABB_25751)));
          _h_BezierAABB_25759 = (((_b_BezierAABB_25757 * _b_BezierAABB_25757) - (_a_BezierAABB_25758 * _F_recta_15664)));
          if (any((_h_BezierAABB_25759 > float3(0.0, 0.0, 0.0))))
          {
            _g_BezierAABB_25760 = (sqrt(abs(_h_BezierAABB_25759)));
            _t1_BezierAABB_25761 = (clamp((((-_b_BezierAABB_25757) - _g_BezierAABB_25760) / _a_BezierAABB_25758), 0.0, 1.0));
            _s1_BezierAABB_25762 = ((1.0 - _t1_BezierAABB_25761));
            _t2_BezierAABB_25763 = (clamp((((-_b_BezierAABB_25757) + _g_BezierAABB_25760) / _a_BezierAABB_25758), 0.0, 1.0));
            _s2_BezierAABB_25764 = ((1.0 - _t2_BezierAABB_25763));
            _q1_BezierAABB_25765 = (((((((_s1_BezierAABB_25762 * _s1_BezierAABB_25762) * _s1_BezierAABB_25762) * _p0_BezierAABB_25748) + ((((3.0 * _s1_BezierAABB_25762) * _s1_BezierAABB_25762) * _t1_BezierAABB_25761) * _p1_BezierAABB_25749)) + ((((3.0 * _s1_BezierAABB_25762) * _t1_BezierAABB_25761) * _t1_BezierAABB_25761) * _p2_BezierAABB_25750)) + (((_t1_BezierAABB_25761 * _t1_BezierAABB_25761) * _t1_BezierAABB_25761) * _p3_BezierAABB_25751)));
            _q2_BezierAABB_25766 = (((((((_s2_BezierAABB_25764 * _s2_BezierAABB_25764) * _s2_BezierAABB_25764) * _p0_BezierAABB_25748) + ((((3.0 * _s2_BezierAABB_25764) * _s2_BezierAABB_25764) * _t2_BezierAABB_25763) * _p1_BezierAABB_25749)) + ((((3.0 * _s2_BezierAABB_25764) * _t2_BezierAABB_25763) * _t2_BezierAABB_25763) * _p2_BezierAABB_25750)) + (((_t2_BezierAABB_25763 * _t2_BezierAABB_25763) * _t2_BezierAABB_25763) * _p3_BezierAABB_25751)));
            if ((_h_BezierAABB_25759.x > 0.0))
            {
              _mi_BezierAABB_25754.x = (min(_mi_BezierAABB_25754.x, min(_q1_BezierAABB_25765.x, _q2_BezierAABB_25766.x)) + 0.0);
              _ma_BezierAABB_25755.x = (max(_ma_BezierAABB_25755.x, max(_q1_BezierAABB_25765.x, _q2_BezierAABB_25766.x)) + 0.0);
            }
            if ((_h_BezierAABB_25759.y > 0.0))
            {
              _mi_BezierAABB_25754.y = (min(_mi_BezierAABB_25754.y, min(_q1_BezierAABB_25765.y, _q2_BezierAABB_25766.y)) + 0.0);
              _ma_BezierAABB_25755.y = (max(_ma_BezierAABB_25755.y, max(_q1_BezierAABB_25765.y, _q2_BezierAABB_25766.y)) + 0.0);
            }
            if ((_h_BezierAABB_25759.z > 0.0))
            {
              _mi_BezierAABB_25754.z = (min(_mi_BezierAABB_25754.z, min(_q1_BezierAABB_25765.z, _q2_BezierAABB_25766.z)) + 0.0);
              _ma_BezierAABB_25755.z = (max(_ma_BezierAABB_25755.z, max(_q1_BezierAABB_25765.z, _q2_BezierAABB_25766.z)) + 0.0);
            }
          }
          _BezierAABB_2_return_value5753 = _bound3_2_ctor(_mi_BezierAABB_25754, _ma_BezierAABB_25755);
          _rot_1_has_returned5627 = (true + false);
          _BezierAABB_2_return_value_inlined_215767 = _BezierAABB_2_return_value5753;
          _bbox_main_25768 = _BezierAABB_2_return_value_inlined_215767;
          _bbox_main_25768._mMin -= (_dens_main_15636 + 0.0);
          _bbox_main_25768._mMax += (_dens_main_15636 + 0.0);
          _bcen_main_25769 = ((0.5 * (_bbox_main_25768._mMin + _bbox_main_25768._mMax)));
          _o_nac_15646 = ((0.5 * (_bbox_main_25768._mMax - _bbox_main_25768._mMin)));
          _ro_iBox_25771 = (_ro_main_25694);
          _rd_iBox_25772 = (_rd_main_25699);
          _cen_iBox_25773 = (_bcen_main_25769);
          _rad_iBox_25774 = (_o_nac_15646);
          _map1_1_has_returned5640 = (false + false);
          _m_iBox_25777 = ((1.0 / _rd_iBox_25772));
          _n_iBox_25778 = ((_m_iBox_25777 * (_ro_iBox_25771 - _cen_iBox_25773)));
          _k_iBox_25779 = ((abs(_m_iBox_25777) * _rad_iBox_25774));
          _col_main_15632 = (((-_n_iBox_25778) - _k_iBox_25779));
          _p_recta_15663 = (((-_n_iBox_25778) + _k_iBox_25779));
          _recta_1_return_value_inlined_95669 = (max(max(_col_main_15632.x, _col_main_15632.y), _col_main_15632.z) + 0.0);
          _t_map1_15651 = (min(min(_p_recta_15663.x, _p_recta_15663.y), _p_recta_15663.z) + 0.0);
          if (((_recta_1_return_value_inlined_95669 > _t_map1_15651) || (_t_map1_15651 < 0.0)))
          {
            _rot_1_return_value_inlined_145630 = (float2(-1.0, -1.0));
            _map1_1_has_returned5640 = (true + false);
          }
          if ((!_map1_1_has_returned5640))
          {
            _rot_1_return_value_inlined_145630 = (vec2_ctor(_recta_1_return_value_inlined_95669, _t_map1_15651));
            _map1_1_has_returned5640 = (true + false);
          }
          _f_noise_15682 = (_rot_1_return_value_inlined_145630);
          _rot_1_return_value5628 = (_f_noise_15682);
          if ((_rot_1_return_value5628.x > 0.0))
          {
            if ((_rot_1_return_value5628.y < _a_rot_15626))
            {
              _pos_main_25786 = ((_ro_main_25694 + (_rd_main_25699 * _rot_1_return_value5628.y)));
              _e_main_25787 = (smoothstep((_o_nac_15646 - 0.029999999), (_o_nac_15646 - 0.02), abs((_pos_main_25786 - _bcen_main_25769))));
              _h_hash_15621 = ((1.0 - (((1.0 - (_e_main_25787.x * _e_main_25787.y)) * (1.0 - (_e_main_25787.y * _e_main_25787.z))) * (1.0 - (_e_main_25787.z * _e_main_25787.x)))) + 0.0);
              _col_main_25706 = (lerp(_col_main_25706, float3(0.0, 0.0, 0.0), (0.25 + (0.75 * _h_hash_15621))));
            }
            if ((_rot_1_return_value5628.x < _a_rot_15626))
            {
              _pos_main_25786 = ((_ro_main_25694 + (_rd_main_25699 * _rot_1_return_value5628.x)));
              _e_main_25787 = (smoothstep((_o_nac_15646 - 0.029999999), (_o_nac_15646 - 0.02), abs((_pos_main_25786 - _bcen_main_25769))));
              _h_hash_15621 = ((1.0 - (((1.0 - (_e_main_25787.x * _e_main_25787.y)) * (1.0 - (_e_main_25787.y * _e_main_25787.z))) * (1.0 - (_e_main_25787.z * _e_main_25787.x)))) + 0.0);
              _col_main_25706 = (lerp(_col_main_25706, float3(0.0, 0.0, 0.0), (0.15000001 + (0.85000002 * _h_hash_15621))));
            }
          }
          _tot_main_25689 += (_col_main_25706);
        }
      }
    }
  }
  _tot_main_25689 /= 9.0;
  _uv_main_15617 = gl_FragCoord.xy;
  _hash_1_has_returned5619 = false;
  _hash_1_return_value5620 = frac((sin(dot(_uv_main_15617, float2(12.9898, 78.233002))) * 43758.547));
  _hash_1_has_returned5619 = true;
  _hash_1_return_value_inlined_125623 = _hash_1_return_value5620;
  _uv_main_15617 = (gl_FragCoord.yx + 13.1);
  _hash_1_has_returned5619 = false;
  _hash_1_return_value5620 = frac((sin(dot(_uv_main_15617, float2(12.9898, 78.233002))) * 43758.547));
  _hash_1_has_returned5619 = true;
  _y_main_15657 = _hash_1_return_value5620;
  _tot_main_25689 += ((((_hash_1_return_value_inlined_125623 + _y_main_15657) / 2.0) - 0.5) / 256.0);
  _fragColor_2 = vec4_ctor(_tot_main_25689, 1.0);
  _fragColor_2.w = 1.0;
  out_fragColor += round((clamp(_fragColor_2, float4(0.0, 0.0, 0.0, 0.0), float4(1.0, 1.0, 1.0, 1.0)) * 255.0));
  out_fragColor /= float4(510.0, 510.0, 510.0, 510.0);
  return out_fragColor;
}

// INITIAL HLSL END



// FRAGMENT SHADER END
 