// STEP 1

// first team would {select the button/dot} at where they would like to start the line and select a second button/dot Adjacent but NOT diagnol to
// the first button to creat a line inbetween the selected dots
//on click add a green or blue border

// Second team would {select the button/dot} at where they would like to start the line and select a second button/dot Adjacent but NOT diagnol to
// the first button to creat a line inbetween the selected dots

// STEP 2

// repeat step 1 until the

// select button and save in var -> when button is click update color of border

// left side 1st row X coord = 520-531
// left side 2nd row X coord = 696- 710
// left side 3nd row X coord = 872- 884
// left side 4th row X coord = 1048- 1060
// left side 5th row X coord = 1224-1242

// one right side X coord = 1399- 1389
// one bot side Y coord = 879- 871

// top side 1st row Y coords = 145-158
// top side 2st row Y coords = 292-306
// top side 3st row Y coords = 439-450
// top side 4st row Y coords = 586-599
// top side 5st row Y coords = 735-750

//const borderLeft = document.querySelectorAll(".border-left")
//const borderRight = document.querySelectorAll(".right");
const boxs = document.querySelectorAll(".dot");

boxs.forEach((box) => {
  box.addEventListener("click", (e) => {
    const boxXCoords = e.pageX;
    const boxYCoords = e.pageY;
    if (boxXCoords > 520 && boxXCoords < 531) {
      box.style.borderLeft = "2px solid blue";
    } else if (boxXCoords > 696 && boxXCoords < 710) {
      box.style.borderLeft = "2px solid blue";
    } else if (boxXCoords > 872 && boxXCoords < 884) {
      box.style.borderLeft = "2px solid blue";
    } else if (boxXCoords > 1048 && boxXCoords < 1060) {
      box.style.borderLeft = "2px solid blue";
    } else if (boxXCoords > 1224 && boxXCoords < 1242) {
      box.style.borderLeft = "2px solid blue";
    } else if (boxYCoords > 145 && boxYCoords < 158) {
      box.style.borderTop = "2px solid green";
    } else if (boxYCoords > 292 && boxYCoords < 306) {
      box.style.borderTop = "2px solid green";
    } else if (boxYCoords > 439 && boxYCoords < 450) {
      box.style.borderTop = "2px solid green";
    } else if (boxYCoords > 586 && boxYCoords < 599) {
      box.style.borderTop = "2px solid green";
    } else if (boxYCoords > 735 && boxYCoords < 750) {
      box.style.borderTop = "2px solid green";
    } else if (boxXCoords < 1399 && boxXCoords > 1389) {
      box.style.borderRight = "2px solid green";
    } else if (boxYCoords < 879 && boxYCoords > 871) {
      box.style.borderBottom = "2px solid green";
    }
  });
});
