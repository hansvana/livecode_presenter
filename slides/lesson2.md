# Introduction to Processing
### Hans van Arken
2016-2017

<!--nextslide-->
## Drawing with words

```text/x-java
String s = "Hello World!";

void setup() {
    size(300,300);
    textAlign(CENTER, CENTER);
}

void draw() {
    textSize(32);
    fill(0,100,50);

    text(s, 150, 150);
}
```