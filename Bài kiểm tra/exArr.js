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

// 1. Viết hàm getNames nhận vào một mảng các object
// Mỗi object chứa tên và tuổi của một người
// Ví dụ: [ { name: "Ba", age: 31}, { name: "Mai Anh", age: 30 } ]
// Trả về một mảng mới chỉ chứa tên của mọi người
// Ví dụ: [ "Ba", "Mai Anh" ]
function getNames(persons) {
    // Code

    return; // Kết quả
}

// 2. Viết hàm getValues nhận vào một mảng các object bất kỳ và một key
// Ví dụ: [ { name: "Ba", age: 31 }, { name: "Mai Anh", age: 30 } ]
// Trả về một mảng mới chỉ chứa giá trị của key tương ứng trong object
// Ví dụ: getValues(arr, "age") => [ 31, 30 ]
function getValues(arr, key) {
    // Code

    return; // Kết quả
}

// 3. Viết hàm getMax nhận vào một mảng các object bất kỳ và một key
// Ví dụ: [ { name: "Ba", age: 31 }, { name: "Mai Anh", age: 30 } ]
// Trả về giá trị cao nhất của key tương ứng
// Ví dụ: getMax(arr, "age") => 31
function getMax(arr, key) {
    // Code

    return; // Kết quả
}

// 4. Viết hàm removeKey nhận vào một mảng các object bất kỳ và một key
// Ví dụ: [ { name: "Ba", age: 31 }, { name: "Mai Anh", age: 30 } ]
// Trả về mảng sau khi xóa bỏ tất cả key tương ứng trong mảng
// Ví dụ removeKey(arr, "age") => [ { name: "Ba" }, { name: "Mai Anh" } ]
function removeKey(arr, key) {
    // Code

    return; // Kết quả
}

// 5. Viết hàm getSum nhận vào một mảng các object bất kỳ và một key
// Ví dụ: [ { name: "Ba", age: 31 }, { name: "Mai Anh", age: 30 } ]
// Trả về tổng giá trị của key tương ứng
// Ví dụ getSum(arr, "age") => 61
function getSum(arr, key) {
    // Code

    return; // Kết quả
}

// 6. Viết hàm countValues nhận vào một mảng các object bất kỳ và một key
// Ví dụ: [ { name: "Ba", age: 31 }, { name: "Mai Anh", age: 30 }, { name: "Minh Đức", age: 30 } ]
// Trả về một object với tổng số lần xuất hiện giá trị của key
// Ví dụ: countValues(arr, "age") => { 31: 1, 30: 2 }
function countValues(arr, key) {
    // Code

    return; // Kết quả
}

// 7. Viết hàm groupBy nhận vào một mảng object bất kỳ và một key
// Ví dụ: [ { name: "Ba", gender: "Male" }, { name: "Mai Anh", gender: "Female" }, { name: "Đức", gender: "Male" } ]
// Trả về một object với các object được nhóm theo key
// Ví dụ: groupBy(arr, "gender") => { male: [ { name: "Ba", gender: "Male" }, { name: "Đức", gender: "Male" } ], female: [ { name: "Mai Anh", gender: "Female" } ]}
function groupBy(arr, key) {
    // Code

    return; // Kết quả
}

// KHÔNG SỬA PHẦN NÀY
// KHÔNG SỬA PHẦN NÀY
// KHÔNG SỬA PHẦN NÀY
module.exports = {
    getNames,
    getValues,
    getMax,
    removeKey,
    getSum,
    countValues,
    groupBy,
};