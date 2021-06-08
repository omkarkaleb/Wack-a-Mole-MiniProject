const grid = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeleft = document.querySelector('#time-left')
const score = document.querySelector('#score')
// let hitposition = 0

let result = 0
let hitposition
let currenttime =20
let timerid = null
console.log(grid)


function selectrandomgrid(){
    grid.forEach(square => {
        square.classList.remove('mole')
    })

    let randompos = grid[Math.floor(Math.random()*10)]
    randompos.classList.add('mole')

    hitposition = randompos.id
}

grid.forEach(square => {
    square.addEventListener('click', () => {
        if (square.id===hitposition){
            result = result + 1
            score.textContent = result
        }
    })
})

function movemole(){
    timerid = setInterval(selectrandomgrid, 525)
}

movemole()

function countdown(){
    currenttime = currenttime - 1
    timeleft.textContent = currenttime

    if (currenttime == 0){
        clearInterval(timerid)
        clearInterval(coundownid)
        result = 0
        alert('GAME OVER')
    }

}

let coundownid = setInterval(countdown, 1000)