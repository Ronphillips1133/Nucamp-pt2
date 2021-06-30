import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        return (
            <ScrollView wrapperStyle={{ margin: 20 }}>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                    <Card title='Contact Information'>
                        <Text>
                            1 Nucamp Way {"\n"}
                            Seattle, WA 98001 {"\n"}
                            U.S.A {"\n"}
                        </Text>
                        <Text>
                            Phone: 1-206-555-1234 {"\n"}
                            Email: campsites@nucamp.co
                        </Text>
                        <Button
                            title="Send Email"
                            buttonStyle={{ backgroundColor: '#5637DD', margin: 40 }}
                            icon={<Icon
                                name='envelope-o'
                                type='font-awesome'
                                color='#FFF'
                                iconStyle={{ marginRight: 10 }}
                            />}
                            onPress={() => this.sendMail()}
                        />
                    </Card>
                </Animatable.View>
            </ScrollView>
        );
    }

}

export default Contact; 