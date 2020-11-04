import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// import component
import BottomNavigation from '../components/BottomNavigation'

//import sreens page
import SignUp from "../screens/SignUp";
import Login from "../screens/Login";
import Home from '../screens/Home';
import Splash from '../screens/Splash';
import Shop from '../screens/Shop';
import Bag from '../screens/Bag';
import Favorites from '../screens/Favorites';
import Profile from '../screens/Profile'
import DetailProduct from '../screens/DetailProduct'
import MyOrder from '../screens/MyOrder'
import Notification from '../screens/Notification'
import Setting from '../screens/Setting'
import Success from '../screens/Success'
import Search from '../screens/Search'
import ShippingAddress from '../screens/ShippingAddress'
import AddAddress from '../screens/AddAddress'
import ChangeAddress from '../screens/ChangeAddress'
import CheckOut from '../screens/CheckOut'
import Catalog from '../screens/Catalog'

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigation {...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Shop" component={Shop} />
            <Tab.Screen name="Bag" component={Bag} />
            <Tab.Screen name="Favorites" component={Favorites} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="DetailProduct" component={DetailProduct} options={{ headerShown: false }} />
            <Stack.Screen name="MyOrder" component={MyOrder} options={{ headerShown: false }} />
            <Stack.Screen name="ShippingAddress" component={ShippingAddress} options={{ headerShown: false }} />
            <Stack.Screen name="Setting" component={Setting} options={{ headerShown: false }} />
            <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
            <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
            <Stack.Screen name="Success" component={Success} options={{ headerShown: false }} />
            <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
            <Stack.Screen name="AddAddress" component={AddAddress} options={{ headerShown: false }} />
            <Stack.Screen name="ChangeAddress" component={ChangeAddress} options={{ headerShown: false }} />
            <Stack.Screen name="CheckOut" component={CheckOut} options={{ headerShown: false }} />
            <Stack.Screen name="Catalog" component={Catalog} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})

