type OwnerId = number;

interface Owned {
    getOwnerId(): OwnerId;
}

export { Owned };
