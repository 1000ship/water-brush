const PIXI = require("pixi.js");
const App = require("./core/app");

const app = new App({
  root: document.body,
  backgroundColor: 0x1099bb,
})
const graphics = new PIXI.Graphics();
graphics.filters = [ new PIXI.filters.BlurFilter(16, 8) ]

let points = [[100,100], [200,300]]

app.stage.addChild(graphics);
app.ticker.add( delta => {
  const {x, y} = app.renderer.plugins.interaction.mouse.global;

  points.push( [x,y] )
  if( points.length > 100 )
    points.splice( 0, 1 )
  
  graphics.clear()
  graphics.moveTo( points[0][0], points[0][1] )
  for( let i = 0; i < points.length; ++i )
  {
    graphics.lineStyle( 120 - (i / 10) * 10, 0xFFFFFF, i / 100, 0.5)
    graphics.lineTo( points[i][0], points[i][1] )
  }
})
