String.prototype.reverseString = function()
	/*  ------------------------------------------------------------------------------------------------------------------------
		Name			: reverseString();
		Prototype		: String
		Author			: Uğur Özyılmazel
		Version			: 1.0
		Modified Date	: 2008/April/03

		Syntax			: objString.reverseString();

		Related To		: ---

		Usage			: var strMyString = 'abc';
						: window.alert( strMyString.reverseString() ); // cba
	---------------------------------------------------------------------------------------------------------------------------- */
	{
		var strReverseString = '';
		for( var i = 0; i <this.length ; i++ )
		{
			strReverseString+= this.charAt( this.length - ( i + 1 ) );
		}
		return strReverseString;
	}

Number.prototype.getFloat = function()
	/*  ------------------------------------------------------------------------------------------------------------------------
		Name			: getFloat();
		Prototype		: Number
		Author			: Uğur Özyılmazel
		Version			: 1.1
		Modified Date	: 2008/April/03

		Syntax			: strString = numNumber.getFloat();

		Related To		: ---

		Usage			: var numMyNumber = 5.123;
						: window.alert( numMyNumber.getFloat() ); // 123
	---------------------------------------------------------------------------------------------------------------------------- */
	{
		var strThisNumber = this.toString();
		var numStartofPoint = strThisNumber.indexOf( '.' );
		if( numStartofPoint < 0 )
		{
			return 0;
		}
		return ( strThisNumber.substr( numStartofPoint + 1 , strThisNumber.length ) * 1 );
	}

Number.prototype.digitGroup = function( strSeperator )
	/*  ------------------------------------------------------------------------------------------------------------------------
		Name			: digitGroup();
		Prototype		: Number
		Author			: Uğur Özyılmazel
		Version			: 1.2
		Modified Date	: 2008/April/03

		Syntax			: objString = objNumber.digitGroup( [strSeperator] );
						: strSeperator = ( Optional ) Delimiter String, default = .

		Related To		: reverseString();
						: getFloat();

		Usage			: var numMyNumber = 1500;
						: var strSeperatedNumber = numMyNumber.digitGroup();
						: window.alert( strSeperatedNumber ); // 1.500
						: var strSeperatedNumber = numMyNumber.digitGroup( ',' );
						: window.alert( strSeperatedNumber ); // 1,500
	---------------------------------------------------------------------------------------------------------------------------- */
	{
		if( !strSeperator )
		{
			strSeperator = '.';
		}

		var strNumber = this.toString();

		var numOriginalNumber = new Number( strNumber );
		var intNumber = parseInt( numOriginalNumber );
		var floatNumber = numOriginalNumber.getFloat();
		
		if( floatNumber == 0 )
		{
			floatNumber = '';		
		}

		var strReverseNumber = 	intNumber.toString().reverseString();
		
		var strSeperatedNumber = '';
		var count = 0;
		for( var i = 0; i < strReverseNumber.length; i++ )
		{
			strSeperatedNumber+= strReverseNumber.charAt( i );
			count++;
			if( count % 3 == 0 && i < strReverseNumber.length - 1 )
			{
				strSeperatedNumber+= strSeperator;
			}
		}
		if( typeof( floatNumber ) != 'string' )
		{
			floatNumber = ',' + floatNumber;
		}
		return strSeperatedNumber.reverseString() + '' + floatNumber;
	}

Number.prototype.setDigits = function ( numDigitCount )
	/*  ------------------------------------------------------------------------------------------------------------------------
		Name			: setDigits();
		Prototype		: Number
		Author			: Uğur Özyılmazel
		Version			: 1.0
		Modified Date	: 2008/April/03

		Syntax			: strNumber.setDigits( numDigits );

		Usage			: var numMyNumber = 5;
						: window.alert( numMyNumber.setDigits( 3 ) ); // 005
		------------------------------------------------------------------------------------------------------------------------ */
	{
		var numNumber = this;
		var strNumber = numNumber.toString();
		if( strNumber.length >= numDigitCount )
		{
			return strNumber*1;
		}
		var strExtraDigits = '';
		for( var i = strNumber.length; i < numDigitCount; i++ )
		{
			strExtraDigits+= '0';
		}
		return strExtraDigits + strNumber;
	}

String.prototype.toCapitalise = function ( isFirstWord )
	/*  ------------------------------------------------------------------------------------------------------------------------
		Name			: toCapitalise();
		Prototype		: String
		Author			: Uğur Özyılmazel
		Version			: 1.01
		Modified Date	: 2008/April/04

		Info			: First, coverts the string to a lowercase then make capitalisation.

		Syntax			: objString.toCapitalise( [blnFirstWord] );
						: blnFirstWord = ( Optional ) Capitalises only the first letter of the first word!

		Related To		: ---

		Usage			: var strMyString = 'hello world whats up people!';
						: window.alert( strMyString.toCapitalise() ); // Hello World Whats Up People!
						: window.alert( strMyString.toCapitalise( true ) ); // Hello world whats up people!
						: 
						: var strMyString = 'HELLO VIGO';
						: window.alert( strMyString.toCapitalise() ); // Hello Vigo
						: window.alert( strMyString.toCapitalise( true ) ); // Hello vigo
	---------------------------------------------------------------------------------------------------------------------------- */
	{
		var aryWords = this.split( ' ' );
		for( var i = 0; i < aryWords.length; i++ )
		{
			aryWords[ i ] = aryWords[ i ].toLowerCase();
			var strFirstLetter = aryWords[ i ].substr( 0 , 1 );
			var strOtherPartOfWord = aryWords[ i ].substr( 1 , ( aryWords[ i ].length - 1 ) );
			if( arguments[ 0 ] )
			{
				if( i == 0 )
				{
					aryWords[ 0 ] = strFirstLetter.toUpperCase() + strOtherPartOfWord;				
				}
			}
			else
			{
				aryWords[ i ] = strFirstLetter.toUpperCase() + strOtherPartOfWord;
			}
		}
		return aryWords.join( ' ' );
	}

Array.prototype.sortUTF = function ( strOrder )
	/*  ------------------------------------------------------------------------------------------------------------------------
		Name			: sortUTF();
		Prototype		: Array
		Author			: Uğur Özyılmazel
		Version			: 1.0
		Modified Date	: 2008/April/3

		Info			: Sorts array with UTF-8 chars. ( Good for other languages rather than English )

		Syntax			: objArray.sortUTF( [blnDescending] );
						: blnDescending = ( Optional ) Descending order, default = 'asc' ( ascending )
						: ( 'asc' or 'desc' )
						: returns Array.

		Related To		: ---

		Usage			: var myArray = Array( 'vigo' , 'ali' , 'çetin' , 'ğü' , 'ömer' , 'cetin' , 'hede' );
						: myArray.sortUTF();
						: window.alert( myArray ); // ali,cetin,çetin,ğü,hede,ömer,vigo
						: myArray.sortUTF( true );
						: window.alert( myArray ); // vigo,ömer,hede,ğü,çetin,cetin,ali
	---------------------------------------------------------------------------------------------------------------------------- */
	{
		var strSortOrder = 'asc';
		if( arguments[ 0 ] )
		{
			strSortOrder = 'desc';
		}

		this.sort(
			function ( a , b )
			{
				if( strSortOrder == 'asc' )
				{
					return a.localeCompare( b );
				}
				return b.localeCompare( a );
			}	
		);
		return this;
	}

Array.prototype.sortNumeric = function ( strOrder )
	/*  ------------------------------------------------------------------------------------------------------------------------
		Name			: sortNumeric();
		Prototype		: Array
		Author			: Uğur Özyılmazel
		Version			: 1.0
		Modified Date	: 2008/April/3

		Info			: Sorts array in numeric way. ( Number sorting )

		Syntax			: objArray.sortNumeric( [blnDescending] );
						: blnDescending = ( Optional ) Descending order, default = 'asc' ( ascending )
						: ( 'asc' or 'desc' )
						: returns Array.

		Related To		: ---

		Usage			: var myArray = Array( 1 , 3 , 11 , 6 , 9 , 2 );
						: myArray.sortNumeric();
						: window.alert( myArray ); // 1,2,3,6,9,11
						: myArray.sortNumeric( true );
						: window.alert( myArray ); // 11,9,6,3,2,1
	---------------------------------------------------------------------------------------------------------------------------- */
	{
		var strSortOrder = 'asc';
		if( arguments[ 0 ] )
		{
			strSortOrder = 'desc';
		}
		
		this.sort(
			function ( a , b )
			{
				if( strSortOrder == 'asc' )
				{
					if( a > b )
					{
						return 1;
					}
					if( a < b )
					{
						return -1;
					}
					return 0;
				}
				if( a > b )
				{
					return -1;
				}
				if( a < b )
				{
					return 1;
				}
				return 0;
			}	
		);
		return this;
	}

Array.prototype.sortUTFCollection = function ( strKey , strType )
	/*  ------------------------------------------------------------------------------------------------------------------------
		Name			: sortUTFCollection();
		Prototype		: Array
		Author			: Uğur Özyılmazel
		Version			: 1.0
		Modified Date	: 2008/April/3

		Info			: Sorts array which includes Objects as array elements.

		Syntax			: objArray.sortUTFCollection( [strObjectKey] , [blnDescending] );
						: strObjectKey = Key of the Object element in Array.
						: blnDescending = ( Optional ) Descending order, default = 'asc' ( ascending )
						: ( 'asc' or 'desc' )
						: returns Array.

		Related To		: ---

		Usage			: var myArray = Array(
						:	 { 'name' : "vigo" , 'email' : "vigo@bilgi.edu.tr" }
						:	,{ 'name' : "lego" , 'email' : "lego@bilgi.edu.tr" }
						:);
						: myArray.sortUTFCollection( 'name' );
						: console.log( myArray ); // console is a fire-fox extension, which is FireBug : http://www.getfirebug.com/
						: // [Object name=lego email=lego@bilgi.edu.tr, Object name=vigo email=vigo@bilgi.edu.tr]
						: myArray.sortUTFCollection( 'name' , 'desc' );
						: // [Object name=vigo email=vigo@bilgi.edu.tr, Object name=lego email=lego@bilgi.edu.tr]
	---------------------------------------------------------------------------------------------------------------------------- */
	{
		if( !strType ){ strType = 'asc'; }
		this.sort(
			function ( a , b )
			{
				var aa = a[ strKey ];
				var bb = b[ strKey ];
				if( typeof( aa ) == 'string' )
				{
					if( strType == 'asc' )
					{
						return aa.localeCompare( bb );	
					}
					return bb.localeCompare( aa );
				}

				if( strType == 'asc' )
				{
					if( aa > bb ){ return 1; }
					if( aa < bb ){ return -1; }
					return 0;
				}
				if( aa > bb ){ return -1; }
				if( aa < bb ){ return 1; }
				return 0;


			}	
		);
		return this;
	}

Array.prototype.removeElement = function ( numArrayIndex )
	/*  ------------------------------------------------------------------------------------------------------------------------
		Name			: removeElement();
		Prototype		: Array
		Author			: Uğur Özyılmazel
		Version			: 1.0
		Modified Date	: 2008/April/3

		Info			: Removes element from Array within the Array Index!

		Syntax			: objArray.removeElement( [numIndex] );
						: numIndex = Index of the desired element in array.

		Related To		: ---

		Usage			: var myArray = Array( 'amiga' , 'atari' , 'commodore' );
						: myArray = myArray.removeElement( 1 );
						: window.alert( myArray ); // amiga,commodore
	---------------------------------------------------------------------------------------------------------------------------- */
	{
		if( numArrayIndex >= this.length || numArrayIndex < 0 )
		{
			return this;
		}

		var aryBuffer = [];
		for( var i = 0; i < this.length; i++ )
		{
			if( i != numArrayIndex )
			{
				aryBuffer.push( this[ i ] );
			}
		}
		this.length--;
		for( var i = 0; i <aryBuffer.length ; i++ )
		{
			this[ i ] = aryBuffer[ i ];
		}
		return this;
	}