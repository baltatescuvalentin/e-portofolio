import { RefObject } from 'react';

export interface ElemAsRef {
    myref: RefObject<HTMLDivElement | null>;
}

export interface ElemAsRefFunc {
    scrollToElem: (id: number) => void,
}