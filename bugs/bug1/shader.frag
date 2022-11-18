#version 300 es
precision highp float;

layout(location = 0) out vec4 fragColor;

uniform vec2 iResolution;

uniform float iTime;

uniform float iTimeDelta;

uniform vec4 iMouse;

uniform int iFrame;

bool live_tu_has_executed = false;

vec4 fragColor_1;

vec4 fragColor_2;

float time_2;

void main()
{
 float an_mainImage_1;
 vec3 ro_mainImage_1;
 vec3 ta_mainImage_1;
 vec3 ro_setCamera_1;
 vec3 ta_setCamera_1;
 float cr_setCamera_1;
 bool setCamera_has_returned_1;
 mat3 setCamera_return_value_1;
 vec3 cw_setCamera_1;
 vec3 cp_setCamera_1;
 vec3 cu_setCamera_1;
 vec3 cv_setCamera_1;
 mat3 setCamera_return_value_inlined_13_1;
 mat3 ca_mainImage_1;
 int technique_mainImage_1;
 vec3 tot_mainImage_1;
 int m_mainImage_1;
 int n_mainImage_1;
 vec2 o_mainImage_1;
 vec2 p_mainImage_1;
 vec3 rd_mainImage_1;
 vec3 ro_render_1;
 vec3 rd_render_1;
 int technique_render_1;
 bool render_has_returned_1;
 vec3 render_return_value_1;
 vec3 col_render_1;
 vec3 ro_castRay_1;
 vec3 rd_castRay_1;
 bool castRay_has_returned_1;
 float castRay_return_value_1;
 float tmin_castRay_1;
 float tmax_castRay_1;
 float tp1_castRay_1;
 float tp2_castRay_1;
 float t_castRay_1;
 int i_castRay_1;
 float precis_castRay_1;
 vec3 pos_map_1;
 bool map_has_returned_1;
 float map_return_value_1;
 vec3 qos_map_1;
 vec3 p_sdPlane_1;
 bool sdPlane_has_returned_1;
 float sdPlane_return_value_1;
 float sdPlane_return_value_inlined_0_1;
 vec3 p_sdBox_1;
 vec3 b_sdBox_1;
 bool sdBox_has_returned_1;
 float sdBox_return_value_1;
 vec3 d_sdBox_1;
 float sdBox_return_value_inlined_1_1;
 float map_return_value_inlined_7_1;
 float res_castRay_1;
 float castRay_return_value_inlined_9_1;
 float t_render_1;
 vec3 pos_render_1;
 vec3 pos_calcNormal_1;
 bool calcNormal_has_returned_1;
 vec3 calcNormal_return_value_1;
 vec2 e_calcNormal_1;
 float map_return_value_inlined_3_1;
 float map_return_value_inlined_4_1;
 float map_return_value_inlined_5_1;
 float map_return_value_inlined_6_1;
 vec3 calcNormal_return_value_inlined_10_1;
 vec3 nor_render_1;
 vec3 mate_render_1;
 vec3 lig_render_1;
 vec3 hal_render_1;
 vec3 ro_calcSoftshadow_1;
 vec3 rd_calcSoftshadow_1;
 float mint_calcSoftshadow_1;
 float tmax_calcSoftshadow_1;
 int technique_calcSoftshadow_1;
 bool calcSoftshadow_has_returned_1;
 float calcSoftshadow_return_value_1;
 float res_calcSoftshadow_1;
 float t_calcSoftshadow_1;
 float ph_calcSoftshadow_1;
 int i_calcSoftshadow_1;
 float map_return_value_inlined_2_1;
 float h_calcSoftshadow_1;
 float y_calcSoftshadow_1;
 float d_calcSoftshadow_1;
 float calcSoftshadow_return_value_inlined_11_1;
 float dif_render_1;
 float spe_render_1;
 vec3 pos_calcAO_1;
 vec3 nor_calcAO_1;
 bool calcAO_has_returned_1;
 float calcAO_return_value_1;
 float occ_calcAO_1;
 float sca_calcAO_1;
 int i_calcAO_1;
 float h_calcAO_1;
 float map_return_value_inlined_8_1;
 float d_calcAO_1;
 float calcAO_return_value_inlined_12_1;
 float occ_render_1;
 float amb_render_1;
 vec3 render_return_value_inlined_14_1;
 vec3 col_mainImage_1;
 an_mainImage_1 = 12.0 - sin(0.1 * iTime);
 ro_mainImage_1 = vec3(3.0 * cos(0.1 * an_mainImage_1), 1.0, - 3.0 * sin(0.1 * an_mainImage_1));
 ta_mainImage_1 = vec3(0.0, - 0.4, 0.0);
 ro_setCamera_1 = ro_mainImage_1;
 ta_setCamera_1 = ta_mainImage_1;
 cr_setCamera_1 = 0.0;
 setCamera_has_returned_1 = false;
 cw_setCamera_1 = normalize(ta_setCamera_1 - ro_setCamera_1);
 cp_setCamera_1 = vec3(sin(cr_setCamera_1), cos(cr_setCamera_1), 0.0);
 cu_setCamera_1 = normalize(cross(cw_setCamera_1, cp_setCamera_1));
 cv_setCamera_1 = normalize(cross(cu_setCamera_1, cw_setCamera_1));
 setCamera_return_value_1 = mat3(cu_setCamera_1, cv_setCamera_1, cw_setCamera_1);
 setCamera_has_returned_1 = true;
 setCamera_return_value_inlined_13_1 = setCamera_return_value_1;
 ca_mainImage_1 = setCamera_return_value_inlined_13_1;
 technique_mainImage_1 = (fract(iTime / 2.0) > 0.5) ? 1 : 0;
 tot_mainImage_1 = vec3(0.0);
 for( m_mainImage_1 = 0;
 m_mainImage_1 < 2; m_mainImage_1 ++)
  {
   for(   n_mainImage_1 = 0;
 n_mainImage_1 < 2; n_mainImage_1 ++)
    {
     o_mainImage_1 = vec2(float(m_mainImage_1), float(n_mainImage_1)) / float(2) - 0.5;
     p_mainImage_1 = (- iResolution.xy + 2.0 * (gl_FragCoord.xy + o_mainImage_1)) / iResolution.y;
     rd_mainImage_1 = ca_mainImage_1 * normalize(vec3(p_mainImage_1.xy, 2.0));
     ro_render_1 = ro_mainImage_1;
     rd_render_1 = rd_mainImage_1;
     technique_render_1 = technique_mainImage_1;
     render_has_returned_1 = false;
     col_render_1 = vec3(0.0);
     ro_castRay_1 = ro_render_1;
     rd_castRay_1 = rd_render_1;
     castRay_has_returned_1 = false;
     tmin_castRay_1 = 1.0;
     tmax_castRay_1 = 20.0;
     tp1_castRay_1 = (0.0 - ro_castRay_1.y) / rd_castRay_1.y;
     if(tp1_castRay_1 > 0.0)
      {
       tmax_castRay_1 = min(tmax_castRay_1, tp1_castRay_1);
      }
     tp2_castRay_1 = (1.0 - ro_castRay_1.y) / rd_castRay_1.y;
     if(tp2_castRay_1 > 0.0)
      {
       if(ro_castRay_1.y > 1.0)
        {
         tmin_castRay_1 = max(tmin_castRay_1, tp2_castRay_1);
         if(! live_tu_has_executed)
          {
           vec2 uv_mainImage_2;
           vec3 rayOrigin_mainImage_2;
           vec3 cameraForward_mainImage_2;
           vec3 cameraLeft_mainImage_2;
           vec3 cameraUp_mainImage_2;
           vec3 rayDirection_mainImage_2;
           vec3 lightDirection_mainImage_2;
           vec3 backgroundColor_mainImage_2;
           vec3 color_mainImage_2;
           vec3 ro_raycast_2;
           vec3 rd_raycast_2;
           bool raycast_has_returned_2;
           float raycast_return_value_2;
           float dist_raycast_2;
           float res_raycast_2;
           int i_raycast_2;
           vec3 p_map_2;
           bool map_has_returned_2;
           float map_return_value_2;
           vec3 p_box_2;
           vec3 r_box_2;
           bool box_has_returned_2;
           float box_return_value_2;
           float box_return_value_inlined_0_2;
           float mainBox_map_2;
           vec3 p_sphere_2;
           float r_sphere_2;
           bool sphere_has_returned_2;
           float sphere_return_value_2;
           float sphere_return_value_inlined_1_2;
           float leftSphere_map_2;
           vec3 p_torus_2;
           vec2 t_torus_2;
           bool torus_has_returned_2;
           float torus_return_value_2;
           vec2 q_torus_2;
           float torus_return_value_inlined_2_2;
           float rightTorus_map_2;
           float scene_map_2;
           float map_return_value_inlined_3_2;
           float raycast_return_value_inlined_4_2;
           float result_mainImage_2;
           vec3 hitPos_mainImage_2;
           vec2 e_mainImage_2;
           float map_return_value_inlined_5_2;
           float map_return_value_inlined_6_2;
           float map_return_value_inlined_7_2;
           float map_return_value_inlined_8_2;
           vec3 normals_mainImage_2;
           vec3 albedo_mainImage_2;
           float diffuse_mainImage_2;
           float fresnel_mainImage_2;
           float specular_mainImage_2;
           float map_return_value_inlined_9_2;
           float ao_mainImage_2;
           float map_return_value_inlined_10_2;
           float sss_mainImage_2;
           o_mainImage_1 = (gl_FragCoord.xy / iResolution.xy - 0.5) / vec2(iResolution.y / iResolution.x, 1);
           time_2 = mod(iTime, 62.82);
           cu_setCamera_1 = vec3(cos(time_2 * .2) * 5., 2, sin(time_2 * .2) * 5.);
           col_mainImage_1 = normalize(vec3(0) - cu_setCamera_1);
           nor_render_1 = normalize(cross(col_mainImage_1, vec3(0, 1, 0)));
           rd_calcSoftshadow_1 = normalize(cross(nor_render_1, col_mainImage_1));
           qos_map_1 = mat3(nor_render_1, rd_calcSoftshadow_1, col_mainImage_1) * normalize(vec3(o_mainImage_1, .5));
           ta_mainImage_1 = normalize(vec3(- .1, .4, - .3));
           ro_calcSoftshadow_1 = vec3(.1, .1, .1) - length(o_mainImage_1) * .1;
           nor_calcAO_1 = ro_calcSoftshadow_1;
           cp_setCamera_1 = cu_setCamera_1;
           calcNormal_return_value_inlined_10_1 = qos_map_1;
           sdBox_has_returned_1 = false;
           occ_calcAO_1 = 0.;
           for(           technique_render_1 = 0;
 technique_render_1 < 128; technique_render_1 ++)
            {
             cv_setCamera_1 = cp_setCamera_1 + calcNormal_return_value_inlined_10_1 * occ_calcAO_1;
             calcNormal_has_returned_1 = false;
             cv_setCamera_1 = mod(cv_setCamera_1 + vec3(2., 10., 5.), vec3(4., 20., 10.)) - vec3(2., 10., 5.);
             ro_setCamera_1 = cv_setCamera_1;
             pos_calcNormal_1 = vec3(sin(iTime) / 2. + .5);
             castRay_has_returned_1 = false;
             ro_setCamera_1 = abs(ro_setCamera_1) - pos_calcNormal_1;
             tmin_castRay_1 = max(max(ro_setCamera_1.x, ro_setCamera_1.y), ro_setCamera_1.z);
             castRay_has_returned_1 = true;
             sca_calcAO_1 = tmin_castRay_1;
             precis_castRay_1 = sca_calcAO_1;
             lig_render_1 = cv_setCamera_1 + vec3(0, 0, 3);
             res_castRay_1 = sin(iTime + 3.1415926538 * 2. / 3.) / 2. + .5;
             map_has_returned_1 = false;
             y_calcSoftshadow_1 = length(lig_render_1) - res_castRay_1;
             map_has_returned_1 = true;
             calcAO_return_value_1 = y_calcSoftshadow_1;
             amb_render_1 = calcAO_return_value_1;
             ro_mainImage_1 = cv_setCamera_1 - vec3(0, 0, 3);
             t_torus_2 = vec2(1., (sin(iTime + 3.1415926538 * 4. / 3.) / 2. + .5) * .5);
             setCamera_has_returned_1 = false;
             e_calcNormal_1 = vec2(length(ro_mainImage_1.xz) - t_torus_2.x, ro_mainImage_1.y);
             d_calcAO_1 = length(e_calcNormal_1) - t_torus_2.y;
             setCamera_has_returned_1 = true;
             spe_render_1 = d_calcAO_1;
             map_return_value_inlined_4_1 = spe_render_1;
             map_return_value_inlined_8_1 = min(precis_castRay_1, amb_render_1);
             map_return_value_inlined_8_1 = min(map_return_value_inlined_8_1, map_return_value_inlined_4_1);
             res_calcSoftshadow_1 = map_return_value_inlined_8_1;
             calcNormal_has_returned_1 = true;
             dif_render_1 = res_calcSoftshadow_1;
             calcAO_return_value_inlined_12_1 = dif_render_1;
             if(calcAO_return_value_inlined_12_1 < .0001 || occ_calcAO_1 > 120.)
              {
               break;
              }
             occ_calcAO_1 += calcAO_return_value_inlined_12_1;
            }
           if(occ_calcAO_1 > 120.)
            {
             occ_calcAO_1 = 0.;
            }
           map_return_value_1 = occ_calcAO_1;
           sdBox_has_returned_1 = true;
           sdPlane_return_value_1 = map_return_value_1;
           calcSoftshadow_return_value_1 = sdPlane_return_value_1;
           if(calcSoftshadow_return_value_1 > 0.)
            {
             rd_mainImage_1 = cu_setCamera_1 + qos_map_1 * calcSoftshadow_return_value_1;
             p_mainImage_1 = vec2(.00035, - .00035);
             cv_setCamera_1 = rd_mainImage_1 + p_mainImage_1.xyy;
             calcNormal_has_returned_1 = false;
             cv_setCamera_1 = mod(cv_setCamera_1 + vec3(2., 10., 5.), vec3(4., 20., 10.)) - vec3(2., 10., 5.);
             ro_setCamera_1 = cv_setCamera_1;
             pos_calcNormal_1 = vec3(sin(iTime) / 2. + .5);
             castRay_has_returned_1 = false;
             ro_setCamera_1 = abs(ro_setCamera_1) - pos_calcNormal_1;
             tmin_castRay_1 = max(max(ro_setCamera_1.x, ro_setCamera_1.y), ro_setCamera_1.z);
             castRay_has_returned_1 = true;
             sca_calcAO_1 = tmin_castRay_1;
             precis_castRay_1 = sca_calcAO_1;
             lig_render_1 = cv_setCamera_1 + vec3(0, 0, 3);
             res_castRay_1 = sin(iTime + 3.1415926538 * 2. / 3.) / 2. + .5;
             map_has_returned_1 = false;
             y_calcSoftshadow_1 = length(lig_render_1) - res_castRay_1;
             map_has_returned_1 = true;
             calcAO_return_value_1 = y_calcSoftshadow_1;
             amb_render_1 = calcAO_return_value_1;
             ro_mainImage_1 = cv_setCamera_1 - vec3(0, 0, 3);
             t_torus_2 = vec2(1., (sin(iTime + 3.1415926538 * 4. / 3.) / 2. + .5) * .5);
             setCamera_has_returned_1 = false;
             e_calcNormal_1 = vec2(length(ro_mainImage_1.xz) - t_torus_2.x, ro_mainImage_1.y);
             d_calcAO_1 = length(e_calcNormal_1) - t_torus_2.y;
             setCamera_has_returned_1 = true;
             spe_render_1 = d_calcAO_1;
             map_return_value_inlined_4_1 = spe_render_1;
             map_return_value_inlined_8_1 = min(precis_castRay_1, amb_render_1);
             map_return_value_inlined_8_1 = min(map_return_value_inlined_8_1, map_return_value_inlined_4_1);
             res_calcSoftshadow_1 = map_return_value_inlined_8_1;
             calcNormal_has_returned_1 = true;
             mint_calcSoftshadow_1 = res_calcSoftshadow_1;
             cv_setCamera_1 = rd_mainImage_1 + p_mainImage_1.yyx;
             calcNormal_has_returned_1 = false;
             cv_setCamera_1 = mod(cv_setCamera_1 + vec3(2., 10., 5.), vec3(4., 20., 10.)) - vec3(2., 10., 5.);
             ro_setCamera_1 = cv_setCamera_1;
             pos_calcNormal_1 = vec3(sin(iTime) / 2. + .5);
             castRay_has_returned_1 = false;
             ro_setCamera_1 = abs(ro_setCamera_1) - pos_calcNormal_1;
             tmin_castRay_1 = max(max(ro_setCamera_1.x, ro_setCamera_1.y), ro_setCamera_1.z);
             castRay_has_returned_1 = true;
             sca_calcAO_1 = tmin_castRay_1;
             precis_castRay_1 = sca_calcAO_1;
             lig_render_1 = cv_setCamera_1 + vec3(0, 0, 3);
             res_castRay_1 = sin(iTime + 3.1415926538 * 2. / 3.) / 2. + .5;
             map_has_returned_1 = false;
             y_calcSoftshadow_1 = length(lig_render_1) - res_castRay_1;
             map_has_returned_1 = true;
             calcAO_return_value_1 = y_calcSoftshadow_1;
             amb_render_1 = calcAO_return_value_1;
             ro_mainImage_1 = cv_setCamera_1 - vec3(0, 0, 3);
             t_torus_2 = vec2(1., (sin(iTime + 3.1415926538 * 4. / 3.) / 2. + .5) * .5);
             setCamera_has_returned_1 = false;
             e_calcNormal_1 = vec2(length(ro_mainImage_1.xz) - t_torus_2.x, ro_mainImage_1.y);
             d_calcAO_1 = length(e_calcNormal_1) - t_torus_2.y;
             setCamera_has_returned_1 = true;
             spe_render_1 = d_calcAO_1;
             map_return_value_inlined_4_1 = spe_render_1;
             map_return_value_inlined_8_1 = min(precis_castRay_1, amb_render_1);
             map_return_value_inlined_8_1 = min(map_return_value_inlined_8_1, map_return_value_inlined_4_1);
             res_calcSoftshadow_1 = map_return_value_inlined_8_1;
             calcNormal_has_returned_1 = true;
             ph_calcSoftshadow_1 = res_calcSoftshadow_1;
             cv_setCamera_1 = rd_mainImage_1 + p_mainImage_1.yxy;
             calcNormal_has_returned_1 = false;
             cv_setCamera_1 = mod(cv_setCamera_1 + vec3(2., 10., 5.), vec3(4., 20., 10.)) - vec3(2., 10., 5.);
             ro_setCamera_1 = cv_setCamera_1;
             pos_calcNormal_1 = vec3(sin(iTime) / 2. + .5);
             castRay_has_returned_1 = false;
             ro_setCamera_1 = abs(ro_setCamera_1) - pos_calcNormal_1;
             tmin_castRay_1 = max(max(ro_setCamera_1.x, ro_setCamera_1.y), ro_setCamera_1.z);
             castRay_has_returned_1 = true;
             sca_calcAO_1 = tmin_castRay_1;
             precis_castRay_1 = sca_calcAO_1;
             lig_render_1 = cv_setCamera_1 + vec3(0, 0, 3);
             res_castRay_1 = sin(iTime + 3.1415926538 * 2. / 3.) / 2. + .5;
             map_has_returned_1 = false;
             y_calcSoftshadow_1 = length(lig_render_1) - res_castRay_1;
             map_has_returned_1 = true;
             calcAO_return_value_1 = y_calcSoftshadow_1;
             amb_render_1 = calcAO_return_value_1;
             ro_mainImage_1 = cv_setCamera_1 - vec3(0, 0, 3);
             t_torus_2 = vec2(1., (sin(iTime + 3.1415926538 * 4. / 3.) / 2. + .5) * .5);
             setCamera_has_returned_1 = false;
             e_calcNormal_1 = vec2(length(ro_mainImage_1.xz) - t_torus_2.x, ro_mainImage_1.y);
             d_calcAO_1 = length(e_calcNormal_1) - t_torus_2.y;
             setCamera_has_returned_1 = true;
             spe_render_1 = d_calcAO_1;
             map_return_value_inlined_4_1 = spe_render_1;
             map_return_value_inlined_8_1 = min(precis_castRay_1, amb_render_1);
             map_return_value_inlined_8_1 = min(map_return_value_inlined_8_1, map_return_value_inlined_4_1);
             res_calcSoftshadow_1 = map_return_value_inlined_8_1;
             calcNormal_has_returned_1 = true;
             tp2_castRay_1 = res_calcSoftshadow_1;
             cv_setCamera_1 = rd_mainImage_1 + p_mainImage_1.xxx;
             calcNormal_has_returned_1 = false;
             cv_setCamera_1 = mod(cv_setCamera_1 + vec3(2., 10., 5.), vec3(4., 20., 10.)) - vec3(2., 10., 5.);
             ro_setCamera_1 = cv_setCamera_1;
             pos_calcNormal_1 = vec3(sin(iTime) / 2. + .5);
             castRay_has_returned_1 = false;
             ro_setCamera_1 = abs(ro_setCamera_1) - pos_calcNormal_1;
             tmin_castRay_1 = max(max(ro_setCamera_1.x, ro_setCamera_1.y), ro_setCamera_1.z);
             castRay_has_returned_1 = true;
             sca_calcAO_1 = tmin_castRay_1;
             precis_castRay_1 = sca_calcAO_1;
             lig_render_1 = cv_setCamera_1 + vec3(0, 0, 3);
             res_castRay_1 = sin(iTime + 3.1415926538 * 2. / 3.) / 2. + .5;
             map_has_returned_1 = false;
             y_calcSoftshadow_1 = length(lig_render_1) - res_castRay_1;
             map_has_returned_1 = true;
             calcAO_return_value_1 = y_calcSoftshadow_1;
             amb_render_1 = calcAO_return_value_1;
             ro_mainImage_1 = cv_setCamera_1 - vec3(0, 0, 3);
             t_torus_2 = vec2(1., (sin(iTime + 3.1415926538 * 4. / 3.) / 2. + .5) * .5);
             setCamera_has_returned_1 = false;
             e_calcNormal_1 = vec2(length(ro_mainImage_1.xz) - t_torus_2.x, ro_mainImage_1.y);
             d_calcAO_1 = length(e_calcNormal_1) - t_torus_2.y;
             setCamera_has_returned_1 = true;
             spe_render_1 = d_calcAO_1;
             map_return_value_inlined_4_1 = spe_render_1;
             map_return_value_inlined_8_1 = min(precis_castRay_1, amb_render_1);
             map_return_value_inlined_8_1 = min(map_return_value_inlined_8_1, map_return_value_inlined_4_1);
             res_calcSoftshadow_1 = map_return_value_inlined_8_1;
             calcNormal_has_returned_1 = true;
             map_return_value_inlined_3_1 = res_calcSoftshadow_1;
             p_sdPlane_1 = normalize(p_mainImage_1.xyy * mint_calcSoftshadow_1 + p_mainImage_1.yyx * ph_calcSoftshadow_1 + p_mainImage_1.yxy * tp2_castRay_1 + p_mainImage_1.xxx * map_return_value_inlined_3_1);
             ro_castRay_1 = vec3(.0, .2, .4);
             map_return_value_inlined_2_1 = max(0., dot(p_sdPlane_1, ta_mainImage_1));
             sdPlane_return_value_inlined_0_1 = pow(max(1. + dot(p_sdPlane_1, qos_map_1), 1e-9), 4.);
             calcSoftshadow_return_value_inlined_11_1 = pow(max(max(dot(reflect(- ta_mainImage_1, p_sdPlane_1), - qos_map_1), 0.), 1e-9), 30.);
             cv_setCamera_1 = rd_mainImage_1 + p_sdPlane_1 * .05;
             calcNormal_has_returned_1 = false;
             cv_setCamera_1 = mod(cv_setCamera_1 + vec3(2., 10., 5.), vec3(4., 20., 10.)) - vec3(2., 10., 5.);
             ro_setCamera_1 = cv_setCamera_1;
             pos_calcNormal_1 = vec3(sin(iTime) / 2. + .5);
             castRay_has_returned_1 = false;
             ro_setCamera_1 = abs(ro_setCamera_1) - pos_calcNormal_1;
             tmin_castRay_1 = max(max(ro_setCamera_1.x, ro_setCamera_1.y), ro_setCamera_1.z);
             castRay_has_returned_1 = true;
             sca_calcAO_1 = tmin_castRay_1;
             precis_castRay_1 = sca_calcAO_1;
             lig_render_1 = cv_setCamera_1 + vec3(0, 0, 3);
             res_castRay_1 = sin(iTime + 3.1415926538 * 2. / 3.) / 2. + .5;
             map_has_returned_1 = false;
             y_calcSoftshadow_1 = length(lig_render_1) - res_castRay_1;
             map_has_returned_1 = true;
             calcAO_return_value_1 = y_calcSoftshadow_1;
             amb_render_1 = calcAO_return_value_1;
             ro_mainImage_1 = cv_setCamera_1 - vec3(0, 0, 3);
             t_torus_2 = vec2(1., (sin(iTime + 3.1415926538 * 4. / 3.) / 2. + .5) * .5);
             setCamera_has_returned_1 = false;
             e_calcNormal_1 = vec2(length(ro_mainImage_1.xz) - t_torus_2.x, ro_mainImage_1.y);
             d_calcAO_1 = length(e_calcNormal_1) - t_torus_2.y;
             setCamera_has_returned_1 = true;
             spe_render_1 = d_calcAO_1;
             map_return_value_inlined_4_1 = spe_render_1;
             map_return_value_inlined_8_1 = min(precis_castRay_1, amb_render_1);
             map_return_value_inlined_8_1 = min(map_return_value_inlined_8_1, map_return_value_inlined_4_1);
             res_calcSoftshadow_1 = map_return_value_inlined_8_1;
             calcNormal_has_returned_1 = true;
             map_return_value_inlined_5_1 = res_calcSoftshadow_1;
             map_return_value_inlined_7_1 = clamp(map_return_value_inlined_5_1 / .05, 0., 1.);
             cv_setCamera_1 = rd_mainImage_1 + ta_mainImage_1 * .4;
             calcNormal_has_returned_1 = false;
             cv_setCamera_1 = mod(cv_setCamera_1 + vec3(2., 10., 5.), vec3(4., 20., 10.)) - vec3(2., 10., 5.);
             ro_setCamera_1 = cv_setCamera_1;
             pos_calcNormal_1 = vec3(sin(iTime) / 2. + .5);
             castRay_has_returned_1 = false;
             ro_setCamera_1 = abs(ro_setCamera_1) - pos_calcNormal_1;
             tmin_castRay_1 = max(max(ro_setCamera_1.x, ro_setCamera_1.y), ro_setCamera_1.z);
             castRay_has_returned_1 = true;
             sca_calcAO_1 = tmin_castRay_1;
             precis_castRay_1 = sca_calcAO_1;
             lig_render_1 = cv_setCamera_1 + vec3(0, 0, 3);
             res_castRay_1 = sin(iTime + 3.1415926538 * 2. / 3.) / 2. + .5;
             map_has_returned_1 = false;
             y_calcSoftshadow_1 = length(lig_render_1) - res_castRay_1;
             map_has_returned_1 = true;
             calcAO_return_value_1 = y_calcSoftshadow_1;
             amb_render_1 = calcAO_return_value_1;
             ro_mainImage_1 = cv_setCamera_1 - vec3(0, 0, 3);
             t_torus_2 = vec2(1., (sin(iTime + 3.1415926538 * 4. / 3.) / 2. + .5) * .5);
             setCamera_has_returned_1 = false;
             e_calcNormal_1 = vec2(length(ro_mainImage_1.xz) - t_torus_2.x, ro_mainImage_1.y);
             d_calcAO_1 = length(e_calcNormal_1) - t_torus_2.y;
             setCamera_has_returned_1 = true;
             spe_render_1 = d_calcAO_1;
             map_return_value_inlined_4_1 = spe_render_1;
             map_return_value_inlined_8_1 = min(precis_castRay_1, amb_render_1);
             map_return_value_inlined_8_1 = min(map_return_value_inlined_8_1, map_return_value_inlined_4_1);
             res_calcSoftshadow_1 = map_return_value_inlined_8_1;
             calcNormal_has_returned_1 = true;
             h_calcAO_1 = res_calcSoftshadow_1;
             sdBox_return_value_1 = smoothstep(0., 1., h_calcAO_1 / .4);
             if(calcSoftshadow_return_value_inlined_11_1 < 1.)
              {
               nor_calcAO_1 = mix(calcSoftshadow_return_value_inlined_11_1 + ro_castRay_1 * (map_return_value_inlined_7_1 + .2) * (map_return_value_inlined_2_1 + sdBox_return_value_1 * .1), ro_calcSoftshadow_1, sdPlane_return_value_inlined_0_1);
              }
             nor_calcAO_1 = mix(ro_calcSoftshadow_1, nor_calcAO_1, exp(- .002 * calcSoftshadow_return_value_1 * calcSoftshadow_return_value_1 * calcSoftshadow_return_value_1));
            }
           fragColor_2 = vec4(pow(max(nor_calcAO_1, 1e-9), vec3(.4545)), 1);
           fragColor_2.w = 1.0;
           live_tu_has_executed = true;
          }
        }
       else
        {
         tmax_castRay_1 = min(tmax_castRay_1, tp2_castRay_1);
        }
      }
     t_castRay_1 = tmin_castRay_1;
     for(     i_castRay_1 = 0;
 i_castRay_1 < 64; i_castRay_1 ++)
      {
       precis_castRay_1 = 0.0005 * t_castRay_1;
       pos_map_1 = ro_castRay_1 + rd_castRay_1 * t_castRay_1;
       map_has_returned_1 = false;
       qos_map_1 = vec3(fract(pos_map_1.x + 0.5) - 0.5, pos_map_1.yz);
       p_sdPlane_1 = pos_map_1.xyz - vec3(0.0, 0.00, 0.0);
       sdPlane_has_returned_1 = false;
       sdPlane_return_value_1 = p_sdPlane_1.y;
       sdPlane_has_returned_1 = true;
       sdPlane_return_value_inlined_0_1 = sdPlane_return_value_1;
       p_sdBox_1 = qos_map_1.xyz - vec3(0.0, 0.25, 0.0);
       b_sdBox_1 = vec3(0.2, 0.5, 0.2);
       sdBox_has_returned_1 = false;
       d_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;
       sdBox_return_value_1 = min(max(d_sdBox_1.x, max(d_sdBox_1.y, d_sdBox_1.z)), 0.0) + length(max(d_sdBox_1, 0.0));
       sdBox_has_returned_1 = true;
       sdBox_return_value_inlined_1_1 = sdBox_return_value_1;
       map_return_value_1 = min(sdPlane_return_value_inlined_0_1, sdBox_return_value_inlined_1_1);
       map_has_returned_1 = true;
       map_return_value_inlined_7_1 = map_return_value_1;
       res_castRay_1 = map_return_value_inlined_7_1;
       if(res_castRay_1 < precis_castRay_1 || t_castRay_1 > tmax_castRay_1)
        {
         break;
        }
       t_castRay_1 += res_castRay_1;
      }
     if(t_castRay_1 > tmax_castRay_1)
      {
       t_castRay_1 = - 1.0;
      }
     castRay_return_value_1 = t_castRay_1;
     castRay_has_returned_1 = true;
     castRay_return_value_inlined_9_1 = castRay_return_value_1;
     t_render_1 = castRay_return_value_inlined_9_1;
     if(t_render_1 > - 0.5)
      {
       pos_render_1 = ro_render_1 + t_render_1 * rd_render_1;
       pos_calcNormal_1 = pos_render_1;
       calcNormal_has_returned_1 = false;
       e_calcNormal_1 = vec2(1.0, - 1.0) * 0.5773 * 0.0005;
       pos_map_1 = pos_calcNormal_1 + e_calcNormal_1.xyy;
       map_has_returned_1 = false;
       qos_map_1 = vec3(fract(pos_map_1.x + 0.5) - 0.5, pos_map_1.yz);
       p_sdPlane_1 = pos_map_1.xyz - vec3(0.0, 0.00, 0.0);
       sdPlane_has_returned_1 = false;
       sdPlane_return_value_1 = p_sdPlane_1.y;
       sdPlane_has_returned_1 = true;
       sdPlane_return_value_inlined_0_1 = sdPlane_return_value_1;
       p_sdBox_1 = qos_map_1.xyz - vec3(0.0, 0.25, 0.0);
       b_sdBox_1 = vec3(0.2, 0.5, 0.2);
       sdBox_has_returned_1 = false;
       d_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;
       sdBox_return_value_1 = min(max(d_sdBox_1.x, max(d_sdBox_1.y, d_sdBox_1.z)), 0.0) + length(max(d_sdBox_1, 0.0));
       sdBox_has_returned_1 = true;
       sdBox_return_value_inlined_1_1 = sdBox_return_value_1;
       map_return_value_1 = min(sdPlane_return_value_inlined_0_1, sdBox_return_value_inlined_1_1);
       map_has_returned_1 = true;
       map_return_value_inlined_3_1 = map_return_value_1;
       pos_map_1 = pos_calcNormal_1 + e_calcNormal_1.yyx;
       map_has_returned_1 = false;
       qos_map_1 = vec3(fract(pos_map_1.x + 0.5) - 0.5, pos_map_1.yz);
       p_sdPlane_1 = pos_map_1.xyz - vec3(0.0, 0.00, 0.0);
       sdPlane_has_returned_1 = false;
       sdPlane_return_value_1 = p_sdPlane_1.y;
       sdPlane_has_returned_1 = true;
       sdPlane_return_value_inlined_0_1 = sdPlane_return_value_1;
       p_sdBox_1 = qos_map_1.xyz - vec3(0.0, 0.25, 0.0);
       b_sdBox_1 = vec3(0.2, 0.5, 0.2);
       sdBox_has_returned_1 = false;
       d_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;
       sdBox_return_value_1 = min(max(d_sdBox_1.x, max(d_sdBox_1.y, d_sdBox_1.z)), 0.0) + length(max(d_sdBox_1, 0.0));
       sdBox_has_returned_1 = true;
       sdBox_return_value_inlined_1_1 = sdBox_return_value_1;
       map_return_value_1 = min(sdPlane_return_value_inlined_0_1, sdBox_return_value_inlined_1_1);
       map_has_returned_1 = true;
       map_return_value_inlined_4_1 = map_return_value_1;
       pos_map_1 = pos_calcNormal_1 + e_calcNormal_1.yxy;
       map_has_returned_1 = false;
       qos_map_1 = vec3(fract(pos_map_1.x + 0.5) - 0.5, pos_map_1.yz);
       p_sdPlane_1 = pos_map_1.xyz - vec3(0.0, 0.00, 0.0);
       sdPlane_has_returned_1 = false;
       sdPlane_return_value_1 = p_sdPlane_1.y;
       sdPlane_has_returned_1 = true;
       sdPlane_return_value_inlined_0_1 = sdPlane_return_value_1;
       p_sdBox_1 = qos_map_1.xyz - vec3(0.0, 0.25, 0.0);
       b_sdBox_1 = vec3(0.2, 0.5, 0.2);
       sdBox_has_returned_1 = false;
       d_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;
       sdBox_return_value_1 = min(max(d_sdBox_1.x, max(d_sdBox_1.y, d_sdBox_1.z)), 0.0) + length(max(d_sdBox_1, 0.0));
       sdBox_has_returned_1 = true;
       sdBox_return_value_inlined_1_1 = sdBox_return_value_1;
       map_return_value_1 = min(sdPlane_return_value_inlined_0_1, sdBox_return_value_inlined_1_1);
       map_has_returned_1 = true;
       map_return_value_inlined_5_1 = map_return_value_1;
       pos_map_1 = pos_calcNormal_1 + e_calcNormal_1.xxx;
       map_has_returned_1 = false;
       qos_map_1 = vec3(fract(pos_map_1.x + 0.5) - 0.5, pos_map_1.yz);
       p_sdPlane_1 = pos_map_1.xyz - vec3(0.0, 0.00, 0.0);
       sdPlane_has_returned_1 = false;
       sdPlane_return_value_1 = p_sdPlane_1.y;
       sdPlane_has_returned_1 = true;
       sdPlane_return_value_inlined_0_1 = sdPlane_return_value_1;
       p_sdBox_1 = qos_map_1.xyz - vec3(0.0, 0.25, 0.0);
       b_sdBox_1 = vec3(0.2, 0.5, 0.2);
       sdBox_has_returned_1 = false;
       d_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;
       sdBox_return_value_1 = min(max(d_sdBox_1.x, max(d_sdBox_1.y, d_sdBox_1.z)), 0.0) + length(max(d_sdBox_1, 0.0));
       sdBox_has_returned_1 = true;
       sdBox_return_value_inlined_1_1 = sdBox_return_value_1;
       map_return_value_1 = min(sdPlane_return_value_inlined_0_1, sdBox_return_value_inlined_1_1);
       map_has_returned_1 = true;
       map_return_value_inlined_6_1 = map_return_value_1;
       calcNormal_return_value_1 = normalize(e_calcNormal_1.xyy * map_return_value_inlined_3_1 + e_calcNormal_1.yyx * map_return_value_inlined_4_1 + e_calcNormal_1.yxy * map_return_value_inlined_5_1 + e_calcNormal_1.xxx * map_return_value_inlined_6_1);
       calcNormal_has_returned_1 = true;
       calcNormal_return_value_inlined_10_1 = calcNormal_return_value_1;
       nor_render_1 = calcNormal_return_value_inlined_10_1;
       mate_render_1 = vec3(0.3);
       lig_render_1 = normalize(vec3(- 0.1, 0.3, 0.6));
       hal_render_1 = normalize(lig_render_1 - rd_render_1);
       ro_calcSoftshadow_1 = pos_render_1;
       rd_calcSoftshadow_1 = lig_render_1;
       mint_calcSoftshadow_1 = 0.01;
       tmax_calcSoftshadow_1 = 3.0;
       technique_calcSoftshadow_1 = technique_render_1;
       calcSoftshadow_has_returned_1 = false;
       res_calcSoftshadow_1 = 1.0;
       t_calcSoftshadow_1 = mint_calcSoftshadow_1;
       ph_calcSoftshadow_1 = 1e10;
       for(       i_calcSoftshadow_1 = 0;
 i_calcSoftshadow_1 < 32; i_calcSoftshadow_1 ++)
        {
         pos_map_1 = ro_calcSoftshadow_1 + rd_calcSoftshadow_1 * t_calcSoftshadow_1;
         map_has_returned_1 = false;
         qos_map_1 = vec3(fract(pos_map_1.x + 0.5) - 0.5, pos_map_1.yz);
         p_sdPlane_1 = pos_map_1.xyz - vec3(0.0, 0.00, 0.0);
         sdPlane_has_returned_1 = false;
         sdPlane_return_value_1 = p_sdPlane_1.y;
         sdPlane_has_returned_1 = true;
         sdPlane_return_value_inlined_0_1 = sdPlane_return_value_1;
         p_sdBox_1 = qos_map_1.xyz - vec3(0.0, 0.25, 0.0);
         b_sdBox_1 = vec3(0.2, 0.5, 0.2);
         sdBox_has_returned_1 = false;
         d_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;
         sdBox_return_value_1 = min(max(d_sdBox_1.x, max(d_sdBox_1.y, d_sdBox_1.z)), 0.0) + length(max(d_sdBox_1, 0.0));
         sdBox_has_returned_1 = true;
         sdBox_return_value_inlined_1_1 = sdBox_return_value_1;
         map_return_value_1 = min(sdPlane_return_value_inlined_0_1, sdBox_return_value_inlined_1_1);
         map_has_returned_1 = true;
         map_return_value_inlined_2_1 = map_return_value_1;
         h_calcSoftshadow_1 = map_return_value_inlined_2_1;
         if(technique_calcSoftshadow_1 == 0)
          {
           res_calcSoftshadow_1 = min(res_calcSoftshadow_1, 10.0 * h_calcSoftshadow_1 / t_calcSoftshadow_1);
          }
         else
          {
           y_calcSoftshadow_1 = h_calcSoftshadow_1 * h_calcSoftshadow_1 / (2.0 * ph_calcSoftshadow_1);
           d_calcSoftshadow_1 = sqrt(h_calcSoftshadow_1 * h_calcSoftshadow_1 - y_calcSoftshadow_1 * y_calcSoftshadow_1);
           res_calcSoftshadow_1 = min(res_calcSoftshadow_1, 10.0 * d_calcSoftshadow_1 / max(0.0, t_calcSoftshadow_1 - y_calcSoftshadow_1));
           ph_calcSoftshadow_1 = h_calcSoftshadow_1;
          }
         t_calcSoftshadow_1 += h_calcSoftshadow_1;
         if(res_calcSoftshadow_1 < 0.0001 || t_calcSoftshadow_1 > tmax_calcSoftshadow_1)
          {
           break;
          }
        }
       res_calcSoftshadow_1 = clamp(res_calcSoftshadow_1, 0.0, 1.0);
       calcSoftshadow_return_value_1 = res_calcSoftshadow_1 * res_calcSoftshadow_1 * (3.0 - 2.0 * res_calcSoftshadow_1);
       calcSoftshadow_has_returned_1 = true;
       calcSoftshadow_return_value_inlined_11_1 = calcSoftshadow_return_value_1;
       dif_render_1 = clamp(dot(nor_render_1, lig_render_1), 0.0, 1.0) * calcSoftshadow_return_value_inlined_11_1;
       spe_render_1 = pow(max(clamp(dot(nor_render_1, hal_render_1), 0.0, 1.0), 1e-9), 16.0) * dif_render_1 * (0.04 + 0.96 * pow(max(clamp(1.0 + dot(hal_render_1, rd_render_1), 0.0, 1.0), 1e-9), 5.0));
       col_render_1 = mate_render_1 * 4.0 * dif_render_1 * vec3(1.00, 0.70, 0.5);
       col_render_1 += 12.0 * spe_render_1 * vec3(1.00, 0.70, 0.5);
       pos_calcAO_1 = pos_render_1;
       nor_calcAO_1 = nor_render_1;
       calcAO_has_returned_1 = false;
       occ_calcAO_1 = 0.0;
       sca_calcAO_1 = 1.0;
       for(       i_calcAO_1 = 0;
 i_calcAO_1 < 5; i_calcAO_1 ++)
        {
         h_calcAO_1 = 0.001 + 0.15 * float(i_calcAO_1) / 4.0;
         pos_map_1 = pos_calcAO_1 + h_calcAO_1 * nor_calcAO_1;
         map_has_returned_1 = false;
         qos_map_1 = vec3(fract(pos_map_1.x + 0.5) - 0.5, pos_map_1.yz);
         p_sdPlane_1 = pos_map_1.xyz - vec3(0.0, 0.00, 0.0);
         sdPlane_has_returned_1 = false;
         sdPlane_return_value_1 = p_sdPlane_1.y;
         sdPlane_has_returned_1 = true;
         sdPlane_return_value_inlined_0_1 = sdPlane_return_value_1;
         p_sdBox_1 = qos_map_1.xyz - vec3(0.0, 0.25, 0.0);
         b_sdBox_1 = vec3(0.2, 0.5, 0.2);
         sdBox_has_returned_1 = false;
         d_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;
         sdBox_return_value_1 = min(max(d_sdBox_1.x, max(d_sdBox_1.y, d_sdBox_1.z)), 0.0) + length(max(d_sdBox_1, 0.0));
         sdBox_has_returned_1 = true;
         sdBox_return_value_inlined_1_1 = sdBox_return_value_1;
         map_return_value_1 = min(sdPlane_return_value_inlined_0_1, sdBox_return_value_inlined_1_1);
         map_has_returned_1 = true;
         map_return_value_inlined_8_1 = map_return_value_1;
         d_calcAO_1 = map_return_value_inlined_8_1;
         occ_calcAO_1 += (h_calcAO_1 - d_calcAO_1) * sca_calcAO_1;
         sca_calcAO_1 *= 0.95;
        }
       calcAO_return_value_1 = clamp(1.0 - 1.5 * occ_calcAO_1, 0.0, 1.0);
       calcAO_has_returned_1 = true;
       calcAO_return_value_inlined_12_1 = calcAO_return_value_1;
       occ_render_1 = calcAO_return_value_inlined_12_1;
       amb_render_1 = clamp(0.5 + 0.5 * nor_render_1.y, 0.0, 1.0);
       col_render_1 += mate_render_1 * amb_render_1 * occ_render_1 * vec3(0.0, 0.08, 0.1);
       col_render_1 *= exp(- 0.0005 * t_render_1 * t_render_1 * t_render_1);
      }
     render_return_value_1 = col_render_1;
     render_has_returned_1 = true;
     render_return_value_inlined_14_1 = render_return_value_1;
     col_mainImage_1 = render_return_value_inlined_14_1;
     col_mainImage_1 = pow(max(col_mainImage_1, 1e-9), vec3(0.4545));
     tot_mainImage_1 += col_mainImage_1;
    }
  }
 tot_mainImage_1 /= float(2 * 2);
 fragColor_1 = vec4(tot_mainImage_1, 1.0);
 fragColor_1.w = 1.0;
 fragColor = mix(fragColor_2, fragColor_1, 1.0 - fragColor_2.a + iTime);
}
