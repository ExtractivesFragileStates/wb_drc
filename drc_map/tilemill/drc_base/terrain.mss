Map { background-color:white; }

#terrain [zoom >= 5]{
  raster-opacity:0.4;
  raster-scaling:lanczos;
  raster-colorizer-default-mode: linear;
  raster-colorizer-default-color: transparent;
  raster-colorizer-stops: 
    stop(0, #000)
    stop(170, #666)
    stop(180, #fff);
  }

#terrain_low_zoom [zoom <= 6]{
  raster-opacity:0.4;
  raster-scaling:lanczos;
}