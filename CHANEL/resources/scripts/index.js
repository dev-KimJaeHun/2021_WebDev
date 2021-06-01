const CIRCULATION_INTERVAL = 4000;

let splashImages = window.document.body.querySelectorAll(':scope > section.splash > div');
for(let i = 0; i < splashImages.length; i++) {
    splashImages[i].style.backgroundImage = `url("resources/images/splash-${i + 1}.webp")`
    /* 요소.style : 요소의 CSSS 속성에 접근할 수 있게 한다. */
}

// 재귀호출 (Recursive Coll) : 
function circulateSplash(currentSplashIndex) {
    setTimeout(() => {
        splashImages[currentSplashIndex++].classList.remove('visible');
        if(currentSplashIndex === splashImages.length) {
            currentSplashIndex = 0;
        }
        splashImages[currentSplashIndex].classList.add('visible');
        circulateSplash(currentSplashIndex);
    }, CIRCULATION_INTERVAL);
};
circulateSplash(0);