//全局导航类跳转工具
export default class NavigationUtil {
    //重置到首页
    static resetToHome (params){
        const {navigation} = params
        navigation.navigate('Main')
    }
}