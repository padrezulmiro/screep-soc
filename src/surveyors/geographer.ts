export class Geographer {
    private static instance: Geographer

    private ROOM_DIMENSION: number = 50

    private roomGeography: RoomGeography = []

    private constructor() {}

    public static getInstance(): Geographer {
        if (!Geographer.instance) {
           Geographer.instance = new Geographer
        }

        return Geographer.instance
    }

    public surveyRoomGeography(roomName: string) {
        const room = Game.rooms[roomName]

        for (var i = 0; i < this.ROOM_DIMENSION; ++i) {
            this.roomGeography.push([])

            for (var j = 0; j < this.ROOM_DIMENSION; ++j) {
                let pos = room.getPositionAt(i, j)
                let terrain = room.getTerrain().get(i, j)

                let positionGeography: PositionGeography = {
                    terrain: terrain,
                    structures: pos?.lookFor(LOOK_STRUCTURES)
                }

                this.roomGeography[i].push(positionGeography)
            }
        }
    }

    // public geographyToString(): string {
    //     let str = ""

    //     for (const posGeography of this.roomGeography) {
    //
    //     }

    //     return str
    // }

    public getRoomGeography(): RoomGeography {
        return this.roomGeography
    }
}
