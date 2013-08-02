// Unemployment

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
  [nmply_05 > 0]{ polygon-fill: @1; }
  [nmply_05 > 10]{ polygon-fill: @2; }
  [nmply_05 > 15]{ polygon-fill: @3; }
  [nmply_05 > 20]{ polygon-fill: @4; }
}
