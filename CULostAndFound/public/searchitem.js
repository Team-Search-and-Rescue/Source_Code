const searchButton = document.getElementById('searchBttn');
const icolor = document.getElementById('color');
const ilocation = document.getElementById('location');
const icategory = document.getElementById('category');
const istatus = document.getElementById('status');
const database = firebase.database();
var ref = database.ref('items');
var allItems = [];


searchButton.addEventListener('click', (e) =>{
    e.preventDefault();
    //console.log(icolor.value);
    statusFilter = istatus.value;
    colorFilter = icolor.value;
    categoryFilter = icategory.value;
    locationFilter = ilocation.value;

    //console.log('Searching by color');
    
    //console.log(allItems);
    //console.log('filter'); 

    var filterItemStatus = allItems.filter(item => {
        return item.status === statusFilter;
    })

    var filteredItemColor = allItems.filter(item => {
        return item.color === colorFilter;
    })

    var filteredItemCategory = allItems.filter(item => {
        return item.category === categoryFilter;
    })

    var filteredItemLocation = allItems.filter(item => {
        return item.ilocation === locationFilter;
    })

    // var filteredItemDate = allItems.filter(item => {
    //     return item.date 

    console.log(filterItemStatus);
    console.log(filteredItemColor);
    console.log(filteredItemCategory);
    console.log(filteredItemLocation);
})


const searchAllItems = () => {
    
    var itemsref = firebase.database().ref("items");
    itemsref.on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot){
            var childData = childSnapshot.val();
            allItems.push(childData); 
        });
    });
}
