// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},   
    //...
]

console.log(superbowlWin(record)) // record.find(record => record.result === 'W').year


// function superbowlWin(record){
//     for (let i = 0; i < record.length; i++) {
//         if (record[i].result === 'W') {
//             return record[i].year
//         }
//     }
// }   

function superbowlWin(record) {
    const yr = record.find(record => record.result === 'W')
    return yr ? yr.year : undefined
}
  