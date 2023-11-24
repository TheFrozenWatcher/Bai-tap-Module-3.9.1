// const heading = document.getElementById("heading");
// console.log(heading);



// var myName = "ABC"; // Khai báo biến
// // myName = "ERR"; // Phép gán lại giá trị
// // var myName = "fhưi";
// console.log("My name :", myName);

// //Từ khóa let
// let age = 21;
// age = 22;
// console.log("Tuổi: ", age);

// //Từ khóa const
// const address = "Hà Nội";
// console.log("Địa chỉ: ", address);

// let score = 9;

// //Câu lệnh điều kiện chỉ có if
// if (score > 5) { console.log("Đủ điều kiện qua môn"); }

// //Câu lệnh điều kiện if else
// //Nếu thỏa mãn điều kiện thì vào trong if, không thì vào trong else
// if (score > 8) { console.log("Học lực giỏi"); heading.innerHTML = "Học lực giỏi"; } else { console.log("Không đạt giỏi"); heading.innerHTML = "Không đạt giỏi" }

// //Câu lệnh có nhiều điều kiện khác nhau
// //Nhập điểm trung bình của học sinh A và xếp loại học lực theo tiêu chí sau
// //Điểm tb < 5: học lực yếu
// //5 < điểm tb <= 6.4: học lực tb
// //6.5<= đtb <7.9: khá
// //8 <= đtb <9: giỏi
// //đtb>9 : xuất sắc

// //Nếu điểm <0 hoặc >10

// if (score < 0 || score > 10) { console.log("Điểm nhập sai, yêu cầu nhập lại"); }
// else {
//     if (score < 5) {
//         console.log("Học lực yếu")
//     }
//     else if (score > 5 && score < 6.5) {
//         console.log("Học lực trung bình");
//     } else if (score > 6.5 && score < 8) {
//         console.log("Học lực khá");
//     } else if (score >= 8 && score < 9) {
//         console.log("Học lực giỏi");
//     } else {
//         console.log("Học lực xuất sắc");
//     }
//     // console.log("Đã nhập đúng điểm");
// };

// let year = +window.prompt("Enter a year");

// // if (year % 4 == 0) {
// //     if (year % 100 == 0) {
// //         if (year % 400 == 0) {
// //             alert(year + " is a leap year");
// //         } else {
// //             alert(year + " is NOT a leap year");
// //         }
// //     } else {
// //         alert(year + " is a leap year");
// //     }
// // } else {
// //     alert(year + " is NOT a leap year");
// // }

// // if ((year % 4 == 0 && year % 100 != 0) || year % 400 ==0)
// // {console.log(year + " is a leap year");}
// // else {console.log(year + " is NOT a leap year")};

// let flag = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
// if (flag) { console.log(year + " is a leap year"); }
// else { console.log(year + " is NOT a leap year") };

// let gender = 0;
// if (gender === 0) { console.log("Giới tính nam"); }
// else { console.log("Giới tính nữ"); };

// //Toán tử 3 ngôi
// let result = gender === 0 ? "Nam" : gender === 1 ? "Nữ" : "Khác";
// console.log("Result", result);

// //Cấu trúc điều khiển switch-case
// //Trường hợp sử dụng: trong 1 chương trình có nhiều điều kiện
// //Cú pháp:
// //  switch (key) {
// //     case value:

// //         break;

// //     default:
// //         break;
// //  }
// // Yêu cầu người dùng nhập lựa chọn + - * /
// let key = "%";
// switch (key) {
//     case "+":
//         console.log("Đây là phép cộng");
//         break;
//     case "-":
//         console.log("Đây là phép trừ");
//         break;
//     case "*":
//         console.log("Đây là phép nhân");
//         break;
//     case "/":
//         console.log("Đây là phép chia");
//         break;

//     default:
//         console.log("Giá trị không hợp lệ");
//         break;
// }

// console.log(Math.random()); //số ngẫu nhiêu giữa 0 và 1
// console.log(Math.abs(-8));// giá trị tuyệt đối
// console.log(Math.pow(11122, 1234));// hàm mũ
// console.log(Math.ceil(1.5));// làm tròn lên
// console.log(Math.round(1.1));//làm tròn
// console.log(Math.sqrt(4));//lấy căn bậc 2
// console.log(Math.PI);// lấy số pi

//Ex6
// var height = +window.prompt("Enter height: ");
// var weight = +window.prompt("Enter weight: ");
// var bmi = weight / Math.pow(height, 2);
// if (bmi < 18) {
//     document.write("Underweight");
// } else if (bmi < 25.0) {
//     document.write("Normal");
// } else if (bmi < 30.0) {
//     document.write("Overweight");
// } else {
//     document.write("Obese");
// }

//Ex7
// var key = +prompt("Nhập tháng: ");
// switch (key) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log("Tháng " + key + " có 31 ngày");
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log("Tháng " + key + " có 30 ngày");
//         break;
//     case 2:
//         console.log("Tháng 2 có 28 ngày");
//         break;

//     default: console.log("Không tồn tại tháng trên");
//         break;
// };

// Ex8
// var a = +prompt("Nhập số a: ");
// var b = +prompt("Nhập số b: ");
// var key = prompt("Mời bạn nhập phép tính +, -, *, /");

// switch (key) {
//     case "+":
//         alert("Kết quả của phép tính là a" + key + "b = " + Number(a + b));
//         break;
//     case "-":
//         alert("Kết quả của phép tính là a" + key + "b = " + Number(a-b));
//         break;
//     case "*":
//         alert("Kết quả của phép tính là a" + key + "b = " + Number(a*b));
//         break;
//     case "/":
//         alert("Kết quả của phép tính là a" + key + "b = " + Number(a/b));
//         break;

//     default: alert("Bạn chưa nhập số liệu");
//         break;
// }

//Ex9
// var a = +prompt("Nhập số a: ");
// var b = +prompt("Nhập số b: ");
// var c = +prompt("Nhập số c: ");
// console.log("Số lớn nhất là: ", Math.max(a, b, c));
// console.log("Số nhỏ nhất là: ", Math.min(a, b, c));

//Ex10
// const date = +prompt("Nhập ngày sinh: ");
// const month = +prompt("Nhập tháng sinh: ");
// switch (month) {
//     case 1:
//         if (date > 0 && date <= 19) { console.log("Ma Kết"); }
//         else if (date > 19 && date <= 31) {
//             console.log("Bảo Bình")
//         }
//         else { console.log("Nhập sai thời gian") }
//         ;
//         break;
//     case 2:
//         if (date > 0 && date <= 18) { console.log("Bảo Bình"); }
//         else if (date > 18 && date <= 29) { console.log("Song Ngư") } else { console.log("Nhập sai thời gian") };
//         break;
//     case 3:
//         if (date > 0 && date <= 20) { console.log("Song Ngư"); }
//         else if (date > 20 && date <= 31) { console.log("Bạch Dương") } else { console.log("Nhập sai thời gian") };
//         break;
//     case 4:
//         if (date > 0 && date <= 19) { console.log("Bạch Dương"); }
//         else if (date > 19 && date <= 30) { console.log("Kim Ngưu") } else { console.log("Nhập sai thời gian") };
//         break;
//     case 5:
//         if (date > 0 && date <= 20) { console.log("Kim Ngưu"); }
//         else if (date > 20 && date <= 31) { console.log("Song Tử") } else { console.log("Nhập sai thời gian") };
//         break;
//     case 6:
//         if (date > 0 && date <= 21) { console.log("Song Tử"); }
//         else if (date > 21 && date <= 30) { console.log("Cự Giải") } else { console.log("Nhập sai thời gian") };
//         break;
//     case 7:
//         if (date > 0 && date <= 22) { console.log("Cự Giải"); }
//         else if (date > 22 && date <= 31) { console.log("Sư Tử") } else { console.log("Nhập sai thời gian") };
//         break;
//     case 8:
//         if (date > 0 && date <= 22) { console.log("Sư Tử"); }
//         else if (date > 22 && date <= 31) { console.log("Xử Nữ") } else { console.log("Nhập sai thời gian") };
//         break;
//     case 9:
//         if (date > 0 && date <= 20) { console.log("Xử Nữ"); }
//         else if (date > 20 && date <= 30) { console.log("Thiên Bình") } else { console.log("Nhập sai thời gian") };
//         break;
//     case 10:
//         if (date > 0 && date <= 23) { console.log("Thiên Bình"); }
//         else if (date > 23 && date <= 31) { console.log("Hổ Cáp") } else { console.log("Nhập sai thời gian") };
//         break;
//     case 11:
//         if (date > 0 && date <= 21) { console.log("Hổ Cáp"); }
//         else if (date > 21 && date <= 30) { console.log("Nhân Mã") } else { console.log("Nhập sai thời gian") };
//         break;
//     case 12:
//         if (date > 0 && date <= 21) { console.log("Nhân Mã"); }
//         else if (date > 21 && date <= 31) { console.log("Ma Kết") } else { console.log("Nhập sai thời gian") };
//         break;

//     default: console.log("Nhập sai thời gian");
//         break;
// }

//Ex 11
//Ex 11.1
// var age = +prompt("Nhập tuổi: ");
// let result = age >= 18 ? "Bạn đủ 18 tuổi" : "Bạn chưa đủ 18 tuổi";
// console.log(result);

//Ex 11.2
// var time = +prompt("Enter time:");
// let result = (time >=0 && time <18) ? "Good day" : (time>=18 && time <=24) ? "Good evening" : "Invalid time";
// console.log(result);

//Ex 11.3
// var time = +prompt("Enter time:");
// let result = (time >= 0 && time < 10) ? "Good morning" : (time >= 10 && time < 20) ? "Good day" : (time >= 20 && time <= 24) ? "Good evening" : "Invalid time";
// console.log(result);

//Ex 11.4
// var randomNumber = +prompt("Nhập số:");
// if (randomNumber % 2 == 0) { console.log(randomNumber + " là số chẵn"); }
// else { console.log(randomNumber + " là số lẻ"); };

//Ex 11.5
// var randomNumber = +prompt("Nhập số:");
// var key = randomNumber % 2;
// switch (key) {
//     case 0:
//         console.log(randomNumber + " là số chẵn");
//         break;
//     case 1:
//         console.log(randomNumber + " là số lẻ");
//         break;

//     default: console.log(randomNumber + " là số lẻ")
//         break;
// }

//Ex 11.6
// var color = +prompt("Nhập màu: ");
// switch (color) {
//     case blue:
//         {console.}

//         break;

//     default:
//         break;
// }

//Ex 11.7
// var x = +prompt("Nhập số");
// if (x < 0) { console.log(" x là số nguyên âm"); }
// else if (x == 0) { console.log("x có giá trị là 0"); }
// else { console.log("x là số nguyên dương"); };


