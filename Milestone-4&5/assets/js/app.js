const { createApp } = Vue;
createApp({
    data(){
        return{
            activeContact: 0,
            textMessage : null,
            userSearch : null,
            randomWords: ['prosciutto', 'cacao', 'marmellata', 'le 16:40 e tutto va bene', 'ho anche dei difetti', 'a volte si, a volte pure', 'mayday mayday mayday', 'lè tutto un corar su e zo', 'ma perchè hai bruciato il rum?'],
            contacts: [
                {
                    name: 'Michele',
                    avatar: 'avatar_1',
                    visible: true,
                    messages: [
                        {
                            date: '15:30',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '15:50',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '16:15',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: 'avatar_2',
                    visible: true,
                    messages: [
                        {
                            date: '16:30',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '16:30',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '16:35',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: 'avatar_3',
                    visible: true,
                    messages: [
                        {
                            date: '10:10',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '10:20',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '16:15',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: 'avatar_4',
                    visible: true,
                    messages: [
                        {
                            date: '15:30',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '15:50',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: 'avatar_5',
                    visible: true,
                    messages: [
                        {
                            date: '15:30',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '15:50',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: 'avatar_5',
                    visible: true,
                    messages: [
                        {
                            date: '15:30',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '15:50',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '15:51',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: 'avatar_7',
                    visible: true,
                    messages: [
                        {
                            date: '15:30',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '15:50',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: 'avatar_8',
                    visible: true,
                    messages: [
                        {
                            date: '15:30',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '15:50',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '15:51',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
        }        
    },
    methods:{         
        selectContact(index){
            this.activeContact = index;
            //console.log('cliccato' + index);
        },
        sendMessage(){
            let time = new Date().toJSON().slice(11, 16);

            let newMessage = {
                date: time,
                message: this.textMessage,
                status: 'sent' 
            };
            this.textMessage='';
            this.contacts[this.activeContact].messages.push(newMessage);
            setTimeout(() => {
                    let newRandomMessage = {
                    date: time,
                    message: this.randomWords[Math.floor(Math.random()* this.randomWords.length)],
                    status: 'received' 
                 };
                 this.contacts[this.activeContact].messages.push(newRandomMessage);
              }, 1000);
        },
        searchContact(){
            //console.log(this.userSearch);
            contact.visible=false;
            this.contacts.forEach(contact => {
                if (contact.name === this.userSearch) {
                    console.log('urca');
                }
            });
        }
    }
}).mount('#app')
