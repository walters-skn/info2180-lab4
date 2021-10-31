window.onload=function(){
	var search = document.getElementsByClassName('btn')[0];
	var url = "http://localhost:8888/info2180-lab4/superheroes.php";

	search.addEventListener("click", function(e){
		e.preventDefault();
        let req = new XMLHttpRequest();
		
		req.onreadystatechange = function(){
			if (req.readyState == XMLHttpRequest.DONE) {
				if (req.status == 200){	
					var response = req.responseText;
                    var result = document.getElementById('results')
					result.innerHTML= response;
				}else{
                    // var error= document.getElementById('results')
					console.log("There was a problem with the request.");
				}
			}
		}
		req.open('GET',url);
		req.send();
	});
}	