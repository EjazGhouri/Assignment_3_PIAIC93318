var A = ['Cake', 'Apple Pie', 'Cookies', 'Chips', 'Patties']

var UserInput = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?")


for (var i = 0; i <= A.length; i++) {

    if (UserInput === A[i]) {

        document.write(`<b> ${UserInput} </b> is available at index <b> ${i} </b> in our Bakery `)

        break;
    }

}

if (UserInput !== A[i]) {

    document.write(`We are Sorry <b> ${UserInput} </b> is not available in our Bakery `)
}