

// Function for convert hex number to RGB values!
function hexToRGB(hex) {

    // If hex has a '#' letter it will remove it!
    hex = hex.replace("#","");

    // Slicing string number by number! And convert to integer!
    const r = parseInt(hex.slice(0,2),16);
    const g = parseInt(hex.slice(2,4),16);
    const b = parseInt(hex.slice(4,6),16);

    return {r,g,b};
}

function findAllPossibleColors(color) {
    const possibleColors = [];
    const percentage = ["0","0.1","0.2","0.25","0.3","0.4","0.5","0.6","0.7","0.8","0.9","1"];
    const {r,g,b} = hexToRGB(color);
    percentage.map((number) => {
        let tempColor = `rgba(${r},${g},${b},${number})`
        possibleColors.push(tempColor);
        tempColor = "";
    })
    return possibleColors;
}


export default findAllPossibleColors