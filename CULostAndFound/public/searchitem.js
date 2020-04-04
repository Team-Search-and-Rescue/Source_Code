const searchButton = document.getElementById('searchBttn');

var database = firebase.database();

var ref = database.ref('items');
var data = database.ref('scores');

