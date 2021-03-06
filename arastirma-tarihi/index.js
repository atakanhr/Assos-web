var app = new Vue({
    el: '#app',
    data: {
        lang : 'tr',
        contenttr: {
            title: 'Araştırma Tarihi',
            paragraph1: '1835 yılında Fransız araştırmacı Charles Texier Assos’u inceleyerek kentin haritasını, Athena tapınağı ve surların ayrıntılı çizimlerini hazırlamıştır. 1835 yılında Padişah II. Mahmud, Athena tapınağının mimari parçalarını Texier’e vermiştir. 1838 yılında akropoliste küçük çaplı bir kazının ardından tapınağın parçaları bir savaş gemisi ile Fransa’daki Louvre Müzesi’ne götürülmüştür. 1785 yılında kente gelen Marie Gabriel Florent Auguste de Choiseul-Gouffier de kentin planını çizmiş ve Assos’dan övgü ile söz etmiştir. 1865 yılında Çanakkale Boğazı’nda inşa edilecek kaleler için gerekli taşın Assos harabelerinden alınacağını haber alan Fransız yetkililer, o yıllarda Kıbrıs’ta görev yapan Edmond Duthoit’e Assos giderek kazı için hazırlıklara başlaması talimatını vermişlerdir. Yaklaşık 3 ay kadar kazı iznini bekleyen Duthoit kentin surlarının rölövesini alarak oldukça ayrıntılı çizim yapmıştır. 1879 yılında Assos’ta araştırmalar yapan Joseph T. Clarke ve Francis H. Bacon ikilisi, 1881 yılında Amerikan Arkeoloji Enstitüsü adına kazı yapmak üzere kente tekrar gelmişlerdir. 1883 yılının baharında sona eren kazıda bulunan eserlerin 3/1’lik kısmı Amerikan araştırmacılara verilerek Amerika Birleşik Devletleri’ndeki Boston Güzel Sanatlar Müzesi’ne, diğer bölümü ise İstanbul Arkeoloji Müzesi’ne götürülmüştür. 1981 yılında Prof.Dr. Ümit Serdaroğlu tarafından yeniden başlatılan kazılar 2005 yılına kadar devam etmiştir. 2006 yılından itibaren Assos kazıları Çanakkale Onsekiz Mart Üniversitesi öğretim üyesi Prof. Dr. Nurettin Arslan başkanlığında yürütülmekte; Almanya’nın Philipps Üniversitesi (Marburg) ve Brandenburg Teknik Üniversitesi (Cottbus) ile ortak çalışmalar yapılmaktadır. 2017 yılında UNESCO’nun Dünya Mirası Geçici Listesi’ne alınan Assos kazıları; Kültür ve Turizm Bakanlığı, Kültür Varlıkları ve Müzeler Genel Müdürlüğü, Türk Tarih Kurumu ve ana sponsor İÇDAŞ Çelik Enerji Tersane ve Ulaşım A.Ş.’nin destekleri ile sürdürülmektedir.',
            paragraph2: '',
        },
        contenten:{
            title:'Research History',
            paragraph1: 'Marie Gabriel Florent Auguste de Choiseul-Gouffier, who came to the city in 1785, drew the city\'s plan and wrote of Assos with great praise. In 1835, French traveler Charles Texier examined Assos and prepared a detailed city map that focused specifically on the temple of Athena and the city walls. In the same year, Sultan Mahmud II allowed Texier to remove architectural pieces from the temple of Athena and take them back with him to France. After a brief excavation of the acropolis in 1838, the artifacts were taken to France on a warship and exhibited in the Louvre Museum. In 1865, French authorities learned that the stones required to build the castles in Canakkale would be taken from the ruins of Assos and instructed Edmond Duthoit, who was working in Cyprus in those years, to begin preparing for excavation. While he waited three months for an excavation permission, Duthoit took a survey of all the city walls and made many drawings. Joseph T. Clarke and Francis H. Bacon conducted research in Assos in 1879 and returned to the city in 1881 on behalf of the American Archaeological Institute. The excavations ended in the spring of 1883, and one third of collected artifacts were given to the American researchers to be kept at the Museum of Fine Arts in Boston. The remaining artifacts were taken to the Istanbul Archaeological Museum. In 1981, excavations were resumed by Prof. Dr. Ümit Serdaroğlu and continued until 2005. Assos archaeological excavation activities have been directed by Canakkale Onsekiz Mart University faculty member Prof. Dr. Nurettin Arslan since 2006. The German Philipps-University Marburg and the Brandenburg Technic University Cottbus are conducting joint projects. Assos was included in UNESCO\'s World Heritage Temporary List in 2017. The main sponsorship of Assos excavations was undertaken by İÇDAŞ (Steel, Energy, Shipbuilding and Transportation Industry Inc.). Excavations carried out on behalf of the Ministry of Culture and Tourism are supported by the General Directorate of Cultural Heritage and Museums and the Turkish Historical Society.',
            paragraph2: '',
        },
        links: {
            foto1: {link : 'content/foto-1.jpg', aciklamatr : 'Joseph T. Clarke (1882)', aciklamaen: 'Joseph T. Clarke (1882)'},
            foto2: {link : 'content/foto-2.jpg', aciklamatr : 'Francis H. Bacon and Robert Koldewey at the port (1882)', aciklamaen : 'Francis H. Bacon and Robert Koldewey at the port (1882)'},
            foto3: {link:'content/foto-3.jpg', aciklamatr : 'Agora',aciklamaen : 'Agora'},
            foto4: {link:'content/foto-4.jpg', aciklamatr : 'Edmond Duthoit (1865)' , aciklamaen : 'Edmond Duthoit (1865)'},
            foto5: {link:'content/foto-5.jpg', aciklamatr : 'Charles Texier (1838)' , aciklamaen : 'Charles Texier (1838)'},
            foto6:{link:'content/ümit.jpg', aciklamatr : 'Ümit Serdaroglu 1932-2005', aciklamaen: 'Ümit Serdaroglu 1932-2005'},
            foto7:{link: 'content/edmund.jpg', aciklamatr : 'Edmond Duthot 1837 - 1889', aciklamaen:'Edmond Duthot 1837 - 1889'},
            foto7:{link: 'content/francis.jpg', aciklamatr : 'Francis H. Bacon 1856-1940', aciklamaen:'Francis H. Bacon 1856-1940'},
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