const fs = require("fs");

//config(text파일에서 config설정 js, 기록1)
//알아보기 직관적임, 코드가 너무 김

// let HOST_1;
// let HOST_2;
// let PORT_1;
// let PORT_2;

let array = fs.readFileSync("config.txt", "utf8").trim().split("\n");

// for (i in array) {
//   array[i].trim().split("=");
//   let arr = array[i].trim().split("=");
//   switch (arr[0]) {
//     case "HOST_1":
//       HOST_1 = arr[1];
//       break;
//     case "HOST_2":
//       HOST_2 = arr[1];
//       break;
//     case "PORT_1":
//       PORT_1 = arr[1];
//       break;
//     case "PORT_2":
//       PORT_2 = arr[1];
//       break;
//     default:
//       console.log("No way");
//   }
// }

//config(text파일에서 config설정 js, 기록2)
//장점 변수 미리 선언할필요X, 좀더 간결한 코드
const arr = fs.readFileSync("config.txt", "utf8").trim().split("\n");

const [key1, HOST_1] = arr[0].split("=");
const [key2, HOST_2] = arr[1].split("=");
const [key3, PORT_1] = arr[2].split("=");
const [key4, PORT_2] = arr[3].split("=");

console.log(HOST_1);
console.log(HOST_2);
console.log(PORT_1);
console.log(PORT_2);
