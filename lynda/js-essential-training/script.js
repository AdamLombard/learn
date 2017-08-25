function logScope() {
  var localVar = 2;

  if (true) {
    let localVar = "I'm diff!";
    console.log("inner :", localVar);
  }

  console.log("outer :", localVar);
}

logScope();