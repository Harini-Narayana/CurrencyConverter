const amountInput=document.querySelector('.input-box');
const fromCurrency=document.getElementById('fromcurrency');
const toCurrency=document.getElementById('currency');
const convertBtn=document.querySelector('.switch');
const resultBox=document.querySelector('.result');

convertBtn.addEventListener("click",()=>{
    const amount=parseFloat(amountInput.value);
    const from=fromCurrency.value;
    const to=toCurrency.value;

    const url=`https://v6.exchangerate-api.com/v6/976a6b874e1c386d65f3e11c/latest/${from}`
    fetch(url)
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            const rate=data.conversion_rates[to];
            const convertedAmount=amount*rate;
            resultBox.value=convertedAmount.toFixed(3);
        })
        .catch(error=>{
            console.error("Something went wrong:",error);
        })
});
