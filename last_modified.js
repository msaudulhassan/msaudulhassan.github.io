document.addEventListener("DOMContentLoaded", function() {
    function formatDate(date) {
        // format a date as a string
        const options = { year: "numeric", month: "short", day: "numeric" };
        return date.toLocaleDateString(undefined, options);
    }

    const lastModifiedDate = new Date(document.lastModified);
    const lastModifiedElement = document.getElementById("last-modified-date");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = "Last modified: " + formatDate(lastModifiedDate);
    }
});