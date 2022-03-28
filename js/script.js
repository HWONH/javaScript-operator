// 01. 산술연산자
document.write("<h2>연산자</h2>");
document.write("<h3>산술연산자 -> +, -, *, /, %</h3>");
var $no_01 = 12;
var $no_02 = 5;
var $result;
$result = $no_01 + $no_02;
document.write($result, "<br>");
$result = $no_01 - $no_02;
document.write($result, "<br>");
$result = $no_01 * $no_02;
document.write($result, "<br>");
$result = $no_01 / $no_02;
document.write($result, "<br>");
$result = $no_01 % $no_02;
document.write($result, "<br>");

// 남성과 여성을 구분하는 방법 000000-0......
/* 
    var $init_num = ?
    $init_num % 2 = 0 또는 1
*/

document.write("<h3>문자 결합 연산자</h3>");
var $str_01 = "빙그레 ";
var $str_02 = "바나나 우유 ";
var $num_01 = 500;
var $str_03 = "ml";
var $num_02 = 1;
var $num_03 = 1;

var $result = $str_01 + $str_02 + $num_01 + $str_03 + $num_02 + $num_03; // 문자형 데이터가 하나라도 있으면, 문자형 데이터가 되므로 내부에 숫자형 데이터가 연속적으로 나오더라도 연산되지 않는다
document.write("내가 편의점에서 고른 상품은 " + $result, "<br>");
document.write("문자 결합연산자에 의해 변경된 형태 : " + typeof $result, "<br>"); // string
// 01) 문자형 데이터 + 문자형 데이터 => 문자형데이터
// 02) 문자형 데이터 + 숫자형 데이터 => 문자형데이터

document.write("<h3>복합 대입 연산자</h3>");
var $no_01 = 12;
var $no_02 = 6;
$no_01 += $no_02; // $no_01 = $no_01 + $no_02;  12 + 6 = 18 => $no_01
document.write($no_01, "<br>"); // 18
$no_01 -= $no_02; // $no_01 = $no_01 - $no_02;  18 - 6 = 12 => $no_01
document.write($no_01, "<br>"); // 12
$no_01 *= $no_02; // $no_01 = $no_01 * $no_02;  12 * 6 = 72 => $no_01
document.write($no_01, "<br>"); // 72
$no_01 /= $no_02; // $no_01 = $no_01 / $no_02;  72 / 6 = 12 => $no_01
document.write($no_01, "<br>"); // 12
$no_01 %= $no_02; // $no_01 = $no_01 % $no_02;  12 % 6 = 0 => $no_01
document.write($no_01, "<br>"); // 0

// 복합 대입 연산자를 활용한 테이블 구성하기
var $t = "<table border='1'>";
$t += "<tr>";       // <table border='1'><tr>   $t = $t + "<tr>"    <table border='1'> + <tr> => <table border='1'><tr>
$t += "<td>1</td>"; // <table border='1'><tr><td>1</td>
$t += "<td>2</td>"; // <table border='1'><tr><td>1</td><td>2</td>
$t += "<td>3</td>"; // <table border='1'><tr><td>1</td><td>2</td><td>3</td>
$t += "</tr>";      // <table border='1'><tr><td>1</td><td>2</td><td>3</td></tr>
$t += "<tr>";       // <table border='1'><tr><td>1</td><td>2</td><td>3</td></tr><tr>
$t += "<td>4</td>"; // <table border='1'><tr><td>1</td><td>2</td><td>3</td></tr><tr><td>4</td>
$t += "<td>5</td>"; // <table border='1'><tr><td>1</td><td>2</td><td>3</td></tr><tr><td>4</td><td>5</td>
$t += "<td>6</td>"; // <table border='1'><tr><td>1</td><td>2</td><td>3</td></tr><tr><td>4</td><td>5</td><td>6</td>
$t += "</tr>";      // <table border='1'><tr><td>1</td><td>2</td><td>3</td></tr><tr><td>4</td><td>5</td><td>6</td></tr>
$t += "</table>"    // <table border='1'><tr><td>1</td><td>2</td><td>3</td></tr><tr><td>4</td><td>5</td><td>6</td></tr></table>

document.write($t, "<br>");
console.log($t);

document.write("<h3>증감 연산자 - 단항연산자</h3>");
var $no = 12;
document.write($no, "<br>");
$no++; // $no = $no + 1;
document.write($no, "<br>"); // 13
++$no; // $no = $no + 1;
document.write($no, "<br>"); // 14
$no--; // $no = $no - 1;
document.write($no, "<br>"); // 13
--$no; // $no = $no - 1;
document.write($no, "<br>"); // 12

// 증감연산자 - 선행처리 vs 후행처리
var $a = 10;
var $b;
$b = ++$a; // 선행처리 : 먼저 증가한 값을 $b라는 변수에 저장
document.write("$a의 결과값 : " + $a + ", $b의 결과값 : " + $b, "<br>");
var $c = 10;
var $d;
$d = $c++; // 후행처리 : 1이 증가되기 직전의 값을 $d라는 변수에 저장, 본인인 $c는 1이 증가됨
document.write("$c의 결과값 : " + $c + ", $d의 결과값 : " + $d, "<br>");

var $f = 10;
$f = $f++;
document.write($f, "<br>"); // 10

var $n_01 = 14;
var $rst_01;
$n_01++;
document.write("$n_01의 값 : " + $n_01, "<br>"); // 15
$rst_01 = ++$n_01;
document.write("$n_01의 값 : " + $n_01 + ", $rst_01의 값 : " + $rst_01, "<br>"); // 16
$rst_01 = $n_01++;
document.write("$n_01의 값 : " + $n_01 + ", $rst_01의 값 : " + $rst_01, "<br>"); // 17, 16

document.write("<h3>비교연산자 - true 또는 false</h3>");
var $p = 10; // 숫자형 데이터 10
var $q = 12; // 숫자형 데이터 10
var $r = "10"; // 문자형 데이터 10
var $result;

$result = $p < $q
document.write($result, "<br>"); // true
$result = $p == $r // 10 = "10"
document.write($result, "<br>"); // 최종 결과값이 동일한 경우(브라우저상에서 값이 차이가 없을 경우) true
$result = $p === $r // 10 ≠ "10"
document.write($result, "<br>"); // 데이터의 형식까지 검사하였을 때, 결과 값이 같더라도 형태가 다를 경우 false

// 논리연산자
document.write("<h3>논리 연산자 - or 연산자, and 연산자, 부정 연산자 - true 또는 false</h3>");
var $s = 10;
var $t = 12;
var $u = 14;
document.write($s > $t || $t < $u, "<br>"); // false ll true => true (or검색 - 구글검색)
document.write($s > $t && $t < $u, "<br>"); // false && true => false (and검색 - 하나투어검색)

var $v = $u==13;
document.write($v, "<br>"); // false
document.write(!($v), "<br>"); // true

// 삼항 조건 연산자 - 조건식? 실행문1: 실행문2;
document.write("<h3>삼항 조건 연산자 - 조건식의 true 또는 false에 따른 실행문을 구별</h3>");
var $a = 30;
var $b = 27;
$a < $b ? document.write("식이 옳군요", "<br>") : document.write("식이 잘못되었군요", "<br>"); // false

// 호스트(홀수)와 게스트(짝수)
var $who = 3;
$who%2 == 0? document.write("게스트", "<br>") : document.write("호스트", "<br>");
// 고객에게 할당된 번호가 짝수일 경우, 게스트의 메뉴 항목을 보여준다
// 고객에게 할당된 번호가 홀수일 경우, 호스트의 메뉴 항목을 보여준다

// 02. 
// 03.
// 04.
// 05.