var typed = new Typed(".auto-type", {
    strings: [ "नमस्ते", "ನಮಸ್ಕಾರ", "வணக்கம்", "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ", "Hallo", "안녕하세요", "привет", "Bonjour", "مرحبًا", "السلام علیکم", "Hello", "Aloha"],
    typeSpeed: 100,
    backSpeed: 70,
    loop: true
});


function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}