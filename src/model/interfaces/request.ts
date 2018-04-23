

export interface Request {
    getKind(): RequestKind;
}

export enum RequestKind {
    UnitRemove,
    BuildingRemove,
    ResourceRemove,
    PlayerRemove,

    Move,
    Die,

    UnitToUnitAttack,
    UnitToBuildingAttack,

    ShowBarracksPanel,

    Unknown,

}