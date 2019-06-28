function substrCount(input, needle, offset, length) {
let str = input.slice(offset);
let str2 = str.substr(0, length);
const pattern = new RegExp(needle, 'ig')
let result =  str2.match(pattern);
return result.length;
}

let result = substrCount('Good Golly Miss Molly', 'll', 7, 10);
console.log(result);

