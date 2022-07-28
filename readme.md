<p align="center"><img src="https://user-images.githubusercontent.com/55511420/176716303-6a1c4df3-4afb-4e14-b55d-f397779b43a9.png" width="350" height="350" alt="logo_4devs.png"/></p>  
<h5 align="center"><a href="https://www.facebook.com/4Devs">[Source: Facebook]</a></h5>  
  
## O que este módulo faz?  
- Ele utiliza o site [4 Devs](https://www.4devs.com.br) para gerar vários tipos de informações falsas.  
  
## Instalação:  
- Rode o código abaixo para instalar via `NPM`:  
  
```bash  
$ npm i @killovsky/4devs  
```  
  
- Rode o código abaixo para instalar via `GIT`:  
```bash  
$ git clone https://github.com/KillovSky/4devs.git  
```  
  
## O que este módulo tem de especial?  
- Assim como o da [NASA](https://github.com/KillovSky/NASA), muitas coisas, confira abaixo:  
  
------  
> 1. Neste módulo, os erros não afetam o funcionamento, o que significa que apesar de qualquer erro, os valores 'sempre' estarão lá para que você não seja afetado.  
>  
> 2. Os erros serão inseridos na resposta com uma explicação sobre o que causou eles, facilitando para você entender.  
>  
> 3. Caso alguma resposta não possua certas keys, elas serão automaticamente geradas, evitando erros para você.  
>  
> 4. Os headers estão inseridos na resposta, facilitando para saber detalhes que podem lhe ser uteis.  
>  
> 5. Não existem dependências de módulos de terceiro, tudo é feito usando o puro `Node.js`.  
>  
> 6. Cada linha do código possui uma explicação do que está rodando ou vai rodar, ou seja, o código INTEIRO é explicado, linha por linha.  
>  
> 7. Parâmetros incorretos são automaticamente corrigidos, por exemplo, corrige a `type` se mal inserida, ajusta a `quantity` caso seja invalida e muito mais.  
>  
> 8. E muitas outras coisas, confira o código para entender!  
------  
  
## Como testar este módulo:  
- Basta abrir um terminal na pasta do módulo e digitar:  
  
```bash  
npm test  
```  
  
## Como utilizar este módulo:  
- Existem diversas formas de utilizar, mas como se trata de um script que faz uso de `Promises`, irei dar dois exemplos que funcionam bem, lembrando, você pode rodar sem especificar nada pois também funciona desta forma.   
  
<details>  
<summary><code>[Clique para exibir] → Descrição de cada parâmetro da execução:</code></summary>  
  
```javascript  
// Function especificada  
gerar('QUANTITY', 'COMMAS', 'TYPE')  
  
// Function sem especificar  
gerar()  
  
/* ------------------------------------- *  
* 1° - QUANTITY  
* Valores: number [Máx. 10]  
* Padrão: '1'  
* ---------------------------------  
* 2° - COMMAS [PONTUAÇÃO]  
* Valores: boolean [true, false]    
* Padrão: false  
* ---------------------------------  
* 3° - TYPE  
* Valores: string [pessoa, rg, cpf, cnpj]  
* Padrão: ''  
* ------------------------------------- */  
```  
  
</details>   
  
<details>  
<summary><code>Exemplos de uso:</code></summary>  
  
```javascript  
// Usando .then | Modo de uso padrão  
const _4devs = require('@killovsky/4devs');  
_4devs.gerar('QUANTITY', 'COMMAS', 'TYPE').then(data => {  
	// Faça seu código baseado na object 'data' aqui  
	// Exemplo: console.log(data);  
})  
  
// Usando await [async] | Modo de uso padrão  
const _4devs = require('@killovsky/4devs');  
const data = await _4devs.gerar('QUANTITY', 'COMMAS', 'TYPE');  
// Faça seu código aqui usando a const 'data'  
// Exemplo: console.log(data);  
```  
  
</details>  
  
<details>  
<summary><code>Código já prontos [.then]:</code></summary>  
  
```javascript  
// Código usando .then  
const _4devs = require('@killovsky/4devs');  
_4devs.gerar('1', false, 'pessoa').then(data => console.log(data));  
```  
  
</details>  
  
<details>  
<summary><code>Código já prontos [async/await]:</code></summary>  
  
```javascript  
// Código usando await 
const _4devs = require('@killovsky/4devs');  
const data = await _4devs.gerar('1', false, 'pessoa');  
console.log(data);  
  
// Se você não sabe criar uma função async ou ainda não tiver uma, use este código abaixo:  
(async () => {  
	// Cole um código com await aqui dentro  
})();  
```  
  
</details>  
  
<details>  
<summary><code>Exemplo de resultado com explicações:</code></summary>  
  
```JSON  
{  
	"date": "String | Data [YYYY-MM-DD HH:MM:SS]",  
	"error": "true | false",  
	"dev_msg": "String / false | Mensagem adicional de erro",  
	"error_msg": "String / false | Códigos de erros de execução",   
	"code": "Number | String | Código de erro HTTP",  
	"explain": {  
		"code": "Number / String | Código escrito de HTTP",  
		"why": "String | Explicação do código HTTP"  
	},  
	"headers": {  
		"date": "String | Data escrita da requisição",  
		"content-type": "String | Tipo de resposta",  
		"content-length": "Number | Tamanho da resposta",  
		"Outros": "E vários outros headers, faça uma requisição para obter todos."  
	},  
	"dados": [  
		{  
			"nome": "String | Nome",  
			"idade": "Number | Idade",  
			"cpf": "Number / String | CPF",  
			"rg": "Number / String | RG",  
			"data_nasc": "String | Data de Nascimento",  
			"sexo": "String | Gênero",  
			"signo": "String | Signo",  
			"mae": "String | Nome da Mãe",  
			"pai": "String | Nome do Pai",  
			"email": "String | E-mail fictício",  
			"senha": "String | Senha fictícia",  
			"cep": "String | CEP",  
			"endereco": "String | Endereço",  
			"numero": "Number | Número da Casa",  
			"bairro": "String | Bairro",  
			"cidade": "String | Cidade",  
			"estado": "String | Estado",  
			"telefone_fixo": "String | Telefone fixo",  
			"celular": "String | Telefone celular",  
			"altura": "String | Altura",  
			"peso": "Number | Peso",  
			"tipo_sanguineo": "String | Tipo de sangue",  
			"cor": "String | Cor preferida"  
		}  
	] 
}  
```  
  
</details>  
  
<details>  
<summary><code>Exemplo utilizável de resultado:</code></summary>  
  
```JSON  
{  
	"date": "30/06/2022 10:36:15",  
	"error": false,  
	"dev_msg": false,  
	"error_msg": false,  
	"code": 200,  
	"explain": {  
		"code": "OK",  
		"why": "The request is OK, this response depends on the HTTP method used."  
	},  
	"headers": {  
		"server": "nginx",  
		"date": "Thu, 30 Jun 2022 04:19:34 GMT",  
		"content-type": "application/json",  
		"content-length": "547",  
		"connection": "close",  
		"vary": "Accept-Encoding, Accept-Encoding",  
		"x-powered-by": "PHP/5.6.35",  
		"cache-control": "max-age=2592000",  
		"x-ua-compatible": "IE=edge",  
		"x-content-type-options": "nosniff",  
		"accept-ranges": "bytes",  
		"strict-transport-security": "max-age=63072000; includeSubDomains; preload",  
		"x-frame-options": "SAMEORIGIN"  
	},  
	"dados": [  
		{  
			"nome": "Igor Joaquim Viana",  
			"idade": 32,  
			"cpf": "560.184.379-10",  
			"rg": "44.837.386-5",  
			"data_nasc": "01/04/1990",  
			"sexo": "Feminino",  
			"signo": "Áries",  
			"mae": "Heloise Sophia Amanda",  
			"pai": "Alexandre Matheus Augusto Viana",  
			"email": "igorjoaquimviana@dinamicaconsultoria.com",  
			"senha": "TlyJ9gspg4",  
			"cep": "72231-107",  
			"endereco": "Quadra QNP 10 Conjunto G",  
			"numero": 868,  
			"bairro": "Ceilândia Sul (Ceilândia)",  
			"cidade": "Brasília",  
			"estado": "DF",  
			"telefone_fixo": "(61) 3599-1772",  
			"celular": "(61) 98114-6439",  
			"altura": "1,72",  
			"peso": 103,  
			"tipo_sanguineo": "B+",  
			"cor": "azul"  
		}  
	]  
}  
```  
  
</details>   
  
## Perguntas e Respostas:  
  
- Isso é bem similar ao seu módulo do Projeto APOD da NASA, não é?  
> Sim, é por que quero criar sistemas fáceis de entender e usar, decidi que a melhor forma seria fazendo eles de forma similar, deixando o código bem simples para qualquer um que vier de outros projetos meus.  
>  
- Por que 4Devs em vez do `Faker.js` ou outros módulos do tipo?  
> Esse meio de informação exige instalação de módulos de terceiro, porém quero fazer meus sistemas sem dependências, nada além do próprio `Node.js`, pois tenho foco em uma única tarefa: ser simples.  
>  
- Esses dados são reais ou podem ser usados?  
> Alguns locais possuem baixa segurança e não validam as informações, podendo sofrer roubos com estes dados, das quais são FALSOS e gerados aleatoriamente.  
>  
- O que é proibido ao usar este módulo?  
> Você jamais deve abusar de qualquer programa, sempre crie um limitador de tempo ou armazene a ultima resposta e use ela, evite ficar utilizando um programa deste estilo muitas vezes seguidas sem esperar.  
  
## Suporte  
  
- Se obtiver algum problema, você pode me dizer [Reportando nas Issues](https://github.com/KillovSky/4DEVS/issues).  
- Confira outros projetos meus [Acessando Isto](https://github.com/KillovSky).  
- Se gostar, doe para me ajudar a continuar desenvolvendo, mais informações [Clicando Aqui](http://htmlpreview.github.io/?https://github.com/KillovSky/iris/blob/main/.readme/donates/page.html) - [Página do Projeto Íris]  
  