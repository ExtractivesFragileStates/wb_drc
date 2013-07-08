@copper: #B75E3B;
@gas: #ee9652;
@oil: #4f4f4f;
@gold: #fff65e;


//Copper (2); 
//Gas (1);
//Oil, Gas (4); 
//Copper, Oil (1);
//Copper, Oil, Gas (1); 

@extractive_line: #ffe8c9;
@pattern_opacity: 0.9;

#primary_extractives [resource != ""]{
  line-color:@extractive_line;
  line-width:1; //match admin0 minus .5, or put below admin0 and admin1 and make larger
  line-opacity: 0.6;
  polygon-fill: white;
  [resource = "Copper"]{ 
    polygon-pattern-file: url('/Users/jamesconkling/Documents/Data/pattern/med_copper_stripe.png');
    polygon-pattern-opacity: @pattern_opacity;
  }
  [resource = "Gas"]{ 
    polygon-pattern-file: url('/Users/jamesconkling/Documents/Data/pattern/med_gas_stripe.png');
    polygon-pattern-opacity: @pattern_opacity;
  }
  [resource = "Oil, Gas"]{ 
    polygon-pattern-file: url('/Users/jamesconkling/Documents/Data/pattern/med_oil_gas_stripe.png');
    polygon-pattern-opacity: @pattern_opacity;
  }
  [resource = "Copper, Oil"]{ 
    polygon-pattern-file: url('/Users/jamesconkling/Documents/Data/pattern/med_copper_oil_stripe.png');
    polygon-pattern-opacity: @pattern_opacity;
  }
  [resource = "Copper, Oil, Gas"]{ 
    polygon-pattern-file: url('/Users/jamesconkling/Documents/Data/pattern/med_copper_oil_gas_stripe.png');
    polygon-pattern-opacity: @pattern_opacity;
  }
  
/***** SOLID ******/
  polygon-opacity:0.1;
  [resource = "Copper"]{ polygon-fill:@gas; }
  [resource = "Gas"]{ polygon-fill:@gas; }
  [resource = "Oil, Gas"]{ polygon-fill:@gas; }
  [resource = "Copper, Oil"]{ polygon-fill:@gas; }
  [resource = "Copper, Oil, Gas"]{ polygon-fill:@gas; }
}


/****** USGS ********/



#usgs_aoi {
  line-color:#999;
  line-width:0.5;
  polygon-opacity:0.2;
  polygon-fill:@gas;
  [zoom <= 8]{ polygon-pattern-file:url('/Users/jamesconkling/Documents/Data/pattern/stripe8.png'); }
  [zoom >= 9]{
    polygon-opacity:0;
    }
}


.mineral {
  line-color:#999;
  line-width:0.6;
  line-opacity:0;
  polygon-opacity:0;
  //default pattern required to set .mineral class' pattern-opacity.  Should not be displayed
  polygon-pattern-file:url('/Users/jamesconkling/Documents/Data/pattern/stripe8.png');
  [zoom <= 8]{
    line-opacity:0.6;
    polygon-pattern-opacity:0;
    [RANK='favorable']{ polygon-opacity:0.3; }
    [RANK='prospective']{ polygon-opacity:0.2; }
    [RANK='permissive']{ polygon-opacity:0.1; }
  }
  [zoom >= 9]{
    line-opacity:1;
    [RANK='favorable']{ polygon-opacity:0.5; polygon-pattern-opacity:0.8; }
    [RANK='prospective']{ polygon-opacity:0.3; polygon-pattern-opacity:0.4; }
    [RANK='permissive']{ polygon-opacity:0.1; polygon-pattern-opacity:0.2; }
  }
}


#haji_gak_fe {
  polygon-fill:@gas;
  polygon-pattern-file: url('/Users/jamesconkling/Documents/Data/pattern/med_gas_stripe.png');
}

#kundalan_cu_prphy {
  polygon-fill:@copper;
  polygon-pattern-file: url('/Users/jamesconkling/Documents/Data/pattern/med_copper_stripe.png');
}

/*
#kundalan_au_lode [zoom >= 9]{
  polygon-fill:@oil;
  polygon-pattern-file: url('/Users/jamesconkling/Documents/Data/pattern/med_oil_gas_stripe.png');
  [RANK='favorable']{ polygon-opacity:0.5; polygon-pattern-opacity:0.8; }
  [RANK='prospective']{ polygon-opacity:0.3; polygon-pattern-opacity:0.3; }
  [RANK='permissive']{ polygon-opacity:0.1; polygon-pattern-opacity:0.1; }
  }
*/  
  
  
  
  
