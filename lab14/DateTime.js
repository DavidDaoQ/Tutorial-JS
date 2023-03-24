// Ví dụ
// Viết hàm sum tính và trả về kết quả
// tổng của 2 tham số a, b truyền vào
function sum(a, b) {
  const result = a + b;

  return result;
}

// Kiểm tra kết quả
console.log(`1 + 2 = ${sum(1, 2)}`);

// Bài tập

// 1. Viết hàm cộng thêm một số ngày bất kỳ vào một ngày và trả về chuỗi ngày tháng dạng ISO
// dateString là một chuỗi ngày tháng dạng YYYY-MM-DD
// numDays mà số ngày bất kỳ, cộng vào dateString
function addDaysToDate(dateString, numDays) {
  // Code

  // Chuyển dateString thành date
  const date = new Date();

  // Thêm số ngày vào date
  date.setDate(date.getDate() + numDays);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`; // Kết quả
}

console.log(addDaysToDate("2023-03-24", 2));

// 2. Viết hàm trả về số ngày tính từ thời điểm hiện tại đến ngày bất kỳ
// dateString là một chuỗi ngày tháng dạng YYYY-MM-DD
function getDaysUntilDate(dateString) {
  // Code
  // Lấy thời gian hiện tại
  const now = Date.now();

  // Chuyển thành date object
  const date = new Date(dateString);

  // Tính số miliseconds từ thời điểm hiện tại đến dateString
  const diff = date.getTime() - now;

  // Tính ra số ngày còn lại
  const dayDiff = Math.floor(diff / (1000 * 60 * 60 * 24));

  return dayDiff; // Kết quả
}

console.log(getDaysUntilDate("2023-03-26"));

// 3. Viết hàm trả về ngày cuối cùng của tháng theo chuỗi thời gian truyền vào
// dateString là một chuỗi ngày tháng dạng YYYY-MM-DD
// Trả về ngày cuối cùng của tháng đó
function getLastDayInMonth(dateString) {
  // Code
  // Tạo object date
  const date = new Date(dateString);

  // Set tháng +1, và date = 0 để chuyển về ngày cuối tháng trước
  date.setMonth(date.getMonth() + 1, 0);

  return date.getDate(); // Kết quả
}

console.log(getLastDayInMonth("2023-04-24"));

// 4. Viết hàm tính tuổi chính xác của 1 người (năm, tháng, ngày)
// Kết quả trả về dạng { age: year, months: month, days: day}
function calcAge(birthdayString) {
  // Code
  // Code
  let birthday = new Date(birthdayString); // chuyển đổi chuỗi ngày sinh thành đối tượng Date
  let ageInMilliseconds = Date.now() - birthday.getTime(); // tính số millisecond giữa ngày sinh và ngày hiện tại

  let ageDate = new Date(ageInMilliseconds); // chuyển đổi số millisecond thành đối tượng Date
  let age = Math.abs(ageDate.getUTCFullYear() - 1970); // lấy số năm giữa ngày sinh và ngày hiện tại
  let months = ageDate.getUTCMonth(); // lấy số tháng giữa ngày sinh và ngày hiện tại
  let days = ageDate.getUTCDate() - 1; // lấy số ngày giữa ngày sinh và ngày hiện tại

  return { age, months, days }; // Trả về Kết quả
}

console.log(calcAge("2000-02-22"));
console.log(calcAge("2000-02-20"));

// KHÔNG SỬA PHẦN NÀY
// KHÔNG SỬA PHẦN NÀY
// KHÔNG SỬA PHẦN NÀY
module.exports = {
  addDaysToDate,
  getDaysUntilDate,
  getLastDayInMonth,
  calcAge,
};
