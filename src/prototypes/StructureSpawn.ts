if (!StructureSpawn.prototype._assembleBlueprint) {
    StructureSpawn.prototype._assembleBlueprint =
        StructureSpawn.prototype.assembleBlueprint;

    StructureSpawn.prototype.assembleBlueprint = function(blueprint: Blueprint) {
        let creepID = 0;
        let creepName = blueprint.name + '_' + creepID;

        while (Game.creeps[creepName]) {
            creepName = blueprint.name + '_' + creepID++;
        }

        return this.spawnCreep(blueprint.parts, creepName, {
            memory: {blueprint: blueprint.name}
        })
    }
}
