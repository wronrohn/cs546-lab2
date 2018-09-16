function checkIsProperNumber(val, variableName) {
    if (val == undefined || val == '') {
        throw `Please provide appropriate ${variableName || " variable"}`;
    }
    if (typeof val != "number") {
        throw `${variableName || "Provided Variable"} is not a number`;
    }
    if (isNaN(val)) {
        throw `${variableName || "Provided variable"} is not a number`;
    }
    if (val == 0){
        throw `${variableName || "Provided variable"} can't be 0 `;
    }
    if(val < 0){
        throw `${variableName || "Provided variable"} can't be negative `;
    }
}




function volumeOfRectangularPrism(length, width, height) {
    checkIsProperNumber(length, "Length");
    checkIsProperNumber(width, "Width");
    checkIsProperNumber(height, "Height");
    return length * width * height;
    
}

function surfaceAreaofRectangularPrism(length, width, height){
    checkIsProperNumber(length, "Length");
    checkIsProperNumber(width, "Width");
    checkIsProperNumber(height, "Height");
    return (2 * width * length + 2 * height * length + 2 * height * width);
}
    

function volumeOfSphere(radius){
    checkIsProperNumber(radius, "Radius");
    return ((4 / 3) * Math.PI * Math.pow(radius, 3));
    
}

function surfaceAreaOfSphere(radius){
    checkIsProperNumber(radius, "Radius");
    return (4 * Math.PI * Math.pow(radius, 2));
}


module.exports = { volumeOfRectangularPrism, surfaceAreaofRectangularPrism, volumeOfSphere, surfaceAreaOfSphere};

