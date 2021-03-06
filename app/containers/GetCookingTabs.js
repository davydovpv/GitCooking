import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image} from 'react-native';
// import Icon from 'react-native-vector-icons/Foundation';
import { Foundation, Ionicons, Feather, Octicons, Entypo} from '@expo/vector-icons';
import TabNavigator from 'react-native-tab-navigator';
import {Platform} from 'react-native';
import styled from 'styled-components/native';
import navigators from "./Navigators";
import { connect } from "react-redux"
import switchTab from "../actions/SwitchTabs";
import refreshHome from "../actions/RefreshHome";
import retrieveProfile from "../actions/RetrieveProfile";
import retrieveStuff from "../actions/RetrieveStuff";
const Icon = <Foundation name="home" size={24} color="white"/>;

class GetCookingTabs extends React.Component{
  constructor(props){
    super(props);
  }
  componentWillMount(){
      this.props.onProfileRefresh();
  }
    displayText(text){
      if(this.props.tab === text){
        return text;
      }
      return "";
    }
    render(){
      // if(Platform.OS === 'ios'){

        const selected = 1;

        return(
        <TabNavigator
        tabBarStyle={style.tabBar}>
        
          <TabNavigator.Item
            title={this.props.tab === "HOME" ?  "TIMELINE": " "}
            selectedTitleStyle={{color:"white"}}
            renderIcon={() => <Entypo name="back-in-time" size={24} color="white" />}
            renderSelectedIcon={() => <Entypo name="back-in-time" size={24} color="orange" />}
            onPress={this.props.onPress('HOME')}
            selected={this.props.tab === "HOME"}
            >
            <navigators.HomeNav screenProps={ {refreshing: this.props.refreshing, onRefresh:this.props.onRefresh}}/>
          </TabNavigator.Item>

          <TabNavigator.Item
            title={this.props.tab === "DISCOVER" ?  "DISCOVER": " "}
            selectedTitleStyle={{color:"white"}}
            renderIcon={() => <Octicons name="telescope" size={24} color="white" />}
            renderSelectedIcon={() => <Octicons name="telescope" size={24} color="orange" />}
            onPress={this.props.onPress("DISCOVER")}
            selected={this.props.tab==="DISCOVER"}
            activeTintColor={"white"}
            >
            
            <navigators.DiscoverNav screenProps={{retrieving: this.props.retrievingStuff, onRefresh: this.props.onStuffRefresh, stuff:this.props.stuff}}/>
          </TabNavigator.Item>

           <TabNavigator.Item
            title={this.props.tab === "RECIPELOG" ?  "RECIPELOG": " "}
            selectedTitleStyle={{color:"white"}}
            renderIcon={() => <Ionicons name="ios-paper" size={24} color="white" />}
            renderSelectedIcon={() => <Ionicons name="ios-paper" size={24} color="orange" />}
            onPress={this.props.onPress("RECIPELOG")}
            selected={this.props.tab==="RECIPELOG"}
            activeTintColor={"white"}

            >
            <navigators.RecipeLogNav />
          </TabNavigator.Item>

          <TabNavigator.Item
            title={this.props.tab === "PROFILE" ?  "PROFILE": " "}
            selectedTitleStyle={{color:"white"}}
            renderIcon={() => <Ionicons name="ios-person" size={24} color="white" />}
            renderSelectedIcon={() => <Ionicons name="ios-person" size={24} color="orange" />}
            onPress={this.props.onPress("PROFILE")}
            selected={this.props.tab==="PROFILE"}
            activeTintColor={"white"}
            >
            <navigators.ProfileNav screenProps={ {retrieving: this.props.retrievingProfile, onRefresh:this.props.onProfileRefresh, profile:this.props.profile}}/>            
          </TabNavigator.Item>

       </TabNavigator>
        );
    }


};

const style = StyleSheet.create({
  tabBar:{
  backgroundColor: "blue",
  borderTopWidth: 1,
  borderColor: "white",
  },

});

const mapStateToProps = (state) =>{
  return {
        tab: state.tab_reducer.selected,
        refreshing: state.home_reducer.refreshing,
        retrievingProfile: state.profile_reducer.retrieving,
        profile: state.profile_reducer.profile,
        stuff: state.stuff_reducer.stuff,
        retrievingStuff: state.stuff_reducer.retrievingStuff,
      }

};
const mapDispatchToProps = (dispatch) =>{
      return {
        onPress: (name)=>()=>{
            dispatch({type: "CHANGE_TAB", payload:name})
        },
        onRefresh: () => {
            dispatch(refreshHome());
        },
        onProfileRefresh: ()=>{
          dispatch(retrieveProfile());
        },
        onStuffRefresh: ()=>{
          dispatch(retrieveStuff());
        }

      }

};
export default connect(mapStateToProps, mapDispatchToProps)(GetCookingTabs);