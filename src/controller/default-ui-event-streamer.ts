import UiEventStreamer from "./interfaces/ui-event-streamer";

import * as Rx from "rxjs";


declare var wade: any;

enum StreamType {
    Click,
    MouseMove,
    MouseWheel,
    MouseUp,
    MouseDown,
    KeyUp,
    KeyDown
}

export default class DefaultUiEventStreamer implements UiEventStreamer {
    private streams: Map<StreamType, Rx.ConnectableObservable<any> > = new Map();
/*
    private clickStream: Rx.ConnectableObservable<any>;
    private mouseMoveStream: Rx.ConnectableObservable<any>;
    private mouseWheelStream: Rx.ConnectableObservable<any>;
    private mouseUpStream: Rx.ConnectableObservable<any>;
    private mouseDownStream: Rx.ConnectableObservable<any>;
    private keyUpStream: Rx.ConnectableObservable<any>;
    private keyDownStream: Rx.ConnectableObservable<any>;
*/

    private subscriptions: Array<Rx.Subscription> = new Array();

    constructor() {
        this.streams.set(StreamType.Click, this.createStream('onClick'));
        this.streams.set(StreamType.MouseMove, this.createStream('onMouseMove'));
        this.streams.set(StreamType.MouseWheel, this.createStream('onMouseWheel'));
        this.streams.set(StreamType.MouseUp, this.createStream('onMouseUp'));
        this.streams.set(StreamType.MouseDown, this.createStream('onMouseDown'));
        this.streams.set(StreamType.KeyUp, this.createStream('onKeyUp'));
        this.streams.set(StreamType.KeyDown, this.createStream('onKeyDown'));

        this.streams.forEach((value, key) => {
            let subscription = value.connect();
            this.addSubscription(subscription);
        })
/*
        this.clickStream = this.createStream('onClick');
        this.addSubscription(this.clickStream.connect());

        this.mouseMoveStream = this.createStream('onMouseMove');
        this.addSubscription(this.mouseMoveStream.connect());

        this.mouseWheelStream = this.createStream('onMouseWheel');
        this.addSubscription(this.mouseWheelStream.connect());

        this.mouseUpStream = this.createStream('onMouseUp');
        this.addSubscription(this.mouseUpStream.connect());

        this.mouseDownStream = this.createStream('onMouseDown');
        this.addSubscription(this.mouseDownStream.connect());

        this.keyUpStream = this.createStream('onKeyUp');
        this.addSubscription(this.keyUpStream.connect());

        this.keyDownStream = this.createStream('onKeyDown');
        this.addSubscription(this.keyDownStream.connect());
*/
    }

    private createStream(eventName: string) {
        let basicStream: Rx.Observable<any> = Rx.Observable.create(function subscribe(observer) {
            wade.app[eventName] = (data) => {
                observer.next(data);
            }

            return function unsubscribe() {
                wade.app[eventName] = null;
            }
        });
        let subject = new Rx.Subject();
        return basicStream.multicast(subject);
    }

    private addSubscription(s: Rx.Subscription) {
        this.subscriptions.push(s);
    }

    getClickStream() {
        let stream = this.streams.get(StreamType.Click);
        if(stream) {
            return stream;
        }
        throw Error("Stream not present");
    }

    getMouseMoveStream() {
        let stream = this.streams.get(StreamType.MouseMove);
        if(stream) {
            return stream;
        }
        throw Error("Stream not present");
    }

    getMouseWheelStream() {
        let stream = this.streams.get(StreamType.MouseWheel);
        if(stream) {
            return stream;
        }
        throw Error("Stream not present");
    }

    getMouseDownStream() {
        let stream = this.streams.get(StreamType.MouseDown);
        if(stream) {
            return stream;
        }
        throw Error("Stream not present");
    }

    getMouseUpStream() {
        let stream = this.streams.get(StreamType.MouseUp);
        if(stream) {
            return stream;
        }
        throw Error("Stream not present");
    }

    getKeyDownStream() {
        let stream = this.streams.get(StreamType.KeyDown);
        if(stream) {
            return stream;
        }
        throw Error("Stream not present");
    }

    getKeyUpStream() {
        let stream = this.streams.get(StreamType.KeyUp);
        if(stream) {
            return stream;
        }
        throw Error("Stream not present");
        }
}