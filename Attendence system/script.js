document.getElementById('attendanceForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const studentName = document.getElementById('studentName').value;
    if (studentName) {
        addAttendance(studentName);
        document.getElementById('studentName').value = ''; // Clear input
    }
});

function addAttendance(name) {
    const attendanceList = document.getElementById('attendanceList');
    const listItem = document.createElement('li');
    listItem.textContent = name;
    attendanceList.appendChild(listItem);
}
