/*let input = document.getElementById('');
let buttons = document.querySelectorAll('.btn');
let string = "";
let arr = Array.from('btn');
arr.forEach(btn => {
button.addEventListener('click',(e) => {
           if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
            document.querySelector ('input').value = string; 
           }
           string += e.target.innerHTML;
           document.querySelector ('input').value = string;
    })
})*/

let string = "";
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'AC'){
        string = ""
        document.querySelector('input').value = string;
      }
      else if(e.target.innerHTML == 'D'){
        string = remove();
        document.querySelector('input').value = string;
      }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})