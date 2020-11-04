import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { connect } from 'react-redux'

const Stack = createStackNavigator()
const bottomTab = createBottomTabNavigator()

import Login from './Login'
import Home from './Home/Home'

class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    {!this.props.auth.isLogin ?(
                        <Stack.Screen options={{headerShown: false}} name="login" component={Login} />
                    ) : (
                        <Stack.Screen name="home" component={Home}/>
                    )
                    }
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.Login
})

export default connect(mapStateToProps)(App)
