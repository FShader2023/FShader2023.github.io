// FRAGMENT SHADER BEGIN

// GLSL BEGIN

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


// GLSL END


// INITIAL HLSL BEGIN

#pragma warning( disable: 3556 3571 )
float float_ctor_int(int x0)
{
    return float(x0);
}
float2 vec2_ctor(float x0, float x1)
{
    return float2(x0, x1);
}
float2 vec2_ctor_int(float x0, int x1)
{
    return float2(x0, x1);
}
float3 vec3_ctor(float x0)
{
    return float3(x0, x0, x0);
}
float3 vec3_ctor(float x0, float x1, float x2)
{
    return float3(x0, x1, x2);
}
float3 vec3_ctor(float x0, float2 x1)
{
    return float3(x0, x1);
}
float3 vec3_ctor(float2 x0, float x1)
{
    return float3(x0, x1);
}
float3 vec3_ctor_int(float x0, int x1, float x2)
{
    return float3(x0, x1, x2);
}
float3x3 mat3_ctor(float3 x0, float3 x1, float3 x2)
{
    return float3x3(x0, x1, x2);
}
float4 vec4_ctor(float3 x0, float x1)
{
    return float4(x0, x1);
}
float4 vec4_ctor_int(float3 x0, int x1)
{
    return float4(x0, x1);
}
// Uniforms

uniform float2 _iResolution : register(c0);
uniform float _iTime : register(c1);
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

cbuffer DriverConstants : register(b1)
{
    float4 dx_ViewCoords : packoffset(c1);
    float2 dx_FragCoordOffset : packoffset(c3);
    float3 dx_DepthFront : packoffset(c2);
    float2 dx_ViewScale : packoffset(c3.z);
};

#define GL_USES_FRAG_COORD
float mod_emu(float x, float y)
{
    return x - y * floor(x / y);
}


float3 mod_emu(float3 x, float3 y)
{
    return x - y * floor(x / y);
}


static bool _live_tu_has_executed = {false};
static float4 _fragColor_1 = {0, 0, 0, 0};
static float4 _fragColor_2 = {0, 0, 0, 0};
static float _time_2 = {0};
@@ PIXEL OUTPUT @@

PS_OUTPUT main(@@ PIXEL MAIN PARAMETERS @@){
@@ MAIN PROLOGUE @@
float _an_mainImage_15616 = {0};
float3 _ro_mainImage_15617 = {0, 0, 0};
float3 _ta_mainImage_15618 = {0, 0, 0};
float3 _ro_setCamera_15619 = {0, 0, 0};
float3 _ta_setCamera_15620 = {0, 0, 0};
float _cr_setCamera_15621 = {0};
bool _setCamera_has_returned_15622 = {0};
float3x3 _setCamera_return_value_15623 = {0, 0, 0, 0, 0, 0, 0, 0, 0};
float3 _cw_setCamera_15624 = {0, 0, 0};
float3 _cp_setCamera_15625 = {0, 0, 0};
float3 _cu_setCamera_15626 = {0, 0, 0};
float3 _cv_setCamera_15627 = {0, 0, 0};
float3x3 _setCamera_return_value_inlined_13_15628 = {0, 0, 0, 0, 0, 0, 0, 0, 0};
float3x3 _ca_mainImage_15629 = {0, 0, 0, 0, 0, 0, 0, 0, 0};
int _technique_mainImage_15630 = {0};
float3 _tot_mainImage_15631 = {0, 0, 0};
int _m_mainImage_15632 = {0};
int _n_mainImage_15633 = {0};
float2 _o_mainImage_15634 = {0, 0};
float2 _p_mainImage_15635 = {0, 0};
float3 _rd_mainImage_15636 = {0, 0, 0};
float3 _ro_render_15637 = {0, 0, 0};
float3 _rd_render_15638 = {0, 0, 0};
int _technique_render_15639 = {0};
bool _render_has_returned_15640 = {0};
float3 _render_return_value_15641 = {0, 0, 0};
float3 _col_render_15642 = {0, 0, 0};
float3 _ro_castRay_15643 = {0, 0, 0};
float3 _rd_castRay_15644 = {0, 0, 0};
bool _castRay_has_returned_15645 = {0};
float _castRay_return_value_15646 = {0};
float _tmin_castRay_15647 = {0};
float _tmax_castRay_15648 = {0};
float _tp1_castRay_15649 = {0};
float _tp2_castRay_15650 = {0};
float _t_castRay_15651 = {0};
int _i_castRay_15652 = {0};
float _precis_castRay_15653 = {0};
float3 _pos_map_15654 = {0, 0, 0};
bool _map_has_returned_15655 = {0};
float _map_return_value_15656 = {0};
float3 _qos_map_15657 = {0, 0, 0};
float3 _p_sdPlane_15658 = {0, 0, 0};
bool _sdPlane_has_returned_15659 = {0};
float _sdPlane_return_value_15660 = {0};
float _sdPlane_return_value_inlined_0_15661 = {0};
float3 _p_sdBox_15662 = {0, 0, 0};
float3 _b_sdBox_15663 = {0, 0, 0};
bool _sdBox_has_returned_15664 = {0};
float _sdBox_return_value_15665 = {0};
float3 _d_sdBox_15666 = {0, 0, 0};
float _sdBox_return_value_inlined_1_15667 = {0};
float _map_return_value_inlined_7_15668 = {0};
float _res_castRay_15669 = {0};
float _castRay_return_value_inlined_9_15670 = {0};
float _t_render_15671 = {0};
float3 _pos_render_15672 = {0, 0, 0};
float3 _pos_calcNormal_15673 = {0, 0, 0};
bool _calcNormal_has_returned_15674 = {0};
float3 _calcNormal_return_value_15675 = {0, 0, 0};
float2 _e_calcNormal_15676 = {0, 0};
float _map_return_value_inlined_3_15677 = {0};
float _map_return_value_inlined_4_15678 = {0};
float _map_return_value_inlined_5_15679 = {0};
float _map_return_value_inlined_6_15680 = {0};
float3 _calcNormal_return_value_inlined_10_15681 = {0, 0, 0};
float3 _nor_render_15682 = {0, 0, 0};
float3 _mate_render_15683 = {0, 0, 0};
float3 _lig_render_15684 = {0, 0, 0};
float3 _hal_render_15685 = {0, 0, 0};
float3 _ro_calcSoftshadow_15686 = {0, 0, 0};
float3 _rd_calcSoftshadow_15687 = {0, 0, 0};
float _mint_calcSoftshadow_15688 = {0};
float _tmax_calcSoftshadow_15689 = {0};
int _technique_calcSoftshadow_15690 = {0};
bool _calcSoftshadow_has_returned_15691 = {0};
float _calcSoftshadow_return_value_15692 = {0};
float _res_calcSoftshadow_15693 = {0};
float _t_calcSoftshadow_15694 = {0};
float _ph_calcSoftshadow_15695 = {0};
int _i_calcSoftshadow_15696 = {0};
float _map_return_value_inlined_2_15697 = {0};
float _h_calcSoftshadow_15698 = {0};
float _y_calcSoftshadow_15699 = {0};
float _d_calcSoftshadow_15700 = {0};
float _calcSoftshadow_return_value_inlined_11_15701 = {0};
float _dif_render_15702 = {0};
float _spe_render_15703 = {0};
float3 _pos_calcAO_15704 = {0, 0, 0};
float3 _nor_calcAO_15705 = {0, 0, 0};
bool _calcAO_has_returned_15706 = {0};
float _calcAO_return_value_15707 = {0};
float _occ_calcAO_15708 = {0};
float _sca_calcAO_15709 = {0};
int _i_calcAO_15710 = {0};
float _h_calcAO_15711 = {0};
float _map_return_value_inlined_8_15712 = {0};
float _d_calcAO_15713 = {0};
float _calcAO_return_value_inlined_12_15714 = {0};
float _occ_render_15715 = {0};
float _amb_render_15716 = {0};
float3 _render_return_value_inlined_14_15717 = {0, 0, 0};
float3 _col_mainImage_15718 = {0, 0, 0};
(_an_mainImage_15616 = (12.0 - sin((0.1 * _iTime))));
(_ro_mainImage_15617 = vec3_ctor((3.0 * cos((0.1 * _an_mainImage_15616))), 1.0, (-3.0 * sin((0.1 * _an_mainImage_15616)))));
(_ta_mainImage_15618 = float3(0.0, -0.40000001, 0.0));
(_ro_setCamera_15619 = _ro_mainImage_15617);
(_ta_setCamera_15620 = _ta_mainImage_15618);
(_cr_setCamera_15621 = 0.0);
(_setCamera_has_returned_15622 = false);
(_cw_setCamera_15624 = normalize((_ta_setCamera_15620 - _ro_setCamera_15619)));
(_cp_setCamera_15625 = vec3_ctor(sin(_cr_setCamera_15621), cos(_cr_setCamera_15621), 0.0));
(_cu_setCamera_15626 = normalize(cross(_cw_setCamera_15624, _cp_setCamera_15625)));
(_cv_setCamera_15627 = normalize(cross(_cu_setCamera_15626, _cw_setCamera_15624)));
(_setCamera_return_value_15623 = mat3_ctor(_cu_setCamera_15626, _cv_setCamera_15627, _cw_setCamera_15624));
(_setCamera_has_returned_15622 = true);
(_setCamera_return_value_inlined_13_15628 = _setCamera_return_value_15623);
(_ca_mainImage_15629 = _setCamera_return_value_inlined_13_15628);
int s1690 = {0};
if ((frac((_iTime / 2.0)) > 0.5))
{
(s1690 = 1);
}
else
{
(s1690 = 0);
}
(_technique_mainImage_15630 = s1690);
(_tot_mainImage_15631 = float3(0.0, 0.0, 0.0));
{ for((_m_mainImage_15632 = 0); (_m_mainImage_15632 < 2); (_m_mainImage_15632++))
{
{ for((_n_mainImage_15633 = (0 + 0)); (_n_mainImage_15633 < 2); (_n_mainImage_15633++))
{
(_o_mainImage_15634 = (((vec2_ctor(float_ctor_int(_m_mainImage_15632), float_ctor_int(_n_mainImage_15633)) / 2.0) - 0.5) + float2(0.0, 0.0)));
(_p_mainImage_15635 = ((((-_iResolution.xy) + (2.0 * (gl_FragCoord.xy + _o_mainImage_15634))) / _iResolution.y) + float2(0.0, 0.0)));
(_rd_mainImage_15636 = (mul(transpose(_ca_mainImage_15629), normalize(vec3_ctor(_p_mainImage_15635.xy, 2.0))) + float3(0.0, 0.0, 0.0)));
(_ro_render_15637 = (_ro_mainImage_15617 + float3(0.0, 0.0, 0.0)));
(_rd_render_15638 = (_rd_mainImage_15636 + float3(0.0, 0.0, 0.0)));
(_technique_render_15639 = (_technique_mainImage_15630 + 0));
(_render_has_returned_15640 = (false + false));
(_col_render_15642 = (float3(0.0, 0.0, 0.0) + float3(0.0, 0.0, 0.0)));
(_ro_castRay_15643 = (_ro_render_15637 + float3(0.0, 0.0, 0.0)));
(_rd_castRay_15644 = (_rd_render_15638 + float3(0.0, 0.0, 0.0)));
(_castRay_has_returned_15645 = (false + false));
(_tmin_castRay_15647 = (1.0 + 0.0));
(_tmax_castRay_15648 = (20.0 + 0.0));
(_tp1_castRay_15649 = (((0.0 - _ro_castRay_15643.y) / _rd_castRay_15644.y) + 0.0));
if ((_tp1_castRay_15649 > 0.0))
{
(_tmax_castRay_15648 = (min(_tmax_castRay_15648, _tp1_castRay_15649) + 0.0));
}
(_tp2_castRay_15650 = (((1.0 - _ro_castRay_15643.y) / _rd_castRay_15644.y) + 0.0));
if ((_tp2_castRay_15650 > 0.0))
{
if ((_ro_castRay_15643.y > 1.0))
{
(_tmin_castRay_15647 = (max(_tmin_castRay_15647, _tp2_castRay_15650) + 0.0));
if ((!_live_tu_has_executed))
{
float2 _t_torus_25751 = {0, 0};
(_o_mainImage_15634 = ((((gl_FragCoord.xy / _iResolution.xy) - 0.5) / vec2_ctor_int((_iResolution.y / _iResolution.x), 1)) + float2(0.0, 0.0)));
(_time_2 = (mod_emu(_iTime, 62.82) + 0.0));
(_cu_setCamera_15626 = (vec3_ctor_int((cos((_time_2 * 0.2)) * 5.0), 2, (sin((_time_2 * 0.2)) * 5.0)) + float3(0.0, 0.0, 0.0)));
(_col_mainImage_15718 = (normalize((float3(0.0, 0.0, 0.0) - _cu_setCamera_15626)) + float3(0.0, 0.0, 0.0)));
(_nor_render_15682 = (normalize(cross(_col_mainImage_15718, float3(0.0, 1.0, 0.0))) + float3(0.0, 0.0, 0.0)));
(_rd_calcSoftshadow_15687 = (normalize(cross(_nor_render_15682, _col_mainImage_15718)) + float3(0.0, 0.0, 0.0)));
(_qos_map_15657 = (mul(transpose(mat3_ctor(_nor_render_15682, _rd_calcSoftshadow_15687, _col_mainImage_15718)), normalize(vec3_ctor(_o_mainImage_15634, 0.5))) + float3(0.0, 0.0, 0.0)));
(_ta_mainImage_15618 = (float3(-0.19611612, 0.78446448, -0.58834839) + float3(0.0, 0.0, 0.0)));
(_ro_calcSoftshadow_15686 = ((float3(0.1, 0.1, 0.1) - (length(_o_mainImage_15634) * 0.1)) + float3(0.0, 0.0, 0.0)));
(_nor_calcAO_15705 = (_ro_calcSoftshadow_15686 + float3(0.0, 0.0, 0.0)));
(_cp_setCamera_15625 = (_cu_setCamera_15626 + float3(0.0, 0.0, 0.0)));
(_calcNormal_return_value_inlined_10_15681 = (_qos_map_15657 + float3(0.0, 0.0, 0.0)));
(_sdBox_has_returned_15664 = (false + false));
(_occ_calcAO_15708 = (0.0 + 0.0));
{ for((_technique_render_15639 = (0 + 0)); (_technique_render_15639 < 128); (_technique_render_15639++))
{
(_cv_setCamera_15627 = ((_cp_setCamera_15625 + (_calcNormal_return_value_inlined_10_15681 * _occ_calcAO_15708)) + float3(0.0, 0.0, 0.0)));
(_calcNormal_has_returned_15674 = (false + false));
(_cv_setCamera_15627 = ((mod_emu((_cv_setCamera_15627 + float3(2.0, 10.0, 5.0)), float3(4.0, 20.0, 10.0)) - float3(2.0, 10.0, 5.0)) + float3(0.0, 0.0, 0.0)));
(_ro_setCamera_15619 = (_cv_setCamera_15627 + float3(0.0, 0.0, 0.0)));
(_pos_calcNormal_15673 = (vec3_ctor(((sin(_iTime) / 2.0) + 0.5)) + float3(0.0, 0.0, 0.0)));
(_castRay_has_returned_15645 = (false + false));
(_ro_setCamera_15619 = ((abs(_ro_setCamera_15619) - _pos_calcNormal_15673) + float3(0.0, 0.0, 0.0)));
(_tmin_castRay_15647 = (max(max(_ro_setCamera_15619.x, _ro_setCamera_15619.y), _ro_setCamera_15619.z) + 0.0));
(_castRay_has_returned_15645 = (true + false));
(_sca_calcAO_15709 = (_tmin_castRay_15647 + 0.0));
(_precis_castRay_15653 = (_sca_calcAO_15709 + 0.0));
(_lig_render_15684 = ((_cv_setCamera_15627 + float3(0.0, 0.0, 3.0)) + float3(0.0, 0.0, 0.0)));
(_res_castRay_15669 = (((sin((_iTime + 2.0943952)) / 2.0) + 0.5) + 0.0));
(_map_has_returned_15655 = (false + false));
(_y_calcSoftshadow_15699 = ((length(_lig_render_15684) - _res_castRay_15669) + 0.0));
(_map_has_returned_15655 = (true + false));
(_calcAO_return_value_15707 = (_y_calcSoftshadow_15699 + 0.0));
(_amb_render_15716 = (_calcAO_return_value_15707 + 0.0));
(_ro_mainImage_15617 = ((_cv_setCamera_15627 - float3(0.0, 0.0, 3.0)) + float3(0.0, 0.0, 0.0)));
(_t_torus_25751 = (vec2_ctor(1.0, (((sin((_iTime + 4.1887903)) / 2.0) + 0.5) * 0.5)) + float2(0.0, 0.0)));
(_setCamera_has_returned_15622 = (false + false));
(_e_calcNormal_15676 = (vec2_ctor((length(_ro_mainImage_15617.xz) - _t_torus_25751.x), _ro_mainImage_15617.y) + float2(0.0, 0.0)));
(_d_calcAO_15713 = ((length(_e_calcNormal_15676) - _t_torus_25751.y) + 0.0));
(_setCamera_has_returned_15622 = (true + false));
(_spe_render_15703 = (_d_calcAO_15713 + 0.0));
(_map_return_value_inlined_4_15678 = (_spe_render_15703 + 0.0));
(_map_return_value_inlined_8_15712 = (min(_precis_castRay_15653, _amb_render_15716) + 0.0));
(_map_return_value_inlined_8_15712 = (min(_map_return_value_inlined_8_15712, _map_return_value_inlined_4_15678) + 0.0));
(_res_calcSoftshadow_15693 = (_map_return_value_inlined_8_15712 + 0.0));
(_calcNormal_has_returned_15674 = (true + false));
(_dif_render_15702 = (_res_calcSoftshadow_15693 + 0.0));
(_calcAO_return_value_inlined_12_15714 = (_dif_render_15702 + 0.0));
if (((_calcAO_return_value_inlined_12_15714 < 9.9999997e-05) || (_occ_calcAO_15708 > 120.0)))
{
break;
}
(_occ_calcAO_15708 += (_calcAO_return_value_inlined_12_15714 + 0.0));
}
}
if ((_occ_calcAO_15708 > 120.0))
{
(_occ_calcAO_15708 = (0.0 + 0.0));
}
(_map_return_value_15656 = (_occ_calcAO_15708 + 0.0));
(_sdBox_has_returned_15664 = (true + false));
(_sdPlane_return_value_15660 = (_map_return_value_15656 + 0.0));
(_calcSoftshadow_return_value_15692 = (_sdPlane_return_value_15660 + 0.0));
if ((_calcSoftshadow_return_value_15692 > 0.0))
{
(_rd_mainImage_15636 = ((_cu_setCamera_15626 + (_qos_map_15657 * _calcSoftshadow_return_value_15692)) + float3(0.0, 0.0, 0.0)));
(_p_mainImage_15635 = (float2(0.00034999999, -0.00034999999) + float2(0.0, 0.0)));
(_cv_setCamera_15627 = ((_rd_mainImage_15636 + _p_mainImage_15635.xyy) + float3(0.0, 0.0, 0.0)));
(_calcNormal_has_returned_15674 = (false + false));
(_cv_setCamera_15627 = ((mod_emu((_cv_setCamera_15627 + float3(2.0, 10.0, 5.0)), float3(4.0, 20.0, 10.0)) - float3(2.0, 10.0, 5.0)) + float3(0.0, 0.0, 0.0)));
(_ro_setCamera_15619 = (_cv_setCamera_15627 + float3(0.0, 0.0, 0.0)));
(_pos_calcNormal_15673 = (vec3_ctor(((sin(_iTime) / 2.0) + 0.5)) + float3(0.0, 0.0, 0.0)));
(_castRay_has_returned_15645 = (false + false));
(_ro_setCamera_15619 = ((abs(_ro_setCamera_15619) - _pos_calcNormal_15673) + float3(0.0, 0.0, 0.0)));
(_tmin_castRay_15647 = (max(max(_ro_setCamera_15619.x, _ro_setCamera_15619.y), _ro_setCamera_15619.z) + 0.0));
(_castRay_has_returned_15645 = (true + false));
(_sca_calcAO_15709 = (_tmin_castRay_15647 + 0.0));
(_precis_castRay_15653 = (_sca_calcAO_15709 + 0.0));
(_lig_render_15684 = ((_cv_setCamera_15627 + float3(0.0, 0.0, 3.0)) + float3(0.0, 0.0, 0.0)));
(_res_castRay_15669 = (((sin((_iTime + 2.0943952)) / 2.0) + 0.5) + 0.0));
(_map_has_returned_15655 = (false + false));
(_y_calcSoftshadow_15699 = ((length(_lig_render_15684) - _res_castRay_15669) + 0.0));
(_map_has_returned_15655 = (true + false));
(_calcAO_return_value_15707 = (_y_calcSoftshadow_15699 + 0.0));
(_amb_render_15716 = (_calcAO_return_value_15707 + 0.0));
(_ro_mainImage_15617 = ((_cv_setCamera_15627 - float3(0.0, 0.0, 3.0)) + float3(0.0, 0.0, 0.0)));
(_t_torus_25751 = (vec2_ctor(1.0, (((sin((_iTime + 4.1887903)) / 2.0) + 0.5) * 0.5)) + float2(0.0, 0.0)));
(_setCamera_has_returned_15622 = (false + false));
(_e_calcNormal_15676 = (vec2_ctor((length(_ro_mainImage_15617.xz) - _t_torus_25751.x), _ro_mainImage_15617.y) + float2(0.0, 0.0)));
(_d_calcAO_15713 = ((length(_e_calcNormal_15676) - _t_torus_25751.y) + 0.0));
(_setCamera_has_returned_15622 = (true + false));
(_spe_render_15703 = (_d_calcAO_15713 + 0.0));
(_map_return_value_inlined_4_15678 = (_spe_render_15703 + 0.0));
(_map_return_value_inlined_8_15712 = (min(_precis_castRay_15653, _amb_render_15716) + 0.0));
(_map_return_value_inlined_8_15712 = (min(_map_return_value_inlined_8_15712, _map_return_value_inlined_4_15678) + 0.0));
(_res_calcSoftshadow_15693 = (_map_return_value_inlined_8_15712 + 0.0));
(_calcNormal_has_returned_15674 = (true + false));
(_mint_calcSoftshadow_15688 = (_res_calcSoftshadow_15693 + 0.0));
(_cv_setCamera_15627 = ((_rd_mainImage_15636 + _p_mainImage_15635.yyx) + float3(0.0, 0.0, 0.0)));
(_calcNormal_has_returned_15674 = (false + false));
(_cv_setCamera_15627 = ((mod_emu((_cv_setCamera_15627 + float3(2.0, 10.0, 5.0)), float3(4.0, 20.0, 10.0)) - float3(2.0, 10.0, 5.0)) + float3(0.0, 0.0, 0.0)));
(_ro_setCamera_15619 = (_cv_setCamera_15627 + float3(0.0, 0.0, 0.0)));
(_pos_calcNormal_15673 = (vec3_ctor(((sin(_iTime) / 2.0) + 0.5)) + float3(0.0, 0.0, 0.0)));
(_castRay_has_returned_15645 = (false + false));
(_ro_setCamera_15619 = ((abs(_ro_setCamera_15619) - _pos_calcNormal_15673) + float3(0.0, 0.0, 0.0)));
(_tmin_castRay_15647 = (max(max(_ro_setCamera_15619.x, _ro_setCamera_15619.y), _ro_setCamera_15619.z) + 0.0));
(_castRay_has_returned_15645 = (true + false));
(_sca_calcAO_15709 = (_tmin_castRay_15647 + 0.0));
(_precis_castRay_15653 = (_sca_calcAO_15709 + 0.0));
(_lig_render_15684 = ((_cv_setCamera_15627 + float3(0.0, 0.0, 3.0)) + float3(0.0, 0.0, 0.0)));
(_res_castRay_15669 = (((sin((_iTime + 2.0943952)) / 2.0) + 0.5) + 0.0));
(_map_has_returned_15655 = (false + false));
(_y_calcSoftshadow_15699 = ((length(_lig_render_15684) - _res_castRay_15669) + 0.0));
(_map_has_returned_15655 = (true + false));
(_calcAO_return_value_15707 = (_y_calcSoftshadow_15699 + 0.0));
(_amb_render_15716 = (_calcAO_return_value_15707 + 0.0));
(_ro_mainImage_15617 = ((_cv_setCamera_15627 - float3(0.0, 0.0, 3.0)) + float3(0.0, 0.0, 0.0)));
(_t_torus_25751 = (vec2_ctor(1.0, (((sin((_iTime + 4.1887903)) / 2.0) + 0.5) * 0.5)) + float2(0.0, 0.0)));
(_setCamera_has_returned_15622 = (false + false));
(_e_calcNormal_15676 = (vec2_ctor((length(_ro_mainImage_15617.xz) - _t_torus_25751.x), _ro_mainImage_15617.y) + float2(0.0, 0.0)));
(_d_calcAO_15713 = ((length(_e_calcNormal_15676) - _t_torus_25751.y) + 0.0));
(_setCamera_has_returned_15622 = (true + false));
(_spe_render_15703 = (_d_calcAO_15713 + 0.0));
(_map_return_value_inlined_4_15678 = (_spe_render_15703 + 0.0));
(_map_return_value_inlined_8_15712 = (min(_precis_castRay_15653, _amb_render_15716) + 0.0));
(_map_return_value_inlined_8_15712 = (min(_map_return_value_inlined_8_15712, _map_return_value_inlined_4_15678) + 0.0));
(_res_calcSoftshadow_15693 = (_map_return_value_inlined_8_15712 + 0.0));
(_calcNormal_has_returned_15674 = (true + false));
(_ph_calcSoftshadow_15695 = (_res_calcSoftshadow_15693 + 0.0));
(_cv_setCamera_15627 = ((_rd_mainImage_15636 + _p_mainImage_15635.yxy) + float3(0.0, 0.0, 0.0)));
(_calcNormal_has_returned_15674 = (false + false));
(_cv_setCamera_15627 = ((mod_emu((_cv_setCamera_15627 + float3(2.0, 10.0, 5.0)), float3(4.0, 20.0, 10.0)) - float3(2.0, 10.0, 5.0)) + float3(0.0, 0.0, 0.0)));
(_ro_setCamera_15619 = (_cv_setCamera_15627 + float3(0.0, 0.0, 0.0)));
(_pos_calcNormal_15673 = (vec3_ctor(((sin(_iTime) / 2.0) + 0.5)) + float3(0.0, 0.0, 0.0)));
(_castRay_has_returned_15645 = (false + false));
(_ro_setCamera_15619 = ((abs(_ro_setCamera_15619) - _pos_calcNormal_15673) + float3(0.0, 0.0, 0.0)));
(_tmin_castRay_15647 = (max(max(_ro_setCamera_15619.x, _ro_setCamera_15619.y), _ro_setCamera_15619.z) + 0.0));
(_castRay_has_returned_15645 = (true + false));
(_sca_calcAO_15709 = (_tmin_castRay_15647 + 0.0));
(_precis_castRay_15653 = (_sca_calcAO_15709 + 0.0));
(_lig_render_15684 = ((_cv_setCamera_15627 + float3(0.0, 0.0, 3.0)) + float3(0.0, 0.0, 0.0)));
(_res_castRay_15669 = (((sin((_iTime + 2.0943952)) / 2.0) + 0.5) + 0.0));
(_map_has_returned_15655 = (false + false));
(_y_calcSoftshadow_15699 = ((length(_lig_render_15684) - _res_castRay_15669) + 0.0));
(_map_has_returned_15655 = (true + false));
(_calcAO_return_value_15707 = (_y_calcSoftshadow_15699 + 0.0));
(_amb_render_15716 = (_calcAO_return_value_15707 + 0.0));
(_ro_mainImage_15617 = ((_cv_setCamera_15627 - float3(0.0, 0.0, 3.0)) + float3(0.0, 0.0, 0.0)));
(_t_torus_25751 = (vec2_ctor(1.0, (((sin((_iTime + 4.1887903)) / 2.0) + 0.5) * 0.5)) + float2(0.0, 0.0)));
(_setCamera_has_returned_15622 = (false + false));
(_e_calcNormal_15676 = (vec2_ctor((length(_ro_mainImage_15617.xz) - _t_torus_25751.x), _ro_mainImage_15617.y) + float2(0.0, 0.0)));
(_d_calcAO_15713 = ((length(_e_calcNormal_15676) - _t_torus_25751.y) + 0.0));
(_setCamera_has_returned_15622 = (true + false));
(_spe_render_15703 = (_d_calcAO_15713 + 0.0));
(_map_return_value_inlined_4_15678 = (_spe_render_15703 + 0.0));
(_map_return_value_inlined_8_15712 = (min(_precis_castRay_15653, _amb_render_15716) + 0.0));
(_map_return_value_inlined_8_15712 = (min(_map_return_value_inlined_8_15712, _map_return_value_inlined_4_15678) + 0.0));
(_res_calcSoftshadow_15693 = (_map_return_value_inlined_8_15712 + 0.0));
(_calcNormal_has_returned_15674 = (true + false));
(_tp2_castRay_15650 = (_res_calcSoftshadow_15693 + 0.0));
(_cv_setCamera_15627 = ((_rd_mainImage_15636 + _p_mainImage_15635.xxx) + float3(0.0, 0.0, 0.0)));
(_calcNormal_has_returned_15674 = (false + false));
(_cv_setCamera_15627 = ((mod_emu((_cv_setCamera_15627 + float3(2.0, 10.0, 5.0)), float3(4.0, 20.0, 10.0)) - float3(2.0, 10.0, 5.0)) + float3(0.0, 0.0, 0.0)));
(_ro_setCamera_15619 = (_cv_setCamera_15627 + float3(0.0, 0.0, 0.0)));
(_pos_calcNormal_15673 = (vec3_ctor(((sin(_iTime) / 2.0) + 0.5)) + float3(0.0, 0.0, 0.0)));
(_castRay_has_returned_15645 = (false + false));
(_ro_setCamera_15619 = ((abs(_ro_setCamera_15619) - _pos_calcNormal_15673) + float3(0.0, 0.0, 0.0)));
(_tmin_castRay_15647 = (max(max(_ro_setCamera_15619.x, _ro_setCamera_15619.y), _ro_setCamera_15619.z) + 0.0));
(_castRay_has_returned_15645 = (true + false));
(_sca_calcAO_15709 = (_tmin_castRay_15647 + 0.0));
(_precis_castRay_15653 = (_sca_calcAO_15709 + 0.0));
(_lig_render_15684 = ((_cv_setCamera_15627 + float3(0.0, 0.0, 3.0)) + float3(0.0, 0.0, 0.0)));
(_res_castRay_15669 = (((sin((_iTime + 2.0943952)) / 2.0) + 0.5) + 0.0));
(_map_has_returned_15655 = (false + false));
(_y_calcSoftshadow_15699 = ((length(_lig_render_15684) - _res_castRay_15669) + 0.0));
(_map_has_returned_15655 = (true + false));
(_calcAO_return_value_15707 = (_y_calcSoftshadow_15699 + 0.0));
(_amb_render_15716 = (_calcAO_return_value_15707 + 0.0));
(_ro_mainImage_15617 = ((_cv_setCamera_15627 - float3(0.0, 0.0, 3.0)) + float3(0.0, 0.0, 0.0)));
(_t_torus_25751 = (vec2_ctor(1.0, (((sin((_iTime + 4.1887903)) / 2.0) + 0.5) * 0.5)) + float2(0.0, 0.0)));
(_setCamera_has_returned_15622 = (false + false));
(_e_calcNormal_15676 = (vec2_ctor((length(_ro_mainImage_15617.xz) - _t_torus_25751.x), _ro_mainImage_15617.y) + float2(0.0, 0.0)));
(_d_calcAO_15713 = ((length(_e_calcNormal_15676) - _t_torus_25751.y) + 0.0));
(_setCamera_has_returned_15622 = (true + false));
(_spe_render_15703 = (_d_calcAO_15713 + 0.0));
(_map_return_value_inlined_4_15678 = (_spe_render_15703 + 0.0));
(_map_return_value_inlined_8_15712 = (min(_precis_castRay_15653, _amb_render_15716) + 0.0));
(_map_return_value_inlined_8_15712 = (min(_map_return_value_inlined_8_15712, _map_return_value_inlined_4_15678) + 0.0));
(_res_calcSoftshadow_15693 = (_map_return_value_inlined_8_15712 + 0.0));
(_calcNormal_has_returned_15674 = (true + false));
(_map_return_value_inlined_3_15677 = (_res_calcSoftshadow_15693 + 0.0));
(_p_sdPlane_15658 = (normalize(((((_p_mainImage_15635.xyy * _mint_calcSoftshadow_15688) + (_p_mainImage_15635.yyx * _ph_calcSoftshadow_15695)) + (_p_mainImage_15635.yxy * _tp2_castRay_15650)) + (_p_mainImage_15635.xxx * _map_return_value_inlined_3_15677))) + float3(0.0, 0.0, 0.0)));
(_ro_castRay_15643 = (float3(0.0, 0.2, 0.40000001) + float3(0.0, 0.0, 0.0)));
(_map_return_value_inlined_2_15697 = (max(0.0, dot(_p_sdPlane_15658, _ta_mainImage_15618)) + 0.0));
float s1691 = max((1.0 + dot(_p_sdPlane_15658, _qos_map_15657)), 9.9999997e-10);
(_sdPlane_return_value_inlined_0_15661 = ((((s1691 * s1691) * s1691) * s1691) + 0.0));
(_calcSoftshadow_return_value_inlined_11_15701 = (pow(max(max(dot(reflect((-_ta_mainImage_15618), _p_sdPlane_15658), (-_qos_map_15657)), 0.0), 9.9999997e-10), 30.0) + 0.0));
(_cv_setCamera_15627 = ((_rd_mainImage_15636 + (_p_sdPlane_15658 * 0.050000001)) + float3(0.0, 0.0, 0.0)));
(_calcNormal_has_returned_15674 = (false + false));
(_cv_setCamera_15627 = ((mod_emu((_cv_setCamera_15627 + float3(2.0, 10.0, 5.0)), float3(4.0, 20.0, 10.0)) - float3(2.0, 10.0, 5.0)) + float3(0.0, 0.0, 0.0)));
(_ro_setCamera_15619 = (_cv_setCamera_15627 + float3(0.0, 0.0, 0.0)));
(_pos_calcNormal_15673 = (vec3_ctor(((sin(_iTime) / 2.0) + 0.5)) + float3(0.0, 0.0, 0.0)));
(_castRay_has_returned_15645 = (false + false));
(_ro_setCamera_15619 = ((abs(_ro_setCamera_15619) - _pos_calcNormal_15673) + float3(0.0, 0.0, 0.0)));
(_tmin_castRay_15647 = (max(max(_ro_setCamera_15619.x, _ro_setCamera_15619.y), _ro_setCamera_15619.z) + 0.0));
(_castRay_has_returned_15645 = (true + false));
(_sca_calcAO_15709 = (_tmin_castRay_15647 + 0.0));
(_precis_castRay_15653 = (_sca_calcAO_15709 + 0.0));
(_lig_render_15684 = ((_cv_setCamera_15627 + float3(0.0, 0.0, 3.0)) + float3(0.0, 0.0, 0.0)));
(_res_castRay_15669 = (((sin((_iTime + 2.0943952)) / 2.0) + 0.5) + 0.0));
(_map_has_returned_15655 = (false + false));
(_y_calcSoftshadow_15699 = ((length(_lig_render_15684) - _res_castRay_15669) + 0.0));
(_map_has_returned_15655 = (true + false));
(_calcAO_return_value_15707 = (_y_calcSoftshadow_15699 + 0.0));
(_amb_render_15716 = (_calcAO_return_value_15707 + 0.0));
(_ro_mainImage_15617 = ((_cv_setCamera_15627 - float3(0.0, 0.0, 3.0)) + float3(0.0, 0.0, 0.0)));
(_t_torus_25751 = (vec2_ctor(1.0, (((sin((_iTime + 4.1887903)) / 2.0) + 0.5) * 0.5)) + float2(0.0, 0.0)));
(_setCamera_has_returned_15622 = (false + false));
(_e_calcNormal_15676 = (vec2_ctor((length(_ro_mainImage_15617.xz) - _t_torus_25751.x), _ro_mainImage_15617.y) + float2(0.0, 0.0)));
(_d_calcAO_15713 = ((length(_e_calcNormal_15676) - _t_torus_25751.y) + 0.0));
(_setCamera_has_returned_15622 = (true + false));
(_spe_render_15703 = (_d_calcAO_15713 + 0.0));
(_map_return_value_inlined_4_15678 = (_spe_render_15703 + 0.0));
(_map_return_value_inlined_8_15712 = (min(_precis_castRay_15653, _amb_render_15716) + 0.0));
(_map_return_value_inlined_8_15712 = (min(_map_return_value_inlined_8_15712, _map_return_value_inlined_4_15678) + 0.0));
(_res_calcSoftshadow_15693 = (_map_return_value_inlined_8_15712 + 0.0));
(_calcNormal_has_returned_15674 = (true + false));
(_map_return_value_inlined_5_15679 = (_res_calcSoftshadow_15693 + 0.0));
(_map_return_value_inlined_7_15668 = (clamp((_map_return_value_inlined_5_15679 / 0.050000001), 0.0, 1.0) + 0.0));
(_cv_setCamera_15627 = ((_rd_mainImage_15636 + (_ta_mainImage_15618 * 0.40000001)) + float3(0.0, 0.0, 0.0)));
(_calcNormal_has_returned_15674 = (false + false));
(_cv_setCamera_15627 = ((mod_emu((_cv_setCamera_15627 + float3(2.0, 10.0, 5.0)), float3(4.0, 20.0, 10.0)) - float3(2.0, 10.0, 5.0)) + float3(0.0, 0.0, 0.0)));
(_ro_setCamera_15619 = (_cv_setCamera_15627 + float3(0.0, 0.0, 0.0)));
(_pos_calcNormal_15673 = (vec3_ctor(((sin(_iTime) / 2.0) + 0.5)) + float3(0.0, 0.0, 0.0)));
(_castRay_has_returned_15645 = (false + false));
(_ro_setCamera_15619 = ((abs(_ro_setCamera_15619) - _pos_calcNormal_15673) + float3(0.0, 0.0, 0.0)));
(_tmin_castRay_15647 = (max(max(_ro_setCamera_15619.x, _ro_setCamera_15619.y), _ro_setCamera_15619.z) + 0.0));
(_castRay_has_returned_15645 = (true + false));
(_sca_calcAO_15709 = (_tmin_castRay_15647 + 0.0));
(_precis_castRay_15653 = (_sca_calcAO_15709 + 0.0));
(_lig_render_15684 = ((_cv_setCamera_15627 + float3(0.0, 0.0, 3.0)) + float3(0.0, 0.0, 0.0)));
(_res_castRay_15669 = (((sin((_iTime + 2.0943952)) / 2.0) + 0.5) + 0.0));
(_map_has_returned_15655 = (false + false));
(_y_calcSoftshadow_15699 = ((length(_lig_render_15684) - _res_castRay_15669) + 0.0));
(_map_has_returned_15655 = (true + false));
(_calcAO_return_value_15707 = (_y_calcSoftshadow_15699 + 0.0));
(_amb_render_15716 = (_calcAO_return_value_15707 + 0.0));
(_ro_mainImage_15617 = ((_cv_setCamera_15627 - float3(0.0, 0.0, 3.0)) + float3(0.0, 0.0, 0.0)));
(_t_torus_25751 = (vec2_ctor(1.0, (((sin((_iTime + 4.1887903)) / 2.0) + 0.5) * 0.5)) + float2(0.0, 0.0)));
(_setCamera_has_returned_15622 = (false + false));
(_e_calcNormal_15676 = (vec2_ctor((length(_ro_mainImage_15617.xz) - _t_torus_25751.x), _ro_mainImage_15617.y) + float2(0.0, 0.0)));
(_d_calcAO_15713 = ((length(_e_calcNormal_15676) - _t_torus_25751.y) + 0.0));
(_setCamera_has_returned_15622 = (true + false));
(_spe_render_15703 = (_d_calcAO_15713 + 0.0));
(_map_return_value_inlined_4_15678 = (_spe_render_15703 + 0.0));
(_map_return_value_inlined_8_15712 = (min(_precis_castRay_15653, _amb_render_15716) + 0.0));
(_map_return_value_inlined_8_15712 = (min(_map_return_value_inlined_8_15712, _map_return_value_inlined_4_15678) + 0.0));
(_res_calcSoftshadow_15693 = (_map_return_value_inlined_8_15712 + 0.0));
(_calcNormal_has_returned_15674 = (true + false));
(_h_calcAO_15711 = (_res_calcSoftshadow_15693 + 0.0));
(_sdBox_return_value_15665 = (smoothstep(0.0, 1.0, (_h_calcAO_15711 / 0.40000001)) + 0.0));
if ((_calcSoftshadow_return_value_inlined_11_15701 < 1.0))
{
(_nor_calcAO_15705 = (lerp((_calcSoftshadow_return_value_inlined_11_15701 + ((_ro_castRay_15643 * (_map_return_value_inlined_7_15668 + 0.2)) * (_map_return_value_inlined_2_15697 + (_sdBox_return_value_15665 * 0.1)))), _ro_calcSoftshadow_15686, _sdPlane_return_value_inlined_0_15661) + float3(0.0, 0.0, 0.0)));
}
(_nor_calcAO_15705 = (lerp(_ro_calcSoftshadow_15686, _nor_calcAO_15705, exp((((-0.0020000001 * _calcSoftshadow_return_value_15692) * _calcSoftshadow_return_value_15692) * _calcSoftshadow_return_value_15692))) + float3(0.0, 0.0, 0.0)));
}
(_fragColor_2 = (vec4_ctor_int(pow(max(_nor_calcAO_15705, 9.9999997e-10), float3(0.45449999, 0.45449999, 0.45449999)), 1) + float4(0.0, 0.0, 0.0, 0.0)));
(_fragColor_2.w = (1.0 + 0.0));
(_live_tu_has_executed = (true + false));
}
}
else
{
(_tmax_castRay_15648 = (min(_tmax_castRay_15648, _tp2_castRay_15650) + 0.0));
}
}
(_t_castRay_15651 = (_tmin_castRay_15647 + 0.0));
{ for((_i_castRay_15652 = (0 + 0)); (_i_castRay_15652 < 64); (_i_castRay_15652++))
{
(_precis_castRay_15653 = ((0.00050000002 * _t_castRay_15651) + 0.0));
(_pos_map_15654 = ((_ro_castRay_15643 + (_rd_castRay_15644 * _t_castRay_15651)) + float3(0.0, 0.0, 0.0)));
(_map_has_returned_15655 = (false + false));
(_qos_map_15657 = (vec3_ctor((frac((_pos_map_15654.x + 0.5)) - 0.5), _pos_map_15654.yz) + float3(0.0, 0.0, 0.0)));
(_p_sdPlane_15658 = ((_pos_map_15654.xyz - float3(0.0, 0.0, 0.0)) + float3(0.0, 0.0, 0.0)));
(_sdPlane_has_returned_15659 = (false + false));
(_sdPlane_return_value_15660 = (_p_sdPlane_15658.y + 0.0));
(_sdPlane_has_returned_15659 = (true + false));
(_sdPlane_return_value_inlined_0_15661 = (_sdPlane_return_value_15660 + 0.0));
(_p_sdBox_15662 = ((_qos_map_15657.xyz - float3(0.0, 0.25, 0.0)) + float3(0.0, 0.0, 0.0)));
(_b_sdBox_15663 = (float3(0.2, 0.5, 0.2) + float3(0.0, 0.0, 0.0)));
(_sdBox_has_returned_15664 = (false + false));
(_d_sdBox_15666 = ((abs(_p_sdBox_15662) - _b_sdBox_15663) + float3(0.0, 0.0, 0.0)));
(_sdBox_return_value_15665 = ((min(max(_d_sdBox_15666.x, max(_d_sdBox_15666.y, _d_sdBox_15666.z)), 0.0) + length(max(_d_sdBox_15666, 0.0))) + 0.0));
(_sdBox_has_returned_15664 = (true + false));
(_sdBox_return_value_inlined_1_15667 = (_sdBox_return_value_15665 + 0.0));
(_map_return_value_15656 = (min(_sdPlane_return_value_inlined_0_15661, _sdBox_return_value_inlined_1_15667) + 0.0));
(_map_has_returned_15655 = (true + false));
(_map_return_value_inlined_7_15668 = (_map_return_value_15656 + 0.0));
(_res_castRay_15669 = (_map_return_value_inlined_7_15668 + 0.0));
if (((_res_castRay_15669 < _precis_castRay_15653) || (_t_castRay_15651 > _tmax_castRay_15648)))
{
break;
}
(_t_castRay_15651 += (_res_castRay_15669 + 0.0));
}
}
if ((_t_castRay_15651 > _tmax_castRay_15648))
{
(_t_castRay_15651 = (-1.0 + 0.0));
}
(_castRay_return_value_15646 = (_t_castRay_15651 + 0.0));
(_castRay_has_returned_15645 = (true + false));
(_castRay_return_value_inlined_9_15670 = (_castRay_return_value_15646 + 0.0));
(_t_render_15671 = (_castRay_return_value_inlined_9_15670 + 0.0));
if ((_t_render_15671 > -0.5))
{
(_pos_render_15672 = ((_ro_render_15637 + (_t_render_15671 * _rd_render_15638)) + float3(0.0, 0.0, 0.0)));
(_pos_calcNormal_15673 = (_pos_render_15672 + float3(0.0, 0.0, 0.0)));
(_calcNormal_has_returned_15674 = (false + false));
(_e_calcNormal_15676 = (float2(0.00028865002, -0.00028865002) + float2(0.0, 0.0)));
(_pos_map_15654 = ((_pos_calcNormal_15673 + _e_calcNormal_15676.xyy) + float3(0.0, 0.0, 0.0)));
(_map_has_returned_15655 = (false + false));
(_qos_map_15657 = (vec3_ctor((frac((_pos_map_15654.x + 0.5)) - 0.5), _pos_map_15654.yz) + float3(0.0, 0.0, 0.0)));
(_p_sdPlane_15658 = ((_pos_map_15654.xyz - float3(0.0, 0.0, 0.0)) + float3(0.0, 0.0, 0.0)));
(_sdPlane_has_returned_15659 = (false + false));
(_sdPlane_return_value_15660 = (_p_sdPlane_15658.y + 0.0));
(_sdPlane_has_returned_15659 = (true + false));
(_sdPlane_return_value_inlined_0_15661 = (_sdPlane_return_value_15660 + 0.0));
(_p_sdBox_15662 = ((_qos_map_15657.xyz - float3(0.0, 0.25, 0.0)) + float3(0.0, 0.0, 0.0)));
(_b_sdBox_15663 = (float3(0.2, 0.5, 0.2) + float3(0.0, 0.0, 0.0)));
(_sdBox_has_returned_15664 = (false + false));
(_d_sdBox_15666 = ((abs(_p_sdBox_15662) - _b_sdBox_15663) + float3(0.0, 0.0, 0.0)));
(_sdBox_return_value_15665 = ((min(max(_d_sdBox_15666.x, max(_d_sdBox_15666.y, _d_sdBox_15666.z)), 0.0) + length(max(_d_sdBox_15666, 0.0))) + 0.0));
(_sdBox_has_returned_15664 = (true + false));
(_sdBox_return_value_inlined_1_15667 = (_sdBox_return_value_15665 + 0.0));
(_map_return_value_15656 = (min(_sdPlane_return_value_inlined_0_15661, _sdBox_return_value_inlined_1_15667) + 0.0));
(_map_has_returned_15655 = (true + false));
(_map_return_value_inlined_3_15677 = (_map_return_value_15656 + 0.0));
(_pos_map_15654 = ((_pos_calcNormal_15673 + _e_calcNormal_15676.yyx) + float3(0.0, 0.0, 0.0)));
(_map_has_returned_15655 = (false + false));
(_qos_map_15657 = (vec3_ctor((frac((_pos_map_15654.x + 0.5)) - 0.5), _pos_map_15654.yz) + float3(0.0, 0.0, 0.0)));
(_p_sdPlane_15658 = ((_pos_map_15654.xyz - float3(0.0, 0.0, 0.0)) + float3(0.0, 0.0, 0.0)));
(_sdPlane_has_returned_15659 = (false + false));
(_sdPlane_return_value_15660 = (_p_sdPlane_15658.y + 0.0));
(_sdPlane_has_returned_15659 = (true + false));
(_sdPlane_return_value_inlined_0_15661 = (_sdPlane_return_value_15660 + 0.0));
(_p_sdBox_15662 = ((_qos_map_15657.xyz - float3(0.0, 0.25, 0.0)) + float3(0.0, 0.0, 0.0)));
(_b_sdBox_15663 = (float3(0.2, 0.5, 0.2) + float3(0.0, 0.0, 0.0)));
(_sdBox_has_returned_15664 = (false + false));
(_d_sdBox_15666 = ((abs(_p_sdBox_15662) - _b_sdBox_15663) + float3(0.0, 0.0, 0.0)));
(_sdBox_return_value_15665 = ((min(max(_d_sdBox_15666.x, max(_d_sdBox_15666.y, _d_sdBox_15666.z)), 0.0) + length(max(_d_sdBox_15666, 0.0))) + 0.0));
(_sdBox_has_returned_15664 = (true + false));
(_sdBox_return_value_inlined_1_15667 = (_sdBox_return_value_15665 + 0.0));
(_map_return_value_15656 = (min(_sdPlane_return_value_inlined_0_15661, _sdBox_return_value_inlined_1_15667) + 0.0));
(_map_has_returned_15655 = (true + false));
(_map_return_value_inlined_4_15678 = (_map_return_value_15656 + 0.0));
(_pos_map_15654 = ((_pos_calcNormal_15673 + _e_calcNormal_15676.yxy) + float3(0.0, 0.0, 0.0)));
(_map_has_returned_15655 = (false + false));
(_qos_map_15657 = (vec3_ctor((frac((_pos_map_15654.x + 0.5)) - 0.5), _pos_map_15654.yz) + float3(0.0, 0.0, 0.0)));
(_p_sdPlane_15658 = ((_pos_map_15654.xyz - float3(0.0, 0.0, 0.0)) + float3(0.0, 0.0, 0.0)));
(_sdPlane_has_returned_15659 = (false + false));
(_sdPlane_return_value_15660 = (_p_sdPlane_15658.y + 0.0));
(_sdPlane_has_returned_15659 = (true + false));
(_sdPlane_return_value_inlined_0_15661 = (_sdPlane_return_value_15660 + 0.0));
(_p_sdBox_15662 = ((_qos_map_15657.xyz - float3(0.0, 0.25, 0.0)) + float3(0.0, 0.0, 0.0)));
(_b_sdBox_15663 = (float3(0.2, 0.5, 0.2) + float3(0.0, 0.0, 0.0)));
(_sdBox_has_returned_15664 = (false + false));
(_d_sdBox_15666 = ((abs(_p_sdBox_15662) - _b_sdBox_15663) + float3(0.0, 0.0, 0.0)));
(_sdBox_return_value_15665 = ((min(max(_d_sdBox_15666.x, max(_d_sdBox_15666.y, _d_sdBox_15666.z)), 0.0) + length(max(_d_sdBox_15666, 0.0))) + 0.0));
(_sdBox_has_returned_15664 = (true + false));
(_sdBox_return_value_inlined_1_15667 = (_sdBox_return_value_15665 + 0.0));
(_map_return_value_15656 = (min(_sdPlane_return_value_inlined_0_15661, _sdBox_return_value_inlined_1_15667) + 0.0));
(_map_has_returned_15655 = (true + false));
(_map_return_value_inlined_5_15679 = (_map_return_value_15656 + 0.0));
(_pos_map_15654 = ((_pos_calcNormal_15673 + _e_calcNormal_15676.xxx) + float3(0.0, 0.0, 0.0)));
(_map_has_returned_15655 = (false + false));
(_qos_map_15657 = (vec3_ctor((frac((_pos_map_15654.x + 0.5)) - 0.5), _pos_map_15654.yz) + float3(0.0, 0.0, 0.0)));
(_p_sdPlane_15658 = ((_pos_map_15654.xyz - float3(0.0, 0.0, 0.0)) + float3(0.0, 0.0, 0.0)));
(_sdPlane_has_returned_15659 = (false + false));
(_sdPlane_return_value_15660 = (_p_sdPlane_15658.y + 0.0));
(_sdPlane_has_returned_15659 = (true + false));
(_sdPlane_return_value_inlined_0_15661 = (_sdPlane_return_value_15660 + 0.0));
(_p_sdBox_15662 = ((_qos_map_15657.xyz - float3(0.0, 0.25, 0.0)) + float3(0.0, 0.0, 0.0)));
(_b_sdBox_15663 = (float3(0.2, 0.5, 0.2) + float3(0.0, 0.0, 0.0)));
(_sdBox_has_returned_15664 = (false + false));
(_d_sdBox_15666 = ((abs(_p_sdBox_15662) - _b_sdBox_15663) + float3(0.0, 0.0, 0.0)));
(_sdBox_return_value_15665 = ((min(max(_d_sdBox_15666.x, max(_d_sdBox_15666.y, _d_sdBox_15666.z)), 0.0) + length(max(_d_sdBox_15666, 0.0))) + 0.0));
(_sdBox_has_returned_15664 = (true + false));
(_sdBox_return_value_inlined_1_15667 = (_sdBox_return_value_15665 + 0.0));
(_map_return_value_15656 = (min(_sdPlane_return_value_inlined_0_15661, _sdBox_return_value_inlined_1_15667) + 0.0));
(_map_has_returned_15655 = (true + false));
(_map_return_value_inlined_6_15680 = (_map_return_value_15656 + 0.0));
(_calcNormal_return_value_15675 = (normalize(((((_e_calcNormal_15676.xyy * _map_return_value_inlined_3_15677) + (_e_calcNormal_15676.yyx * _map_return_value_inlined_4_15678)) + (_e_calcNormal_15676.yxy * _map_return_value_inlined_5_15679)) + (_e_calcNormal_15676.xxx * _map_return_value_inlined_6_15680))) + float3(0.0, 0.0, 0.0)));
(_calcNormal_has_returned_15674 = (true + false));
(_calcNormal_return_value_inlined_10_15681 = (_calcNormal_return_value_15675 + float3(0.0, 0.0, 0.0)));
(_nor_render_15682 = (_calcNormal_return_value_inlined_10_15681 + float3(0.0, 0.0, 0.0)));
(_mate_render_15683 = (float3(0.30000001, 0.30000001, 0.30000001) + float3(0.0, 0.0, 0.0)));
(_lig_render_15684 = (float3(-0.14744195, 0.44232586, 0.88465172) + float3(0.0, 0.0, 0.0)));
(_hal_render_15685 = (normalize((_lig_render_15684 - _rd_render_15638)) + float3(0.0, 0.0, 0.0)));
(_ro_calcSoftshadow_15686 = (_pos_render_15672 + float3(0.0, 0.0, 0.0)));
(_rd_calcSoftshadow_15687 = (_lig_render_15684 + float3(0.0, 0.0, 0.0)));
(_mint_calcSoftshadow_15688 = (0.0099999998 + 0.0));
(_tmax_calcSoftshadow_15689 = (3.0 + 0.0));
(_technique_calcSoftshadow_15690 = (_technique_render_15639 + 0));
(_calcSoftshadow_has_returned_15691 = (false + false));
(_res_calcSoftshadow_15693 = (1.0 + 0.0));
(_t_calcSoftshadow_15694 = (_mint_calcSoftshadow_15688 + 0.0));
(_ph_calcSoftshadow_15695 = (10000000000.0 + 0.0));
{ for((_i_calcSoftshadow_15696 = (0 + 0)); (_i_calcSoftshadow_15696 < 32); (_i_calcSoftshadow_15696++))
{
(_pos_map_15654 = ((_ro_calcSoftshadow_15686 + (_rd_calcSoftshadow_15687 * _t_calcSoftshadow_15694)) + float3(0.0, 0.0, 0.0)));
(_map_has_returned_15655 = (false + false));
(_qos_map_15657 = (vec3_ctor((frac((_pos_map_15654.x + 0.5)) - 0.5), _pos_map_15654.yz) + float3(0.0, 0.0, 0.0)));
(_p_sdPlane_15658 = ((_pos_map_15654.xyz - float3(0.0, 0.0, 0.0)) + float3(0.0, 0.0, 0.0)));
(_sdPlane_has_returned_15659 = (false + false));
(_sdPlane_return_value_15660 = (_p_sdPlane_15658.y + 0.0));
(_sdPlane_has_returned_15659 = (true + false));
(_sdPlane_return_value_inlined_0_15661 = (_sdPlane_return_value_15660 + 0.0));
(_p_sdBox_15662 = ((_qos_map_15657.xyz - float3(0.0, 0.25, 0.0)) + float3(0.0, 0.0, 0.0)));
(_b_sdBox_15663 = (float3(0.2, 0.5, 0.2) + float3(0.0, 0.0, 0.0)));
(_sdBox_has_returned_15664 = (false + false));
(_d_sdBox_15666 = ((abs(_p_sdBox_15662) - _b_sdBox_15663) + float3(0.0, 0.0, 0.0)));
(_sdBox_return_value_15665 = ((min(max(_d_sdBox_15666.x, max(_d_sdBox_15666.y, _d_sdBox_15666.z)), 0.0) + length(max(_d_sdBox_15666, 0.0))) + 0.0));
(_sdBox_has_returned_15664 = (true + false));
(_sdBox_return_value_inlined_1_15667 = (_sdBox_return_value_15665 + 0.0));
(_map_return_value_15656 = (min(_sdPlane_return_value_inlined_0_15661, _sdBox_return_value_inlined_1_15667) + 0.0));
(_map_has_returned_15655 = (true + false));
(_map_return_value_inlined_2_15697 = (_map_return_value_15656 + 0.0));
(_h_calcSoftshadow_15698 = (_map_return_value_inlined_2_15697 + 0.0));
if ((_technique_calcSoftshadow_15690 == 0))
{
(_res_calcSoftshadow_15693 = (min(_res_calcSoftshadow_15693, ((10.0 * _h_calcSoftshadow_15698) / _t_calcSoftshadow_15694)) + 0.0));
}
else
{
(_y_calcSoftshadow_15699 = (((_h_calcSoftshadow_15698 * _h_calcSoftshadow_15698) / (2.0 * _ph_calcSoftshadow_15695)) + 0.0));
(_d_calcSoftshadow_15700 = (sqrt(((_h_calcSoftshadow_15698 * _h_calcSoftshadow_15698) - (_y_calcSoftshadow_15699 * _y_calcSoftshadow_15699))) + 0.0));
(_res_calcSoftshadow_15693 = (min(_res_calcSoftshadow_15693, ((10.0 * _d_calcSoftshadow_15700) / max(0.0, (_t_calcSoftshadow_15694 - _y_calcSoftshadow_15699)))) + 0.0));
(_ph_calcSoftshadow_15695 = (_h_calcSoftshadow_15698 + 0.0));
}
(_t_calcSoftshadow_15694 += (_h_calcSoftshadow_15698 + 0.0));
if (((_res_calcSoftshadow_15693 < 9.9999997e-05) || (_t_calcSoftshadow_15694 > _tmax_calcSoftshadow_15689)))
{
break;
}
}
}
(_res_calcSoftshadow_15693 = (clamp(_res_calcSoftshadow_15693, 0.0, 1.0) + 0.0));
(_calcSoftshadow_return_value_15692 = (((_res_calcSoftshadow_15693 * _res_calcSoftshadow_15693) * (3.0 - (2.0 * _res_calcSoftshadow_15693))) + 0.0));
(_calcSoftshadow_has_returned_15691 = (true + false));
(_calcSoftshadow_return_value_inlined_11_15701 = (_calcSoftshadow_return_value_15692 + 0.0));
(_dif_render_15702 = ((clamp(dot(_nor_render_15682, _lig_render_15684), 0.0, 1.0) * _calcSoftshadow_return_value_inlined_11_15701) + 0.0));
float s1692 = max(clamp((1.0 + dot(_hal_render_15685, _rd_render_15638)), 0.0, 1.0), 9.9999997e-10);
(_spe_render_15703 = (((pow(max(clamp(dot(_nor_render_15682, _hal_render_15685), 0.0, 1.0), 9.9999997e-10), 16.0) * _dif_render_15702) * (0.039999999 + (0.95999998 * ((((s1692 * s1692) * s1692) * s1692) * s1692)))) + 0.0));
(_col_render_15642 = ((((_mate_render_15683 * 4.0) * _dif_render_15702) * float3(1.0, 0.69999999, 0.5)) + float3(0.0, 0.0, 0.0)));
(_col_render_15642 += (((12.0 * _spe_render_15703) * float3(1.0, 0.69999999, 0.5)) + float3(0.0, 0.0, 0.0)));
(_pos_calcAO_15704 = (_pos_render_15672 + float3(0.0, 0.0, 0.0)));
(_nor_calcAO_15705 = (_nor_render_15682 + float3(0.0, 0.0, 0.0)));
(_calcAO_has_returned_15706 = (false + false));
(_occ_calcAO_15708 = (0.0 + 0.0));
(_sca_calcAO_15709 = (1.0 + 0.0));
{ for((_i_calcAO_15710 = (0 + 0)); (_i_calcAO_15710 < 5); (_i_calcAO_15710++))
{
(_h_calcAO_15711 = ((0.001 + ((0.15000001 * float_ctor_int(_i_calcAO_15710)) / 4.0)) + 0.0));
(_pos_map_15654 = ((_pos_calcAO_15704 + (_h_calcAO_15711 * _nor_calcAO_15705)) + float3(0.0, 0.0, 0.0)));
(_map_has_returned_15655 = (false + false));
(_qos_map_15657 = (vec3_ctor((frac((_pos_map_15654.x + 0.5)) - 0.5), _pos_map_15654.yz) + float3(0.0, 0.0, 0.0)));
(_p_sdPlane_15658 = ((_pos_map_15654.xyz - float3(0.0, 0.0, 0.0)) + float3(0.0, 0.0, 0.0)));
(_sdPlane_has_returned_15659 = (false + false));
(_sdPlane_return_value_15660 = (_p_sdPlane_15658.y + 0.0));
(_sdPlane_has_returned_15659 = (true + false));
(_sdPlane_return_value_inlined_0_15661 = (_sdPlane_return_value_15660 + 0.0));
(_p_sdBox_15662 = ((_qos_map_15657.xyz - float3(0.0, 0.25, 0.0)) + float3(0.0, 0.0, 0.0)));
(_b_sdBox_15663 = (float3(0.2, 0.5, 0.2) + float3(0.0, 0.0, 0.0)));
(_sdBox_has_returned_15664 = (false + false));
(_d_sdBox_15666 = ((abs(_p_sdBox_15662) - _b_sdBox_15663) + float3(0.0, 0.0, 0.0)));
(_sdBox_return_value_15665 = ((min(max(_d_sdBox_15666.x, max(_d_sdBox_15666.y, _d_sdBox_15666.z)), 0.0) + length(max(_d_sdBox_15666, 0.0))) + 0.0));
(_sdBox_has_returned_15664 = (true + false));
(_sdBox_return_value_inlined_1_15667 = (_sdBox_return_value_15665 + 0.0));
(_map_return_value_15656 = (min(_sdPlane_return_value_inlined_0_15661, _sdBox_return_value_inlined_1_15667) + 0.0));
(_map_has_returned_15655 = (true + false));
(_map_return_value_inlined_8_15712 = (_map_return_value_15656 + 0.0));
(_d_calcAO_15713 = (_map_return_value_inlined_8_15712 + 0.0));
(_occ_calcAO_15708 += (((_h_calcAO_15711 - _d_calcAO_15713) * _sca_calcAO_15709) + 0.0));
(_sca_calcAO_15709 *= (0.94999999 + 0.0));
}
}
(_calcAO_return_value_15707 = (clamp((1.0 - (1.5 * _occ_calcAO_15708)), 0.0, 1.0) + 0.0));
(_calcAO_has_returned_15706 = (true + false));
(_calcAO_return_value_inlined_12_15714 = (_calcAO_return_value_15707 + 0.0));
(_occ_render_15715 = (_calcAO_return_value_inlined_12_15714 + 0.0));
(_amb_render_15716 = (clamp((0.5 + (0.5 * _nor_render_15682.y)), 0.0, 1.0) + 0.0));
(_col_render_15642 += ((((_mate_render_15683 * _amb_render_15716) * _occ_render_15715) * float3(0.0, 0.079999998, 0.1)) + float3(0.0, 0.0, 0.0)));
(_col_render_15642 *= (exp((((-0.00050000002 * _t_render_15671) * _t_render_15671) * _t_render_15671)) + 0.0));
}
(_render_return_value_15641 = (_col_render_15642 + float3(0.0, 0.0, 0.0)));
(_render_has_returned_15640 = (true + false));
(_render_return_value_inlined_14_15717 = (_render_return_value_15641 + float3(0.0, 0.0, 0.0)));
(_col_mainImage_15718 = (_render_return_value_inlined_14_15717 + float3(0.0, 0.0, 0.0)));
(_col_mainImage_15718 = (pow(max(_col_mainImage_15718, 9.9999997e-10), float3(0.45449999, 0.45449999, 0.45449999)) + float3(0.0, 0.0, 0.0)));
(_tot_mainImage_15631 += (_col_mainImage_15718 + float3(0.0, 0.0, 0.0)));
}
}
}
}
(_tot_mainImage_15631 /= 4.0);
(_fragColor_1 = vec4_ctor(_tot_mainImage_15631, 1.0));
(_fragColor_1.w = 1.0);
(out_fragColor = lerp(_fragColor_2, _fragColor_1, ((1.0 - _fragColor_2.w) + _iTime)));
return generateOutput();
}

// INITIAL HLSL END



// FRAGMENT SHADER END
 