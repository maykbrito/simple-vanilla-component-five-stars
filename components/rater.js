export function Rater (ratingElement) {
    
    let currentRatingElement = {}
    const stars = ratingElement.querySelectorAll('.star')

    init()

    function init() {
        resetRating();

        stars.forEach(star => {
            star.addEventListener('click', setRating)
            star.addEventListener('mouseover', ratingHover)
        })

        ratingElement.addEventListener('mouseout', resetRating)
    }

    function highlightRating () {
        stars.forEach(star => {
            star.style.color = 
            currentRatingElement >= star.getAttribute('data-value') 
            ? 'yellow' 
            : 'gray'
        });
    }

    function resetRating () {
        currentRatingElement = ratingElement.getAttribute('data-rating')
        highlightRating()
    }

    function ratingHover( event ) {
        currentRatingElement = event.currentTarget.getAttribute('data-value')
        highlightRating()
    }

    function setRating( event ) {
        ratingElement.setAttribute(
            'data-rating',
            event.currentTarget.getAttribute('data-value')
        )
    }
}