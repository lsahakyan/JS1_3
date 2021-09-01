// Ex 5

var treeNodes = [
	{parent: null, id: 0},
	{parent: 0, id: 1},
	{parent: 0, id: 2},
	{parent: 1, id: 3},
	{parent: 1, id: 4},
	{parent: 2, id: 5},
	{parent: 4, id: 6},
]



function recNodes (parentId) {
	var obj = {}

	for (let i= 0; i<treeNodes.length; i++){
        if (parentId === treeNodes[i].parent){
        	
       
        	let subTree = recNodes(treeNodes[i].id)
        	obj[treeNodes[i].id] = subTree
        }
           
	}
    return obj
}
recNodes(null)


// Ex 4


let object = {a : 1, b : 1, c: 2, d: 3, e: 3, f: 1}
let invObject = {}

for (let property in object) {
	if(invObject[object[property]] === undefined) {
		invObject[object[property]] = property
	} else {
    
    if (!Array.isArray(invObject[object[property]])) {
      let temp = invObject[object[property]]
      invObject[object[property]] = []
      invObject[object[property]].push(temp)
		  invObject[object[property]].push(property)
    }else {
      invObject[object[property]].push(property)
    }
  }
}

console.log(invObject)







// Ex 3

function sumOfDigits(number) {
    let sum = 0
    while(!number) {
        let lastDigit = number % 10
        number = (number - number % 10) / 10
        sum = sum + lastDigit
    }
    if(sum < 10) {
        return sum
    }
    return sumOfDigits(sum)
        
        
}




// Ex 2

function flattening(arr) {
  const result = []

  arr.forEach((i) => {
    if (Array.isArray(i)) {
      result.push(...flattening(i))
    } else {
      result.push(i)
    }
  })

  return result
}



// Ex 1


function removeFirstElement(arr, i = 0){
    if(!arr.length) {
        return arr;
    }
    if(i === arr.length - 1) {
        arr.length = arr.length - 1;
        return arr;
    }
    arr[i] = arr[i + 1];   
    return removeFirstElement(arr, i + 1);
}



