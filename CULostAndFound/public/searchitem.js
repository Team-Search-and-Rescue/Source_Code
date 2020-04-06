const searchButton = document.getElementById('searchBttn');

var database = firebase.database();

var ref = database.ref('items');

searchButton.addEventListener('click', (e) =>{
    e.preventDefault();
    //console.log("Button Works!");
    //alert("button works!")
    console.log('testing retrival!');
    var itemsref = firebase.database().ref("items");
    itemsref.on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot){
            var childData = childSnapshot.val();
            console.log(childData);
        });
    });
})