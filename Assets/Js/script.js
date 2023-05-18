const botaoDark = document.getElementById('toggle-dark');

if (localStorage.getItem('data-theme') == 'dark') {
  botaoDark.checked = true;
}

botaoDark.addEventListener('change', () => {
    let theme = localStorage.getItem('data-theme');
    if (!botaoDark.checked){
        changeThemeToLight()
    }else{
        changeThemeToDark()
    }
});