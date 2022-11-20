function loadAndRender() {
    var bugName = document.getElementById("select-bugs").value;
    if (bugName === "default")
        return;
    document.getElementById("fused_shader").value = bugs[bugName].src;
    document.getElementById("shader1").value = bugs[bugName].shader1;
    document.getElementById("shader2").value = bugs[bugName].shader2;
    document.getElementById("expected-image").src = bugs[bugName].image;
    startSafe();
}


var bugs = {
    bug1: {
        src: bug1Src,
        shader1: bug1_shader1,
        shader2: bug1_shader2,
        image: "./bugs/bug1/expected.png"
    },
    bug2: {
        src: bug2Src, 
        shader1: bug2_shader1,
        shader2: bug2_shader2,
        image: "./bugs/bug2/expected.png"
    },
    bug3: {
        src: bug3Src,
        shader1: bug3_shader1,
        shader2: bug3_shader2,
        image: "./bugs/bug3/expected.png"
    },
    bug4: {
        src: bug4Src,
        shader1: bug4_shader1,
        shader2: bug4_shader2,
        image: "./bugs/bug4/expected.png"
    },
    bug5: {
        src: bug5Src,
        shader1: bug5_shader1,
        shader2: bug5_shader2,
        image: "./bugs/bug5/expected.png"
    },
    bug6: {
        src: bug6Src,
        shader1: bug6_shader1,
        shader2: bug6_shader2,
        image: "./bugs/bug6/expected.png"
    }
}
