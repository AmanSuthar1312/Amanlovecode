import k from "./kaplayctx.js";

export default function mainMenu(){
    if(!k.getData("best-score")) k.setData("best-score",0);
    k.onbuttonpress("jump",()=> k.go("game"));

    const bgPieceWidth = 1920;
    const bgPieces = [
        k.add([
            k.sprite("Chemical-bg"),
            k.pos(0,0),
            scale(2),
            opacity(0.8),
        ]),
        k.add([
            k.sprite("Chemical-bg"),
            k.pos(bgPieceWidth *2,0),
            scale(2),
            opacity(0.8),
        ]),
    ]
};