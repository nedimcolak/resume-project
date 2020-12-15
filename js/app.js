const url = 'https://api.github.com/users/nedimcolak/repos';

let dataHolder = document.getElementById('projects');

let output = '';

const httpRequest = new ApiCall;
let apiResponse;

const call = httpRequest.get(url)
    .then(data => {
        apiResponse = data;
        updateUI(apiResponse);
    })
    .catch(err => console.log(err.message));

const updateUI = function(data){
    let projectName = '';
    let projectDesc = '';
    let technologies = '';
    let githubLink = '';

    for(let i = 0; i < data.length; i++){
        let obj = data[i];

        projectName = obj.name;
        projectDesc = obj.description;
        technologies = obj.language;
        githubLink = obj.svn_link;

        output += `<div class="project">
        <div class="project-title">
            <h3 class="section-h3">${projectName}</h3>
            <strong>${technologies}</strong>
        </div>
        <p>${projectDesc}</p>
        <div class="github">
            <i class="fab fa-github"></i>
            <a href="${githubLink}">GitHub</a>
        </div>
    </div>`
    }

    dataHolder.innerHTML = output;
}