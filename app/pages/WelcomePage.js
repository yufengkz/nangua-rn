import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import NavigationUtil from '../navigators/NavigationUtil'

class WelcomePage extends Component {
    componentDidMount(){
        this.timer = setTimeout(() => {
            NavigationUtil.resetToHome(this.props)
        }, 2000)
    }
    componentWillUnmount(){
        this.timer && clearTimeout(this.timer)
    }
    render(){
        return (
            <View style={styles.container}>
                <Text>WelcomePage</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default WelcomePage