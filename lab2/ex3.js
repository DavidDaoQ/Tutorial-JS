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

// 1. Viết hàm kiểm tra số nguyên tố
// Hàm nhận vào tham số n là một số nguyên dương bất kỳ
// Kết quả trả về là true hoặc false cho biết số đó có phải số nguyên tố hay không
function isPrime(n) {
  // Code
  if (n < 2) {
    // Giả sử n<2 thì hàm trả về false
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    // Tạo vòng lặp for và biến i=2
    if (n % i == 0) {
      // Giả sử n chia hết cho i bằng 0 thì không phải số nguyên tố
      // nên giá trị trả về là false
      return false;
    }
  }
  return true; // Các giá trị còn lại trả về true
}
// Gọi hàm isPrime()
console.log(isPrime(3)); // Kết quả :true
console.log(isPrime(30)); // Kết quả :false
console.log(isPrime(31)); // Kết quả :true

// 2. Viết hàm tính tổng số nguyên tố
// Hàm nhận vào tham số n là một số nguyên dương bất kỳ
// Kết quả trả về là tổng của các số nguyên tố trong khoảng từ 1 đến n
function isPrime(num) {
  // Code
  if (num < 2) {
    // Nếu num nhỏ hơn 2 thì đó không phải số nguyên tố
    return false; // Giá trị trả về sẽ là false
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // Tạo vòng lặp và đặt biến i=2
    if (num % i == 0) {
      // Điều kiện : nếu num chia hết cho giá trị i bằng 0
      // thì không phải số nguyên tố
      return false; // Giá trị trả về false
    }
  }
  return true; // Kết quả trả về true
}

function sumOfPrimes(n) {
  let sum = 0; // Khai báo biến sum và đặt giá trị bằng 0
  for (let i = 2; i <= n; i++) {
    // Tạo vòng lặp tăng dần và đặt biến i=2
    if (isPrime(i)) {
      // Điều kiện: kiểm tra giá trị i có là số nguyên tố hay không
      sum += i; // cộng và gán giá trị sum =sum+i
    }
  }
  return sum; // Trả về kết quả sum
}
// Gọi hàm sumOfPrimes()
console.log(sumOfPrimes(21)); // Kết quả : 77
console.log(sumOfPrimes(35)); // Kết quả : 160
console.log(sumOfPrimes(30)); // Kết quả : 129

// 3. Viết hàm tìm số Fibonacci
// Hàm nhận vào tham số n là một số nguyên dương bất kỳ
// Kết quả trả về là số thứ n trong dãy Fibonacci
// Ví dụ dãy Fibonacci: 0 1 1 2 3 5 8
// Số Fibonacci thứ 3: 1
function nthFibonacci(n) {
  // Code
  if (n <= 1) {
    // Điều kiện : Nếu giá trị n nhỏ hơn và bằng 1
    // thì sẽ trả về đúng giá trị n
    return n;
  }

  return nthFibonacci(n - 1) + nthFibonacci(n - 2); // Kết quả trả về là dãy fibonacci
  // nếu ngược lại với điều kiện if ở trên
}
// Gọi hàm nthFibonacci()
console.log(nthFibonacci(4)); // Kết quả : 3
console.log(nthFibonacci(8)); // Kết quả : 21
console.log(nthFibonacci(12)); // Kết quả : 144
console.log(nthFibonacci(17)); // Kết quả : 1597

// 4. Viết hàm tính giai thừa
// Hàm nhận vào tham số n là một số nguyên dương bất kỳ
// Kết quả trả về là giai thừa của n
function factorial(n) {
  // Code
  if (n === 0 || n === 1) return 1; // Điều kiện giá trị n bằng 0 hoặc bằng 1
  // thì giá trị giai thừa trả về là 1
  return n * factorial(n - 1); // Ngược với điều kiện if ở
  // trên thì giá trị trả về là giai thừa của n
}
// Gọi hàm factorial()
console.log(factorial(4)); // Kết quả :  24
console.log(factorial(5)); // Kết quả : 120
console.log(factorial(7)); // Kết quả :5040
console.log(factorial(10)); // Kết quả : 3628800

// 5. Viết hàm kiểm tra số Strong
// Hàm nhận vào tham số n là một số nguyên dương bất kỳ
// Kết quả trả về là true hoặc false cho biết số đó có phải là số Strong hay không
// Số Strong là số có tổng giai thừa của các chữ số bằng chính nó
// Ví dụ 145 = 1! + 4! + 5! = 145 => Strong
function giaiThua(num) {
  if (num === 0 || num === 1) {
    // Điều kiện num bằng 0 hoặc bằng 1
    // thì giai thừa trả về giá trị 1
    return 1;
  }
  return num * giaiThua(num - 1); // Ngược lại điều kiện trên thì
  // hàm trả về giá trị giai thừa
}

function isStrong(n) {
  // Code
  let sum = 0; // Khai báo biến sum và gán giá trị 0
  while (n > 0) {
    // điều kiện giá trị n lớn hơn 0
    let digit = n % 10; // Khai báo biến digit
    n = Math.floor(n / 10); // Làm tròn giá trị n với Math.floor
    sum += giaiThua(digit); // Tính tổng giai thừa
  }
  return sum === n; // Trả về kết quả tổng giai thừa
}
// Gọi hàm isStrong()
console.log(isStrong(145)); // Kết quả : false
console.log(isStrong(35)); // Kết quả : false
console.log(isStrong(5160)); // Kết quả : false
console.log(isStrong(2300)); // Kết quả : false
