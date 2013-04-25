/*

Dictionary for locale support.
KEY : VALUE

Modifiy only VALUE for your desired locale/language.

Example for Turkish :

:
:
, "Ignore Case" : 'Büyük / Küçük harfe duyarsız'
, "Multi Line" : 'Birden fazla satır'
:
:

*/

vReg.locale = {
	 "Application Name" : 'vReg Javascript Regular Expression Tool v4.2'
	,"Application Author" : '&copy; 2008 by Uğur Özyılmazel | <a href="mailto:ugur@ozyilmazel.com">ugur@ozyilmazel.com</a> | <a target="_blank" href="http://ugur.ozyilmazel.com">http://ugur.ozyilmazel.com</a>'
	,"Reset Application" : 'Sıfırla'
	,"Pattern" : 'Patern'
	,"Input" : 'Metin'
	,"Library" : 'Kütüphane'
	,"Exec" : 'Exec'
	,"Match" : 'Match'
	,"Reg Replace" : 'Reg Replace'
	,"Global" : 'Genel (g)'
	,"Ignore Case" : 'Büyük/Küçük Harf Duyarsız (i)'
	,"Multi Line" : 'Tüm Satırlar (m)'
	,"Test" : 'Test'
	,"Help" : '?'
	,"Demo" : 'Dene'
	,"Set" : 'Seç'
	,"Select Pattern" : '----------------------------------------- Patern Seç'
	,"Build For Lib" : 'Kütüphane için'
	,"Build For Lib Title" : 'Slashleri düzenler ( \\ => \\\\ ) library.js eklemeye uygun hale getirir.'
	,"Help is not available" : 'Yardım metni bulunamadı.'
	,"Result" : 'Sonuç'
	,"Pattern can not be empty!" : 'Patern boş olamaz'
	,"Input some text!" : 'Metin girin!'
	,"Wrong Pattern!" : 'Yanlış Patern!'
	,"Found" : 'Bulunan'
	,"Demo is not available!" : 'Örnek bulunamadı.'
	,"Replace with?" : 'Ne ile değişsin? ( $1 - $9 kullanabilirsiniz )'
	,"Pattern Error" : 'Patern Hatası'
	,"FIXED_PARAGRAPH" : 'Windows 2000\nWindows 2003\nWindows 98\nWindows NT'
	,"FIXED_TEXT_EMAIL_DEMO" : 'username@domain.edu.tr\nusername@domain.com\nfirstname-lastname@domain.edu.tr\nfirstname_lastname@domain.org\nnickname.groupname@domain.net\nfirstname1972@domain.com'

	,"PATTERN_MATCH_STAR" : 'z<strong>o*<\/strong>, <strong>z<\/strong> ile başlayan, sağında <strong>0 yada N tane<\/strong> <u>o<\/u> bulunan metni yakalar. Bu bakımdan z , zo ve zoo yakalanır.'
	,"PATTERN_MATCH_PLUS" : 'z<strong>o+<\/strong>, <strong>z<\/strong>den sonra en az <strong>1 tane o<\/strong> olmak zorundadır. Bu bakımdan zo ve zoo yakalanır.'
	,"PATTERN_MATCH_WORD" : 'Underscore ( _ ) dahil olmak üzere kelime yakalar. Başka bir değişle <strong>[A-Za-z0-9_]<\/strong> ile aynıdır. ( Büyük A\'dan Büyük Z\'ye , Küçük a\'dan küçük z\'ye, 0\'dan 9\'a ve _ ) Metni kelimelere ayırır.'
	,"PATTERN_MATCH_NONWORD" : 'Kelime olmayanları yakalar. <strong>[^A-Za-z0-9_]<\/strong> ile aynıdır. ( Büyük A\'dan Büyük Z\'ye , Küçük a\'dan küçük z\'ye, 0\'dan 9\'a ve _  OLMAYANLAR!!! )'
	,"PATTERN_MATCH_NUMBER" : 'Rakam yakalar <strong>[0-9]<\/strong> ile aynıdır.'
	,"PATTERN_MATCH_NONNUMBER" : 'Rakam olmayanı yakalar. <strong>[^0-9]<\/strong> ile aynıdır.'
	,"PATTERN_MATCH_WS" : 'Whitespace dediğimiz, görünmeyen karakterleri yakalar. Bunlar space (boşluk), tab, form-feed, vs.vs. <strong>[ \\f\\n\\r\\t\\v]<\/strong> ile aynıdır.'
	,"PATTERN_MATCH_NONWS" : 'Whitespace olmayan karakterleri yakalar. <strong>[^ \\f\\n\\r\\t\\v]<\/strong> ile aynıdır.'
	,"PATTERN_MATCH_NTIMES" : '{<strong>N<\/strong>} defa tekrar. <strong>\\d{2}<\/strong>, Windows 2000 deki <u>20<\/u> ve <u>00<\/u>,<br\/>Windows 2003 deki <u>20<\/u> ve <u>03<\/u> ve Windows 98 deki <u>98<\/u> i yakalar. Yani aslında \\d\\d gibidir.'
	,"PATTERN_MATCH_MINMAX" : '<strong>\\d{2,3}<\/strong>, en az 2 tane \\d, en fazla da 3 tane \\d. Windows 2000 deki <u>200<\/u>,<br\/>Windows 2003 deki <u>200<\/u> ve Windows 98 deki <u>98<\/u>'
	,"PATTERN_VALID_EMAIL" : 'E-Posta formatına bakar. <strong>USERNAME@DOMAIN.EXTENSION<\/strong>. USERNAME şu karakterleri içerebilir : standart karakterler ( <strong>[A-Za-z0-9_]<\/strong> ) , <u>- ( dash )<\/u> , <u>_ ( underscore )<\/u> , <u>. ( dot )<\/u><br\/>DOMAIN : standart karakterler ( <strong>[A-Za-z0-9_]<\/strong> ) ve <u>- ( dash )<\/u><br\/>EXTENSION : standart karakterler ( <strong>[A-Za-z0-9_]<\/strong> ) ve <u>. ( dot )<\/u>'
	,"PATTERN_VALID_EMAIL2" : 'E-Posta formatına bakar. Sonucu $1 e yakalar.'
	,"PATTERN_VALID_URL" : 'URL kontrol eder.'
	,"PATTERN_WORD_BOUNDARY" : 'Yanlızca verilen kelimeyi arar. <u><strong>String<\/strong>.prototype.myFunction = function()<\/u> içindeki <u>String<\/u> i yakalar. Diğer <u>var my<strong>String<\/strong><\/u> i yakalamaz!'
	,"PATTERN_BETWEEN_TAGS" : 'HTML\'deki gibi, iki TAG ( etiket ) arasını yakalar. <u>[url]YAKALANAN[\/url]<\/u><br/>Kullanımı : [<strong>ETİKET<\/strong>]METİN[\/<strong>ETİKET<\/strong>]<br\/>$1 : Etiket adı , $3 : Etiket içi/arası'
	,"DEMO_PATTERN_1" : 'Yakalar : <u>Windows 2000<\/u> yada <u>Windows 2003<\/u>'
	,"DEMO_PATTERN_2" : 'Yakalar : <u>Windows 2000<\/u> yada <u>Windows 2003<\/u> ve geriye <strong>Windows<\/strong> yada <strong>2000<\/strong> yada <strong>2003<\/strong> döner.'
	,"DEMO_PATTERN_3" : '<strong>Windows 2000<\/strong> deki ve <strong>Windows 2003<\/strong> deki <u>Windows<\/u> u yakalar ve geri <u>2000<\/u> yada <u>2003<\/u> döner.'
	,"DEMO_PATTERN_4" : '<u>Windows 2000<\/u> ve <u>Windows 2003<\/u> deki <strong>Windows<\/strong>u yakalar fakat <strong>2000<\/strong> yada <strong>2003<\/strong> geri dönmez.'
	,"DEMO_PATTERN_5" : 'Sağında <strong>2000<\/strong> yada <strong>2003<\/strong> olsun olmasın <u>Windows<\/u> u yakalar. Eğer sağında birşey bulunamazsa geri <strong>undefined<\/strong> döner.'
}