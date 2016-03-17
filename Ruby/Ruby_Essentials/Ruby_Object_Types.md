# Ruby Object Types

## Objects

Ruby is an object oriented programming languages, meaning almost everything in Ruby is an object. Objects are the fundamentally building blocks of Ruby.

Objects are instances of a class, sharing common ancestry. The sections below some of the most basic objects in the Ruby language.

---

## Variables

Variables are actually **not objects**. They keep track of objects and allow us to reference them. Here is a basic example of assigning variables:

```ruby
x = 10
my_age = 25
puts my_age + x

# => 35

a = "Hi"
b = a
puts b

# => "Hi"
```

> **Note:** The variable naming convention in Ruby is to keep all names lower-cased and separate words (if necessary) with the underscore.

**Scope Indicators:**

By putting additional characters in front of our variable names, a scope is identified for that variable. This determines where the variable and its contents are made accessible:

<table>
<tr>
  <th>Global</th>
  <td>$variable</td>
</tr>
<tr>
  <th>Class</th>
  <td>@@variable</td>
</tr>
<tr>
  <th>Instance</th>
  <td>@variable</td>
</tr>
<tr>
  <th>Local</th>
  <td>variable</td>
</tr>
<tr>
  <th>Block</th>
  <td>variable</td>
</tr>
</table>


---

## Integers

Integers are one of two kinds of Number types (other is _floats_). An integer is simply a number that is not a decimal.

Integers belong to one of two sub-classes: **Fixnum**, for regular integers, or **Bignum**, for larger integers. Ruby will switch between these two sub-classes of the Integer class in order to reserve memory accordingly.

We can use the _.class_ method to show what class the number comes from:

```ruby
4 + 4
# => 8

-200 - 2
# => -202

-400.abs
# => 400 (absolute value)

200.next
# => 201 (increments by 1)

16.class
# => Fixnum

1234567891009876543425.class
# => Bignum
```

There are many methods that can be called on Integers, that can be found in the Ruby documentation.

---

## Floats

Floats are the second type of Number in Ruby (aka Decimals or Precision-Point).

```ruby
x = 40.0
puts x
# => 40.0

y = 40
puts y
# => 40

x.class
# => Float

y.class
# => Fixnum

x + y
# => 80.0 (Float takes precedence)

10 / 3
# => 3 (Because integer / integer)

10 / 3.0
# => 3.3333333 (Because float included in operation)

126.9.round
# => 127

321.8.to_i
# => 321 (Converts to integer, dropping decimal values)

321.8.floor
# => 321 (Round down)

321.8.ceil
# => 322 (Round up)
```

> **Note:** Floats take precedence in Ruby. If they are not included in an operation between two integers, then an integer will be returned (e.g 10 / 3 == 3).

---

## Strings

Strings are sequences of characters, that are returned and operated on in Ruby. They are literally a string of characters surrounded by either double or single quotes (Ruby will return everything in double quotes anyway).

Ruby has some interesting string methods and operators that can be used to alter, filter, sort, repeat, and much more.

```ruby
greeting = "Hello"
target = "World"

puts greeting + " " + target
# => Hello World (Puts a concatenated string)

puts "Bill" * 5
# => BillBillBillBillBill (Multiplies string by 5)

puts "10" * 5
# => 1010101010

puts 'I\'m escaped'
# => I'm escaped

puts "This is a backslash: \\"
# => This is a backslash: \

puts "\tTabbed Content"
# =>    Tabbed Content (note: only w/ dbl quotes)

puts "Here is \na new line"
# => Here is
#    a new line (note: only w/ dbl quotes)

puts "#{greeting} Bill! You are #{24 + 10} years-old"
# => Hello Bill! You are 34 years-old
#    (String interpolation: only w/ dbl quotes)

"Hello".reverse
# => "olleH"

"adam".capitalize
# => "Adam"

"LOWER".downcase
# => "lower"

"caps".upcase
# => "CAPS"

"hello".length
# => 5

"hello".upcase.reverse
# => OLLEH (You can daisy-chain methods together)
```

> **Note:** There are some great features found in Ruby involving strings, but keep in mind that some of the functionalities (such as String Interpolation, escaped line-return and escaped tabs) only work with double quoted strings. Otherwise the string will be interpreted literally.

---

## Arrays

Arrays are ordered, integer-indexed collection of objects that allow us to store an 'array' of different data types.

```ruby
data_set = ["index0", 1, 2, "index3"]
puts data_set
# => "index0"
# => 1
# => 2
# => "index3"

puts data_set[0]
# => "index0"

puts data_set[4]
# => nil (nothing present)

data_set[0] = "new value"
puts data_set
# => ["new value", 1, 2, "index3"]

data_set << "appended item"
puts data_set
# => "new value"
# => 1
# => 2
# => "index3"
# => "appended item"

data_set.clear
# => [] (clears the array)
```

Arrays are very flexible in Ruby. In the next section the methods associated with manipulating arrays will be illustrated.

> **Note:** Printing or Putting an array will simply log out each array item individually. If you want to print the entire array together use array.inspect method. (more on this in next section)

---

## Array Methods

Arrays in Ruby have tons of various methods associated with them. These methods are used for all sorts of actions and manipulations.

```ruby
arr = [1, 2, 3, 4, 5]
arr2 = [1, "2", 3.0, ["a", "b"], "dig"]

arr.inspect
# => "[1, 2, 3, 4, 5]" (Returns as whole entity/string)

# Without inspect method array structure is unclear
puts arr2
# => 1
# => "2"
# => 3.0
# => "a"
# => "b"
# => "dig"

# Logged with structure
puts arr2.inspect
# => [1, "2", 3.0, ["a", "b"], "dig"]

# Convert Array to string
puts arr.t_s
# => "12345"

# Similarly you can join (optionally passing delimiter)
arr.join(" - ")
# => 1 - 2 - 3 - 4 - 5

# Conversely we can split from string to array
"split.into.an.array".split(".")
# => ["split", "into", "an", "array"]

# Reverse also works on arrays
[5, 4, 3, 2, 1].reverse
# => [1, 2, 3, 4, 5]

[4, 3, 5, 2, 1].sort
# => [1, 2, 3, 4, 5] (Sort can't work w/ mixed types)

numbers = [1, 2, 2, 2, 3, 4, 5]

numbers.uniq
# => [1, 2, 3, 4, 5] (returns uniq array but original state remains the same)

puts numbers.inspect
# => [1, 2, 2, 2, 3, 4, 5]

# '!' changes the variable in place (destructively)
numbers.uniq!

puts numbers.inspect
# => [1, 2, 3, 4, 5]

# Delete specific indexed item
numbers.delete_at(2)
# => 3 (returns the removed item)

puts numbers.inspect
# => [1, 2, 4, 5]

# Delete a specified item (not by index)
numbers.delete(5)
# => 5 (returns the removed item)

puts numbers.inspect
# => [1, 2, 4]

# Appending to array
numbers << "Hello"
# => [1, 2, 4, "Hello"]

# Alternatively you can push
numbers.push("World")
# => [1, 2, 4, "Hello", "World"]

# Pop off last item of array
numbers.pop
# => "World"

puts numbers.inspect
# => [1, 2, 4, "Hello"]

# Shift / Unshift work at the beginning
numbers.shift
# => 1
puts numbers.inspect
# => [2, 4, "Hello"]
numbers.unshift(1)
# => [1, 2, 4, "Hello"]

# You can concatenate arrays using the '+' operator
[1, 2, 3] + [4, 5, 6]
# => [1, 2, 3, 4, 5, 6]

# You can use '-' operator to remove array items
[1, 4, 6, 8, 2, 3] - [2]
# => [1, 4, 6, 8, 3]
```

There are almost too many array methods to count in Ruby. This says a lot about how Ruby provides more than one way to do the same thing. Most of the time you can search the documentation to find the exact functionality you are looking for when deciding what array method to use.

---

## Hashes

Hashes are an unordered, object-indexed collection of objects (or key-value pairs). These are similar to Object literals in JavaScript.

```ruby
person = {
  'first_name' => 'Kevin',
  'last_name' => 'Martin'
}

# Returns value of 'first_name' key
person['first_name']
# => Kevin

# Returns key of specified value
person.index('Martin')
# => "last_name"

# You can have mixed values in Hashes
mixed_hash = {
  1 => ['a', 'b', 'c'],
  [10, 20] => "top",
  "date" => 101291
}
mixed_hash[[10, 20]]
# => "top"

# Return all keys in an array
mixed.keys
# => [1, [10, 20], "date"]

# Return all values
mixed.values
# => [["a", "b", "c"], "top", 101291]

# Find length/size
mixed.length
# => 3
mixed.size
# => 3

# Convert the Hash to an Array
mixed.to_a
# => [[[10, 20], "top"], [1, ["a", "b", "c"]], ["date", 101291]]

# Clear the Hash
mixed.clear
# => {}

# Alternatively assigning it to {}
mixed = {}
# => {}

# Setting a value in a Hash
person["gender"] = "male"
# => "male"

person
# => person = { 'first_name' => 'Kevin', 'last_name' => 'Martin', 'gender' => 'male'}
```

> **Note:** Arrays should be used if order is important, otherwise Hashes provide the convenience of structure.

---

## Symbols

A symbol is a label that is used to identify a piece of data. The difference between it and say a string is that a symbol will be stored in memory just one time, where a string is stored in memory each time.

Because of this symbols work very well inside hashes.

```ruby
# Create a symbol labeled name
:name

# Checking the object id we can see the differences
# between symbols and strings being stored in memory
"name".object_id
# => 123
:name.object_id
# => 124
"name".object_id
# => 125 (Note: id has changed from first instance)
:name.object_id
# => 124 (Note: id same as first instance)

# Store a symbol in a hash
my_hash = {:first => "Bill", :last => "Joppe"}
# => {:first => "Bill", :last => "Joppe"}

# Note that you must specify the symbol to access data
my_hash["first"]
# => nil
my_hash[:first]
# => Bill

# Symbols are not variables!!!
my_symbol = :symbol
# => ERROR!!! Illegal...
```

> **Note:** A good rule of thumb is if the specified object really is a word and the sequence of characters is important, or if it is going to be for output, then use a string. But if it is a label used to identify a piece of data, or to pass a message around between different parts of the program, we want to use a symbol.

---

## Booleans

Booleans are either _True_ or _False_. They are used mostly in control flow and logic.

Here are the basic comparison operators in Ruby

<table>
  <tr>
    <th>Equal</th>
    <td>==</td>
  </tr>
  <tr>
    <th>Less Than</th>
    <td>&lt;</td>
  </tr>
  <tr>
    <th>Greater Than</th>
    <td>&gt;</td>
  </tr>
  <tr>
    <th>Less Than or Equal To</th>
    <td>&lt;=</td>
  </tr>
  <tr>
    <th>Greater Than or Equal To</th>
    <td>&gt;=</td>
  </tr>
  <tr>
    <th>Not</th>
    <td>!</td>
  </tr>
  <tr>
    <th>Not Equal</th>
    <td>!=</td>
  </tr>
  <tr>
    <th>And</th>
    <td>&amp;&amp;</td>
  </tr>
  <tr>
    <th>Or</th>
    <td>||</td>
  </tr>
</table>

```ruby
2 == 2
# => true

# True and False are objects
true.class
# => TrueClass
false.class
# => FalseClass

13 != 33
# => true

15 > 90
# => false

!false
# => true

100 >= 100 && 4 < 1
# => false (because both aren't true)

100 >= 100 || 4 < 1
# => true (because first statement true)

!(100 >= 100 || 4 < 1)
# => false (flipped boolean value)

# There are plenty of methods that return Booleans
# Note the '?' in the method calls

# Check if something is nil
x = nil
y = true
x.nil?
# => true
y.nil?
# => false

# Check for value between two values
3.between?(1, 10)
# => true
31.between?(1, 10)
# => false

# Check if something is empty
[].empty?
# => true
[1, 2].empty?
# => false

# Check if number is included in array
[4, 5].include?(2)
# => false
[2, 5].include?(2)
# => true

# Check hashes for keys or values
{"person" => true}.has_key?("person")
# => true
{"person" => true}.has_value?("true")
# => true
```

Booleans will help with control flow and logic in our Ruby programs.

> **Note:** Keep in mind that most of the methods that return Boolean values contain a '?' in the invocation.

---

## Ranges

A range will typically be a range of numbers (e.g (1..100)). They can come in handy when we are dealing with a large range of numbers that would be extremely difficult to keep track of in an array.

There are two kinds of ranges, inclusive ((1..10) => 1-10) and exclusive ((1...10) => 1-9). Where inclusive ranges include the last number, exclusive ranges do not.

```ruby
1..10
# => 1..10 (Outputs as a range)
(1..10).class
# => Range (Note: parens necessary for method usage)

# We can return the beginning of the range
(1..50).first
# => 1
(1..50).begin
# => 1

# We can also return the end of the range
(1..50).last
# => 50
(1..50).end
# => 50

y = 1...10
y.begin
# => 1
y.end
# => 10 !!!Note: Even though exclusive, 10 is returned!

# Check if included in range
y.include(10)
# => false
y.include(4)
# => true

# Expand into array using splat operator (*)
z = [*y]
# => [1, 2, 3, 4, 5, 6, 7, 8, 9]

# We don't have to use numbers with ranges
alpha = "a".."m"
alpha.include("g")
# => true
[*alpha]
# => ["a", "b", "c"..., "l", "m"]
```

---

## Constants

Constants work a lot like variables in Ruby. There are not true objects, and they do not point to objects. Constants are literally constant and should stay the same.

We can define a constant by using ALL CAPS:

```ruby
# Define a constant with all caps
TEST = "my constant"
# => "my constant"

TEST = "new value"
# => Warning: already initialized const..
# Although warning raised, it still changed the value
TEST
# => "new value"

# Names starting with a capitalized letter are constant
Hello = 10
# => 10
Hello = 450
# => Warning: already initialized const..
# Although warning raised, it still changed the value
Hello
# => 450
```

> **Note:** Because of this faulty behavior, constants are not a solid practice to implement in Ruby. Just keep in mind that **any name beginning with a capital letter becomes a constant in Ruby**.
