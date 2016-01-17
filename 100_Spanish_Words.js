//Spanish Flash Card App
// For learning the first 100 most common spanish words


//Spanish word array
Spanish_words = [
"el/la", "the",
"de","of,from",
"que","that,which",
"y","and",
"a","to,at",
"en","on,in",
"un","a,an",
"ser","to be",
"se","ones self - Reflexive marker",
"no","no",
"haber", "to have",
"por","by, for, through",
"con","with",
"su","his, her, their, your",
"para","for,to,in order to",
"como","like,as",
"estar","to be",
"tener", "to have",
"le","3rd person indirect object pronoun",
"lo","the+(noun)",
"lo", "3rd person masc. direct object pronoun",
"todo","all, every",
"pero","but,yet,except",
"m&aacute;s","more",
"hacer", "to do, make",
"o","or",
"poder", "to be able to, can",
"decir","to say, tell",
"este","this",
"ir","to go",
"otro", "other, another",
"ese","that",
"la","3rd pers. fem. direct object pronoun",
"si","if,whether",
"me","me",
"ya","already, still",
"ver","to see",
"porque","because",
"dar","to give",
"cuando","when",
"&eacute;l","he",
"muy","very, really",
"sin","without",
"vez","time, occurrence",
"mucho","much, many, alot",
"saber","to know",
"qu&eacute;","what?, Which?, How?",
"sobre","on top of, over, about",
"mi","my",
"alguno", "some, someone",
"mismo","same",
"yo","I",
"tambi&eacute;n","also",
"hasta","until, up to, even",
"a&ntilde;o","year",
"dos","two",
"querer","to want, love",
"entre","between",
"as&iacute;","like that",
"primero","first",
"desde", "from, since",
"grande","large,great,big",
"eso","that",
"ni","not even, neither, nor",
"nos","us",
"llegar","to arrive",
"pasar", "to pass, spend time",
"tiempo","time, weather",
"ella, ellas","she, ellas = them",
"s&iacute;","yes",
"dia","day",
"uno","one",
"bien","well",
"poco"," few, little, a little bit",
"deber","should, ought tom to owe",
"entonces","so, then",
"poner","to put on, get",
"cosa","thing",
"tanto","much",
"hombre","man, mankind, husband",
"parecer","to seem, to look like",
"nuestro","our",
"tan","such, a, too, so",
"donde","where?",
"ahora","now",
"parte","part, portion",
"despu&eacute;s","after",
"vida","life",
"quedar","to remain, stay",
"siempre","always",
"creer","to believe",
"hablar","to speak, talk",
"llevar","to take, carry",
"dejar","to let, leave",
"nada","nothing",
"cada","each, every",
"seguir","to follow",
"menos","less, fewer",
"nuevo","new",
"encontrar","to find"

]

var word = 0;




function print(a){

document.getElementById("print").innerHTML = "<h2>" + a + "</h2>";

}


function nx(n){

if (n < 0 && word === 0){
word = Spanish_words.length;
word += n;
} else if (n < 0 && word != 0) {
word += n;
} else {
word = (word + n) % Spanish_words.length;
}
 
print( (word/2 + 1) + ") " + Spanish_words[word]);
} 

function prev(){
nx(-2);
}

function next(){
nx(2);
}

var tog = 1;
function showAns(){

if ( tog === 1){

	print( (word/2 + 1) + ") " + Spanish_words[word + 1]);
} else {
	print( (word/2 + 1) + ") " + Spanish_words[word])
}
tog *= -1;
}


function setup(){
document.getElementById('ans').onclick = showAns;
document.getElementById('next').onclick = next;
document.getElementById('prev').onclick = prev;
print( (word/2 + 1) + ") " + Spanish_words[word]);

}