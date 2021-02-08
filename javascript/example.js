'use strict'


$(document).ready(function(){
    $('#search-ico').click(function(){
        if($('#search-inp').css('display','none')){
            $('#search-inp').css('display','block');
            $('#search-ico').css('display','none');
            $('#exit-ico').css('margin-left','25rem');
            $('#exit-ico').css('opacity','1');
        }
       else if ($('#search-inp').css('display','block')) {
        $('#exit-ico').css('display','block');
       }
        $('#search-inp').keydown(function(){
            $(this).css('border','1px solid black');
            $(this).css('border-radius','7px');
            $('ol').css('display','none');
            $('ol').css('display','none');
        });
        $('#search-inp').keyup(function(){
            $(this).css('border','none');
            $(this).css('border-radius','0')
            var value = $(this).val().toUpperCase();
            $('ol li').filter(function(){
                $(this).toggle($(this).text().toUpperCase().indexOf(value)==0);
                $('ol').css('display','block');
            })
        })

    });
    $('#exit-ico').click(function(){
        $('#search-inp').css('display','none');
        $('ol').css('display','none');
        $('#search-ico').css('display','block');
        $('#exit-ico').css('display','none');
       
    })
});


$(document).ready(function(){
    $('#bars-ico').click(function(){
        
    })
})


var input = document.getElementById('pass-inp')
$(document).ready(function(){
    $('#eye-ico').click(function(){
       if(input.type== 'password'){
           input.type='text'
       }
       else(
           input.type='password'
       )
    })
})
var icon = document.getElementById('eye-ico');

icon.addEventListener('click',function(){
    if(icon.className == "far fa-eye"){
        icon.className = "far fa-eye-slash"
    }
    else(
        icon.className = "far fa-eye"
    )
});

$(document).ready(function(){
    $('#inp2').keypress(function(e){
        if(e.which !=8  && e.wihich !=0 && (e.which<48 || e.which>57)){
            e.preventDefault();
           alert("ancaq reqem")
        }
    })
  
  })
//   $(document).ready(function(){
//     $(document).bind('contextmenu',function(e){
//         e.preventDefault()
//     })
//   })


var sideMenu = document.getElementById('side-bar');

function myfunction(){
        sideMenu.style.width = '64%'
        sideMenu.style.transition = '1s'
}

var x = document.getElementById('x-btn');
function myfunction1(){
    sideMenu.style.width = '0%'
}