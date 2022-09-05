export function multiResult(func, sets){
    let result = [];
    for(let i = 0; i < sets.length; i++){
        result.push(func.apply(null, sets[i]));
    }

    return result;
}

export function multiExecution(func, sets){
    for(let i = 0; i < sets.length; i++){
        func.apply(null, sets[i]);
    }
}

export function copyToClipboard(str){
    navigator.permissions.query({name: "clipboard-write"}).then((result) => {
        if (result.state === "granted" || result.state === "prompt") {
            navigator.clipboard.writeText(str);
        }else{
            navigator.permissions.request({name: "clipboard-write"}).then(result => {
                console.log(result.state);
                if (result.state === "granted" || result.state === "prompt"){
                    copyToClipboard(str);
                }
            });
        }
    });
}

export async function importStyle(path){
    await import(path, {assert: {type: "css"}}).then(function(module){
        document.adoptedStyleSheets.push(module.default);
    }).catch(function(err){
        throw err;
    });
}

export async function importStyles(path){
    for(let i = 0; i < path.length; i++){
        await importStyle(path[i]);
    }
}

export async function importJSON(path){
    let result = null;
    await import(path, {assert: {type: "json"}}).then(function(module){
        result = Object.create(module.default);
    }).catch(err => console.log(err));

    return await result;
}