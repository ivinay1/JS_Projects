document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('.formControl input');
    
    // Loop through each input field
    inputs.forEach(input => {
        
        // Add an event listener for the 'focus' event to trigger when input is clicked/focused
        input.addEventListener('focus', function() {
            this.nextElementSibling.classList.add('active'); 
            // Adds the 'active' class to the label, which moves it up
        });
        
        // Add an event listener for the 'blur' event to trigger when input loses focus
        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.nextElementSibling.classList.remove('active');
                // Removes the 'active' class from the label if input is empty, moving it back down
            }
        });
    });
});
