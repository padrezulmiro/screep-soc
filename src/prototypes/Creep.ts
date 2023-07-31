Object.defineProperty(Creep.prototype, 'blueprint', {
    set: function(blueprint) {
        this.memory.blueprint = blueprint;
        this._blueprint = blueprint;
    },

    get: function() {
        if (!this._blueprint) {
            this._blueprint = this.memory.blueprint;
        }

        return this._blueprint;
    }
})
