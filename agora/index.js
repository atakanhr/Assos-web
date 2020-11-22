var app = new Vue({
    el: '#app',
    data: {
        lang : 'tr',
        contenttr: {
            title: 'Agora',
            paragraph1: 'Antik kentin siyasi ve ticari buluşma noktası olan agora için güneydeki eğimli bölge seçilmiştir. Düz bir meydan oluşturmak için alanın kuzeyindeki konglomera kayalık 140 m uzunluğunda kesilerek güneyine 12 m yüksekliğinde bir teras duvarı örülmüştür. Agoranın kuzey ve güneyine çok katlı stoalar (dükkanlar), doğu kenarına meclis binası (bouleuterion) batı bölümüne ise tapınak ve küçük binalar inşa edilmiştir. Agoranın ilk yapıları M.Ö. 4. yüzyılın ikinci yarısında inşa edilmiş ve Roma Dönemine kadar bazı yeni yapılar eklenerek uzun bir süre kullanılmıştır. Agoradaki kazılarda ticari faaliyetleri destekleyen standartlar (hacim ve uzunluk ölçü masaları -sekoma- çatı kiremidi) bulunmuştur. Agoraya dikilmiş olan heykel, meclis karar anıtları ve onurlandırma yazıtları ise bu alanın politik işlevinin kanıtlarıdır. Büyük anıtların bouleuterionun önündeki alanda kümelendiği görülmektedir. Agoraya dikilen en son anıt batı kapısının gerisinde; İmparator II. Konstantius’a (M.S. 337-353) ait olan heykeldir. Bizans Çağı’nda kamusal işlevi son bulan agora konut alanı olarak kullanılmıştır.',
            paragraph2: '“Asya’nın en parlak prokonsülü  Caelius Montius, şehrin kurucusu,  en büyük  fatih ve zafer andacı taşıyan, her zaman  Augustus olan Flavius Iulius Constantius’un  (heykelini dikti). Şehir meclisinin ve halkın kararıyla.”',
        },
        contenten:{
            title:'Agora',
            paragraph1: 'The agora, a central market area and the political and commercial meeting point of the ancient city, was located at the sloping area to the south. In order to form a flat square, the conglomerate stone at the north of the region was cut to a length of 140 meters and a 12 meter high terrace wall was built to the south. Multi-storey stoas (shops) were built to the north and south of the agora, a temple and small buildings were built to the west of the bouleterion (council house). The first stage of the agora can be dated back to the second half of the 4th century B.C., so it predates the Roman period. During the excavations of the agora different volume and length measurement tables (sekoma) were uncovered, which suggests the use of this area for commercial activities. A statue, monuments recording council decisions, and honorary inscriptions were also discovered within the agora. Notably, these larger monuments were concentrated in the area in front of the bouleuterion. The latest monument, a statue of the Emperor Constantius II (A.D. 337-353) was erected to the west of the agora. By the time the Byzantine era came around, the agora had lost its original function as public property and was used as a residential area.',
            paragraph2: 'Translation of the inscription: " Caelius Montius,  the most illustrious Proconsul of Asia, (has erected  this statue of) Flavius Julius Constantius, the founder  of the city, the greatest conqueror and trophy-bearer,  forever Augustus. By decree of the Senate and People."',
        },
        links: {
            foto1: {link : 'agora-content/cizim-1.svg', aciklamatr : 'plan', aciklamaen: 'plan'},
            foto2: {link : 'agora-content/cizim-2.svg', aciklamatr : 'Clarke - Bacon - Koldewey (1882)', aciklamaen : 'Clarke - Bacon - Koldewey (1882)'},
            foto3: {link:'agora-content/olcu-masasi.svg', aciklamatr : 'Ölçü Masası',aciklamaen : 'Sekoma'},
            foto4: {link:'agora-content/yazit.svg', aciklamatr : 'II. Constantius (MS 317-361)' , aciklamaen : 'II. Constantius (AD 317-361)'}
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