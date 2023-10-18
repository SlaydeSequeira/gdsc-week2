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
        document.getElementById('artist-info').innerHTML = "Artist not found. Try \"Artist 1\"";
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const artworkItems = document.querySelectorAll('.artwork img');

    artworkItems.forEach((item) => {
        item.addEventListener('click', function () {
            const index = item.getAttribute('data-index');
            // Redirect to a new page for viewing and rating the image
            window.location.href = `artwork.html?index=${index}`;
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const index = urlParams.get('index');

    const artworkData = {
        1: {
            name: "Artwork 1",
            imageUrl: "https://th.bing.com/th/id/OIP.2C4ap62_UtK26zHglUvHiwHaGK?w=215&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            description: "Abstract artwork with vibrant colors and unique patterns. Created by a local artist.",
        },
        2: {
            name: "Artwork 2",
            imageUrl: "https://th.bing.com/th/id/OIP.uBf29i5DQvvOyjxmHNZDKgHaFX?w=244&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            description: "A serene landscape painting featuring a tranquil lake surrounded by mountains.",
        },
        3: {
            name: "Artwork 3",
            imageUrl: "https://th.bing.com/th/id/OIP.uBf29i5dQvvOyjxmHNZDKgHaFX?w=244&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            description: "A modern sculpture that combines various materials to create a unique 3D art piece.",
        },
        4: {
            name: "Artwork 4",
            imageUrl: "https://th.bing.com/th/id/OIP.uBf29i5DQvvOyjxmHNZDKgHaFX?w=244&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            description: "A still life painting showcasing a beautiful arrangement of flowers in a vase.",
        },
        5: {
            name: "Artwork 5",
            imageUrl: "https://th.bing.com/th/id/OIP.uBf29i5DQvvOyjxmHNZDKgHaFX?w=244&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            description: "A unique digital art piece that explores the intersection of technology and nature.",
        },
        6: {
            name: "Artwork 6",
            imageUrl: "https://th.bing.com/th/id/OIP.uBf29i5DQvvOyjxmHNZDKgHaFX?w=244&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            description: "An abstract sculpture with intricate geometric shapes and a metallic finish.",
        },
    };

    if (artworkData[index]) {
        const artwork = artworkData[index];

        document.querySelector('h1').textContent = artwork.name;
        document.querySelector('img').src = artwork.imageUrl;
        document.querySelector('p:nth-of-type(2)').textContent = `Artwork Description: ${artwork.description}`;
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const index = urlParams.get('index');

    const artworkData = {
        1: {
            name: "Artwork 1",
            imageUrl: "https://th.bing.com/th/id/OIP.2C4ap62_UtK26zHglUvHiwHaGK?w=215&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            description: "Abstract artwork with vibrant colors and unique patterns. Created by a local artist.",
        },
        2: {
            name: "Artwork 2",
            imageUrl: "https://th.bing.com/th/id/OIP.uBf29i5DQvvOyjxmHNZDKgHaFX?w=244&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            description: "A serene landscape painting featuring a tranquil lake surrounded by mountains.",
        },
        // Add data for other artworks here
    };

    if (artworkData[index]) {
        const artwork = artworkData[index];

        document.querySelector('h1').textContent = artwork.name;
        document.querySelector('#artwork-image').src = artwork.imageUrl;
        document.querySelector('#artwork-description').textContent = `Artwork Description: ${artwork.description}`;
    }
});
