# Using Partials
---

Sass allows you to break up your styles into modules, which allows for things to be broken into logical groups.

At the top of the document you are importing a module into simply place the `@import` command. This is similar to the css version of importing, but rather it is combined to a single css file upon output. (making for less server requests)

So if we had a file called _variables.scss_ and we wanted to import those variables into another file we would do the following:

```
@import "variables.scss";

html {
    font-size: 65.2%
}

/* Variables can now be used as though they we in the same document */

body {
    color: $color-main;
    font-family: $font-main;
}
...
```

In reality in order to break up the code into modular sense, the _style.scss_ file is used as more of an importer of all other modules. (i.e variabes.scss, base.scss, modules/media.scss, etc)

```
/* style.scss */

@import "variables";
@import "normalize";	/* Importing normalize css reset */
@import "base";
@import "modules/media";
```

In _Gulp_ or _Grunt_ we only want to process the _style.scss_ file because it links all our styles together. Therefore, we will have one file with all our appropriate styles in the .css format.

It is also best practice to preceed all partials with an underscore prepended, so `base.scss -> _base.scss`. The style.scss should be the only file that is not prepended.

> **Note**: Normalize.scss is actually loaded before base.scss and most other modules because styles are cascading and we don't want normalize to reset our styles.

Looking at our *_variables.scss* we will notice that we are importing from a url:

```
@import url(http://fonts.googleapis.com/css...);

$font-main: "Merriweather", Helvetica, sans-serif;
$font-highlight: 'Bree Serif', Helvetica, san-serif;
```

In this case we are importing a particular font from google's api, and an extra request would be made. This is treated in a similar fashion to a regular css import. This can be done with any file that can normally be imported via css imports.
