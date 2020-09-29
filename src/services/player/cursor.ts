

export class Cursor extends Phaser.GameObjects.Image {
    private status: string;
    private size: integer;
    private cursorX: integer;
    private cursorY: integer;
    private fireBtn: Phaser.Input.Mouse.MouseManager;

    constructor(params){
        super(params.scene, params.x, params.y, params.key);
        
        // image
        this.setScale(3);
        this.setOrigin(0, 0);

        // variables
        this.status = "ready";

        // input
        this.fireBtn = this.scene.input.mouse.onMouseDown();

        this.scene.add.existing(this);
    }

    update(): void {
        // track mouse
        this.setPosition(this.scene.input.activePointer.x, this.scene.input.activePointer.y);
        
        // handle input
        // if (this.fireBtn && this.state == "ready"){
        //     this.state = "fired";
        // }
    }
    
    public getStatus(){
        return this.status;
    }

    public getSize(){
        return this.size;
    }

    public getX(){
        return this.cursorX;
    }

    public getY(){
        return this.cursorY;
    }

}