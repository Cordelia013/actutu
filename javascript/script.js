
/* creation d'un tableau javascript */
let tomebook= [{
    titre:"Community",

    auteur: "Luna Joyce",

    prix: "18€",

    image: "https://static.fnac-static.com/multimedia/Images/FR/NR/2b/ed/bd/12447019/1507-1/tsp20200814070437/Community-Prix-Bernard-Werber-de-l-Imaginaire-2020.jpg",

    resume: "Pour Community, à quoi l'humanité a-t-elle renoncé ? 3006, La Terre a été pacifiée grâce à Community, une technologie révolutionnaire qui permet à l'homme de communiquer par télépathie. L'égoïsme mis de côté au profit de la collectivité, conflits et inégalités appartiennent désormais au passé .     Passionnée par les étoiles, Lyah est une jeune femme dotée d'une profonde soif de connaissances, qui la pousse à se poser beaucoup de questions sur le monde qui l'entoure. Bien plus que tous ceux qu'elle connaît... Pourquoi les humains ont-ils désormais interdiction de se toucher ? Pourquoi ne peut-elle pas choisir elle-même sa future Assignation ? Et pourquoi certaines bases de données lui sont-elles inaccessibles ? Tandis qu'elle exhume secret après secret sur la société aseptisée dans laquelle elle vit, une interrogation grandit dans son esprit .Pour Community, à quoi l'humanité a-t-elle renoncé ?"
},

{
    titre:"Shining",

    auteur: "Stephen King",

    prix: "8.20€",

    image: "https://cdn1.booknode.com/book_cover/455/full/shining-455413.jpg",

    resume: "Situé dans les montagnes Rocheuses, l’Overlook Palace passe pour être l’un des plus beaux lieux du monde. Confort, luxe, volupté …  L’hiver, l’hôtel est fermé .Coupé du monde par le froid et la neige. Alors, seul l’habite un gardien. Celui qui a été engagé cet hiver-là s’appelle Jack Torrance: c’est un alcoolique, un écrivain raté, qui tente d’échapper au désespoir. Avec lui vivent sa femme, Wendy, et leur enfant, Danny. Danny qui possède le don de voir, de ressusciter les choses et les êtres que l’on croit disparus. Ce qu’il sent, lui, dans les cent dix chambres vides de l’Overlook Palace, c’est la présence du démon. Cauchemar ou réalité, le corps de cette femme assassinée? ces bruits de fête qui dérivent dans les couloirs ? cette vie si étrange qui anime l’hôtel ?",
},

{
    titre:"Fairy Tail, Tome 1",

    auteur: "Hiro Mashima",

    prix: "4.49€",

    image: "https://cdn1.booknode.com/book_cover/54/full/fairy-tail-tome-1-53945.jpg",

    resume: "Lucy, jeune magicienne, rêve de rejoindre la fameuse guilde de magiciens, la Fairy Tail. Après sa rencontre avec Natsu et Happy, un chat intrépide, le rêve de Lucy devient réalité ! Mais la guilde de Fairy Tail est réputée pour le caractère imprévisible de ses membres. Natsu en est le meilleur exemple, anti-héros drôle et bagarreur ! Cette guilde semble être à l'origine de nombreux scandales.",
},

{
    titre:"Expérience Noa Torson, tome 1 : Ne t'arrête pas",

    auteur: "Michelle Gagnon",

    prix: "16.95€",

    image: "https://cdn1.booknode.com/book_cover/607/full/experience-noa-torson-tome-1-ne-t-arrete-pas-606856.jpg",

    resume: "Noa se réveille sur une table d’opération, une cicatrice en travers de la poitrine. Elle ne sait pas où elle est, comment elle est arrivée là, ni même pourquoi elle a été opérée. Alors elle prend la fuite. Les tueurs à ses trousses confirment vite ses soupçons : rien de tout cela n’est légal. La jeune fille, hacker talentueuse et solitaire, vit depuis plusieurs années en marge de la société et pense pouvoir semer facilement ses poursuivants. Elle se trompe : pour la première fois de sa vie, si elle veut survivre, Noa a besoin d’aide. Car elle est la clé d’un terrible secret. Et ceux qui la traquent n’ont aucune intention de la laisser s’échapper.",
}]

/* je creer un fonction JS "afficheRecommandation()" et qui affichera 3 livre de facon aléatoire */

function afficheRecommandations(let propriete in tomebook){

    document.getElementById('recojs').innerHTML += tomebook[propriete] + '<br>';
}
