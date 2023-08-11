
let blur = document.querySelector(".blur");
let AssoName = document.getElementById("AssoName");
let formCloser = document.getElementById("formColser");
let AssoInputBox = document.querySelector(".AssoInputBox");
let insertAssoBtn = document.querySelector(".addNewAsso");
let proContainer = document.querySelector(".proContainer");


formCloser.onclick = e => {
  e.target.parentElement.parentElement.style.display = "none"; 
  blur.style.display = "none";
};

insertAssoBtn.onclick = () => {
    AssoInputBox.style.cssText = "display: block; opacity: 1";
    blur.style.cssText = "display: block";
}

let update = (e, id) => {
  let data = {
    id: id,
    state: 1
  };
  fetch('update.php', {
    method: 'PUT',
    headers: {
      'Content-Type':
      'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res => {
    if(res.ok) {
      e.target.innerText = "تم الانضمام";
      console.log("record updated successfully", e.target);
    }else {
      console.log('Error updating record');
    }
  })
  .catch(error => {
    "Error updating record: " + error
  });

  
};

fetch('../html/getDeleteAssoData.php')
  .then(res => res.json())
  .then(data => showOutputData(data));

let showOutputData = data => {

  for (i in data) {
    proContainer.innerHTML += 
      `<div id=${data[i].id} class="list AssosList">
       <div class="box-container">
        <div class="AssoName name">
            <h3>${data[i].name}</h3>
        </div>
        <div class="AssoDetails details">
            <button onclick="update(event, ${data[i].id})" class="desc joinBtn">${data[i].join_option == 0? "انضمام": "تم الانضمام"}</button>
            <a href="./getDeleteAssoData.php?id=${data[i].id}" class="deleteBtn">حذف</a>
        </div>
    </div>
    </div>`
    ;
  }
}

AssoName.oninput = e => {
  let input = e.target;
  input.value = input.value.replace(/\s/g, "");
}
