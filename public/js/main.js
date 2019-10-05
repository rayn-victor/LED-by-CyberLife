(() => {
    console.log('ready to go...');

    let buttonBlue     = document.querySelector('.buttonBlue');
        buttonYellow   = document.querySelector('.buttonYellow');
        buttonRed      = document.querySelector('.buttonRed');
        textCon1       = document.querySelector('.textbox2');
        textCon2       = document.querySelector('.textbox3');
        textCon3       = document.querySelector('.textbox4');
        blipOG         = document.querySelector('.textbox1');
        blueRing       = document.querySelector('.ring2');
        yellowRing     = document.querySelector('.ring3');
        redRing        = document.querySelector('.ring4');
        imgs1          = document.querySelector('.imgs1');

        function blueDesc() {
            blipOG.classList.add('off');
            textCon1.classList.add('on');
            textCon2.classList.remove('on');
            textCon3.classList.remove('on');
            blueRing.style.display = 'block';
            yellowRing.style.display = 'none';
            redRing.style.display = 'none';
            imgs1.style.display = 'none';
        }

        function yellowDesc() {
            blipOG.classList.add('off');
            textCon2.classList.add('on');
            textCon1.classList.remove('on');
            textCon3.classList.remove('on');
            yellowRing.style.display = 'block';
            redRing.style.display = 'none';
            blueRing.style.display = 'none';
            imgs1.style.display = 'none';
        }

        function redDesc() {
            blipOG.classList.add('off');
            textCon3.classList.add('on');
            textCon1.classList.remove('on');
            textCon2.classList.remove('on');
            redRing.style.display = 'block';
            yellowRing.style.display = 'none';
            blueRing.style.display = 'none';
            imgs1.style.display = 'none';
        }

        buttonBlue.addEventListener('click', blueDesc);
        buttonYellow.addEventListener('click', yellowDesc);
        buttonRed.addEventListener('click', redDesc);

})()