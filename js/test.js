function createnote(){
	var para=document.createElement("div");
	switch (arguments[0])
	{
	case 1:
	  para.id = "note1";
	  break;
	case 2:
	  para.id = "note2";
	  break;
	case 3:
	  para.id = "note3";
	  break;
	case 4:
	  para.id = "note4";
	  break;
	default:
	  alert("wrong note type!");
	}
	var element=document.getElementById("stage");
	element.appendChild(para);
}

var bpm = 375.0234;
var mdelay= 3000;

var qjsonSong = 
{
	time1:[1,4,8,12,12.5,15,18,23,26,32,33,36,37,39,40,44,44.5,45,47,50,55,58,64,66,67,68,73,77,80,81,89,95,98,103,105,109,112,115,116,118,120,121,127,129,132,134,136,140,141,144,145,148,152,158,160,161,166,168,173,176,178,184,189,192,193,196,198,200,204,205,208,209,212,216,222,224,225,230,232,237,240,242,248,253,256,257],
	time2:[3,4.5,13,16,19,21,25,27,30,33,35,36.5,38,46,48,51,57,59,65,69,74,77,78,84,85,89.5,93,99,101,106,110,112,114,119,123,127,130,131,133,139,142,145,146,148.12,157,162,165,172,174,176.5,179,182,185,187,194,195,197,203,206,209,210,212.12,221,226,229,236,238,240.5,243,246,249,251,256,258],
	time3:[2,5,7,11,14,20,28,31,33,37,43,47,52,53,57,60,61,64,68,71,75,77,79,87,90.5,100,103,107,111,112,115,116,117,122,125,129,131,135,137,140,143,146,147,148.24,151,153,155,159,163,167,169,171,175,177,184,187,193,195,199,201,204,207,210,211,212.24,215,217,219,223,227,231,233,235,239,241,248,251,256,259,261],
	time4:[1,6,9,15,17,25,29,32,33,38,39,41,49,52,55,65,69,75.5,77,81,85,97,101,108,112,114,120,124,125,130,132,139,144,147,148.36,156,160,164,180,183,185,190,194,196,203,208,211,212.36,220,224,228,244,247,249,254,256,260,261]
};

var jsonSong = qjsonSong;
var timeline;
var starttime;
var ob;
function musicStart(){
	jsonSong = qjsonSong;
	exitmusicgame = 0;
	$(".musicgame").attr("style","display:block");
	$(".snowheat").attr("style","display:block");
	$(".musicgame").animate({opacity:"1"},1000);


	$("#playground").attr("style","display:block");
	$("#playground").animate({opacity:"1"},1000);



	ob=$("#obi").ProgressBarWars({porcentaje:0,estilo:"obi"});
	var d1 = new Date();
	starttime = d1.getTime();
	timecount();
	var song = document.getElementById('song');
	setTimeout(function(){song.play();},1165-375.0234+mdelay);
	for(var i1 = 0; i1 < jsonSong.time1.length; i1++)
	{
		(function(i1){setTimeout(function(){createnote(1)},jsonSong.time1[i1]*bpm+mdelay);})(i1);
	}
	for(var i2 = 0; i2 < jsonSong.time2.length; i2++)
	{
		(function(i2){setTimeout(function(){createnote(2)},jsonSong.time2[i2]*bpm+mdelay);})(i2);
	}
	for(var i3 = 0; i3 < jsonSong.time3.length; i3++)
	{
		(function(i3){setTimeout(function(){createnote(3)},jsonSong.time3[i3]*bpm+mdelay);})(i3);
	}
	for(var i4 = 0; i4 < jsonSong.time4.length; i4++)
	{
		(function(i4){setTimeout(function(){createnote(4)},jsonSong.time4[i4]*bpm+mdelay);})(i4);
	}
	setTimeout(function(){showscore();},1160-375.0234+mdelay+102000);
}

function timecount(){
	var d2 = new Date();
	timeline = d2.getTime()-starttime;
	setTimeout("timecount()",1);
}

var score=0;
var noteflag1 = 0;
var noteflag2 = 0;
var noteflag3 = 0;
var noteflag4 = 0;
var combomax = 0;
var combo = 0;
function keyup(event){
	if(event.keyCode == 68){
		$("#snowheat1").animate({opacity:"0"},10);
	}
	if(event.keyCode == 70){
		$("#snowheat2").animate({opacity:"0"},10);
	}
	if(event.keyCode == 74){
		$("#snowheat3").animate({opacity:"0"},10);
	}
	if(event.keyCode == 75){
		$("#snowheat4").animate({opacity:"0"},10);
	}
}

function play(event){
	var moment = timeline-1200;
	var heat1 = document.getElementById('heat1');
	var heat2 = document.getElementById('heat2');
	var heat3 = document.getElementById('heat3');
	var heat4 = document.getElementById('heat4');
	if(event.keyCode == 27&&exitmusicgame == 0&&timeline>4900){
		showscore();
	}
	if(event.keyCode == 13&&exitmusicgame == 1){
		CDyesterday();
	}
	if(event.keyCode == 68){
		$("#snowheat1").animate({opacity:"1"},10);
		var dshoot = 0;
		for(var i1 = noteflag1; i1 < jsonSong.time1.length; i1++){
			if(moment-jsonSong.time1[i1]*bpm-mdelay<50&&moment-jsonSong.time1[i1]*bpm-mdelay>-50){
				noteflag1 = i1+1;
				score = score + 100;
				dshoot = 1;
				jsonSong.time1[i1] = -1;
				heat1.play();
				clearperform();
				makeperfect();
				combo = combo + 1;
				if(combo > combomax){
					combomax = combo;
				}
				break;
			}
			else if(moment-jsonSong.time1[i1]*bpm-mdelay<100&&moment-jsonSong.time1[i1]*bpm-mdelay>-100){
				noteflag1 = i1+1;
				score = score + 75;
				dshoot = 1;
				jsonSong.time1[i1] = -2;
				heat1.play();
				clearperform();
				makegreat();
				combo = combo + 1;
				if(combo > combomax){
					combomax = combo;
				}
				break;
			}
			else if(moment-jsonSong.time1[i1]*bpm-mdelay<150&&moment-jsonSong.time1[i1]*bpm-mdelay>-150){
				noteflag1 = i1+1;
				score = score + 50;
				dshoot = 1;
				jsonSong.time1[i1] = -3;
				heat1.play();
				clearperform();
				makegood();
				combo = 0;
				break;
			}
		}
		if(dshoot == 0){
			combo = 0;
		}
		dshoot=0;
	}
	if(event.keyCode == 70){
		$("#snowheat2").animate({opacity:"1"},10);
		var fshoot = 0;
		for(var i1 = noteflag2; i1 < jsonSong.time2.length; i1++){
			if(moment-jsonSong.time2[i1]*bpm-mdelay<50&&moment-jsonSong.time2[i1]*bpm-mdelay>-50){
				noteflag2 = i1+1;
				score = score + 100;
				fshoot = 1;
				jsonSong.time2[i1] = -1;
				heat2.play();
				clearperform();
				makeperfect();
				combo = combo + 1;
				if(combo > combomax){
					combomax = combo;
				}
				break;
			}
			else if(moment-jsonSong.time2[i1]*bpm-mdelay<100&&moment-jsonSong.time2[i1]*bpm-mdelay>-100){
				noteflag2 = i1+1;
				score = score + 75;
				fshoot = 1;
				jsonSong.time2[i1] = -2;
				heat2.play();
				clearperform();
				makegreat();
				combo = combo + 1;
				if(combo > combomax){
					combomax = combo;
				}
				break;
			}
			else if(moment-jsonSong.time2[i1]*bpm-mdelay<150&&moment-jsonSong.time2[i1]*bpm-mdelay>-150){
				noteflag2 = i1+1;
				score = score + 50;
				fshoot = 1;
				jsonSong.time2[i1] = -3;
				heat2.play();
				clearperform();
				makegood();
				combo = 0;
				break;
			}
		}
		if(fshoot == 0){
			combo = 0;
		}
		fshoot=0;
	}
	if(event.keyCode == 74){
		$("#snowheat3").animate({opacity:"1"},10);
		var jshoot = 0;
		for(var i1 = noteflag3; i1 < jsonSong.time3.length; i1++){
			if(moment-jsonSong.time3[i1]*bpm-mdelay<50&&moment-jsonSong.time3[i1]*bpm-mdelay>-50){
				noteflag3 = i1+1;
				score = score + 100;
				jshoot = 1;
				jsonSong.time3[i1] = -1;
				heat3.play();
				clearperform();
				makeperfect();
				combo = combo + 1;
				if(combo > combomax){
					combomax = combo;
				}
				break;
			}
			else if(moment-jsonSong.time3[i1]*bpm-mdelay<100&&moment-jsonSong.time3[i1]*bpm-mdelay>-100){
				noteflag3 = i1+1;
				score = score + 75;
				jshoot = 1;
				jsonSong.time3[i1] = -2;
				heat3.play();
				clearperform();
				makegreat();
				combo = combo + 1;
				if(combo > combomax){
					combomax = combo;
				}
				break;
			}
			else if(moment-jsonSong.time3[i1]*bpm-mdelay<150&&moment-jsonSong.time3[i1]*bpm-mdelay>-150){
				noteflag3 = i1+1;
				score = score + 50;
				jshoot = 1;
				jsonSong.time3[i1] = -3;
				heat3.play();
				clearperform();
				makegood();
				combo = 0;
				break;
			}
		}
		if(jshoot == 0){
			combo = 0;
		}
		jshoot=0;
	}
	if(event.keyCode == 75){
		$("#snowheat4").animate({opacity:"1"},10);
		var kshoot = 0;
		for(var i1 = noteflag4; i1 < jsonSong.time4.length; i1++){
			if(moment-jsonSong.time4[i1]*bpm-mdelay<50&&moment-jsonSong.time4[i1]*bpm-mdelay>-50){
				noteflag4 = i1+1;
				score = score + 100;
				kshoot = 1;
				jsonSong.time4[i1] = -1;
				heat4.play();
				clearperform();
				makeperfect();
				combo = combo + 1;
				if(combo > combomax){
					combomax = combo;
				}
				break;
			}
			else if(moment-jsonSong.time4[i1]*bpm-mdelay<100&&moment-jsonSong.time4[i1]*bpm-mdelay>-100){
				noteflag4 = i1+1;
				score = score + 75;
				kshoot = 1;
				jsonSong.time4[i1] = -2;
				heat4.play();
				clearperform();
				makegreat();
				combo = combo + 1;
				if(combo > combomax){
					combomax = combo;
				}
				break;
			}
			else if(moment-jsonSong.time4[i1]*bpm-mdelay<150&&moment-jsonSong.time4[i1]*bpm-mdelay>-150){
				noteflag4 = i1+1;
				score = score + 50;
				kshoot = 1;
				jsonSong.time4[i1] = -3;
				heat4.play();
				clearperform();
				makegood();
				combo = 0;
				break;
			}
		}
		if(kshoot == 0){
			combo = 0;
		}
		kshoot=0;
	}
	ob.mover(score/29800*100);
}

function getperfectnum(){
	var count = 0;
	for(var i = 0; i < jsonSong.time1.length; i++)
	{
		if(jsonSong.time1[i] == -1){
			count = count + 1;
		}
	}
	for(var i = 0; i < jsonSong.time2.length; i++)
	{
		if(jsonSong.time2[i] == -1){
			count = count + 1;
		}
	}
	for(var i = 0; i < jsonSong.time3.length; i++)
	{
		if(jsonSong.time3[i] == -1){
			count = count + 1;
		}
	}
	for(var i = 0; i < jsonSong.time4.length; i++)
	{
		if(jsonSong.time4[i] == -1){
			count = count + 1;
		}
	}
	return count;
}

function getgreatnum(){
	var count = 0;
	for(var i = 0; i < jsonSong.time1.length; i++)
	{
		if(jsonSong.time1[i] == -2){
			count = count + 1;
		}
	}
	for(var i = 0; i < jsonSong.time2.length; i++)
	{
		if(jsonSong.time2[i] == -2){
			count = count + 1;
		}
	}
	for(var i = 0; i < jsonSong.time3.length; i++)
	{
		if(jsonSong.time3[i] == -2){
			count = count + 1;
		}
	}
	for(var i = 0; i < jsonSong.time4.length; i++)
	{
		if(jsonSong.time4[i] == -2){
			count = count + 1;
		}
	}
	return count;
}

function getgoodnum(){
	var count = 0;
	for(var i = 0; i < jsonSong.time1.length; i++)
	{
		if(jsonSong.time1[i] == -3){
			count = count + 1;
		}
	}
	for(var i = 0; i < jsonSong.time2.length; i++)
	{
		if(jsonSong.time2[i] == -3){
			count = count + 1;
		}
	}
	for(var i = 0; i < jsonSong.time3.length; i++)
	{
		if(jsonSong.time3[i] == -3){
			count = count + 1;
		}
	}
	for(var i = 0; i < jsonSong.time4.length; i++)
	{
		if(jsonSong.time4[i] == -3){
			count = count + 1;
		}
	}
	return count;
}


function getcombonum(){
	return combomax;
}

function getscore(){
	return score;
}

$.fn.extend({ProgressBarWars: function(opciones) {
					var ProgressBarWars=this;
					var theidProgressBarWars=$(ProgressBarWars).attr("id");
					var styleUnique = Date.now();
                    var StringStyle="";

					defaults = {
					porcentaje:"100",
					tiempo:10,
					color:"",
					estilo:"yoda",
					tamanio:"30%",
					alto:"6px"
					}

					var opciones = $.extend({}, defaults, opciones);
					if(opciones.color!=''){StringStyle="<style>.color"+styleUnique+"{ border-radius: 2px;display: block; width: 0%; box-shadow:0px 0px 10px 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+", 0 0 1px "+opciones.color+";background-color: #fff;}</style>";opciones.estilo="color"+styleUnique;}
					$(ProgressBarWars).before(StringStyle);
					$(ProgressBarWars).append('<span class="barControl" style="width:'+opciones.tamanio+';"><div class="barContro_space"><span class="'+opciones.estilo+'" style="height: '+opciones.alto+';"  id="bar'+theidProgressBarWars+'"></span></div></span>');
					$("#bar"+theidProgressBarWars).animate({width: opciones.porcentaje+"%"},opciones.tiempo);
					this.mover = function(ntamanio) {
					$("#bar"+$(this).attr("id")).animate({width:ntamanio+"%"},opciones.tiempo);
					};
	return this;
	}
});



function clearperform(){
	$("#perfect").attr("id","nothing");
	$("#great").attr("id","nothing");
	$("#good").attr("id","nothing");
}

function makeperfect(){
	var para=document.createElement("div");
    para.id="perfect";
    var element=document.getElementById("perform");
    element.appendChild(para);
    $("#perfect").animate({opacity:"1"},30);
    setTimeout(function(){$("#perfect").animate({opacity:"0"},50);},1000);
}

function makegreat(){
	var para=document.createElement("div");
    para.id="great";
    var element=document.getElementById("perform");
    element.appendChild(para);
    $("#great").animate({opacity:"1"},30);
    setTimeout(function(){$("#great").animate({opacity:"0"},50);},1000);
}

function makegood(){
	var para=document.createElement("div");
    para.id="good";
    var element=document.getElementById("perform");
    element.appendChild(para);
    $("#good").animate({opacity:"1"},30);
    setTimeout(function(){$("#good").animate({opacity:"0"},50);},1000);
}

var exitmusicgame = 0;
function CDyesterday(){
	$("#afterplay").animate({opacity:"0"},1000);
	setTimeout(function(){$("#afterplay").attr("style","display:none")},1000);
	$(".playresult").animate({opacity:"0"},1000);
	setTimeout(function(){$(".playresult").attr("style","display:none")},1000);

	$(".musicgame").animate({opacity:"0"},1000);
	setTimeout(function(){$(".musicgame").attr("style","display:none")},1000);

	$("#playground").animate({opacity:"0"},1000);
	setTimeout(function(){$("#playground").attr("style","display:none")},1000);
	exitmusicgame = -1;
	setTimeout(function(){musicEnd();},1000);
}

function showscore(){
	var song = document.getElementById('song');
	song.pause();
	$(".snowheat").attr("style","display:none");
	$("#stage").attr("style","display:none");
	$("#obi").attr("style","display:none");

	$("#afterplay").attr("style","display:block");
	$("#afterplay").animate({opacity:"1"},1000);


	document.getElementById('playscore').innerHTML=getscore();
	document.getElementById('playcombo').innerHTML=getcombonum();
	document.getElementById('playperfect').innerHTML=getperfectnum();
	document.getElementById('playgreat').innerHTML=getgreatnum();
	document.getElementById('playgood').innerHTML=getgoodnum();
	$(".playresult").attr("style","display:block");
	$(".playresult").animate({opacity:"1"},1000);
	exitmusicgame = 1;
}