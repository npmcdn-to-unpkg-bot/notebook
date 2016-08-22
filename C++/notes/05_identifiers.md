# Identifiers

C++ *Identifiers* are tokens that provided readable names for variable, labels, functions, and defined types. An identifier may only contain latin alphabet (a-zA-Z), Western Arabic Numberals (0-9), and ASCII Underscore _ .

An identifier must not begin with a numeral and not conflict with any of the language specific reserved words:

![c++ reserved words](http://www.eitworld.com/cpp/cp4.jpg)

These are only a few and more can be found [here](http://en.cppreference.com/w/cpp/keyword)

Identifiers are case-sensitive and in practice it is best to keep identifiers under 31 characters long. If you begin an identifier with an underscore it specifies that it is private (just a standard practice not enforced) `_private_identifier`. Double underscores are generally used for system level use, so avoid using them in your own identifiers `__system_use_only`.

It's best to either stick to snake or camelCase when working within a particular project so that things remain consistent.
