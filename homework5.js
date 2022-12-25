//PART 1 Given an array. Write a recursive function that removes the first element and returns the given array. (without using arr.unshift(),assign second element to first, third element to second...)

let arr = [1,'H',2,3,4]
let firstLength = arr.length
function firstEl (arr){
   if(arr.length >= firstLength){
       arr.splice(0,1)
   }else if(arr.length == 0){
       return arr;
   }else{
   firstEl(arr)
}
console.log(arr)
}

firstEl(arr)

//PART 2 Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function that concats arrays).

let arr = [14, [1, [[[3, []]], 1], 0]]
let arr1 = []

function merge(arr){
    for(let i=0; i<arr.length; i++){
        if(typeof(arr[i]) != 'object'){
            arr1.push(arr[i])
        }else if(typeof(arr[i]) === 'object'){
            arr1.concat(arr[i])
            merge(arr[i])
        }
    }
    return arr1
}


console.log(merge(arr))

//PART3 Given a number. Write a function that calculates its sum of the digits and if that sum has more than 1 digit find the sum of digits of that number. Repeat that process if needed and return the result.


function sumDigits(number){
    let result = 0;
    if(number/10 >=1){
        let newNum = number.toString().split('')
        for(let i=0; i<newNum.length; i++){
            result+= newNum[i]/1
            verjnakan = result
        }
        sumDigits(result)
    }
    return verjnakan
}
console.log(sumDigits(343))

//PART 4 Output the books sorted by the percent in descending order which readStatus is true and add ‘%’ char in the end for percent value.

let arr = [
    { book: "Book: Catcher in the Rye", readStatus: true, percent: 40},
    { book: "Book: Animal Farm", readStatus: true, percent: 20},
    { book: "Book: Solaris", readStatus: false, percent: 90 },
    { book: "Book: The Fall", readStatus: true, percent: 50 },
    { book: "Book: White Nights", readStatus: false, percent: 60 } ,
    { book: "Book: After Dark", readStatus: true, percent: 70 }
    ];

    let newArr = []


    arr.filter(function(el){
        if(el.readStatus){
            newArr.push(el)
        }
    })
    newArr.sort(function(a,b){
        if(a.height > b.height){
            return 1
        }else{
            return -1
        }
    })
    newArr.map(function(el){
        el.percent = el.percent + '%'
    })
    console.log(newArr)

