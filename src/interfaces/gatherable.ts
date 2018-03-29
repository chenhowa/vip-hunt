interface Gatherable {
    getAmount(): number;
    reduceAmountBy( amountGathered: number );
}

export { Gatherable };
