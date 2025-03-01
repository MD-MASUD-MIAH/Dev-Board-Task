const completedBtns = document.querySelectorAll(".ButtonClass");

// compeleted buttton

for (let i = 0; i < completedBtns.length; i++) {
  const completedButtons = completedBtns[i];

  completedButtons.addEventListener("click", function (event) {
    const count = document.getElementById("countText");

   let titleCard = event.target.parentElement.parentElement.children[1].innerText;

    
    
    

    let unseenTotalText = parseInt(count.innerText);

    unseenTotalText = unseenTotalText - 1;

    count.innerText = unseenTotalText;

    const seen = document.getElementById("seenText");

    let seenTotalText = parseInt(seen.innerText);

    seenTotalText = seenTotalText + 1;

    seen.innerText = seenTotalText;

    

    
    const time = new Date();

    const times = time.toLocaleTimeString();

    

    const historyContainer = document.getElementById("historyBox");

    const createElement = document.createElement("p");
    createElement.classList.add("story");
    createElement.innerText = `You have completed task ${titleCard}     at ${times} `;

    historyContainer.appendChild(createElement);

    event.target.classList.add("disabled");
    event.target.disabled = true;

    alert("Board updated successfully");

    if (unseenTotalText === 0) {
      alert("congrates!!! You have compeleted all the current task");
    }
  });
}

const page = document.getElementById("nextPage");

page.addEventListener("click", function (event) {
  event.preventDefault();

  window.location.href = "./second.html";
});

const htButton = document.getElementById("HistoryButton");

htButton.addEventListener("click", function () {
  const historyContainer = document.getElementById("historyBox");

  historyContainer.innerText = " ";
});

const colorButton = document
  .getElementById("colorbtn")
  .addEventListener("click", function (event) {
    const colorCode = "abcdef0123456789";

    let colorhes = "#";

    for (let i = 0; i < 6; i++) {
      colorhes = colorhes + colorCode[Math.floor(Math.random() * 16)];
    }

    document.getElementById("bdy").style.backgroundColor = ` ${colorhes}`;
  });


  const day = document.getElementById('day')

  const day1 = new Date()
  const allDay =day1.getDay();
  const dayarray = ['Sun','Mon','Tue','Wed','Fri','Sat']
  const lastDay = dayarray[allDay];
  

  



  const date = new Date();
  const todayDate = date.getDate();
  const month =date.getMonth() +1;
  const year = date.getFullYear();

   
  day.innerText = `${lastDay}  , ${todayDate}/${month}/${year}`;
   