var app = new Vue({
    el: '#app',
    data: {

        pizza: [
            {
                'nome': 'Margherita',
                'descrizione': "La regina delle pizze, amata da grandi e piccini. il suo unico ed intramontabile mgusto mette sempre d'accordo tutti",
                'url': 'margherita.jpg' ,
                'prezzo': 6,
                'special': false
            },
            {
                'nome': 'Salamino',
                'descrizione': "La pizze Salamino, amata da grandi e piccini. il suo unico ed intramontabile mgusto mette sempre d'accordo tutti",
                'url': 'salamino.jpg' ,
                'prezzo': 7,
                'special': false
            },
            {
                'nome': 'Ananas',
                'descrizione': "La pizza Ananas, amata da grandi e piccini. il suo unico ed intramontabile mgusto mette sempre d'accordo tutti",
                'url': 'ananas.jpg' ,
                'prezzo': 9,
                'special': true
            }
        ],

        dimensione:[
            {
                dim: 'normale',
                aggiunta: 0
            },
            {
                dim: 'media',
                aggiunta: 3
            },
            {
                dim: 'grande',
                aggiunta: 4
            }
        ],

        impasto:[
            {
                tipo: 'normale',
                aggiunta: 0
            },
            {
                tipo: 'integrale',
                aggiunta: 4
            },
            {
                tipo: 'lievitazioneN',
                aggiunta: 6
            },
        ],

        counterPizza: 0,
        dimensioniPizza: 0,
        impastoPizza: 0,

        prezzo: 0,

        //form inserimento pizza
        nomePizza:'',
        descrizionePizza: '',
        urlPizza: '',
        costoPizza: 0,

    },
    methods:{
        ifPrezzo(elemento){
            if(elemento.aggiunta > 0){
                return `${elemento.aggiunta}€`
            }
        },
        calcolaPrezzo(){
            let prezzoBase = this.pizza[this.counterPizza].prezzo;
            let prezzoDim = this.dimensione[this.dimensioniPizza].aggiunta;
            let prezzoImp = this.impasto[this.impastoPizza].aggiunta;

            this.prezzo = prezzoBase + prezzoImp + prezzoDim;

        },

        pushNuovaPizza(){
            let newPizzaOggetto = {
                'nome': this.nomePizza,
                'descrizione': this.descrizionePizza,
                'url': this.urlPizza,
                'prezzo': parseInt(this.costoPizza),
                'special': false
            }

            console.log(typeof this.costoPizza)
            console.log(this.pizza)
            this.pizza.push(newPizzaOggetto)
        }
    }

  })