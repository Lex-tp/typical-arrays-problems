
exports.min = function min(array) {
  if (array != undefined) {
    if (array.length > 0) {
      let minElement = array[0];

      for (let i = 0; i < array.length; i++) {
        if (minElement > array[i]) {
          minElement = array[i];
        }
      }
      return minElement;
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}

exports.max = function max(array) {
  if (array != undefined) {
    if (array.length > 0) {
      let maxElement = array[0];

      for (let i = 0; i < array.length; i++) {
        if (maxElement < array[i]) {
          maxElement = array[i];
        }
      }
      return maxElement;
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}

exports.avg = function avg(array) {
  if (array != undefined) {
    if (array.length > 0) {
      let avgElements=0;

      for (let i = 0; i < array.length; i++) {
        avgElements += array[i];
      }
      return avgElements / array.length;
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}