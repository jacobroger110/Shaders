// Author: Jacob Coenen
// Title: FirstShader
//
// Basic fragment shader with periodic changing colors and
//     interactive with the mouse relative to distance from y axis

precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

void main() {
    vec2 pos = gl_FragCoord.xy/u_resolution.xy;
    vec2 mouse_n = u_mouse/u_resolution;
    
    vec4 color = vec4(sin(u_time) / 4. + .75, pos, 
                     mouse_n.x);
    gl_FragColor = color;
}
