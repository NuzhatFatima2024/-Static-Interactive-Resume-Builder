// TypeScript for toggling sections
function toggleSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = (section.style.display === 'none' || section.style.display === '') ? 'block' : 'none';
    }
}
// Generate Unique URL for the User
function generateUniqueURL(username: string) {
    const uniqueUrl = `${username}.vercel.app/resume`;
    return uniqueUrl;
}

// Share Link Logic
const shareButton = document.getElementById('share-link') as HTMLButtonElement;
shareButton.addEventListener('click', () => {
    const username = 'Nuzhat Fatima'; 
    const uniqueUrl = generateUniqueURL(username);
    alert(`Share this URL: ${uniqueUrl}`);
});
