document.addEventListener('DOMContentLoaded', function() {
    loadActivities(); // Load activities on page load
    loadGoal(); // Load goal on page load
});

document.getElementById('activity-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const activity = document.getElementById('activity').value;
    const duration = document.getElementById('duration').value;
    logActivity(activity, duration);
});

function logActivity(activity, duration) {
    const activityList = document.getElementById('activity-list');
    const entry = document.createElement('div');
    entry.textContent = `${activity} for ${duration} minutes`;
    activityList.appendChild(entry);
    
    // Save to local storage
    saveActivityToLocalStorage(activity, duration);
    
    // Clear input fields
    document.getElementById('activity').value = '';
    document.getElementById('duration').value = '';
}

function saveActivityToLocalStorage(activity, duration) {
    let activities = JSON.parse(localStorage.getItem('activities')) || [];
    activities.push({ activity, duration });
    localStorage.setItem('activities', JSON.stringify(activities));
}

function loadActivities() {
    const activities = JSON.parse(localStorage.getItem('activities')) || [];
    activities.forEach(({ activity, duration }) => {
        const activityList = document.getElementById('activity-list');
        const entry = document.createElement('div');
        entry.textContent = `${activity} for ${duration} minutes`;
        activityList.appendChild(entry);
    });
}

// Goal setting functionality
document.getElementById('set-goal').addEventListener('click', function() {
    const goal = document.getElementById('goal').value;
    saveGoalToLocalStorage(goal);
    alert(`Goal set: ${goal}`);
    document.getElementById('goal').value = '';
});

function saveGoalToLocalStorage(goal) {
    localStorage.setItem('fitnessGoal', goal);
}

function loadGoal() {
    const goal = localStorage.getItem('fitnessGoal');
    if (goal) {
        document.getElementById('goal').value = goal;
    }
}