# Overview

## Using Ruby

There are three ways to use Ruby:

- Single command

- Ruby File

- Interactive Ruby shell (IRB)


Two fundamental Ruby commands are **puts** and **print**. Both of these will output their parameters(the value that directly follows them) to the screen. The main difference between the two is that where _puts_ will include a line return with the output, _print_ will output inline.

To run Ruby via a single command, navigate to the Terminal:

```
# outputs 123 (-e flag for single command)

$ ruby -e 'puts 123'
123

$ ruby -e 'print 456'
456
```

To run a Ruby script from a file, first we create the file:

```ruby
# simple_file.rb
puts "Output:"
print 123
print 456
puts "Done"
```

Then we run it from the command-line:

```
$ ruby simple_file.rb
Output:
123456
Done
```

> **Note:** One thing to keep in mind is that Ruby is whitespace independent, meaning that it can interpret extra spaces and tabs most of the time without any issue. Also note that comments are made with the **#** (hash) in Ruby.

---

## Interactive Ruby Shell (IRB)

IRB allows use to quickly invoke Ruby code in the command-line. By using the `irb` command we can open the shell:

```
$ irb
irb(main):001:0> 1 + 1
=>  2
irb(main):002:0> puts 2 * 9
18
=> nil
# nil is being returned here because it is the return value
# 'puts' and 'print' output but do not return values
irb(main):003:0> quit
$
```

The keyword **nil** (similar to _null_ in other languages), is the absence of a value. Also note that `quit` is used to exit out of IRB.

> **Note:** We can get a simple prompt (_>>_) in IRB by appending the _--simple-prompt_ after the command, `irb --simple-prompt`.

---

## Documentation

The best place to find Ruby Documentation is on the [Ruby Documentation Website]("http://www.ruby-doc.org/core/").

You can also access documentation from the command-line using _ri_ followed by method name: `ri String#upcase`. This will return the same information that's on the site, but it is stored locally on the file system.
