// public/js/favoriteItem.js

async function addToFavorites() {
  try {
    const productId = window.location.pathname.split("/").pop();

    const response = await fetch(`/api/productUsers/${productId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("favorite", response.ok);
    if (response.ok) {
      if (response.status == 204) {
        console.log("Quest item removed!");
        alert("Quest item removed!");
        window.location.href = "/profile";
      } else if (response.status == 201) {
        console.log("Quest item added!");
        alert("Quest item added!");
        window.location.href = "/";
      }
    } else {
      console.error("Failed to add product to favorites");
      alert("Failed to add product to favorites. Please try again.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An unexpected error occurred. Please try again later.");
  }
}

const favoriteItemButton = document.getElementById("favorite-item");

if (favoriteItemButton) {
  const loggedIn = favoriteItemButton.getAttribute("data-logged-in");

  if (loggedIn) {
    favoriteItemButton.addEventListener("click", function (event) {
      event.preventDefault();
      addToFavorites();
    });
  }
}
