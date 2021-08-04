import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const state = {
  Items: [
    {
      listImage : [
        {image : "https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/GTF.png"},
   
     
      ],
      rating: 3.5,
      quantityStore: 0,
      quantity: 1,
      invId: 1,
      name: "Freeze Trà Xanh",
      image: "https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/GTF.png",
      price: 120,
    },
    {
      rating: 4.5,
      quantityStore: 5,
      quantity: 1,
      invId: 2,
      name: "Freeze Sô-Cô-La",
      image: "https://www.highlandscoffee.com.vn/vnt_upload/product/05_2018/CHOCOLATE-FREEZE.png",
      price: 150,
      quantity: 1,
    },
    {
      rating: 5,
      quantityStore: 5,
      quantity: 1,
      invId: 3,
      name: "Classic Phin Freeze",
      image: "https://www.highlandscoffee.com.vn/vnt_upload/product/05_2018/CLASSIC-FREEZE.png",
      price: 150,
    },
    {
      rating: 3.5,
      quantityStore: 15,
      invId: 4,
      quantity: 1,
      name: "Caramel Phin Freeze",
      image: "https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/.png",
      price: 200,
    },
    {
      rating: 2.5,
      quantityStore: 9,
      quantity: 1,
      invId: 5,
      name: "Trà Sen Vàng",
      image: "https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/TRASENVANG.png",
      price: 130,
    },
    {
      rating: 4,
      quantityStore: 3,
      quantity: 1,
      invId: 6,
      name: "Trà Thạch Vải",
      image: "https://www.highlandscoffee.com.vn/vnt_upload/product/04_2020/TRATHACHVAI_1.png",
      price: 160,
    },
  ],
  Foods: [
    {
      listImage : [
        {image : "~/assets/images/food1.jpg"},
        {image : "~/assets/images/list1-food1.jpg"},
        {image : "~/assets/images/list2-food1.jpg"},
     
      ],
      rating: 3.5,
      quantity: 1,
      quantityStore: 5,
      invId: 1,
      name: "Hambager - Lớn",
      image: "~/assets/images/food1.jpg",
      price: 300,
    },
    {
      listImage : [
        {image : "~/assets/images/food2.png"},
        {image : "https://jollibee.com.vn/uploads/dish/7befdf5dbb9328-2840019_01myylon01pepsi.png"},
    
      ],
      rating: 4.5,
      quantity: 1,
      quantityStore: 6,
      invId: 2,
      name: "Mì Ý",
      image: "~/assets/images/food2.png",
      price: 200,
    },
    {
      listImage : [
        {image : "~/assets/images/food3.png"},
        {image : "https://dichvuhay.vn/wp-content/uploads/2020/06/cach-lam-mon-canh-ga-nuong-tuong-ot-thom-ngon-la-mieng-1104.jpg"},
       

      ],
      rating: 3,
      quantity: 1,
      quantityStore: 3,
      invId: 3,
      name: "Đùi Gà",
      image: "~/assets/images/food3.png",
      price: 180,
    },
    {
      listImage : [
        {image : "~/assets/images/food4.jpg"},
        {image : "https://jollibee.com.vn/uploads/dish/0ade732c6f5968-2810014_comga01pepsi.png"},
     

      ],
      rating: 3.5,
      quantity: 1,
      quantityStore: 10,
      invId: 4,
      name: "Cơm Trộn",
      image: "~/assets/images/food4.jpg",
      price: 220,
    },
    {
      listImage : [
        {image : "~/assets/images/food5.png"},
        {image : "https://jollibee.com.vn/uploads/dish/3e4f6705b1d1ed-1810001_01miengcj1.jpg"},
  
      ],
      rating: 5,
      quantity: 1,
      quantityStore: 12,
      invId: 5,
      name: "Đùi Gà Chiên",
      image: "~/assets/images/food5.png",
      price: 230,
    },
    {
      listImage : [
        {image : "~/assets/images/food6.png"},
        {image : "https://jollibee.com.vn/uploads/dish/2a0e60ca7a388a-2mienggaran23.png"},

      ],
      rating: 2.5,
      quantity: 1,
      quantityStore: 8,
      invId: 6,
      name: "Khoai Tây Chiên",
      image: "~/assets/images/food6.png",
      price: 160,
    },
  ],
  product: [],
  imgsrc: null,
  name: null,
  price: null,
  quantity: null,
  inStore: null,
  progressValue : 30,
  user : null,
  avatar : null,
  isLoginAccount : false,
  comment : [
    {text : "Đồ ăn ngon",user :"Sơn Tùgg",avatar : "https://yt3.ggpht.com/ytc/AKedOLQUTCVb5f5qA8l-tqhkkOI_I4zJQ2Wu-6wTUyJTYg=s900-c-k-c0x00ffffff-no-rj",like:1,isLike: false,time:"16:00:47",date:"2 ngày trước"},
    {text : "App đẹp quá",user :"Huyền",avatar : "https://i.pinimg.com/originals/37/bd/5a/37bd5ad8cd801e7e0d340e7718ae5816.png",like:1,isLike : false,time:"20:00:03",date:"3 ngày trước"},
    {text : "Giao hàng nhanh",user :"Rose",avatar : "https://static.wikia.nocookie.net/producerviet/images/2/25/Ros%C3%A9.jpg/revision/latest?cb=20201124150351&path-prefix=vi",like:1,isLike : false,time:"18:30:50",date:"4 ngày trước"},
  ],
  users : [
    {
      user:'ly',
      password:'kawai',
      conformPassWord:'kawai',
      avatar : "https://i.pinimg.com/originals/94/d6/f8/94d6f876565a75d0914a5d6e3c9c47fe.jpg"
    },
  ],
  cat : [
    
  ],
  quantityChooseCat : 0,
  userAdd : null,
  passwordAdd : null,
  conformPassWordAdd : null
};

const mutations = {
  user(state,user){
    state.userAdd = user
  },
  password(state,pass){
    state.passwordAdd = pass

  },
  conformPassWord(state,conform){
    state.conformPassWordAdd = conform
  },
  userPush(state){
    state.users.push({user : state.userAdd,password : state.passwordAdd,conformPassWord : state.conformPassWordAdd})
  },
  quantityChooseCat(state,length){
    state.quantityChooseCat += length*10
  },
  addCat(state,image){
    state.cat.push({image : image})
  },
  changeAvatar(state,avatar){
    state.avatar = avatar
  },
  changeLoginAccount(state){
    state.isLoginAccount = true
  },
  changeUser(state,user){
    state.user = user
  },
  changeProgressValue(state,value){
    state.progressValue +=value
  },
  price(state, price) {
    state.price = price;
  },
  quantity(state, quantity) {
    state.quantity = quantity;
  },
  name(state, title) {
    state.name = title;
  },
  img(state, imgsrc) {
    state.imgsrc = imgsrc;
  },
  inStore(state, inStore) {
    state.inStore = inStore;
  },
  deleteAll(state) {
    var check = false;
    for (var i = 0; i < state.Items.length; i++) {
      for (var x = 0; x < state.product.length; x++) {
        if (state.Items[i].name === state.product[x].title) {
          state.Items[i].quantityStore -= state.product[x].quantity;
          check = true;
        }
      }
    }
    for (var i = 0; i < state.Foods.length; i++) {
      for (var x = 0; x < state.product.length; x++) {
        if (state.Foods[i].name === state.product[x].title) {
          state.Foods[i].quantityStore -= state.product[x].quantity;
          check = true;
        }
      }
    }
    if (check == true) {
      if (state.product.length > 0) {
        for (var i = 0; i < state.product.length; i++) {
          state.product.splice(state.product, state.product.length);
        }
      }
    }
  },
  delete(state, name) {
    if (state.product.length > 0) {
      for (var i = 0; i < state.product.length; i++) {
        if (state.product[i].title === name) {
          state.product.splice(i, 1);
        }
      }
    }
  },
  grow(state, name) {
    for (var i = 0; i < state.product.length; i++) {
      if (state.product[i].title === name) {
        state.product[i].quantity += 1;
      }
    }
  },
  low(state, name) {
    for (var i = 0; i < state.product.length; i++) {
      if (state.product[i].title === name) {
        state.product[i].quantity -= 1;
      }
    }
  },
  add(state) {
    var check = false
    if (state.product.length == 0) {
      check = false
    }else{
      for (var i = 0; i < state.product.length; i++) {
        if (state.product[i].title === state.name) {
          check = true;
        } 
      }
    }
    if (check == false) {
      for (var i = 0; i < state.Foods.length; i++) {
        if (state.Foods[i].name === state.name) {
          if (state.Foods[i].quantityStore == 0){
            confirm({
              title: "Thông báo",
              message: "Hết hàng !",
              okButtonText: "Ok",
            });
          }
          else {
            state.product.push({
              imgsrc: state.imgsrc,
              title: state.name,
              price: state.price,
              quantity: state.quantity,
              inStore: state.inStore,
            });
          }
        }
      }
      for (var i = 0; i < state.Items.length; i++) {
        if (state.Items[i].name === state.name) {
          if (state.Items[i].quantityStore == 0){
            confirm({
              title: "Thông báo",
              message: "Hết hàng !",
              okButtonText: "Ok",
            });
          }
          else {
            state.product.push({
              imgsrc: state.imgsrc,
              title: state.name,
              price: state.price,
              quantity: state.quantity,
              inStore: state.inStore,
            });
          }
        }
      }
    }else {
      for (var i = 0; i < state.product.length; i++){
        if (state.product[i].title === state.name) {
      if (state.product[i].quantity + state.quantity <=state.product[i].inStore){
        state.product[i].quantity += state.quantity;
     
      } else {
 
        confirm({
          title: "Thông báo",
          message: "Hết hàng !",
          okButtonText: "Ok",
        });
      }
    }
  }
    }
    
  },
};
export default new Vuex.Store({
  state,
  mutations,
});
