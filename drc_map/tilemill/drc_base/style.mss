@admin_line: #616161;


#admin0_africa [NOM_EN != 'Democratic Republic of the Congo']{
  polygon-opacity:0.4;
  polygon-fill:#ccc;
  line-width:0;
  }

.intl-line {
  line-color:lighten(@admin_line, 6%);
  [zoom <= 4] { line-width:0.4; }
  [zoom = 5] { line-width:0.8; }
  [zoom = 6] { line-width:1.2; }
  [zoom = 7] { line-width:1.6; }
  [zoom = 8] { line-width:1.8; }
  [zoom = 9] { line-width:2; }
  [zoom >= 10] { line-width:2.2; }
  }

#lakes_border {
  line-color:lighten(@admin_line, 15%);
  [zoom <= 4] { line-width:0.4; line-dasharray: 2,3; }
  [zoom = 5] { line-width:0.8; line-dasharray: 2,3; }
  [zoom = 6] { line-width:1.2; line-dasharray: 3,5; }
  [zoom = 7] { line-width:1.6; line-dasharray: 4,6; }
  [zoom = 8] { line-width:1.8; line-dasharray: 5,8; }
  [zoom = 9] { line-width:2.0; line-dasharray: 6,9; }
  [zoom >= 10] { line-width:2.2; line-dasharray: 7,10; }
}

#admin1 {
  line-color:@admin_line;
  [zoom <= 4] { line-width:0.2; }
  [zoom = 5] { line-width:0.4; }
  [zoom = 6] { line-width:0.6; }
  [zoom = 7] { line-width:0.8; }
  [zoom = 8] { line-width:1; }
  [zoom = 9] { line-width:1.2; }
  [zoom >= 10] { line-width:1.4; }
  line-opacity:0.4;
  line-comp-op:multiply;
}


#admin2 {
  line-color:@admin_line;
  [zoom <= 4] { line-width:0; }
  [zoom = 5] { line-width:0.1; }
  [zoom = 6] { line-width:0.2; }
  [zoom = 7] { line-width:0.4; }
  [zoom = 8] { line-width:0.5; }
  [zoom = 9] { line-width:0.8; }
  [zoom >= 10] { line-width:1; }
  line-opacity:0.4;
  line-comp-op:multiply;
}


#admin3 {
  [zoom <= 4] { line-width:0; }
  [zoom = 5] { line-width:0; }
  [zoom = 6] { line-width:0; }
  [zoom = 7] { line-width:0.3; }
  [zoom = 8] { line-width:0.4; }
  [zoom = 9] { line-width:0.6; }
  [zoom >= 10] { line-width:0.9; }
  line-color:@admin_line;
  line-opacity:0.25;
  line-comp-op:multiply;
}


#roads [zoom >= 8]{
  line-width:0.5;
  line-opacity:0.5;
  line-color:#888;
  line-comp-op:multiply;
}
