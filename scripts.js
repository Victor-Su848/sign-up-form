

function confirmPasswords(string1, string2) {
    return string1 === string2;
}

const initPassInput = document.getElementById("init-pass");
const confirmPassInput = document.getElementById("confirm-pass");



initPassInput.addEventListener('input', () => {
    //passwords match
    console.log(initPassInput.value);
    if(confirmPasswords(initPassInput.value, confirmPassInput.value)) {
        console.log("confirm passwords method ran successfully");
        initPassInput.setCustomValidity("");
        confirmPassInput.setCustomValidity("");
    } 
    //passwords do not match
    else {
        console.log("confirm passwords method did not run successfully");
        initPassInput.setCustomValidity("Invalid field.");
        
        confirmPassInput.setCustomValidity("Invalid field.");
        console.log("but password inputs should be considered invalid now!");
    }
});

confirmPassInput.addEventListener('input', () => {
    //passwords match
    console.log(confirmPassInput.value);
    if(confirmPasswords(initPassInput.value, confirmPassInput.value)) {
        console.log("confirm passwords method ran successfully");
        initPassInput.setCustomValidity("");
        confirmPassInput.setCustomValidity("");
        
    } 
    //passwords do not match
    else {
        console.log("confirm passwords method did not run successfully");
        initPassInput.setCustomValidity("Invalid field.");
        confirmPassInput.setCustomValidity("Invalid field.");
    }
});