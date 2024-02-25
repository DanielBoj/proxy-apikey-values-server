const fetchApiValues = async () => {
    // Call to internal api endpoint
    let response = await fetch('/api')
    .then(response => response.json())
    .then(data => {
        data = JSON.stringify(data)
        
        let html = `<h1>API Response</h1>
                    <p>${data}</p>
                    `

        document.getElementById('results').innerHTML = html
    })
    console.log(response)
}


window.addEventListener('load', () => {
    fetchApiValues();
  })