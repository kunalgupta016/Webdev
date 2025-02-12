document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll("[role='tab']");
    const panels = document.querySelectorAll("[role='tabpanel']");
    const tabContainer = document.querySelector(".grid");

    // Create a sliding indicator
    const indicator = document.createElement("div");
    tabContainer.appendChild(indicator);

    function updateIndicator(tab) {
        const tabRect = tab.getBoundingClientRect();
        const containerRect = tabContainer.getBoundingClientRect();
        indicator.style.width = `${tabRect.width}px`;
        indicator.style.transform = `translateX(${tabRect.left - containerRect.left}px)`;
    }

    function showActiveTabContent(activeTab) {
        // Hide all panels
        panels.forEach(p => p.classList.add("hidden"));

        // Show the selected tab's panel
        const panelId = activeTab.getAttribute("aria-controls");
        document.getElementById(panelId).classList.remove("hidden");
    }

    tabs.forEach((tab) => {
        tab.addEventListener("click", function () {
            // Deactivate all tabs and hide all panels
            tabs.forEach(t => {
                t.setAttribute("data-state", "inactive");
                t.setAttribute("aria-selected", "false");
            });

            panels.forEach(p => {
                p.classList.add("hidden");
            });

            // Activate clicked tab
            this.setAttribute("data-state", "active");
            this.setAttribute("aria-selected", "true");

            // Show corresponding panel
            showActiveTabContent(this);

            // Move indicator
            updateIndicator(this);
        });
    });

    // Initialize the first active tab and panel
    const activeTab = document.querySelector("[data-state='active']") || tabs[0];

    if (activeTab) {
        activeTab.setAttribute("data-state", "active");
        activeTab.setAttribute("aria-selected", "true");

        // Ensure only the active tab's content is visible
        showActiveTabContent(activeTab);

        updateIndicator(activeTab);
    }
});


