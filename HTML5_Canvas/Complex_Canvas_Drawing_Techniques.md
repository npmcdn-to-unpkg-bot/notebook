# Complex Drawing Techniques

##### Creating Shadows

There are four shadow attributes for the drawing context. All drawing operations on the canvas are affected by the shadow attributes (This includes paths, images, text, etc). Shadows can be colored, offset in both X and Y axes, and have a blur value.

<table>
  <tr>
    <th>Attributes</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`shadowColor`</td>
    <td>The color to use for the shadow. Use any CSS color string. Defaults to transparent black</td>
  </tr>
  <tr>
    <td>`shadowOffsetX`</td>
    <td>Horizontal offest of the shadow (defaults to 0)</td>
  </tr>
  <tr>
    <td>`shadowOffsetY`</td>
    <td>Vertical offest of the shadow (defaults to 0)</td>
  </tr>
  <tr>
    <td>`shadowBlur`</td>
    <td>Blur value of the shadow. Defaults to 0. Must be set to greater than 0 to have an effect.</td>
  </tr>
</table>

Refer to [Shadows](https://github.com/l4nk332/notebook/blob/master/HTML5_Canvas/canvas_snippets.md#shadows) section in *canvas_snippets.md* file for examples.

----

##### Drawing with Patterns

You can use not only colors, but also patterns and gradients as values in any drawing operation that has a fill or stroke property. A pattern is created from an image, video, or another canvas element.

> **Note:** If the image is an animated image, the pattern uses the poster frame. If there is no poster frame, it will default to the first frame of the animation. For video, the current playback frame is used as the pattern.

Patterns can be set to repeat in both directions, repeat in only the X or Y dimensions, or not repeat at all.


<table>
  <tr>
    <th>Function</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`createPattern(srcImg, repeatOption)`</td>
    <td>Create a pattern from the given element. The first argument must be an img, video, or canvas element. The repeat argument can be no-repeat, repeat, repeat-x, or repeat-y</td>
  </tr>
</table>

Refer to [Patterns](https://github.com/l4nk332/notebook/blob/master/HTML5_Canvas/canvas_snippets.md#patterns) section in *canvas_snippets.md* file for examples.


----

##### Drawing with Gradients

There are two kinds of gradients: _linear_ and _radial_. Gradients are created in two steps:

  1. Use the appropriate function to create a gradient of the right type.
  2. Add color stops to the gradient to create color transitions.

After the gradient has been created, it can be used anywhere a stroke or fill style is used.

<table>
  <tr>
    <th>Function</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`createLinearGradient(x0,y0,x1,y1)`</td>
    <td>Defines a linear gradient that starts at point (x0, y0) and travels to (x1, y1)</td>
  </tr>
  <tr>
    <td>`createRadialGradient(x0,y0,x1,y1,r1)`</td>
    <td>Defines a radial gradient that begins with the circle whose center is at (x0, y0) and has radius r0, and travels to the circle whose center is at (x1, y1) and has radius r1</td>
  </tr>
  <tr>
    <td>`addColorStop(position, color)`</td>
    <td>Adds a color stop at the given position and has the given color. position is a floating point number from 0.0 to 1.0</td>
  </tr>
</table>

Refer to [Gradients](https://github.com/l4nk332/notebook/blob/master/HTML5_Canvas/canvas_snippets.md#gradients) section in *canvas_snippets.md* file for examples.


----

##### Using Clipping Paths

Think of clipping paths as masks - they define a region inside of which drawing takes place, and outside of which drawing has no effect. By default, the entire canvas is the current clipping path. Any path can be defined as a clipping path. The _clip()_ function defines the current path as a clipping path.

<table>
  <tr>
    <th>Function</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`clip()`</td>
    <td>Creates a new clipping region by calculating the intersection of the current clipping region and the area described by the current path. The new clipping region replaces the current clipping region.</td>
  </tr>
</table>

Refer to [Clipping Paths](https://github.com/l4nk332/notebook/blob/master/HTML5_Canvas/canvas_snippets.md#clipping-paths) section in *canvas_snippets.md* file for examples.


----

##### Drawing Images and Video

Images and videos can be programmatically drawn onto a canvas. Using the image-drawing functions, you can draw images in a variety of ways:

 - From an _img_ or _video_ element in the page or one that's dynamically loaded.
 - From another canvas element in the document.

The source image can be drawn, resized, or cropped.

**Image Drawing Routines:**

<table>
  <tr>
    <th>Function</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`drawImage(srcImg, dx, dy)`</td>
    <td>Draws the source image onto the destination canvas at the location point (dx, dy)</td>
  </tr>
  <tr>
    <td>`drawImage(srcImg, dx, dy, dw, dh)`</td>
    <td>Draws the source image onto the destination canvas at the location point (dx, dy), but scales the image to fit width dw and height dh</td>
  </tr>
  <tr>
    <td>`drawImage(srcImg, sx, sy, sw, sh, dx, dy, dw, dh)`</td>
    <td>Draws the portion of the source image starting from point (sx, sy) and within the area defined by width sw and height sh onto the destination canvas at the location point (dx, dy), but scales the image to fit width dw and height dh</td>
  </tr>
</table>

> **Note:** With video, canvas will draw the current frame from the video playback. Setting an _interval_ (or even better using  _requestAnimationFrame()_) you can have the canvas draw at the correct frame rate to play the video.

Refer to [Images](https://github.com/l4nk332/notebook/blob/master/HTML5_Canvas/canvas_snippets.md#images) section in *canvas_snippets.md* file for examples.
