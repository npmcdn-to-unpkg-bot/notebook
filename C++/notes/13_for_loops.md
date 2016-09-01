# Iterating with for

A **for loop** is like a while loop with extra control for iteration. It is generally used when want to iterate over a range or collection. They tend to be used in cases where you know the size of your input.

```c++
#include <cstdio>
using namespace std;

int main(int argc, char ** argv)
{
  int a[] = {1, 2, 3, 4, 5};

  for (int i = 0; i < 5; ++i) {
    printf("element %d is %d\n", i, a[i]);
  }

  return 0;
}

// element 0 is 1
// element 1 is 2
// element 2 is 3
// element 3 is 4
// element 4 is 5
```

This is the basic layout of a for loop: `for (initialize variable; set break condition; alter variable to move toward break condition)`

> Note: If you do not shift the initialized variable toward the break condition then the loop will be infinite.

```c++
#include <cstdio>
using namespace std;

int main(int argc, char ** argv)
{
  char s[] = "string";

  // 1: Set up char pointer and init it to first char of array
  // 2: If end of string reached pointer will be 0 (false)
  // 3: We increment the pointer.
  for (char * cp = s; *cp; ++cp) {
    printf("element %c\n", *cp);
  }

  return 0;
}

// element s
// element t
// element r
// element i
// element n
// element g
```
