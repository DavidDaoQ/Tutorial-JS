/**
 * tính thể tích hình cầu
 *
 * @param {number} radius Bán kính hình cầu
 *
 * @return {number} Thể tích hình cầu
 */

function calcVolumeOfSphere(radius) {
    // Tính thể tích theo công thức (4 PI r^2)/3
    const y = (4 * Math.PI * Math.pow(radius, 2)) / 3;
    // Lam tron so thap phan thu 2
    const rounded = y.toFixed(2);
    // Trả về kết quả
    return rounded;
}
// Gọi hàm calcVolumeOfSphere()
console.log(calcVolumeOfSphere(6)); // Kết quả : 150.80

// Bài 2: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả
// các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8
// ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).

function sumBetween(a, b) {
    // Tạo biến chứa kết quả
    let total = 0;
    // Tìm ra số lớn và nhỏ hơn trong hai số
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    // Lặp từ số nhỏ đến số lớn
    // min +1 vì không bao gồm số bắt đầu
    for (let i = min + 1; i < max; i++) {
        // Cộng dồn các số
        total += i;
    }
    // Trả về kết quả
    return total;
}
// Gọi hàm sumBetween()
console.log(sumBetween(3, 9)); // Kết quả : 30
console.log(sumBetween(4, 8)); // Kết quả : 18

// Bài 3: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.

function positiveNum(n) {
    let sum = 0; // Khai bao bien sum va gan gia tri 0
    for (let i = 1; i < n; i++) {
        // Tao vong lap tang dan
        if (n % i === 0) {
            // Neu n chia het cho i thi uoc cua n la i
            console.log(i);
            sum += i; // Tinh tong cac uoc so trong mot so nguyen duong
        }
    }
    return sum; // Ket qua tra ve
}
//Goi ham positiveNum()
console.log(positiveNum(6)); // Ket qua : 6

// Bài 4: Cho 1 số nguyên dương bất kỳ, kiểm tra xem số đó
// có phải là số nguyên tố hay không, kết quả trả về true hoặc false.
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// Goi ham isPrime()
console.log(isPrime(3)); // Ket qua : true
console.log(isPrime(4)); // Ket qua : false
// Bài 5: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả
// các số nguyên tố nhỏ hơn hoặc bằng tham số truyền vào.
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function sumOfPrime(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}
// Goi ham sumOfPrime()
console.log(sumOfPrime(15)); // Ket qua : 41
console.log(sumOfPrime(18)); // Ket qua : 58