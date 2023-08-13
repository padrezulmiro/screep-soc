export class Geographer {
    private static instance: Geographer

    private DIM: number = 50
    private roomLayout = []

    private constructor() {}

    public static getInstance(): Geographer {
        if (!Geographer.instance) {
           Geographer.instance = new Geographer
        }

        return Geographer.instance
    }


    public surveyRoomTerrain(roomName: string) {
        const room = Game.rooms[roomName]

        let posTerrain = null
        for (var i = 0; i < this.DIM; ++i) {
            for (var j = 0; j < this.DIM; ++j) {
                let posStructAndTerrain = room.lookAt(i, j).filter(
                    (struct) =>
                        struct.type == 'structure' || struct.type == 'terrain'
                )

                let pos = {
                    x: i,
                    y: j
                }
            }
        }
    }
}
