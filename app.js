let array = [34, 54,1,23,678, 72, 9, 10, 5, 89, 900]
console.log(Math.min.apply(null, array))

let arr = [34, 54,1,23,678, 72, 9, 10, 5, 89, 900]
console.log(Math.max.apply(null, arr))



let num = prompt('Напишите число')
for (let i = 1; i <= 10; i++ ){
    console.log(`${i} * ${num} = ${i * num}`)
}
if ((num)) {
    console.log(num);
}else {
    console.log('error')
}



str = 'Бабочка'
function words(str)
{
    let word = str.toLowerCase()  //.match(/[ауоыиэяюёе]/g);
    if (word == null) {return 0}
    return word.length;
}
console.log(words(str))


