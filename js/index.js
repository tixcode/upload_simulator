$( document ).ready(function() {

    $("select" ).change(function() {

        const langageSelected = $( "select option:selected" ).val();
        const wikiLink = $("#wikiLink");
        const changelogsLink = $("#changelogsLink");

        wikiLink.attr(
            'href',
            wikiLink.attr('href')
                .slice(0, -3) + langageSelected + "/"
        );

        changelogsLink.attr(
            'href',
            changelogsLink.attr('href')
                .slice(0, -3) + langageSelected + "/"
        );

        let htmlTextWiki = wikiLink.html()

        let replacementWikiText = '';
        let replacementChangelogText = '';
        switch (langageSelected) {
            case 'en':
                replacementWikiText = 'Wikipedia'
                replacementChangelogText = 'Changelogs'
                break;
            case 'ru':
                replacementWikiText = 'Википедия'
                replacementChangelogText = 'Список Изменений'
                break;
            case 'fr':
                replacementWikiText = 'Wiki'
                replacementChangelogText = 'Changements'
                break;
            default:
                console.log(`Sorry, we are out of ${expr}.`);
        }
        wikiLink.html(htmlTextWiki.replace(/>[a-zA-Z\u0401\u0451\u0410-\u044f]+</, ">"+replacementWikiText+"<"))
        changelogsLink.html(htmlTextWiki.replace(/>[a-zA-Z\u0401\u0451\u0410-\u044f]+</, ">"+replacementChangelogText+"<"))


    });

});


