function getShape() 
{
    var sides = prompt("The Navy Falcon Wants Would like a number between 1-10")
    sides = parseFloat(sides);
    sides = validateSide(sides);
    switch(sides) {
        case 1:
            alert("Monogon")
            break;
    }
    switch(sides) {
        case 2:
            alert("Bigon")
            break;
    }
    switch(sides) {
        case 3:
            alert("Triangle")
            break;
    }
    switch(sides) {
        case 4:
            alert("Quadrilateral")
            break;
    }
    switch(sides) {
        case 5:
            alert("Pentagon")
            break;
    }
    switch(sides) {
        case 6:
            alert("Hexagon")
            break;
    }
    switch(sides) {
        case 7:
            alert("Septagon")
            break;
    }
    switch(sides) {
        case 8:
            alert("Octagon")
            break;
    }
    switch(sides) {
        case 9:
            alert("nonagon")
            break;
    }
    switch(sides) {
        case 10:
            alert("Decagon")
            break;
    }
}

function validateSide(sides)
{
    sides = parseFloat(sides);
    sides = Math.abs(sides);
    while(isNaN(sides) || sides > 10)
    {
        sides = prompt("Error: Please reenter a number between 1 and 10")
    }
    _sides = Math.round(sides);
    return _sides;
}