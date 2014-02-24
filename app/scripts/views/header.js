/*global dj2014, Backbone, JST*/

dj2014.Views = dj2014.Views || {};

(function () {
    'use strict';

    dj2014.Views.HeaderView = Backbone.View.extend({

        tagName: 'section',

        id: 'header',

        template: JST['app/scripts/templates/header.ejs'],

        events: {
            'click h1 a': 'clearActive',
            'click #menu a': 'updateActive',
        },

//        initialize: function() {
//            console.log('HeaderView initialize');
//        },

        render: function() {
            this.$el.html(this.template());
            this.doResponsiveMenu();
        },

        doResponsiveMenu: function() {
            var $menu  = $('#menu'),
                $menUl = $('ul', $menu);

            // smartresize() is bundled with Isotope
            $(window).smartresize(function(){
                // If the screen is at least tablet size, and the menu is hidden
                if (window.outerWidth > 767 && $menUl.is(':hidden')) {
                    $menUl.show();
                }
            });

            $menu.on('click', function(){
                // TODO: add a class for CSS animation
                // Edge case odd behavior going from mobile to tablet sizes.
                if (window.outerWidth <= 767) {
                    $menUl.slideToggle('fast');
                }
            });
        },

        clearActive: function() {
            $('#menu a').removeClass();
        },

        updateActive: function( e ) {
            this.clearActive();
            $(e.target).addClass('active');
        }

    });

})();
