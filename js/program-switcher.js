/**
 * Program Switcher Logic
 * Handles switching between PharmD and Pharmacy Technician programs
 */

// Current program state
let currentProgram = 'pharmd';
let currentLocation = 'all';

// Initialize program switcher on page load
document.addEventListener('DOMContentLoaded', function() {
    initProgramSwitcher();
    initNavigationLinks();
});

function initNavigationLinks() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get the view to render
            const view = this.dataset.view;
            
            // Render the appropriate view
            if (view === 'outcomes' && window.renderOutcomesDashboard) {
                window.renderOutcomesDashboard();
            }
            
            // Update page title
            const pageTitle = document.getElementById('page-title');
            if (pageTitle) {
                const viewTitles = {
                    'outcomes': '🎯 Outcomes Overview',
                    'dashboard': '📊 Dashboard',
                    'students': '👥 Students Database',
                    'rotations': '📅 Rotations',
                    'evaluations': '📝 Evaluations',
                    'stats': '📈 Statistics',
                    'preceptors': '👨‍⚕️ Preceptors',
                    'reports': '📑 Reports',
                    'home': '🏠 Home'
                };
                pageTitle.textContent = viewTitles[view] || 'Clinical Affairs';
            }
        });
    });
}

function initProgramSwitcher() {
    const programDropdown = document.getElementById('program-dropdown');
    const locationDropdown = document.getElementById('location-dropdown');
    const locationFilter = document.getElementById('location-filter');

    // Program dropdown change handler
    if (programDropdown) {
        programDropdown.addEventListener('change', function(e) {
            currentProgram = e.target.value;
            handleProgramSwitch(currentProgram);
        });
    }

    // Location dropdown change handler
    if (locationDropdown) {
        locationDropdown.addEventListener('change', function(e) {
            currentLocation = e.target.value;
            handleLocationFilter(currentLocation);
        });
    }
}

function handleProgramSwitch(program) {
    const pharmDNav = document.getElementById('pharmd-nav');
    const pharmacyTechNav = document.getElementById('pharmacy-tech-nav');
    const locationFilter = document.getElementById('location-filter');

    if (program === 'pharmd') {
        // Show PharmD navigation
        pharmDNav.classList.remove('hidden');
        pharmacyTechNav.classList.add('hidden');
        locationFilter.classList.add('hidden');
        
        // Update page title
        updatePageTitle('PharmD Program');
        
        // Apply PharmD color scheme
        document.documentElement.style.setProperty('--active-program-color', 'var(--primary-green)');
        
    } else if (program === 'pharmacy-tech') {
        // Show Pharmacy Technician navigation
        pharmDNav.classList.add('hidden');
        pharmacyTechNav.classList.remove('hidden');
        locationFilter.classList.remove('hidden');
        
        // Update page title
        updatePageTitle('Pharmacy Technician Program');
        
        // Apply Pharmacy Tech color scheme
        document.documentElement.style.setProperty('--active-program-color', 'var(--primary-teal)');
    }

    // Filter data based on selected program
    filterDataByProgram(program);
}

function handleLocationFilter(location) {
    console.log('Filtering by location:', location);
    
    // Filter displayed rotations based on location
    const navItems = document.querySelectorAll('#pharmacy-tech-nav .nav-item');
    
    navItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        if (!link) return;
        
        // If "All" is selected, show all items
        if (location === 'all') {
            item.style.display = '';
        } else {
            // For specific locations, you can add location-specific logic here
            // This is a placeholder for future implementation
            item.style.display = '';
        }
    });
    
    // Update dashboard filters if on dashboard view
    updateDashboardFilters();
}

function updatePageTitle(programName) {
    const pageTitle = document.getElementById('page-title');
    if (pageTitle) {
        // Keep the current view title but add program prefix
        const currentView = pageTitle.textContent;
        if (!currentView.includes('PharmD') && !currentView.includes('Pharmacy Technician')) {
            pageTitle.textContent = `${programName} - ${currentView}`;
        } else {
            pageTitle.textContent = currentView.replace(/^(PharmD|Pharmacy Technician) - /, `${programName} - `);
        }
    }
}

function filterDataByProgram(program) {
    // This function will be extended to filter student data, rotations, etc.
    // based on the selected program
    console.log('Filtering data for program:', program);
    
    // If we're on a data view, refresh it with filtered data
    const currentView = getCurrentView();
    if (currentView && ['students', 'rotations', 'dashboard', 'evaluations'].includes(currentView)) {
        // Trigger view refresh with program filter
        refreshCurrentView();
    }
}

function getCurrentView() {
    // Get the current active view from the navigation
    const activeLink = document.querySelector('.nav-link.active');
    return activeLink ? activeLink.dataset.view : null;
}

function refreshCurrentView() {
    // This will integrate with existing view rendering logic
    // Placeholder for now
    console.log('Refreshing current view with filters');
}

function updateDashboardFilters() {
    // Add filter controls to dashboard if not already present
    const contentArea = document.getElementById('app-root');
    if (!contentArea) return;
    
    // Check if we're on a dashboard-like view
    const filterContainer = contentArea.querySelector('.filter-controls');
    if (!filterContainer) return;
    
    // Update filter UI based on current program and location
    console.log('Updating dashboard filters', { currentProgram, currentLocation });
}

// Export functions for use in other modules
window.ProgramSwitcher = {
    getCurrentProgram: () => currentProgram,
    getCurrentLocation: () => currentLocation,
    setProgram: (program) => handleProgramSwitch(program),
    setLocation: (location) => handleLocationFilter(location)
};
