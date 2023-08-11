let projContainer = document.querySelector(".projContainer");
let blur = document.querySelector(".blur");
let projRevenueInputBox = document.querySelector(".projRevenueInputBox");
let close = document.querySelector(".close");

let addEvent = () => {

    projRevenueInputBox.style.cssText = "display: block; opacity: 1";
    blur.style.cssText = "display: block";
}  

  
  close.onclick = (e) => {
    e.preventDefault();
    projRevenueInputBox.style.cssText = "display: none; opacity: 0";
    blur.style.cssText = "display: none";
}


fetch('../html/getProjectConjugations.php')
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
            <div class="desc">$${data[i].price}</div>
            <button onclick={addEvent()} class="detailsBtn">تفاصيل</button>
        </div>
    </div>
</div>`;
  }
}