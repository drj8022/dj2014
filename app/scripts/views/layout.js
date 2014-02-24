/*global dj2014, Backbone, JST*/

dj2014.Views = dj2014.Views || {};

(function () {
    'use strict';

    dj2014.Views.LayoutView = Backbone.View.extend({

        el: '#wrap',

        template: JST['app/scripts/templates/layout.ejs'],

        initialize: function() {
            // Declare subviews
            this.header = new dj2014.Views.HeaderView();
            this.footer = new dj2014.Views.FooterView();

            // Render
            this.render();
        },

        render: function() {
            // Reset DOM
            this.$el.html(this.template());

            // Attach subviews
            this.header.setElement(this.$('#header')).render();
            this.footer.setElement(this.$('#footer')).render();
        },

        renderChild: function( view ) {
            // Kill double post monsters
            if(this.child) {
                this.child.remove();
            }

            // Attach subview
            // make sure to 'return this' in view.render
            this.$('#content').replaceWith(view.render().el);
        }

    });

})();
