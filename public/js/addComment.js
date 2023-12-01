const addCommentHandler = async (event) => {
  event.preventDefault();

  const commentContent = document.querySelector("#commentContent").value.trim();
  const product_id = document.querySelector("input[name='product_id']").value;

  if (!commentContent) {
    alert("Comment cannot be empty!");
    return;
  }

  console.log("\n------commentContent---------\n", commentContent);
  console.log("\n------Product ID---------\n", product_id);

  try {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ product_id, content: commentContent }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("\n------Response---------\n", response);

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
};

document
  .querySelector(".commentForm")
  .addEventListener("submit", addCommentHandler);
