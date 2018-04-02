

let utilities = {
    forEachValueInTheIterator<T>(iter: IterableIterator<T>, fn: (arg: T) => void ) {
        while(true) {
            let next = iter.next();

            if(next.done) {
                break;
            }

            fn(next.value);
        }
        
    }

}

export { utilities };