# Drawing Basic Shapes

##### Rectangles

Rectangles are the only primitive shape supported by canvas.

All three rectangle-drawing operations take a starting point of the upper-left corner of the rectangle (x, y) and a width and height value (w, h).

<table>
  <tr>
    <th>Function</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`clearRect(x, y, w, h)`</td>
    <td>Erases the given rectangle, making area transparent.</td>
  </tr>
  <tr>
    <td>`strokeRect(x, y, w, h)`</td>
    <td>Outlines a rectangle with the current strokeStyle.</td>
  </tr>
  <tr>
    <td>`fillRect(x, y, w, h)`</td>
    <td>Fills a given rectangle with the current fillStyle.</td>
  </tr>
</table>

Refer to [Rectangles](https://github.com/l4nk332/notebook/blob/master/HTML5_Canvas/canvas_snippets.md#rectangles) section in *canvas_snippets.md* file for examples.

----

##### Lines

Lines can be created using a variety of settings for how they join and end.

<table>
  <tr>
    <th>Function / Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`moveTo(x, y)`</td>
    <td>Moves the pen to the given coordinates, does not draw.</td>
  </tr>
  <tr>
    <td>`lineTo(x, y)`</td>
    <td>Draws a line from the current position to the new point.</td>
  </tr>
  <tr>
    <td>`lineWidth`</td>
    <td>Determines the pixel width that lines will be drawn in.</td>
  </tr>
  <tr>
    <td>`lineCap`</td>
    <td>How the line endings are drawn: butt (default), round, square.</td>
  </tr>
  <tr>
    <td>`lineJoin`</td>
    <td>How lines join together: round, bevel, miter (default).</td>
  </tr>
  <tr>
    <td>`miterLimit`</td>
    <td>The limit at which line joins are cut off and drawn as bevels (10).</td>
  </tr>
  <tr>
    <td>`beginPath()`</td>
    <td>Begins a new set of path-drawing operations.</td>
  </tr>
  <tr>
    <td>`stroke()`</td>
    <td>Collects all of the current path commands and draws them.</td>
  </tr>
</table>

Refer to [Lines](https://github.com/l4nk332/notebook/blob/master/HTML5_Canvas/canvas_snippets.md#lines) section in *canvas_snippets.md* file for examples.
