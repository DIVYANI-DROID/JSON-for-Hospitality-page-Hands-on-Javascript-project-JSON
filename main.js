// JavaScript Document
//var start = '{"favColor": "Orange", "favSeason": "Fall"}';
//
//var myObject = JSON.parse(start);
//console.log(myObject);
//
//var myString = JSON.stringify(myObject);
//console.log(myString);
//
//var myObject = JSON.parse(myString);
//console.log(myObject);

//var theData1 = '{"first":"Divyani", "last":"Audichya", "city":"Chicago"}';
//var myObj = JSON.parse(theData1);
//console.log(myObj);
//
//document.getElementById('message').innerHTML = myObj.city;

//var theData2 = '{"Jane":"tall", "Jim":"chubby"}';
//var theData2 = '{"Jane":{"age":"29", "degree":"MFA"}, "Jim":{"age":"49", "degree":"MA"}}';
//var theData2 = '{"Jane":{"age":"29", "degree":{"MFA":"VMI", "BA":"UVA"}}, "Jim":{"age":"49", "degree":"MA"}}';
//
//var myObj = JSON.parse(theData2);
//console.log(myObj);
//
////{"":"", "":""}
//
////So how do we access these?
////document.getElementById('message').innerHTML = myObj.Jane.age;
//
////{"MFA":"VMI", "BA":"UVA"}
//document.getElementById('message').innerHTML = myObj.Jane.degree.BA;

var xhr = new XMLHttpRequest();

xhr.open('GET', '/Users/da/Documents/PluralSight-Hands-onJavaScriptProjectJSON/javascript-project-json/03/demos/startJS/css/data.json', true);

xhr.send();

xhr.onreadystatechange = function() {
    console.log(xhr.readyState);
    console.log(xhr.status);
}