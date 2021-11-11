const dino = document.querySelector('.dino');
const container = document.querySelector('.container');
let isJumping = false;
let position = 0; 

const handleKeyUp = (event) => {
    if(event.keyCode == 32){
        if(!isJumping){
            console.log('pressionado!')
        return jump();
        } else {

        }
        
    }
}

const jump = () => {
    isJumping = true;

    let upInterval = setInterval(() => {

        if(position >= 150){
            clearInterval(upInterval);
            let downInterval = setInterval(() => {
                if(position <= 0){
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 20;
                    dino.style.bottom = position + 'px';    
                }
            }, 20)
        } else {
            // subindo
            position += 20;
            dino.style.bottom = position + 'px';
        }

    }, 20)
}

const createCactus = () => {
    const cactus = document.createElement('div');
    let cactusPosition = 1540;
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    container.appendChild(cactus);

    let leftInterval = setInterval(() => {
        

        if(cactusPosition < -60){
            clearInterval(leftInterval);
            container.removeChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60){
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Game Over</h1>';
        } else {
            cactusPosition -= 10; 
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20)

    setTimeout(createCactus, randomTime)
}

createCactus();
document.addEventListener('keyup', handleKeyUp)