# Complex Shapes: Arcs and Paths

##### Paths

A path is simply a set of points, connected by lines or curves, and is either open or closed. The context always has one (and only one) current path.

A closed path has an end point this is the same as its start point.

`ctx.beginPath()` Begins creating a path.

To add paths, use one or more path drawing routines.

`ctx.stroke()` Strokes the current path.

`ctx.fill()` Fills current path.

`ctx.closePath()` Closes the current path. This will be done automatically by canvas if the start and end points are not the same.

Refer to [Paths](https://github.com/l4nk332/notebook/blob/master/HTML5_Canvas/canvas_snippets.md#paths) section in *canvas_snippets.md* file for examples.

##### Arcs

Arcs are curves that are portions of a circle (360deg arc).

`ctx.arc(x, y, sA, eA, aC)` Adds an arc to the current path that starts at x, y and has a radius of r, with a starting angle of sA, and an ending angle of eA. The aC argument is true if the arc is counter-clockwise (x and y are center of the circle).

`ctx.arcTo(x1, y1, x2, y2, r)` Adds an arc to the current path that starts at the current pen position, has the given control points, and a radius of r.

**Note:** Angles are in radians, not degrees. To convert degrees to radians: `var radians = (Math.PI/180) * degrees;`

`ctx.closePath()` Closes the current drawing path.

Refer to [Arcs](https://github.com/l4nk332/notebook/blob/master/HTML5_Canvas/canvas_snippets.md#arcs) section in *canvas_snippets.md* file for examples.

##### Bézier

Bézier curves are drawn starting from a context point to an end point using two control points (like handles w/ pen tool in Illustrator) to determine the curve.

`ctx.bezierCurveTo(cx1, cy1, cx2, cy2, end1, end2)` Draw a Bézier curve starting at the current pen position using the two controll points defined by cx1, cy1 and cx2, cy2 and ending at the point end1, end2.

Refer to [Curves](https://github.com/l4nk332/notebook/blob/master/HTML5_Canvas/canvas_snippets.md#curves) section in *canvas_snippets.md* file for examples.


##### Quadratic

Quadratic curves use a start point, one control point, and an end point.

`ctx.quadraticCurveTo(cx, cy, x, y)` Draw a quadratic curve starting at the current pen position using the given control point cx, cy, and ending at the end point defined by x, y.

Refer to [Curves](https://github.com/l4nk332/notebook/blob/master/HTML5_Canvas/canvas_snippets.md#curves) section in *canvas_snippets.md* file for examples.

##### Text

Drawing text is very similar to drawing any other path.

Text can be stroked or filled using the same `ctx.fillStyle` and `ctx.strokeStyle` as paths.

Text drawn on the canvas is not affected by any box model.

Don't use text on the canvas as a replacement for regular document text - it violates basic accessibility rules.

`ctx.font` Font setting to use. Anything you would normally put into a font CSS rule: family, size, weight, variant, etc. (defaults 10px sans-serif).

`ctx.textAlign` "start" (default), "end", "left", "right", "center".

`ctx.textBaseline` "top", "hanging", "middle", "alphabetic" (default), "ideographic", "bottom".

`ctx.fillText(txt, x, y, [maxW])` Render the text string at x, y no wider than maxW.

`ctx.strokeText(txt, x, y, [maxW])` Rend the text string at x, y no wider than maxW.

`ctx.meausureText(text)` Returns the dimension metrics of the string using the current font settings.

Refer to [Text](https://github.com/l4nk332/notebook/blob/master/HTML5_Canvas/canvas_snippets.md#text) section in *canvas_snippets.md* file for examples.
