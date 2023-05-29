var articals;

var modal={
data:$.ajax({
        url:'https://newsapi.org/v2/top-headlines/sources?apiKey=29804ca800024a05abbc5bb5a7b4c9c3',
        success:function (articals) {
         
          
        }
    }),
  countries: $.ajax({
    url:'https://restcountries.com/v3.1/all',
    success:function (result) {
        view.render(result);
       
    }
}), 
country_artical:function (c){
 
    $.ajax({
        url:'https://newsapi.org/v2/top-headlines?country='+c+'&apiKey=29804ca800024a05abbc5bb5a7b4c9c3',
        success:function (articals) {
            console.log(articals);
            view.render_articles(articals);
    
        },
    
        
    });
},
  

};


var controller={
    articals:null,
    init:function () {
       
     
    },
    getarticals:function (r) {
     r= r.toLowerCase();
        modal.country_artical(r);
        
    },
   

};

var view={
    render:function(result){

        const template = document.getElementById('template').innerHTML;
        var car=$('#target');
        for (let index = 0; index < result.length; index++) {
            const rendered = Mustache.render(template, result[index]);
          
                car.append(rendered);
                if(result[index].name.common!='Cocos (Keeling) Islands'){
                $('#'+result[index].cca2).click(function(){
                 
                   controller.getarticals(result[index].cca2);
                
                });
                }
        }


            
         test();
          
     
        

    },
    render_articles:function (articals) {
        
        const template = document.getElementById('template1').innerHTML;
        var car1=$('#target1');
        var clean=$('#template1');
      
        
        if(articals.totalResults==0){
          alert('no Article for this country');
        }
        else{

            for (let index = 0; index < articals.articles.length; index++) {
                const rendered = Mustache.render(template, articals.articles[index]);
              
                    car1.append(rendered);
               
            }
        }
      

        
    }
};
controller.init();
function test(){
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:5,
    nav:true,
    dots:false,
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
});
}
