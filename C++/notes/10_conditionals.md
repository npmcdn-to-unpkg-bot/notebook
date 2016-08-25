# Conditionals

A **conditional** statement allows you to run one block of code or another based on a condition. C++ has two main forms of conditionals, *if/else* and the *ternary operator*.

## If/Else

```c++
#include <cstdio>
using namespace std;

int main( int argc, char ** argv )
{
  int x = 42;
  int y = 7;
  if (x > y) {
    puts("Condition is true");
  } else {
    puts("Condition is false");
  }
  return 0;
}
// Condition is true;
```

If there is only going to be one statement in the if/else block the braces are optional:

```c++
#include <cstdio>
using namespace std;

int main( int argc, char ** argv )
{
  int x = 42;
  int y = 7;
  if (x > y)
    puts("Condition is true");
  else
    puts("Condition is false");
  return 0;
}
// Condition is true;
```

> Note: This can be a bad practice in that if two statements sit beneath the if clause it will only recognize the first one. This can easily cause bugs in your code.

Additionally, if there are more than two cases you want to check for, you would use `else if`.

```c++
#include <cstdio>
using namespace std;

int main( int argc, char ** argv )
{
  int x = 7;
  int y = 7;
  if (x > y) {
    puts("Condition is true");
  } else if (x < y) {
    puts("Condition is false");
  } else {
    puts("x and y are equal");
  }
  return 0;
}
// x and y are equal
```

## Ternary

**Ternary operators** allow you to place simple if/else conditionals on a single line. It is important not to abuse this tool, and only use it when the logic is clear and concise.

```c++
#include <cstdio>
using namespace std;

int main( int argc, char ** argv )
{
  int x = 73;
  int y = 90;
  printf("the greater is: %d\n", x > y ? x : y);
  return 0;
}
// the greater is y
```

The formatting is that you first place a `(boolean expression) ? the expression if true : the expression if false`.

There is one last type of conditional known as a **switch** which will be covered in the next lesson.
