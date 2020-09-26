
console.log('Hello there!')
console.group('Lil secret here')
console.log('Drag your cursor along the page for some fun!')
console.log('Or even click! Did you double click!!')
console.groupEnd();

console.log('Feel free to reach out to me on ananyaganesh01@gmail.com!')

about = document.getElementById('about')
work = document.getElementById('work')
content = document.getElementById('content')
work_div = document.getElementById('work_div')
// blog.addEventListener('click',function(){
//     intro.style.display = "none";
//     content.style.display = "block";
//     work_div.style.display = "none"

//     content.innerHTML = "Coming Soon!"
// })

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