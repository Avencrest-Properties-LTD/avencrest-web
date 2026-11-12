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

loadNavbar().catch((error) => {
    console.error("Could not load the site navbar.", error);
});
