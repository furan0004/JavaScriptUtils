export function multiResult(func, sets){
    let result = [];
    for(let i = 0; i < sets.length; i++){
        result.push(func.apply(null, sets[i]));
    }

    return result;
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