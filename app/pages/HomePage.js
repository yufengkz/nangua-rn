import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

import RecommendPage from './RecommendPage'
import SearchPage from './SearchPage'
import FilmReviewPage from './FilmReviewPage'
import MarvellousPage from './MarvellousPage'
import MorePage from './MorePage'

class HomePage extends Component {
    _tabNavigator =  () => {
        return createAppContainer(
            createBottomTabNavigator({
                RecommendPage: {
                    screen: RecommendPage,
                    navigationOptions: {
                        tabBarLabel: '精选',
                        tabBarIcon: ({ tintColor, focused }) => {
                            return <Feather name={'star'} size={26} color={{color: tintColor}} />
                        }
                    }
                },
                SearchPage: {
                    screen: SearchPage,
                    navigationOptions: {
                        tabBarLabel: '搜索',
                        tabBarIcon: ({ tintColor, focused }) => {
                            return <Feather name={'search'} size={26} color={{color: tintColor}} />
                        }
                    }
                },
                FilmReviewPage: {
                    screen: FilmReviewPage,
                    navigationOptions: {
                        tabBarLabel: '影评',
                        tabBarIcon: ({ tintColor, focused }) => {
                            return <MaterialCommunityIcons name={'comment-text-outline'} size={26} color={{color: tintColor}} />
                        }
                    }
                },
                MarvellousPage: {
                    screen: MarvellousPage,
                    navigationOptions: {
                        tabBarLabel: '精彩',
                        tabBarIcon: ({ tintColor, focused }) => {
                            return <MaterialCommunityIcons name={'movie-roll'} size={26} color={{color: tintColor}} />
                        }
                    }
                },
                MorePage: {
                    screen: MorePage,
                    navigationOptions: {
                        tabBarLabel: '更多',
                        tabBarIcon: ({ tintColor, focused }) => {
                            return <FontAwesome name={'navicon'} size={26} color={{color: tintColor}} />
                        }
                    }
                },
            })
        )
    }
    render(){
        const Tab = this._tabNavigator()
        return <Tab />
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaeaea',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default HomePage