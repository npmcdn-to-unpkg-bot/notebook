# Complex Shapes: Arcs and Paths

##### Paths

A path is simply a set of points, connected by lines or curves, and is either open or closed. The context always has one (and only one) current path.

A closed path has an end point this is the same as its start point.

<table>
  <tr>
    <th>Function</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`beginPath()`</td>
    <td>Begins creating a path. To add paths, use one or more path drawing routines.</td>
  </tr>
  <tr>
    <td>`stroke()`</td>
    <td>Strokes the current path</td>
  </tr>
  <tr>
    <td>`fill()`</td>
    <td>Fills current path.</td>
  </tr>
  <tr>
    <td>`closePath()`</td>
    <td>Closes the current path. This will be done automatically by canvas if the start and end points are not the same.</td>
  </tr>
</table>

Refer to [Paths](https://github.com/l4nk332/notebook/blob/master/HTML5_Canvas/canvas_snippets.md#paths) section in *canvas_snippets.md* file for examples.

----

##### Arcs

Arcs are curves that are portions of a circle (360deg arc).

<table>
  <tr>
    <th>Function</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`arc(x, y, sA, eA, aC)`</td>
    <td>Adds an arc to the current path that starts at x, y and has a radius of r, with a starting angle of sA, and an ending angle of eA. The aC argument is true if the arc is counter-clockwise (x and y are center of the circle).</td>
  </tr>
  <tr>
    <td>`arcTo(x1, y1, x2, y2, r)`</td>
    <td>Adds an arc to the current path that starts at the current pen position, has the given control points, and a radius of r.</td>
  </tr>
  <tr>
    <td>`closePath()`</td>
    <td>Closes the current drawing path.</td>
  </tr>
</table>

**Note:** Angles are in radians, not degrees. To convert degrees to radians: `var radians = (Math.PI/180) * degrees;`


Refer to [Arcs](https://github.com/l4nk332/notebook/blob/master/HTML5_Canvas/canvas_snippets.md#arcs) section in *canvas_snippets.md* file for examples.

----

##### Bézier

Bézier curves are drawn starting from a context point to an end point using two control points (like handles w/ pen tool in Illustrator) to determine the curve.

<table>
  <tr>
    <th>Function</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`bezierCurveTo(cx1, cy1, cx2, cy2, end1, end2)`</td>
    <td>Draws a Bézier curve starting at the current pen position using the two controll points defined by cx1, cy1 and cx2, cy2 and ending at the point end1, end2.</td>
  </tr>
</table>

Refer to [Curves](https://github.com/l4nk332/notebook/blob/master/HTML5_Canvas/canvas_snippets.md#curves) section in *canvas_snippets.md* file for examples.

----

##### Quadratic

Quadratic curves use a start point, one control point, and an end point.

<table>
  <tr>
    <th>Function</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`quadraticCurveTo(cx, cy, x, y)`</td>
    <td>Draws a quadratic curve starting at the current pen position using the given control point cx, cy, and ending at the end point defined by x, y.</td>
  </tr>
</table>

Refer to [Curves](https://github.com/l4nk332/notebook/blob/master/HTML5_Canvas/canvas_snippets.md#curves) section in *canvas_snippets.md* file for examples.

----

##### Text

Drawing text is very similar to drawing any other path.

Text can be stroked or filled using the same `ctx.fillStyle` and `ctx.strokeStyle` as paths.

Text drawn on the canvas is not affected by any box model.

Don't use text on the canvas as a replacement for regular document text - it violates basic accessibility rules.

<table>
  <tr>
    <th>Function / Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`font`</td>
    <td>Font setting to use. Anything you would normally put into a font CSS rule: family, size, weight, variant, etc. (defaults 10px sans-serif).</td>
  </tr>
  <tr>
    <td>`textAlign`</td>
    <td>"start" (default), "end", "left", "right", "center".</td>
  </tr>
  <tr>
    <td>`textBaseline`</td>
    <td>"top", "hanging", "middle", "alphabetic" (default), "ideographic", "bottom".</td>
  </tr>
  <tr>
    <td>`fillText(txt, x, y, [maxW])`</td>
    <td>Render the text string at x, y no wider than maxW with fill.</td>
  </tr>
  <tr>
    <td>`strokeText(txt, x, y, [maxW])`</td>
    <td>Render the text string at x, y no wider than maxW with stroke.</td>
  </tr>
  <tr>
    <td>`meausureText(text)`</td>
    <td>Returns the dimension metrics of the string using the current font settings.</td>
  </tr>
</table>

Refer to [Text](https://github.com/l4nk332/notebook/blob/master/HTML5_Canvas/canvas_snippets.md#text) section in *canvas_snippets.md* file for examples.
