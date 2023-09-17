class Tree {
    private _root: Node
    private _creep: Creep

    constructor(root: Node, creep: Creep) {
        this._root = root
    }

    get root(): Node {
        return this._root
    }

    get creep(): Creep {
        return this._creep
    }
}
