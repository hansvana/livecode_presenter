# Introduction to Processing
### Hans van Arken
2016-2017

![Processing](img/processing.jpg)
<!--nextslide-->
## Ben Fry
![Ben Fry](img/benfry-allstreets.jpg)

###### Ben Fry - All Streets (2008) [http://benfry.com/projects/](http://benfry.com/projects/)</sup>
<!--nextslide-->
## Casey Reas
![Casey Reas](img/caseyreas-tissue.jpg)

###### Casey Reas - Tissue Collection (2008) [http://www.reas.com/tissue_collection/](http://www.reas.com/tissue_collection/)
<!--nextslide-->
<iframe src="https://player.vimeo.com/video/173760057?autoplay=1&title=0&byline=0&portrait=0" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
###### [cf. city flows](https://vimeo.com/173760057) from FH Potsdam
<!--nextslide-->
<iframe src="https://player.vimeo.com/video/17230100?autoplay=1&title=0&byline=0&portrait=0" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
###### [The Dumpster](https://vimeo.com/17230100) from Golan Levin
<!--nextslide-->
<iframe src="https://player.vimeo.com/video/86949573?autoplay=1&title=0&byline=0&portrait=0" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
###### [Phantogram &quot;Fall in Love&quot;]("https://vimeo.com/86949573") from Timothy Saccenti
<!--nextslide-->
<iframe src="https://player.vimeo.com/video/85913081?autoplay=1&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
###### [Filament Sculptures](https://vimeo.com/85913081) from Lia
<!--nextslide-->
<iframe src="https://player.vimeo.com/video/34891612?autoplay=1&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
###### [Patina.ac.uk project wiki visualisation](https://vimeo.com/34891612) from tom schofield
<!--nextslide-->
<iframe src="https://player.vimeo.com/video/5067883?autoplay=1&title=0&byline=0&portrait=0" width="640" height="448" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
###### [Hatching](https://vimeo.com/5067883) from [Conditional Design](http://conditionaldesign.org)
<!--nextslide-->
# Conditional Design 
Rules > Possibilities > Outcomes

![Eno Henze](http://enohenze.de/wp-content/uploads/2008/07/red_ambush_small.jpg) 
###### [Red Ambush](http://enohenze.de/ambush/) by Eno Henze 
<!--nextslide-->
# Pale blue dot

```text/x-java

   fill(0, 128, 255);
   ellipse(50, 50, 25, 25);
```
<!--nextslide-->
# Pale blue dot

```text/x-java

   fill(0, 128, 255);
   ellipse(50, 50, 25, 25);
```

#### &#9758; Install and open Processing from [processing.org](http://processing.org). Copy this code and press Run.
Don't worry about getting the numbers or spaces exactly right, but everything else has to match exactly.  
Try and change every number to figure out what each of them does.
<!--nextslide-->
# RTFM

[Processing language reference](https://processing.org/reference/)  
[Coordinate system](https://processing.org/tutorials/drawing/)
<!--nextslide-->
# home.pde

![Our house](img/house.jpg)

#### &#9758; Make a copy of this drawing in Processing.
Use the language reference as much as you want.  
You'll probably use: size, background, noStroke, fill, rectangle, triangle and ellipse.
<!--nextslide-->
# Basic Processing sketch

```text/x-java
void setup() {
    // runs once
}

void draw() {    
    // loops forever
}
```
<!--nextslide-->
# Basic Processing sketch

```text/x-java
void setup() {
    size(200, 200);
    background(0, 128, 255);
    noStroke();
    fill(255, 255, 255);
}

void draw() {    
    ellipse(50, 50, 25, 25);
}
```
<!--nextslide-->
# Motion!

```text/x-java
int x = 0; // a new variable appears!

void setup() {
    size(200,200);    
    noStroke();
    fill(0, 128, 255);
}

void draw() {
    background(255, 255, 255);      
    ellipse(x, 50, 25, 25);

    x = x + 1;  
}
```
<!--nextslide-->
# Variables

A bit of memory you can give a name, so you can store stuff* there for later.

*Stuff:
* **int** an integer, a whole number
* **float** a number with a . floating in it somewhere, sometimes
* **String** a sequence of characters
* **boolean** can only be **_true_** or **_false_**

There are more, but we'll deal with those later
<!--nextslide-->
# If

If x is bigger than 200  
  x should be 0  
else  
  x should be x plus 1
<!--nextslide-->
# If

```text/x-java
int x = 0;

void setup() {
    size(200,200);    
    noStroke();
    fill(0, 128, 255);
}

void draw() {
    background(255, 255, 255);      
    ellipse(x, 50, 25, 25);

    if (x > 200) {
        x = 0;
    } else {
        x = x + 1;  
    }
}
```
<!--nextslide-->
# Confetti

```text/x-java
float x = 0;
float y = 0;

void setup() {
    size(800,600);    
    noStroke();
     background(255, 255, 255); 
}

void draw() {   
    
    fill(random(255),random(255),random(255)); 
    
    x = random(800);
    y = random(600);
    
    ellipse(x, y, 25, 25);
}
```
<!--nextslide-->
# Mousefollower

```text/x-java
float x = 0;                  // these are the variables we need, all floating point values
float y = 0;
float xSpeed = 0;
float ySpeed = 0;

void setup() {
    size(800,600);    
    noStroke();
    background(255, 255, 255); 
}

void draw() {   
    
    fill(random(255),random(255),random(255)); // pick a random RGB color
    
    if (mouseX > x) {         // if the mouse is to the right of the ellipse
      xSpeed = xSpeed + 0.2;  // make its horizontal speed bigger
    } else {                  // if it's not
      xSpeed = xSpeed - 0.2;  // make the speed smaller
    }
    if (mouseY > y) {         // same for vertical
      ySpeed = ySpeed + 0.2; 
    } else {
      ySpeed = ySpeed - 0.2;
    }
    
    if (xSpeed > 3) {          // if the speed is too high
       xSpeed = 3;             // set it to a maximum
    }
    
    if (ySpeed > 3) {
       ySpeed = 3;
    }
    
    x = x + xSpeed;            // add (or distract) the speed to (or from) the position 
    y = y + ySpeed;
    
    ellipse(x, y, 25, 25);     // draw the ellipse at the x and y coordinates
}
```
<!--nextslide-->
# Color thingy

```text/x-java
float x = 0;    // our 'follower' follows the mouse, with coordinates and a speed
float y = 0;
float xSpeed = 0;
float ySpeed = 0;

float h = 0;    // a variable so we can store the hue

void setup() {
  colorMode(HSB,255);   // the colormode is HSB, so we can keep the saturation and brightness the same
                        // and only change the hue
  size(1000,800);
  stroke(128,20);
  background(0);
}

void draw() {
  //create 4 random points around our follower
  float x1 = x + random(-20,20);
  float y1 = y + random(-20,20);
  float x2 = x + random(-20,20);
  float y2 = y + random(-20,20);
  float x3 = x + random(-20,20);
  float y3 = y + random(-20,20);
  float x4 = x + random(-20,20);
  float y4 = y + random(-20,20);
  
  h = h + 0.5; // slowly increase the hue
  if (h > 255) h = 0;
  
  stroke(h,255,255,20);
  
  if (mouseX > x) {         // if the mouse is to the right of the ellipse
      xSpeed = xSpeed + 0.2;  // make its horizontal speed bigger
    } else {                  // if it's not
      xSpeed = xSpeed - 0.2;  // make the speed smaller
    }
    if (mouseY > y) {         // same for vertical
      ySpeed = ySpeed + 0.2; 
    } else {
      ySpeed = ySpeed - 0.2;
    }
    
    if (xSpeed > 3) {          // if the speed is too high
       xSpeed = 3;             // set it to a maximum
    }
    
    if (ySpeed > 3) {
       ySpeed = 3;
    }
    
    x = x + xSpeed;            // add (or distract) the speed to (or from) the position 
    y = y + ySpeed;
  
  
  
  // draw the lines
  line(x1, y1, mouseX + random(-20,20), mouseY + random(-20,20));
  line(x2, y2, mouseX + random(-20,20), mouseY + random(-20,20));
  line(x3, y3, mouseX + random(-20,20), mouseY + random(-20,20));
  line(x4, y4, mouseX + random(-20,20), mouseY + random(-20,20));
  
}
```