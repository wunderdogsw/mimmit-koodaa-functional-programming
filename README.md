# Mimmit koodaa functional programming workshop
Basics of functional programming workshop with #mimmit_koodaa and Wunderdog

## Before the workshop
Before the workshop:

1. Install [node.js](https://nodejs.org/en/download/).
1. Clone or download this repository (instructions [here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)).
1. If you don't have a text editor or IDE for writing JS yet, download one. For example, [VSCode](https://code.visualstudio.com/) is a good (and free) choice.

## Exercises

You can find example solutions in the solutions directory. For many of the exercises, there
are several equally correct ways to solve them, though!

### 1. Hello world

Let's start with a classic: write a script that prints "Hello world!" to the console and run it. 
You can run a Node.js script like this in the terminal:
```node <path to your file> ```.

Modify your script so that it defines a function that writes "Hello world!" to the console and 
then calls the function.

Finally, modify your script so that it takes in a name as a command line argument and says hello
to that name. For example, calling 
```node <your script> Geraldina``` 
should print out "Hello Geraldina!" 

Hint: inside your script, command line arguments are accessible in the `process.argv` array. 
The first two entries there are the the path to the Node.js executable and the script file name,
so the third entry in the array will be the name.

### 2. Higher-order functions

#### 2.1. Number converter
Take a look at the example code in `examples/area-computation.js`. Similarly, write a function 
that takes in two parameters: a number and a converter function and then prints the converted 
number to the console. Try it with different kinds of functions (some ideas: add another number to it,
raise it to the power of two, take the square root of the number, use it in a string).

#### 2.2. Unit converter
In addition to taking functions as parameters, functions can also return other functions. 
For some reason, we need a function that converts mass in kilograms into other units of mass. Write 
a converter generator function that takes in a unit name as a string and returns a function
that in turn will return kilograms converted to the unit. Like this:

```
const poundConverter = unitConverter('pound')
const converted = poundConverter(10)
console.log(converted) // This should tell us that 10 kgs is 22.05 pounds.
```

Some units: a kilogram is
* 0.001 tonnes
* 1000 grams
* 2.205 pounds
* 35.274 ounce

### 3. Recursion
#### 3.1 Countdown 
There is a slightly more complex countdown example in `examples/recursion.js`. Try reading, running and modifying
the script. For example: where is the stop condition? Can you make it fail with a large number? How large?

Extra exercise for faster coders: Can you make the script count from 0 to n instead of from n to 0?

#### 3.2. Summing
Try writing a function that computes the sum of numbers from 1 to n recursively (where n is an argument to the function).

Hint: It's easier if you do this like the countdown script does: start from adding n to (n - 1) and set the stop condition to 1.

#### 3.3. Pascal case converter
A string is said to be in Pascal case if it's in the format `ThisStringIsPascalCase` (so like camel case but the first 
letter is upper case).

Write a function that takes in an array of strings and returns them converted to one Pascal case string. For example,
this array: `['apple', 'banana', 'mango', 'pear', 'pineapple']` should be returned as `AppleBananaMangoPearPineapple`.

### 4. Pure functions and immutability

#### 4.1. Buggy bookstore

This is the first (and only) exercise where the model solution uses an external library. To install the dependencies,
run `npm install` in the project root.

`exercises/4_1_Buggy-bookstore.js` contains a script that defines the inventory of an imaginary online bookstore as 
well as functions for manipulating a user's shopping cart. Try running and examining the script. What happens to the
inventory?

Your job is to rewrite the script so that it uses pure functions and immutable objects. (The model solutions use the 
lodash libary for cloning objects, but that is not the only possible way to achieve this.)

### 5. Array methods

#### 5.1. Reversing a string

Take a look at the scripts that reverse arrays of strings in `examples/reverse-string.js` 
and `examples/reverse-string-anon-fun.js`. Try running them!

#### 5.2. Rewriting for loops
The directory `exercises/5_2_scripts` contains small scripts that alter arrays of numbers
in a non-functional way. Your job is to rewrite them using array methods, without any loops.

#### 5.3. Cat statistics
Array methods are really useful when you need to get some specific values from complex objects (for example, when your 
application calls an external API that returns a lot of data but you only need some of it).

The file `data/cats.json` contains a list of cats and some of their features (like names). It is supposed to print out
some interesting(?) statistics about the cats: how many there are, who has the longest name and so on. None of these 
computations have programmed, though, it's your job to code them. (Some of these are not easy to do, especially if you're
only just starting, so don't get discouraged if you can't do everything right away!)

There are some helper functions that you might find useful. If you want a more difficult exercise, you can delete 
the helper functions or their contents and write those yourself!  

### Links from slides
* ECMAScript 6 — New Features: Overview & Comparison: [http://es6-features.org]
* Node.js ES2015 Support: [https://node.green/]
* MDN web docs - Array: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
]
* Immer.js: [https://immerjs.github.io/immer/docs/introduction]
