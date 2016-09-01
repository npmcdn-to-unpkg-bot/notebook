# Defining a Function

A function is declared with the return type first, then the name, then the parentheses where arguments are placed, and finally a block of code in the curly braces. In the case below we use the type **void** which means that the function does not return a value.

```c++
#include <cstdio>
using namespace std;

void func() {
  puts("This is func()");
}

int main(int argc, char ** argv) {
  puts("This is main()")
  func();
  return 0;
}

// This is main()
// This is func()
```

> Note: A function must be declared before it is used. There is no hoisting like in JavaScript. This is why in the example above func() is defined before main().

## Forward declaration

In some cases you might want the body of a defined function below the function that invokes it. By using a **forward declaration** we can essentially declare the function before defining it.

```c++
#include <cstdio>
using namespace std;

void func(); // This is a forward declaration not an invocation

void func() {
  puts("This is func()");
}

int main(int argc, char ** argv) {
  puts("This is main()")
  func();
  return 0;
}

// This is main()
// This is func()
```

## Using #include

In many cases it is best practice to keep the forward declaration in a **header file** and then use the preprocessor **#include** to import at the top of the file.

*func.h*
```c++
#ifndef FUNC_H_
#define FUNC_H_

void func();

#endif // FUNC_H_
```

*func.cpp*
```c++
#include <cstdio>
#include "func.h"
using namespace std;

int main(int argc, char ** argv) {
  puts("This is main()");
  func();
  return 0;
}

void func() {
  puts("This is func()");
}

// This is main()
// This is func()
```

This is the more common way to include the function definitions that would be used in a c++ file.
