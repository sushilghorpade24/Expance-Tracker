function toStoreDataToLocalStorage(){
    var itemName = document.getElementById("item_name").value;
    var itemAmount = parseFloat(document.getElementById("item_amount").value);
    if(!isNaN(itemAmount) && itemName){
        var items = JSON.parse(localStorage.getItem('items')) || [];
        items.push({ name: itemName, amount: itemAmount });
        localStorage.setItem('items', JSON.stringify(items));
        document.getElementById("para").innerHTML += `<p>Item: ${itemName}<p><p>Amount: ${itemAmount}</p>`;

        document.getElementById("item_name").value = "";
        document.getElementById("item_amount").value = "";

        var totalAmount = items.reduce(function(total, item) {
        return total + item.amount;
    }, 0);
    document.getElementById("total_amount").innerText = totalAmount;

    }else{
        alert("Enter both values in text box");
    }

}

function toClearAll(){
    document.getElementById("item_name").value="";
    document.getElementById("item_amount").value="";
    document.getElementById("para").innerHTML="";
    document.getElementById("total_amount").innerHTML="";
    localStorage.clear();
}