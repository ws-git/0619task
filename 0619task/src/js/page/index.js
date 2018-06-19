define(['jquery', 'reder', 'handlebars'], function($, reder, handlebars) {
    $.ajax({
        url: '/api/src',
        success: function(data) {
            var data = JSON.parse(data);
            reder('#tpl', data, '.list')
        },
        error: function(res) {

        }
    })
});