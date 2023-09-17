class FullCargoPredicate extends Node {

    run(): NodeReturnState {
        // return this.creep.store.getFreeCapacity() == 0 ? "Success" : "Failure"
        return "Failure"
    }
}
