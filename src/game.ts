import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import { AmbientSound } from './ambient'
import { handleQuests } from './quests'

let plaza = new Entity()
plaza.addComponent(new GLTFShape('models/plaza-asian.glb'))
plaza.addComponent(
  new Transform({
    position: new Vector3(160, 0, 160),
  })
)

engine.addEntity(plaza)

handleQuests()

let birds = new AmbientSound(
  { position: new Vector3(93, 8, 88) },
  'sounds/forest-asia.mp3',
  0,
  true,
  1
)

let meditate = new AmbientSound(
  { position: new Vector3(255, 20, 225) },
  'sounds/mediate.mp3',
  0,
  true,
  1
)

let water = new AmbientSound(
  { position: new Vector3(145, 0, 145) },
  'sounds/water1.mp3',
  0,
  true,
  1
)

Input.instance.subscribe('BUTTON_DOWN', ActionButton.PRIMARY, true, (e) => {
  log(`pos: `, Camera.instance.feetPosition)
  log(`rot: `, Camera.instance.rotation)
  // if(e.hit){
  //   console.log(
  //     'ENT: ',  engine.entities[e.hit.entityId],
  //     'POS:', engine.entities[e.hit.entityId].getComponent(Transform)
  //   )
  // }
})
