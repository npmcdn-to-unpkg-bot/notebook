# Looping with While and Do

The basic building block of most programming languages, the **while** loop allows you to run a block of code until a condition is meet (made true). Much the same, a **do** statement is a while loop that ensures the no matter what the block of code will be run at least one time.

```c++
#include <cstdio>
using namespace std;

int main( int argc, char ** argv )
{

  int a[] = { 1, 2, 3, 4, 5 };
  int i = 0;
  while (i < 5) {
    printf("element %d is %d\n", i, a[i]);
    ++i;
  }
  return 0;
}
```

```c++
#include <cstdio>
using namespace std;

int main( int argc, char ** argv )
{

  int a[] = { 1, 2, 3, 4, 5 };
  int i = 0;
  do {
    printf("element %d is %d\n", i, a[i]);
    ++i;
  } while (i < 5);
  return 0;
}
```
