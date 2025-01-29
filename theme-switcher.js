// JavaScript to handle theme switching
document.getElementById("theme-selector").addEventListener("change", function () {
    const selectedTheme = this.value; // Get the value of the selected option
    document.getElementById("theme-stylesheet").setAttribute("href", selectedTheme);
});
