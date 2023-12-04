const updateFundsFormHandler = async (event) => {
  event.preventDefault();

  // Extract User Id from the URL
  const userId = window.location.pathname.split("/")[2];

  const funds = document.querySelector("#funds").value.trim();

  if (!funds) {
    alert("Please enter new amount.");
    return;
  }

  try {
    const fundsNewValue = parseFloat(funds);

    if (!isNaN(fundsNewValue)) {
      const response = await fetch(`/api/users/${userId}`, {
        method: "PUT",
        body: JSON.stringify({ funds: fundsNewValue }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("User's funds successfully updated:", data);
        document.location.replace("/profile");
      } else {
        const errorMessage = await response.json();
        console.error("Update Funds Failed:", errorMessage);
        alert("Failed to update funds.");
      }
    } else {
      alert("Invalid funds value. Please enter a valid number.");
    }
  } catch (error) {
    console.error("Error during funds update:", error);
    alert("An unexpected error occurred. Please try again later.");
  }
};

document
  .querySelector(".updateFundsForm")
  .addEventListener("submit", updateFundsFormHandler);
