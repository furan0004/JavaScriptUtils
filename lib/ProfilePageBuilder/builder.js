import tPEVIMzdCurbehsCuqchyZShbwcnrjtp from "./components.json" assert {type: "json"};
import { copyToClipboard } from "/lib/functions/first.js";

class ProfileComponent{
    static create(obj){
        let result = document.createElement("div");
        result.style.width = "100%";
        result.style.height = "auto";

        for(let i = 0; i < tPEVIMzdCurbehsCuqchyZShbwcnrjtp.length; i++) if(obj.type == tPEVIMzdCurbehsCuqchyZShbwcnrjtp[i].name){
            import(tPEVIMzdCurbehsCuqchyZShbwcnrjtp[i].path).then(function(module){
                result.appendChild(module.build(obj));
            }).catch(function(err){
                console.log(err);
            });
        }

        return result;
    }

    static{
        /* Load styles of all components */
        for(let i = 0; i < tPEVIMzdCurbehsCuqchyZShbwcnrjtp.length; i++){
            import(tPEVIMzdCurbehsCuqchyZShbwcnrjtp[i]["style-path"], {assert: {type: "css"}})
            .then(module => {
                document.adoptedStyleSheets.push(module.default);
            }).catch(err => {
                console.log(err);
            });
        }
    }
}

export class ProfilePage{

    /* static constants */
    static #stylePath = [
        "./index.css",
        "./share-dialogue.css",
    ];

    static #ids= {
        screen: "nsDudpnmmDQWnqtHdRMcVLjcXQCpYqRK",
        layout: "LYbFTXeyVAuuAjDrvyqQbqMitJAXgqZm",
    };

    static #classNames = {
        vmOmfXCoJyhJPHXoNLcuNXhlpXaWRFhr: "QMpFBObspKuQJMRsVyQMXhfUezXdxxOH",   // Profile section
        xcEalAddxRghEmVnHOGjTWAnPkqdOyjQ: "uQejfhSIeGcLjoKnKPmTpsmAHOcpKagY",   // Icon holder
        bNUiOHJkRrzoDBEFYDJLYjvNXDaaSFdE: "CYUZwuYAJDGNbsGQYNZHlolzKRyTekkC",   // Icon
        HkofOdhTQVkSxWtKpDBcZsARCpcFJPSJ: "cHStMldUZWhhkCRNTfXJbLXpxWyjyGqx",   // Name tag
        DKmdEOwlAYJcXcJTlXUgtPQFrRhLLRzn: "AwJOwCeGksxoNbAEDYEJnjFfxHFlQUXp",   // Tags
        SkRtzGBEFzwbOUpJiNZPlAHmcoanFdlk: "DqgnjQGAKmdCHbGAAhjWggcmiJrUhaQq",   // Social icon holder
        GPGvQkZeQKxjlskKBZXzCwIkuqGhOSqy: {
            "anchor": "zuSrOtqsQDZGFEMfsJFdsUgAoIbPdIdX",
            "image": "JPkzwBLQeAJkLXOMMAZuSwllWfVGZmqs",
        },    // Social Icons
        vJxPYDzZRkhDECnKWzxnoSIdfDmINvKD: "BVeqCdwAyjepBDSVZRXfiGTQZJVhCSbu",   // Description

        dialogue: {
            screen: "GiQUqlFarwplIYJIhoUiTrNcmwayufQn",
            container: "UzMdJqcxzPXWPEkAYvqTMoVNHMdvlFai",
            titleView: "olmlLktKMrmUWBbQXxqObVFDEKvuadBD",
            urlView: "gdYzhdSBnUITyEXffDqlaKswlyGzPINH",
            urlText: "dkqCGxWOEpcLGnvHoeuUhpepJQPPtdkJ",
            urlCopy: "JIODOzCdYqhSeuTTfQVymFcUFnSziPmF",
            qrcodeContainer: "rEyZYmPFGPsxaKmDruInzaPeQSQnzlcW",
            qrcodeView: "zbQxiOCxGjCujUICnHGPukRbKRxuJSft",
        }
    }

        /* other constants */
        static #XSBAOazElrPOJNVLfjQmvwmqZwhMLStL = {
            "name": "name",
            "title": "title",
            "description": "description",
            "appearance": "appearance",
            "background": "background",
            "icon": "icon",
            "url": "url",
        };  // Common property name

        static #tagPartition = " / ";
        static #vDDYVNAhYMIrnynuhfeqMwLBFcFqTVCm = "socials";   // Social icons' data key

        static #HFmuGmfOJlgtNAlFAieZetBPWkUluIpK = {
            "twitter": "https://pages.kurosaki.love/res/images/twitter_dark.svg",
            "youtube": "https://pages.kurosaki.love/res/images/youtube_dark.svg",
        }; // Social icon source url

        static #wRyUQitnExbVhuYgWbFfRAQvIFbEjbSm = "components";  // Components property name

        static #dojFgBTPuhRtdiveIwwZWlawERhmMHKb = "https://utils.kurosaki.love/res/images/hyperlink.svg"; // link image

    /* variable of each instance */
    #data;

    #screen;
    #layout;
    #children = {
        vmOmfXCoJyhJPHXoNLcuNXhlpXaWRFhr: null, // Profile section
        xcEalAddxRghEmVnHOGjTWAnPkqdOyjQ: null, // Icon Holder
        bNUiOHJkRrzoDBEFYDJLYjvNXDaaSFdE: null, // Icon
        HkofOdhTQVkSxWtKpDBcZsARCpcFJPSJ: null, // Name tag
        DKmdEOwlAYJcXcJTlXUgtPQFrRhLLRzn: null, // Tags
        SkRtzGBEFzwbOUpJiNZPlAHmcoanFdlk: null, // Social Icon Holder
        GPGvQkZeQKxjlskKBZXzCwIkuqGhOSqy: [],   // Social Icons
        vJxPYDzZRkhDECnKWzxnoSIdfDmINvKD: null, // Description
    };
    #components = [];

    constructor(path){
        let self = this;
        
        /* import page data */
        import(path, {assert: {type: "json"}})
        .then(module => {
            self.#data = module.default;
        }).catch(err => {
            console.log(err);
        });
    }

    async complete(){
        let self = this;

        let interval = await setInterval(function(){
            if(self.#data != null){
                clearInterval(interval);
                self.#build();
            }
        }, 50);
    }
    
    #build(){
        /* papge settings */
        document.title = this.#data[ProfilePage.#XSBAOazElrPOJNVLfjQmvwmqZwhMLStL.title] || `${this.#data[ProfilePage.#XSBAOazElrPOJNVLfjQmvwmqZwhMLStL.name]}???Link`;

        /* initialise */
        this.#screen = document.createElement("div");
        this.#layout = document.createElement("div");
        this.#children.vmOmfXCoJyhJPHXoNLcuNXhlpXaWRFhr = document.createElement("div");
        this.#children.xcEalAddxRghEmVnHOGjTWAnPkqdOyjQ = document.createElement("div");
        this.#children.bNUiOHJkRrzoDBEFYDJLYjvNXDaaSFdE = document.createElement("img");
        this.#children.HkofOdhTQVkSxWtKpDBcZsARCpcFJPSJ = document.createElement("div");
        this.#children.DKmdEOwlAYJcXcJTlXUgtPQFrRhLLRzn = document.createElement("div");
        this.#children.SkRtzGBEFzwbOUpJiNZPlAHmcoanFdlk = document.createElement("div");
        this.#children.vJxPYDzZRkhDECnKWzxnoSIdfDmINvKD = document.createElement("div");

        /* set id or classes */
        this.#screen.id = ProfilePage.#ids.screen;
        this.#layout.id = ProfilePage.#ids.layout;

        this.#children.vmOmfXCoJyhJPHXoNLcuNXhlpXaWRFhr.classList.add(ProfilePage.#classNames.vmOmfXCoJyhJPHXoNLcuNXhlpXaWRFhr);
        this.#children.xcEalAddxRghEmVnHOGjTWAnPkqdOyjQ.classList.add(ProfilePage.#classNames.xcEalAddxRghEmVnHOGjTWAnPkqdOyjQ);
        this.#children.bNUiOHJkRrzoDBEFYDJLYjvNXDaaSFdE.classList.add(ProfilePage.#classNames.bNUiOHJkRrzoDBEFYDJLYjvNXDaaSFdE);
        this.#children.HkofOdhTQVkSxWtKpDBcZsARCpcFJPSJ.classList.add(ProfilePage.#classNames.HkofOdhTQVkSxWtKpDBcZsARCpcFJPSJ);
        this.#children.DKmdEOwlAYJcXcJTlXUgtPQFrRhLLRzn.classList.add(ProfilePage.#classNames.DKmdEOwlAYJcXcJTlXUgtPQFrRhLLRzn);
        this.#children.SkRtzGBEFzwbOUpJiNZPlAHmcoanFdlk.classList.add(ProfilePage.#classNames.SkRtzGBEFzwbOUpJiNZPlAHmcoanFdlk);
        this.#children.vJxPYDzZRkhDECnKWzxnoSIdfDmINvKD.classList.add(ProfilePage.#classNames.vJxPYDzZRkhDECnKWzxnoSIdfDmINvKD);

        /* customise other properties */
        this.#screen.style.background = this.#data[ProfilePage.#XSBAOazElrPOJNVLfjQmvwmqZwhMLStL.appearance][ProfilePage.#XSBAOazElrPOJNVLfjQmvwmqZwhMLStL.background];

            /* Icon */
            this.#children.bNUiOHJkRrzoDBEFYDJLYjvNXDaaSFdE.src = this.#data.appearance[ProfilePage.#XSBAOazElrPOJNVLfjQmvwmqZwhMLStL.icon];
            this.#children.bNUiOHJkRrzoDBEFYDJLYjvNXDaaSFdE.addEventListener("click", function(){
                ProfilePage.showShareDialogue(document.title);
            });

            /* Name tag */
            this.#children.HkofOdhTQVkSxWtKpDBcZsARCpcFJPSJ.innerText = this.#data[ProfilePage.#XSBAOazElrPOJNVLfjQmvwmqZwhMLStL.name];

            /* Tags */
            this.#children.DKmdEOwlAYJcXcJTlXUgtPQFrRhLLRzn.innerText = this.#data.tags.join(ProfilePage.#tagPartition);

            /* Social Icons */
            let keys = Object.keys(this.#data[ProfilePage.#vDDYVNAhYMIrnynuhfeqMwLBFcFqTVCm]);
            let _keys = Object.keys(ProfilePage.#HFmuGmfOJlgtNAlFAieZetBPWkUluIpK)
            for(let i = 0; i < keys.length; i++) {
                let anchor = document.createElement("a");
                let image = document.createElement("img");

                /* set class */
                anchor.classList.add(ProfilePage.#classNames.GPGvQkZeQKxjlskKBZXzCwIkuqGhOSqy.anchor);
                image.classList.add(ProfilePage.#classNames.GPGvQkZeQKxjlskKBZXzCwIkuqGhOSqy.image);

                /* set other properties */
                anchor.href = this.#data[ProfilePage.#XSBAOazElrPOJNVLfjQmvwmqZwhMLStL.url];

                if(_keys.indexOf(keys[i]) != -1){
                    image.src = ProfilePage.#HFmuGmfOJlgtNAlFAieZetBPWkUluIpK[keys[i]];
                }

                /* append */
                anchor.appendChild(image);
                this.#children.SkRtzGBEFzwbOUpJiNZPlAHmcoanFdlk.appendChild(anchor);

                /* List */
                this.#children.GPGvQkZeQKxjlskKBZXzCwIkuqGhOSqy.push({
                    "anchor": anchor,
                    "image": image,
                });
            }

            /* Description */
            this.#children.vJxPYDzZRkhDECnKWzxnoSIdfDmINvKD.innerText = this.#data[ProfilePage.#XSBAOazElrPOJNVLfjQmvwmqZwhMLStL.description];

        /* append */
        this.#screen.appendChild(this.#layout);
        this.#layout.appendChild(this.#children.vmOmfXCoJyhJPHXoNLcuNXhlpXaWRFhr);

        this.#children.vmOmfXCoJyhJPHXoNLcuNXhlpXaWRFhr.appendChild(this.#children.xcEalAddxRghEmVnHOGjTWAnPkqdOyjQ);
        this.#children.xcEalAddxRghEmVnHOGjTWAnPkqdOyjQ.appendChild(this.#children.bNUiOHJkRrzoDBEFYDJLYjvNXDaaSFdE);
        this.#children.vmOmfXCoJyhJPHXoNLcuNXhlpXaWRFhr.appendChild(this.#children.HkofOdhTQVkSxWtKpDBcZsARCpcFJPSJ);
        this.#children.vmOmfXCoJyhJPHXoNLcuNXhlpXaWRFhr.appendChild(this.#children.DKmdEOwlAYJcXcJTlXUgtPQFrRhLLRzn);
        this.#children.vmOmfXCoJyhJPHXoNLcuNXhlpXaWRFhr.appendChild(this.#children.SkRtzGBEFzwbOUpJiNZPlAHmcoanFdlk);
        this.#children.vmOmfXCoJyhJPHXoNLcuNXhlpXaWRFhr.appendChild(this.#children.vJxPYDzZRkhDECnKWzxnoSIdfDmINvKD);

        /* Components */
        let componentData = this.#data[ProfilePage.#wRyUQitnExbVhuYgWbFfRAQvIFbEjbSm];
        for(let i = 0; i < componentData.length; i++){
            let component = ProfileComponent.create(componentData[i]);
            this.#layout.appendChild(component);

            this.#components.push(component);
        }

        /* put */
        let RHzNlZGLfJmakjJNsMMNlFIPxtQdnQSB = document.createElement("meta");
        RHzNlZGLfJmakjJNsMMNlFIPxtQdnQSB.name = "viewport";
        RHzNlZGLfJmakjJNsMMNlFIPxtQdnQSB.content = [
            "width=device-width",
            "initial-scale=1",
            "minimum-scale=1",
            "user-scalable=yes",
        ].join(", ");

        document.head.appendChild(RHzNlZGLfJmakjJNsMMNlFIPxtQdnQSB);

        let RLnkeTtiyjjYtkijKLvKImYQtbyZwDVK = document.body.children;
        if(RLnkeTtiyjjYtkijKLvKImYQtbyZwDVK.length > 0){
            document.body.insertBefore(this.#screen, RLnkeTtiyjjYtkijKLvKImYQtbyZwDVK[0]);
        }else{
            document.body.appendChild(this.#screen);
        }
    }

    static showShareDialogue(title = "", url = location.href){
        /* initialise */
        let screen = document.createElement("div");
        let container = document.createElement("div");
        let titleView = document.createElement("div");
        let urlView = document.createElement("div");
        let urlText = document.createElement("span");
        let urlCopy = document.createElement("img");
        let qrcodeContainer = document.createElement("div");
        let qrcodeView = document.createElement("img");

        /* set class */
        screen.classList.add(ProfilePage.#classNames.dialogue.screen);
        container.classList.add(ProfilePage.#classNames.dialogue.container);

        titleView.classList.add(ProfilePage.#classNames.dialogue.titleView);

        urlView.classList.add(ProfilePage.#classNames.dialogue.urlView);
        urlText.classList.add(ProfilePage.#classNames.dialogue.urlText);
        urlCopy.classList.add(ProfilePage.#classNames.dialogue.urlCopy);

        qrcodeContainer.classList.add(ProfilePage.#classNames.dialogue.qrcodeContainer);
        qrcodeView.classList.add(ProfilePage.#classNames.dialogue.qrcodeView);


        /* set other properties */
        screen.addEventListener("click", function(event){
            if(event.target == screen) event.target.remove();
        });
    
        titleView.innerText = title;

        urlText.innerText = url;

        urlCopy.src = ProfilePage.#dojFgBTPuhRtdiveIwwZWlawERhmMHKb;
        urlCopy.addEventListener("click", function(){
            copyToClipboard(urlText.innerText);
        });

        qrcodeView.src = `https://chart.googleapis.com/chart?chs=177x177&cht=qr&chl=${encodeURI(url)}&choe=UTF-8`;

        /* append */
        screen.appendChild(container);

        container.appendChild(titleView);
        container.appendChild(urlView);
        container.appendChild(qrcodeContainer);
    
        urlView.appendChild(urlText);
        urlView.appendChild(urlCopy);
    
        qrcodeContainer.appendChild(qrcodeView);
        
        document.body.insertBefore(screen, document.body.children[0]);
    }    

    static{
        /* Load styles */
        for(let i = 0; i < ProfilePage.#stylePath.length; i++) {
            import(ProfilePage.#stylePath[i], {assert: {type: "css"}})
            .then(module => {
                document.adoptedStyleSheets.push(module.default);
            }).catch(err => {
                console.log(err);
            });
        }
    }
}