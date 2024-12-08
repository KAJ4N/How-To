document.addEventListener("DOMContentLoaded", () => {
    const howToList = document.querySelector(".how-to-list ul");

    // Example data - replace with API call
    const exampleQueries = [
        "How to cook pasta?",
        "How to lose weight?",
        "How to fix a flat tire?",
        "How to plant a tree?",
        // Add more items dynamically...
    ];

    // Populate the list
    exampleQueries.forEach(query => {
        const listItem = document.createElement("li");
        listItem.textContent = query;
        howToList.appendChild(listItem);
    });
});
