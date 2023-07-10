document.addEventListener("DOMContentLoaded", () => {

	const firstNumber = document.querySelector('#number1');
	const secondNumber = document.querySelector('#number2');
	const result = document.querySelector('#result');
	const calculator = document.querySelector('#calculator');
	let validateOne = document.querySelector('.validateOne');
	let validateTwo = document.querySelector('.validateTwo');
	const regex =  /[^\d.]\.(?=.*\.)/g;
	const subst = ``;
	
	validateOne.addEventListener('keyup', function() {
		const str = this.value;
		const finish = str.replace(regex, subst);
		this.value = finish;
	});

	// validateTwo.addEventListener('keyup', function() {
	// 	this.value = this.value.replace(/[^\d\.]/g, "")
	// })

	calculator.addEventListener('click', function(event) {
		let target = event.target;
		let totalSum;


		if(target.className == "add") {
			totalSum = Number(firstNumber.value)+Number(secondNumber.value);


			navigator.clipboard.writeText(totalSum)
			.then(() => {
				alert("Text copied to clipboard!")
			});

			
			result.insertAdjacentHTML('afterbegin', `
			<tr> 
				<td>Result: </td>
				<td>${totalSum}</td>
			</tr>  
			`);
			
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
		};
	});	
});







