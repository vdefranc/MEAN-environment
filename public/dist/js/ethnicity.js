// $.get('/schools', appendSchools);

// $('form').on('submit', function (e) {
// 	console.log('sending');
// 	e.preventDefault();
// 	var form = $(this);
// 	var formData = form.serialize();

// 	$.ajax({
// 		type: 'POST',
// 		url: '/schools',
// 		data: formData
// 	}).done(function(data) {
// 		console.log(data);
// 		appendSchools([data]);
// 	});
// });

// $('.schools-list').on('click', 'a[data-school]', function (e) {
// 	if (!confirm('Are you sure?')) {
// 		return false;
// 	}
	
// 	var target = $(this);

// 	$.ajax({
// 		type: 'DELETE',
// 		url: '/schools/' + target.data('school')
// 	}).done(function(e) {
// 		console.log(e);
// 		target.parent().remove();
// 	});

// });


// function appendSchools (schools) {
// 	var list = [];
// 	var content, name, id;
// 	for (var i in schools) {
// 		id = schools[i]._id,
// 			name = schools[i].name;

// 		link = '<a href="#" data-school="' + id + '"> &times; </a>';
// 		content = '<a href="/schools/' + id + '">' + name + '</a> ' + link;
// 		list.push( $('<li>', {html: content}) );
// 	}

// 	$('.schools-list').append(list);
// }


var ha = "hah";
var hi = "hi";
var woo = "woo!";
var ouch = "ouch";