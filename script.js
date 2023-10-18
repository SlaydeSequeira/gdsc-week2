// Function to add a new artwork div
function addArtwork() {
    var imageUrl = prompt("Enter the image URL:");
    var description = prompt("Enter the artwork description:");

    if (imageUrl && description) {

        var newArtworkDiv = document.createElement("div");

        newArtworkDiv.setAttribute("data-description", description);

        var image = document.createElement("img");
        image.src = imageUrl;

        newArtworkDiv.appendChild(image);

        var gallery = document.getElementById("gallery");
        gallery.appendChild(newArtworkDiv);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Get the button element
    var addArtworkButton = document.getElementById("add-artwork-button");

    // Add an event listener to the button
    addArtworkButton.addEventListener("click", addArtwork);
});
document.getElementById('search-button').addEventListener('click', function () {
    const searchTerm = document.getElementById('search-input').value;

    // In a real application, you would make an AJAX request to a server to fetch artist information based on the search term.
    // For this example, we'll assume you have an array of artist data.
    const artistData = [
        { name: "Artist 1", bio: "Bio of Artist 1" },
        { name: "Artist 2", bio: "Bio of Artist 2" },
        { name: "Artist 3", bio: "Bio of Artist 3" },
        { name: "Artist 4", bio: "Bio of Artist 4" },
        { name: "Artist 5", bio: "Bio of Artist 5" }
    ];

    const artist = artistData.find(a => a.name.toLowerCase() === searchTerm.toLowerCase());

    if (artist) {
        const artistInfo = `<h2>${artist.name}</h2><p>${artist.bio}</p>`;
        document.getElementById('artist-info').innerHTML = artistInfo;

        // Redirect to a new page to display artist info
        window.location.href = `artist.html?name=${encodeURIComponent(artist.name)}`;
    } else {
        document.getElementById('artist-info').innerHTML = "Artist not found.";
    }
});
