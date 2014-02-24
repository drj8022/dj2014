/*global dj2014, Backbone, JST*/

dj2014.Views = dj2014.Views || {};

(function () {
    'use strict';

    dj2014.Views.ProjectOneView = Backbone.View.extend({

        tagName: 'section',

        id: 'content',

        template: JST['app/scripts/templates/projectOne.ejs'],

        events: {
            'click .swiper-next': 'swiperNext',
            'click .swiper-prev': 'swiperPrev'
        },

//        initialize: function() {
//            console.log('ProjectOneView initialize');
//        },

        render: function() {
            console.log(this.options.project);
            this.$el.html(this.template({project: this.options.project}));
            this.$next = this.$el.find('.swiper-next');
            this.$prev = this.$el.find('.swiper-prev');
            return this;
        },

        doSwiper: function() {
            console.log('doSwiper');
            // Fire carousel if there are enough things.
            if (this.options.project.carousel.length > 1) {
                var self = this;
                this.swiper = this.swiper || $('#slideshow').swiper({
                    pagination: '.swiper-nav',
                    paginationClickable: true,
                    keyboardControl: true,
                    onSlideChangeStart: function(){
                        self.swiperUpdate();
                    }
                });
                this.swiperUpdate();
            } else {
                // Hide nav if no carousel
                this.$next.hide();
                this.$prev.hide();
            }
        },

        swiperNext: function() {
            this.swiper.swipeNext();
        },

        swiperPrev: function() {
            this.swiper.swipePrev();
        },

        swiperUpdate: function() {
            // Only toggle prev/next arrow visibility if we're on tablet or above
            if ($('#wrap').width() >= 768) {
                if (this.swiper.activeIndex <= 0) {
                    // At the beginning
                    this.$next.fadeIn();
                    this.$prev.fadeOut();
                } else if (this.swiper.activeIndex >= this.swiper.slides.length - 1) {
                    // At the end
                    this.$next.fadeOut();
                    this.$prev.fadeIn();
                } else {
                    // In the middle
                    this.$next.fadeIn();
                    this.$prev.fadeIn();
                }
            } else {
                // No carousel nav on mobile
                this.$next.hide();
                this.$prev.hide();
            }
        }

    });

})();
