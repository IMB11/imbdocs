# M.R.U

Mineblocks' Repeated Utilities (or M.R.U for short) is a library mod that contains a bunch of utilities that are used in multiple of my mods. It is a required dependency for the majority of my mods.

## Features

- [**Packed Resources**](./packed-resources.md): Allows you to distribute a "default" resource pack with your mod and then place it in an external location, such as the `.minecraft` folder, allowing users to easily edit the resource pack without having to extract it from the mod jar - it also allows you to create various editors for the resource pack without having to extract it from the mod jar.
- [**YACL Helpers**](./yacl-helpers.md): A set of utility methods that allow rapid creation of manual YACL configuration screens without the need to use annotations or autogen.
- More coming soon!

## Installation

Add the following to your repositories block within `build.gradle`:

```groovy
maven {
    name = "IMB11"
    url = "https://maven.imb11.dev/releases"
}
```

And add the following to your dependencies block:

```groovy
modImplementation "dev.imb11:mru:${project.mru_version}"
```

Replace `${project.mru_version}` with the version of M.R.U you want to use. You can find the latest version on the [Maven Repository](https://maven.imb11.dev/#/releases/dev/imb11/mru).