elem = document.getElementById('list')
fetch('https://restcountries.eu/rest/v2/regionalbloc/eu')
    .then(res => res.json())
    .then(data => {
        for (country of data) {
            elem.innerHTML += `<li>${country.capital}</li>`
        }
    });
