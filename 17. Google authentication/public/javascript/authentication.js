const $ = element => document.querySelector(element);
const menuProfile = $('.dropdown');
const menuLinks = $('.dropdown-content');
const signOutLink = $('.signOut');

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();

    const imgProfile = document.createElement('img');
    imgProfile.src = profile.getImageUrl();
    imgProfile.classList.add('dropbtn');

    const name = document.createElement('p');
    name.textContent = profile.getName();

    const email = document.createElement('p');
    email.textContent = profile.getEmail();

    menuProfile.appendChild(imgProfile);
    menuLinks.insertBefore(name, signOutLink);
    menuLinks.insertBefore(email, signOutLink);
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        location.reload();
    });
}