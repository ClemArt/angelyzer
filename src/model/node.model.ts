export class Node {
    data: {
        id: string
        name: string;
        parent?: string;
        faveColor?: string;
        faveShape?: string;
    };


    constructor(params: Partial<Node>) {
        const {id, name, parent, faveColor, faveShape} = params.data;
        this.data = {id: null, name: null, faveColor: null, faveShape: null};
        this.data.id = id;
        this.data.name = name;
        this.data.parent = parent;
        this.data.faveColor = faveColor;
        this.data.faveShape = faveShape;
    }
}
