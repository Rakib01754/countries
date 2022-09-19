const getData = async (searchText) => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${searchText}`)
    const data = await (res.json())
    displayData(data);
}

const displayData = (countries) => {
    console.log(countries)
    countries.map(country => {
        const { name, flags, capital, timezones, population, continents } = country
        const newDiv = document.createElement('div')
        newDiv.classList.add('single-items')
        newDiv.innerHTML = `
            <img src="${flags.png}" alt="">
            <h2>নাম : ${name.common}</h2>
            <h3> মহাদেশ : ${continents[0]}</h3>
            
            <h4>রাজধানী: ${capital?.[0]}</h4>
            <h5>জনসংখ্যা: ${population}</h5>
            <h5>Time Zone : ${timezones[0]}</h5>
            `
        document.getElementById('country-container').appendChild(newDiv)
    })
}

const searchOption = () => {
    document.getElementById('country-container').innerText = "";
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    searchField.value = "";
    getData(searchText);

}

getData('b');