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
  return persons.map(function (person) {
    return person.name;
  });
}

console.log(
  getNames([
    { name: "Ba", age: 31 },
    { name: "Mai Anh", age: 30 },
  ])
);

// 2. Viết hàm getValues nhận vào một mảng các object bất kỳ và một key
// Ví dụ: [ { name: "Ba", age: 31 }, { name: "Mai Anh", age: 30 } ]
// Trả về một mảng mới chỉ chứa giá trị của key tương ứng trong object
// Ví dụ: getValues(arr, "age") => [ 31, 30 ]
function getValues(arr, key) {
  return arr.map(function (obj) {
    return obj[key];
  });
}

console.log(
  getValues(
    [
      { name: "Ba", age: 31 },
      { name: "Mai Anh", age: 30 },
    ],
    "age"
  )
);

// 3. Viết hàm getMax nhận vào một mảng các object bất kỳ và một key
// Ví dụ: [ { name: "Ba", age: 31 }, { name: "Mai Anh", age: 30 } ]
// Trả về giá trị cao nhất của key tương ứng
// Ví dụ: getMax(arr, "age") => 31
function getMax(arr, key) {
  return arr.reduce(function (max, obj) {
    if (obj.age > max) return obj.age;
    else return max;
  }, 0);
}

console.log(
  getMax(
    [
      { name: "Ba", age: 31 },
      { name: "Mai Anh", age: 30 },
      { name: "Tuấn", age: 35 },
      { name: "Vũ", age: 20 },
      { name: "Mạnh", age: 33 },
    ],
    "age"
  )
);

// 4. Viết hàm removeKey nhận vào một mảng các object bất kỳ và một key
// Ví dụ: [ { name: "Ba", age: 31 }, { name: "Mai Anh", age: 30 } ]
// Trả về mảng sau khi xóa bỏ tất cả key tương ứng trong mảng
// Ví dụ removeKey(arr, "age") => [ { name: "Ba" }, { name: "Mai Anh" } ]
function removeKey(arr, key) {
  return arr.map(function (obj) {
    const result = {};

    for (let k in obj) {
      if (k == key) continue;
      else result[key] = obj[key];
    }

    return result;
  });
}

console.log(
  removeKey(
    [
      { name: "Ba", age: 31 },
      { name: "Mai Anh", age: 30 },
    ],
    "age"
  )
);

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
  return arr.reduce(function (result, obj) {
    let value = obj[key];

    if (value in result) {
      result[value] += 1;
    } else result[value] = 1;

    return result;
  }, {});
}

console.log(
  countValues(
    [
      { name: "Ba", age: 31 },
      { name: "Mai Anh", age: 30 },
      { name: "Minh Đức", age: 30 },
    ],
    "age"
  )
);

// 7. Viết hàm groupBy nhận vào một mảng object bất kỳ và một key
// Ví dụ: [ { name: "Ba", gender: "Male" }, { name: "Mai Anh", gender: "Female" }, { name: "Đức", gender: "Male" } ]
// Trả về một object với các object được nhóm theo key
// Ví dụ: groupBy(arr, "gender") => { male: [ { name: "Ba", gender: "Male" }, { name: "Đức", gender: "Male" } ], female: [ { name: "Mai Anh", gender: "Female" } ]}
function groupBy(arr, key) {
  return arr.reduce(function (result, obj) {
    let value = obj[key];

    if (value in result) {
      result[value].push(obj);
    } else result[value] = [obj];

    return result;
  }, {});
}

console.log(
  groupBy(
    [
      { name: "Ba", gender: "Male" },
      { name: "Mai Anh", gender: "Female" },
      { name: "Đức", gender: "Male" },
    ],
    "gender"
  )
);

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
