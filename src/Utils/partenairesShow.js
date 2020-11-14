const PartenairesVisible = () => {
    window.addEventListener('scroll', function() {
        var element = document.getElementById('partenaires');
        var position = element.getBoundingClientRect();
    
        // checking whether fully visible
        if(position.top >= 0 && position.bottom <= window.innerHeight) {
            alert('Element is fully visible in screen');
        }
    
        // checking for partial visibility
        if(position.top < window.innerHeight && position.bottom >= 0) {
            alert('Element is partially visible in screen');
        }
    });
}
const PartenairesUtils = {
    PartenairesVisible
}
export default PartenairesUtils