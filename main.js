$('.drum-pad').on('click',function(){
    $(this).addClass($(this).text().replace(/[^a-zA-z]/g,''));
    setTimeout(()=>{    $(this).removeClass($(this).text().replace(/[^a-zA-z]/g,''));
    },200);
    
    let id = $(this).text().replace(/[^a-zA-z]/g,'');
    console.log(id);
    document.getElementById(id).play();
    $('#display').text($(this).attr('action').toUpperCase())
  })
    
    const keys2 = [81,87,69,65,83,68,90,88,67];
  $(document).keydown(function(e){
   keys2.map(el => {
     if(e.keyCode == el){
       let drumpad = '#drumpad'+ el;
       console.log(drumpad);
       $(drumpad).click();
     }
   })
    
  })
  