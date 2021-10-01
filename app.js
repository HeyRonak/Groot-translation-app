
var url = "https://api.funtranslations.com/translate/groot.json";

var input_text = document.querySelector("#text_input");
var btn = document.querySelector(".show_op");
var output = document.querySelector(".output_window");

function GiveUrl(text){
    return url + "?" + "text=" + text;
}

function errorHandler(error){
    console.log( "Some unwanted happen , please try after some time : " + error);
}

function TranslateLanguage(){
    
    fetch(GiveUrl(input_text.value))
    .then(response => response.json())
    .then(json =>  output.innerText = json.contents.translated)
    .catch(errorHandler);

}

btn.addEventListener("click" , TranslateLanguage);



