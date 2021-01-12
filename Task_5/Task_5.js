var array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

document.write(array + '<br><br>')

var arr1 = [...new Set(array)]

document.write(arr1)