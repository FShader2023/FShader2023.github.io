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

struct bound3_2 {
 vec3 mMin;
 vec3 mMax;
} ;

void main()
{
 int count_main_1;
 vec2 uv_main_1;
 vec2 p_hash_1;
 bool hash_1_has_returned;
 float hash_1_return_value;
 float h_hash_1;
 float hash_1_return_value_inlined_11;
 float hash_1_return_value_inlined_12;
 vec3 dir_main_1;
 vec2 p_rot_1;
 float a_rot_1;
 bool rot_1_has_returned;
 vec2 rot_1_return_value;
 vec2 rot_1_return_value_inlined_13;
 vec2 rot_1_return_value_inlined_14;
 vec3 pos_main_1;
 vec3 col_main_1;
 float t_main_1;
 float M_main_1;
 float bsh_main_1;
 float dens_main_1;
 int i_main_1;
 vec3 p_map1_1;
 float scale_map1_1;
 bool map1_1_has_returned;
 float map1_1_return_value;
 float G_map1_1;
 float F_map1_1;
 vec3 p_nac_1;
 vec2 F_nac_1;
 vec3 o_nac_1;
 bool nac_1_has_returned;
 float nac_1_return_value;
 const float R_nac_1 = 0.0001;
 float nac_1_return_value_inlined_4;
 float t_map1_1;
 float nac_1_return_value_inlined_5;
 float nac_1_return_value_inlined_6;
 float nac_1_return_value_inlined_7;
 float map1_1_return_value_inlined_15;
 float temp_main_1;
 float y_main_1;
 vec3 p_map2_1;
 bool map2_1_has_returned;
 float map2_1_return_value;
 float map1_1_return_value_inlined_8;
 float t_map2_1;
 vec3 p_recta_1;
 vec3 F_recta_1;
 vec3 o_recta_1;
 bool recta_1_has_returned;
 float recta_1_return_value;
 const float R_recta_1 = 0.0001;
 float recta_1_return_value_inlined_9;
 float map2_1_return_value_inlined_16;
 vec2 p_gennoise_1;
 bool gennoise_1_has_returned;
 float gennoise_1_return_value;
 float d_gennoise_1;
 mat2 h_gennoise_1;
 float color_gennoise_1;
 int i_gennoise_1;
 vec2 p_noise_1;
 bool noise_1_has_returned;
 float noise_1_return_value;
 vec2 i_noise_1;
 vec2 f_noise_1;
 float hash_1_return_value_inlined_0;
 float hash_1_return_value_inlined_1;
 float hash_1_return_value_inlined_2;
 float hash_1_return_value_inlined_3;
 float noise_1_return_value_inlined_10;
 float gennoise_1_return_value_inlined_17;
 vec3 tot_main_2;
 int m_main_2;
 int n_main_2;
 vec2 o_main_2;
 vec2 p_main_2;
 vec3 ro_main_2;
 vec3 ta_main_2;
 vec3 ww_main_2;
 vec3 uu_main_2;
 vec3 vv_main_2;
 vec3 rd_main_2;
 float time_main_2;
 vec3 p0_main_2;
 vec3 p1_main_2;
 vec3 p2_main_2;
 vec3 p3_main_2;
 float thickness_main_2;
 vec3 col_main_2;
 vec3 ro_iBezier_2;
 vec3 rd_iBezier_2;
 vec3 p0_iBezier_2;
 vec3 p1_iBezier_2;
 vec3 p2_iBezier_2;
 vec3 p3_iBezier_2;
 float width_iBezier_2;
 bool iBezier_2_has_returned;
 float iBezier_2_return_value;
 const int kNum_iBezier_2 = 50;
 float hit_iBezier_2;
 float res_iBezier_2;
 vec3 a_iBezier_2;
 int i_iBezier_2;
 float t_iBezier_2;
 float s_iBezier_2;
 vec3 b_iBezier_2;
 vec3 ro_iSegment_2;
 vec3 rd_iSegment_2;
 vec3 a_iSegment_2;
 vec3 b_iSegment_2;
 bool iSegment_2_has_returned;
 vec3 iSegment_2_return_value;
 vec3 ba_iSegment_2;
 vec3 oa_iSegment_2;
 float oad_iSegment_2;
 float dba_iSegment_2;
 float baba_iSegment_2;
 float oaba_iSegment_2;
 vec2 th_iSegment_2;
 vec3 p_iSegment_2;
 vec3 q_iSegment_2;
 vec3 v_length2_2;
 bool length2_2_has_returned;
 float length2_2_return_value;
 float length2_2_return_value_inlined_18;
 vec3 iSegment_2_return_value_inlined_19;
 vec3 r_iBezier_2;
 float iBezier_2_return_value_inlined_20;
 float t_main_2;
 float tmin_main_2;
 vec3 p0_BezierAABB_2;
 vec3 p1_BezierAABB_2;
 vec3 p2_BezierAABB_2;
 vec3 p3_BezierAABB_2;
 bool BezierAABB_2_has_returned;
 bound3_2 BezierAABB_2_return_value;
 vec3 mi_BezierAABB_2;
 vec3 ma_BezierAABB_2;
 vec3 c_BezierAABB_2;
 vec3 b_BezierAABB_2;
 vec3 a_BezierAABB_2;
 vec3 h_BezierAABB_2;
 vec3 g_BezierAABB_2;
 vec3 t1_BezierAABB_2;
 vec3 s1_BezierAABB_2;
 vec3 t2_BezierAABB_2;
 vec3 s2_BezierAABB_2;
 vec3 q1_BezierAABB_2;
 vec3 q2_BezierAABB_2;
 bound3_2 BezierAABB_2_return_value_inlined_21;
 bound3_2 bbox_main_2;
 vec3 bcen_main_2;
 vec3 brad_main_2;
 vec3 ro_iBox_2;
 vec3 rd_iBox_2;
 vec3 cen_iBox_2;
 vec3 rad_iBox_2;
 bool iBox_2_has_returned;
 vec2 iBox_2_return_value;
 vec3 m_iBox_2;
 vec3 n_iBox_2;
 vec3 k_iBox_2;
 vec3 t1_iBox_2;
 vec3 t2_iBox_2;
 float tN_iBox_2;
 float tF_iBox_2;
 vec2 iBox_2_return_value_inlined_22;
 vec2 tbox_main_2;
 vec3 pos_main_2;
 vec3 e_main_2;
 float al_main_2;
 vec2 p_hash1_2;
 bool hash1_2_has_returned;
 float hash1_2_return_value;
 float hash1_2_return_value_inlined_23;
 float hash1_2_return_value_inlined_24;
 fragColor = vec4(0.0);
 fragColor_1 = vec4(0.0);
 for( count_main_1 = 0;
 count_main_1 < 2; count_main_1 ++)
  {
   uv_main_1 = - 1.0 + 2.0 * (gl_FragCoord.xy / iResolution.xy);
   uv_main_1 *= 1.4;
   p_hash_1 = uv_main_1.xy + iTime + float(count_main_1);
   hash_1_has_returned = false;
   h_hash_1 = dot(p_hash_1, vec2(127.1, 311.7));
   hash_1_return_value = fract(sin(h_hash_1) * 458.325421) * 2.0 - 1.0;
   hash_1_has_returned = true;
   hash_1_return_value_inlined_11 = hash_1_return_value;
   uv_main_1.x += hash_1_return_value_inlined_11 / 512.0;
   p_hash_1 = uv_main_1.yx + iTime + float(count_main_1);
   hash_1_has_returned = false;
   h_hash_1 = dot(p_hash_1, vec2(127.1, 311.7));
   hash_1_return_value = fract(sin(h_hash_1) * 458.325421) * 2.0 - 1.0;
   hash_1_has_returned = true;
   hash_1_return_value_inlined_12 = hash_1_return_value;
   uv_main_1.y += hash_1_return_value_inlined_12 / 512.0;
   dir_main_1 = normalize(vec3(uv_main_1 * vec2(iResolution.x / iResolution.y, 1.0), 1.0 + sin(iTime) * 0.01));
   p_rot_1 = dir_main_1.xz;
   a_rot_1 = (70.0 * 3.1415926535897921284 / 180.0);
   rot_1_has_returned = false;
   rot_1_return_value = vec2(p_rot_1.x * cos(a_rot_1) - p_rot_1.y * sin(a_rot_1), p_rot_1.x * sin(a_rot_1) + p_rot_1.y * cos(a_rot_1));
   rot_1_has_returned = true;
   rot_1_return_value_inlined_13 = rot_1_return_value;
   dir_main_1.xz = rot_1_return_value_inlined_13;
   p_rot_1 = dir_main_1.xy;
   a_rot_1 = (90.0 * 3.1415926535897921284 / 180.0);
   rot_1_has_returned = false;
   rot_1_return_value = vec2(p_rot_1.x * cos(a_rot_1) - p_rot_1.y * sin(a_rot_1), p_rot_1.x * sin(a_rot_1) + p_rot_1.y * cos(a_rot_1));
   rot_1_has_returned = true;
   rot_1_return_value_inlined_14 = rot_1_return_value;
   dir_main_1.xy = rot_1_return_value_inlined_14;
   pos_main_1 = vec3(- 0.1 + sin(iTime * 0.3) * 0.1, 2.0 + cos(iTime * 0.4) * 0.1, - 3.5);
   col_main_1 = vec3(0.0);
   t_main_1 = 0.0;
   M_main_1 = 1.002;
   bsh_main_1 = 0.01;
   dens_main_1 = 0.0;
   for(   i_main_1 = 0;
 i_main_1 < 25 * 24; i_main_1 ++)
    {
     p_map1_1 = pos_main_1 + dir_main_1 * t_main_1;
     scale_map1_1 = 0.6;
     map1_1_has_returned = false;
     G_map1_1 = 0.50;
     F_map1_1 = 0.50 * scale_map1_1;
     p_nac_1 = p_map1_1;
     F_nac_1 = vec2(F_map1_1, F_map1_1);
     o_nac_1 = vec3(G_map1_1, G_map1_1, 0.0);
     nac_1_has_returned = false;
     p_nac_1 += o_nac_1;
     nac_1_return_value = length(max(abs(p_nac_1.xy) - vec2(F_nac_1), 0.0)) - R_nac_1;
     nac_1_has_returned = true;
     nac_1_return_value_inlined_4 = nac_1_return_value;
     t_map1_1 = nac_1_return_value_inlined_4;
     p_nac_1 = p_map1_1;
     F_nac_1 = vec2(F_map1_1, F_map1_1);
     o_nac_1 = vec3(G_map1_1, - G_map1_1, 0.0);
     nac_1_has_returned = false;
     p_nac_1 += o_nac_1;
     nac_1_return_value = length(max(abs(p_nac_1.xy) - vec2(F_nac_1), 0.0)) - R_nac_1;
     nac_1_has_returned = true;
     nac_1_return_value_inlined_5 = nac_1_return_value;
     t_map1_1 = min(t_map1_1, nac_1_return_value_inlined_5);
     p_nac_1 = p_map1_1;
     F_nac_1 = vec2(F_map1_1, F_map1_1);
     o_nac_1 = vec3(- G_map1_1, G_map1_1, 0.0);
     nac_1_has_returned = false;
     p_nac_1 += o_nac_1;
     nac_1_return_value = length(max(abs(p_nac_1.xy) - vec2(F_nac_1), 0.0)) - R_nac_1;
     nac_1_has_returned = true;
     nac_1_return_value_inlined_6 = nac_1_return_value;
     t_map1_1 = min(t_map1_1, nac_1_return_value_inlined_6);
     p_nac_1 = p_map1_1;
     F_nac_1 = vec2(F_map1_1, F_map1_1);
     o_nac_1 = vec3(- G_map1_1, - G_map1_1, 0.0);
     nac_1_has_returned = false;
     p_nac_1 += o_nac_1;
     nac_1_return_value = length(max(abs(p_nac_1.xy) - vec2(F_nac_1), 0.0)) - R_nac_1;
     nac_1_has_returned = true;
     nac_1_return_value_inlined_7 = nac_1_return_value;
     t_map1_1 = min(t_map1_1, nac_1_return_value_inlined_7);
     map1_1_return_value = t_map1_1;
     map1_1_has_returned = true;
     map1_1_return_value_inlined_15 = map1_1_return_value;
     temp_main_1 = map1_1_return_value_inlined_15;
     if(temp_main_1 < 0.2)
      {
       col_main_1 += (vec3(0.5, 0.7, 1.7)) * 0.005 * dens_main_1;
      }
     t_main_1 += bsh_main_1 * M_main_1;
     bsh_main_1 *= M_main_1;
     dens_main_1 += 0.025;
    }
   t_main_1 = 0.0;
   y_main_1 = 0.0;
   for(   i_main_1 = 0;
 i_main_1 < 25 * 50; i_main_1 ++)
    {
     p_map2_1 = pos_main_1 + dir_main_1 * t_main_1;
     map2_1_has_returned = false;
     p_map1_1 = p_map2_1;
     scale_map1_1 = 0.9;
     map1_1_has_returned = false;
     G_map1_1 = 0.50;
     F_map1_1 = 0.50 * scale_map1_1;
     p_nac_1 = p_map1_1;
     F_nac_1 = vec2(F_map1_1, F_map1_1);
     o_nac_1 = vec3(G_map1_1, G_map1_1, 0.0);
     nac_1_has_returned = false;
     p_nac_1 += o_nac_1;
     nac_1_return_value = length(max(abs(p_nac_1.xy) - vec2(F_nac_1), 0.0)) - R_nac_1;
     nac_1_has_returned = true;
     nac_1_return_value_inlined_4 = nac_1_return_value;
     t_map1_1 = nac_1_return_value_inlined_4;
     p_nac_1 = p_map1_1;
     F_nac_1 = vec2(F_map1_1, F_map1_1);
     o_nac_1 = vec3(G_map1_1, - G_map1_1, 0.0);
     nac_1_has_returned = false;
     p_nac_1 += o_nac_1;
     nac_1_return_value = length(max(abs(p_nac_1.xy) - vec2(F_nac_1), 0.0)) - R_nac_1;
     nac_1_has_returned = true;
     nac_1_return_value_inlined_5 = nac_1_return_value;
     t_map1_1 = min(t_map1_1, nac_1_return_value_inlined_5);
     p_nac_1 = p_map1_1;
     F_nac_1 = vec2(F_map1_1, F_map1_1);
     o_nac_1 = vec3(- G_map1_1, G_map1_1, 0.0);
     nac_1_has_returned = false;
     p_nac_1 += o_nac_1;
     nac_1_return_value = length(max(abs(p_nac_1.xy) - vec2(F_nac_1), 0.0)) - R_nac_1;
     nac_1_has_returned = true;
     nac_1_return_value_inlined_6 = nac_1_return_value;
     t_map1_1 = min(t_map1_1, nac_1_return_value_inlined_6);
     p_nac_1 = p_map1_1;
     F_nac_1 = vec2(F_map1_1, F_map1_1);
     o_nac_1 = vec3(- G_map1_1, - G_map1_1, 0.0);
     nac_1_has_returned = false;
     p_nac_1 += o_nac_1;
     nac_1_return_value = length(max(abs(p_nac_1.xy) - vec2(F_nac_1), 0.0)) - R_nac_1;
     nac_1_has_returned = true;
     nac_1_return_value_inlined_7 = nac_1_return_value;
     t_map1_1 = min(t_map1_1, nac_1_return_value_inlined_7);
     map1_1_return_value = t_map1_1;
     map1_1_has_returned = true;
     map1_1_return_value_inlined_8 = map1_1_return_value;
     t_map2_1 = map1_1_return_value_inlined_8;
     p_recta_1 = p_map2_1;
     F_recta_1 = vec3(1.0, 1.0, 0.02);
     o_recta_1 = vec3(0.0, 0.0, 0.0);
     recta_1_has_returned = false;
     p_recta_1 += o_recta_1;
     recta_1_return_value = length(max(abs(p_recta_1) - F_recta_1, 0.0)) - R_recta_1;
     recta_1_has_returned = true;
     recta_1_return_value_inlined_9 = recta_1_return_value;
     t_map2_1 = max(t_map2_1, recta_1_return_value_inlined_9);
     map2_1_return_value = t_map2_1;
     map2_1_has_returned = true;
     map2_1_return_value_inlined_16 = map2_1_return_value;
     temp_main_1 = map2_1_return_value_inlined_16;
     if(temp_main_1 < 0.1)
      {
       col_main_1 += (vec3(0.15, 0.8, 1.7)) * 0.005;
      }
     t_main_1 += temp_main_1;
     y_main_1 ++;
    }
   col_main_1 += ((2.0 + uv_main_1.x) * (vec3(0.15, 0.8, 1.7))) + (y_main_1 / (25.0 * 50.0));
   p_gennoise_1 = dir_main_1.xz;
   gennoise_1_has_returned = false;
   d_gennoise_1 = 0.5;
   h_gennoise_1 = mat2(1.6, 1.2, - 1.2, 1.6);
   color_gennoise_1 = 0.0;
   for(   i_gennoise_1 = 0;
 i_gennoise_1 < 2; i_gennoise_1 ++)
    {
     p_noise_1 = p_gennoise_1 * 5.0 + iTime;
     noise_1_has_returned = false;
     i_noise_1 = floor(p_noise_1);
     f_noise_1 = fract(p_noise_1);
     f_noise_1 = f_noise_1 * f_noise_1 * (3.0 - 2.0 * f_noise_1);
     p_hash_1 = i_noise_1 + vec2(0.0, 0.0);
     hash_1_has_returned = false;
     h_hash_1 = dot(p_hash_1, vec2(127.1, 311.7));
     hash_1_return_value = fract(sin(h_hash_1) * 458.325421) * 2.0 - 1.0;
     hash_1_has_returned = true;
     hash_1_return_value_inlined_0 = hash_1_return_value;
     p_hash_1 = i_noise_1 + vec2(1.0, 0.0);
     hash_1_has_returned = false;
     h_hash_1 = dot(p_hash_1, vec2(127.1, 311.7));
     hash_1_return_value = fract(sin(h_hash_1) * 458.325421) * 2.0 - 1.0;
     hash_1_has_returned = true;
     hash_1_return_value_inlined_1 = hash_1_return_value;
     p_hash_1 = i_noise_1 + vec2(0.0, 1.0);
     hash_1_has_returned = false;
     h_hash_1 = dot(p_hash_1, vec2(127.1, 311.7));
     hash_1_return_value = fract(sin(h_hash_1) * 458.325421) * 2.0 - 1.0;
     hash_1_has_returned = true;
     hash_1_return_value_inlined_2 = hash_1_return_value;
     p_hash_1 = i_noise_1 + vec2(1.0, 1.0);
     hash_1_has_returned = false;
     h_hash_1 = dot(p_hash_1, vec2(127.1, 311.7));
     hash_1_return_value = fract(sin(h_hash_1) * 458.325421) * 2.0 - 1.0;
     hash_1_has_returned = true;
     hash_1_return_value_inlined_3 = hash_1_return_value;
     noise_1_return_value = mix(mix(hash_1_return_value_inlined_0, hash_1_return_value_inlined_1, f_noise_1.x), mix(hash_1_return_value_inlined_2, hash_1_return_value_inlined_3, f_noise_1.x), f_noise_1.y);
     noise_1_has_returned = true;
     noise_1_return_value_inlined_10 = noise_1_return_value;
     color_gennoise_1 += d_gennoise_1 * noise_1_return_value_inlined_10;
     p_gennoise_1 *= h_gennoise_1;
     d_gennoise_1 /= 2.0;
    }
   gennoise_1_return_value = color_gennoise_1;
   gennoise_1_has_returned = true;
   gennoise_1_return_value_inlined_17 = gennoise_1_return_value;
   col_main_1 += gennoise_1_return_value_inlined_17 * 0.5;
   col_main_1 *= 1.0 - uv_main_1.y * 0.5;
   col_main_1 *= vec3(0.05);
   col_main_1 = pow(max(col_main_1, 1e-9), vec3(0.717));
   fragColor_1 += vec4(col_main_1, 1.0 / (t_main_1));
  }
 fragColor_1 /= vec4(2.0);
 fragColor_1.w = 1.0;
 fragColor += round(clamp(fragColor_1, vec4(0.0), vec4(1.0)) * 255.0);
 tot_main_2 = vec3(0.0);
 for( i_gennoise_1 = 0;
 i_gennoise_1 < 3; i_gennoise_1 ++)
  {
   for(   i_main_1 = 0;
 i_main_1 < 3; i_main_1 ++)
    {
     F_nac_1 = vec2(float(i_gennoise_1), float(i_main_1)) / float(3) - 0.5;
     p_rot_1 = (- iResolution.xy + 2.0 * (gl_FragCoord.xy + F_nac_1)) / iResolution.y;
     ro_main_2 = vec3(- 0.5, 0.4, 1.5);
     p_map1_1 = vec3(0.0, 0.0, 0.0);
     ww_main_2 = normalize(p_map1_1 - ro_main_2);
     uu_main_2 = normalize(cross(ww_main_2, vec3(0.0, 1.0, 0.0)));
     vv_main_2 = normalize(cross(uu_main_2, ww_main_2));
     rd_main_2 = normalize(p_rot_1.x * uu_main_2 + p_rot_1.y * vv_main_2 + 1.5 * ww_main_2);
     scale_map1_1 = iTime * 0.5;
     p0_main_2 = vec3(0.8, 0.6, 0.8) * sin(scale_map1_1 * 0.7 + vec3(3.0, 1.0, 2.0));
     pos_main_1 = vec3(0.8, 0.6, 0.8) * sin(scale_map1_1 * 1.1 + vec3(0.0, 6.0, 1.0));
     p2_main_2 = vec3(0.8, 0.6, 0.8) * sin(scale_map1_1 * 1.3 + vec3(4.0, 2.0, 3.0));
     p3_main_2 = vec3(0.8, 0.6, 0.8) * sin(scale_map1_1 * 1.5 + vec3(1.0, 5.0, 4.0));
     dens_main_1 = 0.01;
     col_main_2 = vec3(0.4) * (1.0 - 0.3 * length(p_rot_1));
     ro_iBezier_2 = ro_main_2;
     p_map2_1 = rd_main_2;
     p0_iBezier_2 = p0_main_2;
     p1_iBezier_2 = pos_main_1;
     o_recta_1 = p2_main_2;
     p3_iBezier_2 = p3_main_2;
     gennoise_1_return_value_inlined_17 = dens_main_1;
     gennoise_1_has_returned = false;
     bsh_main_1 = - 1.0;
     map1_1_return_value_inlined_15 = 1e10;
     a_iBezier_2 = p0_iBezier_2;
     for(     count_main_1 = 1;
 count_main_1 < kNum_iBezier_2; count_main_1 ++)
      {
       color_gennoise_1 = float(count_main_1) / float(kNum_iBezier_2 - 1);
       nac_1_return_value = 1.0 - color_gennoise_1;
       b_iBezier_2 = p0_iBezier_2 * nac_1_return_value * nac_1_return_value * nac_1_return_value + p1_iBezier_2 * 3.0 * nac_1_return_value * nac_1_return_value * color_gennoise_1 + o_recta_1 * 3.0 * nac_1_return_value * color_gennoise_1 * color_gennoise_1 + p3_iBezier_2 * color_gennoise_1 * color_gennoise_1 * color_gennoise_1;
       ro_iSegment_2 = ro_iBezier_2;
       rd_iSegment_2 = p_map2_1;
       dir_main_1 = a_iBezier_2;
       b_iSegment_2 = b_iBezier_2;
       map2_1_has_returned = false;
       ba_iSegment_2 = b_iSegment_2 - dir_main_1;
       oa_iSegment_2 = ro_iSegment_2 - dir_main_1;
       temp_main_1 = dot(oa_iSegment_2, rd_iSegment_2);
       noise_1_return_value = dot(rd_iSegment_2, ba_iSegment_2);
       nac_1_return_value_inlined_4 = dot(ba_iSegment_2, ba_iSegment_2);
       d_gennoise_1 = dot(oa_iSegment_2, ba_iSegment_2);
       i_noise_1 = vec2(- temp_main_1 * nac_1_return_value_inlined_4 + noise_1_return_value * d_gennoise_1, d_gennoise_1 - temp_main_1 * noise_1_return_value) / (nac_1_return_value_inlined_4 - noise_1_return_value * noise_1_return_value);
       i_noise_1.x = max(i_noise_1.x, 0.0);
       i_noise_1.y = clamp(i_noise_1.y, 0.0, 1.0);
       p_iSegment_2 = dir_main_1 + ba_iSegment_2 * i_noise_1.y;
       q_iSegment_2 = ro_iSegment_2 + rd_iSegment_2 * i_noise_1.x;
       v_length2_2 = p_iSegment_2 - q_iSegment_2;
       noise_1_has_returned = false;
       t_main_1 = dot(v_length2_2, v_length2_2);
       noise_1_has_returned = true;
       map1_1_return_value_inlined_8 = t_main_1;
       iSegment_2_return_value = vec3(i_noise_1, map1_1_return_value_inlined_8);
       map2_1_has_returned = true;
       p_nac_1 = iSegment_2_return_value;
       r_iBezier_2 = p_nac_1;
       if(r_iBezier_2.z < gennoise_1_return_value_inlined_17 * gennoise_1_return_value_inlined_17)
        {
         map1_1_return_value_inlined_15 = min(map1_1_return_value_inlined_15, r_iBezier_2.x);
         bsh_main_1 = 1.0;
        }
       a_iBezier_2 = b_iBezier_2;
      }
     hash_1_return_value_inlined_3 = map1_1_return_value_inlined_15 * bsh_main_1;
     gennoise_1_has_returned = true;
     recta_1_return_value = hash_1_return_value_inlined_3;
     nac_1_return_value_inlined_5 = recta_1_return_value;
     a_rot_1 = 1e10;
     if(nac_1_return_value_inlined_5 > 0.0)
      {
       a_rot_1 = nac_1_return_value_inlined_5;
       col_main_2 = vec3(1.0, 0.75, 0.3);
      }
     p0_BezierAABB_2 = p0_main_2;
     p1_BezierAABB_2 = pos_main_1;
     p2_BezierAABB_2 = p2_main_2;
     p3_BezierAABB_2 = p3_main_2;
     rot_1_has_returned = false;
     mi_BezierAABB_2 = min(p0_BezierAABB_2, p3_BezierAABB_2);
     ma_BezierAABB_2 = max(p0_BezierAABB_2, p3_BezierAABB_2);
     F_recta_1 = - 1.0 * p0_BezierAABB_2 + 1.0 * p1_BezierAABB_2;
     b_BezierAABB_2 = 1.0 * p0_BezierAABB_2 - 2.0 * p1_BezierAABB_2 + 1.0 * p2_BezierAABB_2;
     a_BezierAABB_2 = - 1.0 * p0_BezierAABB_2 + 3.0 * p1_BezierAABB_2 - 3.0 * p2_BezierAABB_2 + 1.0 * p3_BezierAABB_2;
     h_BezierAABB_2 = b_BezierAABB_2 * b_BezierAABB_2 - a_BezierAABB_2 * F_recta_1;
     if(any(greaterThan(h_BezierAABB_2, vec3(0.0))))
      {
       g_BezierAABB_2 = sqrt(abs(h_BezierAABB_2));
       t1_BezierAABB_2 = clamp((- b_BezierAABB_2 - g_BezierAABB_2) / a_BezierAABB_2, 0.0, 1.0);
       s1_BezierAABB_2 = 1.0 - t1_BezierAABB_2;
       t2_BezierAABB_2 = clamp((- b_BezierAABB_2 + g_BezierAABB_2) / a_BezierAABB_2, 0.0, 1.0);
       s2_BezierAABB_2 = 1.0 - t2_BezierAABB_2;
       q1_BezierAABB_2 = s1_BezierAABB_2 * s1_BezierAABB_2 * s1_BezierAABB_2 * p0_BezierAABB_2 + 3.0 * s1_BezierAABB_2 * s1_BezierAABB_2 * t1_BezierAABB_2 * p1_BezierAABB_2 + 3.0 * s1_BezierAABB_2 * t1_BezierAABB_2 * t1_BezierAABB_2 * p2_BezierAABB_2 + t1_BezierAABB_2 * t1_BezierAABB_2 * t1_BezierAABB_2 * p3_BezierAABB_2;
       q2_BezierAABB_2 = s2_BezierAABB_2 * s2_BezierAABB_2 * s2_BezierAABB_2 * p0_BezierAABB_2 + 3.0 * s2_BezierAABB_2 * s2_BezierAABB_2 * t2_BezierAABB_2 * p1_BezierAABB_2 + 3.0 * s2_BezierAABB_2 * t2_BezierAABB_2 * t2_BezierAABB_2 * p2_BezierAABB_2 + t2_BezierAABB_2 * t2_BezierAABB_2 * t2_BezierAABB_2 * p3_BezierAABB_2;
       if(h_BezierAABB_2.x > 0.0)
        {
         mi_BezierAABB_2.x = min(mi_BezierAABB_2.x, min(q1_BezierAABB_2.x, q2_BezierAABB_2.x));
         ma_BezierAABB_2.x = max(ma_BezierAABB_2.x, max(q1_BezierAABB_2.x, q2_BezierAABB_2.x));
        }
       if(h_BezierAABB_2.y > 0.0)
        {
         mi_BezierAABB_2.y = min(mi_BezierAABB_2.y, min(q1_BezierAABB_2.y, q2_BezierAABB_2.y));
         ma_BezierAABB_2.y = max(ma_BezierAABB_2.y, max(q1_BezierAABB_2.y, q2_BezierAABB_2.y));
        }
       if(h_BezierAABB_2.z > 0.0)
        {
         mi_BezierAABB_2.z = min(mi_BezierAABB_2.z, min(q1_BezierAABB_2.z, q2_BezierAABB_2.z));
         ma_BezierAABB_2.z = max(ma_BezierAABB_2.z, max(q1_BezierAABB_2.z, q2_BezierAABB_2.z));
        }
      }
     BezierAABB_2_return_value = bound3_2(mi_BezierAABB_2, ma_BezierAABB_2);
     rot_1_has_returned = true;
     BezierAABB_2_return_value_inlined_21 = BezierAABB_2_return_value;
     bbox_main_2 = BezierAABB_2_return_value_inlined_21;
     bbox_main_2.mMin -= dens_main_1;
     bbox_main_2.mMax += dens_main_1;
     bcen_main_2 = 0.5 * (bbox_main_2.mMin + bbox_main_2.mMax);
     o_nac_1 = 0.5 * (bbox_main_2.mMax - bbox_main_2.mMin);
     ro_iBox_2 = ro_main_2;
     rd_iBox_2 = rd_main_2;
     cen_iBox_2 = bcen_main_2;
     rad_iBox_2 = o_nac_1;
     map1_1_has_returned = false;
     m_iBox_2 = 1.0 / rd_iBox_2;
     n_iBox_2 = m_iBox_2 * (ro_iBox_2 - cen_iBox_2);
     k_iBox_2 = abs(m_iBox_2) * rad_iBox_2;
     col_main_1 = - n_iBox_2 - k_iBox_2;
     p_recta_1 = - n_iBox_2 + k_iBox_2;
     recta_1_return_value_inlined_9 = max(max(col_main_1.x, col_main_1.y), col_main_1.z);
     t_map1_1 = min(min(p_recta_1.x, p_recta_1.y), p_recta_1.z);
     if(recta_1_return_value_inlined_9 > t_map1_1 || t_map1_1 < 0.0)
      {
       rot_1_return_value_inlined_14 = vec2(- 1.0);
       map1_1_has_returned = true;
      }
     if(! map1_1_has_returned)
      {
       rot_1_return_value_inlined_14 = vec2(recta_1_return_value_inlined_9, t_map1_1);
       map1_1_has_returned = true;
      }
     f_noise_1 = rot_1_return_value_inlined_14;
     rot_1_return_value = f_noise_1;
     if(rot_1_return_value.x > 0.0)
      {
       if(rot_1_return_value.y < a_rot_1)
        {
         pos_main_2 = ro_main_2 + rd_main_2 * rot_1_return_value.y;
         e_main_2 = smoothstep(o_nac_1 - 0.03, o_nac_1 - 0.02, abs(pos_main_2 - bcen_main_2));
         h_hash_1 = 1.0 - (1.0 - e_main_2.x * e_main_2.y) * (1.0 - e_main_2.y * e_main_2.z) * (1.0 - e_main_2.z * e_main_2.x);
         col_main_2 = mix(col_main_2, vec3(0.0), 0.25 + 0.75 * h_hash_1);
        }
       if(rot_1_return_value.x < a_rot_1)
        {
         pos_main_2 = ro_main_2 + rd_main_2 * rot_1_return_value.x;
         e_main_2 = smoothstep(o_nac_1 - 0.03, o_nac_1 - 0.02, abs(pos_main_2 - bcen_main_2));
         h_hash_1 = 1.0 - (1.0 - e_main_2.x * e_main_2.y) * (1.0 - e_main_2.y * e_main_2.z) * (1.0 - e_main_2.z * e_main_2.x);
         col_main_2 = mix(col_main_2, vec3(0.0), 0.15 + 0.85 * h_hash_1);
        }
      }
     tot_main_2 += col_main_2;
    }
  }
 tot_main_2 /= float(3 * 3);
 uv_main_1 = gl_FragCoord.xy;
 hash_1_has_returned = false;
 hash_1_return_value = fract(sin(dot(uv_main_1, vec2(12.9898, 78.233))) * 43758.5453);
 hash_1_has_returned = true;
 hash_1_return_value_inlined_12 = hash_1_return_value;
 uv_main_1 = gl_FragCoord.yx + 13.1;
 hash_1_has_returned = false;
 hash_1_return_value = fract(sin(dot(uv_main_1, vec2(12.9898, 78.233))) * 43758.5453);
 hash_1_has_returned = true;
 y_main_1 = hash_1_return_value;
 tot_main_2 += ((hash_1_return_value_inlined_12 + y_main_1) / 2.0 - 0.5) / 256.0;
 fragColor_2 = vec4(tot_main_2, 1.0);
 fragColor_2.w = 1.0;
 fragColor += round(clamp(fragColor_2, vec4(0.0), vec4(1.0)) * 255.0);
 fragColor /= vec4(2.0 * 255.0);
}
