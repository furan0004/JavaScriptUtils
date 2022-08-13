function fixTopBar(title){
    let topbar = TopBars[0];
    topbar.setTitle(title || document.title || "黒咲くろんの手作り");
    topbar.setHome("https://utils.kurosaki.love");
    topbar.setMenu([]);
    topbar.load();
}

fixTopBar();