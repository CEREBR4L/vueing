Vue.filter('searchFor', function(value, searchString) {
	var result = [];

	if(!searchString){
		return value;
	}

	searchString = searchString.trim().toLowerCase();

	result = value.filter(function(item){
		if(item.city.toLowerCase().indexOf(searchString) !== -1){
			return item;
		}
	})

	return result;

})

var demo = new Vue ({
	el: '#main',
	data: {
		searchString: "",
		/* 
		"THIS IS A FUCKING TERRIBLE IDEA, LOL" - CEREBR4L 2016 (please quote and shame me on this one) 
		DATA THANKS TO THE ALICEJIANG1
		HER GITHUB: https://github.com/alicejiang1
		PS: THIS GON BE LAGGY AF LOL
		*/
		 campsites: [
		  {
		    "city": "Kabul",
		    "country": "Afghanistan",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kabul/"
		  },
		  {
		    "city": "Tirana",
		    "country": "Albania",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.tirana/"
		  },
		  {
		    "city": "Algiers",
		    "country": "Algeria",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Algiers/"
		  },
		  {
		    "city": "Mansoura",
		    "country": "Algeria",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.mansoura/"
		  },
		  {
		    "city": "Oran",
		    "country": "Algeria",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.oran/"
		  },
		  {
		    "city": "Luanda",
		    "country": "Angola",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.luanda/"
		  },
		  {
		    "city": "Bahía Blanca",
		    "country": "Argentina",
		    "facebook": "https://www.facebook.com/groups/freecodecampbahiablanca/"
		  },
		  {
		    "city": "Bariloche",
		    "country": "Argentina",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bariloche/"
		  },
		  {
		    "city": "Buenos Aires",
		    "country": "Argentina",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.buenos.aires/"
		  },
		  {
		    "city": "Coyhaique",
		    "country": "Argentina",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.coyhaique/"
		  },
		  {
		    "city": "Concordia",
		    "country": "Argentina",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.concordia/"
		  },
		  {
		    "city": "Cordoba",
		    "country": "Argentina",
		    "facebook": "https://www.facebook.com/groups/fcccordoba/"
		  },
		  {
		    "city": "La Plata",
		    "country": "Argentina",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.la.plata/"
		  },
		  {
		    "city": "Mendoza",
		    "country": "Argentina",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.mendoza/"
		  },
		  {
		    "city": "Necochea",
		    "country": "Argentina",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.necochea/"
		  },
		  {
		    "city": "Resistencia",
		    "country": "Argentina",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.resistencia/"
		  },
		  {
		    "city": "Rosario",
		    "country": "Argentina",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.rosario/"
		  },
		  {
		    "city": "Yerevan",
		    "country": "Armenia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.armenia/"
		  },
		  {
		    "city": "Adelaide",
		    "country": "Australia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.adelaide/"
		  },
		  {
		    "city": "Bega",
		    "country": "Australia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bega/"
		  },
		  {
		    "city": "Bellingham",
		    "country": "Australia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bellingham/"
		  },
		  {
		    "city": "Brisbane",
		    "country": "Australia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.brisbane/"
		  },
		  {
		    "city": "Canberra",
		    "country": "Australia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.canberra/"
		  },
		  {
		    "city": "Geelong",
		    "country": "Australia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Geelong.Australia/"
		  },
		  {
		    "city": "Gold Coast",
		    "country": "Australia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Gold.Coast/"
		  },
		  {
		    "city": "Hobart",
		    "country": "Australia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.hobart/"
		  },
		  {
		    "city": "Ipswich",
		    "country": "Australia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.ipswich.qld/"
		  },
		  {
		    "city": "Maitland",
		    "country": "Australia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.maitland.au/"
		  },
		  {
		    "city": "Melbourne",
		    "country": "Australia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Melbourne/"
		  },
		  {
		    "city": "Perth",
		    "country": "Australia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.perth/"
		  },
		  {
		    "city": "Rockhampton",
		    "country": "Australia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.rockhampton/"
		  },
		  {
		    "city": "Sydney",
		    "country": "Australia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sydney.au/"
		  },
		  {
		    "city": "Townsville",
		    "country": "Australia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.townsville/"
		  },
		  {
		    "city": "Wagga Wagga",
		    "country": "Australia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.wagga/"
		  },
		  {
		    "city": "Wollongong",
		    "country": "Australia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.wollongong/"
		  },
		  {
		    "city": "Graz",
		    "country": "Austria",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.graz/"
		  },
		  {
		    "city": "Innsbruck",
		    "country": "Austria",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.innsbruck/"
		  },
		  {
		    "city": "Vienna",
		    "country": "Austria",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.vienna.austria/"
		  },
		  {
		    "city": "Baku",
		    "country": "Azerbaijan",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.baku/"
		  },
		  {
		    "city": "Chittagong",
		    "country": "Bangladesh",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.ctg/"
		  },
		  {
		    "city": "Dhaka",
		    "country": "Bangladesh",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.dhaka/"
		  },
		  {
		    "city": "Feni",
		    "country": "Bangladesh",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.feni/"
		  },
		  {
		    "city": "Rangpur",
		    "country": "Bangladesh",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.rangpur/"
		  },
		  {
		    "city": "Sylhet",
		    "country": "Bangladesh",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sylhet/"
		  },
		  {
		    "city": "Bridgetown",
		    "country": "Barbados",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.barbados"
		  },
		  {
		    "city": "Brest",
		    "country": "Belarus",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.brest/"
		  },
		  {
		    "city": "Gomel",
		    "country": "Belarus",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.gomel/"
		  },
		  {
		    "city": "Minsk",
		    "country": "Belarus",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Minsk/"
		  },
		  {
		    "city": "Antwerp",
		    "country": "Belgium",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.antwerp/"
		  },
		  {
		    "city": "Brussels",
		    "country": "Belgium",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.brussels/"
		  },
		  {
		    "city": "Gent",
		    "country": "Belgium",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.gent/"
		  },
		  {
		    "city": "Leuven",
		    "country": "Belgium",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.leuven/"
		  },
		  {
		    "city": "Belize",
		    "country": "Belize",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.belize/"
		  },
		  {
		    "city": "Louisville",
		    "country": "Belize",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Louisville"
		  },
		  {
		    "city": "Cotonou",
		    "country": "Benin",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.cotonou/"
		  },
		  {
		    "city": "Hamilton",
		    "country": "Bermuda",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.hamilton.bermuda/"
		  },
		  {
		    "city": "Cochabamba",
		    "country": "Bolivia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Cochabamba/"
		  },
		  {
		    "city": "Sucre",
		    "country": "Bolivia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Sucre/"
		  },
		  {
		    "city": "La Paz",
		    "country": "Bolivia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.La.Paz/"
		  },
		  {
		    "city": "Santa Cruz",
		    "country": "Bolivia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.SC/"
		  },
		  {
		    "city": "Banja Luka",
		    "country": "Bosnia and Herzegovina",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.banja.luka/"
		  },
		  {
		    "city": "Bihac",
		    "country": "Bosnia and Herzegovina",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bihac/"
		  },
		  {
		    "city": "Bijeljina",
		    "country": "Bosnia and Herzegovina",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bijeljina/"
		  },
		  {
		    "city": "Mostar",
		    "country": "Bosnia and Herzegovina",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.mostar/"
		  },
		  {
		    "city": "Sarajevo",
		    "country": "Bosnia and Herzegovina",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sarajevo"
		  },
		  {
		    "city": "Srebrenica",
		    "country": "Bosnia and Herzegovina",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.srebrenica/"
		  },
		  {
		    "city": "Travnik",
		    "country": "Bosnia and Herzegovina",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.travnik/"
		  },
		  {
		    "city": "Tuzla",
		    "country": "Bosnia and Herzegovina",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.tuzla/"
		  },
		  {
		    "city": "Zenica",
		    "country": "Bosnia and Herzegovina",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bih.zenica/"
		  },
		  {
		    "city": "Maun",
		    "country": "Botswana",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.maun/"
		  },
		  {
		    "city": "Águas de São Pedro",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.aguas.de.sao.pedro/"
		  },
		  {
		    "city": "Americana",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.americana/"
		  },
		  {
		    "city": "Apucarana",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.your.apucarana.parana/"
		  },
		  {
		    "city": "Araraquara",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.araraquara/"
		  },
		  {
		    "city": "Aracaju",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.aracaju/"
		  },
		  {
		    "city": "Balneario Camboriu",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bc/"
		  },
		  {
		    "city": "Bauru",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bauru/"
		  },
		  {
		    "city": "Belem",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.belem/"
		  },
		  {
		    "city": "Belo Horizonte",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.belo.horizonte/"
		  },
		  {
		    "city": "Blumenau",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.blumenau/"
		  },
		  {
		    "city": "Boa Vista",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.boa.vista/"
		  },
		  {
		    "city": "Brasilia",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.brasilia/"
		  },
		  {
		    "city": "Brotas",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.brotas.sp"
		  },
		  {
		    "city": "Campina Grande",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/907676752679032/"
		  },
		  {
		    "city": "Campinas",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.campinas/"
		  },
		  {
		    "city": "Campo Bom",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.campo.bom/"
		  },
		  {
		    "city": "Campo Grande",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/768732203272622/"
		  },
		  {
		    "city": "Caruaru",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.caruaru/"
		  },
		  {
		    "city": "Caxias do Sul",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.caxias.do.sul/"
		  },
		  {
		    "city": "Chapeco",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.chapeco/"
		  },
		  {
		    "city": "Cosmópolis",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.cosmopolis"
		  },
		  {
		    "city": "Cuiabá",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.cuiaba/"
		  },
		  {
		    "city": "Curitiba",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.curitiba/"
		  },
		  {
		    "city": "Engenheiro Coelho",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.engenheiro.coelho/"
		  },
		  {
		    "city": "Florianopolis",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.florianopolis/"
		  },
		  {
		    "city": "Fortaleza",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.group.fortaleza/"
		  },
		  {
		    "city": "Franca",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.franca/"
		  },
		  {
		    "city": "Goiania",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.goiania/"
		  },
		  {
		    "city": "Governador Valadares",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.governadorvaladares/"
		  },
		  {
		    "city": "Guaratingueta",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.guaratingueta/"
		  },
		  {
		    "city": "Guarapuava",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.guarapuava/"
		  },
		  {
		    "city": "Ibirama",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.ibirama.sc/"
		  },
		  {
		    "city": "Itajuba",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.itajuba/"
		  },
		  {
		    "city": "Jacarei",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sao.paulo.jacarei/"
		  },
		  {
		    "city": "Joao Pessoa",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.joao.pessoa/"
		  },
		  {
		    "city": "Joinville",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.joinville/"
		  },
		  {
		    "city": "Juiz de Fora",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.juiz.de.fora/"
		  },
		  {
		    "city": "Lajeado",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.lajeado/"
		  },
		  {
		    "city": "Londrina",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.londrina/"
		  },
		  {
		    "city": "Lucas do Rio Verde",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/1683221241966841/"
		  },
		  {
		    "city": "Manaus",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.manaus/"
		  },
		  {
		    "city": "Maceió",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.alagoas/"
		  },
		  {
		    "city": "Maringa",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/freecodecampmga/"
		  },
		  {
		    "city": "Natal",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.natal"
		  },
		  {
		    "city": "Niterói",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.niteroi/"
		  },
		  {
		    "city": "Olinda",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.olinda/"
		  },
		  {
		    "city": "Ouro Fino",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.ouro.fino.mg/"
		  },
		  {
		    "city": "Porto Alegre",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.porto.alegre.rs/"
		  },
		  {
		    "city": "Porto Velho",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.porto.velho/"
		  },
		  {
		    "city": "Recife",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.recife"
		  },
		  {
		    "city": "Riberão Preto",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/fcc.ribeiraopreto/"
		  },
		  {
		    "city": "Rio das Ostras",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.rio.das.ostras/"
		  },
		  {
		    "city": "Rio de Janeiro",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.rio.de.janeiro/"
		  },
		  {
		    "city": "Salvador",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.salvador/"
		  },
		  {
		    "city": "Santos",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.santos"
		  },
		  {
		    "city": "Sao Carlos",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sao.carlos"
		  },
		  {
		    "city": "São Lourenço",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sao.lourenco/"
		  },
		  {
		    "city": "Sao Joao da Boa Vista",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sao.joao.da.boa.vista/"
		  },
		  {
		    "city": "São José do Rio Preto",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.saojosedoriopreto/"
		  },
		  {
		    "city": "Sao Jose dos Campos",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sjc/"
		  },
		  {
		    "city": "Sao Luis",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sao.luis"
		  },
		  {
		    "city": "Sao Paulo",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sao.paulo/"
		  },
		  {
		    "city": "Sobral",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sobral/"
		  },
		  {
		    "city": "Sorocaba",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sorocaba.sp/"
		  },
		  {
		    "city": "Teresina",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.teresina.piaui/"
		  },
		  {
		    "city": "Timbó",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.timbo/"
		  },
		  {
		    "city": "Uberlandia",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.uberlandia/"
		  },
		  {
		    "city": "Vitória",
		    "country": "Brazil",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.vitoria.e.regiao.metropolitana.es/"
		  },
		  {
		    "city": "Bandar Seri Begawan",
		    "country": "Brunei",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.brunei.darussalam/"
		  },
		  {
		    "city": "Burgas",
		    "country": "Bulgaria",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Burgas/"
		  },
		  {
		    "city": "Sofia",
		    "country": "Bulgaria",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sofia/"
		  },
		  {
		    "city": "Varna",
		    "country": "Bulgaria",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.varna"
		  },
		  {
		    "city": "Veliko Tarnovo",
		    "country": "Bulgaria",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.veliko.tarnovo/"
		  },
		  {
		    "city": "Phnom Penh",
		    "country": "Cambodia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.phnompenh.cambodia/"
		  },
		  {
		    "city": "Bamenda",
		    "country": "Cameroon",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.your.Bamenda/"
		  },
		  {
		    "city": "Buea",
		    "country": "Cameroon",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.buea/"
		  },
		  {
		    "city": "Yaounde",
		    "country": "Cameroon",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.yaounde"
		  },
		  {
		    "city": "Douala",
		    "country": "Cameroon",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.douala/"
		  },
		  {
		    "city": "Dschang",
		    "country": "Cameroon",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.dschang/"
		  },
		  {
		    "city": "Calgary",
		    "region": "Alberta",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.calgary/"
		  },
		  {
		    "city": "Canmore",
		    "region": "Alberta",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Canmore.Alberta/"
		  },
		  {
		    "city": "Edmonton",
		    "region": "Alberta",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.edmonton/"
		  },
		  {
		    "city": "Abbotsford",
		    "region": "British Columbia",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.abbotsford/"
		  },
		  {
		    "city": "Fort St. John",
		    "region": "British Columbia",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.fort.st.john/"
		  },
		  {
		    "city": "Hazelton",
		    "region": "British Columbia",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.hazelton.britishcolumbia/"
		  },
		  {
		    "city": "Kamloops",
		    "region": "British Columbia",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kamloops/"
		  },
		  {
		    "city": "Kelowna",
		    "region": "British Columbia",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kelowna/"
		  },
		  {
		    "city": "Nelson",
		    "region": "British Columbia",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.nelson.bc/"
		  },
		  {
		    "city": "New Westminster",
		    "region": "British Columbia",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.new.westminster/"
		  },
		  {
		    "city": "Niagara Falls",
		    "region": "British Columbia",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.niagara.falls.on"
		  },
		  {
		    "city": "Prince George",
		    "region": "British Columbia",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.princegeorge/"
		  },
		  {
		    "city": "Surrey",
		    "region": "British Columbia",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.surrey/"
		  },
		  {
		    "city": "Terrace",
		    "region": "British Columbia",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.terrace/"
		  },
		  {
		    "city": "Vancouver",
		    "region": "British Columbia",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.vancouver.bc.canada/"
		  },
		  {
		    "city": "Victoria",
		    "region": "British Columbia",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.victoria.bc.canada/"
		  },
		  {
		    "city": "Winnipeg",
		    "region": "Manitoba",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.winnipeg/"
		  },
		  {
		    "city": "Fredericton",
		    "region": "New Brunswick",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Fredericton/"
		  },
		  {
		    "city": "Moncton",
		    "region": "New Brunswick",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Moncton/"
		  },
		  {
		    "city": "St. John's",
		    "region": "New Foundland",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.st.johns/"
		  },
		  {
		    "city": "Bridgewater",
		    "region": "Nova Scotia",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bridgewater.ns/"
		  },
		  {
		    "city": "Halifax",
		    "region": "Nova Scotia",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.halifax/"
		  },
		  {
		    "city": "Sydney",
		    "region": "Nova Scotia",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sydney.ns/"
		  },
		  {
		    "city": "Barrie",
		    "region": "Ontario",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Barrie.Ontario/"
		  },
		  {
		    "city": "Burlington",
		    "region": "Ontario",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.burlington/"
		  },
		  {
		    "city": "Cambridge",
		    "region": "Ontario",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Cambridge.ON.Canada/"
		  },
		  {
		    "city": "Hamilton",
		    "region": "Ontario",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.hamilton/"
		  },
		  {
		    "city": "Kingston",
		    "region": "Ontario",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kingston.ontario/"
		  },
		  {
		    "city": "Kitchener",
		    "region": "Ontario",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kitchener.waterloo.on/"
		  },
		  {
		    "city": "London",
		    "region": "Ontario",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.london.on/"
		  },
		  {
		    "city": "Markham",
		    "region": "Ontario",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.markham/"
		  },
		  {
		    "city": "Milton",
		    "region": "Ontario",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.milton/"
		  },
		  {
		    "city": "Mississauga",
		    "region": "Ontario",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sauga"
		  },
		  {
		    "city": "North Bay",
		    "region": "Ontario",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.north.bay/"
		  },
		  {
		    "city": "North York",
		    "region": "Ontario",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.north.york/"
		  },
		  {
		    "city": "Ottawa",
		    "region": "Ontario",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.ottawa/"
		  },
		  {
		    "city": "Owen Sound",
		    "region": "Ontario",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.owen.sound"
		  },
		  {
		    "city": "Peterborough",
		    "region": "Ontario",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.peterborough/"
		  },
		  {
		    "city": "Richmond Hill",
		    "region": "Ontario",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.richmond.hill/"
		  },
		  {
		    "city": "Scarborough",
		    "region": "Ontario",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.scarborough/"
		  },
		  {
		    "city": "Toronto",
		    "region": "Ontario",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.to/"
		  },
		  {
		    "city": "Waterloo",
		    "region": "Ontario",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kitchener.waterloo.on/"
		  },
		  {
		    "city": "Moose Jaw",
		    "region": "Saskatchewan",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.moosejaw/"
		  },
		  {
		    "city": "Regina",
		    "region": "Saskatchewan",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.regina/"
		  },
		  {
		    "city": "Montreal",
		    "region": "Québec",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.montreal/"
		  },
		  {
		    "city": "Sherbrooke",
		    "region": "Québec",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sherbrooke/"
		  },
		  {
		    "city": "Québec",
		    "region": "Québec",
		    "country": "Canada",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.quebec.city/"
		  },
		  {
		    "city": "Concepción",
		    "country": "Chile",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.concepcion"
		  },
		  {
		    "city": "Santiago",
		    "country": "Chile",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.santiago/"
		  },
		  {
		    "city": "Valdivia",
		    "country": "Chile",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.valdivia/"
		  },
		  {
		    "city": "Valparaiso",
		    "country": "Chile",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.valparaiso/"
		  },
		  {
		    "city": "Anshun",
		    "country": "China",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.anshun/"
		  },
		  {
		    "city": "Beijing",
		    "country": "China",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.beijing/"
		  },
		  {
		    "city": "Changchun",
		    "country": "China",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.changchun/"
		  },
		  {
		    "city": "Changsha",
		    "country": "China",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.changsha/"
		  },
		  {
		    "city": "Chengdu",
		    "country": "China",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.chengdu/"
		  },
		  {
		    "city": "Chongqing",
		    "country": "China",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.chongqing/"
		  },
		  {
		    "city": "Dalian",
		    "country": "China",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.dalian1"
		  },
		  {
		    "city": "Guangzhou",
		    "country": "China",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.guangzhou/"
		  },
		  {
		    "city": "Hangzhou",
		    "country": "China",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.hangzhou/"
		  },
		  {
		    "city": "Hefei",
		    "country": "China",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.hefei1/"
		  },
		  {
		    "city": "Hohhot",
		    "country": "China",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.hohhot/"
		  },
		  {
		    "city": "Jincheng",
		    "country": "China",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.jincheng/"
		  },
		  {
		    "city": "Kangbashen",
		    "country": "China",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kangbashen/"
		  },
		  {
		    "city": "Linyi",
		    "country": "China",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Linyi/"
		  },
		  {
		    "city": "Nanchang",
		    "country": "China",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Nanchang/"
		  },
		  {
		    "city": "Nanjing",
		    "country": "China",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.nanjing/"
		  },
		  {
		    "city": "Ningbo",
		    "country": "China",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.ningbo/"
		  },
		  {
		    "city": "Shanghai",
		    "country": "China",
		    "facebook": "https://www.facebook.com/groups/963661723712718/"
		  },
		  {
		    "city": "Shenyang",
		    "country": "China",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Shenyang/"
		  },
		  {
		    "city": "Shenzhen",
		    "country": "China",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.shenzhen/"
		  },
		  {
		    "city": "Shijiazhuang",
		    "country": "China",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.shijiazhuang/"
		  },
		  {
		    "city": "Suzhou",
		    "country": "China",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.suzhou/"
		  },
		  {
		    "city": "Tianjin",
		    "country": "China",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Tianjin/"
		  },
		  {
		    "city": "Wuhan",
		    "country": "China",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.wuhan/"
		  },
		  {
		    "city": "Xiamen",
		    "country": "China",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.xiamen/"
		  },
		  {
		    "city": "XiAn",
		    "country": "China",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.china.xian/"
		  },
		  {
		    "city": "Zhengzhou",
		    "country": "China",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.zhengzhou/"
		  },
		  {
		    "city": "Barrancabermeja",
		    "country": "Colombia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.barrancabermeja/"
		  },
		  {
		    "city": "Barranquilla",
		    "country": "Colombia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.barranquilla.co/"
		  },
		  {
		    "city": "Bogota",
		    "country": "Colombia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bogota/"
		  },
		  {
		    "city": "Bucaramanga",
		    "country": "Colombia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bucaramanga/"
		  },
		  {
		    "city": "Cali",
		    "country": "Colombia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.cali/"
		  },
		  {
		    "city": "Cartagena",
		    "country": "Colombia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.cartagena/"
		  },
		  {
		    "city": "Manizales",
		    "country": "Colombia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.manizales/"
		  },
		  {
		    "city": "Medellin",
		    "country": "Colombia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Medellin.col/"
		  },
		  {
		    "city": "Pasto",
		    "country": "Colombia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.pasto/"
		  },
		  {
		    "city": "Popayan",
		    "country": "Colombia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.popayan/"
		  },
		  {
		    "city": "Riohacha",
		    "country": "Colombia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.riohacha/"
		  },
		  {
		    "city": "Quibdo",
		    "country": "Colombia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.quibdo/"
		  },
		  {
		    "city": "Villavicencio",
		    "country": "Colombia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.villavicencio/"
		  },
		  {
		    "city": "San Jose",
		    "country": "Costa Rica",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.san.jose.costa.rica/"
		  },
		  {
		    "city": "San Pedro",
		    "country": "Costa Rica",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.costa.rica.san.pedro/"
		  },
		  {
		    "city": "Dubrovnik",
		    "country": "Croatia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.dubrovnik/"
		  },
		  {
		    "city": "Karlovac",
		    "country": "Croatia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.karlovac/"
		  },
		  {
		    "city": "Krk",
		    "country": "Croatia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.krk/"
		  },
		  {
		    "city": "Osijek",
		    "country": "Croatia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.osijek/"
		  },
		  {
		    "city": "Rijeka",
		    "country": "Croatia",
		    "facebook": "https://www.facebook.com/groups/542662595902378/"
		  },
		  {
		    "city": "Split",
		    "country": "Croatia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.split/"
		  },
		  {
		    "city": "Varazdin",
		    "country": "Croatia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.varazdin"
		  },
		  {
		    "city": "Vinkovci",
		    "country": "Croatia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.vinkovci/"
		  },
		  {
		    "city": "Zagreb",
		    "country": "Croatia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.zagreb/"
		  },
		  {
		    "city": "Guantánamo",
		    "country": "Cuba",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.gtmo/"
		  },
		  {
		    "city": "La Habana",
		    "country": "Cuba",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.havana/"
		  },
		  {
		    "city": "Villa Clara",
		    "country": "Cuba",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.villa.clara/"
		  },
		  {
		    "city": "Limassol",
		    "country": "Cyprus",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.limassol/"
		  },
		  {
		    "city": "Nicosia",
		    "country": "Cyprus",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.nicosia/"
		  },
		  {
		    "city": "Brno",
		    "country": "Czech Republic",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.brno/"
		  },
		  {
		    "city": "Most",
		    "country": "Czech Republic",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.most/"
		  },
		  {
		    "city": "Ostrava",
		    "country": "Czech Republic",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.ostrava/"
		  },
		  {
		    "city": "Prague",
		    "country": "Czech Republic",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.prague/"
		  },
		  {
		    "city": "Znojmo",
		    "country": "Czech Republic",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.znojmo/"
		  },
		  {
		    "city": "Aalborg",
		    "country": "Denmark",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.aalborg/"
		  },
		  {
		    "city": "Aarhus",
		    "country": "Denmark",
		    "facebook": "https://www.facebook.com/groups/FreeCodeCampAarhus"
		  },
		  {
		    "city": "Copenhagen",
		    "country": "Denmark",
		    "facebook": "https://www.facebook.com/groups/fre.code.camp.copemhagen/"
		  },
		  {
		    "city": "Hostelbro",
		    "country": "Denmark",
		    "facebook": "https://www.facebook.com/groups/Free.Code.Camp.Holstebro/"
		  },
		  {
		    "city": "Odense",
		    "country": "Denmark",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.odense/"
		  },
		  {
		    "city": "Roskilde",
		    "country": "Denmark",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.roskilde/"
		  },
		  {
		    "city": "Santiago",
		    "country": "Dominican Republic",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.santiago.dr/"
		  },
		  {
		    "city": "Santo Domingo",
		    "country": "Dominican Republic",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.dr/"
		  },
		  {
		    "city": "Cuenca",
		    "country": "Ecuador",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.cuenca/"
		  },
		  {
		    "city": "Guayaquil",
		    "country": "Ecuador",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.guayaqui.ecuador/"
		  },
		  {
		    "city": "Santo Domingo",
		    "country": "Ecuador",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.santo.domingo.ecuador/"
		  },
		  {
		    "city": "Quito",
		    "country": "Ecuador",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.quito/"
		  },
		  {
		    "city": "Al-Mansoura",
		    "country": "Egypt",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.almansoura/"
		  },
		  {
		    "city": "Alexandria",
		    "country": "Egypt",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.alex/"
		  },
		  {
		    "city": "Asyut",
		    "country": "Egypt",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.assiut/"
		  },
		  {
		    "city": "Cairo",
		    "country": "Egypt",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.cairo/"
		  },
		  {
		    "city": "Damanhur",
		    "country": "Egypt",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.damanhur"
		  },
		  {
		    "city": "El Asher (10th of Ramadan)",
		    "country": "Egypt",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.10th.of.ramadan/"
		  },
		  {
		    "city": "Portsaid",
		    "country": "Egypt",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.portsaid"
		  },
		  {
		    "city": "Sharqiyah",
		    "country": "Egypt",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sharkia/"
		  },
		  {
		    "city": "Sohag",
		    "country": "Egypt",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sohag/"
		  },
		  {
		    "city": "Tanta",
		    "country": "Egypt",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.tanta/"
		  },
		  {
		    "city": "San Miguel",
		    "country": "El Salvador",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sv/"
		  },
		  {
		    "city": "San Salvador",
		    "country": "El Salvador",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.san.salvador/"
		  },
		  {
		    "city": "Bedford",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bedford/"
		  },
		  {
		    "city": "Bicester",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/1011056575615730/"
		  },
		  {
		    "city": "Birmingham",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.birmingham.uk/"
		  },
		  {
		    "city": "Bournemouth",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bournemouth.UK/"
		  },
		  {
		    "city": "Brighton",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.brighton/"
		  },
		  {
		    "city": "Bristol",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bristol.uk/"
		  },
		  {
		    "city": "Bury St Edmunds",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Bury.St.Edmunds/"
		  },
		  {
		    "city": "Cambridge",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.cambridge/"
		  },
		  {
		    "city": "Cheltenham",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.cheltenham/"
		  },
		  {
		    "city": "Chester",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.chester"
		  },
		  {
		    "city": "Colchester",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.colchester/"
		  },
		  {
		    "city": "Coventry",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.coventry/"
		  },
		  {
		    "city": "Derby",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.derby/"
		  },
		  {
		    "city": "Exeter",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.exeter.uk/"
		  },
		  {
		    "city": "Guildford",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.guildford.uk/"
		  },
		  {
		    "city": "Hove",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.hove"
		  },
		  {
		    "city": "Huddersfield",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.huddersfield/"
		  },
		  {
		    "city": "Hull",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.hull/"
		  },
		  {
		    "city": "Ipswich",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.ipswich/"
		  },
		  {
		    "city": "Kent",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kent/"
		  },
		  {
		    "city": "Kingston upon Hull",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kingston.upon.hull/"
		  },
		  {
		    "city": "Leeds",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.leeds/"
		  },
		  {
		    "city": "Leicester",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.leicester.uk/"
		  },
		  {
		    "city": "Liverpool",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.liverpool/"
		  },
		  {
		    "city": "London",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.london/"
		  },
		  {
		    "city": "Manchester",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.manchester/"
		  },
		  {
		    "city": "Milton Keynes",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.milton.keynes/"
		  },
		  {
		    "city": "Newcastle",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.newcastle/"
		  },
		  {
		    "city": "Northampton",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.northampton/"
		  },
		  {
		    "city": "Norwich",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.norwich.england/"
		  },
		  {
		    "city": "Nottingham",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.nottingham/"
		  },
		  {
		    "city": "Portsmouth",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.portsmouth/"
		  },
		  {
		    "city": "Plymouth",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.plymouth/"
		  },
		  {
		    "city": "Preston",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.preston/"
		  },
		  {
		    "city": "Reading",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.reading/"
		  },
		  {
		    "city": "Salisbury",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.salisbury/"
		  },
		  {
		    "city": "Sheffield",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sheffield/"
		  },
		  {
		    "city": "Sleaford",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sleaford/"
		  },
		  {
		    "city": "Southampton",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/FCC.Southampton/"
		  },
		  {
		    "city": "Stoke-on-Trent",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.stoke.on.trent/"
		  },
		  {
		    "city": "Sunderland",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sunderland.uk/"
		  },
		  {
		    "city": "Telford",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.telford/"
		  },
		  {
		    "city": "Warrington",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.warrington/"
		  },
		  {
		    "city": "Wearside",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sunderland.tyne.and.wear/"
		  },
		  {
		    "city": "Welwyn + Hatfield",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.welwyn.hatfield/"
		  },
		  {
		    "city": "Worcester",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.worcester.uk/"
		  },
		  {
		    "city": "York",
		    "country": "England",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.york/"
		  },
		  {
		    "city": "Tallinn",
		    "country": "Estonia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.tallinn/"
		  },
		  {
		    "city": "Addis Ababa",
		    "country": "Ethiopia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.addis.abeba/"
		  },
		  {
		    "city": "Suva",
		    "country": "Fiji",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.suva/"
		  },
		  {
		    "city": "Helsinki",
		    "country": "Finland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.helsinki/"
		  },
		  {
		    "city": "Joensuu",
		    "country": "Finland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.joensuu/"
		  },
		  {
		    "city": "Jyväskylä",
		    "country": "Finland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.jyvaskyla/"
		  },
		  {
		    "city": "Kuopio",
		    "country": "Finland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kuopio/"
		  },
		  {
		    "city": "Lappeenranta",
		    "country": "Finland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.lappeenranta/"
		  },
		  {
		    "city": "Oulu",
		    "country": "Finland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.finland.oulu/"
		  },
		  {
		    "city": "Tampere",
		    "country": "Finland",
		    "facebook": "https://www.facebook.com/groups/Free.Code.Camp.Tampere/"
		  },
		  {
		    "city": "Turku",
		    "country": "Finland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.turku/"
		  },
		  {
		    "city": "Vaasa",
		    "country": "Finland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.vaasa/"
		  },
		  {
		    "city": "Annemasse",
		    "country": "France",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.annemasse/"
		  },
		  {
		    "city": "Bordeaux",
		    "country": "France",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.your.city.Bordeaux/"
		  },
		  {
		    "city": "Chelles",
		    "country": "France",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.chelles/"
		  },
		  {
		    "city": "Grenoble",
		    "country": "France",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.grenoble/"
		  },
		  {
		    "city": "Lille",
		    "country": "France",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.lille/"
		  },
		  {
		    "city": "Lyon",
		    "country": "France",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.lyon/"
		  },
		  {
		    "city": "Macon",
		    "country": "France",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.macon/"
		  },
		  {
		    "city": "Marseille",
		    "country": "France",
		    "facebook": "http://facebook.com/groups/free.code.camp.marseille"
		  },
		  {
		    "city": "Montpellier",
		    "country": "France",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.montpellier/"
		  },
		  {
		    "city": "Nancy",
		    "country": "France",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.nancy/"
		  },
		  {
		    "city": "Nantes",
		    "country": "France",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.nantes/"
		  },
		  {
		    "city": "Nice",
		    "country": "France",
		    "facebook": "https://www.facebook.com/groups/Free.Code.Camp.Nice/"
		  },
		  {
		    "city": "Orleans",
		    "country": "France",
		    "facebook": "https://www.facebook.com/groups/free.code.Camp.Orleans"
		  },
		  {
		    "city": "Paris",
		    "country": "France",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.paris/"
		  },
		  {
		    "city": "Poitiers",
		    "country": "France",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.poitiers/"
		  },
		  {
		    "city": "Reims",
		    "country": "France",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.reims/"
		  },
		  {
		    "city": "Rennes",
		    "country": "France",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.rennes/"
		  },
		  {
		    "city": "Strasbourg",
		    "country": "France",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.strasbourg/"
		  },
		  {
		    "city": "Toulouse",
		    "country": "France",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.toulouse/"
		  },
		  {
		    "city": "Vannes",
		    "country": "France",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.vannes/"
		  },
		  {
		    "city": "Tbilisi",
		    "country": "Georgia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.tbilisi/"
		  },
		  {
		    "city": "Berlin",
		    "country": "Germany",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.berlin/"
		  },
		  {
		    "city": "Bielefeld",
		    "country": "Germany",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bielefeld/"
		  },
		  {
		    "city": "Bremen",
		    "country": "Germany",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bremen"
		  },
		  {
		    "city": "Bodensee",
		    "country": "Germany",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bodensee/"
		  },
		  {
		    "city": "Bonn",
		    "country": "Germany",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bonn/"
		  },
		  {
		    "city": "Braunschweig",
		    "country": "Germany",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.braunschweig/"
		  },
		  {
		    "city": "Chemnitz",
		    "country": "Germany",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.chemnitz/"
		  },
		  {
		    "city": "Dresden",
		    "country": "Germany",
		    "facebook": "https://www.facebook.com/groups/766727883464168/"
		  },
		  {
		    "city": "Duisburg",
		    "country": "Germany",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.duisburg/"
		  },
		  {
		    "city": "Düsseldorf",
		    "country": "Germany",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.duesseldorf/"
		  },
		  {
		    "city": "Flensburg",
		    "country": "Germany",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.flensburg.germany/"
		  },
		  {
		    "city": "Forchheim",
		    "country": "Germany",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.forchheim.bayern/"
		  },
		  {
		    "city": "Frankfurt",
		    "country": "Germany",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.frankfurt.main/"
		  },
		  {
		    "city": "Gaggenau",
		    "country": "Germany",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.gaggenau/"
		  },
		  {
		    "city": "Göttingen",
		    "country": "Germany",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.goettingen/"
		  },
		  {
		    "city": "Halle",
		    "country": "Germany",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.halle.saale/"
		  },
		  {
		    "city": "Hamburg",
		    "country": "Germany",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.hamburg/"
		  },
		  {
		    "city": "Hamm",
		    "country": "Germany",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.hamm/"
		  },
		  {
		    "city": "Hanover",
		    "country": "Germany",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.hanover.germany/"
		  },
		  {
		    "city": "Hohenfels",
		    "country": "Germany",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.hohenfels/"
		  },
		  {
		    "city": "Kiel",
		    "country": "Germany",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kiel/"
		  },
		  {
		    "city": "Koblenz",
		    "country": "Germany",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.koblenz/"
		  },
		  {
		    "city": "Koeln",
		    "country": "Germany",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.koeln/"
		  },
		  {
		    "city": "Leipzig",
		    "country": "Germany",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.leipzig/"
		  },
		  {
		    "city": "Lingen",
		    "country": "Germany",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.lingen/"
		  },
		  {
		    "city": "Mönchengladbach",
		    "country": "Germany",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.moenchengladbach/"
		  },
		  {
		    "city": "Münster",
		    "country": "Germany",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.muenster/"
		  },
		  {
		    "city": "Munich",
		    "country": "Germany",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.munich/"
		  },
		  {
		    "city": "Nürnberg",
		    "country": "Germany",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.nuernberg/"
		  },
		  {
		    "city": "Offenburg",
		    "country": "Germany",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.offenburg/"
		  },
		  {
		    "city": "Passau",
		    "country": "Germany",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.passau/"
		  },
		  {
		    "city": "Stuttgart",
		    "country": "Germany",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.stuttgart/"
		  },
		  {
		    "city": "Wuerzburg",
		    "country": "Germany",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.wuerzburg/"
		  },
		  {
		    "city": "Wuppertal",
		    "country": "Germany",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.wuppertal/"
		  },
		  {
		    "city": "Accra",
		    "country": "Ghana",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.accra/"
		  },
		  {
		    "city": "Kumasi",
		    "country": "Ghana",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kumasi/"
		  },
		  {
		    "city": "Alexandroupolis",
		    "country": "Greece",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.alexandroupolis"
		  },
		  {
		    "city": "Athens",
		    "country": "Greece",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.athens.greece/"
		  },
		  {
		    "city": "Heraklion",
		    "country": "Greece",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.heraklion/"
		  },
		  {
		    "city": "Ioannina",
		    "country": "Greece",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.ioannina/"
		  },
		  {
		    "city": "Katerini",
		    "country": "Greece",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.katerini/"
		  },
		  {
		    "city": "Naxos",
		    "country": "Greece",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.naxos.gr"
		  },
		  {
		    "city": "Patras",
		    "country": "Greece",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Patras/"
		  },
		  {
		    "city": "Preveza",
		    "country": "Greece",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.preveza/"
		  },
		  {
		    "city": "Thessaloniki",
		    "country": "Greece",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.thessaloniki/"
		  },
		  {
		    "city": "Xanthi",
		    "country": "Greece",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.your.xanthi/"
		  },
		  {
		    "city": "Conakry",
		    "country": "Guinea",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.conakry/"
		  },
		  {
		    "city": "Guatemala City",
		    "country": "Guatemala",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.guatemala/"
		  },
		  {
		    "city": "Port-au-Prince",
		    "country": "Haiti",
		    "facebook": "https://www.facebook.com/groups/1123827534318839/"
		  },
		  {
		    "city": "Tegucigalpa",
		    "country": "Honduras",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Honduras/"
		  },
		  {
		    "city": "Hong Kong",
		    "country": "Hong Kong",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.hk/"
		  },
		  {
		    "city": "Budapest",
		    "country": "Hungary",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.budapest/"
		  },
		  {
		    "city": "Miskolc",
		    "country": "Hungary",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.miskolc/"
		  },
		  {
		    "city": "Szeged",
		    "country": "Hungary",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.szeged/"
		  },
		  {
		    "city": "Reykjavik",
		    "country": "Iceland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.reykjavik/"
		  },
		  {
		    "city": "Bapatla",
		    "region": "Andhra Pradesh",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bapatla/"
		  },
		  {
		    "city": "Guntur",
		    "region": "Andhra Pradesh",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.guntur/"
		  },
		  {
		    "city": "Kakinada",
		    "region": "Andhra Pradesh",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kakinada/"
		  },
		  {
		    "city": "Narasaopet",
		    "region": "Andhra Pradesh",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Narasaraopet/"
		  },
		  {
		    "city": "Nellore",
		    "region": "Andhra Pradesh",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.your.city.nellore/"
		  },
		  {
		    "city": "Tanuku",
		    "region": "Andhra Pradesh",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/Free.code.camp.Tanuku/"
		  },
		  {
		    "city": "Tirupathi",
		    "region": "Andhra Pradesh",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.tirupathi/"
		  },
		  {
		    "city": "Vijayawada",
		    "region": "Andhra Pradesh",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.your.vijayawada/"
		  },
		  {
		    "city": "Vizag",
		    "region": "Andhra Pradesh",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.vizag/"
		  },
		  {
		    "city": "Itanagar",
		    "region": "Arunachal Pradesh",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.itanagar.arunachalpradesh/"
		  },
		  {
		    "city": "Guwahati",
		    "region": "Assam",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.guwahati/"
		  },
		  {
		    "city": "Muzaffarpur",
		    "region": "Bihar",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.muzaffarpur/"
		  },
		  {
		    "city": "Patna",
		    "region": "Bihar",
		    "country": "India",
		    "facebook": "http://www.facebook.com/groups/free.code.camp.patna"
		  },
		  {
		    "city": "Siwan",
		    "region": "Bihar",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Siwan/"
		  },
		  {
		    "city": "Bilaspur",
		    "region": "Chattisgarh",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bilaspur/"
		  },
		  {
		    "city": "Korba",
		    "region": "Chattisgarh",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.korba/"
		  },
		  {
		    "city": "Raipur",
		    "region": "Chattisgarh",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.raipur/"
		  },
		  {
		    "city": "Rajnandgaon",
		    "region": "Chattisgarh",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.rajnandgaon/"
		  },
		  {
		    "city": "Delhi",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.delhi/"
		  },
		  {
		    "city": "Ahmedabad",
		    "region": "Gujarat",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.ahmedabad/"
		  },
		  {
		    "city": "Jamnagar",
		    "region": "Gujarat",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.jamnagar.guj.in/"
		  },
		  {
		    "city": "Rajkot",
		    "region": "Gujarat",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.rajkot/"
		  },
		  {
		    "city": "Surat",
		    "region": "Gujarat",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.surat"
		  },
		  {
		    "city": "Vadodara",
		    "region": "Gujarat",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.vadodara/"
		  },
		  {
		    "city": "Veraval",
		    "region": "Gujarat",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.veraval.gujarat/"
		  },
		  {
		    "city": "Goa",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.goa/"
		  },
		  {
		    "city": "Faridabad",
		    "region": "Haryana",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.faridabad/"
		  },
		  {
		    "city": "Gurgaon",
		    "region": "Haryana",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.gurgaon/"
		  },
		  {
		    "city": "Dharamshala",
		    "region": "Himachal Pradesh",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.dharamshala/"
		  },
		  {
		    "city": "Shimla",
		    "region": "Himachal Pradesh",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.shimla/"
		  },
		  {
		    "city": "Jammu",
		    "region": "Jammu & Kashmir",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.jammu1/"
		  },
		  {
		    "city": "Srinagar",
		    "region": "Jammu & Kashmir",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.srinagar/"
		  },
		  {
		    "city": "Bokaro",
		    "region": "Jharkhand",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.campbokar/"
		  },
		  {
		    "city": "Dhanbad",
		    "region": "Jharkhand",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Dhanbad/"
		  },
		  {
		    "city": "Ranchi",
		    "region": "Jharkhand",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.ranchi/"
		  },
		  {
		    "city": "Bengaluru",
		    "region": "Karnataka",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bengaluru/"
		  },
		  {
		    "city": "Mangalore",
		    "region": "Karnataka",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.mangalore/"
		  },
		  {
		    "city": "Mysore",
		    "region": "Karnataka",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.mysore/"
		  },
		  {
		    "city": "Kannur",
		    "region": "Kerala",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.your.city.kannur/"
		  },
		  {
		    "city": "Kochi",
		    "region": "Kerala",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/1542888942704307"
		  },
		  {
		    "city": "Kozhikode",
		    "region": "Kerala",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kozhikode/"
		  },
		  {
		    "city": "Palakkad",
		    "region": "Kerala",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.palakkad/"
		  },
		  {
		    "city": "Thrissur",
		    "region": "Kerala",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.thrissur/"
		  },
		  {
		    "city": "Trivandrum",
		    "region": "Kerala",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/freecodecamp.trivandrum/"
		  },
		  {
		    "city": "Amravati",
		    "region": "Maharashtra",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.amravati/"
		  },
		  {
		    "city": "Aurangabad",
		    "region": "Maharashtra",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/freecodecampauranagabad/"
		  },
		  {
		    "city": "Jalgaon",
		    "region": "Maharashtra",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.jalgaon/"
		  },
		  {
		    "city": "Mumbai",
		    "region": "Maharashtra",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/frre.code.camp.mumbai/"
		  },
		  {
		    "city": "Nagpur",
		    "region": "Maharashtra",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.nagpore/"
		  },
		  {
		    "city": "Nashik",
		    "region": "Maharashtra",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.your.nashik/"
		  },
		  {
		    "city": "Navi Mumbai",
		    "region": "Maharashtra",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.navi.mumbai/"
		  },
		  {
		    "city": "Pune",
		    "region": "Maharashtra",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.pune/"
		  },
		  {
		    "city": "Bhopal",
		    "region": "Madhya Pradesh",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bhopal/"
		  },
		  {
		    "city": "Gwalior",
		    "region": "Madhya Pradesh",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Gwalior/"
		  },
		  {
		    "city": "Indore",
		    "region": "Madhya Pradesh",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Indore/"
		  },
		  {
		    "city": "Jabalpur",
		    "region": "Madhya Pradesh",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.your.city.jabalpur/"
		  },
		  {
		    "city": "Imphal",
		    "region": "Manipur",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.imphal.manipur/"
		  },
		  {
		    "city": "Shillong",
		    "region": "Meghalaya",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.shillong/"
		  },
		  {
		    "city": "Bhubaneswar",
		    "region": "Orissa",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bhubaneswar/"
		  },
		  {
		    "city": "Chandigarh",
		    "region": "Punjab",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.chandigarh/"
		  },
		  {
		    "city": "Ludhiana",
		    "region": "Punjab",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.ludhiana.punjab/"
		  },
		  {
		    "city": "Patiala",
		    "region": "Punjab",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.patiala/"
		  },
		  {
		    "city": "Pondicherry",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.pondicherry/"
		  },
		  {
		    "city": "Bikaner",
		    "region": "Rajasthan",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bikaner/"
		  },
		  {
		    "city": "Jaipur",
		    "region": "Rajasthan",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.jaipur/"
		  },
		  {
		    "city": "Pilani",
		    "region": "Rajasthan",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.pilani/"
		  },
		  {
		    "city": "Udaipur",
		    "region": "Rajasthan",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.udaipur/"
		  },
		  {
		    "city": "Chennai",
		    "region": "Tamil Nadu",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.chennai/"
		  },
		  {
		    "city": "Coimbatore",
		    "region": "Tamil Nadu",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.coimbatore"
		  },
		  {
		    "city": "Madurai",
		    "region": "Tamil Nadu",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.maduraicity/"
		  },
		  {
		    "city": "Salem",
		    "region": "Tamil Nadu",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.salem/"
		  },
		  {
		    "city": "Tirupur",
		    "region": "Tamil Nadu",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.tirupur/"
		  },
		  {
		    "city": "Hyderabad",
		    "region": "Telengana",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.hyderabad/"
		  },
		  {
		    "city": "Agartala",
		    "region": "Tripura",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.agartala/"
		  },
		  {
		    "city": "Aligarh",
		    "region": "Uttar Pradesh",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/1622011571406263/"
		  },
		  {
		    "city": "Allahabad",
		    "region": "Uttar Pradesh",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.allahabad/"
		  },
		  {
		    "city": "Amethi",
		    "region": "Uttar Pradesh",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/code.camp.amethi/"
		  },
		  {
		    "city": "Dharwad",
		    "region": "Uttar Pradesh",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.dharwad/"
		  },
		  {
		    "city": "Gorakhpur",
		    "region": "Uttar Pradesh",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.gorakhpur/"
		  },
		  {
		    "city": "Greater Noida",
		    "region": "Uttar Pradesh",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.greater.noida/"
		  },
		  {
		    "city": "Jhansi",
		    "region": "Uttar Pradesh",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.jhansi/"
		  },
		  {
		    "city": "Kanpur",
		    "region": "Uttar Pradesh",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.knp/"
		  },
		  {
		    "city": "Lucknow",
		    "region": "Uttar Pradesh",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/1647602228815736/"
		  },
		  {
		    "city": "Noida",
		    "region": "Uttar Pradesh",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.noida/"
		  },
		  {
		    "city": "Meerut",
		    "region": "Uttar Pradesh",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.meerut/"
		  },
		  {
		    "city": "Varanasi",
		    "region": "Uttar Pradesh",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.varanasi/"
		  },
		  {
		    "city": "Dehra Dun",
		    "region": "Uttarakhand",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.dehradun/"
		  },
		  {
		    "city": "Roorke",
		    "region": "Uttarakhand",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/542330719257663/"
		  },
		  {
		    "city": "Asansol",
		    "region": "West Bengal",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.asansol/"
		  },
		  {
		    "city": "Durgapur",
		    "region": "West Bengal",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.durgapur/"
		  },
		  {
		    "city": "Koch Bihar",
		    "region": "West Bengal",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/Free.Code.Camp.KochBihar/"
		  },
		  {
		    "city": "Kolkata",
		    "region": "West Bengal",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kolkata/"
		  },
		  {
		    "city": "Siliguri",
		    "region": "West Bengal",
		    "country": "India",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.siliguri/"
		  },
		  {
		    "city": "Bali",
		    "country": "Indonesia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bali/"
		  },
		  {
		    "city": "Balikpapan",
		    "country": "Indonesia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.balikpapan/"
		  },
		  {
		    "city": "Banda Aceh",
		    "country": "Indonesia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.banda.aceh/"
		  },
		  {
		    "city": "Bandung",
		    "country": "Indonesia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bandung/"
		  },
		  {
		    "city": "Bekasi",
		    "country": "Indonesia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bekasi/"
		  },
		  {
		    "city": "Jakarta",
		    "country": "Indonesia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.jakarta/"
		  },
		  {
		    "city": "Kediri",
		    "country": "Indonesia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kediri/"
		  },
		  {
		    "city": "Lampung",
		    "country": "Indonesia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bandar.lampung/"
		  },
		  {
		    "city": "Makassar",
		    "country": "Indonesia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.makassar/"
		  },
		  {
		    "city": "Malang",
		    "country": "Indonesia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.malang/"
		  },
		  {
		    "city": "Manado",
		    "country": "Indonesia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.manado/"
		  },
		  {
		    "city": "Medan",
		    "country": "Indonesia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.medan/"
		  },
		  {
		    "city": "Nusajaya",
		    "country": "Indonesia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.nusajaya.malaysia//"
		  },
		  {
		    "city": "Ponorogo",
		    "country": "Indonesia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.ponorogo"
		  },
		  {
		    "city": "Pontianak",
		    "country": "Indonesia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.pontianak/"
		  },
		  {
		    "city": "Sampit",
		    "country": "Indonesia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sampit/"
		  },
		  {
		    "city": "Sidoarjo",
		    "country": "Indonesia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sidoarjo/"
		  },
		  {
		    "city": "Solo",
		    "country": "Indonesia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.solo/"
		  },
		  {
		    "city": "Sumba Tengah",
		    "country": "Indonesia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sumba.tengah.nusa.tenggara.timur"
		  },
		  {
		    "city": "Surabaya",
		    "country": "Indonesia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.surabaya.new/"
		  },
		  {
		    "city": "Yogyakarta",
		    "country": "Indonesia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.yogyakarta/"
		  },
		  {
		    "city": "Hamadan",
		    "country": "Iran",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.hamedan"
		  },
		  {
		    "city": "Isfahan",
		    "country": "Iran",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.isfahan/"
		  },
		  {
		    "city": "Tabriz",
		    "country": "Iran",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.tabriz/"
		  },
		  {
		    "city": "Tehran",
		    "country": "Iran",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.tehran/"
		  },
		  {
		    "city": "Masshad",
		    "country": "Iran",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.mashhad/"
		  },
		  {
		    "city": "Urmia",
		    "country": "Iran",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.your.Urmia/"
		  },
		  {
		    "city": "Yazd",
		    "country": "Iran",
		    "facebook": "https://www.facebook.com/groups/233850910333640/"
		  },
		  {
		    "city": "Baghdad",
		    "country": "Iraq",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.baghdad/"
		  },
		  {
		    "city": "Clonmel",
		    "country": "Ireland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.clonmel.ireland/"
		  },
		  {
		    "city": "Cork",
		    "country": "Ireland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.cork.ireland/"
		  },
		  {
		    "city": "Dublin",
		    "country": "Ireland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.dublin/"
		  },
		  {
		    "city": "Galway",
		    "country": "Ireland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.galway/"
		  },
		  {
		    "city": "Limerick",
		    "country": "Ireland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.limerick/"
		  },
		  {
		    "city": "Sligo",
		    "country": "Ireland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sligo/"
		  },
		  {
		    "city": "Waterford",
		    "country": "Ireland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.waterford/"
		  },
		  {
		    "city": "Douglas",
		    "country": "Isle of Man",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.beer.douglas/"
		  },
		  {
		    "city": "Beer Sheva",
		    "country": "Israel",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.beer.sheva/"
		  },
		  {
		    "city": "Haifa",
		    "country": "Israel",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Haifa/"
		  },
		  {
		    "city": "Jerusalem",
		    "country": "Israel",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.jerusalem/"
		  },
		  {
		    "city": "Nazareth",
		    "country": "Israel",
		    "facebook": "https://www.facebook.com/groups/Free.Code.Camp.Nazareth.Israel/"
		  },
		  {
		    "city": "Petah Tiqva",
		    "country": "Israel",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.petah.tiqva/"
		  },
		  {
		    "city": "Pnei Kedem",
		    "country": "Israel",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.pneikedem/"
		  },
		  {
		    "city": "Tel Aviv",
		    "country": "Israel",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Tel.Aviv/"
		  },
		  {
		    "city": "Cagliari",
		    "country": "Italy",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.cagliari/"
		  },
		  {
		    "city": "Camerino",
		    "country": "Italy",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.camerino"
		  },
		  {
		    "city": "Catania",
		    "country": "Italy",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.catania/"
		  },
		  {
		    "city": "Como",
		    "country": "Italy",
		    "facebook": "https://www.facebook.com/groups/free.camp.code.como/"
		  },
		  {
		    "city": "Firenze",
		    "country": "Italy",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.firenze/"
		  },
		  {
		    "city": "Lecce",
		    "country": "Italy",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.lecce/"
		  },
		  {
		    "city": "Milan",
		    "country": "Italy",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.milan/"
		  },
		  {
		    "city": "Napoli",
		    "country": "Italy",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.napoli"
		  },
		  {
		    "city": "Palermo",
		    "country": "Italy",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.palermo/"
		  },
		  {
		    "city": "Parma",
		    "country": "Italy",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.parma/"
		  },
		  {
		    "city": "Pavia",
		    "country": "Italy",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.pavia"
		  },
		  {
		    "city": "Perugia",
		    "country": "Italy",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.perugia.it/"
		  },
		  {
		    "city": "Ravenna",
		    "country": "Italy",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.ravenna/"
		  },
		  {
		    "city": "Roma",
		    "country": "Italy",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.roma/"
		  },
		  {
		    "city": "Siena",
		    "country": "Italy",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.siena/"
		  },
		  {
		    "city": "Torino",
		    "country": "Italy",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.torino/"
		  },
		  {
		    "city": "Venice",
		    "country": "Italy",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.venice/"
		  },
		  {
		    "city": "Abidjan",
		    "country": "Ivory Coast",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.babi/"
		  },
		  {
		    "city": "Kingston",
		    "country": "Jamaica",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kingston.jamaica/"
		  },
		  {
		    "city": "Montego Bay",
		    "country": "Jamaica",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.montego.bay/"
		  },
		  {
		    "city": "Kobe",
		    "country": "Japan",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kobe/"
		  },
		  {
		    "city": "Nagoya",
		    "country": "Japan",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.nagoya/"
		  },
		  {
		    "city": "Osaka",
		    "country": "Japan",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.osaka/"
		  },
		  {
		    "city": "Sasebo",
		    "country": "Japan",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sasebo/"
		  },
		  {
		    "city": "Tokyo",
		    "country": "Japan",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.tokyo/"
		  },
		  {
		    "city": "Tsukuba",
		    "country": "Japan",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.tsukuba/"
		  },
		  {
		    "city": "Amman",
		    "country": "Jordan",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.amman/"
		  },
		  {
		    "city": "Almaty",
		    "country": "Kazakhstan",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Almaty/"
		  },
		  {
		    "city": "Astana",
		    "country": "Kazakhstan",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.astana/"
		  },
		  {
		    "city": "Kulsary",
		    "country": "Kazakhstan",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kulsary/"
		  },
		  {
		    "city": "Kangundo",
		    "country": "Kenya",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Kangundo/"
		  },
		  {
		    "city": "Kisumu",
		    "country": "Kenya",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Kisumu/"
		  },
		  {
		    "city": "Mombasa",
		    "country": "Kenya",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.mombasa/"
		  },
		  {
		    "city": "Nairobi",
		    "country": "Kenya",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.nairobi/"
		  },
		  {
		    "city": "Ferizaj",
		    "country": "Kosovo",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.ferizaj/"
		  },
		  {
		    "city": "Pristina",
		    "country": "Kosovo",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.pristina/"
		  },
		  {
		    "city": "Kuwait City",
		    "country": "Kuwait",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kuwait.city/"
		  },
		  {
		    "city": "Bishkek",
		    "country": "Kyrgyzstan",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bishkek/"
		  },
		  {
		    "city": "Riga",
		    "country": "Latvia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.riga/"
		  },
		  {
		    "city": "Beirut",
		    "country": "Lebanon",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.beirut/"
		  },
		  {
		    "city": "Maseru",
		    "country": "Lesotho",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.maseru/"
		  },
		  {
		    "city": "Monrovia",
		    "country": "Liberia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.monrovia.lr/"
		  },
		  {
		    "city": "Misrata",
		    "country": "Libya",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.misrata/"
		  },
		  {
		    "city": "Tripoli",
		    "country": "Libya",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Tripoli.Libya/"
		  },
		  {
		    "city": "Kaunas",
		    "country": "Lithuania",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kaunas/"
		  },
		  {
		    "city": "Vilnius",
		    "country": "Lithuania",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.vilnius.lt/"
		  },
		  {
		    "city": "Luxembourg",
		    "country": "Luxembourg",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.luxembourg/"
		  },
		  {
		    "city": "Skopje",
		    "country": "Macedonia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.skopje/"
		  },
		  {
		    "city": "Struga",
		    "country": "Macedonia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.struga/"
		  },
		  {
		    "city": "Strumica",
		    "country": "Macedonia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.strumica/"
		  },
		  {
		    "city": "Antananarivo",
		    "country": "Madagascar",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.antananarivo/"
		  },
		  {
		    "city": "Johor",
		    "country": "Malaysia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.nusajaya.malaysia/"
		  },
		  {
		    "city": "Kota Bharu",
		    "country": "Malaysia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kotabharu.malaysia/"
		  },
		  {
		    "city": "Kota Kinabalu",
		    "country": "Malaysia",
		    "facebook": "https://www.facebook.com/groups/Free.code.camp.KK.Sabah/"
		  },
		  {
		    "city": "Kuala Lumpur",
		    "country": "Malaysia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.malaysia.kl/"
		  },
		  {
		    "city": "Kuching",
		    "country": "Malaysia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kuching/"
		  },
		  {
		    "city": "Penang",
		    "country": "Malaysia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.penang/"
		  },
		  {
		    "city": "Perlis",
		    "country": "Malaysia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.perlis.malaysia"
		  },
		  {
		    "city": "Taiping",
		    "country": "Malaysia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.taiping/"
		  },
		  {
		    "city": "Tanjong Malim",
		    "country": "Malaysia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.your.perak/"
		  },
		  {
		    "city": "Male",
		    "country": "Maldives",
		    "facebook": "https://www.facebook.com/groups/freecodemv/"
		  },
		  {
		    "city": "Port Louis",
		    "country": "Mauritius",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.port.louis/"
		  },
		  {
		    "city": "Acapulco",
		    "country": "Mexico",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.acapulco/"
		  },
		  {
		    "city": "Aguascalientes",
		    "country": "Mexico",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.aguascalientes/"
		  },
		  {
		    "city": "Chetumal",
		    "country": "Mexico",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.chetumal/"
		  },
		  {
		    "city": "Ciudad Juárez",
		    "country": "Mexico",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.juarezchi/"
		  },
		  {
		    "city": "Ciudad Obregón",
		    "country": "Mexico",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.cd.obregon/"
		  },
		  {
		    "city": "Coatzacoalcos",
		    "country": "Mexico",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.coatzacoalcos/"
		  },
		  {
		    "city": "Culiacán",
		    "country": "Mexico",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.culiacan/"
		  },
		  {
		    "city": "Durango",
		    "country": "Mexico",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.durango/"
		  },
		  {
		    "city": "Guadalajara",
		    "country": "Mexico",
		    "facebook": "https://www.facebook.com/groups/fcc.guadalajara"
		  },
		  {
		    "city": "Guanajuato",
		    "country": "Mexico",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.guanajuato/"
		  },
		  {
		    "city": "Hermosillo",
		    "country": "Mexico",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Hermosillo/"
		  },
		  {
		    "city": "La Paz",
		    "country": "Mexico",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.lapaz.mx/"
		  },
		  {
		    "city": "León",
		    "country": "Mexico",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.leon.gt/"
		  },
		  {
		    "city": "Mérida",
		    "country": "Mexico",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.merida.mexico/"
		  },
		  {
		    "city": "Mexico City",
		    "country": "Mexico",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.mexico.df/"
		  },
		  {
		    "city": "Monterrey",
		    "country": "Mexico",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.monterrey/"
		  },
		  {
		    "city": "Morelos",
		    "country": "Mexico",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.morelos.mx/"
		  },
		  {
		    "city": "Pachuca",
		    "country": "Mexico",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.pachuca/"
		  },
		  {
		    "city": "Puebla",
		    "country": "Mexico",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.pueblaMX/"
		  },
		  {
		    "city": "Puerto Vallarta",
		    "country": "Mexico",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.puerto.vallarta/"
		  },
		  {
		    "city": "San Luís Potosí",
		    "country": "Mexico",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.san.luis.potosi/"
		  },
		  {
		    "city": "Santiago de Querétaro",
		    "country": "Mexico",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.santiago.de.queretaro/"
		  },
		  {
		    "city": "Tampico",
		    "country": "Mexico",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.tampico/"
		  },
		  {
		    "city": "Tapachula",
		    "country": "Mexico",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.tapachula/"
		  },
		  {
		    "city": "Tepic",
		    "country": "Mexico",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.tepic/"
		  },
		  {
		    "city": "Tijuana",
		    "country": "Mexico",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.tijuana/"
		  },
		  {
		    "city": "Torreón",
		    "country": "Mexico",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.torreon/"
		  },
		  {
		    "city": "Tuxtla Gutiérrez",
		    "country": "Mexico",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.tuxtla.gutierrez/"
		  },
		  {
		    "city": "Villahermosa",
		    "country": "Mexico",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.tabasco/"
		  },
		  {
		    "city": "Xalapa",
		    "country": "Mexico",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.xalapa/"
		  },
		  {
		    "city": "Zacatecas",
		    "country": "Mexico",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.zacatecas/"
		  },
		  {
		    "city": "Balti",
		    "country": "Moldova",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.balti/"
		  },
		  {
		    "city": "Chisinau",
		    "country": "Moldova",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Chisinau/"
		  },
		  {
		    "city": "Tiraspol",
		    "country": "Moldova",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.tiraspol/"
		  },
		  {
		    "city": "Ulaanbaatar",
		    "country": "Mongolia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.your.ulaanbaatar/"
		  },
		  {
		    "city": "Tivat",
		    "country": "Montenegro",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.tivat.montenegro/"
		  },
		  {
		    "city": "Agadir",
		    "country": "Morocco",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.agadir/"
		  },
		  {
		    "city": "Casablanca",
		    "country": "Morocco",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.casablanca/"
		  },
		  {
		    "city": "Fez",
		    "country": "Morocco",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.fes/"
		  },
		  {
		    "city": "Marrakesh",
		    "country": "Morocco",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.marrakesh/"
		  },
		  {
		    "city": "Rabat",
		    "country": "Morocco",
		    "facebook": "https://www.facebook.com/groups/965419830196366/"
		  },
		  {
		    "city": "Sefrou",
		    "country": "Morocco",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sefrou/"
		  },
		  {
		    "city": "Maputo",
		    "country": "Mozambique",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.maputo/"
		  },
		  {
		    "city": "Mandalay",
		    "country": "Myanmar [Burma]",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.mandalay"
		  },
		  {
		    "city": "Meiktila",
		    "country": "Myanmar [Burma]",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.meiktila/"
		  },
		  {
		    "city": "Yangon",
		    "country": "Myanmar [Burma]",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.myanmar/"
		  },
		  {
		    "city": "Windhoek",
		    "country": "Namibia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.windhoek/"
		  },
		  {
		    "city": "Bhaktapur",
		    "country": "Nepal",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bhaktapur/"
		  },
		  {
		    "city": "Bhimdattanagar",
		    "country": "Nepal",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bhimdattanagar/"
		  },
		  {
		    "city": "Biratnagar",
		    "country": "Nepal",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.biratnagar/"
		  },
		  {
		    "city": "Dhangadi",
		    "country": "Nepal",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.dhangadhi/"
		  },
		  {
		    "city": "Kathmandu",
		    "country": "Nepal",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kathmandu/"
		  },
		  {
		    "city": "Pokhara",
		    "country": "Nepal",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.pokhara/"
		  },
		  {
		    "city": "Almere",
		    "country": "Netherlands",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.almere.netherlands/"
		  },
		  {
		    "city": "Amsterdam",
		    "country": "Netherlands",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.amsterdam/"
		  },
		  {
		    "city": "Arnhem",
		    "country": "Netherlands",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.arnhem/"
		  },
		  {
		    "city": "Breda",
		    "country": "Netherlands",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.breda/"
		  },
		  {
		    "city": "Eindhoven",
		    "country": "Netherlands",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.lightcity/"
		  },
		  {
		    "city": "Enschede",
		    "country": "Netherlands",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.enschede"
		  },
		  {
		    "city": "Gouda",
		    "country": "Netherlands",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.gouda/"
		  },
		  {
		    "city": "Groningen",
		    "country": "Netherlands",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.groningen/"
		  },
		  {
		    "city": "Rotterdam",
		    "country": "Netherlands",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.rotterdam/"
		  },
		  {
		    "city": "Sittard",
		    "country": "Netherlands",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sittard/"
		  },
		  {
		    "city": "The Hague",
		    "country": "Netherlands",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.the.hague/"
		  },
		  {
		    "city": "Zaandam",
		    "country": "Netherlands",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.zaandam/"
		  },
		  {
		    "city": "Auckland",
		    "country": "New Zealand",
		    "facebook": "https://www.facebook.com/groups/awesome.code.camp/"
		  },
		  {
		    "city": "Christchurch",
		    "country": "New Zealand",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.christchurch/"
		  },
		  {
		    "city": "Dunedin",
		    "country": "New Zealand",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.dunedin/"
		  },
		  {
		    "city": "Hamilton",
		    "country": "New Zealand",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.hamilton.nz/"
		  },
		  {
		    "city": "Masterton",
		    "country": "New Zealand",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.masterton/"
		  },
		  {
		    "city": "Palmerston North",
		    "country": "New Zealand",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.palmerston.north/"
		  },
		  {
		    "city": "Richmond",
		    "country": "New Zealand",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.richmond/"
		  },
		  {
		    "city": "Wellington",
		    "country": "New Zealand",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.wellington.nz/"
		  },
		  {
		    "city": "Granada",
		    "country": "Nicaragua",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.granada/"
		  },
		  {
		    "city": "Managua",
		    "country": "Nicaragua",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.managua/"
		  },
		  {
		    "city": "Abeokuta",
		    "country": "Nigeria",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.abeokuta/"
		  },
		  {
		    "city": "Abuja",
		    "country": "Nigeria",
		    "facebook": "https://www.facebook.com/groups/abuja.free.code.camp/"
		  },
		  {
		    "city": "Ado Ekiti",
		    "country": "Nigeria",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.ado.ekiti"
		  },
		  {
		    "city": "Benin City",
		    "country": "Nigeria",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.benincity/"
		  },
		  {
		    "city": "Calabar",
		    "country": "Nigeria",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.calabar/"
		  },
		  {
		    "city": "Dutse",
		    "country": "Nigeria",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.dutse.jigawa/"
		  },
		  {
		    "city": "Ibadan",
		    "country": "Nigeria",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Ibadan/"
		  },
		  {
		    "city": "Ile-Ife",
		    "country": "Nigeria",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.ileife/"
		  },
		  {
		    "city": "Ikeja",
		    "country": "Nigeria",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.ikeja/"
		  },
		  {
		    "city": "Ilorin",
		    "country": "Nigeria",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.ilorin.nigeria/"
		  },
		  {
		    "city": "Kaduna",
		    "country": "Nigeria",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kaduna/"
		  },
		  {
		    "city": "Keffi",
		    "country": "Nigeria",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.keffi/"
		  },
		  {
		    "city": "Lagos",
		    "country": "Nigeria",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.lagos/"
		  },
		  {
		    "city": "Lekki",
		    "country": "Nigeria",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.lekki/"
		  },
		  {
		    "city": "Ondo",
		    "country": "Nigeria",
		    "facebook": "https://web.facebook.com/groups/free.code.camp.ondo/"
		  },
		  {
		    "city": "Port Harcourt",
		    "country": "Nigeria",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.port.harcourt/"
		  },
		  {
		    "city": "Sokoto",
		    "country": "Nigeria",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sokoto/"
		  },
		  {
		    "city": "Uyo",
		    "country": "Nigeria",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Uyo"
		  },
		  {
		    "city": "Zaki Biam",
		    "country": "Nigeria",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.zakibiam/"
		  },
		  {
		    "city": "Belfast",
		    "country": "Northern Ireland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.belfast.UK/"
		  },
		  {
		    "city": "Aalesund",
		    "country": "Norway",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.aalesund/"
		  },
		  {
		    "city": "Bergen",
		    "country": "Norway",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Bergen/"
		  },
		  {
		    "city": "Kristiansand",
		    "country": "Norway",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kristiansand/"
		  },
		  {
		    "city": "Hamar",
		    "country": "Norway",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.hamar/"
		  },
		  {
		    "city": "Mosjøen",
		    "country": "Norway",
		    "facebook": "https://www.facebook.com/groups/1566653710294242/"
		  },
		  {
		    "city": "Oslo",
		    "country": "Norway",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.oslo/"
		  },
		  {
		    "city": "Sandefjord",
		    "country": "Norway",
		    "facebook": "https://www.facebook.com/groups/Free.Code.Camp.Sandefjord/"
		  },
		  {
		    "city": "Stavanger",
		    "country": "Norway",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.stavanger/"
		  },
		  {
		    "city": "Trondheim",
		    "country": "Norway",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.trondheim/"
		  },
		  {
		    "city": "Muscat",
		    "country": "Oman",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.muscat/"
		  },
		  {
		    "city": "Sohar",
		    "country": "Oman",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sohar/"
		  },
		  {
		    "city": "Badin",
		    "country": "Pakistan",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.badin/"
		  },
		  {
		    "city": "Bahawlapur",
		    "country": "Pakistan",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bahawalpur"
		  },
		  {
		    "city": "Bannu",
		    "country": "Pakistan",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bannu/"
		  },
		  {
		    "city": "Gujranwala",
		    "country": "Pakistan",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.grw/"
		  },
		  {
		    "city": "Gujrat City",
		    "country": "Pakistan",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.gujrat/"
		  },
		  {
		    "city": "Islamabad",
		    "country": "Pakistan",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.islamabad/"
		  },
		  {
		    "city": "Karachi",
		    "country": "Pakistan",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.karachi/"
		  },
		  {
		    "city": "Lahore",
		    "country": "Pakistan",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.lahore/"
		  },
		  {
		    "city": "Mianwali",
		    "country": "Pakistan",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.mianwali/"
		  },
		  {
		    "city": "Multan",
		    "country": "Pakistan",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.multan"
		  },
		  {
		    "city": "Peshawar",
		    "country": "Pakistan",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Peshawar/"
		  },
		  {
		    "city": "Quetta",
		    "country": "Pakistan",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.quetta"
		  },
		  {
		    "city": "Rawalpindi",
		    "country": "Pakistan",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.rawalpindi/"
		  },
		  {
		    "city": "Sahiwal",
		    "country": "Pakistan",
		    "facebook": "https://www.facebook.com/groups/1505677729748974/"
		  },
		  {
		    "city": "Sargodha",
		    "country": "Pakistan",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sargodha/"
		  },
		  {
		    "city": "Sialkot",
		    "country": "Pakistan",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sialkot/"
		  },
		  {
		    "city": "Gaza",
		    "country": "Palestine",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.gaza/"
		  },
		  {
		    "city": "Ramallah",
		    "country": "Palestine",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.ramallah/"
		  },
		  {
		    "city": "Panama City",
		    "country": "Panama",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.panama.city"
		  },
		  {
		    "city": "Lae",
		    "country": "Papua New Guinea",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.papua.new.guinea.lae/"
		  },
		  {
		    "city": "Asuncion",
		    "country": "Paraguay",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.asuncion/"
		  },
		  {
		    "city": "Encarnacion",
		    "country": "Paraguay",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.encarnacion/"
		  },
		  {
		    "city": "Aichi",
		    "country": "Peru",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.aichi/"
		  },
		  {
		    "city": "Huancayo",
		    "country": "Peru",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.huancayo"
		  },
		  {
		    "city": "Lima",
		    "country": "Peru",
		    "facebook": "https://www.facebook.com/groups/Free.Code.Camp.Lima/"
		  },
		  {
		    "city": "Moquegua",
		    "country": "Peru",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.moquegua/"
		  },
		  {
		    "city": "Trujillo",
		    "country": "Peru",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.trujillo"
		  },
		  {
		    "city": "Angeles",
		    "country": "Philippines",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.angelescity.pampanga.philippines/"
		  },
		  {
		    "city": "Batangas",
		    "country": "Philippines",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.batangas/"
		  },
		  {
		    "city": "Bicol",
		    "country": "Philippines",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Bicol/"
		  },
		  {
		    "city": "Cagayan de Oro",
		    "country": "Philippines",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.cagayandeoro.city/"
		  },
		  {
		    "city": "Cavite City",
		    "country": "Philippines",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.cavite.city/"
		  },
		  {
		    "city": "Cebu",
		    "country": "Philippines",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.cebu/"
		  },
		  {
		    "city": "Davao",
		    "country": "Philippines",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.davao/"
		  },
		  {
		    "city": "Iloilo",
		    "country": "Philippines",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.iloilo.city/"
		  },
		  {
		    "city": "Makati",
		    "country": "Philippines",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.makati/"
		  },
		  {
		    "city": "Manila",
		    "country": "Philippines",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.manila/"
		  },
		  {
		    "city": "Mati",
		    "country": "Philippines",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.mati/"
		  },
		  {
		    "city": "Quezon City",
		    "country": "Philippines",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.quezon.city/"
		  },
		  {
		    "city": "San Juan",
		    "country": "Philippines",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.san.juan.philippines/"
		  },
		  {
		    "city": "Santiago",
		    "country": "Philippines",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.santiagocity/"
		  },
		  {
		    "city": "Surigao",
		    "country": "Philippines",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.surigao/"
		  },
		  {
		    "city": "Zamboanga City",
		    "country": "Philippines",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.zamboanga.city/"
		  },
		  {
		    "city": "Bialystok",
		    "country": "Poland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bialystok/"
		  },
		  {
		    "city": "Bielsko",
		    "country": "Poland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bielsko/"
		  },
		  {
		    "city": "Bydgoszcz",
		    "country": "Poland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bydgoszcz/"
		  },
		  {
		    "city": "Gdańsk",
		    "country": "Poland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.trojmiasto/"
		  },
		  {
		    "city": "Gdynia",
		    "country": "Poland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.gdynia/"
		  },
		  {
		    "city": "Katowice",
		    "country": "Poland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.the.katowice/"
		  },
		  {
		    "city": "Krakow",
		    "country": "Poland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.krakow/"
		  },
		  {
		    "city": "Lodz",
		    "country": "Poland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.lodz/"
		  },
		  {
		    "city": "Opole",
		    "country": "Poland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.opole/"
		  },
		  {
		    "city": "Plock",
		    "country": "Poland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.plock/"
		  },
		  {
		    "city": "Poznan",
		    "country": "Poland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.poznan/"
		  },
		  {
		    "city": "Siedlce",
		    "country": "Poland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.siedlce/"
		  },
		  {
		    "city": "Sopot",
		    "country": "Poland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.trojmiasto/"
		  },
		  {
		    "city": "Szczecin",
		    "country": "Poland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.szczecin/"
		  },
		  {
		    "city": "Warsaw",
		    "country": "Poland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.warsaw/"
		  },
		  {
		    "city": "Wroclaw",
		    "country": "Poland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.wroclaw/"
		  },
		  {
		    "city": "Aveiro",
		    "country": "Portugal",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.aveiro/"
		  },
		  {
		    "city": "Braga",
		    "country": "Portugal",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.braga/"
		  },
		  {
		    "city": "Coimbra",
		    "country": "Portugal",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.coimbra/"
		  },
		  {
		    "city": "Lisbon",
		    "country": "Portugal",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.lisbon/"
		  },
		  {
		    "city": "Porto",
		    "country": "Portugal",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.porto/"
		  },
		  {
		    "city": "Viseu",
		    "country": "Portugal",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.viseu/"
		  },
		  {
		    "city": "San Juan",
		    "country": "Puerto Rico",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sanjuan.pr/"
		  },
		  {
		    "city": "Doha",
		    "country": "Qatar",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.doha/"
		  },
		  {
		    "city": "Saint-André",
		    "country": "Reunion",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.your.city.saint.andre/"
		  },
		  {
		    "city": "Arad",
		    "country": "Romania",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.romania.arad/"
		  },
		  {
		    "city": "Bacau",
		    "country": "Romania",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bacau.romania/"
		  },
		  {
		    "city": "Brasov",
		    "country": "Romania",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.brasov"
		  },
		  {
		    "city": "Bucharest",
		    "country": "Romania",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bucharest/"
		  },
		  {
		    "city": "Buzau",
		    "country": "Romania",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.buzau/"
		  },
		  {
		    "city": "Cluj-Napoca",
		    "country": "Romania",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.cluj"
		  },
		  {
		    "city": "Constanta",
		    "country": "Romania",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.constanta/"
		  },
		  {
		    "city": "Craiova",
		    "country": "Romania",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.crai0va/"
		  },
		  {
		    "city": "Iasi",
		    "country": "Romania",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.iasi.romania/"
		  },
		  {
		    "city": "Oradea",
		    "country": "Romania",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.oradea/"
		  },
		  {
		    "city": "Pitesti",
		    "country": "Romania",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Pitesti/"
		  },
		  {
		    "city": "Sibiu",
		    "country": "Romania",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sibiu/"
		  },
		  {
		    "city": "Suceava",
		    "country": "Romania",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.suceava/"
		  },
		  {
		    "city": "Targu Mures",
		    "country": "Romania",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.targu.mures/"
		  },
		  {
		    "city": "Tecuci",
		    "country": "Romania",
		    "facebook": "https://www.facebook.com/groups/745118002278303/"
		  },
		  {
		    "city": "Timisoara",
		    "country": "Romania",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.timisoara/"
		  },
		  {
		    "city": "Tulcea",
		    "country": "Romania",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.tulcea/"
		  },
		  {
		    "city": "Almetyevsk",
		    "country": "Russia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.almetyevsk/"
		  },
		  {
		    "city": "Barnaul",
		    "country": "Russia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.barnaul/"
		  },
		  {
		    "city": "Belgorod",
		    "country": "Russia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.belgorod/"
		  },
		  {
		    "city": "Blagoveshchensk",
		    "country": "Russia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.blagoveshchensk.amur.region/"
		  },
		  {
		    "city": "Cheboksary",
		    "country": "Russia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.cheboksary/"
		  },
		  {
		    "city": "Cheljabinsk",
		    "country": "Russia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.cheljabinsk/"
		  },
		  {
		    "city": "Cherepovets",
		    "country": "Russia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.cherepovets/"
		  },
		  {
		    "city": "Irkutsk",
		    "country": "Russia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.irkutsk/"
		  },
		  {
		    "city": "Kazan",
		    "country": "Russia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kazan/"
		  },
		  {
		    "city": "Khabarovsk",
		    "country": "Russia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.khabarovsk/"
		  },
		  {
		    "city": "Kemerovo",
		    "country": "Russia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kemerovo/"
		  },
		  {
		    "city": "Kaliningrad",
		    "country": "Russia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kaliningrad/"
		  },
		  {
		    "city": "Krasnodar",
		    "country": "Russia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.krasnodar/"
		  },
		  {
		    "city": "Krasnoyarsk",
		    "country": "Russia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.krasnoyarsk"
		  },
		  {
		    "city": "Moscow",
		    "country": "Russia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.moscow/"
		  },
		  {
		    "city": "Nizhnevartovsk",
		    "country": "Russia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.nizhnevartovsk/"
		  },
		  {
		    "city": "Noginsk",
		    "country": "Russia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.noginsk/"
		  },
		  {
		    "city": "Novorossiysk",
		    "country": "Russia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.novorossiysk/"
		  },
		  {
		    "city": "Novosibirsk",
		    "country": "Russia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.novosibirsk/"
		  },
		  {
		    "city": "Omsk",
		    "country": "Russia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.omsk/"
		  },
		  {
		    "city": "Orenburg",
		    "country": "Russia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.orenburg/"
		  },
		  {
		    "city": "Pavlovo",
		    "country": "Russia",
		    "facebook": "https://www.facebook.com/groups/Free.Code.Camp.Pavlovo/"
		  },
		  {
		    "city": "Penza",
		    "country": "Russia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.penza/"
		  },
		  {
		    "city": "Perm",
		    "country": "Russia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.your.city.perm/"
		  },
		  {
		    "city": "Pskov",
		    "country": "Russia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.pskov/"
		  },
		  {
		    "city": "Rostovondon",
		    "country": "Russia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.rostovondon/"
		  },
		  {
		    "city": "Saint Petersburg",
		    "country": "Russia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.saint.petersburg/"
		  },
		  {
		    "city": "Samara",
		    "country": "Russia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.samara/"
		  },
		  {
		    "city": "Saratov",
		    "country": "Russia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.saratov/"
		  },
		  {
		    "city": "Stavropol",
		    "country": "Russia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.stavropol/"
		  },
		  {
		    "city": "Tomsk",
		    "country": "Russia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.tomsk/"
		  },
		  {
		    "city": "Tyumen",
		    "country": "Russia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Tyumen/"
		  },
		  {
		    "city": "Ufa",
		    "country": "Russia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.ufa/"
		  },
		  {
		    "city": "Velikiy Novgorod",
		    "country": "Russia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.velikiy.novgorod/"
		  },
		  {
		    "city": "Vladivostok",
		    "country": "Russia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.vladivostok/"
		  },
		  {
		    "city": "Voronezh",
		    "country": "Russia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.voronezh/"
		  },
		  {
		    "city": "Yaroslavl",
		    "country": "Russia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.yaroslavl/"
		  },
		  {
		    "city": "Yekaterinburg",
		    "country": "Russia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.yekaterinburg"
		  },
		  {
		    "city": "Kigali",
		    "country": "Rwanda",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kigali/"
		  },
		  {
		    "city": "Castries",
		    "country": "Saint Lucia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.your.castries/"
		  },
		  {
		    "city": "Abha",
		    "country": "Saudi Arabia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.abha/"
		  },
		  {
		    "city": "Damman",
		    "country": "Saudi Arabia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.dammam/"
		  },
		  {
		    "city": "Jeddah",
		    "country": "Saudi Arabia",
		    "facebook": "https://www.facebook.com/groups/freecodecamp.jeddah/"
		  },
		  {
		    "city": "Riyadh",
		    "country": "Saudi Arabia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Riyadh/"
		  },
		  {
		    "city": "Women only group",
		    "country": "Saudi Arabia",
		    "facebook": "https://www.facebook.com/groups/girlscodeksa/"
		  },
		  {
		    "city": "Aberdeenshire",
		    "country": "Scotland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.aberdeenshire/"
		  },
		  {
		    "city": "Dundee",
		    "country": "Scotland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.dundee/"
		  },
		  {
		    "city": "Edinburgh",
		    "country": "Scotland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.edinburgh/"
		  },
		  {
		    "city": "Glasgow",
		    "country": "Scotland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.glasgow/"
		  },
		  {
		    "city": "Dakar",
		    "country": "Senegal",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.dakar/"
		  },
		  {
		    "city": "Belgrade",
		    "country": "Serbia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.belgrade/"
		  },
		  {
		    "city": "Knjazevac",
		    "country": "Serbia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.knjazevac/"
		  },
		  {
		    "city": "Kosovo",
		    "country": "Serbia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kosovo/"
		  },
		  {
		    "city": "Krusevac",
		    "country": "Serbia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.krusevac/"
		  },
		  {
		    "city": "Niš",
		    "country": "Serbia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.nis/"
		  },
		  {
		    "city": "Novi Sad",
		    "country": "Serbia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.novi.sad/"
		  },
		  {
		    "city": "Šabac",
		    "country": "Serbia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sabac/"
		  },
		  {
		    "city": "Subotica",
		    "country": "Serbia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.subotica/"
		  },
		  {
		    "city": "Vrsac",
		    "country": "Serbia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.vrsac/"
		  },
		  {
		    "city": "Freetown",
		    "country": "Sierra Leone",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.salone/"
		  },
		  {
		    "city": "Singapore",
		    "country": "Singapore",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.singapore/"
		  },
		  {
		    "city": "Bratislava",
		    "country": "Slovakia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bratislava/"
		  },
		  {
		    "city": "Kosice",
		    "country": "Slovakia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kosice/"
		  },
		  {
		    "city": "Ljubljana",
		    "country": "Slovenia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.ljubljana/"
		  },
		  {
		    "city": "Cape Town",
		    "country": "South Africa",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.cape.town/"
		  },
		  {
		    "city": "Durban",
		    "country": "South Africa",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.durban.kwazulu.natal/"
		  },
		  {
		    "city": "George",
		    "country": "South Africa",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.george/"
		  },
		  {
		    "city": "Johannesburg",
		    "country": "South Africa",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.johannesburg/"
		  },
		  {
		    "city": "Pietermaritzburg",
		    "country": "South Africa",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.pietermaritzburg/"
		  },
		  {
		    "city": "Pretoria",
		    "country": "South Africa",
		    "facebook": "https://www.facebook.com/groups/150891448624679/"
		  },
		  {
		    "city": "Randfontein",
		    "country": "South Africa",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.your.randfontein/"
		  },
		  {
		    "city": "Bundang",
		    "country": "South Korea",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bundang/"
		  },
		  {
		    "city": "Busan",
		    "country": "South Korea",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.busan/"
		  },
		  {
		    "city": "Daegu",
		    "country": "South Korea",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.your.daegu/"
		  },
		  {
		    "city": "Gwangju",
		    "country": "South Korea",
		    "facebook": "https://www.facebook.com/groups/GwangjuCodeCano/"
		  },
		  {
		    "city": "Jeonju",
		    "country": "South Korea",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.jeonju/"
		  },
		  {
		    "city": "Jinju",
		    "country": "South Korea",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.jinju/"
		  },
		  {
		    "city": "Sejong",
		    "country": "South Korea",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sejong.city/"
		  },
		  {
		    "city": "Seoul",
		    "country": "South Korea",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.seoul/"
		  },
		  {
		    "city": "Suwon",
		    "country": "South Korea",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.suwon/"
		  },
		  {
		    "city": "A Coruña",
		    "country": "Spain",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.a.coruna/"
		  },
		  {
		    "city": "Albacete",
		    "country": "Spain",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.albacete/"
		  },
		  {
		    "city": "Alicante",
		    "country": "Spain",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.alicante/"
		  },
		  {
		    "city": "Almería",
		    "country": "Spain",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.almeria/"
		  },
		  {
		    "city": "Barcelona",
		    "country": "Spain",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.barcelona/"
		  },
		  {
		    "city": "Burgos",
		    "country": "Spain",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.burgos/"
		  },
		  {
		    "city": "Cáceres",
		    "country": "Spain",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.caceres/"
		  },
		  {
		    "city": "Cádiz",
		    "country": "Spain",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.cadiz/"
		  },
		  {
		    "city": "Castellón",
		    "country": "Spain",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.castellon/"
		  },
		  {
		    "city": "Ciudad Real",
		    "country": "Spain",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.ciudad.real/"
		  },
		  {
		    "city": "Córdoba",
		    "country": "Spain",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.cordoba.spain/"
		  },
		  {
		    "city": "Gijón",
		    "country": "Spain",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.gijon/"
		  },
		  {
		    "city": "Granada",
		    "country": "Spain",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.spain.granada/"
		  },
		  {
		    "city": "Fuengirola",
		    "country": "Spain",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.fuengirola/"
		  },
		  {
		    "city": "Jaén",
		    "country": "Spain",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.jaen/"
		  },
		  {
		    "city": "Lanzarote",
		    "country": "Spain",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.costa.teguise/"
		  },
		  {
		    "city": "Madrid",
		    "country": "Spain",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.madrid/"
		  },
		  {
		    "city": "Málaga",
		    "country": "Spain",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.malaga/"
		  },
		  {
		    "city": "Murcia",
		    "country": "Spain",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.murcia/"
		  },
		  {
		    "city": "Ourense",
		    "country": "Spain",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.ourense/"
		  },
		  {
		    "city": "Palma de Mallorca",
		    "country": "Spain",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.palma/"
		  },
		  {
		    "city": "Rojales",
		    "country": "Spain",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.rojales/"
		  },
		  {
		    "city": "Salamanca",
		    "country": "Spain",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.salamanca/"
		  },
		  {
		    "city": "Santa Cruz de Tenerife",
		    "country": "Spain",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.santacruzdetenerife/"
		  },
		  {
		    "city": "Santander",
		    "country": "Spain",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.santander/"
		  },
		  {
		    "city": "Sevilla",
		    "country": "Spain",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sevilla.spain/"
		  },
		  {
		    "city": "Tarragona",
		    "country": "Spain",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.tarragona/"
		  },
		  {
		    "city": "Valencia",
		    "country": "Spain",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.vlc/"
		  },
		  {
		    "city": "Valladolid",
		    "country": "Spain",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.valladolid.spain"
		  },
		  {
		    "city": "Vitoria-Gasteiz",
		    "country": "Spain",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.vitoria.gasteiz/"
		  },
		  {
		    "city": "Zaragoza",
		    "country": "Spain",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.zaragoza/"
		  },
		  {
		    "city": "Batticaloa",
		    "country": "Sri Lanka",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.batticaloa/"
		  },
		  {
		    "city": "Colombo",
		    "country": "Sri Lanka",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.colombo/"
		  },
		  {
		    "city": "Jaffna",
		    "country": "Sri Lanka",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.jaffna/"
		  },
		  {
		    "city": "Khartoum",
		    "country": "Sudan",
		    "facebook": "https://www.facebook.com/groups/Free.Code.Camp.Khartoum/"
		  },
		  {
		    "city": "Basterre",
		    "country": "St. Kitts & Nevis",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.basseterre.stkitts/"
		  },
		  {
		    "city": "Göteborg",
		    "country": "Sweden",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.goteborg/"
		  },
		  {
		    "city": "Lund",
		    "country": "Sweden",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.lund/"
		  },
		  {
		    "city": "Malmö",
		    "country": "Sweden",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.malmo/"
		  },
		  {
		    "city": "Norrköping",
		    "country": "Sweden",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.norrkoping"
		  },
		  {
		    "city": "Stockholm",
		    "country": "Sweden",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.stockholm.sweden/"
		  },
		  {
		    "city": "Sundsvall",
		    "country": "Sweden",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sundsvall/"
		  },
		  {
		    "city": "Aarau",
		    "country": "Switzerland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.aarau/"
		  },
		  {
		    "city": "Basel",
		    "country": "Switzerland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.basel/"
		  },
		  {
		    "city": "Geneva",
		    "country": "Switzerland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.geneva/"
		  },
		  {
		    "city": "Morges",
		    "country": "Switzerland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.morges/"
		  },
		  {
		    "city": "Saas-Fee",
		    "country": "Switzerland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.saas.fee"
		  },
		  {
		    "city": "Ticino",
		    "country": "Switzerland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.ticino/"
		  },
		  {
		    "city": "Zurich",
		    "country": "Switzerland",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.zurich/"
		  },
		  {
		    "city": "Damascus",
		    "country": "Syria",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.your.damascus/"
		  },
		  {
		    "city": "Homs",
		    "country": "Syria",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Homs/"
		  },
		  {
		    "city": "Latakia",
		    "country": "Syria",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.latakia/"
		  },
		  {
		    "city": "Kaohsiung",
		    "country": "Taiwan",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kaohsiung/"
		  },
		  {
		    "city": "Taichung",
		    "country": "Taiwan",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.taichung.city/"
		  },
		  {
		    "city": "Taipei",
		    "country": "Taiwan",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.taipei/"
		  },
		  {
		    "city": "Duchanbe",
		    "country": "Tajikistan",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.dushanbe/"
		  },
		  {
		    "city": "Arusha",
		    "country": "Tanzania",
		    "facebook": "https://www.facebook.com/groups/Free.Code.Camp.Arusha.Moshi/"
		  },
		  {
		    "city": "Dar-Es-Salaam",
		    "country": "Tanzania",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.dar.es.salaam/"
		  },
		  {
		    "city": "Bangkok",
		    "country": "Thailand",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bangkok/"
		  },
		  {
		    "city": "Chiang Mai",
		    "country": "Thailand",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.chiang.mai/"
		  },
		  {
		    "city": "Port of Spain",
		    "country": "Trinidad and Tobago",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.trinidad.and.tobago/"
		  },
		  {
		    "city": "Tunis",
		    "country": "Tunisia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.tunis/"
		  },
		  {
		    "city": "Adana",
		    "country": "Turkey",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.adana/"
		  },
		  {
		    "city": "Ankara",
		    "country": "Turkey",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.ankara/"
		  },
		  {
		    "city": "Antalya",
		    "country": "Turkey",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.antalya/"
		  },
		  {
		    "city": "Bursa",
		    "country": "Turkey",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bursa/"
		  },
		  {
		    "city": "Isparta",
		    "country": "Turkey",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.isparta/"
		  },
		  {
		    "city": "Istanbul",
		    "country": "Turkey",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.istanbul/"
		  },
		  {
		    "city": "Izmir",
		    "country": "Turkey",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.izmir"
		  },
		  {
		    "city": "Kampala",
		    "country": "Uganda",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kampala/"
		  },
		  {
		    "city": "Alushta",
		    "country": "Ukraine",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.alushta/"
		  },
		  {
		    "city": "Cherkassy",
		    "country": "Ukraine",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.cherkassy/"
		  },
		  {
		    "city": "Chernivtsi",
		    "country": "Ukraine",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.chernivtsi.chernivetska.oblast.u/"
		  },
		  {
		    "city": "Dnipropetrovsk",
		    "country": "Ukraine",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.dnipropetrovsk"
		  },
		  {
		    "city": "Donetsk",
		    "country": "Ukraine",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.donetsk/"
		  },
		  {
		    "city": "Ivano Frankivsk",
		    "country": "Ukraine",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.ivano.frankivsk/"
		  },
		  {
		    "city": "Kharkiv",
		    "country": "Ukraine",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kharkiv/"
		  },
		  {
		    "city": "Khmelnitsky",
		    "country": "Ukraine",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.khmelnitsky"
		  },
		  {
		    "city": "Kherson",
		    "country": "Ukraine",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kherson/"
		  },
		  {
		    "city": "Kiev",
		    "country": "Ukraine",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kiev/"
		  },
		  {
		    "city": "Kirovohrad",
		    "country": "Ukraine",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kirovohrad/"
		  },
		  {
		    "city": "Kremenchuk",
		    "country": "Ukraine",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kremenchuk/"
		  },
		  {
		    "city": "Kryvyi Rih",
		    "country": "Ukraine",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kryvyi.rih/"
		  },
		  {
		    "city": "Lutsk",
		    "country": "Ukraine",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.lutsk/"
		  },
		  {
		    "city": "Lviv",
		    "country": "Ukraine",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.lviv/"
		  },
		  {
		    "city": "Mykolaiv",
		    "country": "Ukraine",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.mykolaiv/"
		  },
		  {
		    "city": "Odessa",
		    "country": "Ukraine",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.your.city.odessa.ukraine/"
		  },
		  {
		    "city": "Rivne",
		    "country": "Ukraine",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.rivne/"
		  },
		  {
		    "city": "Sumy",
		    "country": "Ukraine",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sumy"
		  },
		  {
		    "city": "Ternopil",
		    "country": "Ukraine",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Ternopil.Ukraine/"
		  },
		  {
		    "city": "Uzhgorod",
		    "country": "Ukraine",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.uzhgorod/"
		  },
		  {
		    "city": "Vinnitsa",
		    "country": "Ukraine",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.vinnitsa/"
		  },
		  {
		    "city": "Zaporozhye",
		    "country": "Ukraine",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.zaporozhye/"
		  },
		  {
		    "city": "Zhytomyr",
		    "country": "Ukraine",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.zhytomyr/"
		  },
		  {
		    "city": "Abu Dhabi",
		    "country": "United Arab Emirates",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.abu.dhabi/"
		  },
		  {
		    "city": "Dubai",
		    "country": "United Arab Emirates",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.dubai/"
		  },
		  {
		    "city": "Hampton Roads",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.hamptonroads/"
		  },
		  {
		    "city": "Guam",
		    "region": "Territories",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Guam/"
		  },
		  {
		    "city": "Auburn",
		    "region": "Alabama",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.code.auburn/"
		  },
		  {
		    "city": "Dothan",
		    "region": "Alabama",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.dothan/"
		  },
		  {
		    "city": "Birmingham",
		    "region": "Alabama",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.oxford.al/"
		  },
		  {
		    "city": "Enterprise",
		    "region": "Alabama",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.enterprise.alabama/"
		  },
		  {
		    "city": "Huntsville",
		    "region": "Alabama",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.huntsville.al/"
		  },
		  {
		    "city": "Mobile",
		    "region": "Alabama",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.mobile/"
		  },
		  {
		    "city": "Montgomery",
		    "region": "Alabama",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.montgomery.alabama/"
		  },
		  {
		    "city": "Anchorage",
		    "region": "Alaska",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.anchorage/"
		  },
		  {
		    "city": "Juneau",
		    "region": "Alaska",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.juneau/"
		  },
		  {
		    "city": "Flagstaff",
		    "region": "Arizona",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.northern.arizona/"
		  },
		  {
		    "city": "Maricopa",
		    "region": "Arizona",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.maricopa.arizona/"
		  },
		  {
		    "city": "Mesa",
		    "region": "Arizona",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.mesa"
		  },
		  {
		    "city": "Phoenix",
		    "region": "Arizona",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.tempe.phoenix.scottsdale/"
		  },
		  {
		    "city": "Prescott",
		    "region": "Arizona",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.northern.arizona/"
		  },
		  {
		    "city": "Scottsdale",
		    "region": "Arizona",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.tempe.phoenix.scottsdale/"
		  },
		  {
		    "city": "Sedona",
		    "region": "Arizona",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.northern.arizona/"
		  },
		  {
		    "city": "Sierra Vista",
		    "region": "Arizona",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sierra.vista/"
		  },
		  {
		    "city": "Tempe",
		    "region": "Arizona",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.tempe.phoenix.scottsdale/"
		  },
		  {
		    "city": "Tucson",
		    "region": "Arizona",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.tucson/"
		  },
		  {
		    "city": "Verde Valley",
		    "region": "Arizona",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.northern.arizona/"
		  },
		  {
		    "city": "Queen Creek",
		    "region": "Arizona",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.queen.creek/"
		  },
		  {
		    "city": "Fayetteville",
		    "region": "Arkansas",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.fayetteville.arkansas/"
		  },
		  {
		    "city": "Forth Smith",
		    "region": "Arkansas",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.fort.smith/"
		  },
		  {
		    "city": "Little Rock",
		    "region": "Arkansas",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.little.rock/"
		  },
		  {
		    "city": "Alameda",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.berkeley/"
		  },
		  {
		    "city": "Arcadia",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.arcadia"
		  },
		  {
		    "city": "Arcata",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.arcata.california/"
		  },
		  {
		    "city": "Bakersfield",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bakersfield.california/"
		  },
		  {
		    "city": "Berkeley",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.berkeley/"
		  },
		  {
		    "city": "Cathedral City",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.cathedral.city/"
		  },
		  {
		    "city": "Cerritos",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.cerritos/"
		  },
		  {
		    "city": "Covina",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/Free.Code.Camp.Covina/"
		  },
		  {
		    "city": "Davis",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.davis/"
		  },
		  {
		    "city": "Diamon Bar",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/Free.Code.Camp.Diamond.Bar/"
		  },
		  {
		    "city": "Emeryville",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.emeryville/"
		  },
		  {
		    "city": "Ensenada",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.ensenada/"
		  },
		  {
		    "city": "Eureka",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.eureka.ca/"
		  },
		  {
		    "city": "Fairfield",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.fairfield/"
		  },
		  {
		    "city": "Folsom",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.folsom"
		  },
		  {
		    "city": "Fremont",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.fremont/"
		  },
		  {
		    "city": "Fresno",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.fresno.ca/"
		  },
		  {
		    "city": "Garden Grove",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.gardengrove/"
		  },
		  {
		    "city": "Gilroy",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.come.gilroy/"
		  },
		  {
		    "city": "Glendora",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Glendora.California/"
		  },
		  {
		    "city": "Joshua Tree",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Joshua.Tree.Ca/"
		  },
		  {
		    "city": "Kingsburg",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kingsburg/"
		  },
		  {
		    "city": "Lake Forest",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.lake.forest.ca/"
		  },
		  {
		    "city": "Lindsay",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.lindsay/"
		  },
		  {
		    "city": "Long Beach",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/fcc.long.beach.ca"
		  },
		  {
		    "city": "Los Angeles",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.los.angeles/"
		  },
		  {
		    "city": "Los Gatos",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Los.Gatos.CA/"
		  },
		  {
		    "city": "Modesto",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.modesto/"
		  },
		  {
		    "city": "Moraga",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.moraga.ca/"
		  },
		  {
		    "city": "Morgan Hill",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.morgan.hill/"
		  },
		  {
		    "city": "Mountain View",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.mountain.view/"
		  },
		  {
		    "city": "Napa",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.napa/"
		  },
		  {
		    "city": "Nevada County",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.nevada.county/"
		  },
		  {
		    "city": "Northridge",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.northridge/"
		  },
		  {
		    "city": "Novato",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.novato/"
		  },
		  {
		    "city": "Oakland",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.berkeley/"
		  },
		  {
		    "city": "Orange County",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.orange.county/"
		  },
		  {
		    "city": "Pasadena",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.pasadena.ca/"
		  },
		  {
		    "city": "Palo Alto",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.palo.alto/"
		  },
		  {
		    "city": "Placerville",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.placerville/"
		  },
		  {
		    "city": "Pleasant Hill",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.pleasantHill/"
		  },
		  {
		    "city": "Redwood city",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.redwood.city/"
		  },
		  {
		    "city": "Riverside",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.riverside.ca/"
		  },
		  {
		    "city": "Sacramento",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sacramento/"
		  },
		  {
		    "city": "Salinas",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.salinas.valley/"
		  },
		  {
		    "city": "San Bernardino",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.san.bernardino/"
		  },
		  {
		    "city": "San Clemente",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.san.clemente.CA/"
		  },
		  {
		    "city": "San Diego",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.san.diego/"
		  },
		  {
		    "city": "San Francisco",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.san.francisco"
		  },
		  {
		    "city": "San Jose",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.san.jose"
		  },
		  {
		    "city": "San Luis Obispo",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.SLO/"
		  },
		  {
		    "city": "Santa Barbara",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.santa.barbara/"
		  },
		  {
		    "city": "Santa Clara",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.santa.clara/"
		  },
		  {
		    "city": "Santa Clarita",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.santa.clarita/"
		  },
		  {
		    "city": "Santa Cruz",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.santa.cruz.california/"
		  },
		  {
		    "city": "San Ramon",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sanramon/"
		  },
		  {
		    "city": "Santa Rosa",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.santa.rosa/"
		  },
		  {
		    "city": "Sonora",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sonora.ca/"
		  },
		  {
		    "city": "South Los Angeles",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.southlosangeles/"
		  },
		  {
		    "city": "Stockton",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Stockton/"
		  },
		  {
		    "city": "Temecula",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.temecula/"
		  },
		  {
		    "city": "Turlock",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.turlock/"
		  },
		  {
		    "city": "Tustin",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.tustin/"
		  },
		  {
		    "city": "Victorville",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.victorville/"
		  },
		  {
		    "city": "Visalia",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.visalia/"
		  },
		  {
		    "city": "Whittier",
		    "region": "California",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.whittier/"
		  },
		  {
		    "city": "Yreka",
		    "region": "California",
		    "country": "United States",
		    "facebook": "http://www.facebook.com/groups/Free.Code.Camp.Yreka"
		  },
		  {
		    "city": "Boulder",
		    "region": "Colorado",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.boulder/"
		  },
		  {
		    "city": "Colorado Springs",
		    "region": "Colorado",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/freecodecampcoloradosprings/"
		  },
		  {
		    "city": "Denver",
		    "region": "Colorado",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.denver/"
		  },
		  {
		    "city": "Fort Collins",
		    "region": "Colorado",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.fort.collins/"
		  },
		  {
		    "city": "Montrose",
		    "region": "Colorado",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.montrose.co/"
		  },
		  {
		    "city": "Pueblo",
		    "region": "Colorado",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.pueblo/"
		  },
		  {
		    "city": "Bridgeport",
		    "region": "Connecticut",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/freecodecampbridgeport/"
		  },
		  {
		    "city": "Danbury",
		    "region": "Connecticut",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.danbury/"
		  },
		  {
		    "city": "Durango",
		    "region": "Connecticut",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.durango.co/"
		  },
		  {
		    "city": "Hartford",
		    "region": "Connecticut",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.hartford.connecticut/"
		  },
		  {
		    "city": "New Haven",
		    "region": "Connecticut",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.new.haven/"
		  },
		  {
		    "city": "Shelton",
		    "region": "Connecticut",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.shelton.ct/"
		  },
		  {
		    "city": "Stamford",
		    "region": "Connecticut",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.stamford/"
		  },
		  {
		    "city": "Lewes",
		    "region": "Delaware",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.lewes/"
		  },
		  {
		    "city": "Wilmington",
		    "region": "Delaware",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/fcc.wilmington.delaware/"
		  },
		  {
		    "city": "Washington, D.C.",
		    "region": "District of Columbia",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.washington.dc/"
		  },
		  {
		    "city": "Boca Raton",
		    "region": "Florida",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.boca.raton/"
		  },
		  {
		    "city": "Bonita Springs",
		    "region": "Florida",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Bonita.Springs/"
		  },
		  {
		    "city": "Brooksville",
		    "region": "Florida",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.brooksville.florida/"
		  },
		  {
		    "city": "Daytona Beach",
		    "region": "Florida",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.daytona.beach/"
		  },
		  {
		    "city": "Fort Lauderdale",
		    "region": "Florida",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.ftlauderdale/"
		  },
		  {
		    "city": "Gainesville",
		    "region": "Florida",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.gainesville.fla/"
		  },
		  {
		    "city": "Jacksonville",
		    "region": "Florida",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.jacksonville/"
		  },
		  {
		    "city": "Lakeland",
		    "region": "Florida",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/Free.Code.Camp.Lakeland.Florida/"
		  },
		  {
		    "city": "Miami",
		    "region": "Florida",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.miami/"
		  },
		  {
		    "city": "Okeechobe",
		    "region": "Florida",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.okeechobee/"
		  },
		  {
		    "city": "Orlando",
		    "region": "Florida",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.orlando/"
		  },
		  {
		    "city": "Palm Bay",
		    "region": "Florida",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.palm.bay/"
		  },
		  {
		    "city": "Panama City",
		    "region": "Florida",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.panama.city.florida/"
		  },
		  {
		    "city": "Pensacola",
		    "region": "Florida",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.pensacola/"
		  },
		  {
		    "city": "Tallahassee",
		    "region": "Florida",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.tallahassee.florida/"
		  },
		  {
		    "city": "Tampa Bay",
		    "region": "Florida",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.tampa/"
		  },
		  {
		    "city": "Sarasota",
		    "region": "Florida",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sarasota.florida/"
		  },
		  {
		    "city": "Vero Beach",
		    "region": "Florida",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.vero.beach/"
		  },
		  {
		    "city": "West Palm Beach",
		    "region": "Florida",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.wpb/"
		  },
		  {
		    "city": "Acworth",
		    "region": "Georgia",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.acworth.ga/"
		  },
		  {
		    "city": "Albany",
		    "region": "Georgia",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/1672818199656454/"
		  },
		  {
		    "city": "Alpharetta",
		    "region": "Georgia",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.alpharetta/"
		  },
		  {
		    "city": "Atlanta",
		    "region": "Georgia",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.atlanta/"
		  },
		  {
		    "city": "Augusta",
		    "region": "Georgia",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.augusta.ga/"
		  },
		  {
		    "city": "Cochran",
		    "region": "Georgia",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.cochran.ga/"
		  },
		  {
		    "city": "Columbus",
		    "region": "Georgia",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.columbus.georgia/"
		  },
		  {
		    "city": "Flowery Branch",
		    "region": "Georgia",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.flowerybranchga/"
		  },
		  {
		    "city": "Lawrenceville",
		    "region": "Georgia",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.lawrenceville/"
		  },
		  {
		    "city": "Macon",
		    "region": "Georgia",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/703656036438040"
		  },
		  {
		    "city": "Rome",
		    "region": "Georgia",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.rome.ga/"
		  },
		  {
		    "city": "Savannah",
		    "region": "Georgia",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.savannah/"
		  },
		  {
		    "city": "South Atlanta suburbs",
		    "region": "Georgia",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.south.atlanta.suburbs/"
		  },
		  {
		    "city": "Statesboro",
		    "region": "Georgia",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.statesboro/"
		  },
		  {
		    "city": "Valdosta",
		    "region": "Georgia",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.valdosta/"
		  },
		  {
		    "city": "Winder",
		    "region": "Georgia",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/fee.code.camp.winder.ga/"
		  },
		  {
		    "city": "Honolulu",
		    "region": "Hawaii",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.honolulu.hawaii/"
		  },
		  {
		    "city": "Oahu",
		    "region": "Hawaii",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.oahu.hawaii/"
		  },
		  {
		    "city": "Boise",
		    "region": "Idaho",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.boise"
		  },
		  {
		    "city": "Idaho Falls",
		    "region": "Idaho",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.idaho.falls.idaho/"
		  },
		  {
		    "city": "Moscow",
		    "region": "Idaho",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.moscow.idaho/"
		  },
		  {
		    "city": "Pocatello",
		    "region": "Idaho",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.pocatello.idaho/"
		  },
		  {
		    "city": "Twin Falls",
		    "region": "Idaho",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.twin.falls/"
		  },
		  {
		    "city": "Bloomington-Normal",
		    "region": "Illinois",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bloomington.normal/"
		  },
		  {
		    "city": "Carbondale",
		    "region": "Illinois",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.carbondale.ilinois/"
		  },
		  {
		    "city": "Centralia",
		    "region": "Illinois",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.centralia/"
		  },
		  {
		    "city": "Champaign-Urbana",
		    "region": "Illinois",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.champaign.urbana/"
		  },
		  {
		    "city": "Chicago",
		    "region": "Illinois",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.chicago/"
		  },
		  {
		    "city": "Dixon",
		    "region": "Illinois",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.dixon.il/"
		  },
		  {
		    "city": "Elgin",
		    "region": "Illinois",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.elgin/"
		  },
		  {
		    "city": "Gurnee",
		    "region": "Illinois",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.gurnee"
		  },
		  {
		    "city": "Macomb",
		    "region": "Illinois",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.macomb.il/"
		  },
		  {
		    "city": "Naperville",
		    "region": "Illinois",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.naperville"
		  },
		  {
		    "city": "Peoria",
		    "region": "Illinois",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Peoria/"
		  },
		  {
		    "city": "Rockford",
		    "region": "Illinois",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/Free.Code.Camp.Rockford/"
		  },
		  {
		    "city": "Sterling",
		    "region": "Illinois",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Sterling.IL/"
		  },
		  {
		    "city": "Quad Cities",
		    "region": "Illinois",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.quadcities/"
		  },
		  {
		    "city": "Washington",
		    "region": "Illinois",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Peoria/"
		  },
		  {
		    "city": "Bloomington",
		    "region": "Indiana",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bloomington.in/"
		  },
		  {
		    "city": "Carmel",
		    "region": "Indiana",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.carmel.indiana/"
		  },
		  {
		    "city": "Evansville",
		    "region": "Indiana",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.evansville.in/"
		  },
		  {
		    "city": "Fort Wayne",
		    "region": "Indiana",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.fort.wayne.in/"
		  },
		  {
		    "city": "Indianapolis",
		    "region": "Indiana",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.indianapolis.in/"
		  },
		  {
		    "city": "South Bend",
		    "region": "Indiana",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.south.bend/"
		  },
		  {
		    "city": "Ames",
		    "region": "Iowa",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.ames.iowa/"
		  },
		  {
		    "city": "Cedar Rapids",
		    "region": "Iowa",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.cedar.rapids/"
		  },
		  {
		    "city": "Des Moines",
		    "region": "Iowa",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.des.moines/"
		  },
		  {
		    "city": "Fort Dodge",
		    "region": "Iowa",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.fort.dodge.iowa/"
		  },
		  {
		    "city": "Sioux City",
		    "region": "Iowa",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sioux.city/"
		  },
		  {
		    "city": "Coldwater",
		    "region": "Kansas",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.coldwater.ks/"
		  },
		  {
		    "city": "Hays",
		    "region": "Kansas",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.hays/"
		  },
		  {
		    "city": "Kansas City",
		    "region": "Kansas",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kansascity/"
		  },
		  {
		    "city": "Lawrence",
		    "region": "Kansas",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.lawrence"
		  },
		  {
		    "city": "Wellington",
		    "region": "Kansas",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.wellington.ks/"
		  },
		  {
		    "city": "Wichita",
		    "region": "Kansas",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.wichita/"
		  },
		  {
		    "city": "Berea",
		    "region": "Kentucky",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.berea.kentucky/"
		  },
		  {
		    "city": "Bowling Green",
		    "region": "Kentucky",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.BG.kentucky/"
		  },
		  {
		    "city": "Frankfort",
		    "region": "Kentucky",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.frankfort.kentucky/"
		  },
		  {
		    "city": "Lexington",
		    "region": "Kentucky",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.lexington/"
		  },
		  {
		    "city": "London",
		    "region": "Kentucky",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.london.ky/"
		  },
		  {
		    "city": "Louisville",
		    "region": "Kentucky",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.louisville/"
		  },
		  {
		    "city": "Manchester",
		    "region": "Kentucky",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.manchester.kentucky/"
		  },
		  {
		    "city": "Paducah",
		    "region": "Kentucky",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.paducah/"
		  },
		  {
		    "city": "Tollesboro",
		    "region": "Kentucky",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/847024098734877"
		  },
		  {
		    "city": "Alexandria",
		    "region": "Louisiana",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.alexandria.la/"
		  },
		  {
		    "city": "Baton Rouge",
		    "region": "Louisiana",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.baton.rouge.louisiana/"
		  },
		  {
		    "city": "Lafayette",
		    "region": "Louisiana",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.lafayette/"
		  },
		  {
		    "city": "Leesville",
		    "region": "Louisiana",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.leesville.la/"
		  },
		  {
		    "city": "Mandeville",
		    "region": "Louisiana",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.mandeville/"
		  },
		  {
		    "city": "Metairie",
		    "region": "Louisiana",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.metairie.la/"
		  },
		  {
		    "city": "Morgan City",
		    "region": "Louisiana",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.morgan.ciry.la/"
		  },
		  {
		    "city": "New Orleans",
		    "region": "Louisiana",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.neworleans/"
		  },
		  {
		    "city": "Shreveport",
		    "region": "Louisiana",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.shreveport/"
		  },
		  {
		    "city": "Auburn",
		    "region": "Maine",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.auburn.maine/"
		  },
		  {
		    "city": "Augusta",
		    "region": "Maine",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.augusta/"
		  },
		  {
		    "city": "Portland",
		    "region": "Maine",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.portland.maine/"
		  },
		  {
		    "city": "Rockland",
		    "region": "Maine",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/435736603276121/"
		  },
		  {
		    "city": "Baltimore",
		    "region": "Maryland",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.baltimore/"
		  },
		  {
		    "city": "College Park",
		    "region": "Maryland",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.college.park"
		  },
		  {
		    "city": "Columbia",
		    "region": "Maryland",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/190253084650546/"
		  },
		  {
		    "city": "Frederick",
		    "region": "Maryland",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.frederick"
		  },
		  {
		    "city": "Germantown",
		    "region": "Maryland",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.germantown.maryland/"
		  },
		  {
		    "city": "Hagerstown",
		    "region": "Maryland",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.hagerstown/"
		  },
		  {
		    "city": "National Harbor",
		    "region": "Maryland",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.national.harbor/"
		  },
		  {
		    "city": "Salisbury",
		    "region": "Maryland",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.salisbury.maryland/"
		  },
		  {
		    "city": "Silver Spring",
		    "region": "Maryland",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.silverspring/"
		  },
		  {
		    "city": "Boston",
		    "region": "Massachusetts",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.boston/"
		  },
		  {
		    "city": "Burlington",
		    "region": "Massachusetts",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.massachusetts.burlington/"
		  },
		  {
		    "city": "Cape Cod",
		    "region": "Massachusetts",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.cape.cod/"
		  },
		  {
		    "city": "Hubbardston",
		    "region": "Massachusetts",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.hubbardston/"
		  },
		  {
		    "city": "Lexington",
		    "region": "Massachusetts",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.lexington.ma/"
		  },
		  {
		    "city": "Northampton",
		    "region": "Massachusetts",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.northampton.mass/"
		  },
		  {
		    "city": "Pepperell",
		    "region": "Massachusetts",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.pepperell.ma/"
		  },
		  {
		    "city": "Westwood",
		    "region": "Massachusetts",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.westwood/"
		  },
		  {
		    "city": "Worcester",
		    "region": "Massachusetts",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.worcester.ma/"
		  },
		  {
		    "city": "Adrian",
		    "region": "Michigan",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.adrian.mi/"
		  },
		  {
		    "city": "Ann Arbor",
		    "region": "Michigan",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.ann.arbor/"
		  },
		  {
		    "city": "Bad Axe",
		    "region": "Michigan",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.badaxe/"
		  },
		  {
		    "city": "Big Rapids",
		    "region": "Michigan",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bigrapids/"
		  },
		  {
		    "city": "Detroit",
		    "region": "Michigan",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.detroit/"
		  },
		  {
		    "city": "Fenton",
		    "region": "Michigan",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.fenton.mi/"
		  },
		  {
		    "city": "Flint",
		    "region": "Michigan",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.flint/"
		  },
		  {
		    "city": "Grand Rapids",
		    "region": "Michigan",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.grand.rapids/"
		  },
		  {
		    "city": "Ironwood",
		    "region": "Michigan",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.ironwood/"
		  },
		  {
		    "city": "Jackson",
		    "region": "Michigan",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.jackson.mi"
		  },
		  {
		    "city": "Kalamazoo",
		    "region": "Michigan",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kalamazoo/"
		  },
		  {
		    "city": "Lansing",
		    "region": "Michigan",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.lansing/"
		  },
		  {
		    "city": "Milford",
		    "region": "Michigan",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.milford.michigan/"
		  },
		  {
		    "city": "Muskegon",
		    "region": "Michigan",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.muskegon/"
		  },
		  {
		    "city": "Novi",
		    "region": "Michigan",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/Free.Code.Camp.NOVI.MI/"
		  },
		  {
		    "city": "Traverse City",
		    "region": "Michigan",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.traverse.city.mi/"
		  },
		  {
		    "city": "Tri-cities",
		    "region": "Michigan",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bay.city/"
		  },
		  {
		    "city": "University Center",
		    "region": "Michigan",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.university.center/"
		  },
		  {
		    "city": "Duluth",
		    "region": "Minnesota",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.duluth/"
		  },
		  {
		    "city": "Fergus Falls",
		    "region": "Minnesota",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.fergusfalls/"
		  },
		  {
		    "city": "Minneapolis",
		    "region": "Minnesota",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.minneapolis/"
		  },
		  {
		    "city": "Owatonna",
		    "region": "Minnesota",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.owatonna/"
		  },
		  {
		    "city": "Rochester",
		    "region": "Minnesota",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/250314195300021/"
		  },
		  {
		    "city": "Saint Cloud",
		    "region": "Minnesota",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.stcloud/"
		  },
		  {
		    "city": "Saint Paul",
		    "region": "Minnesota",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.saint.paul.mn/"
		  },
		  {
		    "city": "TC South Metro",
		    "region": "Minnesota",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.TC.South.Metro/"
		  },
		  {
		    "city": "Central Mississippi",
		    "region": "Mississippi",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.central.mississippi/"
		  },
		  {
		    "city": "Jackson",
		    "region": "Mississippi",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.jackson.ms"
		  },
		  {
		    "city": "Mississippi Gulf Coast",
		    "region": "Mississippi",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.msgulfcoast/"
		  },
		  {
		    "city": "Moss Point",
		    "region": "Mississippi",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.moss.point.mississippi/"
		  },
		  {
		    "city": "North Mississippi",
		    "region": "Mississippi",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.north.mississippi/"
		  },
		  {
		    "city": "Tupelo",
		    "region": "Mississippi",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/148780962143254/"
		  },
		  {
		    "city": "Independence",
		    "region": "Missouri",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.independence.mo/"
		  },
		  {
		    "city": "Lebanon",
		    "region": "Missouri",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.lebanon.mo/"
		  },
		  {
		    "city": "Maryville",
		    "region": "Missouri",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.maryville.missouri/"
		  },
		  {
		    "city": "Saint Louis",
		    "region": "Missouri",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.saint.louis/"
		  },
		  {
		    "city": "Springfield",
		    "region": "Missouri",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.springfield.missouri/"
		  },
		  {
		    "city": "West Plains",
		    "region": "Missouri",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.west.plains.missouri/"
		  },
		  {
		    "city": "Billings",
		    "region": "Montana",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.billings/"
		  },
		  {
		    "city": "Bozeman",
		    "region": "Montana",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bozeman/"
		  },
		  {
		    "city": "Butte",
		    "region": "Montana",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.butte.montana/"
		  },
		  {
		    "city": "Missoula",
		    "region": "Montana",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.missoula/"
		  },
		  {
		    "city": "Lincoln",
		    "region": "Nebraska",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.lincoln/"
		  },
		  {
		    "city": "North Platte",
		    "region": "Nebraska",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.north.platte/"
		  },
		  {
		    "city": "Omaha",
		    "region": "Nebraska",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.omaha/"
		  },
		  {
		    "city": "Las Vegas",
		    "region": "Nevada",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.las.vegas.nv/"
		  },
		  {
		    "city": "Reno",
		    "region": "Nevada",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.reno/"
		  },
		  {
		    "city": "Derry",
		    "region": "New Hampshire",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.derry.nh/"
		  },
		  {
		    "city": "Franklin",
		    "region": "New Hampshire",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/freecode.camp.franklin/"
		  },
		  {
		    "city": "Lebanon",
		    "region": "New Hampshire",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.lebanon.nh"
		  },
		  {
		    "city": "Manchester",
		    "region": "New Hampshire",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.manchester.new.hampshire/"
		  },
		  {
		    "city": "Rochester",
		    "region": "New Hampshire",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.rochester.new.hampshire/"
		  },
		  {
		    "city": "Atlantic City",
		    "region": "New Jersey",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.atlantic.city/"
		  },
		  {
		    "city": "Bordentown",
		    "region": "New Jersey",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bordentown/"
		  },
		  {
		    "city": "Clifton",
		    "region": "New Jersey",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.clifton.nj/"
		  },
		  {
		    "city": "East Hanover",
		    "region": "New Jersey",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.east.hanover/"
		  },
		  {
		    "city": "Flanders",
		    "region": "New Jersey",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.flanders.nj/"
		  },
		  {
		    "city": "Hoboken",
		    "region": "New Jersey",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.hoboken/"
		  },
		  {
		    "city": "Jersey City",
		    "region": "New Jersey",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.jersey.city.new.jersey/"
		  },
		  {
		    "city": "McAfee",
		    "region": "New Jersey",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.mcafee/"
		  },
		  {
		    "city": "Medford",
		    "region": "New Jersey",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.medford.nj/"
		  },
		  {
		    "city": "Morristown",
		    "region": "New Jersey",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.morristown/"
		  },
		  {
		    "city": "New Brunswick",
		    "region": "New Jersey",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.new.brunswick.new.jersey/"
		  },
		  {
		    "city": "Newark",
		    "region": "New Jersey",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.newark/"
		  },
		  {
		    "city": "Old Bridge",
		    "region": "New Jersey",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.old.bridge.new.jersey/"
		  },
		  {
		    "city": "Oradell",
		    "region": "New Jersey",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.oradell/"
		  },
		  {
		    "city": "Palisades Park",
		    "region": "New Jersey",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.palisadespark/"
		  },
		  {
		    "city": "Toms River",
		    "region": "New Jersey",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.toms.river/"
		  },
		  {
		    "city": "West Orange",
		    "region": "New Jersey",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.west.orange/"
		  },
		  {
		    "city": "Albuquerque",
		    "region": "New Mexico",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.albuquerque/"
		  },
		  {
		    "city": "Los Alamos",
		    "region": "New Mexico",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.los.alamos.nm/"
		  },
		  {
		    "city": "Las Cruces",
		    "region": "New Mexico",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.lc.nm/"
		  },
		  {
		    "city": "Albany",
		    "region": "New York",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.albany.ny/"
		  },
		  {
		    "city": "Binghampton",
		    "region": "New York",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.binghamton.ny/"
		  },
		  {
		    "city": "Bronx",
		    "region": "New York",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bronx.ny/"
		  },
		  {
		    "city": "Buffalo",
		    "region": "New York",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.buffalo/"
		  },
		  {
		    "city": "Ithaca",
		    "region": "New York",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.ithaca/"
		  },
		  {
		    "city": "Kingston",
		    "region": "New York",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kingston/"
		  },
		  {
		    "city": "Long Island",
		    "region": "New York",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.long.island.ny"
		  },
		  {
		    "city": "Middletown",
		    "region": "New York",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.middletown.ny/"
		  },
		  {
		    "city": "New Paltz",
		    "region": "New York",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.new.paltz/"
		  },
		  {
		    "city": "New York City",
		    "region": "New York",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.new.york.city/"
		  },
		  {
		    "city": "Rochester",
		    "region": "New York",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Rochester.New.York/"
		  },
		  {
		    "city": "Syracuse",
		    "region": "New York",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.syracuse/"
		  },
		  {
		    "city": "Queens",
		    "region": "New York",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.queens.ny/"
		  },
		  {
		    "city": "Asheville",
		    "region": "North Carolina",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.asheville/"
		  },
		  {
		    "city": "Charlotte",
		    "region": "North Carolina",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.charlotte.nc/"
		  },
		  {
		    "city": "Durham",
		    "region": "North Carolina",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.durham/"
		  },
		  {
		    "city": "Elizabeth City",
		    "region": "North Carolina",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Elizabeth.City/"
		  },
		  {
		    "city": "Fayetteville",
		    "region": "North Carolina",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/freecodecampfayettevilleNC/"
		  },
		  {
		    "city": "Goldsboro",
		    "region": "North Carolina",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.goldsboro/"
		  },
		  {
		    "city": "Greenville",
		    "region": "North Carolina",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.greenville.nc/"
		  },
		  {
		    "city": "Hickory",
		    "region": "North Carolina",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.hickory.nc"
		  },
		  {
		    "city": "Jacksonville",
		    "region": "North Carolina",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.jacksonville.nc/"
		  },
		  {
		    "city": "New Bern",
		    "region": "North Carolina",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.new.bern/"
		  },
		  {
		    "city": "Oriental",
		    "region": "North Carolina",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.orientalnc/"
		  },
		  {
		    "city": "Raleigh",
		    "region": "North Carolina",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.raleigh/"
		  },
		  {
		    "city": "Research Triangle Park",
		    "region": "North Carolina",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.rtp"
		  },
		  {
		    "city": "Wake Forest",
		    "region": "North Carolina",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.wake.forest"
		  },
		  {
		    "city": "Wilmington",
		    "region": "North Carolina",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.wilmington.nc/"
		  },
		  {
		    "city": "Winston Salem",
		    "region": "North Carolina",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/Free.Code.Camp.Winston.Salem/"
		  },
		  {
		    "city": "Greensboro",
		    "region": "North Carolina",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/freecodecampgreensboro/"
		  },
		  {
		    "city": "Bismarck",
		    "region": "North Dakota",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bismarck.north.dakota/"
		  },
		  {
		    "city": "Fargo",
		    "region": "North Dakota",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.fargo/"
		  },
		  {
		    "city": "Grand Forks",
		    "region": "North Dakota",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.grand.forks/"
		  },
		  {
		    "city": "Akron",
		    "region": "Ohio",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.akron"
		  },
		  {
		    "city": "Athens",
		    "region": "Ohio",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.athens.ohio/"
		  },
		  {
		    "city": "Cincinnati",
		    "region": "Ohio",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.cincinnati/"
		  },
		  {
		    "city": "Cleveland",
		    "region": "Ohio",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.cleveland/"
		  },
		  {
		    "city": "Columbus",
		    "region": "Ohio",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.columbus/"
		  },
		  {
		    "city": "Dayton",
		    "region": "Ohio",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.dayton.ohio/"
		  },
		  {
		    "city": "Toledo",
		    "region": "Ohio",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.toledo/"
		  },
		  {
		    "city": "Youngstown",
		    "region": "Ohio",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.youngstown/"
		  },
		  {
		    "city": "Muskogee",
		    "region": "Oklahoma",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.muskogee/"
		  },
		  {
		    "city": "Oklahoma City",
		    "region": "Oklahoma",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.oklahoma.city/"
		  },
		  {
		    "city": "Tahlequah",
		    "region": "Oklahoma",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.tahlequah.ok/"
		  },
		  {
		    "city": "Tulsa",
		    "region": "Oklahoma",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.tulsa/"
		  },
		  {
		    "city": "Bend",
		    "region": "Oregon",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bend.or/"
		  },
		  {
		    "city": "Corvallis",
		    "region": "Oregon",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.corvallis/"
		  },
		  {
		    "city": "Cottage Grove",
		    "region": "Oregon",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.cottagegrove/"
		  },
		  {
		    "city": "Eugene",
		    "region": "Oregon",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.eugene/"
		  },
		  {
		    "city": "Lebanon",
		    "region": "Oregon",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.lebanon/"
		  },
		  {
		    "city": "Medford",
		    "region": "Oregon",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.medford.oregon/"
		  },
		  {
		    "city": "Newport",
		    "region": "Oregon",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.newport.or/"
		  },
		  {
		    "city": "Portland",
		    "region": "Oregon",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.portland/"
		  },
		  {
		    "city": "Redmond",
		    "region": "Oregon",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.remond.oregon/"
		  },
		  {
		    "city": "Salem",
		    "region": "Oregon",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.salemor/"
		  },
		  {
		    "city": "Altoona",
		    "region": "Pennsylvania",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.altoona.pa/"
		  },
		  {
		    "city": "Bethlehem",
		    "region": "Pennsylvania",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/216683128680444/"
		  },
		  {
		    "city": "Bushkill",
		    "region": "Pennsylvania",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/Free.Code.Camp.Bushkill.PA/"
		  },
		  {
		    "city": "Erie",
		    "region": "Pennsylvania",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.erie/"
		  },
		  {
		    "city": "Harrisburg",
		    "region": "Pennsylvania",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.harrisburg.pa/"
		  },
		  {
		    "city": "Kutztown",
		    "region": "Pennsylvania",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Kutztown/"
		  },
		  {
		    "city": "Lehighton",
		    "region": "Pennsylvania",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.lehighton.pa/"
		  },
		  {
		    "city": "Montgomery County",
		    "region": "Pennsylvania",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.montgomery.county.PA/"
		  },
		  {
		    "city": "Philadelphia",
		    "region": "Pennsylvania",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.philadelphia/"
		  },
		  {
		    "city": "Pittsburgh",
		    "region": "Pennsylvania",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.pittsburgh.pa/"
		  },
		  {
		    "city": "State College",
		    "region": "Pennsylvania",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.stcollege.pa/"
		  },
		  {
		    "city": "Wilkes-Barre",
		    "region": "Pennsylvania",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.wilkesbarre/"
		  },
		  {
		    "city": "Williamsport",
		    "region": "Pennsylvania",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.williamsport/"
		  },
		  {
		    "city": "York",
		    "region": "Pennsylvania",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.york.pa/"
		  },
		  {
		    "city": "Providence",
		    "region": "Rhode Island",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.providence/"
		  },
		  {
		    "city": "Charleston",
		    "region": "South Carolina",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Charleston/"
		  },
		  {
		    "city": "Columbia",
		    "region": "South Carolina",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.columbia.sc/"
		  },
		  {
		    "city": "Easley",
		    "region": "South Carolina",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.easley/"
		  },
		  {
		    "city": "Mount Pleasant",
		    "region": "South Carolina",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.mt.pleasant/"
		  },
		  {
		    "city": "Spartanburg",
		    "region": "South Carolina",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.spartanburg/"
		  },
		  {
		    "city": "Greenville",
		    "region": "South Carolina",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Greenville/"
		  },
		  {
		    "city": "Pierre",
		    "region": "South Dakota",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.pierre.sd/"
		  },
		  {
		    "city": "Sioux Falls",
		    "region": "South Dakota",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sioux.falls/"
		  },
		  {
		    "city": "Chattanooga",
		    "region": "Tennessee",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.chattanooga/"
		  },
		  {
		    "city": "Clarksville",
		    "region": "Tennessee",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.clarksville.TN/"
		  },
		  {
		    "city": "Jackson",
		    "region": "Tennessee",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.jackson.tennessee/"
		  },
		  {
		    "city": "Knoxville",
		    "region": "Tennessee",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.knoxville.tn/"
		  },
		  {
		    "city": "Memphis",
		    "region": "Tennessee",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Memphis/"
		  },
		  {
		    "city": "Nashville",
		    "region": "Tennessee",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.nashville/"
		  },
		  {
		    "city": "Abilene",
		    "region": "Texas",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.abilene/"
		  },
		  {
		    "city": "Amarillo",
		    "region": "Texas",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/freecodecampamarillotexas/"
		  },
		  {
		    "city": "Arlington",
		    "region": "Texas",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.arlington.texas/"
		  },
		  {
		    "city": "Austin",
		    "region": "Texas",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.austin/"
		  },
		  {
		    "city": "Bryan / College Station",
		    "region": "Texas",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bryan.college.station/"
		  },
		  {
		    "city": "Corpus Christi",
		    "region": "Texas",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.corpus.christi/"
		  },
		  {
		    "city": "Dallas",
		    "region": "Texas",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.dallas/"
		  },
		  {
		    "city": "El Paso",
		    "region": "Texas",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.el.paso"
		  },
		  {
		    "city": "Fort Worth",
		    "region": "Texas",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/freecodecampfortworth/"
		  },
		  {
		    "city": "Galveston",
		    "region": "Texas",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.galveston/"
		  },
		  {
		    "city": "Houston",
		    "region": "Texas",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.houston/"
		  },
		  {
		    "city": "Kerrville",
		    "region": "Texas",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kerrville/"
		  },
		  {
		    "city": "Killeen",
		    "region": "Texas",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.killeen.texas/"
		  },
		  {
		    "city": "Longview",
		    "region": "Texas",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.tyler.longview.texas/"
		  },
		  {
		    "city": "Lubbock",
		    "region": "Texas",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.lubbock/"
		  },
		  {
		    "city": "Midland",
		    "region": "Texas",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.midland/"
		  },
		  {
		    "city": "Mission",
		    "region": "Texas",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.mission.texas/"
		  },
		  {
		    "city": "Plano",
		    "region": "Texas",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.plano/"
		  },
		  {
		    "city": "San Antonio",
		    "region": "Texas",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.san.antonio"
		  },
		  {
		    "city": "Southlake",
		    "region": "Texas",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.southlake/"
		  },
		  {
		    "city": "Tyler",
		    "region": "Texas",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Tyler.TX/"
		  },
		  {
		    "city": "Waco",
		    "region": "Texas",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.waco.tx/"
		  },
		  {
		    "city": "Wichita Falls",
		    "region": "Texas",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.wichita.falls.tx/"
		  },
		  {
		    "city": "Layton",
		    "region": "Utah",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.layton/"
		  },
		  {
		    "city": "Lehi",
		    "region": "Utah",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.lehi/"
		  },
		  {
		    "city": "Logan",
		    "region": "Utah",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.logan.utah/"
		  },
		  {
		    "city": "Provo",
		    "region": "Utah",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.provo/"
		  },
		  {
		    "city": "Salt Lake City",
		    "region": "Utah",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.salt.lake.city/"
		  },
		  {
		    "city": "St. George",
		    "region": "Utah",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.saint.george/"
		  },
		  {
		    "city": "Tooele",
		    "region": "Utah",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Tooele/"
		  },
		  {
		    "city": "Burlington",
		    "region": "Vermont",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.burlington.VT/"
		  },
		  {
		    "city": "Arlington",
		    "region": "Virginia",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.arlington.va/"
		  },
		  {
		    "city": "Blacksburg",
		    "region": "Virginia",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.blacksburg.virginia/"
		  },
		  {
		    "city": "Charlottesville",
		    "region": "Virginia",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.charlottesville/"
		  },
		  {
		    "city": "Emporia",
		    "region": "Virginia",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.emporia.va/"
		  },
		  {
		    "city": "Fairfax",
		    "region": "Virginia",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.fairfax/"
		  },
		  {
		    "city": "Farmville",
		    "region": "Virginia",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.farmville.va/"
		  },
		  {
		    "city": "Floyd",
		    "region": "Virginia",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.floyd.virginia/"
		  },
		  {
		    "city": "Fredericksburg",
		    "region": "Virginia",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.fredericksburg/"
		  },
		  {
		    "city": "Leesburg",
		    "region": "Virginia",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.leesburg/"
		  },
		  {
		    "city": "Lynchburg",
		    "region": "Virginia",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.LYH/"
		  },
		  {
		    "city": "Manassas",
		    "region": "Virginia",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.manassas/"
		  },
		  {
		    "city": "Norfolk",
		    "region": "Virginia",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.norfolk"
		  },
		  {
		    "city": "Petersburg",
		    "region": "Virginia",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.petersburg.va/"
		  },
		  {
		    "city": "Richmond",
		    "region": "Virginia",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.richmond.va/"
		  },
		  {
		    "city": "Roanoke",
		    "region": "Virginia",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.roanoke.va/"
		  },
		  {
		    "city": "South Boston",
		    "region": "Virginia",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.south.boston.va/"
		  },
		  {
		    "city": "Virginia Beach",
		    "region": "Virginia",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.virginia.beach/"
		  },
		  {
		    "city": "Winchester",
		    "region": "Virginia",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.winchester/"
		  },
		  {
		    "city": "Aberdeen",
		    "region": "Washington",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.aberdeen/"
		  },
		  {
		    "city": "Anacortes",
		    "region": "Washington",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.anacortes/"
		  },
		  {
		    "city": "Bainbridge Island",
		    "region": "Washington",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bainbridge.island"
		  },
		  {
		    "city": "Bellevue",
		    "region": "Washington",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.bellevue/"
		  },
		  {
		    "city": "Centralia",
		    "region": "Washington",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.centralia/"
		  },
		  {
		    "city": "Everett",
		    "region": "Washington",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.everett/"
		  },
		  {
		    "city": "Lake Stevens",
		    "region": "Washington",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Lake.Stevens.WA/"
		  },
		  {
		    "city": "Lakewood",
		    "region": "Washington",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.lakewood/"
		  },
		  {
		    "city": "Oak Harbor",
		    "region": "Washington",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.oak.harbor.wa/"
		  },
		  {
		    "city": "Olympia",
		    "region": "Washington",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.olympia/"
		  },
		  {
		    "city": "Port Angeles",
		    "region": "Washington",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.port.angeles/"
		  },
		  {
		    "city": "Port Orchard",
		    "region": "Washington",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.port.orchard/"
		  },
		  {
		    "city": "Poulsbo",
		    "region": "Washington",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.poulsbo.wa/"
		  },
		  {
		    "city": "Redmond",
		    "region": "Washington",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.redmond.wa/"
		  },
		  {
		    "city": "Seattle",
		    "region": "Washington",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.seattle/"
		  },
		  {
		    "city": "Shelton",
		    "region": "Washington",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.shelton/"
		  },
		  {
		    "city": "Spokane",
		    "region": "Washington",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.spokane/"
		  },
		  {
		    "city": "Tacoma",
		    "region": "Washington",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.tacoma/"
		  },
		  {
		    "city": "Tri-Cities",
		    "region": "Washington",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.tricitieswa/"
		  },
		  {
		    "city": "Yakima",
		    "region": "Washington",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.yakima.wa/"
		  },
		  {
		    "city": "Charleston",
		    "region": "West Virginia",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.charleston.wv"
		  },
		  {
		    "city": "Huntington",
		    "region": "West Virginia",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.huntington.wv/"
		  },
		  {
		    "city": "Morgantown",
		    "region": "West Virginia",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.morgantown/"
		  },
		  {
		    "city": "Wheeling",
		    "region": "West Virginia",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.wheeling.wv/"
		  },
		  {
		    "city": "Appleton",
		    "region": "Wisconsin",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.appleton/"
		  },
		  {
		    "city": "Burlington",
		    "region": "Wisconsin",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.Racine.WI/"
		  },
		  {
		    "city": "Eau Claire",
		    "region": "Wisconsin",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.eau.claire/"
		  },
		  {
		    "city": "Kenosha",
		    "region": "Wisconsin",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.kenosha/"
		  },
		  {
		    "city": "La Crosse",
		    "region": "Wisconsin",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.la.crosse"
		  },
		  {
		    "city": "Madison",
		    "region": "Wisconsin",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.madison.wisconsin/"
		  },
		  {
		    "city": "Milwaukee",
		    "region": "Wisconsin",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.milwaukee/"
		  },
		  {
		    "city": "Rice Lake",
		    "region": "Wisconsin",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.rice.lake.wi/"
		  },
		  {
		    "city": "Cheyenne",
		    "region": "Wyoming",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.cheyenne/"
		  },
		  {
		    "city": "Sheridan",
		    "region": "Wyoming",
		    "country": "United States",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.sheridan/"
		  },
		  {
		    "city": "Montevideo",
		    "country": "Uruguay",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.montevideo/"
		  },
		  {
		    "city": "Paysandú",
		    "country": "Uruguay",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.paysandu/"
		  },
		  {
		    "city": "Tashkent",
		    "country": "Uzbekistan",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.tashkent/"
		  },
		  {
		    "city": "Acarigua",
		    "country": "Venezuela",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.acarigua/"
		  },
		  {
		    "city": "Barquisimeto",
		    "country": "Venezuela",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.barquisimeto/"
		  },
		  {
		    "city": "Caracas",
		    "country": "Venezuela",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.caracas/"
		  },
		  {
		    "city": "Coro",
		    "country": "Venezuela",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.coro"
		  },
		  {
		    "city": "Guacara",
		    "country": "Venezuela",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.guacara/"
		  },
		  {
		    "city": "Guayana",
		    "country": "Venezuela",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.guayanaedobolivar/"
		  },
		  {
		    "city": "Maracaibo",
		    "country": "Venezuela",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.maracaibo/"
		  },
		  {
		    "city": "Maracay",
		    "country": "Venezuela",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.maracay"
		  },
		  {
		    "city": "Merida",
		    "country": "Venezuela",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.merida.venezuela/"
		  },
		  {
		    "city": "Porlamar",
		    "country": "Venezuela",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.porlamar/"
		  },
		  {
		    "city": "Valencia",
		    "country": "Venezuela",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.valencia.venezuela/"
		  },
		  {
		    "city": "Valle de La Pascua",
		    "country": "Venezuela",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.vlp/"
		  },
		  {
		    "city": "Da Nang",
		    "country": "Vietnam",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.your.Da.Nang/"
		  },
		  {
		    "city": "Hanoi",
		    "country": "Vietnam",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.hanoi/"
		  },
		  {
		    "city": "Ho Chi Minh City",
		    "country": "Vietnam",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.hochiminhcity/"
		  },
		  {
		    "city": "Hue",
		    "country": "Vietnam",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.hue/"
		  },
		  {
		    "city": "Bangor",
		    "country": "Wales",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.wales.bangor/"
		  },
		  {
		    "city": "Cardiff",
		    "country": "Wales",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.cardiff/"
		  },
		  {
		    "city": "Chepstow",
		    "country": "Wales",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.chepstow/"
		  },
		  {
		    "city": "Swansea",
		    "country": "Wales",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.swansea/"
		  },
		  {
		    "city": "Lukasa",
		    "country": "Zambia",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.lusaka/"
		  },
		  {
		    "city": "Harare",
		    "country": "Zimbabwe",
		    "facebook": "https://www.facebook.com/groups/free.code.camp.harare/"
		  }
		]
	}
});