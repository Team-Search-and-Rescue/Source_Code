const searchButton = document.getElementById('searchBttn');
const iQueryText = document.getElementById('queryText')
const icolor = document.getElementById('color');
const ilocation = document.getElementById('location');
const icategory = document.getElementById('category');
const istatus = document.getElementById('status');
const idate = document.getElementById('date-lost');
const database = firebase.database();
var ref = database.ref('items');
const querydatabase = database.ref('query');
var allItems = [];
var results = [];


searchButton.addEventListener('click', (e) =>{
    e.preventDefault();
    statusFilter = istatus.value;
    colorFilter = icolor.value;
    categoryFilter = icategory.value;
    locationFilter = ilocation.value;
    numberOfItems = allItems.length;
    DateFilter = idate.value;

    var inputData = {
        query : iQueryText.value,
        status : istatus.value,
        color : icolor.value,
        location : ilocation.value,
        category : icategory.value,
        date : idate.value
    }
    
    querydatabase.push(inputData).then(() => {
        
    })

    //filtering by status lost or found
    if (statusFilter != 'Any'){
        var filterItemStatus = allItems.filter(item => {
            return item.status === statusFilter;
        })
    }

    //filters by search color
    if (colorFilter != 'Any'){
        var filteredItemColor = filterItemStatus.filter(item => {
            return item.color === colorFilter;
        })
    }
   
    //filter with category
    if (categoryFilter != 'Any'){
        var filteredItemCategory = filteredItemColor.filter(item => {
            return item.category === categoryFilter;
        })
    }

    //filter by location
    if (locationFilter != 'Any'){
        var filteredItemLocation = filteredItemCategory.filter(item => {
            return item.location === locationFilter;
        })
    }

    //filter by date
    // if (DateFilter != ''){
    //     var filteredItemDate = filteredItemLocation.filter(item => {
    //         return item.date >= DateFilter;
    //     })
    // }

    var results = filteredItemLocation;

    console.log(results);
    console.log(allItems);

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
