let posts = [{
    'authorImg': 'img/icons8-globus-48.png',
    'author': 'tagesschau',
    'image': 'img/fireman-gfe82fec4b_1280.jpg',
    'comment': []
},
{
    'authorImg': 'img/icons8-tsunami-48.png',
    'author': 'Wetterstation',
    'image': 'img/rapeseed-g1f51baf54_1280.jpg',
    'comment': []
},
{
    'authorImg': 'img/icons8-space-shuttle-64.png',
    'author': 'Weltall Neuws',
    'image': 'img/moon-g9fd5d65cb_1280.jpg',
    'comment': []
},
{
    'authorImg': 'img/icons8-tsunami-48.png',
    'author': 'Wetterstation',
    'image': 'img/thunderstorm-gf7a61ffac_1280.jpg',
    'comment': []
}
];


function showContent() { // loads the content to the main page//
    document.getElementById('content').innerHTML += ``;
    for (let i = 0; i < posts.length; i++) {
        let post = posts[i];
        document.getElementById('content').innerHTML += /*html*/`
        <div class="content-1">
                <div class="content-1-1">
                    <div class="content-1-1-1">
                        <img class="tagesschow-img" src="${post['authorImg']}">
                        <h3>${post['author']}</h3>
                    </div>
                    <div>
                        <img class="menu-button" id="menu-button" src="img/icons8-menü-2-48.png">
                    </div>
                </div>
                <div class="content-img">
                    <img class="content-img" src="${post['image']}">
                </div>
                <div class="comment-container">
                <div class="comment-icons">
                    <div>
                        <img class="header-icons" src="img/icons8-gesendet-50.png" onclick="noWay()">
                        <img class="header-icons" src="img/icons8-kompass-24.png" onclick="noWay()">
                        <img class="header-icons" src="img/icons8-herzen-32.png" onclick="noWay()">
                    </div>
                    <div>
                        <img class="header-icons" src="img/icons8-diplom-1-64.png" onclick="noWay()">
                    </div>
                </div>
                <div>
                <span></span>
                <span>Alle Kommentare ansehen</span>
                <div class="comment" id="comment-${i}">
                ${post['comment' + i]}
            </div>
            <form onsubmit="return false;" class="comment-input-container">
                <input id="comment-input-${i}" required placeholder="Kommentar hinzufügen" class="comment-input">
                <button class="send-button" onclick="sendComment(${i})">Senden</button>
            </form>
            </div>
            </div>
            </div>
            `;
    }
}


function renderComment(i) {  //loads the comments under the pictures on the main page//
    comment = loadComment(i)
    let commenText = document.getElementById('comment-' + i);
    //commenText.innerHTML = ``;

    for (let j = 0; j < comment.length; j++) {
        commenText.innerHTML += commentHTML(i,j,comment);
    }

}


function commentHTML(i,j,comment) { //html code for the comments//
    return /*html*/`
    <div class="comment-push-container">
    <span>Kommentar: ${comment[j]}</span>
    <button onclick="deleteComment(i,j)" class="comment-delete">löschen</button>
    </div>
    `;
}


function sendComment(i) { //pushes the entered comments from the input field into the object from the array//
    let commentInput = document.getElementById('comment-input-' + i).value;

    posts[i]['comment'].push(commentInput);
    saveArrayToLocalStrage('commentSave-'+i, posts[i]['comment']);
    renderComment(i);
    clearInputComment(i);
}


function clearInputComment(i) { //clears the content of the input field//
    document.getElementById('comment-input-' + i).value = ``;
}


function deleteComment(i,j) { //delete a comment//
    comment.splice(x, 1);
    saveArrayToLocalStrage('commentSave', comment);

    renderComment(i);
}

function saveArrayToLocalStrage(key, array) {  //Saves the array to local storage//
    localStorage.setItem(key, JSON.stringify(array));
}


function getArray(key) {
    return JSON.parse(localStorage.getItem(key));
}


function loadComment(i) { //get array//
    return getArray('commentSave'+i) || [];
}

function noWay() { /*Öffnet ein Fenster mit Text*/
    alert("Diese Seite dient zu Testzwecken, daher geht es hier nicht weiter.");
}
