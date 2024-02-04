let n=10;
let ys=0;
let as =0;
function reset()
{
    document.getElementById("pscore").innerText = "0"
    document.getElementById("cscore").innerText = "0"
    document.getElementById("status").innerText = ""
    document.getElementById("rpic").src = "all1.png";
    document.getElementById("lpic").src = "all1.png";
    document.getElementById("rpic").style.transform = "rotate(0deg)"
    document.getElementById("play").innerText="V/S"
    ys = 0;
    as = 0;
}

function changeb()
{
    const sel = document.getElementById('back1');
    const val = sel.options[sel.selectedIndex].value;
    switch(val)
    {
        case  "1" :
            document.body.style.backgroundImage = "url(B3.jpg)";
            break;
        case  "2" :
            document.body.style.backgroundImage = "url(B5.jpg)";
            break;
        case  "3" :
            document.body.style.backgroundImage = "url(B2.jpg)";
            break;
        case  "4" :
            document.body.style.backgroundImage = "url(B4.jpg)";
            break;
        case  "5" :
            document.body.style.backgroundImage = "url(B1.jpg)";
            break;
    }
}
function changer()
{
    const sel = document.getElementById("rnd1");
    const val = sel.options[sel.selectedIndex].value;
    n=parseInt(val,10);
}
let ai = 2;
function process(opt,ai)
{
    if((opt == 1 && ai ==1) || (opt == 2 && ai ==2) || (opt == 3 && ai ==3))
    {
        document.getElementById("status").innerText = "DRAW"
    }
    else if((opt ==1 && ai == 3) || (opt == 2 && ai == 1) || (opt == 3 && ai== 2))
    {
        document.getElementById("status").innerText = "WIN";
        ys++;
        // ys=1;
        document.getElementById("pscore").innerText = ys;
    }
    else if((opt ==3 && ai == 1) || (opt == 1 && ai == 2) || (opt == 2 && ai== 3))
    {
        document.getElementById("status").innerText = "LOSE";
        as++;
        document.getElementById("cscore").innerText = as;
    }

    if(ys==n || ys >n)
    {
        document.getElementById("play").innerText="WON"
        let ans = confirm("YOU WON \nDo you want to restart?")
        if(ans)
        {
            reset()
        }
        return 0;
    }
    else if(as==n || as>n)
    {
        document.getElementById("play").innerText="LOSE"
        let ans = confirm("YOU LOSE \nDo you want to restart?")
        if(ans)
        {
            reset()
        }
        return 0;
    }
}

function choseai(ai)
{
    if (ai  == 1)
    {
        document.getElementById("rpic").src = "rock1.png";
        document.getElementById("rpic").style.transform = "rotate(180deg)"
    }
    else if (ai  == 2)
    {
        document.getElementById("rpic").src = "papper1.png";
        document.getElementById("rpic").style.transform = "rotate(180deg)"
    }
    else if (ai  == 3)
    {
        document.getElementById("rpic").src = "scissor1.png";
        document.getElementById("rpic").style.transform = "rotate(180deg)"
    }
}

function chosed(num)
{
    let ai = Math.floor((Math.random() * 3) + 1);
    if (num  == 1)
    {
        document.getElementById("lpic").src = "rock1.png";
        document.getElementById("lpic").style.transform = "rotate(0deg)"
        process(1,ai);
    }
    else if (num  == 2)
    {
        document.getElementById("lpic").src = "papper1.png";
        document.getElementById("lpic").style.transform = "rotate(0deg)"
        process(2,ai);
    }
    else if (num  == 3)
    {
        document.getElementById("lpic").src = "scissor1.png";
        document.getElementById("lpic").style.transform = "rotate(0deg)"
        process(3,ai);
    }
    // document.getElementsByClassName("scrn2")[0].style.border="2px dashed black"
    document.getElementsByClassName("scrn2")[0].style.boxShadow = "0px 0px 30px black";
    document.getElementsByClassName("scrn2")[0].style.backdropFilter= "blur(50px)";
    
    setTimeout(function(){
        choseai(ai)
    },1500)
    setTimeout(function(){
        document.getElementsByClassName("scrn2")[0].style.backdropFilter= "blur(10px)";
        document.getElementsByClassName("scrn2")[0].style.boxShadow = "0px 0px 0px black";
    },1500)
}
