# Using the range-based for loop


A **range-based for loop** is a simple way to iterate over a collection. Much like the **for-in** loop in Javascript or Python, this loop allows you to set a variable that will contain the current iterated item in the collection.

> Note: The range-based for loop only works on containers and is a new feature in C++ 11.

```c++
#include <cstdio>
using namespace std;

int main( **argc, char ** argv )
{
  int a[] = {1, 2, 3, 4, 5};

  for (int i : a) {
    printf("element is %d\n", i);
  }

  return 0;
}

// element is 1
// element is 2
// element is 3
// element is 4
// element is 5
```

```c++
#include <cstdio>
using namespace std;

int main( int argc, char ** argv )
{
  char s[] = "string";

  for (char letter : s) {
    if (c == 0) break;
    printf("Char is: %c\n", letter);
  }
  return 0;
}

// Char is: s
// Char is: t
// Char is: r
// Char is: i
// Char is: n
// Char is: g
```

If we use **STL Strings** we can iterate over the string without checking for terminating 0. Also in the definition the type is not an array of characters, but a *string*.

```c++
#include <cstdio>
#include <string>
using namespace std;

int main( int argc, char ** argv )
{
  string s = "string";

  for (char letter : s) {
    printf("Char is: %c\n", letter);
  }
  return 0;
}

// Char is: s
// Char is: t
// Char is: r
// Char is: i
// Char is: n
// Char is: g
```
