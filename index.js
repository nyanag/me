blog.addEventListener('click',function(){
    intro.style.display = "none";
    content.style.display = "block";
    work_div.style.display = "none"

    content.innerHTML = "Coming Soon!"
})

about.addEventListener('click', function(){
    content.style.display = "none";
    intro.style.display = "block";
    work_div.style.display = "none"
})

work.addEventListener('click',function(){
    intro.style.display = "none";
    content.style.display = "none";
    work_div.style.display = "block"
})

// donate.addEventListener('click',function(){
//     intro.style.display = "none";
//     content.style.display = "block";
//     content.innerHTML = "Coming Soon :)"
// })