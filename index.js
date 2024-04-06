function submitData(name, email) {
    const formData = {
        name: name,
        email: email
    };

    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        const newId = data.id;
        document.body.append(`New ID: ${newId}`);
    })
    .catch(error => {
        document.body.append(`Error: ${error.message}`);
    });
}
