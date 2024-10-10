var checkedItems = 0;

document.getElementById("h1").textContent = `Gibraltar Check List`;

img = document.createElement("img");
img.src = "/images/gibraltar.jpg";
src = document.getElementById("img");
src.appendChild(img);

function list() {

    var itemsAvailable = document.getElementById('div-list');
    var checks = new Array();
    var checks = [" Food", " Water", " Sunglasses", " Passport", " Phone", " Luggage", " Money", " Sunscreen", " Shoes" ];
    

    var item, p, br;

   for(var count in checks)
    {
      item = document.createElement("input");   
      item.value=(checks[count] + '</br>');
      item.type="checkbox";
      item.id="item" + count;
      item.onclick = (function(item) {
        return function() {
            validate(item);
        };
    })(item);
      p = document.createElement("span");
      p.innerHTML = checks[count];
      br = document.createElement("br");
      itemsAvailable.appendChild(item);
      itemsAvailable.appendChild(p);
      itemsAvailable.appendChild(br);
   }
}

function validate(checkbox) {
    if (checkbox.checked) {
        checkedItems += 1;
    } else {
        checkedItems -= 1;
    }
    document.getElementById("tally").innerHTML = `Checked Items: ` + checkedItems;
}

list();