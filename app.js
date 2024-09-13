// TypeScript for toggling sections
function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.style.display = (section.style.display === 'none' || section.style.display === '') ? 'block' : 'none';
    }
}
// Generate Unique URL for the User
function generateUniqueURL(username) {
    var uniqueUrl = "".concat(username, ".vercel.app/resume");
    return uniqueUrl;
}
// Share Link Logic
var shareButton = document.getElementById('share-link');
shareButton.addEventListener('click', function () {
    var username = 'Nuzhat Fatima';
    var uniqueUrl = generateUniqueURL(username);
    alert("Share this URL: ".concat(uniqueUrl));
});
