# Adding Custom Block Sounds

::: info
This page assumes you have some knowledge of how to create and modify resource packs. If you are unfamiliar with this, you can [find more information here](https://minecraft.wiki/w/Tutorials/Creating_a_resource_pack).
:::

Custom block sounds are created through resource packs, block sound definitions (also known as `TagPair`'s internally) are defined in the `assets/<namespace>/sounds/blocks/<definition>.json` file.

Example definition: `assets/minecraft/sounds/blocks/sheet_metal.json`:

```json
{
  "enabled": true,
  "group": {
    "break": {
      "sound_id": "sounds:block.sheet_metal.break"
    },
    "fall": {
      "sound_id": "minecraft:block.netherite_block.fall"
    },
    "hit": {
      "sound_id": "minecraft:block.netherite_block.hit"
    },
    "pitch": 1.2,
    "place": {
      "sound_id": "minecraft:block.netherite_block.place"
    },
    "step": {
      "sound_id": "sounds:block.sheet_metal.step"
    },
    "volume": 1.0
  },
  "keys": [
    "minecraft:iron_bars",
    "minecraft:iron_trapdoor",
    "minecraft:hopper",
    "#minecraft:cauldrons"
  ]
}
```

The keys array works similarly to vanilla tags, you can specify individual block identifiers or tags using the hashtag notation, eg: `#minecraft:logs` for all log variants.

## Disabling Specific Sounds

If you want to disable a specific sound, you'll need to create an empty definition file in a resource pack that is loaded higher than the "Fabric Mod" resource pack.

```json
{
  "enabled": false,
  "keys": [],
  "group": {
    "break": { "sound_id": "sounds:block.sheet_metal.break" },
    "fall": { "sound_id": "minecraft:block.netherite_block.fall" },
    "hit": { "sound_id": "minecraft:block.netherite_block.hit" },
    "place": { "sound_id": "minecraft:block.netherite_block.place" },
    "step": { "sound_id": "sounds:block.sheet_metal.step" },
    "pitch": 1.2,
    "volume": 1.0
  }
}
```

Unfortunately, due to the way codecs work, you will need to specify the `group` object even if you are setting `enabled` to `false` - likewise for the `keys` array, but you can leave it empty.
