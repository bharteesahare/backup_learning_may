// async code
// setTimeout(() => {
//     console.log('Timmer is done')
// }, 2000);


// sync code
console.log('Hello'); // this print 1st 
console.log('hi');  // this syanc code run 1st after that async code run

// promise it the constructure function
// this also take the two argument (resolve and reject) you can defined you name 
// 1st argument complete the promise successfully.
// 2nd one reject it, means throwing the error.
// Async code using promise.
const fetchData = callback => {
    const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Done');
    }, 1500)
    });
    return promise;
};

setTimeout(() => {
    console.log('Timer is done');
    fetchData()
    .then(text => {
        console.log(text);
        return fetchData();
    })
    .then(text2 => {
        console.log(text2);
    });
}, 2000)