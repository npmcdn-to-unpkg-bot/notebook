# Using Comments and Hidden Comments
---

In regular css the way you make a comment is like this: `/* this is a css commetn */`. This type of comment will work just fine in Sass, but in compressed version of transpile settings it might not show up. In order to assure that a comment stays visible in the final output css file we use the following format: `/*! This will always show up */`.

Alternatively, you can use a new Javascript-style comment known as an _invisible comment_ that will remain completely hidden in the final output css file: `// This would be invisible in css`.

```
// Invisible Comment
/*! Persistently Visible Comment */
/* Normal css comment (visible in expanded transpiled setting) */
```
