# compressed-string

Consider a string, S, that is a series of characters, each followed by its frequency as an integer. The string is not compressed correctly, so there may be many occurrences of the same character. A properly compressed string will consist of one instance of each character in alphabetical order followed by the total count of that character within the string.

For example, the string a3c9b2c1 has two instances where 'c' is followed by a count: once with 9 occurrences, and again with 1. It should be compressed to a3b2c10.

[execution time limit] 4 seconds (js)

[input] string s

The input string.

1 ≤ size of S ≤ 100000
'a' ≤ characters in S ≤ 'z'
1 ≤ frequency of each character in S ≤ 1000
[output] string

The correctly compressed string

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
