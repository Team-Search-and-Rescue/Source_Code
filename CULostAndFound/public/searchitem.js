const searchButton = document.getElementById('searchBttn');
const icolor = document.getElementById('color');
const ilocation = document.getElementById('itemlocation');
const icategory = document.getElementById('category');
const database = firebase.database();
var ref = database.ref('items');
var allItems = [];


searchButton.addEventListener('click', (e) =>{
    e.preventDefault();
    //console.log(icolor.value);
    colorFilter = icolor.value;
    categoryfilter = icategory;

    //console.log('Searching by color');
    
    //console.log(allItems);
    //console.log('filter');

    var filteredItems = allItems.filter(item => {
        return item.color === colorFilter;
    })

    // var filteredCat = allItems.filter(item => {
    //     return item.category === categoryfilter;
    // })

    console.log(filteredItems);
    // console.log(filteredCat);
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
