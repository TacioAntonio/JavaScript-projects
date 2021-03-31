(() => {
    /**
     * @param {string} selector 
     */
    const $ = selector => document.querySelector(selector)

    const endpoint = 'https://rickandmortyapi.com/api/character/';
    const persons = []

    fetch(endpoint).then(blob => blob.json()).then(data => {
        persons.push(...data.results)
    })

    function createCard({
        name,
        species,
        image,
        origin,
        location
    }) {
        return `
            <li>
                <div class="card">
                    <img class="person" src="${image}" alt="${name}">
                    <p class="name">${name}</p>
                    <span class="box-species">
                        <p class="species">${species}</p>
                    </span>
                    <span class="description">
                        <p class="origin">${origin.name}</p>
                        <p class="location">${location.name}</p>
                    </span>
                </div>
            </li>
        `
    }

    function active() {
        const card = persons.map(person => {
            return createCard(person)
        }).join('');

        $('ul').innerHTML = card;
    }
    
    $('button').addEventListener('click', active)
})()