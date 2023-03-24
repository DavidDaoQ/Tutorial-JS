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

// 1. Viết hàm trả về chuỗi với thứ tự các từ trong câu bị đảo ngược
function reverseWords(str) {
  // Code
  // Tách chuỗi thành mảng các từ (phân tách bằng dấu cách)
  str = str.split(" ");

  // Đảo ngược các từ
  str.reverse();

  // Ghép thành một chuỗi mới
  str = str.join(" ");

  return str; // Kết quả
}

console.log(reverseWords("hello  world"));

// 2. Viết hàm trả về chuỗi mới dạng capitalize
// Chữ cái đầu tiên của mỗi từ viết hoa, còn lại là chữ thường
function capitalizeWords(str) {
  // Code
  // Chuyển về chữ thường
  str = str.toLowerCase();

  // Tách thành mảng các từ
  str = str.split(" ");

  // Lặp qua mảng
  for (let i = 0; i < str.length; i++) {
    // Lấy ký tự đầu tiên chuyển thành viết hoa và ghép với các ký tự còn lại
    const word = str[i];

    str[i] = word[0].toUpperCase() + word.slice(1);
  }
  // Ghép thành một chuỗi mới
  str = str.join(" ");

  return str; // Kết quả
}

console.log(capitalizeWords("hello woRLD"));

// 3. Viết hàm kiểm tra xem một chuỗi có phải chuỗi đối xứng (Palindrome) hay không
// Không tính các ký tự đặc biệt như dấu cách, ;!*-...
function isPalindromeString(str) {
  // Code

  // Tạo 1 biến mới dạng chuỗi
  let onlyAlphabeStr = "";

  // Lặp qua từng ký tự trong chuỗi
  for (let char of str) {
    // Nếu là ký tự alphabe thì ghép vào biến, nếu là ký tự đặc biệt thì bỏ qua
    if (("a" <= char && char <= "z") || ("A" <= char && char <= "Z")) {
      onlyAlphabeStr += char;
    }
  }

  // Tạo chuỗi đảo ngược
  let reversed = onlyAlphabeStr.split("").reverse().join("");

  // So sánh 2 chuỗi
  return onlyAlphabeStr.toLowerCase() === reversed.toLowerCase(); // Kết quả
}

console.log(isPalindromeString("race!@_ caR"));

// 4. Viết hàm tìm ký tự có số lần xuất hiện nhiều nhất trong chuỗi
// Không tính các ký tự đặc biệt như dấu cách, ;!*-...
// Kết quả trả về dạng { char: number }
function findMostCommonCharacter(str) {
  // Code
  // Tạo object để đếm ký tự
  let count = {};

  // Lặp qua từng ký tự trong chuỗi
  for (let char of str) {
    // Nếu ký tự char đã có trong count thì tăng lượt đếm lên 1
    if (char in count) count[char]++;
    // Nếu chưa có thì gán cho giá trị bằng 1
    else count[char] = 1;
  }

  // Khai báo 2 biến, 1 biến là ký tự có số lần xuất hiện nhiều nhất
  // và 1 biến là số lần xuất hiện của ký tự đó
  let commonChar = null;
  let maxOccurs = 0;

  // Duyệt qua từng key trong object count
  for (let key in count) {
    // Lấy số lần xuất hiện ra
    let value = count[key];

    // Nếu ký tự này có số lần xuất hiện lớn hơn
    if (value > maxOccurs) {
      // Thì gán ký tự commonChar là ký tự hiện tại
      commonChar = key;
      // Và số xuất hiện lớn nhất là value
      maxOccurs = value;
    }
  }

  return {
    [commonChar]: maxOccurs,
  }; // Kết quả
}

console.log(findMostCommonCharacter("hello world"));

// KHÔNG SỬA PHẦN NÀY
// KHÔNG SỬA PHẦN NÀY
// KHÔNG SỬA PHẦN NÀY
module.exports = {
  reverseWords,
  capitalizeWords,
  isPalindromeString,
  findMostCommonCharacter,
};
