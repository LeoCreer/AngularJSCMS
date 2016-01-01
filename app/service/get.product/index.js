cms.factory('getTheProduct', function() {

	var product_1 ={
		category_id:1,
		category_name:'Camera',
		product_id:'1',
		title:'HERO4 Black',
		discription:'HERO4 Black takes Emmy® Award-winning GoPro performance to the next level with our best image quality yet, plus a 2x more powerful processor1 that delivers super slow motion at 240 frames per second. Incredible high-resolution 4K30 and 2.7K60 video combines with 1080p120 and 720p240 slow motion to enable stunning, immersive footage of you and your world. Protune™ settings for both photos and video unlock manual control of Color, ISO Limit, Exposure and more. Waterproof to 131’ (40m) with 12MP photos at 30 frames per second and improved audio,1 HERO4 Black is the ultimate life-capture solution for those who demand the best.',
		price_us:'499.99',
		price_eur:'438.38',
		images:['http://demandware.edgesuite.net/sits_pod15/dw/image/v2/AASJ_PRD/on/demandware.static/-/Sites-gopro-products/default/dwc08c6b40/hi-res/CHDHX-401_main1.jpg',
				'http://demandware.edgesuite.net/sits_pod15/dw/image/v2/AASJ_PRD/on/demandware.static/-/Sites-gopro-products/default/dwe17bd4c4/hi-res/CHDHX-401_main2.jpg',
				'http://demandware.edgesuite.net/sits_pod15/dw/image/v2/AASJ_PRD/on/demandware.static/-/Sites-gopro-products/default/dw964d1f76/lifestyle/CHDHX-401_life1.jpg'
		]
	};

	var product_2 ={
		category_id:1,
		category_name:'Camera',
		product_id:'2',
		title:'HERO4 Session',
		discription:'50% smaller and 40% lighter than other HERO4 cameras,1 HERO4 Session is the most wearable and mountable GoPro ever. With a sleek, versatile design, it’s at home anywhere—from the surf to the snow to hanging with friends.',
		price_us:'299.99',
		price_eur:'263.02',
		images:['http://demandware.edgesuite.net/sits_pod15/dw/image/v2/AASJ_PRD/on/demandware.static/-/Sites-gopro-products/default/dwe102b17c/hi-res/CHDHS-101_main1.jpg',
				'http://demandware.edgesuite.net/sits_pod15/dw/image/v2/AASJ_PRD/on/demandware.static/-/Sites-gopro-products/default/dw83ba53e9/hi-res/CHDHS-101_main2.jpg',
				'http://demandware.edgesuite.net/sits_pod15/dw/image/v2/AASJ_PRD/on/demandware.static/-/Sites-gopro-products/default/dw3a1c0e70/hi-res/CHDHS-101_main3.jpg'
		]
	}


	var getTheProduct ={

		withThe: function(title){
			if(title == product_1.title){
				return product_1;
			}else if(title == product_2.title){
				return product_2;
			}else{
				var no_product ={
					category_id:null,
					category_name:'No Product',
					product_id:'null',
					title:'No Product',
					discription:'null',
					price_us:'0.00',
					price_eur:'00.00',
					images:['null',
							'null',
							'null'
					]
				}
				return no_product;
			}
		}

	}

	return getTheProduct;
});

