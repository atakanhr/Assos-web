var app = new Vue({
    el: '#app',
    data: {
      lang: 'tr',
      items: [{nametr:'Agora',nameen:'Agora',img:'/agora/agora-content/cizim-1.svg',source:'/agora'},
                {nametr:'Akropolis',nameen:'Acropolis',img:'/akropolis/akropolis-content/foto-1.jpg',source:'/akropolis'},
            {nametr:'Araştırma tarihi',nameen:'Research History',img:'/arastirma-tarihi/content/foto-3.jpg',source:'/arastirma-tarihi'},
            {nametr:'Güney teras alanı',nameen:'South Terrace Area',img:'/asagi-agora/content/foto-1.jpg',source:'/asagi-agora'},
            {nametr:'Athena Tapınağı',nameen:'Athena Temple',img:'/athena-tap/content/cizim-1-01.svg',source:'/athena-tapinak'},
            {nametr:'Batı Kilisesi',nameen:'West Church',img:'/batı-kilisesi/content/cizim-1-01.svg',source:'/batı-kiliesesi'},
            {nametr:'Boulenterion',nameen:'Boulenterion',img:'/Boulenterion/content/cizim-1.svg',source:'/Boulenterion'},
            {nametr:'Cami',nameen:'Mosque',img:'/cami/content/foto-1.jpg',source:'../cami'},
            {nametr:'Güney Stoastoa',nameen:'South Stoastoa',img:'/guney-stoastoa/content/cizim-1.svg',source:'/guney-stoastoa'},
            {nametr:'Gymnasion',nameen:'Gymnasion',img:'/gymnasion/content/cizim-1.svg',source:'/gymnasion'},
            {nametr:'Kent Planı',nameen:'Urban Plan',img:'/kent-planı/content/cizim-1.svg',source:'/kent-planı'},
            {nametr:'Kuzey Stoa',nameen:'North Stoa',img:'/kuzey-stoa/content/cizim-1.jpg',source:'/kuzey-stoa'},
            {nametr:'Liman',nameen:'Harbor',img:'/liman/content/foto-1.jpg',source:'../liman'},
            {nametr:'Nekropolis',nameen:'Necropolis',img:'/nekropolis/content/cizim-1.jpg',source:'/nekropolis'},
            {nametr:'Sur',nameen:'City Walls',img:'/sur/content/foto-1.jpg',source:'/sur'},
            {nametr:'Assos Tarihi',nameen:'History of Assos',img:'/tarihce/content/Aristoteles.jpg',source:'/tarihce'},
            {nametr:'Ünlüler',nameen:'Famous People',img:'/unluler/content/kleanthes.jpg',source:'/unluler'},
            {nametr:'Xenedochion',nameen:'Xenedochion',img:'/xenedochion/content/foto-1.jpg',source:'xenedochion'},]

    },
    methods: {
        changeLangEn : function(){
            this.lang = 'en'
            console.log(lang)
        },
        changeLangTr : function(){
            this.lang = 'tr'
        },
    }
  })