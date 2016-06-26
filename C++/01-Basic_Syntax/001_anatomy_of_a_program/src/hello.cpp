 /*
  * Bellow is the preprocessor line used to import files
  * (in this case standard library file that handles i/o)
  */
#include <cstdio>
using namespace std; // This allows for us to use the code from cstdio w/out std::

/*
 * There can only be one main function in your program. It is the entry-point
 * for your program. The two arguments passed in are optional, and are used
 * to gather the value of flags/arguments passed in from the commandline when
 * file is executed.
 */
int main( int argc, char ** argv )
{
	/*
	 * puts() is a function that is used to print a string to the console.
	 * with a newline at the end of it (like Ruby).
	 * > Note: printf() could also be used, but it doesn't add newline on end.
	 */
	puts("Hello, World!");
	/*
	 * A main function must return a value, so 0 is an arbitrary one used if a
	 * specific value is not needed to be returned.
	 */
	return 0;
}

