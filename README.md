
# git_first

# 주석처리 Tip : Ctrl + '/'

# CSS 선택자 우선순위 :  TAG ( ) < ClASS ( . ) <  ID ( # )
  ex) <li><a href = "1.html" class="saw" id="active">HTML</a></li>


#【배열 _ Array】
  var coworkers = [
      "egoing", 
      "leezche"
      ]


#【객체 _ Object】_ JavaScript 32강
  var coworkers = {
      "programmer" : "egoing", 
      "designer"   : "leezche"
      }

  - document.write("designer : " + coworkers.designer);     // 가져오는 법
  - coworkers.bookkeeper        = "dure";                   // 입력하는 법
  - coworkers["data scientist"] = "taeho";  

    <script>
        for(var key in coworkers) {                         // iterate (반복하다. 되풀이하다.)
            document.write(key + ' : ' + coworkers[key]+ '<br>');
        }
    </script>

    <script>
        coworkers.showAll = function() {
        }

        function showAll() {            
        }
    </script>

# Library vs framework 
    - Library : jQuery 











