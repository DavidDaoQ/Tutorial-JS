// Bài 1: Viết hàm có 2 tham số, tham số đầu tiên là 1 chuỗi thời
// gian t dạng ''giờ:phút:giây'', tham số thứ 2 là 1 số x <= 1000.
// Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t.
// Ví dụ với t = ''09:20:56'' và x = 7 thì kết quả là ''09:21:03''.
function addSecondsToTime(t, x) {
  const [hours, minutes, seconds] = t.split(":").map(Number);
  const date = new Date(0, 0, 0, hours, minutes, seconds + x);
  return date.toLocaleTimeString("en-US", { hour12: false });
}

// Gọi hàm addSecondsToTime()
console.log(addSecondsToTime("09:20:56", 8)); // '09:21:03'

// Bài 2: Một con ốc sên leo từ đáy giếng lên miệng giếng,
// biết ban ngày leo được x mét, ban đêm lại bị tụt xuống y mét,
// hỏi sau bao nhiêu ngày thì ốc sên sẽ lên được đến miệng giếng.
// Viết hàm giải bài toán trên với 3 tham số h > 0 là chiều cao của
// giếng, x và y như mô tả trên (x > 0, y > 0).
function daysToReachWellTop(h, x, y) {
  const distancePerDay = x - y;
  const days = Math.ceil((h - x) / distancePerDay) + 1;
  return days;
}

// Gọi hàm daysToReachWellTop()
console.log(daysToReachWellTop(24, 6, 2)); // Kết quả : 6

// Bài 3: Cho 1 số nguyên dương, hãy viết hàm sắp xếp lại các chữ
// số trong số nguyên đó sao cho ra 1 số nhỏ nhất (giữ nguyên số chữ số).
// Ví dụ với tham số 530751 thì kết quả là 103557.
function minNumber(n) {
  // Chuyển số nguyên thành mảng các chữ số
  const digits = n.toString().split("").map(Number);

  // Sắp xếp lại các chữ số trong mảng theo thứ tự tăng dần
  digits.sort((a, b) => a - b);

  // Ghép lại các chữ số thành một số nguyên mới
  const minNum = parseInt(digits.join(""));

  return minNum;
}
//Gọi hàm minNumber()
console.log(minNumber("89214")); // Kết quả : 12489
