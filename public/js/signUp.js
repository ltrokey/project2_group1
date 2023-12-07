const signUpFormHandler = async (event) => {
  event.preventDefault();

  try {
    const username = document.querySelector("#username").value.trim();
    const funds = document.querySelector("#funds").value.trim();
    const password = document.querySelector("#password").value.trim();
    const confirmPassword = document
      .querySelector("#confirmPassword")
      .value.trim();

    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    const fundsValue = parseFloat(funds);

    if (!isNaN(fundsValue)) {
      const res = await fetch("/api/users/signup", {
        method: "POST",
        body: JSON.stringify({ username, funds: fundsValue, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        const data = await res.json();
        console.log("User signed up successfully:", data);
        document.location.replace("/");
      } else {
        const errorMessage = await res.json();
        console.error("Sign-up failed:", errorMessage);

        if (
          errorMessage.error &&
          errorMessage.error.includes("Username already exists")
        ) {
          alert("Username already exists. Please choose a different username.");
        } else {
          alert(
            "Failed to sign up. Please check your credentials and try again."
          );
        }
      }
    } else {
      alert("Invalid funds value. Please enter a valid number.");
    }
  } catch (error) {
    console.error("Error during sign-up:", error);
    alert("An unexpected error occurred. Please try again later.");
  }
};

document
  .querySelector(".signUpForm")
  .addEventListener("submit", signUpFormHandler);
