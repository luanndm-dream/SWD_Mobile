module.exports = 
  {
    "presets": ['module:metro-react-native-babel-preset'],
    "plugins": [
      
      [
        
        'module-resolver',
        {
          root: ['.'],
          "extensions": [ ".jsx", ".ts", ".tsx",".svg"],
          alias: {
            tests: ['./tests/'],
            "@components": "./src/components/",
            "@redux": "./src/redux",
            "@navigation": "./src/navigation/",
            "@/styles": "./src/styles",
            "@/icons": "./src/assets/icons/",
            "@/data": "./src/data/",
          }
        }
      ]
    ]
  }
