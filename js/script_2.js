var lastScrollTop = 0;
header = document.querySelector('header');
window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
        header.style.top = "-80px";
    } else {
        header.style.top = "0";
    }
    lastScrollTop = scrollTop;
})
// courses Videos START
let listVideo = document.querySelectorAll('.next_up .video');
let bigVideo = document.querySelector('.big_video video');
let title = document.querySelector('.big_video .vid_title');
let download = document.querySelector('.big_video h2 .video_time')
let script = document.querySelector('.big_video .vid_script')
console.log(download.children)
listVideo.forEach(video =>{
    video.onclick = () =>{
        listVideo.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active');
        if(video.classList.contains('active')){
            let src = video.children[0].getAttribute('src');
            bigVideo.src = src;
            let poster = video.children[0].getAttribute('poster');
            bigVideo.poster = poster;
            let down = download.children[0].getAttribute('href');
            bigVideo.download = down;
            let text = video.children[1].innerHTML;
            title.innerHTML = text;
            let textt  = video.children[2].innerHTML;
            script.innerHTML =textt;
        };
    };
});
// courses Videos END
