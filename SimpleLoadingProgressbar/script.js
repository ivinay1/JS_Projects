var progressBar = document.getElementsByClassName("loading")[0];  // it will return a html collection of all elements having the same class as metioned as we want to select the pseudo class which is not a part of class but it has a same name as of class so we can select it using this method

console.log(progressBar);

// const styling = getComputedStyle(progressBar);  // it will give you whole css styling ( inline+external) in the form of object(key-value pair)

setInterval(() => {
    // Get the computed style of the progressBar element
    const styling = getComputedStyle(progressBar);

    // Get the value of the custom property --wide
    const val = styling.getPropertyValue('--wide');

    // Parse the value to a float
    const loadOn = parseFloat(val) || 0;

    // Increment the value
    progressBar.style.setProperty('--wide', loadOn + 0.1);

}, 5);
