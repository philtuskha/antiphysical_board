function make_base_auth(user, password) {
  var tok = user + ':' + password;
  var hash = btoa(tok);
  return "Basic " + hash;
}

var app = new Vue({
	el: '#app',
	data: {
	message: 'Hello Vue.js!'
	},
	//delimeters = ['((','))']
	methods: {
		APICall: function(url){
			this.loading = true

		    $.ajax({
		        url: url,
		        method: "GET",
		        async: false,
		        context: this,
		        // jsonp: "callback",
		        dataType: 'json',
    			type: 'GET',
		        crossDomain:true,
		        data: {
			        // q: "select title,abstract,url from search.news where query=\"cat\"",
			        // callback: "callback",
			        // format: "json"
			    },
		        headers: {
		        	// "X-Redmine-API-Key": "6df5cfb6a984fc4d223db12d35319f2bae1d5a2f",
		        	// 'Access-Control-Allow-Origin' : "*",
		        	// 'Content-Type': 'application/json'
		        },
		     //  beforeSend: function (xhr){
			    //     xhr.setRequestHeader('Authorization', btoa('pmoore:D3xtrose'));
			    // },

		        // dataType: "JSON",
		        // error: function(){

		      		// this.redirect()

		        // },
		        success: function(response){
		        	// var r = JSON.parse(response)
		        	console.log(response)
		        	this.message = response['issues']
		        	// this.message = r


		        	// if(Array.isArray(response) && response.length > 0){




		        	// }else if(!Array.isArray(response)){



		         //    }else{

		        	// 	this.redirect()
		        	// }
		        }
		    })

		}
	},
	mounted: function(){
		this.APICall("http://localhost:6060/api/")

	}

})

// Vue.config.delimeters = ['((','))']


