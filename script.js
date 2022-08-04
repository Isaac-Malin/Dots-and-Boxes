// STEP 1

// first team would {select the button/dot} at where they would like to start the line and select a second button/dot Adjacent but NOT diagnol to
// the first button to creat a line inbetween the selected dots
//on click add a green or blue border

// Second team would {select the button/dot} at where they would like to start the line and select a second button/dot Adjacent but NOT diagnol to
// the first button to creat a line inbetween the selected dots

// STEP 2

// repeat step 1 until the 

// select button and save in var -> when button is click update color of border

const borderLeft = document.querySelectorAll(".border-left")
const borderRIght = document.querySelectorAll(".right");


borderLeft.forEach((border) => {
    border.addEventListener("click", () => {
        border.style.borderLeft = "1px solid blue";
    })
})

borderRIght.forEach((rightBorder) => {
    rightBorder.addEventListener("click", () => {
        rightBorder.style.borderRight = "1px solid green"
    })
})


