

let showMenuMobile = true;

document.getElementById('menu_bars').addEventListener('click', function(){
    if(showMenuMobile){
        document.getElementById('mobile_menu').style.display = 'flex';
        showMenuMobile = false;
    }else{
        document.getElementById('mobile_menu').style.display = 'none';
        showMenuMobile = true;
    }
})