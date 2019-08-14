let timerId = null;
 document.querySelector('.start').addEventListener('click', () =>
{
    let i=0;
    timerId = setInterval(()=>{
        i++;
        document.querySelector('.counter').innerHTML = '<h1>' + i + '</h1>';
        }, 1000);
    });
document.querySelector('.stop').addEventListener('click', () =>
    {
        clearInterval(timerId);
    });



setInterval(()=>{
document.querySelector('.time').innerHTML = '<h1>' + new Date().toLocaleTimeString() + '</h1>';
}, 1000);
       


let timer4 = document.querySelector('#timer4');
let btn_back = document.querySelector("#btn4");
let interval4 = null;
btn_back.addEventListener('click', ()=>{
    interval4 = setInterval(()=>{
        if(timer4.innerHTML == 0)
        {
            clearInterval(interval4);
            timer4.innerHTML = '999';
            btn_back.disabled = true;
            document.querySelector('#p4').innerHTML = '<p>' + "Обратный отсчет завершен" + '</p>';
        }
        else
        {
            timer4.innerHTML =+ timer4.innerHTML - 1;
        }
    }, 10);
    
});



let carusbtn = document.querySelector('#carus');
let carusimages = document.querySelectorAll('#carusel > img');
carusbtn.addEventListener("click", () => {
    setInterval(() => {
        for (let i=0;i<carusimages.length-1;i++) {
            let temp=carusimages[i].src;
            carusimages[i].src = carusimages[i+1].src;
            carusimages[i+1].src = temp;
        }
    }, 1000);
});



let carusbtn61 = document.querySelector('#carus61');
let carusbtn62 = document.querySelector('#carus62');
let carusimages6 = document.querySelectorAll('#carusel6 > img');
let interval6 = null;
carusbtn61.addEventListener("click", () => {
    interval6 = setInterval(() => {
        for (let i=0;i<carusimages6.length-1;i++) {
            let temp=carusimages6[i].src;
            carusimages6[i].src = carusimages6[i+1].src;
            carusimages6[i+1].src = temp;
        }
    }, 1000);
});
carusbtn62.addEventListener("click", () => {
    clearInterval(interval6);
});


let hh = document.querySelector('#h');
let mm = document.querySelector('#m');
let ss = document.querySelector('#s');
setInterval(() => {
    let rightNow = new Date();
    let timeToMidnight = new Date(
        rightNow.getFullYear(), rightNow.getDate(), rightNow.getMonth(),
        0 - rightNow.getHours(),
        0 - rightNow.getMinutes(),
        0 - rightNow.getSeconds()
    );
    // console.log(timeToMidnight);
    hh.innerHTML = timeToMidnight.getHours();
    mm.innerHTML = timeToMidnight.getMinutes();
    ss.innerHTML = timeToMidnight.getSeconds();
}, 1000);