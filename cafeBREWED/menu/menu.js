document.addEventListener('DOMContentLoaded', function () {
    const orderButtons = document.querySelectorAll('button');
    
    orderButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Change the background to transparent
            this.style.backgroundColor = 'transparent';
            // Change the text color to grey
            this.style.color = 'grey';
            // Change the button text to 'SELECTED'
            this.textContent = 'SELECTED';
        });
    });
});