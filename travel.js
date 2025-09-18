// This ensures the code runs only after the entire page has loaded.
document.addEventListener('DOMContentLoaded', () => {

    // --- Search Bar Functionality ---
    const searchInput = document.querySelector('.search-container input');
    const searchBtn = document.querySelector('.search-btn');
    const clearBtn = document.querySelector('.clear-btn');
    const searchValidation = document.querySelector('.search-validation');

    // Hide the validation text by default to start with a clean page.
    if (searchValidation) {
        searchValidation.style.display = 'none';
    }

    // Handle the 'Search' button click.
    if (searchBtn) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevents the form from submitting and reloading the page.
            const searchQuery = searchInput.value.trim();

            if (searchQuery === "") {
                // Show the validation message if the search box is empty.
                if (searchValidation) {
                    searchValidation.style.display = 'block';
                }
            } else {
                // Hide the message and give a success alert.
                if (searchValidation) {
                    searchValidation.style.display = 'none';
                }
                alert(`Searching for: "${searchQuery}".`);
                console.log(`User searched for: ${searchQuery}`);
            }
        });
    }

    // Handle the 'Clear' button click.
    if (clearBtn) {
        clearBtn.addEventListener('click', (e) => {
            e.preventDefault();
            searchInput.value = ''; // Clears the input field.
            if (searchValidation) {
                searchValidation.style.display = 'none';
            }
        });
    }

    // --- Main Page & About Us Button Functionality ---
    // These buttons will show an alert to simulate an action.

    const bookNowBtn = document.querySelector('.book-now-btn');
    if (bookNowBtn) {
        bookNowBtn.addEventListener('click', () => {
            alert("Booking functionality coming soon!");
        });
    }

    // This selects both 'know-btn' and 'know-more-btn' for flexibility.
    const knowMoreBtn = document.querySelector('.know-btn, .know-more-btn');
    if (knowMoreBtn) {
        knowMoreBtn.addEventListener('click', () => {
            alert("More details about us are available here!");
        });
    }

    // --- Contact Us Page Button Functionality ---

    const sendMessageBtn = document.querySelector('.send-message-btn');
    if (sendMessageBtn) {
        sendMessageBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert("Thank you for your message! We will get back to you soon.");
        });
    }

    
});