const boxes=document.querySelectorAll(".div1") 

var state = {
    ox:true,
    box1:true,
    box2:true,
    box3:true,
    box4:true,
    box5:true,
    box6:true,
    box7:true,
    box8:true,
    box9:true,
}

var boxarray = ["emp","emp","emp","emp","emp","emp","emp","emp","emp"]

const over = document.getElementById('over')

function updateBox(box,index){
    if(state.ox){
        box.innerHTML = "O"
        boxarray[index] = "O"
    }else{
        box.innerHTML = "X"
        boxarray[index] = "X"
    }
    state.ox = !state.ox
    state[`box${index + 1}`] = !state[`box${index + 1}`]
    console.log(boxarray)
    count +=1
    gameOver()
    if(count==9){
        console.log("Draw")
        over.style.visibility = 'inherit'
        h1.innerHTML = "DRAW"
        gameOver()
    }
}

var count =0

boxes.forEach((box,index)=>{
    box.addEventListener('click',()=>{
        if(state[`box${index + 1}`]){
            console.log('clicked')
            updateBox(box,index)
        }
    })
})

const h1 = document.getElementById('h1')

function gameOver(){
    if (boxarray[0]=="O" && boxarray[1]=="O" && boxarray[2]=="O"){
        console.log("O Win")
        over.style.visibility = 'inherit'
        h1.innerHTML = "'O' Wins the Game!"
    }
    else if(boxarray[0]=="X" && boxarray[1]=="X" && boxarray[2]=="X"){
        console.log("X Win")
        over.style.visibility = 'inherit'
        h1.innerHTML = "'X' Wins the Game!"
    }
    if (boxarray[3]=="O" && boxarray[4]=="O" && boxarray[5]=="O"){
        console.log("O Win")
        over.style.visibility = 'inherit'
        h1.innerHTML = "'O' Wins the Game!"
    }
    else if(boxarray[3]=="X" && boxarray[4]=="X" && boxarray[5]=="X"){
        console.log("X Win")
        over.style.visibility = 'inherit'
        h1.innerHTML = "'X' Wins the Game!"
    }
    if (boxarray[6]=="O" && boxarray[7]=="O" && boxarray[8]=="O"){
        console.log("O Win")
        over.style.visibility = 'inherit'
        h1.innerHTML = "'O' Wins the Game!"
    }
    else if(boxarray[6]=="X" && boxarray[7]=="X" && boxarray[8]=="X"){
        console.log("X Win")
        over.style.visibility = 'inherit'
        h1.innerHTML = "'X' Wins the Game!"
    }
    if (boxarray[0]=="O" && boxarray[3]=="O" && boxarray[6]=="O"){
        console.log("O Win")
        over.style.visibility = 'inherit'
        h1.innerHTML = "'O' Wins the Game!"
    }
    else if(boxarray[0]=="X" && boxarray[3]=="X" && boxarray[6]=="X"){
        console.log("X Win")
        over.style.visibility = 'inherit'
        h1.innerHTML = "'X' Wins the Game!"
    }
    if (boxarray[1]=="O" && boxarray[4]=="O" && boxarray[7]=="O"){
        console.log("O Win")
        over.style.visibility = 'inherit'
        h1.innerHTML = "'O' Wins the Game!"
    }
    else if(boxarray[1]=="X" && boxarray[4]=="X" && boxarray[7]=="X"){
        console.log("X Win")
        over.style.visibility = 'inherit'
        h1.innerHTML = "'X' Wins the Game!"
    }
    if (boxarray[2]=="O" && boxarray[5]=="O" && boxarray[8]=="O"){
        console.log("O Win")
        over.style.visibility = 'inherit'
        h1.innerHTML = "'O' Wins the Game!"
    }
    else if(boxarray[2]=="X" && boxarray[5]=="X" && boxarray[8]=="X"){
        console.log("X Win")
        over.style.visibility = 'inherit'
        h1.innerHTML = "'X' Wins the Game!"
    }
    if (boxarray[0]=="O" && boxarray[4]=="O" && boxarray[8]=="O"){
        console.log("O Win")
        over.style.visibility = 'inherit'
        h1.innerHTML = "'O' Wins the Game!"
    }
    else if(boxarray[0]=="X" && boxarray[4]=="X" && boxarray[8]=="X"){
        console.log("X Win")
        over.style.visibility = 'inherit'
        h1.innerHTML = "'X' Wins the Game!"
    }
    if (boxarray[2]=="O" && boxarray[4]=="O" && boxarray[6]=="O"){
        console.log("O Win")
        over.style.visibility = 'inherit'
        h1.innerHTML = "'O' Wins the Game!"
    }
    else if(boxarray[2]=="X" && boxarray[4]=="X" && boxarray[6]=="X"){
        console.log("X Win")
        over.style.visibility = 'inherit'
        h1.innerHTML = "'X' Wins the Game!"
    }
}

const playagain = document.getElementById("playagain")

playagain.onclick = ()=>{
    window.location.reload()
}
