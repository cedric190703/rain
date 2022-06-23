const body = document.body;

let opacity,time;

setInterval(rainFall,time);

function rainFall(){
    const Drop = document.createElement('i');

    Drop.classList.add('fas');
    Drop.classList.add('fa-tint');
    Drop.classList.fontSize = Math.random() + 'px';
    Drop.style.animationDuration = Math.random() * 2 + 's';
    Drop.style.opacity = opacity;
    Drop.style.left = Math.random()*window.innerWidth + 'px';

    body.appendChild(Drop);

    setTimeout(() => {
        Drop.remove();
    },1000)
}

const theme = document.querySelectorAll('.theme');

let texte = document.querySelector('.texte');

theme.forEach((item) => {
    item.addEventListener('click',(e) =>{
        document.body.classList.remove("snowTheme","rainTheme","desertTheme");
        opacity = Math.random();
        switch(e.target.id){
            case 'snow' :
                document.body.classList.add("snowTheme");
                document.getElementById("texte").innerHTML = "It's snowing !";
                time = 10;
                opacity = 1;
                console.log(opacity+" and "+time);
                break;
            case 'rain' :
                document.body.classList.add("rainTheme");
                document.getElementById("texte").innerHTML = "It's raining !";
                time = 1;
                opacity = Math.random();
                console.log(opacity+" and "+time)-0.25;
                break;
            case 'desert' :
                document.body.classList.add("desertTheme");
                document.getElementById("texte").innerHTML = "It's the desert!";
                time = 1000;
                opacity = 0.1;
                console.log(opacity+" and "+time);
                break;
        }
    })
});