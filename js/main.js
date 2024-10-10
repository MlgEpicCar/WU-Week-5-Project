document.getElementById("h1").textContent = `Trip Destinaton Check List`;

img = document.createElement("img");
img.src = "/images/gibraltar.jpg";
src = document.getElementById("img");
src.appendChild(img);

function list() {

    var itemsAvailable = document.getElementById('div-list');
    var checks = new Array();
    var checks = [" Food", " Water", " Jacket for Winter", " Clothes", " Phone", " Luggage", " Money", " Wallet", " Car for Transportation" ];
    

    var item, p, br;

   for(var count in checks)
    {
      item = document.createElement("input");   
      item.value=(checks[count] + '</br>');
      item.type="checkbox";
      item.id="item" + count;
      p = document.createElement("span");
      p.innerHTML = checks[count] + ": ";
      br = document.createElement("br");
      itemsAvailable.appendChild(item);
      itemsAvailable.appendChild(p);
      itemsAvailable.appendChild(br);
   }
}

list();