
firebase.auth().onAuthStateChanged(async function(user) {
    if (user) {
        // logged in 
        $(".is-auth").show();
        $(".not-auth").hide();
        $(".account-name").show().text(user.displayName)
    } else {
        // logged out 
        $(".not-auth").show();
        $(".is-auth").hide();
    }
});

async function logOut(){
    await firebase.auth().signOut();
}
