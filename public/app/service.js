var TREEFROG_SERVICE = (function(){
    var _getGetStartedContent = function(){
        let contentStr = `<h1>Treefrog CMS</h1><p>This is the screen where you will create your navigation and page content.</p><p>First, you will need to create a main navigation. Once you have created a main navigation you can create a sub-navigation if you would like to.</p><p>Once you create either a nav or sub-nav a text editor will pop up and you will be allowed to create your page content.</p>`;

        return contentStr;
    };

    var _getCreateNavButtons = function(){
        let buttonString = `<span id="createMainNav" class="btn btn-dark">Create Main Nav</span><span class="btn btn-dark">Create Sub Nav</span>`

        return buttonString;
    };

    var _getHomeContent = function(){
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

    var _getHomeStartButton = function(){
        let startBtn = `<span class="btn btn-dark get-started">Get Started</span>`;

        return startBtn;
    }

    var _getCreateMainNavContent = function(){
        let createMainNavContent = `<h1>Use this box to create navigation links.</h1><p>You can create main navigation and sub navigation. To create a sub-navigation you will need to first select a main nav and then crate the sub-nav.</p><p></p>`;

        return createMainNavContent;
    }

    var _getCreateMainNavInput = function(){
        let createMainNavInput = `<p>Using the text box below enter the name of your main navigation</p><form><input type="text"></form>`

        return createMainNavInput;
    }

    var _getCreateMainNavButtons = function(){
        let createMainNavButtons = `<span class="btn btn-light">Create Main Nav</span><span id="cancel" class="btn btn-light">Cancel</span>`;

        return createMainNavButtons;
    }

    return {
        getGetStartedContent: _getGetStartedContent,
        getCreateNavButtons: _getCreateNavButtons,
        getHomeContent: _getHomeContent,
        getHomeStartButton: _getHomeStartButton,
        getCreateMainNavContent: _getCreateMainNavContent,
        getCreateMainNavButtons: _getCreateMainNavButtons,
        getCreateMainNavInput: _getCreateMainNavInput
    };
})();