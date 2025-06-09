const ul = document.getElementById('to-does');
const title = document.getElementById("task");
const delbtn = document.getElementById("del");
const addbtn = document.getElementById('add');
const task = document.getElementById('task');

delbtn.addEventListener('click',Delete);
addbtn.addEventListener('click',Add);


if (!ul) {
    throw new Error("Ul can not get");
}

const queue = [];

function Add () {

    title.innerHTML = '';

    let newelelemnt = document.createElement('li');

    newelelemnt.textContent = `${title.value.trim()}`;


    queue.push(newelelemnt);
    console.log(queue);
    
    for (let task of queue) {
        ul.appendChild(task);
    }    

}


function Delete() {
    queue.shift();
    console.log(typeof ul.innerHTML);
        
    ul.innerHTML = '';
    for (let task of queue) {
            ul.appendChild(task);
    }   
}


