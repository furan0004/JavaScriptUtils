import topbar from "https://pages.kurosaki.love/scripts/index.js";

function fixTopBar(title){
    topbar.setTitle(title || document.title || "黒咲くろんの手作り");
    topbar.setHome("https://utils.kurosaki.love");
    topbar.load();
}

fixTopBar();