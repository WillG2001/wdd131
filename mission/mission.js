let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // change body to dark
        document.body.className = 'dark';
        // change logo to the new logo
        logo.src = "byui-logo-white.png";
        
    } else if (current == 'light') {
        // remove dark class from body
        document.body.className = 'light'
        // change logo back to original logo
        logo.src = "byui-logo_blue.png";
    }
}