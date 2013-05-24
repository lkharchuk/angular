langApp.factory('WordsList', function () {
    var list = [
        { eng: 'mother', rus: 'мама', ukr: 'мамо' },
        { eng: 'aa', rus: 'aa', ukr: 'aa' },
        { eng: 'father', rus: 'папа', ukr: 'тато' }
    ];
    return list;
});


langApp.factory('LangList', function () {
    var list = [{ id: "eng", title: "English" }, { id: "rus", title: "Russian" }, { id: "ukr", title: "Ukrainian"}];
    return list;
});
