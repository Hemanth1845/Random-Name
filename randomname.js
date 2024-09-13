let buttonclick = document.getElementById("mybutton");
let labeling = document.getElementById("mylabel");
let max = 50;
let min = 1;

buttonclick.onclick = function() {

        let r = Math.floor(Math.random()*max)+min;
        if (r >1 && r<10)
            labeling.textContent = "hemanth\n";
        else if (r >10 && r<20)
            labeling.textContent = "gowtham\n";
        else if (r >20 && r<30)
            labeling.textContent = "vijay\n";
        else if (r >30 && r<40)
            labeling.textContent = "vinay\n";
        else if (r >40 && r<50)
            labeling.textContent = "uday\n";
        else if (r >50 && r<60)
            labeling.textContent = "prabas\n";
        else if (r >60 && r<70)
            labeling.textContent = "klef\n"
        else if (r >70 && r<80)
            labeling.textContent = "harsha\n";
        else if (r > 80 && r<90)
            labeling.textContent = "kalyan\n";
    }

