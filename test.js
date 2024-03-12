document.addEventListener("DOMContentLoaded", function () {
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    const box = document.getElementById("box");

    left.addEventListener("mouseenter", function () {
        moveBox("left");
    });

    left.addEventListener("mouseleave", function () {
        stopAnimation()
    });

    right.addEventListener("mouseenter", function () {
        moveBox("right");
    });

    right.addEventListener("mouseleave", function () {
        stopAnimation()
    });

    function moveBox(direction) {
        setFinalLeft();
        
        if (direction === "left") {
            box.style.animationName = 'go-to-left';
        } else {
            box.style.animationName = 'go-to-right';
        }
        
        box.style.animationPlayState = 'running';
    }

    function stopAnimation() {
        box.style.animationPlayState = 'paused';
    }

    function setFinalLeft(){
        box.style.left = window.getComputedStyle(box).left;
    }
});
