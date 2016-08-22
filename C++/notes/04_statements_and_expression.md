# Statements and Expressions

```c++
#include <cstdio>
using namespace std;

int main( int argc, char ** argv )
{
  int x;
  x = 42;
  printf("x is %d\n", x);
  return 0;
}
```

Statements are terminated with a semicolon. They can span multiple lines, but it must always be terminated with a semicolon (an error will be throw otherwise).

Expressions evaluate to some value and may either be part of a statement or a series of statements.

Notice in the line with `printf()` the `%d`. This is C++'s way of string interpolation. The %d token specifies that an integer value will be placed within the string of text (in this case x = 42).

With `printf()` we can do alot more that just plug in values, but also more complex expressions such as `printf("This is complex: %d", 12 + 15 - (10 - 2))` which would output `This is complex: 19`.
