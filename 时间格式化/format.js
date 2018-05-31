// template可已是，年月 ‘YY-MM-DD’, 'hh:mm:ss'，传入一个模板，只是做替换
// 没有传入template则默认为 ‘YY-MM-DD hh:mm:ss'
function timeFormat(date, temple) {
	var date = new Date(date);
	var year, month, day, hours, minus, seconds;
	year = date.getFullYear();
	month = date.getMonth() + 1;
	day = date.getDay();
	hours = date.getHours();
	minus = date.getMinutes();
	seconds = date.getSeconds();
	if (month < 10) {
		month = '0' + month;
	}
	if (day < 10) {
		day = '0' + day;
	}
	if (hours < 10) {
		hours = '0' + hours;
	}
	if (minus < 10) {
		minus = '0' + minus;
	}
	if (seconds < 10) {
		seconds = '0' + seconds;
	}
	var str = temple ? temple : 'YY-MM-DD hh:mm:ss';
	str = str.replace('YY', year)
	str = str.replace('MM', month)
	str = str.replace('DD', day)
	str = str.replace('hh', hours)
	str = str.replace('mm', minus)
	str = str.replace('ss', seconds)
	return str
}

timeFormat('2018')