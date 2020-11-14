import React from 'react'
import { StyleSheet, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Text, Card, CardItem, Body, Button, Right } from 'native-base'

import BigBanner from '../../assets/images/BigBanner.png'
import photo from '../../assets/images/photo.png'
import BellIcon from '../../assets/images/bell.svg'

const Home = ({ navigation }) => {
    return (
        <>
            <ScrollView>
                <View style={styles.banner}>
                    <Image style={styles.image} source={BigBanner} />
                    <Button  style={styles.notifIcon} onPress={()=>navigation.navigate("Notification")}>
                        <BellIcon/>
                    </Button>
                    <Text style={styles.textBanner}>Fashion Sale</Text>
                </View>
                <View style={styles.parent}>
                    <Text style={styles.bigText}>New</Text>
                    <View style={styles.tagText}>
                        <Text note>You never seen it before</Text>
                        <Right />
                        <Text>View All</Text>
                    </View>

                    <Text style={styles.bigText}>Popular</Text>
                    <View style={styles.tagText}>
                        <Text note>You never seen it before</Text>
                        <Right />
                        <Text>View All</Text>
                    </View>
                    
                </View>
            </ScrollView>
        </>
    )
}

export default Home

const styles = StyleSheet.create({
    banner:{
        position: 'relative'
    },
    image: {
        height: 450,
    },
    notifIcon:{
        top: 40,
        right: 25,
        position: 'absolute',
        width: 45,
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: 'rgba(225,220,220,0.2)'
    },
    textBanner:{
        fontSize: 75,
        fontWeight: 'bold',
        color: '#FFFFFF',
        position: 'absolute',
        bottom: 50,
        left: 15
    },
    parent: {
        paddingLeft: 10,
        backgroundColor: '#FFFFFF'
    },
    bigText: {
        fontSize: 35,
        fontWeight: 'bold'
    },
    tagText: {
        flexDirection: 'row',
        marginRight: 10
    }
})

