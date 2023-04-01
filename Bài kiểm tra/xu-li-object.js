// Bài 1: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }.
// Viết hàm tính ra số tuổi trung bình của toàn bộ sinh viên.
function averageAge(students) {
  const totalAge = students.reduce((acc, student) => acc + student.age, 0);
  return totalAge / students.length;
}
const students = [
  { name: "Huy", age: 20 },
  { name: "Nam", age: 22 },
  { name: "Linh", age: 19 },
];
// Gọi hàm averageAge()
console.log(averageAge(students)); // Kết quả : 20.3

// Bài 2: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }.
// Viết hàm sắp xếp lại mảng trên theo tuổi học viên từ cao đến thấp.
function compareByAgeDescending(a, b) {
  if (a.age < b.age) {
    return 1;
  } else if (a.age > b.age) {
    return -1;
  } else {
    return 0;
  }
}

// Mảng các đối tượng sinh viên
const student = [
  { name: "Huy", age: 20 },
  { name: "Nam", age: 22 },
  { name: "Mai", age: 19 },
  { name: "Lan", age: 21 },
];

// Sắp xếp mảng sinh viên theo tuổi từ cao đến thấp
student.sort(compareByAgeDescending);

console.log(student);
// Kết quả :
// [
//     { name: "Nam", age: 22 },
//     { name: "Lan", age: 21 },
//     { name: "Huy", age: 20 },
//     { name: "Mai", age: 19 },
// ];

// Bài 3: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }.
// Viết hàm sắp xếp lại mảng trên theo tên học viên (không phân biệt hoa thường).
function sortStudentsByName(students1) {
  students1.sort(function (a, b) {
    var nameA = a.name.toLowerCase(); // Chuyển tên của sinh viên A sang chữ thường
    var nameB = b.name.toLowerCase(); // Chuyển tên của sinh viên B sang chữ thường
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return students1;
}

var students1 = [
  { name: "Huy", age: 20 },
  { name: "Nam", age: 22 },
  { name: "Anh", age: 21 },
  { name: "Thịnh", age: 20 },
];
// Gọi hàm sortStudentsByName()
console.log(sortStudentsByName(students1));
// Kết quả :
// [
//     { name: "Anh", age: 21 },
//     { name: "Huy", age: 20 },
//     { name: "Nam", age: 22 },
//     { name: "Thịnh", age: 20 },
// ];

//Bài 4: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }.
// Viết hàm lọc ra những sinh viên nào có tên bắt đầu bằng chữ ''H'' hoặc ''h''.
function filterStudentsByNameStartingWithH(students2) {
  return students2.filter((student) =>
    student.name.toLowerCase().startsWith("h")
  );
}

// Ví dụ
const students2 = [
  { name: "Huy", age: 20 },
  { name: "Linh", age: 21 },
  { name: "hieu", age: 22 },
  { name: "Mai", age: 23 },
];

// Gọi hàm filterStudentsByNameStartingWithH()
console.log(filterStudentsByNameStartingWithH(students2)); // Kết quả : [{ name: 'Huy', age: 20 }, { name: 'hieu', age: 22 }]
