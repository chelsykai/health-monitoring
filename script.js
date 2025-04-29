// document.querySelector('form').addEventListener('submit', function (e) {
//     e.preventDefault(); // Prevent the default form submission

//     // Get values from form inputs using their IDs
//     const firstName = document.getElementById('fname').value;
//     const lastName = document.getElementById('lname').value;
//     const middleName = document.getElementById('mname').value;
//     const genderElement = document.querySelector('input[name="gender"]:checked');
//     const gender = genderElement ? genderElement.value : 'N/A'; // Handle case where no gender is selected
//     const vaccStatus = document.getElementById('datalist2').value; // Assuming 'datalist2' is the ID for vaccination status input
//     const lastCheckup = document.getElementById('last-checkup-date').value;
//     const healthNotes = document.getElementById('addl-health-notes').value;

//     // Save the values to localStorage
//     localStorage.setItem('fname', firstName);
//     localStorage.setItem('lname', lastName);
//     localStorage.setItem('mname', middleName);
//     localStorage.setItem('gender', gender);
//     localStorage.setItem('vacc-status', vaccStatus);
//     localStorage.setItem('last-checkup-date', lastCheckup);
//     localStorage.setItem('addl-health-notes', healthNotes);

//     // Redirect to lastpage.html
//     window.location.href = 'lastpage.html';
// });