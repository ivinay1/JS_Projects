var container = document.querySelector(".container");
var msg = document.querySelector(".msg");
var ab = document.querySelector(".ab");

document.addEventListener("keydown",function(event){

    msg.style.display = "none";

    container.style.display = "block";

    container.innerHTML = `<table>
    <tr>
    <td>event.key</td>
    <td>event.keyCode</td>
    <td>event.code</td>
  </tr>
  <tr>
    <td>${(event.keyCode == 32)? "space":event.key}</td>
    <td>${event.code }</td>
    <td>${event.keyCode}</td>
  </tr>
  </table>`

})



