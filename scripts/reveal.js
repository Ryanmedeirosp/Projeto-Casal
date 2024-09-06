window.revelar = ScrollReveal({ reset: true });

const revealOptions = {
    duration: 2000,
    distance: '40px',
    origin: 'bottom', 
    opacity: 0, 
};

revelar.reveal('.visibility-metrics', revealOptions);
revelar.reveal('.visibility-chart-session', { ...revealOptions, duration:1500, origin: 'left', distance: '100px' });
revelar.reveal('.visibility-chart-compare', { ...revealOptions, origin: 'left', distance: '100px' });
revelar.reveal('.visibility-user-table', revealOptions);
