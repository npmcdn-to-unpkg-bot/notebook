# Passing Values into a Function

Setting parameters in C++ is much like any other language except because it is a statically typed language you need to specify the type when setting a parameter in the function signature. The value passed into the function must match the type that was specified in the function signature.

```c++
#include <cstdio>
using namespace std;

void func(int i) {
  puts("value is %d\n", i);
}

int main(int argc, char ** argv) {
  func(42);
  return 0;
}

// value is 42
```

By default in C++ the value is passed into a function, not the reference, so it is a copy by nature.

We can also pass by reference using the **&** character before our passed in variable. This will send in the actually reference to that value in memory, not a copy.

```c++
#include <cstdio>
using namespace std;

void func(int & i) {
  puts("value is %d\n", i);
  i = 73;
}

int main(int argc, char ** argv) {
  int x = 42;
  func(x);
  printf("value of x is now: %d\n", x);
  return 0;
}

// value is 42
// value of x is now: 73
```

This of course is a bit dangerous if you don't want to change the value of the variable. However, in some cases you don't want to create a copy of a variable just to do something with its value. If you do not change the value passed in and want to use the actually reference you can declare it as a **constant**. This will make the variable read-only and prevent destructive actions.

```c++
#include <cstdio>
using namespace std;

void func(const int & i) {
  puts("value is %d\n", i);
  // i = 73; would throw an exception...
}

int main(int argc, char ** argv) {
  int x = 42;
  func(x);
  x = 73; // We can change it here because it is not a constant
  printf("value of x is now: %d\n", x);
  return 0;
}

// value is 42
// value of x is now: 73
```

This method can be very effective both for safety and for perfomance reasons. When passing around large objects to functions you don't want to continually make a copy of the value. This is an example with a string being passed around via reference.

```c++
#include <cstdio>
#include <string>
using namespace std;

void func(const string & fs) {
  printf("value is %s\n", fs.c_str());
}

int main(int argc, char ** argv) {
  string s = "Hello I'm a String";
  func(s);
  printf("value of s is now: %s\n", s.c_str());
  return 0;
}

// value is Hello I'm a String
// value of s is: Hello I'm a String
```

Keep in mind that the same thing can be achieved with pointers rather than references. In C pointers are used where in C++ references are generally used. Here is an example with pointers:

```c++
#include <cstdio>
#include <string>
using namespace std;

void func(const string * fs) {
  printf("value is %s\n", fs->c_str()); // -> is a pointer dereference
}

int main(int argc, char ** argv) {
  string s = "Hello I'm a String";
  func(&s); // passing in the address of the string
  printf("value of s is now: %s\n", s.c_str());
  return 0;
}

// value is Hello I'm a String
// value of s is: Hello I'm a String
```

> Note: When you are passing anything along that is longer than a simple scalar value, such as an integer, long, or double you are gunna want to use a reference. This is due to the necessity to keep the stack small and the code as efficient as possible.
