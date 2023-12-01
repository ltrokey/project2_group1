async function addCommentHandler() {
  const commentContent = document.querySelector("#commentContent").value.trim();
  const product_id = document.querySelector("input[name='product_id']").value;

  if (!commentContent) {
    alert("Comment cannot be empty!");
    return;
  }

  try {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ product_id, content: commentContent }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Comment added successfully:", data);
      window.location.reload();
    } else {
      const errorMessage = await response.json();
      console.error("Failed to create comment:", errorMessage);
      alert("Failed to create comment. Please try again.");
    }
  } catch (error) {
    console.error("Error during comment creation:", error);
    alert("An unexpected error occurred. Please try again later.");
  }
}

const addCommentButton = document.querySelector(".commentForm");

if (addCommentButton) {
  addCommentButton.addEventListener("submit", function (event) {
    event.preventDefault();
    addCommentHandler();
  });
}
