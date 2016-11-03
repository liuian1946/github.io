/**
 * Created by llqh on 2016/10/13.
 */
(function () {
    $(function () {
        var id=getParameter('Id');
        getData(id);
        Like();
    });
    function  getParameter(name){
        var  match=new RegExp('[?&]'+name+'=([^&]*)').exec(location.search);
        return  match&&decodeURIComponent(match[1]);
    }
    function  getData(id) {
          data.forEach(function (item) {
              if(item.Id==id){
                  var data=[];
                 data.push(item);
                  $('#content').html(template('mytemp3',{list:data}));
                  $('.num').text(data[0].Enjoy);
                  getList(data[0].GiftTopic);
              }
          });
    }
    function  getList(topic) {
        var datanew=[];
        data.forEach(function (item) {
            if (item.GiftTopic==topic){
                datanew.push(item);
                $('#lists').html(template('mytemp2',{list:datanew}))
            }
        })
    }
    function   Like() {
        var  like=true;
        var num=$('.num').text();
        $('#enjoy').click(function () {
             if (like){
                 num++;
                 $('.like').text('已喜欢('+num+')');
                 like=false;
             }else {
                 num--;
                 $('.like').text('喜欢('+num+')');
                 like=true;
             }
        })
    }
})();