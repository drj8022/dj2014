/*global dj2014, Backbone, JST*/

dj2014.Views = dj2014.Views || {};

(function () {
    'use strict';

    dj2014.Views.ProjectAllView = Backbone.View.extend({

        tagName: 'section',

        id: 'content',

        template: JST['app/scripts/templates/projectAll.ejs'],

        events: {
            'click #filters .filter': 'filterIsotope',
        },

        render: function() {
            this.$el.html(this.template({projects: this.options.projects}));
            return this;
        },

        filterIsotope: function( e ) {
            // Filter Isotoped items
            var $el = $(e.target);
            $el.addClass('active').siblings().removeClass('active');
            $('#projects').isotope({
                filter: $el.attr('data-filter'),
            });
        },

        layoutIsotope: function() {
            // Calculate Isotope sizes based on #wrap size
            var isoWidth = $('#wrap').width();
            if (isoWidth >= 960) {
                this.columnWidth = 245;
                this.rowHeight = 179;
            } else if (isoWidth < 960 && isoWidth >= 768) {
                this.columnWidth = 262;
                this.rowHeight = 190;
            } else if (isoWidth < 768 && isoWidth >= 460) {
                this.columnWidth = 240;
                this.rowHeight = 176;
            } else {
                this.columnWidth = 320;
                this.rowHeight = 225;
            }

            // Init Isotope
            this.doIsotope();
        },

        doIsotope: function() {
            $('#projects').isotope({
                itemSelector: '.project',
                layoutMode: 'cellsByRow',
                resizable: false,
                cellsByRow: {
                    columnWidth: this.columnWidth,
                    rowHeight: this.rowHeight
                }
            });
        }

    });

})();
