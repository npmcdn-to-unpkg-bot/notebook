# Pointers

A variable is a typed and named location in memory. For example, `int x` allocates enough memory for the size of an integer and associates the name x. `x = 1` now sets the value stored in memory x to 1.

`int y = x` is a definition and an assignment, memory is allocated in the size of int and the value of the variable x is **copied** into the location at y. These two variables have the same value but are at different places in memory.

C++ offers the *pointer* as a way to reference a place in memory without ever needing to store that data. `int *ip` allocated memory size for a pointer. The pointer is also strongly typed (integer pointer).

`ip = &x` now the address of the integer variable named x is stored in ip. `&` is formally called the **reference operator** or **address of operator** in this context. It returns the address of an object suitable for assigning to a pointer.

> Note: The `&` is also used for a special reference type in C++ that will be covered in more detail later.

`y = *ip` copies the value pointed to by `ip` (which currently points to the integer variable x) to the integer variable `y`. This is commonly referred to as the **pointer deference operator** and is used to get at the value pointed to by the pointer. `ip` could be changed to point to a different variable:

```c++
#include <cstdio>
using namespace std;

int main( int argc, char ** argv )
{
  int x = 7; // Set x
  int y = 42; // Set y
  int *ip = &x; // Point to x
  prinf("The value of x: %d\n", x);
  prinf("The value of y: %d\n", y);
  prinf("The value of *ip: %d\n", *ip);

  puts("Changing value of x");
  x = 23;

  prinf("The value of x: %d\n", x);
  prinf("The value of y: %d\n", y);
  prinf("The value of *ip: %d\n", *ip);

  puts("Changing ip to point to y");
  ip = &y;

  prinf("The value of x: %d\n", x);
  prinf("The value of y: %d\n", y);
  prinf("The value of *ip: %d\n", *ip);
  return 0;
}

// The value of x: 7
// The value of y: 42
// The value of *ip: 7

// Changing value of x

// The value of x: 23
// The value of y: 42
// The value of *ip: 23

// Changing ip to point to y

// The value of x: 23
// The value of y: 42
// The value of *ip: 42
```
