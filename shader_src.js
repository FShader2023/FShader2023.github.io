var bug1Src = "#version 300 es\n"+
"precision highp float;\n"+
"\n"+
"layout(location = 0) out vec4 fragColor;\n"+
"\n"+
"uniform vec2 iResolution;\n"+
"\n"+
"uniform float iTime;\n"+
"\n"+
"uniform float iTimeDelta;\n"+
"\n"+
"uniform vec4 iMouse;\n"+
"\n"+
"uniform int iFrame;\n"+
"\n"+
"bool live_tu_has_executed = false;\n"+
"\n"+
"vec4 fragColor_1;\n"+
"\n"+
"vec4 fragColor_2;\n"+
"\n"+
"float time_2;\n"+
"\n"+
"void main()\n"+
"{\n"+
"float an_mainImage_1;\n"+
"vec3 ro_mainImage_1;\n"+
"vec3 ta_mainImage_1;\n"+
"vec3 ro_setCamera_1;\n"+
"vec3 ta_setCamera_1;\n"+
"float cr_setCamera_1;\n"+
"bool setCamera_has_returned_1;\n"+
"mat3 setCamera_return_value_1;\n"+
"vec3 cw_setCamera_1;\n"+
"vec3 cp_setCamera_1;\n"+
"vec3 cu_setCamera_1;\n"+
"vec3 cv_setCamera_1;\n"+
"mat3 setCamera_return_value_inlined_13_1;\n"+
"mat3 ca_mainImage_1;\n"+
"int technique_mainImage_1;\n"+
"vec3 tot_mainImage_1;\n"+
"int m_mainImage_1;\n"+
"int n_mainImage_1;\n"+
"vec2 o_mainImage_1;\n"+
"vec2 p_mainImage_1;\n"+
"vec3 rd_mainImage_1;\n"+
"vec3 ro_render_1;\n"+
"vec3 rd_render_1;\n"+
"int technique_render_1;\n"+
"bool render_has_returned_1;\n"+
"vec3 render_return_value_1;\n"+
"vec3 col_render_1;\n"+
"vec3 ro_castRay_1;\n"+
"vec3 rd_castRay_1;\n"+
"bool castRay_has_returned_1;\n"+
"float castRay_return_value_1;\n"+
"float tmin_castRay_1;\n"+
"float tmax_castRay_1;\n"+
"float tp1_castRay_1;\n"+
"float tp2_castRay_1;\n"+
"float t_castRay_1;\n"+
"int i_castRay_1;\n"+
"float precis_castRay_1;\n"+
"vec3 pos_map_1;\n"+
"bool map_has_returned_1;\n"+
"float map_return_value_1;\n"+
"vec3 qos_map_1;\n"+
"vec3 p_sdPlane_1;\n"+
"bool sdPlane_has_returned_1;\n"+
"float sdPlane_return_value_1;\n"+
"float sdPlane_return_value_inlined_0_1;\n"+
"vec3 p_sdBox_1;\n"+
"vec3 b_sdBox_1;\n"+
"bool sdBox_has_returned_1;\n"+
"float sdBox_return_value_1;\n"+
"vec3 d_sdBox_1;\n"+
"float sdBox_return_value_inlined_1_1;\n"+
"float map_return_value_inlined_7_1;\n"+
"float res_castRay_1;\n"+
"float castRay_return_value_inlined_9_1;\n"+
"float t_render_1;\n"+
"vec3 pos_render_1;\n"+
"vec3 pos_calcNormal_1;\n"+
"bool calcNormal_has_returned_1;\n"+
"vec3 calcNormal_return_value_1;\n"+
"vec2 e_calcNormal_1;\n"+
"float map_return_value_inlined_3_1;\n"+
"float map_return_value_inlined_4_1;\n"+
"float map_return_value_inlined_5_1;\n"+
"float map_return_value_inlined_6_1;\n"+
"vec3 calcNormal_return_value_inlined_10_1;\n"+
"vec3 nor_render_1;\n"+
"vec3 mate_render_1;\n"+
"vec3 lig_render_1;\n"+
"vec3 hal_render_1;\n"+
"vec3 ro_calcSoftshadow_1;\n"+
"vec3 rd_calcSoftshadow_1;\n"+
"float mint_calcSoftshadow_1;\n"+
"float tmax_calcSoftshadow_1;\n"+
"int technique_calcSoftshadow_1;\n"+
"bool calcSoftshadow_has_returned_1;\n"+
"float calcSoftshadow_return_value_1;\n"+
"float res_calcSoftshadow_1;\n"+
"float t_calcSoftshadow_1;\n"+
"float ph_calcSoftshadow_1;\n"+
"int i_calcSoftshadow_1;\n"+
"float map_return_value_inlined_2_1;\n"+
"float h_calcSoftshadow_1;\n"+
"float y_calcSoftshadow_1;\n"+
"float d_calcSoftshadow_1;\n"+
"float calcSoftshadow_return_value_inlined_11_1;\n"+
"float dif_render_1;\n"+
"float spe_render_1;\n"+
"vec3 pos_calcAO_1;\n"+
"vec3 nor_calcAO_1;\n"+
"bool calcAO_has_returned_1;\n"+
"float calcAO_return_value_1;\n"+
"float occ_calcAO_1;\n"+
"float sca_calcAO_1;\n"+
"int i_calcAO_1;\n"+
"float h_calcAO_1;\n"+
"float map_return_value_inlined_8_1;\n"+
"float d_calcAO_1;\n"+
"float calcAO_return_value_inlined_12_1;\n"+
"float occ_render_1;\n"+
"float amb_render_1;\n"+
"vec3 render_return_value_inlined_14_1;\n"+
"vec3 col_mainImage_1;\n"+
"an_mainImage_1 = 12.0 - sin(0.1 * iTime);\n"+
"ro_mainImage_1 = vec3(3.0 * cos(0.1 * an_mainImage_1), 1.0, - 3.0 * sin(0.1 * an_mainImage_1));\n"+
"ta_mainImage_1 = vec3(0.0, - 0.4, 0.0);\n"+
"ro_setCamera_1 = ro_mainImage_1;\n"+
"ta_setCamera_1 = ta_mainImage_1;\n"+
"cr_setCamera_1 = 0.0;\n"+
"setCamera_has_returned_1 = false;\n"+
"cw_setCamera_1 = normalize(ta_setCamera_1 - ro_setCamera_1);\n"+
"cp_setCamera_1 = vec3(sin(cr_setCamera_1), cos(cr_setCamera_1), 0.0);\n"+
"cu_setCamera_1 = normalize(cross(cw_setCamera_1, cp_setCamera_1));\n"+
"cv_setCamera_1 = normalize(cross(cu_setCamera_1, cw_setCamera_1));\n"+
"setCamera_return_value_1 = mat3(cu_setCamera_1, cv_setCamera_1, cw_setCamera_1);\n"+
"setCamera_has_returned_1 = true;\n"+
"setCamera_return_value_inlined_13_1 = setCamera_return_value_1;\n"+
"ca_mainImage_1 = setCamera_return_value_inlined_13_1;\n"+
"technique_mainImage_1 = (fract(iTime / 2.0) > 0.5) ? 1 : 0;\n"+
"tot_mainImage_1 = vec3(0.0);\n"+
"for( m_mainImage_1 = 0;\n"+
"m_mainImage_1 < 2; m_mainImage_1 ++)\n"+
"{\n"+
"for(   n_mainImage_1 = 0;\n"+
"n_mainImage_1 < 2; n_mainImage_1 ++)\n"+
"{\n"+
"o_mainImage_1 = vec2(float(m_mainImage_1), float(n_mainImage_1)) / float(2) - 0.5;\n"+
"p_mainImage_1 = (- iResolution.xy + 2.0 * (gl_FragCoord.xy + o_mainImage_1)) / iResolution.y;\n"+
"rd_mainImage_1 = ca_mainImage_1 * normalize(vec3(p_mainImage_1.xy, 2.0));\n"+
"ro_render_1 = ro_mainImage_1;\n"+
"rd_render_1 = rd_mainImage_1;\n"+
"technique_render_1 = technique_mainImage_1;\n"+
"render_has_returned_1 = false;\n"+
"col_render_1 = vec3(0.0);\n"+
"ro_castRay_1 = ro_render_1;\n"+
"rd_castRay_1 = rd_render_1;\n"+
"castRay_has_returned_1 = false;\n"+
"tmin_castRay_1 = 1.0;\n"+
"tmax_castRay_1 = 20.0;\n"+
"tp1_castRay_1 = (0.0 - ro_castRay_1.y) / rd_castRay_1.y;\n"+
"if(tp1_castRay_1 > 0.0)\n"+
"{\n"+
"tmax_castRay_1 = min(tmax_castRay_1, tp1_castRay_1);\n"+
"}\n"+
"tp2_castRay_1 = (1.0 - ro_castRay_1.y) / rd_castRay_1.y;\n"+
"if(tp2_castRay_1 > 0.0)\n"+
"{\n"+
"if(ro_castRay_1.y > 1.0)\n"+
"{\n"+
"tmin_castRay_1 = max(tmin_castRay_1, tp2_castRay_1);\n"+
"if(! live_tu_has_executed)\n"+
"{\n"+
"vec2 uv_mainImage_2;\n"+
"vec3 rayOrigin_mainImage_2;\n"+
"vec3 cameraForward_mainImage_2;\n"+
"vec3 cameraLeft_mainImage_2;\n"+
"vec3 cameraUp_mainImage_2;\n"+
"vec3 rayDirection_mainImage_2;\n"+
"vec3 lightDirection_mainImage_2;\n"+
"vec3 backgroundColor_mainImage_2;\n"+
"vec3 color_mainImage_2;\n"+
"vec3 ro_raycast_2;\n"+
"vec3 rd_raycast_2;\n"+
"bool raycast_has_returned_2;\n"+
"float raycast_return_value_2;\n"+
"float dist_raycast_2;\n"+
"float res_raycast_2;\n"+
"int i_raycast_2;\n"+
"vec3 p_map_2;\n"+
"bool map_has_returned_2;\n"+
"float map_return_value_2;\n"+
"vec3 p_box_2;\n"+
"vec3 r_box_2;\n"+
"bool box_has_returned_2;\n"+
"float box_return_value_2;\n"+
"float box_return_value_inlined_0_2;\n"+
"float mainBox_map_2;\n"+
"vec3 p_sphere_2;\n"+
"float r_sphere_2;\n"+
"bool sphere_has_returned_2;\n"+
"float sphere_return_value_2;\n"+
"float sphere_return_value_inlined_1_2;\n"+
"float leftSphere_map_2;\n"+
"vec3 p_torus_2;\n"+
"vec2 t_torus_2;\n"+
"bool torus_has_returned_2;\n"+
"float torus_return_value_2;\n"+
"vec2 q_torus_2;\n"+
"float torus_return_value_inlined_2_2;\n"+
"float rightTorus_map_2;\n"+
"float scene_map_2;\n"+
"float map_return_value_inlined_3_2;\n"+
"float raycast_return_value_inlined_4_2;\n"+
"float result_mainImage_2;\n"+
"vec3 hitPos_mainImage_2;\n"+
"vec2 e_mainImage_2;\n"+
"float map_return_value_inlined_5_2;\n"+
"float map_return_value_inlined_6_2;\n"+
"float map_return_value_inlined_7_2;\n"+
"float map_return_value_inlined_8_2;\n"+
"vec3 normals_mainImage_2;\n"+
"vec3 albedo_mainImage_2;\n"+
"float diffuse_mainImage_2;\n"+
"float fresnel_mainImage_2;\n"+
"float specular_mainImage_2;\n"+
"float map_return_value_inlined_9_2;\n"+
"float ao_mainImage_2;\n"+
"float map_return_value_inlined_10_2;\n"+
"float sss_mainImage_2;\n"+
"o_mainImage_1 = (gl_FragCoord.xy / iResolution.xy - 0.5) / vec2(iResolution.y / iResolution.x, 1);\n"+
"time_2 = mod(iTime, 62.82);\n"+
"cu_setCamera_1 = vec3(cos(time_2 * .2) * 5., 2, sin(time_2 * .2) * 5.);\n"+
"col_mainImage_1 = normalize(vec3(0) - cu_setCamera_1);\n"+
"nor_render_1 = normalize(cross(col_mainImage_1, vec3(0, 1, 0)));\n"+
"rd_calcSoftshadow_1 = normalize(cross(nor_render_1, col_mainImage_1));\n"+
"qos_map_1 = mat3(nor_render_1, rd_calcSoftshadow_1, col_mainImage_1) * normalize(vec3(o_mainImage_1, .5));\n"+
"ta_mainImage_1 = normalize(vec3(- .1, .4, - .3));\n"+
"ro_calcSoftshadow_1 = vec3(.1, .1, .1) - length(o_mainImage_1) * .1;\n"+
"nor_calcAO_1 = ro_calcSoftshadow_1;\n"+
"cp_setCamera_1 = cu_setCamera_1;\n"+
"calcNormal_return_value_inlined_10_1 = qos_map_1;\n"+
"sdBox_has_returned_1 = false;\n"+
"occ_calcAO_1 = 0.;\n"+
"for(           technique_render_1 = 0;\n"+
"technique_render_1 < 128; technique_render_1 ++)\n"+
"{\n"+
"cv_setCamera_1 = cp_setCamera_1 + calcNormal_return_value_inlined_10_1 * occ_calcAO_1;\n"+
"calcNormal_has_returned_1 = false;\n"+
"cv_setCamera_1 = mod(cv_setCamera_1 + vec3(2., 10., 5.), vec3(4., 20., 10.)) - vec3(2., 10., 5.);\n"+
"ro_setCamera_1 = cv_setCamera_1;\n"+
"pos_calcNormal_1 = vec3(sin(iTime) / 2. + .5);\n"+
"castRay_has_returned_1 = false;\n"+
"ro_setCamera_1 = abs(ro_setCamera_1) - pos_calcNormal_1;\n"+
"tmin_castRay_1 = max(max(ro_setCamera_1.x, ro_setCamera_1.y), ro_setCamera_1.z);\n"+
"castRay_has_returned_1 = true;\n"+
"sca_calcAO_1 = tmin_castRay_1;\n"+
"precis_castRay_1 = sca_calcAO_1;\n"+
"lig_render_1 = cv_setCamera_1 + vec3(0, 0, 3);\n"+
"res_castRay_1 = sin(iTime + 3.1415926538 * 2. / 3.) / 2. + .5;\n"+
"map_has_returned_1 = false;\n"+
"y_calcSoftshadow_1 = length(lig_render_1) - res_castRay_1;\n"+
"map_has_returned_1 = true;\n"+
"calcAO_return_value_1 = y_calcSoftshadow_1;\n"+
"amb_render_1 = calcAO_return_value_1;\n"+
"ro_mainImage_1 = cv_setCamera_1 - vec3(0, 0, 3);\n"+
"t_torus_2 = vec2(1., (sin(iTime + 3.1415926538 * 4. / 3.) / 2. + .5) * .5);\n"+
"setCamera_has_returned_1 = false;\n"+
"e_calcNormal_1 = vec2(length(ro_mainImage_1.xz) - t_torus_2.x, ro_mainImage_1.y);\n"+
"d_calcAO_1 = length(e_calcNormal_1) - t_torus_2.y;\n"+
"setCamera_has_returned_1 = true;\n"+
"spe_render_1 = d_calcAO_1;\n"+
"map_return_value_inlined_4_1 = spe_render_1;\n"+
"map_return_value_inlined_8_1 = min(precis_castRay_1, amb_render_1);\n"+
"map_return_value_inlined_8_1 = min(map_return_value_inlined_8_1, map_return_value_inlined_4_1);\n"+
"res_calcSoftshadow_1 = map_return_value_inlined_8_1;\n"+
"calcNormal_has_returned_1 = true;\n"+
"dif_render_1 = res_calcSoftshadow_1;\n"+
"calcAO_return_value_inlined_12_1 = dif_render_1;\n"+
"if(calcAO_return_value_inlined_12_1 < .0001 || occ_calcAO_1 > 120.)\n"+
"{\n"+
"break;\n"+
"}\n"+
"occ_calcAO_1 += calcAO_return_value_inlined_12_1;\n"+
"}\n"+
"if(occ_calcAO_1 > 120.)\n"+
"{\n"+
"occ_calcAO_1 = 0.;\n"+
"}\n"+
"map_return_value_1 = occ_calcAO_1;\n"+
"sdBox_has_returned_1 = true;\n"+
"sdPlane_return_value_1 = map_return_value_1;\n"+
"calcSoftshadow_return_value_1 = sdPlane_return_value_1;\n"+
"if(calcSoftshadow_return_value_1 > 0.)\n"+
"{\n"+
"rd_mainImage_1 = cu_setCamera_1 + qos_map_1 * calcSoftshadow_return_value_1;\n"+
"p_mainImage_1 = vec2(.00035, - .00035);\n"+
"cv_setCamera_1 = rd_mainImage_1 + p_mainImage_1.xyy;\n"+
"calcNormal_has_returned_1 = false;\n"+
"cv_setCamera_1 = mod(cv_setCamera_1 + vec3(2., 10., 5.), vec3(4., 20., 10.)) - vec3(2., 10., 5.);\n"+
"ro_setCamera_1 = cv_setCamera_1;\n"+
"pos_calcNormal_1 = vec3(sin(iTime) / 2. + .5);\n"+
"castRay_has_returned_1 = false;\n"+
"ro_setCamera_1 = abs(ro_setCamera_1) - pos_calcNormal_1;\n"+
"tmin_castRay_1 = max(max(ro_setCamera_1.x, ro_setCamera_1.y), ro_setCamera_1.z);\n"+
"castRay_has_returned_1 = true;\n"+
"sca_calcAO_1 = tmin_castRay_1;\n"+
"precis_castRay_1 = sca_calcAO_1;\n"+
"lig_render_1 = cv_setCamera_1 + vec3(0, 0, 3);\n"+
"res_castRay_1 = sin(iTime + 3.1415926538 * 2. / 3.) / 2. + .5;\n"+
"map_has_returned_1 = false;\n"+
"y_calcSoftshadow_1 = length(lig_render_1) - res_castRay_1;\n"+
"map_has_returned_1 = true;\n"+
"calcAO_return_value_1 = y_calcSoftshadow_1;\n"+
"amb_render_1 = calcAO_return_value_1;\n"+
"ro_mainImage_1 = cv_setCamera_1 - vec3(0, 0, 3);\n"+
"t_torus_2 = vec2(1., (sin(iTime + 3.1415926538 * 4. / 3.) / 2. + .5) * .5);\n"+
"setCamera_has_returned_1 = false;\n"+
"e_calcNormal_1 = vec2(length(ro_mainImage_1.xz) - t_torus_2.x, ro_mainImage_1.y);\n"+
"d_calcAO_1 = length(e_calcNormal_1) - t_torus_2.y;\n"+
"setCamera_has_returned_1 = true;\n"+
"spe_render_1 = d_calcAO_1;\n"+
"map_return_value_inlined_4_1 = spe_render_1;\n"+
"map_return_value_inlined_8_1 = min(precis_castRay_1, amb_render_1);\n"+
"map_return_value_inlined_8_1 = min(map_return_value_inlined_8_1, map_return_value_inlined_4_1);\n"+
"res_calcSoftshadow_1 = map_return_value_inlined_8_1;\n"+
"calcNormal_has_returned_1 = true;\n"+
"mint_calcSoftshadow_1 = res_calcSoftshadow_1;\n"+
"cv_setCamera_1 = rd_mainImage_1 + p_mainImage_1.yyx;\n"+
"calcNormal_has_returned_1 = false;\n"+
"cv_setCamera_1 = mod(cv_setCamera_1 + vec3(2., 10., 5.), vec3(4., 20., 10.)) - vec3(2., 10., 5.);\n"+
"ro_setCamera_1 = cv_setCamera_1;\n"+
"pos_calcNormal_1 = vec3(sin(iTime) / 2. + .5);\n"+
"castRay_has_returned_1 = false;\n"+
"ro_setCamera_1 = abs(ro_setCamera_1) - pos_calcNormal_1;\n"+
"tmin_castRay_1 = max(max(ro_setCamera_1.x, ro_setCamera_1.y), ro_setCamera_1.z);\n"+
"castRay_has_returned_1 = true;\n"+
"sca_calcAO_1 = tmin_castRay_1;\n"+
"precis_castRay_1 = sca_calcAO_1;\n"+
"lig_render_1 = cv_setCamera_1 + vec3(0, 0, 3);\n"+
"res_castRay_1 = sin(iTime + 3.1415926538 * 2. / 3.) / 2. + .5;\n"+
"map_has_returned_1 = false;\n"+
"y_calcSoftshadow_1 = length(lig_render_1) - res_castRay_1;\n"+
"map_has_returned_1 = true;\n"+
"calcAO_return_value_1 = y_calcSoftshadow_1;\n"+
"amb_render_1 = calcAO_return_value_1;\n"+
"ro_mainImage_1 = cv_setCamera_1 - vec3(0, 0, 3);\n"+
"t_torus_2 = vec2(1., (sin(iTime + 3.1415926538 * 4. / 3.) / 2. + .5) * .5);\n"+
"setCamera_has_returned_1 = false;\n"+
"e_calcNormal_1 = vec2(length(ro_mainImage_1.xz) - t_torus_2.x, ro_mainImage_1.y);\n"+
"d_calcAO_1 = length(e_calcNormal_1) - t_torus_2.y;\n"+
"setCamera_has_returned_1 = true;\n"+
"spe_render_1 = d_calcAO_1;\n"+
"map_return_value_inlined_4_1 = spe_render_1;\n"+
"map_return_value_inlined_8_1 = min(precis_castRay_1, amb_render_1);\n"+
"map_return_value_inlined_8_1 = min(map_return_value_inlined_8_1, map_return_value_inlined_4_1);\n"+
"res_calcSoftshadow_1 = map_return_value_inlined_8_1;\n"+
"calcNormal_has_returned_1 = true;\n"+
"ph_calcSoftshadow_1 = res_calcSoftshadow_1;\n"+
"cv_setCamera_1 = rd_mainImage_1 + p_mainImage_1.yxy;\n"+
"calcNormal_has_returned_1 = false;\n"+
"cv_setCamera_1 = mod(cv_setCamera_1 + vec3(2., 10., 5.), vec3(4., 20., 10.)) - vec3(2., 10., 5.);\n"+
"ro_setCamera_1 = cv_setCamera_1;\n"+
"pos_calcNormal_1 = vec3(sin(iTime) / 2. + .5);\n"+
"castRay_has_returned_1 = false;\n"+
"ro_setCamera_1 = abs(ro_setCamera_1) - pos_calcNormal_1;\n"+
"tmin_castRay_1 = max(max(ro_setCamera_1.x, ro_setCamera_1.y), ro_setCamera_1.z);\n"+
"castRay_has_returned_1 = true;\n"+
"sca_calcAO_1 = tmin_castRay_1;\n"+
"precis_castRay_1 = sca_calcAO_1;\n"+
"lig_render_1 = cv_setCamera_1 + vec3(0, 0, 3);\n"+
"res_castRay_1 = sin(iTime + 3.1415926538 * 2. / 3.) / 2. + .5;\n"+
"map_has_returned_1 = false;\n"+
"y_calcSoftshadow_1 = length(lig_render_1) - res_castRay_1;\n"+
"map_has_returned_1 = true;\n"+
"calcAO_return_value_1 = y_calcSoftshadow_1;\n"+
"amb_render_1 = calcAO_return_value_1;\n"+
"ro_mainImage_1 = cv_setCamera_1 - vec3(0, 0, 3);\n"+
"t_torus_2 = vec2(1., (sin(iTime + 3.1415926538 * 4. / 3.) / 2. + .5) * .5);\n"+
"setCamera_has_returned_1 = false;\n"+
"e_calcNormal_1 = vec2(length(ro_mainImage_1.xz) - t_torus_2.x, ro_mainImage_1.y);\n"+
"d_calcAO_1 = length(e_calcNormal_1) - t_torus_2.y;\n"+
"setCamera_has_returned_1 = true;\n"+
"spe_render_1 = d_calcAO_1;\n"+
"map_return_value_inlined_4_1 = spe_render_1;\n"+
"map_return_value_inlined_8_1 = min(precis_castRay_1, amb_render_1);\n"+
"map_return_value_inlined_8_1 = min(map_return_value_inlined_8_1, map_return_value_inlined_4_1);\n"+
"res_calcSoftshadow_1 = map_return_value_inlined_8_1;\n"+
"calcNormal_has_returned_1 = true;\n"+
"tp2_castRay_1 = res_calcSoftshadow_1;\n"+
"cv_setCamera_1 = rd_mainImage_1 + p_mainImage_1.xxx;\n"+
"calcNormal_has_returned_1 = false;\n"+
"cv_setCamera_1 = mod(cv_setCamera_1 + vec3(2., 10., 5.), vec3(4., 20., 10.)) - vec3(2., 10., 5.);\n"+
"ro_setCamera_1 = cv_setCamera_1;\n"+
"pos_calcNormal_1 = vec3(sin(iTime) / 2. + .5);\n"+
"castRay_has_returned_1 = false;\n"+
"ro_setCamera_1 = abs(ro_setCamera_1) - pos_calcNormal_1;\n"+
"tmin_castRay_1 = max(max(ro_setCamera_1.x, ro_setCamera_1.y), ro_setCamera_1.z);\n"+
"castRay_has_returned_1 = true;\n"+
"sca_calcAO_1 = tmin_castRay_1;\n"+
"precis_castRay_1 = sca_calcAO_1;\n"+
"lig_render_1 = cv_setCamera_1 + vec3(0, 0, 3);\n"+
"res_castRay_1 = sin(iTime + 3.1415926538 * 2. / 3.) / 2. + .5;\n"+
"map_has_returned_1 = false;\n"+
"y_calcSoftshadow_1 = length(lig_render_1) - res_castRay_1;\n"+
"map_has_returned_1 = true;\n"+
"calcAO_return_value_1 = y_calcSoftshadow_1;\n"+
"amb_render_1 = calcAO_return_value_1;\n"+
"ro_mainImage_1 = cv_setCamera_1 - vec3(0, 0, 3);\n"+
"t_torus_2 = vec2(1., (sin(iTime + 3.1415926538 * 4. / 3.) / 2. + .5) * .5);\n"+
"setCamera_has_returned_1 = false;\n"+
"e_calcNormal_1 = vec2(length(ro_mainImage_1.xz) - t_torus_2.x, ro_mainImage_1.y);\n"+
"d_calcAO_1 = length(e_calcNormal_1) - t_torus_2.y;\n"+
"setCamera_has_returned_1 = true;\n"+
"spe_render_1 = d_calcAO_1;\n"+
"map_return_value_inlined_4_1 = spe_render_1;\n"+
"map_return_value_inlined_8_1 = min(precis_castRay_1, amb_render_1);\n"+
"map_return_value_inlined_8_1 = min(map_return_value_inlined_8_1, map_return_value_inlined_4_1);\n"+
"res_calcSoftshadow_1 = map_return_value_inlined_8_1;\n"+
"calcNormal_has_returned_1 = true;\n"+
"map_return_value_inlined_3_1 = res_calcSoftshadow_1;\n"+
"p_sdPlane_1 = normalize(p_mainImage_1.xyy * mint_calcSoftshadow_1 + p_mainImage_1.yyx * ph_calcSoftshadow_1 + p_mainImage_1.yxy * tp2_castRay_1 + p_mainImage_1.xxx * map_return_value_inlined_3_1);\n"+
"ro_castRay_1 = vec3(.0, .2, .4);\n"+
"map_return_value_inlined_2_1 = max(0., dot(p_sdPlane_1, ta_mainImage_1));\n"+
"sdPlane_return_value_inlined_0_1 = pow(max(1. + dot(p_sdPlane_1, qos_map_1), 1e-9), 4.);\n"+
"calcSoftshadow_return_value_inlined_11_1 = pow(max(max(dot(reflect(- ta_mainImage_1, p_sdPlane_1), - qos_map_1), 0.), 1e-9), 30.);\n"+
"cv_setCamera_1 = rd_mainImage_1 + p_sdPlane_1 * .05;\n"+
"calcNormal_has_returned_1 = false;\n"+
"cv_setCamera_1 = mod(cv_setCamera_1 + vec3(2., 10., 5.), vec3(4., 20., 10.)) - vec3(2., 10., 5.);\n"+
"ro_setCamera_1 = cv_setCamera_1;\n"+
"pos_calcNormal_1 = vec3(sin(iTime) / 2. + .5);\n"+
"castRay_has_returned_1 = false;\n"+
"ro_setCamera_1 = abs(ro_setCamera_1) - pos_calcNormal_1;\n"+
"tmin_castRay_1 = max(max(ro_setCamera_1.x, ro_setCamera_1.y), ro_setCamera_1.z);\n"+
"castRay_has_returned_1 = true;\n"+
"sca_calcAO_1 = tmin_castRay_1;\n"+
"precis_castRay_1 = sca_calcAO_1;\n"+
"lig_render_1 = cv_setCamera_1 + vec3(0, 0, 3);\n"+
"res_castRay_1 = sin(iTime + 3.1415926538 * 2. / 3.) / 2. + .5;\n"+
"map_has_returned_1 = false;\n"+
"y_calcSoftshadow_1 = length(lig_render_1) - res_castRay_1;\n"+
"map_has_returned_1 = true;\n"+
"calcAO_return_value_1 = y_calcSoftshadow_1;\n"+
"amb_render_1 = calcAO_return_value_1;\n"+
"ro_mainImage_1 = cv_setCamera_1 - vec3(0, 0, 3);\n"+
"t_torus_2 = vec2(1., (sin(iTime + 3.1415926538 * 4. / 3.) / 2. + .5) * .5);\n"+
"setCamera_has_returned_1 = false;\n"+
"e_calcNormal_1 = vec2(length(ro_mainImage_1.xz) - t_torus_2.x, ro_mainImage_1.y);\n"+
"d_calcAO_1 = length(e_calcNormal_1) - t_torus_2.y;\n"+
"setCamera_has_returned_1 = true;\n"+
"spe_render_1 = d_calcAO_1;\n"+
"map_return_value_inlined_4_1 = spe_render_1;\n"+
"map_return_value_inlined_8_1 = min(precis_castRay_1, amb_render_1);\n"+
"map_return_value_inlined_8_1 = min(map_return_value_inlined_8_1, map_return_value_inlined_4_1);\n"+
"res_calcSoftshadow_1 = map_return_value_inlined_8_1;\n"+
"calcNormal_has_returned_1 = true;\n"+
"map_return_value_inlined_5_1 = res_calcSoftshadow_1;\n"+
"map_return_value_inlined_7_1 = clamp(map_return_value_inlined_5_1 / .05, 0., 1.);\n"+
"cv_setCamera_1 = rd_mainImage_1 + ta_mainImage_1 * .4;\n"+
"calcNormal_has_returned_1 = false;\n"+
"cv_setCamera_1 = mod(cv_setCamera_1 + vec3(2., 10., 5.), vec3(4., 20., 10.)) - vec3(2., 10., 5.);\n"+
"ro_setCamera_1 = cv_setCamera_1;\n"+
"pos_calcNormal_1 = vec3(sin(iTime) / 2. + .5);\n"+
"castRay_has_returned_1 = false;\n"+
"ro_setCamera_1 = abs(ro_setCamera_1) - pos_calcNormal_1;\n"+
"tmin_castRay_1 = max(max(ro_setCamera_1.x, ro_setCamera_1.y), ro_setCamera_1.z);\n"+
"castRay_has_returned_1 = true;\n"+
"sca_calcAO_1 = tmin_castRay_1;\n"+
"precis_castRay_1 = sca_calcAO_1;\n"+
"lig_render_1 = cv_setCamera_1 + vec3(0, 0, 3);\n"+
"res_castRay_1 = sin(iTime + 3.1415926538 * 2. / 3.) / 2. + .5;\n"+
"map_has_returned_1 = false;\n"+
"y_calcSoftshadow_1 = length(lig_render_1) - res_castRay_1;\n"+
"map_has_returned_1 = true;\n"+
"calcAO_return_value_1 = y_calcSoftshadow_1;\n"+
"amb_render_1 = calcAO_return_value_1;\n"+
"ro_mainImage_1 = cv_setCamera_1 - vec3(0, 0, 3);\n"+
"t_torus_2 = vec2(1., (sin(iTime + 3.1415926538 * 4. / 3.) / 2. + .5) * .5);\n"+
"setCamera_has_returned_1 = false;\n"+
"e_calcNormal_1 = vec2(length(ro_mainImage_1.xz) - t_torus_2.x, ro_mainImage_1.y);\n"+
"d_calcAO_1 = length(e_calcNormal_1) - t_torus_2.y;\n"+
"setCamera_has_returned_1 = true;\n"+
"spe_render_1 = d_calcAO_1;\n"+
"map_return_value_inlined_4_1 = spe_render_1;\n"+
"map_return_value_inlined_8_1 = min(precis_castRay_1, amb_render_1);\n"+
"map_return_value_inlined_8_1 = min(map_return_value_inlined_8_1, map_return_value_inlined_4_1);\n"+
"res_calcSoftshadow_1 = map_return_value_inlined_8_1;\n"+
"calcNormal_has_returned_1 = true;\n"+
"h_calcAO_1 = res_calcSoftshadow_1;\n"+
"sdBox_return_value_1 = smoothstep(0., 1., h_calcAO_1 / .4);\n"+
"if(calcSoftshadow_return_value_inlined_11_1 < 1.)\n"+
"{\n"+
"nor_calcAO_1 = mix(calcSoftshadow_return_value_inlined_11_1 + ro_castRay_1 * (map_return_value_inlined_7_1 + .2) * (map_return_value_inlined_2_1 + sdBox_return_value_1 * .1), ro_calcSoftshadow_1, sdPlane_return_value_inlined_0_1);\n"+
"}\n"+
"nor_calcAO_1 = mix(ro_calcSoftshadow_1, nor_calcAO_1, exp(- .002 * calcSoftshadow_return_value_1 * calcSoftshadow_return_value_1 * calcSoftshadow_return_value_1));\n"+
"}\n"+
"fragColor_2 = vec4(pow(max(nor_calcAO_1, 1e-9), vec3(.4545)), 1);\n"+
"fragColor_2.w = 1.0;\n"+
"live_tu_has_executed = true;\n"+
"}\n"+
"}\n"+
"else\n"+
"{\n"+
"tmax_castRay_1 = min(tmax_castRay_1, tp2_castRay_1);\n"+
"}\n"+
"}\n"+
"t_castRay_1 = tmin_castRay_1;\n"+
"for(     i_castRay_1 = 0;\n"+
"i_castRay_1 < 64; i_castRay_1 ++)\n"+
"{\n"+
"precis_castRay_1 = 0.0005 * t_castRay_1;\n"+
"pos_map_1 = ro_castRay_1 + rd_castRay_1 * t_castRay_1;\n"+
"map_has_returned_1 = false;\n"+
"qos_map_1 = vec3(fract(pos_map_1.x + 0.5) - 0.5, pos_map_1.yz);\n"+
"p_sdPlane_1 = pos_map_1.xyz - vec3(0.0, 0.00, 0.0);\n"+
"sdPlane_has_returned_1 = false;\n"+
"sdPlane_return_value_1 = p_sdPlane_1.y;\n"+
"sdPlane_has_returned_1 = true;\n"+
"sdPlane_return_value_inlined_0_1 = sdPlane_return_value_1;\n"+
"p_sdBox_1 = qos_map_1.xyz - vec3(0.0, 0.25, 0.0);\n"+
"b_sdBox_1 = vec3(0.2, 0.5, 0.2);\n"+
"sdBox_has_returned_1 = false;\n"+
"d_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = min(max(d_sdBox_1.x, max(d_sdBox_1.y, d_sdBox_1.z)), 0.0) + length(max(d_sdBox_1, 0.0));\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_1_1 = sdBox_return_value_1;\n"+
"map_return_value_1 = min(sdPlane_return_value_inlined_0_1, sdBox_return_value_inlined_1_1);\n"+
"map_has_returned_1 = true;\n"+
"map_return_value_inlined_7_1 = map_return_value_1;\n"+
"res_castRay_1 = map_return_value_inlined_7_1;\n"+
"if(res_castRay_1 < precis_castRay_1 || t_castRay_1 > tmax_castRay_1)\n"+
"{\n"+
"break;\n"+
"}\n"+
"t_castRay_1 += res_castRay_1;\n"+
"}\n"+
"if(t_castRay_1 > tmax_castRay_1)\n"+
"{\n"+
"t_castRay_1 = - 1.0;\n"+
"}\n"+
"castRay_return_value_1 = t_castRay_1;\n"+
"castRay_has_returned_1 = true;\n"+
"castRay_return_value_inlined_9_1 = castRay_return_value_1;\n"+
"t_render_1 = castRay_return_value_inlined_9_1;\n"+
"if(t_render_1 > - 0.5)\n"+
"{\n"+
"pos_render_1 = ro_render_1 + t_render_1 * rd_render_1;\n"+
"pos_calcNormal_1 = pos_render_1;\n"+
"calcNormal_has_returned_1 = false;\n"+
"e_calcNormal_1 = vec2(1.0, - 1.0) * 0.5773 * 0.0005;\n"+
"pos_map_1 = pos_calcNormal_1 + e_calcNormal_1.xyy;\n"+
"map_has_returned_1 = false;\n"+
"qos_map_1 = vec3(fract(pos_map_1.x + 0.5) - 0.5, pos_map_1.yz);\n"+
"p_sdPlane_1 = pos_map_1.xyz - vec3(0.0, 0.00, 0.0);\n"+
"sdPlane_has_returned_1 = false;\n"+
"sdPlane_return_value_1 = p_sdPlane_1.y;\n"+
"sdPlane_has_returned_1 = true;\n"+
"sdPlane_return_value_inlined_0_1 = sdPlane_return_value_1;\n"+
"p_sdBox_1 = qos_map_1.xyz - vec3(0.0, 0.25, 0.0);\n"+
"b_sdBox_1 = vec3(0.2, 0.5, 0.2);\n"+
"sdBox_has_returned_1 = false;\n"+
"d_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = min(max(d_sdBox_1.x, max(d_sdBox_1.y, d_sdBox_1.z)), 0.0) + length(max(d_sdBox_1, 0.0));\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_1_1 = sdBox_return_value_1;\n"+
"map_return_value_1 = min(sdPlane_return_value_inlined_0_1, sdBox_return_value_inlined_1_1);\n"+
"map_has_returned_1 = true;\n"+
"map_return_value_inlined_3_1 = map_return_value_1;\n"+
"pos_map_1 = pos_calcNormal_1 + e_calcNormal_1.yyx;\n"+
"map_has_returned_1 = false;\n"+
"qos_map_1 = vec3(fract(pos_map_1.x + 0.5) - 0.5, pos_map_1.yz);\n"+
"p_sdPlane_1 = pos_map_1.xyz - vec3(0.0, 0.00, 0.0);\n"+
"sdPlane_has_returned_1 = false;\n"+
"sdPlane_return_value_1 = p_sdPlane_1.y;\n"+
"sdPlane_has_returned_1 = true;\n"+
"sdPlane_return_value_inlined_0_1 = sdPlane_return_value_1;\n"+
"p_sdBox_1 = qos_map_1.xyz - vec3(0.0, 0.25, 0.0);\n"+
"b_sdBox_1 = vec3(0.2, 0.5, 0.2);\n"+
"sdBox_has_returned_1 = false;\n"+
"d_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = min(max(d_sdBox_1.x, max(d_sdBox_1.y, d_sdBox_1.z)), 0.0) + length(max(d_sdBox_1, 0.0));\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_1_1 = sdBox_return_value_1;\n"+
"map_return_value_1 = min(sdPlane_return_value_inlined_0_1, sdBox_return_value_inlined_1_1);\n"+
"map_has_returned_1 = true;\n"+
"map_return_value_inlined_4_1 = map_return_value_1;\n"+
"pos_map_1 = pos_calcNormal_1 + e_calcNormal_1.yxy;\n"+
"map_has_returned_1 = false;\n"+
"qos_map_1 = vec3(fract(pos_map_1.x + 0.5) - 0.5, pos_map_1.yz);\n"+
"p_sdPlane_1 = pos_map_1.xyz - vec3(0.0, 0.00, 0.0);\n"+
"sdPlane_has_returned_1 = false;\n"+
"sdPlane_return_value_1 = p_sdPlane_1.y;\n"+
"sdPlane_has_returned_1 = true;\n"+
"sdPlane_return_value_inlined_0_1 = sdPlane_return_value_1;\n"+
"p_sdBox_1 = qos_map_1.xyz - vec3(0.0, 0.25, 0.0);\n"+
"b_sdBox_1 = vec3(0.2, 0.5, 0.2);\n"+
"sdBox_has_returned_1 = false;\n"+
"d_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = min(max(d_sdBox_1.x, max(d_sdBox_1.y, d_sdBox_1.z)), 0.0) + length(max(d_sdBox_1, 0.0));\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_1_1 = sdBox_return_value_1;\n"+
"map_return_value_1 = min(sdPlane_return_value_inlined_0_1, sdBox_return_value_inlined_1_1);\n"+
"map_has_returned_1 = true;\n"+
"map_return_value_inlined_5_1 = map_return_value_1;\n"+
"pos_map_1 = pos_calcNormal_1 + e_calcNormal_1.xxx;\n"+
"map_has_returned_1 = false;\n"+
"qos_map_1 = vec3(fract(pos_map_1.x + 0.5) - 0.5, pos_map_1.yz);\n"+
"p_sdPlane_1 = pos_map_1.xyz - vec3(0.0, 0.00, 0.0);\n"+
"sdPlane_has_returned_1 = false;\n"+
"sdPlane_return_value_1 = p_sdPlane_1.y;\n"+
"sdPlane_has_returned_1 = true;\n"+
"sdPlane_return_value_inlined_0_1 = sdPlane_return_value_1;\n"+
"p_sdBox_1 = qos_map_1.xyz - vec3(0.0, 0.25, 0.0);\n"+
"b_sdBox_1 = vec3(0.2, 0.5, 0.2);\n"+
"sdBox_has_returned_1 = false;\n"+
"d_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = min(max(d_sdBox_1.x, max(d_sdBox_1.y, d_sdBox_1.z)), 0.0) + length(max(d_sdBox_1, 0.0));\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_1_1 = sdBox_return_value_1;\n"+
"map_return_value_1 = min(sdPlane_return_value_inlined_0_1, sdBox_return_value_inlined_1_1);\n"+
"map_has_returned_1 = true;\n"+
"map_return_value_inlined_6_1 = map_return_value_1;\n"+
"calcNormal_return_value_1 = normalize(e_calcNormal_1.xyy * map_return_value_inlined_3_1 + e_calcNormal_1.yyx * map_return_value_inlined_4_1 + e_calcNormal_1.yxy * map_return_value_inlined_5_1 + e_calcNormal_1.xxx * map_return_value_inlined_6_1);\n"+
"calcNormal_has_returned_1 = true;\n"+
"calcNormal_return_value_inlined_10_1 = calcNormal_return_value_1;\n"+
"nor_render_1 = calcNormal_return_value_inlined_10_1;\n"+
"mate_render_1 = vec3(0.3);\n"+
"lig_render_1 = normalize(vec3(- 0.1, 0.3, 0.6));\n"+
"hal_render_1 = normalize(lig_render_1 - rd_render_1);\n"+
"ro_calcSoftshadow_1 = pos_render_1;\n"+
"rd_calcSoftshadow_1 = lig_render_1;\n"+
"mint_calcSoftshadow_1 = 0.01;\n"+
"tmax_calcSoftshadow_1 = 3.0;\n"+
"technique_calcSoftshadow_1 = technique_render_1;\n"+
"calcSoftshadow_has_returned_1 = false;\n"+
"res_calcSoftshadow_1 = 1.0;\n"+
"t_calcSoftshadow_1 = mint_calcSoftshadow_1;\n"+
"ph_calcSoftshadow_1 = 1e10;\n"+
"for(       i_calcSoftshadow_1 = 0;\n"+
"i_calcSoftshadow_1 < 32; i_calcSoftshadow_1 ++)\n"+
"{\n"+
"pos_map_1 = ro_calcSoftshadow_1 + rd_calcSoftshadow_1 * t_calcSoftshadow_1;\n"+
"map_has_returned_1 = false;\n"+
"qos_map_1 = vec3(fract(pos_map_1.x + 0.5) - 0.5, pos_map_1.yz);\n"+
"p_sdPlane_1 = pos_map_1.xyz - vec3(0.0, 0.00, 0.0);\n"+
"sdPlane_has_returned_1 = false;\n"+
"sdPlane_return_value_1 = p_sdPlane_1.y;\n"+
"sdPlane_has_returned_1 = true;\n"+
"sdPlane_return_value_inlined_0_1 = sdPlane_return_value_1;\n"+
"p_sdBox_1 = qos_map_1.xyz - vec3(0.0, 0.25, 0.0);\n"+
"b_sdBox_1 = vec3(0.2, 0.5, 0.2);\n"+
"sdBox_has_returned_1 = false;\n"+
"d_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = min(max(d_sdBox_1.x, max(d_sdBox_1.y, d_sdBox_1.z)), 0.0) + length(max(d_sdBox_1, 0.0));\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_1_1 = sdBox_return_value_1;\n"+
"map_return_value_1 = min(sdPlane_return_value_inlined_0_1, sdBox_return_value_inlined_1_1);\n"+
"map_has_returned_1 = true;\n"+
"map_return_value_inlined_2_1 = map_return_value_1;\n"+
"h_calcSoftshadow_1 = map_return_value_inlined_2_1;\n"+
"if(technique_calcSoftshadow_1 == 0)\n"+
"{\n"+
"res_calcSoftshadow_1 = min(res_calcSoftshadow_1, 10.0 * h_calcSoftshadow_1 / t_calcSoftshadow_1);\n"+
"}\n"+
"else\n"+
"{\n"+
"y_calcSoftshadow_1 = h_calcSoftshadow_1 * h_calcSoftshadow_1 / (2.0 * ph_calcSoftshadow_1);\n"+
"d_calcSoftshadow_1 = sqrt(h_calcSoftshadow_1 * h_calcSoftshadow_1 - y_calcSoftshadow_1 * y_calcSoftshadow_1);\n"+
"res_calcSoftshadow_1 = min(res_calcSoftshadow_1, 10.0 * d_calcSoftshadow_1 / max(0.0, t_calcSoftshadow_1 - y_calcSoftshadow_1));\n"+
"ph_calcSoftshadow_1 = h_calcSoftshadow_1;\n"+
"}\n"+
"t_calcSoftshadow_1 += h_calcSoftshadow_1;\n"+
"if(res_calcSoftshadow_1 < 0.0001 || t_calcSoftshadow_1 > tmax_calcSoftshadow_1)\n"+
"{\n"+
"break;\n"+
"}\n"+
"}\n"+
"res_calcSoftshadow_1 = clamp(res_calcSoftshadow_1, 0.0, 1.0);\n"+
"calcSoftshadow_return_value_1 = res_calcSoftshadow_1 * res_calcSoftshadow_1 * (3.0 - 2.0 * res_calcSoftshadow_1);\n"+
"calcSoftshadow_has_returned_1 = true;\n"+
"calcSoftshadow_return_value_inlined_11_1 = calcSoftshadow_return_value_1;\n"+
"dif_render_1 = clamp(dot(nor_render_1, lig_render_1), 0.0, 1.0) * calcSoftshadow_return_value_inlined_11_1;\n"+
"spe_render_1 = pow(max(clamp(dot(nor_render_1, hal_render_1), 0.0, 1.0), 1e-9), 16.0) * dif_render_1 * (0.04 + 0.96 * pow(max(clamp(1.0 + dot(hal_render_1, rd_render_1), 0.0, 1.0), 1e-9), 5.0));\n"+
"col_render_1 = mate_render_1 * 4.0 * dif_render_1 * vec3(1.00, 0.70, 0.5);\n"+
"col_render_1 += 12.0 * spe_render_1 * vec3(1.00, 0.70, 0.5);\n"+
"pos_calcAO_1 = pos_render_1;\n"+
"nor_calcAO_1 = nor_render_1;\n"+
"calcAO_has_returned_1 = false;\n"+
"occ_calcAO_1 = 0.0;\n"+
"sca_calcAO_1 = 1.0;\n"+
"for(       i_calcAO_1 = 0;\n"+
"i_calcAO_1 < 5; i_calcAO_1 ++)\n"+
"{\n"+
"h_calcAO_1 = 0.001 + 0.15 * float(i_calcAO_1) / 4.0;\n"+
"pos_map_1 = pos_calcAO_1 + h_calcAO_1 * nor_calcAO_1;\n"+
"map_has_returned_1 = false;\n"+
"qos_map_1 = vec3(fract(pos_map_1.x + 0.5) - 0.5, pos_map_1.yz);\n"+
"p_sdPlane_1 = pos_map_1.xyz - vec3(0.0, 0.00, 0.0);\n"+
"sdPlane_has_returned_1 = false;\n"+
"sdPlane_return_value_1 = p_sdPlane_1.y;\n"+
"sdPlane_has_returned_1 = true;\n"+
"sdPlane_return_value_inlined_0_1 = sdPlane_return_value_1;\n"+
"p_sdBox_1 = qos_map_1.xyz - vec3(0.0, 0.25, 0.0);\n"+
"b_sdBox_1 = vec3(0.2, 0.5, 0.2);\n"+
"sdBox_has_returned_1 = false;\n"+
"d_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = min(max(d_sdBox_1.x, max(d_sdBox_1.y, d_sdBox_1.z)), 0.0) + length(max(d_sdBox_1, 0.0));\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_1_1 = sdBox_return_value_1;\n"+
"map_return_value_1 = min(sdPlane_return_value_inlined_0_1, sdBox_return_value_inlined_1_1);\n"+
"map_has_returned_1 = true;\n"+
"map_return_value_inlined_8_1 = map_return_value_1;\n"+
"d_calcAO_1 = map_return_value_inlined_8_1;\n"+
"occ_calcAO_1 += (h_calcAO_1 - d_calcAO_1) * sca_calcAO_1;\n"+
"sca_calcAO_1 *= 0.95;\n"+
"}\n"+
"calcAO_return_value_1 = clamp(1.0 - 1.5 * occ_calcAO_1, 0.0, 1.0);\n"+
"calcAO_has_returned_1 = true;\n"+
"calcAO_return_value_inlined_12_1 = calcAO_return_value_1;\n"+
"occ_render_1 = calcAO_return_value_inlined_12_1;\n"+
"amb_render_1 = clamp(0.5 + 0.5 * nor_render_1.y, 0.0, 1.0);\n"+
"col_render_1 += mate_render_1 * amb_render_1 * occ_render_1 * vec3(0.0, 0.08, 0.1);\n"+
"col_render_1 *= exp(- 0.0005 * t_render_1 * t_render_1 * t_render_1);\n"+
"}\n"+
"render_return_value_1 = col_render_1;\n"+
"render_has_returned_1 = true;\n"+
"render_return_value_inlined_14_1 = render_return_value_1;\n"+
"col_mainImage_1 = render_return_value_inlined_14_1;\n"+
"col_mainImage_1 = pow(max(col_mainImage_1, 1e-9), vec3(0.4545));\n"+
"tot_mainImage_1 += col_mainImage_1;\n"+
"}\n"+
"}\n"+
"tot_mainImage_1 /= float(2 * 2);\n"+
"fragColor_1 = vec4(tot_mainImage_1, 1.0);\n"+
"fragColor_1.w = 1.0;\n"+
"fragColor = mix(fragColor_2, fragColor_1, 1.0 - fragColor_2.a + iTime);\n"+
"}\n"+
"";


var bug2Src = "#version 300 es\n"+
"precision highp float;\n"+
"\n"+
"layout(location = 0) out vec4 fragColor;\n"+
"\n"+
"uniform vec2 iResolution;\n"+
"\n"+
"uniform float iTime;\n"+
"\n"+
"uniform float iTimeDelta;\n"+
"\n"+
"uniform vec4 iMouse;\n"+
"\n"+
"uniform int iFrame;\n"+
"\n"+
"bool live_tu_has_executed = false;\n"+
"\n"+
"vec4 fragColor_1;\n"+
"\n"+
"float stretch_1, gunsUp_1, gunsForward_1, edWalk_1, edTwist_1, edDown_1, edShoot_1, doorOpen_1, glow_1 = 0.0;\n"+
"\n"+
"struct MarchData_1 {\n"+
"float d;\n"+
"vec3 mat;\n"+
"float specPower;\n"+
"} ;\n"+
"\n"+
"vec4 fragColor_2;\n"+
"\n"+
"void main()\n"+
"{\n"+
"vec3 ro_mainImage_1;\n"+
"vec3 lookAt_mainImage_1;\n"+
"vec3 col_mainImage_1;\n"+
"float startScene_mainImage_1;\n"+
"float endScene_mainImage_1;\n"+
"float dim_mainImage_1;\n"+
"float time_mainImage_1;\n"+
"bool edZ_has_returned_1;\n"+
"float edZ_return_value_1;\n"+
"float edZ_return_value_inlined_93_1;\n"+
"float f_remap_1;\n"+
"float in1_remap_1;\n"+
"float in2_remap_1;\n"+
"float out1_remap_1;\n"+
"float out2_remap_1;\n"+
"bool remap_has_returned_1;\n"+
"float remap_return_value_1;\n"+
"float remap_return_value_inlined_94_1;\n"+
"float t_mainImage_1;\n"+
"float remap_return_value_inlined_95_1;\n"+
"float edZ_return_value_inlined_96_1;\n"+
"float edZ_return_value_inlined_97_1;\n"+
"float edZ_return_value_inlined_98_1;\n"+
"float edZ_return_value_inlined_99_1;\n"+
"float edZ_return_value_inlined_100_1;\n"+
"float edZ_return_value_inlined_101_1;\n"+
"float remap_return_value_inlined_102_1;\n"+
"float edZ_return_value_inlined_103_1;\n"+
"float remap_return_value_inlined_104_1;\n"+
"float remap_return_value_inlined_105_1;\n"+
"float edZ_return_value_inlined_106_1;\n"+
"float remap_return_value_inlined_107_1;\n"+
"float remap_return_value_inlined_108_1;\n"+
"float ternary_0_mainImage_1;\n"+
"float remap_return_value_inlined_109_1;\n"+
"vec2 coord_mainImage_1;\n"+
"bool fireShock_has_returned_1;\n"+
"float fireShock_return_value_1;\n"+
"float fireShock_return_value_inlined_110_1;\n"+
"vec2 uv_mainImage_1;\n"+
"vec3 ro_getRayDir_1;\n"+
"vec3 lookAt_getRayDir_1;\n"+
"vec2 uv_getRayDir_1;\n"+
"bool getRayDir_has_returned_1;\n"+
"vec3 getRayDir_return_value_1;\n"+
"vec3 forward_getRayDir_1;\n"+
"vec3 right_getRayDir_1;\n"+
"vec3 getRayDir_return_value_inlined_111_1;\n"+
"vec3 ro_getSceneColor_1;\n"+
"vec3 rd_getSceneColor_1;\n"+
"bool getSceneColor_has_returned_1;\n"+
"vec3 getSceneColor_return_value_1;\n"+
"vec3 p_getSceneColor_1;\n"+
"float g_getSceneColor_1;\n"+
"float d_getSceneColor_1;\n"+
"MarchData_1 h_getSceneColor_1;\n"+
"float steps_getSceneColor_1;\n"+
"vec3 p_map_1;\n"+
"bool map_has_returned_1;\n"+
"MarchData_1 map_return_value_1;\n"+
"vec3 p_room_1;\n"+
"bool room_has_returned_1;\n"+
"MarchData_1 room_return_value_1;\n"+
"const vec3 frameInner_room_1 = vec3(2.8, 2.6, .1);\n"+
"MarchData_1 r_room_1;\n"+
"vec2 xy_room_1;\n"+
"float doorFrame_room_1;\n"+
"float doorWidth_room_1;\n"+
"float door_room_1;\n"+
"float d_room_1;\n"+
"vec3 p_sdBox_1;\n"+
"vec3 b_sdBox_1;\n"+
"bool sdBox_has_returned_1;\n"+
"float sdBox_return_value_1;\n"+
"vec3 q_sdBox_1;\n"+
"float sdBox_return_value_inlined_69_1;\n"+
"float doorHole_room_1;\n"+
"float backWall_room_1;\n"+
"vec2 p_sdOctogon_1;\n"+
"float r_sdOctogon_1;\n"+
"bool sdOctogon_has_returned_1;\n"+
"float sdOctogon_return_value_1;\n"+
"const vec3 k_sdOctogon_1 = vec3(- .92387953, .38268343, .41421356);\n"+
"float sdOctogon_return_value_inlined_70_1;\n"+
"float sdOctogon_return_value_inlined_71_1;\n"+
"float ocp_room_1;\n"+
"float sdOctogon_return_value_inlined_72_1;\n"+
"float sdBox_return_value_inlined_73_1;\n"+
"float a_rot_1;\n"+
"bool rot_has_returned_1;\n"+
"mat2 rot_return_value_1;\n"+
"float c_rot_1;\n"+
"float s_rot_1;\n"+
"mat2 rot_return_value_inlined_74_1;\n"+
"float sdBox_return_value_inlined_75_1;\n"+
"float sdBox_return_value_inlined_76_1;\n"+
"float sdBox_return_value_inlined_77_1;\n"+
"MarchData_1 room_return_value_inlined_78_1;\n"+
"vec3 p_ed209_1;\n"+
"bool ed209_has_returned_1;\n"+
"MarchData_1 ed209_return_value_1;\n"+
"float f_legWalkAngle_1;\n"+
"bool legWalkAngle_has_returned_1;\n"+
"float legWalkAngle_return_value_1;\n"+
"float legWalkAngle_return_value_inlined_54_1;\n"+
"float edZ_return_value_inlined_55_1;\n"+
"vec3 p_legs_1;\n"+
"bool legs_has_returned_1;\n"+
"MarchData_1 legs_return_value_1;\n"+
"MarchData_1 r_legs_1;\n"+
"MarchData_1 mat_setBodyMaterial_1;\n"+
"float silver_legs_1;\n"+
"float legWalkAngle_return_value_inlined_45_1;\n"+
"float legAngle_legs_1;\n"+
"mat2 rot_return_value_inlined_46_1;\n"+
"mat2 rot_return_value_inlined_47_1;\n"+
"mat2 rot_return_value_inlined_48_1;\n"+
"vec3 cp_legs_1;\n"+
"vec3 pp_legs_1;\n"+
"mat2 rot_return_value_inlined_49_1;\n"+
"float sdBox_return_value_inlined_50_1;\n"+
"float sdBox_return_value_inlined_51_1;\n"+
"vec3 p_sdChamferedCube_1;\n"+
"vec3 r_sdChamferedCube_1;\n"+
"float c_sdChamferedCube_1;\n"+
"bool sdChamferedCube_has_returned_1;\n"+
"float sdChamferedCube_return_value_1;\n"+
"float sdBox_return_value_inlined_0_1;\n"+
"float cube_sdChamferedCube_1;\n"+
"mat2 rot_return_value_inlined_1_1;\n"+
"float sdBox_return_value_inlined_2_1;\n"+
"float sdChamferedCube_return_value_inlined_52_1;\n"+
"vec3 p_foot_1;\n"+
"bool foot_has_returned_1;\n"+
"float foot_return_value_1;\n"+
"mat2 rot_return_value_inlined_29_1;\n"+
"vec3 p_toe_1;\n"+
"bool toe_has_returned_1;\n"+
"float toe_return_value_1;\n"+
"float sdBox_return_value_inlined_28_1;\n"+
"float toe_return_value_inlined_30_1;\n"+
"float d_foot_1;\n"+
"mat2 rot_return_value_inlined_31_1;\n"+
"float toe_return_value_inlined_32_1;\n"+
"float foot_return_value_inlined_53_1;\n"+
"MarchData_1 legs_return_value_inlined_56_1;\n"+
"MarchData_1 r_ed209_1;\n"+
"float f_ed209_1;\n"+
"float slide_ed209_1;\n"+
"float fireShock_return_value_inlined_57_1;\n"+
"vec3 p_waist_1;\n"+
"bool waist_has_returned_1;\n"+
"MarchData_1 waist_return_value_1;\n"+
"MarchData_1 r_waist_1;\n"+
"mat2 rot_return_value_inlined_33_1;\n"+
"float bump_waist_1;\n"+
"float d_waist_1;\n"+
"float legWalkAngle_return_value_inlined_34_1;\n"+
"float legAngle_waist_1;\n"+
"mat2 rot_return_value_inlined_35_1;\n"+
"vec3 pp_waist_1;\n"+
"vec3 p_sdCappedCylinder_1;\n"+
"float h_sdCappedCylinder_1;\n"+
"float r_sdCappedCylinder_1;\n"+
"bool sdCappedCylinder_has_returned_1;\n"+
"float sdCappedCylinder_return_value_1;\n"+
"vec2 d_sdCappedCylinder_1;\n"+
"float sdCappedCylinder_return_value_inlined_36_1;\n"+
"float sdBox_return_value_inlined_37_1;\n"+
"float sdCappedCylinder_return_value_inlined_38_1;\n"+
"mat2 rot_return_value_inlined_39_1;\n"+
"float sdCappedCylinder_return_value_inlined_40_1;\n"+
"float sdBox_return_value_inlined_41_1;\n"+
"float sdCappedCylinder_return_value_inlined_42_1;\n"+
"float sdCappedCylinder_return_value_inlined_43_1;\n"+
"float sdBox_return_value_inlined_44_1;\n"+
"MarchData_1 waist_return_value_inlined_58_1;\n"+
"MarchData_1 a_minResult_1;\n"+
"MarchData_1 b_minResult_1;\n"+
"bool minResult_has_returned_1;\n"+
"MarchData_1 minResult_return_value_1;\n"+
"MarchData_1 minResult_return_value_inlined_59_1;\n"+
"float legWalkAngle_return_value_inlined_60_1;\n"+
"mat2 rot_return_value_inlined_61_1;\n"+
"mat2 rot_return_value_inlined_62_1;\n"+
"vec3 p_headLower_1;\n"+
"bool headLower_has_returned_1;\n"+
"MarchData_1 headLower_return_value_1;\n"+
"vec3 op_headLower_1;\n"+
"vec3 p_headVisor_1;\n"+
"float h_headVisor_1;\n"+
"float bump_headVisor_1;\n"+
"bool headVisor_has_returned_1;\n"+
"MarchData_1 headVisor_return_value_1;\n"+
"MarchData_1 result_headVisor_1;\n"+
"float sdBox_return_value_inlined_3_1;\n"+
"vec3 p_headSphere_1;\n"+
"bool headSphere_has_returned_1;\n"+
"float headSphere_return_value_1;\n"+
"float headSphere_return_value_inlined_4_1;\n"+
"MarchData_1 headVisor_return_value_inlined_5_1;\n"+
"MarchData_1 r_headLower_1;\n"+
"MarchData_1 headVisor_return_value_inlined_6_1;\n"+
"mat2 rot_return_value_inlined_7_1;\n"+
"float sdBox_return_value_inlined_8_1;\n"+
"float sdBox_return_value_inlined_9_1;\n"+
"float sdCappedCylinder_return_value_inlined_10_1;\n"+
"float sdCappedCylinder_return_value_inlined_11_1;\n"+
"MarchData_1 headLower_return_value_inlined_63_1;\n"+
"MarchData_1 minResult_return_value_inlined_64_1;\n"+
"MarchData_1 headVisor_return_value_inlined_65_1;\n"+
"MarchData_1 minResult_return_value_inlined_66_1;\n"+
"vec3 p_arms_1;\n"+
"bool arms_has_returned_1;\n"+
"MarchData_1 arms_return_value_1;\n"+
"const vec3 wrist_arms_1 = vec3(1.5, 0, 0) - vec3(0, 0, .3);\n"+
"MarchData_1 r_arms_1;\n"+
"mat2 rot_return_value_inlined_23_1;\n"+
"vec3 p_sdCapsule_1;\n"+
"vec3 a_sdCapsule_1;\n"+
"vec3 b_sdCapsule_1;\n"+
"float r_sdCapsule_1;\n"+
"bool sdCapsule_has_returned_1;\n"+
"float sdCapsule_return_value_1;\n"+
"vec3 pa_sdCapsule_1;\n"+
"vec3 ba_sdCapsule_1;\n"+
"float sdCapsule_return_value_inlined_24_1;\n"+
"float sdCapsule_return_value_inlined_25_1;\n"+
"vec3 p_gunPod_1;\n"+
"bool gunPod_has_returned_1;\n"+
"MarchData_1 gunPod_return_value_1;\n"+
"MarchData_1 r_gunPod_1;\n"+
"vec3 pp_gunPod_1;\n"+
"vec3 p_sdCappedCone_1;\n"+
"vec3 a_sdCappedCone_1;\n"+
"vec3 b_sdCappedCone_1;\n"+
"float ra_sdCappedCone_1;\n"+
"float rb_sdCappedCone_1;\n"+
"bool sdCappedCone_has_returned_1;\n"+
"float sdCappedCone_return_value_1;\n"+
"float rba_sdCappedCone_1;\n"+
"float baba_sdCappedCone_1;\n"+
"float papa_sdCappedCone_1;\n"+
"float paba_sdCappedCone_1;\n"+
"float x_sdCappedCone_1;\n"+
"float cax_sdCappedCone_1;\n"+
"float cay_sdCappedCone_1;\n"+
"float f_sdCappedCone_1;\n"+
"float cbx_sdCappedCone_1;\n"+
"float cby_sdCappedCone_1;\n"+
"float sdCappedCone_return_value_inlined_12_1;\n"+
"float sdCappedCylinder_return_value_inlined_13_1;\n"+
"vec3 p_sdTriPrism_1;\n"+
"vec2 h_sdTriPrism_1;\n"+
"bool sdTriPrism_has_returned_1;\n"+
"float sdTriPrism_return_value_1;\n"+
"vec3 q_sdTriPrism_1;\n"+
"float sdTriPrism_return_value_inlined_14_1;\n"+
"mat2 rot_return_value_inlined_15_1;\n"+
"float fs_gunPod_1;\n"+
"float bump_gunPod_1;\n"+
"float sdBox_return_value_inlined_16_1;\n"+
"float d_gunPod_1;\n"+
"float sdCappedCylinder_return_value_inlined_17_1;\n"+
"float sdCappedCylinder_return_value_inlined_18_1;\n"+
"float sdBox_return_value_inlined_19_1;\n"+
"float sdCappedCylinder_return_value_inlined_20_1;\n"+
"float fireShock_return_value_inlined_21_1;\n"+
"float sdCappedCylinder_return_value_inlined_22_1;\n"+
"MarchData_1 gunPod_return_value_inlined_26_1;\n"+
"MarchData_1 minResult_return_value_inlined_27_1;\n"+
"MarchData_1 arms_return_value_inlined_67_1;\n"+
"MarchData_1 minResult_return_value_inlined_68_1;\n"+
"MarchData_1 ed209_return_value_inlined_79_1;\n"+
"MarchData_1 minResult_return_value_inlined_80_1;\n"+
"MarchData_1 r_map_1;\n"+
"float gnd_map_1;\n"+
"MarchData_1 map_return_value_inlined_90_1;\n"+
"vec3 p_applyLighting_1;\n"+
"vec3 rd_applyLighting_1;\n"+
"float d_applyLighting_1;\n"+
"MarchData_1 data_applyLighting_1;\n"+
"bool applyLighting_has_returned_1;\n"+
"vec3 applyLighting_return_value_1;\n"+
"vec3 sunDir_applyLighting_1;\n"+
"vec3 p_calcNormal_1;\n"+
"float t_calcNormal_1;\n"+
"bool calcNormal_has_returned_1;\n"+
"vec3 calcNormal_return_value_1;\n"+
"float d_calcNormal_1;\n"+
"vec2 e_calcNormal_1;\n"+
"MarchData_1 map_return_value_inlined_82_1;\n"+
"MarchData_1 map_return_value_inlined_83_1;\n"+
"MarchData_1 map_return_value_inlined_84_1;\n"+
"MarchData_1 map_return_value_inlined_85_1;\n"+
"vec3 calcNormal_return_value_inlined_87_1;\n"+
"vec3 n_applyLighting_1;\n"+
"float primary_applyLighting_1;\n"+
"float bounce_applyLighting_1;\n"+
"float spe_applyLighting_1;\n"+
"float fre_applyLighting_1;\n"+
"float fog_applyLighting_1;\n"+
"vec3 p_calcShadow_1;\n"+
"vec3 lightPos_calcShadow_1;\n"+
"bool calcShadow_has_returned_1;\n"+
"float calcShadow_return_value_1;\n"+
"vec3 rd_calcShadow_1;\n"+
"float res_calcShadow_1;\n"+
"float t_calcShadow_1;\n"+
"float i_calcShadow_1;\n"+
"MarchData_1 map_return_value_inlined_81_1;\n"+
"float h_calcShadow_1;\n"+
"float calcShadow_return_value_inlined_88_1;\n"+
"vec3 p_ao_1;\n"+
"vec3 n_ao_1;\n"+
"float h_ao_1;\n"+
"bool ao_has_returned_1;\n"+
"float ao_return_value_1;\n"+
"MarchData_1 map_return_value_inlined_86_1;\n"+
"float ao_return_value_inlined_89_1;\n"+
"vec3 applyLighting_return_value_inlined_91_1;\n"+
"float fireShock_return_value_inlined_92_1;\n"+
"vec3 getSceneColor_return_value_inlined_112_1;\n"+
"vec3 col_vignette_1;\n"+
"vec2 fragCoord_vignette_1;\n"+
"bool vignette_has_returned_1;\n"+
"vec3 vignette_return_value_1;\n"+
"vec2 q_vignette_1;\n"+
"vec3 vignette_return_value_inlined_113_1;\n"+
"edWalk_1 = 1.;\n"+
"edTwist_1 = 0.;\n"+
"edDown_1 = 0.;\n"+
"edShoot_1 = 0.;\n"+
"doorOpen_1 = 1.;\n"+
"stretch_1 = 1.;\n"+
"time_mainImage_1 = mod(iTime + 4., 55.);\n"+
"if(time_mainImage_1 < 12.)\n"+
"{\n"+
"startScene_mainImage_1 = 0.;\n"+
"endScene_mainImage_1 = 12.;\n"+
"edWalk_1 = 0.;\n"+
"ro_mainImage_1 = vec3(0, - 1.5, - .625);\n"+
"edZ_has_returned_1 = false;\n"+
"edZ_return_value_1 = mix(5., - 2., edWalk_1);\n"+
"edZ_has_returned_1 = true;\n"+
"edZ_return_value_inlined_93_1 = edZ_return_value_1;\n"+
"lookAt_mainImage_1 = vec3(0, - 1, edZ_return_value_inlined_93_1);\n"+
"doorOpen_1 = smoothstep(0., 1., time_mainImage_1 / 5.);\n"+
"f_remap_1 = time_mainImage_1;\n"+
"in1_remap_1 = 7.;\n"+
"in2_remap_1 = 10.;\n"+
"out1_remap_1 = 0.;\n"+
"out2_remap_1 = 1.;\n"+
"remap_has_returned_1 = false;\n"+
"remap_return_value_1 = mix(out1_remap_1, out2_remap_1, clamp((f_remap_1 - in1_remap_1) / (in2_remap_1 - in1_remap_1), 0., 1.));\n"+
"remap_has_returned_1 = true;\n"+
"remap_return_value_inlined_94_1 = remap_return_value_1;\n"+
"stretch_1 = remap_return_value_inlined_94_1;\n"+
"}\n"+
"else\n"+
"{\n"+
"if(time_mainImage_1 < 25.)\n"+
"{\n"+
"startScene_mainImage_1 = 12.;\n"+
"endScene_mainImage_1 = 25.;\n"+
"t_mainImage_1 = time_mainImage_1 - startScene_mainImage_1;\n"+
"f_remap_1 = t_mainImage_1;\n"+
"in1_remap_1 = 3.;\n"+
"in2_remap_1 = 8.;\n"+
"out1_remap_1 = 0.;\n"+
"out2_remap_1 = 1.;\n"+
"remap_has_returned_1 = false;\n"+
"remap_return_value_1 = mix(out1_remap_1, out2_remap_1, clamp((f_remap_1 - in1_remap_1) / (in2_remap_1 - in1_remap_1), 0., 1.));\n"+
"remap_has_returned_1 = true;\n"+
"remap_return_value_inlined_95_1 = remap_return_value_1;\n"+
"edWalk_1 = smoothstep(0., 1., remap_return_value_inlined_95_1);\n"+
"edZ_has_returned_1 = false;\n"+
"edZ_return_value_1 = mix(5., - 2., edWalk_1);\n"+
"edZ_has_returned_1 = true;\n"+
"edZ_return_value_inlined_96_1 = edZ_return_value_1;\n"+
"ro_mainImage_1 = vec3(- .5 * cos(t_mainImage_1 * .7), .5 - t_mainImage_1 * .1, edZ_return_value_inlined_96_1 - 3.);\n"+
"edZ_has_returned_1 = false;\n"+
"edZ_return_value_1 = mix(5., - 2., edWalk_1);\n"+
"edZ_has_returned_1 = true;\n"+
"edZ_return_value_inlined_97_1 = edZ_return_value_1;\n"+
"lookAt_mainImage_1 = vec3(0, 0, edZ_return_value_inlined_97_1);\n"+
"}\n"+
"else\n"+
"{\n"+
"if(time_mainImage_1 < 29.)\n"+
"{\n"+
"startScene_mainImage_1 = 25.;\n"+
"endScene_mainImage_1 = 29.;\n"+
"edZ_has_returned_1 = false;\n"+
"edZ_return_value_1 = mix(5., - 2., edWalk_1);\n"+
"edZ_has_returned_1 = true;\n"+
"edZ_return_value_inlined_98_1 = edZ_return_value_1;\n"+
"ro_mainImage_1 = vec3(- 2, .5 + (time_mainImage_1 - startScene_mainImage_1) * .1, edZ_return_value_inlined_98_1 - 3.);\n"+
"edZ_has_returned_1 = false;\n"+
"edZ_return_value_1 = mix(5., - 2., edWalk_1);\n"+
"edZ_has_returned_1 = true;\n"+
"edZ_return_value_inlined_99_1 = edZ_return_value_1;\n"+
"lookAt_mainImage_1 = vec3(0, 0, edZ_return_value_inlined_99_1);\n"+
"}\n"+
"else\n"+
"{\n"+
"if(time_mainImage_1 < 37.)\n"+
"{\n"+
"startScene_mainImage_1 = 29.;\n"+
"endScene_mainImage_1 = 37.;\n"+
"t_mainImage_1 = time_mainImage_1 - startScene_mainImage_1;\n"+
"edZ_has_returned_1 = false;\n"+
"edZ_return_value_1 = mix(5., - 2., edWalk_1);\n"+
"edZ_has_returned_1 = true;\n"+
"edZ_return_value_inlined_100_1 = edZ_return_value_1;\n"+
"ro_mainImage_1 = vec3(1.5, - 1. - t_mainImage_1 * .05, edZ_return_value_inlined_100_1 - 5.);\n"+
"edZ_has_returned_1 = false;\n"+
"edZ_return_value_1 = mix(5., - 2., edWalk_1);\n"+
"edZ_has_returned_1 = true;\n"+
"edZ_return_value_inlined_101_1 = edZ_return_value_1;\n"+
"lookAt_mainImage_1 = vec3(0, - 1, edZ_return_value_inlined_101_1);\n"+
"f_remap_1 = t_mainImage_1;\n"+
"in1_remap_1 = 2.;\n"+
"in2_remap_1 = 5.;\n"+
"out1_remap_1 = 1.;\n"+
"out2_remap_1 = 0.;\n"+
"remap_has_returned_1 = false;\n"+
"remap_return_value_1 = mix(out1_remap_1, out2_remap_1, clamp((f_remap_1 - in1_remap_1) / (in2_remap_1 - in1_remap_1), 0., 1.));\n"+
"remap_has_returned_1 = true;\n"+
"remap_return_value_inlined_102_1 = remap_return_value_1;\n"+
"stretch_1 = remap_return_value_inlined_102_1;\n"+
"}\n"+
"else\n"+
"{\n"+
"if(time_mainImage_1 < 55.)\n"+
"{\n"+
"startScene_mainImage_1 = 37.;\n"+
"endScene_mainImage_1 = 55.;\n"+
"t_mainImage_1 = time_mainImage_1 - startScene_mainImage_1;\n"+
"edZ_has_returned_1 = false;\n"+
"edZ_return_value_1 = mix(5., - 2., edWalk_1);\n"+
"edZ_has_returned_1 = true;\n"+
"edZ_return_value_inlined_103_1 = edZ_return_value_1;\n"+
"ro_mainImage_1 = vec3(- 1.8, - .5, edZ_return_value_inlined_103_1 - 2.5);\n"+
"f_remap_1 = t_mainImage_1;\n"+
"in1_remap_1 = 2.;\n"+
"in2_remap_1 = 3.;\n"+
"out1_remap_1 = 0.;\n"+
"out2_remap_1 = 1.;\n"+
"remap_has_returned_1 = false;\n"+
"remap_return_value_1 = mix(out1_remap_1, out2_remap_1, clamp((f_remap_1 - in1_remap_1) / (in2_remap_1 - in1_remap_1), 0., 1.));\n"+
"remap_has_returned_1 = true;\n"+
"remap_return_value_inlined_104_1 = remap_return_value_1;\n"+
"f_remap_1 = t_mainImage_1;\n"+
"in1_remap_1 = 11.5;\n"+
"in2_remap_1 = 14.5;\n"+
"out1_remap_1 = 0.;\n"+
"out2_remap_1 = 1.;\n"+
"remap_has_returned_1 = false;\n"+
"remap_return_value_1 = mix(out1_remap_1, out2_remap_1, clamp((f_remap_1 - in1_remap_1) / (in2_remap_1 - in1_remap_1), 0., 1.));\n"+
"remap_has_returned_1 = true;\n"+
"remap_return_value_inlined_105_1 = remap_return_value_1;\n"+
"stretch_1 = remap_return_value_inlined_104_1 - remap_return_value_inlined_105_1;\n"+
"edZ_has_returned_1 = false;\n"+
"edZ_return_value_1 = mix(5., - 2., edWalk_1);\n"+
"edZ_has_returned_1 = true;\n"+
"edZ_return_value_inlined_106_1 = edZ_return_value_1;\n"+
"lookAt_mainImage_1 = vec3(0, stretch_1 * .5 - .5, edZ_return_value_inlined_106_1);\n"+
"f_remap_1 = t_mainImage_1;\n"+
"in1_remap_1 = 3.;\n"+
"in2_remap_1 = 3.2;\n"+
"out1_remap_1 = 0.;\n"+
"out2_remap_1 = 1.;\n"+
"remap_has_returned_1 = false;\n"+
"remap_return_value_1 = mix(out1_remap_1, out2_remap_1, clamp((f_remap_1 - in1_remap_1) / (in2_remap_1 - in1_remap_1), 0., 1.));\n"+
"remap_has_returned_1 = true;\n"+
"remap_return_value_inlined_107_1 = remap_return_value_1;\n"+
"edTwist_1 = remap_return_value_inlined_107_1 * stretch_1;\n"+
"f_remap_1 = t_mainImage_1;\n"+
"in1_remap_1 = 3.2;\n"+
"in2_remap_1 = 3.4;\n"+
"out1_remap_1 = 0.;\n"+
"out2_remap_1 = 1.;\n"+
"remap_has_returned_1 = false;\n"+
"remap_return_value_1 = mix(out1_remap_1, out2_remap_1, clamp((f_remap_1 - in1_remap_1) / (in2_remap_1 - in1_remap_1), 0., 1.));\n"+
"remap_has_returned_1 = true;\n"+
"remap_return_value_inlined_108_1 = remap_return_value_1;\n"+
"edDown_1 = remap_return_value_inlined_108_1 * stretch_1;\n"+
"if(t_mainImage_1 <= 9.5)\n"+
"{\n"+
"f_remap_1 = t_mainImage_1;\n"+
"in1_remap_1 = 4.;\n"+
"in2_remap_1 = 9.5;\n"+
"out1_remap_1 = 0.;\n"+
"out2_remap_1 = 1.;\n"+
"remap_has_returned_1 = false;\n"+
"remap_return_value_1 = mix(out1_remap_1, out2_remap_1, clamp((f_remap_1 - in1_remap_1) / (in2_remap_1 - in1_remap_1), 0., 1.));\n"+
"remap_has_returned_1 = true;\n"+
"remap_return_value_inlined_109_1 = remap_return_value_1;\n"+
"ternary_0_mainImage_1 = remap_return_value_inlined_109_1;\n"+
"}\n"+
"else\n"+
"{\n"+
"ternary_0_mainImage_1 = 0.;\n"+
"}\n"+
"edShoot_1 = ternary_0_mainImage_1;\n"+
"}\n"+
"}\n"+
"}\n"+
"}\n"+
"}\n"+
"dim_mainImage_1 = 1. - cos(min(1., 2. * min(abs(time_mainImage_1 - startScene_mainImage_1), abs(time_mainImage_1 - endScene_mainImage_1))) * 1.5705);\n"+
"col_mainImage_1 = vec3(0);\n"+
"coord_mainImage_1 = gl_FragCoord.xy;\n"+
"fireShock_has_returned_1 = false;\n"+
"fireShock_return_value_1 = abs(sin(edShoot_1 * 78.5375));\n"+
"fireShock_has_returned_1 = true;\n"+
"fireShock_return_value_inlined_110_1 = fireShock_return_value_1;\n"+
"coord_mainImage_1 += (fract(fireShock_return_value_inlined_110_1 * vec2(23242.232, 978.23465)) - .5) * 10.;\n"+
"uv_mainImage_1 = (coord_mainImage_1 - .5 * iResolution.xy) / iResolution.y;\n"+
"ro_getRayDir_1 = ro_mainImage_1;\n"+
"lookAt_getRayDir_1 = lookAt_mainImage_1;\n"+
"uv_getRayDir_1 = uv_mainImage_1;\n"+
"getRayDir_has_returned_1 = false;\n"+
"forward_getRayDir_1 = normalize(lookAt_getRayDir_1 - ro_getRayDir_1);\n"+
"right_getRayDir_1 = normalize(cross(vec3(0, 1, 0), forward_getRayDir_1));\n"+
"getRayDir_return_value_1 = normalize(forward_getRayDir_1 + right_getRayDir_1 * uv_getRayDir_1.x + cross(forward_getRayDir_1, right_getRayDir_1) * uv_getRayDir_1.y);\n"+
"getRayDir_has_returned_1 = true;\n"+
"getRayDir_return_value_inlined_111_1 = getRayDir_return_value_1;\n"+
"ro_getSceneColor_1 = ro_mainImage_1;\n"+
"rd_getSceneColor_1 = getRayDir_return_value_inlined_111_1;\n"+
"getSceneColor_has_returned_1 = false;\n"+
"d_getSceneColor_1 = .01;\n"+
"for( steps_getSceneColor_1 = 0.;\n"+
"(! getSceneColor_has_returned_1) && steps_getSceneColor_1 < 120.; steps_getSceneColor_1 ++)\n"+
"{\n"+
"p_getSceneColor_1 = ro_getSceneColor_1 + rd_getSceneColor_1 * d_getSceneColor_1;\n"+
"p_map_1 = p_getSceneColor_1;\n"+
"map_has_returned_1 = false;\n"+
"p_room_1 = p_map_1;\n"+
"room_has_returned_1 = false;\n"+
"r_room_1.mat = vec3(.4);\n"+
"r_room_1.specPower = 1e7;\n"+
"xy_room_1 = p_room_1.xy - vec2(0, 2);\n"+
"p_room_1.x = abs(p_room_1.x);\n"+
"p_room_1.yz += vec2(.5, - 3.4);\n"+
"p_sdBox_1 = p_room_1;\n"+
"b_sdBox_1 = frameInner_room_1 + vec3(0, 0, 1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_69_1 = sdBox_return_value_1;\n"+
"doorHole_room_1 = sdBox_return_value_inlined_69_1;\n"+
"backWall_room_1 = length(p_room_1.z - 8.);\n"+
"r_room_1.d = min(backWall_room_1, max(length(p_room_1.z), - doorHole_room_1 + .1));\n"+
"if(r_room_1.d == backWall_room_1)\n"+
"{\n"+
"p_sdOctogon_1 = xy_room_1;\n"+
"r_sdOctogon_1 = 2.6;\n"+
"sdOctogon_has_returned_1 = false;\n"+
"p_sdOctogon_1 = abs(p_sdOctogon_1);\n"+
"p_sdOctogon_1 -= 2. * min(dot(k_sdOctogon_1.xy, p_sdOctogon_1), 0.) * k_sdOctogon_1.xy;\n"+
"p_sdOctogon_1 -= 2. * min(dot(vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y), p_sdOctogon_1), 0.) * vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y);\n"+
"p_sdOctogon_1 -= vec2(clamp(p_sdOctogon_1.x, - k_sdOctogon_1.z * r_sdOctogon_1, k_sdOctogon_1.z * r_sdOctogon_1), r_sdOctogon_1);\n"+
"sdOctogon_return_value_1 = length(p_sdOctogon_1) * sign(p_sdOctogon_1.y);\n"+
"sdOctogon_has_returned_1 = true;\n"+
"sdOctogon_return_value_inlined_70_1 = sdOctogon_return_value_1;\n"+
"p_sdOctogon_1 = xy_room_1;\n"+
"r_sdOctogon_1 = 1.9;\n"+
"sdOctogon_has_returned_1 = false;\n"+
"p_sdOctogon_1 = abs(p_sdOctogon_1);\n"+
"p_sdOctogon_1 -= 2. * min(dot(k_sdOctogon_1.xy, p_sdOctogon_1), 0.) * k_sdOctogon_1.xy;\n"+
"p_sdOctogon_1 -= 2. * min(dot(vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y), p_sdOctogon_1), 0.) * vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y);\n"+
"p_sdOctogon_1 -= vec2(clamp(p_sdOctogon_1.x, - k_sdOctogon_1.z * r_sdOctogon_1, k_sdOctogon_1.z * r_sdOctogon_1), r_sdOctogon_1);\n"+
"sdOctogon_return_value_1 = length(p_sdOctogon_1) * sign(p_sdOctogon_1.y);\n"+
"sdOctogon_has_returned_1 = true;\n"+
"sdOctogon_return_value_inlined_71_1 = sdOctogon_return_value_1;\n"+
"ocp_room_1 = min(abs(sdOctogon_return_value_inlined_70_1), abs(sdOctogon_return_value_inlined_71_1));\n"+
"p_sdOctogon_1 = xy_room_1;\n"+
"r_sdOctogon_1 = 1.2;\n"+
"sdOctogon_has_returned_1 = false;\n"+
"p_sdOctogon_1 = abs(p_sdOctogon_1);\n"+
"p_sdOctogon_1 -= 2. * min(dot(k_sdOctogon_1.xy, p_sdOctogon_1), 0.) * k_sdOctogon_1.xy;\n"+
"p_sdOctogon_1 -= 2. * min(dot(vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y), p_sdOctogon_1), 0.) * vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y);\n"+
"p_sdOctogon_1 -= vec2(clamp(p_sdOctogon_1.x, - k_sdOctogon_1.z * r_sdOctogon_1, k_sdOctogon_1.z * r_sdOctogon_1), r_sdOctogon_1);\n"+
"sdOctogon_return_value_1 = length(p_sdOctogon_1) * sign(p_sdOctogon_1.y);\n"+
"sdOctogon_has_returned_1 = true;\n"+
"sdOctogon_return_value_inlined_72_1 = sdOctogon_return_value_1;\n"+
"ocp_room_1 = min(max(ocp_room_1, min(.7 - abs(xy_room_1.x + 1.2), - xy_room_1.y)), max(abs(sdOctogon_return_value_inlined_72_1), min(xy_room_1.x, .7 - abs(xy_room_1.y))));\n"+
"if(ocp_room_1 < .3)\n"+
"{\n"+
"r_room_1.mat = vec3(.39, .57, .71);\n"+
"}\n"+
"}\n"+
"p_sdBox_1 = p_room_1;\n"+
"b_sdBox_1 = frameInner_room_1 + vec3(.4, .4, .1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_73_1 = sdBox_return_value_1;\n"+
"doorFrame_room_1 = max(sdBox_return_value_inlined_73_1, - doorHole_room_1);\n"+
"doorWidth_room_1 = frameInner_room_1.x * .5;\n"+
"p_room_1.x -= frameInner_room_1.x;\n"+
"a_rot_1 = doorOpen_1 * 2.1;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_74_1 = rot_return_value_1;\n"+
"p_room_1.xz *= rot_return_value_inlined_74_1;\n"+
"p_room_1.x += doorWidth_room_1;\n"+
"p_sdBox_1 = p_room_1;\n"+
"b_sdBox_1 = vec3(doorWidth_room_1, frameInner_room_1.yz);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_75_1 = sdBox_return_value_1;\n"+
"door_room_1 = sdBox_return_value_inlined_75_1;\n"+
"p_room_1 = abs(p_room_1) - vec3(doorWidth_room_1 * .5, 1.1, .14);\n"+
"p_sdBox_1 = p_room_1;\n"+
"b_sdBox_1 = vec3(.45, .9, .1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_76_1 = sdBox_return_value_1;\n"+
"p_sdBox_1 = p_room_1;\n"+
"b_sdBox_1 = vec3(.35, .8, 1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_77_1 = sdBox_return_value_1;\n"+
"d_room_1 = min(doorFrame_room_1, max(door_room_1, - max(sdBox_return_value_inlined_76_1, - sdBox_return_value_inlined_77_1)));\n"+
"if(d_room_1 < r_room_1.d)\n"+
"{\n"+
"r_room_1.d = d_room_1;\n"+
"r_room_1.mat = vec3(.02, .02, .024);\n"+
"r_room_1.specPower = 10.;\n"+
"}\n"+
"room_return_value_1 = r_room_1;\n"+
"room_has_returned_1 = true;\n"+
"room_return_value_inlined_78_1 = room_return_value_1;\n"+
"p_ed209_1 = p_map_1;\n"+
"ed209_has_returned_1 = false;\n"+
"f_legWalkAngle_1 = 2.;\n"+
"legWalkAngle_has_returned_1 = false;\n"+
"legWalkAngle_return_value_1 = sin(edWalk_1 * 3.141 * 6. * f_legWalkAngle_1) * .2;\n"+
"legWalkAngle_has_returned_1 = true;\n"+
"legWalkAngle_return_value_inlined_54_1 = legWalkAngle_return_value_1;\n"+
"edZ_has_returned_1 = false;\n"+
"edZ_return_value_1 = mix(5., - 2., edWalk_1);\n"+
"edZ_has_returned_1 = true;\n"+
"edZ_return_value_inlined_55_1 = edZ_return_value_1;\n"+
"p_ed209_1.yz += vec2(legWalkAngle_return_value_inlined_54_1 * .2 + .1, - edZ_return_value_inlined_55_1);\n"+
"p_legs_1 = p_ed209_1;\n"+
"legs_has_returned_1 = false;\n"+
"mat_setBodyMaterial_1 = r_legs_1;\n"+
"mat_setBodyMaterial_1.mat = vec3(.36, .45, .5);\n"+
"mat_setBodyMaterial_1.specPower = 30.;\n"+
"r_legs_1 = mat_setBodyMaterial_1;\n"+
"f_legWalkAngle_1 = 1.;\n"+
"legWalkAngle_has_returned_1 = false;\n"+
"legWalkAngle_return_value_1 = sin(edWalk_1 * 3.141 * 6. * f_legWalkAngle_1) * .2;\n"+
"legWalkAngle_has_returned_1 = true;\n"+
"legWalkAngle_return_value_inlined_45_1 = legWalkAngle_return_value_1;\n"+
"legAngle_legs_1 = legWalkAngle_return_value_inlined_45_1;\n"+
"p_legs_1.z += .27;\n"+
"a_rot_1 = legAngle_legs_1 * sign(p_legs_1.x);\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_46_1 = rot_return_value_1;\n"+
"p_legs_1.yz *= rot_return_value_inlined_46_1;\n"+
"p_legs_1.z -= .27;\n"+
"p_legs_1.y += .65;\n"+
"a_rot_1 = - .2;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_47_1 = rot_return_value_1;\n"+
"p_legs_1.yz *= rot_return_value_inlined_47_1;\n"+
"a_rot_1 = legAngle_legs_1 * .3;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_48_1 = rot_return_value_1;\n"+
"p_legs_1.xy *= rot_return_value_inlined_48_1;\n"+
"pp_legs_1 = p_legs_1;\n"+
"pp_legs_1.x = abs(pp_legs_1.x);\n"+
"pp_legs_1.y += .48;\n"+
"a_rot_1 = - .58525;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_49_1 = rot_return_value_1;\n"+
"pp_legs_1.yz *= rot_return_value_inlined_49_1;\n"+
"pp_legs_1.x -= .98;\n"+
"cp_legs_1 = pp_legs_1;\n"+
"p_legs_1 = pp_legs_1;\n"+
"pp_legs_1.xz = abs(pp_legs_1.xz) - vec2(.12, .25);\n"+
"p_legs_1.y += .68;\n"+
"p_legs_1.xy = abs(p_legs_1.xy) - .12;\n"+
"p_sdBox_1 = p_legs_1;\n"+
"b_sdBox_1 = vec3(.07, .05, 1.2);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_50_1 = sdBox_return_value_1;\n"+
"silver_legs_1 = sdBox_return_value_inlined_50_1;\n"+
"cp_legs_1 -= vec3(0, - .7, 0);\n"+
"p_sdBox_1 = cp_legs_1 - vec3(0, 0, 1.15);\n"+
"b_sdBox_1 = vec3(.17, .17, .07);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_51_1 = sdBox_return_value_1;\n"+
"r_legs_1.d = sdBox_return_value_inlined_51_1 - .04;\n"+
"cp_legs_1.z ++;\n"+
"p_sdChamferedCube_1 = cp_legs_1.xzy;\n"+
"r_sdChamferedCube_1 = vec2(.28 - sign(abs(cp_legs_1.z) - .3) * .01, .5).xyx;\n"+
"c_sdChamferedCube_1 = .18;\n"+
"sdChamferedCube_has_returned_1 = false;\n"+
"p_sdBox_1 = p_sdChamferedCube_1;\n"+
"b_sdBox_1 = r_sdChamferedCube_1;\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_0_1 = sdBox_return_value_1;\n"+
"cube_sdChamferedCube_1 = sdBox_return_value_inlined_0_1;\n"+
"a_rot_1 = .78525;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_1_1 = rot_return_value_1;\n"+
"p_sdChamferedCube_1.xz *= rot_return_value_inlined_1_1;\n"+
"r_sdChamferedCube_1.xz *= - c_sdChamferedCube_1 / 1.41 + 1.41;\n"+
"p_sdBox_1 = p_sdChamferedCube_1;\n"+
"b_sdBox_1 = r_sdChamferedCube_1;\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_2_1 = sdBox_return_value_1;\n"+
"sdChamferedCube_return_value_1 = max(cube_sdChamferedCube_1, sdBox_return_value_inlined_2_1);\n"+
"sdChamferedCube_has_returned_1 = true;\n"+
"sdChamferedCube_return_value_inlined_52_1 = sdChamferedCube_return_value_1;\n"+
"r_legs_1.d = min(r_legs_1.d, sdChamferedCube_return_value_inlined_52_1);\n"+
"p_foot_1 = cp_legs_1;\n"+
"foot_has_returned_1 = false;\n"+
"p_foot_1.z += .8;\n"+
"a_rot_1 = .86;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_29_1 = rot_return_value_1;\n"+
"p_foot_1.yz *= rot_return_value_inlined_29_1;\n"+
"p_toe_1 = p_foot_1;\n"+
"toe_has_returned_1 = false;\n"+
"p_toe_1.yz += vec2(.1, .32);\n"+
"p_sdBox_1 = p_toe_1;\n"+
"b_sdBox_1 = vec3(.3 + .2 * (p_toe_1.z - .18) - p_toe_1.y * .228, .3 + .2 * cos((p_toe_1.z - .18) * 3.69), .35);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_28_1 = sdBox_return_value_1;\n"+
"toe_return_value_1 = max(sdBox_return_value_inlined_28_1, .1 - p_toe_1.y);\n"+
"toe_has_returned_1 = true;\n"+
"toe_return_value_inlined_30_1 = toe_return_value_1;\n"+
"d_foot_1 = toe_return_value_inlined_30_1;\n"+
"a_rot_1 = 1.57;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_31_1 = rot_return_value_1;\n"+
"p_foot_1.xz *= rot_return_value_inlined_31_1;\n"+
"p_foot_1.x -= .43;\n"+
"p_foot_1.z = .25 - abs(p_foot_1.z);\n"+
"p_toe_1 = p_foot_1;\n"+
"toe_has_returned_1 = false;\n"+
"p_toe_1.yz += vec2(.1, .32);\n"+
"p_sdBox_1 = p_toe_1;\n"+
"b_sdBox_1 = vec3(.3 + .2 * (p_toe_1.z - .18) - p_toe_1.y * .228, .3 + .2 * cos((p_toe_1.z - .18) * 3.69), .35);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_28_1 = sdBox_return_value_1;\n"+
"toe_return_value_1 = max(sdBox_return_value_inlined_28_1, .1 - p_toe_1.y);\n"+
"toe_has_returned_1 = true;\n"+
"toe_return_value_inlined_32_1 = toe_return_value_1;\n"+
"foot_return_value_1 = min(d_foot_1, toe_return_value_inlined_32_1);\n"+
"foot_has_returned_1 = true;\n"+
"foot_return_value_inlined_53_1 = foot_return_value_1;\n"+
"r_legs_1.d = min(r_legs_1.d, foot_return_value_inlined_53_1);\n"+
"if(silver_legs_1 < r_legs_1.d)\n"+
"{\n"+
"r_legs_1.d = silver_legs_1;\n"+
"r_legs_1.mat = vec3(.8);\n"+
"}\n"+
"legs_return_value_1 = r_legs_1;\n"+
"legs_has_returned_1 = true;\n"+
"legs_return_value_inlined_56_1 = legs_return_value_1;\n"+
"r_ed209_1 = legs_return_value_inlined_56_1;\n"+
"f_ed209_1 = min(stretch_1 * 2., 1.);\n"+
"slide_ed209_1 = f_ed209_1 < .5 ? smoothstep(0., .5, f_ed209_1) : (1. - smoothstep(.5, 1., f_ed209_1) * .2);\n"+
"p_ed209_1.yz -= slide_ed209_1 * .5;\n"+
"gunsUp_1 = smoothstep(0., 1., clamp((stretch_1 - .66) * 6., 0., 1.));\n"+
"fireShock_has_returned_1 = false;\n"+
"fireShock_return_value_1 = abs(sin(edShoot_1 * 78.5375));\n"+
"fireShock_has_returned_1 = true;\n"+
"fireShock_return_value_inlined_57_1 = fireShock_return_value_1;\n"+
"gunsForward_1 = smoothstep(0., 1., clamp((stretch_1 - .83) * 6., 0., 1.)) + fireShock_return_value_inlined_57_1 * .5;\n"+
"p_waist_1 = p_ed209_1;\n"+
"waist_has_returned_1 = false;\n"+
"mat_setBodyMaterial_1 = r_waist_1;\n"+
"mat_setBodyMaterial_1.mat = vec3(.36, .45, .5);\n"+
"mat_setBodyMaterial_1.specPower = 30.;\n"+
"r_waist_1 = mat_setBodyMaterial_1;\n"+
"p_waist_1.y += .65;\n"+
"a_rot_1 = - .2;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_33_1 = rot_return_value_1;\n"+
"p_waist_1.yz *= rot_return_value_inlined_33_1;\n"+
"f_legWalkAngle_1 = 1.;\n"+
"legWalkAngle_has_returned_1 = false;\n"+
"legWalkAngle_return_value_1 = sin(edWalk_1 * 3.141 * 6. * f_legWalkAngle_1) * .2;\n"+
"legWalkAngle_has_returned_1 = true;\n"+
"legWalkAngle_return_value_inlined_34_1 = legWalkAngle_return_value_1;\n"+
"legAngle_waist_1 = legWalkAngle_return_value_inlined_34_1;\n"+
"a_rot_1 = legAngle_waist_1 * .3;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_35_1 = rot_return_value_1;\n"+
"p_waist_1.xy *= rot_return_value_inlined_35_1;\n"+
"pp_waist_1 = p_waist_1;\n"+
"pp_waist_1.y += .3;\n"+
"p_sdCappedCylinder_1 = pp_waist_1.zyx;\n"+
"h_sdCappedCylinder_1 = .5;\n"+
"r_sdCappedCylinder_1 = .5;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_36_1 = sdCappedCylinder_return_value_1;\n"+
"r_waist_1.d = max(sdCappedCylinder_return_value_inlined_36_1, p_waist_1.y + .15);\n"+
"bump_waist_1 = .5 - abs(sin(p_waist_1.y * 40.)) * .03;\n"+
"p_sdBox_1 = p_waist_1;\n"+
"b_sdBox_1 = vec3(bump_waist_1, .15, bump_waist_1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_37_1 = sdBox_return_value_1;\n"+
"d_waist_1 = sdBox_return_value_inlined_37_1;\n"+
"bump_waist_1 = .3 - abs(sin(p_waist_1.x * 40.)) * .03;\n"+
"pp_waist_1.y += .18;\n"+
"p_sdCappedCylinder_1 = pp_waist_1.zyx;\n"+
"h_sdCappedCylinder_1 = bump_waist_1;\n"+
"r_sdCappedCylinder_1 = .75;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_38_1 = sdCappedCylinder_return_value_1;\n"+
"d_waist_1 = min(d_waist_1, sdCappedCylinder_return_value_inlined_38_1);\n"+
"pp_waist_1.x = abs(pp_waist_1.x);\n"+
"a_rot_1 = - .58525 + legAngle_waist_1 * sign(p_waist_1.x);\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_39_1 = rot_return_value_1;\n"+
"pp_waist_1.yz *= rot_return_value_inlined_39_1;\n"+
"pp_waist_1.x -= .98;\n"+
"p_sdCappedCylinder_1 = pp_waist_1.zyx;\n"+
"h_sdCappedCylinder_1 = .4;\n"+
"r_sdCappedCylinder_1 = .24;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_40_1 = sdCappedCylinder_return_value_1;\n"+
"r_waist_1.d = min(r_waist_1.d, max(sdCappedCylinder_return_value_inlined_40_1, - pp_waist_1.y));\n"+
"p_sdBox_1 = pp_waist_1;\n"+
"b_sdBox_1 = vec3(.24, .2, .14 + .2 * pp_waist_1.y);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_41_1 = sdBox_return_value_1;\n"+
"r_waist_1.d = min(r_waist_1.d, sdBox_return_value_inlined_41_1);\n"+
"p_waist_1 = pp_waist_1;\n"+
"pp_waist_1.xz = abs(pp_waist_1.xz) - vec2(.12, .25);\n"+
"p_sdCappedCylinder_1 = pp_waist_1.xzy;\n"+
"h_sdCappedCylinder_1 = .1;\n"+
"r_sdCappedCylinder_1 = .325;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_42_1 = sdCappedCylinder_return_value_1;\n"+
"p_sdCappedCylinder_1 = pp_waist_1.xzy;\n"+
"h_sdCappedCylinder_1 = .05;\n"+
"r_sdCappedCylinder_1 = .5;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_43_1 = sdCappedCylinder_return_value_1;\n"+
"r_waist_1.d = min(r_waist_1.d, max(min(sdCappedCylinder_return_value_inlined_42_1, sdCappedCylinder_return_value_inlined_43_1), pp_waist_1.y));\n"+
"p_waist_1.y += .68;\n"+
"p_sdBox_1 = p_waist_1;\n"+
"b_sdBox_1 = vec3(sign(abs(p_waist_1.y) - .04) * .005 + .26, .2, .34);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_44_1 = sdBox_return_value_1;\n"+
"r_waist_1.d = min(r_waist_1.d, sdBox_return_value_inlined_44_1);\n"+
"if(d_waist_1 < r_waist_1.d)\n"+
"{\n"+
"r_waist_1.d = d_waist_1;\n"+
"r_waist_1.mat = vec3(.02);\n"+
"}\n"+
"waist_return_value_1 = r_waist_1;\n"+
"waist_has_returned_1 = true;\n"+
"waist_return_value_inlined_58_1 = waist_return_value_1;\n"+
"a_minResult_1 = r_ed209_1;\n"+
"b_minResult_1 = waist_return_value_inlined_58_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"if(! live_tu_has_executed)\n"+
"{\n"+
"float an_mainImage_2;\n"+
"vec3 ro_mainImage_2;\n"+
"vec3 ta_mainImage_2;\n"+
"vec3 ww_mainImage_2;\n"+
"vec3 uu_mainImage_2;\n"+
"vec3 vv_mainImage_2;\n"+
"vec3 tot_mainImage_2;\n"+
"int m_mainImage_2;\n"+
"int n_mainImage_2;\n"+
"vec2 o_mainImage_2;\n"+
"vec2 p_mainImage_2;\n"+
"vec3 rd_mainImage_2;\n"+
"const float tmax_mainImage_2 = 5.0;\n"+
"float t_mainImage_2;\n"+
"int i_mainImage_2;\n"+
"vec3 pos_mainImage_2;\n"+
"vec3 pos_map_2;\n"+
"bool map_has_returned_2;\n"+
"float map_return_value_2;\n"+
"float ra_map_2;\n"+
"float rb_map_2;\n"+
"float di_map_2;\n"+
"vec3 p2_sdDeathStar_2;\n"+
"float ra_sdDeathStar_2;\n"+
"float rb_sdDeathStar_2;\n"+
"float d_sdDeathStar_2;\n"+
"bool sdDeathStar_has_returned_2;\n"+
"float sdDeathStar_return_value_2;\n"+
"vec2 p_sdDeathStar_2;\n"+
"float a_sdDeathStar_2;\n"+
"float b_sdDeathStar_2;\n"+
"float sdDeathStar_return_value_inlined_0_2;\n"+
"float map_return_value_inlined_6_2;\n"+
"float h_mainImage_2;\n"+
"vec3 col_mainImage_2;\n"+
"vec3 pos_calcNormal_2;\n"+
"bool calcNormal_has_returned_2;\n"+
"vec3 calcNormal_return_value_2;\n"+
"vec2 e_calcNormal_2;\n"+
"const float eps_calcNormal_2 = 0.0005;\n"+
"float map_return_value_inlined_2_2;\n"+
"float map_return_value_inlined_3_2;\n"+
"float map_return_value_inlined_4_2;\n"+
"float map_return_value_inlined_5_2;\n"+
"vec3 calcNormal_return_value_inlined_7_2;\n"+
"vec3 nor_mainImage_2;\n"+
"vec3 lig_mainImage_2;\n"+
"float dif_mainImage_2;\n"+
"vec3 ro_calcSoftshadow_2;\n"+
"vec3 rd_calcSoftshadow_2;\n"+
"float tmin_calcSoftshadow_2;\n"+
"float tmax_calcSoftshadow_2;\n"+
"float k_calcSoftshadow_2;\n"+
"bool calcSoftshadow_has_returned_2;\n"+
"float calcSoftshadow_return_value_2;\n"+
"float res_calcSoftshadow_2;\n"+
"float t_calcSoftshadow_2;\n"+
"int i_calcSoftshadow_2;\n"+
"float map_return_value_inlined_1_2;\n"+
"float h_calcSoftshadow_2;\n"+
"float calcSoftshadow_return_value_inlined_8_2;\n"+
"float amb_mainImage_2;\n"+
"dim_mainImage_1 = 1.0 * sin(0.38 * iTime + 3.0);\n"+
"b_sdBox_1 = vec3(1.0 * cos(dim_mainImage_1), - 0.1, 1.0 * sin(dim_mainImage_1));\n"+
"p_sdCappedCylinder_1 = vec3(0.0, 0.0, 0.0);\n"+
"pp_gunPod_1 = normalize(p_sdCappedCylinder_1 - b_sdBox_1);\n"+
"p_sdChamferedCube_1 = normalize(cross(pp_gunPod_1, vec3(0.0, 1.0, 0.0)));\n"+
"ro_getRayDir_1 = normalize(cross(p_sdChamferedCube_1, pp_gunPod_1));\n"+
"p_applyLighting_1 = vec3(0.0);\n"+
"for(       m_mainImage_2 = 0;\n"+
"m_mainImage_2 < 3; m_mainImage_2 ++)\n"+
"{\n"+
"for(         n_mainImage_2 = 0;\n"+
"n_mainImage_2 < 3; n_mainImage_2 ++)\n"+
"{\n"+
"coord_mainImage_1 = vec2(float(m_mainImage_2), float(n_mainImage_2)) / float(3) - 0.5;\n"+
"q_vignette_1 = (2.0 * (gl_FragCoord.xy + coord_mainImage_1) - iResolution.xy) / iResolution.y;\n"+
"r_sdChamferedCube_1 = normalize(q_vignette_1.x * p_sdChamferedCube_1 + q_vignette_1.y * ro_getRayDir_1 + 1.5 * pp_gunPod_1);\n"+
"sdCappedCylinder_return_value_inlined_18_1 = 0.0;\n"+
"for(           i_mainImage_2 = 0;\n"+
"i_mainImage_2 < 256; i_mainImage_2 ++)\n"+
"{\n"+
"p_waist_1 = b_sdBox_1 + sdCappedCylinder_return_value_inlined_18_1 * r_sdChamferedCube_1;\n"+
"q_sdBox_1 = p_waist_1;\n"+
"legWalkAngle_has_returned_1 = false;\n"+
"r_sdOctogon_1 = 0.5;\n"+
"c_sdChamferedCube_1 = 0.35 + 0.20 * cos(iTime * 1.1 + 4.0);\n"+
"sdCappedCylinder_return_value_inlined_40_1 = 0.50 + 0.15 * cos(iTime * 1.7);\n"+
"p_toe_1 = q_sdBox_1;\n"+
"ternary_0_mainImage_1 = r_sdOctogon_1;\n"+
"sdBox_return_value_inlined_16_1 = c_sdChamferedCube_1;\n"+
"edZ_return_value_inlined_97_1 = sdCappedCylinder_return_value_inlined_40_1;\n"+
"headLower_has_returned_1 = false;\n"+
"uv_getRayDir_1 = vec2(p_toe_1.x, length(p_toe_1.yz));\n"+
"doorFrame_room_1 = (ternary_0_mainImage_1 * ternary_0_mainImage_1 - sdBox_return_value_inlined_16_1 * sdBox_return_value_inlined_16_1 + edZ_return_value_inlined_97_1 * edZ_return_value_inlined_97_1) / (2.0 * edZ_return_value_inlined_97_1);\n"+
"sdCapsule_return_value_inlined_25_1 = sqrt(max(ternary_0_mainImage_1 * ternary_0_mainImage_1 - doorFrame_room_1 * doorFrame_room_1, 0.0));\n"+
"if(uv_getRayDir_1.x * sdCapsule_return_value_inlined_25_1 - uv_getRayDir_1.y * doorFrame_room_1 > edZ_return_value_inlined_97_1 * max(sdCapsule_return_value_inlined_25_1 - uv_getRayDir_1.y, 0.0))\n"+
"{\n"+
"s_rot_1 = length(uv_getRayDir_1 - vec2(doorFrame_room_1, sdCapsule_return_value_inlined_25_1));\n"+
"headLower_has_returned_1 = true;\n"+
"}\n"+
"else\n"+
"{\n"+
"s_rot_1 = max((length(uv_getRayDir_1) - ternary_0_mainImage_1), - (length(uv_getRayDir_1 - vec2(edZ_return_value_inlined_97_1, 0)) - sdBox_return_value_inlined_16_1));\n"+
"headLower_has_returned_1 = true;\n"+
"}\n"+
"spe_applyLighting_1 = s_rot_1;\n"+
"toe_return_value_inlined_30_1 = spe_applyLighting_1;\n"+
"legWalkAngle_has_returned_1 = true;\n"+
"sdBox_return_value_1 = toe_return_value_inlined_30_1;\n"+
"cax_sdCappedCone_1 = sdBox_return_value_1;\n"+
"if(cax_sdCappedCone_1 < 0.0001 || sdCappedCylinder_return_value_inlined_18_1 > tmax_mainImage_2)\n"+
"{\n"+
"break;\n"+
"}\n"+
"sdCappedCylinder_return_value_inlined_18_1 += cax_sdCappedCone_1;\n"+
"}\n"+
"lookAt_getRayDir_1 = vec3(0.0);\n"+
"if(sdCappedCylinder_return_value_inlined_18_1 < tmax_mainImage_2)\n"+
"{\n"+
"p_waist_1 = b_sdBox_1 + sdCappedCylinder_return_value_inlined_18_1 * r_sdChamferedCube_1;\n"+
"p_calcNormal_1 = p_waist_1;\n"+
"applyLighting_has_returned_1 = false;\n"+
"h_sdTriPrism_1 = vec2(1.0, - 1.0) * 0.5773;\n"+
"q_sdBox_1 = p_calcNormal_1 + h_sdTriPrism_1.xyy * eps_calcNormal_2;\n"+
"legWalkAngle_has_returned_1 = false;\n"+
"r_sdOctogon_1 = 0.5;\n"+
"c_sdChamferedCube_1 = 0.35 + 0.20 * cos(iTime * 1.1 + 4.0);\n"+
"sdCappedCylinder_return_value_inlined_40_1 = 0.50 + 0.15 * cos(iTime * 1.7);\n"+
"p_toe_1 = q_sdBox_1;\n"+
"ternary_0_mainImage_1 = r_sdOctogon_1;\n"+
"sdBox_return_value_inlined_16_1 = c_sdChamferedCube_1;\n"+
"edZ_return_value_inlined_97_1 = sdCappedCylinder_return_value_inlined_40_1;\n"+
"headLower_has_returned_1 = false;\n"+
"uv_getRayDir_1 = vec2(p_toe_1.x, length(p_toe_1.yz));\n"+
"doorFrame_room_1 = (ternary_0_mainImage_1 * ternary_0_mainImage_1 - sdBox_return_value_inlined_16_1 * sdBox_return_value_inlined_16_1 + edZ_return_value_inlined_97_1 * edZ_return_value_inlined_97_1) / (2.0 * edZ_return_value_inlined_97_1);\n"+
"sdCapsule_return_value_inlined_25_1 = sqrt(max(ternary_0_mainImage_1 * ternary_0_mainImage_1 - doorFrame_room_1 * doorFrame_room_1, 0.0));\n"+
"if(uv_getRayDir_1.x * sdCapsule_return_value_inlined_25_1 - uv_getRayDir_1.y * doorFrame_room_1 > edZ_return_value_inlined_97_1 * max(sdCapsule_return_value_inlined_25_1 - uv_getRayDir_1.y, 0.0))\n"+
"{\n"+
"s_rot_1 = length(uv_getRayDir_1 - vec2(doorFrame_room_1, sdCapsule_return_value_inlined_25_1));\n"+
"headLower_has_returned_1 = true;\n"+
"}\n"+
"else\n"+
"{\n"+
"s_rot_1 = max((length(uv_getRayDir_1) - ternary_0_mainImage_1), - (length(uv_getRayDir_1 - vec2(edZ_return_value_inlined_97_1, 0)) - sdBox_return_value_inlined_16_1));\n"+
"headLower_has_returned_1 = true;\n"+
"}\n"+
"spe_applyLighting_1 = s_rot_1;\n"+
"toe_return_value_inlined_30_1 = spe_applyLighting_1;\n"+
"legWalkAngle_has_returned_1 = true;\n"+
"a_rot_1 = toe_return_value_inlined_30_1;\n"+
"q_sdBox_1 = p_calcNormal_1 + h_sdTriPrism_1.yyx * eps_calcNormal_2;\n"+
"legWalkAngle_has_returned_1 = false;\n"+
"r_sdOctogon_1 = 0.5;\n"+
"c_sdChamferedCube_1 = 0.35 + 0.20 * cos(iTime * 1.1 + 4.0);\n"+
"sdCappedCylinder_return_value_inlined_40_1 = 0.50 + 0.15 * cos(iTime * 1.7);\n"+
"p_toe_1 = q_sdBox_1;\n"+
"ternary_0_mainImage_1 = r_sdOctogon_1;\n"+
"sdBox_return_value_inlined_16_1 = c_sdChamferedCube_1;\n"+
"edZ_return_value_inlined_97_1 = sdCappedCylinder_return_value_inlined_40_1;\n"+
"headLower_has_returned_1 = false;\n"+
"uv_getRayDir_1 = vec2(p_toe_1.x, length(p_toe_1.yz));\n"+
"doorFrame_room_1 = (ternary_0_mainImage_1 * ternary_0_mainImage_1 - sdBox_return_value_inlined_16_1 * sdBox_return_value_inlined_16_1 + edZ_return_value_inlined_97_1 * edZ_return_value_inlined_97_1) / (2.0 * edZ_return_value_inlined_97_1);\n"+
"sdCapsule_return_value_inlined_25_1 = sqrt(max(ternary_0_mainImage_1 * ternary_0_mainImage_1 - doorFrame_room_1 * doorFrame_room_1, 0.0));\n"+
"if(uv_getRayDir_1.x * sdCapsule_return_value_inlined_25_1 - uv_getRayDir_1.y * doorFrame_room_1 > edZ_return_value_inlined_97_1 * max(sdCapsule_return_value_inlined_25_1 - uv_getRayDir_1.y, 0.0))\n"+
"{\n"+
"s_rot_1 = length(uv_getRayDir_1 - vec2(doorFrame_room_1, sdCapsule_return_value_inlined_25_1));\n"+
"headLower_has_returned_1 = true;\n"+
"}\n"+
"else\n"+
"{\n"+
"s_rot_1 = max((length(uv_getRayDir_1) - ternary_0_mainImage_1), - (length(uv_getRayDir_1 - vec2(edZ_return_value_inlined_97_1, 0)) - sdBox_return_value_inlined_16_1));\n"+
"headLower_has_returned_1 = true;\n"+
"}\n"+
"spe_applyLighting_1 = s_rot_1;\n"+
"toe_return_value_inlined_30_1 = spe_applyLighting_1;\n"+
"legWalkAngle_has_returned_1 = true;\n"+
"startScene_mainImage_1 = toe_return_value_inlined_30_1;\n"+
"q_sdBox_1 = p_calcNormal_1 + h_sdTriPrism_1.yxy * eps_calcNormal_2;\n"+
"legWalkAngle_has_returned_1 = false;\n"+
"r_sdOctogon_1 = 0.5;\n"+
"c_sdChamferedCube_1 = 0.35 + 0.20 * cos(iTime * 1.1 + 4.0);\n"+
"sdCappedCylinder_return_value_inlined_40_1 = 0.50 + 0.15 * cos(iTime * 1.7);\n"+
"p_toe_1 = q_sdBox_1;\n"+
"ternary_0_mainImage_1 = r_sdOctogon_1;\n"+
"sdBox_return_value_inlined_16_1 = c_sdChamferedCube_1;\n"+
"edZ_return_value_inlined_97_1 = sdCappedCylinder_return_value_inlined_40_1;\n"+
"headLower_has_returned_1 = false;\n"+
"uv_getRayDir_1 = vec2(p_toe_1.x, length(p_toe_1.yz));\n"+
"doorFrame_room_1 = (ternary_0_mainImage_1 * ternary_0_mainImage_1 - sdBox_return_value_inlined_16_1 * sdBox_return_value_inlined_16_1 + edZ_return_value_inlined_97_1 * edZ_return_value_inlined_97_1) / (2.0 * edZ_return_value_inlined_97_1);\n"+
"sdCapsule_return_value_inlined_25_1 = sqrt(max(ternary_0_mainImage_1 * ternary_0_mainImage_1 - doorFrame_room_1 * doorFrame_room_1, 0.0));\n"+
"if(uv_getRayDir_1.x * sdCapsule_return_value_inlined_25_1 - uv_getRayDir_1.y * doorFrame_room_1 > edZ_return_value_inlined_97_1 * max(sdCapsule_return_value_inlined_25_1 - uv_getRayDir_1.y, 0.0))\n"+
"{\n"+
"s_rot_1 = length(uv_getRayDir_1 - vec2(doorFrame_room_1, sdCapsule_return_value_inlined_25_1));\n"+
"headLower_has_returned_1 = true;\n"+
"}\n"+
"else\n"+
"{\n"+
"s_rot_1 = max((length(uv_getRayDir_1) - ternary_0_mainImage_1), - (length(uv_getRayDir_1 - vec2(edZ_return_value_inlined_97_1, 0)) - sdBox_return_value_inlined_16_1));\n"+
"headLower_has_returned_1 = true;\n"+
"}\n"+
"spe_applyLighting_1 = s_rot_1;\n"+
"toe_return_value_inlined_30_1 = spe_applyLighting_1;\n"+
"legWalkAngle_has_returned_1 = true;\n"+
"edZ_return_value_inlined_93_1 = toe_return_value_inlined_30_1;\n"+
"q_sdBox_1 = p_calcNormal_1 + h_sdTriPrism_1.xxx * eps_calcNormal_2;\n"+
"legWalkAngle_has_returned_1 = false;\n"+
"r_sdOctogon_1 = 0.5;\n"+
"c_sdChamferedCube_1 = 0.35 + 0.20 * cos(iTime * 1.1 + 4.0);\n"+
"sdCappedCylinder_return_value_inlined_40_1 = 0.50 + 0.15 * cos(iTime * 1.7);\n"+
"p_toe_1 = q_sdBox_1;\n"+
"ternary_0_mainImage_1 = r_sdOctogon_1;\n"+
"sdBox_return_value_inlined_16_1 = c_sdChamferedCube_1;\n"+
"edZ_return_value_inlined_97_1 = sdCappedCylinder_return_value_inlined_40_1;\n"+
"headLower_has_returned_1 = false;\n"+
"uv_getRayDir_1 = vec2(p_toe_1.x, length(p_toe_1.yz));\n"+
"doorFrame_room_1 = (ternary_0_mainImage_1 * ternary_0_mainImage_1 - sdBox_return_value_inlined_16_1 * sdBox_return_value_inlined_16_1 + edZ_return_value_inlined_97_1 * edZ_return_value_inlined_97_1) / (2.0 * edZ_return_value_inlined_97_1);\n"+
"sdCapsule_return_value_inlined_25_1 = sqrt(max(ternary_0_mainImage_1 * ternary_0_mainImage_1 - doorFrame_room_1 * doorFrame_room_1, 0.0));\n"+
"if(uv_getRayDir_1.x * sdCapsule_return_value_inlined_25_1 - uv_getRayDir_1.y * doorFrame_room_1 > edZ_return_value_inlined_97_1 * max(sdCapsule_return_value_inlined_25_1 - uv_getRayDir_1.y, 0.0))\n"+
"{\n"+
"s_rot_1 = length(uv_getRayDir_1 - vec2(doorFrame_room_1, sdCapsule_return_value_inlined_25_1));\n"+
"headLower_has_returned_1 = true;\n"+
"}\n"+
"else\n"+
"{\n"+
"s_rot_1 = max((length(uv_getRayDir_1) - ternary_0_mainImage_1), - (length(uv_getRayDir_1 - vec2(edZ_return_value_inlined_97_1, 0)) - sdBox_return_value_inlined_16_1));\n"+
"headLower_has_returned_1 = true;\n"+
"}\n"+
"spe_applyLighting_1 = s_rot_1;\n"+
"toe_return_value_inlined_30_1 = spe_applyLighting_1;\n"+
"legWalkAngle_has_returned_1 = true;\n"+
"edZ_return_value_inlined_99_1 = toe_return_value_inlined_30_1;\n"+
"op_headLower_1 = normalize(h_sdTriPrism_1.xyy * a_rot_1 + h_sdTriPrism_1.yyx * startScene_mainImage_1 + h_sdTriPrism_1.yxy * edZ_return_value_inlined_93_1 + h_sdTriPrism_1.xxx * edZ_return_value_inlined_99_1);\n"+
"applyLighting_has_returned_1 = true;\n"+
"a_sdCapsule_1 = op_headLower_1;\n"+
"p_sdTriPrism_1 = a_sdCapsule_1;\n"+
"pp_legs_1 = vec3(0.57703);\n"+
"doorWidth_room_1 = clamp(dot(p_sdTriPrism_1, pp_legs_1), 0.0, 1.0);\n"+
"if(doorWidth_room_1 > 0.001)\n"+
"{\n"+
"p_getSceneColor_1 = p_waist_1 + p_sdTriPrism_1 * 0.001;\n"+
"p_arms_1 = pp_legs_1;\n"+
"foot_return_value_1 = 0.001;\n"+
"x_sdCappedCone_1 = 1.0;\n"+
"fireShock_return_value_inlined_21_1 = 32.0;\n"+
"sdOctogon_has_returned_1 = false;\n"+
"ao_return_value_inlined_89_1 = 1.0;\n"+
"remap_return_value_inlined_104_1 = foot_return_value_1;\n"+
"for(               i_calcSoftshadow_2 = 0;\n"+
"i_calcSoftshadow_2 < 64; i_calcSoftshadow_2 ++)\n"+
"{\n"+
"q_sdBox_1 = p_getSceneColor_1 + p_arms_1 * remap_return_value_inlined_104_1;\n"+
"legWalkAngle_has_returned_1 = false;\n"+
"r_sdOctogon_1 = 0.5;\n"+
"c_sdChamferedCube_1 = 0.35 + 0.20 * cos(iTime * 1.1 + 4.0);\n"+
"sdCappedCylinder_return_value_inlined_40_1 = 0.50 + 0.15 * cos(iTime * 1.7);\n"+
"p_toe_1 = q_sdBox_1;\n"+
"ternary_0_mainImage_1 = r_sdOctogon_1;\n"+
"sdBox_return_value_inlined_16_1 = c_sdChamferedCube_1;\n"+
"edZ_return_value_inlined_97_1 = sdCappedCylinder_return_value_inlined_40_1;\n"+
"headLower_has_returned_1 = false;\n"+
"uv_getRayDir_1 = vec2(p_toe_1.x, length(p_toe_1.yz));\n"+
"doorFrame_room_1 = (ternary_0_mainImage_1 * ternary_0_mainImage_1 - sdBox_return_value_inlined_16_1 * sdBox_return_value_inlined_16_1 + edZ_return_value_inlined_97_1 * edZ_return_value_inlined_97_1) / (2.0 * edZ_return_value_inlined_97_1);\n"+
"sdCapsule_return_value_inlined_25_1 = sqrt(max(ternary_0_mainImage_1 * ternary_0_mainImage_1 - doorFrame_room_1 * doorFrame_room_1, 0.0));\n"+
"if(uv_getRayDir_1.x * sdCapsule_return_value_inlined_25_1 - uv_getRayDir_1.y * doorFrame_room_1 > edZ_return_value_inlined_97_1 * max(sdCapsule_return_value_inlined_25_1 - uv_getRayDir_1.y, 0.0))\n"+
"{\n"+
"s_rot_1 = length(uv_getRayDir_1 - vec2(doorFrame_room_1, sdCapsule_return_value_inlined_25_1));\n"+
"headLower_has_returned_1 = true;\n"+
"}\n"+
"else\n"+
"{\n"+
"s_rot_1 = max((length(uv_getRayDir_1) - ternary_0_mainImage_1), - (length(uv_getRayDir_1 - vec2(edZ_return_value_inlined_97_1, 0)) - sdBox_return_value_inlined_16_1));\n"+
"headLower_has_returned_1 = true;\n"+
"}\n"+
"spe_applyLighting_1 = s_rot_1;\n"+
"toe_return_value_inlined_30_1 = spe_applyLighting_1;\n"+
"legWalkAngle_has_returned_1 = true;\n"+
"out2_remap_1 = toe_return_value_inlined_30_1;\n"+
"edZ_return_value_inlined_55_1 = out2_remap_1;\n"+
"ao_return_value_inlined_89_1 = min(ao_return_value_inlined_89_1, fireShock_return_value_inlined_21_1 * edZ_return_value_inlined_55_1 / remap_return_value_inlined_104_1);\n"+
"remap_return_value_inlined_104_1 += clamp(edZ_return_value_inlined_55_1, 0.003, 0.10);\n"+
"if(ao_return_value_inlined_89_1 < 0.002 || remap_return_value_inlined_104_1 > x_sdCappedCone_1)\n"+
"{\n"+
"break;\n"+
"}\n"+
"}\n"+
"bounce_applyLighting_1 = clamp(ao_return_value_inlined_89_1, 0.0, 1.0);\n"+
"sdOctogon_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_9_1 = bounce_applyLighting_1;\n"+
"doorWidth_room_1 *= sdBox_return_value_inlined_9_1;\n"+
"}\n"+
"calcShadow_return_value_inlined_88_1 = 0.5 + 0.5 * dot(p_sdTriPrism_1, vec3(0.0, 1.0, 0.0));\n"+
"lookAt_getRayDir_1 = vec3(0.2, 0.3, 0.4) * calcShadow_return_value_inlined_88_1 + vec3(0.8, 0.7, 0.5) * doorWidth_room_1;\n"+
"}\n"+
"lookAt_getRayDir_1 = sqrt(lookAt_getRayDir_1);\n"+
"p_applyLighting_1 += lookAt_getRayDir_1;\n"+
"}\n"+
"}\n"+
"p_applyLighting_1 /= float(3 * 3);\n"+
"fragColor_2 = vec4(p_applyLighting_1, 1.0);\n"+
"fragColor_2.w = 1.0;\n"+
"live_tu_has_executed = true;\n"+
"}\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_59_1 = minResult_return_value_1;\n"+
"r_ed209_1 = minResult_return_value_inlined_59_1;\n"+
"f_legWalkAngle_1 = 2.;\n"+
"legWalkAngle_has_returned_1 = false;\n"+
"legWalkAngle_return_value_1 = sin(edWalk_1 * 3.141 * 6. * f_legWalkAngle_1) * .2;\n"+
"legWalkAngle_has_returned_1 = true;\n"+
"legWalkAngle_return_value_inlined_60_1 = legWalkAngle_return_value_1;\n"+
"a_rot_1 = .1 * (- edDown_1 + legWalkAngle_return_value_inlined_60_1 + smoothstep(0., 1., clamp((stretch_1 - .5) * 6., 0., 1.)) - 1.);\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_61_1 = rot_return_value_1;\n"+
"p_ed209_1.yz *= rot_return_value_inlined_61_1;\n"+
"a_rot_1 = edTwist_1 * .2;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_62_1 = rot_return_value_1;\n"+
"p_ed209_1.xz *= rot_return_value_inlined_62_1;\n"+
"p_headLower_1 = p_ed209_1;\n"+
"headLower_has_returned_1 = false;\n"+
"op_headLower_1 = p_headLower_1;\n"+
"p_headVisor_1 = p_headLower_1 * vec3(.95, - 1.4, .95);\n"+
"h_headVisor_1 = 1.;\n"+
"bump_headVisor_1 = 0.;\n"+
"headVisor_has_returned_1 = false;\n"+
"bump_headVisor_1 *= sin(p_headVisor_1.x * 150.) * sin(p_headVisor_1.y * 150.) * .002;\n"+
"p_sdBox_1 = p_headVisor_1;\n"+
"b_sdBox_1 = vec3(1, h_headVisor_1, 2);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_3_1 = sdBox_return_value_1;\n"+
"result_headVisor_1.d = sdBox_return_value_inlined_3_1;\n"+
"p_headSphere_1 = p_headVisor_1;\n"+
"headSphere_has_returned_1 = false;\n"+
"headSphere_return_value_1 = (length(p_headSphere_1 / vec3(1, .8, 1)) - 1.) * .8;\n"+
"headSphere_has_returned_1 = true;\n"+
"headSphere_return_value_inlined_4_1 = headSphere_return_value_1;\n"+
"result_headVisor_1.d = max(mix(result_headVisor_1.d, headSphere_return_value_inlined_4_1, .57), - p_headVisor_1.y) - bump_headVisor_1;\n"+
"result_headVisor_1.mat = vec3(.05);\n"+
"result_headVisor_1.specPower = 30.;\n"+
"headVisor_return_value_1 = result_headVisor_1;\n"+
"headVisor_has_returned_1 = true;\n"+
"headVisor_return_value_inlined_5_1 = headVisor_return_value_1;\n"+
"r_headLower_1 = headVisor_return_value_inlined_5_1;\n"+
"p_headVisor_1 = (p_headLower_1 + vec3(0, .01, 0)) * vec3(.95);\n"+
"h_headVisor_1 = 1.;\n"+
"bump_headVisor_1 = 0.;\n"+
"headVisor_has_returned_1 = false;\n"+
"bump_headVisor_1 *= sin(p_headVisor_1.x * 150.) * sin(p_headVisor_1.y * 150.) * .002;\n"+
"p_sdBox_1 = p_headVisor_1;\n"+
"b_sdBox_1 = vec3(1, h_headVisor_1, 2);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_3_1 = sdBox_return_value_1;\n"+
"result_headVisor_1.d = sdBox_return_value_inlined_3_1;\n"+
"p_headSphere_1 = p_headVisor_1;\n"+
"headSphere_has_returned_1 = false;\n"+
"headSphere_return_value_1 = (length(p_headSphere_1 / vec3(1, .8, 1)) - 1.) * .8;\n"+
"headSphere_has_returned_1 = true;\n"+
"headSphere_return_value_inlined_4_1 = headSphere_return_value_1;\n"+
"result_headVisor_1.d = max(mix(result_headVisor_1.d, headSphere_return_value_inlined_4_1, .57), - p_headVisor_1.y) - bump_headVisor_1;\n"+
"result_headVisor_1.mat = vec3(.05);\n"+
"result_headVisor_1.specPower = 30.;\n"+
"headVisor_return_value_1 = result_headVisor_1;\n"+
"headVisor_has_returned_1 = true;\n"+
"headVisor_return_value_inlined_6_1 = headVisor_return_value_1;\n"+
"r_headLower_1.d = min(r_headLower_1.d, max(max(headVisor_return_value_inlined_6_1.d, p_headLower_1.y - .35), p_headLower_1.y * .625 - p_headLower_1.z - .66));\n"+
"a_rot_1 = .075 * (gunsUp_1 - 1.) * sign(p_headLower_1.x);\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_7_1 = rot_return_value_1;\n"+
"p_headLower_1.xy *= rot_return_value_inlined_7_1;\n"+
"p_headLower_1.x = abs(p_headLower_1.x) - 1.33;\n"+
"p_headLower_1.y -= .1 - p_headLower_1.x * .1;\n"+
"p_sdBox_1 = p_headLower_1;\n"+
"b_sdBox_1 = vec3(.4, .06 * (1. - p_headLower_1.x), .3 - p_headLower_1.x * .2);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_8_1 = sdBox_return_value_1;\n"+
"r_headLower_1.d = min(r_headLower_1.d, sdBox_return_value_inlined_8_1);\n"+
"p_headLower_1 = op_headLower_1;\n"+
"p_headLower_1.y = abs(abs(p_headLower_1.y + .147) - .0556) - .0278;\n"+
"p_sdBox_1 = p_headLower_1 + vec3(0, 0, 1.5);\n"+
"b_sdBox_1 = vec3(mix(.25, .55, - op_headLower_1.y), .015, .1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_9_1 = sdBox_return_value_1;\n"+
"r_headLower_1.d = max(r_headLower_1.d, - sdBox_return_value_inlined_9_1);\n"+
"p_headLower_1 = op_headLower_1;\n"+
"p_headLower_1.y = abs(p_headLower_1.y + .16) - .06;\n"+
"p_headLower_1.z -= - 1.1;\n"+
"p_sdCappedCylinder_1 = p_headLower_1.xzy;\n"+
"h_sdCappedCylinder_1 = 1.;\n"+
"r_sdCappedCylinder_1 = .03;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_10_1 = sdCappedCylinder_return_value_1;\n"+
"p_sdCappedCylinder_1 = p_headLower_1.xzy;\n"+
"h_sdCappedCylinder_1 = .55;\n"+
"r_sdCappedCylinder_1 = 1.;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_11_1 = sdCappedCylinder_return_value_1;\n"+
"r_headLower_1.d = max(r_headLower_1.d, - max(max(sdCappedCylinder_return_value_inlined_10_1, - sdCappedCylinder_return_value_inlined_11_1), p_headLower_1.z + .2));\n"+
"mat_setBodyMaterial_1 = r_headLower_1;\n"+
"mat_setBodyMaterial_1.mat = vec3(.36, .45, .5);\n"+
"mat_setBodyMaterial_1.specPower = 30.;\n"+
"r_headLower_1 = mat_setBodyMaterial_1;\n"+
"headLower_return_value_1 = r_headLower_1;\n"+
"headLower_has_returned_1 = true;\n"+
"headLower_return_value_inlined_63_1 = headLower_return_value_1;\n"+
"a_minResult_1 = r_ed209_1;\n"+
"b_minResult_1 = headLower_return_value_inlined_63_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_64_1 = minResult_return_value_1;\n"+
"p_headVisor_1 = p_ed209_1;\n"+
"h_headVisor_1 = .8;\n"+
"bump_headVisor_1 = 1.;\n"+
"headVisor_has_returned_1 = false;\n"+
"bump_headVisor_1 *= sin(p_headVisor_1.x * 150.) * sin(p_headVisor_1.y * 150.) * .002;\n"+
"p_sdBox_1 = p_headVisor_1;\n"+
"b_sdBox_1 = vec3(1, h_headVisor_1, 2);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_3_1 = sdBox_return_value_1;\n"+
"result_headVisor_1.d = sdBox_return_value_inlined_3_1;\n"+
"p_headSphere_1 = p_headVisor_1;\n"+
"headSphere_has_returned_1 = false;\n"+
"headSphere_return_value_1 = (length(p_headSphere_1 / vec3(1, .8, 1)) - 1.) * .8;\n"+
"headSphere_has_returned_1 = true;\n"+
"headSphere_return_value_inlined_4_1 = headSphere_return_value_1;\n"+
"result_headVisor_1.d = max(mix(result_headVisor_1.d, headSphere_return_value_inlined_4_1, .57), - p_headVisor_1.y) - bump_headVisor_1;\n"+
"result_headVisor_1.mat = vec3(.05);\n"+
"result_headVisor_1.specPower = 30.;\n"+
"headVisor_return_value_1 = result_headVisor_1;\n"+
"headVisor_has_returned_1 = true;\n"+
"headVisor_return_value_inlined_65_1 = headVisor_return_value_1;\n"+
"a_minResult_1 = minResult_return_value_inlined_64_1;\n"+
"b_minResult_1 = headVisor_return_value_inlined_65_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_66_1 = minResult_return_value_1;\n"+
"p_arms_1 = p_ed209_1;\n"+
"arms_has_returned_1 = false;\n"+
"mat_setBodyMaterial_1 = r_arms_1;\n"+
"mat_setBodyMaterial_1.mat = vec3(.36, .45, .5);\n"+
"mat_setBodyMaterial_1.specPower = 30.;\n"+
"r_arms_1 = mat_setBodyMaterial_1;\n"+
"p_arms_1.x = abs(p_arms_1.x);\n"+
"p_arms_1.yz += vec2(.24, 0);\n"+
"a_rot_1 = .15 * (gunsUp_1 - 1.);\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_23_1 = rot_return_value_1;\n"+
"p_arms_1.xy *= rot_return_value_inlined_23_1;\n"+
"p_sdCapsule_1 = p_arms_1;\n"+
"a_sdCapsule_1 = vec3(0);\n"+
"b_sdCapsule_1 = vec3(1.5, 0, 0);\n"+
"r_sdCapsule_1 = .2;\n"+
"sdCapsule_has_returned_1 = false;\n"+
"pa_sdCapsule_1 = p_sdCapsule_1 - a_sdCapsule_1;\n"+
"ba_sdCapsule_1 = b_sdCapsule_1 - a_sdCapsule_1;\n"+
"sdCapsule_return_value_1 = length(pa_sdCapsule_1 - ba_sdCapsule_1 * clamp(dot(pa_sdCapsule_1, ba_sdCapsule_1) / dot(ba_sdCapsule_1, ba_sdCapsule_1), 0., 1.)) - r_sdCapsule_1;\n"+
"sdCapsule_has_returned_1 = true;\n"+
"sdCapsule_return_value_inlined_24_1 = sdCapsule_return_value_1;\n"+
"p_sdCapsule_1 = p_arms_1;\n"+
"a_sdCapsule_1 = vec3(1.5, 0, 0);\n"+
"b_sdCapsule_1 = wrist_arms_1;\n"+
"r_sdCapsule_1 = .2;\n"+
"sdCapsule_has_returned_1 = false;\n"+
"pa_sdCapsule_1 = p_sdCapsule_1 - a_sdCapsule_1;\n"+
"ba_sdCapsule_1 = b_sdCapsule_1 - a_sdCapsule_1;\n"+
"sdCapsule_return_value_1 = length(pa_sdCapsule_1 - ba_sdCapsule_1 * clamp(dot(pa_sdCapsule_1, ba_sdCapsule_1) / dot(ba_sdCapsule_1, ba_sdCapsule_1), 0., 1.)) - r_sdCapsule_1;\n"+
"sdCapsule_has_returned_1 = true;\n"+
"sdCapsule_return_value_inlined_25_1 = sdCapsule_return_value_1;\n"+
"r_arms_1.d = min(sdCapsule_return_value_inlined_24_1, sdCapsule_return_value_inlined_25_1);\n"+
"p_arms_1 -= wrist_arms_1;\n"+
"p_arms_1.z -= gunsForward_1 * .15;\n"+
"p_gunPod_1 = p_arms_1;\n"+
"gunPod_has_returned_1 = false;\n"+
"mat_setBodyMaterial_1 = r_gunPod_1;\n"+
"mat_setBodyMaterial_1.mat = vec3(.36, .45, .5);\n"+
"mat_setBodyMaterial_1.specPower = 30.;\n"+
"r_gunPod_1 = mat_setBodyMaterial_1;\n"+
"p_gunPod_1.yz += vec2(.1, .45);\n"+
"pp_gunPod_1 = p_gunPod_1;\n"+
"pp_gunPod_1.z = abs(pp_gunPod_1.z) - .5;\n"+
"p_sdCappedCone_1 = pp_gunPod_1;\n"+
"a_sdCappedCone_1 = vec3(0);\n"+
"b_sdCappedCone_1 = vec3(0, 0, - .1);\n"+
"ra_sdCappedCone_1 = .35 - .1;\n"+
"rb_sdCappedCone_1 = .35;\n"+
"sdCappedCone_has_returned_1 = false;\n"+
"rba_sdCappedCone_1 = rb_sdCappedCone_1 - ra_sdCappedCone_1;\n"+
"baba_sdCappedCone_1 = dot(b_sdCappedCone_1 - a_sdCappedCone_1, b_sdCappedCone_1 - a_sdCappedCone_1);\n"+
"papa_sdCappedCone_1 = dot(p_sdCappedCone_1 - a_sdCappedCone_1, p_sdCappedCone_1 - a_sdCappedCone_1);\n"+
"paba_sdCappedCone_1 = dot(p_sdCappedCone_1 - a_sdCappedCone_1, b_sdCappedCone_1 - a_sdCappedCone_1) / baba_sdCappedCone_1;\n"+
"x_sdCappedCone_1 = sqrt(papa_sdCappedCone_1 - paba_sdCappedCone_1 * paba_sdCappedCone_1 * baba_sdCappedCone_1);\n"+
"cax_sdCappedCone_1 = max(0., x_sdCappedCone_1 - ((paba_sdCappedCone_1 < .5) ? ra_sdCappedCone_1 : rb_sdCappedCone_1));\n"+
"cay_sdCappedCone_1 = abs(paba_sdCappedCone_1 - .5) - .5;\n"+
"f_sdCappedCone_1 = clamp((rba_sdCappedCone_1 * (x_sdCappedCone_1 - ra_sdCappedCone_1) + paba_sdCappedCone_1 * baba_sdCappedCone_1) / (rba_sdCappedCone_1 * rba_sdCappedCone_1 + baba_sdCappedCone_1), 0., 1.);\n"+
"cbx_sdCappedCone_1 = x_sdCappedCone_1 - ra_sdCappedCone_1 - f_sdCappedCone_1 * rba_sdCappedCone_1;\n"+
"cby_sdCappedCone_1 = paba_sdCappedCone_1 - f_sdCappedCone_1;\n"+
"sdCappedCone_return_value_1 = ((cbx_sdCappedCone_1 < 0. && cay_sdCappedCone_1 < 0.) ? - 1. : 1.) * sqrt(min(cax_sdCappedCone_1 * cax_sdCappedCone_1 + cay_sdCappedCone_1 * cay_sdCappedCone_1 * baba_sdCappedCone_1, cbx_sdCappedCone_1 * cbx_sdCappedCone_1 + cby_sdCappedCone_1 * cby_sdCappedCone_1 * baba_sdCappedCone_1));\n"+
"sdCappedCone_has_returned_1 = true;\n"+
"sdCappedCone_return_value_inlined_12_1 = sdCappedCone_return_value_1;\n"+
"r_gunPod_1.d = sdCappedCone_return_value_inlined_12_1;\n"+
"p_sdCappedCylinder_1 = p_gunPod_1;\n"+
"h_sdCappedCylinder_1 = .35;\n"+
"r_sdCappedCylinder_1 = .4;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_13_1 = sdCappedCylinder_return_value_1;\n"+
"r_gunPod_1.d = min(r_gunPod_1.d, sdCappedCylinder_return_value_inlined_13_1);\n"+
"pp_gunPod_1 = vec3(p_gunPod_1.x, .28 - p_gunPod_1.y, p_gunPod_1.z);\n"+
"p_sdTriPrism_1 = pp_gunPod_1;\n"+
"h_sdTriPrism_1 = vec2(.1, .5);\n"+
"sdTriPrism_has_returned_1 = false;\n"+
"q_sdTriPrism_1 = abs(p_sdTriPrism_1);\n"+
"sdTriPrism_return_value_1 = max(q_sdTriPrism_1.z - h_sdTriPrism_1.y, max(q_sdTriPrism_1.x * .866025 + p_sdTriPrism_1.y * .5, - p_sdTriPrism_1.y) - h_sdTriPrism_1.x * .5);\n"+
"sdTriPrism_has_returned_1 = true;\n"+
"sdTriPrism_return_value_inlined_14_1 = sdTriPrism_return_value_1;\n"+
"r_gunPod_1.d = min(r_gunPod_1.d, sdTriPrism_return_value_inlined_14_1);\n"+
"pp_gunPod_1 = p_gunPod_1;\n"+
"pp_gunPod_1.x = abs(p_gunPod_1.x);\n"+
"a_rot_1 = .78525;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_15_1 = rot_return_value_1;\n"+
"pp_gunPod_1.xy *= rot_return_value_inlined_15_1;\n"+
"bump_gunPod_1 = sign(sin(pp_gunPod_1.z * 33.3)) * .003;\n"+
"p_sdBox_1 = pp_gunPod_1;\n"+
"b_sdBox_1 = vec3(.1 - bump_gunPod_1, .38 - bump_gunPod_1, .34);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_16_1 = sdBox_return_value_1;\n"+
"d_gunPod_1 = sdBox_return_value_inlined_16_1 - .02;\n"+
"pp_gunPod_1 = p_gunPod_1 - vec3(0, 0, - .6);\n"+
"pp_gunPod_1.x = abs(pp_gunPod_1.x) - .1;\n"+
"p_sdCappedCylinder_1 = pp_gunPod_1;\n"+
"h_sdCappedCylinder_1 = .06;\n"+
"r_sdCappedCylinder_1 = .15;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_17_1 = sdCappedCylinder_return_value_1;\n"+
"p_sdCappedCylinder_1 = pp_gunPod_1 + vec3(0, .12, - .05);\n"+
"h_sdCappedCylinder_1 = .06;\n"+
"r_sdCappedCylinder_1 = .05;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_18_1 = sdCappedCylinder_return_value_1;\n"+
"p_sdBox_1 = p_gunPod_1 + vec3(0, 0, .54);\n"+
"b_sdBox_1 = vec3(.1, .06, .04);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_19_1 = sdBox_return_value_1;\n"+
"d_gunPod_1 = min(min(min(d_gunPod_1, sdCappedCylinder_return_value_inlined_17_1), sdCappedCylinder_return_value_inlined_18_1), sdBox_return_value_inlined_19_1);\n"+
"if(d_gunPod_1 < r_gunPod_1.d)\n"+
"{\n"+
"p_sdCappedCylinder_1 = pp_gunPod_1 + vec3(0, 0, .1);\n"+
"h_sdCappedCylinder_1 = .03;\n"+
"r_sdCappedCylinder_1 = .2;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_20_1 = sdCappedCylinder_return_value_1;\n"+
"d_gunPod_1 = max(d_gunPod_1, - sdCappedCylinder_return_value_inlined_20_1);\n"+
"r_gunPod_1.d = d_gunPod_1;\n"+
"r_gunPod_1.mat = vec3(.02);\n"+
"}\n"+
"fireShock_has_returned_1 = false;\n"+
"fireShock_return_value_1 = abs(sin(edShoot_1 * 78.5375));\n"+
"fireShock_has_returned_1 = true;\n"+
"fireShock_return_value_inlined_21_1 = fireShock_return_value_1;\n"+
"fs_gunPod_1 = fireShock_return_value_inlined_21_1;\n"+
"if(fs_gunPod_1 > .5)\n"+
"{\n"+
"p_sdCappedCylinder_1 = pp_gunPod_1;\n"+
"h_sdCappedCylinder_1 = .01 + pp_gunPod_1.z * .05;\n"+
"r_sdCappedCylinder_1 = fract(fs_gunPod_1 * 3322.423) * .5 + .9;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_22_1 = sdCappedCylinder_return_value_1;\n"+
"d_gunPod_1 = sdCappedCylinder_return_value_inlined_22_1;\n"+
"if(d_gunPod_1 < r_gunPod_1.d)\n"+
"{\n"+
"r_gunPod_1.d = d_gunPod_1;\n"+
"r_gunPod_1.mat = vec3(1);\n"+
"glow_1 += .1 / (.01 + d_gunPod_1 * d_gunPod_1 * 4e2);\n"+
"}\n"+
"}\n"+
"gunPod_return_value_1 = r_gunPod_1;\n"+
"gunPod_has_returned_1 = true;\n"+
"gunPod_return_value_inlined_26_1 = gunPod_return_value_1;\n"+
"a_minResult_1 = r_arms_1;\n"+
"b_minResult_1 = gunPod_return_value_inlined_26_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_27_1 = minResult_return_value_1;\n"+
"arms_return_value_1 = minResult_return_value_inlined_27_1;\n"+
"arms_has_returned_1 = true;\n"+
"arms_return_value_inlined_67_1 = arms_return_value_1;\n"+
"a_minResult_1 = minResult_return_value_inlined_66_1;\n"+
"b_minResult_1 = arms_return_value_inlined_67_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_68_1 = minResult_return_value_1;\n"+
"ed209_return_value_1 = minResult_return_value_inlined_68_1;\n"+
"ed209_has_returned_1 = true;\n"+
"ed209_return_value_inlined_79_1 = ed209_return_value_1;\n"+
"a_minResult_1 = room_return_value_inlined_78_1;\n"+
"b_minResult_1 = ed209_return_value_inlined_79_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_80_1 = minResult_return_value_1;\n"+
"r_map_1 = minResult_return_value_inlined_80_1;\n"+
"gnd_map_1 = length(p_map_1.y + 3.);\n"+
"if(gnd_map_1 < r_map_1.d)\n"+
"{\n"+
"r_map_1.d = gnd_map_1;\n"+
"r_map_1.mat = vec3(.1);\n"+
"}\n"+
"map_return_value_1 = r_map_1;\n"+
"map_has_returned_1 = true;\n"+
"map_return_value_inlined_90_1 = map_return_value_1;\n"+
"h_getSceneColor_1 = map_return_value_inlined_90_1;\n"+
"if(abs(h_getSceneColor_1.d) < .0015 * d_getSceneColor_1)\n"+
"{\n"+
"break;\n"+
"}\n"+
"if(d_getSceneColor_1 > 64.)\n"+
"{\n"+
"getSceneColor_return_value_1 = vec3(0);\n"+
"getSceneColor_has_returned_1 = true;\n"+
"}\n"+
"if(! getSceneColor_has_returned_1)\n"+
"{\n"+
"d_getSceneColor_1 += h_getSceneColor_1.d;\n"+
"}\n"+
"}\n"+
"if(! getSceneColor_has_returned_1)\n"+
"{\n"+
"g_getSceneColor_1 = glow_1;\n"+
"p_applyLighting_1 = p_getSceneColor_1;\n"+
"rd_applyLighting_1 = rd_getSceneColor_1;\n"+
"d_applyLighting_1 = d_getSceneColor_1;\n"+
"data_applyLighting_1 = h_getSceneColor_1;\n"+
"applyLighting_has_returned_1 = false;\n"+
"sunDir_applyLighting_1 = normalize(vec3(10, 10, - 10) - p_applyLighting_1);\n"+
"p_calcNormal_1 = p_applyLighting_1;\n"+
"t_calcNormal_1 = d_applyLighting_1;\n"+
"calcNormal_has_returned_1 = false;\n"+
"d_calcNormal_1 = .01 * t_calcNormal_1 * .33;\n"+
"e_calcNormal_1 = vec2(1, - 1) * .5773 * d_calcNormal_1;\n"+
"p_map_1 = p_calcNormal_1 + e_calcNormal_1.xyy;\n"+
"map_has_returned_1 = false;\n"+
"p_room_1 = p_map_1;\n"+
"room_has_returned_1 = false;\n"+
"r_room_1.mat = vec3(.4);\n"+
"r_room_1.specPower = 1e7;\n"+
"xy_room_1 = p_room_1.xy - vec2(0, 2);\n"+
"p_room_1.x = abs(p_room_1.x);\n"+
"p_room_1.yz += vec2(.5, - 3.4);\n"+
"p_sdBox_1 = p_room_1;\n"+
"b_sdBox_1 = frameInner_room_1 + vec3(0, 0, 1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_69_1 = sdBox_return_value_1;\n"+
"doorHole_room_1 = sdBox_return_value_inlined_69_1;\n"+
"backWall_room_1 = length(p_room_1.z - 8.);\n"+
"r_room_1.d = min(backWall_room_1, max(length(p_room_1.z), - doorHole_room_1 + .1));\n"+
"if(r_room_1.d == backWall_room_1)\n"+
"{\n"+
"p_sdOctogon_1 = xy_room_1;\n"+
"r_sdOctogon_1 = 2.6;\n"+
"sdOctogon_has_returned_1 = false;\n"+
"p_sdOctogon_1 = abs(p_sdOctogon_1);\n"+
"p_sdOctogon_1 -= 2. * min(dot(k_sdOctogon_1.xy, p_sdOctogon_1), 0.) * k_sdOctogon_1.xy;\n"+
"p_sdOctogon_1 -= 2. * min(dot(vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y), p_sdOctogon_1), 0.) * vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y);\n"+
"p_sdOctogon_1 -= vec2(clamp(p_sdOctogon_1.x, - k_sdOctogon_1.z * r_sdOctogon_1, k_sdOctogon_1.z * r_sdOctogon_1), r_sdOctogon_1);\n"+
"sdOctogon_return_value_1 = length(p_sdOctogon_1) * sign(p_sdOctogon_1.y);\n"+
"sdOctogon_has_returned_1 = true;\n"+
"sdOctogon_return_value_inlined_70_1 = sdOctogon_return_value_1;\n"+
"p_sdOctogon_1 = xy_room_1;\n"+
"r_sdOctogon_1 = 1.9;\n"+
"sdOctogon_has_returned_1 = false;\n"+
"p_sdOctogon_1 = abs(p_sdOctogon_1);\n"+
"p_sdOctogon_1 -= 2. * min(dot(k_sdOctogon_1.xy, p_sdOctogon_1), 0.) * k_sdOctogon_1.xy;\n"+
"p_sdOctogon_1 -= 2. * min(dot(vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y), p_sdOctogon_1), 0.) * vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y);\n"+
"p_sdOctogon_1 -= vec2(clamp(p_sdOctogon_1.x, - k_sdOctogon_1.z * r_sdOctogon_1, k_sdOctogon_1.z * r_sdOctogon_1), r_sdOctogon_1);\n"+
"sdOctogon_return_value_1 = length(p_sdOctogon_1) * sign(p_sdOctogon_1.y);\n"+
"sdOctogon_has_returned_1 = true;\n"+
"sdOctogon_return_value_inlined_71_1 = sdOctogon_return_value_1;\n"+
"ocp_room_1 = min(abs(sdOctogon_return_value_inlined_70_1), abs(sdOctogon_return_value_inlined_71_1));\n"+
"p_sdOctogon_1 = xy_room_1;\n"+
"r_sdOctogon_1 = 1.2;\n"+
"sdOctogon_has_returned_1 = false;\n"+
"p_sdOctogon_1 = abs(p_sdOctogon_1);\n"+
"p_sdOctogon_1 -= 2. * min(dot(k_sdOctogon_1.xy, p_sdOctogon_1), 0.) * k_sdOctogon_1.xy;\n"+
"p_sdOctogon_1 -= 2. * min(dot(vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y), p_sdOctogon_1), 0.) * vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y);\n"+
"p_sdOctogon_1 -= vec2(clamp(p_sdOctogon_1.x, - k_sdOctogon_1.z * r_sdOctogon_1, k_sdOctogon_1.z * r_sdOctogon_1), r_sdOctogon_1);\n"+
"sdOctogon_return_value_1 = length(p_sdOctogon_1) * sign(p_sdOctogon_1.y);\n"+
"sdOctogon_has_returned_1 = true;\n"+
"sdOctogon_return_value_inlined_72_1 = sdOctogon_return_value_1;\n"+
"ocp_room_1 = min(max(ocp_room_1, min(.7 - abs(xy_room_1.x + 1.2), - xy_room_1.y)), max(abs(sdOctogon_return_value_inlined_72_1), min(xy_room_1.x, .7 - abs(xy_room_1.y))));\n"+
"if(ocp_room_1 < .3)\n"+
"{\n"+
"r_room_1.mat = vec3(.39, .57, .71);\n"+
"}\n"+
"}\n"+
"p_sdBox_1 = p_room_1;\n"+
"b_sdBox_1 = frameInner_room_1 + vec3(.4, .4, .1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_73_1 = sdBox_return_value_1;\n"+
"doorFrame_room_1 = max(sdBox_return_value_inlined_73_1, - doorHole_room_1);\n"+
"doorWidth_room_1 = frameInner_room_1.x * .5;\n"+
"p_room_1.x -= frameInner_room_1.x;\n"+
"a_rot_1 = doorOpen_1 * 2.1;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_74_1 = rot_return_value_1;\n"+
"p_room_1.xz *= rot_return_value_inlined_74_1;\n"+
"p_room_1.x += doorWidth_room_1;\n"+
"p_sdBox_1 = p_room_1;\n"+
"b_sdBox_1 = vec3(doorWidth_room_1, frameInner_room_1.yz);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_75_1 = sdBox_return_value_1;\n"+
"door_room_1 = sdBox_return_value_inlined_75_1;\n"+
"p_room_1 = abs(p_room_1) - vec3(doorWidth_room_1 * .5, 1.1, .14);\n"+
"p_sdBox_1 = p_room_1;\n"+
"b_sdBox_1 = vec3(.45, .9, .1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_76_1 = sdBox_return_value_1;\n"+
"p_sdBox_1 = p_room_1;\n"+
"b_sdBox_1 = vec3(.35, .8, 1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_77_1 = sdBox_return_value_1;\n"+
"d_room_1 = min(doorFrame_room_1, max(door_room_1, - max(sdBox_return_value_inlined_76_1, - sdBox_return_value_inlined_77_1)));\n"+
"if(d_room_1 < r_room_1.d)\n"+
"{\n"+
"r_room_1.d = d_room_1;\n"+
"r_room_1.mat = vec3(.02, .02, .024);\n"+
"r_room_1.specPower = 10.;\n"+
"}\n"+
"room_return_value_1 = r_room_1;\n"+
"room_has_returned_1 = true;\n"+
"room_return_value_inlined_78_1 = room_return_value_1;\n"+
"p_ed209_1 = p_map_1;\n"+
"ed209_has_returned_1 = false;\n"+
"f_legWalkAngle_1 = 2.;\n"+
"legWalkAngle_has_returned_1 = false;\n"+
"legWalkAngle_return_value_1 = sin(edWalk_1 * 3.141 * 6. * f_legWalkAngle_1) * .2;\n"+
"legWalkAngle_has_returned_1 = true;\n"+
"legWalkAngle_return_value_inlined_54_1 = legWalkAngle_return_value_1;\n"+
"edZ_has_returned_1 = false;\n"+
"edZ_return_value_1 = mix(5., - 2., edWalk_1);\n"+
"edZ_has_returned_1 = true;\n"+
"edZ_return_value_inlined_55_1 = edZ_return_value_1;\n"+
"p_ed209_1.yz += vec2(legWalkAngle_return_value_inlined_54_1 * .2 + .1, - edZ_return_value_inlined_55_1);\n"+
"p_legs_1 = p_ed209_1;\n"+
"legs_has_returned_1 = false;\n"+
"mat_setBodyMaterial_1 = r_legs_1;\n"+
"mat_setBodyMaterial_1.mat = vec3(.36, .45, .5);\n"+
"mat_setBodyMaterial_1.specPower = 30.;\n"+
"r_legs_1 = mat_setBodyMaterial_1;\n"+
"f_legWalkAngle_1 = 1.;\n"+
"legWalkAngle_has_returned_1 = false;\n"+
"legWalkAngle_return_value_1 = sin(edWalk_1 * 3.141 * 6. * f_legWalkAngle_1) * .2;\n"+
"legWalkAngle_has_returned_1 = true;\n"+
"legWalkAngle_return_value_inlined_45_1 = legWalkAngle_return_value_1;\n"+
"legAngle_legs_1 = legWalkAngle_return_value_inlined_45_1;\n"+
"p_legs_1.z += .27;\n"+
"a_rot_1 = legAngle_legs_1 * sign(p_legs_1.x);\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_46_1 = rot_return_value_1;\n"+
"p_legs_1.yz *= rot_return_value_inlined_46_1;\n"+
"p_legs_1.z -= .27;\n"+
"p_legs_1.y += .65;\n"+
"a_rot_1 = - .2;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_47_1 = rot_return_value_1;\n"+
"p_legs_1.yz *= rot_return_value_inlined_47_1;\n"+
"a_rot_1 = legAngle_legs_1 * .3;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_48_1 = rot_return_value_1;\n"+
"p_legs_1.xy *= rot_return_value_inlined_48_1;\n"+
"pp_legs_1 = p_legs_1;\n"+
"pp_legs_1.x = abs(pp_legs_1.x);\n"+
"pp_legs_1.y += .48;\n"+
"a_rot_1 = - .58525;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_49_1 = rot_return_value_1;\n"+
"pp_legs_1.yz *= rot_return_value_inlined_49_1;\n"+
"pp_legs_1.x -= .98;\n"+
"cp_legs_1 = pp_legs_1;\n"+
"p_legs_1 = pp_legs_1;\n"+
"pp_legs_1.xz = abs(pp_legs_1.xz) - vec2(.12, .25);\n"+
"p_legs_1.y += .68;\n"+
"p_legs_1.xy = abs(p_legs_1.xy) - .12;\n"+
"p_sdBox_1 = p_legs_1;\n"+
"b_sdBox_1 = vec3(.07, .05, 1.2);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_50_1 = sdBox_return_value_1;\n"+
"silver_legs_1 = sdBox_return_value_inlined_50_1;\n"+
"cp_legs_1 -= vec3(0, - .7, 0);\n"+
"p_sdBox_1 = cp_legs_1 - vec3(0, 0, 1.15);\n"+
"b_sdBox_1 = vec3(.17, .17, .07);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_51_1 = sdBox_return_value_1;\n"+
"r_legs_1.d = sdBox_return_value_inlined_51_1 - .04;\n"+
"cp_legs_1.z ++;\n"+
"p_sdChamferedCube_1 = cp_legs_1.xzy;\n"+
"r_sdChamferedCube_1 = vec2(.28 - sign(abs(cp_legs_1.z) - .3) * .01, .5).xyx;\n"+
"c_sdChamferedCube_1 = .18;\n"+
"sdChamferedCube_has_returned_1 = false;\n"+
"p_sdBox_1 = p_sdChamferedCube_1;\n"+
"b_sdBox_1 = r_sdChamferedCube_1;\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_0_1 = sdBox_return_value_1;\n"+
"cube_sdChamferedCube_1 = sdBox_return_value_inlined_0_1;\n"+
"a_rot_1 = .78525;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_1_1 = rot_return_value_1;\n"+
"p_sdChamferedCube_1.xz *= rot_return_value_inlined_1_1;\n"+
"r_sdChamferedCube_1.xz *= - c_sdChamferedCube_1 / 1.41 + 1.41;\n"+
"p_sdBox_1 = p_sdChamferedCube_1;\n"+
"b_sdBox_1 = r_sdChamferedCube_1;\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_2_1 = sdBox_return_value_1;\n"+
"sdChamferedCube_return_value_1 = max(cube_sdChamferedCube_1, sdBox_return_value_inlined_2_1);\n"+
"sdChamferedCube_has_returned_1 = true;\n"+
"sdChamferedCube_return_value_inlined_52_1 = sdChamferedCube_return_value_1;\n"+
"r_legs_1.d = min(r_legs_1.d, sdChamferedCube_return_value_inlined_52_1);\n"+
"p_foot_1 = cp_legs_1;\n"+
"foot_has_returned_1 = false;\n"+
"p_foot_1.z += .8;\n"+
"a_rot_1 = .86;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_29_1 = rot_return_value_1;\n"+
"p_foot_1.yz *= rot_return_value_inlined_29_1;\n"+
"p_toe_1 = p_foot_1;\n"+
"toe_has_returned_1 = false;\n"+
"p_toe_1.yz += vec2(.1, .32);\n"+
"p_sdBox_1 = p_toe_1;\n"+
"b_sdBox_1 = vec3(.3 + .2 * (p_toe_1.z - .18) - p_toe_1.y * .228, .3 + .2 * cos((p_toe_1.z - .18) * 3.69), .35);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_28_1 = sdBox_return_value_1;\n"+
"toe_return_value_1 = max(sdBox_return_value_inlined_28_1, .1 - p_toe_1.y);\n"+
"toe_has_returned_1 = true;\n"+
"toe_return_value_inlined_30_1 = toe_return_value_1;\n"+
"d_foot_1 = toe_return_value_inlined_30_1;\n"+
"a_rot_1 = 1.57;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_31_1 = rot_return_value_1;\n"+
"p_foot_1.xz *= rot_return_value_inlined_31_1;\n"+
"p_foot_1.x -= .43;\n"+
"p_foot_1.z = .25 - abs(p_foot_1.z);\n"+
"p_toe_1 = p_foot_1;\n"+
"toe_has_returned_1 = false;\n"+
"p_toe_1.yz += vec2(.1, .32);\n"+
"p_sdBox_1 = p_toe_1;\n"+
"b_sdBox_1 = vec3(.3 + .2 * (p_toe_1.z - .18) - p_toe_1.y * .228, .3 + .2 * cos((p_toe_1.z - .18) * 3.69), .35);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_28_1 = sdBox_return_value_1;\n"+
"toe_return_value_1 = max(sdBox_return_value_inlined_28_1, .1 - p_toe_1.y);\n"+
"toe_has_returned_1 = true;\n"+
"toe_return_value_inlined_32_1 = toe_return_value_1;\n"+
"foot_return_value_1 = min(d_foot_1, toe_return_value_inlined_32_1);\n"+
"foot_has_returned_1 = true;\n"+
"foot_return_value_inlined_53_1 = foot_return_value_1;\n"+
"r_legs_1.d = min(r_legs_1.d, foot_return_value_inlined_53_1);\n"+
"if(silver_legs_1 < r_legs_1.d)\n"+
"{\n"+
"r_legs_1.d = silver_legs_1;\n"+
"r_legs_1.mat = vec3(.8);\n"+
"}\n"+
"legs_return_value_1 = r_legs_1;\n"+
"legs_has_returned_1 = true;\n"+
"legs_return_value_inlined_56_1 = legs_return_value_1;\n"+
"r_ed209_1 = legs_return_value_inlined_56_1;\n"+
"f_ed209_1 = min(stretch_1 * 2., 1.);\n"+
"slide_ed209_1 = f_ed209_1 < .5 ? smoothstep(0., .5, f_ed209_1) : (1. - smoothstep(.5, 1., f_ed209_1) * .2);\n"+
"p_ed209_1.yz -= slide_ed209_1 * .5;\n"+
"gunsUp_1 = smoothstep(0., 1., clamp((stretch_1 - .66) * 6., 0., 1.));\n"+
"fireShock_has_returned_1 = false;\n"+
"fireShock_return_value_1 = abs(sin(edShoot_1 * 78.5375));\n"+
"fireShock_has_returned_1 = true;\n"+
"fireShock_return_value_inlined_57_1 = fireShock_return_value_1;\n"+
"gunsForward_1 = smoothstep(0., 1., clamp((stretch_1 - .83) * 6., 0., 1.)) + fireShock_return_value_inlined_57_1 * .5;\n"+
"p_waist_1 = p_ed209_1;\n"+
"waist_has_returned_1 = false;\n"+
"mat_setBodyMaterial_1 = r_waist_1;\n"+
"mat_setBodyMaterial_1.mat = vec3(.36, .45, .5);\n"+
"mat_setBodyMaterial_1.specPower = 30.;\n"+
"r_waist_1 = mat_setBodyMaterial_1;\n"+
"p_waist_1.y += .65;\n"+
"a_rot_1 = - .2;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_33_1 = rot_return_value_1;\n"+
"p_waist_1.yz *= rot_return_value_inlined_33_1;\n"+
"f_legWalkAngle_1 = 1.;\n"+
"legWalkAngle_has_returned_1 = false;\n"+
"legWalkAngle_return_value_1 = sin(edWalk_1 * 3.141 * 6. * f_legWalkAngle_1) * .2;\n"+
"legWalkAngle_has_returned_1 = true;\n"+
"legWalkAngle_return_value_inlined_34_1 = legWalkAngle_return_value_1;\n"+
"legAngle_waist_1 = legWalkAngle_return_value_inlined_34_1;\n"+
"a_rot_1 = legAngle_waist_1 * .3;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_35_1 = rot_return_value_1;\n"+
"p_waist_1.xy *= rot_return_value_inlined_35_1;\n"+
"pp_waist_1 = p_waist_1;\n"+
"pp_waist_1.y += .3;\n"+
"p_sdCappedCylinder_1 = pp_waist_1.zyx;\n"+
"h_sdCappedCylinder_1 = .5;\n"+
"r_sdCappedCylinder_1 = .5;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_36_1 = sdCappedCylinder_return_value_1;\n"+
"r_waist_1.d = max(sdCappedCylinder_return_value_inlined_36_1, p_waist_1.y + .15);\n"+
"bump_waist_1 = .5 - abs(sin(p_waist_1.y * 40.)) * .03;\n"+
"p_sdBox_1 = p_waist_1;\n"+
"b_sdBox_1 = vec3(bump_waist_1, .15, bump_waist_1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_37_1 = sdBox_return_value_1;\n"+
"d_waist_1 = sdBox_return_value_inlined_37_1;\n"+
"bump_waist_1 = .3 - abs(sin(p_waist_1.x * 40.)) * .03;\n"+
"pp_waist_1.y += .18;\n"+
"p_sdCappedCylinder_1 = pp_waist_1.zyx;\n"+
"h_sdCappedCylinder_1 = bump_waist_1;\n"+
"r_sdCappedCylinder_1 = .75;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_38_1 = sdCappedCylinder_return_value_1;\n"+
"d_waist_1 = min(d_waist_1, sdCappedCylinder_return_value_inlined_38_1);\n"+
"pp_waist_1.x = abs(pp_waist_1.x);\n"+
"a_rot_1 = - .58525 + legAngle_waist_1 * sign(p_waist_1.x);\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_39_1 = rot_return_value_1;\n"+
"pp_waist_1.yz *= rot_return_value_inlined_39_1;\n"+
"pp_waist_1.x -= .98;\n"+
"p_sdCappedCylinder_1 = pp_waist_1.zyx;\n"+
"h_sdCappedCylinder_1 = .4;\n"+
"r_sdCappedCylinder_1 = .24;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_40_1 = sdCappedCylinder_return_value_1;\n"+
"r_waist_1.d = min(r_waist_1.d, max(sdCappedCylinder_return_value_inlined_40_1, - pp_waist_1.y));\n"+
"p_sdBox_1 = pp_waist_1;\n"+
"b_sdBox_1 = vec3(.24, .2, .14 + .2 * pp_waist_1.y);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_41_1 = sdBox_return_value_1;\n"+
"r_waist_1.d = min(r_waist_1.d, sdBox_return_value_inlined_41_1);\n"+
"p_waist_1 = pp_waist_1;\n"+
"pp_waist_1.xz = abs(pp_waist_1.xz) - vec2(.12, .25);\n"+
"p_sdCappedCylinder_1 = pp_waist_1.xzy;\n"+
"h_sdCappedCylinder_1 = .1;\n"+
"r_sdCappedCylinder_1 = .325;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_42_1 = sdCappedCylinder_return_value_1;\n"+
"p_sdCappedCylinder_1 = pp_waist_1.xzy;\n"+
"h_sdCappedCylinder_1 = .05;\n"+
"r_sdCappedCylinder_1 = .5;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_43_1 = sdCappedCylinder_return_value_1;\n"+
"r_waist_1.d = min(r_waist_1.d, max(min(sdCappedCylinder_return_value_inlined_42_1, sdCappedCylinder_return_value_inlined_43_1), pp_waist_1.y));\n"+
"p_waist_1.y += .68;\n"+
"p_sdBox_1 = p_waist_1;\n"+
"b_sdBox_1 = vec3(sign(abs(p_waist_1.y) - .04) * .005 + .26, .2, .34);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_44_1 = sdBox_return_value_1;\n"+
"r_waist_1.d = min(r_waist_1.d, sdBox_return_value_inlined_44_1);\n"+
"if(d_waist_1 < r_waist_1.d)\n"+
"{\n"+
"r_waist_1.d = d_waist_1;\n"+
"r_waist_1.mat = vec3(.02);\n"+
"}\n"+
"waist_return_value_1 = r_waist_1;\n"+
"waist_has_returned_1 = true;\n"+
"waist_return_value_inlined_58_1 = waist_return_value_1;\n"+
"a_minResult_1 = r_ed209_1;\n"+
"b_minResult_1 = waist_return_value_inlined_58_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_59_1 = minResult_return_value_1;\n"+
"r_ed209_1 = minResult_return_value_inlined_59_1;\n"+
"f_legWalkAngle_1 = 2.;\n"+
"legWalkAngle_has_returned_1 = false;\n"+
"legWalkAngle_return_value_1 = sin(edWalk_1 * 3.141 * 6. * f_legWalkAngle_1) * .2;\n"+
"legWalkAngle_has_returned_1 = true;\n"+
"legWalkAngle_return_value_inlined_60_1 = legWalkAngle_return_value_1;\n"+
"a_rot_1 = .1 * (- edDown_1 + legWalkAngle_return_value_inlined_60_1 + smoothstep(0., 1., clamp((stretch_1 - .5) * 6., 0., 1.)) - 1.);\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_61_1 = rot_return_value_1;\n"+
"p_ed209_1.yz *= rot_return_value_inlined_61_1;\n"+
"a_rot_1 = edTwist_1 * .2;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_62_1 = rot_return_value_1;\n"+
"p_ed209_1.xz *= rot_return_value_inlined_62_1;\n"+
"p_headLower_1 = p_ed209_1;\n"+
"headLower_has_returned_1 = false;\n"+
"op_headLower_1 = p_headLower_1;\n"+
"p_headVisor_1 = p_headLower_1 * vec3(.95, - 1.4, .95);\n"+
"h_headVisor_1 = 1.;\n"+
"bump_headVisor_1 = 0.;\n"+
"headVisor_has_returned_1 = false;\n"+
"bump_headVisor_1 *= sin(p_headVisor_1.x * 150.) * sin(p_headVisor_1.y * 150.) * .002;\n"+
"p_sdBox_1 = p_headVisor_1;\n"+
"b_sdBox_1 = vec3(1, h_headVisor_1, 2);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_3_1 = sdBox_return_value_1;\n"+
"result_headVisor_1.d = sdBox_return_value_inlined_3_1;\n"+
"p_headSphere_1 = p_headVisor_1;\n"+
"headSphere_has_returned_1 = false;\n"+
"headSphere_return_value_1 = (length(p_headSphere_1 / vec3(1, .8, 1)) - 1.) * .8;\n"+
"headSphere_has_returned_1 = true;\n"+
"headSphere_return_value_inlined_4_1 = headSphere_return_value_1;\n"+
"result_headVisor_1.d = max(mix(result_headVisor_1.d, headSphere_return_value_inlined_4_1, .57), - p_headVisor_1.y) - bump_headVisor_1;\n"+
"result_headVisor_1.mat = vec3(.05);\n"+
"result_headVisor_1.specPower = 30.;\n"+
"headVisor_return_value_1 = result_headVisor_1;\n"+
"headVisor_has_returned_1 = true;\n"+
"headVisor_return_value_inlined_5_1 = headVisor_return_value_1;\n"+
"r_headLower_1 = headVisor_return_value_inlined_5_1;\n"+
"p_headVisor_1 = (p_headLower_1 + vec3(0, .01, 0)) * vec3(.95);\n"+
"h_headVisor_1 = 1.;\n"+
"bump_headVisor_1 = 0.;\n"+
"headVisor_has_returned_1 = false;\n"+
"bump_headVisor_1 *= sin(p_headVisor_1.x * 150.) * sin(p_headVisor_1.y * 150.) * .002;\n"+
"p_sdBox_1 = p_headVisor_1;\n"+
"b_sdBox_1 = vec3(1, h_headVisor_1, 2);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_3_1 = sdBox_return_value_1;\n"+
"result_headVisor_1.d = sdBox_return_value_inlined_3_1;\n"+
"p_headSphere_1 = p_headVisor_1;\n"+
"headSphere_has_returned_1 = false;\n"+
"headSphere_return_value_1 = (length(p_headSphere_1 / vec3(1, .8, 1)) - 1.) * .8;\n"+
"headSphere_has_returned_1 = true;\n"+
"headSphere_return_value_inlined_4_1 = headSphere_return_value_1;\n"+
"result_headVisor_1.d = max(mix(result_headVisor_1.d, headSphere_return_value_inlined_4_1, .57), - p_headVisor_1.y) - bump_headVisor_1;\n"+
"result_headVisor_1.mat = vec3(.05);\n"+
"result_headVisor_1.specPower = 30.;\n"+
"headVisor_return_value_1 = result_headVisor_1;\n"+
"headVisor_has_returned_1 = true;\n"+
"headVisor_return_value_inlined_6_1 = headVisor_return_value_1;\n"+
"r_headLower_1.d = min(r_headLower_1.d, max(max(headVisor_return_value_inlined_6_1.d, p_headLower_1.y - .35), p_headLower_1.y * .625 - p_headLower_1.z - .66));\n"+
"a_rot_1 = .075 * (gunsUp_1 - 1.) * sign(p_headLower_1.x);\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_7_1 = rot_return_value_1;\n"+
"p_headLower_1.xy *= rot_return_value_inlined_7_1;\n"+
"p_headLower_1.x = abs(p_headLower_1.x) - 1.33;\n"+
"p_headLower_1.y -= .1 - p_headLower_1.x * .1;\n"+
"p_sdBox_1 = p_headLower_1;\n"+
"b_sdBox_1 = vec3(.4, .06 * (1. - p_headLower_1.x), .3 - p_headLower_1.x * .2);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_8_1 = sdBox_return_value_1;\n"+
"r_headLower_1.d = min(r_headLower_1.d, sdBox_return_value_inlined_8_1);\n"+
"p_headLower_1 = op_headLower_1;\n"+
"p_headLower_1.y = abs(abs(p_headLower_1.y + .147) - .0556) - .0278;\n"+
"p_sdBox_1 = p_headLower_1 + vec3(0, 0, 1.5);\n"+
"b_sdBox_1 = vec3(mix(.25, .55, - op_headLower_1.y), .015, .1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_9_1 = sdBox_return_value_1;\n"+
"r_headLower_1.d = max(r_headLower_1.d, - sdBox_return_value_inlined_9_1);\n"+
"p_headLower_1 = op_headLower_1;\n"+
"p_headLower_1.y = abs(p_headLower_1.y + .16) - .06;\n"+
"p_headLower_1.z -= - 1.1;\n"+
"p_sdCappedCylinder_1 = p_headLower_1.xzy;\n"+
"h_sdCappedCylinder_1 = 1.;\n"+
"r_sdCappedCylinder_1 = .03;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_10_1 = sdCappedCylinder_return_value_1;\n"+
"p_sdCappedCylinder_1 = p_headLower_1.xzy;\n"+
"h_sdCappedCylinder_1 = .55;\n"+
"r_sdCappedCylinder_1 = 1.;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_11_1 = sdCappedCylinder_return_value_1;\n"+
"r_headLower_1.d = max(r_headLower_1.d, - max(max(sdCappedCylinder_return_value_inlined_10_1, - sdCappedCylinder_return_value_inlined_11_1), p_headLower_1.z + .2));\n"+
"mat_setBodyMaterial_1 = r_headLower_1;\n"+
"mat_setBodyMaterial_1.mat = vec3(.36, .45, .5);\n"+
"mat_setBodyMaterial_1.specPower = 30.;\n"+
"r_headLower_1 = mat_setBodyMaterial_1;\n"+
"headLower_return_value_1 = r_headLower_1;\n"+
"headLower_has_returned_1 = true;\n"+
"headLower_return_value_inlined_63_1 = headLower_return_value_1;\n"+
"a_minResult_1 = r_ed209_1;\n"+
"b_minResult_1 = headLower_return_value_inlined_63_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_64_1 = minResult_return_value_1;\n"+
"p_headVisor_1 = p_ed209_1;\n"+
"h_headVisor_1 = .8;\n"+
"bump_headVisor_1 = 1.;\n"+
"headVisor_has_returned_1 = false;\n"+
"bump_headVisor_1 *= sin(p_headVisor_1.x * 150.) * sin(p_headVisor_1.y * 150.) * .002;\n"+
"p_sdBox_1 = p_headVisor_1;\n"+
"b_sdBox_1 = vec3(1, h_headVisor_1, 2);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_3_1 = sdBox_return_value_1;\n"+
"result_headVisor_1.d = sdBox_return_value_inlined_3_1;\n"+
"p_headSphere_1 = p_headVisor_1;\n"+
"headSphere_has_returned_1 = false;\n"+
"headSphere_return_value_1 = (length(p_headSphere_1 / vec3(1, .8, 1)) - 1.) * .8;\n"+
"headSphere_has_returned_1 = true;\n"+
"headSphere_return_value_inlined_4_1 = headSphere_return_value_1;\n"+
"result_headVisor_1.d = max(mix(result_headVisor_1.d, headSphere_return_value_inlined_4_1, .57), - p_headVisor_1.y) - bump_headVisor_1;\n"+
"result_headVisor_1.mat = vec3(.05);\n"+
"result_headVisor_1.specPower = 30.;\n"+
"headVisor_return_value_1 = result_headVisor_1;\n"+
"headVisor_has_returned_1 = true;\n"+
"headVisor_return_value_inlined_65_1 = headVisor_return_value_1;\n"+
"a_minResult_1 = minResult_return_value_inlined_64_1;\n"+
"b_minResult_1 = headVisor_return_value_inlined_65_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_66_1 = minResult_return_value_1;\n"+
"p_arms_1 = p_ed209_1;\n"+
"arms_has_returned_1 = false;\n"+
"mat_setBodyMaterial_1 = r_arms_1;\n"+
"mat_setBodyMaterial_1.mat = vec3(.36, .45, .5);\n"+
"mat_setBodyMaterial_1.specPower = 30.;\n"+
"r_arms_1 = mat_setBodyMaterial_1;\n"+
"p_arms_1.x = abs(p_arms_1.x);\n"+
"p_arms_1.yz += vec2(.24, 0);\n"+
"a_rot_1 = .15 * (gunsUp_1 - 1.);\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_23_1 = rot_return_value_1;\n"+
"p_arms_1.xy *= rot_return_value_inlined_23_1;\n"+
"p_sdCapsule_1 = p_arms_1;\n"+
"a_sdCapsule_1 = vec3(0);\n"+
"b_sdCapsule_1 = vec3(1.5, 0, 0);\n"+
"r_sdCapsule_1 = .2;\n"+
"sdCapsule_has_returned_1 = false;\n"+
"pa_sdCapsule_1 = p_sdCapsule_1 - a_sdCapsule_1;\n"+
"ba_sdCapsule_1 = b_sdCapsule_1 - a_sdCapsule_1;\n"+
"sdCapsule_return_value_1 = length(pa_sdCapsule_1 - ba_sdCapsule_1 * clamp(dot(pa_sdCapsule_1, ba_sdCapsule_1) / dot(ba_sdCapsule_1, ba_sdCapsule_1), 0., 1.)) - r_sdCapsule_1;\n"+
"sdCapsule_has_returned_1 = true;\n"+
"sdCapsule_return_value_inlined_24_1 = sdCapsule_return_value_1;\n"+
"p_sdCapsule_1 = p_arms_1;\n"+
"a_sdCapsule_1 = vec3(1.5, 0, 0);\n"+
"b_sdCapsule_1 = wrist_arms_1;\n"+
"r_sdCapsule_1 = .2;\n"+
"sdCapsule_has_returned_1 = false;\n"+
"pa_sdCapsule_1 = p_sdCapsule_1 - a_sdCapsule_1;\n"+
"ba_sdCapsule_1 = b_sdCapsule_1 - a_sdCapsule_1;\n"+
"sdCapsule_return_value_1 = length(pa_sdCapsule_1 - ba_sdCapsule_1 * clamp(dot(pa_sdCapsule_1, ba_sdCapsule_1) / dot(ba_sdCapsule_1, ba_sdCapsule_1), 0., 1.)) - r_sdCapsule_1;\n"+
"sdCapsule_has_returned_1 = true;\n"+
"sdCapsule_return_value_inlined_25_1 = sdCapsule_return_value_1;\n"+
"r_arms_1.d = min(sdCapsule_return_value_inlined_24_1, sdCapsule_return_value_inlined_25_1);\n"+
"p_arms_1 -= wrist_arms_1;\n"+
"p_arms_1.z -= gunsForward_1 * .15;\n"+
"p_gunPod_1 = p_arms_1;\n"+
"gunPod_has_returned_1 = false;\n"+
"mat_setBodyMaterial_1 = r_gunPod_1;\n"+
"mat_setBodyMaterial_1.mat = vec3(.36, .45, .5);\n"+
"mat_setBodyMaterial_1.specPower = 30.;\n"+
"r_gunPod_1 = mat_setBodyMaterial_1;\n"+
"p_gunPod_1.yz += vec2(.1, .45);\n"+
"pp_gunPod_1 = p_gunPod_1;\n"+
"pp_gunPod_1.z = abs(pp_gunPod_1.z) - .5;\n"+
"p_sdCappedCone_1 = pp_gunPod_1;\n"+
"a_sdCappedCone_1 = vec3(0);\n"+
"b_sdCappedCone_1 = vec3(0, 0, - .1);\n"+
"ra_sdCappedCone_1 = .35 - .1;\n"+
"rb_sdCappedCone_1 = .35;\n"+
"sdCappedCone_has_returned_1 = false;\n"+
"rba_sdCappedCone_1 = rb_sdCappedCone_1 - ra_sdCappedCone_1;\n"+
"baba_sdCappedCone_1 = dot(b_sdCappedCone_1 - a_sdCappedCone_1, b_sdCappedCone_1 - a_sdCappedCone_1);\n"+
"papa_sdCappedCone_1 = dot(p_sdCappedCone_1 - a_sdCappedCone_1, p_sdCappedCone_1 - a_sdCappedCone_1);\n"+
"paba_sdCappedCone_1 = dot(p_sdCappedCone_1 - a_sdCappedCone_1, b_sdCappedCone_1 - a_sdCappedCone_1) / baba_sdCappedCone_1;\n"+
"x_sdCappedCone_1 = sqrt(papa_sdCappedCone_1 - paba_sdCappedCone_1 * paba_sdCappedCone_1 * baba_sdCappedCone_1);\n"+
"cax_sdCappedCone_1 = max(0., x_sdCappedCone_1 - ((paba_sdCappedCone_1 < .5) ? ra_sdCappedCone_1 : rb_sdCappedCone_1));\n"+
"cay_sdCappedCone_1 = abs(paba_sdCappedCone_1 - .5) - .5;\n"+
"f_sdCappedCone_1 = clamp((rba_sdCappedCone_1 * (x_sdCappedCone_1 - ra_sdCappedCone_1) + paba_sdCappedCone_1 * baba_sdCappedCone_1) / (rba_sdCappedCone_1 * rba_sdCappedCone_1 + baba_sdCappedCone_1), 0., 1.);\n"+
"cbx_sdCappedCone_1 = x_sdCappedCone_1 - ra_sdCappedCone_1 - f_sdCappedCone_1 * rba_sdCappedCone_1;\n"+
"cby_sdCappedCone_1 = paba_sdCappedCone_1 - f_sdCappedCone_1;\n"+
"sdCappedCone_return_value_1 = ((cbx_sdCappedCone_1 < 0. && cay_sdCappedCone_1 < 0.) ? - 1. : 1.) * sqrt(min(cax_sdCappedCone_1 * cax_sdCappedCone_1 + cay_sdCappedCone_1 * cay_sdCappedCone_1 * baba_sdCappedCone_1, cbx_sdCappedCone_1 * cbx_sdCappedCone_1 + cby_sdCappedCone_1 * cby_sdCappedCone_1 * baba_sdCappedCone_1));\n"+
"sdCappedCone_has_returned_1 = true;\n"+
"sdCappedCone_return_value_inlined_12_1 = sdCappedCone_return_value_1;\n"+
"r_gunPod_1.d = sdCappedCone_return_value_inlined_12_1;\n"+
"p_sdCappedCylinder_1 = p_gunPod_1;\n"+
"h_sdCappedCylinder_1 = .35;\n"+
"r_sdCappedCylinder_1 = .4;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_13_1 = sdCappedCylinder_return_value_1;\n"+
"r_gunPod_1.d = min(r_gunPod_1.d, sdCappedCylinder_return_value_inlined_13_1);\n"+
"pp_gunPod_1 = vec3(p_gunPod_1.x, .28 - p_gunPod_1.y, p_gunPod_1.z);\n"+
"p_sdTriPrism_1 = pp_gunPod_1;\n"+
"h_sdTriPrism_1 = vec2(.1, .5);\n"+
"sdTriPrism_has_returned_1 = false;\n"+
"q_sdTriPrism_1 = abs(p_sdTriPrism_1);\n"+
"sdTriPrism_return_value_1 = max(q_sdTriPrism_1.z - h_sdTriPrism_1.y, max(q_sdTriPrism_1.x * .866025 + p_sdTriPrism_1.y * .5, - p_sdTriPrism_1.y) - h_sdTriPrism_1.x * .5);\n"+
"sdTriPrism_has_returned_1 = true;\n"+
"sdTriPrism_return_value_inlined_14_1 = sdTriPrism_return_value_1;\n"+
"r_gunPod_1.d = min(r_gunPod_1.d, sdTriPrism_return_value_inlined_14_1);\n"+
"pp_gunPod_1 = p_gunPod_1;\n"+
"pp_gunPod_1.x = abs(p_gunPod_1.x);\n"+
"a_rot_1 = .78525;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_15_1 = rot_return_value_1;\n"+
"pp_gunPod_1.xy *= rot_return_value_inlined_15_1;\n"+
"bump_gunPod_1 = sign(sin(pp_gunPod_1.z * 33.3)) * .003;\n"+
"p_sdBox_1 = pp_gunPod_1;\n"+
"b_sdBox_1 = vec3(.1 - bump_gunPod_1, .38 - bump_gunPod_1, .34);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_16_1 = sdBox_return_value_1;\n"+
"d_gunPod_1 = sdBox_return_value_inlined_16_1 - .02;\n"+
"pp_gunPod_1 = p_gunPod_1 - vec3(0, 0, - .6);\n"+
"pp_gunPod_1.x = abs(pp_gunPod_1.x) - .1;\n"+
"p_sdCappedCylinder_1 = pp_gunPod_1;\n"+
"h_sdCappedCylinder_1 = .06;\n"+
"r_sdCappedCylinder_1 = .15;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_17_1 = sdCappedCylinder_return_value_1;\n"+
"p_sdCappedCylinder_1 = pp_gunPod_1 + vec3(0, .12, - .05);\n"+
"h_sdCappedCylinder_1 = .06;\n"+
"r_sdCappedCylinder_1 = .05;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_18_1 = sdCappedCylinder_return_value_1;\n"+
"p_sdBox_1 = p_gunPod_1 + vec3(0, 0, .54);\n"+
"b_sdBox_1 = vec3(.1, .06, .04);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_19_1 = sdBox_return_value_1;\n"+
"d_gunPod_1 = min(min(min(d_gunPod_1, sdCappedCylinder_return_value_inlined_17_1), sdCappedCylinder_return_value_inlined_18_1), sdBox_return_value_inlined_19_1);\n"+
"if(d_gunPod_1 < r_gunPod_1.d)\n"+
"{\n"+
"p_sdCappedCylinder_1 = pp_gunPod_1 + vec3(0, 0, .1);\n"+
"h_sdCappedCylinder_1 = .03;\n"+
"r_sdCappedCylinder_1 = .2;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_20_1 = sdCappedCylinder_return_value_1;\n"+
"d_gunPod_1 = max(d_gunPod_1, - sdCappedCylinder_return_value_inlined_20_1);\n"+
"r_gunPod_1.d = d_gunPod_1;\n"+
"r_gunPod_1.mat = vec3(.02);\n"+
"}\n"+
"fireShock_has_returned_1 = false;\n"+
"fireShock_return_value_1 = abs(sin(edShoot_1 * 78.5375));\n"+
"fireShock_has_returned_1 = true;\n"+
"fireShock_return_value_inlined_21_1 = fireShock_return_value_1;\n"+
"fs_gunPod_1 = fireShock_return_value_inlined_21_1;\n"+
"if(fs_gunPod_1 > .5)\n"+
"{\n"+
"p_sdCappedCylinder_1 = pp_gunPod_1;\n"+
"h_sdCappedCylinder_1 = .01 + pp_gunPod_1.z * .05;\n"+
"r_sdCappedCylinder_1 = fract(fs_gunPod_1 * 3322.423) * .5 + .9;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_22_1 = sdCappedCylinder_return_value_1;\n"+
"d_gunPod_1 = sdCappedCylinder_return_value_inlined_22_1;\n"+
"if(d_gunPod_1 < r_gunPod_1.d)\n"+
"{\n"+
"r_gunPod_1.d = d_gunPod_1;\n"+
"r_gunPod_1.mat = vec3(1);\n"+
"glow_1 += .1 / (.01 + d_gunPod_1 * d_gunPod_1 * 4e2);\n"+
"}\n"+
"}\n"+
"gunPod_return_value_1 = r_gunPod_1;\n"+
"gunPod_has_returned_1 = true;\n"+
"gunPod_return_value_inlined_26_1 = gunPod_return_value_1;\n"+
"a_minResult_1 = r_arms_1;\n"+
"b_minResult_1 = gunPod_return_value_inlined_26_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_27_1 = minResult_return_value_1;\n"+
"arms_return_value_1 = minResult_return_value_inlined_27_1;\n"+
"arms_has_returned_1 = true;\n"+
"arms_return_value_inlined_67_1 = arms_return_value_1;\n"+
"a_minResult_1 = minResult_return_value_inlined_66_1;\n"+
"b_minResult_1 = arms_return_value_inlined_67_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_68_1 = minResult_return_value_1;\n"+
"ed209_return_value_1 = minResult_return_value_inlined_68_1;\n"+
"ed209_has_returned_1 = true;\n"+
"ed209_return_value_inlined_79_1 = ed209_return_value_1;\n"+
"a_minResult_1 = room_return_value_inlined_78_1;\n"+
"b_minResult_1 = ed209_return_value_inlined_79_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_80_1 = minResult_return_value_1;\n"+
"r_map_1 = minResult_return_value_inlined_80_1;\n"+
"gnd_map_1 = length(p_map_1.y + 3.);\n"+
"if(gnd_map_1 < r_map_1.d)\n"+
"{\n"+
"r_map_1.d = gnd_map_1;\n"+
"r_map_1.mat = vec3(.1);\n"+
"}\n"+
"map_return_value_1 = r_map_1;\n"+
"map_has_returned_1 = true;\n"+
"map_return_value_inlined_82_1 = map_return_value_1;\n"+
"p_map_1 = p_calcNormal_1 + e_calcNormal_1.yyx;\n"+
"map_has_returned_1 = false;\n"+
"p_room_1 = p_map_1;\n"+
"room_has_returned_1 = false;\n"+
"r_room_1.mat = vec3(.4);\n"+
"r_room_1.specPower = 1e7;\n"+
"xy_room_1 = p_room_1.xy - vec2(0, 2);\n"+
"p_room_1.x = abs(p_room_1.x);\n"+
"p_room_1.yz += vec2(.5, - 3.4);\n"+
"p_sdBox_1 = p_room_1;\n"+
"b_sdBox_1 = frameInner_room_1 + vec3(0, 0, 1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_69_1 = sdBox_return_value_1;\n"+
"doorHole_room_1 = sdBox_return_value_inlined_69_1;\n"+
"backWall_room_1 = length(p_room_1.z - 8.);\n"+
"r_room_1.d = min(backWall_room_1, max(length(p_room_1.z), - doorHole_room_1 + .1));\n"+
"if(r_room_1.d == backWall_room_1)\n"+
"{\n"+
"p_sdOctogon_1 = xy_room_1;\n"+
"r_sdOctogon_1 = 2.6;\n"+
"sdOctogon_has_returned_1 = false;\n"+
"p_sdOctogon_1 = abs(p_sdOctogon_1);\n"+
"p_sdOctogon_1 -= 2. * min(dot(k_sdOctogon_1.xy, p_sdOctogon_1), 0.) * k_sdOctogon_1.xy;\n"+
"p_sdOctogon_1 -= 2. * min(dot(vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y), p_sdOctogon_1), 0.) * vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y);\n"+
"p_sdOctogon_1 -= vec2(clamp(p_sdOctogon_1.x, - k_sdOctogon_1.z * r_sdOctogon_1, k_sdOctogon_1.z * r_sdOctogon_1), r_sdOctogon_1);\n"+
"sdOctogon_return_value_1 = length(p_sdOctogon_1) * sign(p_sdOctogon_1.y);\n"+
"sdOctogon_has_returned_1 = true;\n"+
"sdOctogon_return_value_inlined_70_1 = sdOctogon_return_value_1;\n"+
"p_sdOctogon_1 = xy_room_1;\n"+
"r_sdOctogon_1 = 1.9;\n"+
"sdOctogon_has_returned_1 = false;\n"+
"p_sdOctogon_1 = abs(p_sdOctogon_1);\n"+
"p_sdOctogon_1 -= 2. * min(dot(k_sdOctogon_1.xy, p_sdOctogon_1), 0.) * k_sdOctogon_1.xy;\n"+
"p_sdOctogon_1 -= 2. * min(dot(vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y), p_sdOctogon_1), 0.) * vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y);\n"+
"p_sdOctogon_1 -= vec2(clamp(p_sdOctogon_1.x, - k_sdOctogon_1.z * r_sdOctogon_1, k_sdOctogon_1.z * r_sdOctogon_1), r_sdOctogon_1);\n"+
"sdOctogon_return_value_1 = length(p_sdOctogon_1) * sign(p_sdOctogon_1.y);\n"+
"sdOctogon_has_returned_1 = true;\n"+
"sdOctogon_return_value_inlined_71_1 = sdOctogon_return_value_1;\n"+
"ocp_room_1 = min(abs(sdOctogon_return_value_inlined_70_1), abs(sdOctogon_return_value_inlined_71_1));\n"+
"p_sdOctogon_1 = xy_room_1;\n"+
"r_sdOctogon_1 = 1.2;\n"+
"sdOctogon_has_returned_1 = false;\n"+
"p_sdOctogon_1 = abs(p_sdOctogon_1);\n"+
"p_sdOctogon_1 -= 2. * min(dot(k_sdOctogon_1.xy, p_sdOctogon_1), 0.) * k_sdOctogon_1.xy;\n"+
"p_sdOctogon_1 -= 2. * min(dot(vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y), p_sdOctogon_1), 0.) * vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y);\n"+
"p_sdOctogon_1 -= vec2(clamp(p_sdOctogon_1.x, - k_sdOctogon_1.z * r_sdOctogon_1, k_sdOctogon_1.z * r_sdOctogon_1), r_sdOctogon_1);\n"+
"sdOctogon_return_value_1 = length(p_sdOctogon_1) * sign(p_sdOctogon_1.y);\n"+
"sdOctogon_has_returned_1 = true;\n"+
"sdOctogon_return_value_inlined_72_1 = sdOctogon_return_value_1;\n"+
"ocp_room_1 = min(max(ocp_room_1, min(.7 - abs(xy_room_1.x + 1.2), - xy_room_1.y)), max(abs(sdOctogon_return_value_inlined_72_1), min(xy_room_1.x, .7 - abs(xy_room_1.y))));\n"+
"if(ocp_room_1 < .3)\n"+
"{\n"+
"r_room_1.mat = vec3(.39, .57, .71);\n"+
"}\n"+
"}\n"+
"p_sdBox_1 = p_room_1;\n"+
"b_sdBox_1 = frameInner_room_1 + vec3(.4, .4, .1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_73_1 = sdBox_return_value_1;\n"+
"doorFrame_room_1 = max(sdBox_return_value_inlined_73_1, - doorHole_room_1);\n"+
"doorWidth_room_1 = frameInner_room_1.x * .5;\n"+
"p_room_1.x -= frameInner_room_1.x;\n"+
"a_rot_1 = doorOpen_1 * 2.1;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_74_1 = rot_return_value_1;\n"+
"p_room_1.xz *= rot_return_value_inlined_74_1;\n"+
"p_room_1.x += doorWidth_room_1;\n"+
"p_sdBox_1 = p_room_1;\n"+
"b_sdBox_1 = vec3(doorWidth_room_1, frameInner_room_1.yz);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_75_1 = sdBox_return_value_1;\n"+
"door_room_1 = sdBox_return_value_inlined_75_1;\n"+
"p_room_1 = abs(p_room_1) - vec3(doorWidth_room_1 * .5, 1.1, .14);\n"+
"p_sdBox_1 = p_room_1;\n"+
"b_sdBox_1 = vec3(.45, .9, .1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_76_1 = sdBox_return_value_1;\n"+
"p_sdBox_1 = p_room_1;\n"+
"b_sdBox_1 = vec3(.35, .8, 1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_77_1 = sdBox_return_value_1;\n"+
"d_room_1 = min(doorFrame_room_1, max(door_room_1, - max(sdBox_return_value_inlined_76_1, - sdBox_return_value_inlined_77_1)));\n"+
"if(d_room_1 < r_room_1.d)\n"+
"{\n"+
"r_room_1.d = d_room_1;\n"+
"r_room_1.mat = vec3(.02, .02, .024);\n"+
"r_room_1.specPower = 10.;\n"+
"}\n"+
"room_return_value_1 = r_room_1;\n"+
"room_has_returned_1 = true;\n"+
"room_return_value_inlined_78_1 = room_return_value_1;\n"+
"p_ed209_1 = p_map_1;\n"+
"ed209_has_returned_1 = false;\n"+
"f_legWalkAngle_1 = 2.;\n"+
"legWalkAngle_has_returned_1 = false;\n"+
"legWalkAngle_return_value_1 = sin(edWalk_1 * 3.141 * 6. * f_legWalkAngle_1) * .2;\n"+
"legWalkAngle_has_returned_1 = true;\n"+
"legWalkAngle_return_value_inlined_54_1 = legWalkAngle_return_value_1;\n"+
"edZ_has_returned_1 = false;\n"+
"edZ_return_value_1 = mix(5., - 2., edWalk_1);\n"+
"edZ_has_returned_1 = true;\n"+
"edZ_return_value_inlined_55_1 = edZ_return_value_1;\n"+
"p_ed209_1.yz += vec2(legWalkAngle_return_value_inlined_54_1 * .2 + .1, - edZ_return_value_inlined_55_1);\n"+
"p_legs_1 = p_ed209_1;\n"+
"legs_has_returned_1 = false;\n"+
"mat_setBodyMaterial_1 = r_legs_1;\n"+
"mat_setBodyMaterial_1.mat = vec3(.36, .45, .5);\n"+
"mat_setBodyMaterial_1.specPower = 30.;\n"+
"r_legs_1 = mat_setBodyMaterial_1;\n"+
"f_legWalkAngle_1 = 1.;\n"+
"legWalkAngle_has_returned_1 = false;\n"+
"legWalkAngle_return_value_1 = sin(edWalk_1 * 3.141 * 6. * f_legWalkAngle_1) * .2;\n"+
"legWalkAngle_has_returned_1 = true;\n"+
"legWalkAngle_return_value_inlined_45_1 = legWalkAngle_return_value_1;\n"+
"legAngle_legs_1 = legWalkAngle_return_value_inlined_45_1;\n"+
"p_legs_1.z += .27;\n"+
"a_rot_1 = legAngle_legs_1 * sign(p_legs_1.x);\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_46_1 = rot_return_value_1;\n"+
"p_legs_1.yz *= rot_return_value_inlined_46_1;\n"+
"p_legs_1.z -= .27;\n"+
"p_legs_1.y += .65;\n"+
"a_rot_1 = - .2;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_47_1 = rot_return_value_1;\n"+
"p_legs_1.yz *= rot_return_value_inlined_47_1;\n"+
"a_rot_1 = legAngle_legs_1 * .3;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_48_1 = rot_return_value_1;\n"+
"p_legs_1.xy *= rot_return_value_inlined_48_1;\n"+
"pp_legs_1 = p_legs_1;\n"+
"pp_legs_1.x = abs(pp_legs_1.x);\n"+
"pp_legs_1.y += .48;\n"+
"a_rot_1 = - .58525;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_49_1 = rot_return_value_1;\n"+
"pp_legs_1.yz *= rot_return_value_inlined_49_1;\n"+
"pp_legs_1.x -= .98;\n"+
"cp_legs_1 = pp_legs_1;\n"+
"p_legs_1 = pp_legs_1;\n"+
"pp_legs_1.xz = abs(pp_legs_1.xz) - vec2(.12, .25);\n"+
"p_legs_1.y += .68;\n"+
"p_legs_1.xy = abs(p_legs_1.xy) - .12;\n"+
"p_sdBox_1 = p_legs_1;\n"+
"b_sdBox_1 = vec3(.07, .05, 1.2);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_50_1 = sdBox_return_value_1;\n"+
"silver_legs_1 = sdBox_return_value_inlined_50_1;\n"+
"cp_legs_1 -= vec3(0, - .7, 0);\n"+
"p_sdBox_1 = cp_legs_1 - vec3(0, 0, 1.15);\n"+
"b_sdBox_1 = vec3(.17, .17, .07);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_51_1 = sdBox_return_value_1;\n"+
"r_legs_1.d = sdBox_return_value_inlined_51_1 - .04;\n"+
"cp_legs_1.z ++;\n"+
"p_sdChamferedCube_1 = cp_legs_1.xzy;\n"+
"r_sdChamferedCube_1 = vec2(.28 - sign(abs(cp_legs_1.z) - .3) * .01, .5).xyx;\n"+
"c_sdChamferedCube_1 = .18;\n"+
"sdChamferedCube_has_returned_1 = false;\n"+
"p_sdBox_1 = p_sdChamferedCube_1;\n"+
"b_sdBox_1 = r_sdChamferedCube_1;\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_0_1 = sdBox_return_value_1;\n"+
"cube_sdChamferedCube_1 = sdBox_return_value_inlined_0_1;\n"+
"a_rot_1 = .78525;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_1_1 = rot_return_value_1;\n"+
"p_sdChamferedCube_1.xz *= rot_return_value_inlined_1_1;\n"+
"r_sdChamferedCube_1.xz *= - c_sdChamferedCube_1 / 1.41 + 1.41;\n"+
"p_sdBox_1 = p_sdChamferedCube_1;\n"+
"b_sdBox_1 = r_sdChamferedCube_1;\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_2_1 = sdBox_return_value_1;\n"+
"sdChamferedCube_return_value_1 = max(cube_sdChamferedCube_1, sdBox_return_value_inlined_2_1);\n"+
"sdChamferedCube_has_returned_1 = true;\n"+
"sdChamferedCube_return_value_inlined_52_1 = sdChamferedCube_return_value_1;\n"+
"r_legs_1.d = min(r_legs_1.d, sdChamferedCube_return_value_inlined_52_1);\n"+
"p_foot_1 = cp_legs_1;\n"+
"foot_has_returned_1 = false;\n"+
"p_foot_1.z += .8;\n"+
"a_rot_1 = .86;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_29_1 = rot_return_value_1;\n"+
"p_foot_1.yz *= rot_return_value_inlined_29_1;\n"+
"p_toe_1 = p_foot_1;\n"+
"toe_has_returned_1 = false;\n"+
"p_toe_1.yz += vec2(.1, .32);\n"+
"p_sdBox_1 = p_toe_1;\n"+
"b_sdBox_1 = vec3(.3 + .2 * (p_toe_1.z - .18) - p_toe_1.y * .228, .3 + .2 * cos((p_toe_1.z - .18) * 3.69), .35);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_28_1 = sdBox_return_value_1;\n"+
"toe_return_value_1 = max(sdBox_return_value_inlined_28_1, .1 - p_toe_1.y);\n"+
"toe_has_returned_1 = true;\n"+
"toe_return_value_inlined_30_1 = toe_return_value_1;\n"+
"d_foot_1 = toe_return_value_inlined_30_1;\n"+
"a_rot_1 = 1.57;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_31_1 = rot_return_value_1;\n"+
"p_foot_1.xz *= rot_return_value_inlined_31_1;\n"+
"p_foot_1.x -= .43;\n"+
"p_foot_1.z = .25 - abs(p_foot_1.z);\n"+
"p_toe_1 = p_foot_1;\n"+
"toe_has_returned_1 = false;\n"+
"p_toe_1.yz += vec2(.1, .32);\n"+
"p_sdBox_1 = p_toe_1;\n"+
"b_sdBox_1 = vec3(.3 + .2 * (p_toe_1.z - .18) - p_toe_1.y * .228, .3 + .2 * cos((p_toe_1.z - .18) * 3.69), .35);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_28_1 = sdBox_return_value_1;\n"+
"toe_return_value_1 = max(sdBox_return_value_inlined_28_1, .1 - p_toe_1.y);\n"+
"toe_has_returned_1 = true;\n"+
"toe_return_value_inlined_32_1 = toe_return_value_1;\n"+
"foot_return_value_1 = min(d_foot_1, toe_return_value_inlined_32_1);\n"+
"foot_has_returned_1 = true;\n"+
"foot_return_value_inlined_53_1 = foot_return_value_1;\n"+
"r_legs_1.d = min(r_legs_1.d, foot_return_value_inlined_53_1);\n"+
"if(silver_legs_1 < r_legs_1.d)\n"+
"{\n"+
"r_legs_1.d = silver_legs_1;\n"+
"r_legs_1.mat = vec3(.8);\n"+
"}\n"+
"legs_return_value_1 = r_legs_1;\n"+
"legs_has_returned_1 = true;\n"+
"legs_return_value_inlined_56_1 = legs_return_value_1;\n"+
"r_ed209_1 = legs_return_value_inlined_56_1;\n"+
"f_ed209_1 = min(stretch_1 * 2., 1.);\n"+
"slide_ed209_1 = f_ed209_1 < .5 ? smoothstep(0., .5, f_ed209_1) : (1. - smoothstep(.5, 1., f_ed209_1) * .2);\n"+
"p_ed209_1.yz -= slide_ed209_1 * .5;\n"+
"gunsUp_1 = smoothstep(0., 1., clamp((stretch_1 - .66) * 6., 0., 1.));\n"+
"fireShock_has_returned_1 = false;\n"+
"fireShock_return_value_1 = abs(sin(edShoot_1 * 78.5375));\n"+
"fireShock_has_returned_1 = true;\n"+
"fireShock_return_value_inlined_57_1 = fireShock_return_value_1;\n"+
"gunsForward_1 = smoothstep(0., 1., clamp((stretch_1 - .83) * 6., 0., 1.)) + fireShock_return_value_inlined_57_1 * .5;\n"+
"p_waist_1 = p_ed209_1;\n"+
"waist_has_returned_1 = false;\n"+
"mat_setBodyMaterial_1 = r_waist_1;\n"+
"mat_setBodyMaterial_1.mat = vec3(.36, .45, .5);\n"+
"mat_setBodyMaterial_1.specPower = 30.;\n"+
"r_waist_1 = mat_setBodyMaterial_1;\n"+
"p_waist_1.y += .65;\n"+
"a_rot_1 = - .2;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_33_1 = rot_return_value_1;\n"+
"p_waist_1.yz *= rot_return_value_inlined_33_1;\n"+
"f_legWalkAngle_1 = 1.;\n"+
"legWalkAngle_has_returned_1 = false;\n"+
"legWalkAngle_return_value_1 = sin(edWalk_1 * 3.141 * 6. * f_legWalkAngle_1) * .2;\n"+
"legWalkAngle_has_returned_1 = true;\n"+
"legWalkAngle_return_value_inlined_34_1 = legWalkAngle_return_value_1;\n"+
"legAngle_waist_1 = legWalkAngle_return_value_inlined_34_1;\n"+
"a_rot_1 = legAngle_waist_1 * .3;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_35_1 = rot_return_value_1;\n"+
"p_waist_1.xy *= rot_return_value_inlined_35_1;\n"+
"pp_waist_1 = p_waist_1;\n"+
"pp_waist_1.y += .3;\n"+
"p_sdCappedCylinder_1 = pp_waist_1.zyx;\n"+
"h_sdCappedCylinder_1 = .5;\n"+
"r_sdCappedCylinder_1 = .5;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_36_1 = sdCappedCylinder_return_value_1;\n"+
"r_waist_1.d = max(sdCappedCylinder_return_value_inlined_36_1, p_waist_1.y + .15);\n"+
"bump_waist_1 = .5 - abs(sin(p_waist_1.y * 40.)) * .03;\n"+
"p_sdBox_1 = p_waist_1;\n"+
"b_sdBox_1 = vec3(bump_waist_1, .15, bump_waist_1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_37_1 = sdBox_return_value_1;\n"+
"d_waist_1 = sdBox_return_value_inlined_37_1;\n"+
"bump_waist_1 = .3 - abs(sin(p_waist_1.x * 40.)) * .03;\n"+
"pp_waist_1.y += .18;\n"+
"p_sdCappedCylinder_1 = pp_waist_1.zyx;\n"+
"h_sdCappedCylinder_1 = bump_waist_1;\n"+
"r_sdCappedCylinder_1 = .75;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_38_1 = sdCappedCylinder_return_value_1;\n"+
"d_waist_1 = min(d_waist_1, sdCappedCylinder_return_value_inlined_38_1);\n"+
"pp_waist_1.x = abs(pp_waist_1.x);\n"+
"a_rot_1 = - .58525 + legAngle_waist_1 * sign(p_waist_1.x);\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_39_1 = rot_return_value_1;\n"+
"pp_waist_1.yz *= rot_return_value_inlined_39_1;\n"+
"pp_waist_1.x -= .98;\n"+
"p_sdCappedCylinder_1 = pp_waist_1.zyx;\n"+
"h_sdCappedCylinder_1 = .4;\n"+
"r_sdCappedCylinder_1 = .24;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_40_1 = sdCappedCylinder_return_value_1;\n"+
"r_waist_1.d = min(r_waist_1.d, max(sdCappedCylinder_return_value_inlined_40_1, - pp_waist_1.y));\n"+
"p_sdBox_1 = pp_waist_1;\n"+
"b_sdBox_1 = vec3(.24, .2, .14 + .2 * pp_waist_1.y);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_41_1 = sdBox_return_value_1;\n"+
"r_waist_1.d = min(r_waist_1.d, sdBox_return_value_inlined_41_1);\n"+
"p_waist_1 = pp_waist_1;\n"+
"pp_waist_1.xz = abs(pp_waist_1.xz) - vec2(.12, .25);\n"+
"p_sdCappedCylinder_1 = pp_waist_1.xzy;\n"+
"h_sdCappedCylinder_1 = .1;\n"+
"r_sdCappedCylinder_1 = .325;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_42_1 = sdCappedCylinder_return_value_1;\n"+
"p_sdCappedCylinder_1 = pp_waist_1.xzy;\n"+
"h_sdCappedCylinder_1 = .05;\n"+
"r_sdCappedCylinder_1 = .5;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_43_1 = sdCappedCylinder_return_value_1;\n"+
"r_waist_1.d = min(r_waist_1.d, max(min(sdCappedCylinder_return_value_inlined_42_1, sdCappedCylinder_return_value_inlined_43_1), pp_waist_1.y));\n"+
"p_waist_1.y += .68;\n"+
"p_sdBox_1 = p_waist_1;\n"+
"b_sdBox_1 = vec3(sign(abs(p_waist_1.y) - .04) * .005 + .26, .2, .34);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_44_1 = sdBox_return_value_1;\n"+
"r_waist_1.d = min(r_waist_1.d, sdBox_return_value_inlined_44_1);\n"+
"if(d_waist_1 < r_waist_1.d)\n"+
"{\n"+
"r_waist_1.d = d_waist_1;\n"+
"r_waist_1.mat = vec3(.02);\n"+
"}\n"+
"waist_return_value_1 = r_waist_1;\n"+
"waist_has_returned_1 = true;\n"+
"waist_return_value_inlined_58_1 = waist_return_value_1;\n"+
"a_minResult_1 = r_ed209_1;\n"+
"b_minResult_1 = waist_return_value_inlined_58_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_59_1 = minResult_return_value_1;\n"+
"r_ed209_1 = minResult_return_value_inlined_59_1;\n"+
"f_legWalkAngle_1 = 2.;\n"+
"legWalkAngle_has_returned_1 = false;\n"+
"legWalkAngle_return_value_1 = sin(edWalk_1 * 3.141 * 6. * f_legWalkAngle_1) * .2;\n"+
"legWalkAngle_has_returned_1 = true;\n"+
"legWalkAngle_return_value_inlined_60_1 = legWalkAngle_return_value_1;\n"+
"a_rot_1 = .1 * (- edDown_1 + legWalkAngle_return_value_inlined_60_1 + smoothstep(0., 1., clamp((stretch_1 - .5) * 6., 0., 1.)) - 1.);\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_61_1 = rot_return_value_1;\n"+
"p_ed209_1.yz *= rot_return_value_inlined_61_1;\n"+
"a_rot_1 = edTwist_1 * .2;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_62_1 = rot_return_value_1;\n"+
"p_ed209_1.xz *= rot_return_value_inlined_62_1;\n"+
"p_headLower_1 = p_ed209_1;\n"+
"headLower_has_returned_1 = false;\n"+
"op_headLower_1 = p_headLower_1;\n"+
"p_headVisor_1 = p_headLower_1 * vec3(.95, - 1.4, .95);\n"+
"h_headVisor_1 = 1.;\n"+
"bump_headVisor_1 = 0.;\n"+
"headVisor_has_returned_1 = false;\n"+
"bump_headVisor_1 *= sin(p_headVisor_1.x * 150.) * sin(p_headVisor_1.y * 150.) * .002;\n"+
"p_sdBox_1 = p_headVisor_1;\n"+
"b_sdBox_1 = vec3(1, h_headVisor_1, 2);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_3_1 = sdBox_return_value_1;\n"+
"result_headVisor_1.d = sdBox_return_value_inlined_3_1;\n"+
"p_headSphere_1 = p_headVisor_1;\n"+
"headSphere_has_returned_1 = false;\n"+
"headSphere_return_value_1 = (length(p_headSphere_1 / vec3(1, .8, 1)) - 1.) * .8;\n"+
"headSphere_has_returned_1 = true;\n"+
"headSphere_return_value_inlined_4_1 = headSphere_return_value_1;\n"+
"result_headVisor_1.d = max(mix(result_headVisor_1.d, headSphere_return_value_inlined_4_1, .57), - p_headVisor_1.y) - bump_headVisor_1;\n"+
"result_headVisor_1.mat = vec3(.05);\n"+
"result_headVisor_1.specPower = 30.;\n"+
"headVisor_return_value_1 = result_headVisor_1;\n"+
"headVisor_has_returned_1 = true;\n"+
"headVisor_return_value_inlined_5_1 = headVisor_return_value_1;\n"+
"r_headLower_1 = headVisor_return_value_inlined_5_1;\n"+
"p_headVisor_1 = (p_headLower_1 + vec3(0, .01, 0)) * vec3(.95);\n"+
"h_headVisor_1 = 1.;\n"+
"bump_headVisor_1 = 0.;\n"+
"headVisor_has_returned_1 = false;\n"+
"bump_headVisor_1 *= sin(p_headVisor_1.x * 150.) * sin(p_headVisor_1.y * 150.) * .002;\n"+
"p_sdBox_1 = p_headVisor_1;\n"+
"b_sdBox_1 = vec3(1, h_headVisor_1, 2);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_3_1 = sdBox_return_value_1;\n"+
"result_headVisor_1.d = sdBox_return_value_inlined_3_1;\n"+
"p_headSphere_1 = p_headVisor_1;\n"+
"headSphere_has_returned_1 = false;\n"+
"headSphere_return_value_1 = (length(p_headSphere_1 / vec3(1, .8, 1)) - 1.) * .8;\n"+
"headSphere_has_returned_1 = true;\n"+
"headSphere_return_value_inlined_4_1 = headSphere_return_value_1;\n"+
"result_headVisor_1.d = max(mix(result_headVisor_1.d, headSphere_return_value_inlined_4_1, .57), - p_headVisor_1.y) - bump_headVisor_1;\n"+
"result_headVisor_1.mat = vec3(.05);\n"+
"result_headVisor_1.specPower = 30.;\n"+
"headVisor_return_value_1 = result_headVisor_1;\n"+
"headVisor_has_returned_1 = true;\n"+
"headVisor_return_value_inlined_6_1 = headVisor_return_value_1;\n"+
"r_headLower_1.d = min(r_headLower_1.d, max(max(headVisor_return_value_inlined_6_1.d, p_headLower_1.y - .35), p_headLower_1.y * .625 - p_headLower_1.z - .66));\n"+
"a_rot_1 = .075 * (gunsUp_1 - 1.) * sign(p_headLower_1.x);\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_7_1 = rot_return_value_1;\n"+
"p_headLower_1.xy *= rot_return_value_inlined_7_1;\n"+
"p_headLower_1.x = abs(p_headLower_1.x) - 1.33;\n"+
"p_headLower_1.y -= .1 - p_headLower_1.x * .1;\n"+
"p_sdBox_1 = p_headLower_1;\n"+
"b_sdBox_1 = vec3(.4, .06 * (1. - p_headLower_1.x), .3 - p_headLower_1.x * .2);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_8_1 = sdBox_return_value_1;\n"+
"r_headLower_1.d = min(r_headLower_1.d, sdBox_return_value_inlined_8_1);\n"+
"p_headLower_1 = op_headLower_1;\n"+
"p_headLower_1.y = abs(abs(p_headLower_1.y + .147) - .0556) - .0278;\n"+
"p_sdBox_1 = p_headLower_1 + vec3(0, 0, 1.5);\n"+
"b_sdBox_1 = vec3(mix(.25, .55, - op_headLower_1.y), .015, .1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_9_1 = sdBox_return_value_1;\n"+
"r_headLower_1.d = max(r_headLower_1.d, - sdBox_return_value_inlined_9_1);\n"+
"p_headLower_1 = op_headLower_1;\n"+
"p_headLower_1.y = abs(p_headLower_1.y + .16) - .06;\n"+
"p_headLower_1.z -= - 1.1;\n"+
"p_sdCappedCylinder_1 = p_headLower_1.xzy;\n"+
"h_sdCappedCylinder_1 = 1.;\n"+
"r_sdCappedCylinder_1 = .03;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_10_1 = sdCappedCylinder_return_value_1;\n"+
"p_sdCappedCylinder_1 = p_headLower_1.xzy;\n"+
"h_sdCappedCylinder_1 = .55;\n"+
"r_sdCappedCylinder_1 = 1.;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_11_1 = sdCappedCylinder_return_value_1;\n"+
"r_headLower_1.d = max(r_headLower_1.d, - max(max(sdCappedCylinder_return_value_inlined_10_1, - sdCappedCylinder_return_value_inlined_11_1), p_headLower_1.z + .2));\n"+
"mat_setBodyMaterial_1 = r_headLower_1;\n"+
"mat_setBodyMaterial_1.mat = vec3(.36, .45, .5);\n"+
"mat_setBodyMaterial_1.specPower = 30.;\n"+
"r_headLower_1 = mat_setBodyMaterial_1;\n"+
"headLower_return_value_1 = r_headLower_1;\n"+
"headLower_has_returned_1 = true;\n"+
"headLower_return_value_inlined_63_1 = headLower_return_value_1;\n"+
"a_minResult_1 = r_ed209_1;\n"+
"b_minResult_1 = headLower_return_value_inlined_63_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_64_1 = minResult_return_value_1;\n"+
"p_headVisor_1 = p_ed209_1;\n"+
"h_headVisor_1 = .8;\n"+
"bump_headVisor_1 = 1.;\n"+
"headVisor_has_returned_1 = false;\n"+
"bump_headVisor_1 *= sin(p_headVisor_1.x * 150.) * sin(p_headVisor_1.y * 150.) * .002;\n"+
"p_sdBox_1 = p_headVisor_1;\n"+
"b_sdBox_1 = vec3(1, h_headVisor_1, 2);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_3_1 = sdBox_return_value_1;\n"+
"result_headVisor_1.d = sdBox_return_value_inlined_3_1;\n"+
"p_headSphere_1 = p_headVisor_1;\n"+
"headSphere_has_returned_1 = false;\n"+
"headSphere_return_value_1 = (length(p_headSphere_1 / vec3(1, .8, 1)) - 1.) * .8;\n"+
"headSphere_has_returned_1 = true;\n"+
"headSphere_return_value_inlined_4_1 = headSphere_return_value_1;\n"+
"result_headVisor_1.d = max(mix(result_headVisor_1.d, headSphere_return_value_inlined_4_1, .57), - p_headVisor_1.y) - bump_headVisor_1;\n"+
"result_headVisor_1.mat = vec3(.05);\n"+
"result_headVisor_1.specPower = 30.;\n"+
"headVisor_return_value_1 = result_headVisor_1;\n"+
"headVisor_has_returned_1 = true;\n"+
"headVisor_return_value_inlined_65_1 = headVisor_return_value_1;\n"+
"a_minResult_1 = minResult_return_value_inlined_64_1;\n"+
"b_minResult_1 = headVisor_return_value_inlined_65_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_66_1 = minResult_return_value_1;\n"+
"p_arms_1 = p_ed209_1;\n"+
"arms_has_returned_1 = false;\n"+
"mat_setBodyMaterial_1 = r_arms_1;\n"+
"mat_setBodyMaterial_1.mat = vec3(.36, .45, .5);\n"+
"mat_setBodyMaterial_1.specPower = 30.;\n"+
"r_arms_1 = mat_setBodyMaterial_1;\n"+
"p_arms_1.x = abs(p_arms_1.x);\n"+
"p_arms_1.yz += vec2(.24, 0);\n"+
"a_rot_1 = .15 * (gunsUp_1 - 1.);\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_23_1 = rot_return_value_1;\n"+
"p_arms_1.xy *= rot_return_value_inlined_23_1;\n"+
"p_sdCapsule_1 = p_arms_1;\n"+
"a_sdCapsule_1 = vec3(0);\n"+
"b_sdCapsule_1 = vec3(1.5, 0, 0);\n"+
"r_sdCapsule_1 = .2;\n"+
"sdCapsule_has_returned_1 = false;\n"+
"pa_sdCapsule_1 = p_sdCapsule_1 - a_sdCapsule_1;\n"+
"ba_sdCapsule_1 = b_sdCapsule_1 - a_sdCapsule_1;\n"+
"sdCapsule_return_value_1 = length(pa_sdCapsule_1 - ba_sdCapsule_1 * clamp(dot(pa_sdCapsule_1, ba_sdCapsule_1) / dot(ba_sdCapsule_1, ba_sdCapsule_1), 0., 1.)) - r_sdCapsule_1;\n"+
"sdCapsule_has_returned_1 = true;\n"+
"sdCapsule_return_value_inlined_24_1 = sdCapsule_return_value_1;\n"+
"p_sdCapsule_1 = p_arms_1;\n"+
"a_sdCapsule_1 = vec3(1.5, 0, 0);\n"+
"b_sdCapsule_1 = wrist_arms_1;\n"+
"r_sdCapsule_1 = .2;\n"+
"sdCapsule_has_returned_1 = false;\n"+
"pa_sdCapsule_1 = p_sdCapsule_1 - a_sdCapsule_1;\n"+
"ba_sdCapsule_1 = b_sdCapsule_1 - a_sdCapsule_1;\n"+
"sdCapsule_return_value_1 = length(pa_sdCapsule_1 - ba_sdCapsule_1 * clamp(dot(pa_sdCapsule_1, ba_sdCapsule_1) / dot(ba_sdCapsule_1, ba_sdCapsule_1), 0., 1.)) - r_sdCapsule_1;\n"+
"sdCapsule_has_returned_1 = true;\n"+
"sdCapsule_return_value_inlined_25_1 = sdCapsule_return_value_1;\n"+
"r_arms_1.d = min(sdCapsule_return_value_inlined_24_1, sdCapsule_return_value_inlined_25_1);\n"+
"p_arms_1 -= wrist_arms_1;\n"+
"p_arms_1.z -= gunsForward_1 * .15;\n"+
"p_gunPod_1 = p_arms_1;\n"+
"gunPod_has_returned_1 = false;\n"+
"mat_setBodyMaterial_1 = r_gunPod_1;\n"+
"mat_setBodyMaterial_1.mat = vec3(.36, .45, .5);\n"+
"mat_setBodyMaterial_1.specPower = 30.;\n"+
"r_gunPod_1 = mat_setBodyMaterial_1;\n"+
"p_gunPod_1.yz += vec2(.1, .45);\n"+
"pp_gunPod_1 = p_gunPod_1;\n"+
"pp_gunPod_1.z = abs(pp_gunPod_1.z) - .5;\n"+
"p_sdCappedCone_1 = pp_gunPod_1;\n"+
"a_sdCappedCone_1 = vec3(0);\n"+
"b_sdCappedCone_1 = vec3(0, 0, - .1);\n"+
"ra_sdCappedCone_1 = .35 - .1;\n"+
"rb_sdCappedCone_1 = .35;\n"+
"sdCappedCone_has_returned_1 = false;\n"+
"rba_sdCappedCone_1 = rb_sdCappedCone_1 - ra_sdCappedCone_1;\n"+
"baba_sdCappedCone_1 = dot(b_sdCappedCone_1 - a_sdCappedCone_1, b_sdCappedCone_1 - a_sdCappedCone_1);\n"+
"papa_sdCappedCone_1 = dot(p_sdCappedCone_1 - a_sdCappedCone_1, p_sdCappedCone_1 - a_sdCappedCone_1);\n"+
"paba_sdCappedCone_1 = dot(p_sdCappedCone_1 - a_sdCappedCone_1, b_sdCappedCone_1 - a_sdCappedCone_1) / baba_sdCappedCone_1;\n"+
"x_sdCappedCone_1 = sqrt(papa_sdCappedCone_1 - paba_sdCappedCone_1 * paba_sdCappedCone_1 * baba_sdCappedCone_1);\n"+
"cax_sdCappedCone_1 = max(0., x_sdCappedCone_1 - ((paba_sdCappedCone_1 < .5) ? ra_sdCappedCone_1 : rb_sdCappedCone_1));\n"+
"cay_sdCappedCone_1 = abs(paba_sdCappedCone_1 - .5) - .5;\n"+
"f_sdCappedCone_1 = clamp((rba_sdCappedCone_1 * (x_sdCappedCone_1 - ra_sdCappedCone_1) + paba_sdCappedCone_1 * baba_sdCappedCone_1) / (rba_sdCappedCone_1 * rba_sdCappedCone_1 + baba_sdCappedCone_1), 0., 1.);\n"+
"cbx_sdCappedCone_1 = x_sdCappedCone_1 - ra_sdCappedCone_1 - f_sdCappedCone_1 * rba_sdCappedCone_1;\n"+
"cby_sdCappedCone_1 = paba_sdCappedCone_1 - f_sdCappedCone_1;\n"+
"sdCappedCone_return_value_1 = ((cbx_sdCappedCone_1 < 0. && cay_sdCappedCone_1 < 0.) ? - 1. : 1.) * sqrt(min(cax_sdCappedCone_1 * cax_sdCappedCone_1 + cay_sdCappedCone_1 * cay_sdCappedCone_1 * baba_sdCappedCone_1, cbx_sdCappedCone_1 * cbx_sdCappedCone_1 + cby_sdCappedCone_1 * cby_sdCappedCone_1 * baba_sdCappedCone_1));\n"+
"sdCappedCone_has_returned_1 = true;\n"+
"sdCappedCone_return_value_inlined_12_1 = sdCappedCone_return_value_1;\n"+
"r_gunPod_1.d = sdCappedCone_return_value_inlined_12_1;\n"+
"p_sdCappedCylinder_1 = p_gunPod_1;\n"+
"h_sdCappedCylinder_1 = .35;\n"+
"r_sdCappedCylinder_1 = .4;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_13_1 = sdCappedCylinder_return_value_1;\n"+
"r_gunPod_1.d = min(r_gunPod_1.d, sdCappedCylinder_return_value_inlined_13_1);\n"+
"pp_gunPod_1 = vec3(p_gunPod_1.x, .28 - p_gunPod_1.y, p_gunPod_1.z);\n"+
"p_sdTriPrism_1 = pp_gunPod_1;\n"+
"h_sdTriPrism_1 = vec2(.1, .5);\n"+
"sdTriPrism_has_returned_1 = false;\n"+
"q_sdTriPrism_1 = abs(p_sdTriPrism_1);\n"+
"sdTriPrism_return_value_1 = max(q_sdTriPrism_1.z - h_sdTriPrism_1.y, max(q_sdTriPrism_1.x * .866025 + p_sdTriPrism_1.y * .5, - p_sdTriPrism_1.y) - h_sdTriPrism_1.x * .5);\n"+
"sdTriPrism_has_returned_1 = true;\n"+
"sdTriPrism_return_value_inlined_14_1 = sdTriPrism_return_value_1;\n"+
"r_gunPod_1.d = min(r_gunPod_1.d, sdTriPrism_return_value_inlined_14_1);\n"+
"pp_gunPod_1 = p_gunPod_1;\n"+
"pp_gunPod_1.x = abs(p_gunPod_1.x);\n"+
"a_rot_1 = .78525;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_15_1 = rot_return_value_1;\n"+
"pp_gunPod_1.xy *= rot_return_value_inlined_15_1;\n"+
"bump_gunPod_1 = sign(sin(pp_gunPod_1.z * 33.3)) * .003;\n"+
"p_sdBox_1 = pp_gunPod_1;\n"+
"b_sdBox_1 = vec3(.1 - bump_gunPod_1, .38 - bump_gunPod_1, .34);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_16_1 = sdBox_return_value_1;\n"+
"d_gunPod_1 = sdBox_return_value_inlined_16_1 - .02;\n"+
"pp_gunPod_1 = p_gunPod_1 - vec3(0, 0, - .6);\n"+
"pp_gunPod_1.x = abs(pp_gunPod_1.x) - .1;\n"+
"p_sdCappedCylinder_1 = pp_gunPod_1;\n"+
"h_sdCappedCylinder_1 = .06;\n"+
"r_sdCappedCylinder_1 = .15;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_17_1 = sdCappedCylinder_return_value_1;\n"+
"p_sdCappedCylinder_1 = pp_gunPod_1 + vec3(0, .12, - .05);\n"+
"h_sdCappedCylinder_1 = .06;\n"+
"r_sdCappedCylinder_1 = .05;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_18_1 = sdCappedCylinder_return_value_1;\n"+
"p_sdBox_1 = p_gunPod_1 + vec3(0, 0, .54);\n"+
"b_sdBox_1 = vec3(.1, .06, .04);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_19_1 = sdBox_return_value_1;\n"+
"d_gunPod_1 = min(min(min(d_gunPod_1, sdCappedCylinder_return_value_inlined_17_1), sdCappedCylinder_return_value_inlined_18_1), sdBox_return_value_inlined_19_1);\n"+
"if(d_gunPod_1 < r_gunPod_1.d)\n"+
"{\n"+
"p_sdCappedCylinder_1 = pp_gunPod_1 + vec3(0, 0, .1);\n"+
"h_sdCappedCylinder_1 = .03;\n"+
"r_sdCappedCylinder_1 = .2;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_20_1 = sdCappedCylinder_return_value_1;\n"+
"d_gunPod_1 = max(d_gunPod_1, - sdCappedCylinder_return_value_inlined_20_1);\n"+
"r_gunPod_1.d = d_gunPod_1;\n"+
"r_gunPod_1.mat = vec3(.02);\n"+
"}\n"+
"fireShock_has_returned_1 = false;\n"+
"fireShock_return_value_1 = abs(sin(edShoot_1 * 78.5375));\n"+
"fireShock_has_returned_1 = true;\n"+
"fireShock_return_value_inlined_21_1 = fireShock_return_value_1;\n"+
"fs_gunPod_1 = fireShock_return_value_inlined_21_1;\n"+
"if(fs_gunPod_1 > .5)\n"+
"{\n"+
"p_sdCappedCylinder_1 = pp_gunPod_1;\n"+
"h_sdCappedCylinder_1 = .01 + pp_gunPod_1.z * .05;\n"+
"r_sdCappedCylinder_1 = fract(fs_gunPod_1 * 3322.423) * .5 + .9;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_22_1 = sdCappedCylinder_return_value_1;\n"+
"d_gunPod_1 = sdCappedCylinder_return_value_inlined_22_1;\n"+
"if(d_gunPod_1 < r_gunPod_1.d)\n"+
"{\n"+
"r_gunPod_1.d = d_gunPod_1;\n"+
"r_gunPod_1.mat = vec3(1);\n"+
"glow_1 += .1 / (.01 + d_gunPod_1 * d_gunPod_1 * 4e2);\n"+
"}\n"+
"}\n"+
"gunPod_return_value_1 = r_gunPod_1;\n"+
"gunPod_has_returned_1 = true;\n"+
"gunPod_return_value_inlined_26_1 = gunPod_return_value_1;\n"+
"a_minResult_1 = r_arms_1;\n"+
"b_minResult_1 = gunPod_return_value_inlined_26_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_27_1 = minResult_return_value_1;\n"+
"arms_return_value_1 = minResult_return_value_inlined_27_1;\n"+
"arms_has_returned_1 = true;\n"+
"arms_return_value_inlined_67_1 = arms_return_value_1;\n"+
"a_minResult_1 = minResult_return_value_inlined_66_1;\n"+
"b_minResult_1 = arms_return_value_inlined_67_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_68_1 = minResult_return_value_1;\n"+
"ed209_return_value_1 = minResult_return_value_inlined_68_1;\n"+
"ed209_has_returned_1 = true;\n"+
"ed209_return_value_inlined_79_1 = ed209_return_value_1;\n"+
"a_minResult_1 = room_return_value_inlined_78_1;\n"+
"b_minResult_1 = ed209_return_value_inlined_79_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_80_1 = minResult_return_value_1;\n"+
"r_map_1 = minResult_return_value_inlined_80_1;\n"+
"gnd_map_1 = length(p_map_1.y + 3.);\n"+
"if(gnd_map_1 < r_map_1.d)\n"+
"{\n"+
"r_map_1.d = gnd_map_1;\n"+
"r_map_1.mat = vec3(.1);\n"+
"}\n"+
"map_return_value_1 = r_map_1;\n"+
"map_has_returned_1 = true;\n"+
"map_return_value_inlined_83_1 = map_return_value_1;\n"+
"p_map_1 = p_calcNormal_1 + e_calcNormal_1.yxy;\n"+
"map_has_returned_1 = false;\n"+
"p_room_1 = p_map_1;\n"+
"room_has_returned_1 = false;\n"+
"r_room_1.mat = vec3(.4);\n"+
"r_room_1.specPower = 1e7;\n"+
"xy_room_1 = p_room_1.xy - vec2(0, 2);\n"+
"p_room_1.x = abs(p_room_1.x);\n"+
"p_room_1.yz += vec2(.5, - 3.4);\n"+
"p_sdBox_1 = p_room_1;\n"+
"b_sdBox_1 = frameInner_room_1 + vec3(0, 0, 1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_69_1 = sdBox_return_value_1;\n"+
"doorHole_room_1 = sdBox_return_value_inlined_69_1;\n"+
"backWall_room_1 = length(p_room_1.z - 8.);\n"+
"r_room_1.d = min(backWall_room_1, max(length(p_room_1.z), - doorHole_room_1 + .1));\n"+
"if(r_room_1.d == backWall_room_1)\n"+
"{\n"+
"p_sdOctogon_1 = xy_room_1;\n"+
"r_sdOctogon_1 = 2.6;\n"+
"sdOctogon_has_returned_1 = false;\n"+
"p_sdOctogon_1 = abs(p_sdOctogon_1);\n"+
"p_sdOctogon_1 -= 2. * min(dot(k_sdOctogon_1.xy, p_sdOctogon_1), 0.) * k_sdOctogon_1.xy;\n"+
"p_sdOctogon_1 -= 2. * min(dot(vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y), p_sdOctogon_1), 0.) * vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y);\n"+
"p_sdOctogon_1 -= vec2(clamp(p_sdOctogon_1.x, - k_sdOctogon_1.z * r_sdOctogon_1, k_sdOctogon_1.z * r_sdOctogon_1), r_sdOctogon_1);\n"+
"sdOctogon_return_value_1 = length(p_sdOctogon_1) * sign(p_sdOctogon_1.y);\n"+
"sdOctogon_has_returned_1 = true;\n"+
"sdOctogon_return_value_inlined_70_1 = sdOctogon_return_value_1;\n"+
"p_sdOctogon_1 = xy_room_1;\n"+
"r_sdOctogon_1 = 1.9;\n"+
"sdOctogon_has_returned_1 = false;\n"+
"p_sdOctogon_1 = abs(p_sdOctogon_1);\n"+
"p_sdOctogon_1 -= 2. * min(dot(k_sdOctogon_1.xy, p_sdOctogon_1), 0.) * k_sdOctogon_1.xy;\n"+
"p_sdOctogon_1 -= 2. * min(dot(vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y), p_sdOctogon_1), 0.) * vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y);\n"+
"p_sdOctogon_1 -= vec2(clamp(p_sdOctogon_1.x, - k_sdOctogon_1.z * r_sdOctogon_1, k_sdOctogon_1.z * r_sdOctogon_1), r_sdOctogon_1);\n"+
"sdOctogon_return_value_1 = length(p_sdOctogon_1) * sign(p_sdOctogon_1.y);\n"+
"sdOctogon_has_returned_1 = true;\n"+
"sdOctogon_return_value_inlined_71_1 = sdOctogon_return_value_1;\n"+
"ocp_room_1 = min(abs(sdOctogon_return_value_inlined_70_1), abs(sdOctogon_return_value_inlined_71_1));\n"+
"p_sdOctogon_1 = xy_room_1;\n"+
"r_sdOctogon_1 = 1.2;\n"+
"sdOctogon_has_returned_1 = false;\n"+
"p_sdOctogon_1 = abs(p_sdOctogon_1);\n"+
"p_sdOctogon_1 -= 2. * min(dot(k_sdOctogon_1.xy, p_sdOctogon_1), 0.) * k_sdOctogon_1.xy;\n"+
"p_sdOctogon_1 -= 2. * min(dot(vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y), p_sdOctogon_1), 0.) * vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y);\n"+
"p_sdOctogon_1 -= vec2(clamp(p_sdOctogon_1.x, - k_sdOctogon_1.z * r_sdOctogon_1, k_sdOctogon_1.z * r_sdOctogon_1), r_sdOctogon_1);\n"+
"sdOctogon_return_value_1 = length(p_sdOctogon_1) * sign(p_sdOctogon_1.y);\n"+
"sdOctogon_has_returned_1 = true;\n"+
"sdOctogon_return_value_inlined_72_1 = sdOctogon_return_value_1;\n"+
"ocp_room_1 = min(max(ocp_room_1, min(.7 - abs(xy_room_1.x + 1.2), - xy_room_1.y)), max(abs(sdOctogon_return_value_inlined_72_1), min(xy_room_1.x, .7 - abs(xy_room_1.y))));\n"+
"if(ocp_room_1 < .3)\n"+
"{\n"+
"r_room_1.mat = vec3(.39, .57, .71);\n"+
"}\n"+
"}\n"+
"p_sdBox_1 = p_room_1;\n"+
"b_sdBox_1 = frameInner_room_1 + vec3(.4, .4, .1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_73_1 = sdBox_return_value_1;\n"+
"doorFrame_room_1 = max(sdBox_return_value_inlined_73_1, - doorHole_room_1);\n"+
"doorWidth_room_1 = frameInner_room_1.x * .5;\n"+
"p_room_1.x -= frameInner_room_1.x;\n"+
"a_rot_1 = doorOpen_1 * 2.1;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_74_1 = rot_return_value_1;\n"+
"p_room_1.xz *= rot_return_value_inlined_74_1;\n"+
"p_room_1.x += doorWidth_room_1;\n"+
"p_sdBox_1 = p_room_1;\n"+
"b_sdBox_1 = vec3(doorWidth_room_1, frameInner_room_1.yz);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_75_1 = sdBox_return_value_1;\n"+
"door_room_1 = sdBox_return_value_inlined_75_1;\n"+
"p_room_1 = abs(p_room_1) - vec3(doorWidth_room_1 * .5, 1.1, .14);\n"+
"p_sdBox_1 = p_room_1;\n"+
"b_sdBox_1 = vec3(.45, .9, .1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_76_1 = sdBox_return_value_1;\n"+
"p_sdBox_1 = p_room_1;\n"+
"b_sdBox_1 = vec3(.35, .8, 1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_77_1 = sdBox_return_value_1;\n"+
"d_room_1 = min(doorFrame_room_1, max(door_room_1, - max(sdBox_return_value_inlined_76_1, - sdBox_return_value_inlined_77_1)));\n"+
"if(d_room_1 < r_room_1.d)\n"+
"{\n"+
"r_room_1.d = d_room_1;\n"+
"r_room_1.mat = vec3(.02, .02, .024);\n"+
"r_room_1.specPower = 10.;\n"+
"}\n"+
"room_return_value_1 = r_room_1;\n"+
"room_has_returned_1 = true;\n"+
"room_return_value_inlined_78_1 = room_return_value_1;\n"+
"p_ed209_1 = p_map_1;\n"+
"ed209_has_returned_1 = false;\n"+
"f_legWalkAngle_1 = 2.;\n"+
"legWalkAngle_has_returned_1 = false;\n"+
"legWalkAngle_return_value_1 = sin(edWalk_1 * 3.141 * 6. * f_legWalkAngle_1) * .2;\n"+
"legWalkAngle_has_returned_1 = true;\n"+
"legWalkAngle_return_value_inlined_54_1 = legWalkAngle_return_value_1;\n"+
"edZ_has_returned_1 = false;\n"+
"edZ_return_value_1 = mix(5., - 2., edWalk_1);\n"+
"edZ_has_returned_1 = true;\n"+
"edZ_return_value_inlined_55_1 = edZ_return_value_1;\n"+
"p_ed209_1.yz += vec2(legWalkAngle_return_value_inlined_54_1 * .2 + .1, - edZ_return_value_inlined_55_1);\n"+
"p_legs_1 = p_ed209_1;\n"+
"legs_has_returned_1 = false;\n"+
"mat_setBodyMaterial_1 = r_legs_1;\n"+
"mat_setBodyMaterial_1.mat = vec3(.36, .45, .5);\n"+
"mat_setBodyMaterial_1.specPower = 30.;\n"+
"r_legs_1 = mat_setBodyMaterial_1;\n"+
"f_legWalkAngle_1 = 1.;\n"+
"legWalkAngle_has_returned_1 = false;\n"+
"legWalkAngle_return_value_1 = sin(edWalk_1 * 3.141 * 6. * f_legWalkAngle_1) * .2;\n"+
"legWalkAngle_has_returned_1 = true;\n"+
"legWalkAngle_return_value_inlined_45_1 = legWalkAngle_return_value_1;\n"+
"legAngle_legs_1 = legWalkAngle_return_value_inlined_45_1;\n"+
"p_legs_1.z += .27;\n"+
"a_rot_1 = legAngle_legs_1 * sign(p_legs_1.x);\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_46_1 = rot_return_value_1;\n"+
"p_legs_1.yz *= rot_return_value_inlined_46_1;\n"+
"p_legs_1.z -= .27;\n"+
"p_legs_1.y += .65;\n"+
"a_rot_1 = - .2;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_47_1 = rot_return_value_1;\n"+
"p_legs_1.yz *= rot_return_value_inlined_47_1;\n"+
"a_rot_1 = legAngle_legs_1 * .3;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_48_1 = rot_return_value_1;\n"+
"p_legs_1.xy *= rot_return_value_inlined_48_1;\n"+
"pp_legs_1 = p_legs_1;\n"+
"pp_legs_1.x = abs(pp_legs_1.x);\n"+
"pp_legs_1.y += .48;\n"+
"a_rot_1 = - .58525;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_49_1 = rot_return_value_1;\n"+
"pp_legs_1.yz *= rot_return_value_inlined_49_1;\n"+
"pp_legs_1.x -= .98;\n"+
"cp_legs_1 = pp_legs_1;\n"+
"p_legs_1 = pp_legs_1;\n"+
"pp_legs_1.xz = abs(pp_legs_1.xz) - vec2(.12, .25);\n"+
"p_legs_1.y += .68;\n"+
"p_legs_1.xy = abs(p_legs_1.xy) - .12;\n"+
"p_sdBox_1 = p_legs_1;\n"+
"b_sdBox_1 = vec3(.07, .05, 1.2);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_50_1 = sdBox_return_value_1;\n"+
"silver_legs_1 = sdBox_return_value_inlined_50_1;\n"+
"cp_legs_1 -= vec3(0, - .7, 0);\n"+
"p_sdBox_1 = cp_legs_1 - vec3(0, 0, 1.15);\n"+
"b_sdBox_1 = vec3(.17, .17, .07);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_51_1 = sdBox_return_value_1;\n"+
"r_legs_1.d = sdBox_return_value_inlined_51_1 - .04;\n"+
"cp_legs_1.z ++;\n"+
"p_sdChamferedCube_1 = cp_legs_1.xzy;\n"+
"r_sdChamferedCube_1 = vec2(.28 - sign(abs(cp_legs_1.z) - .3) * .01, .5).xyx;\n"+
"c_sdChamferedCube_1 = .18;\n"+
"sdChamferedCube_has_returned_1 = false;\n"+
"p_sdBox_1 = p_sdChamferedCube_1;\n"+
"b_sdBox_1 = r_sdChamferedCube_1;\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_0_1 = sdBox_return_value_1;\n"+
"cube_sdChamferedCube_1 = sdBox_return_value_inlined_0_1;\n"+
"a_rot_1 = .78525;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_1_1 = rot_return_value_1;\n"+
"p_sdChamferedCube_1.xz *= rot_return_value_inlined_1_1;\n"+
"r_sdChamferedCube_1.xz *= - c_sdChamferedCube_1 / 1.41 + 1.41;\n"+
"p_sdBox_1 = p_sdChamferedCube_1;\n"+
"b_sdBox_1 = r_sdChamferedCube_1;\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_2_1 = sdBox_return_value_1;\n"+
"sdChamferedCube_return_value_1 = max(cube_sdChamferedCube_1, sdBox_return_value_inlined_2_1);\n"+
"sdChamferedCube_has_returned_1 = true;\n"+
"sdChamferedCube_return_value_inlined_52_1 = sdChamferedCube_return_value_1;\n"+
"r_legs_1.d = min(r_legs_1.d, sdChamferedCube_return_value_inlined_52_1);\n"+
"p_foot_1 = cp_legs_1;\n"+
"foot_has_returned_1 = false;\n"+
"p_foot_1.z += .8;\n"+
"a_rot_1 = .86;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_29_1 = rot_return_value_1;\n"+
"p_foot_1.yz *= rot_return_value_inlined_29_1;\n"+
"p_toe_1 = p_foot_1;\n"+
"toe_has_returned_1 = false;\n"+
"p_toe_1.yz += vec2(.1, .32);\n"+
"p_sdBox_1 = p_toe_1;\n"+
"b_sdBox_1 = vec3(.3 + .2 * (p_toe_1.z - .18) - p_toe_1.y * .228, .3 + .2 * cos((p_toe_1.z - .18) * 3.69), .35);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_28_1 = sdBox_return_value_1;\n"+
"toe_return_value_1 = max(sdBox_return_value_inlined_28_1, .1 - p_toe_1.y);\n"+
"toe_has_returned_1 = true;\n"+
"toe_return_value_inlined_30_1 = toe_return_value_1;\n"+
"d_foot_1 = toe_return_value_inlined_30_1;\n"+
"a_rot_1 = 1.57;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_31_1 = rot_return_value_1;\n"+
"p_foot_1.xz *= rot_return_value_inlined_31_1;\n"+
"p_foot_1.x -= .43;\n"+
"p_foot_1.z = .25 - abs(p_foot_1.z);\n"+
"p_toe_1 = p_foot_1;\n"+
"toe_has_returned_1 = false;\n"+
"p_toe_1.yz += vec2(.1, .32);\n"+
"p_sdBox_1 = p_toe_1;\n"+
"b_sdBox_1 = vec3(.3 + .2 * (p_toe_1.z - .18) - p_toe_1.y * .228, .3 + .2 * cos((p_toe_1.z - .18) * 3.69), .35);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_28_1 = sdBox_return_value_1;\n"+
"toe_return_value_1 = max(sdBox_return_value_inlined_28_1, .1 - p_toe_1.y);\n"+
"toe_has_returned_1 = true;\n"+
"toe_return_value_inlined_32_1 = toe_return_value_1;\n"+
"foot_return_value_1 = min(d_foot_1, toe_return_value_inlined_32_1);\n"+
"foot_has_returned_1 = true;\n"+
"foot_return_value_inlined_53_1 = foot_return_value_1;\n"+
"r_legs_1.d = min(r_legs_1.d, foot_return_value_inlined_53_1);\n"+
"if(silver_legs_1 < r_legs_1.d)\n"+
"{\n"+
"r_legs_1.d = silver_legs_1;\n"+
"r_legs_1.mat = vec3(.8);\n"+
"}\n"+
"legs_return_value_1 = r_legs_1;\n"+
"legs_has_returned_1 = true;\n"+
"legs_return_value_inlined_56_1 = legs_return_value_1;\n"+
"r_ed209_1 = legs_return_value_inlined_56_1;\n"+
"f_ed209_1 = min(stretch_1 * 2., 1.);\n"+
"slide_ed209_1 = f_ed209_1 < .5 ? smoothstep(0., .5, f_ed209_1) : (1. - smoothstep(.5, 1., f_ed209_1) * .2);\n"+
"p_ed209_1.yz -= slide_ed209_1 * .5;\n"+
"gunsUp_1 = smoothstep(0., 1., clamp((stretch_1 - .66) * 6., 0., 1.));\n"+
"fireShock_has_returned_1 = false;\n"+
"fireShock_return_value_1 = abs(sin(edShoot_1 * 78.5375));\n"+
"fireShock_has_returned_1 = true;\n"+
"fireShock_return_value_inlined_57_1 = fireShock_return_value_1;\n"+
"gunsForward_1 = smoothstep(0., 1., clamp((stretch_1 - .83) * 6., 0., 1.)) + fireShock_return_value_inlined_57_1 * .5;\n"+
"p_waist_1 = p_ed209_1;\n"+
"waist_has_returned_1 = false;\n"+
"mat_setBodyMaterial_1 = r_waist_1;\n"+
"mat_setBodyMaterial_1.mat = vec3(.36, .45, .5);\n"+
"mat_setBodyMaterial_1.specPower = 30.;\n"+
"r_waist_1 = mat_setBodyMaterial_1;\n"+
"p_waist_1.y += .65;\n"+
"a_rot_1 = - .2;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_33_1 = rot_return_value_1;\n"+
"p_waist_1.yz *= rot_return_value_inlined_33_1;\n"+
"f_legWalkAngle_1 = 1.;\n"+
"legWalkAngle_has_returned_1 = false;\n"+
"legWalkAngle_return_value_1 = sin(edWalk_1 * 3.141 * 6. * f_legWalkAngle_1) * .2;\n"+
"legWalkAngle_has_returned_1 = true;\n"+
"legWalkAngle_return_value_inlined_34_1 = legWalkAngle_return_value_1;\n"+
"legAngle_waist_1 = legWalkAngle_return_value_inlined_34_1;\n"+
"a_rot_1 = legAngle_waist_1 * .3;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_35_1 = rot_return_value_1;\n"+
"p_waist_1.xy *= rot_return_value_inlined_35_1;\n"+
"pp_waist_1 = p_waist_1;\n"+
"pp_waist_1.y += .3;\n"+
"p_sdCappedCylinder_1 = pp_waist_1.zyx;\n"+
"h_sdCappedCylinder_1 = .5;\n"+
"r_sdCappedCylinder_1 = .5;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_36_1 = sdCappedCylinder_return_value_1;\n"+
"r_waist_1.d = max(sdCappedCylinder_return_value_inlined_36_1, p_waist_1.y + .15);\n"+
"bump_waist_1 = .5 - abs(sin(p_waist_1.y * 40.)) * .03;\n"+
"p_sdBox_1 = p_waist_1;\n"+
"b_sdBox_1 = vec3(bump_waist_1, .15, bump_waist_1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_37_1 = sdBox_return_value_1;\n"+
"d_waist_1 = sdBox_return_value_inlined_37_1;\n"+
"bump_waist_1 = .3 - abs(sin(p_waist_1.x * 40.)) * .03;\n"+
"pp_waist_1.y += .18;\n"+
"p_sdCappedCylinder_1 = pp_waist_1.zyx;\n"+
"h_sdCappedCylinder_1 = bump_waist_1;\n"+
"r_sdCappedCylinder_1 = .75;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_38_1 = sdCappedCylinder_return_value_1;\n"+
"d_waist_1 = min(d_waist_1, sdCappedCylinder_return_value_inlined_38_1);\n"+
"pp_waist_1.x = abs(pp_waist_1.x);\n"+
"a_rot_1 = - .58525 + legAngle_waist_1 * sign(p_waist_1.x);\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_39_1 = rot_return_value_1;\n"+
"pp_waist_1.yz *= rot_return_value_inlined_39_1;\n"+
"pp_waist_1.x -= .98;\n"+
"p_sdCappedCylinder_1 = pp_waist_1.zyx;\n"+
"h_sdCappedCylinder_1 = .4;\n"+
"r_sdCappedCylinder_1 = .24;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_40_1 = sdCappedCylinder_return_value_1;\n"+
"r_waist_1.d = min(r_waist_1.d, max(sdCappedCylinder_return_value_inlined_40_1, - pp_waist_1.y));\n"+
"p_sdBox_1 = pp_waist_1;\n"+
"b_sdBox_1 = vec3(.24, .2, .14 + .2 * pp_waist_1.y);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_41_1 = sdBox_return_value_1;\n"+
"r_waist_1.d = min(r_waist_1.d, sdBox_return_value_inlined_41_1);\n"+
"p_waist_1 = pp_waist_1;\n"+
"pp_waist_1.xz = abs(pp_waist_1.xz) - vec2(.12, .25);\n"+
"p_sdCappedCylinder_1 = pp_waist_1.xzy;\n"+
"h_sdCappedCylinder_1 = .1;\n"+
"r_sdCappedCylinder_1 = .325;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_42_1 = sdCappedCylinder_return_value_1;\n"+
"p_sdCappedCylinder_1 = pp_waist_1.xzy;\n"+
"h_sdCappedCylinder_1 = .05;\n"+
"r_sdCappedCylinder_1 = .5;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_43_1 = sdCappedCylinder_return_value_1;\n"+
"r_waist_1.d = min(r_waist_1.d, max(min(sdCappedCylinder_return_value_inlined_42_1, sdCappedCylinder_return_value_inlined_43_1), pp_waist_1.y));\n"+
"p_waist_1.y += .68;\n"+
"p_sdBox_1 = p_waist_1;\n"+
"b_sdBox_1 = vec3(sign(abs(p_waist_1.y) - .04) * .005 + .26, .2, .34);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_44_1 = sdBox_return_value_1;\n"+
"r_waist_1.d = min(r_waist_1.d, sdBox_return_value_inlined_44_1);\n"+
"if(d_waist_1 < r_waist_1.d)\n"+
"{\n"+
"r_waist_1.d = d_waist_1;\n"+
"r_waist_1.mat = vec3(.02);\n"+
"}\n"+
"waist_return_value_1 = r_waist_1;\n"+
"waist_has_returned_1 = true;\n"+
"waist_return_value_inlined_58_1 = waist_return_value_1;\n"+
"a_minResult_1 = r_ed209_1;\n"+
"b_minResult_1 = waist_return_value_inlined_58_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_59_1 = minResult_return_value_1;\n"+
"r_ed209_1 = minResult_return_value_inlined_59_1;\n"+
"f_legWalkAngle_1 = 2.;\n"+
"legWalkAngle_has_returned_1 = false;\n"+
"legWalkAngle_return_value_1 = sin(edWalk_1 * 3.141 * 6. * f_legWalkAngle_1) * .2;\n"+
"legWalkAngle_has_returned_1 = true;\n"+
"legWalkAngle_return_value_inlined_60_1 = legWalkAngle_return_value_1;\n"+
"a_rot_1 = .1 * (- edDown_1 + legWalkAngle_return_value_inlined_60_1 + smoothstep(0., 1., clamp((stretch_1 - .5) * 6., 0., 1.)) - 1.);\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_61_1 = rot_return_value_1;\n"+
"p_ed209_1.yz *= rot_return_value_inlined_61_1;\n"+
"a_rot_1 = edTwist_1 * .2;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_62_1 = rot_return_value_1;\n"+
"p_ed209_1.xz *= rot_return_value_inlined_62_1;\n"+
"p_headLower_1 = p_ed209_1;\n"+
"headLower_has_returned_1 = false;\n"+
"op_headLower_1 = p_headLower_1;\n"+
"p_headVisor_1 = p_headLower_1 * vec3(.95, - 1.4, .95);\n"+
"h_headVisor_1 = 1.;\n"+
"bump_headVisor_1 = 0.;\n"+
"headVisor_has_returned_1 = false;\n"+
"bump_headVisor_1 *= sin(p_headVisor_1.x * 150.) * sin(p_headVisor_1.y * 150.) * .002;\n"+
"p_sdBox_1 = p_headVisor_1;\n"+
"b_sdBox_1 = vec3(1, h_headVisor_1, 2);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_3_1 = sdBox_return_value_1;\n"+
"result_headVisor_1.d = sdBox_return_value_inlined_3_1;\n"+
"p_headSphere_1 = p_headVisor_1;\n"+
"headSphere_has_returned_1 = false;\n"+
"headSphere_return_value_1 = (length(p_headSphere_1 / vec3(1, .8, 1)) - 1.) * .8;\n"+
"headSphere_has_returned_1 = true;\n"+
"headSphere_return_value_inlined_4_1 = headSphere_return_value_1;\n"+
"result_headVisor_1.d = max(mix(result_headVisor_1.d, headSphere_return_value_inlined_4_1, .57), - p_headVisor_1.y) - bump_headVisor_1;\n"+
"result_headVisor_1.mat = vec3(.05);\n"+
"result_headVisor_1.specPower = 30.;\n"+
"headVisor_return_value_1 = result_headVisor_1;\n"+
"headVisor_has_returned_1 = true;\n"+
"headVisor_return_value_inlined_5_1 = headVisor_return_value_1;\n"+
"r_headLower_1 = headVisor_return_value_inlined_5_1;\n"+
"p_headVisor_1 = (p_headLower_1 + vec3(0, .01, 0)) * vec3(.95);\n"+
"h_headVisor_1 = 1.;\n"+
"bump_headVisor_1 = 0.;\n"+
"headVisor_has_returned_1 = false;\n"+
"bump_headVisor_1 *= sin(p_headVisor_1.x * 150.) * sin(p_headVisor_1.y * 150.) * .002;\n"+
"p_sdBox_1 = p_headVisor_1;\n"+
"b_sdBox_1 = vec3(1, h_headVisor_1, 2);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_3_1 = sdBox_return_value_1;\n"+
"result_headVisor_1.d = sdBox_return_value_inlined_3_1;\n"+
"p_headSphere_1 = p_headVisor_1;\n"+
"headSphere_has_returned_1 = false;\n"+
"headSphere_return_value_1 = (length(p_headSphere_1 / vec3(1, .8, 1)) - 1.) * .8;\n"+
"headSphere_has_returned_1 = true;\n"+
"headSphere_return_value_inlined_4_1 = headSphere_return_value_1;\n"+
"result_headVisor_1.d = max(mix(result_headVisor_1.d, headSphere_return_value_inlined_4_1, .57), - p_headVisor_1.y) - bump_headVisor_1;\n"+
"result_headVisor_1.mat = vec3(.05);\n"+
"result_headVisor_1.specPower = 30.;\n"+
"headVisor_return_value_1 = result_headVisor_1;\n"+
"headVisor_has_returned_1 = true;\n"+
"headVisor_return_value_inlined_6_1 = headVisor_return_value_1;\n"+
"r_headLower_1.d = min(r_headLower_1.d, max(max(headVisor_return_value_inlined_6_1.d, p_headLower_1.y - .35), p_headLower_1.y * .625 - p_headLower_1.z - .66));\n"+
"a_rot_1 = .075 * (gunsUp_1 - 1.) * sign(p_headLower_1.x);\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_7_1 = rot_return_value_1;\n"+
"p_headLower_1.xy *= rot_return_value_inlined_7_1;\n"+
"p_headLower_1.x = abs(p_headLower_1.x) - 1.33;\n"+
"p_headLower_1.y -= .1 - p_headLower_1.x * .1;\n"+
"p_sdBox_1 = p_headLower_1;\n"+
"b_sdBox_1 = vec3(.4, .06 * (1. - p_headLower_1.x), .3 - p_headLower_1.x * .2);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_8_1 = sdBox_return_value_1;\n"+
"r_headLower_1.d = min(r_headLower_1.d, sdBox_return_value_inlined_8_1);\n"+
"p_headLower_1 = op_headLower_1;\n"+
"p_headLower_1.y = abs(abs(p_headLower_1.y + .147) - .0556) - .0278;\n"+
"p_sdBox_1 = p_headLower_1 + vec3(0, 0, 1.5);\n"+
"b_sdBox_1 = vec3(mix(.25, .55, - op_headLower_1.y), .015, .1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_9_1 = sdBox_return_value_1;\n"+
"r_headLower_1.d = max(r_headLower_1.d, - sdBox_return_value_inlined_9_1);\n"+
"p_headLower_1 = op_headLower_1;\n"+
"p_headLower_1.y = abs(p_headLower_1.y + .16) - .06;\n"+
"p_headLower_1.z -= - 1.1;\n"+
"p_sdCappedCylinder_1 = p_headLower_1.xzy;\n"+
"h_sdCappedCylinder_1 = 1.;\n"+
"r_sdCappedCylinder_1 = .03;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_10_1 = sdCappedCylinder_return_value_1;\n"+
"p_sdCappedCylinder_1 = p_headLower_1.xzy;\n"+
"h_sdCappedCylinder_1 = .55;\n"+
"r_sdCappedCylinder_1 = 1.;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_11_1 = sdCappedCylinder_return_value_1;\n"+
"r_headLower_1.d = max(r_headLower_1.d, - max(max(sdCappedCylinder_return_value_inlined_10_1, - sdCappedCylinder_return_value_inlined_11_1), p_headLower_1.z + .2));\n"+
"mat_setBodyMaterial_1 = r_headLower_1;\n"+
"mat_setBodyMaterial_1.mat = vec3(.36, .45, .5);\n"+
"mat_setBodyMaterial_1.specPower = 30.;\n"+
"r_headLower_1 = mat_setBodyMaterial_1;\n"+
"headLower_return_value_1 = r_headLower_1;\n"+
"headLower_has_returned_1 = true;\n"+
"headLower_return_value_inlined_63_1 = headLower_return_value_1;\n"+
"a_minResult_1 = r_ed209_1;\n"+
"b_minResult_1 = headLower_return_value_inlined_63_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_64_1 = minResult_return_value_1;\n"+
"p_headVisor_1 = p_ed209_1;\n"+
"h_headVisor_1 = .8;\n"+
"bump_headVisor_1 = 1.;\n"+
"headVisor_has_returned_1 = false;\n"+
"bump_headVisor_1 *= sin(p_headVisor_1.x * 150.) * sin(p_headVisor_1.y * 150.) * .002;\n"+
"p_sdBox_1 = p_headVisor_1;\n"+
"b_sdBox_1 = vec3(1, h_headVisor_1, 2);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_3_1 = sdBox_return_value_1;\n"+
"result_headVisor_1.d = sdBox_return_value_inlined_3_1;\n"+
"p_headSphere_1 = p_headVisor_1;\n"+
"headSphere_has_returned_1 = false;\n"+
"headSphere_return_value_1 = (length(p_headSphere_1 / vec3(1, .8, 1)) - 1.) * .8;\n"+
"headSphere_has_returned_1 = true;\n"+
"headSphere_return_value_inlined_4_1 = headSphere_return_value_1;\n"+
"result_headVisor_1.d = max(mix(result_headVisor_1.d, headSphere_return_value_inlined_4_1, .57), - p_headVisor_1.y) - bump_headVisor_1;\n"+
"result_headVisor_1.mat = vec3(.05);\n"+
"result_headVisor_1.specPower = 30.;\n"+
"headVisor_return_value_1 = result_headVisor_1;\n"+
"headVisor_has_returned_1 = true;\n"+
"headVisor_return_value_inlined_65_1 = headVisor_return_value_1;\n"+
"a_minResult_1 = minResult_return_value_inlined_64_1;\n"+
"b_minResult_1 = headVisor_return_value_inlined_65_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_66_1 = minResult_return_value_1;\n"+
"p_arms_1 = p_ed209_1;\n"+
"arms_has_returned_1 = false;\n"+
"mat_setBodyMaterial_1 = r_arms_1;\n"+
"mat_setBodyMaterial_1.mat = vec3(.36, .45, .5);\n"+
"mat_setBodyMaterial_1.specPower = 30.;\n"+
"r_arms_1 = mat_setBodyMaterial_1;\n"+
"p_arms_1.x = abs(p_arms_1.x);\n"+
"p_arms_1.yz += vec2(.24, 0);\n"+
"a_rot_1 = .15 * (gunsUp_1 - 1.);\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_23_1 = rot_return_value_1;\n"+
"p_arms_1.xy *= rot_return_value_inlined_23_1;\n"+
"p_sdCapsule_1 = p_arms_1;\n"+
"a_sdCapsule_1 = vec3(0);\n"+
"b_sdCapsule_1 = vec3(1.5, 0, 0);\n"+
"r_sdCapsule_1 = .2;\n"+
"sdCapsule_has_returned_1 = false;\n"+
"pa_sdCapsule_1 = p_sdCapsule_1 - a_sdCapsule_1;\n"+
"ba_sdCapsule_1 = b_sdCapsule_1 - a_sdCapsule_1;\n"+
"sdCapsule_return_value_1 = length(pa_sdCapsule_1 - ba_sdCapsule_1 * clamp(dot(pa_sdCapsule_1, ba_sdCapsule_1) / dot(ba_sdCapsule_1, ba_sdCapsule_1), 0., 1.)) - r_sdCapsule_1;\n"+
"sdCapsule_has_returned_1 = true;\n"+
"sdCapsule_return_value_inlined_24_1 = sdCapsule_return_value_1;\n"+
"p_sdCapsule_1 = p_arms_1;\n"+
"a_sdCapsule_1 = vec3(1.5, 0, 0);\n"+
"b_sdCapsule_1 = wrist_arms_1;\n"+
"r_sdCapsule_1 = .2;\n"+
"sdCapsule_has_returned_1 = false;\n"+
"pa_sdCapsule_1 = p_sdCapsule_1 - a_sdCapsule_1;\n"+
"ba_sdCapsule_1 = b_sdCapsule_1 - a_sdCapsule_1;\n"+
"sdCapsule_return_value_1 = length(pa_sdCapsule_1 - ba_sdCapsule_1 * clamp(dot(pa_sdCapsule_1, ba_sdCapsule_1) / dot(ba_sdCapsule_1, ba_sdCapsule_1), 0., 1.)) - r_sdCapsule_1;\n"+
"sdCapsule_has_returned_1 = true;\n"+
"sdCapsule_return_value_inlined_25_1 = sdCapsule_return_value_1;\n"+
"r_arms_1.d = min(sdCapsule_return_value_inlined_24_1, sdCapsule_return_value_inlined_25_1);\n"+
"p_arms_1 -= wrist_arms_1;\n"+
"p_arms_1.z -= gunsForward_1 * .15;\n"+
"p_gunPod_1 = p_arms_1;\n"+
"gunPod_has_returned_1 = false;\n"+
"mat_setBodyMaterial_1 = r_gunPod_1;\n"+
"mat_setBodyMaterial_1.mat = vec3(.36, .45, .5);\n"+
"mat_setBodyMaterial_1.specPower = 30.;\n"+
"r_gunPod_1 = mat_setBodyMaterial_1;\n"+
"p_gunPod_1.yz += vec2(.1, .45);\n"+
"pp_gunPod_1 = p_gunPod_1;\n"+
"pp_gunPod_1.z = abs(pp_gunPod_1.z) - .5;\n"+
"p_sdCappedCone_1 = pp_gunPod_1;\n"+
"a_sdCappedCone_1 = vec3(0);\n"+
"b_sdCappedCone_1 = vec3(0, 0, - .1);\n"+
"ra_sdCappedCone_1 = .35 - .1;\n"+
"rb_sdCappedCone_1 = .35;\n"+
"sdCappedCone_has_returned_1 = false;\n"+
"rba_sdCappedCone_1 = rb_sdCappedCone_1 - ra_sdCappedCone_1;\n"+
"baba_sdCappedCone_1 = dot(b_sdCappedCone_1 - a_sdCappedCone_1, b_sdCappedCone_1 - a_sdCappedCone_1);\n"+
"papa_sdCappedCone_1 = dot(p_sdCappedCone_1 - a_sdCappedCone_1, p_sdCappedCone_1 - a_sdCappedCone_1);\n"+
"paba_sdCappedCone_1 = dot(p_sdCappedCone_1 - a_sdCappedCone_1, b_sdCappedCone_1 - a_sdCappedCone_1) / baba_sdCappedCone_1;\n"+
"x_sdCappedCone_1 = sqrt(papa_sdCappedCone_1 - paba_sdCappedCone_1 * paba_sdCappedCone_1 * baba_sdCappedCone_1);\n"+
"cax_sdCappedCone_1 = max(0., x_sdCappedCone_1 - ((paba_sdCappedCone_1 < .5) ? ra_sdCappedCone_1 : rb_sdCappedCone_1));\n"+
"cay_sdCappedCone_1 = abs(paba_sdCappedCone_1 - .5) - .5;\n"+
"f_sdCappedCone_1 = clamp((rba_sdCappedCone_1 * (x_sdCappedCone_1 - ra_sdCappedCone_1) + paba_sdCappedCone_1 * baba_sdCappedCone_1) / (rba_sdCappedCone_1 * rba_sdCappedCone_1 + baba_sdCappedCone_1), 0., 1.);\n"+
"cbx_sdCappedCone_1 = x_sdCappedCone_1 - ra_sdCappedCone_1 - f_sdCappedCone_1 * rba_sdCappedCone_1;\n"+
"cby_sdCappedCone_1 = paba_sdCappedCone_1 - f_sdCappedCone_1;\n"+
"sdCappedCone_return_value_1 = ((cbx_sdCappedCone_1 < 0. && cay_sdCappedCone_1 < 0.) ? - 1. : 1.) * sqrt(min(cax_sdCappedCone_1 * cax_sdCappedCone_1 + cay_sdCappedCone_1 * cay_sdCappedCone_1 * baba_sdCappedCone_1, cbx_sdCappedCone_1 * cbx_sdCappedCone_1 + cby_sdCappedCone_1 * cby_sdCappedCone_1 * baba_sdCappedCone_1));\n"+
"sdCappedCone_has_returned_1 = true;\n"+
"sdCappedCone_return_value_inlined_12_1 = sdCappedCone_return_value_1;\n"+
"r_gunPod_1.d = sdCappedCone_return_value_inlined_12_1;\n"+
"p_sdCappedCylinder_1 = p_gunPod_1;\n"+
"h_sdCappedCylinder_1 = .35;\n"+
"r_sdCappedCylinder_1 = .4;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_13_1 = sdCappedCylinder_return_value_1;\n"+
"r_gunPod_1.d = min(r_gunPod_1.d, sdCappedCylinder_return_value_inlined_13_1);\n"+
"pp_gunPod_1 = vec3(p_gunPod_1.x, .28 - p_gunPod_1.y, p_gunPod_1.z);\n"+
"p_sdTriPrism_1 = pp_gunPod_1;\n"+
"h_sdTriPrism_1 = vec2(.1, .5);\n"+
"sdTriPrism_has_returned_1 = false;\n"+
"q_sdTriPrism_1 = abs(p_sdTriPrism_1);\n"+
"sdTriPrism_return_value_1 = max(q_sdTriPrism_1.z - h_sdTriPrism_1.y, max(q_sdTriPrism_1.x * .866025 + p_sdTriPrism_1.y * .5, - p_sdTriPrism_1.y) - h_sdTriPrism_1.x * .5);\n"+
"sdTriPrism_has_returned_1 = true;\n"+
"sdTriPrism_return_value_inlined_14_1 = sdTriPrism_return_value_1;\n"+
"r_gunPod_1.d = min(r_gunPod_1.d, sdTriPrism_return_value_inlined_14_1);\n"+
"pp_gunPod_1 = p_gunPod_1;\n"+
"pp_gunPod_1.x = abs(p_gunPod_1.x);\n"+
"a_rot_1 = .78525;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_15_1 = rot_return_value_1;\n"+
"pp_gunPod_1.xy *= rot_return_value_inlined_15_1;\n"+
"bump_gunPod_1 = sign(sin(pp_gunPod_1.z * 33.3)) * .003;\n"+
"p_sdBox_1 = pp_gunPod_1;\n"+
"b_sdBox_1 = vec3(.1 - bump_gunPod_1, .38 - bump_gunPod_1, .34);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_16_1 = sdBox_return_value_1;\n"+
"d_gunPod_1 = sdBox_return_value_inlined_16_1 - .02;\n"+
"pp_gunPod_1 = p_gunPod_1 - vec3(0, 0, - .6);\n"+
"pp_gunPod_1.x = abs(pp_gunPod_1.x) - .1;\n"+
"p_sdCappedCylinder_1 = pp_gunPod_1;\n"+
"h_sdCappedCylinder_1 = .06;\n"+
"r_sdCappedCylinder_1 = .15;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_17_1 = sdCappedCylinder_return_value_1;\n"+
"p_sdCappedCylinder_1 = pp_gunPod_1 + vec3(0, .12, - .05);\n"+
"h_sdCappedCylinder_1 = .06;\n"+
"r_sdCappedCylinder_1 = .05;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_18_1 = sdCappedCylinder_return_value_1;\n"+
"p_sdBox_1 = p_gunPod_1 + vec3(0, 0, .54);\n"+
"b_sdBox_1 = vec3(.1, .06, .04);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_19_1 = sdBox_return_value_1;\n"+
"d_gunPod_1 = min(min(min(d_gunPod_1, sdCappedCylinder_return_value_inlined_17_1), sdCappedCylinder_return_value_inlined_18_1), sdBox_return_value_inlined_19_1);\n"+
"if(d_gunPod_1 < r_gunPod_1.d)\n"+
"{\n"+
"p_sdCappedCylinder_1 = pp_gunPod_1 + vec3(0, 0, .1);\n"+
"h_sdCappedCylinder_1 = .03;\n"+
"r_sdCappedCylinder_1 = .2;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_20_1 = sdCappedCylinder_return_value_1;\n"+
"d_gunPod_1 = max(d_gunPod_1, - sdCappedCylinder_return_value_inlined_20_1);\n"+
"r_gunPod_1.d = d_gunPod_1;\n"+
"r_gunPod_1.mat = vec3(.02);\n"+
"}\n"+
"fireShock_has_returned_1 = false;\n"+
"fireShock_return_value_1 = abs(sin(edShoot_1 * 78.5375));\n"+
"fireShock_has_returned_1 = true;\n"+
"fireShock_return_value_inlined_21_1 = fireShock_return_value_1;\n"+
"fs_gunPod_1 = fireShock_return_value_inlined_21_1;\n"+
"if(fs_gunPod_1 > .5)\n"+
"{\n"+
"p_sdCappedCylinder_1 = pp_gunPod_1;\n"+
"h_sdCappedCylinder_1 = .01 + pp_gunPod_1.z * .05;\n"+
"r_sdCappedCylinder_1 = fract(fs_gunPod_1 * 3322.423) * .5 + .9;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_22_1 = sdCappedCylinder_return_value_1;\n"+
"d_gunPod_1 = sdCappedCylinder_return_value_inlined_22_1;\n"+
"if(d_gunPod_1 < r_gunPod_1.d)\n"+
"{\n"+
"r_gunPod_1.d = d_gunPod_1;\n"+
"r_gunPod_1.mat = vec3(1);\n"+
"glow_1 += .1 / (.01 + d_gunPod_1 * d_gunPod_1 * 4e2);\n"+
"}\n"+
"}\n"+
"gunPod_return_value_1 = r_gunPod_1;\n"+
"gunPod_has_returned_1 = true;\n"+
"gunPod_return_value_inlined_26_1 = gunPod_return_value_1;\n"+
"a_minResult_1 = r_arms_1;\n"+
"b_minResult_1 = gunPod_return_value_inlined_26_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_27_1 = minResult_return_value_1;\n"+
"arms_return_value_1 = minResult_return_value_inlined_27_1;\n"+
"arms_has_returned_1 = true;\n"+
"arms_return_value_inlined_67_1 = arms_return_value_1;\n"+
"a_minResult_1 = minResult_return_value_inlined_66_1;\n"+
"b_minResult_1 = arms_return_value_inlined_67_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_68_1 = minResult_return_value_1;\n"+
"ed209_return_value_1 = minResult_return_value_inlined_68_1;\n"+
"ed209_has_returned_1 = true;\n"+
"ed209_return_value_inlined_79_1 = ed209_return_value_1;\n"+
"a_minResult_1 = room_return_value_inlined_78_1;\n"+
"b_minResult_1 = ed209_return_value_inlined_79_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_80_1 = minResult_return_value_1;\n"+
"r_map_1 = minResult_return_value_inlined_80_1;\n"+
"gnd_map_1 = length(p_map_1.y + 3.);\n"+
"if(gnd_map_1 < r_map_1.d)\n"+
"{\n"+
"r_map_1.d = gnd_map_1;\n"+
"r_map_1.mat = vec3(.1);\n"+
"}\n"+
"map_return_value_1 = r_map_1;\n"+
"map_has_returned_1 = true;\n"+
"map_return_value_inlined_84_1 = map_return_value_1;\n"+
"p_map_1 = p_calcNormal_1 + e_calcNormal_1.xxx;\n"+
"map_has_returned_1 = false;\n"+
"p_room_1 = p_map_1;\n"+
"room_has_returned_1 = false;\n"+
"r_room_1.mat = vec3(.4);\n"+
"r_room_1.specPower = 1e7;\n"+
"xy_room_1 = p_room_1.xy - vec2(0, 2);\n"+
"p_room_1.x = abs(p_room_1.x);\n"+
"p_room_1.yz += vec2(.5, - 3.4);\n"+
"p_sdBox_1 = p_room_1;\n"+
"b_sdBox_1 = frameInner_room_1 + vec3(0, 0, 1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_69_1 = sdBox_return_value_1;\n"+
"doorHole_room_1 = sdBox_return_value_inlined_69_1;\n"+
"backWall_room_1 = length(p_room_1.z - 8.);\n"+
"r_room_1.d = min(backWall_room_1, max(length(p_room_1.z), - doorHole_room_1 + .1));\n"+
"if(r_room_1.d == backWall_room_1)\n"+
"{\n"+
"p_sdOctogon_1 = xy_room_1;\n"+
"r_sdOctogon_1 = 2.6;\n"+
"sdOctogon_has_returned_1 = false;\n"+
"p_sdOctogon_1 = abs(p_sdOctogon_1);\n"+
"p_sdOctogon_1 -= 2. * min(dot(k_sdOctogon_1.xy, p_sdOctogon_1), 0.) * k_sdOctogon_1.xy;\n"+
"p_sdOctogon_1 -= 2. * min(dot(vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y), p_sdOctogon_1), 0.) * vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y);\n"+
"p_sdOctogon_1 -= vec2(clamp(p_sdOctogon_1.x, - k_sdOctogon_1.z * r_sdOctogon_1, k_sdOctogon_1.z * r_sdOctogon_1), r_sdOctogon_1);\n"+
"sdOctogon_return_value_1 = length(p_sdOctogon_1) * sign(p_sdOctogon_1.y);\n"+
"sdOctogon_has_returned_1 = true;\n"+
"sdOctogon_return_value_inlined_70_1 = sdOctogon_return_value_1;\n"+
"p_sdOctogon_1 = xy_room_1;\n"+
"r_sdOctogon_1 = 1.9;\n"+
"sdOctogon_has_returned_1 = false;\n"+
"p_sdOctogon_1 = abs(p_sdOctogon_1);\n"+
"p_sdOctogon_1 -= 2. * min(dot(k_sdOctogon_1.xy, p_sdOctogon_1), 0.) * k_sdOctogon_1.xy;\n"+
"p_sdOctogon_1 -= 2. * min(dot(vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y), p_sdOctogon_1), 0.) * vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y);\n"+
"p_sdOctogon_1 -= vec2(clamp(p_sdOctogon_1.x, - k_sdOctogon_1.z * r_sdOctogon_1, k_sdOctogon_1.z * r_sdOctogon_1), r_sdOctogon_1);\n"+
"sdOctogon_return_value_1 = length(p_sdOctogon_1) * sign(p_sdOctogon_1.y);\n"+
"sdOctogon_has_returned_1 = true;\n"+
"sdOctogon_return_value_inlined_71_1 = sdOctogon_return_value_1;\n"+
"ocp_room_1 = min(abs(sdOctogon_return_value_inlined_70_1), abs(sdOctogon_return_value_inlined_71_1));\n"+
"p_sdOctogon_1 = xy_room_1;\n"+
"r_sdOctogon_1 = 1.2;\n"+
"sdOctogon_has_returned_1 = false;\n"+
"p_sdOctogon_1 = abs(p_sdOctogon_1);\n"+
"p_sdOctogon_1 -= 2. * min(dot(k_sdOctogon_1.xy, p_sdOctogon_1), 0.) * k_sdOctogon_1.xy;\n"+
"p_sdOctogon_1 -= 2. * min(dot(vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y), p_sdOctogon_1), 0.) * vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y);\n"+
"p_sdOctogon_1 -= vec2(clamp(p_sdOctogon_1.x, - k_sdOctogon_1.z * r_sdOctogon_1, k_sdOctogon_1.z * r_sdOctogon_1), r_sdOctogon_1);\n"+
"sdOctogon_return_value_1 = length(p_sdOctogon_1) * sign(p_sdOctogon_1.y);\n"+
"sdOctogon_has_returned_1 = true;\n"+
"sdOctogon_return_value_inlined_72_1 = sdOctogon_return_value_1;\n"+
"ocp_room_1 = min(max(ocp_room_1, min(.7 - abs(xy_room_1.x + 1.2), - xy_room_1.y)), max(abs(sdOctogon_return_value_inlined_72_1), min(xy_room_1.x, .7 - abs(xy_room_1.y))));\n"+
"if(ocp_room_1 < .3)\n"+
"{\n"+
"r_room_1.mat = vec3(.39, .57, .71);\n"+
"}\n"+
"}\n"+
"p_sdBox_1 = p_room_1;\n"+
"b_sdBox_1 = frameInner_room_1 + vec3(.4, .4, .1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_73_1 = sdBox_return_value_1;\n"+
"doorFrame_room_1 = max(sdBox_return_value_inlined_73_1, - doorHole_room_1);\n"+
"doorWidth_room_1 = frameInner_room_1.x * .5;\n"+
"p_room_1.x -= frameInner_room_1.x;\n"+
"a_rot_1 = doorOpen_1 * 2.1;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_74_1 = rot_return_value_1;\n"+
"p_room_1.xz *= rot_return_value_inlined_74_1;\n"+
"p_room_1.x += doorWidth_room_1;\n"+
"p_sdBox_1 = p_room_1;\n"+
"b_sdBox_1 = vec3(doorWidth_room_1, frameInner_room_1.yz);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_75_1 = sdBox_return_value_1;\n"+
"door_room_1 = sdBox_return_value_inlined_75_1;\n"+
"p_room_1 = abs(p_room_1) - vec3(doorWidth_room_1 * .5, 1.1, .14);\n"+
"p_sdBox_1 = p_room_1;\n"+
"b_sdBox_1 = vec3(.45, .9, .1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_76_1 = sdBox_return_value_1;\n"+
"p_sdBox_1 = p_room_1;\n"+
"b_sdBox_1 = vec3(.35, .8, 1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_77_1 = sdBox_return_value_1;\n"+
"d_room_1 = min(doorFrame_room_1, max(door_room_1, - max(sdBox_return_value_inlined_76_1, - sdBox_return_value_inlined_77_1)));\n"+
"if(d_room_1 < r_room_1.d)\n"+
"{\n"+
"r_room_1.d = d_room_1;\n"+
"r_room_1.mat = vec3(.02, .02, .024);\n"+
"r_room_1.specPower = 10.;\n"+
"}\n"+
"room_return_value_1 = r_room_1;\n"+
"room_has_returned_1 = true;\n"+
"room_return_value_inlined_78_1 = room_return_value_1;\n"+
"p_ed209_1 = p_map_1;\n"+
"ed209_has_returned_1 = false;\n"+
"f_legWalkAngle_1 = 2.;\n"+
"legWalkAngle_has_returned_1 = false;\n"+
"legWalkAngle_return_value_1 = sin(edWalk_1 * 3.141 * 6. * f_legWalkAngle_1) * .2;\n"+
"legWalkAngle_has_returned_1 = true;\n"+
"legWalkAngle_return_value_inlined_54_1 = legWalkAngle_return_value_1;\n"+
"edZ_has_returned_1 = false;\n"+
"edZ_return_value_1 = mix(5., - 2., edWalk_1);\n"+
"edZ_has_returned_1 = true;\n"+
"edZ_return_value_inlined_55_1 = edZ_return_value_1;\n"+
"p_ed209_1.yz += vec2(legWalkAngle_return_value_inlined_54_1 * .2 + .1, - edZ_return_value_inlined_55_1);\n"+
"p_legs_1 = p_ed209_1;\n"+
"legs_has_returned_1 = false;\n"+
"mat_setBodyMaterial_1 = r_legs_1;\n"+
"mat_setBodyMaterial_1.mat = vec3(.36, .45, .5);\n"+
"mat_setBodyMaterial_1.specPower = 30.;\n"+
"r_legs_1 = mat_setBodyMaterial_1;\n"+
"f_legWalkAngle_1 = 1.;\n"+
"legWalkAngle_has_returned_1 = false;\n"+
"legWalkAngle_return_value_1 = sin(edWalk_1 * 3.141 * 6. * f_legWalkAngle_1) * .2;\n"+
"legWalkAngle_has_returned_1 = true;\n"+
"legWalkAngle_return_value_inlined_45_1 = legWalkAngle_return_value_1;\n"+
"legAngle_legs_1 = legWalkAngle_return_value_inlined_45_1;\n"+
"p_legs_1.z += .27;\n"+
"a_rot_1 = legAngle_legs_1 * sign(p_legs_1.x);\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_46_1 = rot_return_value_1;\n"+
"p_legs_1.yz *= rot_return_value_inlined_46_1;\n"+
"p_legs_1.z -= .27;\n"+
"p_legs_1.y += .65;\n"+
"a_rot_1 = - .2;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_47_1 = rot_return_value_1;\n"+
"p_legs_1.yz *= rot_return_value_inlined_47_1;\n"+
"a_rot_1 = legAngle_legs_1 * .3;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_48_1 = rot_return_value_1;\n"+
"p_legs_1.xy *= rot_return_value_inlined_48_1;\n"+
"pp_legs_1 = p_legs_1;\n"+
"pp_legs_1.x = abs(pp_legs_1.x);\n"+
"pp_legs_1.y += .48;\n"+
"a_rot_1 = - .58525;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_49_1 = rot_return_value_1;\n"+
"pp_legs_1.yz *= rot_return_value_inlined_49_1;\n"+
"pp_legs_1.x -= .98;\n"+
"cp_legs_1 = pp_legs_1;\n"+
"p_legs_1 = pp_legs_1;\n"+
"pp_legs_1.xz = abs(pp_legs_1.xz) - vec2(.12, .25);\n"+
"p_legs_1.y += .68;\n"+
"p_legs_1.xy = abs(p_legs_1.xy) - .12;\n"+
"p_sdBox_1 = p_legs_1;\n"+
"b_sdBox_1 = vec3(.07, .05, 1.2);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_50_1 = sdBox_return_value_1;\n"+
"silver_legs_1 = sdBox_return_value_inlined_50_1;\n"+
"cp_legs_1 -= vec3(0, - .7, 0);\n"+
"p_sdBox_1 = cp_legs_1 - vec3(0, 0, 1.15);\n"+
"b_sdBox_1 = vec3(.17, .17, .07);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_51_1 = sdBox_return_value_1;\n"+
"r_legs_1.d = sdBox_return_value_inlined_51_1 - .04;\n"+
"cp_legs_1.z ++;\n"+
"p_sdChamferedCube_1 = cp_legs_1.xzy;\n"+
"r_sdChamferedCube_1 = vec2(.28 - sign(abs(cp_legs_1.z) - .3) * .01, .5).xyx;\n"+
"c_sdChamferedCube_1 = .18;\n"+
"sdChamferedCube_has_returned_1 = false;\n"+
"p_sdBox_1 = p_sdChamferedCube_1;\n"+
"b_sdBox_1 = r_sdChamferedCube_1;\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_0_1 = sdBox_return_value_1;\n"+
"cube_sdChamferedCube_1 = sdBox_return_value_inlined_0_1;\n"+
"a_rot_1 = .78525;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_1_1 = rot_return_value_1;\n"+
"p_sdChamferedCube_1.xz *= rot_return_value_inlined_1_1;\n"+
"r_sdChamferedCube_1.xz *= - c_sdChamferedCube_1 / 1.41 + 1.41;\n"+
"p_sdBox_1 = p_sdChamferedCube_1;\n"+
"b_sdBox_1 = r_sdChamferedCube_1;\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_2_1 = sdBox_return_value_1;\n"+
"sdChamferedCube_return_value_1 = max(cube_sdChamferedCube_1, sdBox_return_value_inlined_2_1);\n"+
"sdChamferedCube_has_returned_1 = true;\n"+
"sdChamferedCube_return_value_inlined_52_1 = sdChamferedCube_return_value_1;\n"+
"r_legs_1.d = min(r_legs_1.d, sdChamferedCube_return_value_inlined_52_1);\n"+
"p_foot_1 = cp_legs_1;\n"+
"foot_has_returned_1 = false;\n"+
"p_foot_1.z += .8;\n"+
"a_rot_1 = .86;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_29_1 = rot_return_value_1;\n"+
"p_foot_1.yz *= rot_return_value_inlined_29_1;\n"+
"p_toe_1 = p_foot_1;\n"+
"toe_has_returned_1 = false;\n"+
"p_toe_1.yz += vec2(.1, .32);\n"+
"p_sdBox_1 = p_toe_1;\n"+
"b_sdBox_1 = vec3(.3 + .2 * (p_toe_1.z - .18) - p_toe_1.y * .228, .3 + .2 * cos((p_toe_1.z - .18) * 3.69), .35);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_28_1 = sdBox_return_value_1;\n"+
"toe_return_value_1 = max(sdBox_return_value_inlined_28_1, .1 - p_toe_1.y);\n"+
"toe_has_returned_1 = true;\n"+
"toe_return_value_inlined_30_1 = toe_return_value_1;\n"+
"d_foot_1 = toe_return_value_inlined_30_1;\n"+
"a_rot_1 = 1.57;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_31_1 = rot_return_value_1;\n"+
"p_foot_1.xz *= rot_return_value_inlined_31_1;\n"+
"p_foot_1.x -= .43;\n"+
"p_foot_1.z = .25 - abs(p_foot_1.z);\n"+
"p_toe_1 = p_foot_1;\n"+
"toe_has_returned_1 = false;\n"+
"p_toe_1.yz += vec2(.1, .32);\n"+
"p_sdBox_1 = p_toe_1;\n"+
"b_sdBox_1 = vec3(.3 + .2 * (p_toe_1.z - .18) - p_toe_1.y * .228, .3 + .2 * cos((p_toe_1.z - .18) * 3.69), .35);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_28_1 = sdBox_return_value_1;\n"+
"toe_return_value_1 = max(sdBox_return_value_inlined_28_1, .1 - p_toe_1.y);\n"+
"toe_has_returned_1 = true;\n"+
"toe_return_value_inlined_32_1 = toe_return_value_1;\n"+
"foot_return_value_1 = min(d_foot_1, toe_return_value_inlined_32_1);\n"+
"foot_has_returned_1 = true;\n"+
"foot_return_value_inlined_53_1 = foot_return_value_1;\n"+
"r_legs_1.d = min(r_legs_1.d, foot_return_value_inlined_53_1);\n"+
"if(silver_legs_1 < r_legs_1.d)\n"+
"{\n"+
"r_legs_1.d = silver_legs_1;\n"+
"r_legs_1.mat = vec3(.8);\n"+
"}\n"+
"legs_return_value_1 = r_legs_1;\n"+
"legs_has_returned_1 = true;\n"+
"legs_return_value_inlined_56_1 = legs_return_value_1;\n"+
"r_ed209_1 = legs_return_value_inlined_56_1;\n"+
"f_ed209_1 = min(stretch_1 * 2., 1.);\n"+
"slide_ed209_1 = f_ed209_1 < .5 ? smoothstep(0., .5, f_ed209_1) : (1. - smoothstep(.5, 1., f_ed209_1) * .2);\n"+
"p_ed209_1.yz -= slide_ed209_1 * .5;\n"+
"gunsUp_1 = smoothstep(0., 1., clamp((stretch_1 - .66) * 6., 0., 1.));\n"+
"fireShock_has_returned_1 = false;\n"+
"fireShock_return_value_1 = abs(sin(edShoot_1 * 78.5375));\n"+
"fireShock_has_returned_1 = true;\n"+
"fireShock_return_value_inlined_57_1 = fireShock_return_value_1;\n"+
"gunsForward_1 = smoothstep(0., 1., clamp((stretch_1 - .83) * 6., 0., 1.)) + fireShock_return_value_inlined_57_1 * .5;\n"+
"p_waist_1 = p_ed209_1;\n"+
"waist_has_returned_1 = false;\n"+
"mat_setBodyMaterial_1 = r_waist_1;\n"+
"mat_setBodyMaterial_1.mat = vec3(.36, .45, .5);\n"+
"mat_setBodyMaterial_1.specPower = 30.;\n"+
"r_waist_1 = mat_setBodyMaterial_1;\n"+
"p_waist_1.y += .65;\n"+
"a_rot_1 = - .2;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_33_1 = rot_return_value_1;\n"+
"p_waist_1.yz *= rot_return_value_inlined_33_1;\n"+
"f_legWalkAngle_1 = 1.;\n"+
"legWalkAngle_has_returned_1 = false;\n"+
"legWalkAngle_return_value_1 = sin(edWalk_1 * 3.141 * 6. * f_legWalkAngle_1) * .2;\n"+
"legWalkAngle_has_returned_1 = true;\n"+
"legWalkAngle_return_value_inlined_34_1 = legWalkAngle_return_value_1;\n"+
"legAngle_waist_1 = legWalkAngle_return_value_inlined_34_1;\n"+
"a_rot_1 = legAngle_waist_1 * .3;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_35_1 = rot_return_value_1;\n"+
"p_waist_1.xy *= rot_return_value_inlined_35_1;\n"+
"pp_waist_1 = p_waist_1;\n"+
"pp_waist_1.y += .3;\n"+
"p_sdCappedCylinder_1 = pp_waist_1.zyx;\n"+
"h_sdCappedCylinder_1 = .5;\n"+
"r_sdCappedCylinder_1 = .5;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_36_1 = sdCappedCylinder_return_value_1;\n"+
"r_waist_1.d = max(sdCappedCylinder_return_value_inlined_36_1, p_waist_1.y + .15);\n"+
"bump_waist_1 = .5 - abs(sin(p_waist_1.y * 40.)) * .03;\n"+
"p_sdBox_1 = p_waist_1;\n"+
"b_sdBox_1 = vec3(bump_waist_1, .15, bump_waist_1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_37_1 = sdBox_return_value_1;\n"+
"d_waist_1 = sdBox_return_value_inlined_37_1;\n"+
"bump_waist_1 = .3 - abs(sin(p_waist_1.x * 40.)) * .03;\n"+
"pp_waist_1.y += .18;\n"+
"p_sdCappedCylinder_1 = pp_waist_1.zyx;\n"+
"h_sdCappedCylinder_1 = bump_waist_1;\n"+
"r_sdCappedCylinder_1 = .75;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_38_1 = sdCappedCylinder_return_value_1;\n"+
"d_waist_1 = min(d_waist_1, sdCappedCylinder_return_value_inlined_38_1);\n"+
"pp_waist_1.x = abs(pp_waist_1.x);\n"+
"a_rot_1 = - .58525 + legAngle_waist_1 * sign(p_waist_1.x);\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_39_1 = rot_return_value_1;\n"+
"pp_waist_1.yz *= rot_return_value_inlined_39_1;\n"+
"pp_waist_1.x -= .98;\n"+
"p_sdCappedCylinder_1 = pp_waist_1.zyx;\n"+
"h_sdCappedCylinder_1 = .4;\n"+
"r_sdCappedCylinder_1 = .24;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_40_1 = sdCappedCylinder_return_value_1;\n"+
"r_waist_1.d = min(r_waist_1.d, max(sdCappedCylinder_return_value_inlined_40_1, - pp_waist_1.y));\n"+
"p_sdBox_1 = pp_waist_1;\n"+
"b_sdBox_1 = vec3(.24, .2, .14 + .2 * pp_waist_1.y);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_41_1 = sdBox_return_value_1;\n"+
"r_waist_1.d = min(r_waist_1.d, sdBox_return_value_inlined_41_1);\n"+
"p_waist_1 = pp_waist_1;\n"+
"pp_waist_1.xz = abs(pp_waist_1.xz) - vec2(.12, .25);\n"+
"p_sdCappedCylinder_1 = pp_waist_1.xzy;\n"+
"h_sdCappedCylinder_1 = .1;\n"+
"r_sdCappedCylinder_1 = .325;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_42_1 = sdCappedCylinder_return_value_1;\n"+
"p_sdCappedCylinder_1 = pp_waist_1.xzy;\n"+
"h_sdCappedCylinder_1 = .05;\n"+
"r_sdCappedCylinder_1 = .5;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_43_1 = sdCappedCylinder_return_value_1;\n"+
"r_waist_1.d = min(r_waist_1.d, max(min(sdCappedCylinder_return_value_inlined_42_1, sdCappedCylinder_return_value_inlined_43_1), pp_waist_1.y));\n"+
"p_waist_1.y += .68;\n"+
"p_sdBox_1 = p_waist_1;\n"+
"b_sdBox_1 = vec3(sign(abs(p_waist_1.y) - .04) * .005 + .26, .2, .34);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_44_1 = sdBox_return_value_1;\n"+
"r_waist_1.d = min(r_waist_1.d, sdBox_return_value_inlined_44_1);\n"+
"if(d_waist_1 < r_waist_1.d)\n"+
"{\n"+
"r_waist_1.d = d_waist_1;\n"+
"r_waist_1.mat = vec3(.02);\n"+
"}\n"+
"waist_return_value_1 = r_waist_1;\n"+
"waist_has_returned_1 = true;\n"+
"waist_return_value_inlined_58_1 = waist_return_value_1;\n"+
"a_minResult_1 = r_ed209_1;\n"+
"b_minResult_1 = waist_return_value_inlined_58_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_59_1 = minResult_return_value_1;\n"+
"r_ed209_1 = minResult_return_value_inlined_59_1;\n"+
"f_legWalkAngle_1 = 2.;\n"+
"legWalkAngle_has_returned_1 = false;\n"+
"legWalkAngle_return_value_1 = sin(edWalk_1 * 3.141 * 6. * f_legWalkAngle_1) * .2;\n"+
"legWalkAngle_has_returned_1 = true;\n"+
"legWalkAngle_return_value_inlined_60_1 = legWalkAngle_return_value_1;\n"+
"a_rot_1 = .1 * (- edDown_1 + legWalkAngle_return_value_inlined_60_1 + smoothstep(0., 1., clamp((stretch_1 - .5) * 6., 0., 1.)) - 1.);\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_61_1 = rot_return_value_1;\n"+
"p_ed209_1.yz *= rot_return_value_inlined_61_1;\n"+
"a_rot_1 = edTwist_1 * .2;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_62_1 = rot_return_value_1;\n"+
"p_ed209_1.xz *= rot_return_value_inlined_62_1;\n"+
"p_headLower_1 = p_ed209_1;\n"+
"headLower_has_returned_1 = false;\n"+
"op_headLower_1 = p_headLower_1;\n"+
"p_headVisor_1 = p_headLower_1 * vec3(.95, - 1.4, .95);\n"+
"h_headVisor_1 = 1.;\n"+
"bump_headVisor_1 = 0.;\n"+
"headVisor_has_returned_1 = false;\n"+
"bump_headVisor_1 *= sin(p_headVisor_1.x * 150.) * sin(p_headVisor_1.y * 150.) * .002;\n"+
"p_sdBox_1 = p_headVisor_1;\n"+
"b_sdBox_1 = vec3(1, h_headVisor_1, 2);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_3_1 = sdBox_return_value_1;\n"+
"result_headVisor_1.d = sdBox_return_value_inlined_3_1;\n"+
"p_headSphere_1 = p_headVisor_1;\n"+
"headSphere_has_returned_1 = false;\n"+
"headSphere_return_value_1 = (length(p_headSphere_1 / vec3(1, .8, 1)) - 1.) * .8;\n"+
"headSphere_has_returned_1 = true;\n"+
"headSphere_return_value_inlined_4_1 = headSphere_return_value_1;\n"+
"result_headVisor_1.d = max(mix(result_headVisor_1.d, headSphere_return_value_inlined_4_1, .57), - p_headVisor_1.y) - bump_headVisor_1;\n"+
"result_headVisor_1.mat = vec3(.05);\n"+
"result_headVisor_1.specPower = 30.;\n"+
"headVisor_return_value_1 = result_headVisor_1;\n"+
"headVisor_has_returned_1 = true;\n"+
"headVisor_return_value_inlined_5_1 = headVisor_return_value_1;\n"+
"r_headLower_1 = headVisor_return_value_inlined_5_1;\n"+
"p_headVisor_1 = (p_headLower_1 + vec3(0, .01, 0)) * vec3(.95);\n"+
"h_headVisor_1 = 1.;\n"+
"bump_headVisor_1 = 0.;\n"+
"headVisor_has_returned_1 = false;\n"+
"bump_headVisor_1 *= sin(p_headVisor_1.x * 150.) * sin(p_headVisor_1.y * 150.) * .002;\n"+
"p_sdBox_1 = p_headVisor_1;\n"+
"b_sdBox_1 = vec3(1, h_headVisor_1, 2);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_3_1 = sdBox_return_value_1;\n"+
"result_headVisor_1.d = sdBox_return_value_inlined_3_1;\n"+
"p_headSphere_1 = p_headVisor_1;\n"+
"headSphere_has_returned_1 = false;\n"+
"headSphere_return_value_1 = (length(p_headSphere_1 / vec3(1, .8, 1)) - 1.) * .8;\n"+
"headSphere_has_returned_1 = true;\n"+
"headSphere_return_value_inlined_4_1 = headSphere_return_value_1;\n"+
"result_headVisor_1.d = max(mix(result_headVisor_1.d, headSphere_return_value_inlined_4_1, .57), - p_headVisor_1.y) - bump_headVisor_1;\n"+
"result_headVisor_1.mat = vec3(.05);\n"+
"result_headVisor_1.specPower = 30.;\n"+
"headVisor_return_value_1 = result_headVisor_1;\n"+
"headVisor_has_returned_1 = true;\n"+
"headVisor_return_value_inlined_6_1 = headVisor_return_value_1;\n"+
"r_headLower_1.d = min(r_headLower_1.d, max(max(headVisor_return_value_inlined_6_1.d, p_headLower_1.y - .35), p_headLower_1.y * .625 - p_headLower_1.z - .66));\n"+
"a_rot_1 = .075 * (gunsUp_1 - 1.) * sign(p_headLower_1.x);\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_7_1 = rot_return_value_1;\n"+
"p_headLower_1.xy *= rot_return_value_inlined_7_1;\n"+
"p_headLower_1.x = abs(p_headLower_1.x) - 1.33;\n"+
"p_headLower_1.y -= .1 - p_headLower_1.x * .1;\n"+
"p_sdBox_1 = p_headLower_1;\n"+
"b_sdBox_1 = vec3(.4, .06 * (1. - p_headLower_1.x), .3 - p_headLower_1.x * .2);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_8_1 = sdBox_return_value_1;\n"+
"r_headLower_1.d = min(r_headLower_1.d, sdBox_return_value_inlined_8_1);\n"+
"p_headLower_1 = op_headLower_1;\n"+
"p_headLower_1.y = abs(abs(p_headLower_1.y + .147) - .0556) - .0278;\n"+
"p_sdBox_1 = p_headLower_1 + vec3(0, 0, 1.5);\n"+
"b_sdBox_1 = vec3(mix(.25, .55, - op_headLower_1.y), .015, .1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_9_1 = sdBox_return_value_1;\n"+
"r_headLower_1.d = max(r_headLower_1.d, - sdBox_return_value_inlined_9_1);\n"+
"p_headLower_1 = op_headLower_1;\n"+
"p_headLower_1.y = abs(p_headLower_1.y + .16) - .06;\n"+
"p_headLower_1.z -= - 1.1;\n"+
"p_sdCappedCylinder_1 = p_headLower_1.xzy;\n"+
"h_sdCappedCylinder_1 = 1.;\n"+
"r_sdCappedCylinder_1 = .03;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_10_1 = sdCappedCylinder_return_value_1;\n"+
"p_sdCappedCylinder_1 = p_headLower_1.xzy;\n"+
"h_sdCappedCylinder_1 = .55;\n"+
"r_sdCappedCylinder_1 = 1.;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_11_1 = sdCappedCylinder_return_value_1;\n"+
"r_headLower_1.d = max(r_headLower_1.d, - max(max(sdCappedCylinder_return_value_inlined_10_1, - sdCappedCylinder_return_value_inlined_11_1), p_headLower_1.z + .2));\n"+
"mat_setBodyMaterial_1 = r_headLower_1;\n"+
"mat_setBodyMaterial_1.mat = vec3(.36, .45, .5);\n"+
"mat_setBodyMaterial_1.specPower = 30.;\n"+
"r_headLower_1 = mat_setBodyMaterial_1;\n"+
"headLower_return_value_1 = r_headLower_1;\n"+
"headLower_has_returned_1 = true;\n"+
"headLower_return_value_inlined_63_1 = headLower_return_value_1;\n"+
"a_minResult_1 = r_ed209_1;\n"+
"b_minResult_1 = headLower_return_value_inlined_63_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_64_1 = minResult_return_value_1;\n"+
"p_headVisor_1 = p_ed209_1;\n"+
"h_headVisor_1 = .8;\n"+
"bump_headVisor_1 = 1.;\n"+
"headVisor_has_returned_1 = false;\n"+
"bump_headVisor_1 *= sin(p_headVisor_1.x * 150.) * sin(p_headVisor_1.y * 150.) * .002;\n"+
"p_sdBox_1 = p_headVisor_1;\n"+
"b_sdBox_1 = vec3(1, h_headVisor_1, 2);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_3_1 = sdBox_return_value_1;\n"+
"result_headVisor_1.d = sdBox_return_value_inlined_3_1;\n"+
"p_headSphere_1 = p_headVisor_1;\n"+
"headSphere_has_returned_1 = false;\n"+
"headSphere_return_value_1 = (length(p_headSphere_1 / vec3(1, .8, 1)) - 1.) * .8;\n"+
"headSphere_has_returned_1 = true;\n"+
"headSphere_return_value_inlined_4_1 = headSphere_return_value_1;\n"+
"result_headVisor_1.d = max(mix(result_headVisor_1.d, headSphere_return_value_inlined_4_1, .57), - p_headVisor_1.y) - bump_headVisor_1;\n"+
"result_headVisor_1.mat = vec3(.05);\n"+
"result_headVisor_1.specPower = 30.;\n"+
"headVisor_return_value_1 = result_headVisor_1;\n"+
"headVisor_has_returned_1 = true;\n"+
"headVisor_return_value_inlined_65_1 = headVisor_return_value_1;\n"+
"a_minResult_1 = minResult_return_value_inlined_64_1;\n"+
"b_minResult_1 = headVisor_return_value_inlined_65_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_66_1 = minResult_return_value_1;\n"+
"p_arms_1 = p_ed209_1;\n"+
"arms_has_returned_1 = false;\n"+
"mat_setBodyMaterial_1 = r_arms_1;\n"+
"mat_setBodyMaterial_1.mat = vec3(.36, .45, .5);\n"+
"mat_setBodyMaterial_1.specPower = 30.;\n"+
"r_arms_1 = mat_setBodyMaterial_1;\n"+
"p_arms_1.x = abs(p_arms_1.x);\n"+
"p_arms_1.yz += vec2(.24, 0);\n"+
"a_rot_1 = .15 * (gunsUp_1 - 1.);\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_23_1 = rot_return_value_1;\n"+
"p_arms_1.xy *= rot_return_value_inlined_23_1;\n"+
"p_sdCapsule_1 = p_arms_1;\n"+
"a_sdCapsule_1 = vec3(0);\n"+
"b_sdCapsule_1 = vec3(1.5, 0, 0);\n"+
"r_sdCapsule_1 = .2;\n"+
"sdCapsule_has_returned_1 = false;\n"+
"pa_sdCapsule_1 = p_sdCapsule_1 - a_sdCapsule_1;\n"+
"ba_sdCapsule_1 = b_sdCapsule_1 - a_sdCapsule_1;\n"+
"sdCapsule_return_value_1 = length(pa_sdCapsule_1 - ba_sdCapsule_1 * clamp(dot(pa_sdCapsule_1, ba_sdCapsule_1) / dot(ba_sdCapsule_1, ba_sdCapsule_1), 0., 1.)) - r_sdCapsule_1;\n"+
"sdCapsule_has_returned_1 = true;\n"+
"sdCapsule_return_value_inlined_24_1 = sdCapsule_return_value_1;\n"+
"p_sdCapsule_1 = p_arms_1;\n"+
"a_sdCapsule_1 = vec3(1.5, 0, 0);\n"+
"b_sdCapsule_1 = wrist_arms_1;\n"+
"r_sdCapsule_1 = .2;\n"+
"sdCapsule_has_returned_1 = false;\n"+
"pa_sdCapsule_1 = p_sdCapsule_1 - a_sdCapsule_1;\n"+
"ba_sdCapsule_1 = b_sdCapsule_1 - a_sdCapsule_1;\n"+
"sdCapsule_return_value_1 = length(pa_sdCapsule_1 - ba_sdCapsule_1 * clamp(dot(pa_sdCapsule_1, ba_sdCapsule_1) / dot(ba_sdCapsule_1, ba_sdCapsule_1), 0., 1.)) - r_sdCapsule_1;\n"+
"sdCapsule_has_returned_1 = true;\n"+
"sdCapsule_return_value_inlined_25_1 = sdCapsule_return_value_1;\n"+
"r_arms_1.d = min(sdCapsule_return_value_inlined_24_1, sdCapsule_return_value_inlined_25_1);\n"+
"p_arms_1 -= wrist_arms_1;\n"+
"p_arms_1.z -= gunsForward_1 * .15;\n"+
"p_gunPod_1 = p_arms_1;\n"+
"gunPod_has_returned_1 = false;\n"+
"mat_setBodyMaterial_1 = r_gunPod_1;\n"+
"mat_setBodyMaterial_1.mat = vec3(.36, .45, .5);\n"+
"mat_setBodyMaterial_1.specPower = 30.;\n"+
"r_gunPod_1 = mat_setBodyMaterial_1;\n"+
"p_gunPod_1.yz += vec2(.1, .45);\n"+
"pp_gunPod_1 = p_gunPod_1;\n"+
"pp_gunPod_1.z = abs(pp_gunPod_1.z) - .5;\n"+
"p_sdCappedCone_1 = pp_gunPod_1;\n"+
"a_sdCappedCone_1 = vec3(0);\n"+
"b_sdCappedCone_1 = vec3(0, 0, - .1);\n"+
"ra_sdCappedCone_1 = .35 - .1;\n"+
"rb_sdCappedCone_1 = .35;\n"+
"sdCappedCone_has_returned_1 = false;\n"+
"rba_sdCappedCone_1 = rb_sdCappedCone_1 - ra_sdCappedCone_1;\n"+
"baba_sdCappedCone_1 = dot(b_sdCappedCone_1 - a_sdCappedCone_1, b_sdCappedCone_1 - a_sdCappedCone_1);\n"+
"papa_sdCappedCone_1 = dot(p_sdCappedCone_1 - a_sdCappedCone_1, p_sdCappedCone_1 - a_sdCappedCone_1);\n"+
"paba_sdCappedCone_1 = dot(p_sdCappedCone_1 - a_sdCappedCone_1, b_sdCappedCone_1 - a_sdCappedCone_1) / baba_sdCappedCone_1;\n"+
"x_sdCappedCone_1 = sqrt(papa_sdCappedCone_1 - paba_sdCappedCone_1 * paba_sdCappedCone_1 * baba_sdCappedCone_1);\n"+
"cax_sdCappedCone_1 = max(0., x_sdCappedCone_1 - ((paba_sdCappedCone_1 < .5) ? ra_sdCappedCone_1 : rb_sdCappedCone_1));\n"+
"cay_sdCappedCone_1 = abs(paba_sdCappedCone_1 - .5) - .5;\n"+
"f_sdCappedCone_1 = clamp((rba_sdCappedCone_1 * (x_sdCappedCone_1 - ra_sdCappedCone_1) + paba_sdCappedCone_1 * baba_sdCappedCone_1) / (rba_sdCappedCone_1 * rba_sdCappedCone_1 + baba_sdCappedCone_1), 0., 1.);\n"+
"cbx_sdCappedCone_1 = x_sdCappedCone_1 - ra_sdCappedCone_1 - f_sdCappedCone_1 * rba_sdCappedCone_1;\n"+
"cby_sdCappedCone_1 = paba_sdCappedCone_1 - f_sdCappedCone_1;\n"+
"sdCappedCone_return_value_1 = ((cbx_sdCappedCone_1 < 0. && cay_sdCappedCone_1 < 0.) ? - 1. : 1.) * sqrt(min(cax_sdCappedCone_1 * cax_sdCappedCone_1 + cay_sdCappedCone_1 * cay_sdCappedCone_1 * baba_sdCappedCone_1, cbx_sdCappedCone_1 * cbx_sdCappedCone_1 + cby_sdCappedCone_1 * cby_sdCappedCone_1 * baba_sdCappedCone_1));\n"+
"sdCappedCone_has_returned_1 = true;\n"+
"sdCappedCone_return_value_inlined_12_1 = sdCappedCone_return_value_1;\n"+
"r_gunPod_1.d = sdCappedCone_return_value_inlined_12_1;\n"+
"p_sdCappedCylinder_1 = p_gunPod_1;\n"+
"h_sdCappedCylinder_1 = .35;\n"+
"r_sdCappedCylinder_1 = .4;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_13_1 = sdCappedCylinder_return_value_1;\n"+
"r_gunPod_1.d = min(r_gunPod_1.d, sdCappedCylinder_return_value_inlined_13_1);\n"+
"pp_gunPod_1 = vec3(p_gunPod_1.x, .28 - p_gunPod_1.y, p_gunPod_1.z);\n"+
"p_sdTriPrism_1 = pp_gunPod_1;\n"+
"h_sdTriPrism_1 = vec2(.1, .5);\n"+
"sdTriPrism_has_returned_1 = false;\n"+
"q_sdTriPrism_1 = abs(p_sdTriPrism_1);\n"+
"sdTriPrism_return_value_1 = max(q_sdTriPrism_1.z - h_sdTriPrism_1.y, max(q_sdTriPrism_1.x * .866025 + p_sdTriPrism_1.y * .5, - p_sdTriPrism_1.y) - h_sdTriPrism_1.x * .5);\n"+
"sdTriPrism_has_returned_1 = true;\n"+
"sdTriPrism_return_value_inlined_14_1 = sdTriPrism_return_value_1;\n"+
"r_gunPod_1.d = min(r_gunPod_1.d, sdTriPrism_return_value_inlined_14_1);\n"+
"pp_gunPod_1 = p_gunPod_1;\n"+
"pp_gunPod_1.x = abs(p_gunPod_1.x);\n"+
"a_rot_1 = .78525;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_15_1 = rot_return_value_1;\n"+
"pp_gunPod_1.xy *= rot_return_value_inlined_15_1;\n"+
"bump_gunPod_1 = sign(sin(pp_gunPod_1.z * 33.3)) * .003;\n"+
"p_sdBox_1 = pp_gunPod_1;\n"+
"b_sdBox_1 = vec3(.1 - bump_gunPod_1, .38 - bump_gunPod_1, .34);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_16_1 = sdBox_return_value_1;\n"+
"d_gunPod_1 = sdBox_return_value_inlined_16_1 - .02;\n"+
"pp_gunPod_1 = p_gunPod_1 - vec3(0, 0, - .6);\n"+
"pp_gunPod_1.x = abs(pp_gunPod_1.x) - .1;\n"+
"p_sdCappedCylinder_1 = pp_gunPod_1;\n"+
"h_sdCappedCylinder_1 = .06;\n"+
"r_sdCappedCylinder_1 = .15;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_17_1 = sdCappedCylinder_return_value_1;\n"+
"p_sdCappedCylinder_1 = pp_gunPod_1 + vec3(0, .12, - .05);\n"+
"h_sdCappedCylinder_1 = .06;\n"+
"r_sdCappedCylinder_1 = .05;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_18_1 = sdCappedCylinder_return_value_1;\n"+
"p_sdBox_1 = p_gunPod_1 + vec3(0, 0, .54);\n"+
"b_sdBox_1 = vec3(.1, .06, .04);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_19_1 = sdBox_return_value_1;\n"+
"d_gunPod_1 = min(min(min(d_gunPod_1, sdCappedCylinder_return_value_inlined_17_1), sdCappedCylinder_return_value_inlined_18_1), sdBox_return_value_inlined_19_1);\n"+
"if(d_gunPod_1 < r_gunPod_1.d)\n"+
"{\n"+
"p_sdCappedCylinder_1 = pp_gunPod_1 + vec3(0, 0, .1);\n"+
"h_sdCappedCylinder_1 = .03;\n"+
"r_sdCappedCylinder_1 = .2;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_20_1 = sdCappedCylinder_return_value_1;\n"+
"d_gunPod_1 = max(d_gunPod_1, - sdCappedCylinder_return_value_inlined_20_1);\n"+
"r_gunPod_1.d = d_gunPod_1;\n"+
"r_gunPod_1.mat = vec3(.02);\n"+
"}\n"+
"fireShock_has_returned_1 = false;\n"+
"fireShock_return_value_1 = abs(sin(edShoot_1 * 78.5375));\n"+
"fireShock_has_returned_1 = true;\n"+
"fireShock_return_value_inlined_21_1 = fireShock_return_value_1;\n"+
"fs_gunPod_1 = fireShock_return_value_inlined_21_1;\n"+
"if(fs_gunPod_1 > .5)\n"+
"{\n"+
"p_sdCappedCylinder_1 = pp_gunPod_1;\n"+
"h_sdCappedCylinder_1 = .01 + pp_gunPod_1.z * .05;\n"+
"r_sdCappedCylinder_1 = fract(fs_gunPod_1 * 3322.423) * .5 + .9;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_22_1 = sdCappedCylinder_return_value_1;\n"+
"d_gunPod_1 = sdCappedCylinder_return_value_inlined_22_1;\n"+
"if(d_gunPod_1 < r_gunPod_1.d)\n"+
"{\n"+
"r_gunPod_1.d = d_gunPod_1;\n"+
"r_gunPod_1.mat = vec3(1);\n"+
"glow_1 += .1 / (.01 + d_gunPod_1 * d_gunPod_1 * 4e2);\n"+
"}\n"+
"}\n"+
"gunPod_return_value_1 = r_gunPod_1;\n"+
"gunPod_has_returned_1 = true;\n"+
"gunPod_return_value_inlined_26_1 = gunPod_return_value_1;\n"+
"a_minResult_1 = r_arms_1;\n"+
"b_minResult_1 = gunPod_return_value_inlined_26_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_27_1 = minResult_return_value_1;\n"+
"arms_return_value_1 = minResult_return_value_inlined_27_1;\n"+
"arms_has_returned_1 = true;\n"+
"arms_return_value_inlined_67_1 = arms_return_value_1;\n"+
"a_minResult_1 = minResult_return_value_inlined_66_1;\n"+
"b_minResult_1 = arms_return_value_inlined_67_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_68_1 = minResult_return_value_1;\n"+
"ed209_return_value_1 = minResult_return_value_inlined_68_1;\n"+
"ed209_has_returned_1 = true;\n"+
"ed209_return_value_inlined_79_1 = ed209_return_value_1;\n"+
"a_minResult_1 = room_return_value_inlined_78_1;\n"+
"b_minResult_1 = ed209_return_value_inlined_79_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_80_1 = minResult_return_value_1;\n"+
"r_map_1 = minResult_return_value_inlined_80_1;\n"+
"gnd_map_1 = length(p_map_1.y + 3.);\n"+
"if(gnd_map_1 < r_map_1.d)\n"+
"{\n"+
"r_map_1.d = gnd_map_1;\n"+
"r_map_1.mat = vec3(.1);\n"+
"}\n"+
"map_return_value_1 = r_map_1;\n"+
"map_has_returned_1 = true;\n"+
"map_return_value_inlined_85_1 = map_return_value_1;\n"+
"calcNormal_return_value_1 = normalize(e_calcNormal_1.xyy * map_return_value_inlined_82_1.d + e_calcNormal_1.yyx * map_return_value_inlined_83_1.d + e_calcNormal_1.yxy * map_return_value_inlined_84_1.d + e_calcNormal_1.xxx * map_return_value_inlined_85_1.d);\n"+
"calcNormal_has_returned_1 = true;\n"+
"calcNormal_return_value_inlined_87_1 = calcNormal_return_value_1;\n"+
"n_applyLighting_1 = calcNormal_return_value_inlined_87_1;\n"+
"primary_applyLighting_1 = max(0., dot(sunDir_applyLighting_1, n_applyLighting_1));\n"+
"bounce_applyLighting_1 = max(0., dot(- sunDir_applyLighting_1, n_applyLighting_1)) * .2;\n"+
"spe_applyLighting_1 = pow(max(max(0., dot(rd_applyLighting_1, reflect(sunDir_applyLighting_1, n_applyLighting_1))), 1e-9), data_applyLighting_1.specPower) * 2.;\n"+
"fre_applyLighting_1 = smoothstep(.7, 1., 1. + dot(rd_applyLighting_1, n_applyLighting_1));\n"+
"fog_applyLighting_1 = exp(- length(p_applyLighting_1) * .05);\n"+
"p_calcShadow_1 = p_applyLighting_1;\n"+
"lightPos_calcShadow_1 = vec3(10, 10, - 10);\n"+
"calcShadow_has_returned_1 = false;\n"+
"rd_calcShadow_1 = normalize(lightPos_calcShadow_1 - p_calcShadow_1);\n"+
"res_calcShadow_1 = 1.;\n"+
"t_calcShadow_1 = .1;\n"+
"for(   i_calcShadow_1 = 0.;\n"+
"i_calcShadow_1 < 30.; i_calcShadow_1 ++)\n"+
"{\n"+
"p_map_1 = p_calcShadow_1 + rd_calcShadow_1 * t_calcShadow_1;\n"+
"map_has_returned_1 = false;\n"+
"p_room_1 = p_map_1;\n"+
"room_has_returned_1 = false;\n"+
"r_room_1.mat = vec3(.4);\n"+
"r_room_1.specPower = 1e7;\n"+
"xy_room_1 = p_room_1.xy - vec2(0, 2);\n"+
"p_room_1.x = abs(p_room_1.x);\n"+
"p_room_1.yz += vec2(.5, - 3.4);\n"+
"p_sdBox_1 = p_room_1;\n"+
"b_sdBox_1 = frameInner_room_1 + vec3(0, 0, 1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_69_1 = sdBox_return_value_1;\n"+
"doorHole_room_1 = sdBox_return_value_inlined_69_1;\n"+
"backWall_room_1 = length(p_room_1.z - 8.);\n"+
"r_room_1.d = min(backWall_room_1, max(length(p_room_1.z), - doorHole_room_1 + .1));\n"+
"if(r_room_1.d == backWall_room_1)\n"+
"{\n"+
"p_sdOctogon_1 = xy_room_1;\n"+
"r_sdOctogon_1 = 2.6;\n"+
"sdOctogon_has_returned_1 = false;\n"+
"p_sdOctogon_1 = abs(p_sdOctogon_1);\n"+
"p_sdOctogon_1 -= 2. * min(dot(k_sdOctogon_1.xy, p_sdOctogon_1), 0.) * k_sdOctogon_1.xy;\n"+
"p_sdOctogon_1 -= 2. * min(dot(vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y), p_sdOctogon_1), 0.) * vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y);\n"+
"p_sdOctogon_1 -= vec2(clamp(p_sdOctogon_1.x, - k_sdOctogon_1.z * r_sdOctogon_1, k_sdOctogon_1.z * r_sdOctogon_1), r_sdOctogon_1);\n"+
"sdOctogon_return_value_1 = length(p_sdOctogon_1) * sign(p_sdOctogon_1.y);\n"+
"sdOctogon_has_returned_1 = true;\n"+
"sdOctogon_return_value_inlined_70_1 = sdOctogon_return_value_1;\n"+
"p_sdOctogon_1 = xy_room_1;\n"+
"r_sdOctogon_1 = 1.9;\n"+
"sdOctogon_has_returned_1 = false;\n"+
"p_sdOctogon_1 = abs(p_sdOctogon_1);\n"+
"p_sdOctogon_1 -= 2. * min(dot(k_sdOctogon_1.xy, p_sdOctogon_1), 0.) * k_sdOctogon_1.xy;\n"+
"p_sdOctogon_1 -= 2. * min(dot(vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y), p_sdOctogon_1), 0.) * vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y);\n"+
"p_sdOctogon_1 -= vec2(clamp(p_sdOctogon_1.x, - k_sdOctogon_1.z * r_sdOctogon_1, k_sdOctogon_1.z * r_sdOctogon_1), r_sdOctogon_1);\n"+
"sdOctogon_return_value_1 = length(p_sdOctogon_1) * sign(p_sdOctogon_1.y);\n"+
"sdOctogon_has_returned_1 = true;\n"+
"sdOctogon_return_value_inlined_71_1 = sdOctogon_return_value_1;\n"+
"ocp_room_1 = min(abs(sdOctogon_return_value_inlined_70_1), abs(sdOctogon_return_value_inlined_71_1));\n"+
"p_sdOctogon_1 = xy_room_1;\n"+
"r_sdOctogon_1 = 1.2;\n"+
"sdOctogon_has_returned_1 = false;\n"+
"p_sdOctogon_1 = abs(p_sdOctogon_1);\n"+
"p_sdOctogon_1 -= 2. * min(dot(k_sdOctogon_1.xy, p_sdOctogon_1), 0.) * k_sdOctogon_1.xy;\n"+
"p_sdOctogon_1 -= 2. * min(dot(vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y), p_sdOctogon_1), 0.) * vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y);\n"+
"p_sdOctogon_1 -= vec2(clamp(p_sdOctogon_1.x, - k_sdOctogon_1.z * r_sdOctogon_1, k_sdOctogon_1.z * r_sdOctogon_1), r_sdOctogon_1);\n"+
"sdOctogon_return_value_1 = length(p_sdOctogon_1) * sign(p_sdOctogon_1.y);\n"+
"sdOctogon_has_returned_1 = true;\n"+
"sdOctogon_return_value_inlined_72_1 = sdOctogon_return_value_1;\n"+
"ocp_room_1 = min(max(ocp_room_1, min(.7 - abs(xy_room_1.x + 1.2), - xy_room_1.y)), max(abs(sdOctogon_return_value_inlined_72_1), min(xy_room_1.x, .7 - abs(xy_room_1.y))));\n"+
"if(ocp_room_1 < .3)\n"+
"{\n"+
"r_room_1.mat = vec3(.39, .57, .71);\n"+
"}\n"+
"}\n"+
"p_sdBox_1 = p_room_1;\n"+
"b_sdBox_1 = frameInner_room_1 + vec3(.4, .4, .1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_73_1 = sdBox_return_value_1;\n"+
"doorFrame_room_1 = max(sdBox_return_value_inlined_73_1, - doorHole_room_1);\n"+
"doorWidth_room_1 = frameInner_room_1.x * .5;\n"+
"p_room_1.x -= frameInner_room_1.x;\n"+
"a_rot_1 = doorOpen_1 * 2.1;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_74_1 = rot_return_value_1;\n"+
"p_room_1.xz *= rot_return_value_inlined_74_1;\n"+
"p_room_1.x += doorWidth_room_1;\n"+
"p_sdBox_1 = p_room_1;\n"+
"b_sdBox_1 = vec3(doorWidth_room_1, frameInner_room_1.yz);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_75_1 = sdBox_return_value_1;\n"+
"door_room_1 = sdBox_return_value_inlined_75_1;\n"+
"p_room_1 = abs(p_room_1) - vec3(doorWidth_room_1 * .5, 1.1, .14);\n"+
"p_sdBox_1 = p_room_1;\n"+
"b_sdBox_1 = vec3(.45, .9, .1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_76_1 = sdBox_return_value_1;\n"+
"p_sdBox_1 = p_room_1;\n"+
"b_sdBox_1 = vec3(.35, .8, 1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_77_1 = sdBox_return_value_1;\n"+
"d_room_1 = min(doorFrame_room_1, max(door_room_1, - max(sdBox_return_value_inlined_76_1, - sdBox_return_value_inlined_77_1)));\n"+
"if(d_room_1 < r_room_1.d)\n"+
"{\n"+
"r_room_1.d = d_room_1;\n"+
"r_room_1.mat = vec3(.02, .02, .024);\n"+
"r_room_1.specPower = 10.;\n"+
"}\n"+
"room_return_value_1 = r_room_1;\n"+
"room_has_returned_1 = true;\n"+
"room_return_value_inlined_78_1 = room_return_value_1;\n"+
"p_ed209_1 = p_map_1;\n"+
"ed209_has_returned_1 = false;\n"+
"f_legWalkAngle_1 = 2.;\n"+
"legWalkAngle_has_returned_1 = false;\n"+
"legWalkAngle_return_value_1 = sin(edWalk_1 * 3.141 * 6. * f_legWalkAngle_1) * .2;\n"+
"legWalkAngle_has_returned_1 = true;\n"+
"legWalkAngle_return_value_inlined_54_1 = legWalkAngle_return_value_1;\n"+
"edZ_has_returned_1 = false;\n"+
"edZ_return_value_1 = mix(5., - 2., edWalk_1);\n"+
"edZ_has_returned_1 = true;\n"+
"edZ_return_value_inlined_55_1 = edZ_return_value_1;\n"+
"p_ed209_1.yz += vec2(legWalkAngle_return_value_inlined_54_1 * .2 + .1, - edZ_return_value_inlined_55_1);\n"+
"p_legs_1 = p_ed209_1;\n"+
"legs_has_returned_1 = false;\n"+
"mat_setBodyMaterial_1 = r_legs_1;\n"+
"mat_setBodyMaterial_1.mat = vec3(.36, .45, .5);\n"+
"mat_setBodyMaterial_1.specPower = 30.;\n"+
"r_legs_1 = mat_setBodyMaterial_1;\n"+
"f_legWalkAngle_1 = 1.;\n"+
"legWalkAngle_has_returned_1 = false;\n"+
"legWalkAngle_return_value_1 = sin(edWalk_1 * 3.141 * 6. * f_legWalkAngle_1) * .2;\n"+
"legWalkAngle_has_returned_1 = true;\n"+
"legWalkAngle_return_value_inlined_45_1 = legWalkAngle_return_value_1;\n"+
"legAngle_legs_1 = legWalkAngle_return_value_inlined_45_1;\n"+
"p_legs_1.z += .27;\n"+
"a_rot_1 = legAngle_legs_1 * sign(p_legs_1.x);\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_46_1 = rot_return_value_1;\n"+
"p_legs_1.yz *= rot_return_value_inlined_46_1;\n"+
"p_legs_1.z -= .27;\n"+
"p_legs_1.y += .65;\n"+
"a_rot_1 = - .2;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_47_1 = rot_return_value_1;\n"+
"p_legs_1.yz *= rot_return_value_inlined_47_1;\n"+
"a_rot_1 = legAngle_legs_1 * .3;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_48_1 = rot_return_value_1;\n"+
"p_legs_1.xy *= rot_return_value_inlined_48_1;\n"+
"pp_legs_1 = p_legs_1;\n"+
"pp_legs_1.x = abs(pp_legs_1.x);\n"+
"pp_legs_1.y += .48;\n"+
"a_rot_1 = - .58525;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_49_1 = rot_return_value_1;\n"+
"pp_legs_1.yz *= rot_return_value_inlined_49_1;\n"+
"pp_legs_1.x -= .98;\n"+
"cp_legs_1 = pp_legs_1;\n"+
"p_legs_1 = pp_legs_1;\n"+
"pp_legs_1.xz = abs(pp_legs_1.xz) - vec2(.12, .25);\n"+
"p_legs_1.y += .68;\n"+
"p_legs_1.xy = abs(p_legs_1.xy) - .12;\n"+
"p_sdBox_1 = p_legs_1;\n"+
"b_sdBox_1 = vec3(.07, .05, 1.2);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_50_1 = sdBox_return_value_1;\n"+
"silver_legs_1 = sdBox_return_value_inlined_50_1;\n"+
"cp_legs_1 -= vec3(0, - .7, 0);\n"+
"p_sdBox_1 = cp_legs_1 - vec3(0, 0, 1.15);\n"+
"b_sdBox_1 = vec3(.17, .17, .07);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_51_1 = sdBox_return_value_1;\n"+
"r_legs_1.d = sdBox_return_value_inlined_51_1 - .04;\n"+
"cp_legs_1.z ++;\n"+
"p_sdChamferedCube_1 = cp_legs_1.xzy;\n"+
"r_sdChamferedCube_1 = vec2(.28 - sign(abs(cp_legs_1.z) - .3) * .01, .5).xyx;\n"+
"c_sdChamferedCube_1 = .18;\n"+
"sdChamferedCube_has_returned_1 = false;\n"+
"p_sdBox_1 = p_sdChamferedCube_1;\n"+
"b_sdBox_1 = r_sdChamferedCube_1;\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_0_1 = sdBox_return_value_1;\n"+
"cube_sdChamferedCube_1 = sdBox_return_value_inlined_0_1;\n"+
"a_rot_1 = .78525;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_1_1 = rot_return_value_1;\n"+
"p_sdChamferedCube_1.xz *= rot_return_value_inlined_1_1;\n"+
"r_sdChamferedCube_1.xz *= - c_sdChamferedCube_1 / 1.41 + 1.41;\n"+
"p_sdBox_1 = p_sdChamferedCube_1;\n"+
"b_sdBox_1 = r_sdChamferedCube_1;\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_2_1 = sdBox_return_value_1;\n"+
"sdChamferedCube_return_value_1 = max(cube_sdChamferedCube_1, sdBox_return_value_inlined_2_1);\n"+
"sdChamferedCube_has_returned_1 = true;\n"+
"sdChamferedCube_return_value_inlined_52_1 = sdChamferedCube_return_value_1;\n"+
"r_legs_1.d = min(r_legs_1.d, sdChamferedCube_return_value_inlined_52_1);\n"+
"p_foot_1 = cp_legs_1;\n"+
"foot_has_returned_1 = false;\n"+
"p_foot_1.z += .8;\n"+
"a_rot_1 = .86;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_29_1 = rot_return_value_1;\n"+
"p_foot_1.yz *= rot_return_value_inlined_29_1;\n"+
"p_toe_1 = p_foot_1;\n"+
"toe_has_returned_1 = false;\n"+
"p_toe_1.yz += vec2(.1, .32);\n"+
"p_sdBox_1 = p_toe_1;\n"+
"b_sdBox_1 = vec3(.3 + .2 * (p_toe_1.z - .18) - p_toe_1.y * .228, .3 + .2 * cos((p_toe_1.z - .18) * 3.69), .35);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_28_1 = sdBox_return_value_1;\n"+
"toe_return_value_1 = max(sdBox_return_value_inlined_28_1, .1 - p_toe_1.y);\n"+
"toe_has_returned_1 = true;\n"+
"toe_return_value_inlined_30_1 = toe_return_value_1;\n"+
"d_foot_1 = toe_return_value_inlined_30_1;\n"+
"a_rot_1 = 1.57;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_31_1 = rot_return_value_1;\n"+
"p_foot_1.xz *= rot_return_value_inlined_31_1;\n"+
"p_foot_1.x -= .43;\n"+
"p_foot_1.z = .25 - abs(p_foot_1.z);\n"+
"p_toe_1 = p_foot_1;\n"+
"toe_has_returned_1 = false;\n"+
"p_toe_1.yz += vec2(.1, .32);\n"+
"p_sdBox_1 = p_toe_1;\n"+
"b_sdBox_1 = vec3(.3 + .2 * (p_toe_1.z - .18) - p_toe_1.y * .228, .3 + .2 * cos((p_toe_1.z - .18) * 3.69), .35);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_28_1 = sdBox_return_value_1;\n"+
"toe_return_value_1 = max(sdBox_return_value_inlined_28_1, .1 - p_toe_1.y);\n"+
"toe_has_returned_1 = true;\n"+
"toe_return_value_inlined_32_1 = toe_return_value_1;\n"+
"foot_return_value_1 = min(d_foot_1, toe_return_value_inlined_32_1);\n"+
"foot_has_returned_1 = true;\n"+
"foot_return_value_inlined_53_1 = foot_return_value_1;\n"+
"r_legs_1.d = min(r_legs_1.d, foot_return_value_inlined_53_1);\n"+
"if(silver_legs_1 < r_legs_1.d)\n"+
"{\n"+
"r_legs_1.d = silver_legs_1;\n"+
"r_legs_1.mat = vec3(.8);\n"+
"}\n"+
"legs_return_value_1 = r_legs_1;\n"+
"legs_has_returned_1 = true;\n"+
"legs_return_value_inlined_56_1 = legs_return_value_1;\n"+
"r_ed209_1 = legs_return_value_inlined_56_1;\n"+
"f_ed209_1 = min(stretch_1 * 2., 1.);\n"+
"slide_ed209_1 = f_ed209_1 < .5 ? smoothstep(0., .5, f_ed209_1) : (1. - smoothstep(.5, 1., f_ed209_1) * .2);\n"+
"p_ed209_1.yz -= slide_ed209_1 * .5;\n"+
"gunsUp_1 = smoothstep(0., 1., clamp((stretch_1 - .66) * 6., 0., 1.));\n"+
"fireShock_has_returned_1 = false;\n"+
"fireShock_return_value_1 = abs(sin(edShoot_1 * 78.5375));\n"+
"fireShock_has_returned_1 = true;\n"+
"fireShock_return_value_inlined_57_1 = fireShock_return_value_1;\n"+
"gunsForward_1 = smoothstep(0., 1., clamp((stretch_1 - .83) * 6., 0., 1.)) + fireShock_return_value_inlined_57_1 * .5;\n"+
"p_waist_1 = p_ed209_1;\n"+
"waist_has_returned_1 = false;\n"+
"mat_setBodyMaterial_1 = r_waist_1;\n"+
"mat_setBodyMaterial_1.mat = vec3(.36, .45, .5);\n"+
"mat_setBodyMaterial_1.specPower = 30.;\n"+
"r_waist_1 = mat_setBodyMaterial_1;\n"+
"p_waist_1.y += .65;\n"+
"a_rot_1 = - .2;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_33_1 = rot_return_value_1;\n"+
"p_waist_1.yz *= rot_return_value_inlined_33_1;\n"+
"f_legWalkAngle_1 = 1.;\n"+
"legWalkAngle_has_returned_1 = false;\n"+
"legWalkAngle_return_value_1 = sin(edWalk_1 * 3.141 * 6. * f_legWalkAngle_1) * .2;\n"+
"legWalkAngle_has_returned_1 = true;\n"+
"legWalkAngle_return_value_inlined_34_1 = legWalkAngle_return_value_1;\n"+
"legAngle_waist_1 = legWalkAngle_return_value_inlined_34_1;\n"+
"a_rot_1 = legAngle_waist_1 * .3;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_35_1 = rot_return_value_1;\n"+
"p_waist_1.xy *= rot_return_value_inlined_35_1;\n"+
"pp_waist_1 = p_waist_1;\n"+
"pp_waist_1.y += .3;\n"+
"p_sdCappedCylinder_1 = pp_waist_1.zyx;\n"+
"h_sdCappedCylinder_1 = .5;\n"+
"r_sdCappedCylinder_1 = .5;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_36_1 = sdCappedCylinder_return_value_1;\n"+
"r_waist_1.d = max(sdCappedCylinder_return_value_inlined_36_1, p_waist_1.y + .15);\n"+
"bump_waist_1 = .5 - abs(sin(p_waist_1.y * 40.)) * .03;\n"+
"p_sdBox_1 = p_waist_1;\n"+
"b_sdBox_1 = vec3(bump_waist_1, .15, bump_waist_1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_37_1 = sdBox_return_value_1;\n"+
"d_waist_1 = sdBox_return_value_inlined_37_1;\n"+
"bump_waist_1 = .3 - abs(sin(p_waist_1.x * 40.)) * .03;\n"+
"pp_waist_1.y += .18;\n"+
"p_sdCappedCylinder_1 = pp_waist_1.zyx;\n"+
"h_sdCappedCylinder_1 = bump_waist_1;\n"+
"r_sdCappedCylinder_1 = .75;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_38_1 = sdCappedCylinder_return_value_1;\n"+
"d_waist_1 = min(d_waist_1, sdCappedCylinder_return_value_inlined_38_1);\n"+
"pp_waist_1.x = abs(pp_waist_1.x);\n"+
"a_rot_1 = - .58525 + legAngle_waist_1 * sign(p_waist_1.x);\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_39_1 = rot_return_value_1;\n"+
"pp_waist_1.yz *= rot_return_value_inlined_39_1;\n"+
"pp_waist_1.x -= .98;\n"+
"p_sdCappedCylinder_1 = pp_waist_1.zyx;\n"+
"h_sdCappedCylinder_1 = .4;\n"+
"r_sdCappedCylinder_1 = .24;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_40_1 = sdCappedCylinder_return_value_1;\n"+
"r_waist_1.d = min(r_waist_1.d, max(sdCappedCylinder_return_value_inlined_40_1, - pp_waist_1.y));\n"+
"p_sdBox_1 = pp_waist_1;\n"+
"b_sdBox_1 = vec3(.24, .2, .14 + .2 * pp_waist_1.y);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_41_1 = sdBox_return_value_1;\n"+
"r_waist_1.d = min(r_waist_1.d, sdBox_return_value_inlined_41_1);\n"+
"p_waist_1 = pp_waist_1;\n"+
"pp_waist_1.xz = abs(pp_waist_1.xz) - vec2(.12, .25);\n"+
"p_sdCappedCylinder_1 = pp_waist_1.xzy;\n"+
"h_sdCappedCylinder_1 = .1;\n"+
"r_sdCappedCylinder_1 = .325;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_42_1 = sdCappedCylinder_return_value_1;\n"+
"p_sdCappedCylinder_1 = pp_waist_1.xzy;\n"+
"h_sdCappedCylinder_1 = .05;\n"+
"r_sdCappedCylinder_1 = .5;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_43_1 = sdCappedCylinder_return_value_1;\n"+
"r_waist_1.d = min(r_waist_1.d, max(min(sdCappedCylinder_return_value_inlined_42_1, sdCappedCylinder_return_value_inlined_43_1), pp_waist_1.y));\n"+
"p_waist_1.y += .68;\n"+
"p_sdBox_1 = p_waist_1;\n"+
"b_sdBox_1 = vec3(sign(abs(p_waist_1.y) - .04) * .005 + .26, .2, .34);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_44_1 = sdBox_return_value_1;\n"+
"r_waist_1.d = min(r_waist_1.d, sdBox_return_value_inlined_44_1);\n"+
"if(d_waist_1 < r_waist_1.d)\n"+
"{\n"+
"r_waist_1.d = d_waist_1;\n"+
"r_waist_1.mat = vec3(.02);\n"+
"}\n"+
"waist_return_value_1 = r_waist_1;\n"+
"waist_has_returned_1 = true;\n"+
"waist_return_value_inlined_58_1 = waist_return_value_1;\n"+
"a_minResult_1 = r_ed209_1;\n"+
"b_minResult_1 = waist_return_value_inlined_58_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_59_1 = minResult_return_value_1;\n"+
"r_ed209_1 = minResult_return_value_inlined_59_1;\n"+
"f_legWalkAngle_1 = 2.;\n"+
"legWalkAngle_has_returned_1 = false;\n"+
"legWalkAngle_return_value_1 = sin(edWalk_1 * 3.141 * 6. * f_legWalkAngle_1) * .2;\n"+
"legWalkAngle_has_returned_1 = true;\n"+
"legWalkAngle_return_value_inlined_60_1 = legWalkAngle_return_value_1;\n"+
"a_rot_1 = .1 * (- edDown_1 + legWalkAngle_return_value_inlined_60_1 + smoothstep(0., 1., clamp((stretch_1 - .5) * 6., 0., 1.)) - 1.);\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_61_1 = rot_return_value_1;\n"+
"p_ed209_1.yz *= rot_return_value_inlined_61_1;\n"+
"a_rot_1 = edTwist_1 * .2;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_62_1 = rot_return_value_1;\n"+
"p_ed209_1.xz *= rot_return_value_inlined_62_1;\n"+
"p_headLower_1 = p_ed209_1;\n"+
"headLower_has_returned_1 = false;\n"+
"op_headLower_1 = p_headLower_1;\n"+
"p_headVisor_1 = p_headLower_1 * vec3(.95, - 1.4, .95);\n"+
"h_headVisor_1 = 1.;\n"+
"bump_headVisor_1 = 0.;\n"+
"headVisor_has_returned_1 = false;\n"+
"bump_headVisor_1 *= sin(p_headVisor_1.x * 150.) * sin(p_headVisor_1.y * 150.) * .002;\n"+
"p_sdBox_1 = p_headVisor_1;\n"+
"b_sdBox_1 = vec3(1, h_headVisor_1, 2);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_3_1 = sdBox_return_value_1;\n"+
"result_headVisor_1.d = sdBox_return_value_inlined_3_1;\n"+
"p_headSphere_1 = p_headVisor_1;\n"+
"headSphere_has_returned_1 = false;\n"+
"headSphere_return_value_1 = (length(p_headSphere_1 / vec3(1, .8, 1)) - 1.) * .8;\n"+
"headSphere_has_returned_1 = true;\n"+
"headSphere_return_value_inlined_4_1 = headSphere_return_value_1;\n"+
"result_headVisor_1.d = max(mix(result_headVisor_1.d, headSphere_return_value_inlined_4_1, .57), - p_headVisor_1.y) - bump_headVisor_1;\n"+
"result_headVisor_1.mat = vec3(.05);\n"+
"result_headVisor_1.specPower = 30.;\n"+
"headVisor_return_value_1 = result_headVisor_1;\n"+
"headVisor_has_returned_1 = true;\n"+
"headVisor_return_value_inlined_5_1 = headVisor_return_value_1;\n"+
"r_headLower_1 = headVisor_return_value_inlined_5_1;\n"+
"p_headVisor_1 = (p_headLower_1 + vec3(0, .01, 0)) * vec3(.95);\n"+
"h_headVisor_1 = 1.;\n"+
"bump_headVisor_1 = 0.;\n"+
"headVisor_has_returned_1 = false;\n"+
"bump_headVisor_1 *= sin(p_headVisor_1.x * 150.) * sin(p_headVisor_1.y * 150.) * .002;\n"+
"p_sdBox_1 = p_headVisor_1;\n"+
"b_sdBox_1 = vec3(1, h_headVisor_1, 2);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_3_1 = sdBox_return_value_1;\n"+
"result_headVisor_1.d = sdBox_return_value_inlined_3_1;\n"+
"p_headSphere_1 = p_headVisor_1;\n"+
"headSphere_has_returned_1 = false;\n"+
"headSphere_return_value_1 = (length(p_headSphere_1 / vec3(1, .8, 1)) - 1.) * .8;\n"+
"headSphere_has_returned_1 = true;\n"+
"headSphere_return_value_inlined_4_1 = headSphere_return_value_1;\n"+
"result_headVisor_1.d = max(mix(result_headVisor_1.d, headSphere_return_value_inlined_4_1, .57), - p_headVisor_1.y) - bump_headVisor_1;\n"+
"result_headVisor_1.mat = vec3(.05);\n"+
"result_headVisor_1.specPower = 30.;\n"+
"headVisor_return_value_1 = result_headVisor_1;\n"+
"headVisor_has_returned_1 = true;\n"+
"headVisor_return_value_inlined_6_1 = headVisor_return_value_1;\n"+
"r_headLower_1.d = min(r_headLower_1.d, max(max(headVisor_return_value_inlined_6_1.d, p_headLower_1.y - .35), p_headLower_1.y * .625 - p_headLower_1.z - .66));\n"+
"a_rot_1 = .075 * (gunsUp_1 - 1.) * sign(p_headLower_1.x);\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_7_1 = rot_return_value_1;\n"+
"p_headLower_1.xy *= rot_return_value_inlined_7_1;\n"+
"p_headLower_1.x = abs(p_headLower_1.x) - 1.33;\n"+
"p_headLower_1.y -= .1 - p_headLower_1.x * .1;\n"+
"p_sdBox_1 = p_headLower_1;\n"+
"b_sdBox_1 = vec3(.4, .06 * (1. - p_headLower_1.x), .3 - p_headLower_1.x * .2);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_8_1 = sdBox_return_value_1;\n"+
"r_headLower_1.d = min(r_headLower_1.d, sdBox_return_value_inlined_8_1);\n"+
"p_headLower_1 = op_headLower_1;\n"+
"p_headLower_1.y = abs(abs(p_headLower_1.y + .147) - .0556) - .0278;\n"+
"p_sdBox_1 = p_headLower_1 + vec3(0, 0, 1.5);\n"+
"b_sdBox_1 = vec3(mix(.25, .55, - op_headLower_1.y), .015, .1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_9_1 = sdBox_return_value_1;\n"+
"r_headLower_1.d = max(r_headLower_1.d, - sdBox_return_value_inlined_9_1);\n"+
"p_headLower_1 = op_headLower_1;\n"+
"p_headLower_1.y = abs(p_headLower_1.y + .16) - .06;\n"+
"p_headLower_1.z -= - 1.1;\n"+
"p_sdCappedCylinder_1 = p_headLower_1.xzy;\n"+
"h_sdCappedCylinder_1 = 1.;\n"+
"r_sdCappedCylinder_1 = .03;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_10_1 = sdCappedCylinder_return_value_1;\n"+
"p_sdCappedCylinder_1 = p_headLower_1.xzy;\n"+
"h_sdCappedCylinder_1 = .55;\n"+
"r_sdCappedCylinder_1 = 1.;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_11_1 = sdCappedCylinder_return_value_1;\n"+
"r_headLower_1.d = max(r_headLower_1.d, - max(max(sdCappedCylinder_return_value_inlined_10_1, - sdCappedCylinder_return_value_inlined_11_1), p_headLower_1.z + .2));\n"+
"mat_setBodyMaterial_1 = r_headLower_1;\n"+
"mat_setBodyMaterial_1.mat = vec3(.36, .45, .5);\n"+
"mat_setBodyMaterial_1.specPower = 30.;\n"+
"r_headLower_1 = mat_setBodyMaterial_1;\n"+
"headLower_return_value_1 = r_headLower_1;\n"+
"headLower_has_returned_1 = true;\n"+
"headLower_return_value_inlined_63_1 = headLower_return_value_1;\n"+
"a_minResult_1 = r_ed209_1;\n"+
"b_minResult_1 = headLower_return_value_inlined_63_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_64_1 = minResult_return_value_1;\n"+
"p_headVisor_1 = p_ed209_1;\n"+
"h_headVisor_1 = .8;\n"+
"bump_headVisor_1 = 1.;\n"+
"headVisor_has_returned_1 = false;\n"+
"bump_headVisor_1 *= sin(p_headVisor_1.x * 150.) * sin(p_headVisor_1.y * 150.) * .002;\n"+
"p_sdBox_1 = p_headVisor_1;\n"+
"b_sdBox_1 = vec3(1, h_headVisor_1, 2);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_3_1 = sdBox_return_value_1;\n"+
"result_headVisor_1.d = sdBox_return_value_inlined_3_1;\n"+
"p_headSphere_1 = p_headVisor_1;\n"+
"headSphere_has_returned_1 = false;\n"+
"headSphere_return_value_1 = (length(p_headSphere_1 / vec3(1, .8, 1)) - 1.) * .8;\n"+
"headSphere_has_returned_1 = true;\n"+
"headSphere_return_value_inlined_4_1 = headSphere_return_value_1;\n"+
"result_headVisor_1.d = max(mix(result_headVisor_1.d, headSphere_return_value_inlined_4_1, .57), - p_headVisor_1.y) - bump_headVisor_1;\n"+
"result_headVisor_1.mat = vec3(.05);\n"+
"result_headVisor_1.specPower = 30.;\n"+
"headVisor_return_value_1 = result_headVisor_1;\n"+
"headVisor_has_returned_1 = true;\n"+
"headVisor_return_value_inlined_65_1 = headVisor_return_value_1;\n"+
"a_minResult_1 = minResult_return_value_inlined_64_1;\n"+
"b_minResult_1 = headVisor_return_value_inlined_65_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_66_1 = minResult_return_value_1;\n"+
"p_arms_1 = p_ed209_1;\n"+
"arms_has_returned_1 = false;\n"+
"mat_setBodyMaterial_1 = r_arms_1;\n"+
"mat_setBodyMaterial_1.mat = vec3(.36, .45, .5);\n"+
"mat_setBodyMaterial_1.specPower = 30.;\n"+
"r_arms_1 = mat_setBodyMaterial_1;\n"+
"p_arms_1.x = abs(p_arms_1.x);\n"+
"p_arms_1.yz += vec2(.24, 0);\n"+
"a_rot_1 = .15 * (gunsUp_1 - 1.);\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_23_1 = rot_return_value_1;\n"+
"p_arms_1.xy *= rot_return_value_inlined_23_1;\n"+
"p_sdCapsule_1 = p_arms_1;\n"+
"a_sdCapsule_1 = vec3(0);\n"+
"b_sdCapsule_1 = vec3(1.5, 0, 0);\n"+
"r_sdCapsule_1 = .2;\n"+
"sdCapsule_has_returned_1 = false;\n"+
"pa_sdCapsule_1 = p_sdCapsule_1 - a_sdCapsule_1;\n"+
"ba_sdCapsule_1 = b_sdCapsule_1 - a_sdCapsule_1;\n"+
"sdCapsule_return_value_1 = length(pa_sdCapsule_1 - ba_sdCapsule_1 * clamp(dot(pa_sdCapsule_1, ba_sdCapsule_1) / dot(ba_sdCapsule_1, ba_sdCapsule_1), 0., 1.)) - r_sdCapsule_1;\n"+
"sdCapsule_has_returned_1 = true;\n"+
"sdCapsule_return_value_inlined_24_1 = sdCapsule_return_value_1;\n"+
"p_sdCapsule_1 = p_arms_1;\n"+
"a_sdCapsule_1 = vec3(1.5, 0, 0);\n"+
"b_sdCapsule_1 = wrist_arms_1;\n"+
"r_sdCapsule_1 = .2;\n"+
"sdCapsule_has_returned_1 = false;\n"+
"pa_sdCapsule_1 = p_sdCapsule_1 - a_sdCapsule_1;\n"+
"ba_sdCapsule_1 = b_sdCapsule_1 - a_sdCapsule_1;\n"+
"sdCapsule_return_value_1 = length(pa_sdCapsule_1 - ba_sdCapsule_1 * clamp(dot(pa_sdCapsule_1, ba_sdCapsule_1) / dot(ba_sdCapsule_1, ba_sdCapsule_1), 0., 1.)) - r_sdCapsule_1;\n"+
"sdCapsule_has_returned_1 = true;\n"+
"sdCapsule_return_value_inlined_25_1 = sdCapsule_return_value_1;\n"+
"r_arms_1.d = min(sdCapsule_return_value_inlined_24_1, sdCapsule_return_value_inlined_25_1);\n"+
"p_arms_1 -= wrist_arms_1;\n"+
"p_arms_1.z -= gunsForward_1 * .15;\n"+
"p_gunPod_1 = p_arms_1;\n"+
"gunPod_has_returned_1 = false;\n"+
"mat_setBodyMaterial_1 = r_gunPod_1;\n"+
"mat_setBodyMaterial_1.mat = vec3(.36, .45, .5);\n"+
"mat_setBodyMaterial_1.specPower = 30.;\n"+
"r_gunPod_1 = mat_setBodyMaterial_1;\n"+
"p_gunPod_1.yz += vec2(.1, .45);\n"+
"pp_gunPod_1 = p_gunPod_1;\n"+
"pp_gunPod_1.z = abs(pp_gunPod_1.z) - .5;\n"+
"p_sdCappedCone_1 = pp_gunPod_1;\n"+
"a_sdCappedCone_1 = vec3(0);\n"+
"b_sdCappedCone_1 = vec3(0, 0, - .1);\n"+
"ra_sdCappedCone_1 = .35 - .1;\n"+
"rb_sdCappedCone_1 = .35;\n"+
"sdCappedCone_has_returned_1 = false;\n"+
"rba_sdCappedCone_1 = rb_sdCappedCone_1 - ra_sdCappedCone_1;\n"+
"baba_sdCappedCone_1 = dot(b_sdCappedCone_1 - a_sdCappedCone_1, b_sdCappedCone_1 - a_sdCappedCone_1);\n"+
"papa_sdCappedCone_1 = dot(p_sdCappedCone_1 - a_sdCappedCone_1, p_sdCappedCone_1 - a_sdCappedCone_1);\n"+
"paba_sdCappedCone_1 = dot(p_sdCappedCone_1 - a_sdCappedCone_1, b_sdCappedCone_1 - a_sdCappedCone_1) / baba_sdCappedCone_1;\n"+
"x_sdCappedCone_1 = sqrt(papa_sdCappedCone_1 - paba_sdCappedCone_1 * paba_sdCappedCone_1 * baba_sdCappedCone_1);\n"+
"cax_sdCappedCone_1 = max(0., x_sdCappedCone_1 - ((paba_sdCappedCone_1 < .5) ? ra_sdCappedCone_1 : rb_sdCappedCone_1));\n"+
"cay_sdCappedCone_1 = abs(paba_sdCappedCone_1 - .5) - .5;\n"+
"f_sdCappedCone_1 = clamp((rba_sdCappedCone_1 * (x_sdCappedCone_1 - ra_sdCappedCone_1) + paba_sdCappedCone_1 * baba_sdCappedCone_1) / (rba_sdCappedCone_1 * rba_sdCappedCone_1 + baba_sdCappedCone_1), 0., 1.);\n"+
"cbx_sdCappedCone_1 = x_sdCappedCone_1 - ra_sdCappedCone_1 - f_sdCappedCone_1 * rba_sdCappedCone_1;\n"+
"cby_sdCappedCone_1 = paba_sdCappedCone_1 - f_sdCappedCone_1;\n"+
"sdCappedCone_return_value_1 = ((cbx_sdCappedCone_1 < 0. && cay_sdCappedCone_1 < 0.) ? - 1. : 1.) * sqrt(min(cax_sdCappedCone_1 * cax_sdCappedCone_1 + cay_sdCappedCone_1 * cay_sdCappedCone_1 * baba_sdCappedCone_1, cbx_sdCappedCone_1 * cbx_sdCappedCone_1 + cby_sdCappedCone_1 * cby_sdCappedCone_1 * baba_sdCappedCone_1));\n"+
"sdCappedCone_has_returned_1 = true;\n"+
"sdCappedCone_return_value_inlined_12_1 = sdCappedCone_return_value_1;\n"+
"r_gunPod_1.d = sdCappedCone_return_value_inlined_12_1;\n"+
"p_sdCappedCylinder_1 = p_gunPod_1;\n"+
"h_sdCappedCylinder_1 = .35;\n"+
"r_sdCappedCylinder_1 = .4;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_13_1 = sdCappedCylinder_return_value_1;\n"+
"r_gunPod_1.d = min(r_gunPod_1.d, sdCappedCylinder_return_value_inlined_13_1);\n"+
"pp_gunPod_1 = vec3(p_gunPod_1.x, .28 - p_gunPod_1.y, p_gunPod_1.z);\n"+
"p_sdTriPrism_1 = pp_gunPod_1;\n"+
"h_sdTriPrism_1 = vec2(.1, .5);\n"+
"sdTriPrism_has_returned_1 = false;\n"+
"q_sdTriPrism_1 = abs(p_sdTriPrism_1);\n"+
"sdTriPrism_return_value_1 = max(q_sdTriPrism_1.z - h_sdTriPrism_1.y, max(q_sdTriPrism_1.x * .866025 + p_sdTriPrism_1.y * .5, - p_sdTriPrism_1.y) - h_sdTriPrism_1.x * .5);\n"+
"sdTriPrism_has_returned_1 = true;\n"+
"sdTriPrism_return_value_inlined_14_1 = sdTriPrism_return_value_1;\n"+
"r_gunPod_1.d = min(r_gunPod_1.d, sdTriPrism_return_value_inlined_14_1);\n"+
"pp_gunPod_1 = p_gunPod_1;\n"+
"pp_gunPod_1.x = abs(p_gunPod_1.x);\n"+
"a_rot_1 = .78525;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_15_1 = rot_return_value_1;\n"+
"pp_gunPod_1.xy *= rot_return_value_inlined_15_1;\n"+
"bump_gunPod_1 = sign(sin(pp_gunPod_1.z * 33.3)) * .003;\n"+
"p_sdBox_1 = pp_gunPod_1;\n"+
"b_sdBox_1 = vec3(.1 - bump_gunPod_1, .38 - bump_gunPod_1, .34);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_16_1 = sdBox_return_value_1;\n"+
"d_gunPod_1 = sdBox_return_value_inlined_16_1 - .02;\n"+
"pp_gunPod_1 = p_gunPod_1 - vec3(0, 0, - .6);\n"+
"pp_gunPod_1.x = abs(pp_gunPod_1.x) - .1;\n"+
"p_sdCappedCylinder_1 = pp_gunPod_1;\n"+
"h_sdCappedCylinder_1 = .06;\n"+
"r_sdCappedCylinder_1 = .15;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_17_1 = sdCappedCylinder_return_value_1;\n"+
"p_sdCappedCylinder_1 = pp_gunPod_1 + vec3(0, .12, - .05);\n"+
"h_sdCappedCylinder_1 = .06;\n"+
"r_sdCappedCylinder_1 = .05;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_18_1 = sdCappedCylinder_return_value_1;\n"+
"p_sdBox_1 = p_gunPod_1 + vec3(0, 0, .54);\n"+
"b_sdBox_1 = vec3(.1, .06, .04);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_19_1 = sdBox_return_value_1;\n"+
"d_gunPod_1 = min(min(min(d_gunPod_1, sdCappedCylinder_return_value_inlined_17_1), sdCappedCylinder_return_value_inlined_18_1), sdBox_return_value_inlined_19_1);\n"+
"if(d_gunPod_1 < r_gunPod_1.d)\n"+
"{\n"+
"p_sdCappedCylinder_1 = pp_gunPod_1 + vec3(0, 0, .1);\n"+
"h_sdCappedCylinder_1 = .03;\n"+
"r_sdCappedCylinder_1 = .2;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_20_1 = sdCappedCylinder_return_value_1;\n"+
"d_gunPod_1 = max(d_gunPod_1, - sdCappedCylinder_return_value_inlined_20_1);\n"+
"r_gunPod_1.d = d_gunPod_1;\n"+
"r_gunPod_1.mat = vec3(.02);\n"+
"}\n"+
"fireShock_has_returned_1 = false;\n"+
"fireShock_return_value_1 = abs(sin(edShoot_1 * 78.5375));\n"+
"fireShock_has_returned_1 = true;\n"+
"fireShock_return_value_inlined_21_1 = fireShock_return_value_1;\n"+
"fs_gunPod_1 = fireShock_return_value_inlined_21_1;\n"+
"if(fs_gunPod_1 > .5)\n"+
"{\n"+
"p_sdCappedCylinder_1 = pp_gunPod_1;\n"+
"h_sdCappedCylinder_1 = .01 + pp_gunPod_1.z * .05;\n"+
"r_sdCappedCylinder_1 = fract(fs_gunPod_1 * 3322.423) * .5 + .9;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_22_1 = sdCappedCylinder_return_value_1;\n"+
"d_gunPod_1 = sdCappedCylinder_return_value_inlined_22_1;\n"+
"if(d_gunPod_1 < r_gunPod_1.d)\n"+
"{\n"+
"r_gunPod_1.d = d_gunPod_1;\n"+
"r_gunPod_1.mat = vec3(1);\n"+
"glow_1 += .1 / (.01 + d_gunPod_1 * d_gunPod_1 * 4e2);\n"+
"}\n"+
"}\n"+
"gunPod_return_value_1 = r_gunPod_1;\n"+
"gunPod_has_returned_1 = true;\n"+
"gunPod_return_value_inlined_26_1 = gunPod_return_value_1;\n"+
"a_minResult_1 = r_arms_1;\n"+
"b_minResult_1 = gunPod_return_value_inlined_26_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_27_1 = minResult_return_value_1;\n"+
"arms_return_value_1 = minResult_return_value_inlined_27_1;\n"+
"arms_has_returned_1 = true;\n"+
"arms_return_value_inlined_67_1 = arms_return_value_1;\n"+
"a_minResult_1 = minResult_return_value_inlined_66_1;\n"+
"b_minResult_1 = arms_return_value_inlined_67_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_68_1 = minResult_return_value_1;\n"+
"ed209_return_value_1 = minResult_return_value_inlined_68_1;\n"+
"ed209_has_returned_1 = true;\n"+
"ed209_return_value_inlined_79_1 = ed209_return_value_1;\n"+
"a_minResult_1 = room_return_value_inlined_78_1;\n"+
"b_minResult_1 = ed209_return_value_inlined_79_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_80_1 = minResult_return_value_1;\n"+
"r_map_1 = minResult_return_value_inlined_80_1;\n"+
"gnd_map_1 = length(p_map_1.y + 3.);\n"+
"if(gnd_map_1 < r_map_1.d)\n"+
"{\n"+
"r_map_1.d = gnd_map_1;\n"+
"r_map_1.mat = vec3(.1);\n"+
"}\n"+
"map_return_value_1 = r_map_1;\n"+
"map_has_returned_1 = true;\n"+
"map_return_value_inlined_81_1 = map_return_value_1;\n"+
"h_calcShadow_1 = map_return_value_inlined_81_1.d;\n"+
"res_calcShadow_1 = min(res_calcShadow_1, 12. * h_calcShadow_1 / t_calcShadow_1);\n"+
"t_calcShadow_1 += h_calcShadow_1;\n"+
"if(res_calcShadow_1 < .001 || t_calcShadow_1 > 25.)\n"+
"{\n"+
"break;\n"+
"}\n"+
"}\n"+
"calcShadow_return_value_1 = clamp(res_calcShadow_1, 0., 1.);\n"+
"calcShadow_has_returned_1 = true;\n"+
"calcShadow_return_value_inlined_88_1 = calcShadow_return_value_1;\n"+
"primary_applyLighting_1 *= mix(.2, 1., calcShadow_return_value_inlined_88_1);\n"+
"p_ao_1 = p_applyLighting_1;\n"+
"n_ao_1 = n_applyLighting_1;\n"+
"h_ao_1 = .33;\n"+
"ao_has_returned_1 = false;\n"+
"p_map_1 = p_ao_1 + h_ao_1 * n_ao_1;\n"+
"map_has_returned_1 = false;\n"+
"p_room_1 = p_map_1;\n"+
"room_has_returned_1 = false;\n"+
"r_room_1.mat = vec3(.4);\n"+
"r_room_1.specPower = 1e7;\n"+
"xy_room_1 = p_room_1.xy - vec2(0, 2);\n"+
"p_room_1.x = abs(p_room_1.x);\n"+
"p_room_1.yz += vec2(.5, - 3.4);\n"+
"p_sdBox_1 = p_room_1;\n"+
"b_sdBox_1 = frameInner_room_1 + vec3(0, 0, 1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_69_1 = sdBox_return_value_1;\n"+
"doorHole_room_1 = sdBox_return_value_inlined_69_1;\n"+
"backWall_room_1 = length(p_room_1.z - 8.);\n"+
"r_room_1.d = min(backWall_room_1, max(length(p_room_1.z), - doorHole_room_1 + .1));\n"+
"if(r_room_1.d == backWall_room_1)\n"+
"{\n"+
"p_sdOctogon_1 = xy_room_1;\n"+
"r_sdOctogon_1 = 2.6;\n"+
"sdOctogon_has_returned_1 = false;\n"+
"p_sdOctogon_1 = abs(p_sdOctogon_1);\n"+
"p_sdOctogon_1 -= 2. * min(dot(k_sdOctogon_1.xy, p_sdOctogon_1), 0.) * k_sdOctogon_1.xy;\n"+
"p_sdOctogon_1 -= 2. * min(dot(vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y), p_sdOctogon_1), 0.) * vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y);\n"+
"p_sdOctogon_1 -= vec2(clamp(p_sdOctogon_1.x, - k_sdOctogon_1.z * r_sdOctogon_1, k_sdOctogon_1.z * r_sdOctogon_1), r_sdOctogon_1);\n"+
"sdOctogon_return_value_1 = length(p_sdOctogon_1) * sign(p_sdOctogon_1.y);\n"+
"sdOctogon_has_returned_1 = true;\n"+
"sdOctogon_return_value_inlined_70_1 = sdOctogon_return_value_1;\n"+
"p_sdOctogon_1 = xy_room_1;\n"+
"r_sdOctogon_1 = 1.9;\n"+
"sdOctogon_has_returned_1 = false;\n"+
"p_sdOctogon_1 = abs(p_sdOctogon_1);\n"+
"p_sdOctogon_1 -= 2. * min(dot(k_sdOctogon_1.xy, p_sdOctogon_1), 0.) * k_sdOctogon_1.xy;\n"+
"p_sdOctogon_1 -= 2. * min(dot(vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y), p_sdOctogon_1), 0.) * vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y);\n"+
"p_sdOctogon_1 -= vec2(clamp(p_sdOctogon_1.x, - k_sdOctogon_1.z * r_sdOctogon_1, k_sdOctogon_1.z * r_sdOctogon_1), r_sdOctogon_1);\n"+
"sdOctogon_return_value_1 = length(p_sdOctogon_1) * sign(p_sdOctogon_1.y);\n"+
"sdOctogon_has_returned_1 = true;\n"+
"sdOctogon_return_value_inlined_71_1 = sdOctogon_return_value_1;\n"+
"ocp_room_1 = min(abs(sdOctogon_return_value_inlined_70_1), abs(sdOctogon_return_value_inlined_71_1));\n"+
"p_sdOctogon_1 = xy_room_1;\n"+
"r_sdOctogon_1 = 1.2;\n"+
"sdOctogon_has_returned_1 = false;\n"+
"p_sdOctogon_1 = abs(p_sdOctogon_1);\n"+
"p_sdOctogon_1 -= 2. * min(dot(k_sdOctogon_1.xy, p_sdOctogon_1), 0.) * k_sdOctogon_1.xy;\n"+
"p_sdOctogon_1 -= 2. * min(dot(vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y), p_sdOctogon_1), 0.) * vec2(- k_sdOctogon_1.x, k_sdOctogon_1.y);\n"+
"p_sdOctogon_1 -= vec2(clamp(p_sdOctogon_1.x, - k_sdOctogon_1.z * r_sdOctogon_1, k_sdOctogon_1.z * r_sdOctogon_1), r_sdOctogon_1);\n"+
"sdOctogon_return_value_1 = length(p_sdOctogon_1) * sign(p_sdOctogon_1.y);\n"+
"sdOctogon_has_returned_1 = true;\n"+
"sdOctogon_return_value_inlined_72_1 = sdOctogon_return_value_1;\n"+
"ocp_room_1 = min(max(ocp_room_1, min(.7 - abs(xy_room_1.x + 1.2), - xy_room_1.y)), max(abs(sdOctogon_return_value_inlined_72_1), min(xy_room_1.x, .7 - abs(xy_room_1.y))));\n"+
"if(ocp_room_1 < .3)\n"+
"{\n"+
"r_room_1.mat = vec3(.39, .57, .71);\n"+
"}\n"+
"}\n"+
"p_sdBox_1 = p_room_1;\n"+
"b_sdBox_1 = frameInner_room_1 + vec3(.4, .4, .1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_73_1 = sdBox_return_value_1;\n"+
"doorFrame_room_1 = max(sdBox_return_value_inlined_73_1, - doorHole_room_1);\n"+
"doorWidth_room_1 = frameInner_room_1.x * .5;\n"+
"p_room_1.x -= frameInner_room_1.x;\n"+
"a_rot_1 = doorOpen_1 * 2.1;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_74_1 = rot_return_value_1;\n"+
"p_room_1.xz *= rot_return_value_inlined_74_1;\n"+
"p_room_1.x += doorWidth_room_1;\n"+
"p_sdBox_1 = p_room_1;\n"+
"b_sdBox_1 = vec3(doorWidth_room_1, frameInner_room_1.yz);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_75_1 = sdBox_return_value_1;\n"+
"door_room_1 = sdBox_return_value_inlined_75_1;\n"+
"p_room_1 = abs(p_room_1) - vec3(doorWidth_room_1 * .5, 1.1, .14);\n"+
"p_sdBox_1 = p_room_1;\n"+
"b_sdBox_1 = vec3(.45, .9, .1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_76_1 = sdBox_return_value_1;\n"+
"p_sdBox_1 = p_room_1;\n"+
"b_sdBox_1 = vec3(.35, .8, 1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_77_1 = sdBox_return_value_1;\n"+
"d_room_1 = min(doorFrame_room_1, max(door_room_1, - max(sdBox_return_value_inlined_76_1, - sdBox_return_value_inlined_77_1)));\n"+
"if(d_room_1 < r_room_1.d)\n"+
"{\n"+
"r_room_1.d = d_room_1;\n"+
"r_room_1.mat = vec3(.02, .02, .024);\n"+
"r_room_1.specPower = 10.;\n"+
"}\n"+
"room_return_value_1 = r_room_1;\n"+
"room_has_returned_1 = true;\n"+
"room_return_value_inlined_78_1 = room_return_value_1;\n"+
"p_ed209_1 = p_map_1;\n"+
"ed209_has_returned_1 = false;\n"+
"f_legWalkAngle_1 = 2.;\n"+
"legWalkAngle_has_returned_1 = false;\n"+
"legWalkAngle_return_value_1 = sin(edWalk_1 * 3.141 * 6. * f_legWalkAngle_1) * .2;\n"+
"legWalkAngle_has_returned_1 = true;\n"+
"legWalkAngle_return_value_inlined_54_1 = legWalkAngle_return_value_1;\n"+
"edZ_has_returned_1 = false;\n"+
"edZ_return_value_1 = mix(5., - 2., edWalk_1);\n"+
"edZ_has_returned_1 = true;\n"+
"edZ_return_value_inlined_55_1 = edZ_return_value_1;\n"+
"p_ed209_1.yz += vec2(legWalkAngle_return_value_inlined_54_1 * .2 + .1, - edZ_return_value_inlined_55_1);\n"+
"p_legs_1 = p_ed209_1;\n"+
"legs_has_returned_1 = false;\n"+
"mat_setBodyMaterial_1 = r_legs_1;\n"+
"mat_setBodyMaterial_1.mat = vec3(.36, .45, .5);\n"+
"mat_setBodyMaterial_1.specPower = 30.;\n"+
"r_legs_1 = mat_setBodyMaterial_1;\n"+
"f_legWalkAngle_1 = 1.;\n"+
"legWalkAngle_has_returned_1 = false;\n"+
"legWalkAngle_return_value_1 = sin(edWalk_1 * 3.141 * 6. * f_legWalkAngle_1) * .2;\n"+
"legWalkAngle_has_returned_1 = true;\n"+
"legWalkAngle_return_value_inlined_45_1 = legWalkAngle_return_value_1;\n"+
"legAngle_legs_1 = legWalkAngle_return_value_inlined_45_1;\n"+
"p_legs_1.z += .27;\n"+
"a_rot_1 = legAngle_legs_1 * sign(p_legs_1.x);\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_46_1 = rot_return_value_1;\n"+
"p_legs_1.yz *= rot_return_value_inlined_46_1;\n"+
"p_legs_1.z -= .27;\n"+
"p_legs_1.y += .65;\n"+
"a_rot_1 = - .2;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_47_1 = rot_return_value_1;\n"+
"p_legs_1.yz *= rot_return_value_inlined_47_1;\n"+
"a_rot_1 = legAngle_legs_1 * .3;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_48_1 = rot_return_value_1;\n"+
"p_legs_1.xy *= rot_return_value_inlined_48_1;\n"+
"pp_legs_1 = p_legs_1;\n"+
"pp_legs_1.x = abs(pp_legs_1.x);\n"+
"pp_legs_1.y += .48;\n"+
"a_rot_1 = - .58525;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_49_1 = rot_return_value_1;\n"+
"pp_legs_1.yz *= rot_return_value_inlined_49_1;\n"+
"pp_legs_1.x -= .98;\n"+
"cp_legs_1 = pp_legs_1;\n"+
"p_legs_1 = pp_legs_1;\n"+
"pp_legs_1.xz = abs(pp_legs_1.xz) - vec2(.12, .25);\n"+
"p_legs_1.y += .68;\n"+
"p_legs_1.xy = abs(p_legs_1.xy) - .12;\n"+
"p_sdBox_1 = p_legs_1;\n"+
"b_sdBox_1 = vec3(.07, .05, 1.2);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_50_1 = sdBox_return_value_1;\n"+
"silver_legs_1 = sdBox_return_value_inlined_50_1;\n"+
"cp_legs_1 -= vec3(0, - .7, 0);\n"+
"p_sdBox_1 = cp_legs_1 - vec3(0, 0, 1.15);\n"+
"b_sdBox_1 = vec3(.17, .17, .07);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_51_1 = sdBox_return_value_1;\n"+
"r_legs_1.d = sdBox_return_value_inlined_51_1 - .04;\n"+
"cp_legs_1.z ++;\n"+
"p_sdChamferedCube_1 = cp_legs_1.xzy;\n"+
"r_sdChamferedCube_1 = vec2(.28 - sign(abs(cp_legs_1.z) - .3) * .01, .5).xyx;\n"+
"c_sdChamferedCube_1 = .18;\n"+
"sdChamferedCube_has_returned_1 = false;\n"+
"p_sdBox_1 = p_sdChamferedCube_1;\n"+
"b_sdBox_1 = r_sdChamferedCube_1;\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_0_1 = sdBox_return_value_1;\n"+
"cube_sdChamferedCube_1 = sdBox_return_value_inlined_0_1;\n"+
"a_rot_1 = .78525;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_1_1 = rot_return_value_1;\n"+
"p_sdChamferedCube_1.xz *= rot_return_value_inlined_1_1;\n"+
"r_sdChamferedCube_1.xz *= - c_sdChamferedCube_1 / 1.41 + 1.41;\n"+
"p_sdBox_1 = p_sdChamferedCube_1;\n"+
"b_sdBox_1 = r_sdChamferedCube_1;\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_2_1 = sdBox_return_value_1;\n"+
"sdChamferedCube_return_value_1 = max(cube_sdChamferedCube_1, sdBox_return_value_inlined_2_1);\n"+
"sdChamferedCube_has_returned_1 = true;\n"+
"sdChamferedCube_return_value_inlined_52_1 = sdChamferedCube_return_value_1;\n"+
"r_legs_1.d = min(r_legs_1.d, sdChamferedCube_return_value_inlined_52_1);\n"+
"p_foot_1 = cp_legs_1;\n"+
"foot_has_returned_1 = false;\n"+
"p_foot_1.z += .8;\n"+
"a_rot_1 = .86;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_29_1 = rot_return_value_1;\n"+
"p_foot_1.yz *= rot_return_value_inlined_29_1;\n"+
"p_toe_1 = p_foot_1;\n"+
"toe_has_returned_1 = false;\n"+
"p_toe_1.yz += vec2(.1, .32);\n"+
"p_sdBox_1 = p_toe_1;\n"+
"b_sdBox_1 = vec3(.3 + .2 * (p_toe_1.z - .18) - p_toe_1.y * .228, .3 + .2 * cos((p_toe_1.z - .18) * 3.69), .35);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_28_1 = sdBox_return_value_1;\n"+
"toe_return_value_1 = max(sdBox_return_value_inlined_28_1, .1 - p_toe_1.y);\n"+
"toe_has_returned_1 = true;\n"+
"toe_return_value_inlined_30_1 = toe_return_value_1;\n"+
"d_foot_1 = toe_return_value_inlined_30_1;\n"+
"a_rot_1 = 1.57;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_31_1 = rot_return_value_1;\n"+
"p_foot_1.xz *= rot_return_value_inlined_31_1;\n"+
"p_foot_1.x -= .43;\n"+
"p_foot_1.z = .25 - abs(p_foot_1.z);\n"+
"p_toe_1 = p_foot_1;\n"+
"toe_has_returned_1 = false;\n"+
"p_toe_1.yz += vec2(.1, .32);\n"+
"p_sdBox_1 = p_toe_1;\n"+
"b_sdBox_1 = vec3(.3 + .2 * (p_toe_1.z - .18) - p_toe_1.y * .228, .3 + .2 * cos((p_toe_1.z - .18) * 3.69), .35);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_28_1 = sdBox_return_value_1;\n"+
"toe_return_value_1 = max(sdBox_return_value_inlined_28_1, .1 - p_toe_1.y);\n"+
"toe_has_returned_1 = true;\n"+
"toe_return_value_inlined_32_1 = toe_return_value_1;\n"+
"foot_return_value_1 = min(d_foot_1, toe_return_value_inlined_32_1);\n"+
"foot_has_returned_1 = true;\n"+
"foot_return_value_inlined_53_1 = foot_return_value_1;\n"+
"r_legs_1.d = min(r_legs_1.d, foot_return_value_inlined_53_1);\n"+
"if(silver_legs_1 < r_legs_1.d)\n"+
"{\n"+
"r_legs_1.d = silver_legs_1;\n"+
"r_legs_1.mat = vec3(.8);\n"+
"}\n"+
"legs_return_value_1 = r_legs_1;\n"+
"legs_has_returned_1 = true;\n"+
"legs_return_value_inlined_56_1 = legs_return_value_1;\n"+
"r_ed209_1 = legs_return_value_inlined_56_1;\n"+
"f_ed209_1 = min(stretch_1 * 2., 1.);\n"+
"slide_ed209_1 = f_ed209_1 < .5 ? smoothstep(0., .5, f_ed209_1) : (1. - smoothstep(.5, 1., f_ed209_1) * .2);\n"+
"p_ed209_1.yz -= slide_ed209_1 * .5;\n"+
"gunsUp_1 = smoothstep(0., 1., clamp((stretch_1 - .66) * 6., 0., 1.));\n"+
"fireShock_has_returned_1 = false;\n"+
"fireShock_return_value_1 = abs(sin(edShoot_1 * 78.5375));\n"+
"fireShock_has_returned_1 = true;\n"+
"fireShock_return_value_inlined_57_1 = fireShock_return_value_1;\n"+
"gunsForward_1 = smoothstep(0., 1., clamp((stretch_1 - .83) * 6., 0., 1.)) + fireShock_return_value_inlined_57_1 * .5;\n"+
"p_waist_1 = p_ed209_1;\n"+
"waist_has_returned_1 = false;\n"+
"mat_setBodyMaterial_1 = r_waist_1;\n"+
"mat_setBodyMaterial_1.mat = vec3(.36, .45, .5);\n"+
"mat_setBodyMaterial_1.specPower = 30.;\n"+
"r_waist_1 = mat_setBodyMaterial_1;\n"+
"p_waist_1.y += .65;\n"+
"a_rot_1 = - .2;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_33_1 = rot_return_value_1;\n"+
"p_waist_1.yz *= rot_return_value_inlined_33_1;\n"+
"f_legWalkAngle_1 = 1.;\n"+
"legWalkAngle_has_returned_1 = false;\n"+
"legWalkAngle_return_value_1 = sin(edWalk_1 * 3.141 * 6. * f_legWalkAngle_1) * .2;\n"+
"legWalkAngle_has_returned_1 = true;\n"+
"legWalkAngle_return_value_inlined_34_1 = legWalkAngle_return_value_1;\n"+
"legAngle_waist_1 = legWalkAngle_return_value_inlined_34_1;\n"+
"a_rot_1 = legAngle_waist_1 * .3;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_35_1 = rot_return_value_1;\n"+
"p_waist_1.xy *= rot_return_value_inlined_35_1;\n"+
"pp_waist_1 = p_waist_1;\n"+
"pp_waist_1.y += .3;\n"+
"p_sdCappedCylinder_1 = pp_waist_1.zyx;\n"+
"h_sdCappedCylinder_1 = .5;\n"+
"r_sdCappedCylinder_1 = .5;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_36_1 = sdCappedCylinder_return_value_1;\n"+
"r_waist_1.d = max(sdCappedCylinder_return_value_inlined_36_1, p_waist_1.y + .15);\n"+
"bump_waist_1 = .5 - abs(sin(p_waist_1.y * 40.)) * .03;\n"+
"p_sdBox_1 = p_waist_1;\n"+
"b_sdBox_1 = vec3(bump_waist_1, .15, bump_waist_1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_37_1 = sdBox_return_value_1;\n"+
"d_waist_1 = sdBox_return_value_inlined_37_1;\n"+
"bump_waist_1 = .3 - abs(sin(p_waist_1.x * 40.)) * .03;\n"+
"pp_waist_1.y += .18;\n"+
"p_sdCappedCylinder_1 = pp_waist_1.zyx;\n"+
"h_sdCappedCylinder_1 = bump_waist_1;\n"+
"r_sdCappedCylinder_1 = .75;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_38_1 = sdCappedCylinder_return_value_1;\n"+
"d_waist_1 = min(d_waist_1, sdCappedCylinder_return_value_inlined_38_1);\n"+
"pp_waist_1.x = abs(pp_waist_1.x);\n"+
"a_rot_1 = - .58525 + legAngle_waist_1 * sign(p_waist_1.x);\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_39_1 = rot_return_value_1;\n"+
"pp_waist_1.yz *= rot_return_value_inlined_39_1;\n"+
"pp_waist_1.x -= .98;\n"+
"p_sdCappedCylinder_1 = pp_waist_1.zyx;\n"+
"h_sdCappedCylinder_1 = .4;\n"+
"r_sdCappedCylinder_1 = .24;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_40_1 = sdCappedCylinder_return_value_1;\n"+
"r_waist_1.d = min(r_waist_1.d, max(sdCappedCylinder_return_value_inlined_40_1, - pp_waist_1.y));\n"+
"p_sdBox_1 = pp_waist_1;\n"+
"b_sdBox_1 = vec3(.24, .2, .14 + .2 * pp_waist_1.y);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_41_1 = sdBox_return_value_1;\n"+
"r_waist_1.d = min(r_waist_1.d, sdBox_return_value_inlined_41_1);\n"+
"p_waist_1 = pp_waist_1;\n"+
"pp_waist_1.xz = abs(pp_waist_1.xz) - vec2(.12, .25);\n"+
"p_sdCappedCylinder_1 = pp_waist_1.xzy;\n"+
"h_sdCappedCylinder_1 = .1;\n"+
"r_sdCappedCylinder_1 = .325;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_42_1 = sdCappedCylinder_return_value_1;\n"+
"p_sdCappedCylinder_1 = pp_waist_1.xzy;\n"+
"h_sdCappedCylinder_1 = .05;\n"+
"r_sdCappedCylinder_1 = .5;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_43_1 = sdCappedCylinder_return_value_1;\n"+
"r_waist_1.d = min(r_waist_1.d, max(min(sdCappedCylinder_return_value_inlined_42_1, sdCappedCylinder_return_value_inlined_43_1), pp_waist_1.y));\n"+
"p_waist_1.y += .68;\n"+
"p_sdBox_1 = p_waist_1;\n"+
"b_sdBox_1 = vec3(sign(abs(p_waist_1.y) - .04) * .005 + .26, .2, .34);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_44_1 = sdBox_return_value_1;\n"+
"r_waist_1.d = min(r_waist_1.d, sdBox_return_value_inlined_44_1);\n"+
"if(d_waist_1 < r_waist_1.d)\n"+
"{\n"+
"r_waist_1.d = d_waist_1;\n"+
"r_waist_1.mat = vec3(.02);\n"+
"}\n"+
"waist_return_value_1 = r_waist_1;\n"+
"waist_has_returned_1 = true;\n"+
"waist_return_value_inlined_58_1 = waist_return_value_1;\n"+
"a_minResult_1 = r_ed209_1;\n"+
"b_minResult_1 = waist_return_value_inlined_58_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_59_1 = minResult_return_value_1;\n"+
"r_ed209_1 = minResult_return_value_inlined_59_1;\n"+
"f_legWalkAngle_1 = 2.;\n"+
"legWalkAngle_has_returned_1 = false;\n"+
"legWalkAngle_return_value_1 = sin(edWalk_1 * 3.141 * 6. * f_legWalkAngle_1) * .2;\n"+
"legWalkAngle_has_returned_1 = true;\n"+
"legWalkAngle_return_value_inlined_60_1 = legWalkAngle_return_value_1;\n"+
"a_rot_1 = .1 * (- edDown_1 + legWalkAngle_return_value_inlined_60_1 + smoothstep(0., 1., clamp((stretch_1 - .5) * 6., 0., 1.)) - 1.);\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_61_1 = rot_return_value_1;\n"+
"p_ed209_1.yz *= rot_return_value_inlined_61_1;\n"+
"a_rot_1 = edTwist_1 * .2;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_62_1 = rot_return_value_1;\n"+
"p_ed209_1.xz *= rot_return_value_inlined_62_1;\n"+
"p_headLower_1 = p_ed209_1;\n"+
"headLower_has_returned_1 = false;\n"+
"op_headLower_1 = p_headLower_1;\n"+
"p_headVisor_1 = p_headLower_1 * vec3(.95, - 1.4, .95);\n"+
"h_headVisor_1 = 1.;\n"+
"bump_headVisor_1 = 0.;\n"+
"headVisor_has_returned_1 = false;\n"+
"bump_headVisor_1 *= sin(p_headVisor_1.x * 150.) * sin(p_headVisor_1.y * 150.) * .002;\n"+
"p_sdBox_1 = p_headVisor_1;\n"+
"b_sdBox_1 = vec3(1, h_headVisor_1, 2);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_3_1 = sdBox_return_value_1;\n"+
"result_headVisor_1.d = sdBox_return_value_inlined_3_1;\n"+
"p_headSphere_1 = p_headVisor_1;\n"+
"headSphere_has_returned_1 = false;\n"+
"headSphere_return_value_1 = (length(p_headSphere_1 / vec3(1, .8, 1)) - 1.) * .8;\n"+
"headSphere_has_returned_1 = true;\n"+
"headSphere_return_value_inlined_4_1 = headSphere_return_value_1;\n"+
"result_headVisor_1.d = max(mix(result_headVisor_1.d, headSphere_return_value_inlined_4_1, .57), - p_headVisor_1.y) - bump_headVisor_1;\n"+
"result_headVisor_1.mat = vec3(.05);\n"+
"result_headVisor_1.specPower = 30.;\n"+
"headVisor_return_value_1 = result_headVisor_1;\n"+
"headVisor_has_returned_1 = true;\n"+
"headVisor_return_value_inlined_5_1 = headVisor_return_value_1;\n"+
"r_headLower_1 = headVisor_return_value_inlined_5_1;\n"+
"p_headVisor_1 = (p_headLower_1 + vec3(0, .01, 0)) * vec3(.95);\n"+
"h_headVisor_1 = 1.;\n"+
"bump_headVisor_1 = 0.;\n"+
"headVisor_has_returned_1 = false;\n"+
"bump_headVisor_1 *= sin(p_headVisor_1.x * 150.) * sin(p_headVisor_1.y * 150.) * .002;\n"+
"p_sdBox_1 = p_headVisor_1;\n"+
"b_sdBox_1 = vec3(1, h_headVisor_1, 2);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_3_1 = sdBox_return_value_1;\n"+
"result_headVisor_1.d = sdBox_return_value_inlined_3_1;\n"+
"p_headSphere_1 = p_headVisor_1;\n"+
"headSphere_has_returned_1 = false;\n"+
"headSphere_return_value_1 = (length(p_headSphere_1 / vec3(1, .8, 1)) - 1.) * .8;\n"+
"headSphere_has_returned_1 = true;\n"+
"headSphere_return_value_inlined_4_1 = headSphere_return_value_1;\n"+
"result_headVisor_1.d = max(mix(result_headVisor_1.d, headSphere_return_value_inlined_4_1, .57), - p_headVisor_1.y) - bump_headVisor_1;\n"+
"result_headVisor_1.mat = vec3(.05);\n"+
"result_headVisor_1.specPower = 30.;\n"+
"headVisor_return_value_1 = result_headVisor_1;\n"+
"headVisor_has_returned_1 = true;\n"+
"headVisor_return_value_inlined_6_1 = headVisor_return_value_1;\n"+
"r_headLower_1.d = min(r_headLower_1.d, max(max(headVisor_return_value_inlined_6_1.d, p_headLower_1.y - .35), p_headLower_1.y * .625 - p_headLower_1.z - .66));\n"+
"a_rot_1 = .075 * (gunsUp_1 - 1.) * sign(p_headLower_1.x);\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_7_1 = rot_return_value_1;\n"+
"p_headLower_1.xy *= rot_return_value_inlined_7_1;\n"+
"p_headLower_1.x = abs(p_headLower_1.x) - 1.33;\n"+
"p_headLower_1.y -= .1 - p_headLower_1.x * .1;\n"+
"p_sdBox_1 = p_headLower_1;\n"+
"b_sdBox_1 = vec3(.4, .06 * (1. - p_headLower_1.x), .3 - p_headLower_1.x * .2);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_8_1 = sdBox_return_value_1;\n"+
"r_headLower_1.d = min(r_headLower_1.d, sdBox_return_value_inlined_8_1);\n"+
"p_headLower_1 = op_headLower_1;\n"+
"p_headLower_1.y = abs(abs(p_headLower_1.y + .147) - .0556) - .0278;\n"+
"p_sdBox_1 = p_headLower_1 + vec3(0, 0, 1.5);\n"+
"b_sdBox_1 = vec3(mix(.25, .55, - op_headLower_1.y), .015, .1);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_9_1 = sdBox_return_value_1;\n"+
"r_headLower_1.d = max(r_headLower_1.d, - sdBox_return_value_inlined_9_1);\n"+
"p_headLower_1 = op_headLower_1;\n"+
"p_headLower_1.y = abs(p_headLower_1.y + .16) - .06;\n"+
"p_headLower_1.z -= - 1.1;\n"+
"p_sdCappedCylinder_1 = p_headLower_1.xzy;\n"+
"h_sdCappedCylinder_1 = 1.;\n"+
"r_sdCappedCylinder_1 = .03;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_10_1 = sdCappedCylinder_return_value_1;\n"+
"p_sdCappedCylinder_1 = p_headLower_1.xzy;\n"+
"h_sdCappedCylinder_1 = .55;\n"+
"r_sdCappedCylinder_1 = 1.;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_11_1 = sdCappedCylinder_return_value_1;\n"+
"r_headLower_1.d = max(r_headLower_1.d, - max(max(sdCappedCylinder_return_value_inlined_10_1, - sdCappedCylinder_return_value_inlined_11_1), p_headLower_1.z + .2));\n"+
"mat_setBodyMaterial_1 = r_headLower_1;\n"+
"mat_setBodyMaterial_1.mat = vec3(.36, .45, .5);\n"+
"mat_setBodyMaterial_1.specPower = 30.;\n"+
"r_headLower_1 = mat_setBodyMaterial_1;\n"+
"headLower_return_value_1 = r_headLower_1;\n"+
"headLower_has_returned_1 = true;\n"+
"headLower_return_value_inlined_63_1 = headLower_return_value_1;\n"+
"a_minResult_1 = r_ed209_1;\n"+
"b_minResult_1 = headLower_return_value_inlined_63_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_64_1 = minResult_return_value_1;\n"+
"p_headVisor_1 = p_ed209_1;\n"+
"h_headVisor_1 = .8;\n"+
"bump_headVisor_1 = 1.;\n"+
"headVisor_has_returned_1 = false;\n"+
"bump_headVisor_1 *= sin(p_headVisor_1.x * 150.) * sin(p_headVisor_1.y * 150.) * .002;\n"+
"p_sdBox_1 = p_headVisor_1;\n"+
"b_sdBox_1 = vec3(1, h_headVisor_1, 2);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_3_1 = sdBox_return_value_1;\n"+
"result_headVisor_1.d = sdBox_return_value_inlined_3_1;\n"+
"p_headSphere_1 = p_headVisor_1;\n"+
"headSphere_has_returned_1 = false;\n"+
"headSphere_return_value_1 = (length(p_headSphere_1 / vec3(1, .8, 1)) - 1.) * .8;\n"+
"headSphere_has_returned_1 = true;\n"+
"headSphere_return_value_inlined_4_1 = headSphere_return_value_1;\n"+
"result_headVisor_1.d = max(mix(result_headVisor_1.d, headSphere_return_value_inlined_4_1, .57), - p_headVisor_1.y) - bump_headVisor_1;\n"+
"result_headVisor_1.mat = vec3(.05);\n"+
"result_headVisor_1.specPower = 30.;\n"+
"headVisor_return_value_1 = result_headVisor_1;\n"+
"headVisor_has_returned_1 = true;\n"+
"headVisor_return_value_inlined_65_1 = headVisor_return_value_1;\n"+
"a_minResult_1 = minResult_return_value_inlined_64_1;\n"+
"b_minResult_1 = headVisor_return_value_inlined_65_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_66_1 = minResult_return_value_1;\n"+
"p_arms_1 = p_ed209_1;\n"+
"arms_has_returned_1 = false;\n"+
"mat_setBodyMaterial_1 = r_arms_1;\n"+
"mat_setBodyMaterial_1.mat = vec3(.36, .45, .5);\n"+
"mat_setBodyMaterial_1.specPower = 30.;\n"+
"r_arms_1 = mat_setBodyMaterial_1;\n"+
"p_arms_1.x = abs(p_arms_1.x);\n"+
"p_arms_1.yz += vec2(.24, 0);\n"+
"a_rot_1 = .15 * (gunsUp_1 - 1.);\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_23_1 = rot_return_value_1;\n"+
"p_arms_1.xy *= rot_return_value_inlined_23_1;\n"+
"p_sdCapsule_1 = p_arms_1;\n"+
"a_sdCapsule_1 = vec3(0);\n"+
"b_sdCapsule_1 = vec3(1.5, 0, 0);\n"+
"r_sdCapsule_1 = .2;\n"+
"sdCapsule_has_returned_1 = false;\n"+
"pa_sdCapsule_1 = p_sdCapsule_1 - a_sdCapsule_1;\n"+
"ba_sdCapsule_1 = b_sdCapsule_1 - a_sdCapsule_1;\n"+
"sdCapsule_return_value_1 = length(pa_sdCapsule_1 - ba_sdCapsule_1 * clamp(dot(pa_sdCapsule_1, ba_sdCapsule_1) / dot(ba_sdCapsule_1, ba_sdCapsule_1), 0., 1.)) - r_sdCapsule_1;\n"+
"sdCapsule_has_returned_1 = true;\n"+
"sdCapsule_return_value_inlined_24_1 = sdCapsule_return_value_1;\n"+
"p_sdCapsule_1 = p_arms_1;\n"+
"a_sdCapsule_1 = vec3(1.5, 0, 0);\n"+
"b_sdCapsule_1 = wrist_arms_1;\n"+
"r_sdCapsule_1 = .2;\n"+
"sdCapsule_has_returned_1 = false;\n"+
"pa_sdCapsule_1 = p_sdCapsule_1 - a_sdCapsule_1;\n"+
"ba_sdCapsule_1 = b_sdCapsule_1 - a_sdCapsule_1;\n"+
"sdCapsule_return_value_1 = length(pa_sdCapsule_1 - ba_sdCapsule_1 * clamp(dot(pa_sdCapsule_1, ba_sdCapsule_1) / dot(ba_sdCapsule_1, ba_sdCapsule_1), 0., 1.)) - r_sdCapsule_1;\n"+
"sdCapsule_has_returned_1 = true;\n"+
"sdCapsule_return_value_inlined_25_1 = sdCapsule_return_value_1;\n"+
"r_arms_1.d = min(sdCapsule_return_value_inlined_24_1, sdCapsule_return_value_inlined_25_1);\n"+
"p_arms_1 -= wrist_arms_1;\n"+
"p_arms_1.z -= gunsForward_1 * .15;\n"+
"p_gunPod_1 = p_arms_1;\n"+
"gunPod_has_returned_1 = false;\n"+
"mat_setBodyMaterial_1 = r_gunPod_1;\n"+
"mat_setBodyMaterial_1.mat = vec3(.36, .45, .5);\n"+
"mat_setBodyMaterial_1.specPower = 30.;\n"+
"r_gunPod_1 = mat_setBodyMaterial_1;\n"+
"p_gunPod_1.yz += vec2(.1, .45);\n"+
"pp_gunPod_1 = p_gunPod_1;\n"+
"pp_gunPod_1.z = abs(pp_gunPod_1.z) - .5;\n"+
"p_sdCappedCone_1 = pp_gunPod_1;\n"+
"a_sdCappedCone_1 = vec3(0);\n"+
"b_sdCappedCone_1 = vec3(0, 0, - .1);\n"+
"ra_sdCappedCone_1 = .35 - .1;\n"+
"rb_sdCappedCone_1 = .35;\n"+
"sdCappedCone_has_returned_1 = false;\n"+
"rba_sdCappedCone_1 = rb_sdCappedCone_1 - ra_sdCappedCone_1;\n"+
"baba_sdCappedCone_1 = dot(b_sdCappedCone_1 - a_sdCappedCone_1, b_sdCappedCone_1 - a_sdCappedCone_1);\n"+
"papa_sdCappedCone_1 = dot(p_sdCappedCone_1 - a_sdCappedCone_1, p_sdCappedCone_1 - a_sdCappedCone_1);\n"+
"paba_sdCappedCone_1 = dot(p_sdCappedCone_1 - a_sdCappedCone_1, b_sdCappedCone_1 - a_sdCappedCone_1) / baba_sdCappedCone_1;\n"+
"x_sdCappedCone_1 = sqrt(papa_sdCappedCone_1 - paba_sdCappedCone_1 * paba_sdCappedCone_1 * baba_sdCappedCone_1);\n"+
"cax_sdCappedCone_1 = max(0., x_sdCappedCone_1 - ((paba_sdCappedCone_1 < .5) ? ra_sdCappedCone_1 : rb_sdCappedCone_1));\n"+
"cay_sdCappedCone_1 = abs(paba_sdCappedCone_1 - .5) - .5;\n"+
"f_sdCappedCone_1 = clamp((rba_sdCappedCone_1 * (x_sdCappedCone_1 - ra_sdCappedCone_1) + paba_sdCappedCone_1 * baba_sdCappedCone_1) / (rba_sdCappedCone_1 * rba_sdCappedCone_1 + baba_sdCappedCone_1), 0., 1.);\n"+
"cbx_sdCappedCone_1 = x_sdCappedCone_1 - ra_sdCappedCone_1 - f_sdCappedCone_1 * rba_sdCappedCone_1;\n"+
"cby_sdCappedCone_1 = paba_sdCappedCone_1 - f_sdCappedCone_1;\n"+
"sdCappedCone_return_value_1 = ((cbx_sdCappedCone_1 < 0. && cay_sdCappedCone_1 < 0.) ? - 1. : 1.) * sqrt(min(cax_sdCappedCone_1 * cax_sdCappedCone_1 + cay_sdCappedCone_1 * cay_sdCappedCone_1 * baba_sdCappedCone_1, cbx_sdCappedCone_1 * cbx_sdCappedCone_1 + cby_sdCappedCone_1 * cby_sdCappedCone_1 * baba_sdCappedCone_1));\n"+
"sdCappedCone_has_returned_1 = true;\n"+
"sdCappedCone_return_value_inlined_12_1 = sdCappedCone_return_value_1;\n"+
"r_gunPod_1.d = sdCappedCone_return_value_inlined_12_1;\n"+
"p_sdCappedCylinder_1 = p_gunPod_1;\n"+
"h_sdCappedCylinder_1 = .35;\n"+
"r_sdCappedCylinder_1 = .4;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_13_1 = sdCappedCylinder_return_value_1;\n"+
"r_gunPod_1.d = min(r_gunPod_1.d, sdCappedCylinder_return_value_inlined_13_1);\n"+
"pp_gunPod_1 = vec3(p_gunPod_1.x, .28 - p_gunPod_1.y, p_gunPod_1.z);\n"+
"p_sdTriPrism_1 = pp_gunPod_1;\n"+
"h_sdTriPrism_1 = vec2(.1, .5);\n"+
"sdTriPrism_has_returned_1 = false;\n"+
"q_sdTriPrism_1 = abs(p_sdTriPrism_1);\n"+
"sdTriPrism_return_value_1 = max(q_sdTriPrism_1.z - h_sdTriPrism_1.y, max(q_sdTriPrism_1.x * .866025 + p_sdTriPrism_1.y * .5, - p_sdTriPrism_1.y) - h_sdTriPrism_1.x * .5);\n"+
"sdTriPrism_has_returned_1 = true;\n"+
"sdTriPrism_return_value_inlined_14_1 = sdTriPrism_return_value_1;\n"+
"r_gunPod_1.d = min(r_gunPod_1.d, sdTriPrism_return_value_inlined_14_1);\n"+
"pp_gunPod_1 = p_gunPod_1;\n"+
"pp_gunPod_1.x = abs(p_gunPod_1.x);\n"+
"a_rot_1 = .78525;\n"+
"rot_has_returned_1 = false;\n"+
"c_rot_1 = cos(a_rot_1);\n"+
"s_rot_1 = sin(a_rot_1);\n"+
"rot_return_value_1 = mat2(c_rot_1, s_rot_1, - s_rot_1, c_rot_1);\n"+
"rot_has_returned_1 = true;\n"+
"rot_return_value_inlined_15_1 = rot_return_value_1;\n"+
"pp_gunPod_1.xy *= rot_return_value_inlined_15_1;\n"+
"bump_gunPod_1 = sign(sin(pp_gunPod_1.z * 33.3)) * .003;\n"+
"p_sdBox_1 = pp_gunPod_1;\n"+
"b_sdBox_1 = vec3(.1 - bump_gunPod_1, .38 - bump_gunPod_1, .34);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_16_1 = sdBox_return_value_1;\n"+
"d_gunPod_1 = sdBox_return_value_inlined_16_1 - .02;\n"+
"pp_gunPod_1 = p_gunPod_1 - vec3(0, 0, - .6);\n"+
"pp_gunPod_1.x = abs(pp_gunPod_1.x) - .1;\n"+
"p_sdCappedCylinder_1 = pp_gunPod_1;\n"+
"h_sdCappedCylinder_1 = .06;\n"+
"r_sdCappedCylinder_1 = .15;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_17_1 = sdCappedCylinder_return_value_1;\n"+
"p_sdCappedCylinder_1 = pp_gunPod_1 + vec3(0, .12, - .05);\n"+
"h_sdCappedCylinder_1 = .06;\n"+
"r_sdCappedCylinder_1 = .05;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_18_1 = sdCappedCylinder_return_value_1;\n"+
"p_sdBox_1 = p_gunPod_1 + vec3(0, 0, .54);\n"+
"b_sdBox_1 = vec3(.1, .06, .04);\n"+
"sdBox_has_returned_1 = false;\n"+
"q_sdBox_1 = abs(p_sdBox_1) - b_sdBox_1;\n"+
"sdBox_return_value_1 = length(max(q_sdBox_1, 0.)) + min(max(q_sdBox_1.x, max(q_sdBox_1.y, q_sdBox_1.z)), 0.);\n"+
"sdBox_has_returned_1 = true;\n"+
"sdBox_return_value_inlined_19_1 = sdBox_return_value_1;\n"+
"d_gunPod_1 = min(min(min(d_gunPod_1, sdCappedCylinder_return_value_inlined_17_1), sdCappedCylinder_return_value_inlined_18_1), sdBox_return_value_inlined_19_1);\n"+
"if(d_gunPod_1 < r_gunPod_1.d)\n"+
"{\n"+
"p_sdCappedCylinder_1 = pp_gunPod_1 + vec3(0, 0, .1);\n"+
"h_sdCappedCylinder_1 = .03;\n"+
"r_sdCappedCylinder_1 = .2;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_20_1 = sdCappedCylinder_return_value_1;\n"+
"d_gunPod_1 = max(d_gunPod_1, - sdCappedCylinder_return_value_inlined_20_1);\n"+
"r_gunPod_1.d = d_gunPod_1;\n"+
"r_gunPod_1.mat = vec3(.02);\n"+
"}\n"+
"fireShock_has_returned_1 = false;\n"+
"fireShock_return_value_1 = abs(sin(edShoot_1 * 78.5375));\n"+
"fireShock_has_returned_1 = true;\n"+
"fireShock_return_value_inlined_21_1 = fireShock_return_value_1;\n"+
"fs_gunPod_1 = fireShock_return_value_inlined_21_1;\n"+
"if(fs_gunPod_1 > .5)\n"+
"{\n"+
"p_sdCappedCylinder_1 = pp_gunPod_1;\n"+
"h_sdCappedCylinder_1 = .01 + pp_gunPod_1.z * .05;\n"+
"r_sdCappedCylinder_1 = fract(fs_gunPod_1 * 3322.423) * .5 + .9;\n"+
"sdCappedCylinder_has_returned_1 = false;\n"+
"d_sdCappedCylinder_1 = abs(vec2(length(p_sdCappedCylinder_1.xy), p_sdCappedCylinder_1.z)) - vec2(h_sdCappedCylinder_1, r_sdCappedCylinder_1);\n"+
"sdCappedCylinder_return_value_1 = min(max(d_sdCappedCylinder_1.x, d_sdCappedCylinder_1.y), 0.) + length(max(d_sdCappedCylinder_1, 0.));\n"+
"sdCappedCylinder_has_returned_1 = true;\n"+
"sdCappedCylinder_return_value_inlined_22_1 = sdCappedCylinder_return_value_1;\n"+
"d_gunPod_1 = sdCappedCylinder_return_value_inlined_22_1;\n"+
"if(d_gunPod_1 < r_gunPod_1.d)\n"+
"{\n"+
"r_gunPod_1.d = d_gunPod_1;\n"+
"r_gunPod_1.mat = vec3(1);\n"+
"glow_1 += .1 / (.01 + d_gunPod_1 * d_gunPod_1 * 4e2);\n"+
"}\n"+
"}\n"+
"gunPod_return_value_1 = r_gunPod_1;\n"+
"gunPod_has_returned_1 = true;\n"+
"gunPod_return_value_inlined_26_1 = gunPod_return_value_1;\n"+
"a_minResult_1 = r_arms_1;\n"+
"b_minResult_1 = gunPod_return_value_inlined_26_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_27_1 = minResult_return_value_1;\n"+
"arms_return_value_1 = minResult_return_value_inlined_27_1;\n"+
"arms_has_returned_1 = true;\n"+
"arms_return_value_inlined_67_1 = arms_return_value_1;\n"+
"a_minResult_1 = minResult_return_value_inlined_66_1;\n"+
"b_minResult_1 = arms_return_value_inlined_67_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_68_1 = minResult_return_value_1;\n"+
"ed209_return_value_1 = minResult_return_value_inlined_68_1;\n"+
"ed209_has_returned_1 = true;\n"+
"ed209_return_value_inlined_79_1 = ed209_return_value_1;\n"+
"a_minResult_1 = room_return_value_inlined_78_1;\n"+
"b_minResult_1 = ed209_return_value_inlined_79_1;\n"+
"minResult_has_returned_1 = false;\n"+
"if(a_minResult_1.d < b_minResult_1.d)\n"+
"{\n"+
"minResult_return_value_1 = a_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"if(! minResult_has_returned_1)\n"+
"{\n"+
"minResult_return_value_1 = b_minResult_1;\n"+
"minResult_has_returned_1 = true;\n"+
"}\n"+
"minResult_return_value_inlined_80_1 = minResult_return_value_1;\n"+
"r_map_1 = minResult_return_value_inlined_80_1;\n"+
"gnd_map_1 = length(p_map_1.y + 3.);\n"+
"if(gnd_map_1 < r_map_1.d)\n"+
"{\n"+
"r_map_1.d = gnd_map_1;\n"+
"r_map_1.mat = vec3(.1);\n"+
"}\n"+
"map_return_value_1 = r_map_1;\n"+
"map_has_returned_1 = true;\n"+
"map_return_value_inlined_86_1 = map_return_value_1;\n"+
"ao_return_value_1 = map_return_value_inlined_86_1.d / h_ao_1;\n"+
"ao_has_returned_1 = true;\n"+
"ao_return_value_inlined_89_1 = ao_return_value_1;\n"+
"applyLighting_return_value_1 = mix(data_applyLighting_1.mat * ((primary_applyLighting_1 + bounce_applyLighting_1) * ao_return_value_inlined_89_1 + spe_applyLighting_1) * vec3(2, 1.6, 1.7), vec3(.01), fre_applyLighting_1) * fog_applyLighting_1;\n"+
"applyLighting_has_returned_1 = true;\n"+
"applyLighting_return_value_inlined_91_1 = applyLighting_return_value_1;\n"+
"fireShock_has_returned_1 = false;\n"+
"fireShock_return_value_1 = abs(sin(edShoot_1 * 78.5375));\n"+
"fireShock_has_returned_1 = true;\n"+
"fireShock_return_value_inlined_92_1 = fireShock_return_value_1;\n"+
"getSceneColor_return_value_1 = applyLighting_return_value_inlined_91_1 + fireShock_return_value_inlined_92_1 * .3 + g_getSceneColor_1;\n"+
"getSceneColor_has_returned_1 = true;\n"+
"}\n"+
"getSceneColor_return_value_inlined_112_1 = getSceneColor_return_value_1;\n"+
"col_mainImage_1 += getSceneColor_return_value_inlined_112_1;\n"+
"col_vignette_1 = pow(max(col_mainImage_1 * dim_mainImage_1, 1e-9), vec3(.4545));\n"+
"fragCoord_vignette_1 = gl_FragCoord.xy;\n"+
"vignette_has_returned_1 = false;\n"+
"q_vignette_1 = fragCoord_vignette_1.xy / iResolution.xy;\n"+
"col_vignette_1 *= .5 + .5 * pow(max(16. * q_vignette_1.x * q_vignette_1.y * (1. - q_vignette_1.x) * (1. - q_vignette_1.y), 1e-9), .4);\n"+
"vignette_return_value_1 = col_vignette_1;\n"+
"vignette_has_returned_1 = true;\n"+
"vignette_return_value_inlined_113_1 = vignette_return_value_1;\n"+
"fragColor_1 = vec4(vignette_return_value_inlined_113_1, 1);\n"+
"fragColor_1.w = 1.0;\n"+
"fragColor = mix(fragColor_2, fragColor_1, 1.0 - fragColor_2.a + iTime);\n"+
"}\n"+
"";


var bug3Src = "#version 300 es\n"+
"precision highp float;\n"+
"\n"+
"layout(location = 0) out vec4 fragColor;\n"+
"\n"+
"uniform vec2 iResolution;\n"+
"\n"+
"uniform float iTime;\n"+
"\n"+
"uniform float iTimeDelta;\n"+
"\n"+
"uniform vec4 iMouse;\n"+
"\n"+
"uniform int iFrame;\n"+
"\n"+
"vec4 fragColor_1;\n"+
"\n"+
"vec4 fragColor_2;\n"+
"\n"+
"void main()\n"+
"{\n"+
"vec2 uv_main_1;\n"+
"vec2 mouse_main_1;\n"+
"float yaw_main_1;\n"+
"float pitch_main_1;\n"+
"vec4 cs_main_1;\n"+
"vec3 ro_main_1;\n"+
"vec3 lookAt_main_1;\n"+
"vec3 f_main_1;\n"+
"vec3 r_main_1;\n"+
"vec3 u_main_1;\n"+
"vec3 c_main_1;\n"+
"vec3 i_main_1;\n"+
"vec3 rd_main_1;\n"+
"vec3 col_main_1;\n"+
"vec3 n_main_1;\n"+
"vec3 reflOri_main_1;\n"+
"vec3 reflDir_main_1;\n"+
"int r_int_main_1;\n"+
"vec3 n_offset_1;\n"+
"bool offset_1_has_returned;\n"+
"vec3 offset_1_return_value;\n"+
"vec3 offset_1_return_value_inlined_11;\n"+
"vec3 off_main_1;\n"+
"vec3 ro_RayMarch_1;\n"+
"vec3 rd_RayMarch_1;\n"+
"float side_RayMarch_1;\n"+
"bool RayMarch_1_has_returned;\n"+
"float RayMarch_1_return_value;\n"+
"float dO_RayMarch_1;\n"+
"int i_RayMarch_1;\n"+
"vec3 p_RayMarch_1;\n"+
"vec3 p_GetDist_1;\n"+
"bool GetDist_1_has_returned;\n"+
"float GetDist_1_return_value;\n"+
"vec3 p_sdGrid_1;\n"+
"bool sdGrid_1_has_returned;\n"+
"float sdGrid_1_return_value;\n"+
"float plane_sdGrid_1;\n"+
"float sdGrid_1_return_value_inlined_4;\n"+
"float grid_GetDist_1;\n"+
"vec3 p_sdSpheres_1;\n"+
"bool sdSpheres_1_has_returned;\n"+
"float sdSpheres_1_return_value;\n"+
"vec2 p_Hash21_1;\n"+
"bool Hash21_1_has_returned;\n"+
"float Hash21_1_return_value;\n"+
"float Hash21_1_return_value_inlined_3;\n"+
"float off_sdSpheres_1;\n"+
"float sphereY_sdSpheres_1;\n"+
"vec3 pos_sdSpheres_1;\n"+
"float sdSpheres_1_return_value_inlined_5;\n"+
"float spheres_GetDist_1;\n"+
"float GetDist_1_return_value_inlined_10;\n"+
"float dS_RayMarch_1;\n"+
"float RayMarch_1_return_value_inlined_12;\n"+
"float d_main_1;\n"+
"vec3 spec_main_1;\n"+
"float sdGrid_1_return_value_inlined_13;\n"+
"float sdSpheres_1_return_value_inlined_14;\n"+
"vec2 p_Hash21Color_1;\n"+
"bool Hash21Color_1_has_returned;\n"+
"vec3 Hash21Color_1_return_value;\n"+
"float Hash21_1_return_value_inlined_0;\n"+
"float r_Hash21Color_1;\n"+
"float Hash21_1_return_value_inlined_1;\n"+
"float g_Hash21Color_1;\n"+
"float Hash21_1_return_value_inlined_2;\n"+
"float b_Hash21Color_1;\n"+
"vec3 Hash21Color_1_return_value_inlined_15;\n"+
"vec3 p_GetNormal_1;\n"+
"bool GetNormal_1_has_returned;\n"+
"vec3 GetNormal_1_return_value;\n"+
"float GetDist_1_return_value_inlined_6;\n"+
"float d_GetNormal_1;\n"+
"vec2 e_GetNormal_1;\n"+
"float GetDist_1_return_value_inlined_7;\n"+
"float GetDist_1_return_value_inlined_8;\n"+
"float GetDist_1_return_value_inlined_9;\n"+
"vec3 GetNormal_1_return_value_inlined_16;\n"+
"vec3 p_GetLight_1;\n"+
"vec3 n_GetLight_1;\n"+
"bool GetLight_1_has_returned;\n"+
"float GetLight_1_return_value;\n"+
"vec3 l_GetLight_1;\n"+
"float diff_GetLight_1;\n"+
"float GetLight_1_return_value_inlined_17;\n"+
"float diff_main_1;\n"+
"float t_main_2;\n"+
"vec2 uv_main_2;\n"+
"vec2 m_main_2;\n"+
"float s_main_2;\n"+
"float c_main_2;\n"+
"float d_main_2;\n"+
"float smile_main_2;\n"+
"vec2 uv_Smiley_2;\n"+
"vec2 m_Smiley_2;\n"+
"float smile_Smiley_2;\n"+
"bool Smiley_2_has_returned;\n"+
"vec4 Smiley_2_return_value;\n"+
"vec4 col_Smiley_2;\n"+
"float side_Smiley_2;\n"+
"vec2 uv_Head_2;\n"+
"bool Head_2_has_returned;\n"+
"vec4 Head_2_return_value;\n"+
"vec4 col_Head_2;\n"+
"float d_Head_2;\n"+
"float a_remap01_2;\n"+
"float b_remap01_2;\n"+
"float t_remap01_2;\n"+
"bool remap01_2_has_returned;\n"+
"float remap01_2_return_value;\n"+
"float remap01_2_return_value_inlined_19;\n"+
"float edgeShade_Head_2;\n"+
"float highlight_Head_2;\n"+
"float a_remap_2;\n"+
"float b_remap_2;\n"+
"float c_remap_2;\n"+
"float d_remap_2;\n"+
"float t_remap_2;\n"+
"bool remap_2_has_returned;\n"+
"float remap_2_return_value;\n"+
"float remap_2_return_value_inlined_20;\n"+
"float cheek_Head_2;\n"+
"vec4 Head_2_return_value_inlined_21;\n"+
"vec4 head_Smiley_2;\n"+
"vec2 uv_within_2;\n"+
"vec4 rect_within_2;\n"+
"bool within_2_has_returned;\n"+
"vec2 within_2_return_value;\n"+
"vec2 within_2_return_value_inlined_22;\n"+
"vec2 uv_Eye_2;\n"+
"float side_Eye_2;\n"+
"vec2 m_Eye_2;\n"+
"float smile_Eye_2;\n"+
"bool Eye_2_has_returned;\n"+
"vec4 Eye_2_return_value;\n"+
"float d_Eye_2;\n"+
"vec4 irisCol_Eye_2;\n"+
"vec4 col_Eye_2;\n"+
"float irisMask_Eye_2;\n"+
"float pupilSize_Eye_2;\n"+
"float pupilMask_Eye_2;\n"+
"float t_Eye_2;\n"+
"vec2 offs_Eye_2;\n"+
"float highlight_Eye_2;\n"+
"vec4 Eye_2_return_value_inlined_23;\n"+
"vec4 eye_Smiley_2;\n"+
"vec2 within_2_return_value_inlined_24;\n"+
"vec2 uv_Mouth_2;\n"+
"float smile_Mouth_2;\n"+
"bool Mouth_2_has_returned;\n"+
"vec4 Mouth_2_return_value;\n"+
"vec4 col_Mouth_2;\n"+
"float d_Mouth_2;\n"+
"vec2 tUv_Mouth_2;\n"+
"float td_Mouth_2;\n"+
"vec3 toothCol_Mouth_2;\n"+
"vec4 Mouth_2_return_value_inlined_25;\n"+
"vec4 mouth_Smiley_2;\n"+
"vec2 within_2_return_value_inlined_26;\n"+
"vec2 uv_Brow_2;\n"+
"float smile_Brow_2;\n"+
"bool Brow_2_has_returned;\n"+
"vec4 Brow_2_return_value;\n"+
"float offs_Brow_2;\n"+
"float y_Brow_2;\n"+
"vec4 col_Brow_2;\n"+
"float blur_Brow_2;\n"+
"float d1_Brow_2;\n"+
"float s1_Brow_2;\n"+
"float d2_Brow_2;\n"+
"float s2_Brow_2;\n"+
"float browMask_Brow_2;\n"+
"float remap01_2_return_value_inlined_18;\n"+
"float colMask_Brow_2;\n"+
"vec4 browCol_Brow_2;\n"+
"float shadowMask_Brow_2;\n"+
"vec4 Brow_2_return_value_inlined_27;\n"+
"vec4 brow_Smiley_2;\n"+
"vec4 Smiley_2_return_value_inlined_28;\n"+
"fragColor = vec4(1.0);\n"+
"uv_main_1 = (gl_FragCoord.xy - iResolution.xy * 0.5) / min(iResolution.x, iResolution.y);\n"+
"if(iMouse.x == 0.0 && iMouse.y == 0.0)\n"+
"{\n"+
"mouse_main_1 = vec2(0, 0);\n"+
"}\n"+
"else\n"+
"{\n"+
"mouse_main_1 = iMouse.xy / iResolution.xy - 0.5;\n"+
"}\n"+
"yaw_main_1 = mouse_main_1.x * 2.0 * 3.1415926535;\n"+
"pitch_main_1 = mouse_main_1.y * 3.1415926535;\n"+
"cs_main_1 = vec4(cos(yaw_main_1), sin(yaw_main_1), cos(pitch_main_1), sin(pitch_main_1));\n"+
"ro_main_1 = vec3(0, 1, 0);\n"+
"lookAt_main_1 = ro_main_1 + cs_main_1.xwy * vec3(cs_main_1.z, 1, cs_main_1.z);\n"+
"f_main_1 = normalize(lookAt_main_1 - ro_main_1);\n"+
"r_main_1 = normalize(cross(f_main_1, vec3(0, 1, 0)));\n"+
"u_main_1 = cross(r_main_1, f_main_1);\n"+
"c_main_1 = ro_main_1 + f_main_1 * 1.0;\n"+
"i_main_1 = c_main_1 + uv_main_1.x * r_main_1 + uv_main_1.y * u_main_1;\n"+
"rd_main_1 = normalize(i_main_1 - ro_main_1);\n"+
"col_main_1 = vec3(0);\n"+
"n_main_1 = vec3(0);\n"+
"reflOri_main_1 = ro_main_1;\n"+
"reflDir_main_1 = rd_main_1;\n"+
"for( r_int_main_1 = 0;\n"+
"r_int_main_1 <= 10; r_int_main_1 ++)\n"+
"{\n"+
"n_offset_1 = n_main_1;\n"+
"offset_1_has_returned = false;\n"+
"offset_1_return_value = 0.001 * 2.0 * n_offset_1;\n"+
"offset_1_has_returned = true;\n"+
"offset_1_return_value_inlined_11 = offset_1_return_value;\n"+
"off_main_1 = offset_1_return_value_inlined_11;\n"+
"reflOri_main_1 += off_main_1;\n"+
"ro_RayMarch_1 = reflOri_main_1;\n"+
"rd_RayMarch_1 = reflDir_main_1;\n"+
"side_RayMarch_1 = 1.0;\n"+
"RayMarch_1_has_returned = false;\n"+
"dO_RayMarch_1 = 0.0;\n"+
"for(   i_RayMarch_1 = 0;\n"+
"i_RayMarch_1 < 1000; i_RayMarch_1 ++)\n"+
"{\n"+
"p_RayMarch_1 = ro_RayMarch_1 + rd_RayMarch_1 * dO_RayMarch_1;\n"+
"p_GetDist_1 = p_RayMarch_1;\n"+
"GetDist_1_has_returned = false;\n"+
"p_sdGrid_1 = p_GetDist_1;\n"+
"sdGrid_1_has_returned = false;\n"+
"plane_sdGrid_1 = p_sdGrid_1.y;\n"+
"plane_sdGrid_1 += 0.025 * smoothstep(0.05, 0.0, abs(p_sdGrid_1.x - round(p_sdGrid_1.x)));\n"+
"plane_sdGrid_1 += 0.025 * smoothstep(0.05, 0.0, abs(p_sdGrid_1.z - round(p_sdGrid_1.z)));\n"+
"sdGrid_1_return_value = plane_sdGrid_1;\n"+
"sdGrid_1_has_returned = true;\n"+
"sdGrid_1_return_value_inlined_4 = sdGrid_1_return_value;\n"+
"grid_GetDist_1 = sdGrid_1_return_value_inlined_4;\n"+
"p_sdSpheres_1 = p_GetDist_1;\n"+
"sdSpheres_1_has_returned = false;\n"+
"p_Hash21_1 = round(p_sdSpheres_1.xz);\n"+
"Hash21_1_has_returned = false;\n"+
"p_Hash21_1 = fract(p_Hash21_1 * vec2(123.34, 456.21));\n"+
"p_Hash21_1 += dot(p_Hash21_1, p_Hash21_1 + 45.32);\n"+
"Hash21_1_return_value = fract(p_Hash21_1.x * p_Hash21_1.y);\n"+
"Hash21_1_has_returned = true;\n"+
"Hash21_1_return_value_inlined_3 = Hash21_1_return_value;\n"+
"off_sdSpheres_1 = Hash21_1_return_value_inlined_3;\n"+
"sphereY_sdSpheres_1 = 0.2 * sin(iTime + 4. + off_sdSpheres_1) + 1.0;\n"+
"pos_sdSpheres_1 = vec3(0, sphereY_sdSpheres_1, 0);\n"+
"p_sdSpheres_1.xz = mod(p_sdSpheres_1.xz, 2.0) - 1.0;\n"+
"sdSpheres_1_return_value = length(p_sdSpheres_1 - pos_sdSpheres_1) - 0.4;\n"+
"sdSpheres_1_has_returned = true;\n"+
"sdSpheres_1_return_value_inlined_5 = sdSpheres_1_return_value;\n"+
"spheres_GetDist_1 = sdSpheres_1_return_value_inlined_5;\n"+
"GetDist_1_return_value = min(grid_GetDist_1, spheres_GetDist_1);\n"+
"GetDist_1_has_returned = true;\n"+
"GetDist_1_return_value_inlined_10 = GetDist_1_return_value;\n"+
"dS_RayMarch_1 = side_RayMarch_1 * GetDist_1_return_value_inlined_10;\n"+
"if(abs(dS_RayMarch_1) <= 0.001 || dO_RayMarch_1 > 1000.0)\n"+
"{\n"+
"break;\n"+
"}\n"+
"dO_RayMarch_1 += dS_RayMarch_1;\n"+
"}\n"+
"RayMarch_1_return_value = dO_RayMarch_1;\n"+
"RayMarch_1_has_returned = true;\n"+
"RayMarch_1_return_value_inlined_12 = RayMarch_1_return_value;\n"+
"d_main_1 = RayMarch_1_return_value_inlined_12;\n"+
"reflOri_main_1 += reflDir_main_1 * d_main_1;\n"+
"spec_main_1 = vec3(0);\n"+
"p_sdGrid_1 = reflOri_main_1;\n"+
"sdGrid_1_has_returned = false;\n"+
"plane_sdGrid_1 = p_sdGrid_1.y;\n"+
"plane_sdGrid_1 += 0.025 * smoothstep(0.05, 0.0, abs(p_sdGrid_1.x - round(p_sdGrid_1.x)));\n"+
"plane_sdGrid_1 += 0.025 * smoothstep(0.05, 0.0, abs(p_sdGrid_1.z - round(p_sdGrid_1.z)));\n"+
"sdGrid_1_return_value = plane_sdGrid_1;\n"+
"sdGrid_1_has_returned = true;\n"+
"sdGrid_1_return_value_inlined_13 = sdGrid_1_return_value;\n"+
"if(sdGrid_1_return_value_inlined_13 <= 0.001)\n"+
"{\n"+
"spec_main_1 += mod(floor(reflOri_main_1.x) + floor(reflOri_main_1.z), 2.0);\n"+
"}\n"+
"else\n"+
"{\n"+
"p_sdSpheres_1 = reflOri_main_1;\n"+
"sdSpheres_1_has_returned = false;\n"+
"p_Hash21_1 = round(p_sdSpheres_1.xz);\n"+
"Hash21_1_has_returned = false;\n"+
"p_Hash21_1 = fract(p_Hash21_1 * vec2(123.34, 456.21));\n"+
"p_Hash21_1 += dot(p_Hash21_1, p_Hash21_1 + 45.32);\n"+
"Hash21_1_return_value = fract(p_Hash21_1.x * p_Hash21_1.y);\n"+
"Hash21_1_has_returned = true;\n"+
"Hash21_1_return_value_inlined_3 = Hash21_1_return_value;\n"+
"off_sdSpheres_1 = Hash21_1_return_value_inlined_3;\n"+
"sphereY_sdSpheres_1 = 0.2 * sin(iTime + 4. + off_sdSpheres_1) + 1.0;\n"+
"pos_sdSpheres_1 = vec3(0, sphereY_sdSpheres_1, 0);\n"+
"p_sdSpheres_1.xz = mod(p_sdSpheres_1.xz, 2.0) - 1.0;\n"+
"sdSpheres_1_return_value = length(p_sdSpheres_1 - pos_sdSpheres_1) - 0.4;\n"+
"sdSpheres_1_has_returned = true;\n"+
"sdSpheres_1_return_value_inlined_14 = sdSpheres_1_return_value;\n"+
"if(sdSpheres_1_return_value_inlined_14 <= 0.001)\n"+
"{\n"+
"p_Hash21Color_1 = round(reflOri_main_1.xz);\n"+
"Hash21Color_1_has_returned = false;\n"+
"p_Hash21_1 = p_Hash21Color_1;\n"+
"Hash21_1_has_returned = false;\n"+
"p_Hash21_1 = fract(p_Hash21_1 * vec2(123.34, 456.21));\n"+
"p_Hash21_1 += dot(p_Hash21_1, p_Hash21_1 + 45.32);\n"+
"Hash21_1_return_value = fract(p_Hash21_1.x * p_Hash21_1.y);\n"+
"Hash21_1_has_returned = true;\n"+
"Hash21_1_return_value_inlined_0 = Hash21_1_return_value;\n"+
"r_Hash21Color_1 = Hash21_1_return_value_inlined_0;\n"+
"p_Hash21_1 = p_Hash21Color_1 * 123.456;\n"+
"Hash21_1_has_returned = false;\n"+
"p_Hash21_1 = fract(p_Hash21_1 * vec2(123.34, 456.21));\n"+
"p_Hash21_1 += dot(p_Hash21_1, p_Hash21_1 + 45.32);\n"+
"Hash21_1_return_value = fract(p_Hash21_1.x * p_Hash21_1.y);\n"+
"Hash21_1_has_returned = true;\n"+
"Hash21_1_return_value_inlined_1 = Hash21_1_return_value;\n"+
"g_Hash21Color_1 = Hash21_1_return_value_inlined_1;\n"+
"p_Hash21_1 = (p_Hash21Color_1 - 789.012) / 345.678;\n"+
"Hash21_1_has_returned = false;\n"+
"p_Hash21_1 = fract(p_Hash21_1 * vec2(123.34, 456.21));\n"+
"p_Hash21_1 += dot(p_Hash21_1, p_Hash21_1 + 45.32);\n"+
"Hash21_1_return_value = fract(p_Hash21_1.x * p_Hash21_1.y);\n"+
"Hash21_1_has_returned = true;\n"+
"Hash21_1_return_value_inlined_2 = Hash21_1_return_value;\n"+
"b_Hash21Color_1 = Hash21_1_return_value_inlined_2;\n"+
"Hash21Color_1_return_value = vec3(r_Hash21Color_1, g_Hash21Color_1, b_Hash21Color_1);\n"+
"Hash21Color_1_has_returned = true;\n"+
"Hash21Color_1_return_value_inlined_15 = Hash21Color_1_return_value;\n"+
"spec_main_1 += Hash21Color_1_return_value_inlined_15;\n"+
"}\n"+
"else\n"+
"{\n"+
"break;\n"+
"}\n"+
"}\n"+
"p_GetNormal_1 = reflOri_main_1;\n"+
"GetNormal_1_has_returned = false;\n"+
"p_GetDist_1 = p_GetNormal_1;\n"+
"GetDist_1_has_returned = false;\n"+
"p_sdGrid_1 = p_GetDist_1;\n"+
"sdGrid_1_has_returned = false;\n"+
"plane_sdGrid_1 = p_sdGrid_1.y;\n"+
"plane_sdGrid_1 += 0.025 * smoothstep(0.05, 0.0, abs(p_sdGrid_1.x - round(p_sdGrid_1.x)));\n"+
"plane_sdGrid_1 += 0.025 * smoothstep(0.05, 0.0, abs(p_sdGrid_1.z - round(p_sdGrid_1.z)));\n"+
"sdGrid_1_return_value = plane_sdGrid_1;\n"+
"sdGrid_1_has_returned = true;\n"+
"sdGrid_1_return_value_inlined_4 = sdGrid_1_return_value;\n"+
"grid_GetDist_1 = sdGrid_1_return_value_inlined_4;\n"+
"p_sdSpheres_1 = p_GetDist_1;\n"+
"sdSpheres_1_has_returned = false;\n"+
"p_Hash21_1 = round(p_sdSpheres_1.xz);\n"+
"Hash21_1_has_returned = false;\n"+
"p_Hash21_1 = fract(p_Hash21_1 * vec2(123.34, 456.21));\n"+
"p_Hash21_1 += dot(p_Hash21_1, p_Hash21_1 + 45.32);\n"+
"Hash21_1_return_value = fract(p_Hash21_1.x * p_Hash21_1.y);\n"+
"Hash21_1_has_returned = true;\n"+
"Hash21_1_return_value_inlined_3 = Hash21_1_return_value;\n"+
"off_sdSpheres_1 = Hash21_1_return_value_inlined_3;\n"+
"sphereY_sdSpheres_1 = 0.2 * sin(iTime + 4. + off_sdSpheres_1) + 1.0;\n"+
"pos_sdSpheres_1 = vec3(0, sphereY_sdSpheres_1, 0);\n"+
"p_sdSpheres_1.xz = mod(p_sdSpheres_1.xz, 2.0) - 1.0;\n"+
"sdSpheres_1_return_value = length(p_sdSpheres_1 - pos_sdSpheres_1) - 0.4;\n"+
"sdSpheres_1_has_returned = true;\n"+
"sdSpheres_1_return_value_inlined_5 = sdSpheres_1_return_value;\n"+
"spheres_GetDist_1 = sdSpheres_1_return_value_inlined_5;\n"+
"GetDist_1_return_value = min(grid_GetDist_1, spheres_GetDist_1);\n"+
"GetDist_1_has_returned = true;\n"+
"GetDist_1_return_value_inlined_6 = GetDist_1_return_value;\n"+
"d_GetNormal_1 = GetDist_1_return_value_inlined_6;\n"+
"e_GetNormal_1 = vec2(0.001, 0);\n"+
"p_GetDist_1 = p_GetNormal_1 - e_GetNormal_1.xyy;\n"+
"GetDist_1_has_returned = false;\n"+
"p_sdGrid_1 = p_GetDist_1;\n"+
"sdGrid_1_has_returned = false;\n"+
"plane_sdGrid_1 = p_sdGrid_1.y;\n"+
"plane_sdGrid_1 += 0.025 * smoothstep(0.05, 0.0, abs(p_sdGrid_1.x - round(p_sdGrid_1.x)));\n"+
"plane_sdGrid_1 += 0.025 * smoothstep(0.05, 0.0, abs(p_sdGrid_1.z - round(p_sdGrid_1.z)));\n"+
"sdGrid_1_return_value = plane_sdGrid_1;\n"+
"sdGrid_1_has_returned = true;\n"+
"sdGrid_1_return_value_inlined_4 = sdGrid_1_return_value;\n"+
"grid_GetDist_1 = sdGrid_1_return_value_inlined_4;\n"+
"p_sdSpheres_1 = p_GetDist_1;\n"+
"sdSpheres_1_has_returned = false;\n"+
"p_Hash21_1 = round(p_sdSpheres_1.xz);\n"+
"Hash21_1_has_returned = false;\n"+
"p_Hash21_1 = fract(p_Hash21_1 * vec2(123.34, 456.21));\n"+
"p_Hash21_1 += dot(p_Hash21_1, p_Hash21_1 + 45.32);\n"+
"Hash21_1_return_value = fract(p_Hash21_1.x * p_Hash21_1.y);\n"+
"Hash21_1_has_returned = true;\n"+
"Hash21_1_return_value_inlined_3 = Hash21_1_return_value;\n"+
"off_sdSpheres_1 = Hash21_1_return_value_inlined_3;\n"+
"sphereY_sdSpheres_1 = 0.2 * sin(iTime + 4. + off_sdSpheres_1) + 1.0;\n"+
"pos_sdSpheres_1 = vec3(0, sphereY_sdSpheres_1, 0);\n"+
"p_sdSpheres_1.xz = mod(p_sdSpheres_1.xz, 2.0) - 1.0;\n"+
"sdSpheres_1_return_value = length(p_sdSpheres_1 - pos_sdSpheres_1) - 0.4;\n"+
"sdSpheres_1_has_returned = true;\n"+
"sdSpheres_1_return_value_inlined_5 = sdSpheres_1_return_value;\n"+
"spheres_GetDist_1 = sdSpheres_1_return_value_inlined_5;\n"+
"GetDist_1_return_value = min(grid_GetDist_1, spheres_GetDist_1);\n"+
"GetDist_1_has_returned = true;\n"+
"GetDist_1_return_value_inlined_7 = GetDist_1_return_value;\n"+
"p_GetDist_1 = p_GetNormal_1 - e_GetNormal_1.yxy;\n"+
"GetDist_1_has_returned = false;\n"+
"p_sdGrid_1 = p_GetDist_1;\n"+
"sdGrid_1_has_returned = false;\n"+
"plane_sdGrid_1 = p_sdGrid_1.y;\n"+
"plane_sdGrid_1 += 0.025 * smoothstep(0.05, 0.0, abs(p_sdGrid_1.x - round(p_sdGrid_1.x)));\n"+
"plane_sdGrid_1 += 0.025 * smoothstep(0.05, 0.0, abs(p_sdGrid_1.z - round(p_sdGrid_1.z)));\n"+
"sdGrid_1_return_value = plane_sdGrid_1;\n"+
"sdGrid_1_has_returned = true;\n"+
"sdGrid_1_return_value_inlined_4 = sdGrid_1_return_value;\n"+
"grid_GetDist_1 = sdGrid_1_return_value_inlined_4;\n"+
"p_sdSpheres_1 = p_GetDist_1;\n"+
"sdSpheres_1_has_returned = false;\n"+
"p_Hash21_1 = round(p_sdSpheres_1.xz);\n"+
"Hash21_1_has_returned = false;\n"+
"p_Hash21_1 = fract(p_Hash21_1 * vec2(123.34, 456.21));\n"+
"p_Hash21_1 += dot(p_Hash21_1, p_Hash21_1 + 45.32);\n"+
"Hash21_1_return_value = fract(p_Hash21_1.x * p_Hash21_1.y);\n"+
"Hash21_1_has_returned = true;\n"+
"Hash21_1_return_value_inlined_3 = Hash21_1_return_value;\n"+
"off_sdSpheres_1 = Hash21_1_return_value_inlined_3;\n"+
"sphereY_sdSpheres_1 = 0.2 * sin(iTime + 4. + off_sdSpheres_1) + 1.0;\n"+
"pos_sdSpheres_1 = vec3(0, sphereY_sdSpheres_1, 0);\n"+
"p_sdSpheres_1.xz = mod(p_sdSpheres_1.xz, 2.0) - 1.0;\n"+
"sdSpheres_1_return_value = length(p_sdSpheres_1 - pos_sdSpheres_1) - 0.4;\n"+
"sdSpheres_1_has_returned = true;\n"+
"sdSpheres_1_return_value_inlined_5 = sdSpheres_1_return_value;\n"+
"spheres_GetDist_1 = sdSpheres_1_return_value_inlined_5;\n"+
"GetDist_1_return_value = min(grid_GetDist_1, spheres_GetDist_1);\n"+
"GetDist_1_has_returned = true;\n"+
"GetDist_1_return_value_inlined_8 = GetDist_1_return_value;\n"+
"p_GetDist_1 = p_GetNormal_1 - e_GetNormal_1.yyx;\n"+
"GetDist_1_has_returned = false;\n"+
"p_sdGrid_1 = p_GetDist_1;\n"+
"sdGrid_1_has_returned = false;\n"+
"plane_sdGrid_1 = p_sdGrid_1.y;\n"+
"plane_sdGrid_1 += 0.025 * smoothstep(0.05, 0.0, abs(p_sdGrid_1.x - round(p_sdGrid_1.x)));\n"+
"plane_sdGrid_1 += 0.025 * smoothstep(0.05, 0.0, abs(p_sdGrid_1.z - round(p_sdGrid_1.z)));\n"+
"sdGrid_1_return_value = plane_sdGrid_1;\n"+
"sdGrid_1_has_returned = true;\n"+
"sdGrid_1_return_value_inlined_4 = sdGrid_1_return_value;\n"+
"grid_GetDist_1 = sdGrid_1_return_value_inlined_4;\n"+
"p_sdSpheres_1 = p_GetDist_1;\n"+
"sdSpheres_1_has_returned = false;\n"+
"p_Hash21_1 = round(p_sdSpheres_1.xz);\n"+
"Hash21_1_has_returned = false;\n"+
"p_Hash21_1 = fract(p_Hash21_1 * vec2(123.34, 456.21));\n"+
"p_Hash21_1 += dot(p_Hash21_1, p_Hash21_1 + 45.32);\n"+
"Hash21_1_return_value = fract(p_Hash21_1.x * p_Hash21_1.y);\n"+
"Hash21_1_has_returned = true;\n"+
"Hash21_1_return_value_inlined_3 = Hash21_1_return_value;\n"+
"off_sdSpheres_1 = Hash21_1_return_value_inlined_3;\n"+
"sphereY_sdSpheres_1 = 0.2 * sin(iTime + 4. + off_sdSpheres_1) + 1.0;\n"+
"pos_sdSpheres_1 = vec3(0, sphereY_sdSpheres_1, 0);\n"+
"p_sdSpheres_1.xz = mod(p_sdSpheres_1.xz, 2.0) - 1.0;\n"+
"sdSpheres_1_return_value = length(p_sdSpheres_1 - pos_sdSpheres_1) - 0.4;\n"+
"sdSpheres_1_has_returned = true;\n"+
"sdSpheres_1_return_value_inlined_5 = sdSpheres_1_return_value;\n"+
"spheres_GetDist_1 = sdSpheres_1_return_value_inlined_5;\n"+
"GetDist_1_return_value = min(grid_GetDist_1, spheres_GetDist_1);\n"+
"GetDist_1_has_returned = true;\n"+
"GetDist_1_return_value_inlined_9 = GetDist_1_return_value;\n"+
"GetNormal_1_return_value = normalize(d_GetNormal_1 - vec3(GetDist_1_return_value_inlined_7, GetDist_1_return_value_inlined_8, GetDist_1_return_value_inlined_9));\n"+
"GetNormal_1_has_returned = true;\n"+
"GetNormal_1_return_value_inlined_16 = GetNormal_1_return_value;\n"+
"n_main_1 = GetNormal_1_return_value_inlined_16;\n"+
"p_GetLight_1 = reflOri_main_1;\n"+
"n_GetLight_1 = n_main_1;\n"+
"GetLight_1_has_returned = false;\n"+
"l_GetLight_1 = normalize(vec3(10.0, 10.0, 10.0) * vec3(cos(iTime + 4.), 1., sin(iTime + 4.)) - p_GetLight_1);\n"+
"diff_GetLight_1 = max(0.0, dot(n_GetLight_1, l_GetLight_1));\n"+
"GetLight_1_return_value = diff_GetLight_1;\n"+
"GetLight_1_has_returned = true;\n"+
"GetLight_1_return_value_inlined_17 = GetLight_1_return_value;\n"+
"diff_main_1 = GetLight_1_return_value_inlined_17;\n"+
"spec_main_1 += smoothstep(0.975, 1.0, diff_main_1);\n"+
"col_main_1 += diff_main_1 * spec_main_1 * pow(max(0.4, 1e-9), float(r_int_main_1));\n"+
"reflDir_main_1 = reflect(reflDir_main_1, n_main_1);\n"+
"}\n"+
"fragColor_1 = vec4(col_main_1, 1.0);\n"+
"fragColor_1.w = 1.0;\n"+
"fragColor = round(clamp(fragColor_1, vec4(0.0), vec4(1.0)) * 255.0) / 255.0;\n"+
"t_main_2 = iTime;\n"+
"uv_main_1 = gl_FragCoord.xy / iResolution.xy;\n"+
"uv_main_1 -= .5;\n"+
"uv_main_1.x *= iResolution.x / iResolution.y;\n"+
"m_main_2 = iMouse.xy / iResolution.xy;\n"+
"m_main_2 -= .5;\n"+
"if(m_main_2.x < - .49 && m_main_2.y < - .49)\n"+
"{\n"+
"s_main_2 = sin(t_main_2 * .5);\n"+
"sphereY_sdSpheres_1 = cos(t_main_2 * .38);\n"+
"m_main_2 = vec2(s_main_2, sphereY_sdSpheres_1) * .4;\n"+
"}\n"+
"if(length(m_main_2) > .707)\n"+
"{\n"+
"m_main_2 *= 0.;\n"+
"}\n"+
"diff_main_1 = dot(uv_main_1, uv_main_1);\n"+
"uv_main_1 -= m_main_2 * clamp(.23 - diff_main_1, 0., 1.);\n"+
"d_main_1 = sin(t_main_2 * .5) * .5 + .5;\n"+
"uv_Smiley_2 = uv_main_1;\n"+
"m_Smiley_2 = m_main_2;\n"+
"dO_RayMarch_1 = d_main_1;\n"+
"Hash21_1_has_returned = false;\n"+
"col_Smiley_2 = vec4(0.);\n"+
"if(length(uv_Smiley_2) < .5)\n"+
"{\n"+
"GetLight_1_return_value = sign(uv_Smiley_2.x);\n"+
"uv_Smiley_2.x = abs(uv_Smiley_2.x);\n"+
"uv_Head_2 = uv_Smiley_2;\n"+
"sdGrid_1_has_returned = false;\n"+
"col_Head_2 = vec4(.9, .65, .1, 1.);\n"+
"sdGrid_1_return_value = length(uv_Head_2);\n"+
"col_Head_2.a = smoothstep(.5, .49, sdGrid_1_return_value);\n"+
"GetDist_1_return_value_inlined_8 = .35;\n"+
"r_Hash21Color_1 = .5;\n"+
"side_RayMarch_1 = sdGrid_1_return_value;\n"+
"GetNormal_1_has_returned = false;\n"+
"Hash21_1_return_value_inlined_1 = clamp((side_RayMarch_1 - GetDist_1_return_value_inlined_8) / (r_Hash21Color_1 - GetDist_1_return_value_inlined_8), 0., 1.);\n"+
"GetNormal_1_has_returned = true;\n"+
"GetDist_1_return_value = Hash21_1_return_value_inlined_1;\n"+
"d_GetNormal_1 = GetDist_1_return_value;\n"+
"d_GetNormal_1 *= d_GetNormal_1;\n"+
"col_Head_2.rgb *= 1. - d_GetNormal_1 * .5;\n"+
"col_Head_2.rgb = mix(col_Head_2.rgb, vec3(.6, .3, .1), smoothstep(.47, .48, sdGrid_1_return_value));\n"+
"off_sdSpheres_1 = smoothstep(.41, .405, sdGrid_1_return_value);\n"+
"spheres_GetDist_1 = .41;\n"+
"RayMarch_1_return_value_inlined_12 = - .1;\n"+
"GetDist_1_return_value_inlined_7 = .75;\n"+
"sdSpheres_1_return_value = 0.;\n"+
"GetDist_1_return_value_inlined_6 = uv_Head_2.y;\n"+
"Hash21Color_1_has_returned = false;\n"+
"plane_sdGrid_1 = clamp((GetDist_1_return_value_inlined_6 - spheres_GetDist_1) / (RayMarch_1_return_value_inlined_12 - spheres_GetDist_1), 0., 1.) * (sdSpheres_1_return_value - GetDist_1_return_value_inlined_7) + GetDist_1_return_value_inlined_7;\n"+
"Hash21Color_1_has_returned = true;\n"+
"Hash21_1_return_value_inlined_2 = plane_sdGrid_1;\n"+
"off_sdSpheres_1 *= Hash21_1_return_value_inlined_2;\n"+
"off_sdSpheres_1 *= smoothstep(.18, .19, length(uv_Head_2 - vec2(.21, .08)));\n"+
"col_Head_2.rgb = mix(col_Head_2.rgb, vec3(1.), off_sdSpheres_1);\n"+
"sdGrid_1_return_value = length(uv_Head_2 - vec2(.25, - .2));\n"+
"g_Hash21Color_1 = smoothstep(.2, .01, sdGrid_1_return_value) * .4;\n"+
"g_Hash21Color_1 *= smoothstep(.17, .16, sdGrid_1_return_value);\n"+
"col_Head_2.rgb = mix(col_Head_2.rgb, vec3(1., .1, .1), g_Hash21Color_1);\n"+
"Head_2_return_value = col_Head_2;\n"+
"sdGrid_1_has_returned = true;\n"+
"Head_2_return_value_inlined_21 = Head_2_return_value;\n"+
"head_Smiley_2 = Head_2_return_value_inlined_21;\n"+
"col_Smiley_2 = mix(col_Smiley_2, head_Smiley_2, head_Smiley_2.a);\n"+
"if(length(uv_Smiley_2 - vec2(.2, .075)) < .175)\n"+
"{\n"+
"e_GetNormal_1 = uv_Smiley_2;\n"+
"rect_within_2 = vec4(.03, - .1, .37, .25);\n"+
"RayMarch_1_has_returned = false;\n"+
"within_2_return_value = (e_GetNormal_1 - rect_within_2.xy) / (rect_within_2.zw - rect_within_2.xy);\n"+
"RayMarch_1_has_returned = true;\n"+
"within_2_return_value_inlined_22 = within_2_return_value;\n"+
"uv_Eye_2 = within_2_return_value_inlined_22;\n"+
"sdGrid_1_return_value_inlined_4 = GetLight_1_return_value;\n"+
"mouse_main_1 = m_Smiley_2;\n"+
"pitch_main_1 = dO_RayMarch_1;\n"+
"offset_1_has_returned = false;\n"+
"uv_Eye_2 -= .5;\n"+
"uv_Eye_2.x *= sdGrid_1_return_value_inlined_4;\n"+
"Hash21_1_return_value = length(uv_Eye_2);\n"+
"irisCol_Eye_2 = vec4(.3, .5, 1., 1.);\n"+
"col_Eye_2 = mix(vec4(1.), irisCol_Eye_2, smoothstep(.1, .7, Hash21_1_return_value) * .5);\n"+
"col_Eye_2.a = smoothstep(.5, .48, Hash21_1_return_value);\n"+
"col_Eye_2.rgb *= 1. - smoothstep(.45, .5, Hash21_1_return_value) * .5 * clamp(- uv_Eye_2.y - uv_Eye_2.x * sdGrid_1_return_value_inlined_4, 0., 1.);\n"+
"Hash21_1_return_value = length(uv_Eye_2 - mouse_main_1 * .4);\n"+
"col_Eye_2.rgb = mix(col_Eye_2.rgb, vec3(0.), smoothstep(.3, .28, Hash21_1_return_value));\n"+
"irisCol_Eye_2.rgb *= 1. + smoothstep(.3, .05, Hash21_1_return_value);\n"+
"GetLight_1_return_value_inlined_17 = smoothstep(.28, .25, Hash21_1_return_value);\n"+
"col_Eye_2.rgb = mix(col_Eye_2.rgb, irisCol_Eye_2.rgb, GetLight_1_return_value_inlined_17);\n"+
"Hash21_1_return_value = length(uv_Eye_2 - mouse_main_1 * .45);\n"+
"b_Hash21Color_1 = mix(.4, .16, pitch_main_1);\n"+
"GetDist_1_return_value_inlined_10 = smoothstep(b_Hash21Color_1, b_Hash21Color_1 * .85, Hash21_1_return_value);\n"+
"GetDist_1_return_value_inlined_10 *= GetLight_1_return_value_inlined_17;\n"+
"col_Eye_2.rgb = mix(col_Eye_2.rgb, vec3(0.), GetDist_1_return_value_inlined_10);\n"+
"yaw_main_1 = iTime * 3.;\n"+
"offs_Eye_2 = vec2(sin(yaw_main_1 + uv_Eye_2.y * 25.), sin(yaw_main_1 + uv_Eye_2.x * 25.));\n"+
"offs_Eye_2 *= .01 * (1. - pitch_main_1);\n"+
"uv_Eye_2 += offs_Eye_2;\n"+
"Hash21_1_return_value_inlined_0 = smoothstep(.1, .09, length(uv_Eye_2 - vec2(- .15, .15)));\n"+
"Hash21_1_return_value_inlined_0 += smoothstep(.07, .05, length(uv_Eye_2 + vec2(- .08, .08)));\n"+
"col_Eye_2.rgb = mix(col_Eye_2.rgb, vec3(1.), Hash21_1_return_value_inlined_0);\n"+
"Eye_2_return_value = col_Eye_2;\n"+
"offset_1_has_returned = true;\n"+
"Eye_2_return_value_inlined_23 = Eye_2_return_value;\n"+
"eye_Smiley_2 = Eye_2_return_value_inlined_23;\n"+
"col_Smiley_2 = mix(col_Smiley_2, eye_Smiley_2, eye_Smiley_2.a);\n"+
"}\n"+
"if(length(uv_Smiley_2 - vec2(.0, - .15)) < .3)\n"+
"{\n"+
"e_GetNormal_1 = uv_Smiley_2;\n"+
"rect_within_2 = vec4(- .3, - .43, .3, - .13);\n"+
"RayMarch_1_has_returned = false;\n"+
"within_2_return_value = (e_GetNormal_1 - rect_within_2.xy) / (rect_within_2.zw - rect_within_2.xy);\n"+
"RayMarch_1_has_returned = true;\n"+
"p_Hash21_1 = within_2_return_value;\n"+
"uv_Mouth_2 = p_Hash21_1;\n"+
"grid_GetDist_1 = dO_RayMarch_1;\n"+
"GetLight_1_has_returned = false;\n"+
"uv_Mouth_2 -= .5;\n"+
"col_Mouth_2 = vec4(.5, .18, .05, 1.);\n"+
"uv_Mouth_2.y *= 1.5;\n"+
"uv_Mouth_2.y -= uv_Mouth_2.x * uv_Mouth_2.x * 2. * grid_GetDist_1;\n"+
"uv_Mouth_2.x *= mix(2.5, 1., grid_GetDist_1);\n"+
"sdSpheres_1_return_value_inlined_14 = length(uv_Mouth_2);\n"+
"col_Mouth_2.a = smoothstep(.5, .48, sdSpheres_1_return_value_inlined_14);\n"+
"tUv_Mouth_2 = uv_Mouth_2;\n"+
"tUv_Mouth_2.y += (abs(uv_Mouth_2.x) * .5 + .1) * (1. - grid_GetDist_1);\n"+
"Hash21_1_return_value_inlined_3 = length(tUv_Mouth_2 - vec2(0., .6));\n"+
"ro_RayMarch_1 = vec3(1.) * smoothstep(.6, .35, sdSpheres_1_return_value_inlined_14);\n"+
"col_Mouth_2.rgb = mix(col_Mouth_2.rgb, ro_RayMarch_1, smoothstep(.4, .37, Hash21_1_return_value_inlined_3));\n"+
"Hash21_1_return_value_inlined_3 = length(uv_Mouth_2 + vec2(0., .5));\n"+
"col_Mouth_2.rgb = mix(col_Mouth_2.rgb, vec3(1., .5, .5), smoothstep(.5, .2, Hash21_1_return_value_inlined_3));\n"+
"Mouth_2_return_value = col_Mouth_2;\n"+
"GetLight_1_has_returned = true;\n"+
"Mouth_2_return_value_inlined_25 = Mouth_2_return_value;\n"+
"mouth_Smiley_2 = Mouth_2_return_value_inlined_25;\n"+
"col_Smiley_2 = mix(col_Smiley_2, mouth_Smiley_2, mouth_Smiley_2.a);\n"+
"}\n"+
"if(length(uv_Smiley_2 - vec2(.185, .325)) < .18)\n"+
"{\n"+
"e_GetNormal_1 = uv_Smiley_2;\n"+
"rect_within_2 = vec4(.03, .2, .4, .45);\n"+
"RayMarch_1_has_returned = false;\n"+
"within_2_return_value = (e_GetNormal_1 - rect_within_2.xy) / (rect_within_2.zw - rect_within_2.xy);\n"+
"RayMarch_1_has_returned = true;\n"+
"within_2_return_value_inlined_26 = within_2_return_value;\n"+
"p_Hash21Color_1 = within_2_return_value_inlined_26;\n"+
"smile_Brow_2 = dO_RayMarch_1;\n"+
"GetDist_1_has_returned = false;\n"+
"GetDist_1_return_value_inlined_9 = mix(.2, 0., smile_Brow_2);\n"+
"p_Hash21Color_1.y += GetDist_1_return_value_inlined_9;\n"+
"dS_RayMarch_1 = p_Hash21Color_1.y;\n"+
"p_Hash21Color_1.y += p_Hash21Color_1.x * mix(.5, .8, smile_Brow_2) - mix(.1, .3, smile_Brow_2);\n"+
"p_Hash21Color_1.x -= mix(.0, .1, smile_Brow_2);\n"+
"p_Hash21Color_1 -= .5;\n"+
"col_Brow_2 = vec4(0.);\n"+
"sdGrid_1_return_value_inlined_13 = .1;\n"+
"d1_Brow_2 = length(p_Hash21Color_1);\n"+
"s1_Brow_2 = smoothstep(.45, .45 - sdGrid_1_return_value_inlined_13, d1_Brow_2);\n"+
"d2_Brow_2 = length(p_Hash21Color_1 - vec2(.1, - .2) * .7);\n"+
"s2_Brow_2 = smoothstep(.5, .5 - sdGrid_1_return_value_inlined_13, d2_Brow_2);\n"+
"browMask_Brow_2 = clamp(s1_Brow_2 - s2_Brow_2, 0., 1.);\n"+
"GetDist_1_return_value_inlined_8 = .7;\n"+
"r_Hash21Color_1 = .8;\n"+
"side_RayMarch_1 = dS_RayMarch_1;\n"+
"GetNormal_1_has_returned = false;\n"+
"Hash21_1_return_value_inlined_1 = clamp((side_RayMarch_1 - GetDist_1_return_value_inlined_8) / (r_Hash21Color_1 - GetDist_1_return_value_inlined_8), 0., 1.);\n"+
"GetNormal_1_has_returned = true;\n"+
"diff_GetLight_1 = Hash21_1_return_value_inlined_1;\n"+
"sdSpheres_1_return_value_inlined_5 = diff_GetLight_1 * .75;\n"+
"sdSpheres_1_return_value_inlined_5 *= smoothstep(.6, .9, browMask_Brow_2);\n"+
"sdSpheres_1_return_value_inlined_5 *= smile_Brow_2;\n"+
"browCol_Brow_2 = mix(vec4(.4, .2, .2, 1.), vec4(1., .75, .5, 1.), sdSpheres_1_return_value_inlined_5);\n"+
"p_Hash21Color_1.y += .15 - GetDist_1_return_value_inlined_9 * .5;\n"+
"sdGrid_1_return_value_inlined_13 += mix(.0, .1, smile_Brow_2);\n"+
"d1_Brow_2 = length(p_Hash21Color_1);\n"+
"s1_Brow_2 = smoothstep(.45, .45 - sdGrid_1_return_value_inlined_13, d1_Brow_2);\n"+
"d2_Brow_2 = length(p_Hash21Color_1 - vec2(.1, - .2) * .7);\n"+
"s2_Brow_2 = smoothstep(.5, .5 - sdGrid_1_return_value_inlined_13, d2_Brow_2);\n"+
"RayMarch_1_return_value = clamp(s1_Brow_2 - s2_Brow_2, 0., 1.);\n"+
"col_Brow_2 = mix(col_Brow_2, vec4(0., 0., 0., 1.), smoothstep(.0, 1., RayMarch_1_return_value) * .5);\n"+
"col_Brow_2 = mix(col_Brow_2, browCol_Brow_2, smoothstep(.2, .4, browMask_Brow_2));\n"+
"cs_main_1 = col_Brow_2;\n"+
"GetDist_1_has_returned = true;\n"+
"Brow_2_return_value_inlined_27 = cs_main_1;\n"+
"brow_Smiley_2 = Brow_2_return_value_inlined_27;\n"+
"col_Smiley_2 = mix(col_Smiley_2, brow_Smiley_2, brow_Smiley_2.a);\n"+
"}\n"+
"}\n"+
"Smiley_2_return_value = col_Smiley_2;\n"+
"Hash21_1_has_returned = true;\n"+
"Smiley_2_return_value_inlined_28 = Smiley_2_return_value;\n"+
"fragColor_2 = Smiley_2_return_value_inlined_28;\n"+
"fragColor_2.w = 1.0;\n"+
"fragColor.xyz *= dot((round(clamp(fragColor_2, vec4(0.0), vec4(1.0)) * 255.0) / 255.0).xyz, vec3(1.0)) / 3.0;\n"+
"fragColor.xyz = pow(fragColor.xyz, vec3(1.0 / 2.0));\n"+
"}\n"+
"";


var bug4Src = "#version 300 es\n"+
"precision highp float;\n"+
"\n"+
"layout(location = 0) out vec4 fragColor;\n"+
"\n"+
"uniform vec2 iResolution;\n"+
"\n"+
"uniform float iTime;\n"+
"\n"+
"uniform float iTimeDelta;\n"+
"\n"+
"uniform vec4 iMouse;\n"+
"\n"+
"uniform int iFrame;\n"+
"\n"+
"bool live_tu_has_executed = false;\n"+
"\n"+
"vec4 fragColor_1;\n"+
"\n"+
"const int NUM_STEPS_2 = 32;\n"+
"\n"+
"const int AO_SAMPLES_2 = 4;\n"+
"\n"+
"const vec2 AO_PARAM_2 = vec2(1.2, 3.5);\n"+
"\n"+
"const vec2 CORNER_PARAM_2 = vec2(0.25, 40.0);\n"+
"\n"+
"const float INV_AO_SAMPLES_2 = 1.0 / float(AO_SAMPLES_2);\n"+
"\n"+
"const float TRESHOLD_2 = 0.1;\n"+
"\n"+
"const float EPSILON_2 = 1e-3;\n"+
"\n"+
"const float LIGHT_INTENSITY_2 = 0.25;\n"+
"\n"+
"const vec3 RED_2 = vec3(1.0, 0.7, 0.7) * LIGHT_INTENSITY_2;\n"+
"\n"+
"const vec3 ORANGE_2 = vec3(1.0, 0.67, 0.43) * LIGHT_INTENSITY_2;\n"+
"\n"+
"const vec3 BLUE_2 = vec3(0.54, 0.77, 1.0) * LIGHT_INTENSITY_2;\n"+
"\n"+
"const vec3 WHITE_2 = vec3(1.2, 1.07, 0.98) * LIGHT_INTENSITY_2;\n"+
"\n"+
"const float DISPLACEMENT_2 = 0.1;\n"+
"\n"+
"vec4 fragColor_2;\n"+
"\n"+
"void main()\n"+
"{\n"+
"vec2 fragCoord_blackboard_1;\n"+
"bool blackboard_has_returned_1;\n"+
"vec3 blackboard_return_value_1;\n"+
"vec2 p_blackboard_1;\n"+
"vec2 q_blackboard_1;\n"+
"float v_blackboard_1;\n"+
"vec3 col_blackboard_1;\n"+
"vec2 p_fbm_1;\n"+
"bool fbm_has_returned_1;\n"+
"float fbm_return_value_1;\n"+
"const mat2 m_fbm_1 = mat2(1.6, 1.2, - 1.2, 1.6);\n"+
"float f_fbm_1;\n"+
"float s_fbm_1;\n"+
"int i_fbm_1;\n"+
"vec2 p_noise_1;\n"+
"bool noise_has_returned_1;\n"+
"float noise_return_value_1;\n"+
"ivec2 i_noise_1;\n"+
"vec2 f_noise_1;\n"+
"vec2 u_noise_1;\n"+
"ivec2 z_grad_1;\n"+
"bool grad_has_returned_1;\n"+
"vec2 grad_return_value_1;\n"+
"int n_grad_1;\n"+
"vec2 gr_grad_1;\n"+
"vec2 grad_return_value_inlined_0_1;\n"+
"vec2 grad_return_value_inlined_1_1;\n"+
"vec2 grad_return_value_inlined_2_1;\n"+
"vec2 grad_return_value_inlined_3_1;\n"+
"float noise_return_value_inlined_4_1;\n"+
"float fbm_return_value_inlined_7_1;\n"+
"float fbm_return_value_inlined_8_1;\n"+
"vec2 ce_flattened_block_1_blackboard_1;\n"+
"vec2 w_flattened_block_1_blackboard_1;\n"+
"float fbm_return_value_inlined_9_1;\n"+
"float ff_flattened_block_1_blackboard_1;\n"+
"float fa_flattened_block_1_blackboard_1;\n"+
"float m_blackboard_1;\n"+
"float m2_blackboard_1;\n"+
"int i_blackboard_1;\n"+
"vec2 p1_blackboard_1;\n"+
"vec2 p2_blackboard_1;\n"+
"vec2 p_sdLine_1;\n"+
"vec2 a_sdLine_1;\n"+
"vec2 b_sdLine_1;\n"+
"bool sdLine_has_returned_1;\n"+
"float sdLine_return_value_1;\n"+
"vec2 pa_sdLine_1;\n"+
"vec2 ba_sdLine_1;\n"+
"float h_sdLine_1;\n"+
"float sdLine_return_value_inlined_10_1;\n"+
"float d_blackboard_1;\n"+
"float fbm_return_value_inlined_11_1;\n"+
"float fbm_return_value_inlined_12_1;\n"+
"float ww_blackboard_1;\n"+
"float fbm_return_value_inlined_13_1;\n"+
"vec3 blackboard_return_value_inlined_41_1;\n"+
"vec3 col_mainImage_1;\n"+
"vec3 col_chalk_1;\n"+
"vec2 fragCoord_chalk_1;\n"+
"bool chalk_has_returned_1;\n"+
"vec3 chalk_return_value_1;\n"+
"vec2 p1_chalk_1;\n"+
"vec2 p2_chalk_1;\n"+
"vec2 p3_chalk_1;\n"+
"vec2 p_chalk_1;\n"+
"float gf_chalk_1;\n"+
"float fbm_return_value_inlined_14_1;\n"+
"float d_chalk_1;\n"+
"float x_chalk_1;\n"+
"float y_chalk_1;\n"+
"float dy_chalk_1;\n"+
"float fbm_return_value_inlined_15_1;\n"+
"float sdLine_return_value_inlined_16_1;\n"+
"float sdLine_return_value_inlined_17_1;\n"+
"float sdLine_return_value_inlined_18_1;\n"+
"float sdLine_return_value_inlined_19_1;\n"+
"float fbm_return_value_inlined_20_1;\n"+
"float sdLine_return_value_inlined_21_1;\n"+
"float sdLine_return_value_inlined_22_1;\n"+
"float sdLine_return_value_inlined_23_1;\n"+
"float fbm_return_value_inlined_24_1;\n"+
"vec2 c_altitude_1;\n"+
"vec2 a_altitude_1;\n"+
"vec2 b_altitude_1;\n"+
"bool altitude_has_returned_1;\n"+
"vec2 altitude_return_value_1;\n"+
"vec2 w_altitude_1;\n"+
"vec2 altitude_return_value_inlined_25_1;\n"+
"vec2 q1_chalk_1;\n"+
"vec2 altitude_return_value_inlined_26_1;\n"+
"vec2 q2_chalk_1;\n"+
"vec2 altitude_return_value_inlined_27_1;\n"+
"vec2 q3_chalk_1;\n"+
"float sdLine_return_value_inlined_28_1;\n"+
"float sdLine_return_value_inlined_29_1;\n"+
"float sdLine_return_value_inlined_30_1;\n"+
"vec2 o1_chalk_1;\n"+
"vec2 o2_chalk_1;\n"+
"vec2 o3_chalk_1;\n"+
"float sdLine_return_value_inlined_31_1;\n"+
"float sdLine_return_value_inlined_32_1;\n"+
"float sdLine_return_value_inlined_33_1;\n"+
"float sdLine_return_value_inlined_34_1;\n"+
"float sdLine_return_value_inlined_35_1;\n"+
"float sdLine_return_value_inlined_36_1;\n"+
"float fbm_return_value_inlined_37_1;\n"+
"vec2 a1_intersect_1;\n"+
"vec2 b1_intersect_1;\n"+
"vec2 a2_intersect_1;\n"+
"vec2 b2_intersect_1;\n"+
"bool intersect_has_returned_1;\n"+
"vec2 intersect_return_value_1;\n"+
"vec2 a_cro_1;\n"+
"vec2 b_cro_1;\n"+
"bool cro_has_returned_1;\n"+
"float cro_return_value_1;\n"+
"float cro_return_value_inlined_5_1;\n"+
"float cro_return_value_inlined_6_1;\n"+
"float h_intersect_1;\n"+
"vec2 intersect_return_value_inlined_38_1;\n"+
"vec2 pc_chalk_1;\n"+
"float fbm_return_value_inlined_39_1;\n"+
"float fbm_return_value_inlined_40_1;\n"+
"vec3 chalk_return_value_inlined_42_1;\n"+
"fragCoord_blackboard_1 = gl_FragCoord.xy;\n"+
"blackboard_has_returned_1 = false;\n"+
"p_blackboard_1 = (2.0 * fragCoord_blackboard_1 - iResolution.xy) / iResolution.y;\n"+
"q_blackboard_1 = fragCoord_blackboard_1 / iResolution.xy;\n"+
"v_blackboard_1 = sqrt(16.0 * q_blackboard_1.x * q_blackboard_1.y * (1.0 - q_blackboard_1.x) * (1.0 - q_blackboard_1.y));\n"+
"col_blackboard_1 = vec3(0.1 + 0.05 * v_blackboard_1);\n"+
"p_fbm_1 = p_blackboard_1 * 1.25 * vec2(1.0, 4.0);\n"+
"fbm_has_returned_1 = false;\n"+
"f_fbm_1 = 0.0;\n"+
"s_fbm_1 = 0.5;\n"+
"for( i_fbm_1 = 0;\n"+
"i_fbm_1 < 6; i_fbm_1 ++)\n"+
"{\n"+
"p_noise_1 = p_fbm_1;\n"+
"noise_has_returned_1 = false;\n"+
"i_noise_1 = ivec2(floor(p_noise_1));\n"+
"f_noise_1 = fract(p_noise_1);\n"+
"u_noise_1 = f_noise_1 * f_noise_1 * (3.0 - 2.0 * f_noise_1);\n"+
"z_grad_1 = i_noise_1 + ivec2(0, 0);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_0_1 = grad_return_value_1;\n"+
"z_grad_1 = i_noise_1 + ivec2(1, 0);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_1_1 = grad_return_value_1;\n"+
"z_grad_1 = i_noise_1 + ivec2(0, 1);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_2_1 = grad_return_value_1;\n"+
"z_grad_1 = i_noise_1 + ivec2(1, 1);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_3_1 = grad_return_value_1;\n"+
"noise_return_value_1 = mix(mix(dot(grad_return_value_inlined_0_1, f_noise_1 - vec2(0.0, 0.0)), dot(grad_return_value_inlined_1_1, f_noise_1 - vec2(1.0, 0.0)), u_noise_1.x), mix(dot(grad_return_value_inlined_2_1, f_noise_1 - vec2(0.0, 1.0)), dot(grad_return_value_inlined_3_1, f_noise_1 - vec2(1.0, 1.0)), u_noise_1.x), u_noise_1.y);\n"+
"noise_has_returned_1 = true;\n"+
"noise_return_value_inlined_4_1 = noise_return_value_1;\n"+
"f_fbm_1 += s_fbm_1 * noise_return_value_inlined_4_1;\n"+
"p_fbm_1 = m_fbm_1 * p_fbm_1;\n"+
"s_fbm_1 = 0.5 * s_fbm_1;\n"+
"}\n"+
"fbm_return_value_1 = f_fbm_1;\n"+
"fbm_has_returned_1 = true;\n"+
"fbm_return_value_inlined_7_1 = fbm_return_value_1;\n"+
"col_blackboard_1 += 0.05 * fbm_return_value_inlined_7_1;\n"+
"p_fbm_1 = p_blackboard_1 * 20.0;\n"+
"fbm_has_returned_1 = false;\n"+
"f_fbm_1 = 0.0;\n"+
"s_fbm_1 = 0.5;\n"+
"for( i_fbm_1 = 0;\n"+
"i_fbm_1 < 6; i_fbm_1 ++)\n"+
"{\n"+
"p_noise_1 = p_fbm_1;\n"+
"noise_has_returned_1 = false;\n"+
"i_noise_1 = ivec2(floor(p_noise_1));\n"+
"f_noise_1 = fract(p_noise_1);\n"+
"u_noise_1 = f_noise_1 * f_noise_1 * (3.0 - 2.0 * f_noise_1);\n"+
"z_grad_1 = i_noise_1 + ivec2(0, 0);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_0_1 = grad_return_value_1;\n"+
"z_grad_1 = i_noise_1 + ivec2(1, 0);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_1_1 = grad_return_value_1;\n"+
"z_grad_1 = i_noise_1 + ivec2(0, 1);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_2_1 = grad_return_value_1;\n"+
"z_grad_1 = i_noise_1 + ivec2(1, 1);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_3_1 = grad_return_value_1;\n"+
"noise_return_value_1 = mix(mix(dot(grad_return_value_inlined_0_1, f_noise_1 - vec2(0.0, 0.0)), dot(grad_return_value_inlined_1_1, f_noise_1 - vec2(1.0, 0.0)), u_noise_1.x), mix(dot(grad_return_value_inlined_2_1, f_noise_1 - vec2(0.0, 1.0)), dot(grad_return_value_inlined_3_1, f_noise_1 - vec2(1.0, 1.0)), u_noise_1.x), u_noise_1.y);\n"+
"noise_has_returned_1 = true;\n"+
"noise_return_value_inlined_4_1 = noise_return_value_1;\n"+
"f_fbm_1 += s_fbm_1 * noise_return_value_inlined_4_1;\n"+
"p_fbm_1 = m_fbm_1 * p_fbm_1;\n"+
"s_fbm_1 = 0.5 * s_fbm_1;\n"+
"}\n"+
"fbm_return_value_1 = f_fbm_1;\n"+
"fbm_has_returned_1 = true;\n"+
"fbm_return_value_inlined_8_1 = fbm_return_value_1;\n"+
"col_blackboard_1 += 0.02 * fbm_return_value_inlined_8_1;\n"+
"ce_flattened_block_1_blackboard_1 = vec2(2.0, - 10.0);\n"+
"w_flattened_block_1_blackboard_1 = 2.5 * p_blackboard_1 - ce_flattened_block_1_blackboard_1;\n"+
"w_flattened_block_1_blackboard_1 = vec2(atan(w_flattened_block_1_blackboard_1.y, w_flattened_block_1_blackboard_1.x), length(w_flattened_block_1_blackboard_1));\n"+
"p_fbm_1 = w_flattened_block_1_blackboard_1 * 2.0 * vec2(1.0, 1.0);\n"+
"fbm_has_returned_1 = false;\n"+
"f_fbm_1 = 0.0;\n"+
"s_fbm_1 = 0.5;\n"+
"for( i_fbm_1 = 0;\n"+
"i_fbm_1 < 6; i_fbm_1 ++)\n"+
"{\n"+
"p_noise_1 = p_fbm_1;\n"+
"noise_has_returned_1 = false;\n"+
"i_noise_1 = ivec2(floor(p_noise_1));\n"+
"f_noise_1 = fract(p_noise_1);\n"+
"u_noise_1 = f_noise_1 * f_noise_1 * (3.0 - 2.0 * f_noise_1);\n"+
"z_grad_1 = i_noise_1 + ivec2(0, 0);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_0_1 = grad_return_value_1;\n"+
"z_grad_1 = i_noise_1 + ivec2(1, 0);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_1_1 = grad_return_value_1;\n"+
"z_grad_1 = i_noise_1 + ivec2(0, 1);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_2_1 = grad_return_value_1;\n"+
"z_grad_1 = i_noise_1 + ivec2(1, 1);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_3_1 = grad_return_value_1;\n"+
"noise_return_value_1 = mix(mix(dot(grad_return_value_inlined_0_1, f_noise_1 - vec2(0.0, 0.0)), dot(grad_return_value_inlined_1_1, f_noise_1 - vec2(1.0, 0.0)), u_noise_1.x), mix(dot(grad_return_value_inlined_2_1, f_noise_1 - vec2(0.0, 1.0)), dot(grad_return_value_inlined_3_1, f_noise_1 - vec2(1.0, 1.0)), u_noise_1.x), u_noise_1.y);\n"+
"noise_has_returned_1 = true;\n"+
"noise_return_value_inlined_4_1 = noise_return_value_1;\n"+
"f_fbm_1 += s_fbm_1 * noise_return_value_inlined_4_1;\n"+
"p_fbm_1 = m_fbm_1 * p_fbm_1;\n"+
"s_fbm_1 = 0.5 * s_fbm_1;\n"+
"}\n"+
"fbm_return_value_1 = f_fbm_1;\n"+
"fbm_has_returned_1 = true;\n"+
"fbm_return_value_inlined_9_1 = fbm_return_value_1;\n"+
"ff_flattened_block_1_blackboard_1 = fbm_return_value_inlined_9_1;\n"+
"fa_flattened_block_1_blackboard_1 = smoothstep(1.5, 1.0, abs(w_flattened_block_1_blackboard_1.y + ce_flattened_block_1_blackboard_1.y - 0.7));\n"+
"fa_flattened_block_1_blackboard_1 *= smoothstep(0.4, 0.2, abs(w_flattened_block_1_blackboard_1.x - 1.8 + 0.5 * ff_flattened_block_1_blackboard_1));\n"+
"col_blackboard_1 += v_blackboard_1 * 0.06 * smoothstep(- 0.5, 0.5, ff_flattened_block_1_blackboard_1) * fa_flattened_block_1_blackboard_1;\n"+
"m_blackboard_1 = 0.0;\n"+
"m2_blackboard_1 = 0.0;\n"+
"for( i_blackboard_1 = 0;\n"+
"i_blackboard_1 < 20; i_blackboard_1 ++)\n"+
"{\n"+
"p1_blackboard_1 = vec2(3.0, 2.0) * sin(float(i_blackboard_1) * 1.3 + vec2(0, 1));\n"+
"p2_blackboard_1 = p1_blackboard_1 + vec2(0.5, 2.0) * sin(float(i_blackboard_1) * 11.1 + vec2(2, 4));\n"+
"p_sdLine_1 = 2.5 * p_blackboard_1 + 0.5 * sin(2.5 * p_blackboard_1 + float(i_blackboard_1) * vec2(1.7, 2.3));\n"+
"a_sdLine_1 = p1_blackboard_1;\n"+
"b_sdLine_1 = p2_blackboard_1;\n"+
"sdLine_has_returned_1 = false;\n"+
"pa_sdLine_1 = p_sdLine_1 - a_sdLine_1;\n"+
"ba_sdLine_1 = b_sdLine_1 - a_sdLine_1;\n"+
"h_sdLine_1 = clamp(dot(pa_sdLine_1, ba_sdLine_1) / dot(ba_sdLine_1, ba_sdLine_1), 0.0, 1.0);\n"+
"sdLine_return_value_1 = length(pa_sdLine_1 - h_sdLine_1 * ba_sdLine_1);\n"+
"sdLine_has_returned_1 = true;\n"+
"sdLine_return_value_inlined_10_1 = sdLine_return_value_1;\n"+
"d_blackboard_1 = sdLine_return_value_inlined_10_1;\n"+
"p_fbm_1 = 1.25 * p_blackboard_1;\n"+
"fbm_has_returned_1 = false;\n"+
"f_fbm_1 = 0.0;\n"+
"s_fbm_1 = 0.5;\n"+
"for(   i_fbm_1 = 0;\n"+
"i_fbm_1 < 6; i_fbm_1 ++)\n"+
"{\n"+
"p_noise_1 = p_fbm_1;\n"+
"noise_has_returned_1 = false;\n"+
"i_noise_1 = ivec2(floor(p_noise_1));\n"+
"f_noise_1 = fract(p_noise_1);\n"+
"u_noise_1 = f_noise_1 * f_noise_1 * (3.0 - 2.0 * f_noise_1);\n"+
"z_grad_1 = i_noise_1 + ivec2(0, 0);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_0_1 = grad_return_value_1;\n"+
"z_grad_1 = i_noise_1 + ivec2(1, 0);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_1_1 = grad_return_value_1;\n"+
"z_grad_1 = i_noise_1 + ivec2(0, 1);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_2_1 = grad_return_value_1;\n"+
"z_grad_1 = i_noise_1 + ivec2(1, 1);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_3_1 = grad_return_value_1;\n"+
"noise_return_value_1 = mix(mix(dot(grad_return_value_inlined_0_1, f_noise_1 - vec2(0.0, 0.0)), dot(grad_return_value_inlined_1_1, f_noise_1 - vec2(1.0, 0.0)), u_noise_1.x), mix(dot(grad_return_value_inlined_2_1, f_noise_1 - vec2(0.0, 1.0)), dot(grad_return_value_inlined_3_1, f_noise_1 - vec2(1.0, 1.0)), u_noise_1.x), u_noise_1.y);\n"+
"noise_has_returned_1 = true;\n"+
"noise_return_value_inlined_4_1 = noise_return_value_1;\n"+
"f_fbm_1 += s_fbm_1 * noise_return_value_inlined_4_1;\n"+
"p_fbm_1 = m_fbm_1 * p_fbm_1;\n"+
"s_fbm_1 = 0.5 * s_fbm_1;\n"+
"}\n"+
"fbm_return_value_1 = f_fbm_1;\n"+
"fbm_has_returned_1 = true;\n"+
"fbm_return_value_inlined_11_1 = fbm_return_value_1;\n"+
"d_blackboard_1 += 0.1 * fbm_return_value_inlined_11_1;\n"+
"p_fbm_1 = 1.75 * p_blackboard_1;\n"+
"fbm_has_returned_1 = false;\n"+
"f_fbm_1 = 0.0;\n"+
"s_fbm_1 = 0.5;\n"+
"for(   i_fbm_1 = 0;\n"+
"i_fbm_1 < 6; i_fbm_1 ++)\n"+
"{\n"+
"p_noise_1 = p_fbm_1;\n"+
"noise_has_returned_1 = false;\n"+
"i_noise_1 = ivec2(floor(p_noise_1));\n"+
"f_noise_1 = fract(p_noise_1);\n"+
"u_noise_1 = f_noise_1 * f_noise_1 * (3.0 - 2.0 * f_noise_1);\n"+
"z_grad_1 = i_noise_1 + ivec2(0, 0);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_0_1 = grad_return_value_1;\n"+
"z_grad_1 = i_noise_1 + ivec2(1, 0);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_1_1 = grad_return_value_1;\n"+
"z_grad_1 = i_noise_1 + ivec2(0, 1);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_2_1 = grad_return_value_1;\n"+
"z_grad_1 = i_noise_1 + ivec2(1, 1);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_3_1 = grad_return_value_1;\n"+
"noise_return_value_1 = mix(mix(dot(grad_return_value_inlined_0_1, f_noise_1 - vec2(0.0, 0.0)), dot(grad_return_value_inlined_1_1, f_noise_1 - vec2(1.0, 0.0)), u_noise_1.x), mix(dot(grad_return_value_inlined_2_1, f_noise_1 - vec2(0.0, 1.0)), dot(grad_return_value_inlined_3_1, f_noise_1 - vec2(1.0, 1.0)), u_noise_1.x), u_noise_1.y);\n"+
"noise_has_returned_1 = true;\n"+
"noise_return_value_inlined_4_1 = noise_return_value_1;\n"+
"f_fbm_1 += s_fbm_1 * noise_return_value_inlined_4_1;\n"+
"p_fbm_1 = m_fbm_1 * p_fbm_1;\n"+
"s_fbm_1 = 0.5 * s_fbm_1;\n"+
"}\n"+
"fbm_return_value_1 = f_fbm_1;\n"+
"fbm_has_returned_1 = true;\n"+
"fbm_return_value_inlined_12_1 = fbm_return_value_1;\n"+
"ww_blackboard_1 = fbm_return_value_inlined_12_1;\n"+
"m_blackboard_1 = max(m_blackboard_1, smoothstep(0.05, 0.0, d_blackboard_1));\n"+
"m2_blackboard_1 = max(m2_blackboard_1, smoothstep(0.2, - 0.2, d_blackboard_1 - abs(ww_blackboard_1)));\n"+
"}\n"+
"col_blackboard_1 += v_blackboard_1 * 0.01 * m_blackboard_1;\n"+
"col_blackboard_1 += v_blackboard_1 * 0.025 * m2_blackboard_1;\n"+
"p_fbm_1 = p_blackboard_1 * 82.0;\n"+
"fbm_has_returned_1 = false;\n"+
"f_fbm_1 = 0.0;\n"+
"s_fbm_1 = 0.5;\n"+
"for( i_fbm_1 = 0;\n"+
"i_fbm_1 < 6; i_fbm_1 ++)\n"+
"{\n"+
"p_noise_1 = p_fbm_1;\n"+
"noise_has_returned_1 = false;\n"+
"i_noise_1 = ivec2(floor(p_noise_1));\n"+
"f_noise_1 = fract(p_noise_1);\n"+
"u_noise_1 = f_noise_1 * f_noise_1 * (3.0 - 2.0 * f_noise_1);\n"+
"z_grad_1 = i_noise_1 + ivec2(0, 0);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_0_1 = grad_return_value_1;\n"+
"z_grad_1 = i_noise_1 + ivec2(1, 0);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_1_1 = grad_return_value_1;\n"+
"z_grad_1 = i_noise_1 + ivec2(0, 1);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_2_1 = grad_return_value_1;\n"+
"z_grad_1 = i_noise_1 + ivec2(1, 1);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_3_1 = grad_return_value_1;\n"+
"noise_return_value_1 = mix(mix(dot(grad_return_value_inlined_0_1, f_noise_1 - vec2(0.0, 0.0)), dot(grad_return_value_inlined_1_1, f_noise_1 - vec2(1.0, 0.0)), u_noise_1.x), mix(dot(grad_return_value_inlined_2_1, f_noise_1 - vec2(0.0, 1.0)), dot(grad_return_value_inlined_3_1, f_noise_1 - vec2(1.0, 1.0)), u_noise_1.x), u_noise_1.y);\n"+
"noise_has_returned_1 = true;\n"+
"noise_return_value_inlined_4_1 = noise_return_value_1;\n"+
"f_fbm_1 += s_fbm_1 * noise_return_value_inlined_4_1;\n"+
"p_fbm_1 = m_fbm_1 * p_fbm_1;\n"+
"s_fbm_1 = 0.5 * s_fbm_1;\n"+
"}\n"+
"fbm_return_value_1 = f_fbm_1;\n"+
"fbm_has_returned_1 = true;\n"+
"fbm_return_value_inlined_13_1 = fbm_return_value_1;\n"+
"col_blackboard_1 += col_blackboard_1.x * col_blackboard_1.x * 0.75 * smoothstep(- 0.2, 0.2, fbm_return_value_inlined_13_1);\n"+
"blackboard_return_value_1 = col_blackboard_1;\n"+
"blackboard_has_returned_1 = true;\n"+
"blackboard_return_value_inlined_41_1 = blackboard_return_value_1;\n"+
"col_mainImage_1 = blackboard_return_value_inlined_41_1;\n"+
"col_chalk_1 = col_mainImage_1;\n"+
"fragCoord_chalk_1 = gl_FragCoord.xy;\n"+
"chalk_has_returned_1 = false;\n"+
"p1_chalk_1 = vec2(2.25 + 0.70 * sin(1.3 * iTime), 0.0);\n"+
"p1_chalk_1.y = 1.0 / p1_chalk_1.x;\n"+
"p2_chalk_1 = vec2(- 1.4 + 0.40 * sin(1.1 * iTime), 0.0);\n"+
"p2_chalk_1.y = 1.0 / p2_chalk_1.x;\n"+
"p3_chalk_1 = vec2(0.35 + 0.02 * sin(1.9 * iTime), 0.0);\n"+
"p3_chalk_1.y = 1.0 / p3_chalk_1.x;\n"+
"p_chalk_1 = (2.0 * fragCoord_chalk_1 - iResolution.xy) / iResolution.y;\n"+
"p_chalk_1 *= 3.0;\n"+
"p_chalk_1 -= vec2(- 0.3, - 0.7);\n"+
"gf_chalk_1 = 0.6;\n"+
"p_fbm_1 = p_chalk_1.yx * 10.0;\n"+
"fbm_has_returned_1 = false;\n"+
"f_fbm_1 = 0.0;\n"+
"s_fbm_1 = 0.5;\n"+
"for( i_fbm_1 = 0;\n"+
"i_fbm_1 < 6; i_fbm_1 ++)\n"+
"{\n"+
"p_noise_1 = p_fbm_1;\n"+
"noise_has_returned_1 = false;\n"+
"i_noise_1 = ivec2(floor(p_noise_1));\n"+
"f_noise_1 = fract(p_noise_1);\n"+
"u_noise_1 = f_noise_1 * f_noise_1 * (3.0 - 2.0 * f_noise_1);\n"+
"z_grad_1 = i_noise_1 + ivec2(0, 0);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"if(! live_tu_has_executed)\n"+
"{\n"+
"float time_mainImage_2;\n"+
"vec3 color_mainImage_2;\n"+
"int i_mainImage_2;\n"+
"int j_mainImage_2;\n"+
"vec2 uv_mainImage_2;\n"+
"vec2 coord_getPixel_2;\n"+
"float time_getPixel_2;\n"+
"bool getPixel_has_returned_2;\n"+
"vec3 getPixel_return_value_2;\n"+
"vec2 iuv_getPixel_2;\n"+
"vec2 uv_getPixel_2;\n"+
"vec3 ang_getPixel_2;\n"+
"vec3 ang_fromEuler_2;\n"+
"bool fromEuler_has_returned_2;\n"+
"mat3 fromEuler_return_value_2;\n"+
"vec2 a1_fromEuler_2;\n"+
"vec2 a2_fromEuler_2;\n"+
"vec2 a3_fromEuler_2;\n"+
"mat3 m_fromEuler_2;\n"+
"mat3 fromEuler_return_value_inlined_36_2;\n"+
"mat3 rot_getPixel_2;\n"+
"vec3 ori_getPixel_2;\n"+
"vec3 dir_getPixel_2;\n"+
"vec3 p_getPixel_2;\n"+
"vec3 ori_spheretracing_2;\n"+
"vec3 dir_spheretracing_2;\n"+
"vec3 p_spheretracing_2;\n"+
"bool spheretracing_has_returned_2;\n"+
"vec2 spheretracing_return_value_2;\n"+
"vec2 td_spheretracing_2;\n"+
"int i_spheretracing_2;\n"+
"vec3 p_map_2;\n"+
"bool map_has_returned_2;\n"+
"float map_return_value_2;\n"+
"vec3 p_rock_2;\n"+
"bool rock_has_returned_2;\n"+
"float rock_return_value_2;\n"+
"vec3 p_sphere_2;\n"+
"float r_sphere_2;\n"+
"bool sphere_has_returned_2;\n"+
"float sphere_return_value_2;\n"+
"float sphere_return_value_inlined_12_2;\n"+
"float d_rock_2;\n"+
"int i_rock_2;\n"+
"float ii_rock_2;\n"+
"float p_hash11_2;\n"+
"bool hash11_has_returned_2;\n"+
"float hash11_return_value_2;\n"+
"float hash11_return_value_inlined_13_2;\n"+
"float r_rock_2;\n"+
"float p_hash31_2;\n"+
"bool hash31_has_returned_2;\n"+
"vec3 hash31_return_value_2;\n"+
"vec3 h_hash31_2;\n"+
"vec3 hash31_return_value_inlined_14_2;\n"+
"vec3 v_rock_2;\n"+
"float sphere_return_value_inlined_15_2;\n"+
"float a_boolSmoothSub_2;\n"+
"float b_boolSmoothSub_2;\n"+
"float k_boolSmoothSub_2;\n"+
"bool boolSmoothSub_has_returned_2;\n"+
"float boolSmoothSub_return_value_2;\n"+
"float a_boolSmoothIntersect_2;\n"+
"float b_boolSmoothIntersect_2;\n"+
"float k_boolSmoothIntersect_2;\n"+
"bool boolSmoothIntersect_has_returned_2;\n"+
"float boolSmoothIntersect_return_value_2;\n"+
"float h_boolSmoothIntersect_2;\n"+
"float boolSmoothIntersect_return_value_inlined_11_2;\n"+
"float boolSmoothSub_return_value_inlined_16_2;\n"+
"float rock_return_value_inlined_17_2;\n"+
"vec3 p_fbm3_2;\n"+
"float a_fbm3_2;\n"+
"float f_fbm3_2;\n"+
"bool fbm3_has_returned_2;\n"+
"float fbm3_return_value_2;\n"+
"vec3 p_noise_3_2;\n"+
"bool noise_3_has_returned_2;\n"+
"float noise_3_return_value_2;\n"+
"vec3 i_noise_3_2;\n"+
"vec3 f_noise_3_2;\n"+
"vec3 u_noise_3_2;\n"+
"vec2 ii_noise_3_2;\n"+
"vec2 p_hash12_2;\n"+
"bool hash12_has_returned_2;\n"+
"float hash12_return_value_2;\n"+
"float h_hash12_2;\n"+
"float hash12_return_value_inlined_0_2;\n"+
"float a_noise_3_2;\n"+
"float hash12_return_value_inlined_1_2;\n"+
"float b_noise_3_2;\n"+
"float hash12_return_value_inlined_2_2;\n"+
"float c_noise_3_2;\n"+
"float hash12_return_value_inlined_3_2;\n"+
"float d_noise_3_2;\n"+
"float v1_noise_3_2;\n"+
"float hash12_return_value_inlined_4_2;\n"+
"float hash12_return_value_inlined_5_2;\n"+
"float hash12_return_value_inlined_6_2;\n"+
"float hash12_return_value_inlined_7_2;\n"+
"float v2_noise_3_2;\n"+
"float noise_3_return_value_inlined_8_2;\n"+
"float fbm3_return_value_inlined_18_2;\n"+
"float d_map_2;\n"+
"vec3 gp_plane_2;\n"+
"vec4 p_plane_2;\n"+
"bool plane_has_returned_2;\n"+
"float plane_return_value_2;\n"+
"float plane_return_value_inlined_19_2;\n"+
"float a_boolUnion_2;\n"+
"float b_boolUnion_2;\n"+
"bool boolUnion_has_returned_2;\n"+
"float boolUnion_return_value_2;\n"+
"float boolUnion_return_value_inlined_20_2;\n"+
"float map_return_value_inlined_31_2;\n"+
"vec2 spheretracing_return_value_inlined_37_2;\n"+
"vec2 td_getPixel_2;\n"+
"vec3 p_getNormal_2;\n"+
"float dens_getNormal_2;\n"+
"bool getNormal_has_returned_2;\n"+
"vec3 getNormal_return_value_2;\n"+
"vec3 n_getNormal_2;\n"+
"vec3 p_map_detailed_2;\n"+
"bool map_detailed_has_returned_2;\n"+
"float map_detailed_return_value_2;\n"+
"float rock_return_value_inlined_21_2;\n"+
"vec3 p_fbm3_high_2;\n"+
"float a_fbm3_high_2;\n"+
"float f_fbm3_high_2;\n"+
"bool fbm3_high_has_returned_2;\n"+
"float fbm3_high_return_value_2;\n"+
"float ret_fbm3_high_2;\n"+
"float amp_fbm3_high_2;\n"+
"float frq_fbm3_high_2;\n"+
"int i_fbm3_high_2;\n"+
"float noise_3_return_value_inlined_9_2;\n"+
"float n_fbm3_high_2;\n"+
"float fbm3_high_return_value_inlined_22_2;\n"+
"float d_map_detailed_2;\n"+
"float plane_return_value_inlined_23_2;\n"+
"float boolUnion_return_value_inlined_24_2;\n"+
"float map_detailed_return_value_inlined_25_2;\n"+
"float map_detailed_return_value_inlined_26_2;\n"+
"float map_detailed_return_value_inlined_27_2;\n"+
"float map_detailed_return_value_inlined_28_2;\n"+
"vec3 getNormal_return_value_inlined_38_2;\n"+
"vec3 n_getPixel_2;\n"+
"vec3 p_getOcclusion_2;\n"+
"vec3 n_getOcclusion_2;\n"+
"bool getOcclusion_has_returned_2;\n"+
"vec2 getOcclusion_return_value_2;\n"+
"vec2 r_getOcclusion_2;\n"+
"int i_getOcclusion_2;\n"+
"float f_getOcclusion_2;\n"+
"float hao_getOcclusion_2;\n"+
"float hc_getOcclusion_2;\n"+
"float map_return_value_inlined_29_2;\n"+
"float dao_getOcclusion_2;\n"+
"float map_return_value_inlined_30_2;\n"+
"float dc_getOcclusion_2;\n"+
"vec2 getOcclusion_return_value_inlined_39_2;\n"+
"vec2 occ_getPixel_2;\n"+
"vec3 light_getPixel_2;\n"+
"vec3 color_getPixel_2;\n"+
"vec3 p_getStoneColor_2;\n"+
"float c_getStoneColor_2;\n"+
"vec3 l_getStoneColor_2;\n"+
"vec3 n_getStoneColor_2;\n"+
"vec3 e_getStoneColor_2;\n"+
"bool getStoneColor_has_returned_2;\n"+
"vec3 getStoneColor_return_value_2;\n"+
"float noise_3_return_value_inlined_32_2;\n"+
"float ic_getStoneColor_2;\n"+
"vec3 base_getStoneColor_2;\n"+
"vec3 sand_getStoneColor_2;\n"+
"vec3 color_getStoneColor_2;\n"+
"float f_getStoneColor_2;\n"+
"vec3 n_diffuse_2;\n"+
"vec3 l_diffuse_2;\n"+
"float p_diffuse_2;\n"+
"bool diffuse_has_returned_2;\n"+
"float diffuse_return_value_2;\n"+
"float diffuse_return_value_inlined_33_2;\n"+
"vec3 n_specular_2;\n"+
"vec3 l_specular_2;\n"+
"vec3 e_specular_2;\n"+
"float s_specular_2;\n"+
"bool specular_has_returned_2;\n"+
"float specular_return_value_2;\n"+
"float nrm_specular_2;\n"+
"float specular_return_value_inlined_34_2;\n"+
"float specular_return_value_inlined_35_2;\n"+
"vec3 getStoneColor_return_value_inlined_40_2;\n"+
"vec3 getPixel_return_value_inlined_41_2;\n"+
"vec3 c_saturation_2;\n"+
"float t_saturation_2;\n"+
"bool saturation_has_returned_2;\n"+
"vec3 saturation_return_value_2;\n"+
"vec3 saturation_return_value_inlined_42_2;\n"+
"vec2 iuv_mainImage_2;\n"+
"float vgn_mainImage_2;\n"+
"sdLine_return_value_inlined_29_1 = iTime * 0.3;\n"+
"color_mainImage_2 = vec3(0.0);\n"+
"for(     i_mainImage_2 = - 1;\n"+
"i_mainImage_2 <= 1; i_mainImage_2 ++)\n"+
"{\n"+
"for(       j_mainImage_2 = - 1;\n"+
"j_mainImage_2 <= 1; j_mainImage_2 ++)\n"+
"{\n"+
"q3_chalk_1 = gl_FragCoord.xy + vec2(i_mainImage_2, j_mainImage_2) / 3.0;\n"+
"p_fbm_1 = q3_chalk_1;\n"+
"ff_flattened_block_1_blackboard_1 = sdLine_return_value_inlined_29_1;\n"+
"getPixel_has_returned_2 = false;\n"+
"fragCoord_chalk_1 = p_fbm_1 / iResolution.xy * 2.0 - 1.0;\n"+
"w_flattened_block_1_blackboard_1 = fragCoord_chalk_1;\n"+
"w_flattened_block_1_blackboard_1.x *= iResolution.x / iResolution.y;\n"+
"ang_getPixel_2 = vec3(0.0, 0.2, ff_flattened_block_1_blackboard_1);\n"+
"if(iMouse.z > 0.0)\n"+
"{\n"+
"ang_getPixel_2 = vec3(0.0, clamp(2.0 - iMouse.y * 0.01, 0.0, 3.1415), iMouse.x * 0.01);\n"+
"}\n"+
"ang_fromEuler_2 = ang_getPixel_2;\n"+
"fromEuler_has_returned_2 = false;\n"+
"intersect_return_value_inlined_38_1 = vec2(sin(ang_fromEuler_2.x), cos(ang_fromEuler_2.x));\n"+
"grad_return_value_inlined_0_1 = vec2(sin(ang_fromEuler_2.y), cos(ang_fromEuler_2.y));\n"+
"w_altitude_1 = vec2(sin(ang_fromEuler_2.z), cos(ang_fromEuler_2.z));\n"+
"m_fromEuler_2[0] = vec3(intersect_return_value_inlined_38_1.y * w_altitude_1.y + intersect_return_value_inlined_38_1.x * grad_return_value_inlined_0_1.x * w_altitude_1.x, intersect_return_value_inlined_38_1.y * grad_return_value_inlined_0_1.x * w_altitude_1.x + w_altitude_1.y * intersect_return_value_inlined_38_1.x, - grad_return_value_inlined_0_1.y * w_altitude_1.x);\n"+
"m_fromEuler_2[1] = vec3(- grad_return_value_inlined_0_1.y * intersect_return_value_inlined_38_1.x, intersect_return_value_inlined_38_1.y * grad_return_value_inlined_0_1.y, grad_return_value_inlined_0_1.x);\n"+
"m_fromEuler_2[2] = vec3(w_altitude_1.y * intersect_return_value_inlined_38_1.x * grad_return_value_inlined_0_1.x + intersect_return_value_inlined_38_1.y * w_altitude_1.x, intersect_return_value_inlined_38_1.x * w_altitude_1.x - intersect_return_value_inlined_38_1.y * w_altitude_1.y * grad_return_value_inlined_0_1.x, grad_return_value_inlined_0_1.y * w_altitude_1.y);\n"+
"fromEuler_return_value_2 = m_fromEuler_2;\n"+
"fromEuler_has_returned_2 = true;\n"+
"fromEuler_return_value_inlined_36_2 = fromEuler_return_value_2;\n"+
"rot_getPixel_2 = fromEuler_return_value_inlined_36_2;\n"+
"ori_getPixel_2 = vec3(0.0, 0.0, 2.8);\n"+
"dir_getPixel_2 = normalize(vec3(w_flattened_block_1_blackboard_1.xy, - 2.0));\n"+
"ori_getPixel_2 = ori_getPixel_2 * rot_getPixel_2;\n"+
"dir_getPixel_2 = dir_getPixel_2 * rot_getPixel_2;\n"+
"chalk_return_value_1 = ori_getPixel_2;\n"+
"dir_spheretracing_2 = dir_getPixel_2;\n"+
"p_spheretracing_2 = p_getPixel_2;\n"+
"cro_has_returned_1 = false;\n"+
"b_cro_1 = vec2(0.0);\n"+
"for(         n_grad_1 = 0;\n"+
"n_grad_1 < NUM_STEPS_2; n_grad_1 ++)\n"+
"{\n"+
"p_spheretracing_2 = chalk_return_value_1 + dir_spheretracing_2 * b_cro_1.x;\n"+
"p_map_2 = p_spheretracing_2;\n"+
"intersect_has_returned_1 = false;\n"+
"p_rock_2 = p_map_2;\n"+
"grad_has_returned_1 = false;\n"+
"p_sphere_2 = p_rock_2;\n"+
"dy_chalk_1 = 1.0;\n"+
"sphere_has_returned_2 = false;\n"+
"fbm_return_value_inlined_8_1 = length(p_sphere_2) - dy_chalk_1;\n"+
"sphere_has_returned_2 = true;\n"+
"sphere_return_value_inlined_12_2 = fbm_return_value_inlined_8_1;\n"+
"cro_return_value_inlined_5_1 = sphere_return_value_inlined_12_2;\n"+
"for(           i_rock_2 = 0;\n"+
"i_rock_2 < 9; i_rock_2 ++)\n"+
"{\n"+
"m_blackboard_1 = float(i_rock_2);\n"+
"sdLine_return_value_inlined_16_1 = m_blackboard_1;\n"+
"hash11_has_returned_2 = false;\n"+
"hash11_return_value_2 = fract(sin(sdLine_return_value_inlined_16_1 * 727.1) * 435.545);\n"+
"hash11_has_returned_2 = true;\n"+
"hash11_return_value_inlined_13_2 = hash11_return_value_2;\n"+
"cro_return_value_inlined_6_1 = 2.5 + hash11_return_value_inlined_13_2;\n"+
"fbm_return_value_inlined_14_1 = m_blackboard_1;\n"+
"altitude_has_returned_1 = false;\n"+
"col_mainImage_1 = vec3(127.231, 491.7, 718.423) * fbm_return_value_inlined_14_1;\n"+
"hash31_return_value_2 = fract(sin(col_mainImage_1) * 435.543);\n"+
"altitude_has_returned_1 = true;\n"+
"hash31_return_value_inlined_14_2 = hash31_return_value_2;\n"+
"v_rock_2 = normalize(hash31_return_value_inlined_14_2 * 2.0 - 1.0);\n"+
"p_sphere_2 = p_rock_2 + v_rock_2 * cro_return_value_inlined_6_1;\n"+
"dy_chalk_1 = cro_return_value_inlined_6_1 * 0.8;\n"+
"sphere_has_returned_2 = false;\n"+
"fbm_return_value_inlined_8_1 = length(p_sphere_2) - dy_chalk_1;\n"+
"sphere_has_returned_2 = true;\n"+
"sphere_return_value_inlined_15_2 = fbm_return_value_inlined_8_1;\n"+
"a_boolSmoothSub_2 = cro_return_value_inlined_5_1;\n"+
"s_fbm_1 = sphere_return_value_inlined_15_2;\n"+
"fbm_return_value_inlined_39_1 = 0.03;\n"+
"chalk_has_returned_1 = false;\n"+
"a_boolSmoothIntersect_2 = a_boolSmoothSub_2;\n"+
"b_boolSmoothIntersect_2 = - s_fbm_1;\n"+
"fbm_return_value_inlined_12_1 = fbm_return_value_inlined_39_1;\n"+
"boolSmoothIntersect_has_returned_2 = false;\n"+
"h_boolSmoothIntersect_2 = clamp(0.5 + 0.5 * (b_boolSmoothIntersect_2 - a_boolSmoothIntersect_2) / fbm_return_value_inlined_12_1, 0.0, 1.0);\n"+
"boolSmoothIntersect_return_value_2 = mix(a_boolSmoothIntersect_2, b_boolSmoothIntersect_2, h_boolSmoothIntersect_2) + fbm_return_value_inlined_12_1 * h_boolSmoothIntersect_2 * (1.0 - h_boolSmoothIntersect_2);\n"+
"boolSmoothIntersect_has_returned_2 = true;\n"+
"sdLine_return_value_inlined_17_1 = boolSmoothIntersect_return_value_2;\n"+
"sdLine_return_value_1 = sdLine_return_value_inlined_17_1;\n"+
"chalk_has_returned_1 = true;\n"+
"boolSmoothSub_return_value_inlined_16_2 = sdLine_return_value_1;\n"+
"cro_return_value_inlined_5_1 = boolSmoothSub_return_value_inlined_16_2;\n"+
"}\n"+
"rock_return_value_2 = cro_return_value_inlined_5_1;\n"+
"grad_has_returned_1 = true;\n"+
"sdLine_return_value_inlined_19_1 = rock_return_value_2;\n"+
"p_fbm3_2 = p_map_2 * 4.0;\n"+
"fbm_return_value_inlined_24_1 = 0.4;\n"+
"f_fbm3_2 = 2.96;\n"+
"fbm3_has_returned_2 = false;\n"+
"p_noise_3_2 = p_fbm3_2;\n"+
"blackboard_has_returned_1 = false;\n"+
"i_noise_3_2 = floor(p_noise_3_2);\n"+
"f_noise_3_2 = fract(p_noise_3_2);\n"+
"u_noise_3_2 = f_noise_3_2 * f_noise_3_2 * (3.0 - 2.0 * f_noise_3_2);\n"+
"p1_chalk_1 = i_noise_3_2.xy + i_noise_3_2.z * vec2(5.0);\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 0.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"hash12_return_value_inlined_0_2 = sdLine_return_value_inlined_22_1;\n"+
"sdLine_return_value_inlined_21_1 = hash12_return_value_inlined_0_2;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 0.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"h_intersect_1 = sdLine_return_value_inlined_22_1;\n"+
"b_noise_3_2 = h_intersect_1;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 1.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"sdLine_return_value_inlined_35_1 = sdLine_return_value_inlined_22_1;\n"+
"sdLine_return_value_inlined_28_1 = sdLine_return_value_inlined_35_1;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 1.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"hash12_return_value_inlined_3_2 = sdLine_return_value_inlined_22_1;\n"+
"cro_return_value_1 = hash12_return_value_inlined_3_2;\n"+
"d_blackboard_1 = mix(mix(sdLine_return_value_inlined_21_1, b_noise_3_2, u_noise_3_2.x), mix(sdLine_return_value_inlined_28_1, cro_return_value_1, u_noise_3_2.x), u_noise_3_2.y);\n"+
"p1_chalk_1 += vec2(5.0);\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 0.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"hash12_return_value_inlined_4_2 = sdLine_return_value_inlined_22_1;\n"+
"sdLine_return_value_inlined_21_1 = hash12_return_value_inlined_4_2;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 0.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"hash12_return_value_inlined_5_2 = sdLine_return_value_inlined_22_1;\n"+
"b_noise_3_2 = hash12_return_value_inlined_5_2;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 1.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"hash12_return_value_inlined_6_2 = sdLine_return_value_inlined_22_1;\n"+
"sdLine_return_value_inlined_28_1 = hash12_return_value_inlined_6_2;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 1.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"fbm_return_value_inlined_15_1 = sdLine_return_value_inlined_22_1;\n"+
"cro_return_value_1 = fbm_return_value_inlined_15_1;\n"+
"v2_noise_3_2 = mix(mix(sdLine_return_value_inlined_21_1, b_noise_3_2, u_noise_3_2.x), mix(sdLine_return_value_inlined_28_1, cro_return_value_1, u_noise_3_2.x), u_noise_3_2.y);\n"+
"sdLine_return_value_inlined_18_1 = max(mix(d_blackboard_1, v2_noise_3_2, u_noise_3_2.z), 0.0);\n"+
"blackboard_has_returned_1 = true;\n"+
"noise_3_return_value_inlined_8_2 = sdLine_return_value_inlined_18_1;\n"+
"fbm3_return_value_2 = noise_3_return_value_inlined_8_2;\n"+
"fbm3_has_returned_2 = true;\n"+
"sdLine_return_value_inlined_10_1 = fbm3_return_value_2;\n"+
"d_map_2 = sdLine_return_value_inlined_19_1 + sdLine_return_value_inlined_10_1 * DISPLACEMENT_2;\n"+
"gp_plane_2 = p_map_2;\n"+
"p_plane_2 = vec4(0.0, 1.0, 0.0, 1.0);\n"+
"plane_has_returned_2 = false;\n"+
"plane_return_value_2 = dot(p_plane_2.xyz, gp_plane_2 + p_plane_2.xyz * p_plane_2.w);\n"+
"plane_has_returned_2 = true;\n"+
"h_sdLine_1 = plane_return_value_2;\n"+
"a_boolUnion_2 = d_map_2;\n"+
"b_boolUnion_2 = h_sdLine_1;\n"+
"boolUnion_has_returned_2 = false;\n"+
"fbm_return_value_inlined_40_1 = min(a_boolUnion_2, b_boolUnion_2);\n"+
"boolUnion_has_returned_2 = true;\n"+
"boolUnion_return_value_inlined_20_2 = fbm_return_value_inlined_40_1;\n"+
"d_map_2 = boolUnion_return_value_inlined_20_2;\n"+
"x_chalk_1 = d_map_2;\n"+
"intersect_has_returned_1 = true;\n"+
"map_return_value_inlined_31_2 = x_chalk_1;\n"+
"b_cro_1.y = map_return_value_inlined_31_2;\n"+
"if(b_cro_1.y < TRESHOLD_2)\n"+
"{\n"+
"break;\n"+
"}\n"+
"b_cro_1.x += (b_cro_1.y - TRESHOLD_2) * 0.9;\n"+
"}\n"+
"p3_chalk_1 = b_cro_1;\n"+
"cro_has_returned_1 = true;\n"+
"p_getPixel_2 = p_spheretracing_2;\n"+
"ba_sdLine_1 = p3_chalk_1;\n"+
"c_altitude_1 = ba_sdLine_1;\n"+
"chalk_return_value_inlined_42_1 = p_getPixel_2;\n"+
"m2_blackboard_1 = c_altitude_1.y;\n"+
"noise_has_returned_1 = false;\n"+
"blackboard_return_value_1 = vec3(chalk_return_value_inlined_42_1.x + EPSILON_2, chalk_return_value_inlined_42_1.y, chalk_return_value_inlined_42_1.z);\n"+
"map_detailed_has_returned_2 = false;\n"+
"p_rock_2 = blackboard_return_value_1;\n"+
"grad_has_returned_1 = false;\n"+
"p_sphere_2 = p_rock_2;\n"+
"dy_chalk_1 = 1.0;\n"+
"sphere_has_returned_2 = false;\n"+
"fbm_return_value_inlined_8_1 = length(p_sphere_2) - dy_chalk_1;\n"+
"sphere_has_returned_2 = true;\n"+
"sphere_return_value_inlined_12_2 = fbm_return_value_inlined_8_1;\n"+
"cro_return_value_inlined_5_1 = sphere_return_value_inlined_12_2;\n"+
"for(         i_rock_2 = 0;\n"+
"i_rock_2 < 9; i_rock_2 ++)\n"+
"{\n"+
"m_blackboard_1 = float(i_rock_2);\n"+
"sdLine_return_value_inlined_16_1 = m_blackboard_1;\n"+
"hash11_has_returned_2 = false;\n"+
"hash11_return_value_2 = fract(sin(sdLine_return_value_inlined_16_1 * 727.1) * 435.545);\n"+
"hash11_has_returned_2 = true;\n"+
"hash11_return_value_inlined_13_2 = hash11_return_value_2;\n"+
"cro_return_value_inlined_6_1 = 2.5 + hash11_return_value_inlined_13_2;\n"+
"fbm_return_value_inlined_14_1 = m_blackboard_1;\n"+
"altitude_has_returned_1 = false;\n"+
"col_mainImage_1 = vec3(127.231, 491.7, 718.423) * fbm_return_value_inlined_14_1;\n"+
"hash31_return_value_2 = fract(sin(col_mainImage_1) * 435.543);\n"+
"altitude_has_returned_1 = true;\n"+
"hash31_return_value_inlined_14_2 = hash31_return_value_2;\n"+
"v_rock_2 = normalize(hash31_return_value_inlined_14_2 * 2.0 - 1.0);\n"+
"p_sphere_2 = p_rock_2 + v_rock_2 * cro_return_value_inlined_6_1;\n"+
"dy_chalk_1 = cro_return_value_inlined_6_1 * 0.8;\n"+
"sphere_has_returned_2 = false;\n"+
"fbm_return_value_inlined_8_1 = length(p_sphere_2) - dy_chalk_1;\n"+
"sphere_has_returned_2 = true;\n"+
"sphere_return_value_inlined_15_2 = fbm_return_value_inlined_8_1;\n"+
"a_boolSmoothSub_2 = cro_return_value_inlined_5_1;\n"+
"s_fbm_1 = sphere_return_value_inlined_15_2;\n"+
"fbm_return_value_inlined_39_1 = 0.03;\n"+
"chalk_has_returned_1 = false;\n"+
"a_boolSmoothIntersect_2 = a_boolSmoothSub_2;\n"+
"b_boolSmoothIntersect_2 = - s_fbm_1;\n"+
"fbm_return_value_inlined_12_1 = fbm_return_value_inlined_39_1;\n"+
"boolSmoothIntersect_has_returned_2 = false;\n"+
"h_boolSmoothIntersect_2 = clamp(0.5 + 0.5 * (b_boolSmoothIntersect_2 - a_boolSmoothIntersect_2) / fbm_return_value_inlined_12_1, 0.0, 1.0);\n"+
"boolSmoothIntersect_return_value_2 = mix(a_boolSmoothIntersect_2, b_boolSmoothIntersect_2, h_boolSmoothIntersect_2) + fbm_return_value_inlined_12_1 * h_boolSmoothIntersect_2 * (1.0 - h_boolSmoothIntersect_2);\n"+
"boolSmoothIntersect_has_returned_2 = true;\n"+
"sdLine_return_value_inlined_17_1 = boolSmoothIntersect_return_value_2;\n"+
"sdLine_return_value_1 = sdLine_return_value_inlined_17_1;\n"+
"chalk_has_returned_1 = true;\n"+
"boolSmoothSub_return_value_inlined_16_2 = sdLine_return_value_1;\n"+
"cro_return_value_inlined_5_1 = boolSmoothSub_return_value_inlined_16_2;\n"+
"}\n"+
"rock_return_value_2 = cro_return_value_inlined_5_1;\n"+
"grad_has_returned_1 = true;\n"+
"rock_return_value_inlined_21_2 = rock_return_value_2;\n"+
"p_fbm3_high_2 = blackboard_return_value_1 * 4.0;\n"+
"y_chalk_1 = 0.4;\n"+
"sdLine_return_value_inlined_31_1 = 2.96;\n"+
"fbm3_high_has_returned_2 = false;\n"+
"fbm_return_value_inlined_9_1 = 0.0;\n"+
"amp_fbm3_high_2 = 1.0;\n"+
"frq_fbm3_high_2 = 1.0;\n"+
"for(         i_fbm3_high_2 = 0;\n"+
"i_fbm3_high_2 < 5; i_fbm3_high_2 ++)\n"+
"{\n"+
"p_noise_3_2 = p_fbm3_high_2 * frq_fbm3_high_2;\n"+
"blackboard_has_returned_1 = false;\n"+
"i_noise_3_2 = floor(p_noise_3_2);\n"+
"f_noise_3_2 = fract(p_noise_3_2);\n"+
"u_noise_3_2 = f_noise_3_2 * f_noise_3_2 * (3.0 - 2.0 * f_noise_3_2);\n"+
"p1_chalk_1 = i_noise_3_2.xy + i_noise_3_2.z * vec2(5.0);\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 0.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"hash12_return_value_inlined_0_2 = sdLine_return_value_inlined_22_1;\n"+
"sdLine_return_value_inlined_21_1 = hash12_return_value_inlined_0_2;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 0.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"h_intersect_1 = sdLine_return_value_inlined_22_1;\n"+
"b_noise_3_2 = h_intersect_1;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 1.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"sdLine_return_value_inlined_35_1 = sdLine_return_value_inlined_22_1;\n"+
"sdLine_return_value_inlined_28_1 = sdLine_return_value_inlined_35_1;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 1.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"hash12_return_value_inlined_3_2 = sdLine_return_value_inlined_22_1;\n"+
"cro_return_value_1 = hash12_return_value_inlined_3_2;\n"+
"d_blackboard_1 = mix(mix(sdLine_return_value_inlined_21_1, b_noise_3_2, u_noise_3_2.x), mix(sdLine_return_value_inlined_28_1, cro_return_value_1, u_noise_3_2.x), u_noise_3_2.y);\n"+
"p1_chalk_1 += vec2(5.0);\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 0.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"hash12_return_value_inlined_4_2 = sdLine_return_value_inlined_22_1;\n"+
"sdLine_return_value_inlined_21_1 = hash12_return_value_inlined_4_2;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 0.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"hash12_return_value_inlined_5_2 = sdLine_return_value_inlined_22_1;\n"+
"b_noise_3_2 = hash12_return_value_inlined_5_2;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 1.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"hash12_return_value_inlined_6_2 = sdLine_return_value_inlined_22_1;\n"+
"sdLine_return_value_inlined_28_1 = hash12_return_value_inlined_6_2;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 1.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"fbm_return_value_inlined_15_1 = sdLine_return_value_inlined_22_1;\n"+
"cro_return_value_1 = fbm_return_value_inlined_15_1;\n"+
"v2_noise_3_2 = mix(mix(sdLine_return_value_inlined_21_1, b_noise_3_2, u_noise_3_2.x), mix(sdLine_return_value_inlined_28_1, cro_return_value_1, u_noise_3_2.x), u_noise_3_2.y);\n"+
"sdLine_return_value_inlined_18_1 = max(mix(d_blackboard_1, v2_noise_3_2, u_noise_3_2.z), 0.0);\n"+
"blackboard_has_returned_1 = true;\n"+
"fbm_return_value_inlined_13_1 = sdLine_return_value_inlined_18_1;\n"+
"n_fbm3_high_2 = pow(max(fbm_return_value_inlined_13_1, 1e-9), 2.0);\n"+
"fbm_return_value_inlined_9_1 += n_fbm3_high_2 * amp_fbm3_high_2;\n"+
"frq_fbm3_high_2 *= sdLine_return_value_inlined_31_1;\n"+
"amp_fbm3_high_2 *= y_chalk_1 * (pow(max(n_fbm3_high_2, 1e-9), 0.2));\n"+
"}\n"+
"f_fbm_1 = fbm_return_value_inlined_9_1;\n"+
"fbm3_high_has_returned_2 = true;\n"+
"fbm_return_value_inlined_37_1 = f_fbm_1;\n"+
"sdLine_return_value_inlined_33_1 = rock_return_value_inlined_21_2 + fbm_return_value_inlined_37_1 * DISPLACEMENT_2;\n"+
"gp_plane_2 = blackboard_return_value_1;\n"+
"p_plane_2 = vec4(0.0, 1.0, 0.0, 1.0);\n"+
"plane_has_returned_2 = false;\n"+
"plane_return_value_2 = dot(p_plane_2.xyz, gp_plane_2 + p_plane_2.xyz * p_plane_2.w);\n"+
"plane_has_returned_2 = true;\n"+
"ww_blackboard_1 = plane_return_value_2;\n"+
"a_boolUnion_2 = sdLine_return_value_inlined_33_1;\n"+
"b_boolUnion_2 = ww_blackboard_1;\n"+
"boolUnion_has_returned_2 = false;\n"+
"fbm_return_value_inlined_40_1 = min(a_boolUnion_2, b_boolUnion_2);\n"+
"boolUnion_has_returned_2 = true;\n"+
"boolUnion_return_value_inlined_24_2 = fbm_return_value_inlined_40_1;\n"+
"sdLine_return_value_inlined_33_1 = boolUnion_return_value_inlined_24_2;\n"+
"sdLine_return_value_inlined_36_1 = sdLine_return_value_inlined_33_1;\n"+
"map_detailed_has_returned_2 = true;\n"+
"d_chalk_1 = sdLine_return_value_inlined_36_1;\n"+
"n_getNormal_2.x = d_chalk_1;\n"+
"blackboard_return_value_1 = vec3(chalk_return_value_inlined_42_1.x, chalk_return_value_inlined_42_1.y + EPSILON_2, chalk_return_value_inlined_42_1.z);\n"+
"map_detailed_has_returned_2 = false;\n"+
"p_rock_2 = blackboard_return_value_1;\n"+
"grad_has_returned_1 = false;\n"+
"p_sphere_2 = p_rock_2;\n"+
"dy_chalk_1 = 1.0;\n"+
"sphere_has_returned_2 = false;\n"+
"fbm_return_value_inlined_8_1 = length(p_sphere_2) - dy_chalk_1;\n"+
"sphere_has_returned_2 = true;\n"+
"sphere_return_value_inlined_12_2 = fbm_return_value_inlined_8_1;\n"+
"cro_return_value_inlined_5_1 = sphere_return_value_inlined_12_2;\n"+
"for(         i_rock_2 = 0;\n"+
"i_rock_2 < 9; i_rock_2 ++)\n"+
"{\n"+
"m_blackboard_1 = float(i_rock_2);\n"+
"sdLine_return_value_inlined_16_1 = m_blackboard_1;\n"+
"hash11_has_returned_2 = false;\n"+
"hash11_return_value_2 = fract(sin(sdLine_return_value_inlined_16_1 * 727.1) * 435.545);\n"+
"hash11_has_returned_2 = true;\n"+
"hash11_return_value_inlined_13_2 = hash11_return_value_2;\n"+
"cro_return_value_inlined_6_1 = 2.5 + hash11_return_value_inlined_13_2;\n"+
"fbm_return_value_inlined_14_1 = m_blackboard_1;\n"+
"altitude_has_returned_1 = false;\n"+
"col_mainImage_1 = vec3(127.231, 491.7, 718.423) * fbm_return_value_inlined_14_1;\n"+
"hash31_return_value_2 = fract(sin(col_mainImage_1) * 435.543);\n"+
"altitude_has_returned_1 = true;\n"+
"hash31_return_value_inlined_14_2 = hash31_return_value_2;\n"+
"v_rock_2 = normalize(hash31_return_value_inlined_14_2 * 2.0 - 1.0);\n"+
"p_sphere_2 = p_rock_2 + v_rock_2 * cro_return_value_inlined_6_1;\n"+
"dy_chalk_1 = cro_return_value_inlined_6_1 * 0.8;\n"+
"sphere_has_returned_2 = false;\n"+
"fbm_return_value_inlined_8_1 = length(p_sphere_2) - dy_chalk_1;\n"+
"sphere_has_returned_2 = true;\n"+
"sphere_return_value_inlined_15_2 = fbm_return_value_inlined_8_1;\n"+
"a_boolSmoothSub_2 = cro_return_value_inlined_5_1;\n"+
"s_fbm_1 = sphere_return_value_inlined_15_2;\n"+
"fbm_return_value_inlined_39_1 = 0.03;\n"+
"chalk_has_returned_1 = false;\n"+
"a_boolSmoothIntersect_2 = a_boolSmoothSub_2;\n"+
"b_boolSmoothIntersect_2 = - s_fbm_1;\n"+
"fbm_return_value_inlined_12_1 = fbm_return_value_inlined_39_1;\n"+
"boolSmoothIntersect_has_returned_2 = false;\n"+
"h_boolSmoothIntersect_2 = clamp(0.5 + 0.5 * (b_boolSmoothIntersect_2 - a_boolSmoothIntersect_2) / fbm_return_value_inlined_12_1, 0.0, 1.0);\n"+
"boolSmoothIntersect_return_value_2 = mix(a_boolSmoothIntersect_2, b_boolSmoothIntersect_2, h_boolSmoothIntersect_2) + fbm_return_value_inlined_12_1 * h_boolSmoothIntersect_2 * (1.0 - h_boolSmoothIntersect_2);\n"+
"boolSmoothIntersect_has_returned_2 = true;\n"+
"sdLine_return_value_inlined_17_1 = boolSmoothIntersect_return_value_2;\n"+
"sdLine_return_value_1 = sdLine_return_value_inlined_17_1;\n"+
"chalk_has_returned_1 = true;\n"+
"boolSmoothSub_return_value_inlined_16_2 = sdLine_return_value_1;\n"+
"cro_return_value_inlined_5_1 = boolSmoothSub_return_value_inlined_16_2;\n"+
"}\n"+
"rock_return_value_2 = cro_return_value_inlined_5_1;\n"+
"grad_has_returned_1 = true;\n"+
"rock_return_value_inlined_21_2 = rock_return_value_2;\n"+
"p_fbm3_high_2 = blackboard_return_value_1 * 4.0;\n"+
"y_chalk_1 = 0.4;\n"+
"sdLine_return_value_inlined_31_1 = 2.96;\n"+
"fbm3_high_has_returned_2 = false;\n"+
"fbm_return_value_inlined_9_1 = 0.0;\n"+
"amp_fbm3_high_2 = 1.0;\n"+
"frq_fbm3_high_2 = 1.0;\n"+
"for(         i_fbm3_high_2 = 0;\n"+
"i_fbm3_high_2 < 5; i_fbm3_high_2 ++)\n"+
"{\n"+
"p_noise_3_2 = p_fbm3_high_2 * frq_fbm3_high_2;\n"+
"blackboard_has_returned_1 = false;\n"+
"i_noise_3_2 = floor(p_noise_3_2);\n"+
"f_noise_3_2 = fract(p_noise_3_2);\n"+
"u_noise_3_2 = f_noise_3_2 * f_noise_3_2 * (3.0 - 2.0 * f_noise_3_2);\n"+
"p1_chalk_1 = i_noise_3_2.xy + i_noise_3_2.z * vec2(5.0);\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 0.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"hash12_return_value_inlined_0_2 = sdLine_return_value_inlined_22_1;\n"+
"sdLine_return_value_inlined_21_1 = hash12_return_value_inlined_0_2;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 0.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"h_intersect_1 = sdLine_return_value_inlined_22_1;\n"+
"b_noise_3_2 = h_intersect_1;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 1.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"sdLine_return_value_inlined_35_1 = sdLine_return_value_inlined_22_1;\n"+
"sdLine_return_value_inlined_28_1 = sdLine_return_value_inlined_35_1;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 1.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"hash12_return_value_inlined_3_2 = sdLine_return_value_inlined_22_1;\n"+
"cro_return_value_1 = hash12_return_value_inlined_3_2;\n"+
"d_blackboard_1 = mix(mix(sdLine_return_value_inlined_21_1, b_noise_3_2, u_noise_3_2.x), mix(sdLine_return_value_inlined_28_1, cro_return_value_1, u_noise_3_2.x), u_noise_3_2.y);\n"+
"p1_chalk_1 += vec2(5.0);\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 0.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"hash12_return_value_inlined_4_2 = sdLine_return_value_inlined_22_1;\n"+
"sdLine_return_value_inlined_21_1 = hash12_return_value_inlined_4_2;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 0.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"hash12_return_value_inlined_5_2 = sdLine_return_value_inlined_22_1;\n"+
"b_noise_3_2 = hash12_return_value_inlined_5_2;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 1.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"hash12_return_value_inlined_6_2 = sdLine_return_value_inlined_22_1;\n"+
"sdLine_return_value_inlined_28_1 = hash12_return_value_inlined_6_2;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 1.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"fbm_return_value_inlined_15_1 = sdLine_return_value_inlined_22_1;\n"+
"cro_return_value_1 = fbm_return_value_inlined_15_1;\n"+
"v2_noise_3_2 = mix(mix(sdLine_return_value_inlined_21_1, b_noise_3_2, u_noise_3_2.x), mix(sdLine_return_value_inlined_28_1, cro_return_value_1, u_noise_3_2.x), u_noise_3_2.y);\n"+
"sdLine_return_value_inlined_18_1 = max(mix(d_blackboard_1, v2_noise_3_2, u_noise_3_2.z), 0.0);\n"+
"blackboard_has_returned_1 = true;\n"+
"fbm_return_value_inlined_13_1 = sdLine_return_value_inlined_18_1;\n"+
"n_fbm3_high_2 = pow(max(fbm_return_value_inlined_13_1, 1e-9), 2.0);\n"+
"fbm_return_value_inlined_9_1 += n_fbm3_high_2 * amp_fbm3_high_2;\n"+
"frq_fbm3_high_2 *= sdLine_return_value_inlined_31_1;\n"+
"amp_fbm3_high_2 *= y_chalk_1 * (pow(max(n_fbm3_high_2, 1e-9), 0.2));\n"+
"}\n"+
"f_fbm_1 = fbm_return_value_inlined_9_1;\n"+
"fbm3_high_has_returned_2 = true;\n"+
"fbm_return_value_inlined_37_1 = f_fbm_1;\n"+
"sdLine_return_value_inlined_33_1 = rock_return_value_inlined_21_2 + fbm_return_value_inlined_37_1 * DISPLACEMENT_2;\n"+
"gp_plane_2 = blackboard_return_value_1;\n"+
"p_plane_2 = vec4(0.0, 1.0, 0.0, 1.0);\n"+
"plane_has_returned_2 = false;\n"+
"plane_return_value_2 = dot(p_plane_2.xyz, gp_plane_2 + p_plane_2.xyz * p_plane_2.w);\n"+
"plane_has_returned_2 = true;\n"+
"ww_blackboard_1 = plane_return_value_2;\n"+
"a_boolUnion_2 = sdLine_return_value_inlined_33_1;\n"+
"b_boolUnion_2 = ww_blackboard_1;\n"+
"boolUnion_has_returned_2 = false;\n"+
"fbm_return_value_inlined_40_1 = min(a_boolUnion_2, b_boolUnion_2);\n"+
"boolUnion_has_returned_2 = true;\n"+
"boolUnion_return_value_inlined_24_2 = fbm_return_value_inlined_40_1;\n"+
"sdLine_return_value_inlined_33_1 = boolUnion_return_value_inlined_24_2;\n"+
"sdLine_return_value_inlined_36_1 = sdLine_return_value_inlined_33_1;\n"+
"map_detailed_has_returned_2 = true;\n"+
"noise_return_value_1 = sdLine_return_value_inlined_36_1;\n"+
"n_getNormal_2.y = noise_return_value_1;\n"+
"blackboard_return_value_1 = vec3(chalk_return_value_inlined_42_1.x, chalk_return_value_inlined_42_1.y, chalk_return_value_inlined_42_1.z + EPSILON_2);\n"+
"map_detailed_has_returned_2 = false;\n"+
"p_rock_2 = blackboard_return_value_1;\n"+
"grad_has_returned_1 = false;\n"+
"p_sphere_2 = p_rock_2;\n"+
"dy_chalk_1 = 1.0;\n"+
"sphere_has_returned_2 = false;\n"+
"fbm_return_value_inlined_8_1 = length(p_sphere_2) - dy_chalk_1;\n"+
"sphere_has_returned_2 = true;\n"+
"sphere_return_value_inlined_12_2 = fbm_return_value_inlined_8_1;\n"+
"cro_return_value_inlined_5_1 = sphere_return_value_inlined_12_2;\n"+
"for(         i_rock_2 = 0;\n"+
"i_rock_2 < 9; i_rock_2 ++)\n"+
"{\n"+
"m_blackboard_1 = float(i_rock_2);\n"+
"sdLine_return_value_inlined_16_1 = m_blackboard_1;\n"+
"hash11_has_returned_2 = false;\n"+
"hash11_return_value_2 = fract(sin(sdLine_return_value_inlined_16_1 * 727.1) * 435.545);\n"+
"hash11_has_returned_2 = true;\n"+
"hash11_return_value_inlined_13_2 = hash11_return_value_2;\n"+
"cro_return_value_inlined_6_1 = 2.5 + hash11_return_value_inlined_13_2;\n"+
"fbm_return_value_inlined_14_1 = m_blackboard_1;\n"+
"altitude_has_returned_1 = false;\n"+
"col_mainImage_1 = vec3(127.231, 491.7, 718.423) * fbm_return_value_inlined_14_1;\n"+
"hash31_return_value_2 = fract(sin(col_mainImage_1) * 435.543);\n"+
"altitude_has_returned_1 = true;\n"+
"hash31_return_value_inlined_14_2 = hash31_return_value_2;\n"+
"v_rock_2 = normalize(hash31_return_value_inlined_14_2 * 2.0 - 1.0);\n"+
"p_sphere_2 = p_rock_2 + v_rock_2 * cro_return_value_inlined_6_1;\n"+
"dy_chalk_1 = cro_return_value_inlined_6_1 * 0.8;\n"+
"sphere_has_returned_2 = false;\n"+
"fbm_return_value_inlined_8_1 = length(p_sphere_2) - dy_chalk_1;\n"+
"sphere_has_returned_2 = true;\n"+
"sphere_return_value_inlined_15_2 = fbm_return_value_inlined_8_1;\n"+
"a_boolSmoothSub_2 = cro_return_value_inlined_5_1;\n"+
"s_fbm_1 = sphere_return_value_inlined_15_2;\n"+
"fbm_return_value_inlined_39_1 = 0.03;\n"+
"chalk_has_returned_1 = false;\n"+
"a_boolSmoothIntersect_2 = a_boolSmoothSub_2;\n"+
"b_boolSmoothIntersect_2 = - s_fbm_1;\n"+
"fbm_return_value_inlined_12_1 = fbm_return_value_inlined_39_1;\n"+
"boolSmoothIntersect_has_returned_2 = false;\n"+
"h_boolSmoothIntersect_2 = clamp(0.5 + 0.5 * (b_boolSmoothIntersect_2 - a_boolSmoothIntersect_2) / fbm_return_value_inlined_12_1, 0.0, 1.0);\n"+
"boolSmoothIntersect_return_value_2 = mix(a_boolSmoothIntersect_2, b_boolSmoothIntersect_2, h_boolSmoothIntersect_2) + fbm_return_value_inlined_12_1 * h_boolSmoothIntersect_2 * (1.0 - h_boolSmoothIntersect_2);\n"+
"boolSmoothIntersect_has_returned_2 = true;\n"+
"sdLine_return_value_inlined_17_1 = boolSmoothIntersect_return_value_2;\n"+
"sdLine_return_value_1 = sdLine_return_value_inlined_17_1;\n"+
"chalk_has_returned_1 = true;\n"+
"boolSmoothSub_return_value_inlined_16_2 = sdLine_return_value_1;\n"+
"cro_return_value_inlined_5_1 = boolSmoothSub_return_value_inlined_16_2;\n"+
"}\n"+
"rock_return_value_2 = cro_return_value_inlined_5_1;\n"+
"grad_has_returned_1 = true;\n"+
"rock_return_value_inlined_21_2 = rock_return_value_2;\n"+
"p_fbm3_high_2 = blackboard_return_value_1 * 4.0;\n"+
"y_chalk_1 = 0.4;\n"+
"sdLine_return_value_inlined_31_1 = 2.96;\n"+
"fbm3_high_has_returned_2 = false;\n"+
"fbm_return_value_inlined_9_1 = 0.0;\n"+
"amp_fbm3_high_2 = 1.0;\n"+
"frq_fbm3_high_2 = 1.0;\n"+
"for(         i_fbm3_high_2 = 0;\n"+
"i_fbm3_high_2 < 5; i_fbm3_high_2 ++)\n"+
"{\n"+
"p_noise_3_2 = p_fbm3_high_2 * frq_fbm3_high_2;\n"+
"blackboard_has_returned_1 = false;\n"+
"i_noise_3_2 = floor(p_noise_3_2);\n"+
"f_noise_3_2 = fract(p_noise_3_2);\n"+
"u_noise_3_2 = f_noise_3_2 * f_noise_3_2 * (3.0 - 2.0 * f_noise_3_2);\n"+
"p1_chalk_1 = i_noise_3_2.xy + i_noise_3_2.z * vec2(5.0);\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 0.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"hash12_return_value_inlined_0_2 = sdLine_return_value_inlined_22_1;\n"+
"sdLine_return_value_inlined_21_1 = hash12_return_value_inlined_0_2;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 0.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"h_intersect_1 = sdLine_return_value_inlined_22_1;\n"+
"b_noise_3_2 = h_intersect_1;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 1.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"sdLine_return_value_inlined_35_1 = sdLine_return_value_inlined_22_1;\n"+
"sdLine_return_value_inlined_28_1 = sdLine_return_value_inlined_35_1;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 1.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"hash12_return_value_inlined_3_2 = sdLine_return_value_inlined_22_1;\n"+
"cro_return_value_1 = hash12_return_value_inlined_3_2;\n"+
"d_blackboard_1 = mix(mix(sdLine_return_value_inlined_21_1, b_noise_3_2, u_noise_3_2.x), mix(sdLine_return_value_inlined_28_1, cro_return_value_1, u_noise_3_2.x), u_noise_3_2.y);\n"+
"p1_chalk_1 += vec2(5.0);\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 0.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"hash12_return_value_inlined_4_2 = sdLine_return_value_inlined_22_1;\n"+
"sdLine_return_value_inlined_21_1 = hash12_return_value_inlined_4_2;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 0.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"hash12_return_value_inlined_5_2 = sdLine_return_value_inlined_22_1;\n"+
"b_noise_3_2 = hash12_return_value_inlined_5_2;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 1.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"hash12_return_value_inlined_6_2 = sdLine_return_value_inlined_22_1;\n"+
"sdLine_return_value_inlined_28_1 = hash12_return_value_inlined_6_2;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 1.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"fbm_return_value_inlined_15_1 = sdLine_return_value_inlined_22_1;\n"+
"cro_return_value_1 = fbm_return_value_inlined_15_1;\n"+
"v2_noise_3_2 = mix(mix(sdLine_return_value_inlined_21_1, b_noise_3_2, u_noise_3_2.x), mix(sdLine_return_value_inlined_28_1, cro_return_value_1, u_noise_3_2.x), u_noise_3_2.y);\n"+
"sdLine_return_value_inlined_18_1 = max(mix(d_blackboard_1, v2_noise_3_2, u_noise_3_2.z), 0.0);\n"+
"blackboard_has_returned_1 = true;\n"+
"fbm_return_value_inlined_13_1 = sdLine_return_value_inlined_18_1;\n"+
"n_fbm3_high_2 = pow(max(fbm_return_value_inlined_13_1, 1e-9), 2.0);\n"+
"fbm_return_value_inlined_9_1 += n_fbm3_high_2 * amp_fbm3_high_2;\n"+
"frq_fbm3_high_2 *= sdLine_return_value_inlined_31_1;\n"+
"amp_fbm3_high_2 *= y_chalk_1 * (pow(max(n_fbm3_high_2, 1e-9), 0.2));\n"+
"}\n"+
"f_fbm_1 = fbm_return_value_inlined_9_1;\n"+
"fbm3_high_has_returned_2 = true;\n"+
"fbm_return_value_inlined_37_1 = f_fbm_1;\n"+
"sdLine_return_value_inlined_33_1 = rock_return_value_inlined_21_2 + fbm_return_value_inlined_37_1 * DISPLACEMENT_2;\n"+
"gp_plane_2 = blackboard_return_value_1;\n"+
"p_plane_2 = vec4(0.0, 1.0, 0.0, 1.0);\n"+
"plane_has_returned_2 = false;\n"+
"plane_return_value_2 = dot(p_plane_2.xyz, gp_plane_2 + p_plane_2.xyz * p_plane_2.w);\n"+
"plane_has_returned_2 = true;\n"+
"ww_blackboard_1 = plane_return_value_2;\n"+
"a_boolUnion_2 = sdLine_return_value_inlined_33_1;\n"+
"b_boolUnion_2 = ww_blackboard_1;\n"+
"boolUnion_has_returned_2 = false;\n"+
"fbm_return_value_inlined_40_1 = min(a_boolUnion_2, b_boolUnion_2);\n"+
"boolUnion_has_returned_2 = true;\n"+
"boolUnion_return_value_inlined_24_2 = fbm_return_value_inlined_40_1;\n"+
"sdLine_return_value_inlined_33_1 = boolUnion_return_value_inlined_24_2;\n"+
"sdLine_return_value_inlined_36_1 = sdLine_return_value_inlined_33_1;\n"+
"map_detailed_has_returned_2 = true;\n"+
"map_detailed_return_value_inlined_27_2 = sdLine_return_value_inlined_36_1;\n"+
"n_getNormal_2.z = map_detailed_return_value_inlined_27_2;\n"+
"blackboard_return_value_1 = chalk_return_value_inlined_42_1;\n"+
"map_detailed_has_returned_2 = false;\n"+
"p_rock_2 = blackboard_return_value_1;\n"+
"grad_has_returned_1 = false;\n"+
"p_sphere_2 = p_rock_2;\n"+
"dy_chalk_1 = 1.0;\n"+
"sphere_has_returned_2 = false;\n"+
"fbm_return_value_inlined_8_1 = length(p_sphere_2) - dy_chalk_1;\n"+
"sphere_has_returned_2 = true;\n"+
"sphere_return_value_inlined_12_2 = fbm_return_value_inlined_8_1;\n"+
"cro_return_value_inlined_5_1 = sphere_return_value_inlined_12_2;\n"+
"for(         i_rock_2 = 0;\n"+
"i_rock_2 < 9; i_rock_2 ++)\n"+
"{\n"+
"m_blackboard_1 = float(i_rock_2);\n"+
"sdLine_return_value_inlined_16_1 = m_blackboard_1;\n"+
"hash11_has_returned_2 = false;\n"+
"hash11_return_value_2 = fract(sin(sdLine_return_value_inlined_16_1 * 727.1) * 435.545);\n"+
"hash11_has_returned_2 = true;\n"+
"hash11_return_value_inlined_13_2 = hash11_return_value_2;\n"+
"cro_return_value_inlined_6_1 = 2.5 + hash11_return_value_inlined_13_2;\n"+
"fbm_return_value_inlined_14_1 = m_blackboard_1;\n"+
"altitude_has_returned_1 = false;\n"+
"col_mainImage_1 = vec3(127.231, 491.7, 718.423) * fbm_return_value_inlined_14_1;\n"+
"hash31_return_value_2 = fract(sin(col_mainImage_1) * 435.543);\n"+
"altitude_has_returned_1 = true;\n"+
"hash31_return_value_inlined_14_2 = hash31_return_value_2;\n"+
"v_rock_2 = normalize(hash31_return_value_inlined_14_2 * 2.0 - 1.0);\n"+
"p_sphere_2 = p_rock_2 + v_rock_2 * cro_return_value_inlined_6_1;\n"+
"dy_chalk_1 = cro_return_value_inlined_6_1 * 0.8;\n"+
"sphere_has_returned_2 = false;\n"+
"fbm_return_value_inlined_8_1 = length(p_sphere_2) - dy_chalk_1;\n"+
"sphere_has_returned_2 = true;\n"+
"sphere_return_value_inlined_15_2 = fbm_return_value_inlined_8_1;\n"+
"a_boolSmoothSub_2 = cro_return_value_inlined_5_1;\n"+
"s_fbm_1 = sphere_return_value_inlined_15_2;\n"+
"fbm_return_value_inlined_39_1 = 0.03;\n"+
"chalk_has_returned_1 = false;\n"+
"a_boolSmoothIntersect_2 = a_boolSmoothSub_2;\n"+
"b_boolSmoothIntersect_2 = - s_fbm_1;\n"+
"fbm_return_value_inlined_12_1 = fbm_return_value_inlined_39_1;\n"+
"boolSmoothIntersect_has_returned_2 = false;\n"+
"h_boolSmoothIntersect_2 = clamp(0.5 + 0.5 * (b_boolSmoothIntersect_2 - a_boolSmoothIntersect_2) / fbm_return_value_inlined_12_1, 0.0, 1.0);\n"+
"boolSmoothIntersect_return_value_2 = mix(a_boolSmoothIntersect_2, b_boolSmoothIntersect_2, h_boolSmoothIntersect_2) + fbm_return_value_inlined_12_1 * h_boolSmoothIntersect_2 * (1.0 - h_boolSmoothIntersect_2);\n"+
"boolSmoothIntersect_has_returned_2 = true;\n"+
"sdLine_return_value_inlined_17_1 = boolSmoothIntersect_return_value_2;\n"+
"sdLine_return_value_1 = sdLine_return_value_inlined_17_1;\n"+
"chalk_has_returned_1 = true;\n"+
"boolSmoothSub_return_value_inlined_16_2 = sdLine_return_value_1;\n"+
"cro_return_value_inlined_5_1 = boolSmoothSub_return_value_inlined_16_2;\n"+
"}\n"+
"rock_return_value_2 = cro_return_value_inlined_5_1;\n"+
"grad_has_returned_1 = true;\n"+
"rock_return_value_inlined_21_2 = rock_return_value_2;\n"+
"p_fbm3_high_2 = blackboard_return_value_1 * 4.0;\n"+
"y_chalk_1 = 0.4;\n"+
"sdLine_return_value_inlined_31_1 = 2.96;\n"+
"fbm3_high_has_returned_2 = false;\n"+
"fbm_return_value_inlined_9_1 = 0.0;\n"+
"amp_fbm3_high_2 = 1.0;\n"+
"frq_fbm3_high_2 = 1.0;\n"+
"for(         i_fbm3_high_2 = 0;\n"+
"i_fbm3_high_2 < 5; i_fbm3_high_2 ++)\n"+
"{\n"+
"p_noise_3_2 = p_fbm3_high_2 * frq_fbm3_high_2;\n"+
"blackboard_has_returned_1 = false;\n"+
"i_noise_3_2 = floor(p_noise_3_2);\n"+
"f_noise_3_2 = fract(p_noise_3_2);\n"+
"u_noise_3_2 = f_noise_3_2 * f_noise_3_2 * (3.0 - 2.0 * f_noise_3_2);\n"+
"p1_chalk_1 = i_noise_3_2.xy + i_noise_3_2.z * vec2(5.0);\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 0.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"hash12_return_value_inlined_0_2 = sdLine_return_value_inlined_22_1;\n"+
"sdLine_return_value_inlined_21_1 = hash12_return_value_inlined_0_2;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 0.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"h_intersect_1 = sdLine_return_value_inlined_22_1;\n"+
"b_noise_3_2 = h_intersect_1;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 1.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"sdLine_return_value_inlined_35_1 = sdLine_return_value_inlined_22_1;\n"+
"sdLine_return_value_inlined_28_1 = sdLine_return_value_inlined_35_1;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 1.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"hash12_return_value_inlined_3_2 = sdLine_return_value_inlined_22_1;\n"+
"cro_return_value_1 = hash12_return_value_inlined_3_2;\n"+
"d_blackboard_1 = mix(mix(sdLine_return_value_inlined_21_1, b_noise_3_2, u_noise_3_2.x), mix(sdLine_return_value_inlined_28_1, cro_return_value_1, u_noise_3_2.x), u_noise_3_2.y);\n"+
"p1_chalk_1 += vec2(5.0);\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 0.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"hash12_return_value_inlined_4_2 = sdLine_return_value_inlined_22_1;\n"+
"sdLine_return_value_inlined_21_1 = hash12_return_value_inlined_4_2;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 0.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"hash12_return_value_inlined_5_2 = sdLine_return_value_inlined_22_1;\n"+
"b_noise_3_2 = hash12_return_value_inlined_5_2;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 1.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"hash12_return_value_inlined_6_2 = sdLine_return_value_inlined_22_1;\n"+
"sdLine_return_value_inlined_28_1 = hash12_return_value_inlined_6_2;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 1.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"fbm_return_value_inlined_15_1 = sdLine_return_value_inlined_22_1;\n"+
"cro_return_value_1 = fbm_return_value_inlined_15_1;\n"+
"v2_noise_3_2 = mix(mix(sdLine_return_value_inlined_21_1, b_noise_3_2, u_noise_3_2.x), mix(sdLine_return_value_inlined_28_1, cro_return_value_1, u_noise_3_2.x), u_noise_3_2.y);\n"+
"sdLine_return_value_inlined_18_1 = max(mix(d_blackboard_1, v2_noise_3_2, u_noise_3_2.z), 0.0);\n"+
"blackboard_has_returned_1 = true;\n"+
"fbm_return_value_inlined_13_1 = sdLine_return_value_inlined_18_1;\n"+
"n_fbm3_high_2 = pow(max(fbm_return_value_inlined_13_1, 1e-9), 2.0);\n"+
"fbm_return_value_inlined_9_1 += n_fbm3_high_2 * amp_fbm3_high_2;\n"+
"frq_fbm3_high_2 *= sdLine_return_value_inlined_31_1;\n"+
"amp_fbm3_high_2 *= y_chalk_1 * (pow(max(n_fbm3_high_2, 1e-9), 0.2));\n"+
"}\n"+
"f_fbm_1 = fbm_return_value_inlined_9_1;\n"+
"fbm3_high_has_returned_2 = true;\n"+
"fbm_return_value_inlined_37_1 = f_fbm_1;\n"+
"sdLine_return_value_inlined_33_1 = rock_return_value_inlined_21_2 + fbm_return_value_inlined_37_1 * DISPLACEMENT_2;\n"+
"gp_plane_2 = blackboard_return_value_1;\n"+
"p_plane_2 = vec4(0.0, 1.0, 0.0, 1.0);\n"+
"plane_has_returned_2 = false;\n"+
"plane_return_value_2 = dot(p_plane_2.xyz, gp_plane_2 + p_plane_2.xyz * p_plane_2.w);\n"+
"plane_has_returned_2 = true;\n"+
"ww_blackboard_1 = plane_return_value_2;\n"+
"a_boolUnion_2 = sdLine_return_value_inlined_33_1;\n"+
"b_boolUnion_2 = ww_blackboard_1;\n"+
"boolUnion_has_returned_2 = false;\n"+
"fbm_return_value_inlined_40_1 = min(a_boolUnion_2, b_boolUnion_2);\n"+
"boolUnion_has_returned_2 = true;\n"+
"boolUnion_return_value_inlined_24_2 = fbm_return_value_inlined_40_1;\n"+
"sdLine_return_value_inlined_33_1 = boolUnion_return_value_inlined_24_2;\n"+
"sdLine_return_value_inlined_36_1 = sdLine_return_value_inlined_33_1;\n"+
"map_detailed_has_returned_2 = true;\n"+
"sdLine_return_value_inlined_34_1 = sdLine_return_value_inlined_36_1;\n"+
"col_chalk_1 = normalize(n_getNormal_2 - sdLine_return_value_inlined_34_1);\n"+
"noise_has_returned_1 = true;\n"+
"getNormal_return_value_inlined_38_2 = col_chalk_1;\n"+
"n_getPixel_2 = getNormal_return_value_inlined_38_2;\n"+
"p_getOcclusion_2 = p_getPixel_2;\n"+
"n_getOcclusion_2 = n_getPixel_2;\n"+
"fbm_has_returned_1 = false;\n"+
"b2_intersect_1 = vec2(0.0);\n"+
"for(         i_getOcclusion_2 = 0;\n"+
"i_getOcclusion_2 < AO_SAMPLES_2; i_getOcclusion_2 ++)\n"+
"{\n"+
"f_getOcclusion_2 = float(i_getOcclusion_2) * INV_AO_SAMPLES_2;\n"+
"hao_getOcclusion_2 = 0.01 + f_getOcclusion_2 * AO_PARAM_2.x;\n"+
"sdLine_return_value_inlined_30_1 = 0.01 + f_getOcclusion_2 * CORNER_PARAM_2.x;\n"+
"p_map_2 = p_getOcclusion_2 + n_getOcclusion_2 * hao_getOcclusion_2;\n"+
"intersect_has_returned_1 = false;\n"+
"p_rock_2 = p_map_2;\n"+
"grad_has_returned_1 = false;\n"+
"p_sphere_2 = p_rock_2;\n"+
"dy_chalk_1 = 1.0;\n"+
"sphere_has_returned_2 = false;\n"+
"fbm_return_value_inlined_8_1 = length(p_sphere_2) - dy_chalk_1;\n"+
"sphere_has_returned_2 = true;\n"+
"sphere_return_value_inlined_12_2 = fbm_return_value_inlined_8_1;\n"+
"cro_return_value_inlined_5_1 = sphere_return_value_inlined_12_2;\n"+
"for(           i_rock_2 = 0;\n"+
"i_rock_2 < 9; i_rock_2 ++)\n"+
"{\n"+
"m_blackboard_1 = float(i_rock_2);\n"+
"sdLine_return_value_inlined_16_1 = m_blackboard_1;\n"+
"hash11_has_returned_2 = false;\n"+
"hash11_return_value_2 = fract(sin(sdLine_return_value_inlined_16_1 * 727.1) * 435.545);\n"+
"hash11_has_returned_2 = true;\n"+
"hash11_return_value_inlined_13_2 = hash11_return_value_2;\n"+
"cro_return_value_inlined_6_1 = 2.5 + hash11_return_value_inlined_13_2;\n"+
"fbm_return_value_inlined_14_1 = m_blackboard_1;\n"+
"altitude_has_returned_1 = false;\n"+
"col_mainImage_1 = vec3(127.231, 491.7, 718.423) * fbm_return_value_inlined_14_1;\n"+
"hash31_return_value_2 = fract(sin(col_mainImage_1) * 435.543);\n"+
"altitude_has_returned_1 = true;\n"+
"hash31_return_value_inlined_14_2 = hash31_return_value_2;\n"+
"v_rock_2 = normalize(hash31_return_value_inlined_14_2 * 2.0 - 1.0);\n"+
"p_sphere_2 = p_rock_2 + v_rock_2 * cro_return_value_inlined_6_1;\n"+
"dy_chalk_1 = cro_return_value_inlined_6_1 * 0.8;\n"+
"sphere_has_returned_2 = false;\n"+
"fbm_return_value_inlined_8_1 = length(p_sphere_2) - dy_chalk_1;\n"+
"sphere_has_returned_2 = true;\n"+
"sphere_return_value_inlined_15_2 = fbm_return_value_inlined_8_1;\n"+
"a_boolSmoothSub_2 = cro_return_value_inlined_5_1;\n"+
"s_fbm_1 = sphere_return_value_inlined_15_2;\n"+
"fbm_return_value_inlined_39_1 = 0.03;\n"+
"chalk_has_returned_1 = false;\n"+
"a_boolSmoothIntersect_2 = a_boolSmoothSub_2;\n"+
"b_boolSmoothIntersect_2 = - s_fbm_1;\n"+
"fbm_return_value_inlined_12_1 = fbm_return_value_inlined_39_1;\n"+
"boolSmoothIntersect_has_returned_2 = false;\n"+
"h_boolSmoothIntersect_2 = clamp(0.5 + 0.5 * (b_boolSmoothIntersect_2 - a_boolSmoothIntersect_2) / fbm_return_value_inlined_12_1, 0.0, 1.0);\n"+
"boolSmoothIntersect_return_value_2 = mix(a_boolSmoothIntersect_2, b_boolSmoothIntersect_2, h_boolSmoothIntersect_2) + fbm_return_value_inlined_12_1 * h_boolSmoothIntersect_2 * (1.0 - h_boolSmoothIntersect_2);\n"+
"boolSmoothIntersect_has_returned_2 = true;\n"+
"sdLine_return_value_inlined_17_1 = boolSmoothIntersect_return_value_2;\n"+
"sdLine_return_value_1 = sdLine_return_value_inlined_17_1;\n"+
"chalk_has_returned_1 = true;\n"+
"boolSmoothSub_return_value_inlined_16_2 = sdLine_return_value_1;\n"+
"cro_return_value_inlined_5_1 = boolSmoothSub_return_value_inlined_16_2;\n"+
"}\n"+
"rock_return_value_2 = cro_return_value_inlined_5_1;\n"+
"grad_has_returned_1 = true;\n"+
"sdLine_return_value_inlined_19_1 = rock_return_value_2;\n"+
"p_fbm3_2 = p_map_2 * 4.0;\n"+
"fbm_return_value_inlined_24_1 = 0.4;\n"+
"f_fbm3_2 = 2.96;\n"+
"fbm3_has_returned_2 = false;\n"+
"p_noise_3_2 = p_fbm3_2;\n"+
"blackboard_has_returned_1 = false;\n"+
"i_noise_3_2 = floor(p_noise_3_2);\n"+
"f_noise_3_2 = fract(p_noise_3_2);\n"+
"u_noise_3_2 = f_noise_3_2 * f_noise_3_2 * (3.0 - 2.0 * f_noise_3_2);\n"+
"p1_chalk_1 = i_noise_3_2.xy + i_noise_3_2.z * vec2(5.0);\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 0.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"hash12_return_value_inlined_0_2 = sdLine_return_value_inlined_22_1;\n"+
"sdLine_return_value_inlined_21_1 = hash12_return_value_inlined_0_2;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 0.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"h_intersect_1 = sdLine_return_value_inlined_22_1;\n"+
"b_noise_3_2 = h_intersect_1;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 1.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"sdLine_return_value_inlined_35_1 = sdLine_return_value_inlined_22_1;\n"+
"sdLine_return_value_inlined_28_1 = sdLine_return_value_inlined_35_1;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 1.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"hash12_return_value_inlined_3_2 = sdLine_return_value_inlined_22_1;\n"+
"cro_return_value_1 = hash12_return_value_inlined_3_2;\n"+
"d_blackboard_1 = mix(mix(sdLine_return_value_inlined_21_1, b_noise_3_2, u_noise_3_2.x), mix(sdLine_return_value_inlined_28_1, cro_return_value_1, u_noise_3_2.x), u_noise_3_2.y);\n"+
"p1_chalk_1 += vec2(5.0);\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 0.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"hash12_return_value_inlined_4_2 = sdLine_return_value_inlined_22_1;\n"+
"sdLine_return_value_inlined_21_1 = hash12_return_value_inlined_4_2;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 0.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"hash12_return_value_inlined_5_2 = sdLine_return_value_inlined_22_1;\n"+
"b_noise_3_2 = hash12_return_value_inlined_5_2;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 1.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"hash12_return_value_inlined_6_2 = sdLine_return_value_inlined_22_1;\n"+
"sdLine_return_value_inlined_28_1 = hash12_return_value_inlined_6_2;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 1.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"fbm_return_value_inlined_15_1 = sdLine_return_value_inlined_22_1;\n"+
"cro_return_value_1 = fbm_return_value_inlined_15_1;\n"+
"v2_noise_3_2 = mix(mix(sdLine_return_value_inlined_21_1, b_noise_3_2, u_noise_3_2.x), mix(sdLine_return_value_inlined_28_1, cro_return_value_1, u_noise_3_2.x), u_noise_3_2.y);\n"+
"sdLine_return_value_inlined_18_1 = max(mix(d_blackboard_1, v2_noise_3_2, u_noise_3_2.z), 0.0);\n"+
"blackboard_has_returned_1 = true;\n"+
"noise_3_return_value_inlined_8_2 = sdLine_return_value_inlined_18_1;\n"+
"fbm3_return_value_2 = noise_3_return_value_inlined_8_2;\n"+
"fbm3_has_returned_2 = true;\n"+
"sdLine_return_value_inlined_10_1 = fbm3_return_value_2;\n"+
"d_map_2 = sdLine_return_value_inlined_19_1 + sdLine_return_value_inlined_10_1 * DISPLACEMENT_2;\n"+
"gp_plane_2 = p_map_2;\n"+
"p_plane_2 = vec4(0.0, 1.0, 0.0, 1.0);\n"+
"plane_has_returned_2 = false;\n"+
"plane_return_value_2 = dot(p_plane_2.xyz, gp_plane_2 + p_plane_2.xyz * p_plane_2.w);\n"+
"plane_has_returned_2 = true;\n"+
"h_sdLine_1 = plane_return_value_2;\n"+
"a_boolUnion_2 = d_map_2;\n"+
"b_boolUnion_2 = h_sdLine_1;\n"+
"boolUnion_has_returned_2 = false;\n"+
"fbm_return_value_inlined_40_1 = min(a_boolUnion_2, b_boolUnion_2);\n"+
"boolUnion_has_returned_2 = true;\n"+
"boolUnion_return_value_inlined_20_2 = fbm_return_value_inlined_40_1;\n"+
"d_map_2 = boolUnion_return_value_inlined_20_2;\n"+
"x_chalk_1 = d_map_2;\n"+
"intersect_has_returned_1 = true;\n"+
"fbm_return_value_inlined_7_1 = x_chalk_1;\n"+
"v_blackboard_1 = fbm_return_value_inlined_7_1 - TRESHOLD_2;\n"+
"p_map_2 = p_getOcclusion_2 - n_getOcclusion_2 * sdLine_return_value_inlined_30_1;\n"+
"intersect_has_returned_1 = false;\n"+
"p_rock_2 = p_map_2;\n"+
"grad_has_returned_1 = false;\n"+
"p_sphere_2 = p_rock_2;\n"+
"dy_chalk_1 = 1.0;\n"+
"sphere_has_returned_2 = false;\n"+
"fbm_return_value_inlined_8_1 = length(p_sphere_2) - dy_chalk_1;\n"+
"sphere_has_returned_2 = true;\n"+
"sphere_return_value_inlined_12_2 = fbm_return_value_inlined_8_1;\n"+
"cro_return_value_inlined_5_1 = sphere_return_value_inlined_12_2;\n"+
"for(           i_rock_2 = 0;\n"+
"i_rock_2 < 9; i_rock_2 ++)\n"+
"{\n"+
"m_blackboard_1 = float(i_rock_2);\n"+
"sdLine_return_value_inlined_16_1 = m_blackboard_1;\n"+
"hash11_has_returned_2 = false;\n"+
"hash11_return_value_2 = fract(sin(sdLine_return_value_inlined_16_1 * 727.1) * 435.545);\n"+
"hash11_has_returned_2 = true;\n"+
"hash11_return_value_inlined_13_2 = hash11_return_value_2;\n"+
"cro_return_value_inlined_6_1 = 2.5 + hash11_return_value_inlined_13_2;\n"+
"fbm_return_value_inlined_14_1 = m_blackboard_1;\n"+
"altitude_has_returned_1 = false;\n"+
"col_mainImage_1 = vec3(127.231, 491.7, 718.423) * fbm_return_value_inlined_14_1;\n"+
"hash31_return_value_2 = fract(sin(col_mainImage_1) * 435.543);\n"+
"altitude_has_returned_1 = true;\n"+
"hash31_return_value_inlined_14_2 = hash31_return_value_2;\n"+
"v_rock_2 = normalize(hash31_return_value_inlined_14_2 * 2.0 - 1.0);\n"+
"p_sphere_2 = p_rock_2 + v_rock_2 * cro_return_value_inlined_6_1;\n"+
"dy_chalk_1 = cro_return_value_inlined_6_1 * 0.8;\n"+
"sphere_has_returned_2 = false;\n"+
"fbm_return_value_inlined_8_1 = length(p_sphere_2) - dy_chalk_1;\n"+
"sphere_has_returned_2 = true;\n"+
"sphere_return_value_inlined_15_2 = fbm_return_value_inlined_8_1;\n"+
"a_boolSmoothSub_2 = cro_return_value_inlined_5_1;\n"+
"s_fbm_1 = sphere_return_value_inlined_15_2;\n"+
"fbm_return_value_inlined_39_1 = 0.03;\n"+
"chalk_has_returned_1 = false;\n"+
"a_boolSmoothIntersect_2 = a_boolSmoothSub_2;\n"+
"b_boolSmoothIntersect_2 = - s_fbm_1;\n"+
"fbm_return_value_inlined_12_1 = fbm_return_value_inlined_39_1;\n"+
"boolSmoothIntersect_has_returned_2 = false;\n"+
"h_boolSmoothIntersect_2 = clamp(0.5 + 0.5 * (b_boolSmoothIntersect_2 - a_boolSmoothIntersect_2) / fbm_return_value_inlined_12_1, 0.0, 1.0);\n"+
"boolSmoothIntersect_return_value_2 = mix(a_boolSmoothIntersect_2, b_boolSmoothIntersect_2, h_boolSmoothIntersect_2) + fbm_return_value_inlined_12_1 * h_boolSmoothIntersect_2 * (1.0 - h_boolSmoothIntersect_2);\n"+
"boolSmoothIntersect_has_returned_2 = true;\n"+
"sdLine_return_value_inlined_17_1 = boolSmoothIntersect_return_value_2;\n"+
"sdLine_return_value_1 = sdLine_return_value_inlined_17_1;\n"+
"chalk_has_returned_1 = true;\n"+
"boolSmoothSub_return_value_inlined_16_2 = sdLine_return_value_1;\n"+
"cro_return_value_inlined_5_1 = boolSmoothSub_return_value_inlined_16_2;\n"+
"}\n"+
"rock_return_value_2 = cro_return_value_inlined_5_1;\n"+
"grad_has_returned_1 = true;\n"+
"sdLine_return_value_inlined_19_1 = rock_return_value_2;\n"+
"p_fbm3_2 = p_map_2 * 4.0;\n"+
"fbm_return_value_inlined_24_1 = 0.4;\n"+
"f_fbm3_2 = 2.96;\n"+
"fbm3_has_returned_2 = false;\n"+
"p_noise_3_2 = p_fbm3_2;\n"+
"blackboard_has_returned_1 = false;\n"+
"i_noise_3_2 = floor(p_noise_3_2);\n"+
"f_noise_3_2 = fract(p_noise_3_2);\n"+
"u_noise_3_2 = f_noise_3_2 * f_noise_3_2 * (3.0 - 2.0 * f_noise_3_2);\n"+
"p1_chalk_1 = i_noise_3_2.xy + i_noise_3_2.z * vec2(5.0);\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 0.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"hash12_return_value_inlined_0_2 = sdLine_return_value_inlined_22_1;\n"+
"sdLine_return_value_inlined_21_1 = hash12_return_value_inlined_0_2;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 0.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"h_intersect_1 = sdLine_return_value_inlined_22_1;\n"+
"b_noise_3_2 = h_intersect_1;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 1.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"sdLine_return_value_inlined_35_1 = sdLine_return_value_inlined_22_1;\n"+
"sdLine_return_value_inlined_28_1 = sdLine_return_value_inlined_35_1;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 1.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"hash12_return_value_inlined_3_2 = sdLine_return_value_inlined_22_1;\n"+
"cro_return_value_1 = hash12_return_value_inlined_3_2;\n"+
"d_blackboard_1 = mix(mix(sdLine_return_value_inlined_21_1, b_noise_3_2, u_noise_3_2.x), mix(sdLine_return_value_inlined_28_1, cro_return_value_1, u_noise_3_2.x), u_noise_3_2.y);\n"+
"p1_chalk_1 += vec2(5.0);\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 0.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"hash12_return_value_inlined_4_2 = sdLine_return_value_inlined_22_1;\n"+
"sdLine_return_value_inlined_21_1 = hash12_return_value_inlined_4_2;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 0.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"hash12_return_value_inlined_5_2 = sdLine_return_value_inlined_22_1;\n"+
"b_noise_3_2 = hash12_return_value_inlined_5_2;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 1.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"hash12_return_value_inlined_6_2 = sdLine_return_value_inlined_22_1;\n"+
"sdLine_return_value_inlined_28_1 = hash12_return_value_inlined_6_2;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 1.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"fbm_return_value_inlined_15_1 = sdLine_return_value_inlined_22_1;\n"+
"cro_return_value_1 = fbm_return_value_inlined_15_1;\n"+
"v2_noise_3_2 = mix(mix(sdLine_return_value_inlined_21_1, b_noise_3_2, u_noise_3_2.x), mix(sdLine_return_value_inlined_28_1, cro_return_value_1, u_noise_3_2.x), u_noise_3_2.y);\n"+
"sdLine_return_value_inlined_18_1 = max(mix(d_blackboard_1, v2_noise_3_2, u_noise_3_2.z), 0.0);\n"+
"blackboard_has_returned_1 = true;\n"+
"noise_3_return_value_inlined_8_2 = sdLine_return_value_inlined_18_1;\n"+
"fbm3_return_value_2 = noise_3_return_value_inlined_8_2;\n"+
"fbm3_has_returned_2 = true;\n"+
"sdLine_return_value_inlined_10_1 = fbm3_return_value_2;\n"+
"d_map_2 = sdLine_return_value_inlined_19_1 + sdLine_return_value_inlined_10_1 * DISPLACEMENT_2;\n"+
"gp_plane_2 = p_map_2;\n"+
"p_plane_2 = vec4(0.0, 1.0, 0.0, 1.0);\n"+
"plane_has_returned_2 = false;\n"+
"plane_return_value_2 = dot(p_plane_2.xyz, gp_plane_2 + p_plane_2.xyz * p_plane_2.w);\n"+
"plane_has_returned_2 = true;\n"+
"h_sdLine_1 = plane_return_value_2;\n"+
"a_boolUnion_2 = d_map_2;\n"+
"b_boolUnion_2 = h_sdLine_1;\n"+
"boolUnion_has_returned_2 = false;\n"+
"fbm_return_value_inlined_40_1 = min(a_boolUnion_2, b_boolUnion_2);\n"+
"boolUnion_has_returned_2 = true;\n"+
"boolUnion_return_value_inlined_20_2 = fbm_return_value_inlined_40_1;\n"+
"d_map_2 = boolUnion_return_value_inlined_20_2;\n"+
"x_chalk_1 = d_map_2;\n"+
"intersect_has_returned_1 = true;\n"+
"map_return_value_inlined_30_2 = x_chalk_1;\n"+
"dc_getOcclusion_2 = map_return_value_inlined_30_2 - TRESHOLD_2;\n"+
"b2_intersect_1.x += clamp(hao_getOcclusion_2 - v_blackboard_1, 0.0, 1.0) * (1.0 - f_getOcclusion_2);\n"+
"b2_intersect_1.y += clamp(sdLine_return_value_inlined_30_1 + dc_getOcclusion_2, 0.0, 1.0) * (1.0 - f_getOcclusion_2);\n"+
"}\n"+
"b2_intersect_1.x = clamp(1.0 - b2_intersect_1.x * INV_AO_SAMPLES_2 * AO_PARAM_2.y, 0.0, 1.0);\n"+
"b2_intersect_1.y = clamp(b2_intersect_1.y * INV_AO_SAMPLES_2 * CORNER_PARAM_2.y, 0.0, 1.0);\n"+
"grad_return_value_inlined_3_1 = b2_intersect_1;\n"+
"fbm_has_returned_1 = true;\n"+
"fragCoord_blackboard_1 = grad_return_value_inlined_3_1;\n"+
"a_cro_1 = fragCoord_blackboard_1;\n"+
"light_getPixel_2 = normalize(vec3(0.0, 1.0, 0.0));\n"+
"color_getPixel_2 = vec3(1.0);\n"+
"if(c_altitude_1.x < 3.5 && p_getPixel_2.y > - 0.89)\n"+
"{\n"+
"p_getStoneColor_2 = p_getPixel_2;\n"+
"c_getStoneColor_2 = a_cro_1.y;\n"+
"l_getStoneColor_2 = light_getPixel_2;\n"+
"n_getStoneColor_2 = n_getPixel_2;\n"+
"e_getStoneColor_2 = dir_getPixel_2;\n"+
"getStoneColor_has_returned_2 = false;\n"+
"p_noise_3_2 = vec3(p_getStoneColor_2.x * 20.0, 0.0, p_getStoneColor_2.z * 20.0);\n"+
"blackboard_has_returned_1 = false;\n"+
"i_noise_3_2 = floor(p_noise_3_2);\n"+
"f_noise_3_2 = fract(p_noise_3_2);\n"+
"u_noise_3_2 = f_noise_3_2 * f_noise_3_2 * (3.0 - 2.0 * f_noise_3_2);\n"+
"p1_chalk_1 = i_noise_3_2.xy + i_noise_3_2.z * vec2(5.0);\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 0.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"hash12_return_value_inlined_0_2 = sdLine_return_value_inlined_22_1;\n"+
"sdLine_return_value_inlined_21_1 = hash12_return_value_inlined_0_2;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 0.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"h_intersect_1 = sdLine_return_value_inlined_22_1;\n"+
"b_noise_3_2 = h_intersect_1;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 1.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"sdLine_return_value_inlined_35_1 = sdLine_return_value_inlined_22_1;\n"+
"sdLine_return_value_inlined_28_1 = sdLine_return_value_inlined_35_1;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 1.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"hash12_return_value_inlined_3_2 = sdLine_return_value_inlined_22_1;\n"+
"cro_return_value_1 = hash12_return_value_inlined_3_2;\n"+
"d_blackboard_1 = mix(mix(sdLine_return_value_inlined_21_1, b_noise_3_2, u_noise_3_2.x), mix(sdLine_return_value_inlined_28_1, cro_return_value_1, u_noise_3_2.x), u_noise_3_2.y);\n"+
"p1_chalk_1 += vec2(5.0);\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 0.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"hash12_return_value_inlined_4_2 = sdLine_return_value_inlined_22_1;\n"+
"sdLine_return_value_inlined_21_1 = hash12_return_value_inlined_4_2;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 0.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"hash12_return_value_inlined_5_2 = sdLine_return_value_inlined_22_1;\n"+
"b_noise_3_2 = hash12_return_value_inlined_5_2;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 1.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"hash12_return_value_inlined_6_2 = sdLine_return_value_inlined_22_1;\n"+
"sdLine_return_value_inlined_28_1 = hash12_return_value_inlined_6_2;\n"+
"grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 1.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));\n"+
"sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);\n"+
"sdLine_has_returned_1 = true;\n"+
"fbm_return_value_inlined_15_1 = sdLine_return_value_inlined_22_1;\n"+
"cro_return_value_1 = fbm_return_value_inlined_15_1;\n"+
"v2_noise_3_2 = mix(mix(sdLine_return_value_inlined_21_1, b_noise_3_2, u_noise_3_2.x), mix(sdLine_return_value_inlined_28_1, cro_return_value_1, u_noise_3_2.x), u_noise_3_2.y);\n"+
"sdLine_return_value_inlined_18_1 = max(mix(d_blackboard_1, v2_noise_3_2, u_noise_3_2.z), 0.0);\n"+
"blackboard_has_returned_1 = true;\n"+
"sdLine_return_value_inlined_23_1 = sdLine_return_value_inlined_18_1;\n"+
"c_getStoneColor_2 = min(c_getStoneColor_2 + pow(max(sdLine_return_value_inlined_23_1, 1e-9), 70.0) * 8.0, 1.0);\n"+
"ic_getStoneColor_2 = pow(max(1.0 - c_getStoneColor_2, 1e-9), 0.5);\n"+
"base_getStoneColor_2 = vec3(0.42, 0.3, 0.2) * 0.35;\n"+
"col_blackboard_1 = vec3(0.51, 0.41, 0.32) * 0.9;\n"+
"color_getStoneColor_2 = mix(base_getStoneColor_2, col_blackboard_1, c_getStoneColor_2);\n"+
"f_getStoneColor_2 = pow(max(1.0 - max(dot(n_getStoneColor_2, - e_getStoneColor_2), 0.0), 1e-9), 5.0) * 0.75 * ic_getStoneColor_2;\n"+
"n_diffuse_2 = n_getStoneColor_2;\n"+
"l_diffuse_2 = l_getStoneColor_2;\n"+
"p_diffuse_2 = 0.5;\n"+
"diffuse_has_returned_2 = false;\n"+
"diffuse_return_value_2 = pow(max(max(dot(n_diffuse_2, l_diffuse_2), 0.0), 1e-9), p_diffuse_2);\n"+
"diffuse_has_returned_2 = true;\n"+
"fa_flattened_block_1_blackboard_1 = diffuse_return_value_2;\n"+
"color_getStoneColor_2 += vec3(fa_flattened_block_1_blackboard_1 * WHITE_2);\n"+
"blackboard_return_value_inlined_41_1 = n_getStoneColor_2;\n"+
"l_specular_2 = l_getStoneColor_2;\n"+
"e_specular_2 = e_getStoneColor_2;\n"+
"sdLine_return_value_inlined_32_1 = 8.0;\n"+
"specular_has_returned_2 = false;\n"+
"fbm_return_value_1 = (sdLine_return_value_inlined_32_1 + 8.0) / (3.1415 * 8.0);\n"+
"specular_return_value_2 = pow(max(max(dot(reflect(e_specular_2, blackboard_return_value_inlined_41_1), l_specular_2), 0.0), 1e-9), sdLine_return_value_inlined_32_1) * fbm_return_value_1;\n"+
"specular_has_returned_2 = true;\n"+
"fbm_return_value_inlined_11_1 = specular_return_value_2;\n"+
"color_getStoneColor_2 += vec3(fbm_return_value_inlined_11_1 * WHITE_2 * 1.5 * ic_getStoneColor_2);\n"+
"n_getStoneColor_2 = normalize(n_getStoneColor_2 - normalize(p_getStoneColor_2) * 0.4);\n"+
"blackboard_return_value_inlined_41_1 = n_getStoneColor_2;\n"+
"l_specular_2 = l_getStoneColor_2;\n"+
"e_specular_2 = e_getStoneColor_2;\n"+
"sdLine_return_value_inlined_32_1 = 80.0;\n"+
"specular_has_returned_2 = false;\n"+
"fbm_return_value_1 = (sdLine_return_value_inlined_32_1 + 8.0) / (3.1415 * 8.0);\n"+
"specular_return_value_2 = pow(max(max(dot(reflect(e_specular_2, blackboard_return_value_inlined_41_1), l_specular_2), 0.0), 1e-9), sdLine_return_value_inlined_32_1) * fbm_return_value_1;\n"+
"specular_has_returned_2 = true;\n"+
"noise_return_value_inlined_4_1 = specular_return_value_2;\n"+
"color_getStoneColor_2 += vec3(noise_return_value_inlined_4_1 * WHITE_2 * 1.5 * ic_getStoneColor_2);\n"+
"color_getStoneColor_2 = mix(color_getStoneColor_2, vec3(1.0), f_getStoneColor_2);\n"+
"color_getStoneColor_2 *= sqrt(abs(p_getStoneColor_2.y * 0.5 + 0.5)) * 0.4 + 0.6;\n"+
"color_getStoneColor_2 *= (n_getStoneColor_2.y * 0.5 + 0.5) * 0.4 + 0.6;\n"+
"getStoneColor_return_value_2 = color_getStoneColor_2;\n"+
"getStoneColor_has_returned_2 = true;\n"+
"getStoneColor_return_value_inlined_40_2 = getStoneColor_return_value_2;\n"+
"color_getPixel_2 = getStoneColor_return_value_inlined_40_2;\n"+
"}\n"+
"color_getPixel_2 *= a_cro_1.x;\n"+
"getPixel_return_value_2 = color_getPixel_2;\n"+
"getPixel_has_returned_2 = true;\n"+
"getPixel_return_value_inlined_41_2 = getPixel_return_value_2;\n"+
"color_mainImage_2 += getPixel_return_value_inlined_41_2;\n"+
"}\n"+
"}\n"+
"color_mainImage_2 /= 9.0;\n"+
"color_mainImage_2 = sqrt(color_mainImage_2);\n"+
"c_saturation_2 = color_mainImage_2;\n"+
"fbm_return_value_inlined_20_1 = 1.7;\n"+
"saturation_has_returned_2 = false;\n"+
"saturation_return_value_2 = mix(vec3(dot(c_saturation_2, vec3(0.2126, 0.7152, 0.0722))), c_saturation_2, fbm_return_value_inlined_20_1);\n"+
"saturation_has_returned_2 = true;\n"+
"saturation_return_value_inlined_42_2 = saturation_return_value_2;\n"+
"color_mainImage_2 = saturation_return_value_inlined_42_2;\n"+
"f_noise_1 = gl_FragCoord.xy / iResolution.xy * 2.0 - 1.0;\n"+
"vgn_mainImage_2 = smoothstep(1.2, 0.7, abs(f_noise_1.y)) * smoothstep(1.1, 0.8, abs(f_noise_1.x));\n"+
"color_mainImage_2 *= 1.0 - (1.0 - vgn_mainImage_2) * 0.15;\n"+
"fragColor_2 = vec4(color_mainImage_2, 1.0);\n"+
"fragColor_2.w = 1.0;\n"+
"live_tu_has_executed = true;\n"+
"}\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_0_1 = grad_return_value_1;\n"+
"z_grad_1 = i_noise_1 + ivec2(1, 0);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_1_1 = grad_return_value_1;\n"+
"z_grad_1 = i_noise_1 + ivec2(0, 1);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_2_1 = grad_return_value_1;\n"+
"z_grad_1 = i_noise_1 + ivec2(1, 1);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_3_1 = grad_return_value_1;\n"+
"noise_return_value_1 = mix(mix(dot(grad_return_value_inlined_0_1, f_noise_1 - vec2(0.0, 0.0)), dot(grad_return_value_inlined_1_1, f_noise_1 - vec2(1.0, 0.0)), u_noise_1.x), mix(dot(grad_return_value_inlined_2_1, f_noise_1 - vec2(0.0, 1.0)), dot(grad_return_value_inlined_3_1, f_noise_1 - vec2(1.0, 1.0)), u_noise_1.x), u_noise_1.y);\n"+
"noise_has_returned_1 = true;\n"+
"noise_return_value_inlined_4_1 = noise_return_value_1;\n"+
"f_fbm_1 += s_fbm_1 * noise_return_value_inlined_4_1;\n"+
"p_fbm_1 = m_fbm_1 * p_fbm_1;\n"+
"s_fbm_1 = 0.5 * s_fbm_1;\n"+
"}\n"+
"fbm_return_value_1 = f_fbm_1;\n"+
"fbm_has_returned_1 = true;\n"+
"fbm_return_value_inlined_14_1 = fbm_return_value_1;\n"+
"gf_chalk_1 *= 0.9 + 0.2 * smoothstep(- 0.2, 0.2, fbm_return_value_inlined_14_1);\n"+
"d_chalk_1 = 0.0;\n"+
"if(abs(p_chalk_1.x) > 0.1)\n"+
"{\n"+
"x_chalk_1 = p_chalk_1.x;\n"+
"y_chalk_1 = 1.0 / x_chalk_1;\n"+
"dy_chalk_1 = - 1.0 / (x_chalk_1 * x_chalk_1);\n"+
"d_chalk_1 = abs(p_chalk_1.y - y_chalk_1) / sqrt(1.0 + dy_chalk_1 * dy_chalk_1);\n"+
"p_fbm_1 = p_chalk_1 * 2.5;\n"+
"fbm_has_returned_1 = false;\n"+
"f_fbm_1 = 0.0;\n"+
"s_fbm_1 = 0.5;\n"+
"for(   i_fbm_1 = 0;\n"+
"i_fbm_1 < 6; i_fbm_1 ++)\n"+
"{\n"+
"p_noise_1 = p_fbm_1;\n"+
"noise_has_returned_1 = false;\n"+
"i_noise_1 = ivec2(floor(p_noise_1));\n"+
"f_noise_1 = fract(p_noise_1);\n"+
"u_noise_1 = f_noise_1 * f_noise_1 * (3.0 - 2.0 * f_noise_1);\n"+
"z_grad_1 = i_noise_1 + ivec2(0, 0);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_0_1 = grad_return_value_1;\n"+
"z_grad_1 = i_noise_1 + ivec2(1, 0);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_1_1 = grad_return_value_1;\n"+
"z_grad_1 = i_noise_1 + ivec2(0, 1);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_2_1 = grad_return_value_1;\n"+
"z_grad_1 = i_noise_1 + ivec2(1, 1);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_3_1 = grad_return_value_1;\n"+
"noise_return_value_1 = mix(mix(dot(grad_return_value_inlined_0_1, f_noise_1 - vec2(0.0, 0.0)), dot(grad_return_value_inlined_1_1, f_noise_1 - vec2(1.0, 0.0)), u_noise_1.x), mix(dot(grad_return_value_inlined_2_1, f_noise_1 - vec2(0.0, 1.0)), dot(grad_return_value_inlined_3_1, f_noise_1 - vec2(1.0, 1.0)), u_noise_1.x), u_noise_1.y);\n"+
"noise_has_returned_1 = true;\n"+
"noise_return_value_inlined_4_1 = noise_return_value_1;\n"+
"f_fbm_1 += s_fbm_1 * noise_return_value_inlined_4_1;\n"+
"p_fbm_1 = m_fbm_1 * p_fbm_1;\n"+
"s_fbm_1 = 0.5 * s_fbm_1;\n"+
"}\n"+
"fbm_return_value_1 = f_fbm_1;\n"+
"fbm_has_returned_1 = true;\n"+
"fbm_return_value_inlined_15_1 = fbm_return_value_1;\n"+
"d_chalk_1 += 0.03 * fbm_return_value_inlined_15_1;\n"+
"col_chalk_1 = mix(col_chalk_1, 1.2 * 1.3 * vec3(160, 140, 80) / 255.0, gf_chalk_1 * (1.0 - smoothstep(0.01, 0.03, d_chalk_1)));\n"+
"}\n"+
"p_sdLine_1 = p_chalk_1;\n"+
"a_sdLine_1 = vec2(0.0, - 10.0);\n"+
"b_sdLine_1 = vec2(0.0, 3.4);\n"+
"sdLine_has_returned_1 = false;\n"+
"pa_sdLine_1 = p_sdLine_1 - a_sdLine_1;\n"+
"ba_sdLine_1 = b_sdLine_1 - a_sdLine_1;\n"+
"h_sdLine_1 = clamp(dot(pa_sdLine_1, ba_sdLine_1) / dot(ba_sdLine_1, ba_sdLine_1), 0.0, 1.0);\n"+
"sdLine_return_value_1 = length(pa_sdLine_1 - h_sdLine_1 * ba_sdLine_1);\n"+
"sdLine_has_returned_1 = true;\n"+
"sdLine_return_value_inlined_16_1 = sdLine_return_value_1;\n"+
"d_chalk_1 = sdLine_return_value_inlined_16_1;\n"+
"p_sdLine_1 = p_chalk_1;\n"+
"a_sdLine_1 = vec2(- 10.0, 0.0);\n"+
"b_sdLine_1 = vec2(5.2, 0.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"pa_sdLine_1 = p_sdLine_1 - a_sdLine_1;\n"+
"ba_sdLine_1 = b_sdLine_1 - a_sdLine_1;\n"+
"h_sdLine_1 = clamp(dot(pa_sdLine_1, ba_sdLine_1) / dot(ba_sdLine_1, ba_sdLine_1), 0.0, 1.0);\n"+
"sdLine_return_value_1 = length(pa_sdLine_1 - h_sdLine_1 * ba_sdLine_1);\n"+
"sdLine_has_returned_1 = true;\n"+
"sdLine_return_value_inlined_17_1 = sdLine_return_value_1;\n"+
"d_chalk_1 = min(d_chalk_1, sdLine_return_value_inlined_17_1);\n"+
"p_sdLine_1 = vec2(abs(p_chalk_1.x), p_chalk_1.y);\n"+
"a_sdLine_1 = vec2(0.07, 3.2);\n"+
"b_sdLine_1 = vec2(0.0, 3.4);\n"+
"sdLine_has_returned_1 = false;\n"+
"pa_sdLine_1 = p_sdLine_1 - a_sdLine_1;\n"+
"ba_sdLine_1 = b_sdLine_1 - a_sdLine_1;\n"+
"h_sdLine_1 = clamp(dot(pa_sdLine_1, ba_sdLine_1) / dot(ba_sdLine_1, ba_sdLine_1), 0.0, 1.0);\n"+
"sdLine_return_value_1 = length(pa_sdLine_1 - h_sdLine_1 * ba_sdLine_1);\n"+
"sdLine_has_returned_1 = true;\n"+
"sdLine_return_value_inlined_18_1 = sdLine_return_value_1;\n"+
"d_chalk_1 = min(d_chalk_1, sdLine_return_value_inlined_18_1);\n"+
"p_sdLine_1 = vec2(p_chalk_1.x, abs(p_chalk_1.y));\n"+
"a_sdLine_1 = vec2(5.0, 0.07);\n"+
"b_sdLine_1 = vec2(5.2, 0.0);\n"+
"sdLine_has_returned_1 = false;\n"+
"pa_sdLine_1 = p_sdLine_1 - a_sdLine_1;\n"+
"ba_sdLine_1 = b_sdLine_1 - a_sdLine_1;\n"+
"h_sdLine_1 = clamp(dot(pa_sdLine_1, ba_sdLine_1) / dot(ba_sdLine_1, ba_sdLine_1), 0.0, 1.0);\n"+
"sdLine_return_value_1 = length(pa_sdLine_1 - h_sdLine_1 * ba_sdLine_1);\n"+
"sdLine_has_returned_1 = true;\n"+
"sdLine_return_value_inlined_19_1 = sdLine_return_value_1;\n"+
"d_chalk_1 = min(d_chalk_1, sdLine_return_value_inlined_19_1);\n"+
"p_fbm_1 = p_chalk_1 * 2.5;\n"+
"fbm_has_returned_1 = false;\n"+
"f_fbm_1 = 0.0;\n"+
"s_fbm_1 = 0.5;\n"+
"for( i_fbm_1 = 0;\n"+
"i_fbm_1 < 6; i_fbm_1 ++)\n"+
"{\n"+
"p_noise_1 = p_fbm_1;\n"+
"noise_has_returned_1 = false;\n"+
"i_noise_1 = ivec2(floor(p_noise_1));\n"+
"f_noise_1 = fract(p_noise_1);\n"+
"u_noise_1 = f_noise_1 * f_noise_1 * (3.0 - 2.0 * f_noise_1);\n"+
"z_grad_1 = i_noise_1 + ivec2(0, 0);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_0_1 = grad_return_value_1;\n"+
"z_grad_1 = i_noise_1 + ivec2(1, 0);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_1_1 = grad_return_value_1;\n"+
"z_grad_1 = i_noise_1 + ivec2(0, 1);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_2_1 = grad_return_value_1;\n"+
"z_grad_1 = i_noise_1 + ivec2(1, 1);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_3_1 = grad_return_value_1;\n"+
"noise_return_value_1 = mix(mix(dot(grad_return_value_inlined_0_1, f_noise_1 - vec2(0.0, 0.0)), dot(grad_return_value_inlined_1_1, f_noise_1 - vec2(1.0, 0.0)), u_noise_1.x), mix(dot(grad_return_value_inlined_2_1, f_noise_1 - vec2(0.0, 1.0)), dot(grad_return_value_inlined_3_1, f_noise_1 - vec2(1.0, 1.0)), u_noise_1.x), u_noise_1.y);\n"+
"noise_has_returned_1 = true;\n"+
"noise_return_value_inlined_4_1 = noise_return_value_1;\n"+
"f_fbm_1 += s_fbm_1 * noise_return_value_inlined_4_1;\n"+
"p_fbm_1 = m_fbm_1 * p_fbm_1;\n"+
"s_fbm_1 = 0.5 * s_fbm_1;\n"+
"}\n"+
"fbm_return_value_1 = f_fbm_1;\n"+
"fbm_has_returned_1 = true;\n"+
"fbm_return_value_inlined_20_1 = fbm_return_value_1;\n"+
"d_chalk_1 += 0.02 * fbm_return_value_inlined_20_1;\n"+
"col_chalk_1 = mix(col_chalk_1, 1.2 * 1.1 * vec3(120, 90, 64) / 255.0, gf_chalk_1 * (1.0 - smoothstep(0.01, 0.03, d_chalk_1)));\n"+
"p_sdLine_1 = p_chalk_1;\n"+
"a_sdLine_1 = p1_chalk_1;\n"+
"b_sdLine_1 = p2_chalk_1;\n"+
"sdLine_has_returned_1 = false;\n"+
"pa_sdLine_1 = p_sdLine_1 - a_sdLine_1;\n"+
"ba_sdLine_1 = b_sdLine_1 - a_sdLine_1;\n"+
"h_sdLine_1 = clamp(dot(pa_sdLine_1, ba_sdLine_1) / dot(ba_sdLine_1, ba_sdLine_1), 0.0, 1.0);\n"+
"sdLine_return_value_1 = length(pa_sdLine_1 - h_sdLine_1 * ba_sdLine_1);\n"+
"sdLine_has_returned_1 = true;\n"+
"sdLine_return_value_inlined_21_1 = sdLine_return_value_1;\n"+
"d_chalk_1 = sdLine_return_value_inlined_21_1;\n"+
"p_sdLine_1 = p_chalk_1;\n"+
"a_sdLine_1 = p2_chalk_1;\n"+
"b_sdLine_1 = p3_chalk_1;\n"+
"sdLine_has_returned_1 = false;\n"+
"pa_sdLine_1 = p_sdLine_1 - a_sdLine_1;\n"+
"ba_sdLine_1 = b_sdLine_1 - a_sdLine_1;\n"+
"h_sdLine_1 = clamp(dot(pa_sdLine_1, ba_sdLine_1) / dot(ba_sdLine_1, ba_sdLine_1), 0.0, 1.0);\n"+
"sdLine_return_value_1 = length(pa_sdLine_1 - h_sdLine_1 * ba_sdLine_1);\n"+
"sdLine_has_returned_1 = true;\n"+
"sdLine_return_value_inlined_22_1 = sdLine_return_value_1;\n"+
"d_chalk_1 = min(d_chalk_1, sdLine_return_value_inlined_22_1);\n"+
"p_sdLine_1 = p_chalk_1;\n"+
"a_sdLine_1 = p3_chalk_1;\n"+
"b_sdLine_1 = p1_chalk_1;\n"+
"sdLine_has_returned_1 = false;\n"+
"pa_sdLine_1 = p_sdLine_1 - a_sdLine_1;\n"+
"ba_sdLine_1 = b_sdLine_1 - a_sdLine_1;\n"+
"h_sdLine_1 = clamp(dot(pa_sdLine_1, ba_sdLine_1) / dot(ba_sdLine_1, ba_sdLine_1), 0.0, 1.0);\n"+
"sdLine_return_value_1 = length(pa_sdLine_1 - h_sdLine_1 * ba_sdLine_1);\n"+
"sdLine_has_returned_1 = true;\n"+
"sdLine_return_value_inlined_23_1 = sdLine_return_value_1;\n"+
"d_chalk_1 = min(d_chalk_1, sdLine_return_value_inlined_23_1);\n"+
"p_fbm_1 = p_chalk_1 * 2.5;\n"+
"fbm_has_returned_1 = false;\n"+
"f_fbm_1 = 0.0;\n"+
"s_fbm_1 = 0.5;\n"+
"for( i_fbm_1 = 0;\n"+
"i_fbm_1 < 6; i_fbm_1 ++)\n"+
"{\n"+
"p_noise_1 = p_fbm_1;\n"+
"noise_has_returned_1 = false;\n"+
"i_noise_1 = ivec2(floor(p_noise_1));\n"+
"f_noise_1 = fract(p_noise_1);\n"+
"u_noise_1 = f_noise_1 * f_noise_1 * (3.0 - 2.0 * f_noise_1);\n"+
"z_grad_1 = i_noise_1 + ivec2(0, 0);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_0_1 = grad_return_value_1;\n"+
"z_grad_1 = i_noise_1 + ivec2(1, 0);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_1_1 = grad_return_value_1;\n"+
"z_grad_1 = i_noise_1 + ivec2(0, 1);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_2_1 = grad_return_value_1;\n"+
"z_grad_1 = i_noise_1 + ivec2(1, 1);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_3_1 = grad_return_value_1;\n"+
"noise_return_value_1 = mix(mix(dot(grad_return_value_inlined_0_1, f_noise_1 - vec2(0.0, 0.0)), dot(grad_return_value_inlined_1_1, f_noise_1 - vec2(1.0, 0.0)), u_noise_1.x), mix(dot(grad_return_value_inlined_2_1, f_noise_1 - vec2(0.0, 1.0)), dot(grad_return_value_inlined_3_1, f_noise_1 - vec2(1.0, 1.0)), u_noise_1.x), u_noise_1.y);\n"+
"noise_has_returned_1 = true;\n"+
"noise_return_value_inlined_4_1 = noise_return_value_1;\n"+
"f_fbm_1 += s_fbm_1 * noise_return_value_inlined_4_1;\n"+
"p_fbm_1 = m_fbm_1 * p_fbm_1;\n"+
"s_fbm_1 = 0.5 * s_fbm_1;\n"+
"}\n"+
"fbm_return_value_1 = f_fbm_1;\n"+
"fbm_has_returned_1 = true;\n"+
"fbm_return_value_inlined_24_1 = fbm_return_value_1;\n"+
"d_chalk_1 += 0.03 * fbm_return_value_inlined_24_1;\n"+
"col_chalk_1 = mix(col_chalk_1, 1.2 * 1.4 * vec3(110, 150, 65) / 255.0, gf_chalk_1 * (1.0 - smoothstep(0.01, 0.03, d_chalk_1)));\n"+
"c_altitude_1 = p1_chalk_1;\n"+
"a_altitude_1 = p2_chalk_1;\n"+
"b_altitude_1 = p3_chalk_1;\n"+
"altitude_has_returned_1 = false;\n"+
"w_altitude_1 = b_altitude_1 - a_altitude_1;\n"+
"altitude_return_value_1 = a_altitude_1 + w_altitude_1 * dot(c_altitude_1 - a_altitude_1, w_altitude_1) / dot(w_altitude_1, w_altitude_1);\n"+
"altitude_has_returned_1 = true;\n"+
"altitude_return_value_inlined_25_1 = altitude_return_value_1;\n"+
"q1_chalk_1 = altitude_return_value_inlined_25_1;\n"+
"c_altitude_1 = p2_chalk_1;\n"+
"a_altitude_1 = p3_chalk_1;\n"+
"b_altitude_1 = p1_chalk_1;\n"+
"altitude_has_returned_1 = false;\n"+
"w_altitude_1 = b_altitude_1 - a_altitude_1;\n"+
"altitude_return_value_1 = a_altitude_1 + w_altitude_1 * dot(c_altitude_1 - a_altitude_1, w_altitude_1) / dot(w_altitude_1, w_altitude_1);\n"+
"altitude_has_returned_1 = true;\n"+
"altitude_return_value_inlined_26_1 = altitude_return_value_1;\n"+
"q2_chalk_1 = altitude_return_value_inlined_26_1;\n"+
"c_altitude_1 = p3_chalk_1;\n"+
"a_altitude_1 = p1_chalk_1;\n"+
"b_altitude_1 = p2_chalk_1;\n"+
"altitude_has_returned_1 = false;\n"+
"w_altitude_1 = b_altitude_1 - a_altitude_1;\n"+
"altitude_return_value_1 = a_altitude_1 + w_altitude_1 * dot(c_altitude_1 - a_altitude_1, w_altitude_1) / dot(w_altitude_1, w_altitude_1);\n"+
"altitude_has_returned_1 = true;\n"+
"altitude_return_value_inlined_27_1 = altitude_return_value_1;\n"+
"q3_chalk_1 = altitude_return_value_inlined_27_1;\n"+
"p_sdLine_1 = p_chalk_1;\n"+
"a_sdLine_1 = p1_chalk_1;\n"+
"b_sdLine_1 = q1_chalk_1;\n"+
"sdLine_has_returned_1 = false;\n"+
"pa_sdLine_1 = p_sdLine_1 - a_sdLine_1;\n"+
"ba_sdLine_1 = b_sdLine_1 - a_sdLine_1;\n"+
"h_sdLine_1 = clamp(dot(pa_sdLine_1, ba_sdLine_1) / dot(ba_sdLine_1, ba_sdLine_1), 0.0, 1.0);\n"+
"sdLine_return_value_1 = length(pa_sdLine_1 - h_sdLine_1 * ba_sdLine_1);\n"+
"sdLine_has_returned_1 = true;\n"+
"sdLine_return_value_inlined_28_1 = sdLine_return_value_1;\n"+
"d_chalk_1 = sdLine_return_value_inlined_28_1;\n"+
"p_sdLine_1 = p_chalk_1;\n"+
"a_sdLine_1 = p2_chalk_1;\n"+
"b_sdLine_1 = q2_chalk_1;\n"+
"sdLine_has_returned_1 = false;\n"+
"pa_sdLine_1 = p_sdLine_1 - a_sdLine_1;\n"+
"ba_sdLine_1 = b_sdLine_1 - a_sdLine_1;\n"+
"h_sdLine_1 = clamp(dot(pa_sdLine_1, ba_sdLine_1) / dot(ba_sdLine_1, ba_sdLine_1), 0.0, 1.0);\n"+
"sdLine_return_value_1 = length(pa_sdLine_1 - h_sdLine_1 * ba_sdLine_1);\n"+
"sdLine_has_returned_1 = true;\n"+
"sdLine_return_value_inlined_29_1 = sdLine_return_value_1;\n"+
"d_chalk_1 = min(d_chalk_1, sdLine_return_value_inlined_29_1);\n"+
"p_sdLine_1 = p_chalk_1;\n"+
"a_sdLine_1 = p3_chalk_1;\n"+
"b_sdLine_1 = q3_chalk_1;\n"+
"sdLine_has_returned_1 = false;\n"+
"pa_sdLine_1 = p_sdLine_1 - a_sdLine_1;\n"+
"ba_sdLine_1 = b_sdLine_1 - a_sdLine_1;\n"+
"h_sdLine_1 = clamp(dot(pa_sdLine_1, ba_sdLine_1) / dot(ba_sdLine_1, ba_sdLine_1), 0.0, 1.0);\n"+
"sdLine_return_value_1 = length(pa_sdLine_1 - h_sdLine_1 * ba_sdLine_1);\n"+
"sdLine_has_returned_1 = true;\n"+
"sdLine_return_value_inlined_30_1 = sdLine_return_value_1;\n"+
"d_chalk_1 = min(d_chalk_1, sdLine_return_value_inlined_30_1);\n"+
"o1_chalk_1 = normalize(p1_chalk_1 - q1_chalk_1) * 0.18;\n"+
"o2_chalk_1 = normalize(p2_chalk_1 - q2_chalk_1) * 0.18;\n"+
"o3_chalk_1 = normalize(p3_chalk_1 - q3_chalk_1) * 0.18;\n"+
"p_sdLine_1 = p_chalk_1;\n"+
"a_sdLine_1 = q1_chalk_1 + vec2(o1_chalk_1.x + o1_chalk_1.y, o1_chalk_1.y - o1_chalk_1.x);\n"+
"b_sdLine_1 = q1_chalk_1 + vec2(o1_chalk_1.x, o1_chalk_1.y);\n"+
"sdLine_has_returned_1 = false;\n"+
"pa_sdLine_1 = p_sdLine_1 - a_sdLine_1;\n"+
"ba_sdLine_1 = b_sdLine_1 - a_sdLine_1;\n"+
"h_sdLine_1 = clamp(dot(pa_sdLine_1, ba_sdLine_1) / dot(ba_sdLine_1, ba_sdLine_1), 0.0, 1.0);\n"+
"sdLine_return_value_1 = length(pa_sdLine_1 - h_sdLine_1 * ba_sdLine_1);\n"+
"sdLine_has_returned_1 = true;\n"+
"sdLine_return_value_inlined_31_1 = sdLine_return_value_1;\n"+
"d_chalk_1 = min(d_chalk_1, sdLine_return_value_inlined_31_1);\n"+
"p_sdLine_1 = p_chalk_1;\n"+
"a_sdLine_1 = q1_chalk_1 + vec2(o1_chalk_1.x + o1_chalk_1.y, o1_chalk_1.y - o1_chalk_1.x);\n"+
"b_sdLine_1 = q1_chalk_1 + vec2(o1_chalk_1.y, - o1_chalk_1.x);\n"+
"sdLine_has_returned_1 = false;\n"+
"pa_sdLine_1 = p_sdLine_1 - a_sdLine_1;\n"+
"ba_sdLine_1 = b_sdLine_1 - a_sdLine_1;\n"+
"h_sdLine_1 = clamp(dot(pa_sdLine_1, ba_sdLine_1) / dot(ba_sdLine_1, ba_sdLine_1), 0.0, 1.0);\n"+
"sdLine_return_value_1 = length(pa_sdLine_1 - h_sdLine_1 * ba_sdLine_1);\n"+
"sdLine_has_returned_1 = true;\n"+
"sdLine_return_value_inlined_32_1 = sdLine_return_value_1;\n"+
"d_chalk_1 = min(d_chalk_1, sdLine_return_value_inlined_32_1);\n"+
"p_sdLine_1 = p_chalk_1;\n"+
"a_sdLine_1 = q2_chalk_1 + vec2(o2_chalk_1.x + o2_chalk_1.y, o2_chalk_1.y - o2_chalk_1.x);\n"+
"b_sdLine_1 = q2_chalk_1 + vec2(o2_chalk_1.x, o2_chalk_1.y);\n"+
"sdLine_has_returned_1 = false;\n"+
"pa_sdLine_1 = p_sdLine_1 - a_sdLine_1;\n"+
"ba_sdLine_1 = b_sdLine_1 - a_sdLine_1;\n"+
"h_sdLine_1 = clamp(dot(pa_sdLine_1, ba_sdLine_1) / dot(ba_sdLine_1, ba_sdLine_1), 0.0, 1.0);\n"+
"sdLine_return_value_1 = length(pa_sdLine_1 - h_sdLine_1 * ba_sdLine_1);\n"+
"sdLine_has_returned_1 = true;\n"+
"sdLine_return_value_inlined_33_1 = sdLine_return_value_1;\n"+
"d_chalk_1 = min(d_chalk_1, sdLine_return_value_inlined_33_1);\n"+
"p_sdLine_1 = p_chalk_1;\n"+
"a_sdLine_1 = q2_chalk_1 + vec2(o2_chalk_1.x + o2_chalk_1.y, o2_chalk_1.y - o2_chalk_1.x);\n"+
"b_sdLine_1 = q2_chalk_1 + vec2(o2_chalk_1.y, - o2_chalk_1.x);\n"+
"sdLine_has_returned_1 = false;\n"+
"pa_sdLine_1 = p_sdLine_1 - a_sdLine_1;\n"+
"ba_sdLine_1 = b_sdLine_1 - a_sdLine_1;\n"+
"h_sdLine_1 = clamp(dot(pa_sdLine_1, ba_sdLine_1) / dot(ba_sdLine_1, ba_sdLine_1), 0.0, 1.0);\n"+
"sdLine_return_value_1 = length(pa_sdLine_1 - h_sdLine_1 * ba_sdLine_1);\n"+
"sdLine_has_returned_1 = true;\n"+
"sdLine_return_value_inlined_34_1 = sdLine_return_value_1;\n"+
"d_chalk_1 = min(d_chalk_1, sdLine_return_value_inlined_34_1);\n"+
"p_sdLine_1 = p_chalk_1;\n"+
"a_sdLine_1 = q3_chalk_1 + vec2(o3_chalk_1.x + o3_chalk_1.y, o3_chalk_1.y - o3_chalk_1.x);\n"+
"b_sdLine_1 = q3_chalk_1 + vec2(o3_chalk_1.x, o3_chalk_1.y);\n"+
"sdLine_has_returned_1 = false;\n"+
"pa_sdLine_1 = p_sdLine_1 - a_sdLine_1;\n"+
"ba_sdLine_1 = b_sdLine_1 - a_sdLine_1;\n"+
"h_sdLine_1 = clamp(dot(pa_sdLine_1, ba_sdLine_1) / dot(ba_sdLine_1, ba_sdLine_1), 0.0, 1.0);\n"+
"sdLine_return_value_1 = length(pa_sdLine_1 - h_sdLine_1 * ba_sdLine_1);\n"+
"sdLine_has_returned_1 = true;\n"+
"sdLine_return_value_inlined_35_1 = sdLine_return_value_1;\n"+
"d_chalk_1 = min(d_chalk_1, sdLine_return_value_inlined_35_1);\n"+
"p_sdLine_1 = p_chalk_1;\n"+
"a_sdLine_1 = q3_chalk_1 + vec2(o3_chalk_1.x + o3_chalk_1.y, o3_chalk_1.y - o3_chalk_1.x);\n"+
"b_sdLine_1 = q3_chalk_1 + vec2(o3_chalk_1.y, - o3_chalk_1.x);\n"+
"sdLine_has_returned_1 = false;\n"+
"pa_sdLine_1 = p_sdLine_1 - a_sdLine_1;\n"+
"ba_sdLine_1 = b_sdLine_1 - a_sdLine_1;\n"+
"h_sdLine_1 = clamp(dot(pa_sdLine_1, ba_sdLine_1) / dot(ba_sdLine_1, ba_sdLine_1), 0.0, 1.0);\n"+
"sdLine_return_value_1 = length(pa_sdLine_1 - h_sdLine_1 * ba_sdLine_1);\n"+
"sdLine_has_returned_1 = true;\n"+
"sdLine_return_value_inlined_36_1 = sdLine_return_value_1;\n"+
"d_chalk_1 = min(d_chalk_1, sdLine_return_value_inlined_36_1);\n"+
"p_fbm_1 = p_chalk_1 * 2.5;\n"+
"fbm_has_returned_1 = false;\n"+
"f_fbm_1 = 0.0;\n"+
"s_fbm_1 = 0.5;\n"+
"for( i_fbm_1 = 0;\n"+
"i_fbm_1 < 6; i_fbm_1 ++)\n"+
"{\n"+
"p_noise_1 = p_fbm_1;\n"+
"noise_has_returned_1 = false;\n"+
"i_noise_1 = ivec2(floor(p_noise_1));\n"+
"f_noise_1 = fract(p_noise_1);\n"+
"u_noise_1 = f_noise_1 * f_noise_1 * (3.0 - 2.0 * f_noise_1);\n"+
"z_grad_1 = i_noise_1 + ivec2(0, 0);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_0_1 = grad_return_value_1;\n"+
"z_grad_1 = i_noise_1 + ivec2(1, 0);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_1_1 = grad_return_value_1;\n"+
"z_grad_1 = i_noise_1 + ivec2(0, 1);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_2_1 = grad_return_value_1;\n"+
"z_grad_1 = i_noise_1 + ivec2(1, 1);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_3_1 = grad_return_value_1;\n"+
"noise_return_value_1 = mix(mix(dot(grad_return_value_inlined_0_1, f_noise_1 - vec2(0.0, 0.0)), dot(grad_return_value_inlined_1_1, f_noise_1 - vec2(1.0, 0.0)), u_noise_1.x), mix(dot(grad_return_value_inlined_2_1, f_noise_1 - vec2(0.0, 1.0)), dot(grad_return_value_inlined_3_1, f_noise_1 - vec2(1.0, 1.0)), u_noise_1.x), u_noise_1.y);\n"+
"noise_has_returned_1 = true;\n"+
"noise_return_value_inlined_4_1 = noise_return_value_1;\n"+
"f_fbm_1 += s_fbm_1 * noise_return_value_inlined_4_1;\n"+
"p_fbm_1 = m_fbm_1 * p_fbm_1;\n"+
"s_fbm_1 = 0.5 * s_fbm_1;\n"+
"}\n"+
"fbm_return_value_1 = f_fbm_1;\n"+
"fbm_has_returned_1 = true;\n"+
"fbm_return_value_inlined_37_1 = fbm_return_value_1;\n"+
"d_chalk_1 += 0.03 * fbm_return_value_inlined_37_1;\n"+
"col_chalk_1 = mix(col_chalk_1, 1.2 * 1.25 * vec3(70, 100, 70) / 255.0, gf_chalk_1 * (1.0 - smoothstep(0.01, 0.03, d_chalk_1)));\n"+
"a1_intersect_1 = p1_chalk_1;\n"+
"b1_intersect_1 = q1_chalk_1;\n"+
"a2_intersect_1 = p2_chalk_1;\n"+
"b2_intersect_1 = q2_chalk_1;\n"+
"intersect_has_returned_1 = false;\n"+
"a_cro_1 = a1_intersect_1 - a2_intersect_1;\n"+
"b_cro_1 = b1_intersect_1 - a1_intersect_1;\n"+
"cro_has_returned_1 = false;\n"+
"cro_return_value_1 = a_cro_1.x * b_cro_1.y - a_cro_1.y * b_cro_1.x;\n"+
"cro_has_returned_1 = true;\n"+
"cro_return_value_inlined_5_1 = cro_return_value_1;\n"+
"a_cro_1 = b2_intersect_1 - a2_intersect_1;\n"+
"b_cro_1 = b1_intersect_1 - a1_intersect_1;\n"+
"cro_has_returned_1 = false;\n"+
"cro_return_value_1 = a_cro_1.x * b_cro_1.y - a_cro_1.y * b_cro_1.x;\n"+
"cro_has_returned_1 = true;\n"+
"cro_return_value_inlined_6_1 = cro_return_value_1;\n"+
"h_intersect_1 = cro_return_value_inlined_5_1 / cro_return_value_inlined_6_1;\n"+
"intersect_return_value_1 = a2_intersect_1 + (b2_intersect_1 - a2_intersect_1) * h_intersect_1;\n"+
"intersect_has_returned_1 = true;\n"+
"intersect_return_value_inlined_38_1 = intersect_return_value_1;\n"+
"pc_chalk_1 = intersect_return_value_inlined_38_1;\n"+
"d_chalk_1 = length(p_chalk_1 - pc_chalk_1) - 0.08;\n"+
"p_fbm_1 = (p_chalk_1 - pc_chalk_1) * 8.0;\n"+
"fbm_has_returned_1 = false;\n"+
"f_fbm_1 = 0.0;\n"+
"s_fbm_1 = 0.5;\n"+
"for( i_fbm_1 = 0;\n"+
"i_fbm_1 < 6; i_fbm_1 ++)\n"+
"{\n"+
"p_noise_1 = p_fbm_1;\n"+
"noise_has_returned_1 = false;\n"+
"i_noise_1 = ivec2(floor(p_noise_1));\n"+
"f_noise_1 = fract(p_noise_1);\n"+
"u_noise_1 = f_noise_1 * f_noise_1 * (3.0 - 2.0 * f_noise_1);\n"+
"z_grad_1 = i_noise_1 + ivec2(0, 0);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_0_1 = grad_return_value_1;\n"+
"z_grad_1 = i_noise_1 + ivec2(1, 0);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_1_1 = grad_return_value_1;\n"+
"z_grad_1 = i_noise_1 + ivec2(0, 1);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_2_1 = grad_return_value_1;\n"+
"z_grad_1 = i_noise_1 + ivec2(1, 1);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_3_1 = grad_return_value_1;\n"+
"noise_return_value_1 = mix(mix(dot(grad_return_value_inlined_0_1, f_noise_1 - vec2(0.0, 0.0)), dot(grad_return_value_inlined_1_1, f_noise_1 - vec2(1.0, 0.0)), u_noise_1.x), mix(dot(grad_return_value_inlined_2_1, f_noise_1 - vec2(0.0, 1.0)), dot(grad_return_value_inlined_3_1, f_noise_1 - vec2(1.0, 1.0)), u_noise_1.x), u_noise_1.y);\n"+
"noise_has_returned_1 = true;\n"+
"noise_return_value_inlined_4_1 = noise_return_value_1;\n"+
"f_fbm_1 += s_fbm_1 * noise_return_value_inlined_4_1;\n"+
"p_fbm_1 = m_fbm_1 * p_fbm_1;\n"+
"s_fbm_1 = 0.5 * s_fbm_1;\n"+
"}\n"+
"fbm_return_value_1 = f_fbm_1;\n"+
"fbm_has_returned_1 = true;\n"+
"fbm_return_value_inlined_39_1 = fbm_return_value_1;\n"+
"d_chalk_1 += 0.05 * fbm_return_value_inlined_39_1;\n"+
"col_chalk_1 = mix(col_chalk_1, 1.1 * vec3(140, 200, 60) / 255.0, (1.0 - smoothstep(0.01, 0.03, d_chalk_1)));\n"+
"d_chalk_1 = min(min(length(p_chalk_1 - p1_chalk_1), length(p_chalk_1 - p2_chalk_1)), length(p_chalk_1 - p3_chalk_1)) - 0.06;\n"+
"p_fbm_1 = p_chalk_1 * 4.0;\n"+
"fbm_has_returned_1 = false;\n"+
"f_fbm_1 = 0.0;\n"+
"s_fbm_1 = 0.5;\n"+
"for( i_fbm_1 = 0;\n"+
"i_fbm_1 < 6; i_fbm_1 ++)\n"+
"{\n"+
"p_noise_1 = p_fbm_1;\n"+
"noise_has_returned_1 = false;\n"+
"i_noise_1 = ivec2(floor(p_noise_1));\n"+
"f_noise_1 = fract(p_noise_1);\n"+
"u_noise_1 = f_noise_1 * f_noise_1 * (3.0 - 2.0 * f_noise_1);\n"+
"z_grad_1 = i_noise_1 + ivec2(0, 0);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_0_1 = grad_return_value_1;\n"+
"z_grad_1 = i_noise_1 + ivec2(1, 0);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_1_1 = grad_return_value_1;\n"+
"z_grad_1 = i_noise_1 + ivec2(0, 1);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_2_1 = grad_return_value_1;\n"+
"z_grad_1 = i_noise_1 + ivec2(1, 1);\n"+
"grad_has_returned_1 = false;\n"+
"n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;\n"+
"n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;\n"+
"n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;\n"+
"n_grad_1 &= 7;\n"+
"gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;\n"+
"grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;\n"+
"grad_has_returned_1 = true;\n"+
"grad_return_value_inlined_3_1 = grad_return_value_1;\n"+
"noise_return_value_1 = mix(mix(dot(grad_return_value_inlined_0_1, f_noise_1 - vec2(0.0, 0.0)), dot(grad_return_value_inlined_1_1, f_noise_1 - vec2(1.0, 0.0)), u_noise_1.x), mix(dot(grad_return_value_inlined_2_1, f_noise_1 - vec2(0.0, 1.0)), dot(grad_return_value_inlined_3_1, f_noise_1 - vec2(1.0, 1.0)), u_noise_1.x), u_noise_1.y);\n"+
"noise_has_returned_1 = true;\n"+
"noise_return_value_inlined_4_1 = noise_return_value_1;\n"+
"f_fbm_1 += s_fbm_1 * noise_return_value_inlined_4_1;\n"+
"p_fbm_1 = m_fbm_1 * p_fbm_1;\n"+
"s_fbm_1 = 0.5 * s_fbm_1;\n"+
"}\n"+
"fbm_return_value_1 = f_fbm_1;\n"+
"fbm_has_returned_1 = true;\n"+
"fbm_return_value_inlined_40_1 = fbm_return_value_1;\n"+
"d_chalk_1 += 0.07 * fbm_return_value_inlined_40_1;\n"+
"col_chalk_1 = mix(col_chalk_1, 1.1 * vec3(255, 240, 8) / 255.0, (1.0 - smoothstep(0.01, 0.03, d_chalk_1)));\n"+
"chalk_return_value_1 = col_chalk_1;\n"+
"chalk_has_returned_1 = true;\n"+
"chalk_return_value_inlined_42_1 = chalk_return_value_1;\n"+
"col_mainImage_1 = chalk_return_value_inlined_42_1;\n"+
"fragColor_1 = vec4(col_mainImage_1, 1.0);\n"+
"fragColor_1.w = 1.0;\n"+
"fragColor = mix(fragColor_2, fragColor_1, 1.0 - fragColor_2.a + iTime);\n"+
"}\n"+
"";


var bug5Src = "#version 300 es\n"+
"precision highp float;\n"+
"\n"+
"layout(location = 0) out vec4 fragColor;\n"+
"\n"+
"uniform vec2 iResolution;\n"+
"\n"+
"uniform float iTime;\n"+
"\n"+
"uniform float iTimeDelta;\n"+
"\n"+
"uniform vec4 iMouse;\n"+
"\n"+
"uniform int iFrame;\n"+
"\n"+
"vec4 fragColor_1;\n"+
"\n"+
"vec4 fragColor_2;\n"+
"\n"+
"struct bound3_2 {\n"+
"vec3 mMin;\n"+
"vec3 mMax;\n"+
"} ;\n"+
"\n"+
"void main()\n"+
"{\n"+
"int count_main_1;\n"+
"vec2 uv_main_1;\n"+
"vec2 p_hash_1;\n"+
"bool hash_1_has_returned;\n"+
"float hash_1_return_value;\n"+
"float h_hash_1;\n"+
"float hash_1_return_value_inlined_11;\n"+
"float hash_1_return_value_inlined_12;\n"+
"vec3 dir_main_1;\n"+
"vec2 p_rot_1;\n"+
"float a_rot_1;\n"+
"bool rot_1_has_returned;\n"+
"vec2 rot_1_return_value;\n"+
"vec2 rot_1_return_value_inlined_13;\n"+
"vec2 rot_1_return_value_inlined_14;\n"+
"vec3 pos_main_1;\n"+
"vec3 col_main_1;\n"+
"float t_main_1;\n"+
"float M_main_1;\n"+
"float bsh_main_1;\n"+
"float dens_main_1;\n"+
"int i_main_1;\n"+
"vec3 p_map1_1;\n"+
"float scale_map1_1;\n"+
"bool map1_1_has_returned;\n"+
"float map1_1_return_value;\n"+
"float G_map1_1;\n"+
"float F_map1_1;\n"+
"vec3 p_nac_1;\n"+
"vec2 F_nac_1;\n"+
"vec3 o_nac_1;\n"+
"bool nac_1_has_returned;\n"+
"float nac_1_return_value;\n"+
"const float R_nac_1 = 0.0001;\n"+
"float nac_1_return_value_inlined_4;\n"+
"float t_map1_1;\n"+
"float nac_1_return_value_inlined_5;\n"+
"float nac_1_return_value_inlined_6;\n"+
"float nac_1_return_value_inlined_7;\n"+
"float map1_1_return_value_inlined_15;\n"+
"float temp_main_1;\n"+
"float y_main_1;\n"+
"vec3 p_map2_1;\n"+
"bool map2_1_has_returned;\n"+
"float map2_1_return_value;\n"+
"float map1_1_return_value_inlined_8;\n"+
"float t_map2_1;\n"+
"vec3 p_recta_1;\n"+
"vec3 F_recta_1;\n"+
"vec3 o_recta_1;\n"+
"bool recta_1_has_returned;\n"+
"float recta_1_return_value;\n"+
"const float R_recta_1 = 0.0001;\n"+
"float recta_1_return_value_inlined_9;\n"+
"float map2_1_return_value_inlined_16;\n"+
"vec2 p_gennoise_1;\n"+
"bool gennoise_1_has_returned;\n"+
"float gennoise_1_return_value;\n"+
"float d_gennoise_1;\n"+
"mat2 h_gennoise_1;\n"+
"float color_gennoise_1;\n"+
"int i_gennoise_1;\n"+
"vec2 p_noise_1;\n"+
"bool noise_1_has_returned;\n"+
"float noise_1_return_value;\n"+
"vec2 i_noise_1;\n"+
"vec2 f_noise_1;\n"+
"float hash_1_return_value_inlined_0;\n"+
"float hash_1_return_value_inlined_1;\n"+
"float hash_1_return_value_inlined_2;\n"+
"float hash_1_return_value_inlined_3;\n"+
"float noise_1_return_value_inlined_10;\n"+
"float gennoise_1_return_value_inlined_17;\n"+
"vec3 tot_main_2;\n"+
"int m_main_2;\n"+
"int n_main_2;\n"+
"vec2 o_main_2;\n"+
"vec2 p_main_2;\n"+
"vec3 ro_main_2;\n"+
"vec3 ta_main_2;\n"+
"vec3 ww_main_2;\n"+
"vec3 uu_main_2;\n"+
"vec3 vv_main_2;\n"+
"vec3 rd_main_2;\n"+
"float time_main_2;\n"+
"vec3 p0_main_2;\n"+
"vec3 p1_main_2;\n"+
"vec3 p2_main_2;\n"+
"vec3 p3_main_2;\n"+
"float thickness_main_2;\n"+
"vec3 col_main_2;\n"+
"vec3 ro_iBezier_2;\n"+
"vec3 rd_iBezier_2;\n"+
"vec3 p0_iBezier_2;\n"+
"vec3 p1_iBezier_2;\n"+
"vec3 p2_iBezier_2;\n"+
"vec3 p3_iBezier_2;\n"+
"float width_iBezier_2;\n"+
"bool iBezier_2_has_returned;\n"+
"float iBezier_2_return_value;\n"+
"const int kNum_iBezier_2 = 50;\n"+
"float hit_iBezier_2;\n"+
"float res_iBezier_2;\n"+
"vec3 a_iBezier_2;\n"+
"int i_iBezier_2;\n"+
"float t_iBezier_2;\n"+
"float s_iBezier_2;\n"+
"vec3 b_iBezier_2;\n"+
"vec3 ro_iSegment_2;\n"+
"vec3 rd_iSegment_2;\n"+
"vec3 a_iSegment_2;\n"+
"vec3 b_iSegment_2;\n"+
"bool iSegment_2_has_returned;\n"+
"vec3 iSegment_2_return_value;\n"+
"vec3 ba_iSegment_2;\n"+
"vec3 oa_iSegment_2;\n"+
"float oad_iSegment_2;\n"+
"float dba_iSegment_2;\n"+
"float baba_iSegment_2;\n"+
"float oaba_iSegment_2;\n"+
"vec2 th_iSegment_2;\n"+
"vec3 p_iSegment_2;\n"+
"vec3 q_iSegment_2;\n"+
"vec3 v_length2_2;\n"+
"bool length2_2_has_returned;\n"+
"float length2_2_return_value;\n"+
"float length2_2_return_value_inlined_18;\n"+
"vec3 iSegment_2_return_value_inlined_19;\n"+
"vec3 r_iBezier_2;\n"+
"float iBezier_2_return_value_inlined_20;\n"+
"float t_main_2;\n"+
"float tmin_main_2;\n"+
"vec3 p0_BezierAABB_2;\n"+
"vec3 p1_BezierAABB_2;\n"+
"vec3 p2_BezierAABB_2;\n"+
"vec3 p3_BezierAABB_2;\n"+
"bool BezierAABB_2_has_returned;\n"+
"bound3_2 BezierAABB_2_return_value;\n"+
"vec3 mi_BezierAABB_2;\n"+
"vec3 ma_BezierAABB_2;\n"+
"vec3 c_BezierAABB_2;\n"+
"vec3 b_BezierAABB_2;\n"+
"vec3 a_BezierAABB_2;\n"+
"vec3 h_BezierAABB_2;\n"+
"vec3 g_BezierAABB_2;\n"+
"vec3 t1_BezierAABB_2;\n"+
"vec3 s1_BezierAABB_2;\n"+
"vec3 t2_BezierAABB_2;\n"+
"vec3 s2_BezierAABB_2;\n"+
"vec3 q1_BezierAABB_2;\n"+
"vec3 q2_BezierAABB_2;\n"+
"bound3_2 BezierAABB_2_return_value_inlined_21;\n"+
"bound3_2 bbox_main_2;\n"+
"vec3 bcen_main_2;\n"+
"vec3 brad_main_2;\n"+
"vec3 ro_iBox_2;\n"+
"vec3 rd_iBox_2;\n"+
"vec3 cen_iBox_2;\n"+
"vec3 rad_iBox_2;\n"+
"bool iBox_2_has_returned;\n"+
"vec2 iBox_2_return_value;\n"+
"vec3 m_iBox_2;\n"+
"vec3 n_iBox_2;\n"+
"vec3 k_iBox_2;\n"+
"vec3 t1_iBox_2;\n"+
"vec3 t2_iBox_2;\n"+
"float tN_iBox_2;\n"+
"float tF_iBox_2;\n"+
"vec2 iBox_2_return_value_inlined_22;\n"+
"vec2 tbox_main_2;\n"+
"vec3 pos_main_2;\n"+
"vec3 e_main_2;\n"+
"float al_main_2;\n"+
"vec2 p_hash1_2;\n"+
"bool hash1_2_has_returned;\n"+
"float hash1_2_return_value;\n"+
"float hash1_2_return_value_inlined_23;\n"+
"float hash1_2_return_value_inlined_24;\n"+
"fragColor = vec4(0.0);\n"+
"fragColor_1 = vec4(0.0);\n"+
"for( count_main_1 = 0;\n"+
"count_main_1 < 2; count_main_1 ++)\n"+
"{\n"+
"uv_main_1 = - 1.0 + 2.0 * (gl_FragCoord.xy / iResolution.xy);\n"+
"uv_main_1 *= 1.4;\n"+
"p_hash_1 = uv_main_1.xy + iTime + float(count_main_1);\n"+
"hash_1_has_returned = false;\n"+
"h_hash_1 = dot(p_hash_1, vec2(127.1, 311.7));\n"+
"hash_1_return_value = fract(sin(h_hash_1) * 458.325421) * 2.0 - 1.0;\n"+
"hash_1_has_returned = true;\n"+
"hash_1_return_value_inlined_11 = hash_1_return_value;\n"+
"uv_main_1.x += hash_1_return_value_inlined_11 / 512.0;\n"+
"p_hash_1 = uv_main_1.yx + iTime + float(count_main_1);\n"+
"hash_1_has_returned = false;\n"+
"h_hash_1 = dot(p_hash_1, vec2(127.1, 311.7));\n"+
"hash_1_return_value = fract(sin(h_hash_1) * 458.325421) * 2.0 - 1.0;\n"+
"hash_1_has_returned = true;\n"+
"hash_1_return_value_inlined_12 = hash_1_return_value;\n"+
"uv_main_1.y += hash_1_return_value_inlined_12 / 512.0;\n"+
"dir_main_1 = normalize(vec3(uv_main_1 * vec2(iResolution.x / iResolution.y, 1.0), 1.0 + sin(iTime) * 0.01));\n"+
"p_rot_1 = dir_main_1.xz;\n"+
"a_rot_1 = (70.0 * 3.1415926535897921284 / 180.0);\n"+
"rot_1_has_returned = false;\n"+
"rot_1_return_value = vec2(p_rot_1.x * cos(a_rot_1) - p_rot_1.y * sin(a_rot_1), p_rot_1.x * sin(a_rot_1) + p_rot_1.y * cos(a_rot_1));\n"+
"rot_1_has_returned = true;\n"+
"rot_1_return_value_inlined_13 = rot_1_return_value;\n"+
"dir_main_1.xz = rot_1_return_value_inlined_13;\n"+
"p_rot_1 = dir_main_1.xy;\n"+
"a_rot_1 = (90.0 * 3.1415926535897921284 / 180.0);\n"+
"rot_1_has_returned = false;\n"+
"rot_1_return_value = vec2(p_rot_1.x * cos(a_rot_1) - p_rot_1.y * sin(a_rot_1), p_rot_1.x * sin(a_rot_1) + p_rot_1.y * cos(a_rot_1));\n"+
"rot_1_has_returned = true;\n"+
"rot_1_return_value_inlined_14 = rot_1_return_value;\n"+
"dir_main_1.xy = rot_1_return_value_inlined_14;\n"+
"pos_main_1 = vec3(- 0.1 + sin(iTime * 0.3) * 0.1, 2.0 + cos(iTime * 0.4) * 0.1, - 3.5);\n"+
"col_main_1 = vec3(0.0);\n"+
"t_main_1 = 0.0;\n"+
"M_main_1 = 1.002;\n"+
"bsh_main_1 = 0.01;\n"+
"dens_main_1 = 0.0;\n"+
"for(   i_main_1 = 0;\n"+
"i_main_1 < 25 * 24; i_main_1 ++)\n"+
"{\n"+
"p_map1_1 = pos_main_1 + dir_main_1 * t_main_1;\n"+
"scale_map1_1 = 0.6;\n"+
"map1_1_has_returned = false;\n"+
"G_map1_1 = 0.50;\n"+
"F_map1_1 = 0.50 * scale_map1_1;\n"+
"p_nac_1 = p_map1_1;\n"+
"F_nac_1 = vec2(F_map1_1, F_map1_1);\n"+
"o_nac_1 = vec3(G_map1_1, G_map1_1, 0.0);\n"+
"nac_1_has_returned = false;\n"+
"p_nac_1 += o_nac_1;\n"+
"nac_1_return_value = length(max(abs(p_nac_1.xy) - vec2(F_nac_1), 0.0)) - R_nac_1;\n"+
"nac_1_has_returned = true;\n"+
"nac_1_return_value_inlined_4 = nac_1_return_value;\n"+
"t_map1_1 = nac_1_return_value_inlined_4;\n"+
"p_nac_1 = p_map1_1;\n"+
"F_nac_1 = vec2(F_map1_1, F_map1_1);\n"+
"o_nac_1 = vec3(G_map1_1, - G_map1_1, 0.0);\n"+
"nac_1_has_returned = false;\n"+
"p_nac_1 += o_nac_1;\n"+
"nac_1_return_value = length(max(abs(p_nac_1.xy) - vec2(F_nac_1), 0.0)) - R_nac_1;\n"+
"nac_1_has_returned = true;\n"+
"nac_1_return_value_inlined_5 = nac_1_return_value;\n"+
"t_map1_1 = min(t_map1_1, nac_1_return_value_inlined_5);\n"+
"p_nac_1 = p_map1_1;\n"+
"F_nac_1 = vec2(F_map1_1, F_map1_1);\n"+
"o_nac_1 = vec3(- G_map1_1, G_map1_1, 0.0);\n"+
"nac_1_has_returned = false;\n"+
"p_nac_1 += o_nac_1;\n"+
"nac_1_return_value = length(max(abs(p_nac_1.xy) - vec2(F_nac_1), 0.0)) - R_nac_1;\n"+
"nac_1_has_returned = true;\n"+
"nac_1_return_value_inlined_6 = nac_1_return_value;\n"+
"t_map1_1 = min(t_map1_1, nac_1_return_value_inlined_6);\n"+
"p_nac_1 = p_map1_1;\n"+
"F_nac_1 = vec2(F_map1_1, F_map1_1);\n"+
"o_nac_1 = vec3(- G_map1_1, - G_map1_1, 0.0);\n"+
"nac_1_has_returned = false;\n"+
"p_nac_1 += o_nac_1;\n"+
"nac_1_return_value = length(max(abs(p_nac_1.xy) - vec2(F_nac_1), 0.0)) - R_nac_1;\n"+
"nac_1_has_returned = true;\n"+
"nac_1_return_value_inlined_7 = nac_1_return_value;\n"+
"t_map1_1 = min(t_map1_1, nac_1_return_value_inlined_7);\n"+
"map1_1_return_value = t_map1_1;\n"+
"map1_1_has_returned = true;\n"+
"map1_1_return_value_inlined_15 = map1_1_return_value;\n"+
"temp_main_1 = map1_1_return_value_inlined_15;\n"+
"if(temp_main_1 < 0.2)\n"+
"{\n"+
"col_main_1 += (vec3(0.5, 0.7, 1.7)) * 0.005 * dens_main_1;\n"+
"}\n"+
"t_main_1 += bsh_main_1 * M_main_1;\n"+
"bsh_main_1 *= M_main_1;\n"+
"dens_main_1 += 0.025;\n"+
"}\n"+
"t_main_1 = 0.0;\n"+
"y_main_1 = 0.0;\n"+
"for(   i_main_1 = 0;\n"+
"i_main_1 < 25 * 50; i_main_1 ++)\n"+
"{\n"+
"p_map2_1 = pos_main_1 + dir_main_1 * t_main_1;\n"+
"map2_1_has_returned = false;\n"+
"p_map1_1 = p_map2_1;\n"+
"scale_map1_1 = 0.9;\n"+
"map1_1_has_returned = false;\n"+
"G_map1_1 = 0.50;\n"+
"F_map1_1 = 0.50 * scale_map1_1;\n"+
"p_nac_1 = p_map1_1;\n"+
"F_nac_1 = vec2(F_map1_1, F_map1_1);\n"+
"o_nac_1 = vec3(G_map1_1, G_map1_1, 0.0);\n"+
"nac_1_has_returned = false;\n"+
"p_nac_1 += o_nac_1;\n"+
"nac_1_return_value = length(max(abs(p_nac_1.xy) - vec2(F_nac_1), 0.0)) - R_nac_1;\n"+
"nac_1_has_returned = true;\n"+
"nac_1_return_value_inlined_4 = nac_1_return_value;\n"+
"t_map1_1 = nac_1_return_value_inlined_4;\n"+
"p_nac_1 = p_map1_1;\n"+
"F_nac_1 = vec2(F_map1_1, F_map1_1);\n"+
"o_nac_1 = vec3(G_map1_1, - G_map1_1, 0.0);\n"+
"nac_1_has_returned = false;\n"+
"p_nac_1 += o_nac_1;\n"+
"nac_1_return_value = length(max(abs(p_nac_1.xy) - vec2(F_nac_1), 0.0)) - R_nac_1;\n"+
"nac_1_has_returned = true;\n"+
"nac_1_return_value_inlined_5 = nac_1_return_value;\n"+
"t_map1_1 = min(t_map1_1, nac_1_return_value_inlined_5);\n"+
"p_nac_1 = p_map1_1;\n"+
"F_nac_1 = vec2(F_map1_1, F_map1_1);\n"+
"o_nac_1 = vec3(- G_map1_1, G_map1_1, 0.0);\n"+
"nac_1_has_returned = false;\n"+
"p_nac_1 += o_nac_1;\n"+
"nac_1_return_value = length(max(abs(p_nac_1.xy) - vec2(F_nac_1), 0.0)) - R_nac_1;\n"+
"nac_1_has_returned = true;\n"+
"nac_1_return_value_inlined_6 = nac_1_return_value;\n"+
"t_map1_1 = min(t_map1_1, nac_1_return_value_inlined_6);\n"+
"p_nac_1 = p_map1_1;\n"+
"F_nac_1 = vec2(F_map1_1, F_map1_1);\n"+
"o_nac_1 = vec3(- G_map1_1, - G_map1_1, 0.0);\n"+
"nac_1_has_returned = false;\n"+
"p_nac_1 += o_nac_1;\n"+
"nac_1_return_value = length(max(abs(p_nac_1.xy) - vec2(F_nac_1), 0.0)) - R_nac_1;\n"+
"nac_1_has_returned = true;\n"+
"nac_1_return_value_inlined_7 = nac_1_return_value;\n"+
"t_map1_1 = min(t_map1_1, nac_1_return_value_inlined_7);\n"+
"map1_1_return_value = t_map1_1;\n"+
"map1_1_has_returned = true;\n"+
"map1_1_return_value_inlined_8 = map1_1_return_value;\n"+
"t_map2_1 = map1_1_return_value_inlined_8;\n"+
"p_recta_1 = p_map2_1;\n"+
"F_recta_1 = vec3(1.0, 1.0, 0.02);\n"+
"o_recta_1 = vec3(0.0, 0.0, 0.0);\n"+
"recta_1_has_returned = false;\n"+
"p_recta_1 += o_recta_1;\n"+
"recta_1_return_value = length(max(abs(p_recta_1) - F_recta_1, 0.0)) - R_recta_1;\n"+
"recta_1_has_returned = true;\n"+
"recta_1_return_value_inlined_9 = recta_1_return_value;\n"+
"t_map2_1 = max(t_map2_1, recta_1_return_value_inlined_9);\n"+
"map2_1_return_value = t_map2_1;\n"+
"map2_1_has_returned = true;\n"+
"map2_1_return_value_inlined_16 = map2_1_return_value;\n"+
"temp_main_1 = map2_1_return_value_inlined_16;\n"+
"if(temp_main_1 < 0.1)\n"+
"{\n"+
"col_main_1 += (vec3(0.15, 0.8, 1.7)) * 0.005;\n"+
"}\n"+
"t_main_1 += temp_main_1;\n"+
"y_main_1 ++;\n"+
"}\n"+
"col_main_1 += ((2.0 + uv_main_1.x) * (vec3(0.15, 0.8, 1.7))) + (y_main_1 / (25.0 * 50.0));\n"+
"p_gennoise_1 = dir_main_1.xz;\n"+
"gennoise_1_has_returned = false;\n"+
"d_gennoise_1 = 0.5;\n"+
"h_gennoise_1 = mat2(1.6, 1.2, - 1.2, 1.6);\n"+
"color_gennoise_1 = 0.0;\n"+
"for(   i_gennoise_1 = 0;\n"+
"i_gennoise_1 < 2; i_gennoise_1 ++)\n"+
"{\n"+
"p_noise_1 = p_gennoise_1 * 5.0 + iTime;\n"+
"noise_1_has_returned = false;\n"+
"i_noise_1 = floor(p_noise_1);\n"+
"f_noise_1 = fract(p_noise_1);\n"+
"f_noise_1 = f_noise_1 * f_noise_1 * (3.0 - 2.0 * f_noise_1);\n"+
"p_hash_1 = i_noise_1 + vec2(0.0, 0.0);\n"+
"hash_1_has_returned = false;\n"+
"h_hash_1 = dot(p_hash_1, vec2(127.1, 311.7));\n"+
"hash_1_return_value = fract(sin(h_hash_1) * 458.325421) * 2.0 - 1.0;\n"+
"hash_1_has_returned = true;\n"+
"hash_1_return_value_inlined_0 = hash_1_return_value;\n"+
"p_hash_1 = i_noise_1 + vec2(1.0, 0.0);\n"+
"hash_1_has_returned = false;\n"+
"h_hash_1 = dot(p_hash_1, vec2(127.1, 311.7));\n"+
"hash_1_return_value = fract(sin(h_hash_1) * 458.325421) * 2.0 - 1.0;\n"+
"hash_1_has_returned = true;\n"+
"hash_1_return_value_inlined_1 = hash_1_return_value;\n"+
"p_hash_1 = i_noise_1 + vec2(0.0, 1.0);\n"+
"hash_1_has_returned = false;\n"+
"h_hash_1 = dot(p_hash_1, vec2(127.1, 311.7));\n"+
"hash_1_return_value = fract(sin(h_hash_1) * 458.325421) * 2.0 - 1.0;\n"+
"hash_1_has_returned = true;\n"+
"hash_1_return_value_inlined_2 = hash_1_return_value;\n"+
"p_hash_1 = i_noise_1 + vec2(1.0, 1.0);\n"+
"hash_1_has_returned = false;\n"+
"h_hash_1 = dot(p_hash_1, vec2(127.1, 311.7));\n"+
"hash_1_return_value = fract(sin(h_hash_1) * 458.325421) * 2.0 - 1.0;\n"+
"hash_1_has_returned = true;\n"+
"hash_1_return_value_inlined_3 = hash_1_return_value;\n"+
"noise_1_return_value = mix(mix(hash_1_return_value_inlined_0, hash_1_return_value_inlined_1, f_noise_1.x), mix(hash_1_return_value_inlined_2, hash_1_return_value_inlined_3, f_noise_1.x), f_noise_1.y);\n"+
"noise_1_has_returned = true;\n"+
"noise_1_return_value_inlined_10 = noise_1_return_value;\n"+
"color_gennoise_1 += d_gennoise_1 * noise_1_return_value_inlined_10;\n"+
"p_gennoise_1 *= h_gennoise_1;\n"+
"d_gennoise_1 /= 2.0;\n"+
"}\n"+
"gennoise_1_return_value = color_gennoise_1;\n"+
"gennoise_1_has_returned = true;\n"+
"gennoise_1_return_value_inlined_17 = gennoise_1_return_value;\n"+
"col_main_1 += gennoise_1_return_value_inlined_17 * 0.5;\n"+
"col_main_1 *= 1.0 - uv_main_1.y * 0.5;\n"+
"col_main_1 *= vec3(0.05);\n"+
"col_main_1 = pow(max(col_main_1, 1e-9), vec3(0.717));\n"+
"fragColor_1 += vec4(col_main_1, 1.0 / (t_main_1));\n"+
"}\n"+
"fragColor_1 /= vec4(2.0);\n"+
"fragColor_1.w = 1.0;\n"+
"fragColor += round(clamp(fragColor_1, vec4(0.0), vec4(1.0)) * 255.0);\n"+
"tot_main_2 = vec3(0.0);\n"+
"for( i_gennoise_1 = 0;\n"+
"i_gennoise_1 < 3; i_gennoise_1 ++)\n"+
"{\n"+
"for(   i_main_1 = 0;\n"+
"i_main_1 < 3; i_main_1 ++)\n"+
"{\n"+
"F_nac_1 = vec2(float(i_gennoise_1), float(i_main_1)) / float(3) - 0.5;\n"+
"p_rot_1 = (- iResolution.xy + 2.0 * (gl_FragCoord.xy + F_nac_1)) / iResolution.y;\n"+
"ro_main_2 = vec3(- 0.5, 0.4, 1.5);\n"+
"p_map1_1 = vec3(0.0, 0.0, 0.0);\n"+
"ww_main_2 = normalize(p_map1_1 - ro_main_2);\n"+
"uu_main_2 = normalize(cross(ww_main_2, vec3(0.0, 1.0, 0.0)));\n"+
"vv_main_2 = normalize(cross(uu_main_2, ww_main_2));\n"+
"rd_main_2 = normalize(p_rot_1.x * uu_main_2 + p_rot_1.y * vv_main_2 + 1.5 * ww_main_2);\n"+
"scale_map1_1 = iTime * 0.5;\n"+
"p0_main_2 = vec3(0.8, 0.6, 0.8) * sin(scale_map1_1 * 0.7 + vec3(3.0, 1.0, 2.0));\n"+
"pos_main_1 = vec3(0.8, 0.6, 0.8) * sin(scale_map1_1 * 1.1 + vec3(0.0, 6.0, 1.0));\n"+
"p2_main_2 = vec3(0.8, 0.6, 0.8) * sin(scale_map1_1 * 1.3 + vec3(4.0, 2.0, 3.0));\n"+
"p3_main_2 = vec3(0.8, 0.6, 0.8) * sin(scale_map1_1 * 1.5 + vec3(1.0, 5.0, 4.0));\n"+
"dens_main_1 = 0.01;\n"+
"col_main_2 = vec3(0.4) * (1.0 - 0.3 * length(p_rot_1));\n"+
"ro_iBezier_2 = ro_main_2;\n"+
"p_map2_1 = rd_main_2;\n"+
"p0_iBezier_2 = p0_main_2;\n"+
"p1_iBezier_2 = pos_main_1;\n"+
"o_recta_1 = p2_main_2;\n"+
"p3_iBezier_2 = p3_main_2;\n"+
"gennoise_1_return_value_inlined_17 = dens_main_1;\n"+
"gennoise_1_has_returned = false;\n"+
"bsh_main_1 = - 1.0;\n"+
"map1_1_return_value_inlined_15 = 1e10;\n"+
"a_iBezier_2 = p0_iBezier_2;\n"+
"for(     count_main_1 = 1;\n"+
"count_main_1 < kNum_iBezier_2; count_main_1 ++)\n"+
"{\n"+
"color_gennoise_1 = float(count_main_1) / float(kNum_iBezier_2 - 1);\n"+
"nac_1_return_value = 1.0 - color_gennoise_1;\n"+
"b_iBezier_2 = p0_iBezier_2 * nac_1_return_value * nac_1_return_value * nac_1_return_value + p1_iBezier_2 * 3.0 * nac_1_return_value * nac_1_return_value * color_gennoise_1 + o_recta_1 * 3.0 * nac_1_return_value * color_gennoise_1 * color_gennoise_1 + p3_iBezier_2 * color_gennoise_1 * color_gennoise_1 * color_gennoise_1;\n"+
"ro_iSegment_2 = ro_iBezier_2;\n"+
"rd_iSegment_2 = p_map2_1;\n"+
"dir_main_1 = a_iBezier_2;\n"+
"b_iSegment_2 = b_iBezier_2;\n"+
"map2_1_has_returned = false;\n"+
"ba_iSegment_2 = b_iSegment_2 - dir_main_1;\n"+
"oa_iSegment_2 = ro_iSegment_2 - dir_main_1;\n"+
"temp_main_1 = dot(oa_iSegment_2, rd_iSegment_2);\n"+
"noise_1_return_value = dot(rd_iSegment_2, ba_iSegment_2);\n"+
"nac_1_return_value_inlined_4 = dot(ba_iSegment_2, ba_iSegment_2);\n"+
"d_gennoise_1 = dot(oa_iSegment_2, ba_iSegment_2);\n"+
"i_noise_1 = vec2(- temp_main_1 * nac_1_return_value_inlined_4 + noise_1_return_value * d_gennoise_1, d_gennoise_1 - temp_main_1 * noise_1_return_value) / (nac_1_return_value_inlined_4 - noise_1_return_value * noise_1_return_value);\n"+
"i_noise_1.x = max(i_noise_1.x, 0.0);\n"+
"i_noise_1.y = clamp(i_noise_1.y, 0.0, 1.0);\n"+
"p_iSegment_2 = dir_main_1 + ba_iSegment_2 * i_noise_1.y;\n"+
"q_iSegment_2 = ro_iSegment_2 + rd_iSegment_2 * i_noise_1.x;\n"+
"v_length2_2 = p_iSegment_2 - q_iSegment_2;\n"+
"noise_1_has_returned = false;\n"+
"t_main_1 = dot(v_length2_2, v_length2_2);\n"+
"noise_1_has_returned = true;\n"+
"map1_1_return_value_inlined_8 = t_main_1;\n"+
"iSegment_2_return_value = vec3(i_noise_1, map1_1_return_value_inlined_8);\n"+
"map2_1_has_returned = true;\n"+
"p_nac_1 = iSegment_2_return_value;\n"+
"r_iBezier_2 = p_nac_1;\n"+
"if(r_iBezier_2.z < gennoise_1_return_value_inlined_17 * gennoise_1_return_value_inlined_17)\n"+
"{\n"+
"map1_1_return_value_inlined_15 = min(map1_1_return_value_inlined_15, r_iBezier_2.x);\n"+
"bsh_main_1 = 1.0;\n"+
"}\n"+
"a_iBezier_2 = b_iBezier_2;\n"+
"}\n"+
"hash_1_return_value_inlined_3 = map1_1_return_value_inlined_15 * bsh_main_1;\n"+
"gennoise_1_has_returned = true;\n"+
"recta_1_return_value = hash_1_return_value_inlined_3;\n"+
"nac_1_return_value_inlined_5 = recta_1_return_value;\n"+
"a_rot_1 = 1e10;\n"+
"if(nac_1_return_value_inlined_5 > 0.0)\n"+
"{\n"+
"a_rot_1 = nac_1_return_value_inlined_5;\n"+
"col_main_2 = vec3(1.0, 0.75, 0.3);\n"+
"}\n"+
"p0_BezierAABB_2 = p0_main_2;\n"+
"p1_BezierAABB_2 = pos_main_1;\n"+
"p2_BezierAABB_2 = p2_main_2;\n"+
"p3_BezierAABB_2 = p3_main_2;\n"+
"rot_1_has_returned = false;\n"+
"mi_BezierAABB_2 = min(p0_BezierAABB_2, p3_BezierAABB_2);\n"+
"ma_BezierAABB_2 = max(p0_BezierAABB_2, p3_BezierAABB_2);\n"+
"F_recta_1 = - 1.0 * p0_BezierAABB_2 + 1.0 * p1_BezierAABB_2;\n"+
"b_BezierAABB_2 = 1.0 * p0_BezierAABB_2 - 2.0 * p1_BezierAABB_2 + 1.0 * p2_BezierAABB_2;\n"+
"a_BezierAABB_2 = - 1.0 * p0_BezierAABB_2 + 3.0 * p1_BezierAABB_2 - 3.0 * p2_BezierAABB_2 + 1.0 * p3_BezierAABB_2;\n"+
"h_BezierAABB_2 = b_BezierAABB_2 * b_BezierAABB_2 - a_BezierAABB_2 * F_recta_1;\n"+
"if(any(greaterThan(h_BezierAABB_2, vec3(0.0))))\n"+
"{\n"+
"g_BezierAABB_2 = sqrt(abs(h_BezierAABB_2));\n"+
"t1_BezierAABB_2 = clamp((- b_BezierAABB_2 - g_BezierAABB_2) / a_BezierAABB_2, 0.0, 1.0);\n"+
"s1_BezierAABB_2 = 1.0 - t1_BezierAABB_2;\n"+
"t2_BezierAABB_2 = clamp((- b_BezierAABB_2 + g_BezierAABB_2) / a_BezierAABB_2, 0.0, 1.0);\n"+
"s2_BezierAABB_2 = 1.0 - t2_BezierAABB_2;\n"+
"q1_BezierAABB_2 = s1_BezierAABB_2 * s1_BezierAABB_2 * s1_BezierAABB_2 * p0_BezierAABB_2 + 3.0 * s1_BezierAABB_2 * s1_BezierAABB_2 * t1_BezierAABB_2 * p1_BezierAABB_2 + 3.0 * s1_BezierAABB_2 * t1_BezierAABB_2 * t1_BezierAABB_2 * p2_BezierAABB_2 + t1_BezierAABB_2 * t1_BezierAABB_2 * t1_BezierAABB_2 * p3_BezierAABB_2;\n"+
"q2_BezierAABB_2 = s2_BezierAABB_2 * s2_BezierAABB_2 * s2_BezierAABB_2 * p0_BezierAABB_2 + 3.0 * s2_BezierAABB_2 * s2_BezierAABB_2 * t2_BezierAABB_2 * p1_BezierAABB_2 + 3.0 * s2_BezierAABB_2 * t2_BezierAABB_2 * t2_BezierAABB_2 * p2_BezierAABB_2 + t2_BezierAABB_2 * t2_BezierAABB_2 * t2_BezierAABB_2 * p3_BezierAABB_2;\n"+
"if(h_BezierAABB_2.x > 0.0)\n"+
"{\n"+
"mi_BezierAABB_2.x = min(mi_BezierAABB_2.x, min(q1_BezierAABB_2.x, q2_BezierAABB_2.x));\n"+
"ma_BezierAABB_2.x = max(ma_BezierAABB_2.x, max(q1_BezierAABB_2.x, q2_BezierAABB_2.x));\n"+
"}\n"+
"if(h_BezierAABB_2.y > 0.0)\n"+
"{\n"+
"mi_BezierAABB_2.y = min(mi_BezierAABB_2.y, min(q1_BezierAABB_2.y, q2_BezierAABB_2.y));\n"+
"ma_BezierAABB_2.y = max(ma_BezierAABB_2.y, max(q1_BezierAABB_2.y, q2_BezierAABB_2.y));\n"+
"}\n"+
"if(h_BezierAABB_2.z > 0.0)\n"+
"{\n"+
"mi_BezierAABB_2.z = min(mi_BezierAABB_2.z, min(q1_BezierAABB_2.z, q2_BezierAABB_2.z));\n"+
"ma_BezierAABB_2.z = max(ma_BezierAABB_2.z, max(q1_BezierAABB_2.z, q2_BezierAABB_2.z));\n"+
"}\n"+
"}\n"+
"BezierAABB_2_return_value = bound3_2(mi_BezierAABB_2, ma_BezierAABB_2);\n"+
"rot_1_has_returned = true;\n"+
"BezierAABB_2_return_value_inlined_21 = BezierAABB_2_return_value;\n"+
"bbox_main_2 = BezierAABB_2_return_value_inlined_21;\n"+
"bbox_main_2.mMin -= dens_main_1;\n"+
"bbox_main_2.mMax += dens_main_1;\n"+
"bcen_main_2 = 0.5 * (bbox_main_2.mMin + bbox_main_2.mMax);\n"+
"o_nac_1 = 0.5 * (bbox_main_2.mMax - bbox_main_2.mMin);\n"+
"ro_iBox_2 = ro_main_2;\n"+
"rd_iBox_2 = rd_main_2;\n"+
"cen_iBox_2 = bcen_main_2;\n"+
"rad_iBox_2 = o_nac_1;\n"+
"map1_1_has_returned = false;\n"+
"m_iBox_2 = 1.0 / rd_iBox_2;\n"+
"n_iBox_2 = m_iBox_2 * (ro_iBox_2 - cen_iBox_2);\n"+
"k_iBox_2 = abs(m_iBox_2) * rad_iBox_2;\n"+
"col_main_1 = - n_iBox_2 - k_iBox_2;\n"+
"p_recta_1 = - n_iBox_2 + k_iBox_2;\n"+
"recta_1_return_value_inlined_9 = max(max(col_main_1.x, col_main_1.y), col_main_1.z);\n"+
"t_map1_1 = min(min(p_recta_1.x, p_recta_1.y), p_recta_1.z);\n"+
"if(recta_1_return_value_inlined_9 > t_map1_1 || t_map1_1 < 0.0)\n"+
"{\n"+
"rot_1_return_value_inlined_14 = vec2(- 1.0);\n"+
"map1_1_has_returned = true;\n"+
"}\n"+
"if(! map1_1_has_returned)\n"+
"{\n"+
"rot_1_return_value_inlined_14 = vec2(recta_1_return_value_inlined_9, t_map1_1);\n"+
"map1_1_has_returned = true;\n"+
"}\n"+
"f_noise_1 = rot_1_return_value_inlined_14;\n"+
"rot_1_return_value = f_noise_1;\n"+
"if(rot_1_return_value.x > 0.0)\n"+
"{\n"+
"if(rot_1_return_value.y < a_rot_1)\n"+
"{\n"+
"pos_main_2 = ro_main_2 + rd_main_2 * rot_1_return_value.y;\n"+
"e_main_2 = smoothstep(o_nac_1 - 0.03, o_nac_1 - 0.02, abs(pos_main_2 - bcen_main_2));\n"+
"h_hash_1 = 1.0 - (1.0 - e_main_2.x * e_main_2.y) * (1.0 - e_main_2.y * e_main_2.z) * (1.0 - e_main_2.z * e_main_2.x);\n"+
"col_main_2 = mix(col_main_2, vec3(0.0), 0.25 + 0.75 * h_hash_1);\n"+
"}\n"+
"if(rot_1_return_value.x < a_rot_1)\n"+
"{\n"+
"pos_main_2 = ro_main_2 + rd_main_2 * rot_1_return_value.x;\n"+
"e_main_2 = smoothstep(o_nac_1 - 0.03, o_nac_1 - 0.02, abs(pos_main_2 - bcen_main_2));\n"+
"h_hash_1 = 1.0 - (1.0 - e_main_2.x * e_main_2.y) * (1.0 - e_main_2.y * e_main_2.z) * (1.0 - e_main_2.z * e_main_2.x);\n"+
"col_main_2 = mix(col_main_2, vec3(0.0), 0.15 + 0.85 * h_hash_1);\n"+
"}\n"+
"}\n"+
"tot_main_2 += col_main_2;\n"+
"}\n"+
"}\n"+
"tot_main_2 /= float(3 * 3);\n"+
"uv_main_1 = gl_FragCoord.xy;\n"+
"hash_1_has_returned = false;\n"+
"hash_1_return_value = fract(sin(dot(uv_main_1, vec2(12.9898, 78.233))) * 43758.5453);\n"+
"hash_1_has_returned = true;\n"+
"hash_1_return_value_inlined_12 = hash_1_return_value;\n"+
"uv_main_1 = gl_FragCoord.yx + 13.1;\n"+
"hash_1_has_returned = false;\n"+
"hash_1_return_value = fract(sin(dot(uv_main_1, vec2(12.9898, 78.233))) * 43758.5453);\n"+
"hash_1_has_returned = true;\n"+
"y_main_1 = hash_1_return_value;\n"+
"tot_main_2 += ((hash_1_return_value_inlined_12 + y_main_1) / 2.0 - 0.5) / 256.0;\n"+
"fragColor_2 = vec4(tot_main_2, 1.0);\n"+
"fragColor_2.w = 1.0;\n"+
"fragColor += round(clamp(fragColor_2, vec4(0.0), vec4(1.0)) * 255.0);\n"+
"fragColor /= vec4(2.0 * 255.0);\n"+
"}\n"+
"";


var bug6Src = "#version 300 es\n"+
"precision highp float;\n"+
"\n"+
"layout(location = 0) out vec4 fragColor;\n"+
"\n"+
"uniform vec2 iResolution;\n"+
"\n"+
"uniform float iTime;\n"+
"\n"+
"uniform float iTimeDelta;\n"+
"\n"+
"uniform vec4 iMouse;\n"+
"\n"+
"uniform int iFrame;\n"+
"\n"+
"vec4 fragColor_1;\n"+
"\n"+
"vec4 fragColor_2;\n"+
"\n"+
"const vec3 backgroundColor = vec3(0.2, 0.4, 0.6) * 0.09;\n"+
"\n"+
"float hash(float n)\n"+
"{\n"+
"return fract(sin(n) * 687.3123);\n"+
"}\n"+
"float noise(vec2 x)\n"+
"{\n"+
"vec2 p = floor(x);\n"+
"vec2 f = fract(x);\n"+
"f = f * f * (3.0 - 2.0 * f);\n"+
"float n = p.x + p.y * 157.0;\n"+
"return mix(mix(hash(n + 0.0), hash(n + 1.0), f.x), mix(hash(n + 157.0), hash(n + 158.0), f.x), f.y);\n"+
"}\n"+
"const mat2 m2 = mat2(0.80, - 0.60, 0.60, 0.80);\n"+
"\n"+
"float fbm(vec2 p)\n"+
"{\n"+
"float f = 0.0;\n"+
"f += 0.5000 * noise(p);\n"+
"p = m2 * p * 2.02;\n"+
"f += 0.2500 * noise(p);\n"+
"p = m2 * p * 2.03;\n"+
"f += 0.1250 * noise(p);\n"+
"p = m2 * p * 2.01;\n"+
"return f / 0.9375;\n"+
"}\n"+
"float udRoundBox(vec3 p, vec3 b, float r)\n"+
"{\n"+
"return length(max(abs(p) - b, 0.0)) - r;\n"+
"}\n"+
"float sdBox(vec3 p, vec3 b)\n"+
"{\n"+
"vec3 d = abs(p) - b;\n"+
"return min(max(d.x, max(d.y, d.z)), 0.0) + length(max(d, 0.0));\n"+
"}\n"+
"float sdSphere(vec3 p, float s)\n"+
"{\n"+
"return length(p) - s;\n"+
"}\n"+
"float sdCylinder(vec3 p, vec2 h)\n"+
"{\n"+
"vec2 d = abs(vec2(length(p.xz), p.y)) - h;\n"+
"return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n"+
"}\n"+
"float opU(float d2, float d1)\n"+
"{\n"+
"return min(d1, d2);\n"+
"}\n"+
"float opS(float d2, float d1)\n"+
"{\n"+
"return max(- d1, d2);\n"+
"}\n"+
"float smin(float a, float b, float k)\n"+
"{\n"+
"return - log(exp(- k * a) + exp(- k * b)) / k;\n"+
"}\n"+
"float mapCar(vec3 p0)\n"+
"{\n"+
"vec3 p = p0 + vec3(0.0, 1.24, 0.0);\n"+
"float r = length(p.yz);\n"+
"float d = length(max(vec3(abs(p.x) - 0.35, r - 1.92, - p.y + 1.4), 0.0)) - 0.05;\n"+
"d = max(d, p.z - 1.0);\n"+
"p = p0 + vec3(0.0, - 0.22, 0.39);\n"+
"p.xz = abs(p.xz) - vec2(0.5300, 0.9600);\n"+
"p.x = abs(p.x);\n"+
"r = length(p.yz);\n"+
"d = smin(d, length(max(vec3(p.x - 0.08, r - 0.25, - p.y - 0.08), 0.0)) - 0.04, 8.0);\n"+
"d = max(d, - max(p.x - 0.165, r - 0.24));\n"+
"float d2 = length(vec2(max(p.x - 0.13, 0.0), r - 0.2)) - 0.02;\n"+
"d = min(d, d2);\n"+
"return d;\n"+
"}\n"+
"float dL;\n"+
"\n"+
"float map_1(const vec3 p)\n"+
"{\n"+
"vec3 pd = p;\n"+
"float d;\n"+
"pd.x = abs(pd.x);\n"+
"pd.z *= - sign(p.x);\n"+
"float ch = hash(floor((pd.z + 18. * (iTime + 95.3)) / 40.));\n"+
"float lh = hash(floor(pd.z / 13.));\n"+
"vec3 pdm = vec3(pd.x, pd.y, mod(pd.z, 10.) - 5.);\n"+
"dL = sdSphere(vec3(pdm.x - 8.1, pdm.y - 4.5, pdm.z), 0.1);\n"+
"dL = opU(dL, sdBox(vec3(pdm.x - 12., pdm.y - 9.5 - lh, mod(pd.z, 91.) - 45.5), vec3(0.2, 4.5, 0.2)));\n"+
"dL = opU(dL, sdBox(vec3(pdm.x - 12., pdm.y - 11.5 + lh, mod(pd.z, 31.) - 15.5), vec3(0.22, 5.5, 0.2)));\n"+
"dL = opU(dL, sdBox(vec3(pdm.x - 12., pdm.y - 8.5 - lh, mod(pd.z, 41.) - 20.5), vec3(0.24, 3.5, 0.2)));\n"+
"if(lh > 0.5)\n"+
"{\n"+
"dL = opU(dL, sdBox(vec3(pdm.x - 12.5, pdm.y - 2.75 - lh, mod(pd.z, 13.) - 6.5), vec3(0.1, 0.25, 3.2)));\n"+
"}\n"+
"vec3 pm = vec3(mod(pd.x + floor(pd.z * 4.) * 0.25, 0.5) - 0.25, pd.y, mod(pd.z, 0.25) - 0.125);\n"+
"d = udRoundBox(pm, vec3(0.245, 0.1, 0.12), 0.005);\n"+
"d = opS(d, - (p.x + 8.));\n"+
"d = opU(d, pd.y);\n"+
"vec3 pdc = vec3(pd.x, pd.y, mod(pd.z + 18. * (iTime + 95.3), 40.) - 20.);\n"+
"if(ch > 0.75)\n"+
"{\n"+
"pdc.x += (ch - 0.75) * 4.;\n"+
"dL = opU(dL, sdSphere(vec3(abs(pdc.x - 5.) - 1.05, pdc.y - 0.55, pdc.z), 0.025));\n"+
"dL = opU(dL, sdSphere(vec3(abs(pdc.x - 5.) - 1.2, pdc.y - 0.65, pdc.z + 6.05), 0.025));\n"+
"d = opU(d, mapCar((pdc - vec3(5., - 0.025, - 2.3)) * 0.45));\n"+
"}\n"+
"d = opU(d, 13. - pd.x);\n"+
"d = opU(d, sdCylinder(vec3(pdm.x - 8.5, pdm.y, pdm.z), vec2(0.075, 4.5)));\n"+
"d = opU(d, dL);\n"+
"return d;\n"+
"}\n"+
"vec3 calcNormalSimple(vec3 pos)\n"+
"{\n"+
"const vec2 e = vec2(1.0, - 1.0) * 0.005;\n"+
"vec3 n = normalize(e.xyy * map_1(pos + e.xyy) + e.yyx * map_1(pos + e.yyx) + e.yxy * map_1(pos + e.yxy) + e.xxx * map_1(pos + e.xxx));\n"+
"return n;\n"+
"}\n"+
"vec3 calcNormal(vec3 pos)\n"+
"{\n"+
"vec3 n = calcNormalSimple(pos);\n"+
"if(pos.y > 0.12)\n"+
"{\n"+
"return n;\n"+
"}\n"+
"vec2 oc = floor(vec2(pos.x + floor(pos.z * 4.) * 0.25, pos.z) * vec2(2., 4.));\n"+
"if(abs(pos.x) < 8.)\n"+
"{\n"+
"oc = pos.xz;\n"+
"}\n"+
"vec3 p = pos * 250.;\n"+
"vec3 xn = 0.05 * vec3(noise(p.xz) - 0.5, 0., noise(p.zx) - 0.5);\n"+
"xn += 0.1 * vec3(fbm(oc.xy) - 0.5, 0., fbm(oc.yx) - 0.5);\n"+
"n = normalize(xn + n);\n"+
"return n;\n"+
"}\n"+
"vec3 int1, int2, nor1;\n"+
"\n"+
"vec4 lint1, lint2;\n"+
"\n"+
"float intersect(vec3 ro, vec3 rd)\n"+
"{\n"+
"const float precis = 0.001;\n"+
"float h = precis * 2.0;\n"+
"float t = 0.;\n"+
"int1 = int2 = vec3(- 500.);\n"+
"lint1 = lint2 = vec4(- 500.);\n"+
"float mld = 100.;\n"+
"for(int i = 0; i < 128; i ++)\n"+
"{\n"+
"h = map_1(ro + rd * t);\n"+
"if(dL < mld)\n"+
"{\n"+
"mld = dL;\n"+
"lint1.xyz = ro + rd * t;\n"+
"lint1.w = abs(dL);\n"+
"}\n"+
"if(h < precis)\n"+
"{\n"+
"int1.xyz = ro + rd * t;\n"+
"break;\n"+
"}\n"+
"t += max(h, precis * 2.);\n"+
"}\n"+
"if(int1.z < - 400. || t > 300.)\n"+
"{\n"+
"float d = - (ro.y + 0.1) / rd.y;\n"+
"if(d > 0.)\n"+
"{\n"+
"int1.xyz = ro + rd * d;\n"+
"}\n"+
"else\n"+
"{\n"+
"return - 1.;\n"+
"}\n"+
"}\n"+
"ro = ro + rd * t;\n"+
"nor1 = calcNormal(ro);\n"+
"ro += 0.01 * nor1;\n"+
"rd = reflect(rd, nor1);\n"+
"t = 0.0;\n"+
"h = precis * 2.0;\n"+
"mld = 100.;\n"+
"for(int i = 0; i < 48; i ++)\n"+
"{\n"+
"h = map_1(ro + rd * t);\n"+
"if(dL < mld)\n"+
"{\n"+
"mld = dL;\n"+
"lint2.xyz = ro + rd * t;\n"+
"lint2.w = abs(dL);\n"+
"}\n"+
"if(h < precis)\n"+
"{\n"+
"int2.xyz = ro + rd * t;\n"+
"return 1.;\n"+
"}\n"+
"t += max(h, precis * 2.);\n"+
"}\n"+
"return 0.;\n"+
"}\n"+
"vec3 shade(vec3 ro, vec3 pos, vec3 nor)\n"+
"{\n"+
"vec3 col = vec3(0.5);\n"+
"if(abs(pos.x) > 15. || abs(pos.x) < 8.)\n"+
"{\n"+
"col = vec3(0.02);\n"+
"}\n"+
"if(pos.y < 0.01)\n"+
"{\n"+
"if(abs(int1.x) < 0.1)\n"+
"{\n"+
"col = vec3(0.9);\n"+
"}\n"+
"if(abs(abs(int1.x) - 7.4) < 0.1)\n"+
"{\n"+
"col = vec3(0.9);\n"+
"}\n"+
"}\n"+
"float sh = clamp(dot(nor, normalize(vec3(- 0.3, 0.3, - 0.5))), 0., 1.);\n"+
"col *= (sh * backgroundColor);\n"+
"if(abs(pos.x) > 12.9 && pos.y > 9.)\n"+
"{\n"+
"float ha = hash(133.1234 * floor(pos.y / 3.) + floor((pos.z) / 3.));\n"+
"if(ha > 0.95)\n"+
"{\n"+
"col = ((ha - 0.95) * 10.) * vec3(1., 0.7, 0.4);\n"+
"}\n"+
"}\n"+
"col = mix(backgroundColor, col, exp(min(max(0.1 * pos.y, 0.25) - 0.065 * distance(pos, ro), 0.)));\n"+
"return col;\n"+
"}\n"+
"vec3 getLightColor(vec3 pos)\n"+
"{\n"+
"vec3 lcol = vec3(1., .7, .5);\n"+
"vec3 pd = pos;\n"+
"pd.x = abs(pd.x);\n"+
"pd.z *= - sign(pos.x);\n"+
"float ch = hash(floor((pd.z + 18. * (iTime + 95.3)) / 40.));\n"+
"vec3 pdc = vec3(pd.x, pd.y, mod(pd.z + 18. * (iTime + 95.3), 40.) - 20.);\n"+
"if(ch > 0.75)\n"+
"{\n"+
"pdc.x += (ch - 0.75) * 4.;\n"+
"if(sdSphere(vec3(abs(pdc.x - 5.) - 1.05, pdc.y - 0.55, pdc.z), 0.25) < 2.)\n"+
"{\n"+
"lcol = vec3(1., 0.05, 0.01);\n"+
"}\n"+
"}\n"+
"if(pd.y > 2. && abs(pd.x) > 10. && pd.y < 5.)\n"+
"{\n"+
"float fl = floor(pd.z / 13.);\n"+
"lcol = 0.4 * lcol + 0.5 * vec3(hash(.1562 + fl), hash(.423134 + fl), 0.);\n"+
"}\n"+
"if(abs(pd.x) > 10. && pd.y > 5.)\n"+
"{\n"+
"float fl = floor(pd.z / 2.);\n"+
"lcol = 0.5 * lcol + 0.5 * vec3(hash(.1562 + fl), hash(.923134 + fl), hash(.423134 + fl));\n"+
"}\n"+
"return lcol;\n"+
"}\n"+
"float randomStart(vec2 co)\n"+
"{\n"+
"return 0.8 + 0.2 * hash(dot(co, vec2(123.42, 117.853)) * 412.453);\n"+
"}\n"+
"void main_1()\n"+
"{\n"+
"vec2 q = gl_FragCoord.xy / iResolution.xy;\n"+
"vec2 p = - 1.0 + 2.0 * q;\n"+
"p.x *= iResolution.x / iResolution.y;\n"+
"if(q.y < .12 || q.y >= .88)\n"+
"{\n"+
"fragColor_1 = vec4(0., 0., 0., 1.);\n"+
"fragColor_1.w = 1.0;\n"+
"return;\n"+
"}\n"+
"else\n"+
"{\n"+
"float z = (iTime + 95.3);\n"+
"float x = - 10.9 + 1. * sin((iTime + 95.3) * 0.2);\n"+
"vec3 ro = vec3(x, 1.3 + .3 * cos((iTime + 95.3) * 0.26), z - 1.);\n"+
"vec3 ta = vec3(- 8., 1.3 + .4 * cos((iTime + 95.3) * 0.26), z + 4. + cos((iTime + 95.3) * 0.04));\n"+
"vec3 ww = normalize(ta - ro);\n"+
"vec3 uu = normalize(cross(ww, vec3(0.0, 1.0, 0.0)));\n"+
"vec3 vv = normalize(cross(uu, ww));\n"+
"vec3 rd = normalize(- p.x * uu + p.y * vv + 2.2 * ww);\n"+
"vec3 col = backgroundColor;\n"+
"float ints = intersect(ro + randomStart(p) * rd, rd);\n"+
"if(ints > - 0.5)\n"+
"{\n"+
"float r = 0.09;\n"+
"if(int1.y > 0.129)\n"+
"{\n"+
"r = 0.025 * hash(133.1234 * floor(int1.y / 3.) + floor(int1.z / 3.));\n"+
"}\n"+
"if(abs(int1.x) < 8.)\n"+
"{\n"+
"if(int1.y < 0.01)\n"+
"{\n"+
"r = 0.007 * fbm(int1.xz);\n"+
"}\n"+
"else\n"+
"{\n"+
"r = 0.02;\n"+
"}\n"+
"}\n"+
"if(abs(int1.x) < 0.1)\n"+
"{\n"+
"r *= 4.;\n"+
"}\n"+
"if(abs(abs(int1.x) - 7.4) < 0.1)\n"+
"{\n"+
"r *= 4.;\n"+
"}\n"+
"r *= 2.;\n"+
"col = shade(ro, int1.xyz, nor1);\n"+
"if(ints > 0.5)\n"+
"{\n"+
"col += r * shade(int1.xyz, int2.xyz, calcNormalSimple(int2.xyz));\n"+
"}\n"+
"if(lint2.w > 0.)\n"+
"{\n"+
"col += (r * 5. * exp(- lint2.w * 7.0)) * getLightColor(lint2.xyz);\n"+
"}\n"+
"}\n"+
"vec2 st = 256. * (p * vec2(.5, .01) + vec2((iTime + 95.3) * .13 - q.y * .6, (iTime + 95.3) * .13));\n"+
"float f = noise(st) * noise(st * 0.773) * 1.55;\n"+
"f = 0.25 + clamp(pow(max(abs(f), 1e-9), 13.0) * 13.0, 0.0, q.y * .14);\n"+
"if(lint1.w > 0.)\n"+
"{\n"+
"col += (f * 5. * exp(- lint1.w * 7.0)) * getLightColor(lint1.xyz);\n"+
"}\n"+
"col += 0.25 * f * (0.2 + backgroundColor);\n"+
"col = pow(max(clamp(col, 0.0, 1.0), 1e-9), vec3(0.4545));\n"+
"col *= 1.2 * vec3(1., 0.99, 0.95);\n"+
"col = clamp(1.06 * col - 0.03, 0., 1.);\n"+
"q.y = (q.y - .12) * (1. / 0.76);\n"+
"col *= 0.5 + 0.5 * pow(max(16.0 * q.x * q.y * (1.0 - q.x) * (1.0 - q.y), 1e-9), 0.1);\n"+
"fragColor_1 = vec4(col, 1.0);\n"+
"}\n"+
"fragColor_1.w = 1.0;\n"+
"}\n"+
"\n"+
"float hash_5_2(vec2 p)\n"+
"{\n"+
"return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x))));\n"+
"}\n"+
"float noise_1_2(vec2 x)\n"+
"{\n"+
"vec2 i = floor(x);\n"+
"vec2 f = fract(x);\n"+
"float a = hash_5_2(i);\n"+
"float b = hash_5_2(i + vec2(1.0, 0.0));\n"+
"float c = hash_5_2(i + vec2(0.0, 1.0));\n"+
"float d = hash_5_2(i + vec2(1.0, 1.0));\n"+
"vec2 u = f * f * (3.0 - 2.0 * f);\n"+
"return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;\n"+
"}\n"+
"float fbm_3(vec2 p)\n"+
"{\n"+
"const mat2 m2 = mat2(0.8, - 0.6, 0.6, 0.8);\n"+
"float f = 0.5000 * noise_1_2(p);\n"+
"p = m2 * p * 2.02;\n"+
"f += 0.2500 * noise_1_2(p);\n"+
"p = m2 * p * 2.03;\n"+
"f += 0.1250 * noise_1_2(p);\n"+
"p = m2 * p * 2.01;\n"+
"f += 0.0625 * noise_1_2(p);\n"+
"return f;\n"+
"}\n"+
"float sdSphere_2(vec3 p, float s)\n"+
"{\n"+
"return length(p) - s;\n"+
"}\n"+
"float sdCapsule(vec3 p, vec3 a, vec3 b, float r)\n"+
"{\n"+
"vec3 pa = p - a;\n"+
"vec3 ba = b - a;\n"+
"float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);\n"+
"return length(pa - ba * h) - r;\n"+
"}\n"+
"vec2 opU(vec2 d1, vec2 d2)\n"+
"{\n"+
"return (d1.x < d2.x) ? d1 : d2;\n"+
"}\n"+
"vec2 opS(vec2 d1, vec2 d2)\n"+
"{\n"+
"return (- d1.x > d2.x) ? vec2(- d1.x, d1.y) : d2;\n"+
"}\n"+
"vec2 opSU(vec2 d1, vec2 d2, float k)\n"+
"{\n"+
"float h = clamp(0.5 + 0.5 * (d2.x - d1.x) / k, 0.0, 1.0);\n"+
"return vec2(mix(d2.x, d1.x, h) - k * h * (1.0 - h), d1.y);\n"+
"}\n"+
"mat2 rot(float th)\n"+
"{\n"+
"vec2 a = sin(vec2(1.5707963, 0) + th);\n"+
"return mat2(a, - a.y, a.x);\n"+
"}\n"+
"vec2 thinkingFace(vec3 p)\n"+
"{\n"+
"vec2 face = vec2(sdSphere_2(p, 1.0), 1.0);\n"+
"vec3 q = p;\n"+
"q.x = abs(q.x);\n"+
"q.xz *= rot(- .3);\n"+
"q.yz *= rot(- 0.25 + 0.05 * step(0.0, p.x));\n"+
"q.y *= 0.8;\n"+
"q.z *= 2.0;\n"+
"q.z -= 2.0;\n"+
"vec2 eye = vec2(sdSphere_2(q, .11) * 0.5, 2.0);\n"+
"q = p;\n"+
"q.x = abs(q.x);\n"+
"q.xz *= rot(- .35);\n"+
"q.yz *= rot(- 0.62 + 0.26 * step(0.0, p.x) + pow(max(abs(q.x), 1e-9), 1.7) * 0.5);\n"+
"q.z -= 1.0;\n"+
"vec2 brow = vec2(sdCapsule(q, vec3(0.2, 0.0, 0.0), vec3(- .2, 0.0, 0.0), .05) * 0.5, 4.0);\n"+
"q = p;\n"+
"q.yz *= rot(0.2 + pow(max(abs(p.x), 1e-9), 1.8));\n"+
"q.xy *= rot(- 0.25);\n"+
"q.z -= 1.0;\n"+
"vec2 mouth = vec2(sdCapsule(q, vec3(0.2, 0.0, 0.0), vec3(- .2, 0.0, 0.0), .045), 4.0);\n"+
"p -= vec3(- .25, - .73, 1.0);\n"+
"p.xy *= rot(0.2);\n"+
"q = p;\n"+
"q = (q * vec3(1.2, 1.0, 2.0));\n"+
"q -= vec3(0.0, 0.01, 0.0);\n"+
"vec2 hand = vec2(sdSphere_2(q, .3) * 0.5, 3.0);\n"+
"q = p;\n"+
"vec2 finger1 = vec2(sdCapsule(q - vec3(0.3, 0.2, 0.02), vec3(0.2, 0.0, 0.0), vec3(- .2, 0.0, 0.0), .07), 3.0);\n"+
"vec2 finger2 = vec2(sdCapsule(q * vec3(1.2, 1.0, .8) - vec3(0.2, 0.06, 0.02), vec3(0.1, 0.0, 0.0), vec3(- .1, 0.0, 0.0), .08), 3.0);\n"+
"vec2 finger3 = vec2(sdCapsule(q * vec3(1.2, 1.0, .8) - vec3(0.15, - 0.08, 0.015), vec3(0.1, 0.0, 0.0), vec3(- .1, 0.0, 0.0), .08), 3.0);\n"+
"vec2 finger4 = vec2(sdCapsule(q * vec3(1.2, 1.0, .9) - vec3(0.1, - 0.2, - 0.01), vec3(0.1, 0.0, 0.0), vec3(- .1, 0.0, 0.0), .08), 3.0);\n"+
"p -= vec3(- 0.1, 0.3, 0.0);\n"+
"q = p;\n"+
"q.x -= q.y * 0.7;\n"+
"vec2 finger5 = vec2(sdCapsule(p, vec3(0.0, - 0.2, 0.0) - q, vec3(0.0, 0.2, 0.0), .1 - p.y * 0.15), 3.0);\n"+
"vec2 finger = opU(finger1, opU(finger5, opSU(finger2, opSU(finger3, finger4, 0.035), 0.035)));\n"+
"hand = opSU(hand, finger, 0.02);\n"+
"vec2 d = opU(eye, face);\n"+
"d = opU(brow, d);\n"+
"d = opS(mouth, d);\n"+
"d = opU(hand, d);\n"+
"return d;\n"+
"}\n"+
"float Noise2d(vec2 x)\n"+
"{\n"+
"float xhash = cos(x.x * 37.0);\n"+
"float yhash = cos(x.y * 57.0);\n"+
"return fract(415.92653 * (xhash + yhash));\n"+
"}\n"+
"float NoisyStarField(vec2 vSamplePos, float fThreshhold)\n"+
"{\n"+
"float StarVal = Noise2d(vSamplePos);\n"+
"if(StarVal >= fThreshhold)\n"+
"{\n"+
"StarVal = pow(max((StarVal - fThreshhold) / (1.0 - fThreshhold), 1e-9), 6.0);\n"+
"}\n"+
"else\n"+
"{\n"+
"StarVal = 0.0;\n"+
"}\n"+
"return StarVal;\n"+
"}\n"+
"vec2 map(vec3 p)\n"+
"{\n"+
"vec2 think = thinkingFace(p - vec3(1., 3.5, 1.));\n"+
"return think;\n"+
"}\n"+
"float hash_6(float n)\n"+
"{\n"+
"return fract(sin(n) * 43758.5453);\n"+
"}\n"+
"float noise_2(vec3 x)\n"+
"{\n"+
"vec3 p = floor(x);\n"+
"vec3 f = fract(x);\n"+
"f = f * f * (3.0 - 2.0 * f);\n"+
"float n = p.x + p.y * 57.0 + 113.0 * p.z;\n"+
"float res = mix(mix(mix(hash_6(n + 0.0), hash_6(n + 1.0), f.x), mix(hash_6(n + 57.0), hash_6(n + 58.0), f.x), f.y), mix(mix(hash_6(n + 113.0), hash_6(n + 114.0), f.x), mix(hash_6(n + 170.0), hash_6(n + 171.0), f.x), f.y), f.z);\n"+
"return res;\n"+
"}\n"+
"mat3 m = mat3(0.00, 0.80, 0.60, - 0.80, 0.36, - 0.48, - 0.60, - 0.48, 0.64);\n"+
"\n"+
"float fbm_4(vec3 pos)\n"+
"{\n"+
"float o = 0.;\n"+
"for(int i = 0; i < 5; i ++)\n"+
"{\n"+
"o = o * 2. + abs(noise_2(pos) * 2. - 1.);\n"+
"pos = m * pos * 2.;\n"+
"}\n"+
"return o / 40.0;\n"+
"}\n"+
"vec3 normal(vec3 pos, float eps)\n"+
"{\n"+
"vec2 e = vec2(1.0, - 1.0) * 0.5773 * eps;\n"+
"float intensity = 0.02;\n"+
"float n1 = fbm_4(pos * 1.5 + e.xyy) * intensity;\n"+
"float n2 = fbm_4(pos * 1.5 + e.yyx) * intensity;\n"+
"float n3 = fbm_4(pos * 1.5 + e.yxy) * intensity;\n"+
"float n4 = fbm_4(pos * 1.5 + e.xxx) * intensity;\n"+
"return normalize(e.xyy * (map(pos + e.xyy).x + n1) + e.yyx * (map(pos + e.yyx).x + n2) + e.yxy * (map(pos + e.yxy).x + n3) + e.xxx * (map(pos + e.xxx).x + n4));\n"+
"}\n"+
"float shadow(vec3 p, vec3 l)\n"+
"{\n"+
"float t = 0.15;\n"+
"float t_max = 20.0;\n"+
"float res = 1.0;\n"+
"for(int i = 0; i < 16; ++ i)\n"+
"{\n"+
"if(t > t_max)\n"+
"{\n"+
"break;\n"+
"}\n"+
"float d = map(p + t * l).x;\n"+
"if(d < 0.01)\n"+
"{\n"+
"return 0.0;\n"+
"}\n"+
"t += d;\n"+
"res = min(res, 1.0 * d / t);\n"+
"}\n"+
"return res;\n"+
"}\n"+
"vec3 sunDir;\n"+
"\n"+
"vec3 fakeSky(vec3 rd)\n"+
"{\n"+
"vec3 moning = mix(vec3(0.85, 0.5, 0.2) * 1.1, vec3(0.2, 0.5, 0.85) * 1.1, rd.y);\n"+
"vec3 noon = mix(vec3(0.2, 0.5, 0.85) * 1.3, vec3(0.05, 0.2, 0.7), rd.y);\n"+
"vec3 col = noon;\n"+
"col = mix(moning, noon, 1.0);\n"+
"vec3 cloud = mix(mix(vec3(1.0, 0.95, 1.0), vec3(1.0, 0.2, 0.1), 1.0 - 1.0), vec3(0.02), 0.0);\n"+
"col = mix(col, cloud, 0.75 * step(0.0, rd.y) * smoothstep(0.4, 0.9, fbm_3(vec2((iTime + 1.42), 0.0) + (rd.xz / rd.y) * 3.0)));\n"+
"return col * 3.0;\n"+
"}\n"+
"float ndfGGX(float NdotH, float roughness)\n"+
"{\n"+
"float alpha = roughness * roughness;\n"+
"float alphaSq = alpha * alpha;\n"+
"float denom = (NdotH * NdotH) * (alphaSq - 1.0) + 1.0;\n"+
"return alphaSq / (3.1415926 * denom * denom);\n"+
"}\n"+
"float gaSchlickG1(float theta, float k)\n"+
"{\n"+
"return theta / (theta * (1.0 - k) + k);\n"+
"}\n"+
"float gaSchlickGGX(float NdotL, float NdotV, float roughness)\n"+
"{\n"+
"float r = roughness + 1.0;\n"+
"float k = (r * r) / 8.0;\n"+
"return gaSchlickG1(NdotL, k) * gaSchlickG1(NdotV, k);\n"+
"}\n"+
"vec3 fresnelSchlick_roughness(vec3 F0, float cosTheta, float roughness)\n"+
"{\n"+
"return F0 + (max(vec3(1.0 - roughness), F0) - F0) * pow(max(1.0 - cosTheta, 1e-9), 5.0);\n"+
"}\n"+
"vec3 shade(vec3 pos, vec3 albedo, float metalness, float roughness, vec3 N, vec3 V, vec3 L, vec3 Lradiance)\n"+
"{\n"+
"vec3 H = normalize(L + V);\n"+
"float NdotV = max(0.0, dot(N, V));\n"+
"float NdotL = max(0.0, dot(N, L));\n"+
"float NdotH = max(0.0, dot(N, H));\n"+
"vec3 F0 = mix(vec3(0.04), albedo, metalness);\n"+
"vec3 F = fresnelSchlick_roughness(F0, max(0.0, dot(H, L)), roughness);\n"+
"float D = ndfGGX(NdotH, roughness);\n"+
"float G = gaSchlickGGX(NdotL, NdotV, roughness);\n"+
"vec3 kd = mix(vec3(1.0) - F, vec3(0.0), metalness);\n"+
"float shadow = shadow(pos, L);\n"+
"vec3 diffuseBRDF = kd * albedo / 3.1415926;\n"+
"vec3 specularBRDF = (F * D * G) / max(0.0001, 4.0 * NdotL * NdotV);\n"+
"return (diffuseBRDF + specularBRDF) * Lradiance * NdotL * shadow;\n"+
"}\n"+
"vec3 EnvBRDFApprox(vec3 SpecularColor, float Roughness, float NoV)\n"+
"{\n"+
"const vec4 c0 = vec4(- 1, - 0.0275, - 0.572, 0.022);\n"+
"const vec4 c1 = vec4(1, 0.0425, 1.04, - 0.04);\n"+
"vec4 r = Roughness * c0 + c1;\n"+
"float a004 = min(r.x * r.x, exp2(- 9.28 * NoV)) * r.x + r.y;\n"+
"vec2 AB = vec2(- 1.04, 1.04) * a004 + r.zw;\n"+
"return SpecularColor * AB.x + AB.y;\n"+
"}\n"+
"float so(float NoV, float ao, float roughness)\n"+
"{\n"+
"return clamp(pow(max(NoV + ao, 1e-9), exp2(- 16.0 * roughness - 1.0)) - 1.0 + ao, 0.0, 1.0);\n"+
"}\n"+
"vec3 calcAmbient(vec3 pos, vec3 albedo, float metalness, float roughness, vec3 N, vec3 V, float t)\n"+
"{\n"+
"vec3 F0 = mix(vec3(0.04), albedo, metalness);\n"+
"vec3 F = fresnelSchlick_roughness(F0, max(0.0, dot(N, V)), roughness);\n"+
"vec3 kd = mix(vec3(1.0) - F, vec3(0.0), metalness);\n"+
"float aoRange = t / 40.0;\n"+
"float occlusion = max(0.0, 1.0 - map(pos + N * aoRange).x / aoRange);\n"+
"occlusion = min(exp2(- .8 * pow(max(occlusion, 1e-9), 2.0)), 1.0);\n"+
"vec3 ambientColor = mix(vec3(0.2, 0.5, 0.85) * 0.5, vec3(0.2, 0.25, 0.8) * 0.75, 0.5 + 0.5 * N.y);\n"+
"ambientColor = mix(vec3(0.3, 0.15, 0.05), ambientColor, 1.0 - smoothstep(0.2, - 0.5, sunDir.y));\n"+
"ambientColor = mix(vec3(0.03), ambientColor, 1.0 - smoothstep(- 0.2, - 0.5, sunDir.y));\n"+
"vec3 diffuseAmbient = kd * albedo * ambientColor * min(1.0, 0.75 + 0.5 * N.y) * 3.0;\n"+
"vec3 R = reflect(- V, N);\n"+
"vec3 col = mix(fakeSky(R) * pow(max(1.0 - max(- R.y, 0.0), 1e-9), 4.0), ambientColor, pow(max(roughness, 1e-9), 0.5));\n"+
"vec3 ref = EnvBRDFApprox(F0, roughness, max(dot(N, V), 0.0));\n"+
"vec3 specularAmbient = col * ref;\n"+
"diffuseAmbient *= occlusion;\n"+
"specularAmbient *= so(max(0.0, dot(N, V)), occlusion, roughness);\n"+
"return vec3(diffuseAmbient + specularAmbient);\n"+
"}\n"+
"vec3 materialize(vec3 p, vec3 ray, float depth, vec2 mat)\n"+
"{\n"+
"vec3 col = vec3(0.0);\n"+
"vec3 nor = normal(p, 0.001);\n"+
"vec3 sky = fakeSky(ray);\n"+
"if(depth > 2000.0)\n"+
"{\n"+
"col = sky;\n"+
"}\n"+
"else\n"+
"{\n"+
"float checker = mod(floor(p.x) + floor(p.z), 2.0);\n"+
"float roughness;\n"+
"float metalness;\n"+
"if(mat.y == 1.0)\n"+
"{\n"+
"col = pow(max(vec3(1.0, 204.0 / 255.0, 77.0 / 255.0), 1e-9), vec3(2.2)) * 0.6;\n"+
"roughness = 0.5;\n"+
"metalness = 0.0;\n"+
"}\n"+
"else\n"+
"{\n"+
"if(mat.y == 2.0)\n"+
"{\n"+
"col = pow(max(vec3(102.0 / 255.0, 69.0 / 255.0, 0.0), 1e-9), vec3(2.2)) * 0.6;\n"+
"roughness = 0.1;\n"+
"metalness = 0.0;\n"+
"}\n"+
"else\n"+
"{\n"+
"if(mat.y == 3.0)\n"+
"{\n"+
"col = pow(max(vec3(244.0 / 255.0, 144.0 / 255.0, 12.0 / 255.0), 1e-9), vec3(2.2)) * 0.7;\n"+
"roughness = 0.8;\n"+
"metalness = 0.0;\n"+
"}\n"+
"else\n"+
"{\n"+
"if(mat.y == 4.0)\n"+
"{\n"+
"col = pow(max(vec3(102.0 / 255.0, 69.0 / 255.0, 0.0), 1e-9), vec3(2.2)) * 0.8;\n"+
"roughness = 0.6;\n"+
"metalness = 0.0;\n"+
"}\n"+
"}\n"+
"}\n"+
"}\n"+
"vec3 result = vec3(0.);\n"+
"result += shade(p, col, metalness, roughness, nor, - ray, normalize(sunDir), vec3(1.0, 0.98, 0.95) * 100.) * 1.0;\n"+
"result += shade(p, col, metalness, roughness, nor, - ray, normalize(- sunDir), vec3(1.0, 0.98, 0.95) * 2.) * 0.0;\n"+
"result += calcAmbient(p, col, metalness, roughness, nor, - ray, depth);\n"+
"col = result;\n"+
"}\n"+
"float fo = 1.0 - exp(- 0.0015 * depth);\n"+
"col = mix(col, sky, fo);\n"+
"return col;\n"+
"}\n"+
"vec3 trace(vec3 p, vec3 ray)\n"+
"{\n"+
"float t = 0.0;\n"+
"vec3 pos;\n"+
"vec2 mat;\n"+
"for(int i = 0; i < 100; i ++)\n"+
"{\n"+
"pos = p + ray * t;\n"+
"mat = map(pos);\n"+
"if(mat.x < 0.00001)\n"+
"{\n"+
"break;\n"+
"}\n"+
"t += mat.x;\n"+
"}\n"+
"return materialize(pos, ray, t, mat);\n"+
"}\n"+
"mat3 camera(vec3 ro, vec3 ta, float cr)\n"+
"{\n"+
"vec3 cw = normalize(ta - ro);\n"+
"vec3 cp = vec3(sin(cr), cos(cr), 0.);\n"+
"vec3 cu = normalize(cross(cw, cp));\n"+
"vec3 cv = normalize(cross(cu, cw));\n"+
"return mat3(cu, cv, cw);\n"+
"}\n"+
"float luminance(vec3 col)\n"+
"{\n"+
"return dot(vec3(0.298912, 0.586611, 0.114478), col);\n"+
"}\n"+
"vec3 reinhard(vec3 col, float exposure, float white)\n"+
"{\n"+
"col *= exposure;\n"+
"white *= exposure;\n"+
"float lum = luminance(col);\n"+
"return (col * (lum / (white * white) + 1.0) / (lum + 1.0));\n"+
"}\n"+
"void main_2()\n"+
"{\n"+
"vec2 p = (gl_FragCoord.xy * 2.0 - iResolution.xy) / min(iResolution.x, iResolution.y);\n"+
"float t = (iTime + 1.42) * 3.1415926 * 2.0 / 6.0 - 3.1415926 * 0.5;\n"+
"sunDir = normalize(vec3(.5, sin(t), cos(t)));\n"+
"vec3 ro = vec3(- 0.43 * 5.0, 1.3, 0.9 * 5.0);\n"+
"vec3 ta = vec3(2.4, 4.6, - 0.3);\n"+
"mat3 c = camera(ro, ta, 0.0);\n"+
"vec3 ray = c * normalize(vec3(p, 3.5));\n"+
"vec3 col = trace(ro, ray);\n"+
"col = reinhard(col, .6, 30.0);\n"+
"col = pow(max(col, 1e-9), vec3(1.0 / 2.2));\n"+
"fragColor_2 = vec4(col, 1.0);\n"+
"fragColor_2.w = 1.0;\n"+
"}\n"+
"\n"+
"void main()\n"+
"{\n"+
"fragColor = vec4(0.0);\n"+
"main_1();\n"+
"fragColor += round(clamp(fragColor_1, vec4(0.0), vec4(1.0)) * 255.0);\n"+
"main_2();\n"+
"fragColor = mix(fragColor_2, fragColor, iTime);\n"+
"}\n"+
"";
