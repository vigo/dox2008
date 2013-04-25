var vReg = {
	library : []
	,
	objForm : null
	,
	objPattern : null
	,
	numLibraryIndex : -1
	,
	objUserInputText : null
	,
	strUserInputText : ''
	,
	objResult : null
	,
	init : function ()
	{
		this.setTitle( 'Application Name' );
		this.setHeader();
		this.setLeftSide();
		this.setRightSide();
		this.objForm = document.forms[ 0 ];
		this.objPattern = this.objForm[ 'regPattern' ];
		this.objUserInputText = this.objForm[ 'userInput' ];
		this.objResult = this.objForm[ 'vregResult' ];
	}
	,
	ID : function ( strID )
	{
		return document.getElementById( strID );
	}
	,
	getText : function ( strInput )
	{
		var strText = ( this.locale[ strInput ] ) ? this.locale[ strInput ] : strInput;
		return strText;
	}
	,
	setTitle : function ( strInput )
	{
		top.document.title = this.getText( strInput );
	}
	,
	setHeader : function ()
	{
		this.ID( 'header' ).innerHTML = this.htmlWrap( 'h1' , this.getText( 'Application Name' ) ) + '' + this.htmlWrap( 'p' , this.getText( 'Application Author' ) );
	}
	,
	setLeftSide : function ()
	{
		var strHtml_Pattern = this.htmlWrap( "p" , '<input class="text" type="text" name="regPattern" value="" \/>' ) + ''
				+ this.htmlWrap( "p" , 
										 this.htmlWrap( "span" , '<input class="checkbox" type="checkbox" name="regFlagG" checked="checked" \/>' ) + ''
										+this.htmlWrap( "span" , this.getText( 'Global' ) ) + ''
										+this.htmlWrap( "span" , '<input class="checkbox" type="checkbox" name="regFlagI" checked="checked" \/>' ) + ''
										+this.htmlWrap( "span" , this.getText( 'Ignore Case' ) ) + ''
										+this.htmlWrap( "span" , '<input class="checkbox" type="checkbox" name="regFlagM" checked="checked" \/>' ) + ''
										+this.htmlWrap( "span" , this.getText( 'Multi Line' ) ) + ''
										+this.htmlWrap( "span" , '<input class="button" type="button" value="^" onclick="vReg.InsertBeginSign();" \/>' ) + ''
										+this.htmlWrap( "span" , '<input class="button" type="button" value="$" onclick="vReg.InsertEndSign();" \/>' ) + ''

								)
				+ '';
		var strHtml_Input = this.htmlWrap( "p" ,
												  this.htmlWrap( "span" , '<input class="button" type="button" value="' + this.getText( 'Test' ) + '" onclick="vReg.applyReg( \'test\' );" \/>' ) + ''
												+ this.htmlWrap( "span" , '<input class="button" type="button" value="' + this.getText( 'Exec' ) + '" onclick="vReg.applyReg( \'exec\' );" \/>' ) + ''
												+ this.htmlWrap( "span" , '<input class="button" type="button" value="' + this.getText( 'Match' ) + '" onclick="vReg.applyReg( \'match\' );" \/>' ) + ''
												+ this.htmlWrap( "span" , '<input class="button" type="button" value="' + this.getText( 'Reg Replace' ) + '" onclick="vReg.applyReg( \'replace\' );" \/>' ) + ''
												+ this.htmlWrap( "span" , '<input class="button" type="button" value="' + this.getText( 'Reset Application' ) + '" onclick="vReg.init();" \/>' , 'style="margin-left: 48px;"' ) + ''
												+ this.htmlWrap( "span" , '<input class="button" type="button" value="' + this.getText( 'Build For Lib' ) + '" onclick="vReg.buildForLib();" \/>' , 'title="' + this.getText( 'Build For Lib Title' ) + '"' ) + ''
										) + ''
			+ this.htmlWrap( "p" , '<textarea class="text" name="userInput" cols="1" rows="20" wrap="off"><\/textarea>' ) + ''
			+ '';


		this.ID( 'left' ).innerHTML = this.buildField( 'Pattern' , strHtml_Pattern ) + ''
										+ this.buildField( 'Input' , strHtml_Input ) + ''
										+ '';
	}
	,
	setRightSide : function ()
	{
		var strHtml_Library = '<select class="text" name="regLibrary" onchange="vReg.setLibraryIndex( this );">';
		strHtml_Library+= '<option value="-1">' + this.getText( 'Select Pattern' ) + '</option>';
		for( var i = 0; i <this.library.length ; i++ )
		{
			strHtml_Library+= '<option value="' + i + '">' + this.library[ i ][ 0 ] + ' : ' + this.library[ i ][ 1 ] + '</option>';
		}
		strHtml_Library+= '<\/select>';
		strHtml_Library = this.htmlWrap( "span" , strHtml_Library );
		strHtml_Library+= ''
			+ this.htmlWrap( "span" , '<input class="button" type="button" value="' + this.getText( 'Help' ) + '" onclick="vReg.displayDescription();"\/>' )
			+ this.htmlWrap( "span" , '<input class="button" type="button" value="' + this.getText( 'Demo' ) + '" onclick="vReg.runDemo();"\/>' )
			+ this.htmlWrap( "span" , '<input class="button" type="button" value="' + this.getText( 'Set' ) + '" onclick="vReg.setPattern();"\/>' )
			+ '';

		this.ID( 'right' ).innerHTML = this.buildField( 'Library' , this.htmlWrap( "p" , strHtml_Library ) + '<p id="appLibraryDescriptionArea">&nbsp;</p>' ) + ''
			+ this.buildField( 'Result' , this.htmlWrap( "p" , '<textarea class="text mono" name="vregResult" cols="1" rows="21" wrap="off"><\/textarea>' ) ) + ''
			+ '';
	}
	,
	setLibraryIndex : function ( objSelect )
	{
		this.numLibraryIndex = objSelect.value;
	}
	,
	setPattern : function ()
	{
		if( this.numLibraryIndex < 0 ){ return; }
		this.objPattern.value = this.library[ this.numLibraryIndex ][ 1 ];
	}
	,
	displayDescription : function ()
	{
		if( this.numLibraryIndex < 0 ){ return; }
		this.ID( 'appLibraryDescriptionArea' ).innerHTML = ( this.library[ this.numLibraryIndex ][ 2 ] == null ) ? this.getText( 'Help is not available' ) : this.library[ this.numLibraryIndex ][ 2 ];
	}
	,
	buildField : function ( strLegend , strContent )
	{
		var htmlLegend = this.htmlWrap( 'legend' , this.getText( strLegend ) );
		return this.htmlWrap( 'fieldset' , htmlLegend + '' + strContent );
	}
	,
	htmlWrap : function ( strTag , strText , strProperties )
	{
		var strAnyProperties = ( strProperties ) ? ' ' + strProperties : '';
		return '<' + strTag + strAnyProperties + '>' + strText + '<\/' + strTag + '>';
	}
	,
	InsertBeginSign : function ()
	{
		if( this.objPattern.value.charAt( 0 ) == '^' ){
			this.objPattern.value = this.objPattern.value.substr( 1 , ( this.objPattern.value.length - 1 ) );
		}
		else
		{
			this.objPattern.value = '^' + this.objPattern.value;
		}
	}
	,
	InsertEndSign : function ()
	{
		if( this.objPattern.value.charAt( this.objPattern.value.length - 1 ) == '$' )
		{
			this.objPattern.value = this.objPattern.value.substr( 0 , ( this.objPattern.value.length - 1 ) );
		}
		else
		{
			this.objPattern.value = this.objPattern.value + '$';
		}
	}
	,
	runDemo : function ()
	{
		if( this.numLibraryIndex < 0 ){ return; }
		if( this.library[ this.numLibraryIndex ][ 3 ] == null ){ this.ID( 'appLibraryDescriptionArea' ).innerHTML = this.getText( 'Demo is not available!' ); return; }

		this.setPattern();
		this.displayDescription();

		this.objUserInputText.value = this.library[ this.numLibraryIndex ][ 3 ];
		this.applyReg( 'exec' );
	}
	,
	applyReg : function ( strMethod )
	{

		if( this.objPattern.value.length == 0 ){ window.alert( this.getText( 'Pattern can not be empty!' ) ); this.objPattern.focus(); return; }
		if( this.objPattern.value == '*' ){ window.alert( this.getText( 'Wrong Pattern!' ) ); this.objPattern.focus(); return; }
		if( this.objPattern.value == '.*' ){ this.objPattern.value = '^.*$'; }

		this.strUserInputText = this.objUserInputText.value;
		
		if( this.strUserInputText.length == 0 ){ window.alert( this.getText( 'Input some text!' ) ); this.objUserInputText.focus(); return; }

		var strFlag_Global = this.objForm[ 'regFlagG' ].checked ? 'g' : '';
		var strRegFlags = strFlag_Global + '' + ( this.objForm[ 'regFlagI' ].checked ? 'i' : '' ) + '' + ( this.objForm[ 'regFlagM' ].checked ? 'm' : '' );
		
		try
		{
			var objRegExp = new RegExp( this.objPattern.value , strRegFlags );
		}
		catch( e )
		{
			window.alert( this.getText( 'Pattern Error' ) + '\n' + e.name + ' : ' + e.message );
			return;
		}

		this.objResult.value = '';

		switch( strMethod )
		{
			case 'test' :
				this.objResult.value = objRegExp.test( this.strUserInputText );
			break;
			
			case 'exec' :
				var numMatchCount = 0;
				var strMatchResult = '';
				var aryMatches , strMatch , numCursorStart , numCursorEnd;

				if( strFlag_Global == 'g' )
				{
					while( ( aryMatches = objRegExp.exec( this.strUserInputText ) ) != null )
					{
						if( aryMatches.length > 0 )
						{
							numMatchCount++;

							strMatch = aryMatches[ 0 ];
							numCursorStart = aryMatches.index + 1;
							numCursorEnd = aryMatches.index + strMatch.length;

							strMatchResult+= '---------------------------------------------------------------------[ ' + numMatchCount + ' ]-\n';
							strMatchResult+= '“' + this.clearEscapes( strMatch ) + '” ( ' + numCursorStart + ' , ' + numCursorEnd + ' )\n';
							
							if( aryMatches.length > 1 )
							{
								for( var i = 1; i <aryMatches.length ; i++ )
								{
									strMatchResult+= '$' + i + ' = ' + this.clearEscapes( aryMatches[ i ] ) + '\n';
								}
							}
						}
					}
				}
				else
				{
					aryMatches = objRegExp.exec( this.strUserInputText );
					if( aryMatches.length > 0 )
					{
						numMatchCount++;
						
						strMatch = aryMatches[ 0 ];
						numCursorStart = aryMatches.index + 1;
						numCursorEnd = aryMatches.index + strMatch.length;

						strMatchResult+= '---------------------------------------------------------------------[ ' + numMatchCount + ' ]-\n';
						strMatchResult+= '“' + this.clearEscapes( strMatch ) + '” ( ' + numCursorStart + ' , ' + numCursorEnd + ' )\n';
					}
				}
				
				strMatchResult+= '---------------------------------------------------------------------------\n';
				strMatchResult+= this.getText( 'Found' ) + ' : ' + numMatchCount + '\n';
				this.objResult.value = strMatchResult;
			break;

			case 'match' :
				var numMatchCount = 0;
				var strMatchResult = '';
				var aryMatches , strMatch , numCursorStart , numCursorEnd;
				
				aryMatches = this.strUserInputText.match( objRegExp );
				if( aryMatches )
				{
					for( var i = 0; i <aryMatches.length ; i++ )
					{
						numMatchCount++;
						strMatchResult+= '( ' + numMatchCount + ' ) : ' + this.clearEscapes( aryMatches[ i ] ) + '\n';
					}
				}
				strMatchResult+= '---------------------------------------------------------------------------\n';
				strMatchResult+= this.getText( 'Found' ) + ' : ' + numMatchCount + '\n';
				this.objResult.value = strMatchResult;
			break;

			case 'replace' :
				this.applyReg( 'exec' );
				var blnReplaceWith = window.prompt( this.getText( 'Replace with?' ) , '' );
				if( !blnReplaceWith || blnReplaceWith.length == 0 ){ return; }
				this.objResult.value = this.strUserInputText.replace( objRegExp , blnReplaceWith );
			break;
		}
	}
	,
	buildForLib : function ()
	{
		if( this.objPattern.value.length == 0 ){ window.alert( this.getText( 'Pattern can not be empty!' ) ); this.objPattern.focus(); return; }
		this.objResult.value = '';
		var strOutForLib = '';
		var objRegExpX = /\\/gi;
		strOutForLib+= ''
			+ ',\nArray(\n'
			+ '\t\'NAME_OF_EXPRESSION\'\n'
			+ '\t,"' + this.objPattern.value.replace( objRegExpX , '\\\\' ) + '"\n'
			+ '\t,\'DESCRIPTION_OF_EXRESSION\'\n'
			+ '\t,\'DEMO_TEXT\'\n'
			+ ')\n\n'
			+ '--------------------------------------------------------------------[ or ]-\n\n'
			+ ',\nArray(\n'
			+ '\t\'NAME_OF_EXPRESSION\'\n'
			+ '\t,"' + this.objPattern.value.replace( objRegExpX , '\\\\' ) + '"\n'
			+ '\t,vReg.getText( \'DESCRIPTION_OF_EXRESSION\' )\n'
			+ '\t,null\n'
			+ ')\n\n'
			+ '';
		this.objResult.value = strOutForLib;
	}
	,
	clearEscapes : function ( strInput )
	{
		if( typeof( strInput ) != 'string' ){ return; }
		var or = /\n/gim;
		strInput = strInput.replace( or , "[\\n]" );
		var or = /\t/gim;
		strInput = strInput.replace( or , "[\\t]" );
		var or = /\r/gim;
		strInput = strInput.replace( or , "[\\r]" );
		
		//var or = / /gim;
		//strInput = strInput.replace( or , "[SPACE]" );
		return strInput;
	}
};
window.onload = function ()
{
	vReg.init();
}