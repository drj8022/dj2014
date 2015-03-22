/*global dj2014, $, _, Backbone*/

window.dj2014 = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    Events: {},
    init: function () {
        'use strict';

        // Globals
        this.global = {
            THUMBS: 'images/thumbs/',
            BOOK: 'images/book/'
        };

        // dj2014 events
        _.extend(dj2014.Events, Backbone.Events);

        // Load data
        // TODO: Maybe do a cool loading thing here, but dogg the file is like 20k.
        var projectCollection = new dj2014.Collections.ProjectCollection();
        projectCollection.fetch({
            success: function(collection) {
                dj2014.Events.trigger('data:loaded', collection);
            },
            error: function() {
                // Boned
            }
        });

        // Kickoff
        dj2014.Events.on('data:loaded', function(data) {
            var layout = new dj2014.Views.LayoutView();
            new dj2014.Routers.Dj2014Router({layout: layout, data: data});
            Backbone.history.start();
        });
    }
};

$(document).ready(function () {
    'use strict';
    dj2014.init();
});
