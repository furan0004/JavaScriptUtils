export class toggleButton{

    static CLASS = {
        ITEM: "toggle_item",
        TRUE: "toggle_true",
        FALSE: "toggle_false",
    };

    #element;
    #label;
    #bool = false;

    constructor(label = ""){
        this.#label = label;

        this.#element = document.createElement("span");
        this.#element.classList.add(toggleButton.CLASS.ITEM);
        this.#element.innerText = label;
        
        let obj = this;
        let listener = function(){
            obj.toggle();
        };
        this.#element.addEventListener("click", listener);

        this.#syncBoolean();
    }

    setBoolean(bool){
        this.#bool = bool;
        this.#syncBoolean();
    }

    getBoolean(){
        return this.#bool;
    }

    toggle(){
        this.setBoolean(!this.getBoolean());
    }

    #syncBoolean(){
        let el = this.get();

        el.classList.remove(!this.getBoolean() ? toggleButton.CLASS.TRUE : toggleButton.CLASS.FALSE);
        el.classList.add(this.getBoolean() ? toggleButton.CLASS.TRUE : toggleButton.CLASS.FALSE);
    }

    get(){
        return this.#element;
    }
}