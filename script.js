// Add any JavaScript functionality here if needed
// For example, smooth scrolling to anchor links

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('nav a');
  
    links.forEach(link => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const target = document.querySelector(event.target.getAttribute('href'));
        target.scrollIntoView({ behavior: "smooth" });
      });
    });
  });
  