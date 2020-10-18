(function () {
    var carousel, next, seats;
    carousel = $(".carousel");
    seats = $(".carousel-seat");
    next = function (el) {
        if (el.next().length > 0) {
            return el.next();
        } else {
            return seats.first();
        }
    };
    $(".toggle").on('click', function (e) {
        var el, i, j, new_seat, ref;
        el = $('.is-ref').removeClass('is-ref');
        new_seat = next(el);
        new_seat.addClass('is-ref').css('order', 1);
        for (i = j = 2, ref = seats.length; 2 <= ref ? j <= ref : j >= ref; i = 2 <= ref ? ++j : --j) {
            //if (window.CP.shouldStopExecution(1)) {
            //    break;
            //}
            new_seat = next(new_seat).css('order', i);
        }
        //window.CP.exitedLoop(1);
        carousel.removeClass('is-set');
        return setTimeout(function () {
            return carousel.addClass('is-set');
        }, 50);
    });
}.call(this));