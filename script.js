function countDay(){
    let month = +document.getElementById('month').value;
    let result;
    
    if(month > 0 && month <13) {
        switch (month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                result = 'Tháng 1 có 31 ngày'
                break;
            case 4:
            case 6: 
            case 9:
            case 11:
                result = 'Tháng 4 có 30 ngày '
                break;
            case 2:
                result = 'Tháng 2 có 28 hoặc 29 ngày'
                break;
        }
    } else {
        result = `Nhập lại tháng, bạn đang nhập tháng ${month}`;
    }
    
    document.getElementById('result').innerHTML = result;
}
