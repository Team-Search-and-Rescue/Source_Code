const searchButton = document.getElementById('searchBttn');

const database = firebase.database();
var ref = database.ref('items');

searchButton.addEventListener('click', (e) =>{
    e.preventDefault();
    searchAllItems();
})

const searchAllItems = () => {
    
    console.log('testing retrival!');
    var itemsref = firebase.database().ref("items");
    itemsref.on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot){
            var childData = childSnapshot.val();
            console.log(childData);
        });
    });
}

const filterByOneCategory = () => {

    console.log('testing search by one category!');
}