(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{"7pui":function(e,t,n){"use strict";n.r(t),n.d(t,"af",(function(){return r})),n.d(t,"ar",(function(){return s})),n.d(t,"bg",(function(){return u})),n.d(t,"bs",(function(){return o})),n.d(t,"ca",(function(){return l})),n.d(t,"cs",(function(){return c})),n.d(t,"da",(function(){return p})),n.d(t,"de",(function(){return m})),n.d(t,"ee",(function(){return d})),n.d(t,"el",(function(){return v})),n.d(t,"en",(function(){return g})),n.d(t,"es",(function(){return b})),n.d(t,"fa",(function(){return h})),n.d(t,"fi",(function(){return k})),n.d(t,"fo",(function(){return M})),n.d(t,"fr",(function(){return f})),n.d(t,"ge",(function(){return y})),n.d(t,"gl",(function(){return D})),n.d(t,"he",(function(){return _})),n.d(t,"hr",(function(){return J})),n.d(t,"hu",(function(){return S})),n.d(t,"id",(function(){return A})),n.d(t,"is",(function(){return x})),n.d(t,"it",(function(){return O})),n.d(t,"ja",(function(){return C})),n.d(t,"kk",(function(){return F})),n.d(t,"ko",(function(){return N})),n.d(t,"lb",(function(){return z})),n.d(t,"lt",(function(){return P})),n.d(t,"lv",(function(){return L})),n.d(t,"mk",(function(){return E})),n.d(t,"mn",(function(){return $})),n.d(t,"nbNO",(function(){return G})),n.d(t,"nl",(function(){return K})),n.d(t,"pl",(function(){return H})),n.d(t,"ptBR",(function(){return I})),n.d(t,"ro",(function(){return B})),n.d(t,"ru",(function(){return Y})),n.d(t,"sk",(function(){return X})),n.d(t,"slSI",(function(){return U})),n.d(t,"srCYRL",(function(){return W})),n.d(t,"sr",(function(){return Q})),n.d(t,"sv",(function(){return q})),n.d(t,"th",(function(){return Z})),n.d(t,"tr",(function(){return ee})),n.d(t,"uk",(function(){return te})),n.d(t,"ur",(function(){return ae})),n.d(t,"vi",(function(){return re})),n.d(t,"zh",(function(){return se})),n.d(t,"zhHK",(function(){return oe}));class a{constructor(e,t,n,a){this.language=e,this.months=t,this.monthsAbbr=n,this.days=a,this.rtl=!1,this.ymd=!1,this.yearSuffix=""}get language(){return this._language}set language(e){if("string"!=typeof e)throw new TypeError("Language must be a string");this._language=e}get months(){return this._months}set months(e){if(12!==e.length)throw new RangeError(`There must be 12 months for ${this.language} language`);this._months=e}get monthsAbbr(){return this._monthsAbbr}set monthsAbbr(e){if(12!==e.length)throw new RangeError(`There must be 12 abbreviated months for ${this.language} language`);this._monthsAbbr=e}get days(){return this._days}set days(e){if(7!==e.length)throw new RangeError(`There must be 7 days for ${this.language} language`);this._days=e}}var r=new a("Afrikaans",["Januarie","Februarie","Maart","April","Mei","Junie","Julie","Augustus","September","Oktober","November","Desember"],["Jan","Feb","Mrt","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Des"],["So.","Ma.","Di.","Wo.","Do.","Vr.","Sa."]);const i=new a("Arabic",["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوڤمبر","ديسمبر"],["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوڤمبر","ديسمبر"],["أحد","إثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"]);i.rtl=!0;var s=i,u=new a("Bulgarian",["Януари","Февруари","Март","Април","Май","Юни","Юли","Август","Септември","Октомври","Ноември","Декември"],["Ян","Фев","Мар","Апр","Май","Юни","Юли","Авг","Сеп","Окт","Ное","Дек"],["Нд","Пн","Вт","Ср","Чт","Пт","Сб"]),o=new a("Bosnian",["Januar","Februar","Mart","April","Maj","Juni","Juli","Avgust","Septembar","Oktobar","Novembar","Decembar"],["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Avg","Sep","Okt","Nov","Dec"],["Ned","Pon","Uto","Sri","Čet","Pet","Sub"]),l=new a("Catalan",["Gener","Febrer","Març","Abril","Maig","Juny","Juliol","Agost","Setembre","Octubre","Novembre","Desembre"],["Gen","Feb","Mar","Abr","Mai","Jun","Jul","Ago","Set","Oct","Nov","Des"],["Diu","Dil","Dmr","Dmc","Dij","Div","Dis"]),c=new a("Czech",["leden","únor","březen","duben","květen","červen","červenec","srpen","září","říjen","listopad","prosinec"],["led","úno","bře","dub","kvě","čer","čec","srp","zář","říj","lis","pro"],["ne","po","út","st","čt","pá","so"]),p=new a("Danish",["Januar","Februar","Marts","April","Maj","Juni","Juli","August","September","Oktober","November","December"],["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],["Sø","Ma","Ti","On","To","Fr","Lø"]),m=new a("German",["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."]),d=new a("Estonian",["Jaanuar","Veebruar","Märts","Aprill","Mai","Juuni","Juuli","August","September","Oktoober","November","Detsember"],["Jaan","Veebr","Märts","Apr","Mai","Juuni","Juuli","Aug","Sept","Okt","Nov","Dets"],["P","E","T","K","N","R","L"]),v=new a("Greek",["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάϊος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος"],["Ιαν","Φεβ","Μαρ","Απρ","Μαι","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ"],["Κυρ","Δευ","Τρι","Τετ","Πεμ","Παρ","Σαβ"]),g=new a("English",["January","February","March","April","May","June","July","August","September","October","November","December"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]),b=new a("Spanish",["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"]),h=new a("Persian",["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],["فرو","ارد","خرد","تیر","مرد","شهر","مهر","آبا","آذر","دی","بهم","اسف"],["یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"]),k=new a("Finnish",["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kesäkuu","heinäkuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"],["tammi","helmi","maalis","huhti","touko","kesä","heinä","elo","syys","loka","marras","joulu"],["su","ma","ti","ke","to","pe","la"]),M=new a("Faroese",["Januar","Februar","Mars","Apríl","Mai","Juni","Juli","August","Septembur","Oktobur","Novembur","Desembur"],["Jan","Feb","Mar","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Des"],["Sun","Mán","Týs","Mik","Hós","Frí","Ley"]),f=new a("French",["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],["Jan","Fév","Mar","Avr","Mai","Juin","Juil","Août","Sep","Oct","Nov","Déc"],["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"]),y=new a("Georgia",["იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი","ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერი","დეკემბერი"],["იან","თებ","მარ","აპრ","მაი","ივნ","ივლ","აგვ","სექ","ოქტ","ნოე","დეკ"],["კვი","ორშ","სამ","ოთხ","ხუთ","პარ","შაბ"]),D=new a("Galician",["Xaneiro","Febreiro","Marzo","Abril","Maio","Xuño","Xullo","Agosto","Setembro","Outubro","Novembro","Decembro"],["Xan","Feb","Mar","Abr","Mai","Xuñ","Xul","Ago","Set","Out","Nov","Dec"],["Dom","Lun","Mar","Mér","Xov","Ven","Sáb"]);const w=new a("Hebrew",["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"],["ינו","פבר","מרץ","אפר","מאי","יונ","יול","אוג","ספט","אוק","נוב","דצמ"],["א","ב","ג","ד","ה","ו","ש"]);w.rtl=!0;var _=w,J=new a("Croatian",["Siječanj","Veljača","Ožujak","Travanj","Svibanj","Lipanj","Srpanj","Kolovoz","Rujan","Listopad","Studeni","Prosinac"],["Sij","Velj","Ožu","Tra","Svi","Lip","Srp","Kol","Ruj","Lis","Stu","Pro"],["Ned","Pon","Uto","Sri","Čet","Pet","Sub"]),S=new a("Hungarian",["Január","Február","Március","Április","Május","Június","Július","Augusztus","Szeptember","Október","November","December"],["Jan","Febr","Márc","Ápr","Máj","Jún","Júl","Aug","Szept","Okt","Nov","Dec"],["Vas","Hét","Ke","Sze","Csü","Pén","Szo"]),A=new a("Indonesian",["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],["Min","Sen","Sel","Rab","Kam","Jum","Sab"]),x=new a("Icelandic",["Janúar","Febrúar","Mars","Apríl","Maí","Júní","Júlí","Ágúst","September","Október","Nóvember","Desember"],["Jan","Feb","Mars","Apr","Maí","Jún","Júl","Ágú","Sep","Okt","Nóv","Des"],["Sun","Mán","Þri","Mið","Fim","Fös","Lau"]),O=new a("Italian",["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],["Dom","Lun","Mar","Mer","Gio","Ven","Sab"]);const j=new a("Japanese",["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],["日","月","火","水","木","金","土"]);j.yearSuffix="年",j.ymd=!0;var C=j,F=new a("Kazakh",["Қаңтар","Ақпан","Наурыз","Сәуір","Мамыр","Маусым","Шілде","Тамыз","Қыркүйек","Қазан","Қараша","Желтоқсан"],["Қаң","Ақп","Нау","Сәу","Мам","Мау","Шіл","Там","Қыр","Қаз","Қар","Жел"],["Жк","Дй","Сй","Ср","Бй","Жм","Сн"]);const T=new a("Korean",["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],["일","월","화","수","목","금","토"]);T.yearSuffix="년",T.ymd=!0;var N=T,z=new a("Luxembourgish",["Januar","Februar","Mäerz","Abrëll","Mee","Juni","Juli","August","September","Oktober","November","Dezember"],["Jan","Feb","Mäe","Abr","Mee","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],["So.","Mé.","Dë.","Më.","Do.","Fr.","Sa."]);const V=new a("Lithuanian",["Sausis","Vasaris","Kovas","Balandis","Gegužė","Birželis","Liepa","Rugpjūtis","Rugsėjis","Spalis","Lapkritis","Gruodis"],["Sau","Vas","Kov","Bal","Geg","Bir","Lie","Rugp","Rugs","Spa","Lap","Gru"],["Sek","Pir","Ant","Tre","Ket","Pen","Šeš"]);V.ymd=!0;var P=V,L=new a("Latvian",["Janvāris","Februāris","Marts","Aprīlis","Maijs","Jūnijs","Jūlijs","Augusts","Septembris","Oktobris","Novembris","Decembris"],["Jan","Feb","Mar","Apr","Mai","Jūn","Jūl","Aug","Sep","Okt","Nov","Dec"],["Sv","Pr","Ot","Tr","Ce","Pk","Se"]),E=new a("Macedonian",["Јануари","Февруари","Март","Април","Мај","Јуни","Јули","Август","Септември","Октомври","Ноември","Декември"],["Јан","Фев","Мар","Апр","Мај","Јун","Јул","Авг","Сеп","Окт","Ное","Дек"],["Нед","Пон","Вто","Сре","Чет","Пет","Саб"]);const R=new a("Mongolia",["1 дүгээр сар","2 дугаар сар","3 дугаар сар","4 дүгээр сар","5 дугаар сар","6 дугаар сар","7 дугаар сар","8 дугаар сар","9 дүгээр сар","10 дугаар сар","11 дүгээр сар","12 дугаар сар"],["1-р сар","2-р сар","3-р сар","4-р сар","5-р сар","6-р сар","7-р сар","8-р сар","9-р сар","10-р сар","11-р сар","12-р сар"],["Ня","Да","Мя","Лх","Пү","Ба","Бя"]);R.ymd=!0;var $=R,G=new a("Norwegian Bokmål",["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],["Jan","Feb","Mar","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Des"],["Sø","Ma","Ti","On","To","Fr","Lø"]),K=new a("Dutch",["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],["jan","feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec"],["zo","ma","di","wo","do","vr","za"]),H=new a("Polish",["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"],["Sty","Lut","Mar","Kwi","Maj","Cze","Lip","Sie","Wrz","Paź","Lis","Gru"],["Nd","Pn","Wt","Śr","Czw","Pt","Sob"]),I=new a("Brazilian",["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],["Dom","Seg","Ter","Qua","Qui","Sex","Sab"]),B=new a("Romanian",["Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"],["Ian","Feb","Mar","Apr","Mai","Iun","Iul","Aug","Sep","Oct","Noi","Dec"],["D","L","Ma","Mi","J","V","S"]),Y=new a("Russian",["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],["Янв","Февр","Март","Апр","Май","Июнь","Июль","Авг","Сент","Окт","Нояб","Дек"],["Вс","Пн","Вт","Ср","Чт","Пт","Сб"]),X=new a("Slovakian",["január","február","marec","apríl","máj","jún","júl","august","september","október","november","december"],["jan","feb","mar","apr","máj","jún","júl","aug","sep","okt","nov","dec"],["ne","po","ut","st","št","pi","so"]),U=new a("Sloveian",["Januar","Februar","Marec","April","Maj","Junij","Julij","Avgust","September","Oktober","November","December"],["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Avg","Sep","Okt","Nov","Dec"],["Ned","Pon","Tor","Sre","Čet","Pet","Sob"]),W=new a("Serbian in Cyrillic script",["Јануар","Фебруар","Март","Април","Мај","Јун","Јул","Август","Септембар","Октобар","Новембар","Децембар"],["Јан","Феб","Мар","Апр","Мај","Јун","Јул","Авг","Сеп","Окт","Нов","Дец"],["Нед","Пон","Уто","Сре","Чет","Пет","Суб"]),Q=new a("Serbian",["Januar","Februar","Mart","April","Maj","Jun","Jul","Avgust","Septembar","Oktobar","Novembar","Decembar"],["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Avg","Sep","Okt","Nov","Dec"],["Ned","Pon","Uto","Sre","Čet","Pet","Sub"]),q=new a("Swedish",["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],["Sön","Mån","Tis","Ons","Tor","Fre","Lör"]),Z=new a("Thai",["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."],["อา","จ","อ","พ","พฤ","ศ","ส"]),ee=new a("Turkish",["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],["Paz","Pzt","Sal","Çar","Per","Cum","Cmt"]),te=new a("Ukraine",["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],["Січ","Лют","Бер","Квіт","Трав","Чер","Лип","Серп","Вер","Жовт","Лист","Груд"],["Нд","Пн","Вт","Ср","Чт","Пт","Сб"]);const ne=new a("Urdu",["جنوری","فروری","مارچ","اپریل","مئی","جون","جولائی","اگست","سپتمبر","اکتوبر","نومبر","دسمبر"],["جنوری","فروری","مارچ","اپریل","مئی","جون","جولائی","اگست","سپتمبر","اکتوبر","نومبر","دسمبر"],["اتوار","پیر","منگل","بدھ","جمعرات","جمعہ","ہفتہ"]);ne.rtl=!0;var ae=ne,re=new a("Vietnamese",["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"],["T 01","T 02","T 03","T 04","T 05","T 06","T 07","T 08","T 09","T 10","T 11","T 12"],["CN","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7"]);const ie=new a("Chinese",["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],["日","一","二","三","四","五","六"]);ie.yearSuffix="年";var se=ie;const ue=new a("Chinese_HK",["壹月","贰月","叁月","肆月","伍月","陆月","柒月","捌月","玖月","拾月","拾壹月","拾贰月"],["壹月","贰月","叁月","肆月","伍月","陆月","柒月","捌月","玖月","拾月","拾壹月","拾贰月"],["日","壹","贰","叁","肆","伍","陆"]);ue.yearSuffix="年";var oe=ue},veg7:function(e,t,n){"use strict";n.r(t);var a=n("+jP+"),r={data:function(){return{date:null}},components:{Datepicker:a.a}},i=n("KHd+"),s=Object(i.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vx-card",{attrs:{title:"Default","code-toggler":""}},[n("p",[e._v("Rendering default DatePicker with "),n("code",[e._v("v-model")])]),e._v(" "),n("div",{staticClass:"mt-5"},[n("datepicker",{attrs:{placeholder:"Select Date"},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),e._v(" "),n("p",{staticClass:"mt-4"},[e._v("Selected Date: "+e._s(e.date))])],1),e._v(" "),n("template",{slot:"codeContainer"},[e._v('\n<template>\n  <datepicker placeholder="Select Date" v-model="date"></datepicker>\n</template>\n\n<script>\nimport Datepicker from \'vuejs-datepicker\';\n\nexport default {\n  data() {\n    return {\n      date: null,\n    }\n  },\n  components: {\n    Datepicker\n  }\n}\n<\/script>\n        ')])],2)}),[],!1,null,null,null).exports,u={data:function(){return{format:"d MMMM yyyy",formatOptions:[{text:"d MMM yyyy - e.g 12 Feb 2016",value:"d MMM yyyy"},{text:"d MMMM yyyy - e.g 12 February 2016",value:"d MMMM yyyy"},{text:"yyyy-MM-dd - e.g 2016-02-12",value:"yyyy-MM-dd"},{text:"dsu MMM yyyy - e.g 12th Feb 2016",value:"dsu MMM yyyy"},{text:"D dsu MMM yyyy - e.g Sat 12th Feb 2016",value:"D dsu MMM yyyy"}]}},components:{Datepicker:a.a}},o=Object(i.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vx-card",{attrs:{title:"Format Datepicker","code-toggler":""}},[n("p",[e._v("Change datepicker format with "),n("code",[e._v("format")])]),e._v(" "),n("div",{staticClass:"mt-5"},[n("datepicker",{attrs:{format:e.format}}),e._v(" "),n("vs-select",{staticClass:"mt-4 w-full",model:{value:e.format,callback:function(t){e.format=t},expression:"format"}},e._l(e.formatOptions,(function(e,t){return n("vs-select-item",{key:t,attrs:{value:e.value,text:e.text}})})),1)],1),e._v(" "),n("template",{slot:"codeContainer"},[e._v('\n<template>\n  <datepicker :format="format"></datepicker>\n  <vs-select v-model="format" class="mt-4 w-full">\n    <vs-select-item :key="index" :value="option.value" :text="option.text" v-for="(option,index) in formatOptions" />\n  </vs-select>\n</template>\n\n<script>\nimport Datepicker from \'vuejs-datepicker\';\n\nexport default {\n  data() {\n    return {\n      format: "d MMMM yyyy",\n      formatOptions:[\n        {text: "d MMM yyyy - e.g 12 Feb 2016" , value: "d MMM yyyy" },\n        {text: "d MMMM yyyy - e.g 12 February 2016", value: "d MMMM yyyy" },\n        {text: "yyyy-MM-dd - e.g 2016-02-12", value: "yyyy-MM-dd" },\n        {text: "dsu MMM yyyy - e.g 12th Feb 2016", value: "dsu MMM yyyy" },\n        {text: "D dsu MMM yyyy - e.g Sat 12th Feb 2016", value: "D dsu MMM yyyy" },\n      ],\n    }\n  },\n  components: {\n    Datepicker\n  }\n}\n<\/script>\n        ')])],2)}),[],!1,null,null,null).exports,l={data:function(){return{disabledDates:{to:new Date((new Date).getFullYear(),(new Date).getMonth()-2,5),from:new Date((new Date).getFullYear(),(new Date).getMonth()+2,26),daysOfMonth:[8,11,17]}}},components:{Datepicker:a.a}},c=Object(i.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("vx-card",{attrs:{title:"Min-Max Date Range","code-toggler":""}},[t("p",[this._v("You can add min max date range to disable dates in number of ways: "),t("a",{attrs:{href:"https://github.com/charliekassel/vuejs-datepicker#disabled-dates",target:"_blank",rel:"nofollow"}},[this._v("docs")])]),this._v(" "),t("div",{staticClass:"mt-5"},[t("datepicker",{attrs:{disabledDates:this.disabledDates}})],1),this._v(" "),t("template",{slot:"codeContainer"},[this._v("\n<template>\n  <datepicker :disabledDates=\"disabledDates\"></datepicker>\n</template>\n\n<script>\nimport Datepicker from 'vuejs-datepicker';\n\nexport default {\n  data() {\n    return {\n      disabledDates: {\n        to: new Date(new Date().getFullYear(), new Date().getMonth()-2, 5), // Disable all dates up to specific date\n        from: new Date(new Date().getFullYear(), new Date().getMonth()+2, 26), // Disable all dates after specific date\n        daysOfMonth: [8, 11, 17], // Disable Specific days\n      }\n    }\n  },\n  components: {\n    Datepicker\n  }\n}\n<\/script>\n        ")])],2)}),[],!1,null,null,null).exports,p={data:function(){return{highlightedFn:{customPredictor:function(e){if(e.getDate()%4==0)return!0}}}},components:{Datepicker:a.a}},m=Object(i.a)(p,(function(){var e=this.$createElement,t=this._self._c||e;return t("vx-card",{attrs:{title:"Highlight Dates","code-toggler":""}},[t("p",[this._v("Highlight dates in datepicker using function with "),t("code",[this._v("highlighted")]),this._v(" prop")]),this._v(" "),t("div",{staticClass:"mt-5"},[t("datepicker",{attrs:{highlighted:this.highlightedFn}})],1),this._v(" "),t("template",{slot:"codeContainer"},[this._v("\n<template>\n  <datepicker :highlighted=\"highlightedFn\"></datepicker>\n</template>\n\n<script>\nimport Datepicker from 'vuejs-datepicker';\n\nexport default {\n  data() {\n    return {\n      highlightedFn: {\n        customPredictor(date) {\n          if (date.getDate() % 4 === 0) {\n            return true;\n          }\n        }\n      },\n    }\n  },\n  components: {\n    Datepicker\n  }\n}\n<\/script>\n        ")])],2)}),[],!1,null,null,null).exports,d={components:{Datepicker:a.a}},v=Object(i.a)(d,(function(){var e=this.$createElement,t=this._self._c||e;return t("vx-card",{attrs:{title:"Inline","code-toggler":""}},[t("p",[this._v("Create inline datepicker using "),t("code",[this._v("inline")]),this._v(" prop")]),this._v(" "),t("div",{staticClass:"mt-5"},[t("datepicker",{attrs:{inline:!0}})],1),this._v(" "),t("template",{slot:"codeContainer"},[this._v("\n<template>\n  <datepicker :inline=\"true\"></datepicker>\n</template>\n\n<script>\nimport Datepicker from 'vuejs-datepicker';\n\nexport default {\n  components: {\n    Datepicker\n  }\n}\n<\/script>\n        ")])],2)}),[],!1,null,null,null).exports,g={components:{Datepicker:a.a}},b=Object(i.a)(g,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vx-card",{attrs:{title:"Open Programatically","code-toggler":""}},[n("p",[e._v("Open datepicker programatically using "),n("strong",[e._v("ref")]),e._v(" and "),n("strong",[e._v("click-event")])]),e._v(" "),n("div",{staticClass:"mt-5"},[n("vs-button",{staticClass:"mb-4",on:{click:function(t){return e.$refs.programaticOpen.showCalendar()}}},[e._v("Open Picker")]),e._v(" "),n("datepicker",{ref:"programaticOpen"})],1),e._v(" "),n("template",{slot:"codeContainer"},[e._v('\n<template>\n  <vs-button class="mb-4" @click="$refs.programaticOpen.showCalendar()">Open Picker</vs-button>\n  <datepicker ref="programaticOpen"></datepicker>\n</template>\n\n<script>\nimport Datepicker from \'vuejs-datepicker\';\n\nexport default {\n  components: {\n    Datepicker\n  }\n}\n<\/script>\n        ')])],2)}),[],!1,null,null,null).exports,h=n("7pui"),k={data:function(){return{language:"en",languages:h}},components:{Datepicker:a.a}},M=Object(i.a)(k,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vx-card",{attrs:{title:"Translation","code-toggler":""}},[n("p",[e._v("Date picker language: "+e._s(e.languages[e.language].language))]),e._v(" "),n("div",{staticClass:"mt-5"},[n("vs-select",{staticClass:"mb-4 w-1/3",model:{value:e.language,callback:function(t){e.language=t},expression:"language"}},e._l(e.languages,(function(e,t){return n("vs-select-item",{key:t,attrs:{value:t,text:e.language}})})),1),e._v(" "),n("datepicker",{attrs:{language:e.languages[e.language],format:"d MMMM yyyy"}})],1),e._v(" "),n("template",{slot:"codeContainer"},[e._v('\n<template>\n  <vs-select v-model="language" class="mb-4 w-1/3">\n    <vs-select-item :key="key" :value="key" :text="language.language" v-for="(language, key) in languages" />\n  </vs-select>\n  <datepicker :language="languages[language]" format="d MMMM yyyy"></datepicker>\n</template>\n\n<script>\nimport Datepicker from \'vuejs-datepicker\';\nimport * as lang from \'vuejs-datepicker/src/locale\';\n\nexport default {\n  data() {\n    return {\n      language: "en",\n      languages: lang,\n    }\n  },\n  components: {\n    Datepicker\n  }\n}\n<\/script>\n        ')])],2)}),[],!1,null,null,null).exports,f={data:function(){return{languages:h}},components:{Datepicker:a.a}},y=Object(i.a)(f,(function(){var e=this.$createElement,t=this._self._c||e;return t("vx-card",{attrs:{title:"RTL Datepicker","code-toggler":""}},[t("p",[this._v("Rendering RTL DatePicker using "),t("code",[this._v("language")]),this._v(" prop")]),this._v(" "),t("div",{staticClass:"mt-5"},[t("datepicker",{attrs:{language:this.languages.he}})],1),this._v(" "),t("template",{slot:"codeContainer"},[this._v('\n<template>\n  <datepicker :language="languages.he"></datepicker>\n</template>\n\n<script>\nimport Datepicker from \'vuejs-datepicker\';\nimport * as lang from "vuejs-datepicker/src/locale";\n\nexport default {\n  data() {\n    return {\n      languages: lang,\n    }\n  },\n  components: {\n    Datepicker\n  }\n}\n<\/script>\n        ')])],2)}),[],!1,null,null,null).exports,D={components:{Datepicker:a.a}},w=Object(i.a)(D,(function(){var e=this.$createElement,t=this._self._c||e;return t("vx-card",{attrs:{title:"Day View Only","code-toggler":""}},[t("p",[this._v("Rendering default DatePicker with Day view only")]),this._v(" "),t("div",{staticClass:"mt-5"},[t("datepicker",{attrs:{minimumView:"day",maximumView:"day"}})],1),this._v(" "),t("template",{slot:"codeContainer"},[this._v("\n<template>\n  <datepicker :minimumView=\"'day'\" :maximumView=\"'day'\"></datepicker>\n</template>\n\n<script>\nimport Datepicker from 'vuejs-datepicker';\n\nexport default {\n  components: {\n    Datepicker\n  }\n}\n<\/script>\n        ")])],2)}),[],!1,null,null,null).exports,_={components:{Datepicker:a.a}},J=Object(i.a)(_,(function(){var e=this.$createElement,t=this._self._c||e;return t("vx-card",{attrs:{title:"Month View Only","code-toggler":""}},[t("p",[this._v("Rendering default DatePicker with Month view only")]),this._v(" "),t("div",{staticClass:"mt-5"},[t("datepicker",{attrs:{minimumView:"month",maximumView:"month"}})],1),this._v(" "),t("template",{slot:"codeContainer"},[this._v("\n<template>\n  <datepicker :minimumView=\"'month'\" :maximumView=\"'month'\"></datepicker>\n</template>\n\n<script>\nimport Datepicker from 'vuejs-datepicker';\n\nexport default {\n  components: {\n    Datepicker\n  }\n}\n<\/script>\n        ")])],2)}),[],!1,null,null,null).exports,S={components:{Datepicker:a.a}},A=Object(i.a)(S,(function(){var e=this.$createElement,t=this._self._c||e;return t("vx-card",{attrs:{title:"Date and Month View Only","code-toggler":""}},[t("p",[this._v("Rendering default DatePicker with date and month view only")]),this._v(" "),t("div",{staticClass:"mt-5"},[t("datepicker",{attrs:{minimumView:"day",maximumView:"month"}})],1),this._v(" "),t("template",{slot:"codeContainer"},[this._v("\n<template>\n  <datepicker :minimumView=\"'day'\" :maximumView=\"'month'\"></datepicker>\n</template>\n\n<script>\nimport Datepicker from 'vuejs-datepicker';\n\nexport default {\n  components: {\n    Datepicker\n  }\n}\n<\/script>\n        ")])],2)}),[],!1,null,null,null).exports,x={components:{Datepicker:a.a}},O={components:{DatepickerDefault:s,DatepickerFormat:o,DatepickerMinMaxDateRange:c,DatepickerHighlightDates:m,DatepickerInline:v,DatepickerOpenProgramatically:b,DatepickerTranslation:M,DatepickerRtl:y,DatepickerDayViewOnly:w,DatepickerMonthViewOnly:J,DatepickerDateMonthViewOnly:A,DatepickerMonthYearViewOnly:Object(i.a)(x,(function(){var e=this.$createElement,t=this._self._c||e;return t("vx-card",{attrs:{title:"Month and Year View Only","code-toggler":""}},[t("p",[this._v("Rendering default DatePicker with month and year view only")]),this._v(" "),t("div",{staticClass:"mt-5"},[t("datepicker",{attrs:{minimumView:"month",maximumView:"year"}})],1),this._v(" "),t("template",{slot:"codeContainer"},[this._v("\n<template>\n  <datepicker :minimumView=\"'month'\" :maximumView=\"'year'\"></datepicker>\n</template>\n\n<script>\nimport Datepicker from 'vuejs-datepicker';\n\nexport default {\n  components: {\n    Datepicker\n  }\n}\n<\/script>\n        ")])],2)}),[],!1,null,null,null).exports}},j=Object(i.a)(O,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"extra-component-datepicker-demo"}},[e._m(0),e._v(" "),n("div",{staticClass:"vx-row match-height"},[n("div",{staticClass:"vx-col md:w-1/2 w-full"},[n("datepicker-default",{staticClass:"mb-base"})],1),e._v(" "),n("div",{staticClass:"vx-col md:w-1/2 w-full"},[n("datepicker-format",{staticClass:"mb-base"})],1)]),e._v(" "),n("div",{staticClass:"vx-row match-height"},[n("div",{staticClass:"vx-col md:w-1/2 w-full"},[n("datepicker-min-max-date-range",{staticClass:"mb-base"})],1),e._v(" "),n("div",{staticClass:"vx-col md:w-1/2 w-full"},[n("datepicker-highlight-dates",{staticClass:"mb-base"})],1)]),e._v(" "),n("div",{staticClass:"vx-row match-height"},[n("div",{staticClass:"vx-col md:w-1/2 w-full"},[n("datepicker-inline",{staticClass:"mb-base"})],1),e._v(" "),n("div",{staticClass:"vx-col md:w-1/2 w-full"},[n("datepicker-open-programatically",{staticClass:"mb-base"})],1)]),e._v(" "),n("div",{staticClass:"vx-row match-height"},[n("div",{staticClass:"vx-col md:w-1/2 w-full"},[n("datepicker-translation",{staticClass:"mb-base"})],1),e._v(" "),n("div",{staticClass:"vx-col md:w-1/2 w-full"},[n("datepicker-rtl",{staticClass:"mb-base"})],1)]),e._v(" "),n("div",{staticClass:"vx-row match-height"},[n("div",{staticClass:"vx-col md:w-1/2 w-full"},[n("datepicker-day-view-only",{staticClass:"mb-base"})],1),e._v(" "),n("div",{staticClass:"vx-col md:w-1/2 w-full"},[n("datepicker-month-view-only",{staticClass:"mb-base"})],1)]),e._v(" "),n("div",{staticClass:"vx-row match-height"},[n("div",{staticClass:"vx-col md:w-1/2 w-full"},[n("datepicker-date-month-view-only")],1),e._v(" "),n("div",{staticClass:"vx-col md:w-1/2 w-full"},[n("datepicker-month-year-view-only")],1)])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"mb-4"},[this._v("A simple Vue.js datepicker component. Supports disabling of dates, inline mode, translations. Read full documnetation "),t("a",{attrs:{href:"https://github.com/charliekassel/vuejs-datepicker",target:"_blank",rel:"nofollow"}},[this._v("here")])])}],!1,null,null,null);t.default=j.exports}}]);