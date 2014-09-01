(function(SirTrevor, document,$) {
    'use strict';

    var Heading = SirTrevor.Formatter.extend({

        title: 'heading',
        keyCode: 49,
        text: 'H',

        WHITESPACE_AND_BR: new RegExp('^(?:\s*<br\s*/?>)*\s*$', 'gim'),

        /**
         * These constant are few use with Range.comparePoint
         * https://developer.mozilla.org/en-US/docs/Web/API/range.comparePoint
         */
        TEXT_BEFORE: -1,
        TEXT_AFTER: 1,

        onClick: function() {
            var selection = document.getSelection();
            if (document.selection && document.selection.createRange) {
                var range = document.selection.createRange();
                console.log('test',range);
                //return range.htmlText;
            }
            if (selection.type !== 'Range' || selection.rangeCount === 0) {
                return null; // no ranges
            }
            var selection = window.getSelection();
            if (selection.rangeCount > 0) {
                range = selection.getRangeAt(0);
                var clonedSelection = range.cloneContents();
                console.log('clonedSelection');
                console.log(clonedSelection);
                var div = document.createElement('div');
                    div.appendChild(clonedSelection);
                div.innerHTML.replace('<h2>','');
                div.innerHTML.replace('</h2>','');
                console.log('innerHTML',div.innerHTML);
                var h=document.createElement("h2");
                var t=document.createTextNode(selection.toString());
                if(h.appendChild(t)){
                    range.insertNode(h);
                }
                //return div.innerHTML;
            }
            //var range = selection.getRangeAt(0);
            //
            //    if (selection.rangeCount) {
            //        //var test  =  document.selection.createRange().htmlText
            //        var content = range.cloneContents();
            //        var h=document.createElement("h2");
            //        var t=document.createTextNode(selection.toString());
            //
            //        console.log('h');
            //        console.log(h);
            //        console.log('selection');
            //        console.log(selection);
            //        console.log('content');
            //        console.log(content);
            //        range.deleteContents();
            //        if(h.appendChild(t)){
            //            range.insertNode(h);
            //        }
            //    }

        }
        //,
        //isActive:function(){
        //    var selection = document.getSelection();
        //
        //    if (selection.type !== 'Range' || selection.rangeCount === 0 || document.selection === undefined) {
        //        return null; // no ranges
        //    }
        //    console.log('is Active');
        //    console.log(document.selection.createRange().htmlText);
        //
        //}
    });

    SirTrevor.Formatters.Heading = new Heading();

}(SirTrevor, document,jQuery));