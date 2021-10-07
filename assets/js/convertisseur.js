const UIum1=document.querySelector('.um');
const UIum2= UIum1.cloneNode(true);
document.querySelector('.container').appendChild(UIum2);

const UIinput1=document.querySelector('#valueInput1');
const UIinput2=document.querySelector('#valueInput2');

UIinput1.onchange= calculate;
UIinput2.onchange= calculate;
UIum1.onchange = calculate;
UIum2.onchange = calculate;

function calculate () {
  const nr1 =parseFloat(UIinput1.value);
  const um1=  UIum1.querySelector('select').value;
  const um2= UIum2.querySelector('select').value;
  
  
  
switch (um1) {
  case 'kilometer':
    if(um2 ==="kilometer") {
      UIinput2.value = nr1;
    } else if (um2==="centimeter") {
    UIinput2.value=  nr1 * 100000;
    } else if (um2 === "meter"){s
    UIinput2.value= nr1 *1000;
}
    break;

  case 'meter':
    if(um2==='meter') {
      UIinput2.value=nr1;
    } else if(um2 ==='kilometer') {
      UIinput2.value= nr1/1000;
    } else if (um2 === "centimeter") {
      UIinput2.value= nr1* 100;
    }
      break;
    
    case 'centimeter':
       if(um2 ==="centimeter") {
         UIinput2.value=nr1;
       } else if(um2 === 'kilometer') {
          UIinput2.value =  nr1 * 0.00001;
       } else if (um2 ==='meter') {
         UIinput2.value= nr1 * 0.01;
       }
                break; 

       }
       }