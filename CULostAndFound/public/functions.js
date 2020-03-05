const iitemName = document.getElementById('itemName');
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