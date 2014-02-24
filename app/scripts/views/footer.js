/*global dj2014, Backbone, JST*/

dj2014.Views = dj2014.Views || {};

(function () {
    'use strict';

    dj2014.Views.FooterView = Backbone.View.extend({

        tagName: 'section',

        id: 'footer',

        template: JST['app/scripts/templates/footer.ejs'],

        render: function() {
            this.$el.html(this.template());
        }

    });

})();
