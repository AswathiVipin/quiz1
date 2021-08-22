var table=document.createElement('table');
table.setAttribute('class','table');

var thead=document.createElement('thead');
thead.setAttribute('class','thead-dark');

var tr=document.createElement('tr');
//var th=document.createElement('th');
var th1=createtrth('th','Id');
var th2=createtrth('th','Name');
var th3=createtrth('th','Email');

tr.append(th1,th2,th3);
thead.append(tr);

var tbody=document.createElement('tbody');
var tr=document.createElement('tr');
var td1=createtrth('td','1');
var td2=createtrth('td','Lura Senger');
var td3=createtrth('td','Xander_Collier@yahoo.com');

tr.append(td1,td2,td3);
tbody.append(tr);

var tr=document.createElement('tr');

var td4=createtrth('td','2');
var td5=createtrth('td','Wilburn Weber');
var td6=createtrth('td','Bennett_Kreiger11@yahoo.com');

tr.append(td4,td5,td6);
tbody.append(tr);

table.append(thead,tbody);
document.body.append(table);

function createtrth(elementname,value=" "){
    var ele=document.createElement(elementname);
    ele.innerHTML=value;
    return ele;
}