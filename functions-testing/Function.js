function convertIntoHeading (input, number) {
    let levelOne = "#";
    let levelTwo = "##";
    let levelThree = "###";
    let levelFour = "####";
    let levelFive = "#####";
    let levelSix = "######";
    let result = "";
    
    if (number === 1) {
        result = levelOne.concat(" ", input)
    };

    if (number === 2) {
        result = levelTwo.concat(" ", input)
    };

    if (number === 3) {
        result = levelThree.concat(" ", input)
    };

    if (number === 4) {
        result = levelFour.concat(" ", input)
    };

    if (number === 5) {
        result = levelFive.concat(" ", input)
    };

    if (number === 6) {
        result = levelSix.concat(" ", input)
    };

    return result;
};

console.log(convertIntoHeading("Tile", 4))
console.log(convertIntoHeading("Tile", 2))
console.log(convertIntoHeading("Tile", 3))
console.log(convertIntoHeading("Tile", 1))
console.log(convertIntoHeading("Tile", 5))
console.log(convertIntoHeading("Tile", 6))



function convertIntoBold (input) {
    let Bold = "**";

    
    result = Bold.concat(input, Bold)


    return result;
};

console.log(convertIntoBold("Bold Text"))



function convertIntoItalic (input) {
    let Italic = "*";

    
    result = Italic.concat(input, Italic)


    return result;
};

console.log(convertIntoItalicBold("Italic Text"))

function convertIntoItalicBold (input) {
    let ItalicBold = "***";

    
    result = ItalicBold.concat(input, ItalicBold)


    return result;
};

console.log(convertIntoItalicBold("Italic and Bold Text"))
