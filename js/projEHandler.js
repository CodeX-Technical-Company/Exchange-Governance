
let projContainer = document.querySelector(".projContainer");
let blur = document.querySelector(".blur");
let projInputBox = document.querySelector(".projInputBox");
let insertProjBtn = document.querySelector(".addNewProj");
let formCloser = document.getElementById("formColser");
let projectName = document.getElementById("projectName");
let workState = document.getElementById("workState");

formCloser.onclick = e => {
  e.target.parentElement.parentElement.style.display = "none"; 
  blur.style.display = "none";
};

insertProjBtn.onclick = () => {

    projInputBox.style.cssText = "display: block; opacity: 1";
    blur.style.cssText = "display: block";
}

fetch('../html/getDeleteProData.php')
  .then(res => res.json())
  .then(data => showOutputData(data));


let showOutputData = data => {

  for (i in data) {
    projContainer.innerHTML += `<div id=${data[i].id} class="list projsList">
    <div class="box-container">
        <div class="projName name">
            <h3>${data[i].name}</h3>
        </div>
        <div class="projDetails details">
            <div class="desc">${data[i].work_state}</div>
            <a href="./getDeleteProData.php?id=${data[i].id}" class="deleteBtn">حذف</a>
        </div>
    </div>
</div>`;
  }
}

projectName.oninput = e => {
  let input = e.target;
  input.value = input.value.replace(/\s/g , '-');
}
workState.oninput = e => {
  let input = e.target;
  input.value = input.value.replace(/\s/g , '-');
}
