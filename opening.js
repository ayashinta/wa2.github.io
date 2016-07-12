var ocount = 0;
var oa = new Array(2);
oa[0] = "冬天，还没有结束。";
oa[1] = "我们的White Album的季节还在继续。";
oa[2] = "White Album 2 ~Closing Chapter~";
oa[3] = "雪菜BE 滑雪线";
oa[4] = "他们的白色相簿";
oa[5] = "由我们来谱写";
oa[6] = "由你来见证。";
oa[7] = "Enter键开启。";


function openWords() {
	setInterval(function() {
		$("#wordsin").fadeOut(1000,function() {
			$("#wordsin").html(oa[ocount]);
		})
		$("#wordsin").fadeIn(1000,function() {
				if(ocount == oa.length-1) ocount = oa.length-1;
				else ocount++;
		})
	},4000);
}