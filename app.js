window.onload = function (){
    //get all the elements with either tag or selector all
    var elements = document.getElementsByTagName("span");
    var screen = document.querySelectorAll(' p')[0];
    var clear =   document.getElementById("clear");
    //check to see what key has been pressed , if its the equals that means we call the calculate
    // function to get the results
    //binding event listener to the click action elements are the var we used to get all the spans, so it is iterating through
    //the span elements to check out what value they have
    for(var i=0;i<elements.length;i+=1){
        if(elements[i].innerHTML === '='){
            elements[i].addEventListener("click", calculate(i));
        }else{
            //this calls the method that collects the actual values that we use to calculate
            elements[i].addEventListener("click", addtocurrentvalue(i));
        }
    }



//method to get values from click events. i being the item that was iterated through element[i];
    function addtocurrentvalue (i){
        //return the operators onto the page in the appropriate place.
        return function(){
            if (elements[i].innerHTML === "÷") {
                screen.innerHTML  +=  "/ " ;
            }else if(elements[i].innerHTML === "x"){
                screen.innerHTML += "*";
            } else{
                screen.innerHTML  += elements[i].innerHTML;
            }
        };
    }



    clear.onclick = function () {
        screen.innerHTML = '';
    };
//because we have all of our values in strings we can use the eval method for javascript that
   // evaluates strings. this eleminates the need to do a parse on the strings to turn the "7" into a 7
    function calculate(i) {
        return function () {
            screen.innerHTML = eval(screen.innerHTML);
        };
    }
};