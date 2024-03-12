document.addEventListener("DOMContentLoaded", function () {
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");
    const boxesArea = document.getElementById("boxes");

    leftButton.addEventListener("mouseenter", function () {
        moveBoxes("left");
    });

    leftButton.addEventListener("mouseleave", function () {
        stopAnimation()
    });

    rightButton.addEventListener("mouseenter", function () {
        moveBoxes("right");
    });

    rightButton.addEventListener("mouseleave", function () {
        stopAnimation()
    });

    function moveBoxes(direction) {
        calculateAnimationValues();

        if (direction === "left") {
            boxesArea.style.animationName = 'go-to-left';
        } else {
            boxesArea.style.animationName = 'go-to-right';
        }
        
        boxesArea.style.animationPlayState = 'running';
    }

    function stopAnimation() {
        boxesArea.style.animationPlayState = 'paused';
    }

    function calculateAnimationValues(){
        boxesArea.style.left = window.getComputedStyle(boxesArea).left;
        boxesArea.style.transform = window.getComputedStyle(boxesArea).transform;
    }
});
