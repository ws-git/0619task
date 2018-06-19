define(['jquery', 'reder'], function($, reder) {
    $.ajax({
        url: '/api/src',
        success: function(data) {
            console.log(data);
            reder('#tpl', data, '.list')
        },
        error: function(res) {

        }
    })
});