var app = new Vue({
    el: '#app',
    data: {
        lang : 'tr',
        contenttr: {
            title: 'Güney Stoa ve Hamam',
            paragraph1: 'G\u00DCNEY STOA (M.\u00D6. 2.- M.\u00D6. 1. y\u00FCzy\u0131l) \r\nAgoran\u0131n g\u00FCney teras duvar\u0131 boyunca uzanan stoa 70 m uzunlu\u011Funda ve 21 m y\u00FCksekli\u011Findedir. Stoan\u0131n bodrum kat\u0131 sarn\u0131\u00E7, ikinci ve \u00FC\u00E7\u00FCnc\u00FC katlar\u0131 depo, d\u00FCkkan, agoraya a\u00E7\u0131lan d\u00F6rd\u00FCnc\u00FC kat\u0131 ise stoa olarak d\u00FCzenlenmi\u015Ftir. Stoan\u0131n do\u011Fusunda M.\u00D6. 4. y\u00FCzy\u0131la tarihlenen bir \u00E7e\u015Fme ve g\u00FCney kenar\u0131nda Kallisthenes ve Aristias karde\u015Flerin an\u0131s\u0131na in\u015Fa edilmi\u015F an\u0131t mezar (heroon) vard\u0131r. G\u00FCney stoan\u0131n do\u011Fu ve bat\u0131 kenarlar\u0131ndaki merdivenlerden agoraya ula\u015F\u0131lmaktad\u0131r. Roma \u0130mparatorluk D\u00F6nemi\u2019nde stoan\u0131n \u00F6n\u00FCne yeni bir cadde ve bunun g\u00FCney kenar\u0131na bir hamam in\u015Fa edilmi\u015Ftir. \r\n\r\nHAMAM (M.\u00D6. 1. y\u00FCzy\u0131l) \r\nHamam kentin ileri gelen Roma vatanda\u015F\u0131 Lolia Antiochius taraf\u0131ndan yapt\u0131r\u0131lm\u0131\u015Ft\u0131r. 1882 y\u0131l\u0131ndaki kaz\u0131larda hamam\u0131n alttan \u0131s\u0131tma sisteminin (hypocaust) bir k\u0131sm\u0131 a\u00E7\u0131\u011Fa \u00E7\u0131kar\u0131lm\u0131\u015Ft\u0131r. Yap\u0131n\u0131n k\u00FC\u00E7\u00FCk bir b\u00F6l\u00FCm\u00FCnde kaz\u0131 yap\u0131lmas\u0131 nedeni ile sadece kemerli bir duvar ile temel kal\u0131nt\u0131lar\u0131 g\u00F6r\u00FClebilmektedir. Hamam\u0131n su ihtiyac\u0131n\u0131n stoalar\u0131n \u00F6n\u00FCndeki b\u00FCy\u00FCk sarn\u0131\u00E7lardan kar\u015F\u0131land\u0131\u011F\u0131 tahmin edilmektedir. Ayakta kalm\u0131\u015F kemerli duvar\u0131n g\u00FCney cephesindeki yaz\u0131ta g\u00F6re Erken Bizans \u00C7a\u011F\u0131\u2019nda (M.S. 6. y\u00FCzy\u0131l) hamam\u0131n bir b\u00F6l\u00FCm\u00FC Helladios ad\u0131ndaki bir ki\u015Fi taraf\u0131ndan kiliseye \u00E7evrilmi\u015Ftir.\r\n',
            paragraph2: '',
        },
        contenten:{
            title:'South Stoa and Bath',
            paragraph1: 'SOUTH STOA (2nd century B.C. \u2013 1st century B.C.) \r\nThe stoa along the agora\u2019s southern terrace wall was 70 meters long and 21 meters high. The basement floor was used as a cistern, and the second and third floors of the building were arranged as warehouses and shops, while the fourth floor opened directly onto the agora. To the east of the stoa there was a fountain from the 4th century B.C. A heroon, a shrine dedicated to an ancient hero, was built in the southern corner of the stoa in memory of the brothers Kallisthenes and Aristias. Stairs on the east and west sides of the South Stoa provided access to the agora. In accordance with the new regulations enacted during the Roman Imperial period, a street was built on the vaults in front of the stoa and a bath was built on the south coast. \r\n\r\nBATH (1st century B.C.) \r\nThe bath complex was built by the famous Roman citizen Lolia Antiochius. During the excavations of 1882, a part of the hypocaust system, an underground heating system, was unearthed. Due to the excavation\u2019s focus on such a small part of the building, only an arched wall and foundation remnants are visible. It is estimated that the water requirement of the bath was met by the large cisterns located in front of the stoas. According to an inscription from the southern wall of the surviving arched wall, in the Early Byzantine Age (6th century B.C.), a part of the bath was turned into a church by a person named Helladios.\r\n',
            paragraph2: '',
        },
        links: {
            foto1: {link : 'content/cizim-1.svg', aciklamatr : '', aciklamaen: ''},
            foto2: {link : 'content/foto-1.jpg', aciklamatr : 'Clarke - Bacon - Koldewey (1882)', aciklamaen : 'Clarke - Bacon - Koldewey (1882)'},
            foto3: {link : 'content/foto-2.jpg', aciklamatr : 'Hamam - Clarke - Bacon - Koldewey (1882)', aciklamaen : 'Hamam - Clarke - Bacon - Koldewey (1882)'},
            foto4: {link : 'content/foto-3.jpg', aciklamatr : 'Güney Stoa - Güney Cephe - Clarke - Bacon - Koldewey (1882)', aciklamaen : 'Güney Stoa - Güney Cephe - Clarke - Bacon - Koldewey (1882)'}
        }

    },

    methods:{
        changeLangEn : function(){
            this.lang = 'en'
        },
        changeLangTr : function(){
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
    }
})