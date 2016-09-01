# Branching Conditional

C++ provides a multi-way conditional called a **switch statement**. In C++ a switch statement requires constants to be placed within each **case** within the statement.

```c++
#include <cstdio>
using namespace std;

int main( int argc, char ** argv )
{
  const int iONE = 1;
  const int iTWO = 2;
  const int iTHREE = 3;
  const int iFOUR = 4;

  int x = 3;

  switch (x) {
    case iONE:
      puts("one");
      break;
    case iTWO:
      puts("two");
      break;
    case iTHREE:
      puts("three");
      break;
    case iFOUR:
      puts("four");
      break;
    default:
      puts("none");
      break;
  }

  return 0;
}

// three
```

Notice the **break**, this allows for breaking out of a block of code. It is best practice to always place a break at the end of each case. If one is not placed then execution will continue down to the next level below. Switch statements are a great way to handle multi-if statements.
