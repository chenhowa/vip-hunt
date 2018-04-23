
// Type definitions for WADE 3.8.1
// Definitions by: Howard Chen 

/*~ If your library has properties exposed on a global variable,
 *~ place them here.
 *~ You should also place types (interfaces and type alias) here.
 */

declare namespace wade {
    let app: any;
    const c_timeStep: number;
    let defaultLayer: number;

    namespace iso {
        let deleteObject: (obj: SceneObject) => void;
    }

    let onAddToScene: (data?: any) => void;
    let onAnimationEnd: (data?: any) => void;
    let onAnimationStart: (data?: any) => void;
    let onAppTimer: (data?: any) => void;
    let onBlur: (data?: any) => void;
    let onCameraMove: (data?: any) => void;
    let onCameraMoveComplete: (data?: any) => void;
    let onClick: (data?: any) => void;
    let onMouseDown: (data?: any) => void;
    let onMouseUp: (data?: any) => void;
    let onMouseMove: (data?: any) => void;
    let onMouseWheel: (data?: any) => void;
    let onMouseIn: (data?: any) => void;
    let onMouseOut: (data?: any) => void;
    let onSwipeLeft: (data?: any) => void;
    let onSwipeRight: (data?: any) => void;
    let onSwipeUp: (data?: any) => void;
    let onSwipeDown: (data?: any) => void;
    let onCollision: (data?: any) => void;
    let onContainerResize: (data?: any) => void;
    let onFocus: (data?: any) => void;
    let onGamepadButtonDown: (data?: any) => void;
    let onGamepadButtonUp: (data?: any) => void;
    let onGamepadConnected: (data?: any) => void;
    let onGamepadDisconnected: (data?: any) => void;
    let onUpdate: (data?: any) => void;
    let onRemoveFromScene: (data?: any) => void;
    let onMoveComplete: (data?: any) => void;
    let onResize: (data?: any) => void;
    let onRotationComplete: (data?: any) => void;
    let onPathNode: (data?: any) => void;
    let onOverlap: (data?: any) => void;
    let onKeyUp: (data?: any) => void;
    let onKeyDown: (data?: any) => void;
    let onKeyPress: (data?: any) => void;

    function addEventListener(obj: SceneObject, event: string): void; 
    function addGlobalEventListener(obj: SceneObject, event: string): void;
    function addSceneObject(obj: SceneObject, autoListen: boolean, params: any): SceneObject;
    function ajax(params: any): void;
    function clearAllTimeoutsAndIntervals(): boolean;
    function clearInterval(intervalUid: number): boolean;
    function clearScene(): void;
    function clearTimeout(timeoutUid: number): boolean;
    function cloneArray(arr: any[]): any[];
    function cloneObject(obj: any): any;
    function drawLayerToImage(layerId: number, imageName: string, replace: boolean,
                             offset: any, transform: any, compositeOperation: string,
                             callback: () => void): void;
    function error(data:any): void;
    function exportScene(stringify: boolean, exclude: any[], exportObjectFunctions: boolean,
                        ): any | string;
    function fadeInLayer(layerId: number, time: number, callback: () => void): void;
    function fadeOutLayer(layerId: number, time: number, callback: () => void): void;
    function forceOrientation(orientation: string): void;
    function getAppTime(): number;
    function getCameraPosition(): any;
    function getClockTime(): number;
    function getForcedOrientation(): string;
    function getImage(file: string, errorMessage: string): any;
    function getJson(file: string): any | any[];
    function getKeyCode(keyName: string): number;
    function getKeyName(keyCode: number): string;
    function getLayerRenderMode(layerId: number): string;
    function getLoadingPercentage(): number;
    function getMaxScreenHeight(): number;
    function getMaxScreenWidth(): number;
    function getMinScreenHeight(): number;
    function getMinScreenWidth(): number;
    function getMousePosition(): any;
    function getSceneObject(name: string): SceneObject;
    function getSceneObjects(property: string, value: any): SceneObject[];
    function getScreenHeight(): number;
    function getScreenWidth(): number;
    function getSpritesInArea(area: any, layerId: number, sorted: boolean): Sprite[];
    function getSpritesInScreenArea(area: any): Sprite[];
    function getText(file: string): string;
    function getVersion(): string;
    function hashString(str: string): number;
    function importScene(data: any, loadingBar: any, callback: () => void,
                        async: boolean, clearScene: boolean);
    function isArray(a: any): boolean;
    function isEventListener(obj: SceneObject, event: string): boolean;
    function isKeyDown(keyCode: string | number): boolean;
    function isMouseDown(buttonId: number): boolean;
    function loadAudio(file: string, autoplay: boolean, looping: boolean,
                      callback: () => void, errorCallback: () => void): void;
    function loadImage(file: string, callback: () => void, errorCallback: () => void): void;
    function loadImages(arryOfFileNames: string[]): void;
    function loadJson(file: string, anyToStoreData: any, callback: () => void,
                     forceReload: boolean, errorCallback: () => void);
    function loadScene(fileName: string, loadingBar?: any, callback?: () => void,
                      clearScene?: boolean): void;
    function loadText(file: string, anyToStoreData?: any, callback?: () => void,
                     forceReload?: boolean, errorCallback?: () => void): void;
    function log(data: any): void;
    /* SPEED MISSING TYPE */function moveCamera(destination: any, speed?: number, callback?: () => void): void;
    function pauseSimulation(mainLoopName?: string): void;
    function playAudio(file: string, looping: boolean, callback?: () => void): number;
    function playAudioSegment(file: string, start?: number, end?: number,
                             callback?: () => void): number;
    function removeEventListener(obj: SceneObject, event: string): void;
    function removeGlobalEventListener(obj: SceneObject, event: string): void;
    function removeSceneObject(obj: SceneObject): void;
    function removeSceneObjects(objs: SceneObject[]): void;
    function requireVersion(requiredVersion: string, errorMode?: string,
                           errorMessage?: string): void;
    function resumeSimulation(mainLoopName?: string): void;
    function retrieveLocalObject(name: string): string;
    function screenPositionToWorld(layerId: number, position: any): any;
    function screenUnitToWorld(layerId: number): number;
    function setCameraBounds(minX?: number, maxX?: number, minY?: number, maxY?: number,
                            minZ?: number, maxZ?: number): void;
    function setCameraPosition(pos: any): void;
    function setCameraTarget(target?: SceneObject, inertia?: number, offset?: any): void;
    function setClickTolerance(tolerance?: number): void;
    function setInterval(f: () => void, time: number): number;
    function setLayerTransform(layerId: number, scale: number, translate: number): void;
    function setLoadingBar(visible?: boolean, position?: any, backColor?: string,
                           foreColor?: string): void;
    function setMaxScreenSize(width: number, height: number): void; 
    function setMiNScreenSize(width: number, height: number): void;
    function setMinimumInputEventInterval(type: string, interval: number): void;
    function setTimeout(f: () => void, time: number): number;
    function simulateSceneObject( obj: SceneObject, toggle: boolean): void;
    function stop(): void;
    function stopAudio(uid?: number);
    function stopInputEvents(): void;
    function storeLocalObject(name: string, obj: any ): void;
    function warn(data: any): void;
    function worldPositionToScreen(layerId: number, position: any): any;
    function worldUnitToScreen(layerId: number): number;
    
}

interface IsoCoordinate {
    x: number,
    z: number
}

interface Coordinate {
    x: number,
    y: number
}

interface IsoData {
    gridCoords: IsoCoordinate;
}

interface ISceneObject {
    iso: IsoData;

    addBehavior(behaviorClass: any): any;
    addSprite(sprite: Sprite, offset?: any, index?: number): number;
    clone(posX?: number, posY?: number): SceneObject;
    fadeIn(time: number, callback: () => void): void;
    fadeOut(time: number, callback: () => void): void;
    getAlignment(): any;
    getBehavior(name?: string): any;
    getBehaviorByIndex(index?: number): any;
    getBehaviors(): any[];
    getMovementSpeed(): number;
    getName(): string;
    getOverLappingObjects(searchAllLayers?: boolean, precision?: string): any[];
    getPosition(): any;
    getRotation(): any;
    getSprite(indexOrName?: number | string): Sprite | undefined;
    getSpriteAtPosition(screenPosition: any): any;
    getSpriteByName(name:string): Sprite;
    getSpriteCount(): number;
    getSpriteIndex(sprite: Sprite): number;
    getSpriteOffset(indexOrName?: number | string): any;
    getTargetPosition(): any;
    getVelocity(): any;
    interval(time: number, functionName: string, data?: any, variance?: number): void;
    isAnimating(): boolean;
    isInScene(): boolean;
    isListeningFor(eventName: string): boolean;
    isMoving(): boolean;
    isOnScreen(): boolean;
    isTemplate(): boolean;
    isVisible( checkAllSprites?: boolean): boolean;
    listenFor(eventName: string): void;
    moveTo(posX: number, posY: number, speed: number): void;
    overlapsObject(obj: SceneObject, precision?: string): boolean;
    overlapsSprite(sprite: Sprite, precision?: string): boolean;
    playAnimation(name: string, direction?: string): void;
    process(functionName: string, data?: any): boolean;
    processEvent(eventName: string, eventData?: any): boolean;
    removeAllSprites(): void;
    removeBehavior(name: string): boolean;
    removeBehaviorByIndex(index: number): void;
    removeSprite(sprite: Sprite): void;
    removeSpriteByIndex(index: number): void;
    resumeAnimation(): void;
    schedule(time: number, functionName: string, data?: any ): void;
    serialize(stringify?: boolean, propertiesToExclude?: string[],
                serializeFunctions?: boolean): any | string;
    setAlignment(leftRight?: string, topBottom?: string): void;
    setAsTemplate(toggle: boolean): void;
    setName(name?: string): void;
    setPosition(posX: number | any, posY?: number);
    setSpriteOffset(indexOrName: number | string, offset: any): void;
    setSpriteOffsets(spriteOffsets: any[]): void;
    setVelocity(velocityX: number | any, velocityY?: number): void;
    setVisible(toggle: boolean): void;
    stopAnimation(): void;
    stopListeningFor(eventName: string): void;
    stopMoving(): void;
    unschedule(eventName: string): void;
}

declare class SceneObject implements ISceneObject {
    constructor( sprites?: Sprite[] | any, behaviors?: any,
               poxX?: number, posY?: number, name?: string);

    iso: IsoData;
    addBehavior(behaviorClass: any): any;
    addSprite(sprite: Sprite, offset?: any, index?: number): number;
    clone(posX?: number, posY?: number): SceneObject;
    fadeIn(time: number, callback: () => void): void;
    fadeOut(time: number, callback: () => void): void;
    getAlignment(): any;
    getBehavior(name?: string): any;
    getBehaviorByIndex(index?: number): any;
    getBehaviors(): any[];
    getMovementSpeed(): number;
    getName(): string;
    getOverLappingObjects(searchAllLayers?: boolean, precision?: string): any[];
    getPosition(): any;
    getRotation(): any;
    getSprite(indexOrName?: number | string): Sprite | undefined;
    getSpriteAtPosition(screenPosition: any): any;
    getSpriteByName(name:string): Sprite;
    getSpriteCount(): number;
    getSpriteIndex(sprite: Sprite): number;
    getSpriteOffset(indexOrName?: number | string): any;
    getTargetPosition(): any;
    getVelocity(): any;
    interval(time: number, functionName: string, data?: any, variance?: number): void;
    isAnimating(): boolean;
    isInScene(): boolean;
    isListeningFor(eventName: string): boolean;
    isMoving(): boolean;
    isOnScreen(): boolean;
    isTemplate(): boolean;
    isVisible( checkAllSprites?: boolean): boolean;
    listenFor(eventName: string): void;
    moveTo(posX: number, posY: number, speed: number): void;
    overlapsObject(obj: SceneObject, precision?: string): boolean;
    overlapsSprite(sprite: Sprite, precision?: string): boolean;
    playAnimation(name: string, direction?: string): void;
    process(functionName: string, data?: any): boolean;
    processEvent(eventName: string, eventData?: any): boolean;
    removeAllSprites(): void;
    removeBehavior(name: string): boolean;
    removeBehaviorByIndex(index: number): void;
    removeSprite(sprite: Sprite): void;
    removeSpriteByIndex(index: number): void;
    resumeAnimation(): void;
    schedule(time: number, functionName: string, data?: any ): void;
    serialize(stringify?: boolean, propertiesToExclude?: string[],
                serializeFunctions?: boolean): any | string;
    setAlignment(leftRight?: string, topBottom?: string): void;
    setAsTemplate(toggle: boolean): void;
    setName(name?: string): void;
    setPosition(posX: number | any, posY?: number);
    setSpriteOffset(indexOrName: number | string, offset: any): void;
    setSpriteOffsets(spriteOffsets: any[]): void;
    setVelocity(velocityX: number | any, velocityY?: number): void;
    setVisible(toggle: boolean): void;
    stopAnimation(): void;
    stopListeningFor(eventName: string): void;
    stopMoving(): void;
    unschedule(eventName: string): void;

}

declare class Sprite {
    constructor(image?: string | any, layerId?: number);

    addAnimation(name: string, animation: Animation, dontPlay?: boolean): void;
    containsScreenPoint(point: any): boolean;
    fadeIn(time?: number, callback?: () => void): void;
    fadeOut(time?: number, callback?: () => void): void;
    getAnimation(name?: string): Animation;
    getCurrentAnimation(): Animation;
    getCurrentAnimationName(): string;
    getImageName(): string;
    getIndexInLayer(): number;
    getLayerId(): number;
    getName(): string;
    getOverlappiingObjects(searchAllLayers?: boolean, precision?: string): SceneObject[];
    getPosition(): any;
    getSceneObject(): SceneObject;
    getSize(): any;
    getWorldOffset(screenPosition: any): any;
    hasAnimation(name: string): boolean;
    isOnScreen(): boolean;
    isUsingPixelPerfectMouseEvents(): number;
    isVisible(): boolean;
    overlapsSprite(otherSprite: Sprite, precision?: string): boolean;
    playAnimation(name: string, direction?: string): void;
    resumeAnimation(): void;
    serialize(stringify?: boolean, propertiesToExclude?: string[]): any | string;
    setImageFile(image: string, updateSizeFromImage: boolean): void;
    setIndexInLayer(index: number): number;
    setLayer(layerId: number): void;
    setName(name: string): void;
    setPosition(posX: number | any, posY: number): void;
    setSceneObject(obj: SceneObject): void;
    setSize(width: number, height: number, resetScaleFactor?: boolean): void;
    setSortPoint(x: number, y: number): void;
    setVisible(toggle: boolean): void;
    stopAnimation(): void;
    usePixelPerfectMouseEvents(threshold: number): void;

}

declare class TextSprite {
    constructor(text?: string | any, font?: string, color?: string, alignment?: string,
               layerId?: number);

    clone(): TextSprite;
    getNumLines(): number;
    getText(): string;
    setAlignment(alignment: string): void;
    setColor(color: string): void;
    setFont(font: string): void;
    setLineSpacing(lineSpacing: number): void;
    setMaxLines(maxLines: number): void;
    setMaxWidth(maxWidth: number): void;
    setOutline(width: number, color?: string): void;
    setShadow(color: string, blur: number, offsetX: number, offsetY: number): void;
    setText(text: string): void;
}

declare class Animation {
    constructor(image?: string | any, numCellsX?: number, numCellsY?: number,
               speed?: number, looping?: boolean, startFrame?: number, endFrame?: number,
               autoResize?: boolean, offset?: any);
    getFrameCount(): number;
    getFrameNumber(): number;
    getFrameSize(): any;
    getImageName(): string;
    getNumCells(): number;
    getOffset(): any;
    getRelativeImageName(): string;
    getSpeed(): number;
    isPlaying(): boolean;
    play(direction?: string): void;
    resume(): void;
    serialize(stringify?: boolean, propertiesToExclude?: string[]): any | string;
    setFrameNumber(frameNumber: number): void;
    setOffset(offset: any): void;
    setSpeed(speed: number): void;
    stop(): void;
}

declare class Path {

}

export { wade, SceneObject, Sprite, Animation, TextSprite };
