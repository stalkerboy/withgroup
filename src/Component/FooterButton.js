import React, {Component} from 'react';
import {TouchableOpacity,
        Text,
        Image,
        StyleSheet,
        } from 'react-native';

class FooterButton extends Component{
    render(){
        return(
            <TouchableOpacity
                style={[styles.ButtonContainer, this.props.style]}
                onPress={this.props.onPress}>
                <Image 
                       style={styles.footerButton}/>
                <Text style={styles.footerButtonText}>
                    {this.props.buttonText}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    footerButton:{
        width:200,
        height:50,
        borderRadius:25,
        backgroundColor:'#696969',
        alignContent:'center',
        justifyContent:'center',
        
    },
    footerButtonText:{
        position:'absolute',
        color:'white',
        fontSize:25,
        alignSelf:'center',
        textAlign:'center'
    },
    ButtonContainer:{
        alignItems:'center',
        justifyContent:'center'
    }
})

export default FooterButton;