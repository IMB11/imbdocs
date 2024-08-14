# Packed Resources API

The Packed Resources API is a part of the M.R.U library that allows you to distribute a "default" resource pack with your mod and then place it in an external location, such as the `.minecraft` folder, allowing users to easily edit the resource pack without having to extract it from the mod jar - it also allows you to create various editors for the resource pack due to the fact it's now external and editable using normal file system tools.

## Usage

Ensure that any resources you want unpacked are located within a folder called `packed` within your mod's resources folder. The `packed` folder should be structured the same as a normal resource pack, with the root folder being `assets`. **You do not need to create a pack.mcmeta, MRU will do this for you.**

::: info
**If you want to use data generation along with this system, you should use MRU's `DatagenFinishedCallback` event alongside the `Packer.pack` method.**
:::

Once you've set up your resources, you should register your resources using the `Unpacker.register` method. This method takes in a class and a `UnpackedResourcePack` instance. The class should be a class that is within your mod.

::: warning
**It's recomended to use this at the earliest stage possible, eg; in `onInitialize` for Fabric, or in your Mod's constructor for \[Neo\]Forge.**
:::

An example of this can be seen below:

```java
Unpacker.register(MRUFabric.class, new UnpackedResourcePack("mru", LoaderUtils.getGameDir().resolve("mru"), "mru", "This is a readme of what this resource pack is for. You should include an explaination of how to use it here for users."));
```

This will register the `mru` resource pack to be unpacked to the `.minecraft/mru` folder. The `mru` folder will be created if it doesn't exist, and the resource pack will be unpacked to it. When the game reloads resources, MRU will automatically register the `UnpackedResourcePack` for you.