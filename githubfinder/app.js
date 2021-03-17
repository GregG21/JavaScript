// Search input

const github = new GitHub();
const ui = new UI;

const searchUser = document.getElementById("searchUser")
searchUser.addEventListener('keyup', (event) => {
    // Get input text
    const userText = event.target.value;
    if (userText !== ''){
        console.log(userText);
        github.getUser(userText)
        .then(data => {
            console.log(data)
            if(data.profile.message == "Not Found") {
        // show alert   
                ui.showAlert('User not found', 'alert alert-danger')
            } else{
                // show profile
                ui.showProfile(data.profile)
                ui.showRepos(data.repos)
            }
        })
    } else {
        //clear profile
        ui.clearProfile();
    }
} )