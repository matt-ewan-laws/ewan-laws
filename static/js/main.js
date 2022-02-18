function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.body.onload = function() {
    const els = document.querySelectorAll('.js-slide-in')
    els.forEach(el => {
        document.body.onscroll = function() {
            if (isInViewport(el)) {
                el.classList.add('js-slide-in--show')
            }
        }
    })
}
