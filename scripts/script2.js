let gett = document.querySelector('[name="gett"]');
let sett = document.querySelector('[name="sett"]');
let num = sett[0];

sett.addEventListener("input", function () {
    gett.textContent = sett.value;
    if (sett.value.length == 0) {
        gett.textContent = 0;
    }
   
    
  });
//   
  document.addEventListener("paste", function(e) {
    e.preventDefault();
    var text = e.clipboardData.getData("text/plain");
    // не делаем ничего
})
// 
var inputField = document.getElementById('pay');

// Перехватываем событие вставки текста
inputField.addEventListener('paste', function(e) {
    // Отменяем действие по умолчанию
    e.preventDefault();
    
    // Получаем текст из буфера обмена и очищаем его от букв
    var pastedText = (e.clipboardData || window.clipboardData).getData('text');
    var strippedText = pastedText.replace(/[a-zA-Z]/g, '');

    // Вставляем очищенный текст обратно
    document.execCommand('insertText', false, strippedText);
});
// 
document.getElementById('pay').addEventListener('input', function(e) {
    this.value = this.value.replace(/\D/g, ''); // Заменяем все символы, кроме цифр, на пустую строку
});
// 
document.getElementById('pay').addEventListener('paste', function(e) {
    e.preventDefault();
    var clipboardData = e.clipboardData || window.clipboardData;
    var pastedData = clipboardData.getData('text');
    this.value = pastedData.replace(/\D/g, ''); // Заменяем все символы, кроме цифр, на пустую строку
});
// 
document.addEventListener("copy", function(event){
    event.preventDefault();
  });
//   
function validateInput(event) {
    const inputField = event.target;
    const inputValue = inputField.value;
    const cleanValue = inputValue.replace(/[^0-9]/g, '');
    if (inputValue !== cleanValue) {
        inputField.value = cleanValue;
    }
}