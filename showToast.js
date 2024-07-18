export function showToast(operation, id) {
    const toast = document.createElement("div");
    toast.classList.add("toast");

    // Set the text content of the toast based on the operation
    if (operation === "add") {
        toast.textContent = `Product with ID ${id} has been added.`;
    } else {
        toast.textContent = `Product with ID ${id} has been deleted.`;
    }

    // Append the toast to the body
    document.body.appendChild(toast);

    // Set a timeout to remove the toast after a certain duration (e.g., 3 seconds)
    setTimeout(() => {
        // Remove the toast from the DOM
        toast.remove();
    }, 2000); // 3000 milliseconds = 3 seconds
};
