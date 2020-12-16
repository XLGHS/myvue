//state.js 定义状态数据
const state = {
    categoryLeftDatas: [],
    categoryRightDatas: [],
    categoryRightImg: "",
    showLoading: true,
    cat_id: "858",
    toggleStyle: true,
    categoryListDatas: [],
    nomore: false,
    detailDatas: {},
    detailDatasInfo: {},
    posterDatas: {},

    //购物车数据 -- 用本地存储
    //如果本地存储中有carts这个属性，读取本地存储数据转换成json对象，否则将cartDatas等于一个空数组
    cartDatas: localStorage["carts"] ? JSON.parse(localStorage["carts"]) : [],
    //全选
    selectAll: localStorage["selectAll"] ? JSON.parse(localStorage["selectAll"]) : false,
    // 搜索
    searchKeywords: localStorage["keywords"] ? JSON.parse(localStorage["keywords"]) : [],

    // 保存token
    userInfo: localStorage["userInfo"] ? JSON.parse(localStorage["userInfo"]) : {},
}

export default state