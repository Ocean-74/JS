# Week 1–2 JavaScript Learning Summary

This document is a **personal learning summary** of what I have understood so far while learning JavaScript from scratch. This is not copied theory — it reflects concepts I actually practiced, struggled with, and fixed by writing code.

---

## JavaScript Basics

I started with understanding what JavaScript is and how it runs in the browser. I learned about **variables** using `let` and `const`, and why `var` is avoided. I understood different **data types** like number, string, boolean, undefined, null, and object.

A key concept I learned was:

* `undefined` means a variable exists but has no value assigned
* `null` means the variable is intentionally empty

I also learned the difference between:

* `==` → compares values after type conversion
* `===` → compares value and data type (strict comparison)

This helped me understand why `===` is safer and preferred in real code.

---

## Truthy and Falsy Values

I learned that JavaScript treats some values as `false` in conditions even if they are not literally `false`. Values like `0`, `""`, `null`, `undefined`, and `NaN` are **falsy**, while most other values are **truthy**.

This concept helped me understand how conditions work internally instead of just memorizing syntax.

---

## Control Flow and Loops

I practiced writing conditions using `if`, `else if`, and `else`. I used these with **for loops** and **while loops** to:

* Check even and odd numbers
* Apply conditions inside loops
* Control when a loop should stop

This made me understand how programs execute step by step.

---

## Functions

I learned how to create functions to avoid repeating logic. I understood:

* Parameters vs arguments
* Returning values instead of printing inside functions
* Why code reuse is important

I realized that copying logic multiple times makes code harder to fix and maintain.

---

## Arrays

I worked with arrays to store multiple values. I practiced:

* Iterating through arrays
* Accessing elements using index
* Finding even/odd numbers from arrays
* Calculating sum of elements
* Counting values based on conditions

I also learned the difference between **element position** and **element value**, which caused bugs initially.

---

## Objects

I learned how objects represent real-world data using key–value pairs. I practiced:

* Creating and updating objects
* Adding methods inside objects
* Using `this` to access object properties

I understood that `this` refers to the **current object**, and mistakes happen when it points somewhere else.

---

## CRUD Logic (Basic)

I implemented basic CRUD operations using arrays of objects:

* Create → add a user
* Read → get user data
* Update → modify user properties
* Delete → remove a user

This helped me understand how backend logic works at a basic level.

---

## Mistakes and Learning

I made many mistakes such as:

* Using the array name instead of the loop variable
* Returning too early inside loops
* Writing logic outside objects incorrectly

Fixing these mistakes taught me more than getting correct output on the first try.

---

## Current Understanding

I now understand that:

* Logic matters more than syntax
* Functions should return values
* Objects and arrays are reference types
* Small mistakes can break correct logic

