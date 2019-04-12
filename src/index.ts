// create a file input element
function createFileInput(types?: string[]) {
    const input: HTMLInputElement = document.createElement("input");
    input.setAttribute("type", "file");
    if (types && types.length) {
        input.setAttribute("accept", types.join(", "));
    }
    return input
}

// open file browser dialog and resolve a promise on file selection.
export function browse(multiple = false, types?: string[]): Promise<File | File[]> {
    const input: HTMLInputElement = createFileInput(types);
    input.click(); // fire click event 
    return new Promise<File | File[]>((resolve, reject) => {
        input.onchange = function (ev) {
            const { files } = this as any as { files: File[] }
            resolve(multiple ? files : files[0])
        };
    })
}