import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "IMB11 Documentation",
  description: "Documentation for all of IMB11's projects.",
  cleanUrls: true,
  themeConfig: {

    logo: "https://github.com/IMB11.png",

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: 'https://imb11.dev/' },
      { text: 'Modrinth', link: 'https://modrinth.com/user/mineblock11' },
      { text: 'Curseforge', link: 'https://www.curseforge.com/members/itsmineblock11/projects' },
    ],

    
    sidebar: [
      {
        text: "Sounds",
        link: "/sounds/",
        items: [
          {
            text: "Data and Resources",
            items: [
              {
                text: "Adding Custom Block Sounds",
                link: "/sounds/data/custom-block-sounds"
              },
              {
                text: "Changing/Adding Dynamic Sounds",
                link: "/sounds/data/dynamic-sounds"
              },
              {
                text: "Using Custom Sound Events",
                link: "/sounds/data/custom-sound-events"
              }
            ]
          },
          {
            text: "Configuration",
            items: [
              {
                text: "Configuring Sound Events",
                link: "/sounds/config/configuring-sound-events"
              },
              {
                text: "Changing Pitch and Volume",
                link: "/sounds/config/configuring-pitch-volume"
              }
            ]
          }
        ]
      },
      {
        text: "SkinShuffle",
        link: "/skinshuffle/",
        items: [
          {
            text: "Hot Reloading Skins",
            link: "/skinshuffle/hot-reloading-skins"
          },
          {
            text: "Skin Preset Editor",
            link: "/skinshuffle/skin-preset-editor"
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/IMB11' },
      { icon: 'discord', link: 'https://discord.imb11.dev/' },
    ]
  }
})
