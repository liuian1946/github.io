/**
 * Created by chxq on 2016/10/15.
 */
(function () {

    $(function () {
        var id=getParameter('Id');
        console.log(id);
        var who=getParameter('who');
        var when=getParameter('when');
        var why=getParameter('why');
        var topic=getParameter('topic');
        console.log(who.length);
        console.log(when.length);
        console.log(why.length);
        if(who.length>1){
            getWho(who);
        }
        else if(when.length>1){
            getWhen(when);
        }
        else if(why.length>1){
            getWhy(why);
        }
        else if(topic.length>1){
            getTopic(topic);
        }
        Like();
    });

    function  getParameter(name){
        var  match=new RegExp('[?&]'+name+'=([^&]*)').exec(location.search);
        return  match&&decodeURIComponent(match[1]);
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
    function getWho(name) {
        var newdatass= data.filter(function (item) {
            return  item.WhoSend.indexOf(name)>-1;
        })
        $('#1').html(template('mytemp2',{list:newdatass}));
    }
    function getWhy(name) {
        var newdatass= data.filter(function (item) {
            return  item.WhoSend.indexOf(name)>-1;
        })
        $('#1').html(template('mytemp2',{list:newdatass}));
    }
    function getWhen(name) {
        var newdatass= data.filter(function (item) {
            return  item.WhoSend.indexOf(name)>-1;
        })
        $('#1').html(template('mytemp2',{list:newdatass}));
    }
    function getTopic(name) {
        var newdatass= data.filter(function (item) {
            return  item.WhoSend.indexOf(name)>-1;
        })
        $('#1').html(template('mytemp2',{list:newdatass}));
    }
})();