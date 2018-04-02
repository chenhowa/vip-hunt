
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

    let onAddToScene: (data?: object) => void;
    let onAnimationEnd: (data?: object) => void;
    let onAnimationStart: (data?: object) => void;
    let onAppTimer: (data?: object) => void;
    let onBlur: (data?: object) => void;
    let onCameraMove: (data?: object) => void;
    let onCameraMoveComplete: (data?: object) => void;
    let onClick: (data?: object) => void;
    let onMouseDown: (data?: object) => void;
    let onMouseUp: (data?: object) => void;
    let onMouseMove: (data?: object) => void;
    let onMouseWheel: (data?: object) => void;
    let onMouseIn: (data?: object) => void;
    let onMouseOut: (data?: object) => void;
    let onSwipeLeft: (data?: object) => void;
    let onSwipeRight: (data?: object) => void;
    let onSwipeUp: (data?: object) => void;
    let onSwipeDown: (data?: object) => void;
    let onCollision: (data?: object) => void;
    let onContainerResize: (data?: object) => void;
    let onFocus: (data?: object) => void;
    let onGamepadButtonDown: (data?: object) => void;
    let onGamepadButtonUp: (data?: object) => void;
    let onGamepadConnected: (data?: object) => void;
    let onGamepadDisconnected: (data?: object) => void;
    let onUpdate: (data?: object) => void;
    let onRemoveFromScene: (data?: object) => void;
    let onMoveComplete: (data?: object) => void;
    let onResize: (data?: object) => void;
    let onRotationComplete: (data?: object) => void;
    let onPathNode: (data?: object) => void;
    let onOverlap: (data?: object) => void;
    let onKeyUp: (data?: object) => void;
    let onKeyDown: (data?: object) => void;
    let onKeyPress: (data?: object) => void;

    function addEventListener(obj: SceneObject, event: string): void; 
    function addGlobalEventListener(obj: SceneObject, event: string): void;
    function addSceneObject(obj: SceneObject, autoListen: boolean, params: any): SceneObject;
    function ajax(params: object): void;
    function clearAllTimeoutsAndIntervals(): boolean;
    function clearInterval(intervalUid: number): boolean;
    function clearScene(): void;
    function clearTimeout(timeoutUid: number): boolean;
    function cloneArray(arr: any[]): any[];
    function cloneObject(obj: object): object;
    function drawLayerToImage(layerId: number, imageName: string, replace: boolean,
                             offset: object, transform: object, compositeOperation: string,
                             callback: () => void): void;
    function error(data:any): void;
    function exportScene(stringify: boolean, exclude: any[], exportObjectFunctions: boolean,
                        ): object | string;
    function fadeInLayer(layerId: number, time: number, callback: () => void): void;
    function fadeOutLayer(layerId: number, time: number, callback: () => void): void;
    function forceOrientation(orientation: string): void;
    function getAppTime(): number;
    function getCameraPosition(): object;
    function getClockTime(): number;
    function getForcedOrientation(): string;
    function getImage(file: string, errorMessage: string): object;
    function getJson(file: string): object | object[];
    function getKeyCode(keyName: string): number;
    function getKeyName(keyCode: number): string;
    function getLayerRenderMode(layerId: number): string;
    function getLoadingPercentage(): number;
    function getMaxScreenHeight(): number;
    function getMaxScreenWidth(): number;
    function getMinScreenHeight(): number;
    function getMinScreenWidth(): number;
    function getMousePosition(): object;
    function getSceneObject(name: string): SceneObject;
    function getSceneObjects(property: string, value: any): SceneObject[];
    function getScreenHeight(): number;
    function getScreenWidth(): number;
    function getSpritesInArea(area: object, layerId: number, sorted: boolean): Sprite[];
    function getSpritesInScreenArea(area: object): Sprite[];
    function getText(file: string): string;
    function getVersion(): string;
    function hashString(str: string): number;
    function importScene(data: object, loadingBar: object, callback: () => void,
                        async: boolean, clearScene: boolean);
    function isArray(a: any): boolean;
    function isEventListener(obj: SceneObject, event: string): boolean;
    function isKeyDown(keyCode: string | number): boolean;
    function isMouseDown(buttonId: number): boolean;
    function loadAudio(file: string, autoplay: boolean, looping: boolean,
                      callback: () => void, errorCallback: () => void): void;
    function loadImage(file: string, callback: () => void, errorCallback: () => void): void;
    function loadImages(arryOfFileNames: string[]): void;
    function loadJson(file: string, objectToStoreData: object, callback: () => void,
                     forceReload: boolean, errorCallback: () => void);
    function loadScene(fileName: string, loadingBar?: object, callback?: () => void,
                      clearScene?: boolean): void;
    function loadText(file: string, objectToStoreData?: object, callback?: () => void,
                     forceReload?: boolean, errorCallback?: () => void): void;
    function log(data: any): void;
    /* SPEED MISSING TYPE */function moveCamera(destination: object, speed?: number, callback?: () => void): void;
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
    function screenPositionToWorld(layerId: number, position: object): object;
    function screenUnitToWorld(layerId: number): number;
    function setCameraBounds(minX?: number, maxX?: number, minY?: number, maxY?: number,
                            minZ?: number, maxZ?: number): void;
    function setCameraPosition(pos: object): void;
    function setCameraTarget(target?: SceneObject, inertia?: number, offset?: object): void;
    function setClickTolerance(tolerance?: number): void;
    function setInterval(f: () => void, time: number): number;
    function setLayerTransform(layerId: number, scale: number, translate: number): void;
    function setLoadingBar(visible?: boolean, position?: object, backColor?: string,
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
    function worldPositionToScreen(layerId: number, position: object): object;
    function worldUnitToScreen(layerId: number): number;
    
}

declare class SceneObject {
    constructor( sprites?: Sprite[] | object, behaviors?: any,
               poxX?: number, posY?: number, name?: string);

    addBehavior(behaviorClass: any): any;
    addSprite(sprite: Sprite, offset?: object, index?: number): number;
    clone(posX?: number, posY?: number): SceneObject;
    fadeIn(time: number, callback: () => void): void;
    fadeOut(time: number, callback: () => void): void;
    getAlignment(): object;
    getBehavior(name?: string): object;
    getBehaviorByIndex(index?: number): object;
    getBehaviors(): object[];
    getMovementSpeed(): number;
    getName(): string;
    getOverLappingObjects(searchAllLayers?: boolean, precision?: string): object[];
    getPosition(): object;
    getRotation(): object;
    getSprite(indexOrName?: number | string): Sprite | undefined;
    getSpriteAtPosition(screenPosition: object): object;
    getSpriteByName(name:string): Sprite;
    getSpriteCount(): number;
    getSpriteIndex(sprite: Sprite): number;
    getSpriteOffset(indexOrName?: number | string): object;
    getTargetPosition(): object;
    getVelocity(): object;
    interval(time: number, functionName: string, data?: object, variance?: number): void;
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
    processEvent(eventName: string, eventData?: object): boolean;
    removeAllSprites(): void;
    removeBehavior(name: string): boolean;
    removeBehaviorByIndex(index: number): void;
    removeSprite(sprite: Sprite): void;
    removeSpriteByIndex(index: number): void;
    resumeAnimation(): void;
    schedule(time: number, functionName: string, data?: object ): void;
    serialize(stringify? boolean, propertiesToExclude?: string[],
                serializeFunctions?: boolean): object | string;
    setAlignment(leftRight?: string, topBottom?: string): void;
    setAsTemplate(toggle: boolean): void;
    setName(name?: string): void;
    setPosition(posX: number | object, posY?: number);
    setSpriteOffset(indexOrName: number | string, offset: object): void;
    setSpriteOffsets(spriteOffsets: object[]): void;
    setVelocity(velocityX: number | object, velocityY?: number): void;
    setVisible(toggle: boolean): void;
    stopAnimation(): void;
    stopListeningFor(eventName: string): void;
    stopMoving(): void;
    unschedule(eventName: string): void;

}

declare class Sprite {
    constructor(image?: string | object, layerId?: number);

    addAnimation(name: string, animation: Animation, dontPlay?: boolean): void;
    containsScreenPoint(point: object): boolean;
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
    getPosition(): object;
    getSceneObject(): SceneObject;
    getSize(): object;
    getWorldOffset(screenPosition: object): object;
    hasAnimation(name: string): boolean;
    isOnScreen(): boolean;
    isUsingPixelPerfectMouseEvents(): number;
    isVisible(): boolean;
    overlapsSprite(otherSprite: Sprite, precision?: string): boolean;
    playAnimation(name: string, direction?: string): void;
    resumeAnimation(): void;
    serialize(stringify?: boolean, propertiesToExclude?: string[]): object | string;
    setImageFile(image: string, updateSizeFromImage: boolean): void;
    setIndexInLayer(index: number): number;
    setLayer(layerId: number): void;
    setName(name: string): void;
    setPosition(posX: number | object, posY: number): void;
    setSceneObject(obj: SceneObject): void;
    setSize(width: number, height: number, resetScaleFactor?: boolean): void;
    setSortPoint(x: number, y: number): void;
    setVisible(toggle: boolean): void;
    stopAnimation(): void;
    usePixelPerfectMouseEvents(threshold: number): void;

}

declare class TextSprite {
    constructor(text?: string | object, font?: string, color?: string, alignment?: string,
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
    constructor(image?: string | object, numCellsX?: number, numCellsY?: number,
               speed?: number, looping?: boolean, startFrame?: number, endFrame?: number,
               autoResize?: boolean, offset?: object);
    getFrameCount(): number;
    getFrameNumber(): number;
    getFrameSize(): object;
    getImageName(): string;
    getNumCells(): number;
    getOffset(): object;
    getRelativeImageName(): string;
    getSpeed(): number;
    isPlaying(): boolean;
    play(direction?: string): void;
    resume(): void;
    serialize(stringify?: boolean, propertiesToExclude: string[]): object | string;
    setFrameNumber(frameNumber: number): void;
    setOffset(offset: object): void;
    setSpeed(speed: number): void;
    stop(): void;
}

declare class Path {

}

export { wade, SceneObject, Sprite, Animation, TextSprite };
