#countries {
  line-width:0.5
}

@1: #FDCC8A;
@2: #FC8D59;
@3: #E34A33;
@4: #B30000;

#un_mdg {
  line-color:#ccc;
  line-width:0.5;
  polygon-opacity:0.7;
  [pvty_05 > 40]{ polygon-fill: @1; }
  [pvty_05 > 50]{ polygon-fill: @2; }
  [pvty_05 > 60]{ polygon-fill: @3; }
  [pvty_05 > 70]{ polygon-fill: @4; }
}
