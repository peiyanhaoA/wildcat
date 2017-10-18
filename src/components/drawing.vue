<template>
    <div id="drawing">
        <canvas id="canvas" width="300" height="300" style="border:1px solid black"></canvas>
        <img v-bind:src="url" alt="">
        <div id="buttons">
            <input type="color" id="lineColor">
            <input type="range" id="lineWidth" value="3" min="1" max="16" step="1">
            <button @click="revoked">撤销</button>
            <button @click="clear">清除</button>
            <!-- <button @click="save">保存</button> -->
            <button>上传图片</button>
        </div>  
    </div>
 
</template>

<script>
var draw;
var canvasImage = [];

class Draw {
    constructor(el) {
        this.el = el
        this.canvas = document.getElementById(this.el)
        this.ctx = this.canvas.getContext('2d')
        this.stage_info = canvas.getBoundingClientRect()
        this.path = {
            beginX: 0,
            beginY: 0,
            endX: 0,
            endY: 0
        }
    }
    // 初始化
    init() {
        var that = this;
        this.canvas.addEventListener('touchstart', function(event) {
            that.drawBegin(event)
        })
        this.canvas.addEventListener("touchmove",function(event){
            event.preventDefault();
            that.drawing(event)
        })
        this.canvas.addEventListener('touchend', function(event) {  
            that.drawEnd();
        })
    }
    // 开始划线
    drawBegin(e) {
        var that = this;
        this.ctx.strokeStyle = document.getElementById('lineColor').value;
        this.ctx.lineWidth = document.getElementById('lineWidth').value;
        this.ctx.beginPath();
        this.ctx.lineCap="round";
        this.ctx.moveTo(
            e.changedTouches[0].clientX - this.stage_info.left,
            e.changedTouches[0].clientY - this.stage_info.top
        )
    }
    // 划线
    drawing(e) {
        this.ctx.lineTo(
            e.changedTouches[0].clientX - this.stage_info.left,
            e.changedTouches[0].clientY - this.stage_info.top
        )
        this.ctx.stroke()
    }
    // 划线结束
    drawEnd(e) {
        var that = this;
        this.ctx.lineWidth = 0;
        that.copy();
    }
    // 复制当前画布
    copy(){
        var canvasImg = this.ctx.getImageData(0,0,300,300);
        canvasImage.push(canvasImg);
    }
    // 撤销
    revoked() {
        if(canvasImage.length > 1){
            canvasImage.pop();
            this.ctx.putImageData(canvasImage[canvasImage.length -1],0,0);
        }else{
            this.ctx.putImageData(canvasImage[canvasImage.length -1],0,0);
        }
    }
    // 清除画布
    clear() {
        this.ctx.clearRect(0, 0, 300, 300)
    }
    // 保存成图片
    // save(){
    //    return canvas.toDataURL("image/png")
    // }
}

export default {
    data () {
        return {
            val:true,
            url:""
        }
    },
    mounted() {
        draw = new Draw('canvas');
        draw.init();
        draw.copy();
    },
    methods:{
        clear:function(){
            draw.clear();
        },
        // save:function(){
        //     var data=draw.save();
        //     this.url = data;
        // },
        revoked:function(){
            draw.revoked();
        },
        eraser:function(){
            draw.eraser()
        }
    } 
} 
</script>
<style scoped>
    h1, h2 { font-weight: normal; }
    ul { list-style-type: none; padding: 0; }
    li { display: inline-block; margin: 0 10px; }
    a { color: #42b983; }
    #canvas { 
        /* background: pink;  */
        cursor: default;
        margin: 50px 20px;
    }
    #keyword-box { margin: 10px 0; }
</style>