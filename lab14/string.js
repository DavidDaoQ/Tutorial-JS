// Ví dụ
// Viết hàm sum tính và trả về kết quả
// tổng của 2 tham số a, b truyền vào
function sum(a, b) {
  const result = a + b;

  return result;
}

// Kiểm tra
console.log(`1 + 2 = ${sum(1, 2)}`);

// Bài tập

// 1. Viết hàm trả về số ký tự là nguyên âm trong chuỗi
// Nguyên âm là các ký tự "aeiou"

/**
 * Đếm số ký tự là ký tự nguyên âm trong tiếng Anh trong một chuỗi
 *
 * @param {String} str - Chuỗi cần kiểm tra
 *
 * @return {number} Số ký tự nguyên âm
 */
function countVowels(str) {
  // Tạo 1 mảng chứa các ký tự nguyên âm
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  // Khai báo biến đếm để đếm số ký tự
  let count = 0;

  // Kiểm tra từng ký tự
  for (let i = 0; i < str.length; i++) {
    // Nếu nó là một trong các ký tự 'aeiou'
    if (vowels.includes(str[i])) {
      // Thì tăng biến đếm lên 1
      count += 1;
    }
  }

  // Kiểm tra hết thì trả về kết quả
  return count; // Kết quả
}
console.log(countVowels("striIng"));

// 2. Viết hàm trả về chuỗi mới đảo ngược thứ tự chữ cái của chuỗi truyền vào
function reverseString(str) {
  // Code

  // Cách 1 - Dùng mảng
  // Tách thành mảng các chữ cái
  // str = str.split("");
  // Đảo ngược mảng
  // str.reverse();
  // Ghép thành chuỗi
  // str = str.join("");

  // Cách 2 - Dùng vòng lặp
  // Tạo 1 biến ghép các ký tự
  let reversed = "";
  // Duyệt từ cuối chuỗi về đầu chuỗi
  for (let i = str.length - 1; i >= 0; i--) {
    // Lấy từng ký tự ghép với biến kết quả
    reversed += str[i];
  }

  return reversed; // Kết quả
}

console.log(reverseString("Hello World"));

// 3. Viết hàm loại bỏ các ký tự nguyên âm trong chuỗi
function removeVowels(str) {
  // Code
  // Khai báo biến chứa các ký tự nguyên âm để đối chiếu
  // const vowels = "aeiouAEIOU";

  // // Kiểm tra từng ký tự trong chuỗi
  // for (let i = 0; i < str.length; i++) {
  //   // Nếu là nguyên âm
  //   if (vowels.includes(str[i])) {
  //     // Thì thay thế bằng 1 ký tự rỗng ""
  //     str = str.replace(str[i], "");
  //     i--;
  //   }
  // }

  // Regex
  // Regular Expression (Mẫu ký tự)
  str = str.replaceAll(/[aeiou]/gi, "");

  return str; // Kết quảu
}

console.log(removeVowels("HeeOOllo"));

// 4. Viết hàm trả về từ có độ dài lớn nhất trong chuỗi
function findLongestWord(str) {
  // Code

  return; // Kết quả
}

// KHÔNG SỬA PHẦN NÀY
// KHÔNG SỬA PHẦN NÀY
// KHÔNG SỬA PHẦN NÀY
module.exports = {
  countVowels,
  reverseString,
  removeVowels,
  findLongestWord,
};
