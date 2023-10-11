/**
 * const let などの変数宣言
 */

let val2 = "let変数";
console.log(val2);

val2 = "上書き可能";
console.log(val2);

const val3 = {
  name: "kaniba",
  age: 28,
};
console.log(val3);
val3.name = "onion";

console.log(val3);
