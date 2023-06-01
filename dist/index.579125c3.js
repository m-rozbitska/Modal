document.addEventListener("DOMContentLoaded", ()=>{
    (function() {
        //'use strict'
        const forms = document.querySelectorAll(".needs-validation");
        Array.from(forms).forEach(function(form) {
            form.addEventListener("submit", function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add("was-validated");
            }, false);
        });
    })();
}); // $(function () {
 // 	$("#btnSubmit").on("click", function (e) {
 // 		let form = $("#formValidate")[0];
 // 		let isValid = form.checkValidity();
 // 		if (!isValid) {
 // 			e.preventDefault();
 // 			e.stopPropagation();
 // 		}
 // 		form.classList.add('was-validated');
 // 		return false;
 // 	});
 // });
 // (function() {
 // 	window.addEventListener('load', function() {
 // 	  let forms = document.getElementsByClassName('needs-validation');
 // 	  let validation = Array.prototype.filter.call(forms, function(form) {
 // 		 form.addEventListener('submit', function(event) {
 // 			if (form.checkValidity() === false) {
 // 			  event.preventDefault();
 // 			  event.stopPropagation();
 // 			}
 // 			form.classList.add('was-validated');
 // 		 }, false);
 // 	  });
 // 	}, false);
 //  })();
 // (function() {
 // 	window.addEventListener('load', function() {
 // 	  let forms = document.getElementsByClassName('needs-validation');
 // 	  let validation = Array.prototype.filter.call(forms, function(form) {
 // 		 form.addEventListener('submit', function(event) {
 // 			if (form.checkValidity() === false) {
 // 			  event.preventDefault();
 // 			  event.stopPropagation();
 // 			}
 // 			form.classList.add('was-validated');
 // 		 }, false);
 // 	  });
 // 	}, false);
 //  })();

//# sourceMappingURL=index.579125c3.js.map
