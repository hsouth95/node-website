"use strict";

(function () {
    var sums = [1, 2, 3].map(function (x) {
        return x * x;
    });
    var navBarHeight = $("header").outerHeight(true);
    /**
     * Shrinks the navigation bar and makes it sticky so it moves down with the page
     * @param barHeight - Height of the bar
     */
    function shrinkNavigationBar(barHeight) {
        if ($(document).scrollTop() > barHeight / 2) {
            $("header").addClass("shrink");
        } else {
            $("header").removeClass("shrink");
        }
    }

    $(window).scroll(function () {
        shrinkNavigationBar(navBarHeight);
    });
})();