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
	,"Reset Application" : 'Reset Application'
	,"Pattern" : 'Pattern'
	,"Input" : 'Input'
	,"Library" : 'Library'
	,"Exec" : 'Exec'
	,"Match" : 'Match'
	,"Reg Replace" : 'Reg Replace'
	,"Global" : 'Global'
	,"Ignore Case" : 'Ignore Case'
	,"Multi Line" : 'Multi Line'
	,"Test" : 'Test'
	,"Help" : 'Help'
	,"Demo" : 'Demo'
	,"Set" : 'Set'
	,"Select Pattern" : '------------------------------------- Select Pattern'
	,"Build For Lib" : 'Build For Lib'
	,"Build For Lib Title" : 'It fixed slashes ( \\ => \\\\ ) and build line for your library.js'
	,"Help is not available" : 'Help is not available'
	,"Result" : 'Result'
	,"Pattern can not be empty!" : 'Pattern can not be empty!'
	,"Input some text!" : 'Input some text!'
	,"Wrong Pattern!" : 'Wrong Pattern!'
	,"Found" : 'Found'
	,"Demo is not available!" : 'Demo is not available!'
	,"Replace with?" : 'Replace with? ( Use $1 - $9 )'
	,"Pattern Error" : 'Pattern Error'
	,"FIXED_PARAGRAPH" : 'Windows 2000\nWindows 2003\nWindows 98\nWindows NT'
	,"FIXED_TEXT_EMAIL_DEMO" : 'username@domain.edu.tr\nusername@domain.com\nfirstname-lastname@domain.edu.tr\nfirstname_lastname@domain.org\nnickname.groupname@domain.net\nfirstname1972@domain.com'
	,"PATTERN_MATCH_STAR" : 'z<strong>o*<\/strong> means, match anything start with <strong>z<\/strong> and if <strong>ZERO or N-TIMES</strong> <u>o<\/u> exists...<br\/>z -&gt; ok ( zero time o )<br\/>zombie -&gt; ok ( z and 1 time o )<br/>zoo -&gt; ok ( z and 2 times o )'
	,"PATTERN_MATCH_PLUS" : 'z<strong>o+<\/strong> means, there must be at least 1 time <strong>o<\/strong> before <strong>z<\/strong>. Therefore onlt <u>z<strong>o<\/strong>mbie<\/u> and <u>z<strong>oo<\/strong><\/u> matches.'
	,"PATTERN_MATCH_WORD" : 'Matches any <strong>word<\/strong> character including underscore. Equivalent to <strong>[A-Za-z0-9_]<\/strong>. It\'s like splitting string in to words.'
	,"PATTERN_MATCH_NUMBER" : 'Matches a digit character. Equivalent to <strong>[0-9]<\/strong>. '
	,"PATTERN_MATCH_NONWORD" : 'Matches any nonword character. Equivalent to <strong>[^A-Za-z0-9_]<\/strong>.'
	,"PATTERN_MATCH_NONNUMBER" : 'Matches a nondigit character. Equivalent to <strong>[^0-9]<\/strong>.'
	,"PATTERN_MATCH_WS" : 'Matches any whitespace character including space, tab, form-feed, etc. Equivalent to <strong>[ \f\n\r\t\v]<\/strong>.'
	,"PATTERN_MATCH_NONWS" : 'Matches any nonwhite space character. Equivalent to <strong>[^ \f\n\r\t\v]<\/strong>.'
	,"PATTERN_MATCH_NTIMES" : '{<strong>N<\/strong>} means how many digits. <strong>\\d{2}<\/strong> matches <u>20<\/u> and <u>00<\/u> in Windows 2000,<br\/><u>20<\/u> and <u>03<\/u> in Windows 2003 and <u>98<\/u> in Windows 98'
	,"PATTERN_MATCH_MINMAX" : '<strong>\\d{2,3}<\/strong> matches minimum 2 digits, maximum 3 digits. <u>200<\/u> from Windows 2000,<br\/><u>200<\/u> from Windows 2003 and <u>98<\/u> from Windows 98'
	,"PATTERN_VALID_EMAIL" : 'Validates an email. <strong>USERNAME@DOMAIN.EXTENSION<\/strong>. USERNAME can have :<br\/><u>- ( dash )<\/u> , <u>_ ( underscore )<\/u> , <u>. ( dot )<\/u> DOMAIN can have :<br\/>valid characters ( <strong>[A-Za-z0-9_]<\/strong> ) and <u>- ( dash )<\/u> EXTENSION can have : <br\/>valid characters ( <strong>[A-Za-z0-9_]<\/strong> ) and <u>. ( dot )<\/u>'
	,"PATTERN_VALID_EMAIL2" : 'Validates an email. Captures valid email through $1'
	,"PATTERN_VALID_URL" : 'Validates Url'
	,"PATTERN_WORD_BOUNDARY" : 'Matches only specific word. In this example matches only <u>String<\/u> in <br\/><u>String.prototype.myFunction = function()<\/u> not in<br\/><u>var my<strong>String<\/strong><\/u>'
	,"PATTERN_BETWEEN_TAGS" : 'Matches BBCODE style expressions. In this example, it captures <u>[url]...[\/url]<\/u><br/>Usage : [<strong>TAG<\/strong>]any text[\/<strong>TAG<\/strong>]<br\/>$1 : name of tag , $3 : text between tags'
	,"DEMO_PATTERN_1" : 'Matches : <u>Windows 2000<\/u> or <u>Windows 2003<\/u>'
	,"DEMO_PATTERN_2" : 'Matches : <u>Windows 2000<\/u> or <u>Windows 2003<\/u> and captures <strong>Windows<\/strong> and <strong>2000<\/strong> or <strong>2003<\/strong>'
	,"DEMO_PATTERN_3" : 'Matches <u>Windows<\/u> in <strong>Windows 2000<\/strong> and <strong>Windows 2003<\/strong> and captures <u>2000<\/u> or <u>2003<\/u> in to result.'
	,"DEMO_PATTERN_4" : 'Matches Windows in <u>Windows 2000<\/u> and <u>Windows 2003<\/u> but not captures <strong>2000<\/strong> or <strong>2003<\/strong> in to result.'
	,"DEMO_PATTERN_5" : 'Matches <u>Windows<\/u> even <strong>2000<\/strong> or <strong>2003<\/strong> exists on the right of it. Capture returns <strong>undefined<\/strong> if 2000 or 2003 does not exists!'
}