$(document).ready(function(){
    $(window).scroll(function(e){
    let top = (window.scrollY + window.innerHeight) - $(".scroll").height();
    const left =  window.innerWidth - 100
                if(top >= 800){
                    $(".scroll").css("top", top -10).css("left", left)
                    $(".scroll").click(function(){
                        $("html").animate({scrollTop:0}, 1000).then(scroll)  
                    })
                    $("div").addClass("onscroll")
                }
    })
})

window.scrollTo(0,0)