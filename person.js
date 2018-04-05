var xmlhttp = new XMLHttpRequest();
var domain = "my.api.mockaroo.com";
var entity = "users.json";
var apiKey = "d1ff9b40";
var url = "https://"+domain+"/"+entity+"?key="+apiKey;

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        fillPerson(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function fillPerson(arr) {
    var out = "<table><tr><th>Id</th><th>First name</th><th>Last name</th><th>Email</th><th>Gender</th><th>Ip adress</th></tr>";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<tr><td>'+arr[i].id+'</td><td>'+arr[i].first_name+'</td><td>'+arr[i].last_name+'</td><td>'+arr[i].email+'</td><td>'+arr[i].gender+'</td><td>'+arr[i].ip_address+'</td></tr>';
    }
    document.getElementById("persons").innerHTML = out;
}