/**
 * const let などの変数宣言
 */

// let val2 = "let変数";
// console.log(val2);

// val2 = "上書き可能";
// console.log(val2);

// const val3 = {
//   name: "kaniba",
//   age: 28,
// };
// console.log(val3);
// val3.name = "onion";

// console.log(val3);

/**
 * テンプレート文字列
 */

// const name = "IQ5000";
// const age = 28;

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いると・・・
// const message2 = `私の名前は${name} です。年齢は${age}です。`;
// console.log(message2);

// アロー関数
// const func2 = (str) => str;
// console.log(func2("func2 to moushimasu"));

// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(1, 2));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "IQ5000",
//   age: 28,
// };
// const message1 = `私の名前は${myProfile.name} です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;

// const message2 = `私の名前は${name} です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ["IQ5000", 28];

// const message3 = `名前は${myProfile[0]}です、年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [namae, age] = myProfile;
// const message4 = `名前は${namae}です.年齢は${age}です。`;
// console.log(message4);

/**
 * スプレッド構文
 */
//配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(...arr1);

// まとめるとき
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(arr3);

// 配列のコピー・結合
// const arr3 = [1, 2, 3, 4, 5];
// const arr5 = [10, 20];
// const arr4 = [...arr3];

// const arr6 = [...arr4, ...arr5];
// console.log(arr6);

/**
 * map や filter
 */
// const nameArr = ["田中", "山田", "IQ5000"];

// const newNameArr = nameArr.map((name) => {
//   return name === "IQ5000" ? name : name + "さん";
// });

// console.log(newNameArr);
