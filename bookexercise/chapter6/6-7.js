let str = prompt('숫자 입력', '0')
if (isFinite(str)) {
  let n = parseInt(str)
  if (n > 0) {
    // 양수인 경우에만
    let least = n % 10 // 1의 자리수
    let most = 0
    while (n != 0) {
      most = n % 10
      n = Math.floor(n / 10)
    }
    if (most == least) document.write(str + ': 같음')
    else document.write(str + ': 다름')
  } else document.write(str + ': 음수나 0은 다루지 않습니다.')
} else {
  document.write(str + ': 숫자가 아닙니다.')
}
