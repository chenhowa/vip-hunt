

import * as Rx from "rxjs";

export default interface UiEventStreamer {
    getClickStream(): Rx.Observable<any>;
    getMouseMoveStream(): Rx.Observable<any>;
    getMouseWheelStream(): Rx.Observable<any>;
    getMouseDownStream(): Rx.Observable<any>;
    getMouseUpStream(): Rx.Observable<any>;
    getKeyDownStream(): Rx.Observable<any>;
    getKeyUpStream(): Rx.Observable<any>;
}