const itemName = document.getElementById('ItemName');
const summary = document.getElementById('summary');
const posterName = document.getElementById('posterName');
const place = document.getElementById('place');
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const removeBtn = document.getElementById('removeBtn');

const database = firebase.database();

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    database.ref('/items/'+ itemName.value).set({
        item: ItemName.value,
        summary: summary.value,
        poster: posterName.value,
        location: place.value
    })
})