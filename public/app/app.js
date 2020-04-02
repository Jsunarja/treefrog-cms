function addnewMainNav(navName){
  console.log('add ', navName);

  let pageFakeData = {
    navName: navName,
    content: "<h1>Hello</h1>",
    subNavs: []
  };

  TREEFROG_SERVICE.saveData(pageFakeData);
}

function initButtons() {
    $('#home').click(function() {
      $('#addNav div').removeClass('active');
      $('#home div').addClass('active');
  
      $('#createMainNav').off();
  
      $('.text-wrapper').html(TREEFROG_SERVICE.getHomeContent());
      $('.btn-holder').html(TREEFROG_SERVICE.getHomeStartButton());
      addGetStartedListener();
    });
  
    $('.closeModal').click(function() {
      closeModal();
    });

    $('.newMainNav').click(function(){
      newMainNav();
    })

    
}
  
function addCreateMNListener() {
  $('#createMainNav').click(function(e) {
    $('.modal').css('display', 'flex');
    $('.alert-box').html(TREEFROG_SERVICE.getCreateNewNav());
    $('.buttonHolder').html(TREEFROG_SERVICE.getCreateNewNavButtons());
    initButtons();
  });
}
  
function closeModal() {
  $('.modal').css('display', 'none');
  $('.required').css('display', 'none');
  $('.duplicate').css('display', 'none');
  $('#newMainNavInput').val('');
}

function getAddMainNav(){
  var newMainNavText = $('#newMainNavInput').val();
  var mainNavStr = newMainNavText.toLowerCase();
  //console.log(mainNavStr);
  $('.text-wrapper').html(TREEFROG_SERVICE.getAddMainNav());
  var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
  
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['clean']                                         // remove formatting button
  ];
  
  var quill = new Quill('#editor', {
    modules: {
      toolbar: toolbarOptions
    },
    theme: 'snow'
  });

  $('.addMainNav').html(mainNavStr);
  $('.btn-holder').html(TREEFROG_SERVICE.getAddMainNavButtons());
  $('.savePageInfo').click(function(){
    var justHtml = quill.root.innerHTML;
    $('#quillContent').html(justHtml);
    //setPages(justHtml);
    $(".content-wrapper").css("display", "block");
    $(".pageData").html(justHtml);
    //$('.modal').css('display', 'flex');

    $('.alert-box').html(TREEFROG_SERVICE.getSavePageInfo());
    $('.buttonHolder').html(TREEFROG_SERVICE.getSavePageInfoButtons());
    //$('.savePageInfo').off('click');
  })
}

function newMainNav(){
  
  var newMainNavText = $('#newMainNavInput').val().toLowerCase().trim();

  TREEFROG_SERVICE.checkMainNavName(newMainNavText, addnewMainNav);

  // if(!newMainNavText){
  //   $('.required').css('display', 'flex');
  //   $('.duplicate').css('display', 'none');
  // } else {
  //   let isUnique = true;
  //   $('.required').css('display', 'none');
  //   $.each(navNameList, function(idx, val){
  //     if(val.navName == newMainNavText){
  //       console.log('same');
  //       $('.required').css('display', 'none');
  //       $('.duplicate').css('display', 'flex');
  //       isUnique = false; 
  //       //console.log(isUnique);
  //       return false;
  //     }
  //   });

  //   if(isUnique){
  //     console.log('different');
  //     //console.log(isUnique);
  //     getAddMainNav();
  //     closeModal();
  //     $('.newMainNav').off('click');
  //     navNameList.push({navName: newMainNavText});
  //   } 
  // }
}

function addGetStartedListener() {
  $('.get-started').click(function(e) {
    $('#home div').removeClass('active');
    $('#addNav div').addClass('active');
  
    $('.text-wrapper').html(TREEFROG_SERVICE.getGetStartedContent());
    $('.btn-holder').html(TREEFROG_SERVICE.getCreateNavButtons());
    addCreateMNListener();
    $('.get-started').off('click');
  });
}
  
$(document).ready(function() {
  TREEFROG_SERVICE.initFirebase();
  initButtons();
  addGetStartedListener();
});
  