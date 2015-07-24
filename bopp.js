(function($, f) {

    var Bopp = function() {

        this.el = f;
        this.opts = {
            'title': 'Your title',
            'message': 'Are you sure?',
            'buttons': {
                'yes': {},
                'no': {},
                'cancel': {}
            }
        };

        this.init = function(el, o) {
            this.el = el;

            $.extend(this.opts, o);
            
            this.build();
        }
        
        this.build = function() {
            this.el.append('<div>' + this.opts.title + '</div>');
            this.el.append('<div>' + this.opts.message + '</div>');
        }

    }

    $.fn.bopp = function(o) {
        return (new Bopp).init($(this), o);
    }

})(window.jQuery, false);