import { blueprintSpecs } from "./blueprints/blueprint";
import './prototypes/StructureSpawn';
import './prototypes/Creep';
import { Geographer } from "surveyors/geographer";

export function loop(): void {
    let spawn: StructureSpawn = Game.spawns['Spawn1'];

    if (countHarvesters() < 1) {
        spawn.assembleBlueprint(blueprintSpecs.harvester)
    }

   // if (!Memory.geography) {
   //     console.log("Setting geography");
   //     let geographer = Geographer.getInstance()
   //     geographer.surveyRoomGeography('sim')

   //     Memory.geography = {
   //         "sim": geographer.getRoomGeography()
   //     }
   // }

    for (const creep in Game.creeps) {
        // creep.execute()
    }
}

function countHarvesters(): number {
    let counter = 0;

    for (let creep in Game.creeps) {
        if (Game.creeps[creep].memory.blueprint == 'harvester') counter++
    }

    return counter
}
