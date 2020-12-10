// @Title: Programmers > Level 1 > 연습문제 > 하샤드 수  
// @Source: https://programmers.co.kr/learn/courses/30/lessons/12943
// @Date: 2020-12-10 Thu
// @Status: Solved✅

/* 
문제 설명 
양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 
예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 
자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

제한 조건 
* x는 1 이상, 10000 이하인 정수입니다.
*/

// Solution (0.7ms)
function solution(x) {
    var sum = (x+"").split("").reduce((a,b) => parseInt(a)+parseInt(b));
    return (x%sum===0? true : false);
}

// 다른 사람 풀이 (재귀, 0.7ms)
function solution2(x,i=0,sum=0) {
    return String(x).length==i?x%sum==0:solution(x,i+1,sum + String(x)[i]*1);
}

// 다른 사람 풀이 (Math.floor(x/10), 0.5ms, Fastest)
function solution3(x) {
    let num = x;
    let sum = 0;
    do {
        sum += x%10;
        x = Math.floor(x/10);
    } while (x>0);

    return !(num%sum);
}