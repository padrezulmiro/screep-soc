type Blueprint = {
    name: string,
    parts: BodyPartConstant[]
}

type BlueprintSpecs = {
    harvester: Blueprint,
    worker: Blueprint,
}
