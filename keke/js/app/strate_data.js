/**
 * Created by Ran on 2016/10/13.
 */
define(['jquery','cookie','data'],function(a,b,c){
    var alldata = data;
    // if(!(alldata instanceof  Array))
    //     alldataAll = [];
    var alldata1 = [];
    var alldata2 = [];
    var alldata3 = [];
    for(var i=0;i<alldata.presentSearch.length;i++){
        if(alldata.presentSearch[i].type == 3){
            alldata1.push(alldata.presentSearch[i]);
        }else if(alldata.presentSearch[i].type == 2){
            alldata2.push(alldata.presentSearch[i]);
        }else if(alldata.presentSearch[i].type == undefined){
            alldata3.push(alldata.presentSearch[i])
        }
    }
    return{
        //    ��������
        getAll:function (){
            return alldata.presentSearch;
        },
        getdata1:function () {
            return alldata1;
        },
        getdata2:function () {
            return alldata2;
        },
        getdata3:function () {
            return alldata3;
        },
        getParameter:function (name){
            var match = new RegExp('[?&]'+name+'=([^&]*)').exec(location.search);
            //match[0] ƥ����ǣ�id=0 matchƥ�����0��
            return match&&decodeURIComponent(match[1]);
        },
        deble:function (num){
            if(num>9){
                return num;
            }else{
                return '0'+num;
            }
        }

    }
});
