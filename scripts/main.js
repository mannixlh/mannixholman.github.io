/*
    File: main.js
    Purpose: JavaScript functionality for Mannix Holman's personal website
    Course: IST 256 - Programming for the Web | Mr.Ri
*/

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you, I appreciate your message!");
        form.reset();
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check localStorage for a saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '☀️ Light Mode';
    }

    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        // Save the current preference and update button text
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = '☀️ Light Mode';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = '🌙 Dark Mode';
        }
    });

    // Your existing form code remains here
    const form = document.querySelector("form");
    /* ... existing submit listener ... */
});

const myButton = document.getElementById("backToTop");
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}
myButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0, behavior: 'smooth' 
    });
});