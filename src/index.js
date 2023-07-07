document.addEventListener("DOMContentLoaded", () => {

	const firstNumber = document.getElementById('number1');
	const secondNumber = document.getElementById('number2');
	const result = document.getElementById('result');
	const calculator = document.querySelector('#calculator');

	calculator.addEventListener('click', function(event) {
		let target = event.target;
		let totalSum;


		if(target.className == "add") {
			totalSum = Number(firstNumber.value)+Number(secondNumber.value);

			result.insertAdjacentHTML('afterbegin', `
			<tr> 
				<td>Result: </td>
				<td>${totalSum}</td>
			</tr>  
			`);

			navigator.clipboard.writeText(totalSum)
			.then(() => {
				alert("Text copied to clipboard!")
			});

			// totalSumPreventDefault();
			firstNumber.value = '';
			secondNumber.value = '';
		};

		if(target.className == "substract") {
			totalSum = Number(firstNumber.value)-Number(secondNumber.value);

			result.insertAdjacentHTML('afterbegin', `
			<tr> 
				<td>Result: </td>
				<td>${totalSum}</td>
			</tr>  
			`);

			navigator.clipboard.writeText(totalSum)
			.then(() => {
				alert("Text copied to clipboard!")
			});

			firstNumber.value = '';
			secondNumber.value = '';

			// totalSumpreventDefault();
		};

		if(target.className == "multiple") {
			totalSum = Number(firstNumber.value)*Number(secondNumber.value);

			result.insertAdjacentHTML('afterbegin', `
			<tr> 
				<td>Result: </td>
				<td>${totalSum}</td>
			</tr>  
			`);

			firstNumber.value = '';
			secondNumber.value = '';
			// totalSumpreventDefault();
		};

		if(target.className == "divide") {
			totalSum = Number(firstNumber.value)/Number(secondNumber.value);

			result.insertAdjacentHTML('afterbegin', `
			<tr> 
				<td>Result: </td>
				<td>${totalSum}</td>
			</tr>  
			`);

			navigator.clipboard.writeText(totalSum)
			.then(() => {
				alert("Text copied to clipboard!")
			});

			firstNumber.value = '';
			secondNumber.value = '';
			// totalSumpreventDefault();
		};
	});	
});







