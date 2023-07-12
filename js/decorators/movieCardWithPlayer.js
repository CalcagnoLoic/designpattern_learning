function movieCardWithPlayer(movieCard) {
    if (movieCard.movie.actor === "sylvester") {
        movieCard.$wrapper.addEventListener('click', () => {
            const moviePlayer = new PlayerModal(movieCard.movie);
            moviePlayer.render();
        });
    }

    return movieCard;
}
