/*`<div class="col-md-6"><div class="container">
        <div class="row"></div>*/
var container=document.createElement("div");
container.setAttribute("class", "container");

var row=document.createElement("div");
row.setAttribute("class", "row");
    
container.append(row);
document.body.append(container);

var res=fetch("https://restcountries.com/v2/all")
.then((data)=>data.json()).then((cont)=>{
    for (let i = 0; i < cont.length; i++) {
        var div=document.createElement("div");
        div.innerHTML=`
        <div class="col-md-12">
            <div class="card border-primary mb-3" style="max-width: 25rem;">
                <div class="card-header">Country Name:${cont[i].name}
                </div>
                <div class="card-body text-primary">
                    <h5 class="card-title">Region:${cont[i].region}</h5>
                    <h5 class="card-title">Capital:${cont[i].capital}</h5>
                    <h5 class="card-title">Population:${cont[i].population}</h5>
                    <h5 class="card-title">Latitude:${cont[i].latlng[0]}</h5>
                    <h5 class="card-title">Longitude:${cont[i].latlng[1]}</h5>
                    <div class="card" style="width: 18rem;">
                        <img src=${cont[i].flag} class="card-img-top" alt=${cont[i].name} style="width: 50px height:25px;">
                    </div>
                </div>
            </div>
        </div>`;

row.append(div);
    }
})
.catch((error)=>console.log(error));