let inputField = document.getElementById("inputField");
let addItemBtn = document.getElementById("addItemBtn");
let todoBody = document.getElementById("todoBody");

console.log(inputField.value);
console.log(addItemBtn);
console.log(todoBody);


function todoAdd(){
    let inputValue = inputField.value;
    console.log(inputValue);
    if (inputValue ===''){
        alert('please enter your task')
    }else{
        let li = document.createElement("li");
        let span = document.createElement("span");
        span.innerText = inputValue;
        todoBody.appendChild(li)
        li.appendChild(span)
        inputField.value = ''
        inputField.focus()



        let deleteBtn = document.createElement("i");
        deleteBtn.classList.add("fa-solid", "fa-trash")
        li.appendChild(deleteBtn);

        let EditBtn = document.createElement("i");
        EditBtn.style.marginLeft = "12px"
        EditBtn.classList.add("fa-solid", "fa-pen-to-square")
        li.appendChild(EditBtn);





        li.addEventListener("click", function name(evets) {
           // console.log(evets.target.classList);
            let targetClass = evets.target.classList;

            // console.log(evets.target.parentElement.remove(), '-----parent Element');


            // console.log(targetClass);
            // console.log(targetClass[0]);
            // console.log(targetClass[1]);
            // console.log(targetClass[1] === 'fa-trash');
            if (targetClass[1] === 'fa-trash') {
            
                if(confirm('Do u want to dlt?') == true){
                    evets.target.parentElement.remove()

                }

            }else if (targetClass[1] === 'fa-pen-to-square'){
                let updateText =  prompt("Enter text");
                //console.log(updateText,'update text here...');
                  //li.innerHTML = updateText
                  if(updateText){
                let newSpan =  li.querySelector("span")
                newSpan.innerText = updateText;
                // console.log(li);
                // console.log(newSpan);
                }
            }
        });
        // Get references to the input fields and the clear butt


    }
}
clearButton.addEventListener('click', function () {
    todoBody.innerHTML = '';
  });

const callback = (event)=>{
    if(event.key === 'Enter'){
        todoAdd();
    }
   
}

// callback()
// todoAdd();


document.addEventListener("keypress", callback)




// const isFunctionCalling = () =>{
//     console.log(';;');
// }

// console.log(todoBody);

// li.addEventListener("click",isFunctionCalling)


