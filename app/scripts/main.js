/*global dj2014, $, Backbone*/


window.dj2014 = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';

        // Globals
        this.global = {};
        this.global.SERVER = 'http://localhost:9000/';
        this.global.IMGDIR = 'images/';
        this.global.THUMBS = this.global.IMGDIR + 'thumbs/';
        this.global.BOOK   = this.global.IMGDIR + 'book/';

        // App init
        var layout = new dj2014.Views.LayoutView();
        new dj2014.Routers.Dj2014Router({layout: layout});
        Backbone.history.start();

        // Open outbound links in new tab
        $('a[href^="http://"]').attr('target', '_blank');
    }
};

$(document).ready(function () {
    'use strict';
    dj2014.init();
});
