const geo = require('./geometry');
const uti = require('./utilities');


//Testing the Geometry module

//volumeOfRectangularPrism

console.log("Volume of rectangle prism\n\n");
console.log(geo.volumeOfRectangularPrism(10, 20, 30));

try{
    console.log(geo.volumeOfRectangularPrism(0, 19, 0));
}
catch(e){
    console.log(e);
}

try{
    console.log(geo.volumeOfRectangularPrism("hello", "I am", "Testing"));

}
catch(e){
    console.log(e);
}

try {
    console.log(geo.volumeOfRectangularPrism());

} catch (e) {
    console.log(e);
}

try {
    console.log(geo.volumeOfRectangularPrism(10, 10, -199));

} catch (e) {
    console.log(e);
}

try{
    console.log(geo.volumeOfRectangularPrism(10, 20));
} catch(e){
    console.log(e);
}
console.log("\n\n");


//surfaceAreaofRectangularPrism
console.log("Surface Area of Rectangular Prism\n\n");
console.log(geo.surfaceAreaofRectangularPrism(11, 22, 33));
try{
    console.log(geo.surfaceAreaofRectangularPrism(0, 2, 0));

}catch(e){
    console.log(e);
}

try {
    console.log(geo.surfaceAreaofRectangularPrism("hello", "I am", "Testing"));

} catch (e) {
    console.log(e);
}

try {
    console.log(geo.surfaceAreaofRectangularPrism(10, 11, -19));

} catch (e) {
    console.log(e);
}

try {
    console.log(geo.surfaceAreaofRectangularPrism(10, 20));

} catch (e) {
    console.log(e);
}

console.log("\n\n");

//volumeOfSphere
console.log("Volume Of Sphere\n\n");
console.log(geo.volumeOfSphere(10));

try {
    console.log(geo.volumeOfSphere(-2));

} catch (e) {
    console.log(e);
}
try {
    console.log(geo.volumeOfSphere("Hello"));

} catch (e) {
    console.log(e);
}
try {
    console.log(geo.volumeOfSphere(0));

} catch (e) {
    console.log(e);
}
try {
    console.log(geo.volumeOfSphere());

} catch (e) {
    console.log(e);
}

console.log("\n\n");

//surfaceAreaOfSphere


console.log("Surface Area of Sphere\n\n");
console.log(geo.surfaceAreaOfSphere(15));





try {
    console.log(geo.surfaceAreaOfSphere(0));

} catch (e) {
    console.log(e);
}

try {
    console.log(geo.surfaceAreaOfSphere(-3));
} catch (e) {
    console.log(e);
}

try {
    console.log(geo.surfaceAreaOfSphere("hello"));

} catch (e) {
    console.log(e);
}

try {
    console.log(geo.surfaceAreaOfSphere());

} catch (e) {
    console.log(e);
}


console.log("\n\n");



// Testing Utilites Module

// deepEquality
console.log("Deep Equality\n\n");

console.log(uti.deepEquality({a: 1, b: 2}, {b: 2, a: 1}));

console.log(uti.deepEquality({a: 1, b: 2}, {a: 1, b: 2, c: 3}));
console.log(uti.deepEquality({a: 1, b: 2}, {a: 1, b:1}));


try {
    console.log(uti.deepEquality("Hello"));
} catch (e) {
    console.log(e);
}

try {
    console.log(uti.deepEquality());
} catch (e) {
    console.log(e);
}


console.log("\n\n");

// UniqueElements

console.log("Unique elements\n\n");

console.log(uti.uniqueElements([1, 2, 3, 4, 5, 1, 1, 2, 3, 4, 1]));
try {
    console.log(uti.uniqueElements("hello"));
} catch (e) {
    console.log(e);
}

try {
    console.log(uti.uniqueElements(12341));
} catch (e) {
    console.log(e);
}

try {
    console.log(uti.uniqueElements([]));
} catch (e) {
    console.log(e);
}

try {
    console.log(uti.uniqueElements());
} catch (e) {
    console.log(e);
}



console.log("\n\n");
//countOfEachCharacterString

console.log("Count of Each string\n\n");
console.log(uti.countOfEachCharacterInString("Hello there I am Rohnit!"));

try {
    console.log(uti.countOfEachCharacterInString(123456));
} catch (e) {
    console.log(e);
}

try {
    console.log(uti.countOfEachCharacterInString(["hello", "there"]));
} catch (e) {
    console.log(e);
}

try {
    console.log(uti.countOfEachCharacterInString(""));
} catch (e) {
    console.log(e);
}

try {
    console.log(uti.countOfEachCharacterInString());
} catch (e) {
    console.log(e);
}









