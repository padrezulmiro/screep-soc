abstract class Node {
    private _children: Node[] = []
    private _blackboard: Blackboard
    private _creep: Creep
    private _name: string

    constructor(creep: Creep, blackboard: Blackboard, name: string) {
        this._creep = creep
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

    get creep(): Creep {
        return this._creep
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
