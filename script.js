let curr_color = 'black'
let n = 16
let isRainbow = false


const container = document.getElementById("grid-div")
const eraser_el = document.getElementById("eraser-btn")
const rainbow_el = document.getElementById("rainbow-btn")
const clear_el = document.getElementById("clear-btn")
const color_picker = document.getElementById("color-picker")
const less_btn = document.getElementById("less")
const more_btn = document.getElementById("more")
const size_el = document.getElementById("grid-size-value")


less_btn.addEventListener("click", function(){
    if(n>3){
        n--;
        renderN()
    }
})
more_btn.addEventListener("click", function(){
    if(n<50){
        n++;
        renderN()
    }
})
color_picker.onchange = (e) => {
    isRainbow = false
    curr_color = e.target.value
}
eraser_el.addEventListener("click", function(){
    setColor('white')
})

rainbow_el.addEventListener("click", function(){
    isRainbow = !isRainbow
    console.log(isRainbow)
})

clear_el.addEventListener("click", function(){
    n = 16
    renderN()
})

renderN()


function renderN(){
    size_el.innerHTML = n
    makeGrids(n)
}
function makeGrids(n){
    const dimen = 480/n;
    const square_div = document.createElement("div")

    square_div.setAttribute("style", `width:${dimen}px`)
    // square_div.setAttribute("style", `height:auto`)

    square_div.setAttribute("id", "square-div")
    square_div.setAttribute("onmouseover", "color(this)")
    // square_div.setAttribute("onclick", check ("helle"))
    // console.log(square_div.innerHTML);
    const row_div = document.createElement("div")
    row_div.setAttribute("style", `height:${dimen}px`)
    row_div.setAttribute("id", "row-div")

    container.innerHTML=""

    for(let j=0; j<n; j++){
        // row_div.innerHTML += `<div id="square-div"></div>`
        row_div.appendChild(square_div.cloneNode(true))
    }
    for(let j=0; j<n; j++){
        // container.innerHTML += `<div id="row-div"></div>`
        container.appendChild(row_div.cloneNode(true))
    }
    
}

function check(arg){
    console.log(`yes ${arg} this is triggered`)
}


function color(item){
    item.style.backgroundColor = curr_color;
    updateColor()
}
function updateColor(){
    if(isRainbow){
        let c1 = Math.floor(Math.random()*255) + 1
        let c2 = Math.floor(Math.random()*255) + 1
        let c3 = Math.floor(Math.random()*255) + 1
        
        curr_color = `rgb(${c1},${c2},${c3})`;
    }    
}

function setColor(){
    curr_color = "white"; 
}
//not sure if needed
// let c=1;
// const square_div = document.querySelectorAll("#square-div")

// square_div.forEach(el =>{
//     el.setAttribute("class", `${c}`)
//     c++;
// })

