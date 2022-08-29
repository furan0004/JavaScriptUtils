const classes = {
    anchor: "qAqKHKMeqzNtOKqNGDlzbVnfaXKvRoba",
    pane: "WzuIxanqrHmAMViKzvPrysxNmgYIZLjf",
    cover: "mhHnSxRcNDObduadZNJEngCylpXEUPnG",
    titleRow: "jZeooAnXdzKHpBxhWJaHMvVbYqMISyPj",
    title: "OqSMZgFildKFgzCqepOjDOmUfBiOOUMg",
    mainPane: "kyEoBPnCuZOyvqPMLxUGTUCCxuvbleQy",
    iconRow: "CDJmIBbKeAalMLsOxxfeLKNiPEOjxldp",
    icon: "rNSERjrGvwrJgZNSMpbtFzONqAOYQqIo",
    messageRow: "NTDcMfWrKQWHjwRwDuOVUQyRVKxulXHf",
    message: "ZiWOhZokIIdThsidWcjQmAbdYjYRrluP",
    descriptionRow: "rxubFaKbIunHxUIJIMWgODgVYhRLGQpU",
    description: "UJpFLXLPCGyUZHNtNaDrhuHsylpvAxNH",
};

/* Reserved  words */
const MfJwXnxsgniTsdDPUDMQCMkzPhewJUTI = {
    "appearance-background": "background",
    "appearance-icon": "icon",
    "text-title": "title",
    "text-description": "description",
    "text-message": "message",
    "action-url": "url",
};


export function build(info){
    /* imitialise */
    let anchor = document.createElement("a");
    let pane = document.createElement("div");
    let cover = document.createElement("div");
    let titleRow = document.createElement("div");
    let title = document.createElement("span");
    let mainPane = document.createElement("div");
    let iconRow = document.createElement("div");
    let icon = document.createElement("img");
    let messageRow = document.createElement("div");
    let message = document.createElement("span");
    let descriptionRow = document.createElement("div");
    let description = document.createElement("span");
    
    /* set classes */
    anchor.classList.add(classes.anchor);
    pane.classList.add(classes.pane);
    cover.classList.add(classes.cover);
    titleRow.classList.add(classes.title);
    title.classList.add(classes.title);
    mainPane.classList.add(classes.mainPane);
    iconRow.classList.add(classes.iconRow);
    icon.classList.add(classes.icon);
    messageRow.classList.add(classes.messageRow);
    message.classList.add(classes.message);
    descriptionRow.classList.add(classes.descriptionRow);
    description.classList.add(classes.description);

    /* other properties */
    pane.style.background = (info.background.substring(0, 1) == "#") ? info[MfJwXnxsgniTsdDPUDMQCMkzPhewJUTI["appearance-background"]] : `url(${info[MfJwXnxsgniTsdDPUDMQCMkzPhewJUTI["appearance-background"]]})`;
    pane.style.backgroundSize = "cover";
    pane.style.backgroundPosition = "center";

    anchor.href = info[MfJwXnxsgniTsdDPUDMQCMkzPhewJUTI["action-url"]];

    title.innerText = info[MfJwXnxsgniTsdDPUDMQCMkzPhewJUTI["text-title"]];

    if(info.icon != null){
        icon.src = info[MfJwXnxsgniTsdDPUDMQCMkzPhewJUTI["appearance-icon"]];
    }else{
        icon.style.visibility = "hidden";
    }

    message.innerHTML = info[MfJwXnxsgniTsdDPUDMQCMkzPhewJUTI["text-message"]];
    description.innerHTML = info[MfJwXnxsgniTsdDPUDMQCMkzPhewJUTI["text-description"]];

    /* append */
    anchor.appendChild(pane);
    pane.appendChild(cover);

    cover.appendChild(titleRow);
    cover.appendChild(mainPane);
    
    titleRow.appendChild(title);

    mainPane.appendChild(iconRow);
    mainPane.appendChild(messageRow);
    mainPane.appendChild(descriptionRow);

    iconRow.appendChild(icon);
    messageRow.appendChild(message);
    descriptionRow.appendChild(description);

    return pane;
}