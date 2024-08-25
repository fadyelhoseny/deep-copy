//deep copy
let x = ['fady','hoseny','mohamed'];
let y = x.copyWithin();
y.push('mostafa');
console.log(y);
console .log(x);
//shallow
let g = ['fady','hoseny','mohamed'];
let h = [...g];
h.push ('mostafa');
console .log(g);
console .log(h);
