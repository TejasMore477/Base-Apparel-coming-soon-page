const submit = document.querySelector("button");

const error = document.querySelector("#error");

const erroricon = document.querySelector("#erroricon");

const inp = document.querySelector("input");

submit.addEventListener("click", () => {

    const emailPattern = /^[^\s@]+@gmail\.com$/

    if (inp.value === "") {

        error.classList.remove("hidden");
        erroricon.classList.remove("hidden");
        inp.style.border = "1px solid hsl(0, 93%, 68%)";

    }
    
    else if (!emailPattern.test(inp.value)) {

        error.classList.remove("hidden");
        erroricon.classList.remove("hidden");
        inp.style.border = "1px solid hsl(0, 93%, 68%)";

    }
    
    else {

        error.classList.add("hidden");
        erroricon.classList.add("hidden");
        inp.style.border = "1px solid hsl(246, 25%, 77%)";
        
    }

});
