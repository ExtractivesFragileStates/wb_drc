@3: 1.5;
@4: 2.2;
@5: 3.3;
@6: 5;
@7: 7.6;
@8: 11.4;
@9: 17.1;

@mine_width: 0.7;
@s1_width: 1.4;      @s1_line_width: 0.8;
@s2_width: 2.4;      @s2_line_width: 1;
@s3_width: 3.2;      @s3_line_width: 1.2;
@s4_width: 4.0;      @s4_line_width: 1.4;
@s5_width: 6.0;      @s5_line_width: 1.6;


#mines { 
  marker-fill-opacity:0;
  marker-allow-overlap:true;  
  marker-line-color: #f64;
  [zoom <= 2]{ marker-width:@mine_width; marker-line-width:0.1; }
  [zoom = 3]{ marker-width:@mine_width * @3; marker-line-width:0.2; }
  [zoom = 4]{ marker-width:@mine_width * @4; marker-line-width:0.4; }
  [zoom = 5]{ marker-width:@mine_width * @5; marker-line-width:0.6; }
  [zoom = 6]{ marker-width:@mine_width * @6; marker-line-width:0.8; }
  [zoom = 7]{ marker-width:@mine_width * @7; marker-line-width:1.3; }
  [zoom = 8]{ marker-width:@mine_width * @8; marker-line-width:1.6; }
  [zoom >= 9]{ marker-width:@mine_width * @9; marker-line-width:2; }
  marker-opacity: 0.0;
}

#intermediaries {
  marker-fill-opacity:0;
  marker-allow-overlap:true;  
  marker-line-color: #f64;
  [zoom <= 2]{ marker-width:@s3_width; marker-line-width:0.1 + @s3_line_width; }
  [zoom = 3]{ marker-width:@s3_width * @3; marker-line-width:0.2 + @s3_line_width; }
  [zoom = 4]{ marker-width:@s3_width * @4; marker-line-width:0.5 + @s3_line_width; }
  [zoom = 5]{ marker-width:@s3_width * @5; marker-line-width:0.7 + @s3_line_width; }
  [zoom = 6]{ marker-width:@s3_width * @6; marker-line-width:1.0 + @s3_line_width; }
  [zoom = 7]{ marker-width:@s3_width * @7; marker-line-width:1.3 + @s3_line_width; }
  [zoom = 8]{ marker-width:@s3_width * @8; marker-line-width:1.6 + @s3_line_width; }
  [zoom >= 9]{ marker-width:@s3_width * @9; marker-line-width:2 + @s3_line_width; }
  marker-opacity: 0.005;
}
