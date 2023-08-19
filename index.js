
let allIetms = []
let navlinks = document.querySelectorAll('nav ul li')


$(document).ready(function () {
	
	$(".lds-ring").fadeOut(1000, function()
	{
		$("#loader").fadeOut(1000 , function(){

			$('body').css('overflow', 'auto');
			$("#loader").remove();
		});
	});

	
async function   getGames(category) 
{
   let x = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
   let finalresult = await x.json();
    console.log(finalresult);
	allIetms = finalresult;
	displayItems () ; 

	
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1f2742ef83msh73525a58a88b40ep1d1a5djsn453168f6777c',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};
 
for (let i = 0; i < navlinks.length; i++)
{
	navlinks[i].addEventListener('click' ,  function(eventInfo){

			console.log(eventInfo);
			let categoryx = eventInfo.target.getAttribute("data-code");
		
			getGames(categoryx);

	})
}

getGames("MMORPG");





function displayItems ()

{
var cartoona =``;

for (var i = 0; i < allIetms.length; i++) 
{



    cartoona += 
    `
	<div class="card col-md-4 col-sm-6 col-lg-3 justify-content-around text-white" style="background: #272b30" >
	<img src="${allIetms[i].thumbnail}" class="card-img-top" alt="...">
	<div class="card-body">
	  <h5 class="card-title">${allIetms[i].title}</h5>
	  <p class="card-text">${allIetms[i].short_description}</p>
	  <div class="d-flex justify-content-between"> 
	  <a href="#" class="btn btn-primary">Free</a>
	  <a href="#" class="btn btn-primary">test</a>
	 
	  </div> 
	  
	</div>
  </div>
    
    `
	
}
    document.getElementById('rowcontainer').innerHTML=cartoona
}





});








