/* =========================================================
   NOXERA RECOMMENDATION ENGINE
========================================================= */

function getRecommendation(item) {

    if (item.recommendation) {
        return item.recommendation;
    }

    return "Because it matches the kind of stories you seem to enjoy.";
}


function getMoodResults(mood, items) {

    return items.filter(item =>
        item.mood &&
        item.mood.includes(mood)
    );

}


function getHiddenGems(items) {

    return items
        .filter(item => item.rating >= 7.5 && item.rating <= 8.3)
        .sort((a,b) => a.rating - b.rating);

}


function getTrending(items) {

    return [...items]
        .sort((a,b) => b.rating - a.rating)
        .slice(0, 10);

}
