import kaplay from "kaplay";

export const k =kaplay({
  width:1920,
  height:1080,
  letterbox: true,
  background:[31,31,31],
  global:false,
  touchToMouse:true,
  buttons:{
    jump :{
        keyboard:["space"]
    }
  },
  debug:true,
});

export default k;