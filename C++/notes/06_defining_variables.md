# Defining Variables

Variables are *strongly typed* in c++, which means that the token in front of a variable declaration represents both its value and its type. When a variable is declared but not assigned, its value will default to *undefined*. A variable must be defined before it is used.

```c++
#include <cstdio>
using namespace std;

int main( int argc, char ** argv )
{
  int i = 7; // Defined and initialized simultaneously
  printf("The value of i is %d\n", i);

  return 0;
}
```

*Qualifiers* aka modifiers are used to change the behavior of variables in various ways. The qualifier becomes apart of the type. An example of this is adding `const` before a variable declaration `const int i = 10`. This sets a restriction making the variable i immutable (read only variable). An error will be thrown if it is attempted to be modified.
