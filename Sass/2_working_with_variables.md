# Working with Variables
---

Variables are a versitile functionality in Sass. They can be declared as follows `$offwhite: #EEE` the '$' represents the declaration. Followed by the name a ':' and a value.

```
/* First set up the variables for various colors */

$offwhite:	#EEE8D6;
$darkblue:	#022933;
$yellow:	#FFBA00;
$blue:		#0076A3;
$red:		#D14348;
$purple:	#6D73C2;

/* Then assign those colors to more semantic style names that can be used.

$color-main: $darkblue;
$color-background: $offwhite;
$color-headlines: $red;

/* Additionally variables can be great for font-styles */

$font-main: 'Merriweather', Helvetica, sans-serif;
$font-highlight: 'Bree Serif', Helvetica, sans-serif;

html {
  font-size: 62.5%;
}

body {
  margin: 0;
  padding: 0;
  font-size: 1.8rem;
  font-family: $font-main;
  color: $color-main;
  background-color: $color-background;
}

.container {
  width: 80%;
  margin: 0 auto;
}

h1,h2,h3,h4,h5 {
    font-family: $font-highlight;
    color: $color-headlines;
}
```

Variables are a tool to help us write semantic modular style sheets that can be easily implemented in various contexts.
