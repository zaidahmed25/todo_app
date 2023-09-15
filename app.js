const Email = document.querySelector("#email");
const Password = document.querySelector("#password");
const Submit = document.querySelector("#submit");
const div = document.querySelector("#div");
const data_arr = [];
function user_data(e) {
    e.preventDefault();
    data_arr.push(Email.value, Password.value);
    console.log(data_arr);
    Email.value = "";
    Password.value = "";
    div.innerHTML = "";
    for (i = 0; i < data_arr.length; i++) {
        const items = data_arr[i];
        div.innerHTML += `<div class="list"><li class="todo-li">${items} </li><button class="delete" onclick="Delete(${i})">Delete</button><button class="edited"onclick="edit(${i})">Edit</button> </div>`;
    }
}
function Delete(index) {
    div.innerHTML = "";
    data_arr.splice(index, 1);
    render();
}
function render() {
    div.innerHTML = "";
    for (i = 0; i < data_arr.length; i++) {
        const items = data_arr[i];
        div.innerHTML += `<div class="list"><li class="todo-li">${items} </li> <button class="delete" onclick="Delete(${i})">Delete</button><button class="edited" onclick="edit(${i})">Edit</button> </div>`;
    }
    console.log(data_arr);
}
function edit(index) {
    const edit = prompt("Edit", data_arr[index]);
    data_arr[index] = edit;

    render();
}