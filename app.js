//UI vars
var fact = document.getElementById('fact');
var fact_text = document.getElementById('fact_text');
var number_input = document.getElementById('number_input');

//Event Listener
number_input.addEventListener('input',getFactAjax);

//function
function getFactAjax(){
    var number = number_input.value;
    var xhr  = new XMLHttpRequest();
    
    xhr.open('GET','http://numbersapi.com/' + number,true);

    xhr.onload = function(){
        if(this.status === 200 && number != ''){
            fact.style.display = 'block';
            fact_text.innerText = this.responseText;
        }else if(this.status !== 200){
            console.log('Error: ' + this.status);
        }
    }


    xhr.send();
}