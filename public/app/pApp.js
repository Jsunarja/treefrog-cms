
function addNavListener() {
    $("nav a").click(function (e) {
        var id = e.currentTarget.id;
        var newNavName = $("#updateContent").val();
        if (newNavName == '') {
            PRACTICE_SERVICE.deleteContent(id, displayData);
        } else {
            PRACTICE_SERVICE.updateContent(id, newNavName, displayData);
        }

    });
}

function displayData(addData) {
    var container = '<nav>';
    addData.forEach(function (doc) {
        var id = doc.id;
        var rawData = doc.data();
        container += `<a href="#" id="${id}">${rawData.navName} </a>`;

    });
    container += '</nav>'
    $(".showData").html(container);
    addNavListener();
}

function init() {
    $('.getData').click(function (e) {
        PRACTICE_SERVICE.getAllData(displayData);
    });

    $('#addData').click(function (e) {
        e.preventDefault();
        //get info from input box lowercase data and then submit
        let nName = $('#nav-input')
            .val()
            .trim()
            .toLowerCase();
        if (nName != '') {
            PRACTICE_SERVICE.checkPages(nName, alertUser);
            $('#nav-input').val('');
        } else {
            alert('need input');
            console.log('error');
        }
    });

    // $('#checkPages').click(function (e) {
    //     e.preventDefault();
    //     console.log('check data');
    //     PRACTICE_SERVICE.checkPages('about');
    // });
}

function alertUser(result) {
    alert(result);
}

$(document).ready(function () {
    PRACTICE_SERVICE.initFirebase(init);
});