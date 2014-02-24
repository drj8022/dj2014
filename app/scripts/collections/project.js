/*global dj2014, Backbone*/

dj2014.Collections = dj2014.Collections || {};

(function () {
    'use strict';

    dj2014.Collections.ProjectCollection = Backbone.Collection.extend({

        url: 'data.json',

        model: dj2014.Models.ProjectModel,

//        oneProject: function( pid ) {
//            var filtered = this.filter(function(project) {
//                return project.get('id') === pid;
//            });
//            return new dj2014.Collections.ProjectCollection(filtered);
//        }

    });

})();
