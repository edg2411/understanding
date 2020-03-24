var g = G$('eze', 'di giulio');

// console.log(g);

g.greet().setLang('es').greet(true);

$('#login').click(function() {
    var loginGtr = G$('john', 'doe');
    $('#logindiv').hide();
    loginGtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});