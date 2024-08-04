(() => {

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) { }
    }

    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string,
        ) { }
    }

    class InputEvents {

        constructor() { }

        setFocus() { };
        getValue() { };
        isActive() { };
        removeValue() { };
    }


    //? Idea para la nueva clase InputElement

    // my way
    // interface InputElementProperties {
    //     id: string;
    //     placeholder: string;
    //     value: string;
    // }

    // class InputElement {

    //     public htmlElement: HtmlElement;
    //     public inputAttributes: InputAttributes;
    //     public inputEvents: InputEvents;

    //     constructor({
    //         id, value, placeholder,
    //     }: InputElementProperties) {
    //         this.htmlElement = new HtmlElement(id, 'input');
    //         this.inputAttributes = new InputAttributes(value, placeholder);
    //         this.inputEvents = new InputEvents();
    //     }
    // }

    // other way
    class InputElement {

        public htmlElement: HtmlElement;
        public inputAttributes: InputAttributes;
        public inputEvents: InputEvents;

        constructor(value: string, placeholder: string, id: string) {
            this.htmlElement = new HtmlElement(id, 'input');
            this.inputAttributes = new InputAttributes(value, placeholder);
            this.inputEvents = new InputEvents();
        }
    }

    // const nameField = new InputEvents(
    // 'Fernando', 'Enter first name', 'txtName'
    // );
    // const nameField = new InputElement({ value: 'Fernando', 
    // placeholder: 'Enter first name', id: 'txtName' });
    const nameField = new InputElement(
        'Fernando', 'Enter first name', 'txtName'
    );

    console.log({ nameField });

})()