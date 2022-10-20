const numberAInput = document.querySelector('#number-a');
const numberBInput = document.querySelector('#number-b');
const form = document.querySelector('form');
const resultDiv = document.querySelector('#result');

function setResult(text, color) {
    resultDiv.innerText = text;
    resultDiv.style.border = `1px solid ${color}`
}

form.addEventListener('submit', async event => {
    event.preventDefault();

    const numberA = Number(numberAInput.value);
    const numberB = Number(numberBInput.value);

    setResult('Loading...', 'transparent');

   const res = await fetch('/calc/check', {
        method: 'POST',
        body: JSON.stringify({
            numberA,
            numberB
        }), headers: {
            'Content-Type': 'application/json',
        },
    });

   const data = await res.json();

   if (data.divider) {
       setResult('Number B is divider of number A', 'green')
   } else {
       setResult('Number B is NOT divider of number A', 'red')
   }
})
