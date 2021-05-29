const express= require("express");
const app= express();
const path=require("path");
const api=require("novelcovid");
//const track= new api();
api.settings(
    {
    baseUrl:'https://disease.sh'
    }
)
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));


app.get("/",async(req,res)=>{
    const global=await api.all();
    const country=await api.countries({country:'india'});
    const state=api.gov('india');
    state.then(r=>{

        res.render("home",{global,country,r});
    })
});

app.get("/stateWise",async(req,res)=>{
    const global=await api.all();
    const country=await api.countries({country:'india'});
    const state=api.gov('india',{sort:'cases'});
    state.then(r=>{
        res.render("stateWise",{global,country,r});
    });
});
app.get("/countryWise",async(req,res)=>{
    const state= await api.gov();
    const countries= await api.countries({sort:'cases'});
    res.render("country",{countries,state});
});

app.get("/countryWise/:country",async(req,res)=>{
    const {country}=req.params;
    const states=await api.countries({country:country});
    const yesterday=await api.yesterday.countries({country:country});
    const twoDaysAgo=await api.twoDaysAgo.countries({country:country});
    res.render("countryDetails",{states,yesterday,twoDaysAgo});
});

/*api.yesterday.gov('india')
.then(r=>{
    console.log(r);
});*/
/*async function func()
{
    const response= await fetch("https://api.covid19india.org/v4/min/data.min.json");
    const resp=await response.json();
    response.then(pp=>{
        console.log(pp);

    })
};
func()*/

const port= process.env.PORT || 4000;
app.listen(port,()=>
{
    console.log("Server Ready on port 4000");
});