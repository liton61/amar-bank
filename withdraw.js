document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmount = parseFloat(withdrawField.value);
    
    const totalWithdrawAmount = document.getElementById('total-withdraw');
    const newWithdrawAmount = parseFloat(totalWithdrawAmount.innerText);
    previousWithdrawAmount = parseFloat(withdrawAmount + newWithdrawAmount);
    totalWithdrawAmount.innerText = previousWithdrawAmount;

    const totalBalanceAmount = document.getElementById('balance-amount');
    const newTotalBalanceAmount = totalBalanceAmount.innerText;
    currentBalanceAmount = newTotalBalanceAmount - withdrawAmount;
    totalBalanceAmount.innerText = currentBalanceAmount; 


    withdrawField.value = '';
})