function loadAndRender() {
    var bugName = document.getElementById("select-bugs").value;
    if (bugName === "default")
        return;
    document.getElementById("shader_source").value = bugs[bugName].src;
    document.getElementById("expected-image").src = bugs[bugName].image;
    startSafe();
}

var bugs = {
    bug1: {
        src: bug1Src,
        // src: a,
        image: "./bugs/bug1/expected.png"
    },
    bug2: {
        src: bug2Src, 
        image: "./bugs/bug2/expected.png"
    },
    bug3: {
        src: bug3Src,
        image: "./bugs/bug3/expected.png"
    },
    bug4: {
        src: bug4Src,
        image: "./bugs/bug4/expected.png"
    },
    bug5: {
        src: bug5Src,
        image: "./bugs/bug5/expected.png"
    },
    bug6: {
        src: bug6Src,
        image: "./bugs/bug6/expected.png"
    }
}
