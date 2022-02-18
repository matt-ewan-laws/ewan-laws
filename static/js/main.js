function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const { top, bottom } = rect
    const height = (window.innerHeight || document.documentElement.clientHeight)
    console.log({
        top, bottom,
        height,
        element,
    })
    return (
        rect.top < ((window.innerHeight || document.documentElement.clientHeight) - 200)
    );
}

document.body.onload = function() {
    const els = document.querySelectorAll('.js-slide-in')
    document.body.onscroll = function() {
        els.forEach(el => {
            if (isInViewport(el)) {
                console.log('inside')
                el.classList.add('js-slide-in--show')
            }
        })
    }
}
