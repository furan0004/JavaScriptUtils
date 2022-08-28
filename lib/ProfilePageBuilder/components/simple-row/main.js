const classes = {
    anchor: "actWHXcmKHMEMaxVlnugqyRYUhtVtqfF",
    body: "KohFjdRUaUhLVNUIfVQvyTFDUnWFnWfP",
    icon: "vDAKvQFeUxOtJUyyPCADzKlmpufTnGcc",
    text: "LhBshYcDsTchxvCNliriCCaitrVEWsNP",
    titleContainer: "lnrQSNUmkLAILjnXUpupOvrBEDyZsaMm",
    title: "cUWTDtKIMxYxeHrUBiZilpvtxHVLMAqF",
    description: "aBZxsrqazlBPFYBZZPwnwNMAoBPpBuDK",
};

/* Reserved words */
const PrGxOUfXrwLbkvhZMnCyqsSieTgQGkOh = {
    "appearance-icon": "icon",
    "action-url": "url",
    "text-title": "title",
    "text-description": "description",
};

export function build(info){
    /* initialise */
    let row = document.createElement("div");
    let anchor = document.createElement("a");
    let body = document.createElement("div");
    let icon = document.createElement("img");
    let text = document.createElement("div");
    let titleContainer = document.createElement("div");
    let title = document.createElement("span");
    let description = document.createElement("span");

    /* set classes */
    row.classList.add("pane");
    anchor.classList.add(classes.anchor);
    body.classList.add(classes.body);
    icon.classList.add(classes.icon);
    text.classList.add(classes.text);
    titleContainer.classList.add(classes.titleContainer);
    title.classList.add(classes.title);
    description.classList.add(classes.description);

    /* other properties */
    anchor.href = info[PrGxOUfXrwLbkvhZMnCyqsSieTgQGkOh["action-url"]];
    icon.src = info[PrGxOUfXrwLbkvhZMnCyqsSieTgQGkOh["appearance-icon"]];
    title.innerText = info[PrGxOUfXrwLbkvhZMnCyqsSieTgQGkOh["text-title"]];
    description.innerText = info[PrGxOUfXrwLbkvhZMnCyqsSieTgQGkOh["text-description"]];

    /* append */
    pane.appendChild(anchor);
    anchor.appendChild(body);

    body.appendChild(icon);
    body.appendChild(text);

    text.appendChild(titleContainer);
    text.appendChild(description);
    
    titleContainer.appendChild(title);

    return pane;
}