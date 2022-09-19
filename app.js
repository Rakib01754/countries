// get elements 
const noData = document.getElementById('no-result')
const searchField = document.getElementById('search-field')

// get data 
const getData = async (searchText) => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${searchText}`)
    console.log(res)
    if (res.status === 404) {
        noData.classList.remove('hidden')
        return;
    }
    else {
        noData.classList.add('hidden')
    }
    const data = await (res.json())
    displayData(data);
}
// displayData 
const displayData = (countries) => {
    countries.map(country => {
        console.log(countries.length)

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
// enter funcionality
searchField.addEventListener("keyup", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("search-btn").click();
    }
});



const searchOption = () => {
    document.getElementById('country-container').innerText = "";
    const searchText = searchField.value;
    searchField.value = "";
    getData(searchText);

}

getData('b');