let boxes = document.body.getElementsByClassName("box")
for (let index = 0; index < boxes.length; index++) {
    let x = Math.floor(Math.random() * 11)

    if (x === 1) {
        color = "red"
    }
    else if (x === 2) {
        color = "blue"
    }
    else if (x === 3) {
        color = "green"
    }
    else if (x === 4) {
        color = "yellow"
    }
    else if (x === 5) {
        color = "orange"
    }
    else if (x === 6) {
        color = "purple"
    }
    else if (x === 7) {
        color = "pink"
    }
    else if (x === 8) {
        color = "brown"
    }
    else if (x === 9) {
        color = "gray"
    }
    else {
        color = "black"
    }

    let n = Math.floor(Math.random() * 11)
    if(n === 1) {
        bc = "red"
    }
    else if(n === 2) {
        bc = "blue"
    }
    else if(n === 3) {
        bc = "green"
    }
    else if(n === 4) {
        bc = "yellow"
    }
    else if(n === 5) {
        bc = "orange"
    }
    else if(n === 6) {
        bc = "purple"
    }
    else if(n === 7) {
        bc = "pink"
    }
    else if(n === 8) {
        bc = "brown"
    }
    else if(n === 9) {
        bc = "gray"
    }
    else {
        bc = "black"
    }
    boxes[index].style.color = color
    boxes[index].style.backgroundColor = bc
}

