document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.fade-in');
    
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const threshold = windowHeight * 0.75; // Adjust this threshold as needed
        
        return (
            rect.top >= -threshold &&
            rect.bottom <= (windowHeight + threshold)
        );
    }
    
    function handleScroll() {
        elements.forEach((element) => {
            if (isInViewport(element) && element.style.opacity !== '1') {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();
});
