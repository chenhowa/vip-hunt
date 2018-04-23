

export interface Request {
    getKind(): RequestKind;
}

export enum RequestKind {
    UnitRemove,
    BuildingRemove,
    ResourceRemove,
    PlayerRemove,

    UnitMove,
    UnitToUnitAttack,
    UnitToBuildingAttack,

    ShowBarracksPanel,

    Unknown,

}