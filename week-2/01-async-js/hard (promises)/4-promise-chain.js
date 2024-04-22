/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    let a=new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },1000*t);
    });
    return a;
}

function wait2(t) {
    let a=new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },1000*t);
    });
    return a;
}

function wait3(t) {
    let a=new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },1000*t);
    });
    return a;
}

async function calculateTime(t1, t2, t3) {
    const start = new Date().getTime();
    console.log("hi")
    await wait1(t1);
    await wait2(t2);
    await wait3(t3);
    const after = new Date().getTime();
    console.log(after-start)
    return after-start;
}

calculateTime(1,1,1);
module.exports = calculateTime;
