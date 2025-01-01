const lightTheme = [
    "--bg-color: white",
    "--text-color: var(--color-black)",
    "--box-shadow: var(--box-shadow-light)",
    "--divider-line: var(--light-line)",
    "--loading-theme: var(--loading-light)"
  ];
  
const darkTheme = [
    "--bg-color: #282c34;",
    "--text-color: var(--color-white)",
    "--box-shadow: var(--box-shadow-dark)",
    "--divider-line: var(--dark-line)",
    "--loading-theme: var(--loading-dark)"
];

function ChangeTheme(turnSwitch) {
    const root = document.getElementsByTagName("html")[0];
    let theme;

    if(turnSwitch)
        theme = darkTheme
    else
        theme = lightTheme;

    root.style.cssText += theme.join(";");
        
}

export default ChangeTheme;