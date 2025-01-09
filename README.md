# Unexpected NaN Comparison in JavaScript

This repository demonstrates an uncommon and potentially confusing behavior of JavaScript's comparison operators when dealing with `NaN` (Not a Number).

## The Bug

In JavaScript, `NaN` is a special value that represents an invalid numerical result.  The issue arises when comparing `NaN` using either loose (`==`) or strict (`===`) equality operators.  Counterintuitively, `NaN` is never equal to itself. 

The `bug.js` file contains a simple function `foo` that illustrates this behavior.

## The Solution

To reliably check if a value is `NaN`, use the `isNaN()` global function.  This function is designed specifically for this purpose and avoids the pitfalls of direct comparison. 

The `bugSolution.js` file provides a corrected version of the `foo` function using `isNaN()`.

## How to Run

1. Clone this repository.
2. Navigate to the repository's directory in your terminal.
3. Run the JavaScript files using Node.js (or your preferred JavaScript environment):

```bash
node bug.js
node bugSolution.js
```