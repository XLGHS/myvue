import ajax from "./ajax.js"

const Base_URL = "/api"
const Base_URL2 = "http://192.168.1.21:3000/adminapi"

export const getHomeList = (url, params) => {
    return ajax(Base_URL + url, params)
}

//分类左侧
export const getCategoryLeft = () => {
    return ajax(Base_URL + "/catalog/list")
}

//分类右侧
export const getCategoryRight = (cat_id) => {
    return ajax(Base_URL + "/catalog/list/" + cat_id)
}


//分类商品列表
export const getCategoryList = (url, params, type) => ajax(Base_URL + url, params, type)

//详情页
export const getDetail = (url, params, type) => ajax(Base_URL + url, params, type)

//获取手机验证码
export const getPhoneCode = (url, params, type) => ajax(Base_URL2 + url, params, type)

//短信登录
export const getPhoneLogin = (url, params, type) => ajax(Base_URL2 + url, params, type)

//账号登录
export const getLogin = (url, params, type) => ajax(Base_URL2 + url, params, type)

//账号注册
export const getRegister = (url, params, type) => ajax(Base_URL2 + url, params, type)