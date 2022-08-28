export function build(info){
    /* initialise */
    let pane = document.createElement("div");
    let titleRow = document.createElement("div");
    let title = document.createElement("span");
    let description = document.createElement("span");

    /* set classes */
    pane.classList.add("pane");

    titleRow.classList.add("string-pane-title-row");

    title.classList.add("def-font");
    title.classList.add("string-pane-title");

    description.classList.add("def-font");
    description.classList.add("string-pane-description");


    /* set other properties */
    title.innerText = info.title;
    description.innerText = info.description;

    /* append */
    pane.appendChild(titleRow);
    pane.appendChild(description);

    titleRow.appendChild(title);

    return pane;
}