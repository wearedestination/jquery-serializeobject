(function (factory) {
    // Universal Module Definition
    /* jshint strict: false */
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    } else if (typeof module === "object" && module.exports) {
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
})(function ($) {
    $.fn.serializeObject = function () {
        const result = {};

        $.each(this.serializeArray(), function (i, element) {
            if (!result.hasOwnProperty(element.name)) {
                // First instance. Create single value
                result[element.name] = element.value;
            } else if (Array.isArray(result[element.name])) {
                // Third or greater instance. Push to array
                result[element.name].push(element.value);
            } else {
                // Second instance. Convert to array
                result[element.name] = [result[element.name], element.value];
            }
        });

        return result;
    };
});

