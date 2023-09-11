abstract class Node {
    private children: Node[] = []
    private _blackboard: Blackboard

    constructor(blackboard: Blackboard) {
        this._blackboard = blackboard
    }

    abstract run(): Boolean

    set blackboard(blackboard: Blackboard) {
        this._blackboard = blackboard
    }

    get blackboard(): Blackboard {
        return this._blackboard
    }
}
