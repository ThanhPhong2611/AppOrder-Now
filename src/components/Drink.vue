<template>
  <Page>
    <ActionBar background="#f03232">
      <GridLayout columns="100,130,30,60,15" rows="auto" >
        <Image 
        @tap="showHome()"
         src="https://vutapos.vn/wp-content/uploads/2020/12/beauty-upload-api-1200x630-191030172514.jpg"
          col="0"
          row="0"
           width="100%"
          height="65"
          horizontalAlignment="left"
        />
        <Label
          class="go-food"
          text="Thức uống"
          col="1"
          fontSize="18"
          row="0"
          horizontalAlignment="left"
          verticalAlignment="center"
        />
        <Label
          class="fas bell"
          :text="iconBell | fonticon"
          col="2"
          row="0"
         
          verticalAlignment="center"
        />
          <Label
           @tap="showCart()"
          col="3"
          row="0"
            class="fas cart"
    
      horizontalAlignment="right"
      textAlignment="right"
            :text="iconCart | fonticon"
            verticalAlignment="center"
          />
       <Label :text="numberCart" color="white" fontSize="13" marginTop="10" verticalAlignment="top" fontWeight="bold" col="4"/>
      </GridLayout>
    </ActionBar>
    <FlexboxLayout flexDirection="column">
      <StackLayout height="560">
        <GridLayout verticalAlignment="top" column="*,*">
          <Label class="fas search" :text="iconSearch | fonticon" row="0" />
          <TextField
            v-model="searching"
            col="1"
            background="whitesmoke"
            borderRadius="20"
            horizontalAlignment="center"
            width="80%"
            height="30"
            fontSize="11"
            padding="5"
            color="black"
            hint="Tìm kiếm"
          />
          
        </GridLayout>    
        <ScrollView>
          <StackLayout>
            <GridLayout
              v-for="item in filterName"
              :key="item"
              v-show="searching !== ''"
            >
              <card-view>
                <FlexboxLayout flexDirection="row">
              <StackLayout orientation="vertical">
                <GridLayout
                  background="whitesmoke"
                  rows="120,auto,auto,auto,auto"
                  columns="*,*,*"
                  class="card-layout border"
                  @tap="showDetailList(item.image,item.name,item.price,item.quantityStore,item.rating,item.listImage)"
                
                >
                  <Image
                    :src="item.image"
                    row="0"
                    colSpan="3"
                  />
                  <Label
                    :text="item.name"
                    row="1"
                    colSpan="3"
                    color="black"
                    fontSize="20"
                    textAlignment="center"
                    font-weight="bold"
                  />
                  <Label
                  
                    :text="item.price | dollars"
                    row="3"
                    colSpan="3"
                    color="red"
                    fontSize="13"
                    textAlignment="center"
                  />
                  <Button
                    @tap="onBuyList(item.image, item.name, item.price, item.quantity,item.quantityStore)"
                    height="40"
                    borderRadius="10%"
                    color="white"
                    text="Mua ngay"
                    row="4"
                    colSpan="3"
                    fontSize="12"
                    fontWeight="bold"
                    background="#fa4b4b"
                    width="50%"
                  />
                </GridLayout>
              </StackLayout>
                </FlexboxLayout>
              </card-view>
            </GridLayout>
            <GridLayout
              v-show="searching === ''"
              background="white"
              columns="*,*"
              rows="*"
              if="rowCount>0"
              v-for="i in rowCount"
              :key="i"
            >
              <!--thiet ke cart view thứ 0-->
              <card-view
                borderRadius="20%"
                class="card"
                margin="10"
                col="0"
                elevation="20"
                v-if="
                  Items[(i - 1) * itemsPerRow] &&
                    Items[(i - 1) * itemsPerRow].name">
                <GridLayout
                  background="whitesmoke"
                  rows="120,auto,auto,auto,auto"
                  columns="*,*,*"
                  class="card-layout"
                  @tap="showDetail([i - 1] * itemsPerRow)"
                >
                  <Image
                    :src="Items[(i - 1) * itemsPerRow].image"
                    row="0"
                    colSpan="3"
                  />
                  <Label
                    :text="Items[(i - 1) * itemsPerRow].name"
                    row="1"
                    colSpan="3"
                    color="black"
                    fontSize="20"
                    textAlignment="center"
                    font-weight="bold"
                  />
                  <Label
                  
                    :text="Items[(i - 1) * itemsPerRow].price | dollars"
                    row="3"
                    colSpan="3"
                    color="red"
                    fontSize="13"
                    textAlignment="center"
                  />
                  <Button
                    @tap="onBuy([i - 1] * itemsPerRow)"
                    height="40"
                    borderRadius="10%"
                    color="white"
                    text="Mua ngay"
                    row="4"
                    colSpan="3"
                    fontSize="13"
                    fontWeight="bold"
                    background="#fa4b4b"
                    width="100%"
                  />
                </GridLayout>
              </card-view>
              <!--thiet ke cart view thứ 1-->
              <card-view
                borderRadius="20%"
                class="card"
                margin="10"
                col="1"
                elevation="20"
                v-if="
                  Items[(i - 1) * itemsPerRow + 1] &&
                    Items[(i - 1) * itemsPerRow + 1].name">
                <GridLayout
                  background="whitesmoke"
                  rows="120,auto,auto,auto,auto"
                  columns="*,*,*"
                  class="card-layout"
                  @tap="showDetail([i - 1] * itemsPerRow + 1)"
                >
                  <Image
                    :src="Items[(i - 1) * itemsPerRow + 1].image"
                    row="0"
                    colSpan="3"
                  />
                  <Label
                    :text="Items[(i - 1) * itemsPerRow + 1].name"
                    row="1"
                    colSpan="3"
                    color="black"
                    fontSize="20"
                    textAlignment="center"
                    font-weight="bold"
                  />
          
                  <Label
               
                    :text="Items[(i - 1) * itemsPerRow+1].price | dollars"
                    row="3"
                    colSpan="3"
                    color="red"
                    fontSize="13"
                    textAlignment="center"
                  />
                  <Button
                    fontSize="13"
                    @tap="onBuy([i - 1] * itemsPerRow + 1)"
                    height="40"
                    width="100%"
                    borderRadius="10%"
                    text="Mua ngay"
                    color="white"
                    row="4"
                    fontWeight="bold"
                    colSpan="3"
                    class="add-button"
                    background="#fa4b4b"
                  />
                </GridLayout>
              </card-view>
            </GridLayout>
          </StackLayout>
        </ScrollView>
      </StackLayout>
         <StackLayout height="130" padding="5" verticalAlignment="top" background="white">
        <GridLayout columns="auto,*,*,*,*" verticalAlignment="center" marginTop="10">
          <StackLayout marginLeft="5" col="0" rows="auto,*" verticalAlignment="center" textAlignment="center" horizontalAlignment="center">
            <Image @tap="showHome()" row="0" src="https://image.flaticon.com/icons/png/512/1946/1946488.png" width="23"/>
            <Label row="1" text="Trang chủ" fontSize="11" verticalAlignment="center" textAlignment="center" horizontalAlignment="center"/>
          </StackLayout>
          <StackLayout marginLeft="5" col="1" rows="auto,*" verticalAlignment="center" textAlignment="center" horizontalAlignment="center">
            <Image row="0" src="https://image.flaticon.com/icons/png/512/809/809564.png" width="23"/>
            <Label row="1" text="Đơn hàng" fontSize="11" verticalAlignment="center" textAlignment="center" horizontalAlignment="center"/>
          </StackLayout>
          <StackLayout marginLeft="5" col="2" rows="auto,*" verticalAlignment="center" textAlignment="center" horizontalAlignment="center">
            <Image row="0" src="https://image.flaticon.com/icons/png/512/1077/1077035.png" width="23"/>
            <Label row="1" text="Yêu thích" fontSize="11" verticalAlignment="center" textAlignment="center" horizontalAlignment="center"/>
          </StackLayout>
          <StackLayout marginLeft="5" col="3" rows="auto,*" verticalAlignment="center" textAlignment="center" horizontalAlignment="center">
            <StackLayout orientation="horizontal" row="0" verticalAlignment="center" textAlignment="center" horizontalAlignment="center">
              <Image @tap="goGift" src="https://image.flaticon.com/icons/png/512/1139/1139931.png" width="23"/>
              <Label width="15" height="15" borderRadius="50%" padding="1" background="#fe2121" v-if="numberCat!=0" :text="numberCat" color="white" fontSize="10" verticalAlignment="center" textAlignment="center"/>
            </StackLayout>
            <Label  row="1" text="Quà tặng" fontSize="11" verticalAlignment="center" textAlignment="center" horizontalAlignment="center"/>
          </StackLayout>
          <StackLayout marginLeft="5" col="4" rows="auto,*" verticalAlignment="center" textAlignment="center" horizontalAlignment="center">
            <Image @tap="goLogin()" row="0" src="https://image.flaticon.com/icons/png/512/1077/1077063.png" width="23"/>
            <Label row="1" :text="user" fontSize="11" verticalAlignment="center" textAlignment="center" horizontalAlignment="center"/>
          </StackLayout>
        </GridLayout>
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>
<script>
import Gift from './Gift.vue'
import Detail from "./Detail.vue";
import Cart from "./Cart.vue";
import Login from './Login.vue'
import Home from "./App.vue";
export default {
  methods: {
    onBuyList(image, name, price, quantity,quantityStore) {
      if (this.isLoginAccount == false){
      confirm({
          title: "Thông báo",
          message: "Bạn phải đăng nhập trước khi mua hàng",
          okButtonText: "Ok",
      });
      this.$navigateTo(Login, {
        animated: true,
        transition: {
          name: "slideLeft",
          duration: 150,
          curve: "easeIn",
        },
      });
    }else{
      this.$store.commit('inStore',quantityStore)
      this.$store.commit('price',price)
      this.$store.commit('quantity',quantity)
      this.$store.commit('name',name)
      this.$store.commit('img',image)
      this.$store.commit("add");
    }
    },
    goLogin(){
        this.$navigateTo(Login, {
        animated: true,
        transition: {
          name: "slideLeft",
          duration: 150,
          curve: "easeIn",
        },
      });
    },
    showCart() {
      this.$navigateTo(Cart, {
        animated: true,
        transition: {
          name: "slideLeft",
          duration: 250,
          curve: "easeIn",
        },
      });
    },
    showHome() {
      this.$navigateTo(Home, {
        animated: true,
        transition: {
          name: "slideLeft",
          duration: 250,
          curve: "easeIn",
        },
      });
    },
    showDetail(i) {
      this.$navigateTo(Detail, {
        props: {
          title: this.Items[i].name,
          imgsrc: this.Items[i].image,
          price: this.Items[i].price,
          inStore: this.Items[i].quantityStore,
          rating: this.Items[i].rating,
          listImage : this.Items[i].listImage,
        },
        animated: true,
        transition: {
          name: "slideLeft",
          duration: 250,
          curve: "easeIn",
        },
      });
    },
    showDetailList(image,name,price,quantityStore,rating,listImage) {
      this.$navigateTo(Detail, {
        props: {
          title: name,
          imgsrc: image,
          price:price,
          inStore:quantityStore,
          rating: rating,
          listImage : listImage,
        },
        animated: true,
        transition: {
          name: "slideLeft",
          duration: 250,
          curve: "easeIn",
        },
      });
    },
    onBuy(i) {
    if (this.isLoginAccount == false){
      confirm({
          title: "Thông báo",
          message: "Bạn phải đăng nhập trước khi mua hàng",
          okButtonText: "Ok",
      });
      this.$navigateTo(Login, {
        animated: true,
        transition: {
          name: "slideLeft",
          duration: 150,
          curve: "easeIn",
        },
      });
    }else{
      this.$store.commit("price", this.Items[i].price);
      this.$store.commit("quantity", 1);
      this.$store.commit("name", this.Items[i].name);
      this.$store.commit("img", this.Items[i].image);
      this.$store.commit("inStore", this.Items[i].quantityStore);
      this.$store.commit("add");
    } 
    },
    goGift(){
        this.$navigateTo(Gift, {
        animated: true,
        transition: {
          name: "slideLeft",
          duration: 150,
          curve: "easeIn",
        },
      });
    },
    
  },
  computed: {
     numberCat(){
      return this.cat.length;
    },
     numberCart(){
      var x = 0
      x = this.product.length;
      return x
    },
    rowCount() {
      return Math.ceil(this.Items.length / this.itemsPerRow);
    },
    Items(){
      return this.$store.state.Items
    },
    filterName: function() {
      if (this.searching == "") {
        return this.Items;
      } else {
        if (this.searching) {
          return this.Items.filter((item) => {
            return item.name
              .toLowerCase()
              .includes(this.searching.toLowerCase());
          });
        } else {
          return this.Items;
        }
      }
    }
  },
  filters: {
    dollars: (num) => `$${num / 100}`,
  },
  data() {
    return {
      searching: "",
         cat : this.$store.state.cat,
      product : this.$store.state.product,
      isLoginAccount : this.$store.state.isLoginAccount,
      user : this.$store.state.user,
      iconStarHalf : "fa-star-half-alt",
      iconStart: "fa-star",
      iconSearch: "fa-search",
      iconCart: "fa-cart-arrow-down",
      iconBell: "fa-bell",
      iconHome: "fa-home",
      iconUser: "fa-user",
      iconHeart: "fa-heart",
      itemsPerRow: 2,
    };
  },
};
</script>
<style scoped>
ActionBar {
  background-color: #fa4b4b;
  color: white;
  font-weight: bold;
}
.search {
  margin-left: 30px;
  margin-top: 20px;
}
.go-food {
  font-weight: bold;
  color: white;
  font-size: 20px;
}
.border{
  border:2px solid red;
}
.cart {
  font-size: 25px;
  font-weight: bold;
}
.bell {
  font-size: 25px;
  font-weight: bold;
}
</style>
