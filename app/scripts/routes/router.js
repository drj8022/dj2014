/*global dj2014, Backbone, _*/

dj2014.Routers = dj2014.Routers || {};

(function () {
    'use strict';

    dj2014.Routers.Dj2014Router = Backbone.Router.extend({

        initialize: function(options) {
            this.layout = options.layout;
            this.$body = $('body');
        },

        routes: {
            '': 'index',
            'about': 'about',
            'contact': 'contact',
            'project/:pid': 'project'
        },

        index: function() {
            this.layout.header.clearActive();

            // Show loader
            this.startLoad();

            // Grab all the projects, and draw them.
            var self = this,
                projectCollection = new dj2014.Collections.ProjectCollection();
            projectCollection.fetch({
                success: function(collection, response) {
                    var projectAllView = new dj2014.Views.ProjectAllView({projects: response});
                    self.layout.renderChild(projectAllView);
                    projectAllView.layoutIsotope();

                    // Hide loader
                    self.endLoad();

                    // Listen for resize and re-trigger Isotope
                    // smartresize() is bundled with Isotope
                    $(window).smartresize(function(){
                        projectAllView.layoutIsotope();
                    });
                },
                error: function() {
                    self.endLoad();
                    console.log('error fetching projects');
                }
            });
        },

        project: function( pid ) {
            this.layout.header.clearActive();
            
            // Grab all the projects, match the one we're looking for, and draw it.
            // Fire swiper carousel once elements are rendered.
            // TODO: Prolly shouldn't keep GETting this same crap always, but this app is not so complex...
            var self = this,
                projectCollection = new dj2014.Collections.ProjectCollection();
            projectCollection.fetch({
                success: function(collection, response) {
                    var project = _.findWhere(response, {id: pid}),
                        projectOneView = new dj2014.Views.ProjectOneView({project: project});
                    self.layout.renderChild(projectOneView);
                    projectOneView.doSwiper();
                    // Listen for resize and re-trigger Isotope
                    // smartresize() is bundled with Isotope
                    $(window).smartresize(function(){
                        projectOneView.swiperUpdate();
                    });
                },
                error: function() {
                    console.log('error fetching projects');
                }
            });
        },

        about: function() {
            // Flatpage
            var aboutView = new dj2014.Views.AboutView();
            this.layout.renderChild(aboutView);
        },

        contact: function() {
            // Flatpage
            var contactView = new dj2014.Views.ContactView();
            this.layout.renderChild(contactView);
        },

        startLoad: function() {
            this.$body.addClass('loading');
        },

        endLoad: function() {
            this.$body.removeClass('loading');
        }
    });

})();
