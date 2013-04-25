window.onload = function ()
{
	objProducts.AddProduct( 'NOK-N70' , 'Nokia N70 Cep Telefonu' , 300 );
	objProducts.AddProduct( 'ASUS-M6R' , 'Asus M6R Notebook' , 1200 );
	objProducts.AddProduct( 'C64C' , 'Commodore 64 - C' , 20.5 );

	objProducts.SortItems( 'title' );

	objBasket.AddToBasket( 'NOK-N70' , 2 );
	objBasket.AddToBasket( 'ASUS-M6R' , 3 );
	objBasket.AddToBasket( 'ASUS-M6R' , 1 );

	objBasket.SortItems( 'title' );

	objProducts.Print();
	objBasket.Print();
}

/* Products ------------------------------------------------------------------------------------------------------------------- */
var objProducts = {
	 Products : []
	,AddProduct : function ( strProductCode , strProductTitle , numProductPrice )
	{
		var Product = new Object();
		Product.code = strProductCode;
		Product.title = strProductTitle;
		Product.price = numProductPrice;

		this.Products.push( Product );
	}
	,Print : function ()
	{
		var strHtml = '';
		strHtml+= ''
			+ '<h1>Ürünler<\/h1>'
			+ '<dl class="head">'
				+ '<dt class="counter">&nbsp;<\/dt>'
				+ '<dd class="title">Ürün Adı <button onclick="objProducts.SortItems( \'title\' );">&#708;<\/button><button onclick="objProducts.SortItems( \'title\' , \'desc\' );">&#709;<\/button><\/dd>'
				+ '<dd class="price">Fiyatı <button onclick="objProducts.SortItems( \'price\' );">&#708;<\/button><button onclick="objProducts.SortItems( \'price\' , \'desc\' );">&#709;<\/button><\/dd>'
				+ '<dd class="single_button">&nbsp;<\/dd>'
			+ '<\/dl>'
			+ '';
		for( var i = 0; i <this.Products.length ; i++ )
		{
			var numCount = ( i + 1 );
			var strProductCode = this.Products[ i ].code;
			var strProductTitle = this.Products[ i ].title;
			var numProductPrice = this.Products[ i ].price;
			
			var strGradientClass = ( i % 2 == 0 ) ? ' gradient_on' : '';

			strHtml+= ''
				+ '<dl class="row' + strGradientClass+ '">'
					+ '<dt class="counter">' + numCount.setDigits( 3 ) + '<\/dt>'
					+ '<dd class="title">' + strProductTitle + '<\/dd>'
					+ '<dd class="price aright">' + numProductPrice.digitGroup() + ' YTL<\/dd>'
					+ '<dd class="single_button"><button onclick="objBasket.AddToBasket( \'' + strProductCode + '\' , prompt( \'Kaç adet?\' , \'1\' ) );">+<\/button><\/dd>'
					+ '<dd class="single_button"><button onclick="objProducts.RemoveFromProducts( \'' + strProductCode + '\' );">-<\/button><\/dd>'
				+ '<\/dl>'
				+ '';
		}
		document.getElementById( 'products' ).innerHTML = strHtml;
	}
	,SortItems : function ( strField , strType )
	{
		var strSortType = ( strType ) ? 'desc' : 'asc';
		this.Products.sortUTFCollection( strField , strSortType );
		this.Print();
	}
	,GetProduct : function ( strProductCode )
	{
		for( var i = 0; i < this.Products.length; i++ )
		{
			if( this.Products[ i ].code == strProductCode )
			{
				return this.Products[ i ];
			}
		}
	}
	,AddProductManuelly : function ()
	{
		var strProductCodeAsk = window.prompt( 'Ürün Kodu' , '' );
		if( !strProductCodeAsk || strProductCodeAsk.length == 0 ){ return; }

		var strProductTitleAsk = window.prompt( 'Ürün Adı' , '' );
		if( !strProductTitleAsk || strProductTitleAsk.length == 0 ){ return; }

		var numProductPriceAsk = window.prompt( 'Ürün Fiyatı' , 0 );
		if( !numProductPriceAsk || isNaN( numProductPriceAsk ) ){ return; }
		numProductPriceAsk*= 1;

		this.AddProduct( strProductCodeAsk , strProductTitleAsk , numProductPriceAsk );
		this.Print();
	}
	,RemoveFromProducts : function ( strProductCode )
	{
		for( var i = 0; i < this.Products.length; i++ )
		{
			if( this.Products[ i ].code == strProductCode )
			{
				this.Products.removeElement( i );
				this.Print();
				objBasket.RemoveFromBasketByProductCode( strProductCode );
				return;
			}
		}
	}
}
/* Products ------------------------------------------------------------------------------------------------------------------- */

/* Shopping Basket------------------------------------------------------------------------------------------------------------- */
var objBasket = {
	Basket : []
	,AddToBasket : function ( strProductCode , numUnits )
	{
		if( !numUnits || isNaN( numUnits ) )
		{
			return;
		}
		
		numUnits*= 1;

		var BasketItem = new Object();
		BasketItem.code = strProductCode;
		BasketItem.units = numUnits;
		
		var Product = objProducts.GetProduct( strProductCode );
		BasketItem.title = Product.title;
		BasketItem.price = Product.price;

		this.Basket.push( BasketItem );
		this.Print();
	}
	,Print : function ()
	{
		if( this.Basket.length == 0 )
		{
			document.getElementById( 'basket' ).innerHTML = '';
			return;
		}
		var strHtml = '';
		strHtml+= ''
			+ '<h1>Sepet<\/h1>'
			+ '<dl class="head">'
				+ '<dt class="counter">&nbsp;<\/dt>'
				+ '<dd class="title">Ürün Adı <button onclick="objBasket.SortItems( \'title\' );">&#708;<\/button><button onclick="objBasket.SortItems( \'title\' , \'desc\' );">&#709;<\/button><\/dd>'
				+ '<dd class="price">Fiyatı <button onclick="objBasket.SortItems( \'price\' );">&#708;<\/button><button onclick="objBasket.SortItems( \'price\' , \'desc\' );">&#709;<\/button><\/dd>'
				+ '<dd class="single_button">&nbsp;<\/dd>'
				+ '<dd class="single_button">Adet<\/dd>'
				+ '<dd class="price">Toplam<\/dd>'
			+ '<\/dl>'
			+ '';
		var numTotalUnits = 0;
		var numTotalPrice = 0;
		for( var i = 0; i <this.Basket.length ; i++ )
		{
			var numCount = ( i + 1 );
			var strProductCode = this.Basket[ i ].code;
			var strProductTitle = this.Basket[ i ].title;
			var numProductPrice = this.Basket[ i ].price;
			var numUnits = this.Basket[ i ].units;
			
			var numPriceByUnits = numUnits * numProductPrice;
			numTotalUnits+= numUnits;
			numTotalPrice+= numPriceByUnits;
			
			var strGradientClass = ( i % 2 == 0 ) ? ' gradient_on' : '';

			strHtml+= ''
				+ '<dl class="row' + strGradientClass + '">'
					+ '<dt class="counter">' + numCount.setDigits( 3 ) + '<\/dt>'
					+ '<dd class="title">' + strProductTitle + '<\/dd>'
					+ '<dd class="price aright">' + numProductPrice.digitGroup() + ' YTL<\/dd>'
					+ '<dd class="single_button"><button onclick="objBasket.RemoveFromBasket( ' + i + ' );">-<\/button><\/dd>'
					+ '<dd class="single_button">' + numUnits + '<\/dd>'
					+ '<dd class="price aright">' + numPriceByUnits.digitGroup() + ' YTL<\/dd>'
				+ '<\/dl>'
				+ '';
		}
		
		var numTotalPricePrint = '<p>' + numTotalPrice.digitGroup() + ' YTL<\/p>';
		if( numTotalPrice >= 2000 )
		{
			var numDiscount = Math.round( numTotalPrice * .2 );
			var numDiscountedFinal = numTotalPrice - numDiscount;
			numTotalPricePrint = '<p><strike>' + numTotalPrice.digitGroup() + ' YTL<\/strike><\/p>'
				+ '<p class="discount">-' + numDiscount.digitGroup() + ' YTL<\/p>'
				+ '<p>' + numDiscountedFinal.digitGroup() + ' YTL<\/p>';
		}

		strHtml+= ''
			+ '<dl id="final_total">'
				+ '<dt class="counter">&nbsp;<\/dt>'
				+ '<dd class="title">Toplam<\/dd>'
				+ '<dd class="price aright">&nbsp;<\/dd>'
				+ '<dd class="single_button">&nbsp;<\/dd>'
				+ '<dd class="single_button">' + numTotalUnits + '<\/dd>'
				+ '<dd class="price aright">' + numTotalPricePrint + '<\/dd>'
			+ '<\/dl>'
			+ '';

		document.getElementById( 'basket' ).innerHTML = strHtml;
	}
	,SortItems : function ( strField , strType )
	{
		var strSortType = ( strType ) ? 'desc' : 'asc';
		this.Basket.sortUTFCollection( strField , strSortType );
		this.Print();
	}
	,RemoveFromBasket : function ( numArrayIndex )
	{
		this.Basket.removeElement( numArrayIndex );
		this.Print();
	}
	,RemoveFromBasketByProductCode : function ( strProductCode )
	{
		var bufferArray = [];
		for( var i = 0; i < this.Basket.length; i++ )
		{
			if( this.Basket[ i ].code == strProductCode )
			{
				delete this.Basket[ i ];
			}
		}
		for( var i = 0; i < this.Basket.length; i++ )
		{
			if( this.Basket[ i ] )
			{
				bufferArray.push( this.Basket[ i ] );
			}
		}
		this.Basket = bufferArray;
		this.Print();
	}
}
/* Shopping Basket------------------------------------------------------------------------------------------------------------- */