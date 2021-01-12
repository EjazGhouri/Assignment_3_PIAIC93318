

var color = [" Red ", " Yellow ", " Green ", " White ", " Black "]

document.write(color + "<br>")

var YourColor = prompt("Enter Your Color to add to the beginning")

color.unshift(YourColor)

document.write(color + "<br>")

var YourColor = prompt("Enter Your Color to add to the end")

color.push(YourColor)

document.write(color + "<br>")

var YourColor = prompt("Enter Your two more Color to add to the beginning")

var YourColor1 = prompt("Enter Your two more Color to add to the beginning")

color.unshift(YourColor, YourColor1)

document.write(color + "<br>")

color.shift()

document.write(color + "<br>")

color.pop()

document.write(color + "<br>")

var YourColor = prompt("Enter Your Color index where you want to add")

var YourColor2 = prompt("Enter Your Color to add")

color.splice(YourColor ,0 , YourColor2)

document.write(color + "<br>")


var YourColor = prompt("Enter Your Color index which you want to delete")

var YourColor2 = prompt("How many Colors you want to delete")

color.splice(YourColor , YourColor2)

document.write(color + "<br>")


