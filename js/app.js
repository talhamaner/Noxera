/* =========================================================
   NOXERA APPLICATION
========================================================= */


let favorites =
    JSON.parse(
        localStorage.getItem("noxeraFavorites")
    ) || [];


let watchlist =
    JSON.parse(
        localStorage.getItem("noxeraWatchlist")
    ) || [];


const allItems =
    [...movies, ...series];



/* =========================================================
   INITIAL RENDER
========================================================= */

function initialize() {

    renderGrid(
        "trendingGrid",
        getTrending(movies)
    );

    renderGrid(
        "hiddenGrid",
        getHiddenGems(movies)
    );

    renderGrid(
        "seriesGrid",
        series
    );

}


initialize();



/* =========================================================
   MOVIE CARD EVENTS
========================================================= */

document.addEventListener("click", function(event) {

    const card =
        event.target.closest(".movie-card");

    if (!card) return;


    /* Favorite button */

    const favoriteButton =
        event.target.closest("[data-favorite]");

    if (favoriteButton) {

        event.stopPropagation();

        const id =
            Number(favoriteButton.dataset.favorite);

        toggleFavorite(id);

        return;

    }


    /* Open details */

    const id =
        Number(card.dataset.id);

    const item =
        allItems.find(movie =>
            movie.id === id
        );

    if (item) {
        openDetails(item);
    }

});



/* =========================================================
   FAVORITES
========================================================= */

function toggleFavorite(id) {

    const item =
        allItems.find(movie =>
            movie.id === id
        );

    if (!item) return;


    const exists =
        favorites.some(movie =>
            movie.id === id
        );


    if (exists) {

        favorites =
            favorites.filter(movie =>
                movie.id !== id
            );

    } else {

        favorites.push(item);

    }


    localStorage.setItem(
        "noxeraFavorites",
        JSON.stringify(favorites)
    );


    renderGrid(
        "trendingGrid",
        getTrending(movies)
    );

    renderGrid(
        "hiddenGrid",
        getHiddenGems(movies)
    );

    renderGrid(
        "seriesGrid",
        series
    );


    if (
        document
            .getElementById("favoritesModal")
            .classList.contains("active")
    ) {

        openFavorites();

    }

}



/* =========================================================
   SEARCH
========================================================= */

const searchToggle =
    document.getElementById("searchToggle");


const searchPanel =
    document.getElementById("searchPanel");


const searchInput =
    document.getElementById("searchInput");


searchToggle.addEventListener(
    "click",
    () => {

        searchPanel.classList.toggle("active");

        if (
            searchPanel.classList.contains("active")
        ) {

            setTimeout(
                () => searchInput.focus(),
                200
            );

        }

    }
);


searchInput.addEventListener(
    "input",
    function() {

        const results =
            searchItems(this.value);

        renderSearchResults(results);

    }
);


document
    .getElementById("clearSearch")
    .addEventListener(
        "click",
        () => {

            searchInput.value = "";

            searchInput.focus();

            document
                .getElementById("searchResults")
                .innerHTML = "";

        }
    );



/* =========================================================
   SEARCH RESULT CLICK
========================================================= */

document.addEventListener("click", function(event) {

    const result =
        event.target.closest(".search-result");

    if (!result) return;


    const id =
        Number(result.dataset.id);


    const item =
        allItems.find(movie =>
            movie.id === id
        );


    if (item) {

        searchPanel.classList.remove("active");

        openDetails(item);

    }

});



/* =========================================================
   MOODS
========================================================= */

document
    .querySelectorAll("[data-mood]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const mood =
                    button.dataset.mood;


                const results =
                    getMoodResults(
                        mood,
                        allItems
                    );


                renderGrid(
                    "trendingGrid",
                    results
                );


                document
                    .getElementById("movies")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

    });



/* =========================================================
   SURPRISE ME
========================================================= */

document
    .getElementById("surpriseButton")
    .addEventListener(
        "click",
        () => {

            const random =
                allItems[
                    Math.floor(
                        Math.random() *
                        allItems.length
                    )
                ];

            openDetails(random);

        }
    );



/* =========================================================
   EXPLORE
========================================================= */

document
    .getElementById("exploreButton")
    .addEventListener(
        "click",
        () => {

            document
                .getElementById("discover")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );



/* =========================================================
   FAVORITES BUTTON
========================================================= */

document
    .getElementById("favoritesButton")
    .addEventListener(
        "click",
        openFavorites
    );


document
    .getElementById("favoritesCta")
    .addEventListener(
        "click",
        openFavorites
    );


document
    .getElementById("closeFavorites")
    .addEventListener(
        "click",
        closeFavorites
    );



/* =========================================================
   DETAILS MODAL
========================================================= */

document
    .getElementById("closeModal")
    .addEventListener(
        "click",
        closeDetails
    );


document
    .getElementById("detailsModal")
    .addEventListener(
        "click",
        function(event) {

            if (
                event.target === this
            ) {

                closeDetails();

            }

        }
    );


document
    .getElementById("favoritesModal")
    .addEventListener(
        "click",
        function(event) {

            if (
                event.target === this
            ) {

                closeFavorites();

            }

        }
    );



/* =========================================================
   FAVORITE FROM DETAILS
========================================================= */

document
    .getElementById("favoriteButton")
    .addEventListener(
        "click",
        () => {

            const id =
                Number(
                    document
                        .getElementById("detailsModal")
                        .dataset.currentId
                );

            toggleFavorite(id);

        }
    );



/* =========================================================
   WATCHLIST
========================================================= */

document
    .getElementById("watchlistButton")
    .addEventListener(
        "click",
        () => {

            const id =
                Number(
                    document
                        .getElementById("detailsModal")
                        .dataset.currentId
                );


            const item =
                allItems.find(movie =>
                    movie.id === id
                );


            if (!item) return;


            const exists =
                watchlist.some(movie =>
                    movie.id === id
                );


            if (exists) {

                watchlist =
                    watchlist.filter(movie =>
                        movie.id !== id
                    );

            } else {

                watchlist.push(item);

            }


            localStorage.setItem(
                "noxeraWatchlist",
                JSON.stringify(watchlist)
            );


            document
                .getElementById("watchlistButton")
                .textContent =
                exists
                    ? "+ Watchlist"
                    : "✓ In Watchlist";

        }
    );



/* =========================================================
   TRAILER
========================================================= */

document
    .getElementById("trailerButton")
    .addEventListener(
        "click",
        () => {

            const id =
                Number(
                    document
                        .getElementById("detailsModal")
                        .dataset.currentId
                );


            const item =
                allItems.find(movie =>
                    movie.id === id
                );


            if (!item) return;


            const query =
                encodeURIComponent(
                    `${item.title} official trailer`
                );


            window.open(
                `https://www.youtube.com/results?search_query=${query}`,
                "_blank"
            );

        }
    );



/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeDetails();

            closeFavorites();

            searchPanel.classList.remove(
                "active"
            );

        }

    }
);
