
window.addEventListener('DOMContentLoaded',function(){
    var scriptElement = document.createElement('style')
    var documentWidth =  this.window.screen.width;
    var fontSize = documentWidth / 10
    scriptElement.innerHTML  = 'html{font-size:'+ fontSize +'px;}'
    console.log('html{font-size:'+ fontSize +'px;}')
    document.head.appendChild(scriptElement)
})