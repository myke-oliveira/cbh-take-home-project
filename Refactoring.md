# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

## Unit tests

 * Expand the existing test for no given input to check any falsy input, as it is not a trivial choice.
 * As function name includes the "deterministic" adjetive, so it must return save value for same inputs.
 * Check if partition key given by input object is respected by the function.
## Refactoring

I eliminated chaining dependence among variables, returning from function as early as possible, in that way, code reader doesn't need to check, for example, that a falsy `event` makes `candidate` to be the trivial partition key and then the trivial partition key return, showing that an falsy `event` makes trivial partition key to be returned and avoiding uneeded computation. That makes `candidate` variable name not to have sense anymore, so it was changed to `key`, name `data` was changed to something more especific as well. It is also documented that `digest` method returns a string if a parameter is given, so there is no need to check the type of `key`.
