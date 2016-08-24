# C-Style - Arrays and Strings

Although there are STL classes for both Arrays and Strings, the most basic Arrays and String implementation are the *C-Style* (STL will be covered in later lesson).



## Array

A fixed-size container for elements with a common type, i.e an array of integers with 5 values would be `int ia[5];`. 

At this point the array values are not set so they are initialized to undefined. 

To set a value on an array we would simply access it by index `ia[0] = 1;`. 

Arrays can also be as if the array were a pointer, meaning `ia[0] = 1;` would be the same as `*ia = 1;`. 

Here is an example of setting an integer pointer and having the pointer reference the address space of the corresponding array `int *ip = ia;`. 

> Notice in the last example you don't need the `&` (address of operator) to get the array's address. This is because an array may be accessed as if it were a pointer.

So given the previous code:

`int *ip = ia;`

Here is some code that would set the first item in the array `ia`:

`*ip = 2;`

This sets the first item in `ia` to 2 because the pointer was set to point at the array it would immediately reference the first item. In order to access the next item in the array we can increment the pointer:

`++ip;`

> In C++ pointers are **strongly typed** so they are aware of the size of what they point to.

If we now wanted to set the second element in the array to 3 we would simply:

`*ip = 3;`

These two statements can be combined to condense things a bit:

`*(++ip) = 4;`

> The above code both increments the index the pointer refers to and sets it the value of 4.


*Initialize Lists* allow you to set initial values on an array like so:

`int ia[5] = { 1, 2, 3, 4, 5 };`

> **Note:** This is a new feature in C++ so it may or may not work on old compilers.


## C-String

A *C-String* is a special case of an array of characters terminated with a 0 (aka 'Null Terminated String'). We can interpolate this string of characters into a string with `printf()`:

```c++
#include <cstdio>
using namespace std;

int main( int argc, char ** argv )
{
  char s[] = { 's', 't', 'r', 'i', 'n', 'g', 0 };
  printf("String is: %s\n", s);
  return 0;
}
// String is: string
```

Alternatively we can define strings like so:

```c++
#include <cstdio>
using namespace std;

int main( int argc, char ** argv )
{
  char s[] = "string";
  printf("String is: %s\n", s);
  return 0;
}
// String is: string
```

You can access the values within the string just like you would any array `s[3] // => 'i'`. We can iterate over each character with a simple for loop:

```c++
#include <cstdio>
using namespace std;

int main( int argc, char ** argv )
{
  char s[] = "string";
  for(int i = 0; s[i]; ++i) {
    printf("Char is: %c\n", s[i]);
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

We can also use a pointer to iterate through this string as well:


```c++
#include <cstdio>
using namespace std;

int main( int argc, char ** argv )
{
  char s[] = "string";
  for(char * cp = s; *cp; ++cp) {
    printf("Char is: %c\n", *cp);
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

A new construct in C++ 11 is the ability to use the *range* construct, which can also help us achieve the same result:

```c++
#include <cstdio>
using namespace std;

int main( int argc, char ** argv )
{
  char s[] = "string";
  for(char c : s) {
    printf("Char is: %c\n", c);
  }
  return 0;
}
// Char is: s
// Char is: t
// Char is: r
// Char is: i
// Char is: n
// Char is: g
// Char is:
```

> Notice the last empty printed c value. This happens because range looks at the entire array and is simply printing each item within the array, where the last one is null. This can be avoided by adding a break statement on first line of iteration `if (c == 0) break;`

