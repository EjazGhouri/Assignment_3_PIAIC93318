var a =[10,20,4,40,60,70]

var b = [1,2,3,4,5,6,7,8,9,10]

var c = b.concat(a)
var d = c.filter((item, pos) => c.indexOf(item) === pos)

document.write(d)