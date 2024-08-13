var i = 0;

let button1 = document.querySelector("#but1");
button1.addEventListener("click", async (evt) => {
  evt.preventDefault();
  button1.innerHTML = "Done";
  button1.style.backgroundColor = "blue";

  i++;
  var gif = document.createElement("img");
  gif.src = "celebration1.gif"; 
  gif.style.position = "absolute";
  gif.style.top = "50%";
  gif.style.left = "50%";
  gif.style.transform = "translate(-50%, -50%)";

  document.body.appendChild(gif);

  let total = document.querySelector("#t");
  total.innerHTML = "Total Points Earned: " + i;

  
});

let button2 = document.querySelector("#but2");
button2.addEventListener("click", async (evt) => {
  evt.preventDefault();
  var link = document.createElement('a');
  link.href = "C:\Users\anshi_4s51fyd\OneDrive\Desktop\Projecthack\award1.jpeg"; // Update the path to your image here
  link.download = "award1.jpeg";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  button2.style.backgroundColor = "blue";
  button2.innerHTML = "Downloaded";
});
