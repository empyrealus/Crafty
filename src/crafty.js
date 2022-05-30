// Define common features
var Crafty = require('./crafty-common.js')();

// Define features only available in browser environment

Crafty.extend(require('./core/loader'));
Crafty.extend(require('./inputs/dom-events'));


// I didn't test this, you could build upon this logic for some dynamic pre_reqs

// Needs to be required before any specific layers are
// Requirements List
const preReqs = ["'./graphics/layers'","'./graphics/canvas'","'./graphics/canvas-layer'","'./graphics/webgl'","'./graphics/webgl-layer'","'./graphics/color'","'./graphics/dom'","'./graphics/dom-helper'","'./graphics/dom-layer'","'./graphics/drawing'","'./graphics/gl-textures'","'./graphics/renderable'","'./graphics/html'","'./graphics/image'","'./graphics/particles'","'./graphics/sprite-animation'","'./graphics/sprite'","'./graphics/text'","'./graphics/viewport'","'./isometric/diamond-iso'","'./isometric/isometric'"]

load_requirements.apply(this, preReqs);

function load_requirements()
{
 for(let i in preReqs)
 {
  try{
    require(preReqs[i]);
   }
   catch(e){
      //do something with the error, if you wish...
    }
   finally{continue;}
 }
}



// Edit** you could include all of this in the above loop.
// Needs to be required before any specific inputs are
require('./inputs/util');
require('./inputs/device');
require('./inputs/keyboard');
require('./inputs/lifecycle');
require('./inputs/mouse');
require('./inputs/pointer');
require('./inputs/touch');

require('./sound/sound');

require('./debug/debug-layer');

// Define some aliases for renamed properties
require('./aliases').defineAliases(Crafty);

if (window) window.Crafty = Crafty;

module.exports = Crafty;
