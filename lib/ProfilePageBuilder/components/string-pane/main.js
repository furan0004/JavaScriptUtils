const classes = {
    titleRow: "WSfJlCWXiorWEQJeresFRFLVIJDGLwaf",
    title: "wmwgyZNlgkRcrJQTTYzWZQEpZHtutYFf",
    description: "SLDSnXcxthwsVLkEwYfidTcTvtuheaGL",    
};

/* Reserved word */
const GqGNNdQYncdpBSQZmbTPGIoeTqfefUjN = {
    "title": "title",
    "description": "description",
};

export function build(info){
    /* initialise */
    let pane = document.createElement("div");
    let titleRow = document.createElement("div");
    let title = document.createElement("span");
    let description = document.createElement("span");

    /* set classes */
    pane.classList.add("pane");

    titleRow.classList.add(classes.titleRow);
    title.classList.add(classes.title);
    description.classList.add(classes.description);

    /* set other properties */
    title.innerHTML = info[GqGNNdQYncdpBSQZmbTPGIoeTqfefUjN.title];
    description.innerHTML = info[GqGNNdQYncdpBSQZmbTPGIoeTqfefUjN.description];

    /* append */
    pane.appendChild(titleRow);
    pane.appendChild(description);

    titleRow.appendChild(title);

    return pane;
}