# Advanced Canvas Drawing Operations

There are three basic types of transformations that canvas provides: Translate, Scale, Rotate, along with a way to define your own free-form transforms.


## Transforming Objects Using the Translate Tag

Transformations provide a way to affect how objects are drawn on the canvas and achieve some very common but difficult-to-program effects. Transforms affect _all_ of the drawing operations that come after them, and they are additive - each transform is added to the previous one. It's a good idea to _save()_ and _restore()_ the context state when using them.

The simplest transform is the _translate()_, simply moving the canvas origin to a new location.

<table>
  <tr>
    <th>Path Function</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><pre>translate(x, y)</pre></td>
    <td>Moves the origin by the amounts x and y</td>
  </tr>
</table>

Refer to [Paths](https://github.com/l4nk332/notebook/blob/master/JavaScript/HTML5_Canvas/canvas_snippets.md#translate-transform) section in *canvas_snippets.md* file for examples.

---


## Scaling Objects with the Scale Transformation

The _scale()_ transformation causes drawing operations to be multiplied by a given scale factor in the x and y directions.

<table>
  <tr>
    <th>Path Function</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><pre>scale(x, y)</pre></td>
    <td>Scale drawing operations by multiples x and y</td>
  </tr>
</table>

Refer to [Paths](https://github.com/l4nk332/notebook/blob/master/JavaScript/HTML5_Canvas/canvas_snippets.md#scale-transform) section in *canvas_snippets.md* file for examples.

---

## Rotating Objects with the Rotated Transformation

The _rotate()_ transform causes subsequent drawing operations to be rotated by a given angle (in radians, not degrees).

Rotation takes place around the current origin - not an object's center. To do this, use _translate()_ to move the origin to the object's center, and then rotate.

<table>
  <tr>
    <th>Path Function</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><pre>rotate(angle)</pre></td>
    <td>Rotate subsequent drawing operations by the given angle (radians)</td>
  </tr>
</table>

Refer to [Paths](https://github.com/l4nk332/notebook/blob/master/JavaScript/HTML5_Canvas/canvas_snippets.md#rotate-transform) section in *canvas_snippets.md* file for examples.

---

## Applying a Custom Transformation

In addition to the built-in transforms, you can define you own. A transform is defined as a matrix, with the following format:

```
[x]   [ace] [x]
[y] = [bdf] [y]
[1]   [001] [1]
```

<table>
  <tr>
    <th>Function</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><pre>transform(a,b,c,d,e,f)</pre></td>
    <td>Adds the given transform matrix to the current one.</td>
  </tr>
  <tr>
    <td><pre>setTransform(a,b,c,d,e,f)</pre></td>
    <td>Resets current transform matrix and sets the new one provided with given arguments.</td>
  </tr>
</table>

Refer to [Paths](https://github.com/l4nk332/notebook/blob/master/JavaScript/HTML5_Canvas/canvas_snippets.md#custom-transform) section in *canvas_snippets.md* file for examples.

---

## Compositing in Canvas Using globalAlpha

Each canvas context has a setting for the global alpha - the opacity setting that affects all drawing operations.

There is also a setting for the _default compositing method_ - how new content is drawn onto the canvas surface.

To use the global alpha, simply set _ctx.globalAlpha_ to a value from 0.0 to 1.0 (The default value is 1.0).

Here are the 12 different compositing methods (_source-over_ default):

![Compositing Methods](http://buildnewgames.com/assets/article//global-composit-operations/mdn-ops-all.png)


Refer to [Paths](https://github.com/l4nk332/notebook/blob/master/JavaScript/HTML5_Canvas/canvas_snippets.md#global-alpha) section in *canvas_snippets.md* file for examples.

---

## Manipulating Raw Pixels

The canvas provides access to the individual pixel data as an array of bytes. This data can be manipulated an then put back into the canvas. Each row in an image is composed of 4-byte pixels ([Red, Green, Blue, Alpha]).

To calculate the size of an _image data array_:

```
Image Data Array Size = height x width x 4
```

> **Note:** Due to security measures scripts manipulating Raw Pixel data must come from the same domain origin. Otherwise it is denied access and a error is thrown.

<table>
  <tr>
    <th>Attribute/Function</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><pre>width, height</pre></td>
    <td>Width and height of the canvas pixel data</td>
  </tr>
  <tr>
    <td><pre>data</pre></td>
    <td>The single-dimension array of raw pixel data</td>
  </tr>
  <tr>
    <td><pre>createImageData(sw, sh)</pre></td>
    <td>Creates a new image data with width <em>sw</em> and height <em>sh</em></td>
  </tr>
  <tr>
    <td><pre>createImageData(imgData)</pre></td>
    <td>Creates new image data from an existing one</td>
  </tr>
  <tr>
    <td><pre>getImageData(sx,sy,sw,sh)</pre></td>
    <td>Gets image data within the given bounds</td>
  </tr>
  <tr>
    <td><pre>putImageData(imgData, dx, dy, [dirtyDx, dirtyDy, dirtyW, dirtyH])</pre></td>
    <td>Puts modified data back into the image. If the <em>dirty</em> rectangle data is supplied, then only the bits inside that rectangle are updated.</td>
  </tr>

</table>


Refer to [Paths](https://github.com/l4nk332/notebook/blob/master/JavaScript/HTML5_Canvas/canvas_snippets.md#raw-data) section in *canvas_snippets.md* file for examples.
