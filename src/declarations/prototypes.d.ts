interface StructureSpawn {
    _assembleBlueprint(blueprint: Blueprint): ScreepsReturnCode

    assembleBlueprint(blueprint: Blueprint): ScreepsReturnCode
}

interface Creep {
    execAction(): void
}
