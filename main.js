// Function to handle form submissions (Sign Up, Sign In, Add Food, Request Food)
document.addEventListener('DOMContentLoaded', () => {
    // Get references to forms and buttons
    const signUpForm = document.getElementById('sign-up-form');
    const signInForm = document.getElementById('sign-in-form');
    const addListingForm = document.getElementById('add-listing-form');
    const requestFoodForm = document.getElementById('request-food-form');
    const availableFoodsContainer = document.getElementById('available-foods-carousel');

    // Handle Sign Up form submission
    if (signUpForm) {
        signUpForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(signUpForm);
            const data = {
                email: formData.get('email'),
                password: formData.get('password'),
            };

            try {
                const response = await fetch('/api/auth/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                const result = await response.json();
                if (response.ok) {
                    alert('Sign Up successful!');
                    window.location.href = '/signin.html'; // Redirect to Sign In page
                } else {
                    alert(`Error: ${result.message}`);
                }
            } catch (error) {
                alert('Failed to sign up. Please try again.');
            }
        });
    }

    // Handle Sign In form submission
    if (signInForm) {
        signInForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(signInForm);
            const data = {
                email: formData.get('email'),
                password: formData.get('password'),
            };

            try {
                const response = await fetch('/api/auth/signin', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                const result = await response.json();
                if (response.ok) {
                    alert('Sign In successful!');
                    window.location.href = '/foods.html'; // Redirect to Available Foods page
                } else {
                    alert(`Error: ${result.message}`);
                }
            } catch (error) {
                alert('Failed to sign in. Please try again.');
            }
        });
    }

    // Handle Add Food Listing form submission
    if (addListingForm) {
        addListingForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(addListingForm);
            const data = {
                name: formData.get('name'),
                description: formData.get('description'),
                quantity: formData.get('quantity'),
            };

            try {
                const response = await fetch('/api/foods', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                const result = await response.json();
                if (response.ok) {
                    alert('Food listing added successfully!');
                    window.location.href = '/foods.html'; // Redirect to Available Foods page
                } else {
                    alert(`Error: ${result.message}`);
                }
            } catch (error) {
                alert('Failed to add food listing. Please try again.');
            }
        });
    }

    // Handle Request Food form submission
    if (requestFoodForm) {
        requestFoodForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(requestFoodForm);
            const data = {
                foodId: formData.get('foodId'),
                userId: formData.get('userId'),
            };

            try {
                const response = await fetch('/api/foods/request', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                const result = await response.json();
                if (response.ok) {
                    alert('Food request submitted successfully!');
                } else {
                    alert(`Error: ${result.message}`);
                }
            } catch (error) {
                alert('Failed to request food. Please try again.');
            }
        });
    }

    // Fetch and display available foods in a carousel
    if (availableFoodsContainer) {
        const fetchAvailableFoods = async () => {
            try {
                const response = await fetch('/api/foods');
                const foods = await response.json();

                if (response.ok) {
                    availableFoodsContainer.innerHTML = ''; // Clear the container first
                    foods.forEach((food) => {
                        availableFoodsContainer.innerHTML += `
                            <div class="carousel-item">
                                <h3>${food.name}</h3>
                                <p>${food.description}</p>
                                <p>Quantity: ${food.quantity}</p>
                            </div>
                        `;
                    });
                } else {
                    alert('Failed to fetch food listings.');
                }
            } catch (error) {
                alert('Failed to fetch food listings. Please try again.');
            }
        };

        fetchAvailableFoods();
    }
});
