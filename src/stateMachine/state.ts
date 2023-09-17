abstract class State {
    private _name: string
    private _creep: Creep
    private _tree: Tree

    constructor(name: string, creep: Creep, tree: Tree) {
        this._name = name
        this._creep = creep
        this._tree = tree
    }

    get name(): string {
       return this._name
    }

    get creep(): Creep {
       return this._creep
    }

    get tree(): Tree {
       return this._tree
    }

    execAction(): void {
        this.tree.root.run()
    }

    execEntryAction(): void {

    }

    execExitAction(): void {

    }
}
