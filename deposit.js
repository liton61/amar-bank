document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const depositAmount = parseFloat(depositField.value);
    
    const currentDepositAmount = document.getElementById('deposit-amount');
    const newDepositAmount = parseFloat(currentDepositAmount.innerText);
    previousDepositAmount = parseFloat(depositAmount + newDepositAmount);
    currentDepositAmount.innerText = previousDepositAmount;

    const currentBalanceAmount = document.getElementById('balance-amount');
    const newBalanceAmount = parseFloat(currentBalanceAmount.innerText);
    previousBalanceAmount = parseFloat(depositAmount + newBalanceAmount);
    currentBalanceAmount.innerText = previousBalanceAmount;


    depositField.value = '';
})