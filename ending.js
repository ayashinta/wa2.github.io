var endCount = 1;
var endMax =11;

function endStart () {

	$("#pic").fadeOut(1000,function () {
		$("#pic").attr("src","image/USEEND/1.png");
	});
	$("#pic").fadeIn(1000,function () {
		changePic();
	});
}

function changePic() {
	setInterval(function() {
		if(endCount == endMax) endCount = 1;
		else endCount++;

		$("#pic").fadeOut(1000,function() {
			$("#pic").attr("src","image/USEEND/"+endCount+".png");
		});
		$("#pic").fadeIn(1000);
	},10000);
}
