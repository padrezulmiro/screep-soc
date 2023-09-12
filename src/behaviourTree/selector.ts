class Selector extends Node {
    run(): NodeReturnState {
        for (const child of this.children) {
            if (child.run() == "Success") {
                return "Success"
            }
        }

        return "Failure"
    }
}
