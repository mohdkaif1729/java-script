const hexvalue = document.querySelector('#hexvalue');

let stopChaningColor;
document.querySelector('#start').addEventListener('click', () => {
    stopChaningColor = setInterval(() => {
        const randomNumber = "#" + (parseInt(Math.random() * Math.pow(10, 7)).toString(16));
        document.querySelector('body').style.backgroundColor = randomNumber;
        hexvalue.innerHTML = `${randomNumber}`

    }, 1000)
})


document.querySelector('#stop').addEventListener('click', () => {
    clearInterval(stopChaningColor);
})

