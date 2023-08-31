type PositionGeography = {
    terrain: 0 | 1 | 2,
    structures: Structure<StructureConstant>[] | undefined,
}

type RoomGeography = PositionGeography[][]
