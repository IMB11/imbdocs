# Fog Definitions

::: warning
It should be noted that structure fog **is not yet implemented within the mod** - therefore any JSON files that are created for structure fog will not have any effect until future updates.
:::

Fog definition files allow you to customize the fog color and density of biomes and structures.

Fog definitions are specified per-biome or per-structure.  
`/assets/{namespace}/fog_definitions/{type}/{identifier}.json`
- `{type}` is the type of object the fog definition should be applied to
  - `biome`
- `{namespace}` is the namespace of the object the fog definition should be applied to
  - E.x. `minecraft`
- `{identifier}` is the identifier of the object the fog definition should be applied to
  - E.x. `forest`

Fog definitions can also be specified per-tag.  
`/assets/{namespace}/fog_definitions/tag/{type}/{identifier}.json`
- `{type}` is the type of object the fog definition should be applied to
  - `biome`
- `{namespace}` is the namespace of the object the fog definition should be applied to
  - E.x. `minecraft`
- `{identifier}` is the identifier of the object the fog definition should be applied to
  - E.x. `is_overworld`

## Editing Fog Definitions

You can must create your own resource pack to edit fog definitions. Consider looking into the default resource pack which can be found in the `/src/main/generated/assets/` folder of the project's source code. (These files are CC-0, you can copy and reuse them as you wish.)

### Example

This example can be found in `/assets/c/fog_definitions/tag/biome/is_desert.json` - it represents the fog definition for the `c:is_desert` biome tag.

```json
{
  "colors": {
    "day": "#D6C699",
    "night": "#BFAA7F"
  },
  "end_multiplier": 1.0,
  "start_multiplier": 1.0
}
```
