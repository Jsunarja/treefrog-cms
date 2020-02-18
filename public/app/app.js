function initButtons(){
    $(document).on('click', '.get-started', function(){
        $('#home div').removeClass('active');
        $('#addNav div').addClass('active');

        $('.text-wrapper').html(TREEFROG_SERVICE.getGetStartedContent());
        $('.btn-holder').html(TREEFROG_SERVICE.getCreateNavButtons());
    });

    $(document).on('click', '#home', function(){
        $('#addNav div').removeClass('active');
        $('#home div').addClass('active');

        $('.text-wrapper').html(TREEFROG_SERVICE.getHomeContent());
        $('.btn-holder').html(TREEFROG_SERVICE.getHomeStartButton());
    });

    $(document).on('click', '#createMainNav', function(){
        $(`.modal`).css('display', 'flex');

        $('.modalText').html(TREEFROG_SERVICE.getCreateMainNavContent());
        $('.modalInput').html(TREEFROG_SERVICE.getCreateMainNavInput());
        $(`.modalBtn`).html(TREEFROG_SERVICE.getCreateMainNavButtons());
    });

    $(document).on('click', '#createSubNav', function(){
        $('.modal').css('display', 'flex');
    })

    $(document).on('click', '#cancel', function(){
        $(`.modal`).css('display', 'none');
    });
}



$(document).ready(function(){
    initButtons();
});