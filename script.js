let tNAME = document.querySelector(".taskName")
let tDescription = document.querySelector(".taskDescription")
let taskB = document.querySelector(".tasksBody")
let edModal = document.querySelector("#editModal")
let editModal = new bootstrap.Modal(edModal)
let eNamei = document.querySelector("#editName")
let eDesci = document.querySelector("#editDesc")
let currentIndex = null
let saveBtn = document.querySelector("#saveEditBtn")
let tasks = JSON.parse(localStorage.getItem('tasks')) || []
function bild() {
    taskB.innerHTML = ""
    tasks.forEach((el , index) => {
    let row = document.createElement("tr")
                row.innerHTML = `
                <th scope="row">${el.name}</th>
                <td>${el.desc}</td>
                <td><button type="button" class="del btn btn-danger">Delete</button>
                <button type="button" class="edit btn btn-warning"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
	<path d="M0 0h24v24H0z" fill="none" />
	<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
		<path d="m16.475 5.408l2.117 2.117m-.756-3.982L12.109 9.27a2.1 2.1 0 0 0-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.853 1.853 0 1 0-2.621-2.621" />
		<path d="M19 15v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3" />
	</g>
</svg>
</button>
                </td>
    `
    let del = row.querySelector(".del")
del.addEventListener("click", ()=>{
        tasks.splice(index,1)
        saveLocal()
        bild()
})
        let edit = row.querySelector(".edit")
    edit.addEventListener("click", () => {
        eNamei.value = el.name
        eDesci.value = el.desc
        currentIndex= index;
        editModal.show()
    })
    
    taskB.append(row)
    })
}
bild()
function addbtn() {
    let name = tNAME.value
    let desc = tDescription.value
        if(!name || !desc){
    alert("please enter value of Task Name And Task Description");
    }
    else{   
        tasks.push({name, desc})
        saveLocal()
        bild()
    tNAME.value=""
    tDescription.value=""
    }

}

saveBtn.addEventListener("click", () => {
    if(!eNamei.value || !eDesci.value){
    alert("please enter value of Task Name And Task Description");
    }else{
    tasks[currentIndex].name = eNamei.value
    tasks[currentIndex].desc = eDesci.value
    saveLocal()
    bild()
    editModal.hide()
}})
function saveLocal() {
    let valueOfJs= JSON.stringify(tasks)
    localStorage.setItem("tasks",valueOfJs )
}
