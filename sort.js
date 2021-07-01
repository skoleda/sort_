let mas = [31, 10, 'chicken', 9, 'fish', 10];
let mas0 = mas.slice('');

//фильтрация строк//
let filt = mas.filter(a => typeof a=='string');
//фильтрация десяток//
let filt2 = mas.filter(a=> a==10);


console.log(filt);
console.log(filt2);






