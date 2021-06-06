// Bài 1:
/**
 * B1:Input
 *  -   Nhập ngày tháng năm
 * B2:Handle
 *  -   Tạo biến ngay, thang, nam và biến ktraNgay để kiểm tra tháng đó có tối đa bao nhiêu ngày
 *  -   Dùng swich(thang) đối với tháng 1,3,5,7,8,10 thì tháng đó có 31 ngày, đối vói tháng 4,6,9,11 thì tháng đó có 30 ngày, 
 *Còn tháng 2 thì xét trường hợp: Nếu nam %4 ==0 && nam % 100 != 0 thì tháng đó có 29 ngày còn ngược lại thì có 28 ngyaf
 *  -   Nếu  if (ngay == ktraNgay) {
                if (thang == 12) {
                    ngay = 1
                    thang = 1;
                    nam++
                } else {
                    ngay = 1;
                    thang++;
                }
            } else {
                ngay++;
            }
 * B3:Output:
        -Xuất ra ngày tiếp theo
 *  LÀM TƯƠNG TỰ CHO TÌM NGÀY TRƯỚC ĐÓ
 */
var ngayTiepTheo = document.getElementById('ngayTiepTheo');
var btnNgayTiepTheo = document.getElementById('btnNgayTiepTheo');
var btnNgayTruocDo = document.getElementById('btnNgayTruocDo');
btnNgayTiepTheo.onclick = function() {
    var ngay = Number(document.getElementById('ngay').value);
    var thang = Number(document.getElementById('thang').value);
    var nam = Number(document.getElementById('nam').value);
    var ktraNgay;
    if (isNaN(ngay) || isNaN(thang) || isNaN(thang)) {
        alert('Yêu cầu nhập số !!');
        return;
    }
    if (ngay < 1 || ngay > 31) {
        alert('Bạn nhập sai ngày!!');
        return;
    }
    if (thang < 1 || thang > 12) {
        alert('Bạn nhập sai tháng!!');
        return;
    }

    if (nam < 1) {
        alert('Bạn nhập sai năm!!');
        return;
    }
    switch (thang) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            ktraNgay = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            ktraNgay = 30;
            break;
        case 2:
            if ((nam % 4 == 0 && nam % 100 != 0) || (nam % 400 == 0)) {
                ktraNgay = 29;
            } else {
                ktraNgay = 28;
            }
            break;
        default:
            ktraNgay = 0;
    }
    if (ngay == ktraNgay) {
        if (thang == 12) {
            ngay = 1
            thang = 1;
            nam++
        } else {
            ngay = 1;
            thang++;
        }
    } else {
        ngay++;
    }
    ngayTiepTheo.style.display = 'block';
    ngayTiepTheo.innerHTML = 'Ngày tiếp theo là: ' +
        ngay + ' / ' + thang + ' / ' + nam;
}
btnNgayTruocDo.onclick = function() {
    var ngay = Number(document.getElementById('ngay').value);
    var thang = Number(document.getElementById('thang').value);
    var nam = Number(document.getElementById('nam').value);
    var ktraNgay;
    if (isNaN(ngay) || isNaN(thang) || isNaN(thang)) {
        alert('Yêu cầu nhập số !!');
        return;
    }
    if (ngay < 1 || ngay > 31) {
        alert('Bạn nhập sai ngày!!');
        return;
    }
    if (thang < 1 || thang > 12) {
        alert('Bạn nhập sai tháng!!');
        return;
    }

    if (nam < 1) {
        alert('Bạn nhập sai năm!!');
        return;
    }
    if (ngay == 1 && thang == 1) {
        ngay = 31;
        thang = 12;
        nam--;
        ngayTruocDo.style.display = 'block';
        ngayTruocDo.innerHTML = 'Ngày trước đó là: ' + ngay + ' / ' + thang + ' / ' + nam;
        return;
    }
    if (ngay == 1) {
        thang--;
        switch (thang) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                ktraNgay = 31;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                ktraNgay = 30;
                break;
            case 2:
                if ((nam % 4 == 0 && nam % 100 != 0) || (nam % 400 == 0)) {
                    ktraNgay = 29;
                } else {
                    ktraNgay = 28;
                }
                break;
            default:
                ktraNgay = 0;
        }
        ngay = ktraNgay;
    } else {
        ngay--;
    }

    ngayTruocDo.style.display = 'block';
    ngayTruocDo.innerHTML = 'Ngày trước đó là: ' + ngay + ' / ' + thang + ' / ' + nam;
}

// Bài 2:
/**
 * B1:Input
 *  -   Nhập vào tháng năm
 * B2:Handle
 *  -   Tạo biến soThang, soNam và biến soNgayCuaThang
 *  -   dùng swicth(soThang) để kiểm tra nếu soThang = 1,3,5,7,8,10,12 thì soNgayCuaThang = 31 ngày
 *  -   nếu soThang = 4,6,9,11 thì soNgayCuaThang = 30 ngày
 *  -    nếu soThang = 2 thì xét Nếu soNam % 4 ==0 && soNam % 100 != 0 || soNam % 400 == 0 so thì tháng 2 có 29 ngày ngược lại tháng 2 có 28 ngày
 * B3:Output
 *  -   Xuất thông tin tháng đó có bao nhiêu ngày
 */

var thongTinThang = document.getElementById('thongTinThang');
thongTinThang.style.display = 'none';
var soNgayThang = document.getElementById('soNgayThang');
var btnNgayOfThang = document.getElementById('btnNgayOfThang');
btnNgayOfThang.onclick = function() {
    var soThang = Number(document.getElementById('soThang').value);
    var soNam = Number(document.getElementById('soNam').value);
    var soNgayCuaThang;
    if (isNaN(soThang) || isNaN(soNam)) {
        alert('Yêu cầu nhập vào số!!');
        return;
    }
    if (soThang < 1 || soThang > 12) {
        alert('Nhập sai tháng');
        return;
    }
    switch (soThang) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            soNgayCuaThang = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            soNgayCuaThang = 30;
            break;
        case 2:
            if ((soNam % 4 == 0 && soNam % 100 != 0) || (soNam % 400 == 0)) {
                soNgayCuaThang = 29;
            } else {
                soNgayCuaThang = 28;
            }
            break;
        default:
            soNgayCuaThang = 0;
    }
    thongTinThang.style.display = 'block';
    soNgayThang.innerHTML = 'Tháng ' + soThang + ' có ' + soNgayCuaThang + ' ngày.';
}

// Bài 3
/**
 * B1: Input
 *  -   Nhập số có ba chứ số
 * B2: Handle
 *  -   Tạo biến soBaChuSo, soHangTram, soHangChuc, soHangDonVi, docSo
 *  -   Tách số soHangTram, soHangChuc, soHangDonVi
 *  -   Đưa ra cách đọc soHangTram bằng cách sử dụng switch(){case}
 *  -   Tương tự với soHangChuc, soHangDonVi
 *  -   Gán docSo = soHangTram + soHangChuc + soHangDonVi
 * B3: Output
 *  -   Xuất cách đọc ba số
 */
var thongTinDoc = document.getElementById('thongTinDoc');
thongTinDoc.style.display = 'none';
var cachDoc = document.getElementById('cachDoc');
var btnDoc = document.getElementById('btnDoc').onclick = function() {
    var soBaChuSo = document.getElementById('soBaChuSo').value;
    var soHangTram = Math.floor(soBaChuSo / 100);
    var soHangChuc = Math.floor(soBaChuSo % 100 / 10);
    var soHangDonVi = Math.floor(soBaChuSo % 10);
    var docSo = '';
    if (isNaN(soBaChuSo)) {
        alert('Chỉ được nhập số');
        return;
    }
    switch (soHangTram) {
        case 1:
            soHangTram = 'Một Trăm';
            break;
        case 2:
            soHangTram = 'Hai Trăm';
            break;
        case 3:
            soHangTram = 'Ba Trăm';
            break;
        case 4:
            soHangTram = 'Bốn Trăm'
            break;
        case 5:
            soHangTram = 'Năm Trăm';
            break;
        case 6:
            soHangTram = 'Sáu Trăm';
            break;
        case 7:
            soHangTram = 'Bảy Trăm';
            break;
        case 8:
            soHangTram = 'Tám Trăm';
            break;
        case 9:
            soHangTram = 'Chín Trăm';
            break;
        default:
            soHangTram = 'Không hợp lệ!!'
    }
    console.log(soHangTram);
    switch (soHangChuc) {
        case 1:
            soHangChuc = ' Mười';
            break;
        case 2:
            soHangChuc = ' Hai Mươi';
            break;
        case 3:
            soHangChuc = ' Ba Mươi';
            break;
        case 4:
            soHangChuc = ' Bốn Mươi'
            break;
        case 5:
            soHangChuc = ' Năm Mươi';
            break;
        case 6:
            soHangChuc = ' Sáu Mươi';
            break;
        case 7:
            soHangChuc = ' Bảy Mươi';
            break;
        case 8:
            soHangChuc = ' Tám Mươi';
            break;
        case 9:
            soHangChuc = ' Chín Mươi';
            break;
        default:
            soHangChuc = 'Không hợp lệ!!'
    }
    switch (soHangDonVi) {
        case 1:
            soHangDonVi = ' Một';
            break;
        case 2:
            soHangDonVi = ' Hai ';
            break;
        case 3:
            soHangDonVi = ' Ba ';
            break;
        case 4:
            soHangDonVi = ' Bốn '
            break;
        case 5:
            soHangDonVi = ' Năm ';
            break;
        case 6:
            soHangDonVi = ' Sáu ';
            break;
        case 7:
            soHangDonVi = ' Bảy ';
            break;
        case 8:
            soHangDonVi = ' Tám ';
            break;
        case 9:
            soHangDonVi = ' Chín ';
            break;
        default:
            soHangDonVi = 'Không hợp lệ!!'
    }
    thongTinDoc.style.display = 'block';
    cachDoc.style.color = 'blueviolet';
    docSo = soHangTram + soHangChuc + soHangDonVi;
    cachDoc.innerHTML = docSo

}

// Bài 4
/**
 * B1: Input
 *  -   Nhập tên và tọa độ của ba sinh viên
 * B2: Handle
 *  -   tạo ba biên tên sinh viên: tenSv1, tenSv2, tenSv3 
 *  -   Tạo các biến để nhập khoảng cách của ba sinh viên và tọa độ trường
 *  -   Tọa độ trường (0;0)
 *  -   Tính khoảng cách từ tọa độ của ba sinh viên đến tọa độ trường
 *  -   So sánh khoảng cách giữa ba sinh viên và đưa ra kết quả
 * B3: Output
 *  -   Xuất tên sinh viên và khoảng cách xa nhất
 */
var thongTinSinhVien = document.getElementById('thongTinSinhVien');
thongTinSinhVien.style.display = 'none';
var tenSv = document.getElementById('tenSv');
var khoangCach = document.getElementById('khoangCach');
var btnTinhKhoangCach = document.getElementById('btnTinhKhoangCach');

btnTinhKhoangCach.onclick = function() {
    var tenSv1 = document.getElementById('tenSv1').value;
    var tenSv2 = document.getElementById('tenSv2').value;
    var tenSv3 = document.getElementById('tenSv3').value;

    var toaDoX1 = Number(document.getElementById('toaDoX1').value);
    var toaDoY1 = Number(document.getElementById('toaDoY1').value);
    var toaDoX2 = Number(document.getElementById('toaDoX2').value);
    var toaDoY2 = Number(document.getElementById('toaDoY2').value);
    var toaDoX3 = Number(document.getElementById('toaDoX3').value);
    var toaDoY3 = Number(document.getElementById('toaDoY3').value);
    // Tọa độ trường học
    var toaDoX0 = 0;
    var toaDoY0 = 0;
    // Tính khoảng cách
    var khoangCachSv1 = Math.sqrt(Math.pow((toaDoX1 - toaDoX0), 2) + Math.pow((toaDoY1 - toaDoY0), 2));
    var khoangCachSv2 = Math.sqrt(Math.pow((toaDoX2 - toaDoX0), 2) + Math.pow((toaDoY2 - toaDoY0), 2));
    var khoangCachSv3 = Math.sqrt(Math.pow((toaDoX3 - toaDoX0), 2) + Math.pow((toaDoY3 - toaDoY0), 2));

    // check
    if (tenSv1 == '' || tenSv2 == '' || tenSv3 == '') {
        alert('Nhập tên sinh viên!!');
        return;
    }
    if (isNaN(toaDoX1) || isNaN(toaDoX2) || isNaN(toaDoX3) || isNaN(toaDoY1) || isNaN(toaDoY2) || isNaN(toaDoY3)) {
        alert('Yêu cầu chỉ nhập số');
        return;
    }
    // Kiểm tra
    var khoangCachMax;
    var sinhVien;
    if (khoangCachSv1 > khoangCachSv2 && khoangCachSv1 > khoangCachSv3) {
        sinhVien = tenSv1;
        khoangCachMax = khoangCachSv1;

    } else if (khoangCachSv2 > khoangCachSv3 && khoangCachSv2 > khoangCachSv1) {
        sinhVien = tenSv2;
        khoangCachMax = khoangCachSv2;

    } else {
        sinhVien = tenSv3;
        khoangCachMax = khoangCachSv3;
    }
    thongTinSinhVien.style.display = 'block';
    tenSv.innerHTML = 'Sinh viên : ' + sinhVien + ' có khoảng cách xa nhất';
    khoangCach.innerHTML = 'Khoảng cách là: ' + Math.floor(khoangCachMax);

}