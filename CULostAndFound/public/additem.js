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
var form = document.inputForm;

const database = firebase.database();
var ref = database.ref('items');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addItem();
})

const addItem = () => {
    var inputData = {
        title : iTitle.value,
        status : iStatus.value,
        category : icategory.value,
        postername : iposterName.value,
        location : ilocation.value,
        color : icolor.value,
        date : idate.value
    }
    console.log('Your item has been added successfully');
    //add the item then reset the form.
    // ref.push(inputData).then(() => {
    //     form.status.value = "",
    //     form.itemTitle.value = "",
    //     form.itemposterName.value = "",
    //     form.color.value = "",
    //     form.itemlocation.value = "",
    //     form.category.value = "",
    //     form.date.value = ""
        
    //     alert('Your item has been added successfully');
    // })
}