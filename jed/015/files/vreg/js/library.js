/*

Format :

	Array( 'Name of Expression/Pattern' , 'Reg Pattern' , 'Description' , 'Demo Text' )
	
	Array( 'Match Word' , '\\w+' , "Matches any word character including underscore. Equivalent to '[A-Za-z0-9_]'. It's like splitting string in to words." , null )
	Array( 'Match Word' , '\\w+' , "Matches any word character including underscore. Equivalent to '[A-Za-z0-9_]'. It's like splitting string in to words." , "This is a test string" )
	Array( 'Match Word' , '\\w+' , null , null )

Notes :
	- Don't forget, use double \ for \ ( \w has to be \\w )
	- Use null if you don't have 'Description' or 'Description'

*/

vReg.library = Array(
	Array(
		'Match *' // Name
		,"zo*" // Pattern
		,vReg.getText( 'PATTERN_MATCH_STAR' ) // Description
		,'z\nzombie\nzoo' // Demo Text
	)
	,
	Array(
		'Match +' // Name
		,"zo+" // Pattern
		,vReg.getText( 'PATTERN_MATCH_PLUS' ) // Description
		,'z\nzombie\nzoo' // Demo Text
	)
	,
	Array(
		'Match Word' // Name
		,"\\w+" // Pattern
		,vReg.getText( 'PATTERN_MATCH_WORD' ) // Description
		,vReg.getText( 'FIXED_PARAGRAPH' ) // Demo Text
	)
	,
	Array(
		'Match Non-Word' // Name
		,"\\W+" // Pattern
		,vReg.getText( 'PATTERN_MATCH_NONWORD' ) // Description
		,vReg.getText( 'FIXED_PARAGRAPH' ) // Demo Text
	)
	,
	Array(
		'Match Number/Digit' // Name
		,"\\d+" // Pattern
		,vReg.getText( 'PATTERN_MATCH_NUMBER' ) // Description
		,vReg.getText( 'FIXED_PARAGRAPH' ) // Demo Text
	)
	,
	Array(
		'Match Non-Number/Non-Digit' // Name
		,"\\D+" // Pattern
		,vReg.getText( 'PATTERN_MATCH_NONNUMBER' ) // Description
		,vReg.getText( 'FIXED_PARAGRAPH' ) // Demo Text
	)
	,
	Array(
		'Match Whitespace' // Name
		,"\\s+" // Pattern
		,vReg.getText( 'PATTERN_MATCH_WS' ) // Description
		,vReg.getText( 'FIXED_PARAGRAPH' ) // Demo Text
	)
	,
	Array(
		'Match Non-Whitespace' // Name
		,"\\S+" // Pattern
		,vReg.getText( 'PATTERN_MATCH_NONWS' ) // Description
		,vReg.getText( 'FIXED_PARAGRAPH' ) // Demo Text
	)
	,
	Array(
		'Match N-Digit' // Name
		,"\\d{2}" // Pattern
		,vReg.getText( 'PATTERN_MATCH_NTIMES' ) // Description
		,vReg.getText( 'FIXED_PARAGRAPH' ) // Demo Text
	)
	,
	Array(
		'Match Min-Max-Digit' // Name
		,"\\d{2,3}" // Pattern
		,vReg.getText( 'PATTERN_MATCH_MINMAX' ) // Description
		,vReg.getText( 'FIXED_PARAGRAPH' ) // Demo Text
	)
	,
	Array(
		'Validate E-Mail' // Name
		,"[\\w\\-\\.]+\\@[\\w\\-]+\\.[\\w\\.]+" // Pattern
		,vReg.getText( 'PATTERN_VALID_EMAIL' ) // Description
		,vReg.getText( 'FIXED_TEXT_EMAIL_DEMO' ) // Demo Text
	)
	,
	Array(
		'Validate E-Mail2' // Name
		,"^(\\w[\\-\\.\\_\\w]*\\w@\\w[\\-\\.\\_\\w]*\\w\\.\\w{2,3})$" // Pattern
		,vReg.getText( 'PATTERN_VALID_EMAIL2' ) // Description
		,vReg.getText( 'FIXED_TEXT_EMAIL_DEMO' ) // Demo Text
	)
	,
	Array(
		'Validate Url' // Name
		,"^(http\\:\\/\\/)?[a-z0-9\\.\\/\\?\\=\\#]+$" // Pattern
		,vReg.getText( 'PATTERN_VALID_URL' ) // Description
		,null // Demo Text
	)
	,
	Array(
		'Word Boundary' // Name
		,"\\bString\\b" // Pattern
		,vReg.getText( 'PATTERN_WORD_BOUNDARY' ) // Description
		,"String.prototype.myFunction = function ()\n{\n\treturn this;\n}\n\nvar myString = 'Test';" // Demo Text
	)
	,
	Array(
		'Between TAG\'s' // Name
		,"\\[(\\w+)\\](\\n|\\t|\\r)?(.+)(\\n|\\t|\\r)?\\[\\/\\1\\]" // Pattern
		,vReg.getText( 'PATTERN_BETWEEN_TAGS' ) // Description
		,"[url]http://www.mydomain.com[/url]" // Demo Text
	)
	,
	Array(
		'Demo Pattern #1' // Name
		,"Windows (2000|2003)" // Pattern
		,vReg.getText( 'DEMO_PATTERN_1' ) // Description
		,vReg.getText( 'FIXED_PARAGRAPH' ) // Demo Text
	)
	,
	Array(
		'Demo Pattern #2' // Name
		,"(Windows) (2000|2003)" // Pattern
		,vReg.getText( 'DEMO_PATTERN_2' ) // Description
		,vReg.getText( 'FIXED_PARAGRAPH' ) // Demo Text
	)
	,
	Array(
		'Demo Pattern #3' // Name
		,"Windows (?:2000|2003)" // Pattern
		,vReg.getText( 'DEMO_PATTERN_3' ) // Description
		,vReg.getText( 'FIXED_PARAGRAPH' ) // Demo Text
	)
	,
	Array(
		'Demo Pattern #4' // Name
		,"Windows (?=2000|2003)" // Pattern
		,vReg.getText( 'DEMO_PATTERN_4' ) // Description
		,vReg.getText( 'FIXED_PARAGRAPH' ) // Demo Text
	)
	,
	Array(
		'Demo Pattern #5' // Name
		,"Windows (2000|2003)?" // Pattern
		,vReg.getText( 'DEMO_PATTERN_5' ) // Description
		,vReg.getText( 'FIXED_PARAGRAPH' ) // Demo Text
	)
);

