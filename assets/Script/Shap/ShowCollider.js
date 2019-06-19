// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    onBtnclick(event) {
        var target = event.target;
        var shapeClassNane = `cc.${target.name}Collider`
        var nodePath = 'Canvas/root/' + target.parent.name;
        var collider = cc.find(nodePath).getComponent(shapeClassNane);
        collider.enabled = !collider.enabled;
        
        var label = target.getChildByName("Label").getComponent(cc.Label);
        if (collider.enabled) {
            label.string = label.string.replace("Show", "Hide");
        }else {
            label.string = label.string.replace("Hide","Show");
        }
    },
    // onLoad () {},

    start () {

    },

    // update (dt) {},
});
