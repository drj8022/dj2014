/*global dj2014, Backbone, _*/

dj2014.Routers = dj2014.Routers || {};

(function () {
    'use strict';

    dj2014.Routers.Dj2014Router = Backbone.Router.extend({

        routes: {
            '': 'index',
            'about': 'about',
            'contact': 'contact',
            'project/:pid': 'project'
        },

        initialize: function(options) {
            this.layout = options.layout;
            this.data = options.data;
        },

        index: function() {
            // Reset nav
            this.layout.header.resetItems();

            // Draw all projects
            var projectAllView = new dj2014.Views.ProjectAllView({projects: this.data.models});
            this.layout.renderChild(projectAllView);
            projectAllView.layoutIsotope();

            // Listen for resize and re-trigger Isotope
            // smartresize() is bundled with Isotope
            $(window).smartresize(function(){
                projectAllView.layoutIsotope();
            });
        },

        project: function( pid ) {
            // Reset nav
            this.layout.header.resetItems();

            // Draw this project
            var project = _.findWhere(this.data.models, {id: pid}),
                projectOneView = new dj2014.Views.ProjectOneView({project: project.attributes});
            this.layout.renderChild(projectOneView);
            projectOneView.doSwiper();

            // Listen for resize and re-trigger Swiper
            // smartresize() is bundled with Isotope
            $(window).smartresize(function(){
                projectOneView.swiperUpdate();
            });
        },

        about: function() {
            // Reset nav
            this.layout.header.resetItems();

            // About page
            var aboutView = new dj2014.Views.AboutView();
            this.layout.renderChild(aboutView);
        },

        contact: function() {
            // Reset nav
            this.layout.header.resetItems();

            // Contact page
            var contactView = new dj2014.Views.ContactView();
            this.layout.renderChild(contactView);
        }

    });

})();
