/*global dj2014, Backbone, JST*/

dj2014.Views = dj2014.Views || {};

(function () {
    'use strict';

    dj2014.Views.HeaderView = Backbone.View.extend({

        tagName: 'section',

        id: 'header',

        template: JST['app/scripts/templates/header.ejs'],

        events: {
            'click #menu': 'menuClick'
        },

        render: function() {
            this.$el.html(this.template());
            this.$menu = this.$('ul');
            this.$items = this.$('a');
        },

        resetItems: function() {
            this.$items.removeClass('active');
        },

        menuClick: function( e ) {
            var $target = $(e.target),
                menuClick = false;

            if ($target.is('#menu')) {
                menuClick = true;
            }

            // Desktop
            if (window.innerWidth > 768) {
                if (menuClick) {
                    // Do nothing
                }
                else {
                    this.resetItems();
                    $target.addClass('active');
                }
            }
            // Mobile
            else {
                if (menuClick) {
                    this.$menu.slideToggle('fast');
                }
                else {
                    this.$menu.slideUp('fast');
                }
            }
        }

    });

})();
