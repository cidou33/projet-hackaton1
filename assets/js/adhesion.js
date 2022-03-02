// const errorConfirmPassword = document.querySelector(".error-confirmPasswordTm");
const form = document.querySelector("form");
const errorPhone = document.querySelector(".resultTm");

// confirmPasswordTm.addEventListener("input", () => {
//   if (passwordTm.value === confirmPasswordTm.value) {
//     errorConfirmPassword.textContent = "Les mots de passe correspondent";
//     errorConfirmPassword.style.color = "green";
//   } else {
//     errorConfirmPassword.textContent = "Les mots de passe ne correspondent pas";
//     errorConfirmPassword.style.color = "red";
//   }
// });

// emailTm.addEventListener("input", () => {
// 	console.log(emailTm.value);
// 	let mail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
// 	if (emailTm.value.match(mail)) {
// 		errorEmail.textContent = "Le mail est valide";
// 		errorEmail.style.color = "green";

// 	}else {
// 		errorEmail.textContent = "Le mail est invalide";
// 		errorEmail.style.color = "red";
// 	}
// });

phoneTm.addEventListener("input", () => {
	console.log(phoneTm.value);
	let phone = /^((\+)33|0)[1-9](\d{2}){4}$/;
	let phoneNumber = /^[0-9]{10}$/;
	if (phoneTm.value.match(/^((\+)33|0)[1-9](\d{2}){4}$/) && phoneTm.value.match(/^[0-9]{10}$/)) {
		errorPhone.textContent = "Le numéro saisi est correcte";
		errorPhone.style.color = "green";
	} else {
		errorPhone.textContent = "Le numéro saisi est incorrect";
		errorPhone.style.color = "red";
	}
})