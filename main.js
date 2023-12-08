let exp_form = document.getElementById("my-form");
let exp_amount = document.getElementById("amount");
let exp_description = document.getElementById("description");
let exp_category = document.getElementById("category");
const msg = document.querySelector(".msg");
const userList = document.getElementById('users');


userList.style.fontFamily = "Arial"
exp_form.style.fontFamily = "Arial"
exp_form.addEventListener("submit", onSubmit);

document.addEventListener('DOMContentLoaded', () => {
  // Load user data from local storage and update UI
  let users = JSON.parse(localStorage.getItem('users')) || [];
  users.forEach(user => {
    addToUI(user);
  });
});

function onSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  msg.classList.add("error");

  let users = JSON.parse(localStorage.getItem('users')) || [];

  if (exp_amount.value === "" || exp_description.value === "" || exp_category.value === "") {
    msg.innerHTML = "Must fill all forms";
    setTimeout(() => {
      msg.remove();
    }, 3000);
  } else {
    const newUser = {
      id: new Date().getTime(),
      exp_amount: exp_amount.value,
      exp_category: exp_category.value,
      exp_description: exp_description.value,
    };

    users.push(newUser);

    // Update local storage with the new array of users
    localStorage.setItem("users", JSON.stringify(users));

    addToUI(newUser);

    // Clear input fields
    exp_amount.value = "";
    exp_description.value = "";
    // exp_category.value = "";
  }
}

function addToUI(user) {
  const li = document.createElement("li");
  let res = document.createTextNode(`${user.exp_amount} - ${user.exp_category} - ${user.exp_description}`);
  li.appendChild(res);
  userList.appendChild(li);


    const deleteBtn = document.createElement('button')
    deleteBtn.appendChild(document.createTextNode("Delete"))
    deleteBtn.addEventListener('click',()=>deleteUser(user))
    li.appendChild(deleteBtn)


    const editBtn = document.createElement('button')
    editBtn.appendChild(document.createTextNode("Edit"))
    editBtn.addEventListener('click',()=>editUser(user))
    li.appendChild(editBtn)
  
}

function editUser(userToEdit){
  exp_amount.value = userToEdit.exp_amount;
  exp_category.value = userToEdit.exp_category;
  exp_description.value = userToEdit.exp_description

  exp_form.setAttribute('data-edit-id', userToEdit.id);
}

function deleteUser(userToDelete) {
  const userListItem = document.querySelectorAll('#users li');
  userListItem.forEach(li => {
      const textContent = li.textContent || li.innerText;
      if (textContent.includes(`${userToDelete.exp_amount} - ${userToDelete.exp_category} - ${userToDelete.exp_description}`)) {
          li.remove();

          // Remove the user from local storage
          let users = JSON.parse(localStorage.getItem('users')) || [];
          let updatedUsers = users.filter(user => (
              user.id !== userToDelete.id
          ));
          localStorage.setItem('users', JSON.stringify(updatedUsers));
      }
  });
}


