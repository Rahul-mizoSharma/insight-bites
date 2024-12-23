// Update preview in real-time
document.addEventListener('DOMContentLoaded', () => {
    // Basic information listeners
    document.getElementById('name').addEventListener('input', updatePreview);
    document.getElementById('contact').addEventListener('input', updatePreview);
    document.getElementById('summary').addEventListener('input', updatePreview);
    document.getElementById('additional-info').addEventListener('input', updatePreview);

    // Add project button listener
    document.getElementById('add-project').addEventListener('click', () => {
        const container = document.getElementById('projects-container');
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project-input space-y-3';
        projectDiv.innerHTML = `
            <input type="text" class="project-title w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Project Title">
            <input type="text" class="project-duration w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Duration">
            <textarea class="project-details w-full p-2 border rounded h-32 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Project Details (separate points with new lines)"></textarea>
            <button class="remove-btn bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors">Remove</button>
        `;
        container.appendChild(projectDiv);
        addRemoveButtonListener(projectDiv.querySelector('.remove-btn'));
        addProjectInputListeners(projectDiv);
    });

    // Add education button listener
    document.getElementById('add-education').addEventListener('click', () => {
        const container = document.getElementById('education-container');
        const educationDiv = document.createElement('div');
        educationDiv.className = 'education-input space-y-3';
        educationDiv.innerHTML = `
            <input type="text" class="education-degree w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Degree">
            <input type="text" class="education-school w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="School">
            <input type="text" class="education-duration w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Duration">
            <textarea class="education-details w-full p-2 border rounded h-32 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Education Details (separate points with new lines)"></textarea>
            <button class="remove-btn bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors">Remove</button>
        `;
        container.appendChild(educationDiv);
        addRemoveButtonListener(educationDiv.querySelector('.remove-btn'));
        addEducationInputListeners(educationDiv);
    });

    // Add initial input listeners
    document.querySelectorAll('.project-input').forEach(addProjectInputListeners);
    document.querySelectorAll('.education-input').forEach(addEducationInputListeners);
});

function addRemoveButtonListener(button) {
    button.addEventListener('click', function() {
        this.parentElement.remove();
        updatePreview();
    });
}

function addProjectInputListeners(projectDiv) {
    projectDiv.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('input', updatePreview);
    });
}

function addEducationInputListeners(educationDiv) {
    educationDiv.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('input', updatePreview);
    });
}

function updatePreview() {
    // Update basic information
    document.getElementById('preview-name').textContent = document.getElementById('name').value;
    document.getElementById('preview-contact').textContent = document.getElementById('contact').value;
    document.getElementById('preview-summary').textContent = document.getElementById('summary').value;

    // Update projects
    const projectsPreview = document.getElementById('preview-projects');
    projectsPreview.innerHTML = '';
    document.querySelectorAll('.project-input').forEach(project => {
        const title = project.querySelector('.project-title').value;
        const duration = project.querySelector('.project-duration').value;
        const details = project.querySelector('.project-details').value;

        if (title || duration || details) {
            const projectElement = document.createElement('div');
            projectElement.className = 'preview-project';
            projectElement.innerHTML = `
                <h3>${title} ${duration ? `(${duration})` : ''}</h3>
                <ul>
                    ${details.split('\n').filter(point => point.trim()).map(point => 
                        `<li>${point.trim()}</li>`
                    ).join('')}
                </ul>
            `;
            projectsPreview.appendChild(projectElement);
        }
    });

    // Update education
    const educationPreview = document.getElementById('preview-education');
    educationPreview.innerHTML = '';
    document.querySelectorAll('.education-input').forEach(education => {
        const degree = education.querySelector('.education-degree').value;
        const school = education.querySelector('.education-school').value;
        const duration = education.querySelector('.education-duration').value;
        const details = education.querySelector('.education-details').value;

        if (degree || school || duration || details) {
            const educationElement = document.createElement('div');
            educationElement.className = 'preview-education';
            educationElement.innerHTML = `
                <h3>${degree} - ${school} ${duration ? `(${duration})` : ''}</h3>
                <ul>
                    ${details.split('\n').filter(point => point.trim()).map(point => 
                        `<li>${point.trim()}</li>`
                    ).join('')}
                </ul>
            `;
            educationPreview.appendChild(educationElement);
        }
    });

    // Update additional information
    const additionalInfoPreview = document.getElementById('preview-additional-info');
    additionalInfoPreview.innerHTML = document.getElementById('additional-info').value
        .split('\n')
        .filter(point => point.trim())
        .map(point => `<li>${point.trim()}</li>`)
        .join('');
}   
