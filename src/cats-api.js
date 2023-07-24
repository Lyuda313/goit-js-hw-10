import axios from "axios";

const baseURL = "https://api.thecatapi.com/v1"
const apiKey = "live_Qwl94y1POnB3VheABZfOhgdgIMRPwr072qUERFXUiIdI2SINVHWuqWCNXBtUQceK";

export function fetchBreeds() {
    const url = baseURL + "/breeds"
    const config = {
        headers: {
            "x-api-key": apiKey,
        },
    }
    const response = axios.get(url, config);
    return response
}

export async function fetchCatByBreed(breedId) {
    const url = baseURL + `/images/search?breed_ids=${breedId}`;
    const config = {
        headers: {
            "x-api-key": apiKey,
        },
    }
    const response = await axios.get(url, config);
    return response
}