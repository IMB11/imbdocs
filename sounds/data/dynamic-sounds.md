# Changing/Adding Dynamic Sounds

::: info
This page assumes you have some knowledge of how to create and modify resource packs. If you are unfamiliar with this, you can [find more information here](https://minecraft.wiki/w/Tutorials/Creating_a_resource_pack).
:::

Dynamic sounds are created through resource packs. Currently, Sounds has support for creating dynamic sounds based on the following contexts:

- Items - `/assets/<namespace>/sounds/items/<definition>.json` - [Examples](https://github.com/IMB11/Sounds/tree/main/src/main/generated/assets/minecraft/sounds/items)
- HandledScreens - `/assets/<namespace>/sounds/screens/<definition>.json` - [Examples](https://github.com/IMB11/Sounds/tree/main/src/main/generated/assets/minecraft/sounds/screens)

These definition files work similarly to vanilla tags, but with a few differences, you must define a sound event and optionally pitch and volume for the sound. The sound event is the identifier of the sound event you want to play when the sound is triggered.

## Items

An example of a dynamic item sound definition, `assets/minecraft/sounds/items/trial_keys.json`:

```json
{
  "keys": [
    "minecraft:trial_key",
    "minecraft:ominous_trial_key"
  ],
  "pitch": 1.0,
  "soundEvent": "minecraft:block.trial_spawner.spawn_item_begin",
  "volume": 0.4
}
```

The values within the `keys` array are the item identifiers that the sound will be played for, you can also specify tags within the array using the hashtag notation, eg: `#minecraft:logs` for all log variants.

This example specifies pitch and volume, therefore they will override the player's configuration values.

## HandledScreens

::: info
The creative inventory and survival inventory are not considered handled screens, you cannot add sounds to these screens.
:::

HandledScreens are essentially GUIs that are opened by the player, such as the crafting table.

An example of a dynamic screen sound definition, `assets/minecraft/sounds/screens/furnaces.json`:

```json
{
  "keys": [
    "minecraft:furnace",
    "minecraft:blast_furnace"
  ],
  "soundEvent": "minecraft:block.fire.ambient"
}
```

This example does not specify pitch or volume, so the values provided by the player's configuration will be used.
