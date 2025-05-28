// Title: Animated RGB Mouse Glow
// Author: Jacob Coenen
// Description: A GLSL fragment shader that renders a dynamic RGB gradient
// background with a pulsing red glow centered on the mouse position.
// Made using http://editor.thebookofshaders.com/

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution;
    vec2 mouse = u_mouse/u_resolution;
    
	float dist = distance(st, mouse);
    
	float red = 1. - 20. * dist * (sin(.5 * u_time) / 4. + .2) * st.y * (.25 * sin(u_time) + .75);
    float grn = st.y * (.25 * sin(u_time) + .75);
	float blu = st.x * (.25 * cos(u_time) + .75);
    
	gl_FragColor = vec4(red, grn, blu, 1.);
}