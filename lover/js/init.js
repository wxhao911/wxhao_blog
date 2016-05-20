// 初始化
if(typeof Cookies.get('search_engine') === "undefined")
	Cookies.set('search_engine', 'baidu', {expires: 365, path: '/'});

// 默认引擎
$('#search_engine').val(Cookies.get('search_engine'));
switch($('#search_engine').val()) {
	case 'baidu':
		$('#search_bar').attr('action', 'http://www.baidu.com/s');
		$('#search').attr('name', 'wd');
		break;
	case 'google':
		$('#search_bar').attr('action', 'https://www.google.com/search');
		$('#search').attr('name', 'q');
		break;
}
