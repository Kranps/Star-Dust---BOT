const Discord = require('Discord.js) // Isso é para requerir a biblioteca "DISCORD.JS". Essa biblioteca é o que faz o BOT funcionar.
const config = require("./config.js) // Quando colocamos "./", quer dizer que é um arquivo. Estou requerindo ele para aplicar as configurações do BOT, como o prefixo, dono do BOT. Essas informações eu adicionei no config.js
const client = new Discord.Client(); // Isso aqui é o que cria o BOT. "Novo cliente discord"...
client.prefix = config.prefix; // Aqui estou definindo onde está o prefixo. Ele está no código "prefix" do arquivo "config". "client.prefix" = "prefixo do BOT"


client.on("ready", () => { // Client.on é um evento. Como eu especifiquei "ready", é iniciar. Ou seja, esse evento inicia o BOT. Tudo que eu colocar dentro dele vai ser na hora que o BOT iniciar.
console.log("Olá mundo") // Enviar uma mensagem para o console. Se essa mensagem for enviada, o BOT foi iniciado.
})





client.on('disconnect', () => {
console.log('Desconectado, logo mais parça..') // como pode ser observado, o "disconnect" é desconectar. Se o BOT desligar, vai mandar essa mensagem no console.
});






client.on("message", async message => { // Esse "message" significa que eu vou usar em algum código, algo relacionado à todas as mensagens que forem enviadas no servidor.
   if(message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)){ //Aqui nós definimos que se a mensagem começar como ${client.user.id}, que significa o id do usuário client, que no caso, é o BOT. ele vai enviar a mensagem "return" no código abaixo
        return message.reply("Me deixa em paz seu gordo. Meu prefixo é `/` '-'. agora me deixaaaaaaaa")} // Para resumir, esse código serve para definir o que o BOT deve fazer quando mencionarem ele. Se nao quer que faça nada, apenas deixe "return".

let args = message.content.split(" ").slice(1); // Aqui nós colocamos que se o comando começar com (" "), no caso, nada, o BOT não fará nada.
let command = message.content.split(" ")[0]; // Aqui nós definimos a pasta "command"
  try { // ignora isso, é complicado
    
    let ops = {
  active: active  
 } // ignora isso é complicado
      let commandFile = require(`./commands/${command}.js`); // aqui é que se o comando for ${nomedocomando}.js, ele vai executar.
      delete require.cache[require.resolve(`./commands/${command}.js`)]; // Aqui é que Caso o comando não seja ${nomedocomando}.js, ele não faz nada.
      return commandFile.run(client, message, args); // Aqui é que para os comandos funcionar, voce vai ter que usar nele o client, a message e o args. Isso será explicado no primeiro comando.
  } catch (err) { // Aqui vai mostrar no console caso dê erro nesse comando
        console.error("Erro:" + err) // Aqui vai mostrar no console caso dê erro nesse comando
  }
  if(!message.content.startsWith(config.prefix)) return; // Aqui é que se a mensagem não comeãr com "config.prefix", que é o prefixo, o bot vai retornar, e como nao foi definido nada no return, ele não vai fazer nada.
});






//Agora vamos colocar um evento (client.on) que faça mostrar o que o bot está jogando

client.on("ready", () => {
client.user.setActivity(Jogando na Star Dust)
});



client.login(tokenzinho); // Aqui é o token do bot, que é o que voce pega quando cria o usuario do bot no site do discord.
  
