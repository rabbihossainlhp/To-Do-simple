let createText = document.querySelector(".search input");
let addButton = document.querySelector(".search button");
let detailBox = document.querySelector(".details");
let incompleteTask = document.querySelector(".incomplete");
let completeTask = document.querySelector(".complete");

addButton.addEventListener("click",()=>{
    if(createText.value !== ""){
        detailBox.style.display = "flex";

        //Generate task 
        GenerateTask(createText.value, incompleteTask);
    }else{
        alert("Plese Enter valid task");
        detailBox.style.display = "none";
    }
})


function GenerateTask(taskValue, incompT){
    let mainTask = document.createElement("div");
    mainTask.classList.add("task");

    // create p tag indo div
    let pTag = document.createElement("p");
    pTag.innerText = taskValue;

    // now create button into there..
    let comBtn = document.createElement("button");
    comBtn.innerText = "Complete";
    comBtn.classList.add("entBtn");

    // create second button into this div..
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("entBtn");


    // appent this all in the main task div
    mainTask.appendChild(pTag);
    mainTask.appendChild(comBtn);
    mainTask.appendChild(delBtn);

    incompT.appendChild(mainTask);

    /*
    .........
    .       .
    .       .
    .       .
    .........
    .       .
    .       .
    .       .
    .........
    */
    // Use Button functionality {Delete & Complete}
    //add Delete button...
    delBtn.addEventListener("click",()=>{
        mainTask.remove();
    })

    //add complete Button
    comBtn.addEventListener("click",()=>{
        completeButton(mainTask,completeTask);
        mainTask.remove();
    })
}


//Write Complete Button here...
function completeButton(gatherDiv,completeSection){
    let compNewDiv = document.createElement("div");
    compNewDiv.classList.add("task");

    //create p into this new div
    compNewDiv.innerHTML = gatherDiv.innerHTML;
    completeSection.appendChild(compNewDiv);

    //here first of all you have to find out the acutal button {u can take help from inspect option}
    let delBtn = compNewDiv.querySelector("button:nth-child(3)");
    delBtn.addEventListener("click",()=>{
        compNewDiv.remove();
    });

    let comBtn = compNewDiv.querySelector("button:nth-child(2)");
    comBtn.style.display = "none";

}

