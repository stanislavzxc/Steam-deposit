document.getElementById('pay').onkeypress = function(e) {
   var charCode = (e.which) ? e.which : event.keyCode;
   if (charCode > 31 && (charCode < 48 || charCode > 57)) {
     e.preventDefault();
   }
 };
//  


//  
 window.onload = function() {
  var myInput = document.getElementsByClassName('form__field');
myInput.onpaste = function(e) {
e.preventDefault();
}
// 
}

// 
let gett = document.querySelector('[name="gett"]');
function update(x){
   document.getElementById("pay").value=x;
  gett.textContent = x;   
}
// 
function pay(){
  let login = document.getElementById("login").value;
  let pay = document.getElementById("pay").value;
  let email = document.getElementById("email").value;
  let check = document.getElementById("berries_1").checked;
  if (login === '') {
   alert("Вы не ввели логин аккаунта steam");
  }
 else if (pay === ''){
   alert("Введите сумму пополнения");
  }
 else if (email === ''){
   alert("Введите ваш email");
  }
  else if (check == false){
   alert("подтвердите что вы указали верный логин, нажав на галочку");
  }
  else if (pay < 100) {
   alert("Минимальная сумма пполнения - 100 рублей");
  }
  else if (pay > 15000) {
    alert("Максимальная сумма пополнения - 15000 рублей");
  }
}
