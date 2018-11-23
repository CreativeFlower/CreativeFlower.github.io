$(document).ready(function () {
   //nav
	var oH2 = document.getElementById("mnavh");
	var oUl = document.getElementById("starlist");
	oH2.onclick = function () {
		var style = oUl.style;
		style.display = style.display == "block" ? "none" : "block";
		oH2.className = style.display == "block" ? "open" : ""
	}

	var obj = null;
	var As = document.getElementById('starlist').getElementsByTagName('a');
	obj = As[0];
	for (i = 1; i < As.length; i++) {
		if (window.location.href.indexOf(As[i].href) >= 0)
			obj = As[i];
	}
	obj.id = 'selected';

	/*
	search
	*/
	$('.search_ico').click(function () {
		$('.search_bar').toggleClass('search_open');
		if ($('#keyboard').val().length > 2) {
			$('#keyboard').val('');
			$('#searchform').submit();
		} else {
			return false;
		}
	});


	//header
	var new_scroll_position = 0;
	var last_scroll_position;
	var header = document.getElementById("header");

	window.addEventListener('scroll', function (e) {
		last_scroll_position = window.scrollY;

		if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
			header.classList.remove("slideDown");
			header.classList.add("slideUp");

		} else if (new_scroll_position > last_scroll_position) {
			header.classList.remove("slideUp");
			header.classList.add("slideDown");
		}

		new_scroll_position = last_scroll_position;
	});

	//

	(function () {
		var len = 100; // Ĭ����ʾ������
		var content = document.getElementById("content"); // content ��ȡ���� div ����
		var text = content.innerHTML; // text Ϊ����
		var span = document.createElement("span"); // ����һ�� SPAN ��ǩ
		var n = document.createElement("a"); // ����һ�� A ��ǩ
		span.innerHTML = text.substring(0, len); // SPAN ��ǩ������Ϊ text ��ǰ len ���ַ�
		n.innerHTML = text.length > len ? "...չ��" : ""; // ������ A ��ǩ���ݣ���������������� len����ôΪ��..չ����������Ϊ��
		n.href = "javascript:void(0)"; // ���� A ��ǩ�����ӵ�ַ�����⣩
		n.onclick = function () { // ��� A ����ִ�����溯��
			// ��� A ��ǩ������Ϊ��..չ��������ô A ��ǩ���ݱ�ɡ����𡱣�SPAN ��ǩ������Ϊ DIV ȫ�����ݣ���������Ϊǰ len ���ַ�
			if (n.innerHTML == "...չ��") {
				n.innerHTML = "����";
				span.innerHTML = text;
			} else {
				n.innerHTML = "...չ��";
				span.innerHTML = text.substring(0, len);
			}
		}
		content.innerHTML = ""; // ���� DIV ����Ϊ��
		content.appendChild(span); // �� SPAN Ԫ�ؼӵ� DIV ��
		content.appendChild(n); // �� A Ԫ�ؼӵ� DIV ��
	})();

	$('.navlist li').click(function () {
		$(this).addClass('navcurrent').siblings().removeClass('navcurrent');
		$('.navtab>div:eq(' + $(this).index() + ')').show().siblings().hide();
	});


});