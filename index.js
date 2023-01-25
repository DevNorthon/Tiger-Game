var tiger = document.querySelector('.tiger')
var car = document.querySelector('.car')

function jump() {
    if (tiger.classList != 'animate') {
        tiger.classList.add('animate')
    }
    setTimeout(function () {
        tiger.classList.remove('animate')
    }, 500);
}

var checkDead = setInterval(function () {

    var tigerTop = parseInt(window.getComputedStyle(tiger).getPropertyValue('Top')
    )

    var carLeft = parseInt(window.getComputedStyle(car).getPropertyValue('Left')
    )

    if (carLeft < 110 && carLeft > 0 && tigerTop >= 265) {
        car.style.animation = 'none'
        car.style.display = 'none'
        alert('GAME OVER!')
    }

}, 10)

document.addEventListener('keydown', jump)