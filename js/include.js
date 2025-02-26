// Fonction pour charger le contenu HTML
async function loadHTML(url, containerId) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const html = await response.text();
        document.getElementById(containerId).innerHTML = html;
    } catch (error) {
        console.error('Error loading HTML:', error);
    }
}

// Chargement des sections
document.addEventListener('DOMContentLoaded', async () => {
    const sections = [
        { url: 'sections/header.html', id: 'header-container' },
        { url: 'sections/about.html', id: 'about-container' },
        { url: 'sections/skills.html', id: 'skills-container' },
        { url: 'sections/formation.html', id: 'formation-container' },
        { url: 'sections/experience.html', id: 'experience-container' },
        { url: 'sections/projects.html', id: 'projects-container' },
        { url: 'sections/testimonials.html', id: 'testimonials-container' },
        { url: 'sections/footer.html', id: 'footer-container' }
    ];

    // Chargement parallèle des sections
    await Promise.all(sections.map(section => 
        loadHTML(section.url, section.id)
    ));

    // Initialisation des scripts après le chargement du contenu
    const event = new Event('sectionsLoaded');
    document.dispatchEvent(event);
});