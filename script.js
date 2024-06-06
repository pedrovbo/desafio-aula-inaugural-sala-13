document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const names = [
        document.getElementById('name1').value.trim(),
        document.getElementById('name2').value.trim(),
        document.getElementById('name3').value.trim(),
        document.getElementById('name4').value.trim(),
        document.getElementById('name5').value.trim()
    ];
    const message = document.getElementById('message').value;

    const data = {
        names: names,
        message: message
    };

    fetch('https://fsdt-contact-acf4ab9867a7.herokuapp.com/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert('Success: ' + JSON.stringify(data));
    })
    .catch(error => {
        console.error('Error:', error);
    });
});