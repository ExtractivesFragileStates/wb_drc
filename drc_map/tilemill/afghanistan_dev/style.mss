//Dark Blue Ramp
/*
@1:#f0f0f3;
@2:#c2c4d0;
@3:#9498ad;
@4:#676c8a;
@5:#394067;
*/

//Light Blue Ramp
@1:#f6fbfc;
@2:#d9edf2;
@3:#bde0e8;
@4:#a1d2de;
@5:#85c5d4;

@line: #9498ad;

@ree: #ffe6a1;
@gold: #f1c227;
@copper: #bb753f;
@iron: #514138;
@tin: #7a7a7a;  //sn

@gas: #ee9652;
@oil: #4f4f4f;

#dev {
  line-width:1;
  polygon-opacity:0.8;
  [perwater=-1]{
    line-color:#aaa;
    polygon-opacity:0;
    polygon-pattern-opacity:0.4;
    polygon-pattern-file:url('/Users/jamesconkling/Documents/Data/pattern/large_stripe_med_gray.png');
    }
  [perwater>=0]{
    polygon-fill:@1;
    line-color: @line; //lighten(@1,10%);
    }
  [perwater>=15]{
    polygon-fill:@2;
    line-color: @line; //lighten(@2,10%);
    }
  [perwater>=30]{
    polygon-fill:@3;
    line-color: @line; //lighten(@3,10%);
    }
  [perwater>=45]{
    polygon-fill:@4;
    line-color: @line; //lighten(@4,10%);
    }
  [perwater>=60]{
    polygon-fill:@5;
    line-color: @line; //lighten(@5,10%);
    }
}
