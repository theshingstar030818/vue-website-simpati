/*=========================================================================================
  File Name: state.js
  Description: Vuex Store - state
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import navbarSearchAndPinList from "@/layouts/components/navbar/navbarSearchAndPinList"
import themeConfig from "@/../themeConfig.js"
import colors from "@/../themeConfig.js"

// /////////////////////////////////////////////
// Helper
// /////////////////////////////////////////////

// *From Auth - Data will be received from auth provider
const userDefaults = {
  uid         : 0,          // From Auth
  displayName : "John Doe", // From Auth
  about       : "Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.",
  photoURL    : require("@assets/images/portrait/small/avatar-s-11.jpg"), // From Auth
  status      : "online",
  userRole    : "admin"
}

const userInfoLocalStorage = JSON.parse(localStorage.getItem("userInfo")) || {}

// Set default values for active-user
// More data can be added by auth provider or other plugins/packages
const getUserInfo = () => {
  let userInfo = {}

  // Update property in user
  Object.keys(userDefaults).forEach((key) => {
    // If property is defined in localStorage => Use that
    userInfo[key] = userInfoLocalStorage[key] ?  userInfoLocalStorage[key] : userDefaults[key]
  })

  // Include properties from localStorage
  Object.keys(userInfoLocalStorage).forEach((key) => {
    if(userInfo[key] == undefined && userInfoLocalStorage[key] != null) userInfo[key] = userInfoLocalStorage[key]
  })

  return userInfo
}

const registerDefaults = {
  displayName: '',
  email: '',
  password: '',
  confirm_password: '',
  isTermsConditionAccepted: true,
  switchPublic: true,

  selectType:'',

  nationality: '',
  sex: '',
  birthday: null,
  address: '',
  phonenumber: '',
}
const storeRegisterUserJWT = JSON.parse(localStorage.getItem("storeRegisterUserJWT")) || {}
// const storeRegisterUserJWT = {}

const getStoreRegisterUserJWT = () => {
  // return registerDefaults;
  let registerInfo = {}
  console.log("from local storage!!!");
  console.log(storeRegisterUserJWT);
  // Update property in user
  Object.keys(registerDefaults).forEach((key) => {
    // If property is defined in localStorage => Use that
    registerInfo[key] = storeRegisterUserJWT[key] ?  storeRegisterUserJWT[key] : registerDefaults[key]
  })

  // Include properties from localStorage
  Object.keys(storeRegisterUserJWT).forEach((key) => {
    if(registerInfo[key] == undefined && storeRegisterUserJWT[key] != null) registerInfo[key] = storeRegisterUserJWT[key]
  })

  return registerInfo
}
// /////////////////////////////////////////////
// State
// /////////////////////////////////////////////

const state = {
    AppActiveUser           : getUserInfo(),
    bodyOverlay             : false,
    isVerticalNavMenuActive : true,
    mainLayoutType          : themeConfig.mainLayoutType || "vertical",
    navbarSearchAndPinList  : navbarSearchAndPinList,
    reduceButton            : themeConfig.sidebarCollapsed,
    verticalNavMenuWidth    : "default",
    verticalNavMenuItemsMin : false,
    scrollY                 : 0,
    starredPages            : navbarSearchAndPinList["pages"].data.filter((page) => page.is_bookmarked),
    theme                   : themeConfig.theme || "light",
    themePrimaryColor       : colors.primary,

    // Can be used to get current window with
    // Note: Above breakpoint state is for internal use of sidebar & navbar component
    windowWidth: null,

    //added to store registerUserJWT
    StoreRegisterUserJWT    : getStoreRegisterUserJWT(),
}

export default state
