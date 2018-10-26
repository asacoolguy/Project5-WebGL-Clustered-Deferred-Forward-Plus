import TextureBuffer from './textureBuffer';

export const MAX_LIGHTS_PER_CLUSTER = 100;

export default class BaseRenderer {
  constructor(xSlices, ySlices, zSlices) {
    // Create a texture to store cluster data. Each cluster stores the number of lights followed by the light indices
    this._clusterTexture = new TextureBuffer(xSlices * ySlices * zSlices, MAX_LIGHTS_PER_CLUSTER + 1);
    this._xSlices = xSlices;
    this._ySlices = ySlices;
    this._zSlices = zSlices;
  }

  updateClusters(camera, viewMatrix, scene) {
    // TODO: Update the cluster texture with the count and indices of the lights in each cluster
    // This will take some time. The math is nontrivial...

    let index = 0;
    // loop through each light to see what cluster it contains
    for (let i = 0; i < NUM_LIGHTS; ++i) {
      // first translate the light to NDC screen space 

      // then find this light's AABB 
      
      // see what clusters this AABB overlaps

    }

    // TODO: need to figure out better way to do this. maybe loop through lights -> xyz instead of xyz-> lights
    
    for (let z = 0; z < this._zSlices; ++z) {
      for (let y = 0; y < this._ySlices; ++y) {
        for (let x = 0; x < this._xSlices; ++x) {
          let i = x + y * this._xSlices + z * this._xSlices * this._ySlices;
          // Reset the light count to 0 for every cluster
          this._clusterTexture.buffer[this._clusterTexture.bufferIndex(i, 0)] = 0;

          // loop through each light and check if it is
          for (let i = 0; i < NUM_LIGHTS; ++i) {
            // if light is in, pack it in the clusterTexture
            this._lightTexture.buffer[this._lightTexture.bufferIndex(i, 0) + 0] = scene.lights[i].position[0];
          }
        }
      }
    }

    this._clusterTexture.update();
  }
}