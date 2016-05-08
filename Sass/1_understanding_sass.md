# Understanding Sass
---
## Features
- Variables: Allows for consistent, easy to manage style sheets.
- Nesting: Similar to the look of a media query, you can nest styles which make it easier to keep track of styles in the future and group styles accordingly.
- Partials: Allow you to break styles into modules.
- Extend: A CSS rule can extend (inherit) from another rule.
- Operator: You can use basic math operations on pixels, percentage, ems, etc.
- If/Else: Allows your to create logic in your css by styling based on conditionals.
- Mixins: Common commands stored as macros (functions) that promote DRY css.
- Two Different Syntaxes: .sass -> essentially css without alot of the puntuation. Indentation is relavent. It is super concise, and strict on spacing. .scss -> newer syntax that looks alot more like css and it has all of the same puntuation. Because it looks so much like css it is the best option for beginners trying to learn sass.
---
## Transpiling Tools
Because Sass cannot be directly interpretted by the browser, we must first transpile the language to .css files. There are many ways in which to do this. The two most popular being _Gulp_ and _Grunt_.
