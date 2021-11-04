const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

var firstcheck_flag = 0;
var firstNumer = 0;
var secondNum = 0;
var Check_operator = '+';
var Check_result = 0;
var decimal_flag = 0;

function calculate(n1, operator, n2) {
  let result = 0;
  //console.log("calculate call");
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  
        switch(operator)
            {
              case '+' : 
                  
                  result =  n1 + n2;
                  
                break;
              case '-' :
                result =  n1 - n2;
                  
                break;
              case '*' :
                result =  n1 * n2;
                  
                break;
              case '/' :
                result =  n1 / n2
                  
                break;
              
                    
            }
            
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
  return String(result);
}

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드(Line 19 - 21)는 수정하지 마세요.

  if (target.matches('button')) {
    // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.
    // 클릭된 HTML 엘리먼트가 button이면
    if (action === 'number') {
      // 그리고 버튼의 클레스가 number이면
      // 아래 코드가 작동됩니다.
      console.log('숫자 ' + buttonContent + ' 버튼');
      
      // 첫 번째 칸에 입력된 내용이 있는지, 없는지 구분해야 합니다.
      // 첫 번째 칸에 입력된 내용이 0(기본값)이 아니라면, 이미 숫자가 입력된 상태로 볼 수 있습니다.
      
      // 첫 번째 숫자가 0이 아닌 경우, 버튼을 클릭하면 두 번째 칸에 버튼에 적혀있는 숫자를 입력합니다.
      
      
        if(firstcheck_flag === 0)
        { 
          
            //if decimal
            if(decimal_flag == 0)
            {
              firstNumer = buttonContent;
              // firstNum *= 1;
              console.log(firstNumer);
            }else
            {
              firstNumer = firstNumer + buttonContent;
              //console.log(firstNum);
            }
            document.querySelector('.calculator__operend--left').textContent = firstNumer;
          
        } else{
          // if decimal 

          if(decimal_flag == 0)
            {
              secondNum = buttonContent;
              console.log(secondNum + " flag 1 ");
            }else
            {
              secondNum = secondNum + buttonContent;
              //console.log(secondNum);
            }
          document.querySelector('.calculator__operend--right').textContent = secondNum;
          
        }

      previousKey = buttonContent;
      
      
      }

    if (action === 'operator') {
      console.log('연산자 ' + buttonContent + ' 버튼');
      // 기호 표시
      document.querySelector('.calculator__operator').textContent = buttonContent;
      decimal_flag = 0;
      firstcheck_flag = 1;

      
            // 기호를 구분한다
            switch(buttonContent)
            {
              case '+' : 
                Check_operator = '+';
                
                break;
              case '-' :
                Check_operator = '-';
                
                break;
              case '*' :
                Check_operator = '*';
                
                break;
              case '/' :
                Check_operator = '/';
                
                break;
              
                    
            }
            
    }

    if (action === 'decimal') {
      console.log('소수점 버튼');
      decimal_flag = 1;
      
      if(firstcheck_flag == 0)
      {
          firstNumer = firstNumer + '.';
          console.log(firstNumer);
      }else
      {
          secondNum = secondNum + '.';
          console.log(secondNum);
      }

      
    }

    if (action === 'clear') {
      console.log('초기화 버튼');

      //변수 초기화
      firstcheck_flag = 0;
      decimal_flag = 0;
      firstNumer = 0;
      secondNum = 0;
      Check_operator = '+';
      Check_result = 0;

      //표시 초기화
      document.querySelector('.calculator__operend--left').textContent = firstNumer;
      document.querySelector('.calculator__operator').textContent = Check_operator;
      document.querySelector('.calculator__operend--right').textContent = secondNum;
      document.querySelector('.calculator__result').textContent = Check_result;
      
    }

    if (action === 'calculate') {
      // 계산 후 출력

      firstNumer *= 1;
      secondNum *= 1;

      Check_result = calculate(firstNumer, Check_operator , secondNum );
      
      /*
      switch(Check_operator)
      {
        case '+' : 
            
            Check_result =  firstNumer + secondNum;
            
          break;
        case '-' :
            Check_result = firstNumer - secondNum;
            
          break;
        case '*' :
            Check_result = firstNumer * secondNum;
            
          break;
        case '/' :
            Check_result = firstNumer / secondNum;
            
          break;
        
              
      }
        */
      document.querySelector('.calculator__result').textContent = Check_result;
      
      // 
      console.log('계산 버튼 ' + Check_result);
      
    }
  }
});


// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, operatorForAdvanced, previousKey, previousNum;

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.

  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  if (target.matches('button')) {
    if (action === 'number') {
      
    }
    if (action === 'operator') {}
    if (action === 'decimal') {}
    if (action === 'clear') {}
    if (action === 'calculate') {}
  }

});
