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

const searchAllItems = () => {

    var itemsref = firebase.database().ref("items");
    itemsref.on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot){
            var childData = childSnapshot.val();
            allItems.push(childData);
        });
    });
}


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

    if (statusFilter != 'Any'){
        var filterItemsStatus = allItems.filter(item => {
            return item.status === statusFilter;
        })
    } else {
        var filterItemsStatus = allItems;
    }

    if (colorFilter != 'Any'){
        var filteredItemColor = filterItemsStatus.filter(item => {
            return item.color === colorFilter;
        })
    } else {
        var filteredItemColor = filterItemsStatus;
    }

    if (locationFilter != 'Any'){
        var filteredItemLocation = filteredItemColor.filter(item => {
            return item.location === locationFilter;
        })
    } else {
        var filteredItemLocation = filteredItemColor;
    }

    if (categoryFilter != 'Any'){
        var filteredItemCategory = filteredItemLocation.filter(item => {
            return item.category === categoryFilter;
        })
    } else {
        var filteredItemCategory = filteredItemLocation;
    }

    if (DateFilter != ''){
        var filteredItemDate = filteredItemCategory.filter(item => {
            return item.date >= DateFilter;
        })
    } else {
        var filteredItemDate = filteredItemCategory;
    }


    results = filteredItemDate;

    if(results === undefined || results.length==0){
      document.getElementById("searchResults").innerHTML='No items matched your search.';
      return;
    }
    document.getElementById("searchResults").innerHTML='<table class="table" id="searchTable"><thead><tr><th scope="col">Item Name</th><th scope="col">Location Found</th><th scope="col">Date Lost</th></tr></thead><tbody></tbody>';
    var stable = document.getElementById("searchTable");
    var counter=0;
    for(var elem in results){
      stable.innerHTML+=`<tr data-toggle="modal" data-id="${counter}" data-toggle="modal" data-target="#myModal"><td>${results[elem].title}</td><td>${results[elem].location}</td><td>${results[elem].date}</td></tr>`;
      counter++
    }

})

function modalPop(){
  $('#myModal').on('show.bs.modal', function (e) {
    var index = $(e.relatedTarget).attr('data-id');
    console.log(index);
});
}
