@ree: #ffe6a1;
@gold: #f1c227;
@copper: #bb753f;
@iron: #514138;
@tin: #7a7a7a;  //sn
@cobalt: #879ace;

@gas: #ee9652;
@oil: #4f4f4f;


#usgs_aoi {
  line-color:#999;
  line-width:0.5;
  polygon-fill:@gas;
  polygon-pattern-file:url('/Users/jamesconkling/Documents/Data/pattern/stripe8.png');
  [zoom <= 6]{ polygon-opacity:0.25; }
  [zoom = 7]{ polygon-opacity:0.15; polygon-pattern-opacity: 0.5; }
  [zoom = 8]{ polygon-opacity:0.05; polygon-pattern-opacity: 0.2; }
  [zoom >= 9]{ polygon-opacity:0; polygon-pattern-opacity: 0; }
}

.mineral {
  line-color:#999;
  //default pattern required to set .mineral class' pattern-opacity.  Should not be displayed
  polygon-pattern-file:url('/Users/jamesconkling/Documents/Data/pattern/stripe8.png');
  [zoom <= 6]{
    line-width:0.4;
    line-opacity:0.6;
    polygon-opacity:0;
    polygon-pattern-opacity:0;
    }
  [zoom = 7]{
    line-width:0.4;
    line-opacity:0.6;
    polygon-pattern-opacity:0;
    [RANK='prospective']{ polygon-opacity:0.4; }
    [RANK='favorable']{ polygon-opacity:0.2; }
    [RANK='permissive']{ polygon-opacity:0; }
  }
  [zoom = 8]{
    line-width:0.4;
    line-opacity:0.8;
    polygon-pattern-opacity:0;
    [RANK='prospective']{ polygon-opacity:0.4; }
    [RANK='favorable']{ polygon-opacity:0.2; }
    [RANK='permissive']{ polygon-opacity:0; }
  }
  [zoom >= 9]{
    line-width:0.8;
    line-opacity:1;
    [RANK='prospective']{ polygon-opacity:0.4; polygon-pattern-opacity:0.8; }
    [RANK='favorable']{ polygon-opacity:0.3; polygon-pattern-opacity:0.4; }
    [RANK='permissive']{ polygon-opacity:0.1; polygon-pattern-opacity:0.0; }
  }
}

// Draw fill
.fill {
  line-opacity:0;
  [zoom <= 6]{
    polygon-opacity:0;
    }
  [zoom = 7]{
    [RANK='prospective']{ polygon-opacity:0.4; }
    [RANK='favorable']{ polygon-opacity:0.2; }
    [RANK='permissive']{ polygon-opacity:0; }
  }
  [zoom = 8]{
    [RANK='prospective']{ polygon-opacity:0.4; }
    [RANK='favorable']{ polygon-opacity:0.2; }
    [RANK='permissive']{ polygon-opacity:0; }
  }
  [zoom >= 9]{
    [RANK='prospective']{ polygon-opacity:0.4; }
    [RANK='favorable']{ polygon-opacity:0.3; }
    [RANK='permissive']{ polygon-opacity:0.1; }
  }
}

// Draw line and pattern
.pattern {
  polygon-opacity:0;
  line-color:#999;
  //default pattern required to set .mineral class' pattern-opacity.  Should not be displayed
  polygon-pattern-file:url('/Users/jamesconkling/Documents/Data/pattern/stripe8.png');
  polygon-pattern-opacity:0;
  [zoom <= 6]{
    line-width: 0.4;
    line-opacity:0.4;
    }
  [zoom = 7]{
    line-width:0.4;
    line-opacity:0.6;
  }
  [zoom = 8]{
    [RANK='prospective']{ polygon-pattern-opacity:0.4; }
    [RANK='favorable']{ polygon-pattern-opacity:0.2; }
    [RANK='permissive']{ polygon-pattern-opacity:0.0; }
    line-width:0.4;
    line-opacity:0.8;
  }
  [zoom >= 9]{
    [RANK='prospective']{ polygon-pattern-opacity:0.8; }
    [RANK='favorable']{ polygon-pattern-opacity:0.4; }
    [RANK='permissive']{ polygon-pattern-opacity:0.0; }
    line-width:0.8;
    line-opacity:1;
  }
}


/******************** Aynak **********************/
#aynak_sed_cu_tracts {
  polygon-fill:@copper;
  polygon-pattern-file: url('/Users/jamesconkling/Documents/Data/pattern/mineral_stripe/copper_4_stripe.png');
}


/******************** Badakshan **********************/
#badakshan_au_lode {
  polygon-fill:@gold;
  polygon-pattern-file: url('/Users/jamesconkling/Documents/Data/pattern/mineral_stripe/gold_4_stripe.png');
}


/******************** Balkhab **********************/
#balkhab_vms {
  polygon-fill:@copper;
  polygon-pattern-file: url('/Users/jamesconkling/Documents/Data/pattern/mineral_stripe/copper_4_stripe.png');
}


/******************** Dusar-shaida **********************/

#dusar-shaida_cu_prphy-fill {
  polygon-fill:@copper;
}

#dusar-shaida_sn_w-fill {
  polygon-fill:@tin;
}

#dusar-shaida_cu_prphy-pattern {
  polygon-opacity:0;
  polygon-pattern-file: url('/Users/jamesconkling/Documents/Data/pattern/mineral_stripe/copper_4_stripe.png');
}

#dusar-shaida_sn_w-pattern {
  polygon-opacity:0;
  polygon-pattern-file: url('/Users/jamesconkling/Documents/Data/pattern/mineral_stripe/tin_4_stripe.png');
}

/******************** Hahi-gak **********************/
#haji-gak_fe_sed {
  polygon-fill:@iron;
  polygon-pattern-file: url('/Users/jamesconkling/Documents/Data/pattern/mineral_stripe/iron_4_stripe.png');
}


/******************** Khanneshin **********************/
#khanneshin_carbonatites {
  polygon-fill:@ree;
  polygon-pattern-file: url('/Users/jamesconkling/Documents/Data/pattern/mineral_stripe/ree_4_stripe.png');
}


/******************** Kundalan **********************/
#kundalan_au_lode-fill {
  polygon-fill:@gold;
}

#kundalan_cu_prphy-fill {
  polygon-fill:@copper;
}

#kundalan_au_lode-pattern {
  polygon-opacity:0;
  polygon-pattern-file: url('/Users/jamesconkling/Documents/Data/pattern/mineral_stripe/gold_4_stripe.png');
}

#kundalan_cu_prphy-pattern {
  polygon-opacity:0;
  polygon-pattern-file: url('/Users/jamesconkling/Documents/Data/pattern/mineral_stripe/copper_4_stripe.png');
}
// NO KUNDALAN_AU_SED


/******************** Zarakashan **********************/
#zarakashan_au_lode-fill {
  polygon-fill:@gold;
}

#zarakashan_cu_prphy-fill {
  polygon-fill:@copper;
}

#zarakashan_au_lode-pattern {
  polygon-opacity:0;
  polygon-pattern-file: url('/Users/jamesconkling/Documents/Data/pattern/mineral_stripe/gold_4_stripe.png');
}

#zarakashan_cu_prphy-pattern {
  polygon-opacity:0;
  polygon-pattern-file: url('/Users/jamesconkling/Documents/Data/pattern/mineral_stripe/copper_4_stripe.png');
}
// NO ZARAKASHAN_CU_SED


