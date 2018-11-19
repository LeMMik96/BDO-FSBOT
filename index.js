console.log('Ready');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
  bot.user.setGame('Write !fs , !help or !guides')
})

bot.on('message', (message) => {
	if (message.content == '!news' || message.content == '!novedades') {
		message.channel.sendMessage(
			'Guides (cooking, alchemy, training): !guides' + '\n' +
			'You can talk in private with the bot (less spam on the channel)' + '\n' +
			'Boss scheudle: !boss');
	}


	//Joyería azul
	if (message.content == '!fs joyeria azul' || message.content == '!fs blue accessories') {
		message.channel.sendMessage(
			'PRI: 15-20 (max 25)' + '\n' + 
			'DUO: 25-30 (max 35)' + '\n' + 
			'TRI: 35-40 (max 45)' + '\n' + 
			'TET: +45 (max 90)' + '\n' + 
			'PEN: max 124');
	}

	//Joyería amarilla
	if (message.content == '!fs joyeria amarilla' || message.content == '!fs joyeria boss' 
		|| message.content == '!fs yellow accessories') {
		message.channel.sendMessage(
			'PRI: 25 (max 25)' + '\n' + 
			'DUO: 35 (max 35)' + '\n' + 
			'TRI: 45 (max 45)' + '\n' + 
			'TET: 90 (max 90)' + '\n' + 
			'PEN: max 124');
	}

	//Asula
	if (message.content == '!fs asula') {
		message.channel.sendMessage(
			'I wouldnt recomend enchancing this items, they are really easy to upgrade but the beneficts doesnt worth the risk' + '\n' + 
			'But if you have tons of this accessories you can try with these fs:' + '\n' + 
			'PRI: 0' + '\n' + 
			'DUO: 5-10' + '\n' + 
			'TRI: 10-15' + '\n' + 
			'TET: +20' + '\n' + 
			'PEN: +25-30');
	}
	
	//Armas de boss
	if (message.content == '!fs kzarka' || message.content == '!fs dandelion' || message.content == '!fs kutum' 
		|| message.content == '!fs nouver' || message.content == '!fs offin' || message.content == '!fs offin tetts'  
  		|| message.content == '!fs offin tet'  || message.content == '!fs offin tets' || message.content == "!fs offin tett's"
  		|| message.content == "!fs offin tet's") {
		message.channel.sendMessage(
		'+1 - +7: 0fs (always works)' + '\n'+
		'+8: 10fs (max 13)' + '\n' +
		'+9: 11fs (max 14)' + '\n' +
		'+10: 12fs (max 15)' + '\n' +
		'+11: 13fs (max 16)' + '\n' +
		'+12: 15fs (max 18)' + '\n' +
		'+13: 17fs (max 20)' + '\n' +
		'+14: 20fs (max 25)' + '\n' +
		'+15: 20fs (max 25)' + '\n' +
		'PRI: 18-20fs (max 25)' + '\n' +
		'DUO: 25-30fs (max 35)' + '\n' +
		'TRI: 35-40fs (max 45)' + '\n' +
		'TET: 55fs (max 90)' + '\n' +
		'PEN: 90fs (max 124)' + '\n');
	}

		//Armadura boss
		if (message.content == '!fs bheg' || message.content == '!fs giath' || message.content == '!fs dim tree'
		 || message.content == '!fs red nose' || message.content == '!fs griffon' || message.content == '!fs urugon'
		 || message.content == '!fs muskan'  || message.content == '!fs muskans' || message.content == '!fs urugons') {
		message.channel.sendMessage(
		'+1 hasta +5: 0fs (always works)' + '\n'+
		'+6: 2-3fs (max 10)' + '\n' +
		'+7: 4-5fs (max 12)' + '\n' +
		'+8: 6-8fs (max 13)' + '\n' +
		'+9: 11fs (max 14)' + '\n' +
		'+10: 12fs (max 15)' + '\n' +
		'+11: 13fs (max 16)' + '\n' +
		'+12: 15fs (max 18)' + '\n' +
		'+13: 17fs (max 20)' + '\n' +
		'+14: 20fs (max 25)' + '\n' +
		'+15: 20fs (max 25)' + '\n' +
		'PRI: 18-20fs (max 25)' + '\n' +
		'DUO: 25-30fs (max 35)' + '\n' +
		'TRI: 35-40fs (max 45)' + '\n' +
		'TET: 55fs (max 90)' + '\n' +
		'PEN: 90fs (max 124)' );
	}

	//Armas verdes
		if (message.content == '!fs elsh' || message.content == '!fs kalis' || message.content == '!fs azwell' 
		|| message.content == '!fs bares' || message.content == '!fs yuria' || message.content == '!fs ain'
		|| message.content == '!fs krea' || message.content == '!fs seleth' || message.content == '!fs rosar'
		|| message.content == '!fs vangertz' || message.content == '!fs axion' || message.content == '!fs kite'
		|| message.content == '!fs helrick' || message.content == '!fs jubre' || message.content == '!fs rhik'
		|| message.content == '!fs bronze dagger' || message.content == '!fs steel dagger' || message.content == '!fs parrying dagger'
		|| message.content == '!fs saiyer' || message.content == '!fs oros' || message.content == '!fs theos'
		|| message.content == '!fs incense' || message.content == '!fs needle' || message.content == '!fs blade'
		|| message.content == '!fs black horn warrior bow' || message.content == '!fs white horn bow'
		|| message.content == '!fs white horn warrior bow' || message.content == '!fs quitar'
		|| message.content == '!fs estique' || message.content == '!fs tadd' || message.content == '!fs leather vambrace'
		|| message.content == '!fs scale vambrace' || message.content == '!fs iron vambrace'
		|| message.content == '!fs bronze' || message.content == '!fs steel' || message.content == '!fs scale'
		|| message.content == '!fs iron') {
		message.channel.sendMessage(
		'+1 hasta +7:0fs (always works)' + '\n'+
		'+8: 1-3fs (max 13)' + '\n' +
		'+9: 5fs (max 14)' + '\n' +
		'+10: 8fs (max 15)' + '\n' +
		'+11: 10fs (max 16)' + '\n' +
		'+12: 11fs (max 18)' + '\n' +
		'+13: 12fs (max 20)' + '\n' +
		'+14: 15fs (max 25)' + '\n' +
		'+15: 15fs (max 25)' + '\n' +
		'PRI: 15-20fs (max 25)' + '\n' +
		'DUO: 18-25fs (max 35)' + '\n' +
		'TRI: 25-32fs (max 45)' + '\n' +
		'TET: 45fs (max 90)' + '\n' +
		'PEN: 60fs (max 124)' + '\n');
	}

	//Equipo verde
	if (message.content == '!fs equipo verde' || message.content == '!fs green stuff' || message.content == '!fs green item' 
     || message.content == '!fs green gear' || message.content == '!fs armadura verde' || message.content == '!fs arma verde') {
		message.channel.sendMessage(
		'ARMOR:' + '\n' +
		'+1 hasta +5: 0fs (always works)' + '\n' +
		'+6: 1-3fs (max 10)' + '\n' +
		'+7: 1-3fs (max 12)' + '\n' +
		'+8: 1-3fs (max 13)' + '\n' +
		'+9: 5fs (max 14)' + '\n' +
		'+10: 8fs (max 15)' + '\n' +
		'+11: 10fs (max 16)' + '\n' +
		'+12: 11fs (max 18)' + '\n' +
		'+13: 12fs (max 20)' + '\n' +
		'+14: 15fs (max 25)' + '\n' +
		'+15: 15fs (max 25)' + '\n' +
		'PRI: 15-20fs (max 25)' + '\n' +
		'DUO: 18-25fs (max 35)' + '\n' +
		'TRI: 25-32fs (max 45)' + '\n' +
		'TET: 45fs (max 90)' + '\n' +
		'PEN: 60fs (max 124)' + '\n'+ '\n'+ '\n' +
		'WEAPONS:' +  '\n' +
		'+1 hasta +7: 0fs (always works)' + '\n'+
		'+8: 1-3fs (max 13)' + '\n' +
		'+9: 5fs (max 14)' + '\n' +
		'+10: 8fs (max 15)' + '\n' +
		'+11: 10fs (max 16)' + '\n' +
		'+12: 11fs (max 18)' + '\n' +
		'+13: 12fs (max 20)' + '\n' +
		'+14: 15fs (max 25)' + '\n' +
		'+15: 15fs (max 25)' + '\n' +
		'PRI: 15-20fs (max 25)' + '\n' +
		'DUO: 18-25fs (max 35)' + '\n' +
		'TRI: 25-32fs (max 45)' + '\n' +
		'TET: 45fs (max 90)' + '\n' +
		'PEN: 60fs (max 124)' + '\n');
	}

	//Equipo azul
	if (message.content == '!fs equipo azul' || message.content == '!fs blue stuff' || message.content == '!fs blue item' || message.content == '!fs blue gear'
  || message.content == '!fs liverto' || message.content == '!fs lemoria' || message.content == '!fs armadura azul' 
  || message.content == '!fs arma azul' || message.content == '!fs blue awakening' || message.content == '!fs awakening azul') {
		message.channel.sendMessage(
		'ARMOR:' + '\n' +
		'+1 hasta +5: 0fs (always works)' + '\n'+
		'+6: 2-3fs (max 10)' + '\n' +
		'+7: 4-5fs (max 12)' + '\n' +
		'+8: 6-8fs (max 13)' + '\n' +
		'+9: 9fs (max 14)' + '\n' +
		'+10: 9-10fs (max 15)' + '\n' +
		'+11: 10fs (max 16)' + '\n' +
		'+12: 10-12fs (max 18)' + '\n' +
		'+13: 15fs (max 20)' + '\n' +
		'+14: 17-18fs (max 25)' + '\n' +
		'+15: 17-18fs (max 25)' + '\n' +
		'PRI: 17fs (max 25)' + '\n' +
		'DUO: 25-30fs (max 35)' + '\n' +
		'TRI: 30-40fs (max 49)' + '\n' +
		'TET: 50 (max 90)' + '\n' +
		'PEN: +90fs (max 124)' + '\n' + '\n'+ '\n' +
		'WEAPONS:' +  '\n' +
		'+1 hasta +7: 0fs (always works)' + '\n'+
		'+8: 10fs (max 13)' + '\n' +
		'+9: 11fs (max 14)' + '\n' +
		'+10: 12fs (max 15)' + '\n' +
		'+11: 13fs (max 16)' + '\n' +
		'+12: 15fs (max 18)' + '\n' +
		'+13: 17fs (max 20)' + '\n' +
		'+14: 20fs (max 25)' + '\n' +
		'+15: 20fs (max 25)' + '\n' +
		'PRI: 18-20fs (max 25)' + '\n' +
		'DUO: 25-30fs (max 35)' + '\n' +
		'TRI: 35-49fs (max 49)' + '\n' +
		'TET: 50 (max 90)' + '\n' +
		'PEN: +90fs (max 124)' + '\n');
	}

	//Equipo de boss
	if (message.content == '!fs equipo boss' || message.content == '!fs boss stuff' || message.content == '!fs boss item' || message.content == '!fs boss gear'
		|| message.content == '!fs equipo amarillo' || message.content == '!fs equipo de boss' || message.content == '!fs armadura boss'
		|| message.content == '!fs armadura de boss' || message.content == '!fs arma de boss' || message.content == '!fs boss armor') {
		message.channel.sendMessage(
		'ARMOR:' + '\n' +
		'+1 hasta +5: 0fs (always works)' + '\n'+
		'+6: 2-3fs (max 10)' + '\n' +
		'+7: 4-5fs (max 12)' + '\n' +
		'+8: 6-8fs (max 13)' + '\n' +
		'+9: 11fs (max 14)' + '\n' +
		'+10: 12fs (max 15)' + '\n' +
		'+11: 13fs (max 16)' + '\n' +
		'+12: 15fs (max 18)' + '\n' +
		'+13: 17fs (max 20)' + '\n' +
		'+14: 20fs (max 25)' + '\n' +
		'+15: 20fs (max 25)' + '\n' +
		'PRI: 18-20fs (max 25)' + '\n' +
		'DUO: 25-30fs (max 35)' + '\n' +
		'TRI: 35-40fs (max 45)' + '\n' +
		'TET: 55fs (max 90)' + '\n' +
		'PEN: 90fs (max 124)' + '\n' + '\n'+ '\n' +
		'WEAPONS:' +  '\n' +
		'+1 hasta +7: 0fs (always works)' + '\n'+
		'+8: 10fs (max 13)' + '\n' +
		'+9: 11fs (max 14)' + '\n' +
		'+10: 12fs (max 15)' + '\n' +
		'+11: 13fs (max 16)' + '\n' +
		'+12: 15fs (max 18)' + '\n' +
		'+13: 17fs (max 20)' + '\n' +
		'+14: 20fs (max 25)' + '\n' +
		'+15: 20fs (max 25)' + '\n' +
		'PRI: 18-20fs (max 25)' + '\n' +
		'DUO: 25-30fs (max 35)' + '\n' +
		'TRI: 35-40fs (max 45)' + '\n' +
		'TET: 55fs (max 90)' + '\n' +
		'PEN: 90fs (max 124)' + '\n');
	}

	//Armadura verde
	if (message.content == '!fs grunil' || message.content == '!fs agerian' || message.content == '!fs rocaba'
		 || message.content == '!fs taritas' || message.content == '!fs hercules' || message.content == '!fs zereth'
		 || message.content == '!fs heve'  || message.content == '!fs talis' || message.content == '!fs fortuna') {
		message.channel.sendMessage(
		'+1 hasta +5: 0fs (always works)' + '\n'+
		'+6: 1-3fs (max 10)' + '\n' +
		'+7: 1-3fs (max 12)' + '\n' +
		'+8: 1-3fs (max 13)' + '\n' +
		'+9: 5fs (max 14)' + '\n' +
		'+10: 8fs (max 15)' + '\n' +
		'+11: 10fs (max 16)' + '\n' +
		'+12: 11fs (max 18)' + '\n' +
		'+13: 12fs (max 20)' + '\n' +
		'+14: 15fs (max 25)' + '\n' +
		'+15: 15fs (max 25)' + '\n' +
		'PRI: 15-20fs (max 25)' + '\n' +
		'DUO: 18-25fs (max 35)' + '\n' +
		'TRI: 25-32fs (max 45)' + '\n' +
		'TET: 45fs (max 90)' + '\n' +
		'PEN: 60fs (max 124)' + '\n');
	}

	//Trajes profesión
		if (message.content == '!fs profession clothes' || message.content == '!fs silver embroidered'
			|| message.content == '!fs silver embroidered clothes' || message.content == '!fs functional clothes'
			|| message.content == '!fs traje profesion' || message.content == '!fs ropa profesion'
			|| message.content == '!fs traje cocina' || message.content == '!fs traje alquimia' || message.content == '!fs traje pesca'
			|| message.content == '!fs traje gathering' || message.content == '!fs traje processing' || message.content == '!fs traje training'
			|| message.content == '!fs traje sailing' || message.content == '!fs traje farming' || message.content == '!fs traje trading'
			|| message.content == '!fs traje' || message.content == '!fs traje de profesion' || message.content == '!fs ropa de profesion'
   			|| message.content == '!fs professional clothes') {
		message.channel.sendMessage(
			'+1: 0-3 (max 25)' + '\n' + 
			'+2: 10 (max 35)' + '\n' + 
			'+3: 20 (max 45)' + '\n' + 
			'+4: 45 (max 90)' + '\n' + 
			'+5: 75 (max 124)');
	}

	//Horse Gear
	if (message.content == '!fs horse gear' || message.content == '!fs equipo caballo' || message.content == '!fs herradura'
		 || message.content == '!fs caballo' || message.content == '!fs silla' || message.content == '!fs equipo de caballo') {
		message.channel.sendMessage(
		'+1: 3fs' + '\n'+
		'+2: 4fs' + '\n'+
		'+3: 5fs' + '\n'+
		'+4: 6fs' + '\n'+
		'+5: 7fs' + '\n'+
		'+6: 10fs' + '\n' +
		'+7: +10fs' + '\n' +
		'+8: 20fs' + '\n' +
		'+9: +20fs' + '\n' +
		'+10: 25-30fs' + '\n');
	}

	//Fishing rod
	if (message.content == '!fs caña' || message.content == '!fs caña pescar' || message.content == '!fs caña de pescar'
		 || message.content == '!fs rod' || message.content == '!fs fishing rod') {
		message.channel.sendMessage(
		'+1: 6fs' + '\n'+
		'+2: 8fs' + '\n'+
		'+3: 11fs' + '\n'+
		'+4: 11fs' + '\n'+
		'+5: 11fs' + '\n'+
		'+6: 15fs' + '\n' +
		'+7: +15fs' + '\n' +
		'+8: 20fs' + '\n' +
		'+9: FORZE' + '\n' +
		'+10: FORZE' + '\n' +
		'Yes, forze the enchancements even if you waste 200 blackstones, if the enchancment fails is even worse. ');
	}	

		//Comando help
		if (message.content == '!help') {
		message.channel.sendMessage(
			'To use the bot write "!fs " followed by the name of the item you want to enchance. Example: !fs kzarka' +'\n'
			+ '\n' + '\n' + 'To see all items write: !fs' + '\n' +
			'For recipies and guides write: !guides' + '\n' +
			'Boss schedule: !boss timer');
	}

		//Comando fs
		if (message.content == '!encantamiento'|| message.content == '!enchant' || message.content == '!enchancement'
			|| message.content == '!fs') {
		message.channel.sendMessage(
			'!fs green gear' + '\n' +
			'!fs blue gear' + '\n' +
			'!fs boss gear' + '\n' +
			'!fs blue accesories' + '\n' +
			'!fs yellow accessories' + '\n' +
			'!fs profession clothes' + '\n' +
			'!fs horse gear' + '\n' +
			'!fs fishing rod' + '\n' +
			'!all');
	}





		//Guides
		if (message.content == '!guides') {
		message.channel.sendMessage(
			'!timber map' + '\n' +
			'!cooking' + '\n' +
			'!alchemy' +'\n' +
			'!training');
	}

		//Gathering
		//Madera
			if (message.content == '!timber map' || message.content == '!mapa madera' || message.content == '!mapa de madera') {
			message.channel.sendMessage(
				{
				file: "./timbermap.jpg"
			});
		}




		//Cooking
		//Recetas
			if (message.content == '!cooking recipes' || message.content == '!recetas de cocina' || message.content == '!recetas cocina'
				|| message.content == '!cocina' || message.content == '!cooking') {
		message.channel.sendMessage(
			'!beer' + '\n' +
			'!liquor' + '\n' +
			'!honey wine');
	}
		//Beer
				if (message.content == '!beer' || message.content == '!cerveza') {
			message.channel.sendMessage(
				'Beer:', {
				file: "./cooking/beer.PNG"
			});
		}
		//Essence of Liquor
				if (message.content == '!esencia de licor' || message.content == '!essence liquor' || message.content == '!essence of liquor'
					|| message.content == '!licor' || message.content == '!liquor') {
			message.channel.sendMessage(
				'Essence liquor:', {
				file: "./cooking/licor.PNG"
			});
		}
		//Honey Wine
				if (message.content == '!honey wine' || message.content == '!hidromiel' || message.content == '!honey'
					|| message.content == '!miel') {
			message.channel.sendMessage(
				'Honey wine:', {
				file: "./cooking/honeywine.PNG"
			});
		}
		//Grilled Bird Meat
				if (message.content == '!bird' || message.content == '!bird meat' || message.content == '!grilled bird'
					|| message.content == '!griled bird meat') {
			message.channel.sendMessage(
				'Receta de Grilled Bird Meat:', {
				file: "./cooking/bird.PNG"
			});
		}



		//Alquimia
		//Recetas
			if (message.content == '!alchemy recipes' || message.content == '!recetas de alquimia' || message.content == '!recetas alquimia'
				|| message.content == '!alquimia' || message.content == '!alchemy') {
		message.channel.sendMessage(
			'!pure powder reagent' + '\n' +
			'!clear liquid reagent' + '\n' +
			'!elixir of mentality' + '\n' +
			'!sinner blood' + '\n' +
			'!elixir of demihuman' + '\n' +
			'!metal solvent' + '\n' +
			'!pure crystal' + '\n' +
			'!alchemy stone');
	}
		//Pure powder
				if (message.content == '!pure powder reagent' || message.content == '!pure powder' || message.content == '!reactivo de polvo puro'
					|| message.content == '!reactivo de polvo') {
			message.channel.sendMessage(
				'Pure powder reagent:', {
				file: "./alchemy/purepowder.PNG"
			});
		}

		//Clear liquid
				if (message.content == '!clear liquid reagent' || message.content == '!clear liquid' || message.content == '!reactivo liquido transparente'
					|| message.content == '!reactivo liquido') {
			message.channel.sendMessage(
				'Clear liquid reagent:', {
				file: "./alchemy/clearliquid.PNG"
			});
		}

		//Elixir of Mentality
				if (message.content == '!elixir of mentality' || message.content == '!elixir mentality' || message.content == '!elixir de criterio'
					|| message.content == '!elixir criterio') {
			message.channel.sendMessage(
				'Elixir of mentality:', {
				file: "./alchemy/elixirmentality.PNG"
			});
		}

		//Elixir of demihuman
			if (message.content == '!elixir of demihuman hunt' || message.content == '!elixir demihuman' || message.content == '!elixir de caza de semihumanos'
				|| message.content == '!elixir of demihuman' || message.content == '!elixir de semihumanos' || message.content == '!elixir semihumanos') {
			message.channel.sendMessage(
				'Elixir of demihuman hunt:', {
				file: "./alchemy/elixirdemihuman.PNG"
			});
		}

		//Sinner blood
			if (message.content == '!sinner blood' || message.content == '!sangre de pecador' || message.content == "!sinner's blood"
				|| message.content == '!sangre pecador' || message.content == '!sinner' || message.content == '!sinners' || message.content == "!sinner's") {
			message.channel.sendMessage(
				'Sinners blood:', {
				file: "./alchemy/sinner.PNG"
			});
		}
	
		//Metal Solvent
			if (message.content == '!metal solvent' || message.content == '!disolvente de metales' || message.content == '!disolvente metales') {
			message.channel.sendMessage(
				'Metal solvent:', {
				file: "./alchemy/metalsolvent.PNG"
			});
		}

		//Pure Crystals
			if (message.content == '!pure crystal' || message.content == '!cristal puro' || message.content == "!pure iron crystal"
				|| message.content == '!cristal de hierro puro' || message.content == '!pure copper crystal' || message.content == '!cristal de cobre puro' 
				|| message.content == "!pure titanium crystal" || message.content == "!cristal de titanio puro") {
			message.channel.sendMessage(
				'This recipe works for all the pure crystals, just change the iron ingots for any other metal:', {
				file: "./alchemy/purecrystal.PNG"
			});
		}
	
		//Alchemy stone
			if (message.content == '!alchemy stone' || message.content == '!piedra de alquimia' || message.content == '!piedra alquimia') {
			message.channel.sendMessage(
				'There is no exact recipe for alchemy stones, all of them fails sometimes. Anyway the most used recipe seems to be this one:', {
				file: "./alchemy/alchemystone.PNG"
			});
		}


		//training
		//comandos
		if (message.content == '!training') {
		message.channel.sendMessage(
			'!wild horses tier' + '\n' +
			'!balenos horses' + '\n' +
			'!serendia horses' + '\n' +
			'!calpheon horses' + '\n' +
			'!mediah horses' + '\n' +
			'!todos los caballos' + '\n' +
			'!fs horse gear' + '\n' +
			'!lump of sugar');
	}

		//Tiers Salvajes
		if (message.content == '!horse tier' || message.content == '!wild horses tier' || message.content == '!caballos salvajes'
			|| message.content == '!tier caballos salvajes' || message.content == '!tier de caballos' || message.content == '!wild horse tier') {
			message.channel.sendMessage(
				'List of all wild horses we can catch:', {
				file: "./training/wildHorsesList.png"
			});
		}

		//Lump of sugar
		if (message.content == '!lump of raw sugar' || message.content == '!lump of sugar'
			|| message.content == '!terron de azucar' || message.content == '!terron de azucar moreno') {
			message.channel.sendMessage(
				'On the production menu you gotta use heating:', {
				file: "./training/lump.png"
			});
		}

		//zonas
			//Balenos
		if (message.content == '!balenos horses' || message.content == '!wild horses balenos' || message.content == '!caballos salvajes balenos'
			|| message.content == '!balenos caballos salvajes' || message.content == '!mapa de caballos balenos' 
			|| message.content == '!caballos balenos' || message.content == '!todos los caballos') {
			message.channel.sendMessage(
				'Wild horses of Balenos:', {
				file: "./training/map1.png"
			});
		}

			//Serendia
		if (message.content == '!serendia horses' || message.content == '!wild horses serendia' || message.content == '!caballos salvajes serendia'
			|| message.content == '!serendia caballos salvajes' || message.content == '!mapa de caballos serendia' 
			|| message.content == '!caballos serendia' || message.content == '!todos los caballos') {
			message.channel.sendMessage(
				'Wild horses of Serendia:', {
				file: "./training/map2.png"
			});
		}

			//Calpheon
		if (message.content == '!calpheon horses' || message.content == '!wild horses calpheon' || message.content == '!caballos salvajes calpheon'
			|| message.content == '!calpheon caballos salvajes' || message.content == '!mapa de caballos calpheon' 
			|| message.content == '!caballos calpheon' || message.content == '!todos los caballos') {
			message.channel.sendMessage(
				'Wild horses of Calpheon:', {
				file: "./training/map3.png"
			});
		}

			//Mediah
		if (message.content == '!mediah horses' || message.content == '!wild horses mediah' || message.content == '!caballos salvajes mediah'
			|| message.content == '!mediah caballos salvajes' || message.content == '!mapa de caballos mediah' 
			|| message.content == '!caballos mediah' || message.content == '!todos los caballos') {
			message.channel.sendMessage(
				'Wild horses of Mediah:', {
				file: "./training/map4.png"
			});
		}



		//Comando !recipes
		if (message.content == '!recipes' || message.content == '!recetas') {
		message.channel.sendMessage(
			'!cooking' + '\n' +
			'!alchemy');
	}
	
	
	//Boss Timer
		if (message.content == '!boss' || message.content == '!world boss' || message.content == '!boss timer'
		   || message.content == '!world boss timer' || message.content == '!horario bosses' || message.content == '!horario'
		    || message.content == '!horarios' || message.content == '!horarios bosses'  || message.content == '!horarios boses'
		    || message.content == '!horario boses'  || message.content == '!timer'  || message.content == '!spawns'
		    || message.content == '!boss spawn'  || message.content == '!boss spawns'  || message.content == '!world boss spawn') {
			message.channel.sendMessage(
				'World Boss spawns:', {
				file: "./bosstimer2.jpg"
			});
		}
		//Tabla
		if (message.content == '!tabla' || message.content == '!tabla de fs' || message.content == '!all') {
			message.channel.sendMessage(
				'All FS:', {
				file: "./table.png"
			});
		}


});

//Login Heroku
bot.login(process.env.BOT_TOKEN);

//Login local
//bot.login('NDQxNTExNzUwOTkxNDc4Nzg3.DcxVjQ.GVwFlmXnP5J9EPA9o1WSDZZ9YLM');
