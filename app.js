document.addEventListener("DOMContentLoaded", function() {
    var ext = document.querySelectorAll('a[target="_blank"]:not(.intern)').forEach(ext => {
        ext.addEventListener('click', (e) => {
            if(!confirm("Es wird eine externe Seite in einem neuen Fenster/Tab geladen")) e.preventDefault();
        });        
    });  
});
