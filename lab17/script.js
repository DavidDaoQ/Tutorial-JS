// Truy cập vào thẻ h1 có id = “heading” thay đổi màu chữ thành‘ red’, và in hoa nội dung của thẻ đó
const h1Element = document.querySelector("#heading");
h1Element.classList.add("text-red", "text-uppercased");
// Thay đổi màu chữ của tất cả thẻ có class“ para” thành màu“ blue” và có font - size = “20 px”
// Lấy tất cả các thẻ có class "para"
const paras = document.querySelectorAll('.para');

// Duyệt qua tất cả các thẻ và đặt style của chúng
paras.forEach(para => {
    para.style.color = 'blue'; // thay đổi màu chữ thành màu xanh
    para.style.fontSize = '20px'; // đặt kích thước font là 20px
});
// Thêm thẻ a link đến trang‘ facebook’ ở đằng sau thẻ có class“ para - 3”
// Thay đổi nội dung của thẻ có id = “title” thành“ Đây là thẻ tiêu đề”
// Thêm class“ text - bold” vào thẻ có class = “description”(định nghĩa class“ text - bold” có tác dụng in đậm chữ)
// Thay thế thẻ có class = “para - 3” thành thẻ button có nội dung là“ Click me”
// Copy thẻ có class = “para - 2” và hiển thị ngay đằng sau thẻ đó
// Xóa thẻ có class = “para - 1”