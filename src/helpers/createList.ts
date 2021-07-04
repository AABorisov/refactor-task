import {IPostItem} from "../models/IPostItem";

const CHARS_STRING = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function createList (startIndex: number = 0, length: number = 20): Array<IPostItem> {
    return new Array(length).fill('').map((_, index) => {
        return {
            id: startIndex + index,
            title: createTitle()
        };
    })
}

export function createTitle (): string {
    const result = [];
    for (let i = 0; i < 10; i++) {
        result.push(CHARS_STRING.charAt(Math.floor(Math.random() *
            CHARS_STRING.length)));
    }

    return result.join('');
}
