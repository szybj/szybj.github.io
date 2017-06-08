(function(){
    var html = document.documentElement,
        htmlWidth = html.getBoundingClientRect().width;
    html.style.fontSize = htmlWidth/15 + 'px';
})();