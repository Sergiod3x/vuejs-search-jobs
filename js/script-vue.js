Vue.config.devtools = true;

new Vue(
    {
        el: '#main-container',
        data: {
            // Array di proposte di lavoro
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
                company: 'Head',
                position: 'Developer',
                description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                created_at: '4/22/2021',
                logo: './img/logo3.png',
                city: 'Cagliari',
                contract: 'Part-Time'
            },
            {
                id: 4,
                company: 'Enel',
                position: 'Developer',
                description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                created_at: '3/22/2021',
                logo: './img/logo4.png',
                city: 'Palermo',
                contract: 'Full Time'
            }, 
            {
                id: 5,
                company: 'Bugati',
                position: 'Developer',
                description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                created_at: '2/28/2021',
                logo: './img/logo5.png',
                city: 'Roma',
                contract: 'Part-Time'
              }     
        ],
        // Prefeririti
        starred: [1, 2, 4],
        // Candidature effettuate
        applied: [4, 5],
        
        },
        methods:{
            // Verifico se l'annuncio è già tra i preferiti, se no lo aggiungo e restituisco true
            found: function(id){
                for (let i = 0; this.starred.length > i; i++){
                  if(this.starred[i]==id){
                      return "true";
                    }  
                };
            },
            // Rimuovo l'annuncio dai preferiti
            remove: function(id){
                for (let i = 0; this.starred.length > i; i++){
                    if(this.starred[i]==id){
                        this.starred.splice(i,1);
                    }  
                };
            },
            // Se al click l'annuncio è presente nei preferiti lo rimuovo, altrimenti lo pusho
            starClick: function(id){
                if(this.found(id)){
                    this.remove(id);
                } 
                else{
                    this.starred.push(id);
                } 
            },
            // Verifico se mi sono già candidato all'annuncio, se no lo aggiungo, lo rimuovo dai preferiti e restituisco true
            foundApply: function(id){
                for (let i = 0; this.applied.length > i; i++){
                  if(this.applied[i]==id){
                      this.remove(id);
                      return "true";
                    }  
                };
            },
            // Rimuovo la candidatura dall'annuncio
            removeAply: function(id){
                for (let i = 0; this.applied.length > i; i++){
                    if(this.applied[i]==id){
                        this.applied.splice(i,1);
                    }  
                };
            },
             // Se al click sono candidato per l'annuncio lo rimuovo, altrimenti lo pusho
            applyClick: function(id){
                if(this.foundApply(id)){
                    this.removeAply(id);
                } 
                else{
                    this.applied.push(id);
                    setTimeout(() => { //dopo 0.5s dalla candidatura si esegue il setTimeout!

                        let modal = document.querySelector('.newsletter-modal');
                        let closeButton = document.querySelector('.newsletter-modal .close');
                        modal.style.display = 'block';
                
                    }, 500);
                    setTimeout(() => { //dopo 3s dalla candidatura si esegue il setTimeout!

                        let modal = document.querySelector('.newsletter-modal');
                        let closeButton = document.querySelector('.newsletter-modal .close');
                        modal.style.display = 'none';
                
                    }, 2000);
                }
            },
            
    }
    }
);