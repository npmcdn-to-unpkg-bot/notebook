#Drawing Basic Shapes

**Rectangles**

Rectangles are the only primitive shape supported by canvas.

All three rectangle-drawing operations take a starting point of the upper-left corner of the rectangle (x, y) and a width and height value (w, h).

`ctx.clearRect(x, y, w, h)` Erases the given rectangle, making area transparent.

`ctx.strokeRect(x, y, w, h)` Outlines a rectangle with the current strokeStyle.

`ctx.fillRect(x, y, w, h)` Fills a given rectangle with the current fillStyle.

Refer to **Rectangles** section in *canvas_snippets.md* file for examples.

**Lines**

Lines can be created using a variety of settings for how they join and end.

`ctx.moveTo(x, y)` Moves the pen to the given coordinates, does not draw.

`ctx.lineTo(x, y)` Draws a line from the current position to the new point.

`ctx.lineWidth` Determines the pixel width that lines will be drawn in.

`ctx.lineCap` How the line endings are drawn: butt (default), round, square.

`ctx.lineJoin` How lines join together: round, bevel, miter (default).

`ctx.miterLimit` The limit at which line joins are cut off and drawn as bevels (10).

`ctx.beginPath()` Begins a new set of path-drawing operations.

`ctx.stroke()` Collects all of the current path commands and draws them.

Refer to **Lines** section in *canvas_snippets.md* file for examples.
