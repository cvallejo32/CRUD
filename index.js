// Create a new XMLHttpRequest object.
var xhr = new XMLHttpRequest();
// Set the request method and URL.
xhr.open('GET', '/read');
// Send the request.
xhr.send();
// Handle the response.
xhr.onload = function() {
  // Get the response data.
  var data = xhr.responseText;
  // Parse the data into an array of objects.
  var items = JSON.parse(data);
  // Create a list of items.
  var list = document.createElement('ul');
  // Add the items to the list.
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    // Create a list item for the item.
    var li = document.createElement('li');
    // Add the item's name to the list item.
    li.innerHTML = item.name;
    // Add the list item to the list.
    list.appendChild(li);
  }
  // Add the list to the document.
  document.body.appendChild(list);
};