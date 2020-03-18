const itemName = document.getElementById('itemName');
const isummary = document.getElementById('itemsummary');
const iposterName = document.getElementById('itemposterName');
const ilocation = document.getElementById('itemlocation');
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const removeBtn = document.getElementById('removeBtn');

const database = firebase.database();

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    database.ref('/items/'+ iitemName.value).set({
        iisummary: isummary.value,
        posterName: iposterName.value,
        place: ilocation.value
    })
})
//add 
const addItem = () => {
    const item = {
        itemName_: itemName,
        isummary_: isummary,
        itemposterName_: itemposterName,
        itemlocation_: itemlocation
    }
    //add the item then reset the form.
    database.add(item).then(() => {
        form.itemName.value = "",
        form.isummary.value = "",
        form.itemposterName.value = "",
        form.itemlocation.value = ""
    
        alert('Your item has been added successfully')
    })
}
