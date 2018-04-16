export class ItemModel {
    constructor(public _id: string, public name?: string, public brand?: string,
                public category?: string, public price?: number,
                public description?: string, public imgSrc?: string) {

    }
}