var fname, lname, email, phone, address;
function onSubmitClick() {
	var firstname = document.getElementById("firstname").value;
	var lastname = document.getElementById("lastname").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var address = document.getElementById("address").value;

	if(typeof(Storage) !== "undefined") {
		localStorage.setItem("fname", firstname);
		localStorage.setItem("lname", lastname);
		localStorage.setItem("email", email);
		localStorage.setItem("phone", phone);
		localStorage.setItem("address", address);
	}

	alert("Submitted Successfully");
	if(typeof(Storage) !== "undefined") {
		fname = localStorage.getItem("fname");
		lname = localStorage.getItem("lname");
		email = localStorage.getItem("email");
		phone = localStorage.getItem("phone");
		address = localStorage.getItem("address");

		document.getElementById("modal_firstname").value = fname;
		document.getElementById("modal_lastname").value = lname;
		document.getElementById("modal_email").value = email;
		document.getElementById("modal_phone").value = phone;
		document.getElementById("modal_address").value = address;
	}

	document.getElementById("registration-form").reset();
}

function onSaveChangesClick() {
	var firstname = document.getElementById("modal_firstname").value;
	var lastname = document.getElementById("modal_lastname").value;
	var email = document.getElementById("modal_email").value;
	var phone = document.getElementById("modal_phone").value;
	var address = document.getElementById("modal_address").value;

	if(typeof(Storage) !== "undefined") {
		localStorage.setItem("fname", firstname);
		localStorage.setItem("lname", lastname);
		localStorage.setItem("email", email);
		localStorage.setItem("phone", phone);
		localStorage.setItem("address", address);
	}

	alert("Updated Successfully");
	if(typeof(Storage) !== "undefined") {
		fname = localStorage.getItem("fname");
		lname = localStorage.getItem("lname");
		email = localStorage.getItem("email");
		phone = localStorage.getItem("phone");
		address = localStorage.getItem("address");

		document.getElementById("modal_firstname").value = fname;
		document.getElementById("modal_lastname").value = lname;
		document.getElementById("modal_email").value = email;
		document.getElementById("modal_phone").value = phone;
		document.getElementById("modal_address").value = address;
	}

	$(document).ready(function() {
		$('#myModal').modal('hide');
	}) 
}

