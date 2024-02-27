var hasReachedBottom = false;
var startBlock = document.querySelector(".start-training");
var offreBlock = document.querySelector(".offre");
var offreBlockTop = offreBlock.offsetTop + offreBlock.offsetHeight;
var startBlockHeight = parseInt(window.getComputedStyle(startBlock).height);

window.addEventListener("scroll", function() {
    var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
    var triggerPoint = offreBlockTop;

    if (scrollHeight >= triggerPoint && !hasReachedBottom) {
        startBlock.classList.add("sticky");
        startBlock.classList.add("small");
        hasReachedBottom = true;
    } else if (scrollHeight < triggerPoint && hasReachedBottom) {
        startBlock.classList.remove("sticky");
        startBlock.classList.remove("small");
        hasReachedBottom = false;
    }
});
