const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");
window.addEventListener("mousemove", function(e){
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.pageX + "px; top: " + e.pageY + "px;";

});