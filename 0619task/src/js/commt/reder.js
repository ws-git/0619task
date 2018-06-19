define(['jquery', 'handlebars'], function($, handlebars) {
    function reder(element, res, cont) {
        //接受模板
        var tpl = $(element).html();
        //预编辑
        var templat = handlebars.complice(tpl);
        //接受json数据
        var html = templat(res);
        //输入模板
        $(cont).html(html);
    }
    return reder;
})