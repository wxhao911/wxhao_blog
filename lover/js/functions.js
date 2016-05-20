var defaultKey='You are my toyer';

$('#search_bar').attr('action', 'http://www.baidu.com/s');
$('#search').attr('name', 'wd');
$('#search').css("text-align","center");
$('#search').val(defaultKey);

// 搜索框默认文字
$('#search').focus(function() {
	if($('#search').val() == defaultKey) $('#search').val('');
	$('#search').css("text-align","");
});

$('#search').blur(function() {
	if($('#search').val() == '') $('#search').val(defaultKey);
	$('#search').css("text-align","center");
});
// 切换引擎事件
$('#search_engine').change(function(){
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
});

// $('#toyer').mouseout(function(){
// 	$('#myzzilcc').hide(300);
// 	$('#tools').show(300);
// 	$('#wyymusic').show(300);
// });
// $('#toyer').mouseover(function(){
// 	$('#myzzilcc').show(300);
// 	$('#tools').hide(300);
// 	$('#wyymusic').hide(300);
// });

var love=function(){
	$('#myzzilcc').toggle(300);
	$('#tools').toggle(300);
	$('#wyymusic').toggle(300);
}
