var table=document.createElement('table');
table.setAttribute('class','table');

var thead=document.createElement('thead');
thead.setAttribute('class','thead-dark');

var tr=document.createElement('tr');
//var th=document.createElement('th');
var th1=createtrth('th','firstname');
var th2=createtrth('th','lastname');
var th3=createtrth('th','Handle');

tr.append(th1,th2,th3);
thead.append(tr);

var tbody=document.createElement('tbody');
var tr=document.createElement('tr');
var td1=createtrth('td','john');
var td2=createtrth('td','doe');
var td3=createtrth('td','@mdo');

tr.append(td1,td2,td3);
tbody.append(tr);

var tr=document.createElement('tr');

var td4=createtrth('td','mark');
var td5=createtrth('td','otto');
var td6=createtrth('td','@fat');

tr.append(td4,td5,td6);
tbody.append(tr);

table.append(thead,tbody);
document.body.append(table);

function createtrth(elementname,value=" "){
    var ele=document.createElement(elementname);
    ele.innerHTML=value;
    return ele;
}