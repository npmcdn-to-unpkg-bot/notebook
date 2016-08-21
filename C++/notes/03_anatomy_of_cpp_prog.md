# Anatomy of a C++ Program

```c++
// Here is a comment
#include <cstdio>
using namespace std;

int main( int argc, char ** argv )
{
    puts("Hello, World!");
    return 0;
}
```

*Comments* are made in C++ in the same manner that one would comment in Javascript, either by `// This is inline` or `/* This is block */`.

*Tokens* are the essential pieces that make up a C++ program. They are separated by whitespace and are interpreted and parsed by the compiler. C++ does not strictly enforce whitespace in a given program.

This is not the case in the first line however (`#include <cstdio>`). This is because the first line in a C++ program is usually a *directive* for the preprocessor. Note that there is also no semicolon at the end. This is because that line is not actually C++ code but a direct interation with the preprocessor. Any directive must be on it own line and include the `#include` followed by the name of a file in either **<>** or **""**. This directive tells the preprocessor to take the contents of the file and include it into the source code of your program as if you had typed it out.

The second line of code tells the compiler that we are using a *namespace* for the std or Stand Library file. If this was not included we would be forced to type out `std::puts()` rather than just `puts()`.

The `main()` function is the entry point for any C++ program. There must always be a main function and there must be one and only one. The two arguments that are currently passed into the function `int argc, char ** argv` are optional, but generally it is best practice to keep them there. The arguments let you get arguments from the commandline when you are running the script from the terminal.

Notice that we return 0 at the end of our main function. This is because **the main function must return a value** and in this case an integer value because it is statically identified as an integer function. 0 by convention is return from the main function to indicate that everything was successful.

The function `puts()` prints out data to the standard output with a newline directly after it. Another function `printf()` can also be used, but it does not include the trailing newline.

A final way that one is able to print data to the standard output is by using the *iostream* directive along with the `cout << "Some string\n"` rather than cstdio. Notice that no trailing newline is included by default.

> Note: *cout* is a C++ class that operates in a very complex way to send data to the output stream. Generally its best to keep it simple and stay with `puts()` and `printf()`.
