const form = document.getElementById("registrationForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;
  let name = document.getElementById("studentName").value.trim();
  let roll = document.getElementById("rollNumber").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let faculty = document.getElementById("faculty").value;
  let terms = document.getElementById("terms").checked;
  let nameErr = document.getElementById("nameError");
  let rollErr = document.getElementById("rollError");
  let emailErr = document.getElementById("emailError");
  let phoneErr = document.getElementById("phoneError");
  let facultyErr = document.getElementById("facultyError");
  let termsErr = document.getElementById("termsError");
  document.querySelectorAll(".error").forEach((e) => (e.innerText = ""));

  if (name === "") {
    nameErr.innerText = "Name required";
    valid = false;
  }
  if (!/^[0-9]+$/.test(roll)) {
    rollErr.innerText = "Invalid roll number";
    valid = false;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailErr.innerText = "Invalid email";
    valid = false;
  }
  if (!/^[0-9]{10}$/.test(phone)) {
    phoneErr.innerText = "Phone must be 10 digits";
    valid = false;
  }
  if (faculty === "") {
    facultyErr.innerText = "Select faculty";
    valid = false;
  }
  if (!terms) {
    termsErr.innerText = "Accept terms";
    valid = false;
  }
  if (valid) {
    document.getElementById("successMessage").innerText =
      "Registration Successful!";
    form.reset();
  }
});
