(function($){

    $('.searchToggle').on('click', function(){
        $('.searchInput').toggleClass('active');
        $(this).find('i').toggleClass('fa-search').toggleClass('fa-times')
    });


    var slider = tns({
        container: '.banner--slider',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        mouseDrag: true,
        controls: false,
        nav: true
      }); 
    
      var dotCount = $(".tns-nav").find('button');

     dotCount.each(function(i){
         dotCount[i].append(i + 1)
     });

    //  Filter Functionality

    $(".filter--icon").on("click", function(){
        $(this).siblings(".filter--list").toggleClass("active")
    });

    $(".filter--search-button").on('click', function(){
        $(this).siblings(".filter--search-area").toggleClass("active")
    });

    // Dynamic tab
    let tabBtn = $("[data-tab-select]"), 
        tabContent = $("[data-tab-content]");

    tabBtn.each(function(){
        let tabValue = $(this).data('tab-select');
        
        if($(this).hasClass("active")){
           tabContent.each(function(){
               let tabContentValue = $(this).data("tab-content")
               if(tabContentValue == tabValue){
                $(this).addClass('active')
               }
               
           })
            
        }

        $(this).on('click', function(){
            $(this).addClass('active').siblings().removeClass('active');

            if($(this).hasClass("active")){
                tabContent.each(function(){
                    let tabContentValue = $(this).data("tab-content")
                    if(tabValue == tabContentValue){
                     $(this).addClass('active').siblings().removeClass('active')
                    }
                    
                })
                 
             }
        })
        
    })
    
    // Featured area

    let ftypeHeight = $(".featured--type").height();

    $(".featured--type span").css({
        "width": ftypeHeight,
    })

    //  Addclass to row
    $(".row").addClass("mb-30")
}(jQuery))



