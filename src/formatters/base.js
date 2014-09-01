/* Our base formatters */
(function () {

    var Bold = SirTrevor.Formatter.extend({
        title   : "bold",
        cmd     : "bold",
        keyCode : 66,
        text    : "B"
    });

    //var InlineH1 = SirTrevor.Formatter.extend({
    //    title   : "h1",
    //    cmd     : "formatInline",
    //    text    : "h1",
    //    onClick : function () {
    //        var wysihtml5ParserRules = {
    //            tags: {
    //                "h1": 1
    //            }
    //        };
    //        console.log('headline h1 clicked');
    //    }
    //});
    //
    //var InlineH2 = SirTrevor.Formatter.extend({
    //    title   : "h2",
    //    cmd     : "insertHTML",
    //    text    : "h2",
    //    tag     : 'h2',
    //    toHTML: function(html){
    //        console.log('html'+this.title);
    //        console.log(html);
    //        return html;
    //        //return '<h2>'+html+'</h2>';
    //    },
    //    isActive:function(){
    //
    //    },
    //    //,
    //    onClick:function(){
    //        console.log('is clicked'+this.title);
    //        var text = "";
    //        if (window.getSelection) {
    //            text = window.getSelection().toString();
    //        } else if (document.selection && document.selection.type != "Control") {
    //            console.log('is IE');
    //            text = document.selection.createRange().htmlText;
    //        }
    //        //return text;
    //        console.log('is Active'+this.title);
    //        console.log('is',this);
    //        console.log('text',text);
    //    }
    //    //,
    //    //onFormatButtonClick: function(ev) {
    //    //    ev.stopPropagation();
    //    //
    //    //    var btn = $(ev.target),
    //    //        format = SirTrevor.Formatters[btn.attr('data-type')];
    //    //    console.log('format.param');
    //    //    console.log(format.param);
    //    //}
    //});

    var Italic = SirTrevor.Formatter.extend({
        title   : "italic",
        cmd     : "italic",
        keyCode : 73,
        text    : "i"
    });

    var Link = SirTrevor.Formatter.extend({

        title    : "link",
        iconName : "link",
        cmd      : "CreateLink",
        text     : "link",

        onClick : function () {

            var link = prompt(i18n.t("general:link")),
                link_regex = /((ftp|http|https):\/\/.)|mailto(?=\:[-\.\w]+@)/;
            console.log(link);
            console.log('link');
            if ( link && link.length > 0 ) {

                if ( !link_regex.test(link) ) {
                    link = "http://" + link;
                }

                document.execCommand(this.cmd, false, link);
            }
        },

        isActive : function () {
            var selection = window.getSelection(),
                node;

            if ( selection.rangeCount > 0 ) {
                node = selection.getRangeAt(0)
                    .startContainer
                    .parentNode;
            }

            return (node && node.nodeName == "A");
        }
    });

    var UnLink = SirTrevor.Formatter.extend({
        title    : "unlink",
        iconName : "link",
        cmd      : "unlink",
        text     : "link"
    });

    /*
     Create our formatters and add a static reference to them
     */
    SirTrevor.Formatters.Bold = new Bold();
    //SirTrevor.Formatters.InlineH1 = new InlineH1();
    //SirTrevor.Formatters.InlineH2 = new InlineH2();
    SirTrevor.Formatters.Italic = new Italic();
    SirTrevor.Formatters.Link = new Link();
    SirTrevor.Formatters.Unlink = new UnLink();

})();