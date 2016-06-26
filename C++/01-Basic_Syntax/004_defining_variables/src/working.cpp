#include <cstdio>
using namespace std;

int main( int argc, char ** argv )
{
/*
 * Variables are strongly typed in c++, meaning that the token represents both
 * value and type in a variable. In this case we are defining an int type variable
 * but because it has no type it is undefined.
 */
	const int i = 7; // We initialize variable i by assigning a value to it once declared.
					 // > Note: The optional const qualifier prevents mutation of
					 // 		that particular variables value, throwing an error
					 // 		if the variable is tampered with.

	printf("The value is %d\n", i); // %d is for inserting ints into a string

	return 0;
}
