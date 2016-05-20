
// 切换引擎事件
$('#search_engine').change(function(){
	switch($('#search_engine').val()) {
		case 'baidu':
			Cookies.set('search_engine', 'baidu', {expires: 365, path: '/'});
			$('#search_bar').attr('action', 'http://www.baidu.com/s');
			$('#search').attr('name', 'wd');
			break;
		case 'google':
			Cookies.set('search_engine', 'google', {expires: 365, path: '/'});
			$('#search_bar').attr('action', 'https://www.google.com/search');
			$('#search').attr('name', 'q');
			break;
	}
});

// 名言警句模块
// $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
	// $(".quote").append(a[0].content + "<p>— " + a[0].title + "</p>")
// });
// set timeout
$.ajax({
	url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
	context: $("#quote"),
	success: function(a) {
		$(this).append(a[0].content + "<p>— " + a[0].title + "</p>");
	},
	timeout: 1000
});

// 搜索框默认文字
$('#search').val('You are my yyer');
$('#search').focus(function() {
	if($('#search').val() == 'You are my yyer.') $('#search').val('');
});

$('#search').blur(function() {
	if($('#search').val() == '') $('#search').val('You are my yyer.');
});


// 事件检测
