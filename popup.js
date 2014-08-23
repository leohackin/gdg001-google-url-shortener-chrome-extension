// Copyright (c) 2014 Leo Hackin. All rights reserved.
// Use of this source code is governed by a MIT license that can be
// found in the LICENSE file.

var googleUrlShortener = {
  
  get: function(url) {
    $.ajax({
	  url: "https://www.googleapis.com/urlshortener/v1/url",
	  type: "POST",
	  contentType: "application/json",
	  data: '{"longUrl": "' + url + '"}'
	})
	.done(function( data ) {
		$('#url_decodificada').html(data.id);
	})
	.fail(function(data) {
		$('#url_decodificada').html("Deu ruim! =(");
		if ( console && console.log ) {
			console.log(data);
		}
    });
  }
}

$('#btn_short').click(function() {
  var url = $('#url').val();
  $('#url_decodificada').show().html("Shortenificando...");
  googleUrlShortener.get(url);
});
