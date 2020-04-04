const iStatus = document.getElementById('status');
const iTitle = document.getElementById('itemTitle');
const iposterName = document.getElementById('itemposterName');
const icolor = document.getElementById('color');
const ilocation = document.getElementById('itemlocation');
const icategory = document.getElementById('category');
const idate = document.getElementById('date');
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const removeBtn = document.getElementById('removeBtn');

const database = firebase.database();
var ref = database.ref('items');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    var inputData = {
        title : iTitle.value,
        status : iStatus.value,
        category : icategory.value,
        postername : iposterName.value,
        location : ilocation.value,
        color : icolor.value,
        date : idate.value
    }
    ref.push(inputData);
    alert('Your item has been added successfully')
})