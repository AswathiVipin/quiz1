var container=document.createElement('div');
var row=document.createElement('div');
var column=document.createElement('div');
container.innerHTML="This contain class";
container.setAttribute('class','container');
row.setAttribute('class','row');
column.setAttribute('class','column');

/*div3.append(div2);
div2.append(div1);
div1.append(body);*/

row.append(column);
container.append(row);
document.body.append(container);