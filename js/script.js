var input = document.querySelector("input");
var button = document.querySelector("button");


button.addEventListener("click",function(){
    let age = Number(input.value);
    if(age <=0){
        console.log("Age can not be Zero or Negative value")
        document.write(`<h1>Age can not be Zero or Negative value</h1>`)
        document.write(`<a href="./start.html" style="background-color: green; color: white; font-weight: 600; border-radius: 5px; padding: 15px; text-decoration: none; box-sizing: border-box; display: inline-block">GO Back</a>`)
    }
    else if(age > 0 && age <= 1){
        console.log("You are Infant") // Infants: 0 to below 1 year
        document.write(`<h1>You are Infant</h1>`)
        document.write(`<a href="./start.html" style="background-color: green; color: white; font-weight: 600; border-radius: 5px; padding: 15px; text-decoration: none; box-sizing: border-box; display: inline-block">GO Back</a>`)
    }
    else if(age > 1 && age <= 3){
        console.log("You are Toddler") // Toddlers: 1-3 years
        document.write(`<h1>You are Toddler</h1>`)
        document.write(`<a href="./start.html" style="background-color: green; color: white; font-weight: 600; border-radius: 5px; padding: 15px; text-decoration: none; box-sizing: border-box; display: inline-block">GO Back</a>`)
    }
    else if(age > 3 && age <= 5){
        console.log("You are Preschooler") // Preschoolers: 4-5 years
        document.write(`<h1>You are Preschooler</h1>`)
        document.write(`<a href="./start.html" style="background-color: green; color: white; font-weight: 600; border-radius: 5px; padding: 15px; text-decoration: none; box-sizing: border-box; display: inline-block">GO Back</a>`)
    }
    else if(age > 5 && age < 13){
        console.log("You are Child") // School-age children: 6 below 13 years
        document.write(`<h1>You are Child</h1>`)
        document.write(`<a href="./start.html" style="background-color: green; color: white; font-weight: 600; border-radius: 5px; padding: 15px; text-decoration: none; box-sizing: border-box; display: inline-block">GO Back</a>`)
    }
    else if(age >= 13 && age < 18){
        console.log("You are Teenage") // teenagers are 13 below 18
        document.write(`<h1>You are Teenage</h1>`)
        document.write(`<a href="./start.html" style="background-color: green; color: white; font-weight: 600; border-radius: 5px; padding: 15px; text-decoration: none; box-sizing: border-box; display: inline-block">GO Back</a>`)
    }
    else{
        console.log("You are Adult")
        document.write(`<h1>You are Adult</h1>`)
        document.write(`<a href="./start.html" style="background-color: green; color: white; font-weight: 600; border-radius: 5px; padding: 15px; text-decoration: none; box-sizing: border-box; display: inline-block">GO Back</a>`)
    }
})


// Input Fields
var inputSingle = document.getElementById("inputSingle");
var inputRangeForm = document.getElementById("inputRangeForm");
var inputRangeTo = document.getElementById("inputRangeTo");

//Button
var singleBtn = document.getElementById("singleBtn");
var rangeBtn = document.getElementById("rangeBtn");

// For Single Button
singleBtn.addEventListener("click", function(){
    var number = Number(inputSingle.value);
    document.write(`<b>Multiplication Table for ${number}</b>` + "<br>")
    for(i=1; i<=10;i++){
        document.write(number + " x " + i + " = " + number*i + "<br>")
    }
    document.write(`<a href="./start.html" style="background-color: green; color: white; font-weight: 600; border-radius: 5px; padding: 15px; text-decoration: none; box-sizing: border-box; display: inline-block;">GO Back</a>`)
})

// For Multiple Button
rangeBtn.addEventListener("click", function(){
    var startValue = Number(inputRangeForm.value);
    var endValue = Number(inputRangeTo.value);
    if(startValue < endValue){
        document.write(`<a href="./start.html" style="background-color: green; color: white; font-weight: 600; border-radius: 5px; padding: 15px; text-decoration: none; box-sizing: border-box; ">GO Back</a> <br><br>`)
        for(k=startValue; k<=endValue;k++){        
            document.write(`<b>Multiplication Table for ${k}</b>` + "<br>")
            for(i=1; i<=10;i++){
                document.write(k + " x " + i + " = " + k*i + "<br>")
            }
            document.write("<br>")
        }
        document.write(`<a href="./start.html" style="background-color: green; color: white; font-weight: 600; border-radius: 5px; padding: 15px; text-decoration: none; box-sizing: border-box; ">GO Back</a>`)
    }else{
        document.write(`<a href="./start.html" style="background-color: green; color: white; font-weight: 600; border-radius: 5px; padding: 15px; text-decoration: none; box-sizing: border-box; ">GO Back</a> <br><br>`)
        for(let k = startValue; k >= endValue; k--){        
            document.write(`<b>Multiplication Table for ${k}</b>` + "<br>")
            for(let i = 1; i <= 10; i++){
                document.write(k + " x " + i + " = " + k*i + "<br>")
            }
            document.write("<br>")
        }
        document.write(`<a href="./start.html" style="background-color: green; color: white; font-weight: 600; border-radius: 5px; padding: 15px; text-decoration: none; box-sizing: border-box; ">GO Back</a>`)
    }
})



