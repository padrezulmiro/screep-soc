import { blueprintSpecs } from "./blueprints/blueprint";
import './prototypes/StructureSpawn';
import './prototypes/Creep';

export function loop(): void {
    let spawn: StructureSpawn = Game.spawns['Capital'];

    if(countHarvesters() < 1) {
        spawn.assembleBlueprint(blueprintSpecs.harvester)
    }
}

function countHarvesters(): number {
    let counter = 0;

    for (let creep in Game.creeps) {
        if (Game.creeps[creep].memory.blueprint == 'harvester') counter++
    }

    return counter
}
