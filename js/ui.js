/* =========================================================
   NOXERA UI
========================================================= */


function createMovieCard(item) {

    const isFavorite =
        favorites.some(movie => movie.id === item.id);

    return `

        <article
            class="movie-card"
            data-id="${item.id}"
            data-type="${item.type}"
        >

            <div class="poster">

                <img
                    src="${item.poster}"
                    alt="${item.title}"
                    loading="lazy"
                    onerror="this.src='https://via.placeholder.com/500x750/151515/f5f3ef?text=Noxera'"
                >

                <div class="poster-overlay"></div>

                <button
                    class="favorite-icon ${isFavorite ? "active" : ""}"
                    data-favorite="${item.id}"
                    title="Favorite"
                >
                    ${isFavorite ? "♥" : "♡"}
                </button>

                <span class="rating-badge">
                    ★ ${item.rating}
                </span>

            </div>

            <div class="movie-info">

                <div class="movie-title">
                    ${item.title}
                </div>

                <div class="movie-meta">

                    <span>${item.year}</span>

                    <span>•</span>

                    <span class="type-label">
                        ${item.type === "movie" ? "MOVIE" : "SERIES"}
                    </span>

                </div>

            </div>

        </article>

    `;
}


function renderGrid(elementId, items) {

    const element =
        document.getElementById(elementId);

    if (!element) return;

    element.innerHTML =
        items.map(createMovieCard).join("");

}


function openDetails(item) {

    const modal =
        document.getElementById("detailsModal");

    document.getElementById("detailsTitle")
        .textContent = item.title;

    document.getElementById("detailsType")
        .textContent =
        item.type === "movie" ? "MOVIE" : "SERIES";

    document.getElementById("detailsRating")
        .textContent = `★ ${item.rating}`;

    document.getElementById("detailsYear")
        .textContent = item.year;

    document.getElementById("detailsRuntime")
        .textContent = item.runtime;

    document.getElementById("detailsDescription")
        .textContent = item.description;

    document.getElementById("detailsCast")
        .textContent = item.cast;

    document.getElementById("recommendationText")
        .textContent = getRecommendation(item);

    document.getElementById("detailsPoster")
        .src = item.poster;

    document.getElementById("detailsPoster")
        .alt = item.title;

    document.getElementById("detailsBackdrop")
        .style.backgroundImage =
        `url("${item.backdrop}")`;

    document.getElementById("detailsGenres")
        .innerHTML =
        item.genres
            .map(genre =>
                `<span class="genre-pill">${genre}</span>`
            )
            .join("");

    modal.dataset.currentId = item.id;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeDetails() {

    document
        .getElementById("detailsModal")
        .classList.remove("active");

    document.body.style.overflow = "";

}


function openFavorites() {

    const modal =
        document.getElementById("favoritesModal");

    const grid =
        document.getElementById("favoritesGrid");

    const empty =
        document.getElementById("emptyFavorites");

    if (favorites.length === 0) {

        grid.innerHTML = "";

        empty.style.display = "block";

    } else {

        empty.style.display = "none";

        grid.innerHTML =
            favorites.map(createMovieCard).join("");

    }

    modal.classList.add("active");

}


function closeFavorites() {

    document
        .getElementById("favoritesModal")
        .classList.remove("active");

}


function searchItems(query) {

    const allItems =
        [...movies, ...series];

    const text =
        query.toLowerCase().trim();

    if (!text) return [];

    return allItems.filter(item =>

        item.title
            .toLowerCase()
            .includes(text)

        ||

        item.genres.some(genre =>
            genre.toLowerCase().includes(text)
        )

    );

}


function renderSearchResults(items) {

    const container =
        document.getElementById("searchResults");

    if (items.length === 0) {

        container.innerHTML = `
            <p style="
                color:#777;
                padding:20px 0;
            ">
                No results found.
            </p>
        `;

        return;
    }

    container.innerHTML =
        items.slice(0,6)
            .map(item => `

                <div
                    class="search-result"
                    data-id="${item.id}"
                    style="
                        display:flex;
                        align-items:center;
                        gap:15px;
                        padding:12px 0;
                        border-bottom:1px solid rgba(255,255,255,.06);
                        cursor:pointer;
                    "
                >

                    <img
                        src="${item.poster}"
                        style="
                            width:42px;
                            height:60px;
                            object-fit:cover;
                            border-radius:5px;
                        "
                    >

                    <div>

                        <strong>
                            ${item.title}
                        </strong>

                        <small style="
                            display:block;
                            color:#777;
                            margin-top:4px;
                        ">
                            ${item.year} · ${item.type}
                        </small>

                    </div>

                </div>

            `)
            .join("");

}
