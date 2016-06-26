/*
 * This is much like the original file, but utilizes a different standard library
 * and function that comes along with it
 */
#include "iostream"

int main()
{
	/*
	 * This is a C++ class that achieves the same result as puts() and
	 * printf() (w/ a \n) but is a different function from a different library file.
	 * > Note: It is important to keep in mind that without the \n cout will
	 * 		   will not return the desired result.
	 */
	std :: cout << "Hello, World!\n";
	return (0);
}
