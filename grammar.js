



/* __________________________________________________________________ 색상 토글 */
/* HTML */
<input id="night_day" type="button" value="night" onclick="nightdayHandler(this)">                
</input>


/* Javascript */
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