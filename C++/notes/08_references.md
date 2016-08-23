# References

The C++ *reference* type is alot like the pointer type but with significant differences. To make a refernce we use the `&` token before a variable declaration, in the same way a pointer uses `*`. The major differences between references and pointers are that references:

* Must be assigned a memory location to reference upon being declared.

* Once set, a refence does not need a dereference (like `*` with the pointer)

* We can use references to change the value of the thing they reference
  (in the second example we change the value of y and everything changes with it)

* A reference is immutable, once it refers to a specific variable it will always
  refer to that same variable.


```C++
#include <cstdio>
using namespace std;

int main(int argc, char ** argv)
{
  int x = 7;
  int *ip = &x;
  int &y = x;
  printf("The value of x is %d\n", x);
  printf("The value of *ip is %d\n", *ip);
  printf("The value of y is %d\n", y);

  y = 73;
  printf("The value of x is %d\n", x);
  printf("The value of *ip is %d\n", *ip);
  printf("The value of y is %d\n", y);

  int z = 143;
  ip = &z;
  printf("The value of x is %d\n", x);
  printf("The value of *ip is %d\n", *ip);
  printf("The value of y is %d\n", y);
  printf("The value of z is %d\n", z);

  return 0;
}
// Setting value of y to refer to x
// The value of x is 7
// The value of *ip is 7
// The value of y is 7

// Changing y changes x and the pointer ip
// The value of x is 73
// The value of *ip is 73
// The value of y is 73

// ip is changed to now point to z (y still refers to x)
// The value of x is 73
// The value of *ip is 149
// The value of y is 73
// The value of z is 149

// When y is attempted to be reassigned it simply changes
// the value of what it refers to (and continues refering
// to the same variable)
// The value of x is 149
// The value of *ip is 149
// The value of y is 149
// The value of z is 149
```

References are used alot in C++, especially in Functions and Classes, so they will come up in future sections.
