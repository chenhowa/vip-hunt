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