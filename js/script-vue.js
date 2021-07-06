Vue.config.devtools = true;

new Vue(
    {
        el: '#main-container',
        data: {
            jobs: [
            {
                id: 1,
                company: 'Everis',
                position: 'Developer',
                description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                created_at: '5/22/2021',
                logo: './img/logo1.png',
                city: 'Roma',
                contract: 'Full Time'
            },
            {
                id: 2,
                company: 'Mazda',
                position: 'Developer',
                description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                created_at: '5/13/2021',
                logo: './img/logo2.png',
                city: 'Milano',
                contract: 'Full Time'
            },
            {
                id: 3,
                company: 'Perferendis',
                position: 'Developer',
                description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                created_at: '4/22/2021',
                logo: './img/logo3.png',
                city: 'Cagliari',
                contract: 'Part-Time'
            },
            {
                id: 4,
                company: 'Perferendis',
                position: 'Developer',
                description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                created_at: '3/22/2021',
                logo: './img/logo4.png',
                city: 'Palermo',
                contract: 'Full Time'
            }, 
            {
                id: 5,
                company: 'Perferendis',
                position: 'Developer',
                description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                created_at: '2/28/2021',
                logo: './img/logo5.png',
                city: 'Roma',
                contract: 'Part-Time'
              }     
        ],
        starred: [1, 2, 4],
        applied: [4, 5],
        
            // myProfile: {
            //     details: {
            //         name: 'Pierfilippo',
            //         surname: 'Baudo',
            //         pic: 'https://www.focus.it/site_stored/imgs/0003/042/nerd2.1020x680.jpg',
            //     },
            //     posts: [
            //         {
            //             text: "C'è nessuno?",
            //             mediaPath: 'https://acqualete.it/wp-content/uploads/2015/09/La-Particella-di-Sodio-1.jpg',
            //             date: '26-05-2021'
            //         }, {
            //             text: "Vi ricordate di Windows XP? Che ricordi, non ce la faccio...",
            //             mediaPath: 'https://upload.wikimedia.org/wikipedia/it/d/d3/Colline_%28immagine%29.jpg',
            //             date: '01-06-2021'
            //         }, {
            //             text: "Mi sono iscritto in palestra!",
            //             date: '16-06-2021'
            //         },
            //         {
            //             text: 'Vi presento il mio amico Mimmo',
            //             mediaPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Supernerd_%283262512306%29.jpg/1024px-Supernerd_%283262512306%29.jpg',
            //             date: '17-06-2021'
            //         }
            //     ]
            // },
           postText : "",

        },
        methods:{
     
            getCurrentDateTime: function() {
                const dateTimeNow = dayjs();
                return dateTimeNow.format("DD/MM/YYYY HH:mm:ss");

            },
            found: function(id){
                for (let i = 0; this.starred.length > i; i++){
                    console.log("ELEMNT" + this.starred[i]);
                    console.log("ID ESTERNO" + id);
                  if(this.starred[i]==id){
                      return "true";
                    }  
                };
                console.log("FALSE")
            },

            remove: function(id){
                for (let i = 0; this.starred.length > i; i++){
                    if(this.starred[i]==id){
                        this.starred.splice(i,1);
                    }  
                };
            },
            
            starClick: function(id){
                if(this.found(id)){
                    this.remove(id);
                } 
                else{
                    this.starred.push(id);
                }
                 
            },

     

            // removePost: function(index){
            //     console.log(index);                
            //     this.myProfile.posts.splice(index,1);
                 
            // },
            



    }
    }
);