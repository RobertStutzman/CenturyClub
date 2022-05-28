//get the values from the Page
//starts or controller function
function getValues() {
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
 
    //parse into integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
         //we call generate numbers
         let numbers = generateNumbers(startValue, endValue);
         //we call display numbers
         displayNumbers(numbers);

    }else{
        alert("You must enter an integer!")
    }

    
}


//generate numbers from startValue to the endValue
//logic function(s)
function generateNumbers(sValue, eValue) {

    let numbers = [];

    //we want to get all numbers from start to end

    for(let index = sValue; index <= eValue; index++){

        //this will execute in a loop until index = eValue
        numbers.push(index);
    }

    return numbers;

}

//display the numbe rs and mark the even numbers bold
//display or view function
function displayNumbers(numbers) {

    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {

        let className = "even";
        let number = numbers[index];

        if(number % 2 === 0){
            className = "even";
        }else{
            className = "odd";
        }
        templateRows += `<tr><td class="${className}">${number}</tr></td>`;
    }

    document.getElementById("results").innerHTML = templateRows;

}