







/*_____________________________________________________________________ 네비게시션*/

const toggleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});


/*_____________________________________________________________________ 색상토글*/
var Link = {
    SetColor : function(iColor) {        
        // var links = document.querySelectorAll('a');
        // var i = 0;
        // while(i < links.length) {
        //     links[i].style.color=iColor;
        //     i=i+1;
        // }
        $('a').css('color', iColor);    //  jQuery 활용 예
    }
}

var Body = {
    SetBackgroundColor : function(iColor) {
        //document.querySelector('body').style.backgroundColor = iColor;
        $('body').css('backgroundColor', iColor);    //  jQuery 활용 예
    },            
    SetColor : function(iColor) {
        //document.querySelector('body').style.color = iColor;
        $('body').css('color', iColor);    //  jQuery 활용 예
    }           
} 

function nightdayHandler(self){
    var target = document.querySelector('body');

    if (self.value === 'night') {
        Body.SetBackgroundColor('black');
        Body.SetColor('white');
        self.value = 'day';
        Link.SetColor('yellow');
    } else {
        Body.SetBackgroundColor('white');                    
        Body.SetColor('black');
        self.value = 'night';
        Link.SetColor('blue');
    }
} 