function calculate(Value){
    document.querySelector("#result").value += Value;
}
function answer(){
    var a =  document.querySelector("#result").value;
    var b = eval(a);
    document.querySelector("#result").value = b;
}
function Clear(){
    document.querySelector("#result").value = "";
}

