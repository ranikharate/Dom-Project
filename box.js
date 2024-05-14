function changeColor(boxId) {    //change box color
    var box = document.getElementById(boxId); // using for id
    var colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff', '#000000', '#ffffff']; // define some color Add more colors if needed
    var randomColor = colors[Math.floor(Math.random() * colors.length)]; // get random index
    box.style.backgroundColor = randomColor;
}
