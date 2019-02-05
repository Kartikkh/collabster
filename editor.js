import SimpleMDE from 'simplemde';


class Editor {
    constructor(textArea) {
        let simplemde = new SimpleMDE({
            element: textArea,
            blockStyles: {
                bold: "__",
                italic: "_"
            },
            placeholder: "Type here...",
            promptURLs: true,
            tabSize: 4,
            toolbar: false,
            toolbarTips: false,
            spellChecker:true
        });
    }

    
}

export {
    Editor
}
