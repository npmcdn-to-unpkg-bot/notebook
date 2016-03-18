# Control Structures

## Conditionals: if, else, elsif

Control Structures provide the action in Ruby programming. These conditions are the fundamental building blocks of logic.

```ruby
x = 14

if x < 10
  puts "Below 10"
elsif x > 20
  puts "Over 20"
else
  puts "Between 10 and 20"
end

# => "Between 10 and 20"

# Here is an inline if statement
name = "Bill"
puts "Found Bill" if name == "Bill"
# => "Found Bill"
```

> **Note:** Notice that we **must** place the keyword _end_ after the conditional logic. Also note that '{}'  and '()' are not necessary in Ruby.

---

## Conditionals: unless, case

There are some additional conditionals that can help the construction of logic flow in Ruby. These are: unless, case, ternary operator, or/or-equals.

```ruby
x = 10

# Unless (same as if !boolean)
unless x > 15
  puts "x is less than"
else
  puts "x is greater than or equal to"
end
# => x is less than

# Case (like a switch statement)
case x
when 1
  puts "It's one."
when 2
  puts "It's two."
when 3
  puts "It's three."
else
  puts "It's not 1-3."
end
# => It's not 1-3

# Ternary (A condensed if/else statement)
x > 10 ? puts "Greater than 10" : "Less than or equal to 10"
# => "Less than or equal to 10"

# Or/or-equals (If/else with fallback or default values)
z = 12
x = y || z
# => x = 12 (Because y not defined)
y ||= 5
# => (same as unless y has value, set y to 5)
```

---

## Loops

Loops repeat blocks of code. There are myriads of ways to loop through things in Ruby. There are also ways that we can stop loops, here are some:

* break = Terminate the whole loop
* next = Jump to the next loop
* redo = Redo this loop
* retry = Start the whole loop over

```ruby
number = 0

# Regular loop
loop do
  number += 2
  break if number > 10
  print "#{number} "
end
# => 2 4 6 8 10

number = 0

# Using next to skip code
loop do
  number +=1
  break if number == 5
  next if number == 2
  print "#{number} "  
end
# => 1 3 4 5 (2 was skipped)

number = 10

# While loop
while number > 0
  x -= 1
  print "√"
end
# => √√√√√√√√√√

number = 10

# Until loop
until number == 0
  x -= 2
  print "≈"
end
# => ≈≈≈≈≈

# Single line examples of while/until
x = 0
print x +=2 while x < 5
# => 246810

y = 300
print y/10 until y <= 1
# => 303..
```



---

## Iterators

The Ruby control structures known as Iterators allow us to do some powerful computation over array and blocks of code. There are many kinds, so keep an eye out on the documentation to find the one you need.

Iterators can also use the keywords from above:

* break = Terminate the whole loop
* next = Jump to the next loop
* redo = Redo this loop
* retry = Start the whole loop over

```ruby
# Times (# of times to repeat something)
5.times do
  print "Hello"
end
# => HelloHelloHelloHelloHello
# ( Same as: 1.upto(5) / 5.downto(1) / (1..5).each )

# Upto (# upto #)
1.upto(3) do |i|
  print "- #{i} -"
end
# => - 1 -- 2 -- 3 -

# Downto (# downto #)
5.downto(1) { |count|
  puts "Count: #{count}"
}
# => Count: 5
#    Count: 4
#    Count: 3
#    Count: 2
#    Count: 1

# Each (iterate through each item in collection)
my_arr = [1, 2, 3, 4, 5]
my_arr.each do |num|
  print num
end
# => 12345

# For in Iterator (Same as above)
for num in my_arr
  print num + 5
end
# => 578910
```

Here is a quick list of some of the more popular iterators in Ruby:

* Integers/Floats: times, upto, downto, step
* Range: each, step
* String: each, each_line, each_byte
* Array: each, each_index, each_with_index (2 params)
* Hash: each, each_key, each_value, each_pair (2 params)
