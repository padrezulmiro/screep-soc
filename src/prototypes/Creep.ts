import { blueprintSpecs } from "blueprints/blueprint";

Object.defineProperty(Creep.prototype, 'blueprint', {
    set: function(blueprint: Blueprint) {
        this.memory.blueprint = blueprint.name;
        this._blueprint = blueprint;
    },

    get: function() {
        if (!this._blueprint) {
            this._blueprint = blueprintSpecs[this.memory.blueprint]
        }

        return this._blueprint;
    }
})

Object.defineProperty(Creep.prototype, 'stateMachine', {
    // set: function(stateMachine: StateMachine) {
    //     this.memory.stateMachine = stateMachine;
    //     this._stateMachine = stateMachine;
    // },

    get: function() {
        if (!this._stateMachine) {
            this._stateMachine = new StateMachine()
        }

        return this._stateMachine;
    }
})

Creep.prototype.execAction = function() {

}
