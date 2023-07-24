import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { renderTo, renderCatInfo, renderBreeds } from './render.js'
import { fetchBreeds, fetchCatByBreed } from './cats-api.js'

const selectBreed = document.querySelector(".breed-select");
const loader = document.querySelector(".loader");
const error = document.querySelector(".error");
const catInfo = document.querySelector(".cat-info");

async function showBreeds() {
    try {
        const { data } = await fetchBreeds();
        renderTo(selectBreed, renderBreeds(data));
    } catch (error) {
        Notify.failure("Failed to fetch breeds.")
        showError("Failed to fetch breeds.");
    } finally {
        hideLoader();
    };
}

async function showCatByBreed(breedId) {
    try {
        const { data: [cat] } = await fetchCatByBreed(breedId);
        renderTo(catInfo, renderCatInfo(cat));

    } catch (error) {
        Notify.failure("Failed to fetch cat.")
        showError("Failed to fetch cat.");
    } finally {
        hideLoader();
    };
}

function showLoader() {
    loader.style.display = "block";
}

function hideLoader() {
    loader.style.display = "none";
}

function showError(message) {
    error.textContent = message;
    error.style.display = "block";
    setTimeout(() => {
        error.style.display = "none";
    }, 5000);
}

selectBreed.addEventListener("change", (event) => {
    const selectedBreedId = event.target.value;
    renderTo(catInfo, "");
    showLoader();
    showCatByBreed(selectedBreedId)
});


showLoader();
showBreeds();

