const classes = {
    grid: "qnvAGQnHROSTqTxjVOZtRHkvZpeWXfNt",
    cell: "INWhIMykmAOkaEzmfIDCJxezyCGJYEAh",
};

/* Reserved words */
const SQELNNMEFTQAhmPKVGgJCZqXOJYVizIi = {
    "cell-template": "template",
    "template-rows": "rows",
    "template-columns": "columns",
    "templalte-gap": "gap",

    "cell-position": "position",
    "position-horizontal": "x",
    "positon-vertical": "y",

    "cell-dimensions": "dimensions",
    "dimension-width": "width",
    "dimension-height": "height",

    "appearance-background": "background",
    "appearance-borderRadius": "border-radius",

    "action-url": "url",
};

const defaultCellGap = 4;
const defaultCellBorderRadius = 0;

export function build(info){
    let rows = info[SQELNNMEFTQAhmPKVGgJCZqXOJYVizIi["cell-template"]][SQELNNMEFTQAhmPKVGgJCZqXOJYVizIi["template-rows"]],
    columns = info[SQELNNMEFTQAhmPKVGgJCZqXOJYVizIi["cell-template"]][SQELNNMEFTQAhmPKVGgJCZqXOJYVizIi["template-columns"]];

    /* initialise */
    let grid = document.createElement("div");

    /* set properties */
    grid.classList.add(classes.grid);
    grid.classList.add("pane");
    grid.style.aspectRatio = columns / rows;
    grid.style.gridTemplate = `${100 / rows}% / ${100 / columns}%`;
    grid.style.gap = `${info[SQELNNMEFTQAhmPKVGgJCZqXOJYVizIi["cell-template"]][SQELNNMEFTQAhmPKVGgJCZqXOJYVizIi.gap]}px`;

    /* cells */
    for(let i = 0; i < info.items.length; i++){
        let dimension = [
            info.items[i][SQELNNMEFTQAhmPKVGgJCZqXOJYVizIi["cell-position"]][SQELNNMEFTQAhmPKVGgJCZqXOJYVizIi["positon-vertical"]],
            info.items[i][SQELNNMEFTQAhmPKVGgJCZqXOJYVizIi["cell-position"]][SQELNNMEFTQAhmPKVGgJCZqXOJYVizIi["positon-horizontal"]],
            info.items[i][SQELNNMEFTQAhmPKVGgJCZqXOJYVizIi["cell-position"]][SQELNNMEFTQAhmPKVGgJCZqXOJYVizIi["positon-vertical"]] + info.items[i][SQELNNMEFTQAhmPKVGgJCZqXOJYVizIi["cell-dimensions"]][SQELNNMEFTQAhmPKVGgJCZqXOJYVizIi["dimension-height"]],
            info.items[i][SQELNNMEFTQAhmPKVGgJCZqXOJYVizIi["cell-position"]][SQELNNMEFTQAhmPKVGgJCZqXOJYVizIi["positon-horizontal"]] + info.items[i][SQELNNMEFTQAhmPKVGgJCZqXOJYVizIi["cell-dimensions"]][SQELNNMEFTQAhmPKVGgJCZqXOJYVizIi["dimension-width"]]
        ];
        
        /* initialise */
        let cell = document.createElement("div");

        /* set properties */
        cell.classList.add(classes.cell);
        cell.style.background = info.items[i][SQELNNMEFTQAhmPKVGgJCZqXOJYVizIi["appearance-background"]];
        cell.style.borderRadius = `${info.items[i][SQELNNMEFTQAhmPKVGgJCZqXOJYVizIi["appearance-borderRadius"]] || info.template[SQELNNMEFTQAhmPKVGgJCZqXOJYVizIi["appearance-borderRadius"]] || defaultCellBorderRadius}px`;

        /* append */
        if(info.items[i].url != null){
            /* anchor initialise */
            let anchor = document.createElement("a");
            
            /* anchor properties */
            anchor.href = info.items[i][SQELNNMEFTQAhmPKVGgJCZqXOJYVizIi["action-url"]];
            anchor.style.gridArea = dimension.join(" / ");

            /* append */
            anchor.appendChild(cell);
            grid.appendChild(anchor);
        }else{
            /* without anchor */
            cell.style.gridArea = dimension.join(" / ");
            grid.appendChild(cell);
        }
    }

    return grid;
}