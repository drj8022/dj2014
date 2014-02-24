/*global dj2014, Backbone, JST*/

dj2014.Views = dj2014.Views || {};

(function () {
    'use strict';

    dj2014.Views.AboutView = Backbone.View.extend({

        tagName: 'section',

        id: 'content',

        className: 'page about',

        template: JST['app/scripts/templates/about.ejs'],

        initialize: function() {
            $('#menu .about').addClass('active');
        },

        render: function() {
            this.$el.html(this.template());
            return this;
        }

    });

})();
