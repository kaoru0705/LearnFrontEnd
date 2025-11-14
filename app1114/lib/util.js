/* 앞으로 자주 사용할 코드는 이 파일에 모아놓고 나만의 라이브러리로 삼자*/

/*
매개변수가 10보다 작은 1의 자리수라면 앞에 문자"0" 붙이기
*/
function getZeroNum(n){
    let result = n;
    if(n < 10) {
        result = "0" + result;
    }

    return result;
}