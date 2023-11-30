async function addToFavorites() {
  try {
    const productId = window.location.pathname.split("/").pop();

    const response = await fetch(`/api/productUsers/${productId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("Product added to favorites!");
      alert("Product added to your Quest Items!");
    } else {
      console.error("Failed to add product to favorites");
      alert("Failed to add product to favorites. Please try again.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An unexpected error occurred. Please try again later.");
  }
}

document
  .getElementById("favorite-item")
  .addEventListener("click", function (event) {
    event.preventDefault();

    addToFavorites();
  });

async function removeFromFavorites() {
  try {
    const productId = window.location.pathname.split("/").pop();

    const response = await fetch(`/api/productUsers/${productId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("Product removed from favorites!");
      alert("Product removed from your Quest Items!");

      window.location.href = "/profile";
    } else {
      console.error("Failed to remove product from favorites");
      alert("Failed to remove product from favorites. Please try again.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An unexpected error occurred. Please try again later.");
  }
}

document
  .getElementById("favorite-item")
  .addEventListener("click", function (event) {
    event.preventDefault();

    removeFromFavorites();
  });
