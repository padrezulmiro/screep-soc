class StateMachine {
    private states: State[]
    private initialState: State
    private currentState: State
    private creep: Creep

    constructor(scheme: string, creep: Creep) {
        this.creep = creep


    }
}
