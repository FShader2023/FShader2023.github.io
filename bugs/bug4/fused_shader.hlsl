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

const int NUM_STEPS_2 = 32;

const int AO_SAMPLES_2 = 4;

const vec2 AO_PARAM_2 = vec2(1.2, 3.5);

const vec2 CORNER_PARAM_2 = vec2(0.25, 40.0);

const float INV_AO_SAMPLES_2 = 1.0 / float(AO_SAMPLES_2);

const float TRESHOLD_2 = 0.1;

const float EPSILON_2 = 1e-3;

const float LIGHT_INTENSITY_2 = 0.25;

const vec3 RED_2 = vec3(1.0, 0.7, 0.7) * LIGHT_INTENSITY_2;

const vec3 ORANGE_2 = vec3(1.0, 0.67, 0.43) * LIGHT_INTENSITY_2;

const vec3 BLUE_2 = vec3(0.54, 0.77, 1.0) * LIGHT_INTENSITY_2;

const vec3 WHITE_2 = vec3(1.2, 1.07, 0.98) * LIGHT_INTENSITY_2;

const float DISPLACEMENT_2 = 0.1;

vec4 fragColor_2;

void main()
{
vec2 fragCoord_blackboard_1;
bool blackboard_has_returned_1;
vec3 blackboard_return_value_1;
vec2 p_blackboard_1;
vec2 q_blackboard_1;
float v_blackboard_1;
vec3 col_blackboard_1;
vec2 p_fbm_1;
bool fbm_has_returned_1;
float fbm_return_value_1;
const mat2 m_fbm_1 = mat2(1.6, 1.2, - 1.2, 1.6);
float f_fbm_1;
float s_fbm_1;
int i_fbm_1;
vec2 p_noise_1;
bool noise_has_returned_1;
float noise_return_value_1;
ivec2 i_noise_1;
vec2 f_noise_1;
vec2 u_noise_1;
ivec2 z_grad_1;
bool grad_has_returned_1;
vec2 grad_return_value_1;
int n_grad_1;
vec2 gr_grad_1;
vec2 grad_return_value_inlined_0_1;
vec2 grad_return_value_inlined_1_1;
vec2 grad_return_value_inlined_2_1;
vec2 grad_return_value_inlined_3_1;
float noise_return_value_inlined_4_1;
float fbm_return_value_inlined_7_1;
float fbm_return_value_inlined_8_1;
vec2 ce_flattened_block_1_blackboard_1;
vec2 w_flattened_block_1_blackboard_1;
float fbm_return_value_inlined_9_1;
float ff_flattened_block_1_blackboard_1;
float fa_flattened_block_1_blackboard_1;
float m_blackboard_1;
float m2_blackboard_1;
int i_blackboard_1;
vec2 p1_blackboard_1;
vec2 p2_blackboard_1;
vec2 p_sdLine_1;
vec2 a_sdLine_1;
vec2 b_sdLine_1;
bool sdLine_has_returned_1;
float sdLine_return_value_1;
vec2 pa_sdLine_1;
vec2 ba_sdLine_1;
float h_sdLine_1;
float sdLine_return_value_inlined_10_1;
float d_blackboard_1;
float fbm_return_value_inlined_11_1;
float fbm_return_value_inlined_12_1;
float ww_blackboard_1;
float fbm_return_value_inlined_13_1;
vec3 blackboard_return_value_inlined_41_1;
vec3 col_mainImage_1;
vec3 col_chalk_1;
vec2 fragCoord_chalk_1;
bool chalk_has_returned_1;
vec3 chalk_return_value_1;
vec2 p1_chalk_1;
vec2 p2_chalk_1;
vec2 p3_chalk_1;
vec2 p_chalk_1;
float gf_chalk_1;
float fbm_return_value_inlined_14_1;
float d_chalk_1;
float x_chalk_1;
float y_chalk_1;
float dy_chalk_1;
float fbm_return_value_inlined_15_1;
float sdLine_return_value_inlined_16_1;
float sdLine_return_value_inlined_17_1;
float sdLine_return_value_inlined_18_1;
float sdLine_return_value_inlined_19_1;
float fbm_return_value_inlined_20_1;
float sdLine_return_value_inlined_21_1;
float sdLine_return_value_inlined_22_1;
float sdLine_return_value_inlined_23_1;
float fbm_return_value_inlined_24_1;
vec2 c_altitude_1;
vec2 a_altitude_1;
vec2 b_altitude_1;
bool altitude_has_returned_1;
vec2 altitude_return_value_1;
vec2 w_altitude_1;
vec2 altitude_return_value_inlined_25_1;
vec2 q1_chalk_1;
vec2 altitude_return_value_inlined_26_1;
vec2 q2_chalk_1;
vec2 altitude_return_value_inlined_27_1;
vec2 q3_chalk_1;
float sdLine_return_value_inlined_28_1;
float sdLine_return_value_inlined_29_1;
float sdLine_return_value_inlined_30_1;
vec2 o1_chalk_1;
vec2 o2_chalk_1;
vec2 o3_chalk_1;
float sdLine_return_value_inlined_31_1;
float sdLine_return_value_inlined_32_1;
float sdLine_return_value_inlined_33_1;
float sdLine_return_value_inlined_34_1;
float sdLine_return_value_inlined_35_1;
float sdLine_return_value_inlined_36_1;
float fbm_return_value_inlined_37_1;
vec2 a1_intersect_1;
vec2 b1_intersect_1;
vec2 a2_intersect_1;
vec2 b2_intersect_1;
bool intersect_has_returned_1;
vec2 intersect_return_value_1;
vec2 a_cro_1;
vec2 b_cro_1;
bool cro_has_returned_1;
float cro_return_value_1;
float cro_return_value_inlined_5_1;
float cro_return_value_inlined_6_1;
float h_intersect_1;
vec2 intersect_return_value_inlined_38_1;
vec2 pc_chalk_1;
float fbm_return_value_inlined_39_1;
float fbm_return_value_inlined_40_1;
vec3 chalk_return_value_inlined_42_1;
fragCoord_blackboard_1 = gl_FragCoord.xy;
blackboard_has_returned_1 = false;
p_blackboard_1 = (2.0 * fragCoord_blackboard_1 - iResolution.xy) / iResolution.y;
q_blackboard_1 = fragCoord_blackboard_1 / iResolution.xy;
v_blackboard_1 = sqrt(16.0 * q_blackboard_1.x * q_blackboard_1.y * (1.0 - q_blackboard_1.x) * (1.0 - q_blackboard_1.y));
col_blackboard_1 = vec3(0.1 + 0.05 * v_blackboard_1);
p_fbm_1 = p_blackboard_1 * 1.25 * vec2(1.0, 4.0);
fbm_has_returned_1 = false;
f_fbm_1 = 0.0;
s_fbm_1 = 0.5;
for( i_fbm_1 = 0;
i_fbm_1 < 6; i_fbm_1 ++)
{
p_noise_1 = p_fbm_1;
noise_has_returned_1 = false;
i_noise_1 = ivec2(floor(p_noise_1));
f_noise_1 = fract(p_noise_1);
u_noise_1 = f_noise_1 * f_noise_1 * (3.0 - 2.0 * f_noise_1);
z_grad_1 = i_noise_1 + ivec2(0, 0);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_0_1 = grad_return_value_1;
z_grad_1 = i_noise_1 + ivec2(1, 0);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_1_1 = grad_return_value_1;
z_grad_1 = i_noise_1 + ivec2(0, 1);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_2_1 = grad_return_value_1;
z_grad_1 = i_noise_1 + ivec2(1, 1);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_3_1 = grad_return_value_1;
noise_return_value_1 = mix(mix(dot(grad_return_value_inlined_0_1, f_noise_1 - vec2(0.0, 0.0)), dot(grad_return_value_inlined_1_1, f_noise_1 - vec2(1.0, 0.0)), u_noise_1.x), mix(dot(grad_return_value_inlined_2_1, f_noise_1 - vec2(0.0, 1.0)), dot(grad_return_value_inlined_3_1, f_noise_1 - vec2(1.0, 1.0)), u_noise_1.x), u_noise_1.y);
noise_has_returned_1 = true;
noise_return_value_inlined_4_1 = noise_return_value_1;
f_fbm_1 += s_fbm_1 * noise_return_value_inlined_4_1;
p_fbm_1 = m_fbm_1 * p_fbm_1;
s_fbm_1 = 0.5 * s_fbm_1;
}
fbm_return_value_1 = f_fbm_1;
fbm_has_returned_1 = true;
fbm_return_value_inlined_7_1 = fbm_return_value_1;
col_blackboard_1 += 0.05 * fbm_return_value_inlined_7_1;
p_fbm_1 = p_blackboard_1 * 20.0;
fbm_has_returned_1 = false;
f_fbm_1 = 0.0;
s_fbm_1 = 0.5;
for( i_fbm_1 = 0;
i_fbm_1 < 6; i_fbm_1 ++)
{
p_noise_1 = p_fbm_1;
noise_has_returned_1 = false;
i_noise_1 = ivec2(floor(p_noise_1));
f_noise_1 = fract(p_noise_1);
u_noise_1 = f_noise_1 * f_noise_1 * (3.0 - 2.0 * f_noise_1);
z_grad_1 = i_noise_1 + ivec2(0, 0);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_0_1 = grad_return_value_1;
z_grad_1 = i_noise_1 + ivec2(1, 0);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_1_1 = grad_return_value_1;
z_grad_1 = i_noise_1 + ivec2(0, 1);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_2_1 = grad_return_value_1;
z_grad_1 = i_noise_1 + ivec2(1, 1);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_3_1 = grad_return_value_1;
noise_return_value_1 = mix(mix(dot(grad_return_value_inlined_0_1, f_noise_1 - vec2(0.0, 0.0)), dot(grad_return_value_inlined_1_1, f_noise_1 - vec2(1.0, 0.0)), u_noise_1.x), mix(dot(grad_return_value_inlined_2_1, f_noise_1 - vec2(0.0, 1.0)), dot(grad_return_value_inlined_3_1, f_noise_1 - vec2(1.0, 1.0)), u_noise_1.x), u_noise_1.y);
noise_has_returned_1 = true;
noise_return_value_inlined_4_1 = noise_return_value_1;
f_fbm_1 += s_fbm_1 * noise_return_value_inlined_4_1;
p_fbm_1 = m_fbm_1 * p_fbm_1;
s_fbm_1 = 0.5 * s_fbm_1;
}
fbm_return_value_1 = f_fbm_1;
fbm_has_returned_1 = true;
fbm_return_value_inlined_8_1 = fbm_return_value_1;
col_blackboard_1 += 0.02 * fbm_return_value_inlined_8_1;
ce_flattened_block_1_blackboard_1 = vec2(2.0, - 10.0);
w_flattened_block_1_blackboard_1 = 2.5 * p_blackboard_1 - ce_flattened_block_1_blackboard_1;
w_flattened_block_1_blackboard_1 = vec2(atan(w_flattened_block_1_blackboard_1.y, w_flattened_block_1_blackboard_1.x), length(w_flattened_block_1_blackboard_1));
p_fbm_1 = w_flattened_block_1_blackboard_1 * 2.0 * vec2(1.0, 1.0);
fbm_has_returned_1 = false;
f_fbm_1 = 0.0;
s_fbm_1 = 0.5;
for( i_fbm_1 = 0;
i_fbm_1 < 6; i_fbm_1 ++)
{
p_noise_1 = p_fbm_1;
noise_has_returned_1 = false;
i_noise_1 = ivec2(floor(p_noise_1));
f_noise_1 = fract(p_noise_1);
u_noise_1 = f_noise_1 * f_noise_1 * (3.0 - 2.0 * f_noise_1);
z_grad_1 = i_noise_1 + ivec2(0, 0);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_0_1 = grad_return_value_1;
z_grad_1 = i_noise_1 + ivec2(1, 0);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_1_1 = grad_return_value_1;
z_grad_1 = i_noise_1 + ivec2(0, 1);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_2_1 = grad_return_value_1;
z_grad_1 = i_noise_1 + ivec2(1, 1);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_3_1 = grad_return_value_1;
noise_return_value_1 = mix(mix(dot(grad_return_value_inlined_0_1, f_noise_1 - vec2(0.0, 0.0)), dot(grad_return_value_inlined_1_1, f_noise_1 - vec2(1.0, 0.0)), u_noise_1.x), mix(dot(grad_return_value_inlined_2_1, f_noise_1 - vec2(0.0, 1.0)), dot(grad_return_value_inlined_3_1, f_noise_1 - vec2(1.0, 1.0)), u_noise_1.x), u_noise_1.y);
noise_has_returned_1 = true;
noise_return_value_inlined_4_1 = noise_return_value_1;
f_fbm_1 += s_fbm_1 * noise_return_value_inlined_4_1;
p_fbm_1 = m_fbm_1 * p_fbm_1;
s_fbm_1 = 0.5 * s_fbm_1;
}
fbm_return_value_1 = f_fbm_1;
fbm_has_returned_1 = true;
fbm_return_value_inlined_9_1 = fbm_return_value_1;
ff_flattened_block_1_blackboard_1 = fbm_return_value_inlined_9_1;
fa_flattened_block_1_blackboard_1 = smoothstep(1.5, 1.0, abs(w_flattened_block_1_blackboard_1.y + ce_flattened_block_1_blackboard_1.y - 0.7));
fa_flattened_block_1_blackboard_1 *= smoothstep(0.4, 0.2, abs(w_flattened_block_1_blackboard_1.x - 1.8 + 0.5 * ff_flattened_block_1_blackboard_1));
col_blackboard_1 += v_blackboard_1 * 0.06 * smoothstep(- 0.5, 0.5, ff_flattened_block_1_blackboard_1) * fa_flattened_block_1_blackboard_1;
m_blackboard_1 = 0.0;
m2_blackboard_1 = 0.0;
for( i_blackboard_1 = 0;
i_blackboard_1 < 20; i_blackboard_1 ++)
{
p1_blackboard_1 = vec2(3.0, 2.0) * sin(float(i_blackboard_1) * 1.3 + vec2(0, 1));
p2_blackboard_1 = p1_blackboard_1 + vec2(0.5, 2.0) * sin(float(i_blackboard_1) * 11.1 + vec2(2, 4));
p_sdLine_1 = 2.5 * p_blackboard_1 + 0.5 * sin(2.5 * p_blackboard_1 + float(i_blackboard_1) * vec2(1.7, 2.3));
a_sdLine_1 = p1_blackboard_1;
b_sdLine_1 = p2_blackboard_1;
sdLine_has_returned_1 = false;
pa_sdLine_1 = p_sdLine_1 - a_sdLine_1;
ba_sdLine_1 = b_sdLine_1 - a_sdLine_1;
h_sdLine_1 = clamp(dot(pa_sdLine_1, ba_sdLine_1) / dot(ba_sdLine_1, ba_sdLine_1), 0.0, 1.0);
sdLine_return_value_1 = length(pa_sdLine_1 - h_sdLine_1 * ba_sdLine_1);
sdLine_has_returned_1 = true;
sdLine_return_value_inlined_10_1 = sdLine_return_value_1;
d_blackboard_1 = sdLine_return_value_inlined_10_1;
p_fbm_1 = 1.25 * p_blackboard_1;
fbm_has_returned_1 = false;
f_fbm_1 = 0.0;
s_fbm_1 = 0.5;
for(   i_fbm_1 = 0;
i_fbm_1 < 6; i_fbm_1 ++)
{
p_noise_1 = p_fbm_1;
noise_has_returned_1 = false;
i_noise_1 = ivec2(floor(p_noise_1));
f_noise_1 = fract(p_noise_1);
u_noise_1 = f_noise_1 * f_noise_1 * (3.0 - 2.0 * f_noise_1);
z_grad_1 = i_noise_1 + ivec2(0, 0);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_0_1 = grad_return_value_1;
z_grad_1 = i_noise_1 + ivec2(1, 0);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_1_1 = grad_return_value_1;
z_grad_1 = i_noise_1 + ivec2(0, 1);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_2_1 = grad_return_value_1;
z_grad_1 = i_noise_1 + ivec2(1, 1);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_3_1 = grad_return_value_1;
noise_return_value_1 = mix(mix(dot(grad_return_value_inlined_0_1, f_noise_1 - vec2(0.0, 0.0)), dot(grad_return_value_inlined_1_1, f_noise_1 - vec2(1.0, 0.0)), u_noise_1.x), mix(dot(grad_return_value_inlined_2_1, f_noise_1 - vec2(0.0, 1.0)), dot(grad_return_value_inlined_3_1, f_noise_1 - vec2(1.0, 1.0)), u_noise_1.x), u_noise_1.y);
noise_has_returned_1 = true;
noise_return_value_inlined_4_1 = noise_return_value_1;
f_fbm_1 += s_fbm_1 * noise_return_value_inlined_4_1;
p_fbm_1 = m_fbm_1 * p_fbm_1;
s_fbm_1 = 0.5 * s_fbm_1;
}
fbm_return_value_1 = f_fbm_1;
fbm_has_returned_1 = true;
fbm_return_value_inlined_11_1 = fbm_return_value_1;
d_blackboard_1 += 0.1 * fbm_return_value_inlined_11_1;
p_fbm_1 = 1.75 * p_blackboard_1;
fbm_has_returned_1 = false;
f_fbm_1 = 0.0;
s_fbm_1 = 0.5;
for(   i_fbm_1 = 0;
i_fbm_1 < 6; i_fbm_1 ++)
{
p_noise_1 = p_fbm_1;
noise_has_returned_1 = false;
i_noise_1 = ivec2(floor(p_noise_1));
f_noise_1 = fract(p_noise_1);
u_noise_1 = f_noise_1 * f_noise_1 * (3.0 - 2.0 * f_noise_1);
z_grad_1 = i_noise_1 + ivec2(0, 0);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_0_1 = grad_return_value_1;
z_grad_1 = i_noise_1 + ivec2(1, 0);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_1_1 = grad_return_value_1;
z_grad_1 = i_noise_1 + ivec2(0, 1);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_2_1 = grad_return_value_1;
z_grad_1 = i_noise_1 + ivec2(1, 1);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_3_1 = grad_return_value_1;
noise_return_value_1 = mix(mix(dot(grad_return_value_inlined_0_1, f_noise_1 - vec2(0.0, 0.0)), dot(grad_return_value_inlined_1_1, f_noise_1 - vec2(1.0, 0.0)), u_noise_1.x), mix(dot(grad_return_value_inlined_2_1, f_noise_1 - vec2(0.0, 1.0)), dot(grad_return_value_inlined_3_1, f_noise_1 - vec2(1.0, 1.0)), u_noise_1.x), u_noise_1.y);
noise_has_returned_1 = true;
noise_return_value_inlined_4_1 = noise_return_value_1;
f_fbm_1 += s_fbm_1 * noise_return_value_inlined_4_1;
p_fbm_1 = m_fbm_1 * p_fbm_1;
s_fbm_1 = 0.5 * s_fbm_1;
}
fbm_return_value_1 = f_fbm_1;
fbm_has_returned_1 = true;
fbm_return_value_inlined_12_1 = fbm_return_value_1;
ww_blackboard_1 = fbm_return_value_inlined_12_1;
m_blackboard_1 = max(m_blackboard_1, smoothstep(0.05, 0.0, d_blackboard_1));
m2_blackboard_1 = max(m2_blackboard_1, smoothstep(0.2, - 0.2, d_blackboard_1 - abs(ww_blackboard_1)));
}
col_blackboard_1 += v_blackboard_1 * 0.01 * m_blackboard_1;
col_blackboard_1 += v_blackboard_1 * 0.025 * m2_blackboard_1;
p_fbm_1 = p_blackboard_1 * 82.0;
fbm_has_returned_1 = false;
f_fbm_1 = 0.0;
s_fbm_1 = 0.5;
for( i_fbm_1 = 0;
i_fbm_1 < 6; i_fbm_1 ++)
{
p_noise_1 = p_fbm_1;
noise_has_returned_1 = false;
i_noise_1 = ivec2(floor(p_noise_1));
f_noise_1 = fract(p_noise_1);
u_noise_1 = f_noise_1 * f_noise_1 * (3.0 - 2.0 * f_noise_1);
z_grad_1 = i_noise_1 + ivec2(0, 0);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_0_1 = grad_return_value_1;
z_grad_1 = i_noise_1 + ivec2(1, 0);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_1_1 = grad_return_value_1;
z_grad_1 = i_noise_1 + ivec2(0, 1);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_2_1 = grad_return_value_1;
z_grad_1 = i_noise_1 + ivec2(1, 1);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_3_1 = grad_return_value_1;
noise_return_value_1 = mix(mix(dot(grad_return_value_inlined_0_1, f_noise_1 - vec2(0.0, 0.0)), dot(grad_return_value_inlined_1_1, f_noise_1 - vec2(1.0, 0.0)), u_noise_1.x), mix(dot(grad_return_value_inlined_2_1, f_noise_1 - vec2(0.0, 1.0)), dot(grad_return_value_inlined_3_1, f_noise_1 - vec2(1.0, 1.0)), u_noise_1.x), u_noise_1.y);
noise_has_returned_1 = true;
noise_return_value_inlined_4_1 = noise_return_value_1;
f_fbm_1 += s_fbm_1 * noise_return_value_inlined_4_1;
p_fbm_1 = m_fbm_1 * p_fbm_1;
s_fbm_1 = 0.5 * s_fbm_1;
}
fbm_return_value_1 = f_fbm_1;
fbm_has_returned_1 = true;
fbm_return_value_inlined_13_1 = fbm_return_value_1;
col_blackboard_1 += col_blackboard_1.x * col_blackboard_1.x * 0.75 * smoothstep(- 0.2, 0.2, fbm_return_value_inlined_13_1);
blackboard_return_value_1 = col_blackboard_1;
blackboard_has_returned_1 = true;
blackboard_return_value_inlined_41_1 = blackboard_return_value_1;
col_mainImage_1 = blackboard_return_value_inlined_41_1;
col_chalk_1 = col_mainImage_1;
fragCoord_chalk_1 = gl_FragCoord.xy;
chalk_has_returned_1 = false;
p1_chalk_1 = vec2(2.25 + 0.70 * sin(1.3 * iTime), 0.0);
p1_chalk_1.y = 1.0 / p1_chalk_1.x;
p2_chalk_1 = vec2(- 1.4 + 0.40 * sin(1.1 * iTime), 0.0);
p2_chalk_1.y = 1.0 / p2_chalk_1.x;
p3_chalk_1 = vec2(0.35 + 0.02 * sin(1.9 * iTime), 0.0);
p3_chalk_1.y = 1.0 / p3_chalk_1.x;
p_chalk_1 = (2.0 * fragCoord_chalk_1 - iResolution.xy) / iResolution.y;
p_chalk_1 *= 3.0;
p_chalk_1 -= vec2(- 0.3, - 0.7);
gf_chalk_1 = 0.6;
p_fbm_1 = p_chalk_1.yx * 10.0;
fbm_has_returned_1 = false;
f_fbm_1 = 0.0;
s_fbm_1 = 0.5;
for( i_fbm_1 = 0;
i_fbm_1 < 6; i_fbm_1 ++)
{
p_noise_1 = p_fbm_1;
noise_has_returned_1 = false;
i_noise_1 = ivec2(floor(p_noise_1));
f_noise_1 = fract(p_noise_1);
u_noise_1 = f_noise_1 * f_noise_1 * (3.0 - 2.0 * f_noise_1);
z_grad_1 = i_noise_1 + ivec2(0, 0);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
if(! live_tu_has_executed)
{
float time_mainImage_2;
vec3 color_mainImage_2;
int i_mainImage_2;
int j_mainImage_2;
vec2 uv_mainImage_2;
vec2 coord_getPixel_2;
float time_getPixel_2;
bool getPixel_has_returned_2;
vec3 getPixel_return_value_2;
vec2 iuv_getPixel_2;
vec2 uv_getPixel_2;
vec3 ang_getPixel_2;
vec3 ang_fromEuler_2;
bool fromEuler_has_returned_2;
mat3 fromEuler_return_value_2;
vec2 a1_fromEuler_2;
vec2 a2_fromEuler_2;
vec2 a3_fromEuler_2;
mat3 m_fromEuler_2;
mat3 fromEuler_return_value_inlined_36_2;
mat3 rot_getPixel_2;
vec3 ori_getPixel_2;
vec3 dir_getPixel_2;
vec3 p_getPixel_2;
vec3 ori_spheretracing_2;
vec3 dir_spheretracing_2;
vec3 p_spheretracing_2;
bool spheretracing_has_returned_2;
vec2 spheretracing_return_value_2;
vec2 td_spheretracing_2;
int i_spheretracing_2;
vec3 p_map_2;
bool map_has_returned_2;
float map_return_value_2;
vec3 p_rock_2;
bool rock_has_returned_2;
float rock_return_value_2;
vec3 p_sphere_2;
float r_sphere_2;
bool sphere_has_returned_2;
float sphere_return_value_2;
float sphere_return_value_inlined_12_2;
float d_rock_2;
int i_rock_2;
float ii_rock_2;
float p_hash11_2;
bool hash11_has_returned_2;
float hash11_return_value_2;
float hash11_return_value_inlined_13_2;
float r_rock_2;
float p_hash31_2;
bool hash31_has_returned_2;
vec3 hash31_return_value_2;
vec3 h_hash31_2;
vec3 hash31_return_value_inlined_14_2;
vec3 v_rock_2;
float sphere_return_value_inlined_15_2;
float a_boolSmoothSub_2;
float b_boolSmoothSub_2;
float k_boolSmoothSub_2;
bool boolSmoothSub_has_returned_2;
float boolSmoothSub_return_value_2;
float a_boolSmoothIntersect_2;
float b_boolSmoothIntersect_2;
float k_boolSmoothIntersect_2;
bool boolSmoothIntersect_has_returned_2;
float boolSmoothIntersect_return_value_2;
float h_boolSmoothIntersect_2;
float boolSmoothIntersect_return_value_inlined_11_2;
float boolSmoothSub_return_value_inlined_16_2;
float rock_return_value_inlined_17_2;
vec3 p_fbm3_2;
float a_fbm3_2;
float f_fbm3_2;
bool fbm3_has_returned_2;
float fbm3_return_value_2;
vec3 p_noise_3_2;
bool noise_3_has_returned_2;
float noise_3_return_value_2;
vec3 i_noise_3_2;
vec3 f_noise_3_2;
vec3 u_noise_3_2;
vec2 ii_noise_3_2;
vec2 p_hash12_2;
bool hash12_has_returned_2;
float hash12_return_value_2;
float h_hash12_2;
float hash12_return_value_inlined_0_2;
float a_noise_3_2;
float hash12_return_value_inlined_1_2;
float b_noise_3_2;
float hash12_return_value_inlined_2_2;
float c_noise_3_2;
float hash12_return_value_inlined_3_2;
float d_noise_3_2;
float v1_noise_3_2;
float hash12_return_value_inlined_4_2;
float hash12_return_value_inlined_5_2;
float hash12_return_value_inlined_6_2;
float hash12_return_value_inlined_7_2;
float v2_noise_3_2;
float noise_3_return_value_inlined_8_2;
float fbm3_return_value_inlined_18_2;
float d_map_2;
vec3 gp_plane_2;
vec4 p_plane_2;
bool plane_has_returned_2;
float plane_return_value_2;
float plane_return_value_inlined_19_2;
float a_boolUnion_2;
float b_boolUnion_2;
bool boolUnion_has_returned_2;
float boolUnion_return_value_2;
float boolUnion_return_value_inlined_20_2;
float map_return_value_inlined_31_2;
vec2 spheretracing_return_value_inlined_37_2;
vec2 td_getPixel_2;
vec3 p_getNormal_2;
float dens_getNormal_2;
bool getNormal_has_returned_2;
vec3 getNormal_return_value_2;
vec3 n_getNormal_2;
vec3 p_map_detailed_2;
bool map_detailed_has_returned_2;
float map_detailed_return_value_2;
float rock_return_value_inlined_21_2;
vec3 p_fbm3_high_2;
float a_fbm3_high_2;
float f_fbm3_high_2;
bool fbm3_high_has_returned_2;
float fbm3_high_return_value_2;
float ret_fbm3_high_2;
float amp_fbm3_high_2;
float frq_fbm3_high_2;
int i_fbm3_high_2;
float noise_3_return_value_inlined_9_2;
float n_fbm3_high_2;
float fbm3_high_return_value_inlined_22_2;
float d_map_detailed_2;
float plane_return_value_inlined_23_2;
float boolUnion_return_value_inlined_24_2;
float map_detailed_return_value_inlined_25_2;
float map_detailed_return_value_inlined_26_2;
float map_detailed_return_value_inlined_27_2;
float map_detailed_return_value_inlined_28_2;
vec3 getNormal_return_value_inlined_38_2;
vec3 n_getPixel_2;
vec3 p_getOcclusion_2;
vec3 n_getOcclusion_2;
bool getOcclusion_has_returned_2;
vec2 getOcclusion_return_value_2;
vec2 r_getOcclusion_2;
int i_getOcclusion_2;
float f_getOcclusion_2;
float hao_getOcclusion_2;
float hc_getOcclusion_2;
float map_return_value_inlined_29_2;
float dao_getOcclusion_2;
float map_return_value_inlined_30_2;
float dc_getOcclusion_2;
vec2 getOcclusion_return_value_inlined_39_2;
vec2 occ_getPixel_2;
vec3 light_getPixel_2;
vec3 color_getPixel_2;
vec3 p_getStoneColor_2;
float c_getStoneColor_2;
vec3 l_getStoneColor_2;
vec3 n_getStoneColor_2;
vec3 e_getStoneColor_2;
bool getStoneColor_has_returned_2;
vec3 getStoneColor_return_value_2;
float noise_3_return_value_inlined_32_2;
float ic_getStoneColor_2;
vec3 base_getStoneColor_2;
vec3 sand_getStoneColor_2;
vec3 color_getStoneColor_2;
float f_getStoneColor_2;
vec3 n_diffuse_2;
vec3 l_diffuse_2;
float p_diffuse_2;
bool diffuse_has_returned_2;
float diffuse_return_value_2;
float diffuse_return_value_inlined_33_2;
vec3 n_specular_2;
vec3 l_specular_2;
vec3 e_specular_2;
float s_specular_2;
bool specular_has_returned_2;
float specular_return_value_2;
float nrm_specular_2;
float specular_return_value_inlined_34_2;
float specular_return_value_inlined_35_2;
vec3 getStoneColor_return_value_inlined_40_2;
vec3 getPixel_return_value_inlined_41_2;
vec3 c_saturation_2;
float t_saturation_2;
bool saturation_has_returned_2;
vec3 saturation_return_value_2;
vec3 saturation_return_value_inlined_42_2;
vec2 iuv_mainImage_2;
float vgn_mainImage_2;
sdLine_return_value_inlined_29_1 = iTime * 0.3;
color_mainImage_2 = vec3(0.0);
for(     i_mainImage_2 = - 1;
i_mainImage_2 <= 1; i_mainImage_2 ++)
{
for(       j_mainImage_2 = - 1;
j_mainImage_2 <= 1; j_mainImage_2 ++)
{
q3_chalk_1 = gl_FragCoord.xy + vec2(i_mainImage_2, j_mainImage_2) / 3.0;
p_fbm_1 = q3_chalk_1;
ff_flattened_block_1_blackboard_1 = sdLine_return_value_inlined_29_1;
getPixel_has_returned_2 = false;
fragCoord_chalk_1 = p_fbm_1 / iResolution.xy * 2.0 - 1.0;
w_flattened_block_1_blackboard_1 = fragCoord_chalk_1;
w_flattened_block_1_blackboard_1.x *= iResolution.x / iResolution.y;
ang_getPixel_2 = vec3(0.0, 0.2, ff_flattened_block_1_blackboard_1);
if(iMouse.z > 0.0)
{
ang_getPixel_2 = vec3(0.0, clamp(2.0 - iMouse.y * 0.01, 0.0, 3.1415), iMouse.x * 0.01);
}
ang_fromEuler_2 = ang_getPixel_2;
fromEuler_has_returned_2 = false;
intersect_return_value_inlined_38_1 = vec2(sin(ang_fromEuler_2.x), cos(ang_fromEuler_2.x));
grad_return_value_inlined_0_1 = vec2(sin(ang_fromEuler_2.y), cos(ang_fromEuler_2.y));
w_altitude_1 = vec2(sin(ang_fromEuler_2.z), cos(ang_fromEuler_2.z));
m_fromEuler_2[0] = vec3(intersect_return_value_inlined_38_1.y * w_altitude_1.y + intersect_return_value_inlined_38_1.x * grad_return_value_inlined_0_1.x * w_altitude_1.x, intersect_return_value_inlined_38_1.y * grad_return_value_inlined_0_1.x * w_altitude_1.x + w_altitude_1.y * intersect_return_value_inlined_38_1.x, - grad_return_value_inlined_0_1.y * w_altitude_1.x);
m_fromEuler_2[1] = vec3(- grad_return_value_inlined_0_1.y * intersect_return_value_inlined_38_1.x, intersect_return_value_inlined_38_1.y * grad_return_value_inlined_0_1.y, grad_return_value_inlined_0_1.x);
m_fromEuler_2[2] = vec3(w_altitude_1.y * intersect_return_value_inlined_38_1.x * grad_return_value_inlined_0_1.x + intersect_return_value_inlined_38_1.y * w_altitude_1.x, intersect_return_value_inlined_38_1.x * w_altitude_1.x - intersect_return_value_inlined_38_1.y * w_altitude_1.y * grad_return_value_inlined_0_1.x, grad_return_value_inlined_0_1.y * w_altitude_1.y);
fromEuler_return_value_2 = m_fromEuler_2;
fromEuler_has_returned_2 = true;
fromEuler_return_value_inlined_36_2 = fromEuler_return_value_2;
rot_getPixel_2 = fromEuler_return_value_inlined_36_2;
ori_getPixel_2 = vec3(0.0, 0.0, 2.8);
dir_getPixel_2 = normalize(vec3(w_flattened_block_1_blackboard_1.xy, - 2.0));
ori_getPixel_2 = ori_getPixel_2 * rot_getPixel_2;
dir_getPixel_2 = dir_getPixel_2 * rot_getPixel_2;
chalk_return_value_1 = ori_getPixel_2;
dir_spheretracing_2 = dir_getPixel_2;
p_spheretracing_2 = p_getPixel_2;
cro_has_returned_1 = false;
b_cro_1 = vec2(0.0);
for(         n_grad_1 = 0;
n_grad_1 < NUM_STEPS_2; n_grad_1 ++)
{
p_spheretracing_2 = chalk_return_value_1 + dir_spheretracing_2 * b_cro_1.x;
p_map_2 = p_spheretracing_2;
intersect_has_returned_1 = false;
p_rock_2 = p_map_2;
grad_has_returned_1 = false;
p_sphere_2 = p_rock_2;
dy_chalk_1 = 1.0;
sphere_has_returned_2 = false;
fbm_return_value_inlined_8_1 = length(p_sphere_2) - dy_chalk_1;
sphere_has_returned_2 = true;
sphere_return_value_inlined_12_2 = fbm_return_value_inlined_8_1;
cro_return_value_inlined_5_1 = sphere_return_value_inlined_12_2;
for(           i_rock_2 = 0;
i_rock_2 < 9; i_rock_2 ++)
{
m_blackboard_1 = float(i_rock_2);
sdLine_return_value_inlined_16_1 = m_blackboard_1;
hash11_has_returned_2 = false;
hash11_return_value_2 = fract(sin(sdLine_return_value_inlined_16_1 * 727.1) * 435.545);
hash11_has_returned_2 = true;
hash11_return_value_inlined_13_2 = hash11_return_value_2;
cro_return_value_inlined_6_1 = 2.5 + hash11_return_value_inlined_13_2;
fbm_return_value_inlined_14_1 = m_blackboard_1;
altitude_has_returned_1 = false;
col_mainImage_1 = vec3(127.231, 491.7, 718.423) * fbm_return_value_inlined_14_1;
hash31_return_value_2 = fract(sin(col_mainImage_1) * 435.543);
altitude_has_returned_1 = true;
hash31_return_value_inlined_14_2 = hash31_return_value_2;
v_rock_2 = normalize(hash31_return_value_inlined_14_2 * 2.0 - 1.0);
p_sphere_2 = p_rock_2 + v_rock_2 * cro_return_value_inlined_6_1;
dy_chalk_1 = cro_return_value_inlined_6_1 * 0.8;
sphere_has_returned_2 = false;
fbm_return_value_inlined_8_1 = length(p_sphere_2) - dy_chalk_1;
sphere_has_returned_2 = true;
sphere_return_value_inlined_15_2 = fbm_return_value_inlined_8_1;
a_boolSmoothSub_2 = cro_return_value_inlined_5_1;
s_fbm_1 = sphere_return_value_inlined_15_2;
fbm_return_value_inlined_39_1 = 0.03;
chalk_has_returned_1 = false;
a_boolSmoothIntersect_2 = a_boolSmoothSub_2;
b_boolSmoothIntersect_2 = - s_fbm_1;
fbm_return_value_inlined_12_1 = fbm_return_value_inlined_39_1;
boolSmoothIntersect_has_returned_2 = false;
h_boolSmoothIntersect_2 = clamp(0.5 + 0.5 * (b_boolSmoothIntersect_2 - a_boolSmoothIntersect_2) / fbm_return_value_inlined_12_1, 0.0, 1.0);
boolSmoothIntersect_return_value_2 = mix(a_boolSmoothIntersect_2, b_boolSmoothIntersect_2, h_boolSmoothIntersect_2) + fbm_return_value_inlined_12_1 * h_boolSmoothIntersect_2 * (1.0 - h_boolSmoothIntersect_2);
boolSmoothIntersect_has_returned_2 = true;
sdLine_return_value_inlined_17_1 = boolSmoothIntersect_return_value_2;
sdLine_return_value_1 = sdLine_return_value_inlined_17_1;
chalk_has_returned_1 = true;
boolSmoothSub_return_value_inlined_16_2 = sdLine_return_value_1;
cro_return_value_inlined_5_1 = boolSmoothSub_return_value_inlined_16_2;
}
rock_return_value_2 = cro_return_value_inlined_5_1;
grad_has_returned_1 = true;
sdLine_return_value_inlined_19_1 = rock_return_value_2;
p_fbm3_2 = p_map_2 * 4.0;
fbm_return_value_inlined_24_1 = 0.4;
f_fbm3_2 = 2.96;
fbm3_has_returned_2 = false;
p_noise_3_2 = p_fbm3_2;
blackboard_has_returned_1 = false;
i_noise_3_2 = floor(p_noise_3_2);
f_noise_3_2 = fract(p_noise_3_2);
u_noise_3_2 = f_noise_3_2 * f_noise_3_2 * (3.0 - 2.0 * f_noise_3_2);
p1_chalk_1 = i_noise_3_2.xy + i_noise_3_2.z * vec2(5.0);
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 0.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
hash12_return_value_inlined_0_2 = sdLine_return_value_inlined_22_1;
sdLine_return_value_inlined_21_1 = hash12_return_value_inlined_0_2;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 0.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
h_intersect_1 = sdLine_return_value_inlined_22_1;
b_noise_3_2 = h_intersect_1;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 1.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
sdLine_return_value_inlined_35_1 = sdLine_return_value_inlined_22_1;
sdLine_return_value_inlined_28_1 = sdLine_return_value_inlined_35_1;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 1.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
hash12_return_value_inlined_3_2 = sdLine_return_value_inlined_22_1;
cro_return_value_1 = hash12_return_value_inlined_3_2;
d_blackboard_1 = mix(mix(sdLine_return_value_inlined_21_1, b_noise_3_2, u_noise_3_2.x), mix(sdLine_return_value_inlined_28_1, cro_return_value_1, u_noise_3_2.x), u_noise_3_2.y);
p1_chalk_1 += vec2(5.0);
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 0.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
hash12_return_value_inlined_4_2 = sdLine_return_value_inlined_22_1;
sdLine_return_value_inlined_21_1 = hash12_return_value_inlined_4_2;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 0.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
hash12_return_value_inlined_5_2 = sdLine_return_value_inlined_22_1;
b_noise_3_2 = hash12_return_value_inlined_5_2;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 1.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
hash12_return_value_inlined_6_2 = sdLine_return_value_inlined_22_1;
sdLine_return_value_inlined_28_1 = hash12_return_value_inlined_6_2;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 1.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
fbm_return_value_inlined_15_1 = sdLine_return_value_inlined_22_1;
cro_return_value_1 = fbm_return_value_inlined_15_1;
v2_noise_3_2 = mix(mix(sdLine_return_value_inlined_21_1, b_noise_3_2, u_noise_3_2.x), mix(sdLine_return_value_inlined_28_1, cro_return_value_1, u_noise_3_2.x), u_noise_3_2.y);
sdLine_return_value_inlined_18_1 = max(mix(d_blackboard_1, v2_noise_3_2, u_noise_3_2.z), 0.0);
blackboard_has_returned_1 = true;
noise_3_return_value_inlined_8_2 = sdLine_return_value_inlined_18_1;
fbm3_return_value_2 = noise_3_return_value_inlined_8_2;
fbm3_has_returned_2 = true;
sdLine_return_value_inlined_10_1 = fbm3_return_value_2;
d_map_2 = sdLine_return_value_inlined_19_1 + sdLine_return_value_inlined_10_1 * DISPLACEMENT_2;
gp_plane_2 = p_map_2;
p_plane_2 = vec4(0.0, 1.0, 0.0, 1.0);
plane_has_returned_2 = false;
plane_return_value_2 = dot(p_plane_2.xyz, gp_plane_2 + p_plane_2.xyz * p_plane_2.w);
plane_has_returned_2 = true;
h_sdLine_1 = plane_return_value_2;
a_boolUnion_2 = d_map_2;
b_boolUnion_2 = h_sdLine_1;
boolUnion_has_returned_2 = false;
fbm_return_value_inlined_40_1 = min(a_boolUnion_2, b_boolUnion_2);
boolUnion_has_returned_2 = true;
boolUnion_return_value_inlined_20_2 = fbm_return_value_inlined_40_1;
d_map_2 = boolUnion_return_value_inlined_20_2;
x_chalk_1 = d_map_2;
intersect_has_returned_1 = true;
map_return_value_inlined_31_2 = x_chalk_1;
b_cro_1.y = map_return_value_inlined_31_2;
if(b_cro_1.y < TRESHOLD_2)
{
break;
}
b_cro_1.x += (b_cro_1.y - TRESHOLD_2) * 0.9;
}
p3_chalk_1 = b_cro_1;
cro_has_returned_1 = true;
p_getPixel_2 = p_spheretracing_2;
ba_sdLine_1 = p3_chalk_1;
c_altitude_1 = ba_sdLine_1;
chalk_return_value_inlined_42_1 = p_getPixel_2;
m2_blackboard_1 = c_altitude_1.y;
noise_has_returned_1 = false;
blackboard_return_value_1 = vec3(chalk_return_value_inlined_42_1.x + EPSILON_2, chalk_return_value_inlined_42_1.y, chalk_return_value_inlined_42_1.z);
map_detailed_has_returned_2 = false;
p_rock_2 = blackboard_return_value_1;
grad_has_returned_1 = false;
p_sphere_2 = p_rock_2;
dy_chalk_1 = 1.0;
sphere_has_returned_2 = false;
fbm_return_value_inlined_8_1 = length(p_sphere_2) - dy_chalk_1;
sphere_has_returned_2 = true;
sphere_return_value_inlined_12_2 = fbm_return_value_inlined_8_1;
cro_return_value_inlined_5_1 = sphere_return_value_inlined_12_2;
for(         i_rock_2 = 0;
i_rock_2 < 9; i_rock_2 ++)
{
m_blackboard_1 = float(i_rock_2);
sdLine_return_value_inlined_16_1 = m_blackboard_1;
hash11_has_returned_2 = false;
hash11_return_value_2 = fract(sin(sdLine_return_value_inlined_16_1 * 727.1) * 435.545);
hash11_has_returned_2 = true;
hash11_return_value_inlined_13_2 = hash11_return_value_2;
cro_return_value_inlined_6_1 = 2.5 + hash11_return_value_inlined_13_2;
fbm_return_value_inlined_14_1 = m_blackboard_1;
altitude_has_returned_1 = false;
col_mainImage_1 = vec3(127.231, 491.7, 718.423) * fbm_return_value_inlined_14_1;
hash31_return_value_2 = fract(sin(col_mainImage_1) * 435.543);
altitude_has_returned_1 = true;
hash31_return_value_inlined_14_2 = hash31_return_value_2;
v_rock_2 = normalize(hash31_return_value_inlined_14_2 * 2.0 - 1.0);
p_sphere_2 = p_rock_2 + v_rock_2 * cro_return_value_inlined_6_1;
dy_chalk_1 = cro_return_value_inlined_6_1 * 0.8;
sphere_has_returned_2 = false;
fbm_return_value_inlined_8_1 = length(p_sphere_2) - dy_chalk_1;
sphere_has_returned_2 = true;
sphere_return_value_inlined_15_2 = fbm_return_value_inlined_8_1;
a_boolSmoothSub_2 = cro_return_value_inlined_5_1;
s_fbm_1 = sphere_return_value_inlined_15_2;
fbm_return_value_inlined_39_1 = 0.03;
chalk_has_returned_1 = false;
a_boolSmoothIntersect_2 = a_boolSmoothSub_2;
b_boolSmoothIntersect_2 = - s_fbm_1;
fbm_return_value_inlined_12_1 = fbm_return_value_inlined_39_1;
boolSmoothIntersect_has_returned_2 = false;
h_boolSmoothIntersect_2 = clamp(0.5 + 0.5 * (b_boolSmoothIntersect_2 - a_boolSmoothIntersect_2) / fbm_return_value_inlined_12_1, 0.0, 1.0);
boolSmoothIntersect_return_value_2 = mix(a_boolSmoothIntersect_2, b_boolSmoothIntersect_2, h_boolSmoothIntersect_2) + fbm_return_value_inlined_12_1 * h_boolSmoothIntersect_2 * (1.0 - h_boolSmoothIntersect_2);
boolSmoothIntersect_has_returned_2 = true;
sdLine_return_value_inlined_17_1 = boolSmoothIntersect_return_value_2;
sdLine_return_value_1 = sdLine_return_value_inlined_17_1;
chalk_has_returned_1 = true;
boolSmoothSub_return_value_inlined_16_2 = sdLine_return_value_1;
cro_return_value_inlined_5_1 = boolSmoothSub_return_value_inlined_16_2;
}
rock_return_value_2 = cro_return_value_inlined_5_1;
grad_has_returned_1 = true;
rock_return_value_inlined_21_2 = rock_return_value_2;
p_fbm3_high_2 = blackboard_return_value_1 * 4.0;
y_chalk_1 = 0.4;
sdLine_return_value_inlined_31_1 = 2.96;
fbm3_high_has_returned_2 = false;
fbm_return_value_inlined_9_1 = 0.0;
amp_fbm3_high_2 = 1.0;
frq_fbm3_high_2 = 1.0;
for(         i_fbm3_high_2 = 0;
i_fbm3_high_2 < 5; i_fbm3_high_2 ++)
{
p_noise_3_2 = p_fbm3_high_2 * frq_fbm3_high_2;
blackboard_has_returned_1 = false;
i_noise_3_2 = floor(p_noise_3_2);
f_noise_3_2 = fract(p_noise_3_2);
u_noise_3_2 = f_noise_3_2 * f_noise_3_2 * (3.0 - 2.0 * f_noise_3_2);
p1_chalk_1 = i_noise_3_2.xy + i_noise_3_2.z * vec2(5.0);
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 0.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
hash12_return_value_inlined_0_2 = sdLine_return_value_inlined_22_1;
sdLine_return_value_inlined_21_1 = hash12_return_value_inlined_0_2;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 0.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
h_intersect_1 = sdLine_return_value_inlined_22_1;
b_noise_3_2 = h_intersect_1;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 1.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
sdLine_return_value_inlined_35_1 = sdLine_return_value_inlined_22_1;
sdLine_return_value_inlined_28_1 = sdLine_return_value_inlined_35_1;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 1.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
hash12_return_value_inlined_3_2 = sdLine_return_value_inlined_22_1;
cro_return_value_1 = hash12_return_value_inlined_3_2;
d_blackboard_1 = mix(mix(sdLine_return_value_inlined_21_1, b_noise_3_2, u_noise_3_2.x), mix(sdLine_return_value_inlined_28_1, cro_return_value_1, u_noise_3_2.x), u_noise_3_2.y);
p1_chalk_1 += vec2(5.0);
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 0.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
hash12_return_value_inlined_4_2 = sdLine_return_value_inlined_22_1;
sdLine_return_value_inlined_21_1 = hash12_return_value_inlined_4_2;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 0.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
hash12_return_value_inlined_5_2 = sdLine_return_value_inlined_22_1;
b_noise_3_2 = hash12_return_value_inlined_5_2;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 1.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
hash12_return_value_inlined_6_2 = sdLine_return_value_inlined_22_1;
sdLine_return_value_inlined_28_1 = hash12_return_value_inlined_6_2;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 1.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
fbm_return_value_inlined_15_1 = sdLine_return_value_inlined_22_1;
cro_return_value_1 = fbm_return_value_inlined_15_1;
v2_noise_3_2 = mix(mix(sdLine_return_value_inlined_21_1, b_noise_3_2, u_noise_3_2.x), mix(sdLine_return_value_inlined_28_1, cro_return_value_1, u_noise_3_2.x), u_noise_3_2.y);
sdLine_return_value_inlined_18_1 = max(mix(d_blackboard_1, v2_noise_3_2, u_noise_3_2.z), 0.0);
blackboard_has_returned_1 = true;
fbm_return_value_inlined_13_1 = sdLine_return_value_inlined_18_1;
n_fbm3_high_2 = pow(max(fbm_return_value_inlined_13_1, 1e-9), 2.0);
fbm_return_value_inlined_9_1 += n_fbm3_high_2 * amp_fbm3_high_2;
frq_fbm3_high_2 *= sdLine_return_value_inlined_31_1;
amp_fbm3_high_2 *= y_chalk_1 * (pow(max(n_fbm3_high_2, 1e-9), 0.2));
}
f_fbm_1 = fbm_return_value_inlined_9_1;
fbm3_high_has_returned_2 = true;
fbm_return_value_inlined_37_1 = f_fbm_1;
sdLine_return_value_inlined_33_1 = rock_return_value_inlined_21_2 + fbm_return_value_inlined_37_1 * DISPLACEMENT_2;
gp_plane_2 = blackboard_return_value_1;
p_plane_2 = vec4(0.0, 1.0, 0.0, 1.0);
plane_has_returned_2 = false;
plane_return_value_2 = dot(p_plane_2.xyz, gp_plane_2 + p_plane_2.xyz * p_plane_2.w);
plane_has_returned_2 = true;
ww_blackboard_1 = plane_return_value_2;
a_boolUnion_2 = sdLine_return_value_inlined_33_1;
b_boolUnion_2 = ww_blackboard_1;
boolUnion_has_returned_2 = false;
fbm_return_value_inlined_40_1 = min(a_boolUnion_2, b_boolUnion_2);
boolUnion_has_returned_2 = true;
boolUnion_return_value_inlined_24_2 = fbm_return_value_inlined_40_1;
sdLine_return_value_inlined_33_1 = boolUnion_return_value_inlined_24_2;
sdLine_return_value_inlined_36_1 = sdLine_return_value_inlined_33_1;
map_detailed_has_returned_2 = true;
d_chalk_1 = sdLine_return_value_inlined_36_1;
n_getNormal_2.x = d_chalk_1;
blackboard_return_value_1 = vec3(chalk_return_value_inlined_42_1.x, chalk_return_value_inlined_42_1.y + EPSILON_2, chalk_return_value_inlined_42_1.z);
map_detailed_has_returned_2 = false;
p_rock_2 = blackboard_return_value_1;
grad_has_returned_1 = false;
p_sphere_2 = p_rock_2;
dy_chalk_1 = 1.0;
sphere_has_returned_2 = false;
fbm_return_value_inlined_8_1 = length(p_sphere_2) - dy_chalk_1;
sphere_has_returned_2 = true;
sphere_return_value_inlined_12_2 = fbm_return_value_inlined_8_1;
cro_return_value_inlined_5_1 = sphere_return_value_inlined_12_2;
for(         i_rock_2 = 0;
i_rock_2 < 9; i_rock_2 ++)
{
m_blackboard_1 = float(i_rock_2);
sdLine_return_value_inlined_16_1 = m_blackboard_1;
hash11_has_returned_2 = false;
hash11_return_value_2 = fract(sin(sdLine_return_value_inlined_16_1 * 727.1) * 435.545);
hash11_has_returned_2 = true;
hash11_return_value_inlined_13_2 = hash11_return_value_2;
cro_return_value_inlined_6_1 = 2.5 + hash11_return_value_inlined_13_2;
fbm_return_value_inlined_14_1 = m_blackboard_1;
altitude_has_returned_1 = false;
col_mainImage_1 = vec3(127.231, 491.7, 718.423) * fbm_return_value_inlined_14_1;
hash31_return_value_2 = fract(sin(col_mainImage_1) * 435.543);
altitude_has_returned_1 = true;
hash31_return_value_inlined_14_2 = hash31_return_value_2;
v_rock_2 = normalize(hash31_return_value_inlined_14_2 * 2.0 - 1.0);
p_sphere_2 = p_rock_2 + v_rock_2 * cro_return_value_inlined_6_1;
dy_chalk_1 = cro_return_value_inlined_6_1 * 0.8;
sphere_has_returned_2 = false;
fbm_return_value_inlined_8_1 = length(p_sphere_2) - dy_chalk_1;
sphere_has_returned_2 = true;
sphere_return_value_inlined_15_2 = fbm_return_value_inlined_8_1;
a_boolSmoothSub_2 = cro_return_value_inlined_5_1;
s_fbm_1 = sphere_return_value_inlined_15_2;
fbm_return_value_inlined_39_1 = 0.03;
chalk_has_returned_1 = false;
a_boolSmoothIntersect_2 = a_boolSmoothSub_2;
b_boolSmoothIntersect_2 = - s_fbm_1;
fbm_return_value_inlined_12_1 = fbm_return_value_inlined_39_1;
boolSmoothIntersect_has_returned_2 = false;
h_boolSmoothIntersect_2 = clamp(0.5 + 0.5 * (b_boolSmoothIntersect_2 - a_boolSmoothIntersect_2) / fbm_return_value_inlined_12_1, 0.0, 1.0);
boolSmoothIntersect_return_value_2 = mix(a_boolSmoothIntersect_2, b_boolSmoothIntersect_2, h_boolSmoothIntersect_2) + fbm_return_value_inlined_12_1 * h_boolSmoothIntersect_2 * (1.0 - h_boolSmoothIntersect_2);
boolSmoothIntersect_has_returned_2 = true;
sdLine_return_value_inlined_17_1 = boolSmoothIntersect_return_value_2;
sdLine_return_value_1 = sdLine_return_value_inlined_17_1;
chalk_has_returned_1 = true;
boolSmoothSub_return_value_inlined_16_2 = sdLine_return_value_1;
cro_return_value_inlined_5_1 = boolSmoothSub_return_value_inlined_16_2;
}
rock_return_value_2 = cro_return_value_inlined_5_1;
grad_has_returned_1 = true;
rock_return_value_inlined_21_2 = rock_return_value_2;
p_fbm3_high_2 = blackboard_return_value_1 * 4.0;
y_chalk_1 = 0.4;
sdLine_return_value_inlined_31_1 = 2.96;
fbm3_high_has_returned_2 = false;
fbm_return_value_inlined_9_1 = 0.0;
amp_fbm3_high_2 = 1.0;
frq_fbm3_high_2 = 1.0;
for(         i_fbm3_high_2 = 0;
i_fbm3_high_2 < 5; i_fbm3_high_2 ++)
{
p_noise_3_2 = p_fbm3_high_2 * frq_fbm3_high_2;
blackboard_has_returned_1 = false;
i_noise_3_2 = floor(p_noise_3_2);
f_noise_3_2 = fract(p_noise_3_2);
u_noise_3_2 = f_noise_3_2 * f_noise_3_2 * (3.0 - 2.0 * f_noise_3_2);
p1_chalk_1 = i_noise_3_2.xy + i_noise_3_2.z * vec2(5.0);
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 0.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
hash12_return_value_inlined_0_2 = sdLine_return_value_inlined_22_1;
sdLine_return_value_inlined_21_1 = hash12_return_value_inlined_0_2;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 0.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
h_intersect_1 = sdLine_return_value_inlined_22_1;
b_noise_3_2 = h_intersect_1;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 1.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
sdLine_return_value_inlined_35_1 = sdLine_return_value_inlined_22_1;
sdLine_return_value_inlined_28_1 = sdLine_return_value_inlined_35_1;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 1.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
hash12_return_value_inlined_3_2 = sdLine_return_value_inlined_22_1;
cro_return_value_1 = hash12_return_value_inlined_3_2;
d_blackboard_1 = mix(mix(sdLine_return_value_inlined_21_1, b_noise_3_2, u_noise_3_2.x), mix(sdLine_return_value_inlined_28_1, cro_return_value_1, u_noise_3_2.x), u_noise_3_2.y);
p1_chalk_1 += vec2(5.0);
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 0.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
hash12_return_value_inlined_4_2 = sdLine_return_value_inlined_22_1;
sdLine_return_value_inlined_21_1 = hash12_return_value_inlined_4_2;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 0.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
hash12_return_value_inlined_5_2 = sdLine_return_value_inlined_22_1;
b_noise_3_2 = hash12_return_value_inlined_5_2;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 1.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
hash12_return_value_inlined_6_2 = sdLine_return_value_inlined_22_1;
sdLine_return_value_inlined_28_1 = hash12_return_value_inlined_6_2;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 1.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
fbm_return_value_inlined_15_1 = sdLine_return_value_inlined_22_1;
cro_return_value_1 = fbm_return_value_inlined_15_1;
v2_noise_3_2 = mix(mix(sdLine_return_value_inlined_21_1, b_noise_3_2, u_noise_3_2.x), mix(sdLine_return_value_inlined_28_1, cro_return_value_1, u_noise_3_2.x), u_noise_3_2.y);
sdLine_return_value_inlined_18_1 = max(mix(d_blackboard_1, v2_noise_3_2, u_noise_3_2.z), 0.0);
blackboard_has_returned_1 = true;
fbm_return_value_inlined_13_1 = sdLine_return_value_inlined_18_1;
n_fbm3_high_2 = pow(max(fbm_return_value_inlined_13_1, 1e-9), 2.0);
fbm_return_value_inlined_9_1 += n_fbm3_high_2 * amp_fbm3_high_2;
frq_fbm3_high_2 *= sdLine_return_value_inlined_31_1;
amp_fbm3_high_2 *= y_chalk_1 * (pow(max(n_fbm3_high_2, 1e-9), 0.2));
}
f_fbm_1 = fbm_return_value_inlined_9_1;
fbm3_high_has_returned_2 = true;
fbm_return_value_inlined_37_1 = f_fbm_1;
sdLine_return_value_inlined_33_1 = rock_return_value_inlined_21_2 + fbm_return_value_inlined_37_1 * DISPLACEMENT_2;
gp_plane_2 = blackboard_return_value_1;
p_plane_2 = vec4(0.0, 1.0, 0.0, 1.0);
plane_has_returned_2 = false;
plane_return_value_2 = dot(p_plane_2.xyz, gp_plane_2 + p_plane_2.xyz * p_plane_2.w);
plane_has_returned_2 = true;
ww_blackboard_1 = plane_return_value_2;
a_boolUnion_2 = sdLine_return_value_inlined_33_1;
b_boolUnion_2 = ww_blackboard_1;
boolUnion_has_returned_2 = false;
fbm_return_value_inlined_40_1 = min(a_boolUnion_2, b_boolUnion_2);
boolUnion_has_returned_2 = true;
boolUnion_return_value_inlined_24_2 = fbm_return_value_inlined_40_1;
sdLine_return_value_inlined_33_1 = boolUnion_return_value_inlined_24_2;
sdLine_return_value_inlined_36_1 = sdLine_return_value_inlined_33_1;
map_detailed_has_returned_2 = true;
noise_return_value_1 = sdLine_return_value_inlined_36_1;
n_getNormal_2.y = noise_return_value_1;
blackboard_return_value_1 = vec3(chalk_return_value_inlined_42_1.x, chalk_return_value_inlined_42_1.y, chalk_return_value_inlined_42_1.z + EPSILON_2);
map_detailed_has_returned_2 = false;
p_rock_2 = blackboard_return_value_1;
grad_has_returned_1 = false;
p_sphere_2 = p_rock_2;
dy_chalk_1 = 1.0;
sphere_has_returned_2 = false;
fbm_return_value_inlined_8_1 = length(p_sphere_2) - dy_chalk_1;
sphere_has_returned_2 = true;
sphere_return_value_inlined_12_2 = fbm_return_value_inlined_8_1;
cro_return_value_inlined_5_1 = sphere_return_value_inlined_12_2;
for(         i_rock_2 = 0;
i_rock_2 < 9; i_rock_2 ++)
{
m_blackboard_1 = float(i_rock_2);
sdLine_return_value_inlined_16_1 = m_blackboard_1;
hash11_has_returned_2 = false;
hash11_return_value_2 = fract(sin(sdLine_return_value_inlined_16_1 * 727.1) * 435.545);
hash11_has_returned_2 = true;
hash11_return_value_inlined_13_2 = hash11_return_value_2;
cro_return_value_inlined_6_1 = 2.5 + hash11_return_value_inlined_13_2;
fbm_return_value_inlined_14_1 = m_blackboard_1;
altitude_has_returned_1 = false;
col_mainImage_1 = vec3(127.231, 491.7, 718.423) * fbm_return_value_inlined_14_1;
hash31_return_value_2 = fract(sin(col_mainImage_1) * 435.543);
altitude_has_returned_1 = true;
hash31_return_value_inlined_14_2 = hash31_return_value_2;
v_rock_2 = normalize(hash31_return_value_inlined_14_2 * 2.0 - 1.0);
p_sphere_2 = p_rock_2 + v_rock_2 * cro_return_value_inlined_6_1;
dy_chalk_1 = cro_return_value_inlined_6_1 * 0.8;
sphere_has_returned_2 = false;
fbm_return_value_inlined_8_1 = length(p_sphere_2) - dy_chalk_1;
sphere_has_returned_2 = true;
sphere_return_value_inlined_15_2 = fbm_return_value_inlined_8_1;
a_boolSmoothSub_2 = cro_return_value_inlined_5_1;
s_fbm_1 = sphere_return_value_inlined_15_2;
fbm_return_value_inlined_39_1 = 0.03;
chalk_has_returned_1 = false;
a_boolSmoothIntersect_2 = a_boolSmoothSub_2;
b_boolSmoothIntersect_2 = - s_fbm_1;
fbm_return_value_inlined_12_1 = fbm_return_value_inlined_39_1;
boolSmoothIntersect_has_returned_2 = false;
h_boolSmoothIntersect_2 = clamp(0.5 + 0.5 * (b_boolSmoothIntersect_2 - a_boolSmoothIntersect_2) / fbm_return_value_inlined_12_1, 0.0, 1.0);
boolSmoothIntersect_return_value_2 = mix(a_boolSmoothIntersect_2, b_boolSmoothIntersect_2, h_boolSmoothIntersect_2) + fbm_return_value_inlined_12_1 * h_boolSmoothIntersect_2 * (1.0 - h_boolSmoothIntersect_2);
boolSmoothIntersect_has_returned_2 = true;
sdLine_return_value_inlined_17_1 = boolSmoothIntersect_return_value_2;
sdLine_return_value_1 = sdLine_return_value_inlined_17_1;
chalk_has_returned_1 = true;
boolSmoothSub_return_value_inlined_16_2 = sdLine_return_value_1;
cro_return_value_inlined_5_1 = boolSmoothSub_return_value_inlined_16_2;
}
rock_return_value_2 = cro_return_value_inlined_5_1;
grad_has_returned_1 = true;
rock_return_value_inlined_21_2 = rock_return_value_2;
p_fbm3_high_2 = blackboard_return_value_1 * 4.0;
y_chalk_1 = 0.4;
sdLine_return_value_inlined_31_1 = 2.96;
fbm3_high_has_returned_2 = false;
fbm_return_value_inlined_9_1 = 0.0;
amp_fbm3_high_2 = 1.0;
frq_fbm3_high_2 = 1.0;
for(         i_fbm3_high_2 = 0;
i_fbm3_high_2 < 5; i_fbm3_high_2 ++)
{
p_noise_3_2 = p_fbm3_high_2 * frq_fbm3_high_2;
blackboard_has_returned_1 = false;
i_noise_3_2 = floor(p_noise_3_2);
f_noise_3_2 = fract(p_noise_3_2);
u_noise_3_2 = f_noise_3_2 * f_noise_3_2 * (3.0 - 2.0 * f_noise_3_2);
p1_chalk_1 = i_noise_3_2.xy + i_noise_3_2.z * vec2(5.0);
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 0.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
hash12_return_value_inlined_0_2 = sdLine_return_value_inlined_22_1;
sdLine_return_value_inlined_21_1 = hash12_return_value_inlined_0_2;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 0.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
h_intersect_1 = sdLine_return_value_inlined_22_1;
b_noise_3_2 = h_intersect_1;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 1.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
sdLine_return_value_inlined_35_1 = sdLine_return_value_inlined_22_1;
sdLine_return_value_inlined_28_1 = sdLine_return_value_inlined_35_1;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 1.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
hash12_return_value_inlined_3_2 = sdLine_return_value_inlined_22_1;
cro_return_value_1 = hash12_return_value_inlined_3_2;
d_blackboard_1 = mix(mix(sdLine_return_value_inlined_21_1, b_noise_3_2, u_noise_3_2.x), mix(sdLine_return_value_inlined_28_1, cro_return_value_1, u_noise_3_2.x), u_noise_3_2.y);
p1_chalk_1 += vec2(5.0);
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 0.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
hash12_return_value_inlined_4_2 = sdLine_return_value_inlined_22_1;
sdLine_return_value_inlined_21_1 = hash12_return_value_inlined_4_2;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 0.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
hash12_return_value_inlined_5_2 = sdLine_return_value_inlined_22_1;
b_noise_3_2 = hash12_return_value_inlined_5_2;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 1.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
hash12_return_value_inlined_6_2 = sdLine_return_value_inlined_22_1;
sdLine_return_value_inlined_28_1 = hash12_return_value_inlined_6_2;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 1.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
fbm_return_value_inlined_15_1 = sdLine_return_value_inlined_22_1;
cro_return_value_1 = fbm_return_value_inlined_15_1;
v2_noise_3_2 = mix(mix(sdLine_return_value_inlined_21_1, b_noise_3_2, u_noise_3_2.x), mix(sdLine_return_value_inlined_28_1, cro_return_value_1, u_noise_3_2.x), u_noise_3_2.y);
sdLine_return_value_inlined_18_1 = max(mix(d_blackboard_1, v2_noise_3_2, u_noise_3_2.z), 0.0);
blackboard_has_returned_1 = true;
fbm_return_value_inlined_13_1 = sdLine_return_value_inlined_18_1;
n_fbm3_high_2 = pow(max(fbm_return_value_inlined_13_1, 1e-9), 2.0);
fbm_return_value_inlined_9_1 += n_fbm3_high_2 * amp_fbm3_high_2;
frq_fbm3_high_2 *= sdLine_return_value_inlined_31_1;
amp_fbm3_high_2 *= y_chalk_1 * (pow(max(n_fbm3_high_2, 1e-9), 0.2));
}
f_fbm_1 = fbm_return_value_inlined_9_1;
fbm3_high_has_returned_2 = true;
fbm_return_value_inlined_37_1 = f_fbm_1;
sdLine_return_value_inlined_33_1 = rock_return_value_inlined_21_2 + fbm_return_value_inlined_37_1 * DISPLACEMENT_2;
gp_plane_2 = blackboard_return_value_1;
p_plane_2 = vec4(0.0, 1.0, 0.0, 1.0);
plane_has_returned_2 = false;
plane_return_value_2 = dot(p_plane_2.xyz, gp_plane_2 + p_plane_2.xyz * p_plane_2.w);
plane_has_returned_2 = true;
ww_blackboard_1 = plane_return_value_2;
a_boolUnion_2 = sdLine_return_value_inlined_33_1;
b_boolUnion_2 = ww_blackboard_1;
boolUnion_has_returned_2 = false;
fbm_return_value_inlined_40_1 = min(a_boolUnion_2, b_boolUnion_2);
boolUnion_has_returned_2 = true;
boolUnion_return_value_inlined_24_2 = fbm_return_value_inlined_40_1;
sdLine_return_value_inlined_33_1 = boolUnion_return_value_inlined_24_2;
sdLine_return_value_inlined_36_1 = sdLine_return_value_inlined_33_1;
map_detailed_has_returned_2 = true;
map_detailed_return_value_inlined_27_2 = sdLine_return_value_inlined_36_1;
n_getNormal_2.z = map_detailed_return_value_inlined_27_2;
blackboard_return_value_1 = chalk_return_value_inlined_42_1;
map_detailed_has_returned_2 = false;
p_rock_2 = blackboard_return_value_1;
grad_has_returned_1 = false;
p_sphere_2 = p_rock_2;
dy_chalk_1 = 1.0;
sphere_has_returned_2 = false;
fbm_return_value_inlined_8_1 = length(p_sphere_2) - dy_chalk_1;
sphere_has_returned_2 = true;
sphere_return_value_inlined_12_2 = fbm_return_value_inlined_8_1;
cro_return_value_inlined_5_1 = sphere_return_value_inlined_12_2;
for(         i_rock_2 = 0;
i_rock_2 < 9; i_rock_2 ++)
{
m_blackboard_1 = float(i_rock_2);
sdLine_return_value_inlined_16_1 = m_blackboard_1;
hash11_has_returned_2 = false;
hash11_return_value_2 = fract(sin(sdLine_return_value_inlined_16_1 * 727.1) * 435.545);
hash11_has_returned_2 = true;
hash11_return_value_inlined_13_2 = hash11_return_value_2;
cro_return_value_inlined_6_1 = 2.5 + hash11_return_value_inlined_13_2;
fbm_return_value_inlined_14_1 = m_blackboard_1;
altitude_has_returned_1 = false;
col_mainImage_1 = vec3(127.231, 491.7, 718.423) * fbm_return_value_inlined_14_1;
hash31_return_value_2 = fract(sin(col_mainImage_1) * 435.543);
altitude_has_returned_1 = true;
hash31_return_value_inlined_14_2 = hash31_return_value_2;
v_rock_2 = normalize(hash31_return_value_inlined_14_2 * 2.0 - 1.0);
p_sphere_2 = p_rock_2 + v_rock_2 * cro_return_value_inlined_6_1;
dy_chalk_1 = cro_return_value_inlined_6_1 * 0.8;
sphere_has_returned_2 = false;
fbm_return_value_inlined_8_1 = length(p_sphere_2) - dy_chalk_1;
sphere_has_returned_2 = true;
sphere_return_value_inlined_15_2 = fbm_return_value_inlined_8_1;
a_boolSmoothSub_2 = cro_return_value_inlined_5_1;
s_fbm_1 = sphere_return_value_inlined_15_2;
fbm_return_value_inlined_39_1 = 0.03;
chalk_has_returned_1 = false;
a_boolSmoothIntersect_2 = a_boolSmoothSub_2;
b_boolSmoothIntersect_2 = - s_fbm_1;
fbm_return_value_inlined_12_1 = fbm_return_value_inlined_39_1;
boolSmoothIntersect_has_returned_2 = false;
h_boolSmoothIntersect_2 = clamp(0.5 + 0.5 * (b_boolSmoothIntersect_2 - a_boolSmoothIntersect_2) / fbm_return_value_inlined_12_1, 0.0, 1.0);
boolSmoothIntersect_return_value_2 = mix(a_boolSmoothIntersect_2, b_boolSmoothIntersect_2, h_boolSmoothIntersect_2) + fbm_return_value_inlined_12_1 * h_boolSmoothIntersect_2 * (1.0 - h_boolSmoothIntersect_2);
boolSmoothIntersect_has_returned_2 = true;
sdLine_return_value_inlined_17_1 = boolSmoothIntersect_return_value_2;
sdLine_return_value_1 = sdLine_return_value_inlined_17_1;
chalk_has_returned_1 = true;
boolSmoothSub_return_value_inlined_16_2 = sdLine_return_value_1;
cro_return_value_inlined_5_1 = boolSmoothSub_return_value_inlined_16_2;
}
rock_return_value_2 = cro_return_value_inlined_5_1;
grad_has_returned_1 = true;
rock_return_value_inlined_21_2 = rock_return_value_2;
p_fbm3_high_2 = blackboard_return_value_1 * 4.0;
y_chalk_1 = 0.4;
sdLine_return_value_inlined_31_1 = 2.96;
fbm3_high_has_returned_2 = false;
fbm_return_value_inlined_9_1 = 0.0;
amp_fbm3_high_2 = 1.0;
frq_fbm3_high_2 = 1.0;
for(         i_fbm3_high_2 = 0;
i_fbm3_high_2 < 5; i_fbm3_high_2 ++)
{
p_noise_3_2 = p_fbm3_high_2 * frq_fbm3_high_2;
blackboard_has_returned_1 = false;
i_noise_3_2 = floor(p_noise_3_2);
f_noise_3_2 = fract(p_noise_3_2);
u_noise_3_2 = f_noise_3_2 * f_noise_3_2 * (3.0 - 2.0 * f_noise_3_2);
p1_chalk_1 = i_noise_3_2.xy + i_noise_3_2.z * vec2(5.0);
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 0.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
hash12_return_value_inlined_0_2 = sdLine_return_value_inlined_22_1;
sdLine_return_value_inlined_21_1 = hash12_return_value_inlined_0_2;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 0.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
h_intersect_1 = sdLine_return_value_inlined_22_1;
b_noise_3_2 = h_intersect_1;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 1.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
sdLine_return_value_inlined_35_1 = sdLine_return_value_inlined_22_1;
sdLine_return_value_inlined_28_1 = sdLine_return_value_inlined_35_1;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 1.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
hash12_return_value_inlined_3_2 = sdLine_return_value_inlined_22_1;
cro_return_value_1 = hash12_return_value_inlined_3_2;
d_blackboard_1 = mix(mix(sdLine_return_value_inlined_21_1, b_noise_3_2, u_noise_3_2.x), mix(sdLine_return_value_inlined_28_1, cro_return_value_1, u_noise_3_2.x), u_noise_3_2.y);
p1_chalk_1 += vec2(5.0);
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 0.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
hash12_return_value_inlined_4_2 = sdLine_return_value_inlined_22_1;
sdLine_return_value_inlined_21_1 = hash12_return_value_inlined_4_2;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 0.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
hash12_return_value_inlined_5_2 = sdLine_return_value_inlined_22_1;
b_noise_3_2 = hash12_return_value_inlined_5_2;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 1.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
hash12_return_value_inlined_6_2 = sdLine_return_value_inlined_22_1;
sdLine_return_value_inlined_28_1 = hash12_return_value_inlined_6_2;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 1.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
fbm_return_value_inlined_15_1 = sdLine_return_value_inlined_22_1;
cro_return_value_1 = fbm_return_value_inlined_15_1;
v2_noise_3_2 = mix(mix(sdLine_return_value_inlined_21_1, b_noise_3_2, u_noise_3_2.x), mix(sdLine_return_value_inlined_28_1, cro_return_value_1, u_noise_3_2.x), u_noise_3_2.y);
sdLine_return_value_inlined_18_1 = max(mix(d_blackboard_1, v2_noise_3_2, u_noise_3_2.z), 0.0);
blackboard_has_returned_1 = true;
fbm_return_value_inlined_13_1 = sdLine_return_value_inlined_18_1;
n_fbm3_high_2 = pow(max(fbm_return_value_inlined_13_1, 1e-9), 2.0);
fbm_return_value_inlined_9_1 += n_fbm3_high_2 * amp_fbm3_high_2;
frq_fbm3_high_2 *= sdLine_return_value_inlined_31_1;
amp_fbm3_high_2 *= y_chalk_1 * (pow(max(n_fbm3_high_2, 1e-9), 0.2));
}
f_fbm_1 = fbm_return_value_inlined_9_1;
fbm3_high_has_returned_2 = true;
fbm_return_value_inlined_37_1 = f_fbm_1;
sdLine_return_value_inlined_33_1 = rock_return_value_inlined_21_2 + fbm_return_value_inlined_37_1 * DISPLACEMENT_2;
gp_plane_2 = blackboard_return_value_1;
p_plane_2 = vec4(0.0, 1.0, 0.0, 1.0);
plane_has_returned_2 = false;
plane_return_value_2 = dot(p_plane_2.xyz, gp_plane_2 + p_plane_2.xyz * p_plane_2.w);
plane_has_returned_2 = true;
ww_blackboard_1 = plane_return_value_2;
a_boolUnion_2 = sdLine_return_value_inlined_33_1;
b_boolUnion_2 = ww_blackboard_1;
boolUnion_has_returned_2 = false;
fbm_return_value_inlined_40_1 = min(a_boolUnion_2, b_boolUnion_2);
boolUnion_has_returned_2 = true;
boolUnion_return_value_inlined_24_2 = fbm_return_value_inlined_40_1;
sdLine_return_value_inlined_33_1 = boolUnion_return_value_inlined_24_2;
sdLine_return_value_inlined_36_1 = sdLine_return_value_inlined_33_1;
map_detailed_has_returned_2 = true;
sdLine_return_value_inlined_34_1 = sdLine_return_value_inlined_36_1;
col_chalk_1 = normalize(n_getNormal_2 - sdLine_return_value_inlined_34_1);
noise_has_returned_1 = true;
getNormal_return_value_inlined_38_2 = col_chalk_1;
n_getPixel_2 = getNormal_return_value_inlined_38_2;
p_getOcclusion_2 = p_getPixel_2;
n_getOcclusion_2 = n_getPixel_2;
fbm_has_returned_1 = false;
b2_intersect_1 = vec2(0.0);
for(         i_getOcclusion_2 = 0;
i_getOcclusion_2 < AO_SAMPLES_2; i_getOcclusion_2 ++)
{
f_getOcclusion_2 = float(i_getOcclusion_2) * INV_AO_SAMPLES_2;
hao_getOcclusion_2 = 0.01 + f_getOcclusion_2 * AO_PARAM_2.x;
sdLine_return_value_inlined_30_1 = 0.01 + f_getOcclusion_2 * CORNER_PARAM_2.x;
p_map_2 = p_getOcclusion_2 + n_getOcclusion_2 * hao_getOcclusion_2;
intersect_has_returned_1 = false;
p_rock_2 = p_map_2;
grad_has_returned_1 = false;
p_sphere_2 = p_rock_2;
dy_chalk_1 = 1.0;
sphere_has_returned_2 = false;
fbm_return_value_inlined_8_1 = length(p_sphere_2) - dy_chalk_1;
sphere_has_returned_2 = true;
sphere_return_value_inlined_12_2 = fbm_return_value_inlined_8_1;
cro_return_value_inlined_5_1 = sphere_return_value_inlined_12_2;
for(           i_rock_2 = 0;
i_rock_2 < 9; i_rock_2 ++)
{
m_blackboard_1 = float(i_rock_2);
sdLine_return_value_inlined_16_1 = m_blackboard_1;
hash11_has_returned_2 = false;
hash11_return_value_2 = fract(sin(sdLine_return_value_inlined_16_1 * 727.1) * 435.545);
hash11_has_returned_2 = true;
hash11_return_value_inlined_13_2 = hash11_return_value_2;
cro_return_value_inlined_6_1 = 2.5 + hash11_return_value_inlined_13_2;
fbm_return_value_inlined_14_1 = m_blackboard_1;
altitude_has_returned_1 = false;
col_mainImage_1 = vec3(127.231, 491.7, 718.423) * fbm_return_value_inlined_14_1;
hash31_return_value_2 = fract(sin(col_mainImage_1) * 435.543);
altitude_has_returned_1 = true;
hash31_return_value_inlined_14_2 = hash31_return_value_2;
v_rock_2 = normalize(hash31_return_value_inlined_14_2 * 2.0 - 1.0);
p_sphere_2 = p_rock_2 + v_rock_2 * cro_return_value_inlined_6_1;
dy_chalk_1 = cro_return_value_inlined_6_1 * 0.8;
sphere_has_returned_2 = false;
fbm_return_value_inlined_8_1 = length(p_sphere_2) - dy_chalk_1;
sphere_has_returned_2 = true;
sphere_return_value_inlined_15_2 = fbm_return_value_inlined_8_1;
a_boolSmoothSub_2 = cro_return_value_inlined_5_1;
s_fbm_1 = sphere_return_value_inlined_15_2;
fbm_return_value_inlined_39_1 = 0.03;
chalk_has_returned_1 = false;
a_boolSmoothIntersect_2 = a_boolSmoothSub_2;
b_boolSmoothIntersect_2 = - s_fbm_1;
fbm_return_value_inlined_12_1 = fbm_return_value_inlined_39_1;
boolSmoothIntersect_has_returned_2 = false;
h_boolSmoothIntersect_2 = clamp(0.5 + 0.5 * (b_boolSmoothIntersect_2 - a_boolSmoothIntersect_2) / fbm_return_value_inlined_12_1, 0.0, 1.0);
boolSmoothIntersect_return_value_2 = mix(a_boolSmoothIntersect_2, b_boolSmoothIntersect_2, h_boolSmoothIntersect_2) + fbm_return_value_inlined_12_1 * h_boolSmoothIntersect_2 * (1.0 - h_boolSmoothIntersect_2);
boolSmoothIntersect_has_returned_2 = true;
sdLine_return_value_inlined_17_1 = boolSmoothIntersect_return_value_2;
sdLine_return_value_1 = sdLine_return_value_inlined_17_1;
chalk_has_returned_1 = true;
boolSmoothSub_return_value_inlined_16_2 = sdLine_return_value_1;
cro_return_value_inlined_5_1 = boolSmoothSub_return_value_inlined_16_2;
}
rock_return_value_2 = cro_return_value_inlined_5_1;
grad_has_returned_1 = true;
sdLine_return_value_inlined_19_1 = rock_return_value_2;
p_fbm3_2 = p_map_2 * 4.0;
fbm_return_value_inlined_24_1 = 0.4;
f_fbm3_2 = 2.96;
fbm3_has_returned_2 = false;
p_noise_3_2 = p_fbm3_2;
blackboard_has_returned_1 = false;
i_noise_3_2 = floor(p_noise_3_2);
f_noise_3_2 = fract(p_noise_3_2);
u_noise_3_2 = f_noise_3_2 * f_noise_3_2 * (3.0 - 2.0 * f_noise_3_2);
p1_chalk_1 = i_noise_3_2.xy + i_noise_3_2.z * vec2(5.0);
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 0.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
hash12_return_value_inlined_0_2 = sdLine_return_value_inlined_22_1;
sdLine_return_value_inlined_21_1 = hash12_return_value_inlined_0_2;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 0.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
h_intersect_1 = sdLine_return_value_inlined_22_1;
b_noise_3_2 = h_intersect_1;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 1.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
sdLine_return_value_inlined_35_1 = sdLine_return_value_inlined_22_1;
sdLine_return_value_inlined_28_1 = sdLine_return_value_inlined_35_1;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 1.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
hash12_return_value_inlined_3_2 = sdLine_return_value_inlined_22_1;
cro_return_value_1 = hash12_return_value_inlined_3_2;
d_blackboard_1 = mix(mix(sdLine_return_value_inlined_21_1, b_noise_3_2, u_noise_3_2.x), mix(sdLine_return_value_inlined_28_1, cro_return_value_1, u_noise_3_2.x), u_noise_3_2.y);
p1_chalk_1 += vec2(5.0);
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 0.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
hash12_return_value_inlined_4_2 = sdLine_return_value_inlined_22_1;
sdLine_return_value_inlined_21_1 = hash12_return_value_inlined_4_2;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 0.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
hash12_return_value_inlined_5_2 = sdLine_return_value_inlined_22_1;
b_noise_3_2 = hash12_return_value_inlined_5_2;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 1.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
hash12_return_value_inlined_6_2 = sdLine_return_value_inlined_22_1;
sdLine_return_value_inlined_28_1 = hash12_return_value_inlined_6_2;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 1.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
fbm_return_value_inlined_15_1 = sdLine_return_value_inlined_22_1;
cro_return_value_1 = fbm_return_value_inlined_15_1;
v2_noise_3_2 = mix(mix(sdLine_return_value_inlined_21_1, b_noise_3_2, u_noise_3_2.x), mix(sdLine_return_value_inlined_28_1, cro_return_value_1, u_noise_3_2.x), u_noise_3_2.y);
sdLine_return_value_inlined_18_1 = max(mix(d_blackboard_1, v2_noise_3_2, u_noise_3_2.z), 0.0);
blackboard_has_returned_1 = true;
noise_3_return_value_inlined_8_2 = sdLine_return_value_inlined_18_1;
fbm3_return_value_2 = noise_3_return_value_inlined_8_2;
fbm3_has_returned_2 = true;
sdLine_return_value_inlined_10_1 = fbm3_return_value_2;
d_map_2 = sdLine_return_value_inlined_19_1 + sdLine_return_value_inlined_10_1 * DISPLACEMENT_2;
gp_plane_2 = p_map_2;
p_plane_2 = vec4(0.0, 1.0, 0.0, 1.0);
plane_has_returned_2 = false;
plane_return_value_2 = dot(p_plane_2.xyz, gp_plane_2 + p_plane_2.xyz * p_plane_2.w);
plane_has_returned_2 = true;
h_sdLine_1 = plane_return_value_2;
a_boolUnion_2 = d_map_2;
b_boolUnion_2 = h_sdLine_1;
boolUnion_has_returned_2 = false;
fbm_return_value_inlined_40_1 = min(a_boolUnion_2, b_boolUnion_2);
boolUnion_has_returned_2 = true;
boolUnion_return_value_inlined_20_2 = fbm_return_value_inlined_40_1;
d_map_2 = boolUnion_return_value_inlined_20_2;
x_chalk_1 = d_map_2;
intersect_has_returned_1 = true;
fbm_return_value_inlined_7_1 = x_chalk_1;
v_blackboard_1 = fbm_return_value_inlined_7_1 - TRESHOLD_2;
p_map_2 = p_getOcclusion_2 - n_getOcclusion_2 * sdLine_return_value_inlined_30_1;
intersect_has_returned_1 = false;
p_rock_2 = p_map_2;
grad_has_returned_1 = false;
p_sphere_2 = p_rock_2;
dy_chalk_1 = 1.0;
sphere_has_returned_2 = false;
fbm_return_value_inlined_8_1 = length(p_sphere_2) - dy_chalk_1;
sphere_has_returned_2 = true;
sphere_return_value_inlined_12_2 = fbm_return_value_inlined_8_1;
cro_return_value_inlined_5_1 = sphere_return_value_inlined_12_2;
for(           i_rock_2 = 0;
i_rock_2 < 9; i_rock_2 ++)
{
m_blackboard_1 = float(i_rock_2);
sdLine_return_value_inlined_16_1 = m_blackboard_1;
hash11_has_returned_2 = false;
hash11_return_value_2 = fract(sin(sdLine_return_value_inlined_16_1 * 727.1) * 435.545);
hash11_has_returned_2 = true;
hash11_return_value_inlined_13_2 = hash11_return_value_2;
cro_return_value_inlined_6_1 = 2.5 + hash11_return_value_inlined_13_2;
fbm_return_value_inlined_14_1 = m_blackboard_1;
altitude_has_returned_1 = false;
col_mainImage_1 = vec3(127.231, 491.7, 718.423) * fbm_return_value_inlined_14_1;
hash31_return_value_2 = fract(sin(col_mainImage_1) * 435.543);
altitude_has_returned_1 = true;
hash31_return_value_inlined_14_2 = hash31_return_value_2;
v_rock_2 = normalize(hash31_return_value_inlined_14_2 * 2.0 - 1.0);
p_sphere_2 = p_rock_2 + v_rock_2 * cro_return_value_inlined_6_1;
dy_chalk_1 = cro_return_value_inlined_6_1 * 0.8;
sphere_has_returned_2 = false;
fbm_return_value_inlined_8_1 = length(p_sphere_2) - dy_chalk_1;
sphere_has_returned_2 = true;
sphere_return_value_inlined_15_2 = fbm_return_value_inlined_8_1;
a_boolSmoothSub_2 = cro_return_value_inlined_5_1;
s_fbm_1 = sphere_return_value_inlined_15_2;
fbm_return_value_inlined_39_1 = 0.03;
chalk_has_returned_1 = false;
a_boolSmoothIntersect_2 = a_boolSmoothSub_2;
b_boolSmoothIntersect_2 = - s_fbm_1;
fbm_return_value_inlined_12_1 = fbm_return_value_inlined_39_1;
boolSmoothIntersect_has_returned_2 = false;
h_boolSmoothIntersect_2 = clamp(0.5 + 0.5 * (b_boolSmoothIntersect_2 - a_boolSmoothIntersect_2) / fbm_return_value_inlined_12_1, 0.0, 1.0);
boolSmoothIntersect_return_value_2 = mix(a_boolSmoothIntersect_2, b_boolSmoothIntersect_2, h_boolSmoothIntersect_2) + fbm_return_value_inlined_12_1 * h_boolSmoothIntersect_2 * (1.0 - h_boolSmoothIntersect_2);
boolSmoothIntersect_has_returned_2 = true;
sdLine_return_value_inlined_17_1 = boolSmoothIntersect_return_value_2;
sdLine_return_value_1 = sdLine_return_value_inlined_17_1;
chalk_has_returned_1 = true;
boolSmoothSub_return_value_inlined_16_2 = sdLine_return_value_1;
cro_return_value_inlined_5_1 = boolSmoothSub_return_value_inlined_16_2;
}
rock_return_value_2 = cro_return_value_inlined_5_1;
grad_has_returned_1 = true;
sdLine_return_value_inlined_19_1 = rock_return_value_2;
p_fbm3_2 = p_map_2 * 4.0;
fbm_return_value_inlined_24_1 = 0.4;
f_fbm3_2 = 2.96;
fbm3_has_returned_2 = false;
p_noise_3_2 = p_fbm3_2;
blackboard_has_returned_1 = false;
i_noise_3_2 = floor(p_noise_3_2);
f_noise_3_2 = fract(p_noise_3_2);
u_noise_3_2 = f_noise_3_2 * f_noise_3_2 * (3.0 - 2.0 * f_noise_3_2);
p1_chalk_1 = i_noise_3_2.xy + i_noise_3_2.z * vec2(5.0);
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 0.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
hash12_return_value_inlined_0_2 = sdLine_return_value_inlined_22_1;
sdLine_return_value_inlined_21_1 = hash12_return_value_inlined_0_2;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 0.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
h_intersect_1 = sdLine_return_value_inlined_22_1;
b_noise_3_2 = h_intersect_1;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 1.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
sdLine_return_value_inlined_35_1 = sdLine_return_value_inlined_22_1;
sdLine_return_value_inlined_28_1 = sdLine_return_value_inlined_35_1;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 1.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
hash12_return_value_inlined_3_2 = sdLine_return_value_inlined_22_1;
cro_return_value_1 = hash12_return_value_inlined_3_2;
d_blackboard_1 = mix(mix(sdLine_return_value_inlined_21_1, b_noise_3_2, u_noise_3_2.x), mix(sdLine_return_value_inlined_28_1, cro_return_value_1, u_noise_3_2.x), u_noise_3_2.y);
p1_chalk_1 += vec2(5.0);
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 0.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
hash12_return_value_inlined_4_2 = sdLine_return_value_inlined_22_1;
sdLine_return_value_inlined_21_1 = hash12_return_value_inlined_4_2;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 0.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
hash12_return_value_inlined_5_2 = sdLine_return_value_inlined_22_1;
b_noise_3_2 = hash12_return_value_inlined_5_2;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 1.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
hash12_return_value_inlined_6_2 = sdLine_return_value_inlined_22_1;
sdLine_return_value_inlined_28_1 = hash12_return_value_inlined_6_2;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 1.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
fbm_return_value_inlined_15_1 = sdLine_return_value_inlined_22_1;
cro_return_value_1 = fbm_return_value_inlined_15_1;
v2_noise_3_2 = mix(mix(sdLine_return_value_inlined_21_1, b_noise_3_2, u_noise_3_2.x), mix(sdLine_return_value_inlined_28_1, cro_return_value_1, u_noise_3_2.x), u_noise_3_2.y);
sdLine_return_value_inlined_18_1 = max(mix(d_blackboard_1, v2_noise_3_2, u_noise_3_2.z), 0.0);
blackboard_has_returned_1 = true;
noise_3_return_value_inlined_8_2 = sdLine_return_value_inlined_18_1;
fbm3_return_value_2 = noise_3_return_value_inlined_8_2;
fbm3_has_returned_2 = true;
sdLine_return_value_inlined_10_1 = fbm3_return_value_2;
d_map_2 = sdLine_return_value_inlined_19_1 + sdLine_return_value_inlined_10_1 * DISPLACEMENT_2;
gp_plane_2 = p_map_2;
p_plane_2 = vec4(0.0, 1.0, 0.0, 1.0);
plane_has_returned_2 = false;
plane_return_value_2 = dot(p_plane_2.xyz, gp_plane_2 + p_plane_2.xyz * p_plane_2.w);
plane_has_returned_2 = true;
h_sdLine_1 = plane_return_value_2;
a_boolUnion_2 = d_map_2;
b_boolUnion_2 = h_sdLine_1;
boolUnion_has_returned_2 = false;
fbm_return_value_inlined_40_1 = min(a_boolUnion_2, b_boolUnion_2);
boolUnion_has_returned_2 = true;
boolUnion_return_value_inlined_20_2 = fbm_return_value_inlined_40_1;
d_map_2 = boolUnion_return_value_inlined_20_2;
x_chalk_1 = d_map_2;
intersect_has_returned_1 = true;
map_return_value_inlined_30_2 = x_chalk_1;
dc_getOcclusion_2 = map_return_value_inlined_30_2 - TRESHOLD_2;
b2_intersect_1.x += clamp(hao_getOcclusion_2 - v_blackboard_1, 0.0, 1.0) * (1.0 - f_getOcclusion_2);
b2_intersect_1.y += clamp(sdLine_return_value_inlined_30_1 + dc_getOcclusion_2, 0.0, 1.0) * (1.0 - f_getOcclusion_2);
}
b2_intersect_1.x = clamp(1.0 - b2_intersect_1.x * INV_AO_SAMPLES_2 * AO_PARAM_2.y, 0.0, 1.0);
b2_intersect_1.y = clamp(b2_intersect_1.y * INV_AO_SAMPLES_2 * CORNER_PARAM_2.y, 0.0, 1.0);
grad_return_value_inlined_3_1 = b2_intersect_1;
fbm_has_returned_1 = true;
fragCoord_blackboard_1 = grad_return_value_inlined_3_1;
a_cro_1 = fragCoord_blackboard_1;
light_getPixel_2 = normalize(vec3(0.0, 1.0, 0.0));
color_getPixel_2 = vec3(1.0);
if(c_altitude_1.x < 3.5 && p_getPixel_2.y > - 0.89)
{
p_getStoneColor_2 = p_getPixel_2;
c_getStoneColor_2 = a_cro_1.y;
l_getStoneColor_2 = light_getPixel_2;
n_getStoneColor_2 = n_getPixel_2;
e_getStoneColor_2 = dir_getPixel_2;
getStoneColor_has_returned_2 = false;
p_noise_3_2 = vec3(p_getStoneColor_2.x * 20.0, 0.0, p_getStoneColor_2.z * 20.0);
blackboard_has_returned_1 = false;
i_noise_3_2 = floor(p_noise_3_2);
f_noise_3_2 = fract(p_noise_3_2);
u_noise_3_2 = f_noise_3_2 * f_noise_3_2 * (3.0 - 2.0 * f_noise_3_2);
p1_chalk_1 = i_noise_3_2.xy + i_noise_3_2.z * vec2(5.0);
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 0.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
hash12_return_value_inlined_0_2 = sdLine_return_value_inlined_22_1;
sdLine_return_value_inlined_21_1 = hash12_return_value_inlined_0_2;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 0.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
h_intersect_1 = sdLine_return_value_inlined_22_1;
b_noise_3_2 = h_intersect_1;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 1.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
sdLine_return_value_inlined_35_1 = sdLine_return_value_inlined_22_1;
sdLine_return_value_inlined_28_1 = sdLine_return_value_inlined_35_1;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 1.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
hash12_return_value_inlined_3_2 = sdLine_return_value_inlined_22_1;
cro_return_value_1 = hash12_return_value_inlined_3_2;
d_blackboard_1 = mix(mix(sdLine_return_value_inlined_21_1, b_noise_3_2, u_noise_3_2.x), mix(sdLine_return_value_inlined_28_1, cro_return_value_1, u_noise_3_2.x), u_noise_3_2.y);
p1_chalk_1 += vec2(5.0);
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 0.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
hash12_return_value_inlined_4_2 = sdLine_return_value_inlined_22_1;
sdLine_return_value_inlined_21_1 = hash12_return_value_inlined_4_2;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 0.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
hash12_return_value_inlined_5_2 = sdLine_return_value_inlined_22_1;
b_noise_3_2 = hash12_return_value_inlined_5_2;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(0.0, 1.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
hash12_return_value_inlined_6_2 = sdLine_return_value_inlined_22_1;
sdLine_return_value_inlined_28_1 = hash12_return_value_inlined_6_2;
grad_return_value_inlined_1_1 = p1_chalk_1 + vec2(1.0, 1.0);
sdLine_has_returned_1 = false;
gf_chalk_1 = dot(grad_return_value_inlined_1_1, vec2(127.1, 311.7));
sdLine_return_value_inlined_22_1 = fract(sin(gf_chalk_1) * 437.545);
sdLine_has_returned_1 = true;
fbm_return_value_inlined_15_1 = sdLine_return_value_inlined_22_1;
cro_return_value_1 = fbm_return_value_inlined_15_1;
v2_noise_3_2 = mix(mix(sdLine_return_value_inlined_21_1, b_noise_3_2, u_noise_3_2.x), mix(sdLine_return_value_inlined_28_1, cro_return_value_1, u_noise_3_2.x), u_noise_3_2.y);
sdLine_return_value_inlined_18_1 = max(mix(d_blackboard_1, v2_noise_3_2, u_noise_3_2.z), 0.0);
blackboard_has_returned_1 = true;
sdLine_return_value_inlined_23_1 = sdLine_return_value_inlined_18_1;
c_getStoneColor_2 = min(c_getStoneColor_2 + pow(max(sdLine_return_value_inlined_23_1, 1e-9), 70.0) * 8.0, 1.0);
ic_getStoneColor_2 = pow(max(1.0 - c_getStoneColor_2, 1e-9), 0.5);
base_getStoneColor_2 = vec3(0.42, 0.3, 0.2) * 0.35;
col_blackboard_1 = vec3(0.51, 0.41, 0.32) * 0.9;
color_getStoneColor_2 = mix(base_getStoneColor_2, col_blackboard_1, c_getStoneColor_2);
f_getStoneColor_2 = pow(max(1.0 - max(dot(n_getStoneColor_2, - e_getStoneColor_2), 0.0), 1e-9), 5.0) * 0.75 * ic_getStoneColor_2;
n_diffuse_2 = n_getStoneColor_2;
l_diffuse_2 = l_getStoneColor_2;
p_diffuse_2 = 0.5;
diffuse_has_returned_2 = false;
diffuse_return_value_2 = pow(max(max(dot(n_diffuse_2, l_diffuse_2), 0.0), 1e-9), p_diffuse_2);
diffuse_has_returned_2 = true;
fa_flattened_block_1_blackboard_1 = diffuse_return_value_2;
color_getStoneColor_2 += vec3(fa_flattened_block_1_blackboard_1 * WHITE_2);
blackboard_return_value_inlined_41_1 = n_getStoneColor_2;
l_specular_2 = l_getStoneColor_2;
e_specular_2 = e_getStoneColor_2;
sdLine_return_value_inlined_32_1 = 8.0;
specular_has_returned_2 = false;
fbm_return_value_1 = (sdLine_return_value_inlined_32_1 + 8.0) / (3.1415 * 8.0);
specular_return_value_2 = pow(max(max(dot(reflect(e_specular_2, blackboard_return_value_inlined_41_1), l_specular_2), 0.0), 1e-9), sdLine_return_value_inlined_32_1) * fbm_return_value_1;
specular_has_returned_2 = true;
fbm_return_value_inlined_11_1 = specular_return_value_2;
color_getStoneColor_2 += vec3(fbm_return_value_inlined_11_1 * WHITE_2 * 1.5 * ic_getStoneColor_2);
n_getStoneColor_2 = normalize(n_getStoneColor_2 - normalize(p_getStoneColor_2) * 0.4);
blackboard_return_value_inlined_41_1 = n_getStoneColor_2;
l_specular_2 = l_getStoneColor_2;
e_specular_2 = e_getStoneColor_2;
sdLine_return_value_inlined_32_1 = 80.0;
specular_has_returned_2 = false;
fbm_return_value_1 = (sdLine_return_value_inlined_32_1 + 8.0) / (3.1415 * 8.0);
specular_return_value_2 = pow(max(max(dot(reflect(e_specular_2, blackboard_return_value_inlined_41_1), l_specular_2), 0.0), 1e-9), sdLine_return_value_inlined_32_1) * fbm_return_value_1;
specular_has_returned_2 = true;
noise_return_value_inlined_4_1 = specular_return_value_2;
color_getStoneColor_2 += vec3(noise_return_value_inlined_4_1 * WHITE_2 * 1.5 * ic_getStoneColor_2);
color_getStoneColor_2 = mix(color_getStoneColor_2, vec3(1.0), f_getStoneColor_2);
color_getStoneColor_2 *= sqrt(abs(p_getStoneColor_2.y * 0.5 + 0.5)) * 0.4 + 0.6;
color_getStoneColor_2 *= (n_getStoneColor_2.y * 0.5 + 0.5) * 0.4 + 0.6;
getStoneColor_return_value_2 = color_getStoneColor_2;
getStoneColor_has_returned_2 = true;
getStoneColor_return_value_inlined_40_2 = getStoneColor_return_value_2;
color_getPixel_2 = getStoneColor_return_value_inlined_40_2;
}
color_getPixel_2 *= a_cro_1.x;
getPixel_return_value_2 = color_getPixel_2;
getPixel_has_returned_2 = true;
getPixel_return_value_inlined_41_2 = getPixel_return_value_2;
color_mainImage_2 += getPixel_return_value_inlined_41_2;
}
}
color_mainImage_2 /= 9.0;
color_mainImage_2 = sqrt(color_mainImage_2);
c_saturation_2 = color_mainImage_2;
fbm_return_value_inlined_20_1 = 1.7;
saturation_has_returned_2 = false;
saturation_return_value_2 = mix(vec3(dot(c_saturation_2, vec3(0.2126, 0.7152, 0.0722))), c_saturation_2, fbm_return_value_inlined_20_1);
saturation_has_returned_2 = true;
saturation_return_value_inlined_42_2 = saturation_return_value_2;
color_mainImage_2 = saturation_return_value_inlined_42_2;
f_noise_1 = gl_FragCoord.xy / iResolution.xy * 2.0 - 1.0;
vgn_mainImage_2 = smoothstep(1.2, 0.7, abs(f_noise_1.y)) * smoothstep(1.1, 0.8, abs(f_noise_1.x));
color_mainImage_2 *= 1.0 - (1.0 - vgn_mainImage_2) * 0.15;
fragColor_2 = vec4(color_mainImage_2, 1.0);
fragColor_2.w = 1.0;
live_tu_has_executed = true;
}
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_0_1 = grad_return_value_1;
z_grad_1 = i_noise_1 + ivec2(1, 0);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_1_1 = grad_return_value_1;
z_grad_1 = i_noise_1 + ivec2(0, 1);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_2_1 = grad_return_value_1;
z_grad_1 = i_noise_1 + ivec2(1, 1);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_3_1 = grad_return_value_1;
noise_return_value_1 = mix(mix(dot(grad_return_value_inlined_0_1, f_noise_1 - vec2(0.0, 0.0)), dot(grad_return_value_inlined_1_1, f_noise_1 - vec2(1.0, 0.0)), u_noise_1.x), mix(dot(grad_return_value_inlined_2_1, f_noise_1 - vec2(0.0, 1.0)), dot(grad_return_value_inlined_3_1, f_noise_1 - vec2(1.0, 1.0)), u_noise_1.x), u_noise_1.y);
noise_has_returned_1 = true;
noise_return_value_inlined_4_1 = noise_return_value_1;
f_fbm_1 += s_fbm_1 * noise_return_value_inlined_4_1;
p_fbm_1 = m_fbm_1 * p_fbm_1;
s_fbm_1 = 0.5 * s_fbm_1;
}
fbm_return_value_1 = f_fbm_1;
fbm_has_returned_1 = true;
fbm_return_value_inlined_14_1 = fbm_return_value_1;
gf_chalk_1 *= 0.9 + 0.2 * smoothstep(- 0.2, 0.2, fbm_return_value_inlined_14_1);
d_chalk_1 = 0.0;
if(abs(p_chalk_1.x) > 0.1)
{
x_chalk_1 = p_chalk_1.x;
y_chalk_1 = 1.0 / x_chalk_1;
dy_chalk_1 = - 1.0 / (x_chalk_1 * x_chalk_1);
d_chalk_1 = abs(p_chalk_1.y - y_chalk_1) / sqrt(1.0 + dy_chalk_1 * dy_chalk_1);
p_fbm_1 = p_chalk_1 * 2.5;
fbm_has_returned_1 = false;
f_fbm_1 = 0.0;
s_fbm_1 = 0.5;
for(   i_fbm_1 = 0;
i_fbm_1 < 6; i_fbm_1 ++)
{
p_noise_1 = p_fbm_1;
noise_has_returned_1 = false;
i_noise_1 = ivec2(floor(p_noise_1));
f_noise_1 = fract(p_noise_1);
u_noise_1 = f_noise_1 * f_noise_1 * (3.0 - 2.0 * f_noise_1);
z_grad_1 = i_noise_1 + ivec2(0, 0);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_0_1 = grad_return_value_1;
z_grad_1 = i_noise_1 + ivec2(1, 0);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_1_1 = grad_return_value_1;
z_grad_1 = i_noise_1 + ivec2(0, 1);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_2_1 = grad_return_value_1;
z_grad_1 = i_noise_1 + ivec2(1, 1);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_3_1 = grad_return_value_1;
noise_return_value_1 = mix(mix(dot(grad_return_value_inlined_0_1, f_noise_1 - vec2(0.0, 0.0)), dot(grad_return_value_inlined_1_1, f_noise_1 - vec2(1.0, 0.0)), u_noise_1.x), mix(dot(grad_return_value_inlined_2_1, f_noise_1 - vec2(0.0, 1.0)), dot(grad_return_value_inlined_3_1, f_noise_1 - vec2(1.0, 1.0)), u_noise_1.x), u_noise_1.y);
noise_has_returned_1 = true;
noise_return_value_inlined_4_1 = noise_return_value_1;
f_fbm_1 += s_fbm_1 * noise_return_value_inlined_4_1;
p_fbm_1 = m_fbm_1 * p_fbm_1;
s_fbm_1 = 0.5 * s_fbm_1;
}
fbm_return_value_1 = f_fbm_1;
fbm_has_returned_1 = true;
fbm_return_value_inlined_15_1 = fbm_return_value_1;
d_chalk_1 += 0.03 * fbm_return_value_inlined_15_1;
col_chalk_1 = mix(col_chalk_1, 1.2 * 1.3 * vec3(160, 140, 80) / 255.0, gf_chalk_1 * (1.0 - smoothstep(0.01, 0.03, d_chalk_1)));
}
p_sdLine_1 = p_chalk_1;
a_sdLine_1 = vec2(0.0, - 10.0);
b_sdLine_1 = vec2(0.0, 3.4);
sdLine_has_returned_1 = false;
pa_sdLine_1 = p_sdLine_1 - a_sdLine_1;
ba_sdLine_1 = b_sdLine_1 - a_sdLine_1;
h_sdLine_1 = clamp(dot(pa_sdLine_1, ba_sdLine_1) / dot(ba_sdLine_1, ba_sdLine_1), 0.0, 1.0);
sdLine_return_value_1 = length(pa_sdLine_1 - h_sdLine_1 * ba_sdLine_1);
sdLine_has_returned_1 = true;
sdLine_return_value_inlined_16_1 = sdLine_return_value_1;
d_chalk_1 = sdLine_return_value_inlined_16_1;
p_sdLine_1 = p_chalk_1;
a_sdLine_1 = vec2(- 10.0, 0.0);
b_sdLine_1 = vec2(5.2, 0.0);
sdLine_has_returned_1 = false;
pa_sdLine_1 = p_sdLine_1 - a_sdLine_1;
ba_sdLine_1 = b_sdLine_1 - a_sdLine_1;
h_sdLine_1 = clamp(dot(pa_sdLine_1, ba_sdLine_1) / dot(ba_sdLine_1, ba_sdLine_1), 0.0, 1.0);
sdLine_return_value_1 = length(pa_sdLine_1 - h_sdLine_1 * ba_sdLine_1);
sdLine_has_returned_1 = true;
sdLine_return_value_inlined_17_1 = sdLine_return_value_1;
d_chalk_1 = min(d_chalk_1, sdLine_return_value_inlined_17_1);
p_sdLine_1 = vec2(abs(p_chalk_1.x), p_chalk_1.y);
a_sdLine_1 = vec2(0.07, 3.2);
b_sdLine_1 = vec2(0.0, 3.4);
sdLine_has_returned_1 = false;
pa_sdLine_1 = p_sdLine_1 - a_sdLine_1;
ba_sdLine_1 = b_sdLine_1 - a_sdLine_1;
h_sdLine_1 = clamp(dot(pa_sdLine_1, ba_sdLine_1) / dot(ba_sdLine_1, ba_sdLine_1), 0.0, 1.0);
sdLine_return_value_1 = length(pa_sdLine_1 - h_sdLine_1 * ba_sdLine_1);
sdLine_has_returned_1 = true;
sdLine_return_value_inlined_18_1 = sdLine_return_value_1;
d_chalk_1 = min(d_chalk_1, sdLine_return_value_inlined_18_1);
p_sdLine_1 = vec2(p_chalk_1.x, abs(p_chalk_1.y));
a_sdLine_1 = vec2(5.0, 0.07);
b_sdLine_1 = vec2(5.2, 0.0);
sdLine_has_returned_1 = false;
pa_sdLine_1 = p_sdLine_1 - a_sdLine_1;
ba_sdLine_1 = b_sdLine_1 - a_sdLine_1;
h_sdLine_1 = clamp(dot(pa_sdLine_1, ba_sdLine_1) / dot(ba_sdLine_1, ba_sdLine_1), 0.0, 1.0);
sdLine_return_value_1 = length(pa_sdLine_1 - h_sdLine_1 * ba_sdLine_1);
sdLine_has_returned_1 = true;
sdLine_return_value_inlined_19_1 = sdLine_return_value_1;
d_chalk_1 = min(d_chalk_1, sdLine_return_value_inlined_19_1);
p_fbm_1 = p_chalk_1 * 2.5;
fbm_has_returned_1 = false;
f_fbm_1 = 0.0;
s_fbm_1 = 0.5;
for( i_fbm_1 = 0;
i_fbm_1 < 6; i_fbm_1 ++)
{
p_noise_1 = p_fbm_1;
noise_has_returned_1 = false;
i_noise_1 = ivec2(floor(p_noise_1));
f_noise_1 = fract(p_noise_1);
u_noise_1 = f_noise_1 * f_noise_1 * (3.0 - 2.0 * f_noise_1);
z_grad_1 = i_noise_1 + ivec2(0, 0);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_0_1 = grad_return_value_1;
z_grad_1 = i_noise_1 + ivec2(1, 0);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_1_1 = grad_return_value_1;
z_grad_1 = i_noise_1 + ivec2(0, 1);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_2_1 = grad_return_value_1;
z_grad_1 = i_noise_1 + ivec2(1, 1);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_3_1 = grad_return_value_1;
noise_return_value_1 = mix(mix(dot(grad_return_value_inlined_0_1, f_noise_1 - vec2(0.0, 0.0)), dot(grad_return_value_inlined_1_1, f_noise_1 - vec2(1.0, 0.0)), u_noise_1.x), mix(dot(grad_return_value_inlined_2_1, f_noise_1 - vec2(0.0, 1.0)), dot(grad_return_value_inlined_3_1, f_noise_1 - vec2(1.0, 1.0)), u_noise_1.x), u_noise_1.y);
noise_has_returned_1 = true;
noise_return_value_inlined_4_1 = noise_return_value_1;
f_fbm_1 += s_fbm_1 * noise_return_value_inlined_4_1;
p_fbm_1 = m_fbm_1 * p_fbm_1;
s_fbm_1 = 0.5 * s_fbm_1;
}
fbm_return_value_1 = f_fbm_1;
fbm_has_returned_1 = true;
fbm_return_value_inlined_20_1 = fbm_return_value_1;
d_chalk_1 += 0.02 * fbm_return_value_inlined_20_1;
col_chalk_1 = mix(col_chalk_1, 1.2 * 1.1 * vec3(120, 90, 64) / 255.0, gf_chalk_1 * (1.0 - smoothstep(0.01, 0.03, d_chalk_1)));
p_sdLine_1 = p_chalk_1;
a_sdLine_1 = p1_chalk_1;
b_sdLine_1 = p2_chalk_1;
sdLine_has_returned_1 = false;
pa_sdLine_1 = p_sdLine_1 - a_sdLine_1;
ba_sdLine_1 = b_sdLine_1 - a_sdLine_1;
h_sdLine_1 = clamp(dot(pa_sdLine_1, ba_sdLine_1) / dot(ba_sdLine_1, ba_sdLine_1), 0.0, 1.0);
sdLine_return_value_1 = length(pa_sdLine_1 - h_sdLine_1 * ba_sdLine_1);
sdLine_has_returned_1 = true;
sdLine_return_value_inlined_21_1 = sdLine_return_value_1;
d_chalk_1 = sdLine_return_value_inlined_21_1;
p_sdLine_1 = p_chalk_1;
a_sdLine_1 = p2_chalk_1;
b_sdLine_1 = p3_chalk_1;
sdLine_has_returned_1 = false;
pa_sdLine_1 = p_sdLine_1 - a_sdLine_1;
ba_sdLine_1 = b_sdLine_1 - a_sdLine_1;
h_sdLine_1 = clamp(dot(pa_sdLine_1, ba_sdLine_1) / dot(ba_sdLine_1, ba_sdLine_1), 0.0, 1.0);
sdLine_return_value_1 = length(pa_sdLine_1 - h_sdLine_1 * ba_sdLine_1);
sdLine_has_returned_1 = true;
sdLine_return_value_inlined_22_1 = sdLine_return_value_1;
d_chalk_1 = min(d_chalk_1, sdLine_return_value_inlined_22_1);
p_sdLine_1 = p_chalk_1;
a_sdLine_1 = p3_chalk_1;
b_sdLine_1 = p1_chalk_1;
sdLine_has_returned_1 = false;
pa_sdLine_1 = p_sdLine_1 - a_sdLine_1;
ba_sdLine_1 = b_sdLine_1 - a_sdLine_1;
h_sdLine_1 = clamp(dot(pa_sdLine_1, ba_sdLine_1) / dot(ba_sdLine_1, ba_sdLine_1), 0.0, 1.0);
sdLine_return_value_1 = length(pa_sdLine_1 - h_sdLine_1 * ba_sdLine_1);
sdLine_has_returned_1 = true;
sdLine_return_value_inlined_23_1 = sdLine_return_value_1;
d_chalk_1 = min(d_chalk_1, sdLine_return_value_inlined_23_1);
p_fbm_1 = p_chalk_1 * 2.5;
fbm_has_returned_1 = false;
f_fbm_1 = 0.0;
s_fbm_1 = 0.5;
for( i_fbm_1 = 0;
i_fbm_1 < 6; i_fbm_1 ++)
{
p_noise_1 = p_fbm_1;
noise_has_returned_1 = false;
i_noise_1 = ivec2(floor(p_noise_1));
f_noise_1 = fract(p_noise_1);
u_noise_1 = f_noise_1 * f_noise_1 * (3.0 - 2.0 * f_noise_1);
z_grad_1 = i_noise_1 + ivec2(0, 0);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_0_1 = grad_return_value_1;
z_grad_1 = i_noise_1 + ivec2(1, 0);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_1_1 = grad_return_value_1;
z_grad_1 = i_noise_1 + ivec2(0, 1);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_2_1 = grad_return_value_1;
z_grad_1 = i_noise_1 + ivec2(1, 1);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_3_1 = grad_return_value_1;
noise_return_value_1 = mix(mix(dot(grad_return_value_inlined_0_1, f_noise_1 - vec2(0.0, 0.0)), dot(grad_return_value_inlined_1_1, f_noise_1 - vec2(1.0, 0.0)), u_noise_1.x), mix(dot(grad_return_value_inlined_2_1, f_noise_1 - vec2(0.0, 1.0)), dot(grad_return_value_inlined_3_1, f_noise_1 - vec2(1.0, 1.0)), u_noise_1.x), u_noise_1.y);
noise_has_returned_1 = true;
noise_return_value_inlined_4_1 = noise_return_value_1;
f_fbm_1 += s_fbm_1 * noise_return_value_inlined_4_1;
p_fbm_1 = m_fbm_1 * p_fbm_1;
s_fbm_1 = 0.5 * s_fbm_1;
}
fbm_return_value_1 = f_fbm_1;
fbm_has_returned_1 = true;
fbm_return_value_inlined_24_1 = fbm_return_value_1;
d_chalk_1 += 0.03 * fbm_return_value_inlined_24_1;
col_chalk_1 = mix(col_chalk_1, 1.2 * 1.4 * vec3(110, 150, 65) / 255.0, gf_chalk_1 * (1.0 - smoothstep(0.01, 0.03, d_chalk_1)));
c_altitude_1 = p1_chalk_1;
a_altitude_1 = p2_chalk_1;
b_altitude_1 = p3_chalk_1;
altitude_has_returned_1 = false;
w_altitude_1 = b_altitude_1 - a_altitude_1;
altitude_return_value_1 = a_altitude_1 + w_altitude_1 * dot(c_altitude_1 - a_altitude_1, w_altitude_1) / dot(w_altitude_1, w_altitude_1);
altitude_has_returned_1 = true;
altitude_return_value_inlined_25_1 = altitude_return_value_1;
q1_chalk_1 = altitude_return_value_inlined_25_1;
c_altitude_1 = p2_chalk_1;
a_altitude_1 = p3_chalk_1;
b_altitude_1 = p1_chalk_1;
altitude_has_returned_1 = false;
w_altitude_1 = b_altitude_1 - a_altitude_1;
altitude_return_value_1 = a_altitude_1 + w_altitude_1 * dot(c_altitude_1 - a_altitude_1, w_altitude_1) / dot(w_altitude_1, w_altitude_1);
altitude_has_returned_1 = true;
altitude_return_value_inlined_26_1 = altitude_return_value_1;
q2_chalk_1 = altitude_return_value_inlined_26_1;
c_altitude_1 = p3_chalk_1;
a_altitude_1 = p1_chalk_1;
b_altitude_1 = p2_chalk_1;
altitude_has_returned_1 = false;
w_altitude_1 = b_altitude_1 - a_altitude_1;
altitude_return_value_1 = a_altitude_1 + w_altitude_1 * dot(c_altitude_1 - a_altitude_1, w_altitude_1) / dot(w_altitude_1, w_altitude_1);
altitude_has_returned_1 = true;
altitude_return_value_inlined_27_1 = altitude_return_value_1;
q3_chalk_1 = altitude_return_value_inlined_27_1;
p_sdLine_1 = p_chalk_1;
a_sdLine_1 = p1_chalk_1;
b_sdLine_1 = q1_chalk_1;
sdLine_has_returned_1 = false;
pa_sdLine_1 = p_sdLine_1 - a_sdLine_1;
ba_sdLine_1 = b_sdLine_1 - a_sdLine_1;
h_sdLine_1 = clamp(dot(pa_sdLine_1, ba_sdLine_1) / dot(ba_sdLine_1, ba_sdLine_1), 0.0, 1.0);
sdLine_return_value_1 = length(pa_sdLine_1 - h_sdLine_1 * ba_sdLine_1);
sdLine_has_returned_1 = true;
sdLine_return_value_inlined_28_1 = sdLine_return_value_1;
d_chalk_1 = sdLine_return_value_inlined_28_1;
p_sdLine_1 = p_chalk_1;
a_sdLine_1 = p2_chalk_1;
b_sdLine_1 = q2_chalk_1;
sdLine_has_returned_1 = false;
pa_sdLine_1 = p_sdLine_1 - a_sdLine_1;
ba_sdLine_1 = b_sdLine_1 - a_sdLine_1;
h_sdLine_1 = clamp(dot(pa_sdLine_1, ba_sdLine_1) / dot(ba_sdLine_1, ba_sdLine_1), 0.0, 1.0);
sdLine_return_value_1 = length(pa_sdLine_1 - h_sdLine_1 * ba_sdLine_1);
sdLine_has_returned_1 = true;
sdLine_return_value_inlined_29_1 = sdLine_return_value_1;
d_chalk_1 = min(d_chalk_1, sdLine_return_value_inlined_29_1);
p_sdLine_1 = p_chalk_1;
a_sdLine_1 = p3_chalk_1;
b_sdLine_1 = q3_chalk_1;
sdLine_has_returned_1 = false;
pa_sdLine_1 = p_sdLine_1 - a_sdLine_1;
ba_sdLine_1 = b_sdLine_1 - a_sdLine_1;
h_sdLine_1 = clamp(dot(pa_sdLine_1, ba_sdLine_1) / dot(ba_sdLine_1, ba_sdLine_1), 0.0, 1.0);
sdLine_return_value_1 = length(pa_sdLine_1 - h_sdLine_1 * ba_sdLine_1);
sdLine_has_returned_1 = true;
sdLine_return_value_inlined_30_1 = sdLine_return_value_1;
d_chalk_1 = min(d_chalk_1, sdLine_return_value_inlined_30_1);
o1_chalk_1 = normalize(p1_chalk_1 - q1_chalk_1) * 0.18;
o2_chalk_1 = normalize(p2_chalk_1 - q2_chalk_1) * 0.18;
o3_chalk_1 = normalize(p3_chalk_1 - q3_chalk_1) * 0.18;
p_sdLine_1 = p_chalk_1;
a_sdLine_1 = q1_chalk_1 + vec2(o1_chalk_1.x + o1_chalk_1.y, o1_chalk_1.y - o1_chalk_1.x);
b_sdLine_1 = q1_chalk_1 + vec2(o1_chalk_1.x, o1_chalk_1.y);
sdLine_has_returned_1 = false;
pa_sdLine_1 = p_sdLine_1 - a_sdLine_1;
ba_sdLine_1 = b_sdLine_1 - a_sdLine_1;
h_sdLine_1 = clamp(dot(pa_sdLine_1, ba_sdLine_1) / dot(ba_sdLine_1, ba_sdLine_1), 0.0, 1.0);
sdLine_return_value_1 = length(pa_sdLine_1 - h_sdLine_1 * ba_sdLine_1);
sdLine_has_returned_1 = true;
sdLine_return_value_inlined_31_1 = sdLine_return_value_1;
d_chalk_1 = min(d_chalk_1, sdLine_return_value_inlined_31_1);
p_sdLine_1 = p_chalk_1;
a_sdLine_1 = q1_chalk_1 + vec2(o1_chalk_1.x + o1_chalk_1.y, o1_chalk_1.y - o1_chalk_1.x);
b_sdLine_1 = q1_chalk_1 + vec2(o1_chalk_1.y, - o1_chalk_1.x);
sdLine_has_returned_1 = false;
pa_sdLine_1 = p_sdLine_1 - a_sdLine_1;
ba_sdLine_1 = b_sdLine_1 - a_sdLine_1;
h_sdLine_1 = clamp(dot(pa_sdLine_1, ba_sdLine_1) / dot(ba_sdLine_1, ba_sdLine_1), 0.0, 1.0);
sdLine_return_value_1 = length(pa_sdLine_1 - h_sdLine_1 * ba_sdLine_1);
sdLine_has_returned_1 = true;
sdLine_return_value_inlined_32_1 = sdLine_return_value_1;
d_chalk_1 = min(d_chalk_1, sdLine_return_value_inlined_32_1);
p_sdLine_1 = p_chalk_1;
a_sdLine_1 = q2_chalk_1 + vec2(o2_chalk_1.x + o2_chalk_1.y, o2_chalk_1.y - o2_chalk_1.x);
b_sdLine_1 = q2_chalk_1 + vec2(o2_chalk_1.x, o2_chalk_1.y);
sdLine_has_returned_1 = false;
pa_sdLine_1 = p_sdLine_1 - a_sdLine_1;
ba_sdLine_1 = b_sdLine_1 - a_sdLine_1;
h_sdLine_1 = clamp(dot(pa_sdLine_1, ba_sdLine_1) / dot(ba_sdLine_1, ba_sdLine_1), 0.0, 1.0);
sdLine_return_value_1 = length(pa_sdLine_1 - h_sdLine_1 * ba_sdLine_1);
sdLine_has_returned_1 = true;
sdLine_return_value_inlined_33_1 = sdLine_return_value_1;
d_chalk_1 = min(d_chalk_1, sdLine_return_value_inlined_33_1);
p_sdLine_1 = p_chalk_1;
a_sdLine_1 = q2_chalk_1 + vec2(o2_chalk_1.x + o2_chalk_1.y, o2_chalk_1.y - o2_chalk_1.x);
b_sdLine_1 = q2_chalk_1 + vec2(o2_chalk_1.y, - o2_chalk_1.x);
sdLine_has_returned_1 = false;
pa_sdLine_1 = p_sdLine_1 - a_sdLine_1;
ba_sdLine_1 = b_sdLine_1 - a_sdLine_1;
h_sdLine_1 = clamp(dot(pa_sdLine_1, ba_sdLine_1) / dot(ba_sdLine_1, ba_sdLine_1), 0.0, 1.0);
sdLine_return_value_1 = length(pa_sdLine_1 - h_sdLine_1 * ba_sdLine_1);
sdLine_has_returned_1 = true;
sdLine_return_value_inlined_34_1 = sdLine_return_value_1;
d_chalk_1 = min(d_chalk_1, sdLine_return_value_inlined_34_1);
p_sdLine_1 = p_chalk_1;
a_sdLine_1 = q3_chalk_1 + vec2(o3_chalk_1.x + o3_chalk_1.y, o3_chalk_1.y - o3_chalk_1.x);
b_sdLine_1 = q3_chalk_1 + vec2(o3_chalk_1.x, o3_chalk_1.y);
sdLine_has_returned_1 = false;
pa_sdLine_1 = p_sdLine_1 - a_sdLine_1;
ba_sdLine_1 = b_sdLine_1 - a_sdLine_1;
h_sdLine_1 = clamp(dot(pa_sdLine_1, ba_sdLine_1) / dot(ba_sdLine_1, ba_sdLine_1), 0.0, 1.0);
sdLine_return_value_1 = length(pa_sdLine_1 - h_sdLine_1 * ba_sdLine_1);
sdLine_has_returned_1 = true;
sdLine_return_value_inlined_35_1 = sdLine_return_value_1;
d_chalk_1 = min(d_chalk_1, sdLine_return_value_inlined_35_1);
p_sdLine_1 = p_chalk_1;
a_sdLine_1 = q3_chalk_1 + vec2(o3_chalk_1.x + o3_chalk_1.y, o3_chalk_1.y - o3_chalk_1.x);
b_sdLine_1 = q3_chalk_1 + vec2(o3_chalk_1.y, - o3_chalk_1.x);
sdLine_has_returned_1 = false;
pa_sdLine_1 = p_sdLine_1 - a_sdLine_1;
ba_sdLine_1 = b_sdLine_1 - a_sdLine_1;
h_sdLine_1 = clamp(dot(pa_sdLine_1, ba_sdLine_1) / dot(ba_sdLine_1, ba_sdLine_1), 0.0, 1.0);
sdLine_return_value_1 = length(pa_sdLine_1 - h_sdLine_1 * ba_sdLine_1);
sdLine_has_returned_1 = true;
sdLine_return_value_inlined_36_1 = sdLine_return_value_1;
d_chalk_1 = min(d_chalk_1, sdLine_return_value_inlined_36_1);
p_fbm_1 = p_chalk_1 * 2.5;
fbm_has_returned_1 = false;
f_fbm_1 = 0.0;
s_fbm_1 = 0.5;
for( i_fbm_1 = 0;
i_fbm_1 < 6; i_fbm_1 ++)
{
p_noise_1 = p_fbm_1;
noise_has_returned_1 = false;
i_noise_1 = ivec2(floor(p_noise_1));
f_noise_1 = fract(p_noise_1);
u_noise_1 = f_noise_1 * f_noise_1 * (3.0 - 2.0 * f_noise_1);
z_grad_1 = i_noise_1 + ivec2(0, 0);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_0_1 = grad_return_value_1;
z_grad_1 = i_noise_1 + ivec2(1, 0);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_1_1 = grad_return_value_1;
z_grad_1 = i_noise_1 + ivec2(0, 1);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_2_1 = grad_return_value_1;
z_grad_1 = i_noise_1 + ivec2(1, 1);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_3_1 = grad_return_value_1;
noise_return_value_1 = mix(mix(dot(grad_return_value_inlined_0_1, f_noise_1 - vec2(0.0, 0.0)), dot(grad_return_value_inlined_1_1, f_noise_1 - vec2(1.0, 0.0)), u_noise_1.x), mix(dot(grad_return_value_inlined_2_1, f_noise_1 - vec2(0.0, 1.0)), dot(grad_return_value_inlined_3_1, f_noise_1 - vec2(1.0, 1.0)), u_noise_1.x), u_noise_1.y);
noise_has_returned_1 = true;
noise_return_value_inlined_4_1 = noise_return_value_1;
f_fbm_1 += s_fbm_1 * noise_return_value_inlined_4_1;
p_fbm_1 = m_fbm_1 * p_fbm_1;
s_fbm_1 = 0.5 * s_fbm_1;
}
fbm_return_value_1 = f_fbm_1;
fbm_has_returned_1 = true;
fbm_return_value_inlined_37_1 = fbm_return_value_1;
d_chalk_1 += 0.03 * fbm_return_value_inlined_37_1;
col_chalk_1 = mix(col_chalk_1, 1.2 * 1.25 * vec3(70, 100, 70) / 255.0, gf_chalk_1 * (1.0 - smoothstep(0.01, 0.03, d_chalk_1)));
a1_intersect_1 = p1_chalk_1;
b1_intersect_1 = q1_chalk_1;
a2_intersect_1 = p2_chalk_1;
b2_intersect_1 = q2_chalk_1;
intersect_has_returned_1 = false;
a_cro_1 = a1_intersect_1 - a2_intersect_1;
b_cro_1 = b1_intersect_1 - a1_intersect_1;
cro_has_returned_1 = false;
cro_return_value_1 = a_cro_1.x * b_cro_1.y - a_cro_1.y * b_cro_1.x;
cro_has_returned_1 = true;
cro_return_value_inlined_5_1 = cro_return_value_1;
a_cro_1 = b2_intersect_1 - a2_intersect_1;
b_cro_1 = b1_intersect_1 - a1_intersect_1;
cro_has_returned_1 = false;
cro_return_value_1 = a_cro_1.x * b_cro_1.y - a_cro_1.y * b_cro_1.x;
cro_has_returned_1 = true;
cro_return_value_inlined_6_1 = cro_return_value_1;
h_intersect_1 = cro_return_value_inlined_5_1 / cro_return_value_inlined_6_1;
intersect_return_value_1 = a2_intersect_1 + (b2_intersect_1 - a2_intersect_1) * h_intersect_1;
intersect_has_returned_1 = true;
intersect_return_value_inlined_38_1 = intersect_return_value_1;
pc_chalk_1 = intersect_return_value_inlined_38_1;
d_chalk_1 = length(p_chalk_1 - pc_chalk_1) - 0.08;
p_fbm_1 = (p_chalk_1 - pc_chalk_1) * 8.0;
fbm_has_returned_1 = false;
f_fbm_1 = 0.0;
s_fbm_1 = 0.5;
for( i_fbm_1 = 0;
i_fbm_1 < 6; i_fbm_1 ++)
{
p_noise_1 = p_fbm_1;
noise_has_returned_1 = false;
i_noise_1 = ivec2(floor(p_noise_1));
f_noise_1 = fract(p_noise_1);
u_noise_1 = f_noise_1 * f_noise_1 * (3.0 - 2.0 * f_noise_1);
z_grad_1 = i_noise_1 + ivec2(0, 0);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_0_1 = grad_return_value_1;
z_grad_1 = i_noise_1 + ivec2(1, 0);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_1_1 = grad_return_value_1;
z_grad_1 = i_noise_1 + ivec2(0, 1);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_2_1 = grad_return_value_1;
z_grad_1 = i_noise_1 + ivec2(1, 1);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_3_1 = grad_return_value_1;
noise_return_value_1 = mix(mix(dot(grad_return_value_inlined_0_1, f_noise_1 - vec2(0.0, 0.0)), dot(grad_return_value_inlined_1_1, f_noise_1 - vec2(1.0, 0.0)), u_noise_1.x), mix(dot(grad_return_value_inlined_2_1, f_noise_1 - vec2(0.0, 1.0)), dot(grad_return_value_inlined_3_1, f_noise_1 - vec2(1.0, 1.0)), u_noise_1.x), u_noise_1.y);
noise_has_returned_1 = true;
noise_return_value_inlined_4_1 = noise_return_value_1;
f_fbm_1 += s_fbm_1 * noise_return_value_inlined_4_1;
p_fbm_1 = m_fbm_1 * p_fbm_1;
s_fbm_1 = 0.5 * s_fbm_1;
}
fbm_return_value_1 = f_fbm_1;
fbm_has_returned_1 = true;
fbm_return_value_inlined_39_1 = fbm_return_value_1;
d_chalk_1 += 0.05 * fbm_return_value_inlined_39_1;
col_chalk_1 = mix(col_chalk_1, 1.1 * vec3(140, 200, 60) / 255.0, (1.0 - smoothstep(0.01, 0.03, d_chalk_1)));
d_chalk_1 = min(min(length(p_chalk_1 - p1_chalk_1), length(p_chalk_1 - p2_chalk_1)), length(p_chalk_1 - p3_chalk_1)) - 0.06;
p_fbm_1 = p_chalk_1 * 4.0;
fbm_has_returned_1 = false;
f_fbm_1 = 0.0;
s_fbm_1 = 0.5;
for( i_fbm_1 = 0;
i_fbm_1 < 6; i_fbm_1 ++)
{
p_noise_1 = p_fbm_1;
noise_has_returned_1 = false;
i_noise_1 = ivec2(floor(p_noise_1));
f_noise_1 = fract(p_noise_1);
u_noise_1 = f_noise_1 * f_noise_1 * (3.0 - 2.0 * f_noise_1);
z_grad_1 = i_noise_1 + ivec2(0, 0);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_0_1 = grad_return_value_1;
z_grad_1 = i_noise_1 + ivec2(1, 0);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_1_1 = grad_return_value_1;
z_grad_1 = i_noise_1 + ivec2(0, 1);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_2_1 = grad_return_value_1;
z_grad_1 = i_noise_1 + ivec2(1, 1);
grad_has_returned_1 = false;
n_grad_1 = z_grad_1.x * 1 + z_grad_1.y * 113;
n_grad_1 = (n_grad_1 << 13) ^ n_grad_1;
n_grad_1 = (n_grad_1 * (n_grad_1 * n_grad_1 * 15731 + 789221) + 1376312589) >> 16;
n_grad_1 &= 7;
gr_grad_1 = vec2(n_grad_1 & 1, n_grad_1 >> 1) * 2.0 - 1.0;
grad_return_value_1 = (n_grad_1 >= 6) ? vec2(0.0, gr_grad_1.x) : (n_grad_1 >= 4) ? vec2(gr_grad_1.x, 0.0) : gr_grad_1;
grad_has_returned_1 = true;
grad_return_value_inlined_3_1 = grad_return_value_1;
noise_return_value_1 = mix(mix(dot(grad_return_value_inlined_0_1, f_noise_1 - vec2(0.0, 0.0)), dot(grad_return_value_inlined_1_1, f_noise_1 - vec2(1.0, 0.0)), u_noise_1.x), mix(dot(grad_return_value_inlined_2_1, f_noise_1 - vec2(0.0, 1.0)), dot(grad_return_value_inlined_3_1, f_noise_1 - vec2(1.0, 1.0)), u_noise_1.x), u_noise_1.y);
noise_has_returned_1 = true;
noise_return_value_inlined_4_1 = noise_return_value_1;
f_fbm_1 += s_fbm_1 * noise_return_value_inlined_4_1;
p_fbm_1 = m_fbm_1 * p_fbm_1;
s_fbm_1 = 0.5 * s_fbm_1;
}
fbm_return_value_1 = f_fbm_1;
fbm_has_returned_1 = true;
fbm_return_value_inlined_40_1 = fbm_return_value_1;
d_chalk_1 += 0.07 * fbm_return_value_inlined_40_1;
col_chalk_1 = mix(col_chalk_1, 1.1 * vec3(255, 240, 8) / 255.0, (1.0 - smoothstep(0.01, 0.03, d_chalk_1)));
chalk_return_value_1 = col_chalk_1;
chalk_has_returned_1 = true;
chalk_return_value_inlined_42_1 = chalk_return_value_1;
col_mainImage_1 = chalk_return_value_inlined_42_1;
fragColor_1 = vec4(col_mainImage_1, 1.0);
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
float2 vec2_ctor_int_int(int x0, int x1)
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
float3 vec3_ctor(float2 x0, float x1)
{
    return float3(x0, x1);
}
float3 vec3_ctor(float3 x0)
{
    return float3(x0);
}
float4 vec4_ctor(float3 x0, float x1)
{
    return float4(x0, x1);
}
int2 ivec2_ctor(float2 x0)
{
    return int2(x0);
}
// Uniforms

uniform float2 _iResolution : register(c0);
uniform float _iTime : register(c1);
uniform float4 _iMouse : register(c2);
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
float atan_emu(float y, float x)
{
    if(x == 0 && y == 0) x = 1;
    return atan2(y, x);
}


static bool _live_tu_has_executed = {false};
static float4 _fragColor_1 = {0, 0, 0, 0};
static float4 _fragColor_2 = {0, 0, 0, 0};
@@ PIXEL OUTPUT @@

PS_OUTPUT main(@@ PIXEL MAIN PARAMETERS @@){
@@ MAIN PROLOGUE @@
float2 _fragCoord_blackboard_15628 = {0, 0};
bool _blackboard_has_returned_15629 = {0};
float3 _blackboard_return_value_15630 = {0, 0, 0};
float2 _p_blackboard_15631 = {0, 0};
float2 _q_blackboard_15632 = {0, 0};
float _v_blackboard_15633 = {0};
float3 _col_blackboard_15634 = {0, 0, 0};
float2 _p_fbm_15635 = {0, 0};
bool _fbm_has_returned_15636 = {0};
float _fbm_return_value_15637 = {0};
float _f_fbm_15639 = {0};
float _s_fbm_15640 = {0};
int _i_fbm_15641 = {0};
float2 _p_noise_15642 = {0, 0};
bool _noise_has_returned_15643 = {0};
float _noise_return_value_15644 = {0};
int2 _i_noise_15645 = {0, 0};
float2 _f_noise_15646 = {0, 0};
float2 _u_noise_15647 = {0, 0};
int2 _z_grad_15648 = {0, 0};
bool _grad_has_returned_15649 = {0};
float2 _grad_return_value_15650 = {0, 0};
int _n_grad_15651 = {0};
float2 _gr_grad_15652 = {0, 0};
float2 _grad_return_value_inlined_0_15653 = {0, 0};
float2 _grad_return_value_inlined_1_15654 = {0, 0};
float2 _grad_return_value_inlined_2_15655 = {0, 0};
float2 _grad_return_value_inlined_3_15656 = {0, 0};
float _noise_return_value_inlined_4_15657 = {0};
float _fbm_return_value_inlined_7_15658 = {0};
float _fbm_return_value_inlined_8_15659 = {0};
float2 _ce_flattened_block_1_blackboard_15660 = {0, 0};
float2 _w_flattened_block_1_blackboard_15661 = {0, 0};
float _fbm_return_value_inlined_9_15662 = {0};
float _ff_flattened_block_1_blackboard_15663 = {0};
float _fa_flattened_block_1_blackboard_15664 = {0};
float _m_blackboard_15665 = {0};
float _m2_blackboard_15666 = {0};
int _i_blackboard_15667 = {0};
float2 _p1_blackboard_15668 = {0, 0};
float2 _p2_blackboard_15669 = {0, 0};
float2 _p_sdLine_15670 = {0, 0};
float2 _a_sdLine_15671 = {0, 0};
float2 _b_sdLine_15672 = {0, 0};
bool _sdLine_has_returned_15673 = {0};
float _sdLine_return_value_15674 = {0};
float2 _pa_sdLine_15675 = {0, 0};
float2 _ba_sdLine_15676 = {0, 0};
float _h_sdLine_15677 = {0};
float _sdLine_return_value_inlined_10_15678 = {0};
float _d_blackboard_15679 = {0};
float _fbm_return_value_inlined_11_15680 = {0};
float _fbm_return_value_inlined_12_15681 = {0};
float _ww_blackboard_15682 = {0};
float _fbm_return_value_inlined_13_15683 = {0};
float3 _blackboard_return_value_inlined_41_15684 = {0, 0, 0};
float3 _col_mainImage_15685 = {0, 0, 0};
float3 _col_chalk_15686 = {0, 0, 0};
float2 _fragCoord_chalk_15687 = {0, 0};
bool _chalk_has_returned_15688 = {0};
float3 _chalk_return_value_15689 = {0, 0, 0};
float2 _p1_chalk_15690 = {0, 0};
float2 _p2_chalk_15691 = {0, 0};
float2 _p3_chalk_15692 = {0, 0};
float2 _p_chalk_15693 = {0, 0};
float _gf_chalk_15694 = {0};
float _fbm_return_value_inlined_14_15695 = {0};
float _d_chalk_15696 = {0};
float _x_chalk_15697 = {0};
float _y_chalk_15698 = {0};
float _dy_chalk_15699 = {0};
float _fbm_return_value_inlined_15_15700 = {0};
float _sdLine_return_value_inlined_16_15701 = {0};
float _sdLine_return_value_inlined_17_15702 = {0};
float _sdLine_return_value_inlined_18_15703 = {0};
float _sdLine_return_value_inlined_19_15704 = {0};
float _fbm_return_value_inlined_20_15705 = {0};
float _sdLine_return_value_inlined_21_15706 = {0};
float _sdLine_return_value_inlined_22_15707 = {0};
float _sdLine_return_value_inlined_23_15708 = {0};
float _fbm_return_value_inlined_24_15709 = {0};
float2 _c_altitude_15710 = {0, 0};
float2 _a_altitude_15711 = {0, 0};
float2 _b_altitude_15712 = {0, 0};
bool _altitude_has_returned_15713 = {0};
float2 _altitude_return_value_15714 = {0, 0};
float2 _w_altitude_15715 = {0, 0};
float2 _altitude_return_value_inlined_25_15716 = {0, 0};
float2 _q1_chalk_15717 = {0, 0};
float2 _altitude_return_value_inlined_26_15718 = {0, 0};
float2 _q2_chalk_15719 = {0, 0};
float2 _altitude_return_value_inlined_27_15720 = {0, 0};
float2 _q3_chalk_15721 = {0, 0};
float _sdLine_return_value_inlined_28_15722 = {0};
float _sdLine_return_value_inlined_29_15723 = {0};
float _sdLine_return_value_inlined_30_15724 = {0};
float2 _o1_chalk_15725 = {0, 0};
float2 _o2_chalk_15726 = {0, 0};
float2 _o3_chalk_15727 = {0, 0};
float _sdLine_return_value_inlined_31_15728 = {0};
float _sdLine_return_value_inlined_32_15729 = {0};
float _sdLine_return_value_inlined_33_15730 = {0};
float _sdLine_return_value_inlined_34_15731 = {0};
float _sdLine_return_value_inlined_35_15732 = {0};
float _sdLine_return_value_inlined_36_15733 = {0};
float _fbm_return_value_inlined_37_15734 = {0};
float2 _a1_intersect_15735 = {0, 0};
float2 _b1_intersect_15736 = {0, 0};
float2 _a2_intersect_15737 = {0, 0};
float2 _b2_intersect_15738 = {0, 0};
bool _intersect_has_returned_15739 = {0};
float2 _intersect_return_value_15740 = {0, 0};
float2 _a_cro_15741 = {0, 0};
float2 _b_cro_15742 = {0, 0};
bool _cro_has_returned_15743 = {0};
float _cro_return_value_15744 = {0};
float _cro_return_value_inlined_5_15745 = {0};
float _cro_return_value_inlined_6_15746 = {0};
float _h_intersect_15747 = {0};
float2 _intersect_return_value_inlined_38_15748 = {0, 0};
float2 _pc_chalk_15749 = {0, 0};
float _fbm_return_value_inlined_39_15750 = {0};
float _fbm_return_value_inlined_40_15751 = {0};
float3 _chalk_return_value_inlined_42_15752 = {0, 0, 0};
(_fragCoord_blackboard_15628 = gl_FragCoord.xy);
(_blackboard_has_returned_15629 = false);
(_p_blackboard_15631 = (((2.0 * _fragCoord_blackboard_15628) - _iResolution.xy) / _iResolution.y));
(_q_blackboard_15632 = (_fragCoord_blackboard_15628 / _iResolution.xy));
(_v_blackboard_15633 = sqrt(((((16.0 * _q_blackboard_15632.x) * _q_blackboard_15632.y) * (1.0 - _q_blackboard_15632.x)) * (1.0 - _q_blackboard_15632.y))));
(_col_blackboard_15634 = vec3_ctor((0.1 + (0.050000001 * _v_blackboard_15633))));
(_p_fbm_15635 = ((_p_blackboard_15631 * 1.25) * float2(1.0, 4.0)));
(_fbm_has_returned_15636 = false);
(_f_fbm_15639 = 0.0);
(_s_fbm_15640 = 0.5);
{ for((_i_fbm_15641 = 0); (_i_fbm_15641 < 6); (_i_fbm_15641++))
{
(_p_noise_15642 = _p_fbm_15635);
(_noise_has_returned_15643 = false);
(_i_noise_15645 = ivec2_ctor(floor(_p_noise_15642)));
(_f_noise_15646 = frac(_p_noise_15642));
(_u_noise_15647 = ((_f_noise_15646 * _f_noise_15646) * (3.0 - (2.0 * _f_noise_15646))));
(_z_grad_15648 = (_i_noise_15645 + int2(0, 0)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s1742 = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s1742 = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s1743 = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s1743 = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s1743 = _gr_grad_15652);
}
(s1742 = s1743);
}
(_grad_return_value_15650 = s1742);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_0_15653 = _grad_return_value_15650);
(_z_grad_15648 = (_i_noise_15645 + int2(1, 0)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s1744 = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s1744 = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s1745 = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s1745 = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s1745 = _gr_grad_15652);
}
(s1744 = s1745);
}
(_grad_return_value_15650 = s1744);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_1_15654 = _grad_return_value_15650);
(_z_grad_15648 = (_i_noise_15645 + int2(0, 1)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s1746 = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s1746 = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s1747 = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s1747 = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s1747 = _gr_grad_15652);
}
(s1746 = s1747);
}
(_grad_return_value_15650 = s1746);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_2_15655 = _grad_return_value_15650);
(_z_grad_15648 = (_i_noise_15645 + int2(1, 1)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s1748 = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s1748 = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s1749 = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s1749 = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s1749 = _gr_grad_15652);
}
(s1748 = s1749);
}
(_grad_return_value_15650 = s1748);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_3_15656 = _grad_return_value_15650);
(_noise_return_value_15644 = lerp(lerp(dot(_grad_return_value_inlined_0_15653, (_f_noise_15646 - float2(0.0, 0.0))), dot(_grad_return_value_inlined_1_15654, (_f_noise_15646 - float2(1.0, 0.0))), _u_noise_15647.x), lerp(dot(_grad_return_value_inlined_2_15655, (_f_noise_15646 - float2(0.0, 1.0))), dot(_grad_return_value_inlined_3_15656, (_f_noise_15646 - float2(1.0, 1.0))), _u_noise_15647.x), _u_noise_15647.y));
(_noise_has_returned_15643 = true);
(_noise_return_value_inlined_4_15657 = _noise_return_value_15644);
(_f_fbm_15639 += (_s_fbm_15640 * _noise_return_value_inlined_4_15657));
(_p_fbm_15635 = mul(transpose(float2x2(1.6, 1.2, -1.2, 1.6)), _p_fbm_15635));
(_s_fbm_15640 = (0.5 * _s_fbm_15640));
}
}
(_fbm_return_value_15637 = _f_fbm_15639);
(_fbm_has_returned_15636 = true);
(_fbm_return_value_inlined_7_15658 = _fbm_return_value_15637);
(_col_blackboard_15634 += (0.050000001 * _fbm_return_value_inlined_7_15658));
(_p_fbm_15635 = (_p_blackboard_15631 * 20.0));
(_fbm_has_returned_15636 = false);
(_f_fbm_15639 = 0.0);
(_s_fbm_15640 = 0.5);
{ for((_i_fbm_15641 = 0); (_i_fbm_15641 < 6); (_i_fbm_15641++))
{
(_p_noise_15642 = _p_fbm_15635);
(_noise_has_returned_15643 = false);
(_i_noise_15645 = ivec2_ctor(floor(_p_noise_15642)));
(_f_noise_15646 = frac(_p_noise_15642));
(_u_noise_15647 = ((_f_noise_15646 * _f_noise_15646) * (3.0 - (2.0 * _f_noise_15646))));
(_z_grad_15648 = (_i_noise_15645 + int2(0, 0)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s174a = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s174a = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s174b = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s174b = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s174b = _gr_grad_15652);
}
(s174a = s174b);
}
(_grad_return_value_15650 = s174a);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_0_15653 = _grad_return_value_15650);
(_z_grad_15648 = (_i_noise_15645 + int2(1, 0)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s174c = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s174c = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s174d = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s174d = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s174d = _gr_grad_15652);
}
(s174c = s174d);
}
(_grad_return_value_15650 = s174c);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_1_15654 = _grad_return_value_15650);
(_z_grad_15648 = (_i_noise_15645 + int2(0, 1)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s174e = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s174e = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s174f = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s174f = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s174f = _gr_grad_15652);
}
(s174e = s174f);
}
(_grad_return_value_15650 = s174e);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_2_15655 = _grad_return_value_15650);
(_z_grad_15648 = (_i_noise_15645 + int2(1, 1)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s1750 = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s1750 = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s1751 = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s1751 = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s1751 = _gr_grad_15652);
}
(s1750 = s1751);
}
(_grad_return_value_15650 = s1750);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_3_15656 = _grad_return_value_15650);
(_noise_return_value_15644 = lerp(lerp(dot(_grad_return_value_inlined_0_15653, (_f_noise_15646 - float2(0.0, 0.0))), dot(_grad_return_value_inlined_1_15654, (_f_noise_15646 - float2(1.0, 0.0))), _u_noise_15647.x), lerp(dot(_grad_return_value_inlined_2_15655, (_f_noise_15646 - float2(0.0, 1.0))), dot(_grad_return_value_inlined_3_15656, (_f_noise_15646 - float2(1.0, 1.0))), _u_noise_15647.x), _u_noise_15647.y));
(_noise_has_returned_15643 = true);
(_noise_return_value_inlined_4_15657 = _noise_return_value_15644);
(_f_fbm_15639 += (_s_fbm_15640 * _noise_return_value_inlined_4_15657));
(_p_fbm_15635 = mul(transpose(float2x2(1.6, 1.2, -1.2, 1.6)), _p_fbm_15635));
(_s_fbm_15640 = (0.5 * _s_fbm_15640));
}
}
(_fbm_return_value_15637 = _f_fbm_15639);
(_fbm_has_returned_15636 = true);
(_fbm_return_value_inlined_8_15659 = _fbm_return_value_15637);
(_col_blackboard_15634 += (0.02 * _fbm_return_value_inlined_8_15659));
(_ce_flattened_block_1_blackboard_15660 = float2(2.0, -10.0));
(_w_flattened_block_1_blackboard_15661 = ((2.5 * _p_blackboard_15631) - _ce_flattened_block_1_blackboard_15660));
(_w_flattened_block_1_blackboard_15661 = vec2_ctor(atan_emu(_w_flattened_block_1_blackboard_15661.y, _w_flattened_block_1_blackboard_15661.x), length(_w_flattened_block_1_blackboard_15661)));
(_p_fbm_15635 = ((_w_flattened_block_1_blackboard_15661 * 2.0) * float2(1.0, 1.0)));
(_fbm_has_returned_15636 = false);
(_f_fbm_15639 = 0.0);
(_s_fbm_15640 = 0.5);
{ for((_i_fbm_15641 = 0); (_i_fbm_15641 < 6); (_i_fbm_15641++))
{
(_p_noise_15642 = _p_fbm_15635);
(_noise_has_returned_15643 = false);
(_i_noise_15645 = ivec2_ctor(floor(_p_noise_15642)));
(_f_noise_15646 = frac(_p_noise_15642));
(_u_noise_15647 = ((_f_noise_15646 * _f_noise_15646) * (3.0 - (2.0 * _f_noise_15646))));
(_z_grad_15648 = (_i_noise_15645 + int2(0, 0)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s1752 = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s1752 = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s1753 = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s1753 = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s1753 = _gr_grad_15652);
}
(s1752 = s1753);
}
(_grad_return_value_15650 = s1752);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_0_15653 = _grad_return_value_15650);
(_z_grad_15648 = (_i_noise_15645 + int2(1, 0)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s1754 = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s1754 = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s1755 = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s1755 = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s1755 = _gr_grad_15652);
}
(s1754 = s1755);
}
(_grad_return_value_15650 = s1754);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_1_15654 = _grad_return_value_15650);
(_z_grad_15648 = (_i_noise_15645 + int2(0, 1)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s1756 = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s1756 = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s1757 = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s1757 = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s1757 = _gr_grad_15652);
}
(s1756 = s1757);
}
(_grad_return_value_15650 = s1756);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_2_15655 = _grad_return_value_15650);
(_z_grad_15648 = (_i_noise_15645 + int2(1, 1)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s1758 = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s1758 = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s1759 = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s1759 = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s1759 = _gr_grad_15652);
}
(s1758 = s1759);
}
(_grad_return_value_15650 = s1758);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_3_15656 = _grad_return_value_15650);
(_noise_return_value_15644 = lerp(lerp(dot(_grad_return_value_inlined_0_15653, (_f_noise_15646 - float2(0.0, 0.0))), dot(_grad_return_value_inlined_1_15654, (_f_noise_15646 - float2(1.0, 0.0))), _u_noise_15647.x), lerp(dot(_grad_return_value_inlined_2_15655, (_f_noise_15646 - float2(0.0, 1.0))), dot(_grad_return_value_inlined_3_15656, (_f_noise_15646 - float2(1.0, 1.0))), _u_noise_15647.x), _u_noise_15647.y));
(_noise_has_returned_15643 = true);
(_noise_return_value_inlined_4_15657 = _noise_return_value_15644);
(_f_fbm_15639 += (_s_fbm_15640 * _noise_return_value_inlined_4_15657));
(_p_fbm_15635 = mul(transpose(float2x2(1.6, 1.2, -1.2, 1.6)), _p_fbm_15635));
(_s_fbm_15640 = (0.5 * _s_fbm_15640));
}
}
(_fbm_return_value_15637 = _f_fbm_15639);
(_fbm_has_returned_15636 = true);
(_fbm_return_value_inlined_9_15662 = _fbm_return_value_15637);
(_ff_flattened_block_1_blackboard_15663 = _fbm_return_value_inlined_9_15662);
(_fa_flattened_block_1_blackboard_15664 = smoothstep(1.5, 1.0, abs(((_w_flattened_block_1_blackboard_15661.y + _ce_flattened_block_1_blackboard_15660.y) - 0.69999999))));
(_fa_flattened_block_1_blackboard_15664 *= smoothstep(0.40000001, 0.2, abs(((_w_flattened_block_1_blackboard_15661.x - 1.8) + (0.5 * _ff_flattened_block_1_blackboard_15663)))));
(_col_blackboard_15634 += (((_v_blackboard_15633 * 0.059999999) * smoothstep(-0.5, 0.5, _ff_flattened_block_1_blackboard_15663)) * _fa_flattened_block_1_blackboard_15664));
(_m_blackboard_15665 = 0.0);
(_m2_blackboard_15666 = 0.0);
{ for((_i_blackboard_15667 = 0); (_i_blackboard_15667 < 20); (_i_blackboard_15667++))
{
(_p1_blackboard_15668 = (float2(3.0, 2.0) * sin(((float_ctor_int(_i_blackboard_15667) * 1.3) + float2(0.0, 1.0)))));
(_p2_blackboard_15669 = (_p1_blackboard_15668 + (float2(0.5, 2.0) * sin(((float_ctor_int(_i_blackboard_15667) * 11.1) + float2(2.0, 4.0))))));
(_p_sdLine_15670 = ((2.5 * _p_blackboard_15631) + (0.5 * sin(((2.5 * _p_blackboard_15631) + (float_ctor_int(_i_blackboard_15667) * float2(1.7, 2.3)))))));
(_a_sdLine_15671 = _p1_blackboard_15668);
(_b_sdLine_15672 = _p2_blackboard_15669);
(_sdLine_has_returned_15673 = false);
(_pa_sdLine_15675 = (_p_sdLine_15670 - _a_sdLine_15671));
(_ba_sdLine_15676 = (_b_sdLine_15672 - _a_sdLine_15671));
(_h_sdLine_15677 = clamp((dot(_pa_sdLine_15675, _ba_sdLine_15676) / dot(_ba_sdLine_15676, _ba_sdLine_15676)), 0.0, 1.0));
(_sdLine_return_value_15674 = length((_pa_sdLine_15675 - (_h_sdLine_15677 * _ba_sdLine_15676))));
(_sdLine_has_returned_15673 = true);
(_sdLine_return_value_inlined_10_15678 = _sdLine_return_value_15674);
(_d_blackboard_15679 = _sdLine_return_value_inlined_10_15678);
(_p_fbm_15635 = (1.25 * _p_blackboard_15631));
(_fbm_has_returned_15636 = false);
(_f_fbm_15639 = 0.0);
(_s_fbm_15640 = 0.5);
{ for((_i_fbm_15641 = (0 + 0)); (_i_fbm_15641 < 6); (_i_fbm_15641++))
{
(_p_noise_15642 = (_p_fbm_15635 + float2(0.0, 0.0)));
(_noise_has_returned_15643 = (false + false));
(_i_noise_15645 = (ivec2_ctor(floor(_p_noise_15642)) + int2(0, 0)));
(_f_noise_15646 = (frac(_p_noise_15642) + float2(0.0, 0.0)));
(_u_noise_15647 = (((_f_noise_15646 * _f_noise_15646) * (3.0 - (2.0 * _f_noise_15646))) + float2(0.0, 0.0)));
(_z_grad_15648 = ((_i_noise_15645 + int2(0, 0)) + int2(0, 0)));
(_grad_has_returned_15649 = (false + false));
(_n_grad_15651 = (((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)) + 0));
(_n_grad_15651 = (((_n_grad_15651 << 13) ^ _n_grad_15651) + 0));
(_n_grad_15651 = ((((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16) + 0));
(_n_grad_15651 &= (7 + 0));
(_gr_grad_15652 = (((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0) + float2(0.0, 0.0)));
float2 s175a = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s175a = (vec2_ctor(0.0, _gr_grad_15652.x) + float2(0.0, 0.0)));
}
else
{
float2 s175b = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s175b = (vec2_ctor(_gr_grad_15652.x, 0.0) + float2(0.0, 0.0)));
}
else
{
(s175b = (_gr_grad_15652 + float2(0.0, 0.0)));
}
(s175a = (s175b + float2(0.0, 0.0)));
}
(_grad_return_value_15650 = (s175a + float2(0.0, 0.0)));
(_grad_has_returned_15649 = (true + false));
(_grad_return_value_inlined_0_15653 = (_grad_return_value_15650 + float2(0.0, 0.0)));
(_z_grad_15648 = ((_i_noise_15645 + int2(1, 0)) + int2(0, 0)));
(_grad_has_returned_15649 = (false + false));
(_n_grad_15651 = (((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)) + 0));
(_n_grad_15651 = (((_n_grad_15651 << 13) ^ _n_grad_15651) + 0));
(_n_grad_15651 = ((((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16) + 0));
(_n_grad_15651 &= (7 + 0));
(_gr_grad_15652 = (((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0) + float2(0.0, 0.0)));
float2 s175c = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s175c = (vec2_ctor(0.0, _gr_grad_15652.x) + float2(0.0, 0.0)));
}
else
{
float2 s175d = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s175d = (vec2_ctor(_gr_grad_15652.x, 0.0) + float2(0.0, 0.0)));
}
else
{
(s175d = (_gr_grad_15652 + float2(0.0, 0.0)));
}
(s175c = (s175d + float2(0.0, 0.0)));
}
(_grad_return_value_15650 = (s175c + float2(0.0, 0.0)));
(_grad_has_returned_15649 = (true + false));
(_grad_return_value_inlined_1_15654 = (_grad_return_value_15650 + float2(0.0, 0.0)));
(_z_grad_15648 = ((_i_noise_15645 + int2(0, 1)) + int2(0, 0)));
(_grad_has_returned_15649 = (false + false));
(_n_grad_15651 = (((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)) + 0));
(_n_grad_15651 = (((_n_grad_15651 << 13) ^ _n_grad_15651) + 0));
(_n_grad_15651 = ((((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16) + 0));
(_n_grad_15651 &= (7 + 0));
(_gr_grad_15652 = (((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0) + float2(0.0, 0.0)));
float2 s175e = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s175e = (vec2_ctor(0.0, _gr_grad_15652.x) + float2(0.0, 0.0)));
}
else
{
float2 s175f = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s175f = (vec2_ctor(_gr_grad_15652.x, 0.0) + float2(0.0, 0.0)));
}
else
{
(s175f = (_gr_grad_15652 + float2(0.0, 0.0)));
}
(s175e = (s175f + float2(0.0, 0.0)));
}
(_grad_return_value_15650 = (s175e + float2(0.0, 0.0)));
(_grad_has_returned_15649 = (true + false));
(_grad_return_value_inlined_2_15655 = (_grad_return_value_15650 + float2(0.0, 0.0)));
(_z_grad_15648 = ((_i_noise_15645 + int2(1, 1)) + int2(0, 0)));
(_grad_has_returned_15649 = (false + false));
(_n_grad_15651 = (((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)) + 0));
(_n_grad_15651 = (((_n_grad_15651 << 13) ^ _n_grad_15651) + 0));
(_n_grad_15651 = ((((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16) + 0));
(_n_grad_15651 &= (7 + 0));
(_gr_grad_15652 = (((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0) + float2(0.0, 0.0)));
float2 s1760 = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s1760 = (vec2_ctor(0.0, _gr_grad_15652.x) + float2(0.0, 0.0)));
}
else
{
float2 s1761 = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s1761 = (vec2_ctor(_gr_grad_15652.x, 0.0) + float2(0.0, 0.0)));
}
else
{
(s1761 = (_gr_grad_15652 + float2(0.0, 0.0)));
}
(s1760 = (s1761 + float2(0.0, 0.0)));
}
(_grad_return_value_15650 = (s1760 + float2(0.0, 0.0)));
(_grad_has_returned_15649 = (true + false));
(_grad_return_value_inlined_3_15656 = (_grad_return_value_15650 + float2(0.0, 0.0)));
(_noise_return_value_15644 = (lerp(lerp(dot(_grad_return_value_inlined_0_15653, (_f_noise_15646 - float2(0.0, 0.0))), dot(_grad_return_value_inlined_1_15654, (_f_noise_15646 - float2(1.0, 0.0))), _u_noise_15647.x), lerp(dot(_grad_return_value_inlined_2_15655, (_f_noise_15646 - float2(0.0, 1.0))), dot(_grad_return_value_inlined_3_15656, (_f_noise_15646 - float2(1.0, 1.0))), _u_noise_15647.x), _u_noise_15647.y) + 0.0));
(_noise_has_returned_15643 = (true + false));
(_noise_return_value_inlined_4_15657 = (_noise_return_value_15644 + 0.0));
(_f_fbm_15639 += ((_s_fbm_15640 * _noise_return_value_inlined_4_15657) + 0.0));
(_p_fbm_15635 = (mul(transpose(float2x2(1.6, 1.2, -1.2, 1.6)), _p_fbm_15635) + float2(0.0, 0.0)));
(_s_fbm_15640 = ((0.5 * _s_fbm_15640) + 0.0));
}
}
(_fbm_return_value_15637 = _f_fbm_15639);
(_fbm_has_returned_15636 = true);
(_fbm_return_value_inlined_11_15680 = _fbm_return_value_15637);
(_d_blackboard_15679 += (0.1 * _fbm_return_value_inlined_11_15680));
(_p_fbm_15635 = (1.75 * _p_blackboard_15631));
(_fbm_has_returned_15636 = false);
(_f_fbm_15639 = 0.0);
(_s_fbm_15640 = 0.5);
{ for((_i_fbm_15641 = (0 + 0)); (_i_fbm_15641 < 6); (_i_fbm_15641++))
{
(_p_noise_15642 = (_p_fbm_15635 + float2(0.0, 0.0)));
(_noise_has_returned_15643 = (false + false));
(_i_noise_15645 = (ivec2_ctor(floor(_p_noise_15642)) + int2(0, 0)));
(_f_noise_15646 = (frac(_p_noise_15642) + float2(0.0, 0.0)));
(_u_noise_15647 = (((_f_noise_15646 * _f_noise_15646) * (3.0 - (2.0 * _f_noise_15646))) + float2(0.0, 0.0)));
(_z_grad_15648 = ((_i_noise_15645 + int2(0, 0)) + int2(0, 0)));
(_grad_has_returned_15649 = (false + false));
(_n_grad_15651 = (((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)) + 0));
(_n_grad_15651 = (((_n_grad_15651 << 13) ^ _n_grad_15651) + 0));
(_n_grad_15651 = ((((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16) + 0));
(_n_grad_15651 &= (7 + 0));
(_gr_grad_15652 = (((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0) + float2(0.0, 0.0)));
float2 s1762 = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s1762 = (vec2_ctor(0.0, _gr_grad_15652.x) + float2(0.0, 0.0)));
}
else
{
float2 s1763 = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s1763 = (vec2_ctor(_gr_grad_15652.x, 0.0) + float2(0.0, 0.0)));
}
else
{
(s1763 = (_gr_grad_15652 + float2(0.0, 0.0)));
}
(s1762 = (s1763 + float2(0.0, 0.0)));
}
(_grad_return_value_15650 = (s1762 + float2(0.0, 0.0)));
(_grad_has_returned_15649 = (true + false));
(_grad_return_value_inlined_0_15653 = (_grad_return_value_15650 + float2(0.0, 0.0)));
(_z_grad_15648 = ((_i_noise_15645 + int2(1, 0)) + int2(0, 0)));
(_grad_has_returned_15649 = (false + false));
(_n_grad_15651 = (((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)) + 0));
(_n_grad_15651 = (((_n_grad_15651 << 13) ^ _n_grad_15651) + 0));
(_n_grad_15651 = ((((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16) + 0));
(_n_grad_15651 &= (7 + 0));
(_gr_grad_15652 = (((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0) + float2(0.0, 0.0)));
float2 s1764 = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s1764 = (vec2_ctor(0.0, _gr_grad_15652.x) + float2(0.0, 0.0)));
}
else
{
float2 s1765 = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s1765 = (vec2_ctor(_gr_grad_15652.x, 0.0) + float2(0.0, 0.0)));
}
else
{
(s1765 = (_gr_grad_15652 + float2(0.0, 0.0)));
}
(s1764 = (s1765 + float2(0.0, 0.0)));
}
(_grad_return_value_15650 = (s1764 + float2(0.0, 0.0)));
(_grad_has_returned_15649 = (true + false));
(_grad_return_value_inlined_1_15654 = (_grad_return_value_15650 + float2(0.0, 0.0)));
(_z_grad_15648 = ((_i_noise_15645 + int2(0, 1)) + int2(0, 0)));
(_grad_has_returned_15649 = (false + false));
(_n_grad_15651 = (((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)) + 0));
(_n_grad_15651 = (((_n_grad_15651 << 13) ^ _n_grad_15651) + 0));
(_n_grad_15651 = ((((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16) + 0));
(_n_grad_15651 &= (7 + 0));
(_gr_grad_15652 = (((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0) + float2(0.0, 0.0)));
float2 s1766 = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s1766 = (vec2_ctor(0.0, _gr_grad_15652.x) + float2(0.0, 0.0)));
}
else
{
float2 s1767 = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s1767 = (vec2_ctor(_gr_grad_15652.x, 0.0) + float2(0.0, 0.0)));
}
else
{
(s1767 = (_gr_grad_15652 + float2(0.0, 0.0)));
}
(s1766 = (s1767 + float2(0.0, 0.0)));
}
(_grad_return_value_15650 = (s1766 + float2(0.0, 0.0)));
(_grad_has_returned_15649 = (true + false));
(_grad_return_value_inlined_2_15655 = (_grad_return_value_15650 + float2(0.0, 0.0)));
(_z_grad_15648 = ((_i_noise_15645 + int2(1, 1)) + int2(0, 0)));
(_grad_has_returned_15649 = (false + false));
(_n_grad_15651 = (((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)) + 0));
(_n_grad_15651 = (((_n_grad_15651 << 13) ^ _n_grad_15651) + 0));
(_n_grad_15651 = ((((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16) + 0));
(_n_grad_15651 &= (7 + 0));
(_gr_grad_15652 = (((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0) + float2(0.0, 0.0)));
float2 s1768 = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s1768 = (vec2_ctor(0.0, _gr_grad_15652.x) + float2(0.0, 0.0)));
}
else
{
float2 s1769 = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s1769 = (vec2_ctor(_gr_grad_15652.x, 0.0) + float2(0.0, 0.0)));
}
else
{
(s1769 = (_gr_grad_15652 + float2(0.0, 0.0)));
}
(s1768 = (s1769 + float2(0.0, 0.0)));
}
(_grad_return_value_15650 = (s1768 + float2(0.0, 0.0)));
(_grad_has_returned_15649 = (true + false));
(_grad_return_value_inlined_3_15656 = (_grad_return_value_15650 + float2(0.0, 0.0)));
(_noise_return_value_15644 = (lerp(lerp(dot(_grad_return_value_inlined_0_15653, (_f_noise_15646 - float2(0.0, 0.0))), dot(_grad_return_value_inlined_1_15654, (_f_noise_15646 - float2(1.0, 0.0))), _u_noise_15647.x), lerp(dot(_grad_return_value_inlined_2_15655, (_f_noise_15646 - float2(0.0, 1.0))), dot(_grad_return_value_inlined_3_15656, (_f_noise_15646 - float2(1.0, 1.0))), _u_noise_15647.x), _u_noise_15647.y) + 0.0));
(_noise_has_returned_15643 = (true + false));
(_noise_return_value_inlined_4_15657 = (_noise_return_value_15644 + 0.0));
(_f_fbm_15639 += ((_s_fbm_15640 * _noise_return_value_inlined_4_15657) + 0.0));
(_p_fbm_15635 = (mul(transpose(float2x2(1.6, 1.2, -1.2, 1.6)), _p_fbm_15635) + float2(0.0, 0.0)));
(_s_fbm_15640 = ((0.5 * _s_fbm_15640) + 0.0));
}
}
(_fbm_return_value_15637 = _f_fbm_15639);
(_fbm_has_returned_15636 = true);
(_fbm_return_value_inlined_12_15681 = _fbm_return_value_15637);
(_ww_blackboard_15682 = _fbm_return_value_inlined_12_15681);
(_m_blackboard_15665 = max(_m_blackboard_15665, smoothstep(0.050000001, 0.0, _d_blackboard_15679)));
(_m2_blackboard_15666 = max(_m2_blackboard_15666, smoothstep(0.2, -0.2, (_d_blackboard_15679 - abs(_ww_blackboard_15682)))));
}
}
(_col_blackboard_15634 += ((_v_blackboard_15633 * 0.0099999998) * _m_blackboard_15665));
(_col_blackboard_15634 += ((_v_blackboard_15633 * 0.025) * _m2_blackboard_15666));
(_p_fbm_15635 = (_p_blackboard_15631 * 82.0));
(_fbm_has_returned_15636 = false);
(_f_fbm_15639 = 0.0);
(_s_fbm_15640 = 0.5);
{ for((_i_fbm_15641 = 0); (_i_fbm_15641 < 6); (_i_fbm_15641++))
{
(_p_noise_15642 = _p_fbm_15635);
(_noise_has_returned_15643 = false);
(_i_noise_15645 = ivec2_ctor(floor(_p_noise_15642)));
(_f_noise_15646 = frac(_p_noise_15642));
(_u_noise_15647 = ((_f_noise_15646 * _f_noise_15646) * (3.0 - (2.0 * _f_noise_15646))));
(_z_grad_15648 = (_i_noise_15645 + int2(0, 0)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s176a = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s176a = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s176b = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s176b = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s176b = _gr_grad_15652);
}
(s176a = s176b);
}
(_grad_return_value_15650 = s176a);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_0_15653 = _grad_return_value_15650);
(_z_grad_15648 = (_i_noise_15645 + int2(1, 0)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s176c = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s176c = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s176d = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s176d = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s176d = _gr_grad_15652);
}
(s176c = s176d);
}
(_grad_return_value_15650 = s176c);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_1_15654 = _grad_return_value_15650);
(_z_grad_15648 = (_i_noise_15645 + int2(0, 1)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s176e = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s176e = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s176f = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s176f = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s176f = _gr_grad_15652);
}
(s176e = s176f);
}
(_grad_return_value_15650 = s176e);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_2_15655 = _grad_return_value_15650);
(_z_grad_15648 = (_i_noise_15645 + int2(1, 1)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s1770 = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s1770 = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s1771 = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s1771 = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s1771 = _gr_grad_15652);
}
(s1770 = s1771);
}
(_grad_return_value_15650 = s1770);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_3_15656 = _grad_return_value_15650);
(_noise_return_value_15644 = lerp(lerp(dot(_grad_return_value_inlined_0_15653, (_f_noise_15646 - float2(0.0, 0.0))), dot(_grad_return_value_inlined_1_15654, (_f_noise_15646 - float2(1.0, 0.0))), _u_noise_15647.x), lerp(dot(_grad_return_value_inlined_2_15655, (_f_noise_15646 - float2(0.0, 1.0))), dot(_grad_return_value_inlined_3_15656, (_f_noise_15646 - float2(1.0, 1.0))), _u_noise_15647.x), _u_noise_15647.y));
(_noise_has_returned_15643 = true);
(_noise_return_value_inlined_4_15657 = _noise_return_value_15644);
(_f_fbm_15639 += (_s_fbm_15640 * _noise_return_value_inlined_4_15657));
(_p_fbm_15635 = mul(transpose(float2x2(1.6, 1.2, -1.2, 1.6)), _p_fbm_15635));
(_s_fbm_15640 = (0.5 * _s_fbm_15640));
}
}
(_fbm_return_value_15637 = _f_fbm_15639);
(_fbm_has_returned_15636 = true);
(_fbm_return_value_inlined_13_15683 = _fbm_return_value_15637);
(_col_blackboard_15634 += (((_col_blackboard_15634.x * _col_blackboard_15634.x) * 0.75) * smoothstep(-0.2, 0.2, _fbm_return_value_inlined_13_15683)));
(_blackboard_return_value_15630 = _col_blackboard_15634);
(_blackboard_has_returned_15629 = true);
(_blackboard_return_value_inlined_41_15684 = _blackboard_return_value_15630);
(_col_mainImage_15685 = _blackboard_return_value_inlined_41_15684);
(_col_chalk_15686 = _col_mainImage_15685);
(_fragCoord_chalk_15687 = gl_FragCoord.xy);
(_chalk_has_returned_15688 = false);
(_p1_chalk_15690 = vec2_ctor((2.25 + (0.69999999 * sin((1.3 * _iTime)))), 0.0));
(_p1_chalk_15690.y = (1.0 / _p1_chalk_15690.x));
(_p2_chalk_15691 = vec2_ctor((-1.4 + (0.40000001 * sin((1.1 * _iTime)))), 0.0));
(_p2_chalk_15691.y = (1.0 / _p2_chalk_15691.x));
(_p3_chalk_15692 = vec2_ctor((0.34999999 + (0.02 * sin((1.9 * _iTime)))), 0.0));
(_p3_chalk_15692.y = (1.0 / _p3_chalk_15692.x));
(_p_chalk_15693 = (((2.0 * _fragCoord_chalk_15687) - _iResolution.xy) / _iResolution.y));
(_p_chalk_15693 *= 3.0);
(_p_chalk_15693 -= float2(-0.30000001, -0.69999999));
(_gf_chalk_15694 = 0.60000002);
(_p_fbm_15635 = (_p_chalk_15693.yx * 10.0));
(_fbm_has_returned_15636 = false);
(_f_fbm_15639 = 0.0);
(_s_fbm_15640 = 0.5);
{ for((_i_fbm_15641 = 0); (_i_fbm_15641 < 6); (_i_fbm_15641++))
{
(_p_noise_15642 = _p_fbm_15635);
(_noise_has_returned_15643 = false);
(_i_noise_15645 = ivec2_ctor(floor(_p_noise_15642)));
(_f_noise_15646 = frac(_p_noise_15642));
(_u_noise_15647 = ((_f_noise_15646 * _f_noise_15646) * (3.0 - (2.0 * _f_noise_15646))));
(_z_grad_15648 = (_i_noise_15645 + int2(0, 0)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
if ((!_live_tu_has_executed))
{
float3 _color_mainImage_25754 = {0, 0, 0};
int _i_mainImage_25755 = {0};
int _j_mainImage_25756 = {0};
bool _getPixel_has_returned_25760 = {0};
float3 _getPixel_return_value_25761 = {0, 0, 0};
float3 _ang_getPixel_25764 = {0, 0, 0};
float3 _ang_fromEuler_25765 = {0, 0, 0};
bool _fromEuler_has_returned_25766 = {0};
float3x3 _fromEuler_return_value_25767 = {0, 0, 0, 0, 0, 0, 0, 0, 0};
float3x3 _m_fromEuler_25771 = {0, 0, 0, 0, 0, 0, 0, 0, 0};
float3x3 _fromEuler_return_value_inlined_36_25772 = {0, 0, 0, 0, 0, 0, 0, 0, 0};
float3x3 _rot_getPixel_25773 = {0, 0, 0, 0, 0, 0, 0, 0, 0};
float3 _ori_getPixel_25774 = {0, 0, 0};
float3 _dir_getPixel_25775 = {0, 0, 0};
float3 _p_getPixel_25776 = {0, 0, 0};
float3 _dir_spheretracing_25778 = {0, 0, 0};
float3 _p_spheretracing_25779 = {0, 0, 0};
float3 _p_map_25784 = {0, 0, 0};
float3 _p_rock_25787 = {0, 0, 0};
float _rock_return_value_25789 = {0};
float3 _p_sphere_25790 = {0, 0, 0};
bool _sphere_has_returned_25792 = {0};
float _sphere_return_value_inlined_12_25794 = {0};
int _i_rock_25796 = {0};
bool _hash11_has_returned_25799 = {0};
float _hash11_return_value_25800 = {0};
float _hash11_return_value_inlined_13_25801 = {0};
float3 _hash31_return_value_25805 = {0, 0, 0};
float3 _hash31_return_value_inlined_14_25807 = {0, 0, 0};
float3 _v_rock_25808 = {0, 0, 0};
float _sphere_return_value_inlined_15_25809 = {0};
float _a_boolSmoothSub_25810 = {0};
float _a_boolSmoothIntersect_25815 = {0};
float _b_boolSmoothIntersect_25816 = {0};
bool _boolSmoothIntersect_has_returned_25818 = {0};
float _boolSmoothIntersect_return_value_25819 = {0};
float _h_boolSmoothIntersect_25820 = {0};
float _boolSmoothSub_return_value_inlined_16_25822 = {0};
float3 _p_fbm3_25824 = {0, 0, 0};
float _f_fbm3_25826 = {0};
bool _fbm3_has_returned_25827 = {0};
float _fbm3_return_value_25828 = {0};
float3 _p_noise_3_25829 = {0, 0, 0};
float3 _i_noise_3_25832 = {0, 0, 0};
float3 _f_noise_3_25833 = {0, 0, 0};
float3 _u_noise_3_25834 = {0, 0, 0};
float _hash12_return_value_inlined_0_25840 = {0};
float _b_noise_3_25843 = {0};
float _hash12_return_value_inlined_3_25846 = {0};
float _hash12_return_value_inlined_4_25849 = {0};
float _hash12_return_value_inlined_5_25850 = {0};
float _hash12_return_value_inlined_6_25851 = {0};
float _v2_noise_3_25853 = {0};
float _noise_3_return_value_inlined_8_25854 = {0};
float _d_map_25856 = {0};
float3 _gp_plane_25857 = {0, 0, 0};
float4 _p_plane_25858 = {0, 0, 0, 0};
bool _plane_has_returned_25859 = {0};
float _plane_return_value_25860 = {0};
float _a_boolUnion_25862 = {0};
float _b_boolUnion_25863 = {0};
bool _boolUnion_has_returned_25864 = {0};
float _boolUnion_return_value_inlined_20_25866 = {0};
float _map_return_value_inlined_31_25867 = {0};
float3 _n_getNormal_25874 = {0, 0, 0};
bool _map_detailed_has_returned_25876 = {0};
float _rock_return_value_inlined_21_25878 = {0};
float3 _p_fbm3_high_25879 = {0, 0, 0};
bool _fbm3_high_has_returned_25882 = {0};
float _amp_fbm3_high_25885 = {0};
float _frq_fbm3_high_25886 = {0};
int _i_fbm3_high_25887 = {0};
float _n_fbm3_high_25889 = {0};
float _boolUnion_return_value_inlined_24_25893 = {0};
float _map_detailed_return_value_inlined_27_25896 = {0};
float3 _getNormal_return_value_inlined_38_25898 = {0, 0, 0};
float3 _n_getPixel_25899 = {0, 0, 0};
float3 _p_getOcclusion_25900 = {0, 0, 0};
float3 _n_getOcclusion_25901 = {0, 0, 0};
int _i_getOcclusion_25905 = {0};
float _f_getOcclusion_25906 = {0};
float _hao_getOcclusion_25907 = {0};
float _map_return_value_inlined_30_25911 = {0};
float _dc_getOcclusion_25912 = {0};
float3 _light_getPixel_25915 = {0, 0, 0};
float3 _color_getPixel_25916 = {0, 0, 0};
float3 _p_getStoneColor_25917 = {0, 0, 0};
float _c_getStoneColor_25918 = {0};
float3 _l_getStoneColor_25919 = {0, 0, 0};
float3 _n_getStoneColor_25920 = {0, 0, 0};
float3 _e_getStoneColor_25921 = {0, 0, 0};
bool _getStoneColor_has_returned_25922 = {0};
float3 _getStoneColor_return_value_25923 = {0, 0, 0};
float _ic_getStoneColor_25925 = {0};
float3 _base_getStoneColor_25926 = {0, 0, 0};
float3 _color_getStoneColor_25928 = {0, 0, 0};
float _f_getStoneColor_25929 = {0};
float3 _n_diffuse_25930 = {0, 0, 0};
float3 _l_diffuse_25931 = {0, 0, 0};
float _p_diffuse_25932 = {0};
bool _diffuse_has_returned_25933 = {0};
float _diffuse_return_value_25934 = {0};
float3 _l_specular_25937 = {0, 0, 0};
float3 _e_specular_25938 = {0, 0, 0};
bool _specular_has_returned_25940 = {0};
float _specular_return_value_25941 = {0};
float3 _getStoneColor_return_value_inlined_40_25945 = {0, 0, 0};
float3 _getPixel_return_value_inlined_41_25946 = {0, 0, 0};
float3 _c_saturation_25947 = {0, 0, 0};
bool _saturation_has_returned_25949 = {0};
float3 _saturation_return_value_25950 = {0, 0, 0};
float3 _saturation_return_value_inlined_42_25951 = {0, 0, 0};
float _vgn_mainImage_25953 = {0};
(_sdLine_return_value_inlined_29_15723 = (_iTime * 0.30000001));
(_color_mainImage_25754 = float3(0.0, 0.0, 0.0));
{ for((_i_mainImage_25755 = (-1 + 0)); (_i_mainImage_25755 <= 1); (_i_mainImage_25755++))
{
{ for((_j_mainImage_25756 = (-1 + 0)); (_j_mainImage_25756 <= 1); (_j_mainImage_25756++))
{
(_q3_chalk_15721 = ((gl_FragCoord.xy + (vec2_ctor_int_int(_i_mainImage_25755, _j_mainImage_25756) / 3.0)) + float2(0.0, 0.0)));
(_p_fbm_15635 = (_q3_chalk_15721 + float2(0.0, 0.0)));
(_ff_flattened_block_1_blackboard_15663 = (_sdLine_return_value_inlined_29_15723 + 0.0));
(_getPixel_has_returned_25760 = (false + false));
(_fragCoord_chalk_15687 = ((((_p_fbm_15635 / _iResolution.xy) * 2.0) - 1.0) + float2(0.0, 0.0)));
(_w_flattened_block_1_blackboard_15661 = (_fragCoord_chalk_15687 + float2(0.0, 0.0)));
(_w_flattened_block_1_blackboard_15661.x *= ((_iResolution.x / _iResolution.y) + 0.0));
(_ang_getPixel_25764 = (vec3_ctor(0.0, 0.2, _ff_flattened_block_1_blackboard_15663) + float3(0.0, 0.0, 0.0)));
if ((_iMouse.z > 0.0))
{
(_ang_getPixel_25764 = (vec3_ctor(0.0, clamp((2.0 - (_iMouse.y * 0.0099999998)), 0.0, 3.1415), (_iMouse.x * 0.0099999998)) + float3(0.0, 0.0, 0.0)));
}
(_ang_fromEuler_25765 = (_ang_getPixel_25764 + float3(0.0, 0.0, 0.0)));
(_fromEuler_has_returned_25766 = (false + false));
(_intersect_return_value_inlined_38_15748 = (vec2_ctor(sin(_ang_fromEuler_25765.x), cos(_ang_fromEuler_25765.x)) + float2(0.0, 0.0)));
(_grad_return_value_inlined_0_15653 = (vec2_ctor(sin(_ang_fromEuler_25765.y), cos(_ang_fromEuler_25765.y)) + float2(0.0, 0.0)));
(_w_altitude_15715 = (vec2_ctor(sin(_ang_fromEuler_25765.z), cos(_ang_fromEuler_25765.z)) + float2(0.0, 0.0)));
(_m_fromEuler_25771[0] = (vec3_ctor(((_intersect_return_value_inlined_38_15748.y * _w_altitude_15715.y) + ((_intersect_return_value_inlined_38_15748.x * _grad_return_value_inlined_0_15653.x) * _w_altitude_15715.x)), (((_intersect_return_value_inlined_38_15748.y * _grad_return_value_inlined_0_15653.x) * _w_altitude_15715.x) + (_w_altitude_15715.y * _intersect_return_value_inlined_38_15748.x)), ((-_grad_return_value_inlined_0_15653.y) * _w_altitude_15715.x)) + float3(0.0, 0.0, 0.0)));
(_m_fromEuler_25771[1] = (vec3_ctor(((-_grad_return_value_inlined_0_15653.y) * _intersect_return_value_inlined_38_15748.x), (_intersect_return_value_inlined_38_15748.y * _grad_return_value_inlined_0_15653.y), _grad_return_value_inlined_0_15653.x) + float3(0.0, 0.0, 0.0)));
(_m_fromEuler_25771[2] = (vec3_ctor((((_w_altitude_15715.y * _intersect_return_value_inlined_38_15748.x) * _grad_return_value_inlined_0_15653.x) + (_intersect_return_value_inlined_38_15748.y * _w_altitude_15715.x)), ((_intersect_return_value_inlined_38_15748.x * _w_altitude_15715.x) - ((_intersect_return_value_inlined_38_15748.y * _w_altitude_15715.y) * _grad_return_value_inlined_0_15653.x)), (_grad_return_value_inlined_0_15653.y * _w_altitude_15715.y)) + float3(0.0, 0.0, 0.0)));
(_fromEuler_return_value_25767 = (_m_fromEuler_25771 + float3x3(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0)));
(_fromEuler_has_returned_25766 = (true + false));
(_fromEuler_return_value_inlined_36_25772 = (_fromEuler_return_value_25767 + float3x3(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0)));
(_rot_getPixel_25773 = (_fromEuler_return_value_inlined_36_25772 + float3x3(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0)));
(_ori_getPixel_25774 = (float3(0.0, 0.0, 2.8) + float3(0.0, 0.0, 0.0)));
(_dir_getPixel_25775 = (normalize(vec3_ctor(_w_flattened_block_1_blackboard_15661.xy, -2.0)) + float3(0.0, 0.0, 0.0)));
(_ori_getPixel_25774 = (mul(_ori_getPixel_25774, transpose(_rot_getPixel_25773)) + float3(0.0, 0.0, 0.0)));
(_dir_getPixel_25775 = (mul(_dir_getPixel_25775, transpose(_rot_getPixel_25773)) + float3(0.0, 0.0, 0.0)));
(_chalk_return_value_15689 = (_ori_getPixel_25774 + float3(0.0, 0.0, 0.0)));
(_dir_spheretracing_25778 = (_dir_getPixel_25775 + float3(0.0, 0.0, 0.0)));
(_p_spheretracing_25779 = (_p_getPixel_25776 + float3(0.0, 0.0, 0.0)));
(_cro_has_returned_15743 = (false + false));
(_b_cro_15742 = (float2(0.0, 0.0) + float2(0.0, 0.0)));
{ for((_n_grad_15651 = (0 + 0)); (_n_grad_15651 < 32); (_n_grad_15651++))
{
(_p_spheretracing_25779 = ((_chalk_return_value_15689 + (_dir_spheretracing_25778 * _b_cro_15742.x)) + float3(0.0, 0.0, 0.0)));
(_p_map_25784 = (_p_spheretracing_25779 + float3(0.0, 0.0, 0.0)));
(_intersect_has_returned_15739 = (false + false));
(_p_rock_25787 = (_p_map_25784 + float3(0.0, 0.0, 0.0)));
(_grad_has_returned_15649 = (false + false));
(_p_sphere_25790 = (_p_rock_25787 + float3(0.0, 0.0, 0.0)));
(_dy_chalk_15699 = (1.0 + 0.0));
(_sphere_has_returned_25792 = (false + false));
(_fbm_return_value_inlined_8_15659 = ((length(_p_sphere_25790) - _dy_chalk_15699) + 0.0));
(_sphere_has_returned_25792 = (true + false));
(_sphere_return_value_inlined_12_25794 = (_fbm_return_value_inlined_8_15659 + 0.0));
(_cro_return_value_inlined_5_15745 = (_sphere_return_value_inlined_12_25794 + 0.0));
{ for((_i_rock_25796 = (0 + 0)); (_i_rock_25796 < 9); (_i_rock_25796++))
{
(_m_blackboard_15665 = (float_ctor_int(_i_rock_25796) + 0.0));
(_sdLine_return_value_inlined_16_15701 = (_m_blackboard_15665 + 0.0));
(_hash11_has_returned_25799 = (false + false));
(_hash11_return_value_25800 = (frac((sin((_sdLine_return_value_inlined_16_15701 * 727.09998)) * 435.54501)) + 0.0));
(_hash11_has_returned_25799 = (true + false));
(_hash11_return_value_inlined_13_25801 = (_hash11_return_value_25800 + 0.0));
(_cro_return_value_inlined_6_15746 = ((2.5 + _hash11_return_value_inlined_13_25801) + 0.0));
(_fbm_return_value_inlined_14_15695 = (_m_blackboard_15665 + 0.0));
(_altitude_has_returned_15713 = (false + false));
(_col_mainImage_15685 = ((float3(127.231, 491.70001, 718.42297) * _fbm_return_value_inlined_14_15695) + float3(0.0, 0.0, 0.0)));
(_hash31_return_value_25805 = (frac((sin(_col_mainImage_15685) * 435.543)) + float3(0.0, 0.0, 0.0)));
(_altitude_has_returned_15713 = (true + false));
(_hash31_return_value_inlined_14_25807 = (_hash31_return_value_25805 + float3(0.0, 0.0, 0.0)));
(_v_rock_25808 = (normalize(((_hash31_return_value_inlined_14_25807 * 2.0) - 1.0)) + float3(0.0, 0.0, 0.0)));
(_p_sphere_25790 = ((_p_rock_25787 + (_v_rock_25808 * _cro_return_value_inlined_6_15746)) + float3(0.0, 0.0, 0.0)));
(_dy_chalk_15699 = ((_cro_return_value_inlined_6_15746 * 0.80000001) + 0.0));
(_sphere_has_returned_25792 = (false + false));
(_fbm_return_value_inlined_8_15659 = ((length(_p_sphere_25790) - _dy_chalk_15699) + 0.0));
(_sphere_has_returned_25792 = (true + false));
(_sphere_return_value_inlined_15_25809 = (_fbm_return_value_inlined_8_15659 + 0.0));
(_a_boolSmoothSub_25810 = (_cro_return_value_inlined_5_15745 + 0.0));
(_s_fbm_15640 = (_sphere_return_value_inlined_15_25809 + 0.0));
(_fbm_return_value_inlined_39_15750 = (0.029999999 + 0.0));
(_chalk_has_returned_15688 = (false + false));
(_a_boolSmoothIntersect_25815 = (_a_boolSmoothSub_25810 + 0.0));
(_b_boolSmoothIntersect_25816 = ((-_s_fbm_15640) + 0.0));
(_fbm_return_value_inlined_12_15681 = (_fbm_return_value_inlined_39_15750 + 0.0));
(_boolSmoothIntersect_has_returned_25818 = (false + false));
(_h_boolSmoothIntersect_25820 = (clamp((0.5 + ((0.5 * (_b_boolSmoothIntersect_25816 - _a_boolSmoothIntersect_25815)) / _fbm_return_value_inlined_12_15681)), 0.0, 1.0) + 0.0));
(_boolSmoothIntersect_return_value_25819 = ((lerp(_a_boolSmoothIntersect_25815, _b_boolSmoothIntersect_25816, _h_boolSmoothIntersect_25820) + ((_fbm_return_value_inlined_12_15681 * _h_boolSmoothIntersect_25820) * (1.0 - _h_boolSmoothIntersect_25820))) + 0.0));
(_boolSmoothIntersect_has_returned_25818 = (true + false));
(_sdLine_return_value_inlined_17_15702 = (_boolSmoothIntersect_return_value_25819 + 0.0));
(_sdLine_return_value_15674 = (_sdLine_return_value_inlined_17_15702 + 0.0));
(_chalk_has_returned_15688 = (true + false));
(_boolSmoothSub_return_value_inlined_16_25822 = (_sdLine_return_value_15674 + 0.0));
(_cro_return_value_inlined_5_15745 = (_boolSmoothSub_return_value_inlined_16_25822 + 0.0));
}
}
(_rock_return_value_25789 = (_cro_return_value_inlined_5_15745 + 0.0));
(_grad_has_returned_15649 = (true + false));
(_sdLine_return_value_inlined_19_15704 = (_rock_return_value_25789 + 0.0));
(_p_fbm3_25824 = ((_p_map_25784 * 4.0) + float3(0.0, 0.0, 0.0)));
(_fbm_return_value_inlined_24_15709 = (0.40000001 + 0.0));
(_f_fbm3_25826 = (2.96 + 0.0));
(_fbm3_has_returned_25827 = (false + false));
(_p_noise_3_25829 = (_p_fbm3_25824 + float3(0.0, 0.0, 0.0)));
(_blackboard_has_returned_15629 = (false + false));
(_i_noise_3_25832 = (floor(_p_noise_3_25829) + float3(0.0, 0.0, 0.0)));
(_f_noise_3_25833 = (frac(_p_noise_3_25829) + float3(0.0, 0.0, 0.0)));
(_u_noise_3_25834 = (((_f_noise_3_25833 * _f_noise_3_25833) * (3.0 - (2.0 * _f_noise_3_25833))) + float3(0.0, 0.0, 0.0)));
(_p1_chalk_15690 = ((_i_noise_3_25832.xy + (_i_noise_3_25832.z * float2(5.0, 5.0))) + float2(0.0, 0.0)));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(0.0, 0.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_hash12_return_value_inlined_0_25840 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_sdLine_return_value_inlined_21_15706 = (_hash12_return_value_inlined_0_25840 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(1.0, 0.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_h_intersect_15747 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_b_noise_3_25843 = (_h_intersect_15747 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(0.0, 1.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_sdLine_return_value_inlined_35_15732 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_sdLine_return_value_inlined_28_15722 = (_sdLine_return_value_inlined_35_15732 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(1.0, 1.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_hash12_return_value_inlined_3_25846 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_cro_return_value_15744 = (_hash12_return_value_inlined_3_25846 + 0.0));
(_d_blackboard_15679 = (lerp(lerp(_sdLine_return_value_inlined_21_15706, _b_noise_3_25843, _u_noise_3_25834.x), lerp(_sdLine_return_value_inlined_28_15722, _cro_return_value_15744, _u_noise_3_25834.x), _u_noise_3_25834.y) + 0.0));
(_p1_chalk_15690 += (float2(5.0, 5.0) + float2(0.0, 0.0)));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(0.0, 0.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_hash12_return_value_inlined_4_25849 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_sdLine_return_value_inlined_21_15706 = (_hash12_return_value_inlined_4_25849 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(1.0, 0.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_hash12_return_value_inlined_5_25850 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_b_noise_3_25843 = (_hash12_return_value_inlined_5_25850 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(0.0, 1.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_hash12_return_value_inlined_6_25851 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_sdLine_return_value_inlined_28_15722 = (_hash12_return_value_inlined_6_25851 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(1.0, 1.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_fbm_return_value_inlined_15_15700 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_cro_return_value_15744 = (_fbm_return_value_inlined_15_15700 + 0.0));
(_v2_noise_3_25853 = (lerp(lerp(_sdLine_return_value_inlined_21_15706, _b_noise_3_25843, _u_noise_3_25834.x), lerp(_sdLine_return_value_inlined_28_15722, _cro_return_value_15744, _u_noise_3_25834.x), _u_noise_3_25834.y) + 0.0));
(_sdLine_return_value_inlined_18_15703 = (max(lerp(_d_blackboard_15679, _v2_noise_3_25853, _u_noise_3_25834.z), 0.0) + 0.0));
(_blackboard_has_returned_15629 = (true + false));
(_noise_3_return_value_inlined_8_25854 = (_sdLine_return_value_inlined_18_15703 + 0.0));
(_fbm3_return_value_25828 = (_noise_3_return_value_inlined_8_25854 + 0.0));
(_fbm3_has_returned_25827 = (true + false));
(_sdLine_return_value_inlined_10_15678 = (_fbm3_return_value_25828 + 0.0));
(_d_map_25856 = ((_sdLine_return_value_inlined_19_15704 + (_sdLine_return_value_inlined_10_15678 * 0.1)) + 0.0));
(_gp_plane_25857 = (_p_map_25784 + float3(0.0, 0.0, 0.0)));
(_p_plane_25858 = (float4(0.0, 1.0, 0.0, 1.0) + float4(0.0, 0.0, 0.0, 0.0)));
(_plane_has_returned_25859 = (false + false));
(_plane_return_value_25860 = (dot(_p_plane_25858.xyz, (_gp_plane_25857 + (_p_plane_25858.xyz * _p_plane_25858.w))) + 0.0));
(_plane_has_returned_25859 = (true + false));
(_h_sdLine_15677 = (_plane_return_value_25860 + 0.0));
(_a_boolUnion_25862 = (_d_map_25856 + 0.0));
(_b_boolUnion_25863 = (_h_sdLine_15677 + 0.0));
(_boolUnion_has_returned_25864 = (false + false));
(_fbm_return_value_inlined_40_15751 = (min(_a_boolUnion_25862, _b_boolUnion_25863) + 0.0));
(_boolUnion_has_returned_25864 = (true + false));
(_boolUnion_return_value_inlined_20_25866 = (_fbm_return_value_inlined_40_15751 + 0.0));
(_d_map_25856 = (_boolUnion_return_value_inlined_20_25866 + 0.0));
(_x_chalk_15697 = (_d_map_25856 + 0.0));
(_intersect_has_returned_15739 = (true + false));
(_map_return_value_inlined_31_25867 = (_x_chalk_15697 + 0.0));
(_b_cro_15742.y = (_map_return_value_inlined_31_25867 + 0.0));
if ((_b_cro_15742.y < 0.1))
{
break;
}
(_b_cro_15742.x += (((_b_cro_15742.y - 0.1) * 0.89999998) + 0.0));
}
}
(_p3_chalk_15692 = (_b_cro_15742 + float2(0.0, 0.0)));
(_cro_has_returned_15743 = (true + false));
(_p_getPixel_25776 = (_p_spheretracing_25779 + float3(0.0, 0.0, 0.0)));
(_ba_sdLine_15676 = (_p3_chalk_15692 + float2(0.0, 0.0)));
(_c_altitude_15710 = (_ba_sdLine_15676 + float2(0.0, 0.0)));
(_chalk_return_value_inlined_42_15752 = (_p_getPixel_25776 + float3(0.0, 0.0, 0.0)));
(_m2_blackboard_15666 = (_c_altitude_15710.y + 0.0));
(_noise_has_returned_15643 = (false + false));
(_blackboard_return_value_15630 = (vec3_ctor((_chalk_return_value_inlined_42_15752.x + 0.001), _chalk_return_value_inlined_42_15752.y, _chalk_return_value_inlined_42_15752.z) + float3(0.0, 0.0, 0.0)));
(_map_detailed_has_returned_25876 = (false + false));
(_p_rock_25787 = (_blackboard_return_value_15630 + float3(0.0, 0.0, 0.0)));
(_grad_has_returned_15649 = (false + false));
(_p_sphere_25790 = (_p_rock_25787 + float3(0.0, 0.0, 0.0)));
(_dy_chalk_15699 = (1.0 + 0.0));
(_sphere_has_returned_25792 = (false + false));
(_fbm_return_value_inlined_8_15659 = ((length(_p_sphere_25790) - _dy_chalk_15699) + 0.0));
(_sphere_has_returned_25792 = (true + false));
(_sphere_return_value_inlined_12_25794 = (_fbm_return_value_inlined_8_15659 + 0.0));
(_cro_return_value_inlined_5_15745 = (_sphere_return_value_inlined_12_25794 + 0.0));
{ for((_i_rock_25796 = (0 + 0)); (_i_rock_25796 < 9); (_i_rock_25796++))
{
(_m_blackboard_15665 = (float_ctor_int(_i_rock_25796) + 0.0));
(_sdLine_return_value_inlined_16_15701 = (_m_blackboard_15665 + 0.0));
(_hash11_has_returned_25799 = (false + false));
(_hash11_return_value_25800 = (frac((sin((_sdLine_return_value_inlined_16_15701 * 727.09998)) * 435.54501)) + 0.0));
(_hash11_has_returned_25799 = (true + false));
(_hash11_return_value_inlined_13_25801 = (_hash11_return_value_25800 + 0.0));
(_cro_return_value_inlined_6_15746 = ((2.5 + _hash11_return_value_inlined_13_25801) + 0.0));
(_fbm_return_value_inlined_14_15695 = (_m_blackboard_15665 + 0.0));
(_altitude_has_returned_15713 = (false + false));
(_col_mainImage_15685 = ((float3(127.231, 491.70001, 718.42297) * _fbm_return_value_inlined_14_15695) + float3(0.0, 0.0, 0.0)));
(_hash31_return_value_25805 = (frac((sin(_col_mainImage_15685) * 435.543)) + float3(0.0, 0.0, 0.0)));
(_altitude_has_returned_15713 = (true + false));
(_hash31_return_value_inlined_14_25807 = (_hash31_return_value_25805 + float3(0.0, 0.0, 0.0)));
(_v_rock_25808 = (normalize(((_hash31_return_value_inlined_14_25807 * 2.0) - 1.0)) + float3(0.0, 0.0, 0.0)));
(_p_sphere_25790 = ((_p_rock_25787 + (_v_rock_25808 * _cro_return_value_inlined_6_15746)) + float3(0.0, 0.0, 0.0)));
(_dy_chalk_15699 = ((_cro_return_value_inlined_6_15746 * 0.80000001) + 0.0));
(_sphere_has_returned_25792 = (false + false));
(_fbm_return_value_inlined_8_15659 = ((length(_p_sphere_25790) - _dy_chalk_15699) + 0.0));
(_sphere_has_returned_25792 = (true + false));
(_sphere_return_value_inlined_15_25809 = (_fbm_return_value_inlined_8_15659 + 0.0));
(_a_boolSmoothSub_25810 = (_cro_return_value_inlined_5_15745 + 0.0));
(_s_fbm_15640 = (_sphere_return_value_inlined_15_25809 + 0.0));
(_fbm_return_value_inlined_39_15750 = (0.029999999 + 0.0));
(_chalk_has_returned_15688 = (false + false));
(_a_boolSmoothIntersect_25815 = (_a_boolSmoothSub_25810 + 0.0));
(_b_boolSmoothIntersect_25816 = ((-_s_fbm_15640) + 0.0));
(_fbm_return_value_inlined_12_15681 = (_fbm_return_value_inlined_39_15750 + 0.0));
(_boolSmoothIntersect_has_returned_25818 = (false + false));
(_h_boolSmoothIntersect_25820 = (clamp((0.5 + ((0.5 * (_b_boolSmoothIntersect_25816 - _a_boolSmoothIntersect_25815)) / _fbm_return_value_inlined_12_15681)), 0.0, 1.0) + 0.0));
(_boolSmoothIntersect_return_value_25819 = ((lerp(_a_boolSmoothIntersect_25815, _b_boolSmoothIntersect_25816, _h_boolSmoothIntersect_25820) + ((_fbm_return_value_inlined_12_15681 * _h_boolSmoothIntersect_25820) * (1.0 - _h_boolSmoothIntersect_25820))) + 0.0));
(_boolSmoothIntersect_has_returned_25818 = (true + false));
(_sdLine_return_value_inlined_17_15702 = (_boolSmoothIntersect_return_value_25819 + 0.0));
(_sdLine_return_value_15674 = (_sdLine_return_value_inlined_17_15702 + 0.0));
(_chalk_has_returned_15688 = (true + false));
(_boolSmoothSub_return_value_inlined_16_25822 = (_sdLine_return_value_15674 + 0.0));
(_cro_return_value_inlined_5_15745 = (_boolSmoothSub_return_value_inlined_16_25822 + 0.0));
}
}
(_rock_return_value_25789 = (_cro_return_value_inlined_5_15745 + 0.0));
(_grad_has_returned_15649 = (true + false));
(_rock_return_value_inlined_21_25878 = (_rock_return_value_25789 + 0.0));
(_p_fbm3_high_25879 = ((_blackboard_return_value_15630 * 4.0) + float3(0.0, 0.0, 0.0)));
(_y_chalk_15698 = (0.40000001 + 0.0));
(_sdLine_return_value_inlined_31_15728 = (2.96 + 0.0));
(_fbm3_high_has_returned_25882 = (false + false));
(_fbm_return_value_inlined_9_15662 = (0.0 + 0.0));
(_amp_fbm3_high_25885 = (1.0 + 0.0));
(_frq_fbm3_high_25886 = (1.0 + 0.0));
{ for((_i_fbm3_high_25887 = (0 + 0)); (_i_fbm3_high_25887 < 5); (_i_fbm3_high_25887++))
{
(_p_noise_3_25829 = ((_p_fbm3_high_25879 * _frq_fbm3_high_25886) + float3(0.0, 0.0, 0.0)));
(_blackboard_has_returned_15629 = (false + false));
(_i_noise_3_25832 = (floor(_p_noise_3_25829) + float3(0.0, 0.0, 0.0)));
(_f_noise_3_25833 = (frac(_p_noise_3_25829) + float3(0.0, 0.0, 0.0)));
(_u_noise_3_25834 = (((_f_noise_3_25833 * _f_noise_3_25833) * (3.0 - (2.0 * _f_noise_3_25833))) + float3(0.0, 0.0, 0.0)));
(_p1_chalk_15690 = ((_i_noise_3_25832.xy + (_i_noise_3_25832.z * float2(5.0, 5.0))) + float2(0.0, 0.0)));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(0.0, 0.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_hash12_return_value_inlined_0_25840 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_sdLine_return_value_inlined_21_15706 = (_hash12_return_value_inlined_0_25840 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(1.0, 0.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_h_intersect_15747 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_b_noise_3_25843 = (_h_intersect_15747 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(0.0, 1.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_sdLine_return_value_inlined_35_15732 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_sdLine_return_value_inlined_28_15722 = (_sdLine_return_value_inlined_35_15732 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(1.0, 1.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_hash12_return_value_inlined_3_25846 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_cro_return_value_15744 = (_hash12_return_value_inlined_3_25846 + 0.0));
(_d_blackboard_15679 = (lerp(lerp(_sdLine_return_value_inlined_21_15706, _b_noise_3_25843, _u_noise_3_25834.x), lerp(_sdLine_return_value_inlined_28_15722, _cro_return_value_15744, _u_noise_3_25834.x), _u_noise_3_25834.y) + 0.0));
(_p1_chalk_15690 += (float2(5.0, 5.0) + float2(0.0, 0.0)));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(0.0, 0.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_hash12_return_value_inlined_4_25849 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_sdLine_return_value_inlined_21_15706 = (_hash12_return_value_inlined_4_25849 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(1.0, 0.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_hash12_return_value_inlined_5_25850 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_b_noise_3_25843 = (_hash12_return_value_inlined_5_25850 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(0.0, 1.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_hash12_return_value_inlined_6_25851 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_sdLine_return_value_inlined_28_15722 = (_hash12_return_value_inlined_6_25851 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(1.0, 1.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_fbm_return_value_inlined_15_15700 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_cro_return_value_15744 = (_fbm_return_value_inlined_15_15700 + 0.0));
(_v2_noise_3_25853 = (lerp(lerp(_sdLine_return_value_inlined_21_15706, _b_noise_3_25843, _u_noise_3_25834.x), lerp(_sdLine_return_value_inlined_28_15722, _cro_return_value_15744, _u_noise_3_25834.x), _u_noise_3_25834.y) + 0.0));
(_sdLine_return_value_inlined_18_15703 = (max(lerp(_d_blackboard_15679, _v2_noise_3_25853, _u_noise_3_25834.z), 0.0) + 0.0));
(_blackboard_has_returned_15629 = (true + false));
(_fbm_return_value_inlined_13_15683 = (_sdLine_return_value_inlined_18_15703 + 0.0));
float s17aa = max(_fbm_return_value_inlined_13_15683, 9.9999997e-10);
(_n_fbm3_high_25889 = ((s17aa * s17aa) + 0.0));
(_fbm_return_value_inlined_9_15662 += ((_n_fbm3_high_25889 * _amp_fbm3_high_25885) + 0.0));
(_frq_fbm3_high_25886 *= (_sdLine_return_value_inlined_31_15728 + 0.0));
(_amp_fbm3_high_25885 *= ((_y_chalk_15698 * pow(max(_n_fbm3_high_25889, 9.9999997e-10), 0.2)) + 0.0));
}
}
(_f_fbm_15639 = (_fbm_return_value_inlined_9_15662 + 0.0));
(_fbm3_high_has_returned_25882 = (true + false));
(_fbm_return_value_inlined_37_15734 = (_f_fbm_15639 + 0.0));
(_sdLine_return_value_inlined_33_15730 = ((_rock_return_value_inlined_21_25878 + (_fbm_return_value_inlined_37_15734 * 0.1)) + 0.0));
(_gp_plane_25857 = (_blackboard_return_value_15630 + float3(0.0, 0.0, 0.0)));
(_p_plane_25858 = (float4(0.0, 1.0, 0.0, 1.0) + float4(0.0, 0.0, 0.0, 0.0)));
(_plane_has_returned_25859 = (false + false));
(_plane_return_value_25860 = (dot(_p_plane_25858.xyz, (_gp_plane_25857 + (_p_plane_25858.xyz * _p_plane_25858.w))) + 0.0));
(_plane_has_returned_25859 = (true + false));
(_ww_blackboard_15682 = (_plane_return_value_25860 + 0.0));
(_a_boolUnion_25862 = (_sdLine_return_value_inlined_33_15730 + 0.0));
(_b_boolUnion_25863 = (_ww_blackboard_15682 + 0.0));
(_boolUnion_has_returned_25864 = (false + false));
(_fbm_return_value_inlined_40_15751 = (min(_a_boolUnion_25862, _b_boolUnion_25863) + 0.0));
(_boolUnion_has_returned_25864 = (true + false));
(_boolUnion_return_value_inlined_24_25893 = (_fbm_return_value_inlined_40_15751 + 0.0));
(_sdLine_return_value_inlined_33_15730 = (_boolUnion_return_value_inlined_24_25893 + 0.0));
(_sdLine_return_value_inlined_36_15733 = (_sdLine_return_value_inlined_33_15730 + 0.0));
(_map_detailed_has_returned_25876 = (true + false));
(_d_chalk_15696 = (_sdLine_return_value_inlined_36_15733 + 0.0));
(_n_getNormal_25874.x = (_d_chalk_15696 + 0.0));
(_blackboard_return_value_15630 = (vec3_ctor(_chalk_return_value_inlined_42_15752.x, (_chalk_return_value_inlined_42_15752.y + 0.001), _chalk_return_value_inlined_42_15752.z) + float3(0.0, 0.0, 0.0)));
(_map_detailed_has_returned_25876 = (false + false));
(_p_rock_25787 = (_blackboard_return_value_15630 + float3(0.0, 0.0, 0.0)));
(_grad_has_returned_15649 = (false + false));
(_p_sphere_25790 = (_p_rock_25787 + float3(0.0, 0.0, 0.0)));
(_dy_chalk_15699 = (1.0 + 0.0));
(_sphere_has_returned_25792 = (false + false));
(_fbm_return_value_inlined_8_15659 = ((length(_p_sphere_25790) - _dy_chalk_15699) + 0.0));
(_sphere_has_returned_25792 = (true + false));
(_sphere_return_value_inlined_12_25794 = (_fbm_return_value_inlined_8_15659 + 0.0));
(_cro_return_value_inlined_5_15745 = (_sphere_return_value_inlined_12_25794 + 0.0));
{ for((_i_rock_25796 = (0 + 0)); (_i_rock_25796 < 9); (_i_rock_25796++))
{
(_m_blackboard_15665 = (float_ctor_int(_i_rock_25796) + 0.0));
(_sdLine_return_value_inlined_16_15701 = (_m_blackboard_15665 + 0.0));
(_hash11_has_returned_25799 = (false + false));
(_hash11_return_value_25800 = (frac((sin((_sdLine_return_value_inlined_16_15701 * 727.09998)) * 435.54501)) + 0.0));
(_hash11_has_returned_25799 = (true + false));
(_hash11_return_value_inlined_13_25801 = (_hash11_return_value_25800 + 0.0));
(_cro_return_value_inlined_6_15746 = ((2.5 + _hash11_return_value_inlined_13_25801) + 0.0));
(_fbm_return_value_inlined_14_15695 = (_m_blackboard_15665 + 0.0));
(_altitude_has_returned_15713 = (false + false));
(_col_mainImage_15685 = ((float3(127.231, 491.70001, 718.42297) * _fbm_return_value_inlined_14_15695) + float3(0.0, 0.0, 0.0)));
(_hash31_return_value_25805 = (frac((sin(_col_mainImage_15685) * 435.543)) + float3(0.0, 0.0, 0.0)));
(_altitude_has_returned_15713 = (true + false));
(_hash31_return_value_inlined_14_25807 = (_hash31_return_value_25805 + float3(0.0, 0.0, 0.0)));
(_v_rock_25808 = (normalize(((_hash31_return_value_inlined_14_25807 * 2.0) - 1.0)) + float3(0.0, 0.0, 0.0)));
(_p_sphere_25790 = ((_p_rock_25787 + (_v_rock_25808 * _cro_return_value_inlined_6_15746)) + float3(0.0, 0.0, 0.0)));
(_dy_chalk_15699 = ((_cro_return_value_inlined_6_15746 * 0.80000001) + 0.0));
(_sphere_has_returned_25792 = (false + false));
(_fbm_return_value_inlined_8_15659 = ((length(_p_sphere_25790) - _dy_chalk_15699) + 0.0));
(_sphere_has_returned_25792 = (true + false));
(_sphere_return_value_inlined_15_25809 = (_fbm_return_value_inlined_8_15659 + 0.0));
(_a_boolSmoothSub_25810 = (_cro_return_value_inlined_5_15745 + 0.0));
(_s_fbm_15640 = (_sphere_return_value_inlined_15_25809 + 0.0));
(_fbm_return_value_inlined_39_15750 = (0.029999999 + 0.0));
(_chalk_has_returned_15688 = (false + false));
(_a_boolSmoothIntersect_25815 = (_a_boolSmoothSub_25810 + 0.0));
(_b_boolSmoothIntersect_25816 = ((-_s_fbm_15640) + 0.0));
(_fbm_return_value_inlined_12_15681 = (_fbm_return_value_inlined_39_15750 + 0.0));
(_boolSmoothIntersect_has_returned_25818 = (false + false));
(_h_boolSmoothIntersect_25820 = (clamp((0.5 + ((0.5 * (_b_boolSmoothIntersect_25816 - _a_boolSmoothIntersect_25815)) / _fbm_return_value_inlined_12_15681)), 0.0, 1.0) + 0.0));
(_boolSmoothIntersect_return_value_25819 = ((lerp(_a_boolSmoothIntersect_25815, _b_boolSmoothIntersect_25816, _h_boolSmoothIntersect_25820) + ((_fbm_return_value_inlined_12_15681 * _h_boolSmoothIntersect_25820) * (1.0 - _h_boolSmoothIntersect_25820))) + 0.0));
(_boolSmoothIntersect_has_returned_25818 = (true + false));
(_sdLine_return_value_inlined_17_15702 = (_boolSmoothIntersect_return_value_25819 + 0.0));
(_sdLine_return_value_15674 = (_sdLine_return_value_inlined_17_15702 + 0.0));
(_chalk_has_returned_15688 = (true + false));
(_boolSmoothSub_return_value_inlined_16_25822 = (_sdLine_return_value_15674 + 0.0));
(_cro_return_value_inlined_5_15745 = (_boolSmoothSub_return_value_inlined_16_25822 + 0.0));
}
}
(_rock_return_value_25789 = (_cro_return_value_inlined_5_15745 + 0.0));
(_grad_has_returned_15649 = (true + false));
(_rock_return_value_inlined_21_25878 = (_rock_return_value_25789 + 0.0));
(_p_fbm3_high_25879 = ((_blackboard_return_value_15630 * 4.0) + float3(0.0, 0.0, 0.0)));
(_y_chalk_15698 = (0.40000001 + 0.0));
(_sdLine_return_value_inlined_31_15728 = (2.96 + 0.0));
(_fbm3_high_has_returned_25882 = (false + false));
(_fbm_return_value_inlined_9_15662 = (0.0 + 0.0));
(_amp_fbm3_high_25885 = (1.0 + 0.0));
(_frq_fbm3_high_25886 = (1.0 + 0.0));
{ for((_i_fbm3_high_25887 = (0 + 0)); (_i_fbm3_high_25887 < 5); (_i_fbm3_high_25887++))
{
(_p_noise_3_25829 = ((_p_fbm3_high_25879 * _frq_fbm3_high_25886) + float3(0.0, 0.0, 0.0)));
(_blackboard_has_returned_15629 = (false + false));
(_i_noise_3_25832 = (floor(_p_noise_3_25829) + float3(0.0, 0.0, 0.0)));
(_f_noise_3_25833 = (frac(_p_noise_3_25829) + float3(0.0, 0.0, 0.0)));
(_u_noise_3_25834 = (((_f_noise_3_25833 * _f_noise_3_25833) * (3.0 - (2.0 * _f_noise_3_25833))) + float3(0.0, 0.0, 0.0)));
(_p1_chalk_15690 = ((_i_noise_3_25832.xy + (_i_noise_3_25832.z * float2(5.0, 5.0))) + float2(0.0, 0.0)));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(0.0, 0.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_hash12_return_value_inlined_0_25840 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_sdLine_return_value_inlined_21_15706 = (_hash12_return_value_inlined_0_25840 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(1.0, 0.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_h_intersect_15747 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_b_noise_3_25843 = (_h_intersect_15747 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(0.0, 1.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_sdLine_return_value_inlined_35_15732 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_sdLine_return_value_inlined_28_15722 = (_sdLine_return_value_inlined_35_15732 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(1.0, 1.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_hash12_return_value_inlined_3_25846 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_cro_return_value_15744 = (_hash12_return_value_inlined_3_25846 + 0.0));
(_d_blackboard_15679 = (lerp(lerp(_sdLine_return_value_inlined_21_15706, _b_noise_3_25843, _u_noise_3_25834.x), lerp(_sdLine_return_value_inlined_28_15722, _cro_return_value_15744, _u_noise_3_25834.x), _u_noise_3_25834.y) + 0.0));
(_p1_chalk_15690 += (float2(5.0, 5.0) + float2(0.0, 0.0)));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(0.0, 0.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_hash12_return_value_inlined_4_25849 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_sdLine_return_value_inlined_21_15706 = (_hash12_return_value_inlined_4_25849 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(1.0, 0.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_hash12_return_value_inlined_5_25850 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_b_noise_3_25843 = (_hash12_return_value_inlined_5_25850 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(0.0, 1.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_hash12_return_value_inlined_6_25851 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_sdLine_return_value_inlined_28_15722 = (_hash12_return_value_inlined_6_25851 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(1.0, 1.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_fbm_return_value_inlined_15_15700 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_cro_return_value_15744 = (_fbm_return_value_inlined_15_15700 + 0.0));
(_v2_noise_3_25853 = (lerp(lerp(_sdLine_return_value_inlined_21_15706, _b_noise_3_25843, _u_noise_3_25834.x), lerp(_sdLine_return_value_inlined_28_15722, _cro_return_value_15744, _u_noise_3_25834.x), _u_noise_3_25834.y) + 0.0));
(_sdLine_return_value_inlined_18_15703 = (max(lerp(_d_blackboard_15679, _v2_noise_3_25853, _u_noise_3_25834.z), 0.0) + 0.0));
(_blackboard_has_returned_15629 = (true + false));
(_fbm_return_value_inlined_13_15683 = (_sdLine_return_value_inlined_18_15703 + 0.0));
float s17ab = max(_fbm_return_value_inlined_13_15683, 9.9999997e-10);
(_n_fbm3_high_25889 = ((s17ab * s17ab) + 0.0));
(_fbm_return_value_inlined_9_15662 += ((_n_fbm3_high_25889 * _amp_fbm3_high_25885) + 0.0));
(_frq_fbm3_high_25886 *= (_sdLine_return_value_inlined_31_15728 + 0.0));
(_amp_fbm3_high_25885 *= ((_y_chalk_15698 * pow(max(_n_fbm3_high_25889, 9.9999997e-10), 0.2)) + 0.0));
}
}
(_f_fbm_15639 = (_fbm_return_value_inlined_9_15662 + 0.0));
(_fbm3_high_has_returned_25882 = (true + false));
(_fbm_return_value_inlined_37_15734 = (_f_fbm_15639 + 0.0));
(_sdLine_return_value_inlined_33_15730 = ((_rock_return_value_inlined_21_25878 + (_fbm_return_value_inlined_37_15734 * 0.1)) + 0.0));
(_gp_plane_25857 = (_blackboard_return_value_15630 + float3(0.0, 0.0, 0.0)));
(_p_plane_25858 = (float4(0.0, 1.0, 0.0, 1.0) + float4(0.0, 0.0, 0.0, 0.0)));
(_plane_has_returned_25859 = (false + false));
(_plane_return_value_25860 = (dot(_p_plane_25858.xyz, (_gp_plane_25857 + (_p_plane_25858.xyz * _p_plane_25858.w))) + 0.0));
(_plane_has_returned_25859 = (true + false));
(_ww_blackboard_15682 = (_plane_return_value_25860 + 0.0));
(_a_boolUnion_25862 = (_sdLine_return_value_inlined_33_15730 + 0.0));
(_b_boolUnion_25863 = (_ww_blackboard_15682 + 0.0));
(_boolUnion_has_returned_25864 = (false + false));
(_fbm_return_value_inlined_40_15751 = (min(_a_boolUnion_25862, _b_boolUnion_25863) + 0.0));
(_boolUnion_has_returned_25864 = (true + false));
(_boolUnion_return_value_inlined_24_25893 = (_fbm_return_value_inlined_40_15751 + 0.0));
(_sdLine_return_value_inlined_33_15730 = (_boolUnion_return_value_inlined_24_25893 + 0.0));
(_sdLine_return_value_inlined_36_15733 = (_sdLine_return_value_inlined_33_15730 + 0.0));
(_map_detailed_has_returned_25876 = (true + false));
(_noise_return_value_15644 = (_sdLine_return_value_inlined_36_15733 + 0.0));
(_n_getNormal_25874.y = (_noise_return_value_15644 + 0.0));
(_blackboard_return_value_15630 = (vec3_ctor(_chalk_return_value_inlined_42_15752.x, _chalk_return_value_inlined_42_15752.y, (_chalk_return_value_inlined_42_15752.z + 0.001)) + float3(0.0, 0.0, 0.0)));
(_map_detailed_has_returned_25876 = (false + false));
(_p_rock_25787 = (_blackboard_return_value_15630 + float3(0.0, 0.0, 0.0)));
(_grad_has_returned_15649 = (false + false));
(_p_sphere_25790 = (_p_rock_25787 + float3(0.0, 0.0, 0.0)));
(_dy_chalk_15699 = (1.0 + 0.0));
(_sphere_has_returned_25792 = (false + false));
(_fbm_return_value_inlined_8_15659 = ((length(_p_sphere_25790) - _dy_chalk_15699) + 0.0));
(_sphere_has_returned_25792 = (true + false));
(_sphere_return_value_inlined_12_25794 = (_fbm_return_value_inlined_8_15659 + 0.0));
(_cro_return_value_inlined_5_15745 = (_sphere_return_value_inlined_12_25794 + 0.0));
{ for((_i_rock_25796 = (0 + 0)); (_i_rock_25796 < 9); (_i_rock_25796++))
{
(_m_blackboard_15665 = (float_ctor_int(_i_rock_25796) + 0.0));
(_sdLine_return_value_inlined_16_15701 = (_m_blackboard_15665 + 0.0));
(_hash11_has_returned_25799 = (false + false));
(_hash11_return_value_25800 = (frac((sin((_sdLine_return_value_inlined_16_15701 * 727.09998)) * 435.54501)) + 0.0));
(_hash11_has_returned_25799 = (true + false));
(_hash11_return_value_inlined_13_25801 = (_hash11_return_value_25800 + 0.0));
(_cro_return_value_inlined_6_15746 = ((2.5 + _hash11_return_value_inlined_13_25801) + 0.0));
(_fbm_return_value_inlined_14_15695 = (_m_blackboard_15665 + 0.0));
(_altitude_has_returned_15713 = (false + false));
(_col_mainImage_15685 = ((float3(127.231, 491.70001, 718.42297) * _fbm_return_value_inlined_14_15695) + float3(0.0, 0.0, 0.0)));
(_hash31_return_value_25805 = (frac((sin(_col_mainImage_15685) * 435.543)) + float3(0.0, 0.0, 0.0)));
(_altitude_has_returned_15713 = (true + false));
(_hash31_return_value_inlined_14_25807 = (_hash31_return_value_25805 + float3(0.0, 0.0, 0.0)));
(_v_rock_25808 = (normalize(((_hash31_return_value_inlined_14_25807 * 2.0) - 1.0)) + float3(0.0, 0.0, 0.0)));
(_p_sphere_25790 = ((_p_rock_25787 + (_v_rock_25808 * _cro_return_value_inlined_6_15746)) + float3(0.0, 0.0, 0.0)));
(_dy_chalk_15699 = ((_cro_return_value_inlined_6_15746 * 0.80000001) + 0.0));
(_sphere_has_returned_25792 = (false + false));
(_fbm_return_value_inlined_8_15659 = ((length(_p_sphere_25790) - _dy_chalk_15699) + 0.0));
(_sphere_has_returned_25792 = (true + false));
(_sphere_return_value_inlined_15_25809 = (_fbm_return_value_inlined_8_15659 + 0.0));
(_a_boolSmoothSub_25810 = (_cro_return_value_inlined_5_15745 + 0.0));
(_s_fbm_15640 = (_sphere_return_value_inlined_15_25809 + 0.0));
(_fbm_return_value_inlined_39_15750 = (0.029999999 + 0.0));
(_chalk_has_returned_15688 = (false + false));
(_a_boolSmoothIntersect_25815 = (_a_boolSmoothSub_25810 + 0.0));
(_b_boolSmoothIntersect_25816 = ((-_s_fbm_15640) + 0.0));
(_fbm_return_value_inlined_12_15681 = (_fbm_return_value_inlined_39_15750 + 0.0));
(_boolSmoothIntersect_has_returned_25818 = (false + false));
(_h_boolSmoothIntersect_25820 = (clamp((0.5 + ((0.5 * (_b_boolSmoothIntersect_25816 - _a_boolSmoothIntersect_25815)) / _fbm_return_value_inlined_12_15681)), 0.0, 1.0) + 0.0));
(_boolSmoothIntersect_return_value_25819 = ((lerp(_a_boolSmoothIntersect_25815, _b_boolSmoothIntersect_25816, _h_boolSmoothIntersect_25820) + ((_fbm_return_value_inlined_12_15681 * _h_boolSmoothIntersect_25820) * (1.0 - _h_boolSmoothIntersect_25820))) + 0.0));
(_boolSmoothIntersect_has_returned_25818 = (true + false));
(_sdLine_return_value_inlined_17_15702 = (_boolSmoothIntersect_return_value_25819 + 0.0));
(_sdLine_return_value_15674 = (_sdLine_return_value_inlined_17_15702 + 0.0));
(_chalk_has_returned_15688 = (true + false));
(_boolSmoothSub_return_value_inlined_16_25822 = (_sdLine_return_value_15674 + 0.0));
(_cro_return_value_inlined_5_15745 = (_boolSmoothSub_return_value_inlined_16_25822 + 0.0));
}
}
(_rock_return_value_25789 = (_cro_return_value_inlined_5_15745 + 0.0));
(_grad_has_returned_15649 = (true + false));
(_rock_return_value_inlined_21_25878 = (_rock_return_value_25789 + 0.0));
(_p_fbm3_high_25879 = ((_blackboard_return_value_15630 * 4.0) + float3(0.0, 0.0, 0.0)));
(_y_chalk_15698 = (0.40000001 + 0.0));
(_sdLine_return_value_inlined_31_15728 = (2.96 + 0.0));
(_fbm3_high_has_returned_25882 = (false + false));
(_fbm_return_value_inlined_9_15662 = (0.0 + 0.0));
(_amp_fbm3_high_25885 = (1.0 + 0.0));
(_frq_fbm3_high_25886 = (1.0 + 0.0));
{ for((_i_fbm3_high_25887 = (0 + 0)); (_i_fbm3_high_25887 < 5); (_i_fbm3_high_25887++))
{
(_p_noise_3_25829 = ((_p_fbm3_high_25879 * _frq_fbm3_high_25886) + float3(0.0, 0.0, 0.0)));
(_blackboard_has_returned_15629 = (false + false));
(_i_noise_3_25832 = (floor(_p_noise_3_25829) + float3(0.0, 0.0, 0.0)));
(_f_noise_3_25833 = (frac(_p_noise_3_25829) + float3(0.0, 0.0, 0.0)));
(_u_noise_3_25834 = (((_f_noise_3_25833 * _f_noise_3_25833) * (3.0 - (2.0 * _f_noise_3_25833))) + float3(0.0, 0.0, 0.0)));
(_p1_chalk_15690 = ((_i_noise_3_25832.xy + (_i_noise_3_25832.z * float2(5.0, 5.0))) + float2(0.0, 0.0)));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(0.0, 0.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_hash12_return_value_inlined_0_25840 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_sdLine_return_value_inlined_21_15706 = (_hash12_return_value_inlined_0_25840 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(1.0, 0.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_h_intersect_15747 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_b_noise_3_25843 = (_h_intersect_15747 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(0.0, 1.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_sdLine_return_value_inlined_35_15732 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_sdLine_return_value_inlined_28_15722 = (_sdLine_return_value_inlined_35_15732 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(1.0, 1.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_hash12_return_value_inlined_3_25846 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_cro_return_value_15744 = (_hash12_return_value_inlined_3_25846 + 0.0));
(_d_blackboard_15679 = (lerp(lerp(_sdLine_return_value_inlined_21_15706, _b_noise_3_25843, _u_noise_3_25834.x), lerp(_sdLine_return_value_inlined_28_15722, _cro_return_value_15744, _u_noise_3_25834.x), _u_noise_3_25834.y) + 0.0));
(_p1_chalk_15690 += (float2(5.0, 5.0) + float2(0.0, 0.0)));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(0.0, 0.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_hash12_return_value_inlined_4_25849 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_sdLine_return_value_inlined_21_15706 = (_hash12_return_value_inlined_4_25849 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(1.0, 0.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_hash12_return_value_inlined_5_25850 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_b_noise_3_25843 = (_hash12_return_value_inlined_5_25850 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(0.0, 1.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_hash12_return_value_inlined_6_25851 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_sdLine_return_value_inlined_28_15722 = (_hash12_return_value_inlined_6_25851 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(1.0, 1.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_fbm_return_value_inlined_15_15700 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_cro_return_value_15744 = (_fbm_return_value_inlined_15_15700 + 0.0));
(_v2_noise_3_25853 = (lerp(lerp(_sdLine_return_value_inlined_21_15706, _b_noise_3_25843, _u_noise_3_25834.x), lerp(_sdLine_return_value_inlined_28_15722, _cro_return_value_15744, _u_noise_3_25834.x), _u_noise_3_25834.y) + 0.0));
(_sdLine_return_value_inlined_18_15703 = (max(lerp(_d_blackboard_15679, _v2_noise_3_25853, _u_noise_3_25834.z), 0.0) + 0.0));
(_blackboard_has_returned_15629 = (true + false));
(_fbm_return_value_inlined_13_15683 = (_sdLine_return_value_inlined_18_15703 + 0.0));
float s17ac = max(_fbm_return_value_inlined_13_15683, 9.9999997e-10);
(_n_fbm3_high_25889 = ((s17ac * s17ac) + 0.0));
(_fbm_return_value_inlined_9_15662 += ((_n_fbm3_high_25889 * _amp_fbm3_high_25885) + 0.0));
(_frq_fbm3_high_25886 *= (_sdLine_return_value_inlined_31_15728 + 0.0));
(_amp_fbm3_high_25885 *= ((_y_chalk_15698 * pow(max(_n_fbm3_high_25889, 9.9999997e-10), 0.2)) + 0.0));
}
}
(_f_fbm_15639 = (_fbm_return_value_inlined_9_15662 + 0.0));
(_fbm3_high_has_returned_25882 = (true + false));
(_fbm_return_value_inlined_37_15734 = (_f_fbm_15639 + 0.0));
(_sdLine_return_value_inlined_33_15730 = ((_rock_return_value_inlined_21_25878 + (_fbm_return_value_inlined_37_15734 * 0.1)) + 0.0));
(_gp_plane_25857 = (_blackboard_return_value_15630 + float3(0.0, 0.0, 0.0)));
(_p_plane_25858 = (float4(0.0, 1.0, 0.0, 1.0) + float4(0.0, 0.0, 0.0, 0.0)));
(_plane_has_returned_25859 = (false + false));
(_plane_return_value_25860 = (dot(_p_plane_25858.xyz, (_gp_plane_25857 + (_p_plane_25858.xyz * _p_plane_25858.w))) + 0.0));
(_plane_has_returned_25859 = (true + false));
(_ww_blackboard_15682 = (_plane_return_value_25860 + 0.0));
(_a_boolUnion_25862 = (_sdLine_return_value_inlined_33_15730 + 0.0));
(_b_boolUnion_25863 = (_ww_blackboard_15682 + 0.0));
(_boolUnion_has_returned_25864 = (false + false));
(_fbm_return_value_inlined_40_15751 = (min(_a_boolUnion_25862, _b_boolUnion_25863) + 0.0));
(_boolUnion_has_returned_25864 = (true + false));
(_boolUnion_return_value_inlined_24_25893 = (_fbm_return_value_inlined_40_15751 + 0.0));
(_sdLine_return_value_inlined_33_15730 = (_boolUnion_return_value_inlined_24_25893 + 0.0));
(_sdLine_return_value_inlined_36_15733 = (_sdLine_return_value_inlined_33_15730 + 0.0));
(_map_detailed_has_returned_25876 = (true + false));
(_map_detailed_return_value_inlined_27_25896 = (_sdLine_return_value_inlined_36_15733 + 0.0));
(_n_getNormal_25874.z = (_map_detailed_return_value_inlined_27_25896 + 0.0));
(_blackboard_return_value_15630 = (_chalk_return_value_inlined_42_15752 + float3(0.0, 0.0, 0.0)));
(_map_detailed_has_returned_25876 = (false + false));
(_p_rock_25787 = (_blackboard_return_value_15630 + float3(0.0, 0.0, 0.0)));
(_grad_has_returned_15649 = (false + false));
(_p_sphere_25790 = (_p_rock_25787 + float3(0.0, 0.0, 0.0)));
(_dy_chalk_15699 = (1.0 + 0.0));
(_sphere_has_returned_25792 = (false + false));
(_fbm_return_value_inlined_8_15659 = ((length(_p_sphere_25790) - _dy_chalk_15699) + 0.0));
(_sphere_has_returned_25792 = (true + false));
(_sphere_return_value_inlined_12_25794 = (_fbm_return_value_inlined_8_15659 + 0.0));
(_cro_return_value_inlined_5_15745 = (_sphere_return_value_inlined_12_25794 + 0.0));
{ for((_i_rock_25796 = (0 + 0)); (_i_rock_25796 < 9); (_i_rock_25796++))
{
(_m_blackboard_15665 = (float_ctor_int(_i_rock_25796) + 0.0));
(_sdLine_return_value_inlined_16_15701 = (_m_blackboard_15665 + 0.0));
(_hash11_has_returned_25799 = (false + false));
(_hash11_return_value_25800 = (frac((sin((_sdLine_return_value_inlined_16_15701 * 727.09998)) * 435.54501)) + 0.0));
(_hash11_has_returned_25799 = (true + false));
(_hash11_return_value_inlined_13_25801 = (_hash11_return_value_25800 + 0.0));
(_cro_return_value_inlined_6_15746 = ((2.5 + _hash11_return_value_inlined_13_25801) + 0.0));
(_fbm_return_value_inlined_14_15695 = (_m_blackboard_15665 + 0.0));
(_altitude_has_returned_15713 = (false + false));
(_col_mainImage_15685 = ((float3(127.231, 491.70001, 718.42297) * _fbm_return_value_inlined_14_15695) + float3(0.0, 0.0, 0.0)));
(_hash31_return_value_25805 = (frac((sin(_col_mainImage_15685) * 435.543)) + float3(0.0, 0.0, 0.0)));
(_altitude_has_returned_15713 = (true + false));
(_hash31_return_value_inlined_14_25807 = (_hash31_return_value_25805 + float3(0.0, 0.0, 0.0)));
(_v_rock_25808 = (normalize(((_hash31_return_value_inlined_14_25807 * 2.0) - 1.0)) + float3(0.0, 0.0, 0.0)));
(_p_sphere_25790 = ((_p_rock_25787 + (_v_rock_25808 * _cro_return_value_inlined_6_15746)) + float3(0.0, 0.0, 0.0)));
(_dy_chalk_15699 = ((_cro_return_value_inlined_6_15746 * 0.80000001) + 0.0));
(_sphere_has_returned_25792 = (false + false));
(_fbm_return_value_inlined_8_15659 = ((length(_p_sphere_25790) - _dy_chalk_15699) + 0.0));
(_sphere_has_returned_25792 = (true + false));
(_sphere_return_value_inlined_15_25809 = (_fbm_return_value_inlined_8_15659 + 0.0));
(_a_boolSmoothSub_25810 = (_cro_return_value_inlined_5_15745 + 0.0));
(_s_fbm_15640 = (_sphere_return_value_inlined_15_25809 + 0.0));
(_fbm_return_value_inlined_39_15750 = (0.029999999 + 0.0));
(_chalk_has_returned_15688 = (false + false));
(_a_boolSmoothIntersect_25815 = (_a_boolSmoothSub_25810 + 0.0));
(_b_boolSmoothIntersect_25816 = ((-_s_fbm_15640) + 0.0));
(_fbm_return_value_inlined_12_15681 = (_fbm_return_value_inlined_39_15750 + 0.0));
(_boolSmoothIntersect_has_returned_25818 = (false + false));
(_h_boolSmoothIntersect_25820 = (clamp((0.5 + ((0.5 * (_b_boolSmoothIntersect_25816 - _a_boolSmoothIntersect_25815)) / _fbm_return_value_inlined_12_15681)), 0.0, 1.0) + 0.0));
(_boolSmoothIntersect_return_value_25819 = ((lerp(_a_boolSmoothIntersect_25815, _b_boolSmoothIntersect_25816, _h_boolSmoothIntersect_25820) + ((_fbm_return_value_inlined_12_15681 * _h_boolSmoothIntersect_25820) * (1.0 - _h_boolSmoothIntersect_25820))) + 0.0));
(_boolSmoothIntersect_has_returned_25818 = (true + false));
(_sdLine_return_value_inlined_17_15702 = (_boolSmoothIntersect_return_value_25819 + 0.0));
(_sdLine_return_value_15674 = (_sdLine_return_value_inlined_17_15702 + 0.0));
(_chalk_has_returned_15688 = (true + false));
(_boolSmoothSub_return_value_inlined_16_25822 = (_sdLine_return_value_15674 + 0.0));
(_cro_return_value_inlined_5_15745 = (_boolSmoothSub_return_value_inlined_16_25822 + 0.0));
}
}
(_rock_return_value_25789 = (_cro_return_value_inlined_5_15745 + 0.0));
(_grad_has_returned_15649 = (true + false));
(_rock_return_value_inlined_21_25878 = (_rock_return_value_25789 + 0.0));
(_p_fbm3_high_25879 = ((_blackboard_return_value_15630 * 4.0) + float3(0.0, 0.0, 0.0)));
(_y_chalk_15698 = (0.40000001 + 0.0));
(_sdLine_return_value_inlined_31_15728 = (2.96 + 0.0));
(_fbm3_high_has_returned_25882 = (false + false));
(_fbm_return_value_inlined_9_15662 = (0.0 + 0.0));
(_amp_fbm3_high_25885 = (1.0 + 0.0));
(_frq_fbm3_high_25886 = (1.0 + 0.0));
{ for((_i_fbm3_high_25887 = (0 + 0)); (_i_fbm3_high_25887 < 5); (_i_fbm3_high_25887++))
{
(_p_noise_3_25829 = ((_p_fbm3_high_25879 * _frq_fbm3_high_25886) + float3(0.0, 0.0, 0.0)));
(_blackboard_has_returned_15629 = (false + false));
(_i_noise_3_25832 = (floor(_p_noise_3_25829) + float3(0.0, 0.0, 0.0)));
(_f_noise_3_25833 = (frac(_p_noise_3_25829) + float3(0.0, 0.0, 0.0)));
(_u_noise_3_25834 = (((_f_noise_3_25833 * _f_noise_3_25833) * (3.0 - (2.0 * _f_noise_3_25833))) + float3(0.0, 0.0, 0.0)));
(_p1_chalk_15690 = ((_i_noise_3_25832.xy + (_i_noise_3_25832.z * float2(5.0, 5.0))) + float2(0.0, 0.0)));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(0.0, 0.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_hash12_return_value_inlined_0_25840 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_sdLine_return_value_inlined_21_15706 = (_hash12_return_value_inlined_0_25840 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(1.0, 0.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_h_intersect_15747 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_b_noise_3_25843 = (_h_intersect_15747 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(0.0, 1.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_sdLine_return_value_inlined_35_15732 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_sdLine_return_value_inlined_28_15722 = (_sdLine_return_value_inlined_35_15732 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(1.0, 1.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_hash12_return_value_inlined_3_25846 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_cro_return_value_15744 = (_hash12_return_value_inlined_3_25846 + 0.0));
(_d_blackboard_15679 = (lerp(lerp(_sdLine_return_value_inlined_21_15706, _b_noise_3_25843, _u_noise_3_25834.x), lerp(_sdLine_return_value_inlined_28_15722, _cro_return_value_15744, _u_noise_3_25834.x), _u_noise_3_25834.y) + 0.0));
(_p1_chalk_15690 += (float2(5.0, 5.0) + float2(0.0, 0.0)));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(0.0, 0.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_hash12_return_value_inlined_4_25849 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_sdLine_return_value_inlined_21_15706 = (_hash12_return_value_inlined_4_25849 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(1.0, 0.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_hash12_return_value_inlined_5_25850 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_b_noise_3_25843 = (_hash12_return_value_inlined_5_25850 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(0.0, 1.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_hash12_return_value_inlined_6_25851 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_sdLine_return_value_inlined_28_15722 = (_hash12_return_value_inlined_6_25851 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(1.0, 1.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_fbm_return_value_inlined_15_15700 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_cro_return_value_15744 = (_fbm_return_value_inlined_15_15700 + 0.0));
(_v2_noise_3_25853 = (lerp(lerp(_sdLine_return_value_inlined_21_15706, _b_noise_3_25843, _u_noise_3_25834.x), lerp(_sdLine_return_value_inlined_28_15722, _cro_return_value_15744, _u_noise_3_25834.x), _u_noise_3_25834.y) + 0.0));
(_sdLine_return_value_inlined_18_15703 = (max(lerp(_d_blackboard_15679, _v2_noise_3_25853, _u_noise_3_25834.z), 0.0) + 0.0));
(_blackboard_has_returned_15629 = (true + false));
(_fbm_return_value_inlined_13_15683 = (_sdLine_return_value_inlined_18_15703 + 0.0));
float s17ad = max(_fbm_return_value_inlined_13_15683, 9.9999997e-10);
(_n_fbm3_high_25889 = ((s17ad * s17ad) + 0.0));
(_fbm_return_value_inlined_9_15662 += ((_n_fbm3_high_25889 * _amp_fbm3_high_25885) + 0.0));
(_frq_fbm3_high_25886 *= (_sdLine_return_value_inlined_31_15728 + 0.0));
(_amp_fbm3_high_25885 *= ((_y_chalk_15698 * pow(max(_n_fbm3_high_25889, 9.9999997e-10), 0.2)) + 0.0));
}
}
(_f_fbm_15639 = (_fbm_return_value_inlined_9_15662 + 0.0));
(_fbm3_high_has_returned_25882 = (true + false));
(_fbm_return_value_inlined_37_15734 = (_f_fbm_15639 + 0.0));
(_sdLine_return_value_inlined_33_15730 = ((_rock_return_value_inlined_21_25878 + (_fbm_return_value_inlined_37_15734 * 0.1)) + 0.0));
(_gp_plane_25857 = (_blackboard_return_value_15630 + float3(0.0, 0.0, 0.0)));
(_p_plane_25858 = (float4(0.0, 1.0, 0.0, 1.0) + float4(0.0, 0.0, 0.0, 0.0)));
(_plane_has_returned_25859 = (false + false));
(_plane_return_value_25860 = (dot(_p_plane_25858.xyz, (_gp_plane_25857 + (_p_plane_25858.xyz * _p_plane_25858.w))) + 0.0));
(_plane_has_returned_25859 = (true + false));
(_ww_blackboard_15682 = (_plane_return_value_25860 + 0.0));
(_a_boolUnion_25862 = (_sdLine_return_value_inlined_33_15730 + 0.0));
(_b_boolUnion_25863 = (_ww_blackboard_15682 + 0.0));
(_boolUnion_has_returned_25864 = (false + false));
(_fbm_return_value_inlined_40_15751 = (min(_a_boolUnion_25862, _b_boolUnion_25863) + 0.0));
(_boolUnion_has_returned_25864 = (true + false));
(_boolUnion_return_value_inlined_24_25893 = (_fbm_return_value_inlined_40_15751 + 0.0));
(_sdLine_return_value_inlined_33_15730 = (_boolUnion_return_value_inlined_24_25893 + 0.0));
(_sdLine_return_value_inlined_36_15733 = (_sdLine_return_value_inlined_33_15730 + 0.0));
(_map_detailed_has_returned_25876 = (true + false));
(_sdLine_return_value_inlined_34_15731 = (_sdLine_return_value_inlined_36_15733 + 0.0));
(_col_chalk_15686 = (normalize((_n_getNormal_25874 - _sdLine_return_value_inlined_34_15731)) + float3(0.0, 0.0, 0.0)));
(_noise_has_returned_15643 = (true + false));
(_getNormal_return_value_inlined_38_25898 = (_col_chalk_15686 + float3(0.0, 0.0, 0.0)));
(_n_getPixel_25899 = (_getNormal_return_value_inlined_38_25898 + float3(0.0, 0.0, 0.0)));
(_p_getOcclusion_25900 = (_p_getPixel_25776 + float3(0.0, 0.0, 0.0)));
(_n_getOcclusion_25901 = (_n_getPixel_25899 + float3(0.0, 0.0, 0.0)));
(_fbm_has_returned_15636 = (false + false));
(_b2_intersect_15738 = (float2(0.0, 0.0) + float2(0.0, 0.0)));
{ for((_i_getOcclusion_25905 = (0 + 0)); (_i_getOcclusion_25905 < 4); (_i_getOcclusion_25905++))
{
(_f_getOcclusion_25906 = ((float_ctor_int(_i_getOcclusion_25905) * 0.25) + 0.0));
(_hao_getOcclusion_25907 = ((0.0099999998 + (_f_getOcclusion_25906 * 1.2)) + 0.0));
(_sdLine_return_value_inlined_30_15724 = ((0.0099999998 + (_f_getOcclusion_25906 * 0.25)) + 0.0));
(_p_map_25784 = ((_p_getOcclusion_25900 + (_n_getOcclusion_25901 * _hao_getOcclusion_25907)) + float3(0.0, 0.0, 0.0)));
(_intersect_has_returned_15739 = (false + false));
(_p_rock_25787 = (_p_map_25784 + float3(0.0, 0.0, 0.0)));
(_grad_has_returned_15649 = (false + false));
(_p_sphere_25790 = (_p_rock_25787 + float3(0.0, 0.0, 0.0)));
(_dy_chalk_15699 = (1.0 + 0.0));
(_sphere_has_returned_25792 = (false + false));
(_fbm_return_value_inlined_8_15659 = ((length(_p_sphere_25790) - _dy_chalk_15699) + 0.0));
(_sphere_has_returned_25792 = (true + false));
(_sphere_return_value_inlined_12_25794 = (_fbm_return_value_inlined_8_15659 + 0.0));
(_cro_return_value_inlined_5_15745 = (_sphere_return_value_inlined_12_25794 + 0.0));
{ for((_i_rock_25796 = (0 + 0)); (_i_rock_25796 < 9); (_i_rock_25796++))
{
(_m_blackboard_15665 = (float_ctor_int(_i_rock_25796) + 0.0));
(_sdLine_return_value_inlined_16_15701 = (_m_blackboard_15665 + 0.0));
(_hash11_has_returned_25799 = (false + false));
(_hash11_return_value_25800 = (frac((sin((_sdLine_return_value_inlined_16_15701 * 727.09998)) * 435.54501)) + 0.0));
(_hash11_has_returned_25799 = (true + false));
(_hash11_return_value_inlined_13_25801 = (_hash11_return_value_25800 + 0.0));
(_cro_return_value_inlined_6_15746 = ((2.5 + _hash11_return_value_inlined_13_25801) + 0.0));
(_fbm_return_value_inlined_14_15695 = (_m_blackboard_15665 + 0.0));
(_altitude_has_returned_15713 = (false + false));
(_col_mainImage_15685 = ((float3(127.231, 491.70001, 718.42297) * _fbm_return_value_inlined_14_15695) + float3(0.0, 0.0, 0.0)));
(_hash31_return_value_25805 = (frac((sin(_col_mainImage_15685) * 435.543)) + float3(0.0, 0.0, 0.0)));
(_altitude_has_returned_15713 = (true + false));
(_hash31_return_value_inlined_14_25807 = (_hash31_return_value_25805 + float3(0.0, 0.0, 0.0)));
(_v_rock_25808 = (normalize(((_hash31_return_value_inlined_14_25807 * 2.0) - 1.0)) + float3(0.0, 0.0, 0.0)));
(_p_sphere_25790 = ((_p_rock_25787 + (_v_rock_25808 * _cro_return_value_inlined_6_15746)) + float3(0.0, 0.0, 0.0)));
(_dy_chalk_15699 = ((_cro_return_value_inlined_6_15746 * 0.80000001) + 0.0));
(_sphere_has_returned_25792 = (false + false));
(_fbm_return_value_inlined_8_15659 = ((length(_p_sphere_25790) - _dy_chalk_15699) + 0.0));
(_sphere_has_returned_25792 = (true + false));
(_sphere_return_value_inlined_15_25809 = (_fbm_return_value_inlined_8_15659 + 0.0));
(_a_boolSmoothSub_25810 = (_cro_return_value_inlined_5_15745 + 0.0));
(_s_fbm_15640 = (_sphere_return_value_inlined_15_25809 + 0.0));
(_fbm_return_value_inlined_39_15750 = (0.029999999 + 0.0));
(_chalk_has_returned_15688 = (false + false));
(_a_boolSmoothIntersect_25815 = (_a_boolSmoothSub_25810 + 0.0));
(_b_boolSmoothIntersect_25816 = ((-_s_fbm_15640) + 0.0));
(_fbm_return_value_inlined_12_15681 = (_fbm_return_value_inlined_39_15750 + 0.0));
(_boolSmoothIntersect_has_returned_25818 = (false + false));
(_h_boolSmoothIntersect_25820 = (clamp((0.5 + ((0.5 * (_b_boolSmoothIntersect_25816 - _a_boolSmoothIntersect_25815)) / _fbm_return_value_inlined_12_15681)), 0.0, 1.0) + 0.0));
(_boolSmoothIntersect_return_value_25819 = ((lerp(_a_boolSmoothIntersect_25815, _b_boolSmoothIntersect_25816, _h_boolSmoothIntersect_25820) + ((_fbm_return_value_inlined_12_15681 * _h_boolSmoothIntersect_25820) * (1.0 - _h_boolSmoothIntersect_25820))) + 0.0));
(_boolSmoothIntersect_has_returned_25818 = (true + false));
(_sdLine_return_value_inlined_17_15702 = (_boolSmoothIntersect_return_value_25819 + 0.0));
(_sdLine_return_value_15674 = (_sdLine_return_value_inlined_17_15702 + 0.0));
(_chalk_has_returned_15688 = (true + false));
(_boolSmoothSub_return_value_inlined_16_25822 = (_sdLine_return_value_15674 + 0.0));
(_cro_return_value_inlined_5_15745 = (_boolSmoothSub_return_value_inlined_16_25822 + 0.0));
}
}
(_rock_return_value_25789 = (_cro_return_value_inlined_5_15745 + 0.0));
(_grad_has_returned_15649 = (true + false));
(_sdLine_return_value_inlined_19_15704 = (_rock_return_value_25789 + 0.0));
(_p_fbm3_25824 = ((_p_map_25784 * 4.0) + float3(0.0, 0.0, 0.0)));
(_fbm_return_value_inlined_24_15709 = (0.40000001 + 0.0));
(_f_fbm3_25826 = (2.96 + 0.0));
(_fbm3_has_returned_25827 = (false + false));
(_p_noise_3_25829 = (_p_fbm3_25824 + float3(0.0, 0.0, 0.0)));
(_blackboard_has_returned_15629 = (false + false));
(_i_noise_3_25832 = (floor(_p_noise_3_25829) + float3(0.0, 0.0, 0.0)));
(_f_noise_3_25833 = (frac(_p_noise_3_25829) + float3(0.0, 0.0, 0.0)));
(_u_noise_3_25834 = (((_f_noise_3_25833 * _f_noise_3_25833) * (3.0 - (2.0 * _f_noise_3_25833))) + float3(0.0, 0.0, 0.0)));
(_p1_chalk_15690 = ((_i_noise_3_25832.xy + (_i_noise_3_25832.z * float2(5.0, 5.0))) + float2(0.0, 0.0)));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(0.0, 0.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_hash12_return_value_inlined_0_25840 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_sdLine_return_value_inlined_21_15706 = (_hash12_return_value_inlined_0_25840 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(1.0, 0.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_h_intersect_15747 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_b_noise_3_25843 = (_h_intersect_15747 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(0.0, 1.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_sdLine_return_value_inlined_35_15732 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_sdLine_return_value_inlined_28_15722 = (_sdLine_return_value_inlined_35_15732 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(1.0, 1.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_hash12_return_value_inlined_3_25846 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_cro_return_value_15744 = (_hash12_return_value_inlined_3_25846 + 0.0));
(_d_blackboard_15679 = (lerp(lerp(_sdLine_return_value_inlined_21_15706, _b_noise_3_25843, _u_noise_3_25834.x), lerp(_sdLine_return_value_inlined_28_15722, _cro_return_value_15744, _u_noise_3_25834.x), _u_noise_3_25834.y) + 0.0));
(_p1_chalk_15690 += (float2(5.0, 5.0) + float2(0.0, 0.0)));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(0.0, 0.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_hash12_return_value_inlined_4_25849 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_sdLine_return_value_inlined_21_15706 = (_hash12_return_value_inlined_4_25849 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(1.0, 0.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_hash12_return_value_inlined_5_25850 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_b_noise_3_25843 = (_hash12_return_value_inlined_5_25850 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(0.0, 1.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_hash12_return_value_inlined_6_25851 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_sdLine_return_value_inlined_28_15722 = (_hash12_return_value_inlined_6_25851 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(1.0, 1.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_fbm_return_value_inlined_15_15700 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_cro_return_value_15744 = (_fbm_return_value_inlined_15_15700 + 0.0));
(_v2_noise_3_25853 = (lerp(lerp(_sdLine_return_value_inlined_21_15706, _b_noise_3_25843, _u_noise_3_25834.x), lerp(_sdLine_return_value_inlined_28_15722, _cro_return_value_15744, _u_noise_3_25834.x), _u_noise_3_25834.y) + 0.0));
(_sdLine_return_value_inlined_18_15703 = (max(lerp(_d_blackboard_15679, _v2_noise_3_25853, _u_noise_3_25834.z), 0.0) + 0.0));
(_blackboard_has_returned_15629 = (true + false));
(_noise_3_return_value_inlined_8_25854 = (_sdLine_return_value_inlined_18_15703 + 0.0));
(_fbm3_return_value_25828 = (_noise_3_return_value_inlined_8_25854 + 0.0));
(_fbm3_has_returned_25827 = (true + false));
(_sdLine_return_value_inlined_10_15678 = (_fbm3_return_value_25828 + 0.0));
(_d_map_25856 = ((_sdLine_return_value_inlined_19_15704 + (_sdLine_return_value_inlined_10_15678 * 0.1)) + 0.0));
(_gp_plane_25857 = (_p_map_25784 + float3(0.0, 0.0, 0.0)));
(_p_plane_25858 = (float4(0.0, 1.0, 0.0, 1.0) + float4(0.0, 0.0, 0.0, 0.0)));
(_plane_has_returned_25859 = (false + false));
(_plane_return_value_25860 = (dot(_p_plane_25858.xyz, (_gp_plane_25857 + (_p_plane_25858.xyz * _p_plane_25858.w))) + 0.0));
(_plane_has_returned_25859 = (true + false));
(_h_sdLine_15677 = (_plane_return_value_25860 + 0.0));
(_a_boolUnion_25862 = (_d_map_25856 + 0.0));
(_b_boolUnion_25863 = (_h_sdLine_15677 + 0.0));
(_boolUnion_has_returned_25864 = (false + false));
(_fbm_return_value_inlined_40_15751 = (min(_a_boolUnion_25862, _b_boolUnion_25863) + 0.0));
(_boolUnion_has_returned_25864 = (true + false));
(_boolUnion_return_value_inlined_20_25866 = (_fbm_return_value_inlined_40_15751 + 0.0));
(_d_map_25856 = (_boolUnion_return_value_inlined_20_25866 + 0.0));
(_x_chalk_15697 = (_d_map_25856 + 0.0));
(_intersect_has_returned_15739 = (true + false));
(_fbm_return_value_inlined_7_15658 = (_x_chalk_15697 + 0.0));
(_v_blackboard_15633 = ((_fbm_return_value_inlined_7_15658 - 0.1) + 0.0));
(_p_map_25784 = ((_p_getOcclusion_25900 - (_n_getOcclusion_25901 * _sdLine_return_value_inlined_30_15724)) + float3(0.0, 0.0, 0.0)));
(_intersect_has_returned_15739 = (false + false));
(_p_rock_25787 = (_p_map_25784 + float3(0.0, 0.0, 0.0)));
(_grad_has_returned_15649 = (false + false));
(_p_sphere_25790 = (_p_rock_25787 + float3(0.0, 0.0, 0.0)));
(_dy_chalk_15699 = (1.0 + 0.0));
(_sphere_has_returned_25792 = (false + false));
(_fbm_return_value_inlined_8_15659 = ((length(_p_sphere_25790) - _dy_chalk_15699) + 0.0));
(_sphere_has_returned_25792 = (true + false));
(_sphere_return_value_inlined_12_25794 = (_fbm_return_value_inlined_8_15659 + 0.0));
(_cro_return_value_inlined_5_15745 = (_sphere_return_value_inlined_12_25794 + 0.0));
{ for((_i_rock_25796 = (0 + 0)); (_i_rock_25796 < 9); (_i_rock_25796++))
{
(_m_blackboard_15665 = (float_ctor_int(_i_rock_25796) + 0.0));
(_sdLine_return_value_inlined_16_15701 = (_m_blackboard_15665 + 0.0));
(_hash11_has_returned_25799 = (false + false));
(_hash11_return_value_25800 = (frac((sin((_sdLine_return_value_inlined_16_15701 * 727.09998)) * 435.54501)) + 0.0));
(_hash11_has_returned_25799 = (true + false));
(_hash11_return_value_inlined_13_25801 = (_hash11_return_value_25800 + 0.0));
(_cro_return_value_inlined_6_15746 = ((2.5 + _hash11_return_value_inlined_13_25801) + 0.0));
(_fbm_return_value_inlined_14_15695 = (_m_blackboard_15665 + 0.0));
(_altitude_has_returned_15713 = (false + false));
(_col_mainImage_15685 = ((float3(127.231, 491.70001, 718.42297) * _fbm_return_value_inlined_14_15695) + float3(0.0, 0.0, 0.0)));
(_hash31_return_value_25805 = (frac((sin(_col_mainImage_15685) * 435.543)) + float3(0.0, 0.0, 0.0)));
(_altitude_has_returned_15713 = (true + false));
(_hash31_return_value_inlined_14_25807 = (_hash31_return_value_25805 + float3(0.0, 0.0, 0.0)));
(_v_rock_25808 = (normalize(((_hash31_return_value_inlined_14_25807 * 2.0) - 1.0)) + float3(0.0, 0.0, 0.0)));
(_p_sphere_25790 = ((_p_rock_25787 + (_v_rock_25808 * _cro_return_value_inlined_6_15746)) + float3(0.0, 0.0, 0.0)));
(_dy_chalk_15699 = ((_cro_return_value_inlined_6_15746 * 0.80000001) + 0.0));
(_sphere_has_returned_25792 = (false + false));
(_fbm_return_value_inlined_8_15659 = ((length(_p_sphere_25790) - _dy_chalk_15699) + 0.0));
(_sphere_has_returned_25792 = (true + false));
(_sphere_return_value_inlined_15_25809 = (_fbm_return_value_inlined_8_15659 + 0.0));
(_a_boolSmoothSub_25810 = (_cro_return_value_inlined_5_15745 + 0.0));
(_s_fbm_15640 = (_sphere_return_value_inlined_15_25809 + 0.0));
(_fbm_return_value_inlined_39_15750 = (0.029999999 + 0.0));
(_chalk_has_returned_15688 = (false + false));
(_a_boolSmoothIntersect_25815 = (_a_boolSmoothSub_25810 + 0.0));
(_b_boolSmoothIntersect_25816 = ((-_s_fbm_15640) + 0.0));
(_fbm_return_value_inlined_12_15681 = (_fbm_return_value_inlined_39_15750 + 0.0));
(_boolSmoothIntersect_has_returned_25818 = (false + false));
(_h_boolSmoothIntersect_25820 = (clamp((0.5 + ((0.5 * (_b_boolSmoothIntersect_25816 - _a_boolSmoothIntersect_25815)) / _fbm_return_value_inlined_12_15681)), 0.0, 1.0) + 0.0));
(_boolSmoothIntersect_return_value_25819 = ((lerp(_a_boolSmoothIntersect_25815, _b_boolSmoothIntersect_25816, _h_boolSmoothIntersect_25820) + ((_fbm_return_value_inlined_12_15681 * _h_boolSmoothIntersect_25820) * (1.0 - _h_boolSmoothIntersect_25820))) + 0.0));
(_boolSmoothIntersect_has_returned_25818 = (true + false));
(_sdLine_return_value_inlined_17_15702 = (_boolSmoothIntersect_return_value_25819 + 0.0));
(_sdLine_return_value_15674 = (_sdLine_return_value_inlined_17_15702 + 0.0));
(_chalk_has_returned_15688 = (true + false));
(_boolSmoothSub_return_value_inlined_16_25822 = (_sdLine_return_value_15674 + 0.0));
(_cro_return_value_inlined_5_15745 = (_boolSmoothSub_return_value_inlined_16_25822 + 0.0));
}
}
(_rock_return_value_25789 = (_cro_return_value_inlined_5_15745 + 0.0));
(_grad_has_returned_15649 = (true + false));
(_sdLine_return_value_inlined_19_15704 = (_rock_return_value_25789 + 0.0));
(_p_fbm3_25824 = ((_p_map_25784 * 4.0) + float3(0.0, 0.0, 0.0)));
(_fbm_return_value_inlined_24_15709 = (0.40000001 + 0.0));
(_f_fbm3_25826 = (2.96 + 0.0));
(_fbm3_has_returned_25827 = (false + false));
(_p_noise_3_25829 = (_p_fbm3_25824 + float3(0.0, 0.0, 0.0)));
(_blackboard_has_returned_15629 = (false + false));
(_i_noise_3_25832 = (floor(_p_noise_3_25829) + float3(0.0, 0.0, 0.0)));
(_f_noise_3_25833 = (frac(_p_noise_3_25829) + float3(0.0, 0.0, 0.0)));
(_u_noise_3_25834 = (((_f_noise_3_25833 * _f_noise_3_25833) * (3.0 - (2.0 * _f_noise_3_25833))) + float3(0.0, 0.0, 0.0)));
(_p1_chalk_15690 = ((_i_noise_3_25832.xy + (_i_noise_3_25832.z * float2(5.0, 5.0))) + float2(0.0, 0.0)));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(0.0, 0.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_hash12_return_value_inlined_0_25840 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_sdLine_return_value_inlined_21_15706 = (_hash12_return_value_inlined_0_25840 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(1.0, 0.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_h_intersect_15747 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_b_noise_3_25843 = (_h_intersect_15747 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(0.0, 1.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_sdLine_return_value_inlined_35_15732 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_sdLine_return_value_inlined_28_15722 = (_sdLine_return_value_inlined_35_15732 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(1.0, 1.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_hash12_return_value_inlined_3_25846 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_cro_return_value_15744 = (_hash12_return_value_inlined_3_25846 + 0.0));
(_d_blackboard_15679 = (lerp(lerp(_sdLine_return_value_inlined_21_15706, _b_noise_3_25843, _u_noise_3_25834.x), lerp(_sdLine_return_value_inlined_28_15722, _cro_return_value_15744, _u_noise_3_25834.x), _u_noise_3_25834.y) + 0.0));
(_p1_chalk_15690 += (float2(5.0, 5.0) + float2(0.0, 0.0)));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(0.0, 0.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_hash12_return_value_inlined_4_25849 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_sdLine_return_value_inlined_21_15706 = (_hash12_return_value_inlined_4_25849 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(1.0, 0.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_hash12_return_value_inlined_5_25850 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_b_noise_3_25843 = (_hash12_return_value_inlined_5_25850 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(0.0, 1.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_hash12_return_value_inlined_6_25851 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_sdLine_return_value_inlined_28_15722 = (_hash12_return_value_inlined_6_25851 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(1.0, 1.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_fbm_return_value_inlined_15_15700 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_cro_return_value_15744 = (_fbm_return_value_inlined_15_15700 + 0.0));
(_v2_noise_3_25853 = (lerp(lerp(_sdLine_return_value_inlined_21_15706, _b_noise_3_25843, _u_noise_3_25834.x), lerp(_sdLine_return_value_inlined_28_15722, _cro_return_value_15744, _u_noise_3_25834.x), _u_noise_3_25834.y) + 0.0));
(_sdLine_return_value_inlined_18_15703 = (max(lerp(_d_blackboard_15679, _v2_noise_3_25853, _u_noise_3_25834.z), 0.0) + 0.0));
(_blackboard_has_returned_15629 = (true + false));
(_noise_3_return_value_inlined_8_25854 = (_sdLine_return_value_inlined_18_15703 + 0.0));
(_fbm3_return_value_25828 = (_noise_3_return_value_inlined_8_25854 + 0.0));
(_fbm3_has_returned_25827 = (true + false));
(_sdLine_return_value_inlined_10_15678 = (_fbm3_return_value_25828 + 0.0));
(_d_map_25856 = ((_sdLine_return_value_inlined_19_15704 + (_sdLine_return_value_inlined_10_15678 * 0.1)) + 0.0));
(_gp_plane_25857 = (_p_map_25784 + float3(0.0, 0.0, 0.0)));
(_p_plane_25858 = (float4(0.0, 1.0, 0.0, 1.0) + float4(0.0, 0.0, 0.0, 0.0)));
(_plane_has_returned_25859 = (false + false));
(_plane_return_value_25860 = (dot(_p_plane_25858.xyz, (_gp_plane_25857 + (_p_plane_25858.xyz * _p_plane_25858.w))) + 0.0));
(_plane_has_returned_25859 = (true + false));
(_h_sdLine_15677 = (_plane_return_value_25860 + 0.0));
(_a_boolUnion_25862 = (_d_map_25856 + 0.0));
(_b_boolUnion_25863 = (_h_sdLine_15677 + 0.0));
(_boolUnion_has_returned_25864 = (false + false));
(_fbm_return_value_inlined_40_15751 = (min(_a_boolUnion_25862, _b_boolUnion_25863) + 0.0));
(_boolUnion_has_returned_25864 = (true + false));
(_boolUnion_return_value_inlined_20_25866 = (_fbm_return_value_inlined_40_15751 + 0.0));
(_d_map_25856 = (_boolUnion_return_value_inlined_20_25866 + 0.0));
(_x_chalk_15697 = (_d_map_25856 + 0.0));
(_intersect_has_returned_15739 = (true + false));
(_map_return_value_inlined_30_25911 = (_x_chalk_15697 + 0.0));
(_dc_getOcclusion_25912 = ((_map_return_value_inlined_30_25911 - 0.1) + 0.0));
(_b2_intersect_15738.x += ((clamp((_hao_getOcclusion_25907 - _v_blackboard_15633), 0.0, 1.0) * (1.0 - _f_getOcclusion_25906)) + 0.0));
(_b2_intersect_15738.y += ((clamp((_sdLine_return_value_inlined_30_15724 + _dc_getOcclusion_25912), 0.0, 1.0) * (1.0 - _f_getOcclusion_25906)) + 0.0));
}
}
(_b2_intersect_15738.x = (clamp((1.0 - ((_b2_intersect_15738.x * 0.25) * 3.5)), 0.0, 1.0) + 0.0));
(_b2_intersect_15738.y = (clamp(((_b2_intersect_15738.y * 0.25) * 40.0), 0.0, 1.0) + 0.0));
(_grad_return_value_inlined_3_15656 = (_b2_intersect_15738 + float2(0.0, 0.0)));
(_fbm_has_returned_15636 = (true + false));
(_fragCoord_blackboard_15628 = (_grad_return_value_inlined_3_15656 + float2(0.0, 0.0)));
(_a_cro_15741 = (_fragCoord_blackboard_15628 + float2(0.0, 0.0)));
(_light_getPixel_25915 = (float3(0.0, 1.0, 0.0) + float3(0.0, 0.0, 0.0)));
(_color_getPixel_25916 = (float3(1.0, 1.0, 1.0) + float3(0.0, 0.0, 0.0)));
if (((_c_altitude_15710.x < 3.5) && (_p_getPixel_25776.y > -0.88999999)))
{
(_p_getStoneColor_25917 = (_p_getPixel_25776 + float3(0.0, 0.0, 0.0)));
(_c_getStoneColor_25918 = (_a_cro_15741.y + 0.0));
(_l_getStoneColor_25919 = (_light_getPixel_25915 + float3(0.0, 0.0, 0.0)));
(_n_getStoneColor_25920 = (_n_getPixel_25899 + float3(0.0, 0.0, 0.0)));
(_e_getStoneColor_25921 = (_dir_getPixel_25775 + float3(0.0, 0.0, 0.0)));
(_getStoneColor_has_returned_25922 = (false + false));
(_p_noise_3_25829 = (vec3_ctor((_p_getStoneColor_25917.x * 20.0), 0.0, (_p_getStoneColor_25917.z * 20.0)) + float3(0.0, 0.0, 0.0)));
(_blackboard_has_returned_15629 = (false + false));
(_i_noise_3_25832 = (floor(_p_noise_3_25829) + float3(0.0, 0.0, 0.0)));
(_f_noise_3_25833 = (frac(_p_noise_3_25829) + float3(0.0, 0.0, 0.0)));
(_u_noise_3_25834 = (((_f_noise_3_25833 * _f_noise_3_25833) * (3.0 - (2.0 * _f_noise_3_25833))) + float3(0.0, 0.0, 0.0)));
(_p1_chalk_15690 = ((_i_noise_3_25832.xy + (_i_noise_3_25832.z * float2(5.0, 5.0))) + float2(0.0, 0.0)));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(0.0, 0.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_hash12_return_value_inlined_0_25840 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_sdLine_return_value_inlined_21_15706 = (_hash12_return_value_inlined_0_25840 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(1.0, 0.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_h_intersect_15747 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_b_noise_3_25843 = (_h_intersect_15747 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(0.0, 1.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_sdLine_return_value_inlined_35_15732 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_sdLine_return_value_inlined_28_15722 = (_sdLine_return_value_inlined_35_15732 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(1.0, 1.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_hash12_return_value_inlined_3_25846 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_cro_return_value_15744 = (_hash12_return_value_inlined_3_25846 + 0.0));
(_d_blackboard_15679 = (lerp(lerp(_sdLine_return_value_inlined_21_15706, _b_noise_3_25843, _u_noise_3_25834.x), lerp(_sdLine_return_value_inlined_28_15722, _cro_return_value_15744, _u_noise_3_25834.x), _u_noise_3_25834.y) + 0.0));
(_p1_chalk_15690 += (float2(5.0, 5.0) + float2(0.0, 0.0)));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(0.0, 0.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_hash12_return_value_inlined_4_25849 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_sdLine_return_value_inlined_21_15706 = (_hash12_return_value_inlined_4_25849 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(1.0, 0.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_hash12_return_value_inlined_5_25850 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_b_noise_3_25843 = (_hash12_return_value_inlined_5_25850 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(0.0, 1.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_hash12_return_value_inlined_6_25851 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_sdLine_return_value_inlined_28_15722 = (_hash12_return_value_inlined_6_25851 + 0.0));
(_grad_return_value_inlined_1_15654 = ((_p1_chalk_15690 + float2(1.0, 1.0)) + float2(0.0, 0.0)));
(_sdLine_has_returned_15673 = (false + false));
(_gf_chalk_15694 = (dot(_grad_return_value_inlined_1_15654, float2(127.1, 311.70001)) + 0.0));
(_sdLine_return_value_inlined_22_15707 = (frac((sin(_gf_chalk_15694) * 437.54501)) + 0.0));
(_sdLine_has_returned_15673 = (true + false));
(_fbm_return_value_inlined_15_15700 = (_sdLine_return_value_inlined_22_15707 + 0.0));
(_cro_return_value_15744 = (_fbm_return_value_inlined_15_15700 + 0.0));
(_v2_noise_3_25853 = (lerp(lerp(_sdLine_return_value_inlined_21_15706, _b_noise_3_25843, _u_noise_3_25834.x), lerp(_sdLine_return_value_inlined_28_15722, _cro_return_value_15744, _u_noise_3_25834.x), _u_noise_3_25834.y) + 0.0));
(_sdLine_return_value_inlined_18_15703 = (max(lerp(_d_blackboard_15679, _v2_noise_3_25853, _u_noise_3_25834.z), 0.0) + 0.0));
(_blackboard_has_returned_15629 = (true + false));
(_sdLine_return_value_inlined_23_15708 = (_sdLine_return_value_inlined_18_15703 + 0.0));
(_c_getStoneColor_25918 = (min((_c_getStoneColor_25918 + (pow(max(_sdLine_return_value_inlined_23_15708, 9.9999997e-10), 70.0) * 8.0)), 1.0) + 0.0));
(_ic_getStoneColor_25925 = (pow(max((1.0 - _c_getStoneColor_25918), 9.9999997e-10), 0.5) + 0.0));
(_base_getStoneColor_25926 = (float3(0.147, 0.105, 0.07) + float3(0.0, 0.0, 0.0)));
(_col_blackboard_15634 = (float3(0.45899999, 0.36899999, 0.28799999) + float3(0.0, 0.0, 0.0)));
(_color_getStoneColor_25928 = (lerp(_base_getStoneColor_25926, _col_blackboard_15634, _c_getStoneColor_25918) + float3(0.0, 0.0, 0.0)));
float s17ae = max((1.0 - max(dot(_n_getStoneColor_25920, (-_e_getStoneColor_25921)), 0.0)), 9.9999997e-10);
(_f_getStoneColor_25929 = (((((((s17ae * s17ae) * s17ae) * s17ae) * s17ae) * 0.75) * _ic_getStoneColor_25925) + 0.0));
(_n_diffuse_25930 = (_n_getStoneColor_25920 + float3(0.0, 0.0, 0.0)));
(_l_diffuse_25931 = (_l_getStoneColor_25919 + float3(0.0, 0.0, 0.0)));
(_p_diffuse_25932 = (0.5 + 0.0));
(_diffuse_has_returned_25933 = (false + false));
(_diffuse_return_value_25934 = (pow(max(max(dot(_n_diffuse_25930, _l_diffuse_25931), 0.0), 9.9999997e-10), _p_diffuse_25932) + 0.0));
(_diffuse_has_returned_25933 = (true + false));
(_fa_flattened_block_1_blackboard_15664 = (_diffuse_return_value_25934 + 0.0));
(_color_getStoneColor_25928 += (vec3_ctor((_fa_flattened_block_1_blackboard_15664 * float3(0.30000001, 0.26750001, 0.245))) + float3(0.0, 0.0, 0.0)));
(_blackboard_return_value_inlined_41_15684 = (_n_getStoneColor_25920 + float3(0.0, 0.0, 0.0)));
(_l_specular_25937 = (_l_getStoneColor_25919 + float3(0.0, 0.0, 0.0)));
(_e_specular_25938 = (_e_getStoneColor_25921 + float3(0.0, 0.0, 0.0)));
(_sdLine_return_value_inlined_32_15729 = (8.0 + 0.0));
(_specular_has_returned_25940 = (false + false));
(_fbm_return_value_15637 = (((_sdLine_return_value_inlined_32_15729 + 8.0) / 25.132) + 0.0));
(_specular_return_value_25941 = ((pow(max(max(dot(reflect(_e_specular_25938, _blackboard_return_value_inlined_41_15684), _l_specular_25937), 0.0), 9.9999997e-10), _sdLine_return_value_inlined_32_15729) * _fbm_return_value_15637) + 0.0));
(_specular_has_returned_25940 = (true + false));
(_fbm_return_value_inlined_11_15680 = (_specular_return_value_25941 + 0.0));
(_color_getStoneColor_25928 += (vec3_ctor((((_fbm_return_value_inlined_11_15680 * float3(0.30000001, 0.26750001, 0.245)) * 1.5) * _ic_getStoneColor_25925)) + float3(0.0, 0.0, 0.0)));
(_n_getStoneColor_25920 = (normalize((_n_getStoneColor_25920 - (normalize(_p_getStoneColor_25917) * 0.40000001))) + float3(0.0, 0.0, 0.0)));
(_blackboard_return_value_inlined_41_15684 = (_n_getStoneColor_25920 + float3(0.0, 0.0, 0.0)));
(_l_specular_25937 = (_l_getStoneColor_25919 + float3(0.0, 0.0, 0.0)));
(_e_specular_25938 = (_e_getStoneColor_25921 + float3(0.0, 0.0, 0.0)));
(_sdLine_return_value_inlined_32_15729 = (80.0 + 0.0));
(_specular_has_returned_25940 = (false + false));
(_fbm_return_value_15637 = (((_sdLine_return_value_inlined_32_15729 + 8.0) / 25.132) + 0.0));
(_specular_return_value_25941 = ((pow(max(max(dot(reflect(_e_specular_25938, _blackboard_return_value_inlined_41_15684), _l_specular_25937), 0.0), 9.9999997e-10), _sdLine_return_value_inlined_32_15729) * _fbm_return_value_15637) + 0.0));
(_specular_has_returned_25940 = (true + false));
(_noise_return_value_inlined_4_15657 = (_specular_return_value_25941 + 0.0));
(_color_getStoneColor_25928 += (vec3_ctor((((_noise_return_value_inlined_4_15657 * float3(0.30000001, 0.26750001, 0.245)) * 1.5) * _ic_getStoneColor_25925)) + float3(0.0, 0.0, 0.0)));
(_color_getStoneColor_25928 = (lerp(_color_getStoneColor_25928, float3(1.0, 1.0, 1.0), _f_getStoneColor_25929) + float3(0.0, 0.0, 0.0)));
(_color_getStoneColor_25928 *= (((sqrt(abs(((_p_getStoneColor_25917.y * 0.5) + 0.5))) * 0.40000001) + 0.60000002) + 0.0));
(_color_getStoneColor_25928 *= (((((_n_getStoneColor_25920.y * 0.5) + 0.5) * 0.40000001) + 0.60000002) + 0.0));
(_getStoneColor_return_value_25923 = (_color_getStoneColor_25928 + float3(0.0, 0.0, 0.0)));
(_getStoneColor_has_returned_25922 = (true + false));
(_getStoneColor_return_value_inlined_40_25945 = (_getStoneColor_return_value_25923 + float3(0.0, 0.0, 0.0)));
(_color_getPixel_25916 = (_getStoneColor_return_value_inlined_40_25945 + float3(0.0, 0.0, 0.0)));
}
(_color_getPixel_25916 *= (_a_cro_15741.x + 0.0));
(_getPixel_return_value_25761 = (_color_getPixel_25916 + float3(0.0, 0.0, 0.0)));
(_getPixel_has_returned_25760 = (true + false));
(_getPixel_return_value_inlined_41_25946 = (_getPixel_return_value_25761 + float3(0.0, 0.0, 0.0)));
(_color_mainImage_25754 += (_getPixel_return_value_inlined_41_25946 + float3(0.0, 0.0, 0.0)));
}
}
}
}
(_color_mainImage_25754 /= 9.0);
(_color_mainImage_25754 = sqrt(_color_mainImage_25754));
(_c_saturation_25947 = _color_mainImage_25754);
(_fbm_return_value_inlined_20_15705 = 1.7);
(_saturation_has_returned_25949 = false);
(_saturation_return_value_25950 = lerp(vec3_ctor(dot(_c_saturation_25947, float3(0.21259999, 0.71520001, 0.0722))), _c_saturation_25947, _fbm_return_value_inlined_20_15705));
(_saturation_has_returned_25949 = true);
(_saturation_return_value_inlined_42_25951 = _saturation_return_value_25950);
(_color_mainImage_25754 = _saturation_return_value_inlined_42_25951);
(_f_noise_15646 = (((gl_FragCoord.xy / _iResolution.xy) * 2.0) - 1.0));
(_vgn_mainImage_25953 = (smoothstep(1.2, 0.69999999, abs(_f_noise_15646.y)) * smoothstep(1.1, 0.80000001, abs(_f_noise_15646.x))));
(_color_mainImage_25754 *= (1.0 - ((1.0 - _vgn_mainImage_25953) * 0.15000001)));
(_fragColor_2 = vec4_ctor(_color_mainImage_25754, 1.0));
(_fragColor_2.w = 1.0);
(_live_tu_has_executed = true);
}
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s1772 = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s1772 = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s1773 = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s1773 = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s1773 = _gr_grad_15652);
}
(s1772 = s1773);
}
(_grad_return_value_15650 = s1772);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_0_15653 = _grad_return_value_15650);
(_z_grad_15648 = (_i_noise_15645 + int2(1, 0)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s1774 = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s1774 = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s1775 = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s1775 = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s1775 = _gr_grad_15652);
}
(s1774 = s1775);
}
(_grad_return_value_15650 = s1774);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_1_15654 = _grad_return_value_15650);
(_z_grad_15648 = (_i_noise_15645 + int2(0, 1)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s1776 = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s1776 = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s1777 = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s1777 = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s1777 = _gr_grad_15652);
}
(s1776 = s1777);
}
(_grad_return_value_15650 = s1776);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_2_15655 = _grad_return_value_15650);
(_z_grad_15648 = (_i_noise_15645 + int2(1, 1)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s1778 = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s1778 = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s1779 = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s1779 = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s1779 = _gr_grad_15652);
}
(s1778 = s1779);
}
(_grad_return_value_15650 = s1778);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_3_15656 = _grad_return_value_15650);
(_noise_return_value_15644 = lerp(lerp(dot(_grad_return_value_inlined_0_15653, (_f_noise_15646 - float2(0.0, 0.0))), dot(_grad_return_value_inlined_1_15654, (_f_noise_15646 - float2(1.0, 0.0))), _u_noise_15647.x), lerp(dot(_grad_return_value_inlined_2_15655, (_f_noise_15646 - float2(0.0, 1.0))), dot(_grad_return_value_inlined_3_15656, (_f_noise_15646 - float2(1.0, 1.0))), _u_noise_15647.x), _u_noise_15647.y));
(_noise_has_returned_15643 = true);
(_noise_return_value_inlined_4_15657 = _noise_return_value_15644);
(_f_fbm_15639 += (_s_fbm_15640 * _noise_return_value_inlined_4_15657));
(_p_fbm_15635 = mul(transpose(float2x2(1.6, 1.2, -1.2, 1.6)), _p_fbm_15635));
(_s_fbm_15640 = (0.5 * _s_fbm_15640));
}
}
(_fbm_return_value_15637 = _f_fbm_15639);
(_fbm_has_returned_15636 = true);
(_fbm_return_value_inlined_14_15695 = _fbm_return_value_15637);
(_gf_chalk_15694 *= (0.89999998 + (0.2 * smoothstep(-0.2, 0.2, _fbm_return_value_inlined_14_15695))));
(_d_chalk_15696 = 0.0);
if ((abs(_p_chalk_15693.x) > 0.1))
{
(_x_chalk_15697 = _p_chalk_15693.x);
(_y_chalk_15698 = (1.0 / _x_chalk_15697));
(_dy_chalk_15699 = (-1.0 / (_x_chalk_15697 * _x_chalk_15697)));
(_d_chalk_15696 = (abs((_p_chalk_15693.y - _y_chalk_15698)) / sqrt((1.0 + (_dy_chalk_15699 * _dy_chalk_15699)))));
(_p_fbm_15635 = (_p_chalk_15693 * 2.5));
(_fbm_has_returned_15636 = false);
(_f_fbm_15639 = 0.0);
(_s_fbm_15640 = 0.5);
{ for((_i_fbm_15641 = 0); (_i_fbm_15641 < 6); (_i_fbm_15641++))
{
(_p_noise_15642 = _p_fbm_15635);
(_noise_has_returned_15643 = false);
(_i_noise_15645 = ivec2_ctor(floor(_p_noise_15642)));
(_f_noise_15646 = frac(_p_noise_15642));
(_u_noise_15647 = ((_f_noise_15646 * _f_noise_15646) * (3.0 - (2.0 * _f_noise_15646))));
(_z_grad_15648 = (_i_noise_15645 + int2(0, 0)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s177a = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s177a = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s177b = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s177b = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s177b = _gr_grad_15652);
}
(s177a = s177b);
}
(_grad_return_value_15650 = s177a);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_0_15653 = _grad_return_value_15650);
(_z_grad_15648 = (_i_noise_15645 + int2(1, 0)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s177c = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s177c = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s177d = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s177d = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s177d = _gr_grad_15652);
}
(s177c = s177d);
}
(_grad_return_value_15650 = s177c);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_1_15654 = _grad_return_value_15650);
(_z_grad_15648 = (_i_noise_15645 + int2(0, 1)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s177e = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s177e = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s177f = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s177f = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s177f = _gr_grad_15652);
}
(s177e = s177f);
}
(_grad_return_value_15650 = s177e);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_2_15655 = _grad_return_value_15650);
(_z_grad_15648 = (_i_noise_15645 + int2(1, 1)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s1780 = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s1780 = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s1781 = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s1781 = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s1781 = _gr_grad_15652);
}
(s1780 = s1781);
}
(_grad_return_value_15650 = s1780);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_3_15656 = _grad_return_value_15650);
(_noise_return_value_15644 = lerp(lerp(dot(_grad_return_value_inlined_0_15653, (_f_noise_15646 - float2(0.0, 0.0))), dot(_grad_return_value_inlined_1_15654, (_f_noise_15646 - float2(1.0, 0.0))), _u_noise_15647.x), lerp(dot(_grad_return_value_inlined_2_15655, (_f_noise_15646 - float2(0.0, 1.0))), dot(_grad_return_value_inlined_3_15656, (_f_noise_15646 - float2(1.0, 1.0))), _u_noise_15647.x), _u_noise_15647.y));
(_noise_has_returned_15643 = true);
(_noise_return_value_inlined_4_15657 = _noise_return_value_15644);
(_f_fbm_15639 += (_s_fbm_15640 * _noise_return_value_inlined_4_15657));
(_p_fbm_15635 = mul(transpose(float2x2(1.6, 1.2, -1.2, 1.6)), _p_fbm_15635));
(_s_fbm_15640 = (0.5 * _s_fbm_15640));
}
}
(_fbm_return_value_15637 = _f_fbm_15639);
(_fbm_has_returned_15636 = true);
(_fbm_return_value_inlined_15_15700 = _fbm_return_value_15637);
(_d_chalk_15696 += (0.029999999 * _fbm_return_value_inlined_15_15700));
(_col_chalk_15686 = lerp(_col_chalk_15686, float3(0.97882354, 0.85647064, 0.48941177), (_gf_chalk_15694 * (1.0 - smoothstep(0.0099999998, 0.029999999, _d_chalk_15696)))));
}
(_p_sdLine_15670 = _p_chalk_15693);
(_a_sdLine_15671 = float2(0.0, -10.0));
(_b_sdLine_15672 = float2(0.0, 3.4000001));
(_sdLine_has_returned_15673 = false);
(_pa_sdLine_15675 = (_p_sdLine_15670 - _a_sdLine_15671));
(_ba_sdLine_15676 = (_b_sdLine_15672 - _a_sdLine_15671));
(_h_sdLine_15677 = clamp((dot(_pa_sdLine_15675, _ba_sdLine_15676) / dot(_ba_sdLine_15676, _ba_sdLine_15676)), 0.0, 1.0));
(_sdLine_return_value_15674 = length((_pa_sdLine_15675 - (_h_sdLine_15677 * _ba_sdLine_15676))));
(_sdLine_has_returned_15673 = true);
(_sdLine_return_value_inlined_16_15701 = _sdLine_return_value_15674);
(_d_chalk_15696 = _sdLine_return_value_inlined_16_15701);
(_p_sdLine_15670 = _p_chalk_15693);
(_a_sdLine_15671 = float2(-10.0, 0.0));
(_b_sdLine_15672 = float2(5.1999998, 0.0));
(_sdLine_has_returned_15673 = false);
(_pa_sdLine_15675 = (_p_sdLine_15670 - _a_sdLine_15671));
(_ba_sdLine_15676 = (_b_sdLine_15672 - _a_sdLine_15671));
(_h_sdLine_15677 = clamp((dot(_pa_sdLine_15675, _ba_sdLine_15676) / dot(_ba_sdLine_15676, _ba_sdLine_15676)), 0.0, 1.0));
(_sdLine_return_value_15674 = length((_pa_sdLine_15675 - (_h_sdLine_15677 * _ba_sdLine_15676))));
(_sdLine_has_returned_15673 = true);
(_sdLine_return_value_inlined_17_15702 = _sdLine_return_value_15674);
(_d_chalk_15696 = min(_d_chalk_15696, _sdLine_return_value_inlined_17_15702));
(_p_sdLine_15670 = vec2_ctor(abs(_p_chalk_15693.x), _p_chalk_15693.y));
(_a_sdLine_15671 = float2(0.07, 3.2));
(_b_sdLine_15672 = float2(0.0, 3.4000001));
(_sdLine_has_returned_15673 = false);
(_pa_sdLine_15675 = (_p_sdLine_15670 - _a_sdLine_15671));
(_ba_sdLine_15676 = (_b_sdLine_15672 - _a_sdLine_15671));
(_h_sdLine_15677 = clamp((dot(_pa_sdLine_15675, _ba_sdLine_15676) / dot(_ba_sdLine_15676, _ba_sdLine_15676)), 0.0, 1.0));
(_sdLine_return_value_15674 = length((_pa_sdLine_15675 - (_h_sdLine_15677 * _ba_sdLine_15676))));
(_sdLine_has_returned_15673 = true);
(_sdLine_return_value_inlined_18_15703 = _sdLine_return_value_15674);
(_d_chalk_15696 = min(_d_chalk_15696, _sdLine_return_value_inlined_18_15703));
(_p_sdLine_15670 = vec2_ctor(_p_chalk_15693.x, abs(_p_chalk_15693.y)));
(_a_sdLine_15671 = float2(5.0, 0.07));
(_b_sdLine_15672 = float2(5.1999998, 0.0));
(_sdLine_has_returned_15673 = false);
(_pa_sdLine_15675 = (_p_sdLine_15670 - _a_sdLine_15671));
(_ba_sdLine_15676 = (_b_sdLine_15672 - _a_sdLine_15671));
(_h_sdLine_15677 = clamp((dot(_pa_sdLine_15675, _ba_sdLine_15676) / dot(_ba_sdLine_15676, _ba_sdLine_15676)), 0.0, 1.0));
(_sdLine_return_value_15674 = length((_pa_sdLine_15675 - (_h_sdLine_15677 * _ba_sdLine_15676))));
(_sdLine_has_returned_15673 = true);
(_sdLine_return_value_inlined_19_15704 = _sdLine_return_value_15674);
(_d_chalk_15696 = min(_d_chalk_15696, _sdLine_return_value_inlined_19_15704));
(_p_fbm_15635 = (_p_chalk_15693 * 2.5));
(_fbm_has_returned_15636 = false);
(_f_fbm_15639 = 0.0);
(_s_fbm_15640 = 0.5);
{ for((_i_fbm_15641 = 0); (_i_fbm_15641 < 6); (_i_fbm_15641++))
{
(_p_noise_15642 = _p_fbm_15635);
(_noise_has_returned_15643 = false);
(_i_noise_15645 = ivec2_ctor(floor(_p_noise_15642)));
(_f_noise_15646 = frac(_p_noise_15642));
(_u_noise_15647 = ((_f_noise_15646 * _f_noise_15646) * (3.0 - (2.0 * _f_noise_15646))));
(_z_grad_15648 = (_i_noise_15645 + int2(0, 0)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s1782 = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s1782 = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s1783 = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s1783 = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s1783 = _gr_grad_15652);
}
(s1782 = s1783);
}
(_grad_return_value_15650 = s1782);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_0_15653 = _grad_return_value_15650);
(_z_grad_15648 = (_i_noise_15645 + int2(1, 0)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s1784 = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s1784 = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s1785 = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s1785 = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s1785 = _gr_grad_15652);
}
(s1784 = s1785);
}
(_grad_return_value_15650 = s1784);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_1_15654 = _grad_return_value_15650);
(_z_grad_15648 = (_i_noise_15645 + int2(0, 1)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s1786 = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s1786 = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s1787 = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s1787 = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s1787 = _gr_grad_15652);
}
(s1786 = s1787);
}
(_grad_return_value_15650 = s1786);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_2_15655 = _grad_return_value_15650);
(_z_grad_15648 = (_i_noise_15645 + int2(1, 1)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s1788 = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s1788 = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s1789 = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s1789 = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s1789 = _gr_grad_15652);
}
(s1788 = s1789);
}
(_grad_return_value_15650 = s1788);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_3_15656 = _grad_return_value_15650);
(_noise_return_value_15644 = lerp(lerp(dot(_grad_return_value_inlined_0_15653, (_f_noise_15646 - float2(0.0, 0.0))), dot(_grad_return_value_inlined_1_15654, (_f_noise_15646 - float2(1.0, 0.0))), _u_noise_15647.x), lerp(dot(_grad_return_value_inlined_2_15655, (_f_noise_15646 - float2(0.0, 1.0))), dot(_grad_return_value_inlined_3_15656, (_f_noise_15646 - float2(1.0, 1.0))), _u_noise_15647.x), _u_noise_15647.y));
(_noise_has_returned_15643 = true);
(_noise_return_value_inlined_4_15657 = _noise_return_value_15644);
(_f_fbm_15639 += (_s_fbm_15640 * _noise_return_value_inlined_4_15657));
(_p_fbm_15635 = mul(transpose(float2x2(1.6, 1.2, -1.2, 1.6)), _p_fbm_15635));
(_s_fbm_15640 = (0.5 * _s_fbm_15640));
}
}
(_fbm_return_value_15637 = _f_fbm_15639);
(_fbm_has_returned_15636 = true);
(_fbm_return_value_inlined_20_15705 = _fbm_return_value_15637);
(_d_chalk_15696 += (0.02 * _fbm_return_value_inlined_20_15705));
(_col_chalk_15686 = lerp(_col_chalk_15686, float3(0.62117648, 0.46588236, 0.33129412), (_gf_chalk_15694 * (1.0 - smoothstep(0.0099999998, 0.029999999, _d_chalk_15696)))));
(_p_sdLine_15670 = _p_chalk_15693);
(_a_sdLine_15671 = _p1_chalk_15690);
(_b_sdLine_15672 = _p2_chalk_15691);
(_sdLine_has_returned_15673 = false);
(_pa_sdLine_15675 = (_p_sdLine_15670 - _a_sdLine_15671));
(_ba_sdLine_15676 = (_b_sdLine_15672 - _a_sdLine_15671));
(_h_sdLine_15677 = clamp((dot(_pa_sdLine_15675, _ba_sdLine_15676) / dot(_ba_sdLine_15676, _ba_sdLine_15676)), 0.0, 1.0));
(_sdLine_return_value_15674 = length((_pa_sdLine_15675 - (_h_sdLine_15677 * _ba_sdLine_15676))));
(_sdLine_has_returned_15673 = true);
(_sdLine_return_value_inlined_21_15706 = _sdLine_return_value_15674);
(_d_chalk_15696 = _sdLine_return_value_inlined_21_15706);
(_p_sdLine_15670 = _p_chalk_15693);
(_a_sdLine_15671 = _p2_chalk_15691);
(_b_sdLine_15672 = _p3_chalk_15692);
(_sdLine_has_returned_15673 = false);
(_pa_sdLine_15675 = (_p_sdLine_15670 - _a_sdLine_15671));
(_ba_sdLine_15676 = (_b_sdLine_15672 - _a_sdLine_15671));
(_h_sdLine_15677 = clamp((dot(_pa_sdLine_15675, _ba_sdLine_15676) / dot(_ba_sdLine_15676, _ba_sdLine_15676)), 0.0, 1.0));
(_sdLine_return_value_15674 = length((_pa_sdLine_15675 - (_h_sdLine_15677 * _ba_sdLine_15676))));
(_sdLine_has_returned_15673 = true);
(_sdLine_return_value_inlined_22_15707 = _sdLine_return_value_15674);
(_d_chalk_15696 = min(_d_chalk_15696, _sdLine_return_value_inlined_22_15707));
(_p_sdLine_15670 = _p_chalk_15693);
(_a_sdLine_15671 = _p3_chalk_15692);
(_b_sdLine_15672 = _p1_chalk_15690);
(_sdLine_has_returned_15673 = false);
(_pa_sdLine_15675 = (_p_sdLine_15670 - _a_sdLine_15671));
(_ba_sdLine_15676 = (_b_sdLine_15672 - _a_sdLine_15671));
(_h_sdLine_15677 = clamp((dot(_pa_sdLine_15675, _ba_sdLine_15676) / dot(_ba_sdLine_15676, _ba_sdLine_15676)), 0.0, 1.0));
(_sdLine_return_value_15674 = length((_pa_sdLine_15675 - (_h_sdLine_15677 * _ba_sdLine_15676))));
(_sdLine_has_returned_15673 = true);
(_sdLine_return_value_inlined_23_15708 = _sdLine_return_value_15674);
(_d_chalk_15696 = min(_d_chalk_15696, _sdLine_return_value_inlined_23_15708));
(_p_fbm_15635 = (_p_chalk_15693 * 2.5));
(_fbm_has_returned_15636 = false);
(_f_fbm_15639 = 0.0);
(_s_fbm_15640 = 0.5);
{ for((_i_fbm_15641 = 0); (_i_fbm_15641 < 6); (_i_fbm_15641++))
{
(_p_noise_15642 = _p_fbm_15635);
(_noise_has_returned_15643 = false);
(_i_noise_15645 = ivec2_ctor(floor(_p_noise_15642)));
(_f_noise_15646 = frac(_p_noise_15642));
(_u_noise_15647 = ((_f_noise_15646 * _f_noise_15646) * (3.0 - (2.0 * _f_noise_15646))));
(_z_grad_15648 = (_i_noise_15645 + int2(0, 0)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s178a = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s178a = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s178b = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s178b = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s178b = _gr_grad_15652);
}
(s178a = s178b);
}
(_grad_return_value_15650 = s178a);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_0_15653 = _grad_return_value_15650);
(_z_grad_15648 = (_i_noise_15645 + int2(1, 0)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s178c = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s178c = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s178d = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s178d = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s178d = _gr_grad_15652);
}
(s178c = s178d);
}
(_grad_return_value_15650 = s178c);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_1_15654 = _grad_return_value_15650);
(_z_grad_15648 = (_i_noise_15645 + int2(0, 1)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s178e = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s178e = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s178f = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s178f = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s178f = _gr_grad_15652);
}
(s178e = s178f);
}
(_grad_return_value_15650 = s178e);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_2_15655 = _grad_return_value_15650);
(_z_grad_15648 = (_i_noise_15645 + int2(1, 1)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s1790 = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s1790 = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s1791 = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s1791 = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s1791 = _gr_grad_15652);
}
(s1790 = s1791);
}
(_grad_return_value_15650 = s1790);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_3_15656 = _grad_return_value_15650);
(_noise_return_value_15644 = lerp(lerp(dot(_grad_return_value_inlined_0_15653, (_f_noise_15646 - float2(0.0, 0.0))), dot(_grad_return_value_inlined_1_15654, (_f_noise_15646 - float2(1.0, 0.0))), _u_noise_15647.x), lerp(dot(_grad_return_value_inlined_2_15655, (_f_noise_15646 - float2(0.0, 1.0))), dot(_grad_return_value_inlined_3_15656, (_f_noise_15646 - float2(1.0, 1.0))), _u_noise_15647.x), _u_noise_15647.y));
(_noise_has_returned_15643 = true);
(_noise_return_value_inlined_4_15657 = _noise_return_value_15644);
(_f_fbm_15639 += (_s_fbm_15640 * _noise_return_value_inlined_4_15657));
(_p_fbm_15635 = mul(transpose(float2x2(1.6, 1.2, -1.2, 1.6)), _p_fbm_15635));
(_s_fbm_15640 = (0.5 * _s_fbm_15640));
}
}
(_fbm_return_value_15637 = _f_fbm_15639);
(_fbm_has_returned_15636 = true);
(_fbm_return_value_inlined_24_15709 = _fbm_return_value_15637);
(_d_chalk_15696 += (0.029999999 * _fbm_return_value_inlined_24_15709));
(_col_chalk_15686 = lerp(_col_chalk_15686, float3(0.72470587, 0.98823535, 0.42823532), (_gf_chalk_15694 * (1.0 - smoothstep(0.0099999998, 0.029999999, _d_chalk_15696)))));
(_c_altitude_15710 = _p1_chalk_15690);
(_a_altitude_15711 = _p2_chalk_15691);
(_b_altitude_15712 = _p3_chalk_15692);
(_altitude_has_returned_15713 = false);
(_w_altitude_15715 = (_b_altitude_15712 - _a_altitude_15711));
(_altitude_return_value_15714 = (_a_altitude_15711 + ((_w_altitude_15715 * dot((_c_altitude_15710 - _a_altitude_15711), _w_altitude_15715)) / dot(_w_altitude_15715, _w_altitude_15715))));
(_altitude_has_returned_15713 = true);
(_altitude_return_value_inlined_25_15716 = _altitude_return_value_15714);
(_q1_chalk_15717 = _altitude_return_value_inlined_25_15716);
(_c_altitude_15710 = _p2_chalk_15691);
(_a_altitude_15711 = _p3_chalk_15692);
(_b_altitude_15712 = _p1_chalk_15690);
(_altitude_has_returned_15713 = false);
(_w_altitude_15715 = (_b_altitude_15712 - _a_altitude_15711));
(_altitude_return_value_15714 = (_a_altitude_15711 + ((_w_altitude_15715 * dot((_c_altitude_15710 - _a_altitude_15711), _w_altitude_15715)) / dot(_w_altitude_15715, _w_altitude_15715))));
(_altitude_has_returned_15713 = true);
(_altitude_return_value_inlined_26_15718 = _altitude_return_value_15714);
(_q2_chalk_15719 = _altitude_return_value_inlined_26_15718);
(_c_altitude_15710 = _p3_chalk_15692);
(_a_altitude_15711 = _p1_chalk_15690);
(_b_altitude_15712 = _p2_chalk_15691);
(_altitude_has_returned_15713 = false);
(_w_altitude_15715 = (_b_altitude_15712 - _a_altitude_15711));
(_altitude_return_value_15714 = (_a_altitude_15711 + ((_w_altitude_15715 * dot((_c_altitude_15710 - _a_altitude_15711), _w_altitude_15715)) / dot(_w_altitude_15715, _w_altitude_15715))));
(_altitude_has_returned_15713 = true);
(_altitude_return_value_inlined_27_15720 = _altitude_return_value_15714);
(_q3_chalk_15721 = _altitude_return_value_inlined_27_15720);
(_p_sdLine_15670 = _p_chalk_15693);
(_a_sdLine_15671 = _p1_chalk_15690);
(_b_sdLine_15672 = _q1_chalk_15717);
(_sdLine_has_returned_15673 = false);
(_pa_sdLine_15675 = (_p_sdLine_15670 - _a_sdLine_15671));
(_ba_sdLine_15676 = (_b_sdLine_15672 - _a_sdLine_15671));
(_h_sdLine_15677 = clamp((dot(_pa_sdLine_15675, _ba_sdLine_15676) / dot(_ba_sdLine_15676, _ba_sdLine_15676)), 0.0, 1.0));
(_sdLine_return_value_15674 = length((_pa_sdLine_15675 - (_h_sdLine_15677 * _ba_sdLine_15676))));
(_sdLine_has_returned_15673 = true);
(_sdLine_return_value_inlined_28_15722 = _sdLine_return_value_15674);
(_d_chalk_15696 = _sdLine_return_value_inlined_28_15722);
(_p_sdLine_15670 = _p_chalk_15693);
(_a_sdLine_15671 = _p2_chalk_15691);
(_b_sdLine_15672 = _q2_chalk_15719);
(_sdLine_has_returned_15673 = false);
(_pa_sdLine_15675 = (_p_sdLine_15670 - _a_sdLine_15671));
(_ba_sdLine_15676 = (_b_sdLine_15672 - _a_sdLine_15671));
(_h_sdLine_15677 = clamp((dot(_pa_sdLine_15675, _ba_sdLine_15676) / dot(_ba_sdLine_15676, _ba_sdLine_15676)), 0.0, 1.0));
(_sdLine_return_value_15674 = length((_pa_sdLine_15675 - (_h_sdLine_15677 * _ba_sdLine_15676))));
(_sdLine_has_returned_15673 = true);
(_sdLine_return_value_inlined_29_15723 = _sdLine_return_value_15674);
(_d_chalk_15696 = min(_d_chalk_15696, _sdLine_return_value_inlined_29_15723));
(_p_sdLine_15670 = _p_chalk_15693);
(_a_sdLine_15671 = _p3_chalk_15692);
(_b_sdLine_15672 = _q3_chalk_15721);
(_sdLine_has_returned_15673 = false);
(_pa_sdLine_15675 = (_p_sdLine_15670 - _a_sdLine_15671));
(_ba_sdLine_15676 = (_b_sdLine_15672 - _a_sdLine_15671));
(_h_sdLine_15677 = clamp((dot(_pa_sdLine_15675, _ba_sdLine_15676) / dot(_ba_sdLine_15676, _ba_sdLine_15676)), 0.0, 1.0));
(_sdLine_return_value_15674 = length((_pa_sdLine_15675 - (_h_sdLine_15677 * _ba_sdLine_15676))));
(_sdLine_has_returned_15673 = true);
(_sdLine_return_value_inlined_30_15724 = _sdLine_return_value_15674);
(_d_chalk_15696 = min(_d_chalk_15696, _sdLine_return_value_inlined_30_15724));
(_o1_chalk_15725 = (normalize((_p1_chalk_15690 - _q1_chalk_15717)) * 0.18000001));
(_o2_chalk_15726 = (normalize((_p2_chalk_15691 - _q2_chalk_15719)) * 0.18000001));
(_o3_chalk_15727 = (normalize((_p3_chalk_15692 - _q3_chalk_15721)) * 0.18000001));
(_p_sdLine_15670 = _p_chalk_15693);
(_a_sdLine_15671 = (_q1_chalk_15717 + vec2_ctor((_o1_chalk_15725.x + _o1_chalk_15725.y), (_o1_chalk_15725.y - _o1_chalk_15725.x))));
(_b_sdLine_15672 = (_q1_chalk_15717 + vec2_ctor(_o1_chalk_15725.x, _o1_chalk_15725.y)));
(_sdLine_has_returned_15673 = false);
(_pa_sdLine_15675 = (_p_sdLine_15670 - _a_sdLine_15671));
(_ba_sdLine_15676 = (_b_sdLine_15672 - _a_sdLine_15671));
(_h_sdLine_15677 = clamp((dot(_pa_sdLine_15675, _ba_sdLine_15676) / dot(_ba_sdLine_15676, _ba_sdLine_15676)), 0.0, 1.0));
(_sdLine_return_value_15674 = length((_pa_sdLine_15675 - (_h_sdLine_15677 * _ba_sdLine_15676))));
(_sdLine_has_returned_15673 = true);
(_sdLine_return_value_inlined_31_15728 = _sdLine_return_value_15674);
(_d_chalk_15696 = min(_d_chalk_15696, _sdLine_return_value_inlined_31_15728));
(_p_sdLine_15670 = _p_chalk_15693);
(_a_sdLine_15671 = (_q1_chalk_15717 + vec2_ctor((_o1_chalk_15725.x + _o1_chalk_15725.y), (_o1_chalk_15725.y - _o1_chalk_15725.x))));
(_b_sdLine_15672 = (_q1_chalk_15717 + vec2_ctor(_o1_chalk_15725.y, (-_o1_chalk_15725.x))));
(_sdLine_has_returned_15673 = false);
(_pa_sdLine_15675 = (_p_sdLine_15670 - _a_sdLine_15671));
(_ba_sdLine_15676 = (_b_sdLine_15672 - _a_sdLine_15671));
(_h_sdLine_15677 = clamp((dot(_pa_sdLine_15675, _ba_sdLine_15676) / dot(_ba_sdLine_15676, _ba_sdLine_15676)), 0.0, 1.0));
(_sdLine_return_value_15674 = length((_pa_sdLine_15675 - (_h_sdLine_15677 * _ba_sdLine_15676))));
(_sdLine_has_returned_15673 = true);
(_sdLine_return_value_inlined_32_15729 = _sdLine_return_value_15674);
(_d_chalk_15696 = min(_d_chalk_15696, _sdLine_return_value_inlined_32_15729));
(_p_sdLine_15670 = _p_chalk_15693);
(_a_sdLine_15671 = (_q2_chalk_15719 + vec2_ctor((_o2_chalk_15726.x + _o2_chalk_15726.y), (_o2_chalk_15726.y - _o2_chalk_15726.x))));
(_b_sdLine_15672 = (_q2_chalk_15719 + vec2_ctor(_o2_chalk_15726.x, _o2_chalk_15726.y)));
(_sdLine_has_returned_15673 = false);
(_pa_sdLine_15675 = (_p_sdLine_15670 - _a_sdLine_15671));
(_ba_sdLine_15676 = (_b_sdLine_15672 - _a_sdLine_15671));
(_h_sdLine_15677 = clamp((dot(_pa_sdLine_15675, _ba_sdLine_15676) / dot(_ba_sdLine_15676, _ba_sdLine_15676)), 0.0, 1.0));
(_sdLine_return_value_15674 = length((_pa_sdLine_15675 - (_h_sdLine_15677 * _ba_sdLine_15676))));
(_sdLine_has_returned_15673 = true);
(_sdLine_return_value_inlined_33_15730 = _sdLine_return_value_15674);
(_d_chalk_15696 = min(_d_chalk_15696, _sdLine_return_value_inlined_33_15730));
(_p_sdLine_15670 = _p_chalk_15693);
(_a_sdLine_15671 = (_q2_chalk_15719 + vec2_ctor((_o2_chalk_15726.x + _o2_chalk_15726.y), (_o2_chalk_15726.y - _o2_chalk_15726.x))));
(_b_sdLine_15672 = (_q2_chalk_15719 + vec2_ctor(_o2_chalk_15726.y, (-_o2_chalk_15726.x))));
(_sdLine_has_returned_15673 = false);
(_pa_sdLine_15675 = (_p_sdLine_15670 - _a_sdLine_15671));
(_ba_sdLine_15676 = (_b_sdLine_15672 - _a_sdLine_15671));
(_h_sdLine_15677 = clamp((dot(_pa_sdLine_15675, _ba_sdLine_15676) / dot(_ba_sdLine_15676, _ba_sdLine_15676)), 0.0, 1.0));
(_sdLine_return_value_15674 = length((_pa_sdLine_15675 - (_h_sdLine_15677 * _ba_sdLine_15676))));
(_sdLine_has_returned_15673 = true);
(_sdLine_return_value_inlined_34_15731 = _sdLine_return_value_15674);
(_d_chalk_15696 = min(_d_chalk_15696, _sdLine_return_value_inlined_34_15731));
(_p_sdLine_15670 = _p_chalk_15693);
(_a_sdLine_15671 = (_q3_chalk_15721 + vec2_ctor((_o3_chalk_15727.x + _o3_chalk_15727.y), (_o3_chalk_15727.y - _o3_chalk_15727.x))));
(_b_sdLine_15672 = (_q3_chalk_15721 + vec2_ctor(_o3_chalk_15727.x, _o3_chalk_15727.y)));
(_sdLine_has_returned_15673 = false);
(_pa_sdLine_15675 = (_p_sdLine_15670 - _a_sdLine_15671));
(_ba_sdLine_15676 = (_b_sdLine_15672 - _a_sdLine_15671));
(_h_sdLine_15677 = clamp((dot(_pa_sdLine_15675, _ba_sdLine_15676) / dot(_ba_sdLine_15676, _ba_sdLine_15676)), 0.0, 1.0));
(_sdLine_return_value_15674 = length((_pa_sdLine_15675 - (_h_sdLine_15677 * _ba_sdLine_15676))));
(_sdLine_has_returned_15673 = true);
(_sdLine_return_value_inlined_35_15732 = _sdLine_return_value_15674);
(_d_chalk_15696 = min(_d_chalk_15696, _sdLine_return_value_inlined_35_15732));
(_p_sdLine_15670 = _p_chalk_15693);
(_a_sdLine_15671 = (_q3_chalk_15721 + vec2_ctor((_o3_chalk_15727.x + _o3_chalk_15727.y), (_o3_chalk_15727.y - _o3_chalk_15727.x))));
(_b_sdLine_15672 = (_q3_chalk_15721 + vec2_ctor(_o3_chalk_15727.y, (-_o3_chalk_15727.x))));
(_sdLine_has_returned_15673 = false);
(_pa_sdLine_15675 = (_p_sdLine_15670 - _a_sdLine_15671));
(_ba_sdLine_15676 = (_b_sdLine_15672 - _a_sdLine_15671));
(_h_sdLine_15677 = clamp((dot(_pa_sdLine_15675, _ba_sdLine_15676) / dot(_ba_sdLine_15676, _ba_sdLine_15676)), 0.0, 1.0));
(_sdLine_return_value_15674 = length((_pa_sdLine_15675 - (_h_sdLine_15677 * _ba_sdLine_15676))));
(_sdLine_has_returned_15673 = true);
(_sdLine_return_value_inlined_36_15733 = _sdLine_return_value_15674);
(_d_chalk_15696 = min(_d_chalk_15696, _sdLine_return_value_inlined_36_15733));
(_p_fbm_15635 = (_p_chalk_15693 * 2.5));
(_fbm_has_returned_15636 = false);
(_f_fbm_15639 = 0.0);
(_s_fbm_15640 = 0.5);
{ for((_i_fbm_15641 = 0); (_i_fbm_15641 < 6); (_i_fbm_15641++))
{
(_p_noise_15642 = _p_fbm_15635);
(_noise_has_returned_15643 = false);
(_i_noise_15645 = ivec2_ctor(floor(_p_noise_15642)));
(_f_noise_15646 = frac(_p_noise_15642));
(_u_noise_15647 = ((_f_noise_15646 * _f_noise_15646) * (3.0 - (2.0 * _f_noise_15646))));
(_z_grad_15648 = (_i_noise_15645 + int2(0, 0)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s1792 = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s1792 = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s1793 = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s1793 = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s1793 = _gr_grad_15652);
}
(s1792 = s1793);
}
(_grad_return_value_15650 = s1792);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_0_15653 = _grad_return_value_15650);
(_z_grad_15648 = (_i_noise_15645 + int2(1, 0)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s1794 = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s1794 = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s1795 = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s1795 = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s1795 = _gr_grad_15652);
}
(s1794 = s1795);
}
(_grad_return_value_15650 = s1794);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_1_15654 = _grad_return_value_15650);
(_z_grad_15648 = (_i_noise_15645 + int2(0, 1)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s1796 = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s1796 = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s1797 = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s1797 = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s1797 = _gr_grad_15652);
}
(s1796 = s1797);
}
(_grad_return_value_15650 = s1796);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_2_15655 = _grad_return_value_15650);
(_z_grad_15648 = (_i_noise_15645 + int2(1, 1)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s1798 = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s1798 = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s1799 = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s1799 = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s1799 = _gr_grad_15652);
}
(s1798 = s1799);
}
(_grad_return_value_15650 = s1798);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_3_15656 = _grad_return_value_15650);
(_noise_return_value_15644 = lerp(lerp(dot(_grad_return_value_inlined_0_15653, (_f_noise_15646 - float2(0.0, 0.0))), dot(_grad_return_value_inlined_1_15654, (_f_noise_15646 - float2(1.0, 0.0))), _u_noise_15647.x), lerp(dot(_grad_return_value_inlined_2_15655, (_f_noise_15646 - float2(0.0, 1.0))), dot(_grad_return_value_inlined_3_15656, (_f_noise_15646 - float2(1.0, 1.0))), _u_noise_15647.x), _u_noise_15647.y));
(_noise_has_returned_15643 = true);
(_noise_return_value_inlined_4_15657 = _noise_return_value_15644);
(_f_fbm_15639 += (_s_fbm_15640 * _noise_return_value_inlined_4_15657));
(_p_fbm_15635 = mul(transpose(float2x2(1.6, 1.2, -1.2, 1.6)), _p_fbm_15635));
(_s_fbm_15640 = (0.5 * _s_fbm_15640));
}
}
(_fbm_return_value_15637 = _f_fbm_15639);
(_fbm_has_returned_15636 = true);
(_fbm_return_value_inlined_37_15734 = _fbm_return_value_15637);
(_d_chalk_15696 += (0.029999999 * _fbm_return_value_inlined_37_15734));
(_col_chalk_15686 = lerp(_col_chalk_15686, float3(0.41176471, 0.58823532, 0.41176471), (_gf_chalk_15694 * (1.0 - smoothstep(0.0099999998, 0.029999999, _d_chalk_15696)))));
(_a1_intersect_15735 = _p1_chalk_15690);
(_b1_intersect_15736 = _q1_chalk_15717);
(_a2_intersect_15737 = _p2_chalk_15691);
(_b2_intersect_15738 = _q2_chalk_15719);
(_intersect_has_returned_15739 = false);
(_a_cro_15741 = (_a1_intersect_15735 - _a2_intersect_15737));
(_b_cro_15742 = (_b1_intersect_15736 - _a1_intersect_15735));
(_cro_has_returned_15743 = false);
(_cro_return_value_15744 = ((_a_cro_15741.x * _b_cro_15742.y) - (_a_cro_15741.y * _b_cro_15742.x)));
(_cro_has_returned_15743 = true);
(_cro_return_value_inlined_5_15745 = _cro_return_value_15744);
(_a_cro_15741 = (_b2_intersect_15738 - _a2_intersect_15737));
(_b_cro_15742 = (_b1_intersect_15736 - _a1_intersect_15735));
(_cro_has_returned_15743 = false);
(_cro_return_value_15744 = ((_a_cro_15741.x * _b_cro_15742.y) - (_a_cro_15741.y * _b_cro_15742.x)));
(_cro_has_returned_15743 = true);
(_cro_return_value_inlined_6_15746 = _cro_return_value_15744);
(_h_intersect_15747 = (_cro_return_value_inlined_5_15745 / _cro_return_value_inlined_6_15746));
(_intersect_return_value_15740 = (_a2_intersect_15737 + ((_b2_intersect_15738 - _a2_intersect_15737) * _h_intersect_15747)));
(_intersect_has_returned_15739 = true);
(_intersect_return_value_inlined_38_15748 = _intersect_return_value_15740);
(_pc_chalk_15749 = _intersect_return_value_inlined_38_15748);
(_d_chalk_15696 = (length((_p_chalk_15693 - _pc_chalk_15749)) - 0.079999998));
(_p_fbm_15635 = ((_p_chalk_15693 - _pc_chalk_15749) * 8.0));
(_fbm_has_returned_15636 = false);
(_f_fbm_15639 = 0.0);
(_s_fbm_15640 = 0.5);
{ for((_i_fbm_15641 = 0); (_i_fbm_15641 < 6); (_i_fbm_15641++))
{
(_p_noise_15642 = _p_fbm_15635);
(_noise_has_returned_15643 = false);
(_i_noise_15645 = ivec2_ctor(floor(_p_noise_15642)));
(_f_noise_15646 = frac(_p_noise_15642));
(_u_noise_15647 = ((_f_noise_15646 * _f_noise_15646) * (3.0 - (2.0 * _f_noise_15646))));
(_z_grad_15648 = (_i_noise_15645 + int2(0, 0)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s179a = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s179a = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s179b = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s179b = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s179b = _gr_grad_15652);
}
(s179a = s179b);
}
(_grad_return_value_15650 = s179a);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_0_15653 = _grad_return_value_15650);
(_z_grad_15648 = (_i_noise_15645 + int2(1, 0)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s179c = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s179c = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s179d = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s179d = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s179d = _gr_grad_15652);
}
(s179c = s179d);
}
(_grad_return_value_15650 = s179c);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_1_15654 = _grad_return_value_15650);
(_z_grad_15648 = (_i_noise_15645 + int2(0, 1)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s179e = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s179e = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s179f = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s179f = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s179f = _gr_grad_15652);
}
(s179e = s179f);
}
(_grad_return_value_15650 = s179e);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_2_15655 = _grad_return_value_15650);
(_z_grad_15648 = (_i_noise_15645 + int2(1, 1)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s17a0 = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s17a0 = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s17a1 = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s17a1 = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s17a1 = _gr_grad_15652);
}
(s17a0 = s17a1);
}
(_grad_return_value_15650 = s17a0);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_3_15656 = _grad_return_value_15650);
(_noise_return_value_15644 = lerp(lerp(dot(_grad_return_value_inlined_0_15653, (_f_noise_15646 - float2(0.0, 0.0))), dot(_grad_return_value_inlined_1_15654, (_f_noise_15646 - float2(1.0, 0.0))), _u_noise_15647.x), lerp(dot(_grad_return_value_inlined_2_15655, (_f_noise_15646 - float2(0.0, 1.0))), dot(_grad_return_value_inlined_3_15656, (_f_noise_15646 - float2(1.0, 1.0))), _u_noise_15647.x), _u_noise_15647.y));
(_noise_has_returned_15643 = true);
(_noise_return_value_inlined_4_15657 = _noise_return_value_15644);
(_f_fbm_15639 += (_s_fbm_15640 * _noise_return_value_inlined_4_15657));
(_p_fbm_15635 = mul(transpose(float2x2(1.6, 1.2, -1.2, 1.6)), _p_fbm_15635));
(_s_fbm_15640 = (0.5 * _s_fbm_15640));
}
}
(_fbm_return_value_15637 = _f_fbm_15639);
(_fbm_has_returned_15636 = true);
(_fbm_return_value_inlined_39_15750 = _fbm_return_value_15637);
(_d_chalk_15696 += (0.050000001 * _fbm_return_value_inlined_39_15750));
(_col_chalk_15686 = lerp(_col_chalk_15686, float3(0.60392159, 0.86274511, 0.25882354), (1.0 - smoothstep(0.0099999998, 0.029999999, _d_chalk_15696))));
(_d_chalk_15696 = (min(min(length((_p_chalk_15693 - _p1_chalk_15690)), length((_p_chalk_15693 - _p2_chalk_15691))), length((_p_chalk_15693 - _p3_chalk_15692))) - 0.059999999));
(_p_fbm_15635 = (_p_chalk_15693 * 4.0));
(_fbm_has_returned_15636 = false);
(_f_fbm_15639 = 0.0);
(_s_fbm_15640 = 0.5);
{ for((_i_fbm_15641 = 0); (_i_fbm_15641 < 6); (_i_fbm_15641++))
{
(_p_noise_15642 = _p_fbm_15635);
(_noise_has_returned_15643 = false);
(_i_noise_15645 = ivec2_ctor(floor(_p_noise_15642)));
(_f_noise_15646 = frac(_p_noise_15642));
(_u_noise_15647 = ((_f_noise_15646 * _f_noise_15646) * (3.0 - (2.0 * _f_noise_15646))));
(_z_grad_15648 = (_i_noise_15645 + int2(0, 0)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s17a2 = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s17a2 = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s17a3 = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s17a3 = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s17a3 = _gr_grad_15652);
}
(s17a2 = s17a3);
}
(_grad_return_value_15650 = s17a2);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_0_15653 = _grad_return_value_15650);
(_z_grad_15648 = (_i_noise_15645 + int2(1, 0)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s17a4 = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s17a4 = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s17a5 = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s17a5 = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s17a5 = _gr_grad_15652);
}
(s17a4 = s17a5);
}
(_grad_return_value_15650 = s17a4);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_1_15654 = _grad_return_value_15650);
(_z_grad_15648 = (_i_noise_15645 + int2(0, 1)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s17a6 = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s17a6 = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s17a7 = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s17a7 = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s17a7 = _gr_grad_15652);
}
(s17a6 = s17a7);
}
(_grad_return_value_15650 = s17a6);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_2_15655 = _grad_return_value_15650);
(_z_grad_15648 = (_i_noise_15645 + int2(1, 1)));
(_grad_has_returned_15649 = false);
(_n_grad_15651 = ((_z_grad_15648.x * 1) + (_z_grad_15648.y * 113)));
(_n_grad_15651 = ((_n_grad_15651 << 13) ^ _n_grad_15651));
(_n_grad_15651 = (((_n_grad_15651 * (((_n_grad_15651 * _n_grad_15651) * 15731) + 789221)) + 1376312589) >> 16));
(_n_grad_15651 &= 7);
(_gr_grad_15652 = ((vec2_ctor_int_int((_n_grad_15651 & 1), (_n_grad_15651 >> 1)) * 2.0) - 1.0));
float2 s17a8 = {0, 0};
if ((_n_grad_15651 >= 6))
{
(s17a8 = vec2_ctor(0.0, _gr_grad_15652.x));
}
else
{
float2 s17a9 = {0, 0};
if ((_n_grad_15651 >= 4))
{
(s17a9 = vec2_ctor(_gr_grad_15652.x, 0.0));
}
else
{
(s17a9 = _gr_grad_15652);
}
(s17a8 = s17a9);
}
(_grad_return_value_15650 = s17a8);
(_grad_has_returned_15649 = true);
(_grad_return_value_inlined_3_15656 = _grad_return_value_15650);
(_noise_return_value_15644 = lerp(lerp(dot(_grad_return_value_inlined_0_15653, (_f_noise_15646 - float2(0.0, 0.0))), dot(_grad_return_value_inlined_1_15654, (_f_noise_15646 - float2(1.0, 0.0))), _u_noise_15647.x), lerp(dot(_grad_return_value_inlined_2_15655, (_f_noise_15646 - float2(0.0, 1.0))), dot(_grad_return_value_inlined_3_15656, (_f_noise_15646 - float2(1.0, 1.0))), _u_noise_15647.x), _u_noise_15647.y));
(_noise_has_returned_15643 = true);
(_noise_return_value_inlined_4_15657 = _noise_return_value_15644);
(_f_fbm_15639 += (_s_fbm_15640 * _noise_return_value_inlined_4_15657));
(_p_fbm_15635 = mul(transpose(float2x2(1.6, 1.2, -1.2, 1.6)), _p_fbm_15635));
(_s_fbm_15640 = (0.5 * _s_fbm_15640));
}
}
(_fbm_return_value_15637 = _f_fbm_15639);
(_fbm_has_returned_15636 = true);
(_fbm_return_value_inlined_40_15751 = _fbm_return_value_15637);
(_d_chalk_15696 += (0.07 * _fbm_return_value_inlined_40_15751));
(_col_chalk_15686 = lerp(_col_chalk_15686, float3(1.1, 1.0352942, 0.034509804), (1.0 - smoothstep(0.0099999998, 0.029999999, _d_chalk_15696))));
(_chalk_return_value_15689 = _col_chalk_15686);
(_chalk_has_returned_15688 = true);
(_chalk_return_value_inlined_42_15752 = _chalk_return_value_15689);
(_col_mainImage_15685 = _chalk_return_value_inlined_42_15752);
(_fragColor_1 = vec4_ctor(_col_mainImage_15685, 1.0));
(_fragColor_1.w = 1.0);
(out_fragColor = lerp(_fragColor_2, _fragColor_1, ((1.0 - _fragColor_2.w) + _iTime)));
return generateOutput();
}

// INITIAL HLSL END



// FRAGMENT SHADER END
 