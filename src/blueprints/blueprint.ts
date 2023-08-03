export const BlueprintEnum = {
    HARVESTER: 'harvester',
    WORKER: 'worker',
};

export const blueprintSpecs: BlueprintSpecs = {
    harvester: {
        name: 'harvester',
        parts: [WORK, WORK, MOVE, MOVE],
    },

    worker: {
        name: 'worker',
        parts: [CARRY, CARRY, MOVE, MOVE],
    },
};
