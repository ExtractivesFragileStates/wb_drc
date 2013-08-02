@1: #FEF0D9;
@2: #FDCC8A;
@3: #FC8D59;
@4: #E34A33;
@5: #B30000;

#hex {
  line-width:0.5;
  line-opacity: 0.8;
  polygon-opacity:0.6;
  [zoom >= 8] { polygon-opacity: 0.4; }
  [PNTCNT = 0]{ polygon-opacity: 0; line-color: #aaa; line-opacity: 0.2}
  [PNTCNT > 0]{ polygon-fill: @1; line-color: darken(@1, 10%); }
  [PNTCNT > 10]{ polygon-fill: @2; line-color: darken(@2, 10%); }
  [PNTCNT > 50]{ polygon-fill: @3; line-color: darken(@3, 10%); }
  [PNTCNT > 100]{ polygon-fill: @4; line-color: darken(@4, 10%); }
  [PNTCNT > 250]{ polygon-fill: @5; line-color: darken(@5, 10%); }
}


#incidence [zoom >= 8]{
  ::halo {
    marker-fill-opacity:0;
    marker-line-color: #813;
    marker-line-opacity: 0.8;
    marker-allow-overlap: true;
    [zoom = 8] { marker-width: 10; marker-line-width: 4; }
    [zoom = 9] { marker-width: 13; marker-line-width: 5; }
    [zoom >= 10] { marker-width: 16; marker-line-width: 6; }
    }
  marker-fill-opacity:0;
  marker-line-color: #cf6a4e;
  marker-allow-overlap: true;
  [zoom = 8] { marker-width: 10; marker-line-width: 2; }
  [zoom = 9] { marker-width: 13; marker-line-width: 3; }
  [zoom >= 10] { marker-width: 16; marker-line-width: 4; }
}
