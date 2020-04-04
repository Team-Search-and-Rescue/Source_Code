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
const convertDate = idate.toString();

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    database.ref('/items/'+ iTitle.value).set({
        posterName: iposterName.value,
        status: iStatus.value,
        location: ilocation.value,
        category: icategory.value,
        color: icolor.value,
        date: convertDate
    })
    alert('Your item has been added successfully')
})

// searchButton.addEventListener('click', (e) => {
//     e.preventDefault();
//     const query1 = database.where('color', '==', 'Black');
//     const query2 = 
//     query1.get()
//     .then(snapshot => {
//         snapshot.foreach(item => {
//             console.log(item)
//         })
//     })
// })