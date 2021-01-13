let arr = [{graph: 'FR_Outer', data: [1,2,3,4]}, {graph: 'RR_Outer', data: [1,2,3,4,5]}];
let arr2 = [];

function someFunction(item) {
  return {graph: item.graph};
}


console.log(arr2.map(item => item.id));



//console.log(arr.map(item => ({hello: item["graph"]})));
//console.log(arr2.some(item => item.graph == 'RRL_Outer'));
// remove console.log(arr.filter(item => item.graph != 'RR_Outer'));
