let projectData = document.getElementById("project_list");

for (let i = 0; i < myProjectData.length; i++) {
    let projectLink = myProjectData[i]["link"];
    let projectImage = myProjectData[i]["imageSrc"];
    let projectName = myProjectData[i]["name"];
    let projectDescription = myProjectData[i]["description"];

    myProjectList(
        i,
        projectLink,
        projectImage,
        projectName,
        projectDescription
    );
}
function myProjectList(
    i,
    projectLink,
    projectImage,
    projectName,
    projectDescription
) {
    //A tag for Project Card
    let projectCardDiv = document.createElement("a");
    projectCardDiv.setAttribute("href", projectLink);
    projectCardDiv.setAttribute("class", "project_card");
    projectCardDiv.setAttribute("target", "_blank");
    projectData.appendChild(projectCardDiv); // append to a tag (class = project_card)

    //Div for Project Image
    let projectImageDiv = document.createElement("div");
    projectImageDiv.setAttribute("class", "project_image");
    projectCardDiv.appendChild(projectImageDiv);

    //Project Image
    let projectImageTag = document.createElement("img");
    projectImageTag.setAttribute("src", projectImage);
    projectImageTag.setAttribute("alt", "");
    projectImageDiv.appendChild(projectImageTag); // append to a div tag (class = project_image)

    //Used Language
    let projectLanguageUsedDiv = document.createElement("div");
    projectLanguageUsedDiv.setAttribute("class", "used_language");
    projectCardDiv.appendChild(projectLanguageUsedDiv); // append to a tag (class = project_card)

    //For Loop for to print Used Programming Languages
    for (let j = 0; j < myProjectData[i]["technologies"].length; j++) {
        let languageUsed = myProjectData[i]["technologies"][j];
        let languageID = languageUsed.toLowerCase() + "_color";
        programmingLanguages(languageUsed, languageID);
    }
    // Function to create Div Elements for Programming Languages
    function programmingLanguages(languageUsed, languageID) {
        let languageNames = document.createElement("span");
        languageNames.setAttribute("id", languageID);
        languageNames.innerHTML = languageUsed;
        projectLanguageUsedDiv.appendChild(languageNames); // append to a div tag (class = used_language)
    }

    //Project Name
    let projectNameTag = document.createElement("div");
    projectNameTag.setAttribute("class", "project_name");
    projectNameTag.innerHTML = projectName;
    projectCardDiv.appendChild(projectNameTag); // append to a tag (class = project_card)

    //Project Description
    let projectDescriptionTag = document.createElement("div");
    projectDescriptionTag.setAttribute("class", "project_description");
    projectDescriptionTag.innerHTML = projectDescription;
    projectCardDiv.appendChild(projectDescriptionTag); // append to a tag (class = project_card)
}
