// Update Copyright Year
document.getElementById('year').textContent = new Date().getFullYear();

// ==========================================
// EDIT YOUR PROJECT PROPOSALS DATA HERE
// ==========================================
const projects = [
    {
        title: "PDF to Other File Converter",
        status: "Completed",
        description: "A browser-based tool that converts PDF to other file formats (e.g. PNG, JPEG, TIFF) and vice versa securely.",
        techStack: ["HTML", "CSS", "JavaScript"],
        repoLink: "https://github.com/Cold-ay/pdf-converter/",
        demoLink: "https://cold-ay.github.io/pdf-converter/"
    },
    {
        title: "Earthquake Escape Route",
        status: "Completed",
        description: "A browser-based emergency mapping app built with Vite, Vanilla JavaScript, and Leaflet. The app allows users to select a location and view the nearest escape routes to the selected location.",
        techStack: ["Vite", "Vanilla JavaScript", "Leaflet"],
        repoLink: "https://github.com/Cold-ay/earthquake-escape-route/",
        demoLink: "https://cold-ay.github.io/earthquake-escape-route/"
    }
];

// JS logic to render project cards dynamically
const container = document.getElementById('project-container');

projects.forEach(project => {
    // Determine status badge class
    const badgeClass = project.status.toLowerCase() === 'proposed' ? 'status-badge proposed' : 'status-badge';
    
    // Generate tags HTML
    const tagsHTML = project.techStack.map(tag => `<span>${tag}</span>`).join('');
    
    // Generate links HTML
    const repoHTML = project.repoLink ? `<a href="${project.repoLink}" target="_blank">View Code &rarr;</a>` : '';
    // Change text based on if it's a proposal or demo
    const demoText = project.status === 'Proposed' ? 'Read Proposal' : 'Live Demo';
    const demoHTML = project.demoLink ? `<a href="${project.demoLink}" target="_blank">${demoText} &rarr;</a>` : '';

    // Construct Card HTML
    const cardHTML = `
        <div class="card">
            <div class="card-header">
                <h3>${project.title}</h3>
                <span class="${badgeClass}">${project.status}</span>
            </div>
            
            <div class="tech-stack">
                ${tagsHTML}
            </div>
            
            <p>${project.description}</p>
            
            <div class="card-footer">
                ${demoHTML}
                ${repoHTML}
            </div>
        </div>
    `;
    
    // Append to container
    container.innerHTML += cardHTML;
});