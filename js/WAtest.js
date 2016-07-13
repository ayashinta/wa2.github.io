var stageCount = 0, frameCount = 0, stageSum = 0, frameSum = 0;
var wrongSum = 0;
var rightId = -1;
var num = 0;
var stageSave = 0;
var frameSave = 0;
var fadeTime = 200;

var cnum = 0;
var isChoosing = false;
var isChanging = false;
var bgsave = "";
var isMusic = false;
var isEnding = false;
var isOpening = true;
var ca = new Array(5);


function processData(data)
{
	console.log(stageCount, frameCount,stageSum, frameCount);
	stageSum = data.stages.length;
	frameSum = data.stages[stageCount].frames.length;
	//if (frameCount == 0)
	//{
		
		if(data.stages[stageCount].backgroundImage != bgsave){

			$(".charaimg").fadeOut(fadeTime,function(){
				$("#charaimg1").attr("src", "");
				$("#charaimg2").attr("src", "");
				$("#charaimg0").attr("src", "");
				$("#conversationBody").css("display","none");
			});
			isChanging = true;
			bgsave = data.stages[stageCount].backgroundImage;
				$("#BackGround").fadeOut(1000,function() {
				$("#BackGround").css("background-image", "url(" + data.stages[stageCount].backgroundImage + ")");
			});
			$("#BackGround").fadeIn(1000,function() {
				otherThing(data);
				if(data.stages[stageCount].frames[frameCount].sentence != "") $("#conversationBody").css("display","block");
				isChanging = false;
			});
		}
		else{
			$("#BackGround").css("background-image", "url(" + data.stages[stageCount].backgroundImage + ")");
			otherThing(data);
		}
		
}

function otherThing(data) {
	if ($("audio#music").attr("src") != data.stages[stageCount].backgroundMusic)
			$("audio#music").attr("src", data.stages[stageCount].backgroundMusic);
	//}
	$(".charaimg").css("transition", "");
	if(data.stages[stageCount].frames[frameCount].roleImage2 == undefined){
		if (data.stages[stageCount].frames[frameCount].roleImage == "")
		{
			$("#character1").css("display","none");
			$("#character2").css("display","none");
			$("#character").css("display","block");
			$(".charaimg").fadeOut(fadeTime,function(){
				$("#charaimg1").attr("src", "");
				$("#charaimg2").attr("src", "");
				$("#charaimg0").attr("src", "");
			});
		}
		else{
			//alert(1);
			$("#charaimg1").attr("src", "");
			$("#charaimg2").attr("src", "");
			if ($("#charaimg0").attr("src") == "")
			{
				$(".charaimg").fadeOut(fadeTime,function(){
					$("#character1").css("display","none");
					$("#character2").css("display","none");
					$("#character").css("display","block");
					$("#charaimg0").attr("src", data.stages[stageCount].frames[frameCount].roleImage);
				});
				$(".charaimg").fadeIn(fadeTime,function() {
					
				});
			}
			else
			{
				
				
					$("#character1").css("display","none");
					$("#character2").css("display","none");
					$("#character").css("display","block");
					$("#character").css("transition", "background-image 1s");
					$("#charaimg0").attr("src", data.stages[stageCount].frames[frameCount].roleImage );
				
				
			}
		}
	}

	else{
			
			$("#charaimg0").attr("src", "");
			if ($("#charaimg1").attr("src") == "" || $("#charaimg2").attr("src") == "")
			{
				$(".charaimg").fadeOut(fadeTime,function() {
					$("#character1").css("display","block");
					$("#character2").css("display","block");
					$("#character").css("display","none");
					$("#charaimg1").attr("src", data.stages[stageCount].frames[frameCount].roleImage);
					$("#charaimg2").attr("src", data.stages[stageCount].frames[frameCount].roleImage2);
				});
				$(".charaimg").fadeIn(fadeTime,function() {
					
				});
			}
			else
			{
				
					$("#character1").css("display","block");
					$("#character2").css("display","block");
					$("#character").css("display","none");
					$("#charaimg1").attr("src", data.stages[stageCount].frames[frameCount].roleImage);
					$("#charaimg2").attr("src", data.stages[stageCount].frames[frameCount].roleImage2);
				
				
			}
		
	}

	if(data.stages[stageCount].frames[frameCount].sentence == ""){
		$("div#conversationBody").hide();
	} 
	else{
		if ($("div#conversation").html() == "")
			$("div#conversationBody").show();
	}
		
	
	$("div#characterName").text(data.stages[stageCount].frames[frameCount].name);
	
	$("div#conversation").lbyl({content:data.stages[stageCount].frames[frameCount].sentence,speed: 10,type: 'show'});

}

function gotoFrame(stage, frame)
{
	
	stageCount = stage;
	frameCount = frame;
	if(stageCount == 5 && frameCount == 13){
		$("#button1").html("因为我想弥补给你带来的痛苦");
		$("#button2").html("因为我想守护重要的人");
		$("#Buttondiv").fadeIn(1000,function() {
			$("#Buttondiv").css("display","block");
		})
		
		cnum = 1;
		isChoosing = true;
	}
	if(stageCount == 12 && frameCount == 5){

		$("#button1").html("去音乐会");
		$("#button2").html("去新年参拜");
		$("#Buttondiv").fadeIn(1000,function() {
			$("#Buttondiv").css("display","block");
			$("#button2").css("background-image","url(image/t1011grey.png)");
		})
		
		cnum = 2;
		isChoosing = true;
	}
	if(stageCount == 17 && frameCount == 9){
		$("#button1").html("我和雪菜挺好的");
		$("#button2").html("我和雪菜不太好");
		$("#Buttondiv").fadeIn(1000,function() {
			$("#Buttondiv").css("display","block");
		})
		
		cnum = 3;
		isChoosing = true;
	}
	if(stageCount == 31 && frameCount == 19){
		$("#button1").html("去追冬马");
		$("#button2").html("留下来陪雪菜");
		$("#Buttondiv").fadeIn(1000,function() {
			$("#Buttondiv").css("display","block");
		})
		
		cnum = 4;
		isChoosing = true;
	}

	if(stageCount == 15 &&frameCount == 3){
		isMusic = true;
	}

	if(isMusic == false){
			processData(dataj);
	}
	else{
		musicStartAll ();
	}
}

function gotoNextFrame()
{
	//console.log(stageCount, frameCount,stageSum, frameCount);
	if ((frameCount + 1) < frameSum)
		gotoFrame(stageCount, frameCount + 1);
	else
		if ((stageCount + 1) < stageSum){
			if(stageCount == 6) gotoFrame(stageCount + 2, 0);
			if(stageCount == 18) gotoFrame(stageCount + 2, 0);
			if(stageCount == 49 || stageCount == 45 || stageCount == 33 || stageCount == 39) {
				isEnding = true;
				endingStart();
			}
			else gotoFrame(stageCount + 1, 0);

		}
			
}




function musicStartAll () {
	$("#Body").css("display","none");
	var dom = document.getElementById('music');
	dom.pause();
	musicStart();
}
function musicEnd () {
	isMusic = false;
	frameCount++;
	$("#Body").css("display","block");
	var dom = document.getElementById('music');
	dom.play();
}

$(document).keydown(function(event) {

	if(isMusic == false && isChanging == false && isEnding == false && isOpening == false){
		if(isChoosing == false){
			if(event.keyCode == 13){ 
				gotoNextFrame(); 
				
			}
			
			else if(event.keyCode == 82){
				$("#character1").css("display","none");
				$("#character2").css("display","none");
				$("#character").css("display","none");
				$("#charaimg1").attr("src", "");
				$("#charaimg2").attr("src", "");
				$("#charaimg0").attr("src", "");

				$("#savingWord").html("READING");
				$("#saving").fadeIn(1000,function() {
					$("#saving").css("display","block");
					
				})
				$("#saving").fadeOut(1000,function() {
					$("#saving").css("display","none");
					$("#savingWord").html("");
				})
				gotoFrame(stageSave,frameSave);
			}
		}

		if(event.keyCode == 83){
			stageSave = stageCount;
			frameSave = frameCount;
			$("#savingWord").html("SAVED");
			$("#saving").fadeIn(1000,function() {
				$("#saving").css("display","block");
				
			})
			$("#saving").fadeOut(1000,function() {
				$("#saving").css("display","none");
				$("#savingWord").html("");
			})
		}
	}

	if(isOpening == true){
		if(event.keyCode == 13){ 
				isOpening = false;
				$("#opening").css("display","none");
				$("#Body").fadeOut(0,function() {
					
				})
				$("#Body").fadeIn(1000,function() {
					
				})
			}
	}

	
	if(event.keyCode == 77){//M
		gotoFrame(12,0);
	}
	if(event.keyCode == 78){//N
		gotoFrame(15,0);
	}
	if(event.keyCode == 66){//B
		gotoFrame(49,0);
	}
});

$("#button1").click(function(){
	if(cnum == 1){
		ca[1] = 1;
		gotoFrame(6,0);
	$("#Buttondiv").css("display","none");
	isChoosing = false;
	}
	else if(cnum == 2){
		ca[2] = 1;
		gotoFrame(13,0);
	$("#Buttondiv").css("display","none");
	$("#button2").css("background-image","url(image/t1011.png)");
	isChoosing = false;
	}
	else if(cnum == 3){
		ca[3] = 1;
		gotoFrame(18,0);
	$("#Buttondiv").css("display","none");
	isChoosing = false;
	}
	else if(cnum == 4){
		ca[4] = 1;
		gotoEnd();
	$("#Buttondiv").css("display","none");
	isChoosing = false;
	}
});

$("#button2").click(function(){
	if(cnum == 1){
		ca[1] = 2;
		gotoFrame(7,0);
	$("#Buttondiv").css("display","none");
	isChoosing = false;
	}
	else if(cnum == 3){
		ca[3] = 2;
		gotoFrame(19,0);
	$("#Buttondiv").css("display","none");
	isChoosing = false;
	}
	else if(cnum == 4){
		ca[4] = 2;
		gotoEnd();
	$("#Buttondiv").css("display","none");
	isChoosing = false;
	}
});

function gotoEnd() {
	if(ca[1] == 1 && ca[3] == 1 && ca[4] == 1){
		gotoFrame(40,0);
	}
	if(ca[1] == 1 && ca[3] == 1 && ca[4] == 2){
		gotoFrame(46,0);
	}
	if(ca[1] == 1 && ca[3] == 2 && ca[4] == 1){
		gotoFrame(34,0);
	}
	if(ca[1] == 1 && ca[3] == 2 && ca[4] == 2){
		gotoFrame(46,0);
	}
	if(ca[1] == 2 && ca[3] == 1 && ca[4] == 1){
		gotoFrame(40,0);
	}
	if(ca[1] == 2 && ca[3] == 1 && ca[4] == 2){
		gotoFrame(32,0);
	}
	if(ca[1] == 2 && ca[3] == 2 && ca[4] == 1){
		gotoFrame(34,0);
	}
	if(ca[1] == 2 && ca[4] == 2 && ca[4] == 2){
		gotoFrame(32,0);
	}
}

function endingStart () {
	
	$("#Body").css("display","none");
	var dom = document.getElementById('music');
	dom.pause();
	$("#ending").css("display","block");
	var dom = document.getElementById('endMusic');
	dom.play();
	endStart();
}



function getReady()
{
	gotoFrame(0, 0);
	ca[1] = 1;
	ca[2] = 1;
	ca[3] = 2;
	ca[4] = 2;
	/*$("div#character1").click(gotoNextFrame);
	$("div#character2").click(gotoNextFrame);
	$("div#BackGround").click(gotoNextFrame);*/
	var dom = document.getElementById('endMusic');
	dom.pause();
	openWords();
}

var dataj = {
	"stages":
	[
		{
			"backgroundImage": "image/USEBG/B980400.png",
			"backgroundMusic": "music/TS.mp3",
			"snum":"0",
			"frames":
			[
				{"roleImage":"", "name":"", "sentence":""}
			]
		},
		{
			"backgroundImage": "image/USECG/061.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"1",
			"frames":
			[
				{"roleImage":"", "name":"", "sentence":"冬天，还没有结束。"},
				{"roleImage":"", "name":"", "sentence":"我们的White Album的季节还在继续。"},
				{"roleImage":"", "name":"雪菜", "sentence":"嗯……"},
				{"roleImage":"", "name":"春希", "sentence":"……"},
				{"roleImage":"", "name":"", "sentence":"雪菜的掌心，和我的手轻轻相合。"},
				{"roleImage":"", "name":"", "sentence":"而对现在的我来说，既不想松开这双手，却也没去回握的勇气。"},
				{"roleImage":"", "name":"", "sentence":"可是，现在是冬季，属于我们的时间，一定会再次转动。"},
				{"roleImage":"", "name":"", "sentence":"在飘雪的白昼我们互相接近，在飘雪的夜晚我们互相伤害。"},
				{"roleImage":"", "name":"", "sentence":"然后在今天，在这飘雪的黎明，我们之间又会建立起怎样的关系呢。"}
			]
		},
		{
			"backgroundImage": "image/USEBG/b210103.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"2",
			"frames":
			[
				{"roleImage":"image/setsuna/室内冬装/set013222.png", "roleImage2":"image/ioo/ioo014111.png", "name":"雪菜", "sentence":"好痛……"},
				{"roleImage":"image/setsuna/室内冬装/set013222.png", "roleImage2":"image/ioo/ioo014109.png", "name":"依绪", "sentence":"没想到你在这方面还真是意外地不擅长呢"},
				{"roleImage":"image/setsuna/室内冬装/set013314.png", "roleImage2":"image/ioo/ioo014111.png", "name":"雪菜", "sentence":"都是依绪一上来就拖我去高难度场地啦"},
				{"roleImage":"image/setsuna/室内冬装/set013222.png", "roleImage2":"image/ioo/ioo014111.png", "name":"依绪", "sentence":"那只能怪武也那家伙非要带春希上去的了……"},
				{"roleImage":"image/setsuna/室内冬装/set013217.png", "roleImage2":"image/ioo/ioo014109.png", "name":"雪菜", "sentence":"不过，四个人一起，好开心……"},
				{"roleImage":"image/setsuna/室内冬装/set013222.png", "roleImage2":"image/ioo/ioo014111.png", "name":"依绪", "sentence":"被我从家里拖出来还能开心还真是太好了啊……"},
				{"roleImage":"image/takeya/tak013102.png", "name":"武也", "sentence":"哟嚯——吃的来了"},
				{"roleImage":"image/setsuna/室内冬装/set013222.png", "roleImage2":"image/ioo/ioo014110.png", "name":"依绪", "sentence":"肚子都要饿扁了啊。"},
				{"roleImage":"image/takeya/tak013102.png", "name":"武也", "sentence":"嘛，这边吃的东西不太多就是了。"},
				{"roleImage":"image/takeya/tak013102.png", "name":"武也", "sentence":"而且贵的出奇，老板说出炒面的价格的时候我差点给他一拳……"},
				{"roleImage":"image/takeya/tak013102.png", "name":"春希", "sentence":"……是真的。要不是我在这家伙就得在警局里吃炒面了。"},
				{"roleImage":"image/setsuna/室内冬装/set013130.png", "roleImage2":"image/ioo/ioo014111.png","name":"雪菜", "sentence":"哈哈哈好有趣"},
				{"roleImage":"image/setsuna/室内冬装/set013130.png", "roleImage2":"image/ioo/ioo014102.png", "name":"依绪", "sentence":"……春希你的吐槽意外地戳到了雪菜的笑点了……你们还真是……"},
				{"roleImage":"image/setsuna/室内冬装/set013130.png", "roleImage2":"image/ioo/ioo014102.png", "name":"春希", "sentence":"啊……这么贵的炒面不趁热吃武也就算在警局里也不会瞑目的"},
				{"roleImage":"image/takeya/tak014111.png", "name":"武也", "sentence":"喂！为什么我一定要在警局里不可啊！"}
			]
		},
		{
			"backgroundImage": "image/USEBG/b210103.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"3",
			"frames":
			[
				{"roleImage":"image/setsuna/室内冬装/set013320.png", "roleImage2":"image/ioo/ioo013109.png", "name":"雪菜", "sentence":"好饱……"},
				{"roleImage":"image/setsuna/室内冬装/set013320.png", "roleImage2":"image/ioo/ioo013102.png", "name":"依绪", "sentence":"嘛，味道算是一般啦，不过能吃饱就好咯"},
				{"roleImage":"image/takeya/tak013109.png", "roleImage2":"image/ioo/ioo013111.png", "name":"武也", "sentence":"吶，我说……"},
				{"roleImage":"image/takeya/tak013109.png", "roleImage2":"image/ioo/ioo013110.png", "name":"依绪", "sentence":"你这家伙干嘛别拉拉扯扯的"},
				{"roleImage":"image/takeya/tak013107.png", "roleImage2":"image/ioo/ioo013111.png", "name":"武也", "sentence":"依绪"},
				{"roleImage":"image/takeya/tak013107.png", "roleImage2":"image/ioo/ioo013107.png", "name":"依绪", "sentence":"啊……嗯……我好像有点喝多了……"},
				{"roleImage":"image/takeya/tak013107.png", "roleImage2":"image/ioo/ioo013107.png", "name":"春希", "sentence":"……如果这可乐里面有酒精现在醉醺醺的就不是你了……"},
				{"roleImage":"image/takeya/tak013107.png", "roleImage2":"image/ioo/ioo013111.png", "name":"依绪", "sentence":"啊……总之是酒足饭饱想睡了……"},
				{"roleImage":"image/setsuna/室内冬装/set013217.png", "roleImage2":"image/ioo/ioo013111.png", "name":"雪菜", "sentence":"那我陪你回房间……"},
				{"roleImage":"image/setsuna/室内冬装/set013222.png", "roleImage2":"image/ioo/ioo013104.png", "name":"依绪", "sentence":"不……不是……那个……你"},
				{"roleImage":"image/setsuna/室内冬装/set013222.png", "roleImage2":"image/ioo/ioo013104.png", "name":"春希", "sentence":"我？"},
				{"roleImage":"image/setsuna/室内冬装/set013222.png", "roleImage2":"image/ioo/ioo013106.png", "name":"依绪", "sentence":"不是你，那边那个笨蛋"},
				{"roleImage":"image/takeya/tak013101.png", "name":"武也", "sentence":"怎么了"},
				{"roleImage":"image/ioo/ioo013105.png", "name":"依绪", "sentence":"陪我回房间"},
				{"roleImage":"image/ioo/ioo013105.png", "name":"春希", "sentence":"什么？"},
				{"roleImage":"image/setsuna/室内冬装/set013216.png", "roleImage2":"image/ioo/ioo013105.png", "name":"雪菜", "sentence":"不好了依绪真的喝多了！"},
				{"roleImage":"image/takeya/tak013103.png", "roleImage2":"image/ioo/ioo013111.png", "name":"武也", "sentence":"……她没喝多，我们来之前商量好了的，"},
				{"roleImage":"image/takeya/tak013103.png", "roleImage2":"image/ioo/ioo013111.png", "name":"武也", "sentence":"这么多年了，我们也该有个结果了。"},
				{"roleImage":"image/takeya/tak013103.png", "roleImage2":"image/ioo/ioo013111.png", "name":"春希", "sentence":"……"},
				{"roleImage":"image/takeya/tak013101.png", "roleImage2":"image/ioo/ioo013111.png", "name":"武也", "sentence":"雪菜妹子，今天就只能委屈你一下了。和这家伙呆在一起你不会讨厌的吧。"},
				{"roleImage":"image/takeya/tak013101.png", "roleImage2":"image/ioo/ioo013111.png", "name":"春希", "sentence":"……"},
				{"roleImage":"image/setsuna/室内冬装/set013216.png", "roleImage2":"image/ioo/ioo013107.png", "name":"雪菜", "sentence":"啊怎么会……但是……"},
				{"roleImage":"image/setsuna/室内冬装/set013216.png", "roleImage2":"image/ioo/ioo013102.png", "name":"依绪", "sentence":"没什么没什么啦，雪菜你就成全我一下好不好"},
				{"roleImage":"image/setsuna/室内冬装/set013216.png", "roleImage2":"image/ioo/ioo013102.png", "name":"春希", "sentence":"……"},
				{"roleImage":"image/setsuna/室内冬装/set013217.png", "roleImage2":"image/ioo/ioo013102.png", "name":"雪菜", "sentence":"依绪你真的要……"},
				{"roleImage":"image/setsuna/室内冬装/set013217.png", "roleImage2":"image/ioo/ioo013111.png", "name":"依绪", "sentence":"是的啦。好了武也别废话了我们走"},
				{"roleImage":"image/setsuna/室内冬装/set013217.png",  "sentence":"真是的……春希君……"},
				{"roleImage":"image/setsuna/室内冬装/set013217.png",  "name":"春希", "sentence":"雪菜……要不……我去再订一间房？"},
				{"roleImage":"image/setsuna/室内冬装/set013320.png",  "name":"雪菜", "sentence":"啊不……不用的……正好我也不困……能和春希君聊一会天吗"},
				{"roleImage":"image/setsuna/室内冬装/set013320.png",  "name":"春希", "sentence":"嗯……"}
			]
		},
		{
			"backgroundImage": "image/USEBG/b210403.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"4",
			"frames":
			[
				{"roleImage":"image/takeya/tak014102.png", "roleImage2":"image/ioo/ioo013109.png", "name":"武也", "sentence":"呼……总算出来了……吶，你刚说的……"},
				{"roleImage":"image/takeya/tak014108.png", "roleImage2":"image/ioo/ioo013104.png", "name":"依绪", "sentence":"敢动我一根手指就杀了你"}
			]
		},
		{
			"backgroundImage": "image/USEBG/b210103.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"5",
			"frames":
			[
				{"roleImage":"image/setsuna/室内冬装/set013320.png", "name":"雪菜","sentence":"……春希君……圣诞节的时候……对不起……"},
				{"roleImage":"image/setsuna/室内冬装/set013320.png", "name":"春希", "sentence":"道歉的不应该是雪菜……"},
				{"roleImage":"image/setsuna/室内冬装/set013311.png", "name":"雪菜", "sentence":"春希君……我以为我再也不能面对你了……我肯定会被春希君讨厌了吧"},
				{"roleImage":"image/setsuna/室内冬装/set013311.png", "name":"春希", "sentence":"怎么会。一切都是我的错……是我没有将重要的东西守护好……"},
				{"roleImage":"image/setsuna/室内冬装/set013125.png", "name":"雪菜", "sentence":"春希君你总是这样包庇着我。这样下去，我会被你惯坏的哦"},
				{"roleImage":"image/setsuna/室内冬装/set013125.png", "name":"春希", "sentence":"……"},
				{"roleImage":"image/setsuna/室内冬装/set013125.png", "name":"雪菜", "sentence":"春希君……"},
				{"roleImage":"image/setsuna/室内冬装/set013125.png", "name":"春希", "sentence":"雪菜，你为什么还会原谅这样的我……事到如今你仍然在向我道歉……"},
				{"roleImage":"image/setsuna/室内冬装/set013125.png", "name":"春希", "sentence":"事到如今你仍然在包容我的一切……我不值得你去珍惜。"},
				{"roleImage":"image/setsuna/室内冬装/set013125.png", "name":"春希", "sentence":"三年了我本以为时间能够淡去我们的痛苦……但是……"},
				{"roleImage":"image/setsuna/室内冬装/set013323.png", "name":"雪菜", "sentence":"春希君，不只是你的错。三年来我也没有坦诚地面对过春希君"},
				{"roleImage":"image/setsuna/室内冬装/set013323.png", "name":"雪菜", "sentence":"为什么你还要这样来面对不坦诚的我……"},
				{"roleImage":"image/setsuna/室内冬装/set013323.png", "name":"雪菜", "sentence":"为什么春希君在圣诞节被我伤害后还能在这里与我面对面地聊天……"},
				{"roleImage":"image/setsuna/室内冬装/set013323.png", "name":"春希", "sentence":"因为……"},
				{"roleImage":"image/setsuna/室内冬装/set013323.png", "name":"春希", "sentence":"因为……"}
			]
		},
		{
			"backgroundImage": "image/USEBG/b210103.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"6",
			"frames":
			[
				{"roleImage":"image/setsuna/室内冬装/set013320.png", "name":"春希","sentence":"因为我想弥补给你带来的痛苦"},
				{"roleImage":"image/setsuna/室内冬装/set013125.png", "name":"雪菜","sentence":"痛苦……"},
				{"roleImage":"image/setsuna/室内冬装/set013125.png", "name":"春希", "sentence":"……"},
				{"roleImage":"image/setsuna/室内冬装/set013125.png", "name":"雪菜", "sentence":"春希君，如果你还这么说的话……"},
				{"roleImage":"image/setsuna/室内冬装/set013204.png", "name":"雪菜", "sentence":"我会更加痛苦的……"},
				{"roleImage":"image/setsuna/室内冬装/set013125.png", "name":"春希", "sentence":"……天快亮了，雪菜睡一会儿吧……"},
				{"roleImage":"image/setsuna/室内冬装/set013209.png", "name":"雪菜", "sentence":"春希君呢"},
				{"roleImage":"image/setsuna/室内冬装/set013209.png", "name":"春希", "sentence":"我看着你的睡脸就好了"},
				{"roleImage":"image/setsuna/室内冬装/set013125.png", "name":"雪菜", "sentence":"嗯……"},
				{"roleImage":"", "name":"", "sentence":"这就是我和眼前这个外表坚强的女孩圣诞节后的第一次重逢。"}
				
			]
		},
		{
			"backgroundImage": "image/USEBG/b210103.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"7",
			"frames":
			[
				{"roleImage":"image/setsuna/室内冬装/set013320.png", "name":"春希","sentence":"因为我想守护重要的人"},
				{"roleImage":"image/setsuna/室内冬装/set013216.png", "name":"雪菜","sentence":"春希君……"},
				{"roleImage":"image/setsuna/室内冬装/set013209.png", "name":"雪菜", "sentence":"你也是我重要的人"},
				{"roleImage":"image/setsuna/室内冬装/set013209.png", "name":"春希", "sentence":"……雪菜"},
				{"roleImage":"image/setsuna/室内冬装/set013209.png", "name":"春希", "sentence":"……天快亮了，雪菜睡一会儿吧……"},
				{"roleImage":"image/setsuna/室内冬装/set013217.png", "name":"雪菜", "sentence":"春希君呢"},
				{"roleImage":"image/setsuna/室内冬装/set013217.png", "name":"春希", "sentence":"我看着你的睡脸就好了"},
				{"roleImage":"image/setsuna/室内冬装/set013209.png", "name":"雪菜", "sentence":"嗯……"},
				{"roleImage":"", "name":"", "sentence":"这就是我和眼前这个外表坚强的女孩圣诞节后的第一次重逢。"}
				
			]
		},
		{
			"backgroundImage": "image/回忆杀/b206803.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"8",
			"frames":
			[
				{"roleImage":"image/回忆杀/set017131.png", "name":"雪菜", "sentence":"从和纱那里得到了，放弃和纱的勇气了吧"},
				{"roleImage":"image/回忆杀/set017131.png", "name":"雪菜", "sentence":"为了能来抱我，而从和纱那里得到了她的鼓励了吧？"},
				{"roleImage":"image/回忆杀/set017131.png", "name":"雪菜", "sentence":"你……不管过了多少年都还是一直在对我说谎呢。"}
				
			]
		},
		{
			"backgroundImage": "image/USEBG/b210103.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"9",
			"frames":
			[
				{"roleImage":"", "name":"", "sentence":"每一次相遇，雪菜会强撑起自己的笑容。"},
				{"roleImage":"", "name":"", "sentence":"但每一次，雪菜的眼神里都充满着悲伤。"},
				{"roleImage":"", "name":"", "sentence":"这就是我无法面对她的原因。"},
				{"roleImage":"", "name":"", "sentence":"我越是想要让她忘记三年前我给她带来的痛苦，"},
				{"roleImage":"", "name":"", "sentence":"就会给她带来越来越多的痛苦。"},
				{"roleImage":"", "name":"", "sentence":"为什么。"},
				{"roleImage":"", "name":"", "sentence":"我明白的。因为我无法忘记三年前的那个对我而言重要的人。"},
				{"roleImage":"", "name":"", "sentence":"无论如何也无法忘记。"},
				{"roleImage":"", "name":"", "sentence":"而这样的我却要雪菜去忘记。"},
				{"roleImage":"", "name":"", "sentence":"而这样的我却要弥补那时的痛苦。"},
				{"roleImage":"", "name":"", "sentence":"这样只会让我们之间距离越来越远。"},
				{"roleImage":"", "name":"", "sentence":"……"}
				
			]
		},
		{
			"backgroundImage": "image/USEBG/b202703.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"10",
			"frames":
			[
				{"roleImage":"", "name":"男同事1", "sentence":"喂北原，帮我把这份文稿重新编辑一下！"},
				{"roleImage":"", "name":"春希", "sentence":"啊好的！"},
				{"roleImage":"", "name":"男同事2", "sentence":"北原，这份报道需送到审批部门"},
				{"roleImage":"", "name":"春希", "sentence":"我编辑完这一份文稿就去"},
				{"roleImage":"", "name":"", "sentence":"年底的开樱社，还是异常地忙碌。"},
				{"roleImage":"", "name":"", "sentence":"在那个强硬的女上司去国外后，他的余威还在控制着整个办公室。"},
				{"roleImage":"", "name":"", "sentence":"滑雪的第二天一早，武也就开车把我们送了回来。"},
				{"roleImage":"", "name":"", "sentence":"看着武也的样子同样是一夜没睡。"},
				{"roleImage":"", "name":"", "sentence":"又将自己埋在工作中，做着不是一个打工大学生应该做的分量的工作。"},
				{"roleImage":"", "name":"", "sentence":"一天一天地麻痹自己。"},
				{"roleImage":"", "name":"", "sentence":"因为如果自己闲下来，就会被强烈的自责与痛苦压倒。"},
				{"roleImage":"", "name":"", "sentence":"只有这样，才能让自己不去想那些充满痛苦的回忆。"},
				{"roleImage":"image/ham002009.png", "name":"浜田", "sentence":"对了北原，麻理让我提醒你别忘了去演奏会。"},
				{"roleImage":"image/ham002009.png", "name":"春希", "sentence":"嗯……谢谢您……"}
			]
		},
		{
			"backgroundImage": "image/回忆杀/b204000.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"11",
			"frames":
			[
				{"roleImage":"", "name":"麻理", "sentence":"我给北原你的住所邮了东西。"},
				{"roleImage":"", "name":"麻理", "sentence":"那个东西也是昨天才送到我们这里。所以没来得及直接交给你。"},
				{"roleImage":"", "name":"麻理", "sentence":"那个是……冬马曜子的新年演奏会的门票。"}
			]
		},
		{
			"backgroundImage": "image/USEBG/b202703.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"12",
			"frames":
			[
				{"roleImage":"", "name":"", "sentence":"这个熟悉的名字又出现在眼前。"},
				{"roleImage":"", "name":"", "sentence":"在我最彷徨的时候。"},
				{"roleImage":"", "name":"", "sentence":"之前武也也在约我去新年参拜。"},
				{"roleImage":"", "name":"", "sentence":"我一直也没答应，因为……这张票。"},
				{"roleImage":"", "name":"", "sentence":"终于到这一天了。"},
				{"roleImage":"", "name":"", "sentence":"那么，我要"}
			]
		},
		{
			"backgroundImage": "image/USEBG/b206702.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"13",
			"frames":
			[
				{"roleImage":"", "name":"", "sentence":"新年演奏会，里面坐满了人。"},
				{"roleImage":"", "name":"", "sentence":"作为一个钢琴家，冬马曜子很有名望。"},
				{"roleImage":"", "name":"", "sentence":"作为一个母亲，冬马曜子也已被接受。"},
				{"roleImage":"", "name":"", "sentence":"但是………"},
				{"roleImage":"", "name":"", "sentence":"对于我来说，是不是应该再和她见面呢。"},
				{"roleImage":"", "name":"", "sentence":"不，我知道我不是怕见冬马曜子。"},
				{"roleImage":"", "name":"", "sentence":"她，会不会来呢。"}
			]
		},
		{
			"backgroundImage": "image/USEBG/b206400.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"14",
			"frames":
			[
				{"roleImage":"", "name":"", "sentence":"…………"}
			]
		},
		{
			"backgroundImage": "image/USEBG/b206400.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"15",
			"frames":
			[
				{"roleImage":"", "name":"", "sentence":"冬马曜子的琴声一如即往地是世界级水平。"},
				{"roleImage":"", "name":"", "sentence":"她的琴声让钢琴的门外汉也如痴如醉。"},
				{"roleImage":"", "name":"", "sentence":"……并不是因为歌曲的缘故。"},
				{"roleImage":"", "name":"", "sentence":"嘛，这也不是我听出来的，而是从各路新闻报道上得出来的结论。"},
				{"roleImage":"", "name":"", "sentence":"此时的我，还没找到自己的座位。"},
				{"roleImage":"", "name":"", "sentence":"偌大的礼堂，后排都坐满了人。"},
				{"roleImage":"", "name":"", "sentence":"想找一个空座来确定是不是我的都不可能。"},
				{"roleImage":"", "name":"", "sentence":"这张票总不会是前排的吧。"},
				{"roleImage":"", "name":"", "sentence":"第二排有个空座。"},
				{"roleImage":"", "name":"", "sentence":"32号，和我手中的票一样。"},
				{"roleImage":"", "name":"", "sentence":"竟然这么靠前，好吧，我坐下了。"}
			]
		},
		{
			"backgroundImage": "image/USEBG/b206400.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"16",
			"frames":
			[
				{"roleImage":"", "name":"???", "sentence":"北原？"},
				{"roleImage":"", "name":"???", "sentence":"北原？是你吗？"},
				{"roleImage":"", "name":"春希", "sentence":"呃……"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031101.png", "name":"和纱", "sentence":"北……北原"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031101.png", "name":"春希", "sentence":"和……冬马？你为什么会……"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031100.png", "name":"和纱", "sentence":"当然是因为……这是她的演出。北原你……为什么"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031100.png", "name":"春希", "sentence":"这是……冬马曜子女士给我的票"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031110.png", "name":"和纱", "sentence":"……"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031110.png", "name":"春希", "sentence":"冬马……你……回国了……？"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031205.png", "name":"和纱", "sentence":"嗯……短期回国，一周后就回维也纳。"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031205.png", "name":"春希", "sentence":"这样啊……你……过的还好吗？"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031134.png", "name":"和纱", "sentence":"托你的福还挺好的。欧洲才是适合我发展的地方。"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031134.png", "name":"春希", "sentence":"那就好……"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031307.png", "name":"和纱", "sentence":"你……呢？"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031307.png", "name":"春希", "sentence":"我……还好"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031142.png", "name":"和纱", "sentence":"嘛算了，这里是音乐厅，如果没什么重要的事请不要说话了。"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031142.png", "name":"春希", "sentence":"嗯……"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031111.png", "name":"和纱", "sentence":"如果有重要的事……就出去说吧。"}
			]
		},
		{
			"backgroundImage": "image/USEBG/b206702.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"17",
			"frames":
			[
				{"roleImage":"image/kazusa/晚会礼服/kaz031133.png", "name":"和纱", "sentence":"为什么我会翘掉演奏会和你出来聊天啊。"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031133.png", "name":"春希", "sentence":"难道不是你把我拉出来的么"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031134.png", "name":"和纱", "sentence":"嘛，算了，反正她的钢琴我也听腻了"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031134.png", "name":"春希", "sentence":"……"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031205.png", "name":"和纱", "sentence":"你……一个人来的？"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031205.png", "name":"春希", "sentence":"嗯"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031206.png", "name":"和纱", "sentence":"……雪、雪菜呢"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031206.png", "name":"春希", "sentence":"我和雪菜……"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031212.png", "name":"和纱", "sentence":"别摆出那副欲言又止的表情。"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031212.png", "name":"春希", "sentence":"我和雪菜……"}
			]
		},
		{
			"backgroundImage": "image/USEBG/b206702.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"18",
			"frames":
			[
				{"roleImage":"image/kazusa/晚会礼服/kaz031212.png", "name":"春希", "sentence":"………我和雪菜挺好的。"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031212.png", "name":"春希", "sentence":"今天只拿到了一张票所以我自己来了。"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031110.png", "name":"和纱", "sentence":"……"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031110.png", "name":"春希", "sentence":"冬马？"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031100.png", "name":"和纱", "sentence":"……没什么"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031104.png", "name":"和纱", "sentence":"你本来是要和雪菜一起去新年参拜的吧"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031104.png", "name":"春希", "sentence":"雪菜一家人去了。我如果没有拿到这张票的话也应该会去了。"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031104.png", "name":"和纱", "sentence":"所以你为什么还有时间跟我在这里聊天"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031104.png", "name":"春希", "sentence":"因为既然决定来了就不会中途回去"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031109.png", "name":"和纱", "sentence":"……还真是个固执的笨蛋"}
			]
		},
		{
			"backgroundImage": "image/USEBG/b206702.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"19",
			"frames":
			[
				{"roleImage":"image/kazusa/晚会礼服/kaz031212.png", "name":"春希", "sentence":"………我和雪菜不太好。"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031205.png", "name":"春希", "sentence":"我……无法……"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031150.png", "name":"和纱", "sentence":"春希。"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031150.png", "name":"春希", "sentence":"冬马？"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031142.png", "name":"和纱", "sentence":"……没什么"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031142.png", "name":"春希", "sentence":"…………"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031150.png", "name":"和纱", "sentence":"雪菜她还好吗？"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031150.png", "name":"春希", "sentence":"嗯……她挺好的，现在在学校里也是高岭之花。"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031150.png", "name":"春希", "sentence":"只是，我们之间……"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031150.png", "name":"春希", "sentence":"可能回不去了。"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031142.png", "name":"和纱", "sentence":"…………"}
			]
		},
		{
			"backgroundImage": "image/USEBG/b206702.png",
			"backgroundMusic": "music/钟声.mp3",
			"snum":"20",
			"frames":
			[
				{"roleImage":"image/kazusa/晚会礼服/kaz031109.png", "name":"", "sentence":"…………"}
			]
		},
		{
			"backgroundImage": "image/USEBG/b206702.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"21",
			"frames":
			[
				{"roleImage":"image/kazusa/晚会礼服/kaz031109.png", "name":"春希", "sentence":"新年，快乐。"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031109.png", "name":"和纱", "sentence":"……新年快乐。今年，也多多关照。虽然可能这是今年最后一次见你。"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031109.png", "name":"", "sentence":"就在这个时候，里面的演奏会结束了，观众鱼贯而出。"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031127.png", "name":"和纱", "sentence":"……我该走了，她还在后台等我呢"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031127.png", "name":"春希", "sentence":"嗯……保重"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031109.png", "name":"和纱", "sentence":"保重。"},
				{"roleImage":"", "name":"女学生", "sentence":"嘛嘛依绪，你选的这条路好挤啊"},
				{"roleImage":"", "name":"依绪", "sentence":"好像是碰到演奏会结束了。我们这么走……诶？"}
			]
		},
		{
			"backgroundImage": "image/USEBG/b102902.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"22",
			"frames":
			[
				{"roleImage":"", "name":"和纱", "sentence":"为什么会在这里碰到那家伙啊。"},
				{"roleImage":"", "name":"和纱", "sentence":"明明决定好不再见面的。"},
				{"roleImage":"", "name":"和纱", "sentence":"为什么，为什么啊"},
				{"roleImage":"", "name":"依绪", "sentence":"冬马和纱。"},
				{"roleImage":"", "name":"和纱", "sentence":"诶？"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031100.png", "roleImage2":"image/ioo/ioo014101.png", "name":"依绪", "sentence":"冬马你回国了？"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031134.png", "roleImage2":"image/ioo/ioo014101.png", "name":"和纱", "sentence":"参加母亲的演奏会而已。一周后就会回去的。"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031134.png", "roleImage2":"image/ioo/ioo014106.png", "name":"依绪", "sentence":"你和春希见过面了？"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031142.png", "roleImage2":"image/ioo/ioo014106.png", "name":"和纱", "sentence":"我为什么会和那个笨蛋……嗯，算是偶遇吧。"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031142.png", "roleImage2":"image/ioo/ioo014110.png", "name":"依绪", "sentence":"……"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031150.png", "roleImage2":"image/ioo/ioo014110.png", "name":"和纱", "sentence":"怎么了有什么事吗，难道是来和我叙旧的？"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031150.png", "roleImage2":"image/ioo/ioo014106.png", "name":"依绪", "sentence":"……"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031110.png", "roleImage2":"image/ioo/ioo014106.png", "name":"和纱", "sentence":"没什么事我就先回去了。"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031110.png", "roleImage2":"image/ioo/ioo014106.png", "name":"依绪", "sentence":"把春希还给雪菜。"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031115.png", "roleImage2":"image/ioo/ioo014106.png", "name":"和纱", "sentence":"什么？"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031115.png", "roleImage2":"image/ioo/ioo014106.png", "name":"依绪", "sentence":"把春希还给雪菜吧！"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031205.png", "roleImage2":"image/ioo/ioo014106.png", "name":"和纱", "sentence":"……莫名其妙。"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031205.png", "roleImage2":"image/ioo/ioo014106.png", "name":"依绪", "sentence":"你知道这三年雪菜是怎么过来的吗？"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031205.png", "roleImage2":"image/ioo/ioo014106.png", "name":"依绪", "sentence":"她每天都在痛苦和煎熬中度过的你知道吗？"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031205.png", "roleImage2":"image/ioo/ioo014108.png", "name":"依绪", "sentence":"即便如此她还是在默默地注视着春希"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031205.png", "roleImage2":"image/ioo/ioo014110.png", "name":"依绪", "sentence":"她希望自己能给春希带来幸福，她希望自己身边的所有人都幸福"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031205.png", "roleImage2":"image/ioo/ioo014110.png", "name":"依绪", "sentence":"她已经不能承受再多了。"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031205.png", "roleImage2":"image/ioo/ioo014106.png", "name":"依绪", "sentence":"现在春希和雪菜的关系十分紧张，也许他们最后会形同陌路"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031205.png", "roleImage2":"image/ioo/ioo014106.png", "name":"依绪", "sentence":"但即便如此，我们也想为雪菜所承受的一切努力一把"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031205.png", "roleImage2":"image/ioo/ioo014106.png", "name":"依绪", "sentence":"所以……请你把春希还给雪菜吧。"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031205.png", "roleImage2":"image/ioo/ioo014106.png", "name":"和纱", "sentence":"……"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031205.png", "roleImage2":"image/ioo/ioo014106.png", "name":"和纱", "sentence":"我回来真的只是参加母亲的演奏会"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031205.png", "roleImage2":"image/ioo/ioo014106.png", "name":"依绪", "sentence":"但你还没忘记春希对吧？"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031205.png", "roleImage2":"image/ioo/ioo014106.png", "name":"依绪", "sentence":"你在和春希见面后还是会像刚才一样恋恋不舍的对吧？"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031125.png", "roleImage2":"image/ioo/ioo014106.png", "name":"和纱", "sentence":"哈，哈哈，哈哈哈哈哈"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031125.png", "roleImage2":"image/ioo/ioo014106.png", "name":"和纱", "sentence":"原来是我抢走了春希，哈哈哈哈哈"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031125.png", "roleImage2":"image/ioo/ioo014110.png", "name":"依绪", "sentence":"……"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031125.png", "roleImage2":"image/ioo/ioo014110.png", "name":"和纱", "sentence":"是我抢走了春希的话这三年来为什么是雪菜能够一直注视着他？"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031125.png", "roleImage2":"image/ioo/ioo014110.png", "name":"和纱", "sentence":"我连注视着他的权利都没有你知道吗？"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031125.png", "roleImage2":"image/ioo/ioo014109.png", "name":"依绪", "sentence":"诶？"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031128.png", "roleImage2":"image/ioo/ioo014110.png", "name":"和纱", "sentence":"雪菜的痛苦，我能想象得到"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031128.png", "roleImage2":"image/ioo/ioo014110.png", "name":"和纱", "sentence":"但是我在痛苦和煎熬中度过的时候你们有人看得到吗？"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031128.png", "roleImage2":"image/ioo/ioo014110.png", "name":"和纱", "sentence":"三年前的事不是只有你们忘不掉的。我也同样忘不掉啊。"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031128.png", "roleImage2":"image/ioo/ioo014110.png", "name":"和纱", "sentence":"我努力地想忘记那个笨蛋，努力地想开始新的生活，可这一切有用吗？"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031128.png", "roleImage2":"image/ioo/ioo014110.png", "name":"和纱", "sentence":"我就是应该承受所有痛苦的那个人吗？"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031125.png", "roleImage2":"image/ioo/ioo014110.png", "name":"和纱", "sentence":"我就是应该为他们的感情让路的那个人吗？"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031125.png", "roleImage2":"image/ioo/ioo014110.png", "name":"和纱", "sentence":"我确实让路了啊！我逃到欧洲去了啊！"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031125.png", "roleImage2":"image/ioo/ioo014110.png", "name":"和纱", "sentence":"最后这一切还是我的错，还是我抢走了春希。"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031125.png", "roleImage2":"image/ioo/ioo014110.png", "name":"和纱", "sentence":"没错，我是抢走过春希。三年来我对雪菜也有着深深的自责。"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031125.png", "roleImage2":"image/ioo/ioo014110.png", "name":"和纱", "sentence":"毕竟雪菜曾是我的挚友，所以我不敢面对她。"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031128.png", "roleImage2":"image/ioo/ioo014110.png", "name":"和纱", "sentence":"但我更不敢面对春希啊！面对他的时候我会控制不住自己啊！"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031128.png", "roleImage2":"image/ioo/ioo014110.png", "name":"依绪", "sentence":"……冬马"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031110.png", "roleImage2":"image/ioo/ioo014110.png", "name":"和纱", "sentence":"抱歉。我知道你的意思了。我会尽快离开的。"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031110.png", "roleImage2":"image/ioo/ioo014105.png", "name":"依绪", "sentence":"冬马"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031205.png", "roleImage2":"image/ioo/ioo014111.png", "name":"和纱", "sentence":"请问还有什么事吗"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031205.png", "roleImage2":"image/ioo/ioo014110.png", "name":"依绪", "sentence":"对不起"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031110.png", "roleImage2":"image/ioo/ioo014110.png", "name":"和纱", "sentence":"道歉的应该是我。再会。"}
			]
		},
		{
			"backgroundImage": "image/USEBG/b204003.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"23",
			"frames":
			[
				{"roleImage":"image/takeya/tak013102.png", "roleImage2":"image/ioo/ioo013108.png", "name":"武也", "sentence":"Cheers！"},
				{"roleImage":"image/takeya/tak013102.png", "roleImage2":"image/ioo/ioo013108.png", "name":"春希", "sentence":"……冰箱里的所有东西都被你清空了"},
				{"roleImage":"image/takeya/tak013103.png", "roleImage2":"image/ioo/ioo013108.png", "name":"武也", "sentence":"正好剩了你倒垃圾的麻烦嘛"},
				{"roleImage":"image/takeya/tak013103.png", "roleImage2":"image/ioo/ioo013108.png", "name":"春希", "sentence":"别把吃光人家的东西说得那么理所当然啊！"},
				{"roleImage":"image/takeya/tak013105.png", "roleImage2":"image/ioo/ioo013108.png", "name":"武也", "sentence":"怎么了依绪，你好像有点不太对劲啊"},
				{"roleImage":"image/takeya/tak013105.png", "roleImage2":"image/ioo/ioo013108.png", "name":"春希", "sentence":"最好不要把不是和你一样大吃特吃的人叫做不对劲的好"},
				{"roleImage":"image/takeya/tak013105.png", "roleImage2":"image/ioo/ioo013108.png", "name":"春希", "sentence":"不过从这个意义上来说依绪你确实有点不对劲。"},
				{"roleImage":"image/takeya/tak013105.png", "roleImage2":"image/ioo/ioo013111.png", "name":"依绪", "sentence":"……"},
				{"roleImage":"image/takeya/tak013107.png", "roleImage2":"image/ioo/ioo013111.png", "name":"武也", "sentence":"……依绪你告诉我，是不是哪个男的欺负你了"},
				{"roleImage":"image/takeya/tak013107.png", "roleImage2":"image/ioo/ioo013110.png", "name":"依绪", "sentence":"哪个男的敢欺负我啊……"},
				{"roleImage":"image/takeya/tak013108.png", "roleImage2":"image/ioo/ioo013110.png", "name":"武也", "sentence":"…嘛倒也对。那就是……失恋了？"},
				{"roleImage":"image/takeya/tak013108.png", "roleImage2":"image/ioo/ioo013110.png", "name":"依绪", "sentence":"不好意思至今单身。"},
				{"roleImage":"image/takeya/tak013108.png", "roleImage2":"image/ioo/ioo013110.png", "name":"春希", "sentence":"……还真是明显的暗示啊……"},
				{"roleImage":"image/takeya/tak013109.png", "roleImage2":"image/ioo/ioo013105.png", "name":"依绪", "sentence":"春希"},
				{"roleImage":"image/takeya/tak013109.png", "roleImage2":"image/ioo/ioo013105.png", "name":"春希", "sentence":"嗯？"},
				{"roleImage":"image/takeya/tak013109.png", "roleImage2":"image/ioo/ioo013101.png", "name":"依绪", "sentence":"你……是怎么想的"},
				{"roleImage":"image/takeya/tak013109.png", "roleImage2":"image/ioo/ioo013101.png", "name":"春希", "sentence":"什么是怎么想的？"},
				{"roleImage":"image/takeya/tak013109.png", "roleImage2":"image/ioo/ioo013110.png", "name":"依绪", "sentence":"……雪菜的事"},
				{"roleImage":"image/takeya/tak013109.png", "roleImage2":"image/ioo/ioo013110.png", "name":"春希", "sentence":"……我再去买点酒来"},
				{"roleImage":"image/takeya/tak013109.png", "roleImage2":"image/ioo/ioo013106.png", "name":"依绪", "sentence":"春希！"},
				{"roleImage":"image/takeya/tak013109.png", "roleImage2":"image/ioo/ioo013106.png", "name":"春希", "sentence":"……"},
				{"roleImage":"image/takeya/tak013109.png", "roleImage2":"image/ioo/ioo013106.png", "name":"依绪", "sentence":"我见过冬马了。"},
				{"roleImage":"image/takeya/tak014111.png", "roleImage2":"image/ioo/ioo013106.png", "name":"武也", "sentence":"哈？冬马和纱？"},
				{"roleImage":"image/takeya/tak013109.png", "roleImage2":"image/ioo/ioo013108.png", "name":"依绪", "sentence":"嗯"},
				{"roleImage":"image/takeya/tak014111.png", "roleImage2":"image/ioo/ioo013108.png", "name":"武也", "sentence":"她回国了？"},
				{"roleImage":"image/takeya/tak013109.png", "roleImage2":"image/ioo/ioo013108.png", "name":"依绪", "sentence":"短期回国，马上就要回欧洲了。"},
				{"roleImage":"image/takeya/tak014112.png", "roleImage2":"image/ioo/ioo013108.png", "name":"武也", "sentence":"……"},
				{"roleImage":"image/takeya/tak014112.png", "roleImage2":"image/ioo/ioo013108.png", "name":"春希", "sentence":"……"},
				{"roleImage":"image/takeya/tak014112.png", "roleImage2":"image/ioo/ioo013110.png", "name":"依绪", "sentence":"冬马她，还在意你"},
				{"roleImage":"image/takeya/tak014112.png", "roleImage2":"image/ioo/ioo013110.png", "name":"春希", "sentence":"……"},
				{"roleImage":"image/takeya/tak014112.png", "roleImage2":"image/ioo/ioo013108.png", "name":"依绪", "sentence":"她……也很可怜……甚至……比雪菜还要可怜？"},
				{"roleImage":"image/takeya/tak014110.png", "roleImage2":"image/ioo/ioo013108.png", "name":"武也", "sentence":"喂喂依绪你在说什么呢"},
				{"roleImage":"image/takeya/tak014112.png", "roleImage2":"image/ioo/ioo013110.png", "name":"依绪", "sentence":"我不能因为我是雪菜的挚友就一味偏袒雪菜……"},
				{"roleImage":"image/takeya/tak014112.png", "roleImage2":"image/ioo/ioo013110.png", "name":"依绪", "sentence":"也许春希你不知道……冬马她……也还在默默地注视着你"},
				{"roleImage":"image/takeya/tak014112.png", "roleImage2":"image/ioo/ioo013110.png", "name":"春希", "sentence":"我怎么可能不知道，我怎么可能不知道啊！"},
				{"roleImage":"image/takeya/tak014112.png", "roleImage2":"image/ioo/ioo013110.png", "name":"春希", "sentence":"……"},
				{"roleImage":"image/takeya/tak014112.png", "roleImage2":"image/ioo/ioo013110.png", "name":"春希", "sentence":"……我去买酒了。"}
			]
		},
		{
			"backgroundImage": "image/USEBG/b204003.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"24",
			"frames":
			[
				{"roleImage":"", "name":"", "sentence":"我回来以后，那两个人已经不见了。"},
				{"roleImage":"", "name":"", "sentence":"有着武也笔迹的一张字条示意我他们先回去了。"},
				{"roleImage":"", "name":"", "sentence":"以及上面有一行依绪笔记的字。"},
				{"roleImage":"", "name":"", "sentence":"“她1月7日回欧洲。晚9点的飞机。”"},
				{"roleImage":"", "name":"", "sentence":"我为什么会动摇了呢。"},
				{"roleImage":"", "name":"", "sentence":"明明雪菜就在我面前。"},
				{"roleImage":"", "name":"", "sentence":"明明冬马远在天边。"},
				{"roleImage":"", "name":"", "sentence":"为什么我会如此不安呢。"}
			]
		},
		{
			"backgroundImage": "image/USEBG/b204000.png",
			"backgroundMusic": "music/UMR.mp3",
			"snum":"25",
			"frames":
			[
				{"roleImage":"", "name":"", "sentence":"1月7日。(电话铃声)"}
			]
		},
		{
			"backgroundImage": "image/USEBG/b204000.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"26",
			"frames":
			[
				{"roleImage":"", "name":"春希", "sentence":"您好"},
				{"roleImage":"", "name":"雪菜", "sentence":"春希君……"},
				{"roleImage":"", "name":"", "sentence":"雪菜声音听起来非常虚弱。"},
				{"roleImage":"", "name":"春希", "sentence":"雪菜……你在哪儿？"},
				{"roleImage":"", "name":"雪菜", "sentence":"……家里。全家人出门旅游了，我突然发烧……"},
				{"roleImage":"", "name":"雪菜", "sentence":"应该没事的，我就是想……找个人聊聊天"},
				{"roleImage":"", "name":"春希", "sentence":"稍等我马上到。"},
				{"roleImage":"", "name":"雪菜", "sentence":"谢谢你，春希"}
			]
		},
		{
			"backgroundImage": "image/USEBG/b104403.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"27",
			"frames":
			[
				{"roleImage":"image/setsuna/居家装/set029125.png", "name":"雪菜", "sentence":"没事的，大概是昨晚着凉了……"},
				{"roleImage":"image/setsuna/居家装/set029125.png", "name":"春希", "sentence":"39度了。来，躺好。不过你为什么和全家一起去旅游啊"},
				{"roleImage":"image/setsuna/居家装/set029133.png", "name":"雪菜", "sentence":"因为……他们商量好要去温泉"},
				{"roleImage":"image/setsuna/居家装/set029125.png", "name":"春希", "sentence":"……"},
				{"roleImage":"image/setsuna/居家装/set029125.png", "name":"", "sentence":"那是小木曾雪菜回忆中数一数二的伤心之地。"},
				{"roleImage":"image/setsuna/居家装/set029125.png", "name":"", "sentence":"从那次三人之行后，小木曾雪菜从未去过温泉。"},
				{"roleImage":"image/setsuna/居家装/set029125.png", "name":"", "sentence":"而此次小木曾一家，正是去我们曾去过的那一家。"},
				{"roleImage":"image/setsuna/居家装/set029125.png", "name":"", "sentence":"我，雪菜，冬马，曾去过的那一家。"},
				{"roleImage":"image/setsuna/居家装/set029125.png", "name":"", "sentence":"留下了三人最珍贵的回忆的一家。"},
				{"roleImage":"image/setsuna/居家装/set029133.png", "name":"雪菜", "sentence":"春希……"},
				{"roleImage":"image/setsuna/居家装/set029133.png", "name":"春希", "sentence":"你晚饭吃了吗？"},
				{"roleImage":"image/setsuna/居家装/set029125.png", "name":"雪菜", "sentence":"没有……"},
				{"roleImage":"image/setsuna/居家装/set029125.png", "name":"春希", "sentence":"我去做。你想吃什么？"},
				{"roleImage":"image/setsuna/居家装/set029200.png", "name":"雪菜", "sentence":"……只要是春希做的，我都爱吃"},
				{"roleImage":"image/setsuna/居家装/set029200.png", "name":"春希", "sentence":"……我还是去看看冰箱里有什么吧。"}
			]
		},
		{
			"backgroundImage": "image/USEBG/b214200.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"28",
			"frames":
			[
				{"roleImage":"", "name":"", "sentence":"……"},
				{"roleImage":"", "name":"", "sentence":"事实上，冰箱里的食材有很多。"},
				{"roleImage":"", "name":"", "sentence":"这也是小木曾家庭的惯例。"},
				{"roleImage":"", "name":"", "sentence":"我挑选食材的时候，却直接触碰到了那几样食材。"},
				{"roleImage":"", "name":"", "sentence":"那些食材适合病人食用的吧。"},
				{"roleImage":"", "name":"", "sentence":"不，那些食材是我刻意挑选的。"}
			]
		},
		{
			"backgroundImage": "image/回忆杀/b105000.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"29",
			"frames":
			[
				{"roleImage":"image/回忆杀/kaz029104.png", "name":"和纱", "sentence":"难吃，简直难吃到了一种境界。你还真敢拿这种东西给别人吃啊。"},
				{"roleImage":"image/回忆杀/kaz029104.png", "name":"和纱", "sentence":"我没说我没有食欲，只是，单纯地很难吃而已。"}
			]
		},
		{
			"backgroundImage": "image/USEBG/b214200.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"30",
			"frames":
			[
				{"roleImage":"", "name":"", "sentence":"这是雪菜教给我做的。"},
				{"roleImage":"", "name":"", "sentence":"雪菜教给我做给冬马的。"},
				{"roleImage":"", "name":"", "sentence":"而现在，我正在将这道菜做给雪菜。"},
				{"roleImage":"", "name":"", "sentence":"这碗蛤蛎粥，用的只是蛤蛎罐头。"},
				{"roleImage":"", "name":"", "sentence":"却曾被冬马一滴不剩地吞下。"},
				{"roleImage":"", "name":"", "sentence":"三年，这碗粥的味道会不会变呢。"}
			]
		},
		{
			"backgroundImage": "image/USEBG/b104403.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"31",
			"frames":
			[
				{"roleImage":"image/setsuna/居家装/set029209.png", "name":"雪菜", "sentence":"春希君……（咝咝）"},
				{"roleImage":"image/setsuna/居家装/set029209.png", "name":"春希", "sentence":"好吃吗？"},
				{"roleImage":"image/setsuna/居家装/set029216.png", "name":"雪菜", "sentence":"（咝咝）要我说实话的话确实没有妈妈做的好吃……"},
				{"roleImage":"image/setsuna/居家装/set029303.png", "name":"雪菜", "sentence":"不过是春希君做的，就是世界上最好吃的蛤蛎粥。"},
				{"roleImage":"image/setsuna/居家装/set029303.png", "name":"春希", "sentence":"能得到这样的评价我已经心满意足了"},
				{"roleImage":"", "name":"", "sentence":"时间指向8点。从这里到机场最少需要花40分钟的时间。"},
				{"roleImage":"", "name":"", "sentence":"我为什么要思考这些呢。"},
				{"roleImage":"image/setsuna/居家装/set029303.png", "name":"雪菜", "sentence":"吶春希君，谢谢你"},
				{"roleImage":"image/setsuna/居家装/set029303.png", "name":"春希", "sentence":"一碗粥你谢了很多次了……"},
				{"roleImage":"image/setsuna/居家装/set029222.png", "name":"雪菜", "sentence":"这次不是粥"},
				{"roleImage":"image/setsuna/居家装/set029222.png", "name":"春希", "sentence":"嗯？那这次又是什么？"},
				{"roleImage":"image/setsuna/居家装/set029217.png", "name":"雪菜", "sentence":"谢谢你一直以来带给我的快乐……和痛苦"},
				{"roleImage":"image/setsuna/居家装/set029209.png", "name":"雪菜", "sentence":"这些回忆，不管是快乐还是痛苦，我都会好好珍惜的哦"},
				{"roleImage":"image/setsuna/居家装/set029209.png", "name":"雪菜", "sentence":"能够一直注视着你我也已经心满意足了。"},
				{"roleImage":"image/setsuna/居家装/set029201.png", "name":"雪菜", "sentence":"所以，请去追和纱吧。"},
				{"roleImage":"image/setsuna/居家装/set029201.png", "name":"春希", "sentence":"……"},
				{"roleImage":"", "name":"", "sentence":"雪菜拿出了那张字条。"},
				{"roleImage":"", "name":"", "sentence":"因为便笺纸的黏性而粘在我的手提包上的字条。"},
				{"roleImage":"", "name":"", "sentence":"依绪的字迹虽小但十分清晰。"},
				{"roleImage":"image/setsuna/居家装/set029201.png", "name":"春希", "sentence":"……"}
			]
		},
		{
			"backgroundImage": "image/USEBG/b104403.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"32",
			"frames":
			[
				{"roleImage":"image/setsuna/居家装/set029200.png", "name":"春希", "sentence":"我不会去的。"},
				{"roleImage":"image/setsuna/居家装/set029200.png", "name":"雪菜", "sentence":"……"},
				{"roleImage":"image/setsuna/居家装/set029200.png", "name":"春希", "sentence":"我会留下来陪你的"},
				{"roleImage":"image/setsuna/居家装/set029200.png", "name":"春希", "sentence":"我不会再犯三年前同样的错误了。"},
				{"roleImage":"image/setsuna/居家装/set029200.png", "name":"春希", "sentence":"我会……"},
				{"roleImage":"image/setsuna/居家装/set029201.png", "name":"雪菜", "sentence":"春希君"},
				{"roleImage":"image/setsuna/居家装/set029201.png", "name":"雪菜", "sentence":"我们分手吧"},
				{"roleImage":"image/setsuna/居家装/set029133.png", "name":"雪菜", "sentence":"尝到你的蛤蛎粥的时候我就知道了。"},
				{"roleImage":"image/setsuna/居家装/set029201.png", "name":"雪菜", "sentence":"你特意在里面加了糖对吧"},
				{"roleImage":"image/setsuna/居家装/set029133.png", "name":"雪菜", "sentence":"三年前我提供的菜谱，可是没有那么多糖的哦。"},
				{"roleImage":"image/setsuna/居家装/set029200.png", "name":"雪菜", "sentence":"这里面，满是对冬马的思念不是吗"},
				{"roleImage":"image/setsuna/居家装/set029201.png", "name":"雪菜", "sentence":"春希君你是以怎样的心情来做这一碗粥的呢"},
				{"roleImage":"image/setsuna/居家装/set029201.png", "name":"春希", "sentence":"……"},
				{"roleImage":"image/setsuna/居家装/set029201.png", "name":"", "sentence":"我无法反驳。"},
				{"roleImage":"image/setsuna/居家装/set029201.png", "name":"", "sentence":"下意识地，把对冬马的思念加进去了。"},
				{"roleImage":"image/setsuna/居家装/set029201.png", "name":"", "sentence":"躺在我面前的雪菜依然撑着她标志性的笑容。"},
				{"roleImage":"image/setsuna/居家装/set029201.png", "name":"", "sentence":"然而，那份笑容已经不再属于我了。"},
				{"roleImage":"image/setsuna/居家装/set029209.png", "name":"雪菜", "sentence":"我还爱着你，春希君。"},
				{"roleImage":"image/setsuna/居家装/set029209.png", "name":"雪菜", "sentence":"所以，既然我无法让你忘记对和纱的思念"},
				{"roleImage":"image/setsuna/居家装/set029303.png", "name":"雪菜", "sentence":"就请离开我吧。"}
			]
		},
		{
			"backgroundImage": "image/USEBG/b214402.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"33",
			"frames":
			[
				{"roleImage":"", "name":"", "sentence":"下雪了。"},
				{"roleImage":"", "name":"", "sentence":"离开小木曾家，我没有去机场，也没有回家。"},
				{"roleImage":"", "name":"", "sentence":"漫无目的地走在街上，仿佛一切是虚幻，又仿佛一切是真实。"},
				{"roleImage":"", "name":"", "sentence":"在飘雪的白昼我们互相接近，在飘雪的夜晚我们互相伤害。"},
				{"roleImage":"", "name":"", "sentence":"又一次飘雪的夜晚，我们选择离开。"},
				{"roleImage":"", "name":"", "sentence":"冬季，还未结束。"},
				{"roleImage":"", "name":"", "sentence":"但属于我们的白色相簿的季节，已经远去。"}
			]
		},
		{
			"backgroundImage": "image/USEBG/b104403.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"34",
			"frames":
			[
				{"roleImage":"image/setsuna/居家装/set029200.png", "name":"春希", "sentence":"……"},
				{"roleImage":"image/setsuna/居家装/set029200.png", "name":"春希", "sentence":"雪菜……对不起……"},
				{"roleImage":"image/setsuna/居家装/set029200.png", "name":"春希", "sentence":"我……"},
				{"roleImage":"image/setsuna/居家装/set029201.png", "name":"雪菜", "sentence":"没关系的，春希君"},
				{"roleImage":"image/setsuna/居家装/set029200.png", "name":"雪菜", "sentence":"单独见面，我们这是最后一次吧。"},
				{"roleImage":"image/setsuna/居家装/set029201.png", "name":"春希", "sentence":"……"},
				{"roleImage":"image/setsuna/居家装/set029201.png", "name":"春希", "sentence":"再见了，雪菜。"}
			]
		},
		{
			"backgroundImage": "image/USEBG/b214402.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"35",
			"frames":
			[
				{"roleImage":"", "name":"", "sentence":"我无法割舍。"},
				{"roleImage":"", "name":"", "sentence":"和和纱重逢时的那份悸动。"},
				{"roleImage":"", "name":"", "sentence":"我无法忘记和纱。"},
				{"roleImage":"", "name":"", "sentence":"雪菜是对的。"},
				{"roleImage":"", "name":"", "sentence":"我一直在骗她，哪怕和她在一起"},
				{"roleImage":"", "name":"", "sentence":"我也在想着和纱的事情。"},
				{"roleImage":"", "name":"", "sentence":"这一次，我要去面对真正的自己了"},
				{"roleImage":"", "name":"", "sentence":"和纱。"}
			]
		},
		{
			"backgroundImage": "image/USEBG/b102300.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"36",
			"frames":
			[
				{"roleImage":"", "name":"", "sentence":"我知道，每一次在这里你都会看到我"},
				{"roleImage":"", "name":"", "sentence":"你走的那一次也是。"},
				{"roleImage":"", "name":"", "sentence":"只是"},
				{"roleImage":"", "name":"", "sentence":"这一次，请不要顾忌"},
				{"roleImage":"", "name":"", "sentence":"如果看到了我"},
				{"roleImage":"", "name":"", "sentence":"请把我叫住。"},
				{"roleImage":"", "name":"和纱", "sentence":"……笨蛋"},
				{"roleImage":"", "name":"春希", "sentence":"……和纱"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031150.png", "name":"和纱", "sentence":"笨蛋笨蛋笨蛋！"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031150.png", "name":"春希", "sentence":"和纱……"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031133.png", "name":"和纱", "sentence":"你为什么又来在我面前"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031133.png", "name":"和纱", "sentence":"明明你不能留住我"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031125.png", "name":"和纱", "sentence":"你又要我看着你远去"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031133.png", "name":"和纱", "sentence":"你到底想要我多久才能忘记你"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031125.png", "name":"春希", "sentence":"……不要走"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031115.png", "name":"和纱", "sentence":"你到底要……诶？"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031115.png", "name":"春希", "sentence":"和纱，不要走"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031101.png", "name":"春希", "sentence":"我……已经不属于雪菜了"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031101.png", "name":"春希", "sentence":"我的心……现在只有你"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031101.png", "name":"春希", "sentence":"请不要走。"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031150.png", "name":"和纱", "sentence":"……"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031150.png", "name":"和纱", "sentence":"为什么………………"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031125.png", "name":"和纱", "sentence":"为什么…………"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031133.png", "name":"和纱", "sentence":"为什么……"}
			]
		},
		{
			"backgroundImage": "image/USEBG/b103400.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"37",
			"frames":
			[
				{"roleImage":"", "name":"", "sentence":"一周后。"},
				{"roleImage":"", "name":"女店员", "sentence":"先生您这次要待多久？"},
				{"roleImage":"", "name":"女店员", "sentence":"我在今天营业结束之前之前会一直在这里陪您的"},
				{"roleImage":"", "name":"春希", "sentence":"别给我这么长时间我会真的呆在这里啊喂！"},
				{"roleImage":"", "name":"春希", "sentence":"那、就这个吧。帮我刻上这张字条上的字。"},
				{"roleImage":"", "name":"女店员", "sentence":"什么？您已经选好了？"},
				{"roleImage":"", "name":"春希", "sentence":"嗯。这次没什么可犹豫的了"},
				{"roleImage":"", "name":"女店员", "sentence":"啊有点不习惯……好的我去准备一下。"}
			]
		},
		{
			"backgroundImage": "image/USEBG/b103302.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"38",
			"frames":
			[
				{"roleImage":"image/kazusa/晚会礼服/kaz031127.png", "name":"春希", "sentence":"和纱？"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031127.png", "name":"和纱", "sentence":"嗯，我知道了"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031127.png", "name":"和纱", "sentence":"……替我跟老师说对不起"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031127.png", "name":"和纱", "sentence":"嗯我知道。"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031127.png", "name":"和纱", "sentence":"我不会放弃钢琴的。"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031127.png", "name":"春希", "sentence":"……"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031150.png", "name":"和纱", "sentence":"……看什么 你希望我为了你这家伙放弃钢琴吗"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031150.png", "name":"春希", "sentence":"不不……如果因为我会放弃钢琴就请马上离开"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031142.png", "name":"和纱", "sentence":"……你这种让我放弃了最好的钢琴老师的人竟然还说得出这种话。"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031142.png", "name":"春希", "sentence":"……"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031142.png", "name":"春希", "sentence":"和纱，嫁给我好吗"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031115.png", "name":"和纱", "sentence":"诶，诶？"}
			]
		},
		{
			"backgroundImage": "image/USECG/133.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"39",
			"frames":
			[
				{"roleImage":"", "name":"", "sentence":"…………………"},
				{"roleImage":"", "name":"", "sentence":"…………"},
				{"roleImage":"", "name":"", "sentence":"……"},
				{"roleImage":"", "name":"春希", "sentence":"这个，刻有我们两个人的名字"},
				{"roleImage":"", "name":"", "sentence":"那是我为和纱准备的。"},
				{"roleImage":"", "name":"", "sentence":"只为冬马和纱一个人准备的。"},
				{"roleImage":"", "name":"", "sentence":"只饱含着对和纱一人思念的"},
				{"roleImage":"", "name":"", "sentence":"求婚戒指。"},
				{"roleImage":"", "name":"和纱", "sentence":"春希……笨蛋。"},
				{"roleImage":"", "name":"和纱", "sentence":"……这一天，终于等到了。"},
				{"roleImage":"", "name":"", "sentence":"…………………"},
				{"roleImage":"", "name":"", "sentence":"…………"},
				{"roleImage":"", "name":"", "sentence":"……"}
			]
		},
		{
			"backgroundImage": "image/USEBG/b104403.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"40",
			"frames":
			[
				{"roleImage":"image/setsuna/居家装/set029200.png", "name":"春希", "sentence":"……"},
				{"roleImage":"image/setsuna/居家装/set029200.png", "name":"春希", "sentence":"雪菜……对不起……"},
				{"roleImage":"image/setsuna/居家装/set029200.png", "name":"春希", "sentence":"我……"},
				{"roleImage":"image/setsuna/居家装/set029201.png", "name":"雪菜", "sentence":"没关系的，春希君"},
				{"roleImage":"image/setsuna/居家装/set029200.png", "name":"雪菜", "sentence":"单独见面，我们这是最后一次吧。"},
				{"roleImage":"image/setsuna/居家装/set029201.png", "name":"春希", "sentence":"……"},
				{"roleImage":"image/setsuna/居家装/set029201.png", "name":"春希", "sentence":"再见了，雪菜。"}
			]
		},
		{
			"backgroundImage": "image/USEBG/b214402.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"41",
			"frames":
			[
				{"roleImage":"", "name":"", "sentence":"我无法割舍。"},
				{"roleImage":"", "name":"", "sentence":"和和纱重逢时的那份悸动。"},
				{"roleImage":"", "name":"", "sentence":"我无法忘记和纱。"},
				{"roleImage":"", "name":"", "sentence":"雪菜是对的。"},
				{"roleImage":"", "name":"", "sentence":"我一直在骗她，哪怕和她在一起"},
				{"roleImage":"", "name":"", "sentence":"我也在想着和纱的事情。"},
				{"roleImage":"", "name":"", "sentence":"这一次，我要去面对真正的自己了"},
				{"roleImage":"", "name":"", "sentence":"和纱。"}
			]
		},
		{
			"backgroundImage": "image/USEBG/b102300.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"42",
			"frames":
			[
				{"roleImage":"", "name":"", "sentence":"我知道，每一次在这里你都会看到我"},
				{"roleImage":"", "name":"", "sentence":"你走的那一次也是。"},
				{"roleImage":"", "name":"", "sentence":"只是"},
				{"roleImage":"", "name":"", "sentence":"这一次，请不要顾忌"},
				{"roleImage":"", "name":"", "sentence":"如果看到了我"},
				{"roleImage":"", "name":"", "sentence":"请把我叫住。"}
			]
		},
		{
			"backgroundImage": "image/USEBG/b102303.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"43",
			"frames":
			[
				{"roleImage":"", "name":"", "sentence":"然而，她没有。"},
				{"roleImage":"", "name":"", "sentence":"开往维也纳的航班已经起飞。"},
				{"roleImage":"", "name":"", "sentence":"她再一次离我远去。"}
			]
		},
		{
			"backgroundImage": "image/USEBG/b102710.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"44",
			"frames":
			[
				{"roleImage":"image/kazusa/晚会礼服/kaz031110.png", "name":"和纱", "sentence":"……"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031110.png", "name":"和纱", "sentence":"那个笨蛋，竟然真的来了。"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031212.png", "name":"和纱", "sentence":"我……"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031212.png", "name":"和纱", "sentence":"再见了春希"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031134.png", "name":"和纱", "sentence":"可能不会再见了吧。"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031110.png", "name":"和纱", "sentence":"你和雪菜，要好好的"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031110.png", "name":"和纱", "sentence":"你说你和雪菜现在，挺好的"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031131.png", "name":"和纱", "sentence":"那就请一直这样幸福下去吧。"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031131.png", "name":"和纱", "sentence":"只要……"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031100.png", "name":"和纱", "sentence":"只要，能稍稍记起我"},
				{"roleImage":"image/kazusa/晚会礼服/kaz031323.png", "name":"和纱", "sentence":"……就好了吧。"}
			]
		},
		{
			"backgroundImage": "image/USEBG/b214402.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"45",
			"frames":
			[
				{"roleImage":"", "name":"", "sentence":"下雪了。"},
				{"roleImage":"", "name":"", "sentence":"离开机场，我没有回家。"},
				{"roleImage":"", "name":"", "sentence":"漫无目的地走在街上，仿佛一切是虚幻，又仿佛一切是真实。"},
				{"roleImage":"", "name":"", "sentence":"再一次，你离开了我。"},
				{"roleImage":"", "name":"", "sentence":"和纱，保重。"},
				{"roleImage":"", "name":"", "sentence":"冬季，还未结束。"},
				{"roleImage":"", "name":"", "sentence":"但属于我们的白色相簿的季节，已经远去。"}
			]
		},
		{
			"backgroundImage": "image/USEBG/b104403.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"46",
			"frames":
			[
				{"roleImage":"image/setsuna/居家装/set029200.png", "name":"春希", "sentence":"我不会去的。"},
				{"roleImage":"image/setsuna/居家装/set029133.png", "name":"雪菜", "sentence":"……"},
				{"roleImage":"image/setsuna/居家装/set029133.png", "name":"春希", "sentence":"我会留下来陪你的"},
				{"roleImage":"image/setsuna/居家装/set029133.png", "name":"春希", "sentence":"我不会再犯三年前同样的错误了。"},
				{"roleImage":"image/setsuna/居家装/set029125.png", "name":"雪菜", "sentence":"春希君……"},
				{"roleImage":"image/setsuna/居家装/set029125.png", "name":"春希", "sentence":"还记得在滑雪场那天晚上和你说过的话吗"},
				{"roleImage":"image/setsuna/居家装/set029113.png", "name":"雪菜", "sentence":"嗯"},
				{"roleImage":"image/setsuna/居家装/set029113.png", "name":"春希", "sentence":"现在，我要将这句话修改一下。"},
				{"roleImage":"image/setsuna/居家装/set029222.png", "name":"雪菜", "sentence":"诶？"},
				{"roleImage":"image/setsuna/居家装/set029222.png", "name":"春希", "sentence":"雪菜，你是我最重要的人"},
				{"roleImage":"image/setsuna/居家装/set029222.png", "name":"春希", "sentence":"我曾给你带来痛苦，带来在我们记忆中无法抹去的痛苦"},
				{"roleImage":"image/setsuna/居家装/set029222.png", "name":"春希", "sentence":"我本该就此离开你"},
				{"roleImage":"image/setsuna/居家装/set029222.png", "name":"春希", "sentence":"我早已知道我不该再出现你面前"},
				{"roleImage":"image/setsuna/居家装/set029222.png", "name":"春希", "sentence":"三年来我试着逃避"},
				{"roleImage":"image/setsuna/居家装/set029222.png", "name":"春希", "sentence":"但是我逃不开，我逃不开。"},
				{"roleImage":"image/setsuna/居家装/set029307.png", "name":"雪菜", "sentence":"……"},
				{"roleImage":"image/setsuna/居家装/set029307.png", "name":"春希", "sentence":"我知道这样只会让你越陷越深"},
				{"roleImage":"image/setsuna/居家装/set029307.png", "name":"春希", "sentence":"但是我每当我下定决心离开你的时候"},
				{"roleImage":"image/setsuna/居家装/set029307.png", "name":"春希", "sentence":"都是你亲手把我拽了回来"},
				{"roleImage":"image/setsuna/居家装/set029320.png", "name":"雪菜", "sentence":"春希君……"},
				{"roleImage":"image/setsuna/居家装/set029320.png", "name":"春希", "sentence":"这次，我不会再逃了。"},
				{"roleImage":"image/setsuna/居家装/set029320.png", "name":"春希", "sentence":"小木曾雪菜，我爱你。"},
				{"roleImage":"image/setsuna/居家装/set029307.png", "name":"雪菜", "sentence":"春希君……"},
				{"roleImage":"image/setsuna/居家装/set029307.png", "name":"雪菜", "sentence":"可是……和纱她……"},
				{"roleImage":"image/setsuna/居家装/set029307.png", "name":"春希", "sentence":"对不起雪菜，我……再一次对你隐瞒了"},
				{"roleImage":"image/setsuna/居家装/set029307.png", "name":"春希", "sentence":"只是因为……我决定和她不再见面了"},
				{"roleImage":"", "name":"", "sentence":"我已经知道我为什么还在意和纱的离开。"},
				{"roleImage":"", "name":"", "sentence":"和纱……这一次是真的再见了"},
				{"roleImage":"", "name":"", "sentence":"我和雪菜会重新开始"},
				{"roleImage":"", "name":"", "sentence":"从三年前再一次开始。"},
				{"roleImage":"", "name":"", "sentence":"如果路上遇到了磕绊"},
				{"roleImage":"", "name":"", "sentence":"那就再从三年前开始。"},
				{"roleImage":"", "name":"", "sentence":"再见了，和纱。"}
			]
		},
		{
			"backgroundImage": "image/USEBG/b103400.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"47",
			"frames":
			[
				{"roleImage":"", "name":"", "sentence":"一周后。"},
				{"roleImage":"", "name":"女店员", "sentence":"先生您这次要待多久？"},
				{"roleImage":"", "name":"女店员", "sentence":"我在今天营业结束之前之前会一直在这里陪您的"},
				{"roleImage":"", "name":"春希", "sentence":"别给我这么长时间我会真的呆在这里啊喂！"},
				{"roleImage":"", "name":"春希", "sentence":"那、就这个吧。帮我刻上这张字条上的字。"},
				{"roleImage":"", "name":"女店员", "sentence":"什么？您已经选好了？"},
				{"roleImage":"", "name":"春希", "sentence":"嗯。这次没什么可犹豫的了"},
				{"roleImage":"", "name":"女店员", "sentence":"啊有点不习惯……好的我去准备一下。"}
			]
		},
		{
			"backgroundImage": "image/USEBG/b103302.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"48",
			"frames":
			[
				{"roleImage":"image/setsuna/室内冬装/set013314.png", "name":"春希", "sentence":"雪菜"},
				{"roleImage":"image/setsuna/室内冬装/set013124.png", "name":"雪菜", "sentence":"春希君，我们再去那家店看看吧"},
				{"roleImage":"image/setsuna/室内冬装/set013124.png", "name":"雪菜", "sentence":"爸爸说要给我给孝宏买些大人穿的衣服"},
				{"roleImage":"image/setsuna/室内冬装/set013314.png", "name":"春希", "sentence":"春希君能帮忙挑选一下吗？"},
				{"roleImage":"image/setsuna/室内冬装/set013314.png", "name":"春希", "sentence":"没问题。但在那之前，等我一下。"},
				{"roleImage":"image/setsuna/室内冬装/set013217.png", "name":"雪菜", "sentence":"嗯？"},
				{"roleImage":"image/setsuna/室内冬装/set013217.png", "name":"春希", "sentence":"雪菜，嫁给我好吗"},
				{"roleImage":"image/setsuna/室内冬装/set013216.png", "name":"雪菜", "sentence":"诶，诶？"}
			]
		},
		{
			"backgroundImage": "image/USECG/140.png",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"49",
			"frames":
			[
				{"roleImage":"", "name":"", "sentence":"…………………"},
				{"roleImage":"", "name":"", "sentence":"…………"},
				{"roleImage":"", "name":"", "sentence":"……"},
				{"roleImage":"", "name":"春希", "sentence":"这个，刻有我们两个人的名字"},
				{"roleImage":"", "name":"", "sentence":"那是我为雪菜准备的。"},
				{"roleImage":"", "name":"", "sentence":"只为小木曾雪菜一个人准备的。"},
				{"roleImage":"", "name":"", "sentence":"只饱含着对雪菜一人思念的"},
				{"roleImage":"", "name":"", "sentence":"求婚戒指。"},
				{"roleImage":"", "name":"雪菜", "sentence":"春希君……"},
				{"roleImage":"", "name":"雪菜", "sentence":"……这一天，终于等到了。"},
				{"roleImage":"", "name":"", "sentence":"…………………"},
				{"roleImage":"", "name":"", "sentence":"…………"},
				{"roleImage":"", "name":"", "sentence":"……"}
			]
		},
		{
			"backgroundImage": "",
			"backgroundMusic": "music/Leaf - 吐露.mp3",
			"snum":"50",
			"frames":
			[
				{"roleImage":"", "name":"", "sentence":""}
			]
		}
	]
}







