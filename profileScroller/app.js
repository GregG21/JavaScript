async function fetchUser(){
    let response = await fetch('https://randomuser.me/api/?results=10');
    let data = await response.json();
    return data;
}


const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Jenn Smith',
        age: 25,
        gender: 'female',
        lookingfor: 'male',
        location: 'Miami FL',
        image: 'https://randomuser.me/api/portraits/woman/82.jpg'
    },
    {
        name: 'Wiliam Johnsom',
        age: 12,
        gender: 'male',
        lookingfor: 'female',
        location: 'Lynn MA',
        image: 'https://randomuser.me/api/portraits/men/83.jpg'
    },
    
];


const profiles = profileIterator(data);

// Call first profile
nextProfile();


document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile() {
    currentProfile = profiles.next().value;

    document.getElementById('profileDisplay').innerHTML = 
    `
    <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
    </ul>
    <ul class="list-group">
        <li class="list-group-item">Age: ${currentProfile.age}</li>
    </ul>
    <ul class="list-group">
        <li class="list-group-item">Location: ${currentProfile.location}</li>
    </ul>
    <ul class="list-group">
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
    </ul>

    
    `

    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}" alt="profile image">`;

}

function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function(){
            return nextIndex < profiles.length ? {
                value: profiles[nextIndex++], done: false
            } : {
                done: true
            }
        }
    }
}

