const dog = {
    // key : value
    name: "Ben",
    age: 2,
    breed: "PitBull",
    weight: 3,
    color: "gray",
    eye: { color: "gray" },
    // Hanh vi - Phuong thuc
    bark() {
        console.log("woof woof");
    },
    run() {
        // biến đặc biệt this
        // this đại diện cho đối tượng hiện tại
        // Sử dụng this để truy cập các phương thức/thuộc tính khác của đối tượng
        console.log(dog.name, "is running");
    },
    bite() {
        console.log("yap yap");
    },
};
// Cú pháp để truy cập giá trị(thuộc tính,phương thức) bên trong đối tượng
// Đạt notation - Sử dụng dấu chấm
console.log(dog.name);
console.log(dog.breed);
console.log(dog.color);
console.log(dog.eye.color);

dog.bark();

// Bracket Notation - Sử dụng ngoặc vuông
console.log(dog["name"]);
dog["bite"];

// Cập nhật/thay đổi giá trị thuộc tính
dog.name = "Gaoranger";

// Thêm một thuộc tính/phương thức
dog.height = 60;
dog.eat = function() {
    console.log("Rộp rộp");
};

// Xóa thuộc tính/phương thức
delete dog.eye;

console.log("breed" in dog);
console.log("eye" in dog);

console.log(dog);

// Duyệt qua các thuộc tính
for (let key in dog) {
    console.log("Key:", key, "Value:", dog[key]);
}
dog.key;

let items = {
    // Key là tên sản phẩm
    // value là giá sản phẩm
    iphone: 1000,
    macbook: 2000,
    clothes: 10,
};

// Tính tổng giá trị tất cả các items
let total = 0; // Khai báo biến total

for (let product in items) {
    const price = items[product];
    total += price; // Tính tổng giá trị
}
// Gọi tham số total
console.log(total);

let students = {
    // key là tên học viên
    // value là quê quán
    Ba: "Nam Định",
    Sơn: "Đông Anh",
    Quang: "Hải Phòng",
    Hiệu: "Thái Bình",
    Hiếu: "Thái Bình",
};

function greeting(name) {
    // Kiểm tra xem tên có trong danh sách này không
    // In ra câu chào dạng "Xin chào,mình là Quang,mình đến từ Hải Phòng"
    // Nếu không có,in ra "Xin chào,mình là Quang,mình là người mới"
    if (name in students) {
        let from = students(name);

        console.log(´Xin chào, mình là $ { name }, mình đến từ $ { from }´);
    } else {
        console.log(´Xin chào, $ { name }
            không có trong danh sách!´);
    }
}

greeting("Quang");



function SamsungS23Ultra(ram, ssd, size, color) {
    this.ram = ram;
    this.ssd = ssd;
    this.size = size;
    this.color = color;
}
SamsungS23Ultra.prototype.call = function() {
    console.log("calling", "reng reng");
};

const dienThoai1 = new SamsungS23Ultra(8, 512, 10, "black");

//-------------------

// btvn: ôn tập object
// tìm hiểu thêm về getter/setter/property flags/ prototype
// primitive với references
// Hàm khởi tạo(Classes)