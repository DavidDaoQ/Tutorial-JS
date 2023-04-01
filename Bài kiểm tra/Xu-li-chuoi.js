// Bài 1: Chuyển 1 chuỗi gồm nhiều từ thành
// chuỗi mới viết hoa các chữ cái đầu tiên
// của mỗi từ. Ví dụ: ''HELLO world'' => ''Hello World''.
function capitalizeStr(str) {
  // Tách chuỗi thành mảng
  str = str.split(" ");
  // In ra các ký tự
  for (let i = 0; i < str.length; i++) {
    const word = str[i];
    // Viết hoa kí tự đầu và viết thường ký tự sau
    str[i] = word[0].charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
  // Nối chuỗi
  str = str.join(" ");
  return str; // Kết quả trả về
}
// Gọi hàm capitalizeStr()
console.log(capitalizeStr("hello world!")); // Kết quả : Hello World!
console.log(capitalizeStr("i'm a coder!")); // Kết quả : I'm A Coder!

// Bài 2: Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case.
// Ví dụ: ''HELLO world'' => ''hello-world''.
function toSpinalCase(str) {
  return str
    .replace(/[\W_]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .toLowerCase()
    .replace(/ /g, "-");
}
// Gọi hàm toSpinalCase()
console.log(toSpinalCase("Hello world! This is a string.")); // Kết quả : "hello-world-this-is-a-string"

// Bài 3: Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi
// đối xứng hay không (đọc xuôi hay ngược đều như nhau, không
// tính khoảng trắng và không phân biệt hoa thường), kết quả
// trả về true hoặc false.
// Ví dụ ''Race car'' trả về true, ''hello world'' trả về false.
function isPalindrome(str) {
  // Xóa khoảng trắng và chuyển tất cả ký tự sang chữ thường
  str = str.replace(/\s+/g, "").toLowerCase();

  // Lặp qua nửa đầu và nửa cuối của chuỗi, so sánh các cặp ký tự
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      // Nếu có ít nhất một cặp ký tự khác nhau, trả về false
      return false;
    }
  }

  // Nếu tất cả các cặp ký tự đều giống nhau, trả về true
  return true;
}

// Gọi hàm isPalindrome()
console.log(isPalindrome("Race car")); // Kết quả : true
console.log(isPalindrome("A man a plan a canal Panama")); // Kết quả : true
console.log(isPalindrome("Hello world")); // Kết quả : false

// Bài 4: Viết hàm truyền vào 2 chuỗi, kiểm tra xem chuỗi thứ nhất có
// chứa toàn bộ ký tự (tính cả dấu cách) nằm trong chuỗi thứ 2 hay không,
// kết quả trả về true nếu có và false nếu không (không phân biệt hoa thường).
// Ví dụ ''HELLO world'' có chứa ''how'' nhưng không chứa ''hey'' và không chứa ''ww''.
function containsAllChars(str1, str2) {
  // Chuyển đổi cả hai chuỗi về chữ thường để đồng bộ hoá các ký tự
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // Lặp qua từng ký tự trong chuỗi thứ nhất
  for (let i = 0; i < str1.length; i++) {
    // Nếu ký tự hiện tại không có trong chuỗi thứ hai, trả về false
    if (str2.indexOf(str1[i]) === -1) {
      return false;
    }
  }

  // Nếu tất cả các ký tự trong chuỗi thứ nhất đều có trong chuỗi thứ hai, trả về true
  return true;
}

// Gọi hàm containsAllChars()
console.log(containsAllChars("HELLO world", "how")); // Kết quả : false
console.log(containsAllChars("HELLO world", "hey")); // Kết quả : false
console.log(containsAllChars("HELLO world", "ww")); // Kết quả : false
