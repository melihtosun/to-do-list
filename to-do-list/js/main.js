// TO DO LİST



const ulDOM = document.querySelector("#list")

const listItems = document.querySelectorAll("#list li");


function newElement() {

  if (document.getElementById("task").value != "") {
  
    // Get the input value
    const inputValue = document.getElementById("task").value;

    // Create a new li element
    const li = document.createElement("li");

    // Create a text node with the input value
    const textNode = document.createTextNode(inputValue);

    // Append the text node to the li element
    li.appendChild(textNode);

    // Create a delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "&times;"; 
    deleteButton.className = "btn btn-secondary btn-sm float-right"; 

    // Add an event listener to delete the li item when the button is clicked
    deleteButton.addEventListener("click", function() {
      li.remove();
    });

    // Append the delete button to the li element
    li.appendChild(deleteButton);

    // Append the li element to the ul with the id "list"
    document.getElementById("list").appendChild(li);

    // Clear the input value
    document.getElementById("task").value = ""

    // Add a toast
    const toastItem = document.getElementById('liveToastC')
    toastItem.classList.remove('hide')
    toastItem.classList.add('show')



  } else {
    // Alert when input is empty
    const toastItem = document.getElementById('liveToast')
    toastItem.classList.remove('hide')
    toastItem.classList.add('show')

  }
}





function closeToast() {
  const toastItem1 = document.getElementById('liveToast')
  toastItem1.classList.remove('show')
  toastItem1.classList.add('hide')

  const toastItem2 = document.getElementById('liveToastC')
  toastItem2.classList.remove('show')
  toastItem2.classList.add('hide')

}







function addDeleteButtonToExistingItems() {
  const listItems = document.querySelectorAll("#list li");

  listItems.forEach(li => {
    // Create a delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "&times;";
    deleteButton.className = "btn btn-sm btn-secondary float-right";

    // Add an event listener to delete the li item when the button is clicked
    deleteButton.addEventListener("click", function() {
      li.remove();
    });

    // Append the delete button to the li element
    li.appendChild(deleteButton);

  });
}
addDeleteButtonToExistingItems()





listItems.forEach(item => {
  item.addEventListener('click', function() {
    if (this.classList.contains('checked')) {
      this.classList.remove("checked");
    } else {
      this.classList.add('checked');
    }
  });
});






// Adds an input with enter key
document.querySelector('#task').addEventListener("keypress", (event) => {
  if(event.key === "Enter") newElement();
});
