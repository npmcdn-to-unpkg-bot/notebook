#include <cstdio>
using namespace std;

int main ( int argc, char ** argv )
{
	/*
	 * Statements are units of code that are terminated w/ a semicolon.
	 * Semicolons are not optional in c++ (unlike javascript).
	 */
	int x; // This is a variable declaration.
	/*
	 * This line prints out the expression that is evaluated on the right-side of the
	 * assignment operator, the variable x is then substituded for %d.
	 */
	printf("x is %d\n", x = 34 * (19 + 9));
	return 0;
}
