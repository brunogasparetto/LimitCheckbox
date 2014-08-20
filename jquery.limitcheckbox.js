/*global jQuery */

/*!
 *  Project: LimitCheckbox
 *  Description: JQuery Plugin: Block the checkboxes when reach the limit
 *  Author: Bruno Gasparetto <brunogasparetto@gmail.com>
 *  License: MIT
 */
(function ($) {
    "use strict";

    // Create the defaults once
    var pluginName = 'limitcheckbox',
        defaults = {
            limit: 5
        };

    // The actual plugin constructor
    function Plugin(element, options) {
        this.options    = $.extend({}, defaults, options);
        this.element    = $(element);
        this.checkboxes = this.element.find("input[type=checkbox]");
        this.init();
    }

    Plugin.prototype = {
        init: function () {
            var limitCheckbox = this.element.data("limitCheckbox"),
                self = this;

            self.remaining = limitCheckbox !== undefined ?
                            parseInt(limitCheckbox, 10) :
                            self.options.limit;

            self.element.on("change." + pluginName, "input[type=checkbox]", function () {
                self.change(this);
            });
        },

        change: function (element) {
            var old = this.remaining;

            if (element.checked) {
                this.remaining -= 1;
            } else {
                this.remaining += 1;
            }

            if (!old) {
                this.open();
            } else if (!this.remaining) {
                this.close();
            }
        },

        close: function () {
            this.checkboxes.not(':checked').attr("disabled", true);
        },

        open: function () {
            this.checkboxes.attr("disabled", false);
        }
    };

    $.fn[pluginName] = function (options) {
        if (typeof options === "number") {
            options = {
                limit: options
            };
        }
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });
    };

}(jQuery));