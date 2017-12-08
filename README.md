# Prime Tables
**An application that, once run, asks for an numeric input (N) and outputs a multiplication table of (N) prime numbers**

## How to run

The page is available at https://alequin.github.io/prime_tables/. It can also be run locally using the following steps:

* Requirements
  * Node.js
  * npm


* Steps to run locally
  1. Install all dependencies using **npm install** in the terminal.
  2. Run webpack using the command **npm run build** to create the bundle
  3. Open the web page in your default browser with **npm start**

## How to use
* At the top of the screen an input box is provided. Enter the amount of prime numbers you wish to generate and press enter / click generate.

* The table will be refreshed using the provided value.

* If the table is to large for the screen it will become scrollable.

* Each table cell may be clicked.
  * Clicking on a prime number will display its position
  * Clicking on any of the products will display the two values used to produced it.

#### Additional feature
* While the algorithm which generates prime numbers can produce
large values rendering all of them and their products causes slow rendering and poor scrolling.

* To fix this the branch **arrowScroll** extends the Table component. The grid becomes a fixed size and may be traversed using the arrow keys or a given positional input.

## What i'm pleased with
* I was please with the object **PrimeMultiplicationTable** and the method **valueAt**.
  * Initially my idea was to produce a multidimensional array of all the products, which would then be looped over while rendering. This however resulted in stack trace errors when used with large prime numbers due to the amount of products produced.

  * The method **valueAt** fixes this and makes it easy to produce any value on the table.

## What I would do with more time
* Create a way for the prime numbers to always be on screen and correctly positioned relative to the products viewed.

* Present the table information, shown when a cell is click on, in a nicer way.

## Aliases

To activate a few aliases for commonly run terminal commands run **source project_aliases.txt** in the terminal. This will only work in the terminal they are activate in.

This will activate the aliases:
* open: Open app in default browser
* tst: Run all tests
* tst-u: Run all tests and update snapshots
* bld: run webpack to build bundle
* clear-project-aliases: remove these aliases
