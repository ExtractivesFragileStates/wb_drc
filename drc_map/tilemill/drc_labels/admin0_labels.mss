Map{ buffer-size: 200; }

#admin0 {
  line-width: 0.5;
  [zoom >= 5][adm0_left != 'Sierra Leone']{
    text-name:'[adm0_left]';
    text-face-name:@sans_bold;
    text-placement: line;
    text-fill:#222;
    text-size:9;
    text-halo-radius:1.5;
    text-halo-fill:rgba(255,255,255,.8);
    text-dy:12;
    text-min-distance:400;
    text-label-position-tolerance: 5;
    text-avoid-edges:true;
    text-max-char-angle-delta:14;
    }
  ::right[zoom >= 5][adm0_right != 'Sierra Leone']{
    text-name:'[adm0_right]';
    text-face-name:@sans_bold;
    text-placement: line;
    text-fill:#222;
    text-size:9;
    text-halo-radius:1.5;
    text-halo-fill:rgba(255,255,255,.8);
    text-dy:-12;
    text-min-distance:400;
    text-label-position-tolerance: 5;
    text-avoid-edges:true;
    text-max-char-angle-delta:14;
    }
  }


