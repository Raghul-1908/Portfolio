(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

// Boot / loading screen — terminal boot sequence
(function () {
    const loader = document.getElementById("boot-loader");
    const linesEl = document.getElementById("boot-lines");
    if (!loader || !linesEl) return;

    const bootLines = [
        "booting student_kernel v1.0...",
        "loading modules: [flutter, fastapi, esp32, gemini]",
        "compiling profile... done",
        "status: building & shipping"
    ];

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function hideLoader() {
        loader.classList.add("hidden");
        setTimeout(() => loader.remove(), 600);
    }

    if (prefersReducedMotion) {
        hideLoader();
        return;
    }

    const cursor = document.createElement("span");
    cursor.className = "boot-cursor";

    let i = 0;
    function typeNextLine() {
        if (i >= bootLines.length) {
            setTimeout(hideLoader, 500);
            return;
        }
        const p = document.createElement("p");
        p.innerHTML = '<span class="prompt">$</span> ' + bootLines[i];
        linesEl.appendChild(p);
        linesEl.appendChild(cursor);
        i++;
        setTimeout(typeNextLine, 380);
    }

    typeNextLine();

    // Hard safety net: never block the page more than 3.5s
    setTimeout(hideLoader, 3500);
})();
