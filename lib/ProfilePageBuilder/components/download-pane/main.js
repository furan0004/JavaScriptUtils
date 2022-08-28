import { restrictLength } from "/lib/functions/stringOrder.js";

const classes = {
    holder: "wapmEJjuhEcReMpkNnpzByukfGlhmtgl",
    thummbnail: "jsFySMvWqLcLqSvSCfuyFobwhzXPIDsz",
    details: "hqeGIkhlIRTuNFKnSVZABgvEWWqnaecK",
    nameRow: "cxtXJcsGxOtkWHHhlqFxImazDVBYoGVC",
    name: "mvrnTacaXuAlnjVuyiikqXMxzkCSaTiw",
    dlRow: "brMCpUpAwRIinfYnhYmVYYQYSZdGYRfN",
    dlAnchor: "PgheGPlGLvMweMHDLdDMxUzUeswjNcjH",
    dlBtn: "nKQGtJAqqpBFYKfGkvoxdJXjgyFwkGCH",
    descriptionRow: "JSwdYcFKAUYdbYnrzxMLvEPCtEoNDTho",
    description: "DpckmGZtNhQsXHtqfJDpJYwSgQsfVxaE",
};

const defaultMessage = {
    downloadButton: "Download",
    description: "No description about this.",
};


export function build(info){
    /* initialise */
    let holder = document.createElement("div");
    let thumbnail = document.createElement("img");
    let details = document.createElement("div");
    let nameRow = document.createElement("div");
    let name = document.createElement("div");
    let dlRow = document.createElement("div");
    let dlAnchor = document.createElement("a");
    let dlBtn = document.createElement("div");
    let descriptionRow = document.createElement("div");
    let description = document.createElement("span");

    /* set class */
    holder.classList.add(classes.holder);
    thumbnail.classList.add(classes.thummbnail);
    details.classList.add(classes.details);
    nameRow.classList.add(classes.nameRow);
    name.classList.add(classes.name);
    dlRow.classList.add(classes.dlRow);
    dlAnchor.classList.add(classes.dlAnchor);
    dlBtn.classList.add(classes.dlBtn);
    descriptionRow.classList.add(classes.descriptionRow);
    description.classList.add(classes.description);

    /* other properties */
    thumbnail.src = info.thumbnail;

    name.innerText = restrictLength(info.filename, 20, "...");

    dlAnchor.href = encodeURI(info.url);
    dlAnchor.download = info.filename;

    dlBtn.innerText = defaultMessage.downloadButton;

    description.innerText = info.description || defaultMessage.description;

    /* append */
    holder.appendChild(thumbnail);
    holder.appendChild(details);

    details.appendChild(nameRow);
    details.appendChild(descriptionRow);
    details.appendChild(dlRow);

    nameRow.appendChild(name);

    dlRow.appendChild(dlAnchor);
    dlAnchor.appendChild(dlBtn);

    descriptionRow.appendChild(description);

    return holder;
}