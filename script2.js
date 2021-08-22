var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data);
    /*for( var i=0;i<10;i++)
    {
        console.log(data[i].name +" "+data[i].capital);
    }*/
    var result=data.filter((element)=>element.region==='Asia');
    console.log(result);

    var result=data.filter((element)=>element.population<200000);
    console.log(result);

   var result2=data.filter((element)=>{
        for(let i in element.currencies){
         if (element.currencies[i].code ==='USD'){
             return true;
         }   
        }
    });
    console.log(result2);

    var sum=data.reduce((acc,ele)=>{ele.population.forEach(+ele.population);
    console.log(sum);
}

/*const colors = data.reduce((total, amount) => {
    amount.c.forEach( color => {
        total.push(color);
    })
    return total;*/