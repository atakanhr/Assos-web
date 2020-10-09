var app = new Vue({
    el: '#app',
    data: {
      lang: 'tr',
      items: [{nametr:'Agora',nameen:'Agora',img:'/agora/agora-content/cizim-1.svg',source:'/agora'},
                {nametr:'Akropolis',nameen:'Acropolis',img:'/akropolis/akropolis-content/foto-1.jpg',source:'/akropolis'},
            {nametr:'Araştırma tarihi',nameen:'Research History',img:'/arastirma-tarihi/content/foto-3.jpg',source:'/arastirma-tarihi'},
            {nametr:'Güney teras alanı',nameen:'South Terrace Area',img:'/asagi-agora/content/foto-1.jpg',source:'/asagi-agora'},
            {nametr:'Athena Tapınağı',nameen:'Athena Temple',img:'/athena-tap/content/cizim-1-01.svg',source:'/athena-tapinak'},
            {nametr:'Batı Kilisesi',nameen:'West Church',img:'/batı-kilisesi/content/cizim-1-01.svg',source:'/batı-kilisesi'},
            {nametr:'Bouleuterion',nameen:'Bouleuterion',img:'/Boulenterion/content/cizim-1.svg',source:'/Boulenterion'},
            {nametr:'Erken Osmanlı Cami',nameen:'Early Ottoman Mosque',img:'/cami/content/foto-1.jpg',source:'../cami'},
            {nametr:'Güney Stoa ve Hamam',nameen:'South Stoa and Bath',img:'/guney-stoastoa/content/cizim-1.svg',source:'/guney-stoastoa'},
            {nametr:'Gymnasion',nameen:'Gymnasion',img:'/gymnasion/content/cizim-1.svg',source:'/gymnasion'},
            {nametr:'Assos Şehir Planı',nameen:'Assos City Plan',img:'/kent-planı/content/cizim-1.svg',source:'/kent-planı'},
            {nametr:'Kuzey Stoa',nameen:'North Stoa',img:'/kuzey-stoa/content/cizim-1.jpg',source:'/kuzey-stoa'},
            {nametr:'Liman',nameen:'Harbor',img:'/liman/content/foto-1.jpg',source:'../liman'},
            {nametr:'Nekropolis',nameen:'Necropolis',img:'/nekropolis/content/cizim-1.jpg',source:'/nekropolis'},
            {nametr:'Sur',nameen:'City Walls',img:'/sur/content/foto-1.jpg',source:'/sur'},
            {nametr:'Assos Tiyatrosu',nameen:'Theather of Assos',img:'/tiyatro/content/tiyatro.jpg',source:'/tiyatro'},
            {nametr:'Assos Tarihi',nameen:'History of Assos',img:'/tarihce/content/Aristoteles.jpg',source:'/tarihce'},
            {nametr:'Assos\'un Ünlü Kişileri',nameen:'Famous People of Assos',img:'/unluler/content/kleanthes.jpg',source:'/unluler'},
            {nametr:'Xenodochion',nameen:'Xenodochion',img:'/xenedochion/content/foto-1.jpg',source:'xenedochion'},]

    },
    methods: {

        changeLangEn : function(){
            localStorage.lang = 'en'
            this.lang = 'en'
        },
        changeLangTr : function(){
            localStorage.lang = 'tr'
            this.lang = 'tr'
        },
    },
    mounted(){
        if (localStorage.lang) {
            this.lang = localStorage.lang;
          }else{
              this.lang = 'tr'
          }
    }
  })