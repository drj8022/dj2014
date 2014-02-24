/*global dj2014, Backbone, JST*/

dj2014.Views = dj2014.Views || {};

(function () {
    'use strict';

    dj2014.Views.ContactView = Backbone.View.extend({

        tagName: 'section',

        id: 'content',

        className: 'page contact',

        template: JST['app/scripts/templates/contact.ejs'],

        initialize: function() {
            $('#menu .contact').addClass('active');
        },

        render: function() {
            this.$el.html(this.template());
            return this;
        }

    });

})();
