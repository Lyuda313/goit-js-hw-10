export function renderCatInfo(cat) {
    const { url, breeds } = cat;
    const breed = breeds[0];

    const html = `
          <img src="${url}" alt="${breed.name}"/>
          <h2>${breed.name}</h2>
          <p>${breed.description}</p>
          <p>Temperament: ${breed.temperament}</p>
    `
    return html
}

export function renderBreeds(data) {
    const html = [...data].map(breed => {
        return `
            <option value="${breed.id}">${breed.name}</option>
        `
    }).join("");
    return html
}

export function renderTo(element, html) {
    element.innerHTML = html
}