/* Basic Markdown Syntax */



/*Headings*/

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

console.log(convertIntoHeading("Title", 4))
console.log(convertIntoHeading("Title", 2))
console.log(convertIntoHeading("Title", 3))
console.log(convertIntoHeading("Title", 1))
console.log(convertIntoHeading("Title", 5))
console.log(convertIntoHeading("Title", 6))



/*Bold*/

function convertIntoBold (input) {
    let Bold = "**";

    
    result = Bold.concat(input, Bold)


    return result;
};

console.log(convertIntoBold("Bold Text"))



/*Italic*/

function convertIntoItalic (input) {
    let Italic = "*";

    
    result = Italic.concat(input, Italic)


    return result;
};

console.log(convertIntoItalicBold("Italic Text"))



/*Italic and Bold*/

function convertIntoItalicBold (input) {
    let ItalicBold = "***";

    
    result = ItalicBold.concat(input, ItalicBold)


    return result;
};

console.log(convertIntoItalicBold("Italic and Bold Text"))



/* Blockquote */

function convertIntoBlockquote (input) {
    let quoteLength = input.length;
    let blockQuote = ">"
    let result = ""; 

    if(quoteLength >  80 ) {
        result = blockQuote.concat(" ", input)
    } else {
        result = blockQuote.concat(" ", input)
    }
    
    return result
}



/* Lists */




/* Ordered Lists */





/* Unordered Lists */




/* Code */




/* Code Block */




/* Links */




/* Images */




/* Linking Images */







/* Extended Markdown Syntax */








/* Community Made Custom Repos */







