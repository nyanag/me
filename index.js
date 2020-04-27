blog.addEventListener('click',function(){
    intro.style.display = "none";
    content.style.display = "block";
    content.innerHTML = "Coming Soon :)"
})

about.addEventListener('click', function(){
    content.style.display = "none";
    intro.style.display = "block";
})