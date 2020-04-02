var TREEFROG_SERVICE = (function() {
  document.addEventListener("DOMContentLoaded", function() {  
    try { 
      let app = firebase.app(); 
      let features = ["auth", "database", "messaging", "storage"].filter( feature => typeof app[feature] === "function"); 
      //document.getElementById('load'); 
    } catch (e) { 
      console.error(e); 
    } 
  });

  var _db;

  var _initFirebase = function(){
    firebase 
      .auth() 
      .signInAnonymously() 
      .then(function(result) { 
        console.log('connected');
        _db = firebase.firestore(); 
      });
  }

  var _addContact = function(){
    let data = {fName: "John", lName: "Doe"};
    _db.collection('contacts') 
      .add(data) 
      .then(function(docRef) { 
        console.log('Document written with ID: ', docRef.id);
      }) 
      .catch(function(error) { 
        console.error('Error adding document: ', error); 
      });
  }

  var _saveData = function(pageData){
    _db
      .collection('contacts') 
      .add(pageData)
      .then(function(docRef) { 
        console.log('Document written with ID: ', docRef.id);
        })
        .catch(function(){
          console.error('Error adding document: ', error);
        });
  };

    var _checkMainNavName = function(mainNavName, callback){
      var pages = _db.collection('Pages');

      pages
        .get()
        .then(function(querySnapshot) {
          console.log('got something ', querySnapshot.empty);
          if (querySnapshot.empty) {
            callback(mainNavName);
          } else {
            let query = pages.where('navName', '==', mainNavName);
            console.log('not empty ', query);
          }
        })
      .catch(function(error) {
        console.log('error', error);
      });
    };

    var _getGetStartedContent = function() {
      let contentStr = `<h1>Treefrog CMS</h1><p>This is the screen where you will create your navigation and page content.</p><p>First, you will need to create a main navigation. Once you have created a main navigation you can create a sub-navigation if you would like to.</p><p>Once you create either a nav or sub-nav a text editor will pop up and you will be allowed to create your page content.</p>`;

      return contentStr;
    };
  
    var _getCreateNavButtons = function() {
      let buttonString = `<span id="createMainNav" class="btn btn-dark">Create Main Nav</span><span class="btn btn-dark">Create Sub Nav</span>`;
  
      return buttonString;
    };
  
    var _getHomeContent = function() {
      let homeContent = `<h1>Welcome to the Treefrog CMS</h1>
      <p>
        Here you will create your content for your webpages. You won't be able
        to create all page elements but only the content for the page.
      </p>
  
      <p>
        You must first create the navigation. Once you have the navigation
        created you can add page content and publish the page. You can even
        add sub navigation as well.
      </p>
  
      <p>
        Your fist step is to click on the Add Navigation link and add your
        first navigation link.
      </p>`;
  
      return homeContent;
    };
  
    var _getHomeStartButton = function() {
      let startBtn = `<span class="btn btn-dark get-started">Get Started</span>`;
  
      return startBtn;
    };
  
    var _getAddMainNav = function(){
      let mainNav = `<h1>Treefrog CMS</h1><p>Now you have your navigation set now you can create your content. Below you will see your navigation name and a text editor. Create your content in the text editor and then click on \"Save Page Info\". Once you have done that click on \"Preview Site\" to see what your web page looks like</p><br><br><p>Nav\><p class="addMainNav"></p></p><div id="editor"><p><br></p></div><div id=quillContent></div>`;

      return mainNav;
    }

    var _getAddMainNavButtons = function(){
      let mainNavButtons = `<span class="btn btn-dark savePageInfo">Save Page Info</span>`;

      return mainNavButtons;
    }

    var _getSavePageInfo = function(){
      let savePageInfo = `<h1>Your page has been created</h1>`;

      return savePageInfo;
    }

    var _getSavePageInfoButtons = function(){
      let savePageInfoButtons = `<span class="btn btn-dark closeModal">Okay</span>`;

      return savePageInfoButtons;
    }

    var _getCreateNewNav = function(){
      let createNewNav = `<h2>Use this box to create navigation links.</h2>
        <p>
          You can create main navigation and sub navigation. To create a
          sub-navigation you will need to first select a main nav and then
          create the sub-nav.
        </p>
        <p class="inputInstructions">
          Using the text box below enter the name of your main navigation.
        </p>
        <input id="newMainNavInput" type="text" />
        <div class="required">Required Field</div>
        <div class="duplicate">Nav Already Created</div>
        <div class="buttonHolder">
          
        </div>`;

      return createNewNav;
    }

    var _getCreateNewNavButtons = function(){
      let createNewNavButtons = `<span class="btn btn-light newMainNav">Create Main Nav</span>
      <span class="btn btn-light closeModal">Cancel</span>`;

      return createNewNavButtons;
    }

    return {
      getGetStartedContent: _getGetStartedContent,
      getCreateNavButtons: _getCreateNavButtons,
      getHomeContent: _getHomeContent,
      getHomeStartButton: _getHomeStartButton,
      getAddMainNav: _getAddMainNav,
      getAddMainNavButtons: _getAddMainNavButtons,
      getSavePageInfo: _getSavePageInfo,
      getSavePageInfoButtons: _getSavePageInfoButtons,
      getCreateNewNav: _getCreateNewNav,
      getCreateNewNavButtons: _getCreateNewNavButtons,
      initFirebase: _initFirebase,
      checkMainNavName: _checkMainNavName,
      saveData: _saveData
    };
  })();
  