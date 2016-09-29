# Introduction to Processing
### Hans van Arken
2016-2017  

![Wordcloud](img/cloud2.jpg)
<!--nextslide-->
## Prerequisites

You should be familiar with these subjects before continuing with this lesson:

* Datatypes: String, float and int
* Arrays
* Drawing shapes and text

<!--nextslide-->
## Basic setup

```text/x-java
String prologue = "Two households, both alike in dignity, In fair Verona, where we lay our scene, From ancient grudge break to new mutiny, Where civil blood makes civil hands unclean. From forth the fatal loins of these two foes A pair of star-cross'd lovers take their life; Whose misadventur'd piteous overthrows Doth with their death bury their parents' strife. The fearful passage of their death-mark'd love, And the continuance of their parents' rage, Which but their children's end naught could remove, Is now the two hours' traffic of our stage; The which, if you with patient ears attend, What here shall miss, our toil shall strive to mend.";

void setup() {
    size(500,500);
    noStroke();
    textAlign(CENTER, CENTER);
}

void draw() {
    noLoop();
}
```
<!--nextslide-->
## HTTP requests

We're going to connect to an API, which is a way to connect to a webserver without using the browser. More on that in the next lesson.  
To connect we need to extend the capabilities of Processing with a [library](https://processing.org/reference/libraries/). Libraries extend Processing beyond graphics and images into audio, video, and communication with other devices.  

The library we need can be installed through: `Sketch > Import Library > Add Library`. Search for `HTTP Requests for Processing`, select and press Install. Now you can close this screen.
If everything went smoothly you can now see the HTTP Requests library under `Sketch > Import Library`. By clicking it a line is added to the top of your sketch.

```text/x-java
import http.requests.*;
```
<!--nextslide-->
## HTTP requests
Search the Processing [libraries](https://processing.org/reference/libraries/) page for `HTTP Requests for Processing`. The link will take you to a page with example code. This code will need to be adjusted for our needs and pasted in the setup function.

```text/x-java
import http.requests.*;

String prologue = "Two households, both alike in dignity, In fair Verona, where we lay our scene, From ancient grudge break to new mutiny, Where civil blood makes civil hands unclean. From forth the fatal loins of these two foes A pair of star-cross'd lovers take their life; Whose misadventur'd piteous overthrows Doth with their death bury their parents' strife. The fearful passage of their death-mark'd love, And the continuance of their parents' rage, Which but their children's end naught could remove, Is now the two hours' traffic of our stage; The which, if you with patient ears attend, What here shall miss, our toil shall strive to mend.";

void setup() {
    size(500,500);
    noStroke();
    textAlign(CENTER, CENTER);
    
    // Do a POST request to our API
    PostRequest post = new PostRequest("http://mouseover.nl/textapi/wordcount.php");
    post.addData("text", prologue);
    post.send();
    
    // println the result
    println( post.getContent() );
      
}

void draw() {
    noLoop();
}
```

Running this code should show you the following message in the console, which means everything worked fine. (Note: the online version on this webpage does not have a console.) 
```
[{"word":"Two","amount":1},{"word":"households","amount":1},{"word":"both","amount":1},{"word":"alike","amount":1},{"word":"in","amount":1},{"word":"dignity","amount":1},{"word":"In","amount":1},{"word":"fair","amount":1},{"word":"Verona","amount":1},{"word":"where","amount":1},{"word":"we","amount":1},{"word":"lay","amount":1},{"word":"our","amount":3},{"word":"scene","amount":1},{"word":"From","amount":2},{"word":"ancient","amount":1},{"word":"grudge","amount":1},{"word":"break","amount":1},{"word":"to","amount":2},{"word":"new","amount":1},{"word":"mutiny","amount":1},{"word":"Where","amount":1},{"word":"civil","amount":2},{"word":"blood","amount":1},{"word":"makes","amount":1},{"word":"hands","amount":1},{"word":"unclean","amount":1},{"word":"forth","amount":1},{"word":"the","amount":3},{"word":"fatal","amount":1},{"word":"loins","amount":1},{"word":"of","amount":5},{"word":"these","amount":1},{"word":"two","amount":2},{"word":"foes","amount":1},{"word":"A","amount":1},{"word":"pair","amount":1},{"word":"star","amount":1},{"word":"cross'd","amount":1},{"word":"lovers","amount":1},{"word":"take","amount":1},{"word":"their","amount":6},{"word":"life","amount":1},{"word":"Whose","amount":1},{"word":"misadventur'd","amount":1},{"word":"piteous","amount":1},{"word":"overthrows","amount":1},{"word":"Doth","amount":1},{"word":"with","amount":2},{"word":"death","amount":2},{"word":"bury","amount":1},{"word":"parents'","amount":2},{"word":"strife","amount":1},{"word":"The","amount":2},{"word":"fearful","amount":1},{"word":"passage","amount":1},{"word":"mark'd","amount":1},{"word":"love","amount":1},{"word":"And","amount":1},{"word":"continuance","amount":1},{"word":"rage","amount":1},{"word":"Which","amount":1},{"word":"but","amount":1},{"word":"children's","amount":1},{"word":"end","amount":1},{"word":"naught","amount":1},{"word":"could","amount":1},{"word":"remove","amount":1},{"word":"Is","amount":1},{"word":"now","amount":1},{"word":"hours'","amount":1},{"word":"traffic","amount":1},{"word":"stage","amount":1},{"word":"which","amount":1},{"word":"if","amount":1},{"word":"you","amount":1},{"word":"patient","amount":1},{"word":"ears","amount":1},{"word":"attend","amount":1},{"word":"What","amount":1},{"word":"here","amount":1},{"word":"shall","amount":2},{"word":"miss","amount":1},{"word":"toil","amount":1},{"word":"strive","amount":1},{"word":"mend","amount":1},{"word":"","amount":1}]
```

<!--nextslide-->
## JSON
```
[{"word":"Two","amount":1},{"word":"households","amount":1},{"word":"both","amount":1},{"word":"alike","amount":1},{"word":"in","amount":1},{"word":"dignity","amount":1},{"word":"In","amount":1},{"word":"fair","amount":1},{"word":"Verona","amount":1},{"word":"where","amount":1},{"word":"we","amount":1},{"word":"lay","amount":1},{"word":"our","amount":3},{"word":"scene","amount":1},{"word":"From","amount":2},{"word":"ancient","amount":1},{"word":"grudge","amount":1},{"word":"break","amount":1},{"word":"to","amount":2},{"word":"new","amount":1},{"word":"mutiny","amount":1},{"word":"Where","amount":1},{"word":"civil","amount":2},{"word":"blood","amount":1},{"word":"makes","amount":1},{"word":"hands","amount":1},{"word":"unclean","amount":1},{"word":"forth","amount":1},{"word":"the","amount":3},{"word":"fatal","amount":1},{"word":"loins","amount":1},{"word":"of","amount":5},{"word":"these","amount":1},{"word":"two","amount":2},{"word":"foes","amount":1},{"word":"A","amount":1},{"word":"pair","amount":1},{"word":"star","amount":1},{"word":"cross'd","amount":1},{"word":"lovers","amount":1},{"word":"take","amount":1},{"word":"their","amount":6},{"word":"life","amount":1},{"word":"Whose","amount":1},{"word":"misadventur'd","amount":1},{"word":"piteous","amount":1},{"word":"overthrows","amount":1},{"word":"Doth","amount":1},{"word":"with","amount":2},{"word":"death","amount":2},{"word":"bury","amount":1},{"word":"parents'","amount":2},{"word":"strife","amount":1},{"word":"The","amount":2},{"word":"fearful","amount":1},{"word":"passage","amount":1},{"word":"mark'd","amount":1},{"word":"love","amount":1},{"word":"And","amount":1},{"word":"continuance","amount":1},{"word":"rage","amount":1},{"word":"Which","amount":1},{"word":"but","amount":1},{"word":"children's","amount":1},{"word":"end","amount":1},{"word":"naught","amount":1},{"word":"could","amount":1},{"word":"remove","amount":1},{"word":"Is","amount":1},{"word":"now","amount":1},{"word":"hours'","amount":1},{"word":"traffic","amount":1},{"word":"stage","amount":1},{"word":"which","amount":1},{"word":"if","amount":1},{"word":"you","amount":1},{"word":"patient","amount":1},{"word":"ears","amount":1},{"word":"attend","amount":1},{"word":"What","amount":1},{"word":"here","amount":1},{"word":"shall","amount":2},{"word":"miss","amount":1},{"word":"toil","amount":1},{"word":"strive","amount":1},{"word":"mend","amount":1},{"word":"","amount":1}]
```

Looking at this code you can see it is an array (because of the square brackets \[\] )

This array is a list of something called **JSON objects**. Let's look at one JSON object.

Each object is delimited with curly brackets {}, and contains sets of **key:value**-pairs.

```text/x-java
   {"word":"their","amount":6 }
      ↑       ↑        ↑    ↑
     key    value    key  value
```

You can see the **key** is like a name for the data, the **value** is the actual data. JSON objects are very useful for storing a set of properties of a thing, in our case a word from the prologue of R&J. 

An array of JSON objects is called a JSON array.
<!--nextslide-->
## Parse the JSON

Right now Processing thinks the response from the API is just a long String. We need to tell it that the String is actually an array of JSON objects, and store it in a JSON array.

```text/x-java
import http.requests.*;

JSONArray json; // <- We add the JSON array here
String prologue = "Two households, both alike in dignity, In fair Verona, where we lay our scene, From ancient grudge break to new mutiny, Where civil blood makes civil hands unclean. From forth the fatal loins of these two foes A pair of star-cross'd lovers take their life; Whose misadventur'd piteous overthrows Doth with their death bury their parents' strife. The fearful passage of their death-mark'd love, And the continuance of their parents' rage, Which but their children's end naught could remove, Is now the two hours' traffic of our stage; The which, if you with patient ears attend, What here shall miss, our toil shall strive to mend.";

void setup() {
    size(500,500);
    noStroke();
    textAlign(CENTER, CENTER);
    
    // Do a POST request to our API
    PostRequest post = new PostRequest("http://mouseover.nl/textapi/wordcount.php");
    post.addData("text", prologue);
    post.send();
    
    // println the result
    println( post.getContent() );
    
    // parse the String to a JSON array
    json = parseJSONArray(post.getContent());
    
}

void draw() {
    noLoop();
}
```
<!--nextslide-->
## Get the object
We loop through the JSON array, and draw each word individually. The size variable is based on the `amount` property of the JSON object.

To loop we use the `for` command, which starts the integer `i` at 0, and raises it by 1 each loop until i is no longer smaller than `json.size()`, which is the length of the JSON array.

```text/x-java
for (int i = 0; i < json.size(); i++) {
    // get the JSON Object at number i in the JSON array
    JSONObject countedWord = json.getJSONObject(i);
  
    // grab the `word` and `amount` properties and temporarily store them in variables
    String word = countedWord.getString("word");
    int size = countedWord.getInt("amount");
}
```
<!--nextslide-->
## Draw the words

The complete code: 

```text/x-java
import http.requests.*;

JSONArray json; // <- We add the JSON array here
String prologue = "Two households, both alike in dignity, In fair Verona, where we lay our scene, From ancient grudge break to new mutiny, Where civil blood makes civil hands unclean. From forth the fatal loins of these two foes A pair of star-cross'd lovers take their life; Whose misadventur'd piteous overthrows Doth with their death bury their parents' strife. The fearful passage of their death-mark'd love, And the continuance of their parents' rage, Which but their children's end naught could remove, Is now the two hours' traffic of our stage; The which, if you with patient ears attend, What here shall miss, our toil shall strive to mend.";

void setup() {
    size(500,500);
    noStroke();
    textAlign(CENTER, CENTER);
    
    // Do a POST request to our API
    PostRequest post = new PostRequest("http://mouseover.nl/textapi/wordcount.php");
    post.addData("text", prologue);
    post.send();
    
    // println the result
    println( post.getContent() );
    
    // parse the String to a JSON array
    json = parseJSONArray(post.getContent());
    
}

void draw() {
  for (int i = 0; i < json.size(); i++) {
      JSONObject countedWord = json.getJSONObject(i);
      
      String word = countedWord.getString("word");
      int size = countedWord.getInt("amount");
      float x = random(50,450);
      float y = random(50,450);
      
      fill(128,255,128);
      ellipse(x, y, size*10, size*10);
      
      fill(0,0,0);
      text(word, x, y); 
  }
  noLoop();
}
```
<!--nextslide-->
## More code

A different version of the same code, which loads a text file `act1.txt` from your computer. Make sure this txt file is in a **data/** folder that is stored next to your .pde file.
It also uses a sorted version of the API, which puts the most counted word first.
 
 ```text/x-java
 import http.requests.*;
 String wordDump;
 JSONArray json;
 int maxWords = 50;
 
 void setup() {
   size(1000, 1000);
   
   //wordDump = "this is a text that has repeating words is is is that that";
   //wordDump = "Two households, both alike in dignity, In fair Verona, where we lay our scene, From ancient grudge break to new mutiny, Where civil blood makes civil hands unclean. From forth the fatal loins of these two foes A pair of star-cross'd lovers take their life; Whose misadventur'd piteous overthrows Doth with their death bury their parents' strife. The fearful passage of their death-mark'd love, And the continuance of their parents' rage, Which but their children's end naught could remove, Is now the two hours' traffic of our stage; The which, if you with patient ears attend, What here shall miss, our toil shall strive to mend.";
   byte b[] = loadBytes("act1.txt");
   wordDump = new String(b);
 
   String url = "http://mouseover.nl/textapi/wordcountSorted.php";
   
   PostRequest post = new PostRequest(url);
   post.addData("text", wordDump);
   post.send();
   println(post.getContent());
   json = parseJSONArray(post.getContent()); // turn the content string into a json array
   
   fill(0,0,0);
   textSize(12);
   textAlign(LEFT, TOP);
 }
 
 void draw() {
   background(200,128,0);
   
   float step = height/maxWords;
   
   for (int i = 0; i < maxWords; i++) {
     JSONObject object = json.getJSONObject(i);
     
     String word = object.getString("word");
     int amount = object.getInt("amount");
     float x = 0;
     float y = i * step;
     
     fill(0,128,128);
     rect(x,y,amount*3,step-3);
     
     textSize(12);
     fill(0,0,0);
     text(word, x+ 10, y);
   }
   
   noLoop(); 
 }
 ```
