async function loadNavbar() {
    const header = document.querySelector("#site-header");

    if (!header) {
        throw new Error("Navbar placeholder #site-header was not found.");
    }

    const response = await fetch("navbar.html");

    if (!response.ok) {
        throw new Error(`Failed to load navbar.html: ${response.status}`);
    }

    header.innerHTML = await response.text();

    const menuButton = header.querySelector(".menu-toggle");
    const navigation = header.querySelector("#main-navigation");
    const consultationLink = header.querySelector(".header-cta");
    const mobileMenu = window.matchMedia("(max-width: 680px)");

    if (!menuButton || !navigation || !consultationLink) {
        throw new Error("Navbar markup is missing its menu controls.");
    }

    const setMenuOpen = (isOpen) => {
        const isMobile = mobileMenu.matches;
        navigation.hidden = isMobile && !isOpen;
        consultationLink.hidden = isMobile && !isOpen;
        menuButton.setAttribute("aria-expanded", String(isMobile && isOpen));
        menuButton.setAttribute(
            "aria-label",
            isMobile && isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    };

    setMenuOpen(false);

    menuButton.addEventListener("click", () => {
        setMenuOpen(navigation.hidden);
    });

    navigation.addEventListener("click", (event) => {
        if (event.target instanceof Element && event.target.closest("a")) {
            setMenuOpen(false);
        }
    });

    consultationLink.addEventListener("click", () => {
        setMenuOpen(false);
    });

    header.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && mobileMenu.matches && !navigation.hidden) {
            setMenuOpen(false);
            menuButton.focus();
        }
    });

    mobileMenu.addEventListener("change", () => {
        setMenuOpen(false);
    });
}

function initializeHeroParallax() {
    const hero = document.querySelector(".hero-section");
    const clouds = document.querySelector(".hero-cloud-layer");
    const content = document.querySelector(".hero-content");

    if (!hero || !clouds || !content) {
        return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frameRequested = false;

    const updateParallax = () => {
        frameRequested = false;

        if (reduceMotion.matches) {
            clouds.style.removeProperty("--hero-cloud-offset");
            content.style.removeProperty("--hero-content-offset");
            return;
        }

        const scrolled = Math.max(0, -hero.getBoundingClientRect().top);
        clouds.style.setProperty("--hero-cloud-offset", `${Math.min(scrolled * 0.22, 110)}px`);
        content.style.setProperty("--hero-content-offset", `${Math.max(-scrolled * 0.16, -80)}px`);
    };

    const requestParallaxUpdate = () => {
        if (!frameRequested) {
            frameRequested = true;
            window.requestAnimationFrame(updateParallax);
        }
    };

    window.addEventListener("scroll", requestParallaxUpdate, { passive: true });
    window.addEventListener("resize", requestParallaxUpdate);
    reduceMotion.addEventListener("change", requestParallaxUpdate);
    requestParallaxUpdate();
}

loadNavbar().catch((error) => {
    console.error("Could not load the site navbar.", error);
});

initializeHeroParallax();
