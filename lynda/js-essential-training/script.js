<<<<<<< HEAD
function findBiggestFraction(a, b) {
  a > b ?
    console.log("a: ", a):
    console.log("b: ", b);
}

var firstFraction = 3/4;
var secondFraction = 5/7;

findBiggestFraction(firstFraction, secondFraction);
findBiggestFraction(7/16, 13/25);
findBiggestFraction(1/2, 3/4);
=======
function Course(title, instructor, level, published, views) {
  this.title = title;
  this.instructor = instructor;
  this.level = level;
  this.published = published;
  this.views = views;
  this.updateViews = function() {
    return ++this.views;
  }
}

var courses = [
  new Course("JavaScript Essential Training", "Morten Rand-Hendriksen", 1, true, 0),
  new Course("Up and Running with ECMAScript 6", "Eve Porcello", 1, true, 123456)
]

console.log(courses[0].instructor);
>>>>>>> 2d7ba3aa45ba1e5432ea4e8fc3bf5395e51b08ff
