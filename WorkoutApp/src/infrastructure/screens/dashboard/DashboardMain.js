import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const DashboardMain = () => {
    return(
        // Dashboard Title
        <View style={{flex: 1, backgroundColor: "#3B3B3B"}}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingLeft: 17,
                paddingTop: 5,
                paddingBottom: 20,
                paddingRight: 17}}>
                <Ionicons 
                    style={{color: '#F7F7F7', fontWeight: 600}} 
                    name="ios-arrow-back"
                    size={24} 
                    color="black" />
                <Text style={{color: '#F7F7F7', fontSize: 24, fontWeight: 600}}>
                    Dashboardd</Text>
                <Ionicons 
                    style={{color: '#F7F7F7'}}
                    name="settings-outline"
                    size={24} 
                    color="white" />
            </View>
            {/* Calendar */}
            <ScrollView>
                <View style={{backgroundColor: '#474747'}}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingTop: 15,
                        paddingRight: 19,
                        paddingBottom: 17}}>
                    <Text style={{
                        color: '#F7F7F7',
                        alignSelf: 'center',
                        fontSize: 16,
                        fontWeight: 600,
                        paddingLeft: 11}}
                        >Today, 7 Dec 2023
                    </Text> 
                    <Feather 
                        style={{alignSelf: 'center'}}
                        name="calendar" 
                        size={24}  
                        color="#B080FF"/>
                    </View>
                    {/* Days of Week */}
                    <View style={{flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingBottom: 20,
                        paddingLeft: 4,
                        paddingRight: 4
                        }}>
                        <View style={{
                            height: 80,
                            borderWidth: 2, 
                            borderColor: '#A5A5A5',
                            backgroundColor: "#2E2E2E",
                            borderRadius: 20,
                            alignItems: 'center',
                            justifyContent: 'space-evenly',
                            }}>
                            <Text style={{color: "#F7F7F7", 
                                fontSize: 16,
                                fontWeight: 600,
                                padding: 5}}>
                                SUN
                            </Text>
                            <Text
                                style={{color: "#F7F7F7", fontSize: 16,
                                fontWeight: 600}}
                                >4
                            </Text>
                        </View>
                        <View style={{
                            height: 80,
                            borderWidth: 2, 
                            borderColor: '#A5A5A5',
                            backgroundColor: "#B080FF",
                            borderRadius: 20,
                            alignItems: 'center',
                            justifyContent: 'space-evenly'
                            }}>
                            <Text 
                                style={{color: "#F7F7F7", 
                                fontSize: 16,
                                fontWeight: 600,
                                padding: 5
                                }}
                                >MON
                            </Text>
                            <Text
                                style={{color: "#F7F7F7", fontSize: 16,
                                fontWeight: 600}}
                                >4
                            </Text>
                        </View>
                        <View style={{
                            height: 80,
                            borderWidth: 2, 
                            borderColor: '#A5A5A5',
                            backgroundColor: "#2E2E2E",
                            borderRadius: 20,
                            alignItems: 'center',
                            justifyContent: 'space-evenly'
                            }}>
                            <Text 
                                style={{color: "#F7F7F7", 
                                fontSize: 16,
                                fontWeight: 600,
                                padding: 5
                                }}>TUE</Text>
                            <Text
                                style={{color: "#F7F7F7", fontSize: 16,
                                fontWeight: 600}}
                            >5</Text>
                        </View>
                        <View style={{
                            height: 80,
                            borderWidth: 2, 
                            borderColor: '#A5A5A5',
                            backgroundColor: "#B080FF",
                            borderRadius: 20,
                            alignItems: 'center',
                            justifyContent: 'space-evenly'
                            }}>
                            <Text style={{
                                color: "#F7F7F7", 
                                fontSize: 16,
                                fontWeight: 600,
                                padding: 5
                                }}>WED</Text>
                            <Text style={{color: "#F7F7F7", fontSize: 16,fontWeight: 600}}
                                >6
                            </Text>
                        </View>
                        <View style={{
                            height: 80,
                            borderWidth: 2, 
                            borderColor: '#A5A5A5',
                            backgroundColor: "#FF6E00",
                            borderRadius: 20,
                            alignItems: 'center',
                            justifyContent: 'space-evenly'
                            }}>
                            <Text 
                                style={{color: "#F7F7F7", 
                                fontSize: 16,
                                fontWeight: 600,
                                padding: 5
                                }}>THU</Text>
                            <Text
                                style={{color: "#F7F7F7", fontSize: 16,
                                fontWeight: 600}}
                            >7</Text>
                        </View>
                        <View style={{
                            height: 80,
                            borderWidth: 2, 
                            borderColor: '#A5A5A5',
                            backgroundColor: "#2E2E2E",
                            borderRadius: 20,
                            alignItems: 'center',
                            justifyContent: 'space-evenly'
                            }}>
                            <Text 
                                style={{color: "#F7F7F7", 
                                fontSize: 16,
                                fontWeight: 600,
                                padding: 5
                                }}>SUN</Text>
                            <Text
                                style={{color: "#F7F7F7", fontSize: 16,
                                fontWeight: 600}}
                            >4</Text>
                        </View>
                        <View style={{
                            height: 80,
                            borderWidth: 2, 
                            borderColor: '#A5A5A5',
                            backgroundColor: "#2E2E2E",
                            borderRadius: 20,
                            alignItems: 'center',
                            justifyContent: 'space-evenly'
                            }}>
                            <Text 
                                style={{color: "#F7F7F7", 
                                fontSize: 16,
                                fontWeight: 600,
                                padding: 5
                                }}>SUN</Text>
                            <Text
                                style={{color: "#F7F7F7", fontSize: 16,
                                fontWeight: 600}}
                            >4</Text>
                        </View>
                    </View>
                </View>
                {/* Current */}
                <View style={{flexDirection: "row", justifyContent: "space-between", 
                alignItems: 'center',
                paddingTop: 20,
                paddingLeft: 27,
                paddingRight: 19,
                paddingBottom: 20
                }}>
                    <Text style={{color: "#FFF", 
                                fontSize: 20,
                                fontWeight: 600,
                                
                                }}>Current</Text>
                    <Ionicons name="add" size={30} color="#FF9346" />
                </View>
                {/* Current Cards */}
                <View 
                    style={{
                        backgroundColor: "#474747", 
                        margin: 10,
                        marginLeft: 6,
                        borderWidth: 1,
                        borderColor: "#A5A5A5",
                        borderRadius: 20, 
                        padding: 10, 
                        paddingLeft: 20, 
                        marginBottom: 5}}>
                    <View style={{paddingBottom: 0}}>
                        <Text style={{color: "#F7F7F7", fontSize: 16, fontWeight: 600}}>The Ultimate Upper Body</Text>
                    </View>
                    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: 'center'}}>
                        <Text style={{color: "#F7F7F7", fontSize: 14, fontWeight: 600}}>Beginner</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                            <Text style={{color: '#F7F7F7', paddingRight: 27, fontSize: 14, fontWeight: 600}}>15m 45sec</Text>
                            <MaterialIcons name="arrow-forward-ios" size={24} color="#FF9346" style={{alignSelf: 'center'}}/>
                        </View> 
                    </View>
                    <View style={{paddingTop: 10, paddingBottom: 10}}>
                        <Text style={{color: '#F7F7F7', fontSize: 14, fontWeight: 600, }}>MON, WED, FRI</Text>
                    </View>
                </View>
                {/* Current Cards */}
                <View 
                    style={{   
                        backgroundColor: "#474747", 
                        color: 'F7F7F7', 
                        margin: 10,
                        marginLeft: 6,
                        borderWidth: 1,
                        borderColor: "#A5A5A5",
                        borderRadius: 20, 
                        padding: 10, 
                        paddingLeft: 20, 
                        marginBottom: 5}}>
                    <View style={{paddingBottom: 0}}>
                        <Text style={{color: "#F7F7F7", fontSize: 16, fontWeight: 600, paddingBottom: 0, marginBottom: 0}}>The Ultimate Upper Body</Text>
                    </View>
                    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: 'center'}}>
                        <Text style={{color: "#F7F7F7", fontSize: 14, fontWeight: 600}}>Beginner</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                            <Text style={{color: '#F7F7F7', paddingRight: 27, fontSize: 14, fontWeight: 600}}>15m 45sec</Text>
                            <MaterialIcons name="arrow-forward-ios" size={24} color="#FF9346" style={{alignSelf: 'center'}}/>
                        </View> 
                    </View>
                    <View style={{paddingTop: 10, paddingBottom: 10}}>
                        <Text style={{color: '#F7F7F7', fontSize: 14, fontWeight: 600, }}>MON, WED, FRI</Text>
                    </View>
                </View>
                {/* Goals */}
                <View 
                    style={{
                        flexDirection: "row", 
                        justifyContent: "space-between", 
                        alignItems: 'center',
                        paddingTop: 20,
                        paddingLeft: 27,
                        paddingRight: 19,
                        paddingBottom: 20}}>
                    <Text 
                        style={{
                            color: "#FFF", 
                            fontSize: 20,
                            fontWeight: 600}}
                        >Goals</Text>
                    <Ionicons name="add" size={30} color="#FF9346" />
                </View>
                {/* Goal Cards */}
                <View 
                    style={{
                        backgroundColor: "#474747", 
                        margin: 6,
                        marginLeft: 6,
                        borderRadius: 20, 
                        borderWidth: 1,
                        borderColor: "#A5A5A5",
                        padding: 10, 
                        paddingBottom: 10, 
                        paddingLeft: 20}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{color: "#F7F7F7", fontSize: 16, fontWeight: 600, paddingBottom: 0, marginBottom: 0}}>Goal: Name</Text>
                        <Text style={{color: "#F7F7F7", fontSize: 14, fontWeight: 600, paddingBottom: 0, marginBottom: 0}}>220 lbs</Text>
                    </View>
                    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: 'center'}}>
                        <Text style={{color: "#F7F7F7", fontSize: 14, fontWeight: 600}}>Description of 40 characters</Text>
                    </View>
                    <View 
                        style={{
                            paddingTop: 10, 
                            flexDirection: 'row', 
                            gap: 5, 
                            alignItems: 'center', 
                            justifyContent: 'space-between'}}>
                            <LinearGradient
                                colors={["#46D61A", "#C7F3BA", "rgba(217, 217, 217, 0.00)"]}
                                locations={[0, 0.5104, 0.9531]}
                                start={{ x: 0, y: 0.5 }}
                                end={{ x: 1, y: 0.5 }}  
                                style={{ borderRadius: 10, height: 25, width: 243, borderWidth: 2, borderColor: "#A5A5A5" }}
                            >
                            </LinearGradient>
                            <View>
                                <Text 
                                style={{
                                    color: 'white', 
                                    alignSelf: 'center', 
                                    borderWidth: 1, 
                                    borderColor: "#A5A5A5", 
                                    backgroundColor: "#2E2E2E", 
                                    textAlign: 'center', 
                                    padding: 5, 
                                    paddingLeft: 10, 
                                    paddingRight: 10, 
                                    fontSize: 14, 
                                    fontWeight: 600}}
                                >0</Text>
                            </View>
                            <View 
                                style={{
                                    padding: 1,
                                    borderWidth: 1, 
                                    borderColor: "#A5A5A5", 
                                    borderRadius: 100, 
                                    backgroundColor: "#2E2E2E", 
                                    
                                    }}>
                                <Ionicons name="add" size={25} color="#FFF"/>
                            </View>
                    </View>
                </View>
                {/* Challenges */}
                <View style={{flexDirection: "row", justifyContent: "space-between", 
                alignItems: 'center',
                paddingTop: 20,
                paddingLeft: 27,
                paddingRight: 19,
                paddingBottom: 20
                }}>
                    <Text style={{color: "#FFF", 
                        fontSize: 20,
                        fontWeight: 600,
                        }}>Challenges</Text>
                    <Ionicons name="add" size={30} color="#FF9346" />
                </View>
                {/* Challenges Cards */}
                <View 
                    style={{
                        backgroundColor: "#474747", 
                        margin: 6,
                        marginLeft: 6,
                        borderRadius: 20, 
                        borderWidth: 1,
                        borderColor: "#A5A5A5",
                        padding: 10, 
                        paddingBottom: 10, 
                        paddingLeft: 20}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{color: "#F7F7F7", fontSize: 16, fontWeight: 600, paddingBottom: 0, marginBottom: 0}}>30 day Streak</Text>
                        <Text style={{color: "#F7F7F7", fontSize: 14, fontWeight: 600, paddingBottom: 0, marginBottom: 0}}>Workout name  </Text>
                    </View>
                    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: 'center'}}>
                        <Text style={{color: "#F7F7F7", fontSize: 14, fontWeight: 600}}>Description of 40 characters</Text>
                    </View>
                    <View 
                        style={{
                            paddingTop: 10, 
                            flexDirection: 'row', 
                            gap: 5, 
                            alignItems: 'center', 
                            justifyContent: 'space-between'}}>
                            <LinearGradient
                                colors={["#46D61A", "#C7F3BA", "rgba(217, 217, 217, 0.00)"]}
                                locations={[0, 0.5104, 0.9531]}
                                start={{ x: 0, y: 0.5 }}
                                end={{ x: 1, y: 0.5 }}  
                                style={{ borderRadius: 10, height: 25, width: 243, borderWidth: 2, borderColor: "#A5A5A5" }}
                            >
                            </LinearGradient>
                            <View 
                                style={{
                                    padding: 1,
                                    marginLeft: 15,
                                    borderWidth: 1, 
                                    borderColor: "#A5A5A5", 
                                    borderRadius: 100, 
                                    backgroundColor: "#2E2E2E"}}>
                                <Ionicons name="remove" size={25} color="#FFF"/>
                            </View>
                            <View 
                                style={{
                                    padding: 1,
                                    borderWidth: 1, 
                                    borderColor: "#A5A5A5", 
                                    borderRadius: 100, 
                                    backgroundColor: "#2E2E2E", 
                                    
                                    }}>
                                <Ionicons name="add" size={25} color="#FFF"/>
                            </View>
                    </View>
                </View>
                <View 
                    style={{
                        backgroundColor: "#474747", 
                        margin: 6,
                        marginLeft: 6,
                        borderWidth: 1,
                        borderColor: "#A5A5A5",
                        borderRadius: 20, 
                        padding: 10, 
                        paddingBottom: 10, 
                        paddingLeft: 20}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{color: "#F7F7F7", fontSize: 16, fontWeight: 600, paddingBottom: 0, marginBottom: 0}}>60 day Streak</Text>
                        <Text style={{color: "#F7F7F7", fontSize: 14, fontWeight: 600, paddingBottom: 0, marginBottom: 0}}>Workout name  </Text>
                    </View>
                    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: 'center'}}>
                        <Text style={{color: "#F7F7F7", fontSize: 14, fontWeight: 600}}>Description of 40 characters</Text>
                    </View>
                    <View 
                        style={{
                            paddingTop: 10, 
                            flexDirection: 'row', 
                            gap: 5, 
                            alignItems: 'center', 
                            justifyContent: 'space-between'}}>
                            <LinearGradient
                                colors={["#46D61A", "#C7F3BA", "rgba(217, 217, 217, 0.00)"]}
                                locations={[0, 0.5104, 0.9531]}
                                start={{ x: 0, y: 0.5 }}
                                end={{ x: 1, y: 0.5 }}  
                                style={{ borderRadius: 10, height: 25, width: 243, borderWidth: 2, borderColor: "#A5A5A5" }}
                            >
                            </LinearGradient>
                            
                            <View 
                                style={{
                                    padding: 1,
                                    marginLeft: 15,
                                    borderWidth: 1, 
                                    borderColor: "#A5A5A5", 
                                    borderRadius: 100, 
                                    backgroundColor: "#2E2E2E", 
                                    
                                    }}>
                                <Ionicons name="remove" size={25} color="#FFF"/>
                            </View>
                            <View 
                                style={{
                                    padding: 1,
                                    borderWidth: 1, 
                                    borderColor: "#A5A5A5", 
                                    borderRadius: 100, 
                                    backgroundColor: "#2E2E2E", 
                                    
                                    }}>
                                <Ionicons name="add" size={25} color="#FFF"/>
                            </View>
                    </View>
                </View>
            </ScrollView>
        </View>

        
    )
}

export default DashboardMain