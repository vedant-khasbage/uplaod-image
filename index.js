document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("upload").addEventListener("click", function() {
        document.getElementById("inputimg").click();
    });
    
    document.getElementById("inputimg").addEventListener("change", function() {
        document.querySelector(".profile").src = URL.createObjectURL(this.files[0]);
    });
});

