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
            limit: 5,
            onBlock: null,
            onRelease: null
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

            self.options.limit = limitCheckbox ? parseInt(limitCheckbox, 10) : self.options.limit;
            self.remaining = self.options.limit;

            self.element.on("change." + pluginName, "input[type=checkbox]", function (event) {
                self.change(this, event);
            });
        },

        change: function (element, event) {
            var old = this.remaining;

            if (element.checked) {
                this.remaining -= 1;
            } else {
                this.remaining += 1;
            }

            if (!old) {
                this.open();
                this.trigger("onRelease", element, event);
            } else if (!this.remaining) {
                this.close();
                this.trigger("onBlock", element, event);
            }
        },

        close: function () {
            this.checkboxes.not(':checked').attr("disabled", true);
        },

        open: function () {
            this.checkboxes.attr("disabled", false);
        },
        
        trigger: function (callback, element, event) {
            if (!this.options[callback]) {
                return;
            }
            this.options[callback].call(element, event, this.options.limit);
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