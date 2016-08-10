function importStyle(css, id) {
	var ele = document.createElement('style');
	ele.id = id;
	document.getElementsByTagName('head')[0].appendChild(ele);
	if (ele.styleSheet) {
		ele.styleSheet.cssText = css;
	} else {
		ele.appendChild(document.createTextNode(css));
	}
}

module.exports = function(content, file, opt) {
	var id = file.getId();
	content = content.replace(/\"/g, '\\\"').replace(/\r?\n/g, '');
	content = importStyle.toString() + '\n importStyle("' + content + '", "' + id + '");';
	return content;
};