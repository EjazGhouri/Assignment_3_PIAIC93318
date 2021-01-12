
var A = [24, 53, 78, 91, 12];
var largest = A[0];

for (var i = 0; i <= A.length; i++) {
    if (largest < A[i] ) {
        largest = A[i];
    }
}

document.write("Array item: " + A + "<br><br>")

document.write("The largest number is : " + largest)
