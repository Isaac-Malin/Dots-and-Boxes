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




const boxs = document.querySelectorAll(".dot");
const colors = document.querySelectorAll(".color");
let isBlue = true

colors.forEach((color) => {
  color.addEventListener("click", () => {
    if (color.innerHTML.includes("Switch")) {
      isBlue = !isBlue
    }
  });
});

boxs.forEach((box) => {
  box.addEventListener("click", (e) => {
    const boxXCoords = e.pageX;
    const boxYCoords = e.pageY;

    if (boxXCoords > 520 && boxXCoords < 531 && isBlue) {
      box.style.borderLeft = `2px solid blue`;
    } else if (boxXCoords > 696 && boxXCoords < 710 && isBlue) {
      box.style.borderLeft = `2px solid blue`;
    } else if (boxXCoords > 872 && boxXCoords < 884 && isBlue) {
      box.style.borderLeft = `2px solid blue`;
    } else if (boxXCoords > 1048 && boxXCoords < 1060 && isBlue) {
      box.style.borderLeft = `2px solid blue`;
    } else if (boxXCoords > 1224 && boxXCoords < 1242 && isBlue) {
      box.style.borderLeft = `2px solid blue`;
    } else if (boxYCoords > 145 && boxYCoords < 158 && isBlue) {
      box.style.borderTop = `2px solid blue`;
    } else if (boxXCoords > 687 && boxXCoords < 691 && isBlue) {
      box.style.borderRight = `2px solid blue`;
    } else if (boxXCoords > 862 && boxXCoords < 867 && isBlue) {
      box.style.borderRight = `2px solid blue`;
    } else if(boxXCoords > 1037 && boxXCoords < 1043 && isBlue) {
      box.style.borderRight = `2px solid blue`;
    } else if(boxXCoords > 1213 && boxXCoords < 1219 && isBlue) {
      box.style.borderRight = `2px solid blue`;
    } else if (boxYCoords > 292 && boxYCoords < 306 && isBlue) {
      box.style.borderTop = `2px solid blue`;
    } else if (boxYCoords > 439 && boxYCoords < 450 && isBlue) {
      box.style.borderTop = `2px solid blue`;
    } else if (boxYCoords > 586 && boxYCoords < 599 && isBlue) {
      box.style.borderTop = `2px solid blue`;
    } else if (boxYCoords > 735 && boxYCoords < 750 && isBlue) {
      box.style.borderTop = `2px solid blue`;
    } else if (boxXCoords < 1399 && boxXCoords > 1389 && isBlue) {
      box.style.borderRight = `2px solid blue`;
    } else if (boxYCoords < 879 && boxYCoords > 871 && isBlue) {
      box.style.borderBottom = `2px solid blue`;
    } else if (boxYCoords < 288 && boxYCoords > 277 && isBlue) {
      box.style.borderBottom = `2px solid blue`;
    } else if (boxYCoords < 429 && boxYCoords > 422 && isBlue) {
      box.style.borderBottom = `2px solid blue`;
    } else if (boxYCoords < 575 && boxYCoords > 568 && isBlue) {
      box.style.borderBottom = `2px solid blue`;
    } else if (boxYCoords < 721 && boxYCoords > 713 && isBlue) {
      box.style.borderBottom = `2px solid blue`;
    }

    if (boxXCoords > 520 && boxXCoords < 531 && !isBlue) {
      box.style.borderLeft = `2px solid green`;
    } else if (boxXCoords > 696 && boxXCoords < 710 && !isBlue) {
      box.style.borderLeft = `2px solid green`;
    } else if (boxXCoords > 872 && boxXCoords < 884 && !isBlue) {
      box.style.borderLeft = `2px solid green`;
    } else if (boxXCoords > 1048 && boxXCoords < 1060 && !isBlue) {
      box.style.borderLeft = `2px solid green`;
    } else if (boxXCoords > 1224 && boxXCoords < 1242 && !isBlue) {
      box.style.borderLeft = `2px solid green`;
    } else if (boxYCoords > 145 && boxYCoords < 158 && !isBlue) {
      box.style.borderTop = `2px solid green`;
    } else if (boxYCoords > 292 && boxYCoords < 306 && !isBlue) {
      box.style.borderTop = `2px solid green`;
    } else if (boxYCoords > 439 && boxYCoords < 450 && !isBlue) {
      box.style.borderTop = `2px solid green`;
    } else if (boxYCoords > 586 && boxYCoords < 599 && !isBlue) {
      box.style.borderTop = `2px solid green`;
    } else if (boxYCoords > 735 && boxYCoords < 750 && !isBlue) {
      box.style.borderTop = `2px solid green`;
    } else if (boxXCoords < 1399 && boxXCoords > 1389 && !isBlue) {
      box.style.borderRight = `2px solid green`;
    } else if (boxXCoords > 687 && boxXCoords < 691 && !isBlue) {
      box.style.borderRight = `2px solid green`;
    } else if (boxXCoords > 862 && boxXCoords < 867 && !isBlue) {
      box.style.borderRight = `2px solid green`;
    } else if(boxXCoords > 1037 && boxXCoords < 1043 && !isBlue) {
      box.style.borderRight = `2px solid green`;
    } else if(boxXCoords > 1213 && boxXCoords < 1219 && !isBlue) {
      box.style.borderRight = `2px solid green`;
    } else if (boxYCoords < 879 && boxYCoords > 871 && !isBlue) {
      box.style.borderBottom = `2px solid green`;
    } else if (boxYCoords < 288 && boxYCoords > 277 && !isBlue) {
      box.style.borderBottom = `2px solid green`;
    } else if (boxYCoords < 429 && boxYCoords > 422 && !isBlue) {
      box.style.borderBottom = `2px solid green`;
    } else if (boxYCoords < 575 && boxYCoords > 568 && !isBlue) {
      box.style.borderBottom = `2px solid green`;
    } else if (boxYCoords < 721 && boxYCoords > 713 && !isBlue) {
      box.style.borderBottom = `2px solid green`;
    }

    if (box.style.borderBottom.includes("solid") && box.style.borderTop.includes("solid") && box.style.borderLeft.includes("solid") && box.style.borderRight.includes("solid") && isBlue ) {
      box.style.backgroundColor = "blue";
    }
    if (box.style.borderBottom.includes("solid") && box.style.borderTop.includes("solid") && box.style.borderLeft.includes("solid") && box.style.borderRight.includes("solid") && !isBlue ) {
      box.style.backgroundColor = "green";
    }



  });
});