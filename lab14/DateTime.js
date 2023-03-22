const now = new Date();
console.log(now);

const birthday = new Date();
console.log(birthday);
const today = new Date(2023, 2, 22);
console.log(today);

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

// 1. Viết hàm trả về ngày tháng hiện tại theo định dạng ISO (YYYY-MM-DD)
function getCurrentDate() {
    // Code
    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();

    return `${year}-${String(month).padStart(2, "0")}-${String(date).padStart(
    2,
    "0"
  )}`; // Kết quả
}

console.log(getCurrentDate());

// 2. Viết hàm trả về số ngày giữa 2 ngày bất kỳ
// dateString1 và dateString2 là 2 chuỗi ngày tháng dạng YYYY-MM-DD
function getDaysBetweenDates(dateString1, dateString2) {
    // Code

    return; // Kết quả
}

// 3. Viết hàm trả về chuỗi cho biết thời gian hiện tại theo định dạng 24h (HH:mm:ss)
function getCurrentTime() {
    // Code

    return; // Kết quả
}

// 4. Viết hàm cho biết thứ tương ứng với ngày truyền vào
// Ví dụ: Thứ 2, Thứ 3, ...
// dateString là một chuỗi ngày tháng dạng YYYY-MM-DD
function getDayOfWeek(dateString) {
    // Code

    return; // Kết quả
}

// 5. Viết hàm kiểm tra ngày truyền vào là tương lai hay quá khứ
// Kết quả trả về là true hoặc false
function isDateInFuture(dateString) {
    // Code

    return; // Kết quả
}

// KHÔNG SỬA PHẦN NÀY
// KHÔNG SỬA PHẦN NÀY
// KHÔNG SỬA PHẦN NÀY
module.exports = {
    getCurrentDate,
    getDaysBetweenDates,
    getCurrentTime,
    getDayOfWeek,
    isDateInFuture,
};