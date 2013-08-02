@water: #333;

#lakes {
  polygon-fill: @water;
  line-width: 0;
  }


#rivers {
  polygon-fill: @water;
  line-width: 0.4;
  line-color: darken(@water, 5%);
  comp-op: multiply;
  [zoom <= 4] { polygon-opacity: 0; line-opacity: 0; }
  [zoom = 5] { polygon-opacity: 0; line-opacity: 0; }
  [zoom = 6] { polygon-opacity: 0; line-opacity: 0; }
  [zoom = 7] { polygon-opacity: 0; line-opacity: 0; }
  [zoom = 8] { polygon-opacity: 0.2; line-opacity: 0.2; }
  [zoom = 9] { polygon-opacity: 0.2; line-opacity: 0.3; }
  [zoom >= 10] { polygon-opacity: 0.2; line-opacity: 0.3; }
  }

#rivers_fine [zoom >= 8]{
  line-opacity: 0.3;
  line-width: 0.4;
  line-color: darken(@water, 5%);
  comp-op: multiply;
  }

#ocean {
  polygon-fill: @water;
  line-width: 0;
  }