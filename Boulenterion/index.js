var app = new Vue({
    el: '#app',
    data: {
        lang : 'tr',
        contenttr: {
            title: 'Bouleuterion',
            paragraph1: 'Agoran\u0131n do\u011Fu y\u00F6nu\u0308ndeki kare planl\u0131 (20,60 x 20,60 m) meclis binas\u0131n\u0131n agoraya bakan giri\u015F cephesi be\u015F su\u0308tun ve \u00E7ift kanatl\u0131 alt\u0131 kap\u0131 ile kapat\u0131lm\u0131\u015Ft\u0131r. Meclis u\u0308yelerinin (Bule) toplant\u0131s\u0131 s\u0131ras\u0131nda kap\u0131lar kapat\u0131lmaktayd\u0131. Kentle ilgili her tu\u0308rlu\u0308 idari ve yasal i\u015Fleri g\u00F6ru\u0308\u015Fen yakla\u015F\u0131k 500 u\u0308ye bu binada toplanmakta ve ba\u015Fkanl\u0131k g\u00F6revi de\u011Fi\u015Fimli olarak yap\u0131lmaktayd\u0131. \u00DCyelerin \u201CU\u201D bi\u00E7imli oturma s\u0131ralar\u0131 ah\u015Faptand\u0131r. Yap\u0131 kitabesine g\u00F6re meclis binas\u0131 M.\u00D6. 4. yu\u0308zy\u0131l\u0131n ikinci yar\u0131s\u0131nda Ladama adl\u0131 memur veya varl\u0131kl\u0131 bir ki\u015Fi taraf\u0131ndan yapt\u0131r\u0131lm\u0131\u015Ft\u0131r. Assos bouleuterionu Bat\u0131 Anadolu\u2019daki en eski meclis binalar\u0131ndan biridir. Roma \u00C7a\u011F\u0131\u2019nda \u0130mparatorluk ku\u0308lt odas\u0131 olarak kullan\u0131lan meclis binas\u0131n\u0131n kuzey duvar\u0131 \u00F6nu\u0308ne an\u0131tlar dikilmi\u015Ftir. Bouleuteriona as\u0131ld\u0131\u011F\u0131 tahmin edilen yaz\u0131tl\u0131 bronz levhada (\u0130stanbul Arkeoloji Mu\u0308zesi) Caligula\u2019n\u0131n imparator olmas\u0131ndan dolay\u0131 Assoslular\u0131n duyduklar\u0131 sevin\u00E7 ve ba\u011Fl\u0131l\u0131k ifade edilmi\u015Ftir. M.S. 18 y\u0131l\u0131nda Caligula alt\u0131 ya\u015F\u0131ndayken ailesi (Germanicus ve Agrippina) ile birlikte Assos\u2019u ziyaret etmi\u015Ftir. Bizans \u00C7a\u011F\u0131\u2019nda bouleuterionun bir b\u00F6lu\u0308',
            paragraph2: '',
        },
        contenten:{
            title:'Bouleuterion',
            paragraph1: 'The squared assembly building (20.60 x 20.60 m) to the east of the agora was closed off with five columns and six double doors between them opening to agora. The structure was lit by natural light that would stream in through the gaps on the doors. The doors would be closed during meetings,  which only members of the parliament (Bule) could attend. In the bouleuterion, where a city\u2019s legal and administrative affairs were handled, were wooden seats for approximately 500 members. The bouleuterion of Assos was built in the second half of the 4th century B.C. by an officer or otherwise wealthy patron named Ladama, according to the building\u2019s inscription. Remarkably, this bouleuterion is one of the oldest assembly buildings found to date in Western Anatolia. Monuments were erected in front of the northern wall of the building, which had been used as an imperial cult room during the Roman Age. An inscription on a bronze plate (nowadays stored in the Archaeological Museum in Istanbul), presumed to have been hung on the wall of the Bouleuterion, expressed the sympathy and loyalty of the people of Assos to the emperor Caligula, who visited the city with his father Germanicus and his mother Agrippina in 18 A.D. During the Byzantine era, the bouleuterion was repurposed as a barn and blacksmith\'s workshop.\r\n',
            paragraph2: '',
        },
        links: {
            foto1: {link : 'content/cizim-1.svg', aciklamatr : '', aciklamaen: ''},
            foto2: {link : 'content/cizim-2.svg', aciklamatr : 'Batı Cephesi', aciklamaen: 'Western Facade'},
            foto3: {link : 'content/image0.jpg', aciklamatr : 'Bouleuterion planı', aciklamaen: 'Bouleuterion plan'},
        },

    },

    methods:{
        changeLangEn : function(){
            localStorage.lang = 'en'
            this.lang = 'en'
        },
        changeLangTr : function(){
            localStorage.lang = 'tr'
            this.lang = 'tr'
        },
        biggerFont : function(){
            font_size = parseInt($("p").css("font-size"))
            font_size = font_size + 2
            $("p").css("font-size",`${font_size}px`);
        },
        smallerFont : function(){
            font_size = parseInt($("p").css("font-size"))
            font_size = font_size - 2
            $("p").css("font-size",`${font_size}px`);
        }
    },
    mounted(){
        if (localStorage.lang) {
            this.lang = localStorage.lang;
          }else{
              this.lang = 'tr'
          }
    }
})