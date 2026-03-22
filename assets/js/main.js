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
        repoLink: "https://github.com/Cold-ay/pdfConversion",
        demoLink: "https://example.com"
    },
    {
        title: "Earthquake Escape Route",
        status: "In Progress",
        description: "",
        techStack: ["AWS EventBridge", "Python", "Docker", "Redis"],
        repoLink: null, // Set to null if there is no repo
        demoLink: "https://example.com/proposal.pdf" // Could link to a PDF or Google Doc
    },
    {
        title: "Legacy System Migration Strategy",
        status: "In Progress",
        description: "Currently leading the architectural strategy to migrate a monolithic PHP application to a modern serverless stack, aiming to reduce hosting costs by 30%.",
        techStack: ["AWS Lambda", "Next.js", "GraphQL"],
        repoLink: "https://github.com",
        demoLink: null
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