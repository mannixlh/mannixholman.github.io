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