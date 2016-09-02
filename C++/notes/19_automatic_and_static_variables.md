# Using Automatic and Static Variables

Variables in a function default to **automatic** storage. This means that it is stored on a stack frame, like in JavaScript. This ofcourse means that from invocation to invocation the value does not persists.

Alternatively, you can specify a variable as **static** and it will persist from invocation to invocation because it is not stored on the stack, thus it is persistant for the life of the entire process.

## Example of Automatic Storage

```c++
#include <cstdio>
using namespace std;

void func() {
  int i = 6;
  printf("i is %d\n", i);
  ++i;
}

int main(int argc, char ** argv) {
  func();
  func();
  func();
  return 0;
}

// i is 6
// i is 6
// i is 6
```

## Example of Static Storage

```c++
#include <cstdio>
using namespace std;

void func() {
  static int i = 6;
  printf("i is %d\n", i);
  ++i;
}

int main(int argc, char ** argv) {
  func();
  func();
  func();
  return 0;
}

// i is 6
// i is 7
// i is 8
```

Because automatic storage is placed on the stack it is not a good idea to use it for large objects (anything larger than a few scalar variables). It is almost always a better practice to use static storage.

There are other types of memory allocation that can be used, which will be covered later in the course.

> Note: The **auto** keyword had previously been used to specify automatic storage, but has been repurposed and is no longer supported in new versions of the language. Because it is default and implied, there is not reason to use it.
