document
  .getElementById("categoryFilter")
  .addEventListener("change", function () {
    const selectedCategoryId = this.value;
    window.location.href = `/products/${selectedCategoryId}`;
  });
