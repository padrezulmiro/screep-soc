type Blueprint = {
    name: string,
    parts: BodyPartConstant[]
}

type BlueprintSpecs = {
    [key: string]: Blueprint
}
