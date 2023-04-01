// Viết hàm loại bỏ các giá trị sai trong 1 mảng.
// Các giá trị sai bao gồm: false, null, undefined, NaN, 0, ''''.
function removeFalsy(arr) {
  return arr.filter(Boolean);
}
// Gọi hàm removeFalsy()
console.log(removeFalsy([0, 1, false, 2, "", 3, null, 4, NaN, undefined, 5])); // Kết quả : [1, 2, 3, 4, 5]

// Bài 2: Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất.
// Ví dụ với tham số [''aba'', ''aa'', ''ad'', ''c'', ''vcd''] thì kết quả trả về [''aba'', ''vcd''].
function filterMaxLength(arr) {
  const maxLength = arr.reduce((max, str) => {
    return Math.max(max, str.length);
  }, 0);

  return arr.filter((str) => str.length === maxLength);
}
// Gọi hàm filterMaxLength()
console.log(filterMaxLength(["apple", "banana", "orange", "kiwi", "pear"])); // Kết quả : ['banana', 'orange']

// Bài 3: Viết hàm so sánh mảng, truyền vào 2 mảng bất kỳ (chỉ chứa số nguyên),
// kết quả trả về là 1 mảng chỉ chứa những phần tử không đồng thời nằm trong 2 mảng truyền vào.
// Ví dụ truyền vào   [1, 2, 3] và [1, 3, 4, 5, 5] thì kết quả trả về là mảng [2, 4, 5, 5].
function compareArrays(arr1, arr2) {
  // Lấy ra các phần tử không trùng nhau trong mảng 1 và mảng 2
  const uniqueArr1 = arr1.filter((item) => !arr2.includes(item));
  const uniqueArr2 = arr2.filter((item) => !arr1.includes(item));

  // Gộp 2 mảng trên lại thành một mảng mới
  const result = [...uniqueArr1, ...uniqueArr2];

  return result;
}
//Gọi hàm compareArrays()
console.log(compareArrays([1, 2, 3], [1, 3, 4, 5, 5])); // Kết quả : [ 2, 4, 5, 5 ]

// Bài 4: Cho 2 số nguyên dương m và n.
// Tạo ra 1 mảng 2 chiều m x n là các số nguyên liên tiếp (tính từ 1) theo kiểu ziczac.
// Ví dụ với m = 3 và n = 4 thì kết quả là mảng 2 chiều như sau : [ [1, 2, 3, 4], [8, 7, 6, 5], [9, 10, 11, 12] ].
function createZigZagArray(m, n) {
  let arr = new Array(m);
  for (let i = 0; i < m; i++) {
    arr[i] = new Array(n);
  }

  let count = 1;
  for (let i = 0; i < m; i++) {
    if (i % 2 === 0) {
      // Đi từ trái sang phải nếu hàng chẵn
      for (let j = 0; j < n; j++) {
        arr[i][j] = count++;
      }
    } else {
      // Đi từ phải sang trái nếu hàng lẻ
      for (let j = n - 1; j >= 0; j--) {
        arr[i][j] = count++;
      }
    }
  }

  return arr;
}
// Gọi hàm createZigZagArray()
console.log(createZigZagArray(3, 2)); // Kết quả : [ [ 1, 2 ], [ 4, 3 ], [ 5, 6 ] ]
