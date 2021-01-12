
document.write("<b>Counting : </b>")

for (var Counting = 1; Counting <= 15; Counting++) {

    document.write(`,${Counting}`)

}

document.write("<br> <b>Reverse :</b> ")

for (var Reverse = 10; Reverse >= 1; Reverse--) {
    document.write(Reverse + ',')
}

document.write("<br> <b>Even :</b> ")

for (var Even = 0; Even <= 20; Even += 2) {
    document.write(Even + ',')
}
document.write("<br><b> Odd : </b>")

for (var Odd = 1; Odd <= 19; Odd += 2) {
    document.write(Odd + ',')
}
document.write("<br> <b> Series : </b>")

for (var Series = 2; Series <= 20; Series += 2) {
    document.write(Series + "k" + ',')
}
