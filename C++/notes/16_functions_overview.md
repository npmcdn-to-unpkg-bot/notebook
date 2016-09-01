# Overview of C++ functions

Functions are the basis of C++ programs. The **main** function as we have seen is the main entry point for any C++ application. A function is a block of code that returns a value. It can be executed and re-executed throughout a program.

In C++ functions are either called by **value** or called by **reference**.

## Function Call by Value

When called by value a local copy of the input value is created and then operated on, leaving the original value untouched.
```c++
int a = 1;

void f(int a) {
  ++a;
}

f(a);

printf("a is %d\n", a);

// a is 1
```

## Function Call by Reference

Calling a function by reference must be done *explicitly*. This makes it clear that the value being passed in will be modified. The reference operator (aka address of operator) is passed into the function to send in a pointer to be modified `f(&a)`. In the function the variable carries this pointer (using the pointer dereference operator) `void f(int* p) { ++(*p); }`.

```c++
int a = 1;

void f(int* p) {
  ++(*p);
}

f(&a);

printf("a is %d\n", a);

// a is 2
```

Alternatively you can also use a **reference type** rather than a pointer to make things a bit more implicit.

```c++
int a = 1;

void f(int & p) {
  ++p;
}

f(a);

printf("a is %d\n", a);

// a is 2
```

## Function Signature

In C++ functions are identified by their **function signature**, which include the name of the function, the input values, their types, and the type to be output. Here are two very different function signatures:

```c++
long volume( long a, long b, long c) {
  return a * b * c;
}

double volume( double r, int h ) {
  return 3.14159 * r * r * h;
}
```
