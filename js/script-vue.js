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
        starred: [1, 2, 4],
        applied: [4, 5],
        
        },
        methods:{
            found: function(id){
                for (let i = 0; this.starred.length > i; i++){
                  if(this.starred[i]==id){
                      return "true";
                    }  
                };
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
            foundApply: function(id){
                for (let i = 0; this.applied.length > i; i++){
                  if(this.applied[i]==id){
                      this.remove(id);
                      return "true";
                    }  
                };
            },
            removeAply: function(id){
                for (let i = 0; this.applied.length > i; i++){
                    if(this.applied[i]==id){
                        this.applied.splice(i,1);
                    }  
                };
            },
            applyClick: function(id){
                if(this.foundApply(id)){
                    this.removeAply(id);
                } 
                else{
                    this.applied.push(id);
                    this.openModal();
                }
            },
            openModal: function() {
                console.log("open modal");
                const modalTimeoutSeconds = 1;
                const modalId = 'confirm-modal'
                let modalSetTimeout = null;      
          
                this.$bvModal.msgBoxConfirm("Session expiration in ${modalTimeoutSeconds} seconds. Press OK to continue.", {
                  id: modalId
                })
                .then(wasOkPressed => {
                  if(wasOkPressed) {
                    /* Do something */
                  } else {
                    /* Do something else */
                  }
                })
                .catch(() => {
                  console.log('The modal closed unexpectedly')
                })
                .finally(() => {
                  clearTimeout(modalSetTimeout)
                })
                
                modalSetTimeout = setTimeout(() => {
                  this.$bvModal.hide(modalId)
                }, modalTimeoutSeconds * 1000)
              }
    }
    }
);