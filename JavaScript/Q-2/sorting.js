// function sortArrayDescending(arr) {
//     // Custom sorting function for descending order
//     function compareDescending(a, b) {
//         return b - a;
//     }

//     // Use the custom sorting function to sort the array
//     arr.sort(compareDescending);

//     return arr;
// }



function sortArrayDescending(arr) {
   
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
               
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}


// Example usage
var originalArray = [5, 2, 8, 1, 9, 4];
console.log("Original Array: " + originalArray);
var sortedArray = sortArrayDescending(originalArray);


console.log("Sorted Array (Descending): " + sortedArray);
