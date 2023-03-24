// // Khai báo mảng rỗng
// let arr1 = [];

// // Khai báo mảng với các giá trị ban đầu
// let arr2 = ["Ba", "Tuấn", "Mạnh", "Trung"];

// let arr3 = new Array();

// // Duyệt mảng
// // i đại diện cho chỉ mục của mảng
// for (let i = 0; i < arr2.length; i++) {
//   console.log(arr2[i]);
// }

// for (let i = arr2.length - 1; i >= 0; i--) {
//   console.log(arr2[i]);
// }

// // Khác với for in duyệt qua key
// // for of duyệt qua giá trị
// for (let value of arr2) {
//   console.log(value);
// }

// // Thêm vào cuối mảng
// arr2[arr2.length] = "Hiệu";
// arr2[arr2.length] = "Huy";
// console.log(arr2);

// arr2.push("Sơn");
// console.log(arr2);

// // Xóa phần tử
// // delete arr2[0];

// // Tham số đầu tiên là vị trí muốn Xóa
// // Số lượng phần tử muốn xóa
// arr2.splice(0, 1);
// console.log(arr2);

// // Chèn phàn tử vào giữa mảng
// // Tham số đầu tiên là vị trí muốn xóa/chèn
// // Tham số thứ 2 vẫn là số lượng phần tử muốn xóa/thay thế
// // Tham số thứ 3 là giá trị muốn chèn
// arr2.splice(1, 0, "Ba");
// console.log(arr2);

// // Thay thế giá trị
// arr2[0] = "Đạt";
// console.log(arr2);

// arr2.splice(1, 2, "Béo", "Bon");
// console.log(arr2);

// Tôi muốn in ra các giá trị bình phương của 1 mảng
// [1, 2, 3, 4]
// 1, 4, 9, 16

const arr1 = [1, 2, 3, 4];

// function square(n) {
//   // Tính bình phương giá trị
//   const result = n * n;

//   // In ra
//   console.log(result);
// }

// // Lặp qua từng giá trị của mảng
// for (let value of arr1) {
//   // Với mỗi giá trị, thì gọi hàm square 1 lần
//   square(value);
// }

// Lặp qua từng giá trị của mảng,
// với mỗi 1 giá trị thì gọi hàm square 1 lần
arr1.forEach(function (n) {
  console.log(n * 2);
}); // callback

const arr2 = [1, 1, 3, 4, 5];
// Tìm ra phần tử đầu tiên là số chẵn

// function isEven(n) {
//   return n % 2 == 0;
// }

// Khai báo biến chứa kết quả
// let result;

// Duyệt qua từng phần tử
// for (let n of arr2) {
// Với mỗi phần tử, kiểm tra xem có phải số chẵn hay không
//   if (isEven(n)) {
//     // Nếu là số chẵn
//     // Thì gán result = n
//     result = n;
//     // Và ngắt vòng lặp
//     break;
//   }
// }

// console.log(result);

// Duyệt qua các phần tử trong mảng và gọi hàm isEven 1 lần
// Nếu isEven trả về true thì dừng, và trả về kết quả
const result2 = arr2.find(function (n) {
  return n % 2 == 0;
});
console.log(result2);

const arr3 = [1, 2, 3, 4, 5];

// Lấy ra tất cả phần tử là số chẵn trong mảng

// // Tạo mảng kết quả
// let result3 = [];

// // Duyệt qua các phần tử trong mảng
// for (let n of arr3) {
//   // Với mỗi phần tử
//   // Kiểm tra xem có phải số chẵn hay không
//   if (isEven(n)) {
//     // Nếu là số chẵn thì push vào mảng kết quả
//     result3.push(n);
//   }
// }

// console.log(result3);

// Duyệt qua các phần tử trong mảng
// Với mỗi phần tử, gọi hàm isEven 1 lần xem là true hay false
// Nếu là true thì thêm vào mảng kết quả
const result33 = arr3.filter(function (n) {
  return n % 2 == 0;
});
console.log(result33);

const arr4 = [1, 2, 3, 4, 5];

// Tôi muốn biến đổi tất cả số trong mảng thành x2 lần giá trị lên
// [2, 4, 6, 8, 10]

// function double(n) {
//   return n * 2;
// }

// Tạo mảng chứa kết quả
// let result4 = [];
// // Duyệt qua từng phần tử
// for (let n of arr4) {
//   // Với mỗi phần tử thì x2 lên
//   let temp = double(n);

//   // Thêm vào mảng kết quả
//   result4.push(temp);
// }

// console.log(result4);

// Duyệt qua các phần tử
// Với mỗi phần tử thì gọi hàm double 1 lần và nhận về kết quả
// Thêm kết quả vào mảng kết quả
const result44 = arr4.map(function (n) {
  return n * 2;
});
console.log(result44);

const arr5 = [1, 2, 3, 4, 5];

// function multi(ket_qua_truoc_do, so_hien_tai) {
//   return ket_qua_truoc_do * so_hien_tai;
// }

// Tôi muốn tính tích các giá trị trong mảng
// Tạo biến kết quả
// let result5 = 1;

// // Duyệt qua mảng
// for (let n of arr5) {
//   // Với mỗi phần tử, nhân gộp vào
//   result5 = multi(result5, n);
// }

// console.log(result5);

// Duyệt qua từng phần tử, gọi hàm multi 1 lần
// Sau đó thì giữ kết quả trả vê từ multi cho lần gọi tiếp theo
// Tham số thứ 2 thì là giá trị ban đầu
const result55 = arr5.reduce(function (total, n) {
  return total * n;
}, 1);
console.log(result55);

// Phải sắp xếp các phần tử này theo chiều tăng dần

// Bubble Sort
// Insertion Sort
// Selection Sort
// Quick Sort

// Với các giá trị là chuỗi => gọi sort
const strArr = ["Ba", "Tuấn", "Anh", "Vũ", "Mai"];
strArr.sort();
console.log(strArr);

// Với số
// Mặc định nó chuyển về kiểu chuỗi và so sánh
const arr6 = [2, 11, 22, 34, 5, 4, 1, 3];
arr6.sort();
console.log(arr6);

const arrayOfObject = [
  { name: "Ba", age: 30 },
  { name: "Tuấn", age: 25 },
  { name: "Anh", age: 28 },
];
arrayOfObject.sort();
console.log(arrayOfObject);

// cần truyền một hàm so sánh - compare
// So sánh 2 giá trị bất kỳ và cho biết giá trị nào là lớn hơn
// sắp xếp theo tên tăng dần
// Nguyễn Văn B, Bùi Văn A

// Sắp xếp các object theo thuộc tính
// Kết quả trả về là số dương nếu a lớn hơn b (1)
// Số âm nếu a nhỏ hơn b (-1)
function compareNumber(a, b) {
  return a - b;
}

arr6.sort(function (a, b) {
  return a - b;
});
console.log(arr6);

// arrayOfObject.sort(function (a, b) {
//   return a.age - b.age;
// });

console.log(arrayOfObject);

arrayOfObject.sort((a, b) => a.age - b.age);
console.log(arrayOfObject);
