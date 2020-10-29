Review 29th October

MegaSoftWeird
wordprocessor - would like to add spellchecker
give a string as input
= a sentence or sequence of words
output of string 
misspelled words highlighted with tilde before and after
range of sizes, no full stops
only letters, other characters won't be in there
no spaces before and after
words are in UK english
hardcode words into dictonary 
capitalisation should be maintained in output
case insensitive for spellcheck

example input
"These words are spnelt correclty"
example output
"These words are ~spnelt~ ~correclty~"

input | output
"a"     "a"
"dgo"   "~dgo~"
"a dgo" "a ~dgo~"
"a Dgo" "a ~Dgo~"
"a dgo that has a hta"  "a ~dgo~ that has a ~hta~"

https://8thlight.com/blog/georgina-mcfadyen/2016/06/27/inside-out-tdd-vs-outside-in.html <= link from reviewer to get better at unit testing, do the hardcode way.