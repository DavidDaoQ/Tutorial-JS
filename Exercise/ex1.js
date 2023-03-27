// Tính tổng các phần tử trong mảng số
function sumOfArray(arr) {
  // Code
  let sum = 0; // Khai báo biến
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // Tính tổng các giá trị trong mảng
  }
  return sum; // Kết quả
}
// Gọi hàm sumOfArray()
console.log(sumOfArray([1, 3, 5, 7, 9]));
// Tính trung bình cộng các số trong một mảng
function averageOfArray(arr) {
  // Code
  return sumOfArray(arr) / arr.length; // Kết quả
}
// Goi ham averageOfArray()
console.log(averageOfArray([3, 4, 6, 5, 4]));
// Tìm số lớn nhất trong mảng số
// Giả sử mảng chưa được sắp xếp và mỗi giá trị chỉ xuất hiện 1 lần
function findMax(arr) {
  // Code

  let max = arr[0];
  for (let value of arr) {
    if (value > max) {
      max = value;
    }
  }
  return max; // Kết quả
}
// Goi ham findMax()
console.log(findMax([1, 4, 7, 8]));
console.log(findMax([1, 5, 7, 5, 2]));
// Tìm số nhỏ nhất trong 1  mảng số
// Giả sử mảng chưa được sắp xếp và mỗi giá trị chỉ xuất hiện 1 lần
function findMin(arr) {
  // Code
  let min = arr[0];
  for (let value of arr) {
    if (value < min) {
      min = value;
    }
  }
  return min; // Kết quả
}
// Goi ham findMin()
console.log(findMin([2, 4, 7, 12]));
// Viết hàm kiểm tra xem một mảng số có phải mảng tăng dần hay không
// Mảng tăng dần nghĩa là các phần tử có giá trị tăng dần
function isAscending(arr) {
  // Code
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true; // Kết quả
}
// Goi ham isAccending()
console.log(isAscending([1, 3, 5, 7, 9]));
console.log(isAscending([1, 3, 6, 3, 2]));

// Viết hàm kiểm tra xem một mảng số có phải mảng giảm dần hay không
// Mảng giảm dần nghĩa là các phần tử có giá trị giảm dần
function isDescending(arr) {
  // Code
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) return false;
  }
  return true; // Kết quả
}
// Goi ham isDescending()
console.log(isDescending([1, 4, 7, 4, 2, 1]));

// Viết hàm để loại bỏ các phần tử trùng nhau trong 1 mảng
// Kết quả phản ảnh trực tiếp trong mảng đầu vào
function removeDuplicate(arr) {
  // Code
  let doDai = arr.length;
  for (let i = 0; i < doDai; i++) {
    for (let j = i + 1; j < doDai; j++) {
      if (arr[i] == arr[j]) {
        arr.splice(j, 1);
        doDai -= 1;
        j--;
      }
    }
  }
  return arr; // Kết quả
}
// Gọi hàm removeDiplicate()
console.log(removeDuplicate([1, 4, 6, 7, 4, 3]));
// Viết hàm đảo ngược thứ tự các phần tử trong 1 mảng
// Kết quả phản ảnh trực tiếp trong mảng đầu vào
function reverseArr(arr) {
  // Code

  return arr.reverse(); // Kết quả
}
// Goi ham reverseArr()
console.log(reverseArr([1, 3, 4, 5, 6, 9]));
// Viết hàm để lọc ra các số dương trong 1 mảng số
// Kết quả trả về là một mảng mới
function filterEvenNumber(arr) {
  // Code

  return arr.filter((number) => Math.sign(number) === 1); // Kết quả
}
// Goi ham filterEvenNumber()
console.log(filterEvenNumber([1, -3, 4, 6, -5, -9]));

// Viết hàm kiểm tra xem một mảng có chứa bất kỳ số nào là số nguyên tố hay không
function primeNum(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

function hasPrime(arr) {
  // Code
  for (let i = 0; i < arr.length; i++) {
    if (primeNum(arr[i])) return true;
  }
  return false; // Kết quả
}
// Gọi hàm hasPrime()
console.log(hasPrime([1, 3, 5, 6, 7, 4, 9, 6]));
console.log(hasPrime([1, 4, 6, 8, 9]));

// Viết hàm để bình phương tất cả giá trị trong mảng
// Kết quả trả về là một mảng mới
function squareAllElement(arr) {
  // Code

  return arr.map((num) => num ** 2); // Kết quả trả về
}
// Gọi hàm squareAllElement()
console.log(squareAllElement([1, 3, 5, 6])); // Kết quả : [ 1, 9, 25, 36 ]
console.log(squareAllElement([2, 4, 6, 3])); // Kết quả :
