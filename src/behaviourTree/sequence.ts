class Sequence extends Node {
    run(): NodeReturnState {
        for (const child of this.children) {
            if (child.run() == "Failure") {
                return "Failure"
            }
        }

        return "Success"
    }
}
