// Smooth scroling the webpage
function smoothScroll(target, event) {
    event.preventDefault();
    const element = document.querySelector(target);
    window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
    });
}


document.addEventListener('DOMContentLoaded', function () {
    // Add click event listener to all sidebar links for 'active' class toggle
    document.querySelectorAll('.sidebar .w3-bar-item').forEach((link) => {
        link.addEventListener('click', function() {
            document.querySelectorAll('.w3-bar-item').forEach((item) => {
                item.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // Ensure this matches your actual sections' IDs.
    const sections = ['#navbar', '#about', '#projects', '#contact'];

    function changeIconColor() {
        sections.forEach((sectionId) => {
            const section = document.querySelector(sectionId);
            const link = document.querySelector(`.sidebar a[href="${sectionId}"]`);
            const icon = link.querySelector('.fas');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        icon.style.color = 'white';
                    } else {
                        icon.style.color = '#696969';
                    }
                });
            }, {
                rootMargin: '0px 0px -50% 0px', // Adjust bottom margin to account for large items
                threshold: 0.1 // Lower threshold to ensure the icon changes color as desired
            });
            
            observer.observe(section);
        });
    }

    changeIconColor();
});

$(document).ready(function() {
    $.ajax({
        url: '/data',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            const container = $('#reviews-container');
            data.forEach(review => {
                const reviewElement = `
                    <div class="spacing">
                        <div class="w3-card w3-padding w3-round-large">
                        <h4 class="w3-border-bottom w3-border-light-grey w3-padding-16">${review.review_title}</h4>
                        <p class="w3-text-grey w3-small">${review.reviewer_name}</p>
                        <p>${review.review_text}</p>
                        <p>${getStarRating(review.review_rating)}</p>

                        <p class="w3-text-grey w3-small">${formatDate(review.review_date)}</p>
                        </div>
                    </div>
                `;
                container.append(reviewElement);
            });
        },
        error: function(xhr, status, error) {
            console.error('Error fetching data:', error);
        }
    });

    $.ajax({
        url: '/services',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            const container = $('#services-grid');
            data.forEach(service => {
                const serviceElement = `
                    <div class="spacing">
                        <div class="w3-card w3-padding w3-round-large"> 
                            <h4 class="w3-border-bottom w3-border-light-grey w3-padding-16"><i class="${service.service_icon}"></i> ${service.service_title}</h4>
                            <p class="w3-text-grey w3-small">${service.service_keywords}</p>
                            <p>${service.service_description}</p>
                        </div>
                    </div>
                `;
                container.append(serviceElement);
            });
        },
        error: function(xhr, status, error) {
            console.error('Error fetching data:', error);
        }
    });
});

function getStarRating(rating) {
    const starIcon = '<i class="fas fa-star"></i>';
    const emptyStarIcon = '<i class="far fa-star"></i>';
    const fullStars = starIcon.repeat(rating);
    const emptyStars = emptyStarIcon.repeat(5 - rating);
    return fullStars + emptyStars;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}