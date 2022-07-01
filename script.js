//Bai 1: Tính tiền lương nhân viên
/*
    -Input: Lương 1 ngày, số ngày làm
    -Process:
        1.Lấy được Input
        2.Tổng lương = Lương 1 ngày * số ngày làm;
        3.Log lương ra màn hình
    -Output: Tổng lương
*/
console.log("----------------Bài 1: Tính tiền lương nhân viên----------------");
var salaryPerDay = 200000;
var workingDays = 20;
var totalSalary = salaryPerDay * workingDays;
console.log("Tổng lương 1 tháng là: ", totalSalary);


//Bai 2: Tính giá trị trung bình
/**
 *  -Input: 5 số thực
 *  -Process:
 *      1: Lấy được input của 5 số thực
 *      2: Tính giá trị trung bình = Tổng 5 số thực / 5
 *      3: Log giá trị trung bình ra màn hình
 *  -Output: Giá trị trung bình
 */
console.log("----------------Bài 2: Tính giá trị trung bình----------------");
var num1 = 13;
var num2 = 2;
var num3 = 67;
var num4 = 4;
var num5 = 9;
var totalAvg = (num1 + num2 + num3 + num4 + num5) / 5;
console.log("Giá trị trung bình của 5 số là:", totalAvg)

//Bai 3: Quy đổi tiền
/**
 * -Input: số tiền USD, tỉ giá
 * -Process:
 *      1.Lấy Input.
 *      2.Tính tiền sau quy đổi = Số tiền USD * tỉ giá
 *      3.Log ra màn hình số tiền sau khi quy đổi USD sang VND
 * -Output: Số tiền sau khi quy đổi
 */
console.log("----------------Bài 3: Quy đổi tiền----------------");
var exchangeRate = 23500;
var cashUSD = 1200;
var totalCashVND = exchangeRate * cashUSD;
console.log("Số tiền sau khi quy đổi từ USD sang VND là:", totalCashVND);

//Bài 4: Tính diện tích, chu vi hình chữ nhật
/**
 *  -Input: chiều dài và chiều rộng
 *  -Process:
 *      1.Lấy input.
 *      2. Chu vi = (Chiều dài + Chiều rộng) * 2
 *         Diện tích = Chiều dài * Chiều rộng
 *      3.Log ra màn hình chu vi và diện tích của hình chữ nhật
 *  -Output: Chu vi và diện tích của hình chữ nhật
 */
console.log("----------------Bài 4: Tính diện tích, chu vi hình chữ nhật----------------");
var lengthOfTheRectangle = 20;
var widthOfTheRectangle = 30;
var perimeterOfTheRectangle = (lengthOfTheRectangle + widthOfTheRectangle) * 2;
var areaOfTheRectangle = lengthOfTheRectangle * widthOfTheRectangle;
console.log("Chu vi của hình chữ nhật là:", perimeterOfTheRectangle);
console.log("Diện tích của hình chữ nhật là:", areaOfTheRectangle);

//Bài 5: Tính tổng 2 ký số
/**
 * -Input: Số có 2 chữ số
 * -Process:
 *      1.Lấy input
 *      2.Hàng đơn vị = n % 10;
 *        Hàng chục = Math.floor (n / 10);
 *        Tổng 2 ký số = Hàng đơn vị + Hàng chục
 *      3.Log ra màn hình tổng 2 kí số
 * -Output: Tổng 2 kí số
 */
console.log("----------------Bài 5: Tính tổng 2 ký số----------------");
var num = 97;
var tensOfNum = Math.floor(num / 10);
var unitsOfNum = num % 10;
var totalOfNum = unitsOfNum + tensOfNum;
console.log("Tổng 2 kí số là: ", totalOfNum);