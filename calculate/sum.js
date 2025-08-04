
export var x = 5;
export const calculateSum = (a,b)=>{
   const sum = a+b;
    console.log(sum);
}

// module.exports = {
//     x: x,
// calculateSum: calculateSum,
// };

// ** module.exports is an empty object, we should attach property to it like module.exports.x=x;