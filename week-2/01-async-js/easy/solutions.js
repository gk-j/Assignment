const fs = require("fs")


function counter1(){
    
   const id = setInterval(function(){
        console.log(new Date().toString())
    },1000)
   
}

function counter2(){
    console.log(new Date().toString())
    setTimeout(counter2,1000)
}

function read(){
    fs.readFile("file.txt","utf-8",(err,data)=>{
        console.log(data)
    })
}
let data = "write "
function write(){
    fs.writeFile("file.txt",data,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(fs.readFileSync("file.txt","utf-8"))
        }
    })
}

write()

