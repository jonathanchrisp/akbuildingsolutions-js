define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/testimonial.html'
  ], function ($, _, Backbone, testimonial) {
    'use strict';

    var Testimonial = Backbone.View.extend({

      tagName: 'div',

      className: 'rsContent',

      template: Handlebars.compile(testimonial),

      render: function() {
        var testimonial = this.template(this.model.toJSON());
        this.$el.html(testimonial);
        return this;
      }

    });

    return Testimonial;
  });
