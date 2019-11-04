### 初始化项目
```
react-native init nangua_rn
```

### 项目配置
```
# 1.安装导航依赖
yarn add react-navigation
yarn add react-navigation-stack
yarn add react-native-gesture-handler
yarn add react-native-reanimated 
yarn add react-navigation-tabs

# 2.安装图标库
yarn add react-native-vector-icons
react-native link react-native-vector-icons
# 将代码复制到ios/nangua_rn/info.plist
<key>UIAppFonts</key>
<array>
  <string>AntDesign.ttf</string>
  <string>Entypo.ttf</string>
  <string>EvilIcons.ttf</string>
  <string>Feather.ttf</string>
  <string>FontAwesome.ttf</string>
  <string>FontAwesome5_Brands.ttf</string>
  <string>FontAwesome5_Regular.ttf</string>
  <string>FontAwesome5_Solid.ttf</string>
  <string>Foundation.ttf</string>
  <string>Ionicons.ttf</string>
  <string>MaterialIcons.ttf</string>
  <string>MaterialCommunityIcons.ttf</string>
  <string>SimpleLineIcons.ttf</string>
  <string>Octicons.ttf</string>
  <string>Zocial.ttf</string>
</array>

# 3.ios文件目录下
pod install
```