'use strict';

const blueprintSpecs = {
    harvester: {
        name: 'harvester',
        parts: [WORK, WORK, MOVE, MOVE],
    },
    worker: {
        name: 'worker',
        parts: [CARRY, CARRY, MOVE, MOVE],
    },
};

if (!StructureSpawn.prototype._assembleBlueprint) {
    StructureSpawn.prototype._assembleBlueprint =
        StructureSpawn.prototype.assembleBlueprint;
    StructureSpawn.prototype.assembleBlueprint = function (blueprint) {
        let creepID = 0;
        let creepName = blueprint.name + '_' + creepID;
        while (Game.creeps[creepName]) {
            creepName = blueprint.name + '_' + creepID++;
        }
        return this.spawnCreep(blueprint.parts, creepName, {
            memory: { blueprint: blueprint.name }
        });
    };
}

Object.defineProperty(Creep.prototype, 'blueprint', {
    set: function (blueprint) {
        this.memory.blueprint = blueprint;
        this._blueprint = blueprint;
    },
    get: function () {
        if (!this._blueprint) {
            this._blueprint = this.memory.blueprint;
        }
        return this._blueprint;
    }
});

function loop() {
    let spawn = Game.spawns['Capital'];
    if (countHarvesters() < 1) {
        spawn.assembleBlueprint(blueprintSpecs.harvester);
    }
}
function countHarvesters() {
    let counter = 0;
    for (let creep in Game.creeps) {
        if (Game.creeps[creep].memory.blueprint == 'harvester')
            counter++;
    }
    return counter;
}

exports.loop = loop;
//# sourceMappingURL=main.js.map
