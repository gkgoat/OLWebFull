export let OLMorph = (Morph) => class extends Morph{}
export let OLWin = (Morph, TextMorph) => class extends OLMorph(Morph){
    constructor(){
        super(); this.addChild(this._title = new TextMorph('Window'));

    }
get titleText(){return this._title.text}
set titleText(v){this._title.setText(v)}
};
export let OLWorld = (WorldMorph) => class extends OLMorph(WorldMorph){};
export let OL3WorldMorph = (THREE) => (WorldMorph) => class extends OLWorld(WorldMorph){
    constructor(theCanvas,fillPage){
    let c;
    super(c = (theCanvas || document.createElement('canvas')),fillPage);
    this._THREETexture = new THREE.CanvasTexture(c);
 }
 get texture(){return this._THREETexture}
 updateBroken(){
super.updateBroken();
this._THREETexture.needsUpdate = true;

 }
}