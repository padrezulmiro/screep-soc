export const Blueprints = {
    HARVESTER: 'harvester',
    WORKER: 'worker',
};

export const blueprintSpecs = {
    harvester: {
        parts: [WORK, WORK, MOVE, MOVE],
    },

    worker: {
        parts: [CARRY, CARRY, MOVE, MOVE],
    },
};
