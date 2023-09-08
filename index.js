import  express  from "express";
import bodyParser from "body-parser";

const app=express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

let newItem=[];
app.get("/",(req,res)=>{
    let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; 
    let month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let d = new Date();
    let day = weekday[d.getDay()];
    let date=d.getDate();
    let m=month[d.getMonth()];
    let y=d.getFullYear();

    res.render("./index.ejs",{day,date,m,y,newItem});
});

app.post("/",(req,res)=>{
    newItem.push(req.body.newItem);
    res.redirect("/");
});

app.listen(3000,()=>{
    console.log("listening on port 3000");
});
