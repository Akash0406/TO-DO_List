// select all the element
var mainContainer = document.querySelector('#todos');
var input = document.querySelector('.todo-input');
var addBtn = document.querySelector('.addTask');
var delAllBtn = document.querySelector('.deleteAll');


addBtn.addEventListener('click', function(e) {
    // alert("helo");
    // create all the element
    if (input.value.trim()) {

        // create ul Tag 
        var ulTag = document.createElement('ul');
        ulTag.classList.add('todo-list-container');

        // create list div  
        var todoList = document.createElement('div');
        todoList.classList.add('todo-list');

        // create list item (li) Tag 
        var liTag = document.createElement('li');
        liTag.innerHTML = input.value;
        liTag.classList.add('todo-item');

        // create parent div for three button
        var buttonDiv = document.createElement('div');
        buttonDiv.classList.add('button');

        // create task complete butoon
        var completeBtn = document.createElement('button');
        completeBtn.classList.add('complete');
        completeBtn.innerHTML = '<i class="fas fa-check-square"></i>';

        // create task edit button
        var editBtn = document.createElement('button');
        editBtn.classList.add('edit');
        editBtn.innerHTML = '<i class="fas fa-edit"></i>';
        editBtn.onclick = function() {
            editTaskDescription(liTag);
        }

        // create task Delete button
        var deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete');
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';


        // Appending Element Tag into hierarchy
        ulTag.append(todoList);
        todoList.append(liTag);
        liTag.append(buttonDiv);
        buttonDiv.append(completeBtn);
        buttonDiv.append(editBtn);
        buttonDiv.append(deleteBtn);

        // Append to mainContainer div
        mainContainer.append(ulTag);
        // console.log(ulTag);

        var flag = true
            // Complete, Edite, Delete Task Complete working Button

        // Complete button
        todoList.addEventListener('click', function(e) {
            // console.log(e.target);
            var BtnItems = e.target;
            // console.log(BtnItems.classList[0]);
            // var temp = BtnItems.parentElement;
            // var temp2 = temp.parentElement;
            // console.log(temp2.classList);
            // if (BtnItems.classList[0] === 'complete') {
            //     temp2.classList.add('line-cut');
            // }



            // 

            // if (flag) {
            //     if (temp2.classList[1] === 'line-cut') {
            //         temp2.classList.remove('line-cut');
            //     }
            // }


            if (BtnItems.classList[0] === 'complete') {
                var temp = BtnItems.parentElement;
                var temp2 = temp.parentElement;
                toggle(flag);

                function toggle(fl) {
                    if (fl) {
                        temp2.classList.add('line-cut');
                        flag = false
                    } else {
                        temp2.classList.remove('line-cut');
                        flag = true;
                    }

                }

            } else if (BtnItems.classList[0] === 'delete') {
                // console.log('delete clicked');
                var temp = BtnItems.parentElement;
                var temp2 = temp.parentElement;
                var temp3 = temp2.parentElement;
                temp2.classList.remove('line-cut');
                temp3.classList.add('task-delete');
                temp3.addEventListener('transitionend', function() {
                    temp3.remove();
                })
            }
            // console.log(BtnItems.classList);
        })

        // when add button is clicked clear the input are
        input.value = '';

    } else if (input.value === '') {
        alert('Please fill the input field');
    }
})


function editTaskDescription(e) {
    // console.log(e);
    var tempv = e.firstChild.nodeValue;
    var editDescription = prompt('edit the selected Task Description', e.firstChild.nodeValue);
    // var tempv = editDescription;
    e.firstChild.nodeValue = editDescription;

    if (e.firstChild.nodeValue == '') {
        // alert("Empty filling");
        e.firstChild.nodeValue = tempv;
        // console.log(tempv);
    }

}

// delAllBtn.addEventListener('click', deleteAllTask())

function deleteAllTask() {
    console.log('in');
    var getAllTask = document.querySelectorAll('.todo-list-container')
    console.log(getAllTask);
    for (var i = 0; i < getAllTask.length; i++) {
        getAllTask[i].remove();
    }
}


// document.addEventListener('keydown', keyPressed);

// function keyPressed(e) {
//     if (e.code == "Enter") {
//         addBtn();
//     }
// }





// clock
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i }; // add zero in front of numbers < 10
    return i;
}