import * as _ from "lodash";


export function assertExpectedEqualsActual<T>(actual: T, expected: T, message: string) {
    if(! _.isEqual(actual, expected) ) {
        throw Error(message);
    }
}

export function assertTrue(condition: boolean, message: string) {
    assertExpectedEqualsActual<boolean>(true, condition, message);   
}