var app = new Vue({
    el: '#app',
    data: {
        lang : 'tr',
        contenttr: {
            title: 'Gymnasion',
            paragraph1: 'Bir e\u011Fitim kurumu olan Gymnasion bat\u0131daki ana kap\u0131n\u0131n arkas\u0131ndad\u0131r. Kare planl\u0131 avlunun (52X52 m) etraf\u0131 revakl\u0131 galeri ile \u00E7evrilidir. Avlunun bat\u0131 kenar\u0131nda bir sarn\u0131\u00E7 ile do\u011Fu k\u00F6\u015Fesinde daire planl\u0131 hamam yer almaktad\u0131r. Yap\u0131ya g\u00FCneydeki yar\u0131m daire \u015Feklinde bir merdiven ve gerisindeki uzun bir koridordan girilmektedir. Uzun koridorun do\u011Fusuna olas\u0131l\u0131kla Roma \u00C7a\u011F\u0131\u2019nda bir portikus eklenmi\u015Ftir. Gymnasionun do\u011Fu cephesindeki be\u015F b\u00FCy\u00FCk kap\u0131 zemin alt\u0131ndaki odalara ula\u015F\u0131m\u0131 sa\u011Flamaktad\u0131r. M.\u00D6.2. y\u00FCzy\u0131lda in\u015Fa edilen gymnasionun Roma \u0130mparatorluk D\u00F6nemi\u2019nde de kullan\u0131ld\u0131\u011F\u0131 yaz\u0131tlardan bilinmektedir. Gymnasionun bir ar\u015Fitrav blo\u011Fu \u00FCzerindeki yaz\u0131t\u0131na g\u00F6re, Erken \u0130mparatorluk D\u00F6nemi\u2019nde kentin ileri gelenlerinden Quintus Lollius Philetaerus taraf\u0131ndan onart\u0131lm\u0131\u015Ft\u0131r. Bizans \u00C7a\u011F\u0131\u2019nda di\u011Fer kamusal yap\u0131lar gibi i\u015Flevine son verilen gymnasion kiliseye \u00E7evrilmi\u015Ftir. Bu kapsamda yap\u0131n\u0131n do\u011Fu b\u00F6l\u00FCm\u00FCne \u00E7okgen bir apsis ve s\u00FCtunlar eklenerek zemini mozaik ile kaplanm\u0131\u015Ft\u0131r. Farkl\u0131 d\u00F6nemlerde kullan\u0131lan ve baz\u0131 eklentiler yap\u0131lan gymnasion ilk yap\u0131ld\u0131\u011F\u0131 d\u00F6nemin \u00F6zelliklerini de korumu\u015Ftur.\r\n',
            paragraph2: '',
        },
        contenten:{
            title:'Gymnasion',
            paragraph1: 'The gymnasion, a space for athletic activities, is located just behind the West Gate. The square courtyard (52 x 52 m) is surrounded by a colonnaded gallery with a roof and features a cistern to the west. After completing their exercises, participants cleaned up in the east corner of the complex. Five large gates exist on the eastern front of the gymnasium. The entrance to the south of the gymnasium consists of a semicircular staircase and a long corridor. A porticus was added later to the east of the long corridor. An inscription on the architrave in the courtyard notes that Quintus Lollius Philetaerus, a notable local figure during the Early Imperial period, paid for the renovation of the gymnasion. Like many other public buildings, the eastern part of the gymnasion underwent alterations during Byzantine times. A polygonal apse and rows of columns were added to create the church, and like many of the other churches in the area, the floors were covered in mosaics. Archaeological excavations have not yet been conducted extensively in this building.',
            paragraph2: '',
        },
        links: {
            foto1: {link : 'content/cizim-1.svg', aciklamatr : '', aciklamaen: ''},
            foto2: {link : 'content/cizim-2.svg', aciklamatr : 'Gymnasion kilisesinin mozaik döşemesi - Clarke - Bacon - Koldewey 1882', aciklamaen : 'Giriş - Clarke - Bacon - Koldewey 1882 '},
            foto3: {link : 'content/cizim-3.svg', aciklamatr : '', aciklamaen : ''},
            foto4: {link : 'content/foto-1-01.jpg', aciklamatr : 'Giri\u015F - Clarke - Bacon - Koldewey 1882 \r\n', aciklamaen : 'Clarke - Bacon - Koldewey 1882 '}
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