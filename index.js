console.log('Ready');
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.on('ready', () => {
  bot.user.setGame('Escribe !encantamiento o !help')
})
bot.on('message', (message) => {
 if (message.content == '!fs joyeria azul' || message.content == '!fs blue accessories') {
  message.channel.sendMessage('PRI: 15-20 (max 25)' + '\n' + 
   'DUO: 25-30 (max 35)' + '\n' + 
   'TRI: 35-40 (max 45)' + '\n' + 
   'TET: +45 (max 90)' + '\n' + 
   'PEN: max 124');
 }
 if (message.content == '!fs joyeria amarilla' || message.content == '!fs joyeria boss' 
     || message.content == '!fs yellow accessories') {
  message.channel.sendMessage('PRI: 25 (max 25)' + '\n' + 
   'DUO: 35 (max 35)' + '\n' + 
   'TRI: 45 (max 45)' + '\n' + 
   'TET: 90 (max 90)' + '\n' + 
   'PEN: max 124');
 }
 if (message.content == '!fs kzarka' || message.content == '!fs dandelion' || message.content == '!fs kutum' 
  || message.content == '!fs nouver') {
  message.channel.sendMessage('+1 hasta +7: dale duro 100% real' + '\n'+
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
  ) {
  message.channel.sendMessage('+1 hasta +7: dale duro 100% real' + '\n'+
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
  if (message.content == '!fs bheg' || message.content == '!fs giath' || message.content == '!fs dim tree'
   || message.content == '!fs red nose' || message.content == '!fs griffon' || message.content == '!fs urugon'
   || message.content == '!fs muskan'  || message.content == '!fs muskans' || message.content == '!fs urugons') {
  message.channel.sendMessage('+1 hasta +5: dale duro 100% real' + '\n'+
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
  'PEN: 90fs (max 124)' + '\n');
 }
 if (message.content == '!fs equipo verde' || message.content == '!fs green stuff' || message.content == '!fs green item' || message.content == '!fs green gear') {
  message.channel.sendMessage('ARMADURA:' + '\n' +
  '+1 hasta +5: dale duro 100% real' + '\n' +
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
  'ARMAS:' +  '\n' +
  '+1 hasta +7: dale duro 100% real' + '\n'+
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
 if (message.content == '!fs equipo azul' || message.content == '!fs blue stuff' || message.content == '!fs blue item' || message.content == '!fs blue gear'
  || message.content == '!fs liverto' || message.content == '!fs lemoria') {
  message.channel.sendMessage('ARMADURA:' + '\n' +
  '+1 hasta +5: dale duro 100% real' + '\n'+
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
  'ARMAS:' +  '\n' +
  '+1 hasta +7: dale duro 100% real' + '\n'+
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
 if (message.content == '!fs equipo boss' || message.content == '!fs boss stuff' || message.content == '!fs boss item' || message.content == '!fs boss gear'
  || message.content == '!fs equipo amarillo') {
  message.channel.sendMessage('ARMADURA:' + '\n' +
  '+1 hasta +5: dale duro 100% real' + '\n'+
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
  'ARMAS:' +  '\n' +
  '+1 hasta +7: dale duro 100% real' + '\n'+
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
   if (message.content == '!fs grunil' || message.content == '!fs agerian' || message.content == '!fs rocaba'
   || message.content == '!fs taritas' || message.content == '!fs hercules' || message.content == '!fs zereth'
   || message.content == '!fs heve'  || message.content == '!fs talis' || message.content == '!fs fortuna') {
  message.channel.sendMessage('+1 hasta +5: dale duro 100% real' + '\n'+
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
  if (message.content == '!fs profession clothes' || message.content == '!fs silver embroidered'
   || message.content == '!fs silver embroidered clothes' || message.content == '!fs functional clothes'
   || message.content == '!fs traje profesion' || message.content == '!fs ropa profesion'
   || message.content == '!fs traje cocina' || message.content == '!fs traje alquimia' || message.content == '!fs traje pesca'
   || message.content == '!fs traje gathering' || message.content == '!fs traje processing' || message.content == '!fs traje training'
   || message.content == '!fs traje sailing' || message.content == '!fs traje farming' || message.content == '!fs traje trading'
   || message.content == '!fs traje') {
  message.channel.sendMessage('+1: 0-3 (max 25)' + '\n' + 
   '+2: 10 (max 35)' + '\n' + 
   '+3: 20 (max 45)' + '\n' + 
   '+4: max 90' + '\n' + 
   '+5: max 124');
 }
   if (message.content == '!help') {
  message.channel.sendMessage('Para usar el bot escribe "!fs " seguido del nombre del item que quieras subir. Por ejemplo: !fs kzarka' +'\n'
   + '\n' + '\n' + 'Para ver todas las posibilidades escribe: !encantamiento');
 }
    if (message.content == '!encantamiento'|| message.content == '!enchant' || message.content == '!enchancement') {
  message.channel.sendMessage('!fs equipo verde' + '\n' +
   '!fs equipo azul' + '\n' +
   '!fs equipo de boss' + '\n' +
   '!fs joyeria azul' + '\n' +
   '!fs joyeria amarilla' + '\n' +
   '!fs traje profesion' + '\n' +
   '!all');
 }
  if (message.content == '!tabla' || message.content == '!tabla de fs' || message.content == '!all') {
    message.channel.send("Todos los FS", {
    file: "https://raw.githubusercontent.com/LeMMik96/BDO-FSBOT/master/Tabla_de_enchant.png"
});
  }
});
bot.login(process.env.BOT_TOKEN);
