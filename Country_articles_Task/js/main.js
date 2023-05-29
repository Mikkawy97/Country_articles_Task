var articals;

var modal={
data:$.ajax({
        url:'https://newsapi.org/v2/top-headlines/sources?apiKey=78bdb733807e42d68afd63b6a101bdbc',
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
        url:'https://newsapi.org/v2/top-headlines?country='+c+'&apiKey=78bdb733807e42d68afd63b6a101bdbc',
        success:function (articals) {
            console.log(articals);
    
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
                $('#'+result[index].name.common).click(function(){
                    alert('dad');
                   controller.getarticals(result[index].cca2);
                
                });
                }
        }


            
         test();
          
     
        

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
