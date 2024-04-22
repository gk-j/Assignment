const fs = require("fs")
function fileCleaner(){
    fs.readFile("file.txt","utf-8",(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
           
            let newData = data.split(/\s+/).join(' ')
            
            fs.writeFile("file.txt",newData,(err)=>{
                if(err){
                    console.log(err)
                }
                else{
                    console.log(fs.readFileSync("file.txt","utf-8"))
                }
            })
        }
    })
}

// fileCleaner()

function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format time in HH:MM:SS
    const formattedTime24 = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;

    // Format time in HH:MM:SS AM/PM
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours12 = hours % 12 || 12;
    const formattedTime12 = `${padZero(formattedHours12)}:${padZero(minutes)}:${padZero(seconds)} ${ampm}`;

    return { formattedTime24, formattedTime12 };
}

function padZero(num) {
    return num < 10 ? '0' + num : num;
}

// Update time every second
setInterval(() => {
    const { formattedTime24, formattedTime12 } = getCurrentTime();
    console.log("Current Time (24-hour format):", formattedTime24);
    console.log("Current Time (12-hour format):", formattedTime12);
}, 1000);
