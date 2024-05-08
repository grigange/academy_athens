import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type MenuResponse = {
    code:number;
    lang:string;
    items:MenuItem[]
}

export type MenuItem = {
    id: number,
    name:string,
    url: string,
    weight: number,
    side_menu: boolean,
    submenu?:MenuItem[]
}
export type CarouselItemType = {
    title:string;
    image?:string | StaticImport
}