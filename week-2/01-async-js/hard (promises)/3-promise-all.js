/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
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
    const start=new Date().getTime();
    await Promise.all([wait1(t1),wait2(t2),wait3(t3)]);
    const after=new Date().getTime();
    const diff=after-start;
    console.log(diff)
    return diff;

}

calculateTime(1,1,1)
module.exports = calculateTime;
