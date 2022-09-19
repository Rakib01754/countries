const getData = async () => {
    const res = await fetch('https://restcountries.com/v3.1/all')
    const data = await (res.json())
    displayData(data);
}

const displayData = (countries) => {
    console.log(countries)

    countries.map(country => {
        const { name, flags, capital, timezones } = country
        const newDiv = document.createElement('div')
        newDiv.classList.add('single-items')
        newDiv.innerHTML = `
            <img src="${flags.png}" alt="">
            <h2>Name : ${name.common}</h2>
            <h4>Capital: ${capital?.[0]}</h4>
            <h5>Time Zone : ${timezones[0]}</h5>
            `
        document.getElementById('country-container').appendChild(newDiv)
    })
}

getData();