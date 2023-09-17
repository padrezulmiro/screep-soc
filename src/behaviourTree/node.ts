abstract class Node {
    private _children: Node[] = []
    private _blackboard: Blackboard
    private _tree: Tree
    private _name: string

    constructor(tree: Tree, blackboard: Blackboard, name: string) {
        this._tree = tree
        this._blackboard = blackboard
        this._name = name
    }

    abstract run(): NodeReturnState

    set blackboard(blackboard: Blackboard) {
        this._blackboard = blackboard
    }

    get blackboard(): Blackboard {
        return this._blackboard
    }

    get tree(): Tree {
        return this._tree
    }

    get name(): string {
        return this._name
    }

    get children(): Node[] {
        return this._children
    }

    pushChild(node: Node) {
        this._children.push(node)
    }
}
