document.querySelector(".btn").addEventListener("click", AddnewNotes);

var open = document.querySelector(".continer");

var list = JSON.parse(localStorage.getItem("notes")) || [];

function AddnewNotes() {
    open.innerHTML = `<h5 class="limit">${20}/1000 Char Limit</h5>

    <textarea 
        class="notes"   maxlength="10000" 
        placeholder="Enter your description">
    </textarea>

    <div class="sub">
        <button class="sub-btn">Add New Notes</button>
    </div>
    `;

    document.querySelector(".sub-btn").addEventListener("click", Addnotes);
}

function Addnotes() {

    var contents = document.querySelector(".notes");

    let content = contents.value;

    list.push(content);

    localStorage.setItem("notes", JSON.stringify(list));

    showfunction();
}
var date=new Date()
function showfunction() {

    console.log(list.length);

    open.innerHTML = "";

    list.forEach(ele => {
        open.innerHTML += `
        <div class="cardsss">
        <h3> Date:${date.getDate()}/${date.getMonth()}/${date.getFullYear()} Time:${date.getHours()} ${date.getMinutes()}${date.getSeconds()}</h3>
            <div class="cards">${ele}</div>
         </div>
        `;

    });
}
