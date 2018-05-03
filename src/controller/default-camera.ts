import Camera from "./interfaces/camera";
import Keys from "./keys";
import UiEventStreamer from "./interfaces/ui-event-streamer";

import * as Rx from "rxjs";

declare var wade: any;


export default class DefaultCamera implements Camera {
    private movement = new CameraMovement(100, 100 );
    private subscriptions: Array<Rx.Subscription> = new Array();

    constructor(private streamer: UiEventStreamer) {

    }

    setScreenSize() {
        wade.setMinScreenSize(20, 20);
        wade.setMaxScreenSize(1280, 800);
    }

    allowMouseControl() {
        this.streamer.getMouseMoveStream().subscribe({
            next: (data) => {
                this.mouseMove(data.screenPosition);
            }
        });

        this.streamer.getMouseWheelStream().subscribe({
            next: (data) => {
                this.movement.zoom(data.value);
            }
        });
    }

    private mouseMove (screenPosition) {
        const x = screenPosition.x;
        const y = screenPosition.y;

        const rightLimit = wade.getScreenWidth() / 2;
        const rightDiff = Math.abs(x - rightLimit);

        const leftLimit = -1 * rightLimit;
        const leftDiff = Math.abs(x - leftLimit);

        const bottomLimit = wade.getScreenHeight() / 2;
        const bottomDiff = Math.abs(y - bottomLimit);

        const topLimit = -1 * bottomLimit;
        const topDiff = Math.abs(y - topLimit);

        const edgeTol = 20;
        const cornerTol = 40;

        // Only allow the mouse to affect the camera if the keys aren't
        // moving the camera.
        if ( Keys.noKeysPressed() ) {
            if (topDiff < cornerTol && leftDiff < cornerTol) {
                this.movement.moveToNW();
            } else if (topDiff < cornerTol && rightDiff < cornerTol) {
                this.movement.moveToNE();
            } else if (bottomDiff < cornerTol && rightDiff < cornerTol) {
                this.movement.moveToSE();
            } else if (bottomDiff < cornerTol && leftDiff < cornerTol) {
                this.movement.moveToSW();
            } else if (topDiff < edgeTol) {
                this.movement.moveToTop();
            } else if (bottomDiff < edgeTol) {
                this.movement.moveToBottom();
            } else if (leftDiff < edgeTol) {
                this.movement.moveToLeft();
            } else if (rightDiff < edgeTol) {
                this.movement.moveToRight();
            } else if (this.movement.isMoving()) {
                this.movement.stop();
            }
        }
    }

    allowKeyboardControl() {
        this.streamer.getKeyDownStream().subscribe({
            next: (data) => {
                this.keyPressed();
            }
        });

        this.streamer.getKeyUpStream().subscribe({
            next: (data) => {
                this.keyReleased();
            }
        });
    }

    private keyPressed() {
        if (Keys.opposingKeysPressed() ) {
            this.movement.stop();
            return;
        }

        if (this.movement.isMoving() ) {
            // Stop moving for an instant, to make sure keyboad control
            // overrides mouse control.
            this.movement.stop();
        }

        if ( this.upPressed() ) {
            if ( this.leftPressed() ) {
                this.movement.moveToNW();
            } else if ( this.rightPressed() ) {
                this.movement.moveToNE();
            }  
            else {
                this.movement.moveToTop();
            }
        } else if ( this.downPressed() ) {
            if ( this.leftPressed() ) {
                this.movement.moveToSW();
            } else if ( this.rightPressed() ) {
                this.movement.moveToSE();
            } else {
                this.movement.moveToBottom();
            }
        } else if ( this.leftPressed() ) {
            this.movement.moveToLeft();
        } else if ( this.rightPressed() ) {
            this.movement.moveToRight();
        }
    }

    private upPressed(): boolean {
        return wade.isKeyDown(Keys.up());
    }

    private leftPressed(): boolean {
        return wade.isKeyDown(Keys.left());
    }

    private rightPressed(): boolean {
        return wade.isKeyDown(Keys.right());
    }

    private downPressed(): boolean {
        return wade.isKeyDown(Keys.down());
    }

    private keyReleased () {
        if ( Keys.noKeysPressed() ) {
            this.movement.stop();
            return;
        }
        if (Keys.opposingKeysPressed() ) {
            this.movement.stop();
            return;
        }

        if ( this.upPressed() ) {
            this.movement.moveToTop();
        } else if ( this.downPressed() ) {
            this.movement.moveToBottom();
        } else if ( this.leftPressed()  ) {
            this.movement.moveToLeft();
        } else if ( this.rightPressed() ) {
            this.movement.moveToRight();
        } else {
            this.movement.stop();
        }
    }
}


class CameraMovement {
    private isCameraMoving: boolean = false;

    private INSTANTANEOUS_SPEED = 40000;

    constructor(private cameraSpeed: number, private zoomSpeed: number) {

    }

    isMoving() {
        return this.isMoving;
    }

    stop() {
        let currentPosition = wade.getCameraPosition();
        wade.moveCamera(currentPosition, this.INSTANTANEOUS_SPEED);
        this.toggleMovementStatus(false);
    }

    private toggleMovementStatus(status: boolean) {
        this.isCameraMoving = status;
    }

    zoom(factor: number) {
        const destination = this.calcZoomDestination(factor);
        wade.moveCamera(destination, this.zoomSpeed);
    }

    private calcZoomDestination(factor: number) {
        const destination = wade.getCameraPosition();
        destination.z += (factor / Math.abs(factor) ) * 0.1;

        return destination;
    }
    
    moveToTop () {
        const destination = wade.getCameraPosition();
        //Set new destiination relative to current position
        destination.y -= (wade.getScreenHeight() / 2);
        wade.moveCamera(destination, this.cameraSpeed, this.moveToTop);
        this.toggleMovementStatus(true);
    }
    
    moveToLeft () {
        const destination = wade.getCameraPosition();
        //Set new destiination relative to current position
        destination.x -= (wade.getScreenWidth() / 2);
        wade.moveCamera(destination, this.cameraSpeed, this.moveToLeft);
        this.toggleMovementStatus(true);
    }
    
    moveToRight() {
        const destination = wade.getCameraPosition();
        //Set new destiination relative to current position
        destination.x += (wade.getScreenWidth() / 2);
        wade.moveCamera(destination, this.cameraSpeed, this.moveToRight);
        this.toggleMovementStatus(true);
    }
    
    moveToBottom () {
        const destination = wade.getCameraPosition();
        destination.y += (wade.getScreenHeight() / 2);
        wade.moveCamera(destination, this.cameraSpeed, this.moveToBottom);
        this.toggleMovementStatus(true);
    }
    
    moveToNW () {
        const destination = wade.getCameraPosition();
        destination.y -= (wade.getScreenHeight() / 2);
        destination.x -= (wade.getScreenWidth() / 2);
        wade.moveCamera(destination, this.cameraSpeed, this.moveToNW);
        this.toggleMovementStatus(true);
    }
   
    moveToNE () {
        const destination = wade.getCameraPosition();
        destination.y -= (wade.getScreenHeight() / 2);
        destination.x += (wade.getScreenWidth() / 2);
        wade.moveCamera(destination, this.cameraSpeed, this.moveToNE);
        this.toggleMovementStatus(true);
    }
    
    moveToSE() {
        const destination = wade.getCameraPosition();
        destination.y += (wade.getScreenHeight() / 2);
        destination.x += (wade.getScreenWidth() / 2);
        wade.moveCamera(destination, this.cameraSpeed, this.moveToSE);
        this.toggleMovementStatus(true);
    }
    
    moveToSW () {
        const destination = wade.getCameraPosition();
        destination.y += (wade.getScreenHeight() / 2);
        destination.x -= (wade.getScreenWidth() / 2);
        wade.moveCamera(destination, this.cameraSpeed, this.moveToSW);
        this.toggleMovementStatus(true);
    }
}