let con = document.getElementById('maincon');

let cont = document.getElementById('input-container');
let checkk = document.getElementById('check1');
checkk.addEventListener('click' , function(e){
    setTimeout(function(){
        if(e.target.checked == true){
        cont.remove();
        // checkk.remove();
    }
    },500)
})
function addInputBar() {
  const container = document.getElementById('input-container'); // Where your bars go

  // 1. Create the container div
  const barWrapper = document.createElement('div');
  barWrapper.id = 'input-container'


  // 2. Create the text input
  const textInput = document.createElement('input');
  textInput.type = 'text';
  textInput.placeholder = "Write the task";
  textInput.id = 'inner-text'
  
  // 3. Create the checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'check1'

  // 4. Put them together and add to the page
  barWrapper.appendChild(textInput);
  barWrapper.appendChild(checkbox);
  con.appendChild(barWrapper);

  checkbox.addEventListener('click' , function(e){
    // console.log(e);
     setTimeout(function(){
        if(e.target.checked){
        barWrapper.remove();
    }
     },500)

    
})
}


    

  
