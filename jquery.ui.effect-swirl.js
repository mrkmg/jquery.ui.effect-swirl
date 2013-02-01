/*!
 * jQuery UI Effects Swirl v1
 * https://github.com/mrkmg/jquery.ui.effect-swirl
 *
 * Copyright 2013 MrKMG  (http://mrkmg.com)
 * Released under the MIT license.
 * http://opensource.org/licenses/MIT
 *
 *
 * Depends:
 *  jquery.ui.effect.js
 */
(function( $, undefined ) {

$.effects.effect.swirl = function( o, done ) {
    var el = $( this ),
        mode = $.effects.setMode( el, o.mode || "toggle" );

    o = $.extend({},{spins:1},o);
    
    if(mode == "hide"){
        el
        .css({
            '-jq-swirl': 0,
            '-moz-transform': 'scale(1) rotate(0deg)',
            '-webkit-transform': 'scale(1) rotate(0deg)',
            '-o-transform': 'scale(1) rotate(0deg)',
            '-ms-transform': 'scale(1) rotate(0deg)',
            'transform': 'scale(1) rotate(0deg)'
        })
        .animate({
            '-jq-swirl': 100
        },{
            queue:false,
            duration: o.duration,
            easing: o.easing,
            step:function(step){
                var scale = (100 - step)/100,
                    rotate = ((100 - step)/100) * (360 * o.spins);
                el.css({
                    '-moz-transform': 'scale('+scale+') rotate('+rotate+'deg)',
                    '-webkit-transform': 'scale('+scale+') rotate('+rotate+'deg)',
                    '-o-transform': 'scale('+scale+') rotate('+rotate+'deg)',
                    '-ms-transform': 'scale('+scale+') rotate('+rotate+'deg)',
                    'transform': 'scale('+scale+') rotate('+rotate+'deg)'
                });  
            },
            complete: function() {
                el.hide();
                done();
            }
        });
    } else {
        el
        .css({
            '-jq-swirl': 0,
            '-moz-transform': 'scale(0) rotate(360deg)',
            '-webkit-transform': 'scale(0) rotate(360deg)',
            '-o-transform': 'scale(0) rotate(360deg)',
            '-ms-transform': 'scale(0) rotate(360deg)',
            'transform': 'scale(0) rotate(360deg)'
        })
        .show()
        .animate({
            '-jq-swirl': 100
        },{
            queue:false,
            duration: o.duration,
            easing: o.easing,
            step:function(step){
                var scale = step/100,
                    rotate = (step/100) * (360 * o.spins);
                el.css({
                    '-moz-transform': 'scale('+scale+') rotate('+rotate+'deg)',
                    '-webkit-transform': 'scale('+scale+') rotate('+rotate+'deg)',
                    '-o-transform': 'scale('+scale+') rotate('+rotate+'deg)',
                    '-ms-transform': 'scale('+scale+') rotate('+rotate+'deg)',
                    'transform': 'scale('+scale+') rotate('+rotate+'deg)'
                });  
            },
            complete:done
        });
    }
};

})( jQuery );
