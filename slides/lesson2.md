# Introduction to Processing
### Hans van Arken
2016-2017  

![Wordcloud](img/cloud.jpg)
<!--nextslide-->
## Strings

```text/x-java
int age = 21;                   // integer

float pi = 3.14;                // floating point number

boolean cool = true;            // true or false

String hello = "Hello World!";  // a string of characters
```
<!--nextslide-->
## Drawing with words

```text/x-java
String hello = "Hello World!";

void setup() {
    size(300,300);
}

void draw() {
    textSize(32);
    fill(0,100,50);

    text(hello, 150, 150);
}
```
<!--nextslide-->
## textAlign

See [https://processing.org/reference/textAlign_.html](https://processing.org/reference/textAlign_.html)
```text/x-java
String hello = "Hello World!";

void setup() {
    size(300,300);
    textAlign(CENTER, CENTER);
}

void draw() {
    textSize(32);
    fill(0,100,50);

    text(hello, 150, 150);
}
```
<!--nextslide-->
## Prologue

### *Two households, both alike in dignity, In fair Verona, where we lay our scene, From ancient grudge break to new mutiny, Where civil blood makes civil hands unclean. From forth the fatal loins of these two foes A pair of star-cross'd lovers take their life; Whose misadventur'd piteous overthrows Doth with their death bury their parents' strife. The fearful passage of their death-mark'd love, And the continuance of their parents' rage, Which but their children's end naught could remove, Is now the two hours' traffic of our stage; The which, if you with patient ears attend, What here shall miss, our toil shall strive to mend.*

## The simpler (but longer) way

  * Remove all unused characters
  * Convert everything to lowercase 
  * Split the string into a list of words

<!--nextslide-->
## replaceAll

```text/x-java
String prologue = "Two households, both alike in dignity, In fair Verona, where we lay our scene, From ancient grudge break to new mutiny, Where civil blood makes civil hands unclean. From forth the fatal loins of these two foes A pair of star-cross'd lovers take their life; Whose misadventur'd piteous overthrows Doth with their death bury their parents' strife. The fearful passage of their death-mark'd love, And the continuance of their parents' rage, Which but their children's end naught could remove, Is now the two hours' traffic of our stage; The which, if you with patient ears attend, What here shall miss, our toil shall strive to mend.";

void setup() {
  size(400,400);
  textSize(12);
  fill(0);

  prologue = prologue.replaceAll(",", "");
}
    
void draw() {
    text(prologue, 0, 10);
}
```
<!--nextslide-->
## Array

Array is a fancy word for list.

```
String[] words = new String[3];
words[0] = "Hi";
words[1] = "welcome";
words[2] = "home!";
```
<!--nextslide-->
## Array and split

```text/x-java
String prologue = "Two households, both alike in dignity, In fair Verona, where we lay our scene, From ancient grudge break to new mutiny, Where civil blood makes civil hands unclean. From forth the fatal loins of these two foes A pair of star-cross'd lovers take their life; Whose misadventur'd piteous overthrows Doth with their death bury their parents' strife. The fearful passage of their death-mark'd love, And the continuance of their parents' rage, Which but their children's end naught could remove, Is now the two hours' traffic of our stage; The which, if you with patient ears attend, What here shall miss, our toil shall strive to mend.";

String[] words;

void setup() {
  size(300, 300);
  textSize(12);
  fill(0);

  prologue = prologue.replaceAll("\\,", "");
  prologue = prologue.replaceAll("\\.", "");
  words = split(prologue, " ");
}

void draw() {  
  text(words[0], 0, 10);
}
```
<!--nextslide-->
## for

for every `thing` in `list` do `action`

```text/x-java
for (String word : words) {

}
```
<!--nextslide-->
## for

```text/x-java
String prologue = "Two households, both alike in dignity, In fair Verona, where we lay our scene, From ancient grudge break to new mutiny, Where civil blood makes civil hands unclean. From forth the fatal loins of these two foes A pair of star-cross'd lovers take their life; Whose misadventur'd piteous overthrows Doth with their death bury their parents' strife. The fearful passage of their death-mark'd love, And the continuance of their parents' rage, Which but their children's end naught could remove, Is now the two hours' traffic of our stage; The which, if you with patient ears attend, What here shall miss, our toil shall strive to mend.";

String[] words;

void setup() {
  size(400,400);
  textSize(12);
  fill(0);

  prologue = prologue.replaceAll("\\,", "");
  prologue = prologue.replaceAll("\\.", "");
  words = split(prologue, " ");
}

void draw() {  
  for (String word : words) {
    text(word, 0, 10));
  }
}
```
<!--nextslide-->
## A little randomness

```text/x-java
String prologue = "Two households, both alike in dignity, In fair Verona, where we lay our scene, From ancient grudge break to new mutiny, Where civil blood makes civil hands unclean. From forth the fatal loins of these two foes A pair of star-cross'd lovers take their life; Whose misadventur'd piteous overthrows Doth with their death bury their parents' strife. The fearful passage of their death-mark'd love, And the continuance of their parents' rage, Which but their children's end naught could remove, Is now the two hours' traffic of our stage; The which, if you with patient ears attend, What here shall miss, our toil shall strive to mend.";

String[] words;

void setup() {
  size(400,400);
  textSize(12);
  fill(0);

  prologue = prologue.replaceAll("\\,", "");
  prologue = prologue.replaceAll("\\.", "");
  words = split(prologue, " ");
}

void draw() {  
  for (String word : words) {
    textSize(random(10,30));
    text(word, random(400), random(400));
  }

}
  
```
<!--nextslide-->
## regex

### The shorter (and much more magical) way

Regular Expressions

[RegExr](http://regexr.com/)
<!--nextslide-->
## regex

```text/x-java
String pattern = "[a-zA-Z-']+";

//      []   Match anything between these brackets
//      a-z  Matches a character in the range "a" to "z"
//      A-Z  Matches a character in the range "A" to "Z"
//      -    Matches a "-" character
//      '    Matches a "'" character
//      +    Match one or more of these tokens
```
`Two` `households`, `both` `alike` `in` `dignity`, `In` `fair` `Verona`, `where` `we` `lay` `our` `scene`, `From` `ancient` `grudge` `break` `to` `new` `mutiny`, `Where` `civil` `blood` `makes` `civil` `hands` `unclean`. `From` `forth` `the` `fatal` `loins` `of` `these` `two` `foes` `A` `pair` `of` `star-cross'd` `lovers` `take` `their` `life;` `Whose` `misadventur'd` `piteous` `overthrows` `Doth` `with` `their` `death` `bury` `their` `parents'` `strife`. `The` `fearful` `passage` `of` `their` `death-mark'd` `love`, `And` `the` `continuance` `of` `their` `parents'` `rage`, `Which` `but` `their` `children's` `end` `naught` `could` `remove`, `Is` `now` `the` `two` `hours'` `traffic` `of` `our` `stage;` `The` `which`, `if` `you` `with` `patient` `ears` `attend`, `What` `here` `shall` `miss`, `our` `toil` `shall` `strive` `to` `mend`.
<!--nextslide-->
## matchAll

```text/x-java
String text = "Two households, both alike in dignity, In fair Verona, where we lay our scene, From ancient grudge break to new mutiny, Where civil blood makes civil hands unclean. From forth the fatal loins of these two foes A pair of star-cross'd lovers take their life; Whose misadventur'd piteous overthrows Doth with their death bury their parents' strife. The fearful passage of their death-mark'd love, And the continuance of their parents' rage, Which but their children's end naught could remove, Is now the two hours' traffic of our stage; The which, if you with patient ears attend, What here shall miss, our toil shall strive to mend.";

String[][] words;

void setup() {
  words = matchAll(text, "[a-zA-Z]+");
}

void draw() {
}
```
<!--nextslide-->
## for

```text/x-java
String text = "Two households, both alike in dignity, In fair Verona, where we lay our scene, From ancient grudge break to new mutiny, Where civil blood makes civil hands unclean. From forth the fatal loins of these two foes A pair of star-cross'd lovers take their life; Whose misadventur'd piteous overthrows Doth with their death bury their parents' strife. The fearful passage of their death-mark'd love, And the continuance of their parents' rage, Which but their children's end naught could remove, Is now the two hours' traffic of our stage; The which, if you with patient ears attend, What here shall miss, our toil shall strive to mend.";

String[][] words;

void setup() {
  size(300,300);
  words = matchAll(text, "[a-zA-Z]+");
}

void draw() {
  for (String[] word : words){
    textSize(random(10,30));
    text(word[0], random(400), random(400));
  }
  noLoop();
}
```
