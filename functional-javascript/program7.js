function reduce(arr, fn, initial) {
    // SOLUTION GOES HERE


    return (function reducer(index, value) {
        if (index > arr.length - 1) return value // end condition
        return reducer(index + 1, fn(value, arr[index], index, arr)) 
        })(0,initial);

  }
  
  module.exports = reduce
