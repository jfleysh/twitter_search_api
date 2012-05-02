$(function(){
	
	//left list item
	//sorted by username
	$.getJSON("http://search.twitter.com/search.json?callback=?&q=twitterapi",

	function (data){
	
		var myList = $('ul');
		var listItem = $('ul li.left');
		
		//console.log(data.results);
	

		for (i=0; i<data.results.length; i++){
			listItem.append('<h1>'+data.results[i].from_user+'</h1>' + '<p>' + data.results[i].text + '</p>');
		}

	});
	
	//middle list item
	//sorted by keyword "the"
	$.getJSON("http://search.twitter.com/search.json?callback=?&q=the",

	function (data){
	
		var myList = $('ul');
		var listItem = $('ul li.mid');
		
		//console.log(data.results);
	

		for (i=0; i<data.results.length; i++){
			listItem.append('<h1>'+data.results[i].from_user+'</h1>' + '<p>' + data.results[i].text + '</p>');
		}

	});
	
	//right list item
	//sorted by ONLY replied tweets - this is the key (to_user_name)
	$.getJSON("http://search.twitter.com/search.json?callback=?&q=twitterapi&result_type=mixed&rpp=200",

	function (data){
	
		var myList = $('ul');
		var listItem = $('ul li.right');
		
		//console.log(data.results);
	

		for (i=0; i<data.results.length; i++){
			if (data.results[i].to_user_name !== null) {
				listItem.append('<h1>'+data.results[i].from_user+'</h1>' + '<p>' + data.results[i].to_user_name + '</p>'+ '<p>' + data.results[i].text + '</p>');
			}
		}

	});
});