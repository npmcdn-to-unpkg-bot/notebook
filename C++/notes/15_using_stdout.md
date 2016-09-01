# Using Stdout

In C++ the **standard output stream** is where text can be placed and seen on the console as output. As seen in previous lessons, you can use `puts()` and `printf()` to print data to the stdout. The other method involves a class known as **cout**.

The **iostream** library is used to import the cout class and is necessary if cout is to be used.

**cout** is a class that overloads the left shift operator to send a stream of characters to the output stream. In the example below "Hello, World!" is sent through cout to stdout followed by another class known as **endl** which is commonly used with cout to send an endline.

```c++
#include <iostream>
using namespace std;

int main( int argc, char ** argv )
{
  cout << "Hello, World!" << endl;
  return 0;
}

// "Hello, World!"
```

You can string together output stream using the left bitwise shift operator.

```c++
#include <iostream>
using namespace std;

int main( int argc, char ** argv )
{
  cout << "Hello, World! " << "This is a continuation: " << 7 * 8 << endl;
  return 0;
}

// "Hello, World! This is a continuation: 56"
```

There tends to be controversy on the usage of cout. Where some developers prefer it because of its object-oriented nature, others tend to disagree because it essentially overloads the bitwise left shift operator and is never actually used as a class.

Another thing to keep in mind is that cout requires a chunk of the STL library just to be used. This can increase the size of your compiled program (nearly double what would be necessary for just using puts or printf).
