var idAndNombre = $(".titulo.uppercase");
if (idAndNombre.length > 0) {
    var texto = idAndNombre.text();
    var texto2 = idAndNombre.text().trim();
    var idempire = texto.match(/#(\d+)/);
    var nomimperio = texto2.match(/^(.*?)#/);
    if (nomimperio && nomimperio.length > 1) {
        var nombreImperio = nomimperio[1].trim();
    }
    if (idempire && idempire.length > 1) {
        var idImperio = idempire[1];
    } else {
        console.log("ID del Imperio no encontrado");
    }
} else {
    console.log("Elemento con clase 'titulo' y 'uppercase' no encontrado");
}
var nombre = nombreImperio;
var id = idImperio;
var infoElement = document.querySelector('#datos > p');
var fullText = infoElement.textContent || infoElement.innerText;
var dashPosition = fullText.indexOf('-');
var raza = fullText.substring(0, dashPosition).trim();
var siglaclan = $("#datos > p > span");
var textocompleto = siglaclan.text();
var clansigla = textocompleto.match(/\((.*?)\)/);
if (clansigla) {
    var textoEntreParentesis = clansigla[1];
    clan = textoEntreParentesis;
} else {
    console.log('Texto entre paréntesis no encontrado');
}
var ciudades = [];
var heroes = [];
var produccion = [];
var indicebelico = document.querySelector('#datos > table > tbody > tr:nth-child(1)');
var indbel = indicebelico.textContent || indicebelico.innerText;
var match = indbel.match(/(\d+)%/);
if (match) {
    var numero = parseInt(match[1], 10);
    //console.log('Número:', numero);
} else {
    console.log('Número no encontrado');
}
var ib = numero;
if (ib <= 15) {
    var pacifico = true;
} else {
    var pacifico = false;
}
//Formula 0.1*(100 - IB actual)
var ibReducidoAlPaso = 0.1 * (100 - ib);
var ibAlPaso = (ib - ibReducidoAlPaso).toFixed(1);
if (ibAlPaso < 0) ibAlPaso = 0;
var idReducido = parseFloat(ib);
var count = 1;
while (15 <= idReducido) {
    idReducido = idReducido - 0.1 * (100 - idReducido);
    if (15 <= idReducido) count++;
}
/* /if(ib<=15 && LOCAL.getValor( )> 500){
	//var iconoP=`<span id="icono_pacifico"> <img src="//images.empire-strike.com/archivos/icon_paz.gif" width="15" height="15" align="absmiddle" hspace="2" title="Eres un imperio Pacífico"></span>`;
	//$("#datos>tbody>tr:eq(4)").append(`<td><b>IB al paso:</b> ${ibAlPaso}%${iconoP}</td>`);
	pacifico=true;
} else {
	//$("#datos>tbody>tr:eq(4)").append(`<td><b>IB al paso:</b> ${ibAlPaso}%, necesitas ${count} paso(s) para volver a pacifico</td>`); 
    pacifico= false;
} */
LOCAL.setPacifico(pacifico);
// OBTENER CIUDADES
var famaProduccion = 0;
console.log("Comienza a recabar informacion de las ciudades");
$(".lista2:not(:first) tr").each(function(index, obj) {
    console.log("entra");
    if (index == 0) {
        console.log("index 0");
        return;
    }
    if (obj.children.length < 16 || obj.children.length > 17) {
        //console.log("index 1");
        //return;
    }
    var ciudadidregion = $(obj.children[1]).text().trim();
    // Expresión regular para encontrar el nombre de la ciudad, el id y el número de la región
    var regex = /(.+?)\s*#\s*(\d+)\s*\|\s*Región\s*#\s*(\d+)/;
    var cir = ciudadidregion.match(regex);
    if (cir) {
        var nombreCiudad = cir[1].trim(); // Obtener el nombre de la ciudad y quitar espacios adicionales
        var idCiudad = cir[2]; // Obtener el ID de la ciudad
        var numeroRegion = cir[3]; // Obtener el número de la región
        console.log("Nombre de la ciudad:", nombreCiudad);
        console.log("ID de la ciudad:", idCiudad);
        console.log("Número de la región:", numeroRegion);
    } else {
        console.log("No se encontraron coincidencias");
    }
    var sinRutas = obj.children.length == 16 ? 1 : 0;
    var idCiudad = $(obj.children[0]).text().trim();
    console.log(idCiudad);
    console.log("idCiudad");
    var nombre = $(obj.children[2]).text().trim();
    console.log(nombre);
    console.log("nombre");
    var poblacion = $(obj.children[2]).text().trim().replace(/\./g, "");
    console.log(poblacion);
    console.log("poblacion");
    var edificios = $(obj.children[2]).text().trim();
    console.log("edificios");
    console.log(edificios);
    var fama = parseInt($(obj.children[3]).text().trim().replace("#", ""));
    console.log(fama);
    console.log("fama");
    var fama2 = parseInt($(obj.children[3]).text().trim().substring(0, 3));
    console.log(fama2);
    console.log("fama2");
    var oro = $(obj.children[4]).text().trim().replace(/\./g, "");
    console.log("oro");
    console.log(oro);
    var poblacion = $(obj.children[7]).text().trim().replace(/\./g, "");
    console.log("poblacion");
    console.log(poblacion);
    var moral = $(obj.children[8]).text().trim().replace(/\./g, "");
    console.log("moral");
    console.log(moral);
    var edificios = $(obj.children[9]).text().trim();
    console.log("edificios");
    console.log(edificios);
    var region = parseInt($(obj.children[5]).text().trim().substring(0, 3));
    console.log("region");
    console.log(region);
    var recursos = $(obj.children[14 - sinRutas]).text().trim().replace("%", "");
    console.log("recursos");
    console.log(recursos);
    var proteccion = $(obj.children[15 - sinRutas]).text().trim();
    console.log("proteccion");
    console.log(proteccion);
    var tropas = $(obj.children[12 - sinRutas]).text().trim().replace(/\./g, "");
    console.log("tropas");
    console.log(tropas);
    var ciudades = {
        sinRutas,
        idCiudad,
        nombre,
        region,
        poblacion,
        oro,
        recursos,
        edificios,
        fama,
        moral,
        proteccion,
        tropas
    };
    //console.log(ciudades);
    /// 
    // ciudades.push(imperio_generateCiudad(id, idCiudad, nombre, region, poblacion, edificios, oro, recursos, fama, moral, tropas));
    //$(obj.children[15 - sinRutas]).append("<br><span style='font-size:11px'><b style='color:#990000'>" + saleProteccion.formatDate() + "</b></span>");
});
produccion.fama = famaProduccion;
// OBTENER HEROES
$(".lista2:first tr").each(function(index, obj) {
    if (index == 0) return;
    if (obj.children.length != 20) return;
    var nombre = $(obj.children[1]).find("strong").html().trim();
    var clase = $(obj.children[2]).text().trim();
    var nivel = parseInt($(obj.children[1]).text().replace(nombre, "").replace("N", "").trim());
    var ataque = $(obj.children[5]).text().trim();
    var defensa = $(obj.children[6]).text().trim();
    var daño = $(obj.children[7]).text().trim();
    var vida = $(obj.children[8]).text().trim();
    var velocidad = $(obj.children[9]).text().trim();
    var moral = $(obj.children[10]).text().trim();
    var energia = $(obj.children[11]).text().trim();
    var habilidad = $(obj.children[13]).text().trim();
    var victorias = $(obj.children[15]).text().trim();
    var region = $(obj.children[4]).text().trim().replace("#", "");
    var tropas = $(obj.children[14]).text().trim();
    heroes.push(imperio_generateHeroe(nombre, clase, nivel, ataque, defensa, daño, vida, velocidad, moral, energia, habilidad, victorias, region, tropas));
});
// OBTENER PRODUCCION
$("#cuadro_produccion .contenido table tr").each(function(index, obj) {
    switch (index) {
        case 0:
            produccion.turnos = parseInt($(obj.children[1]).text().replace(/\./g, "").trim());
            produccion.hierro = parseInt($(obj.children[3]).text().replace(/\./g, "").trim());
            produccion.herramientas = parseInt($(obj.children[6]).text().replace(/\./g, "").trim());
            produccion.armas = parseInt($(obj.children[8]).text().replace(/\./g, "").trim());
            break;
        case 1:
            produccion.mana = parseInt($(obj.children[1]).text().replace(/\./g, "").trim());
            produccion.piedra = parseInt($(obj.children[3]).text().replace(/\./g, "").trim());
            produccion.bloques = parseInt($(obj.children[6]).text().replace(/\./g, "").trim());
            break;
        case 2:
            produccion.karma = parseInt($(obj.children[1]).text().replace(/\./g, "").trim());
            produccion.madera = parseInt($(obj.children[3]).text().replace(/\./g, "").trim());
            produccion.tablas = parseInt($(obj.children[6]).text().replace(/\./g, "").trim());
            break;
        case 3:
            produccion.oro = parseInt($(obj.children[1]).text().replace(/\./g, "").trim());
            produccion.mithril = parseInt($(obj.children[3]).text().replace(/\./g, "").trim());
            produccion.reliquias = parseInt($(obj.children[6]).text().replace(/\./g, "").trim());
            break;
        case 4:
            produccion.alimentos = parseInt($(obj.children[1]).text().replace(/\./g, "").trim());
            produccion.plata = parseInt($(obj.children[3]).text().replace(/\./g, "").trim());
            produccion.joyas = parseInt($(obj.children[6]).text().replace(/\./g, "").trim());
            break;
        case 5:
            produccion.agua = parseInt($(obj.children[1]).text().replace(/\./g, "").trim());
            produccion.gemas = parseInt($(obj.children[3]).text().replace(/\./g, "").trim());
            produccion.cristal = parseInt($(obj.children[6]).text().replace(/\./g, "").trim());
            break;
        default:
            return
    }
});
if (LOCAL.getImperio() == null) {
    var imperio = imperio_generateImperio(id, nombre, raza, GLOBAL.getPartida(), GLOBAL.getRonda(), clan, ciudades, produccion, heroes, GLOBAL.getFechaFin(), pacifico);
    LOCAL.setCiudad(ciudades);
    LOCAL.setHeroe(heroes);
    LOCAL.setProduccion(produccion);
    LOCAL.setImperio(imperio)
    //API.setRutasHeroku(id,GLOBAL.getPartida(),clan,GLOBAL.getRonda(),ciudades)
    //API.setImperio(id, nombre, raza, GLOBAL.getPartida(), GLOBAL.getRonda(), clan, ciudades, produccion, heroes, GLOBAL.getFechaFin());
} else {
    var update = false;
    var localCiudades = LOCAL.getCiudad();
    var localHeroes = LOCAL.getHeroe();
    var localProduccion = LOCAL.getProduccion();
    if (localCiudades != null && localCiudades.length != ciudades.length) update = true;
    else if (localHeroes != null && localHeroes.length != heroes.length) update = true;
    else {
        if (localHeroes != null && !update)
            for (var i = 0; i < heroes.length; i++) {
                var temp = heroes[i];
                var heroe = null;
                for (var j = 0; j < localHeroes.length; j++)
                    if (localHeroes[j].nombre == temp.nombre && localHeroes[j].clase == temp.clase) {
                        heroe = localHeroes[j];
                        break;
                    }
                if (heroe != null && (temp.nivel != heroe.nivel || temp.victorias != heroe.victorias || temp.habilidad != heroe.habilidad || temp.ataque != heroe.ataque || temp.defensa != heroe.defensa || temp.daño != heroe.daño || temp.tropas != heroe.tropas || temp.region != heroe.region)) {
                    update = true;
                    break;
                }
            }
        if (localCiudades != null && !update)
            for (var i = 0; i < ciudades.length; i++) {
                var temp = ciudades[i];
                var ciudad = null;
                for (var j = 0; j < localCiudades.length; j++)
                    if (localCiudades[j].idCiudad == temp.idCiudad) {
                        ciudad = localCiudades[j];
                        break;
                    }
                if (ciudad != null && (temp.poblacion != ciudad.poblacion || temp.fama != ciudad.fama || temp.moral != ciudad.moral || temp.tropas != ciudad.tropas || temp.edificios != ciudad.edificios || temp.oro != ciudad.oro)) {
                    update = true;
                    break;
                }
            }
    }
    if (update) API.setImperio(id, nombre, raza, GLOBAL.getPartida(), GLOBAL.getRonda(), clan, ciudades, produccion, heroes, GLOBAL.getFechaFin());
}
GLOBAL.cargaImperio();

function imperio_generateCiudad(idImperio, idCiudad, nombre, region, poblacion, edificios, oro, recursos, fama, moral, defensa, tropas, proteccion) {
    return {
        "id": idImperio,
        "idCiudad": idCiudad,
        "nombre": nombre,
        "region": region,
        "poblacion": poblacion,
        "edificios": edificios,
        "oro": oro,
        "recursos": recursos,
        "fama": fama,
        "moral": moral,
        "defensa": defensa,
        "tropas": tropas,
        "proteccion": proteccion,
        "cargada": false,
        "data": null
    }
}

function imperio_generateHeroe(nombre, clase, nivel, ataque, defensa, daño, vida, velocidad, moral, energia, habilidad, victorias, region, tropas) {
    return {
        "nombre": nombre,
        "clase": clase,
        "nivel": nivel,
        "ataque": ataque,
        "defensa": defensa,
        "daño": daño,
        "vida": vida,
        "velocidad": velocidad,
        "moral": moral,
        "energia": energia,
        "habilidad": habilidad,
        "victorias": victorias,
        "region": region,
        "tropas": tropas
    }
}

function imperio_generateImperio(id, name, raze, game, round, clan, ciudades, produccion, heroes, fechaFin, pacifico) {
    return {
        "id": id,
        "nombre": name,
        "raza": raze,
        "partida": game,
        "ronda": round,
        "clan": clan,
        "ciudades": ciudades,
        "produccion": produccion,
        "heroes": heroes,
        "fechaFin": fechaFin,
        "pacifico": pacifico
    }
}
//// 	VARIABLES QUE NO FUNCIONAN
///
/*
    
    var sinRutas = obj.children.length == 16 ? 1 : 0;
    console.log("sin rutas");
    console.log(sinRutas);
    var idCiudad = $(obj.children[0]).text().trim();
    console.log("idCiudad");
    console.log(idCiudad);
    var algo = $(obj.children[1]).text().trim();
    console.log("no se que es");
    console.log(algo);
    var nombre = $(obj.children[2]).text().trim();
    console.log("nombre");
    console.log(nombre);
    var region = $(obj.children[3]).text().trim().replace("#", "");
    console.log("region");
    console.log(region);
    var poblacion = $(obj.children[4]).text().trim().replace(/\./g, "");
    console.log("poblacion");
    console.log(poblacion);
    var otro = $(obj.children[5]).text().trim();
    console.log("no se que es");
    console.log(otro);
    var masss = $(obj.children[6]).text().trim();
    console.log("no se que es");
    console.log(masss);
    var oro = $(obj.children[7]).text().trim().replace(/\./g, "");
    console.log("oro");
    console.log(oro);
    var otracosa = $(obj.children[1]).text().trim();
    console.log("no se que es");
    console.log(otracosa);
    var recursos = $(obj.children[8]).text().trim().replace(/\./g, "");
    console.log("recursos");
    console.log(recursos);
    var edificios = $(obj.children[9]).text().trim();
    console.log("edificios");
    console.log(edificios);
    var fama = parseInt($(obj.children[5]).text().trim().substring(0, 3));
    console.log("fama");
    console.log(fama);
    var moral = $(obj.children[14 - sinRutas]).text().trim().replace("%", "");
    console.log("moral");
    console.log(moral);
    //var defensa = obj.children[1].children[0].children[1]text().trim();
    //var defensa = obj.children[1].children[0].children[1].src.replace("https://images.empire-strike.com/archivos/sistemas_defensivos/25/", "").replace(".jpg", "");
    // console.log("defensa");
    // console.log(defensa);
    var proteccion = $(obj.children[15 - sinRutas]).text().trim();
    console.log("proteccion");
    console.log(proteccion);
    var tropas = $(obj.children[12 - sinRutas]).text().trim().replace(/\./g, "");
    console.log("tropas");
    console.log(tropas);
    // famaProduccion = famaProduccion + parseInt(obj.children[5].innerText.split("+")[1].trim());
    // console.log("famaProduccion");
    // console.log(famaProduccion);
    /*if(proteccion == "SP" || proteccion == "CU")
	{
		ciudades.push(imperio_generateCiudad(id, idCiudad, nombre, region, poblacion, edificios, oro, recursos, fama, moral, defensa, tropas, proteccion));
		return;
	}
	var hh = parseInt(proteccion.substring(0,2));
	var mm = parseInt(proteccion.substring(3,5));

	var saleProteccion = new Date();
	saleProteccion = saleProteccion.addHours(hh);
	saleProteccion = saleProteccion.addMinutes(mm);
*/