//alert('Welcome');

function changeBlue() {
    document.getElementById('box').style.background="lightblue";
    document.getElementById('box') .style.fontSize="20px";
    document.getElementById('box').style.color="black"
    document.getElementById('box').style.fontFamily="Times New Roman"
}

function changeRed() {
    document.getElementById('box').style.background="Red";
    document.getElementById('box').style.fontSize="20px";
    document.getElementById('box').style.color="white"
    document.getElementById('box').style.fontFamily="fantasy"
}

function addItem() {
    let newmenu = prompt("Enter menu name")
    let newItem = document.createElement("li");
    newItem.innerText = newmenu;
    document.getElementById('list').appendChild(newItem);
}

function orderFood() {
    let checked_menu = document.querySelectorAll('input[type=checkbox]:checked')

    let info = document.getElementById('info');
    let priceinfo =document.getElementById('priceinfo');
    let checked_values = [];
    let price = 0;

    checked_menu.forEach(function (checkbox) {
        if (checkbox.value == "nasi ayam"){
            price += 7;
        }else if  (checkbox.value == "nasi goreng"){
            price += 5;
        }else if  (checkbox.value == "nas lemak"){
            price += 2;
        }else if  (checkbox.value == "roti canai"){
            price += 1.50;
        }
        checked_values.push(checkbox.value);
    })
    info.innerText = checked_values.join(', ');
    priceinfo.innerHTML = "<strong>Total Price : RM " + price +"\n<strong>"
}