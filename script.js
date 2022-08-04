// STEP 1

// first team would {select the button/dot} at where they would like to start the line and select a second button/dot Adjacent but NOT diagnol to
// the first button to creat a line inbetween the selected dots
//on click add a green or blue border

// Second team would {select the button/dot} at where they would like to start the line and select a second button/dot Adjacent but NOT diagnol to
// the first button to creat a line inbetween the selected dots

// STEP 2

// repeat step 1 until the 

const dots = document.querySelectorAll(".btn")

dots.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.add(".dot").style.borderColor = "blue";
    })
})