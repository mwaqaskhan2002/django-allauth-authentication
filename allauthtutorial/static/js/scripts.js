// Show/Hide Password 
function togglePassword(spanElement) {
  const container =
    spanElement.closest(".input-group") ||
    spanElement.closest(".position-relative");
  
    const passwordField = container.querySelector("input");
  const icon = spanElement.querySelector("i");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    icon.classList.replace("ri-eye-off-fill", "ri-eye-fill");
    icon.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
  } else {
    passwordField.type = "password";
    icon.classList.replace("ri-eye-fill", "ri-eye-off-fill");
    icon.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
  }
}

//Auto dismiss alerts after 3 seconds
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelectorAll(".alert").forEach(function (alert) {
      // Bootstrap ka fade out
      alert.classList.remove("show");
      alert.classList.add("fade");

      // Animation complete hone ke baad remove karo
      setTimeout(function () {
        alert.remove();
      }, 500); // 0.5 second fade animation
    });
  }, 3000); // 3 seconds
});