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
          text="Đồ ăn"
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
          
      <StackLayout>
     
        <GridLayout verticalAlignment="top" columns="40,250,30,30" rows="*">
          <Label col="0" class="fas search" :text="iconSearch | fonticon" row="0" verticalAlignment="center" textAlignment="center" horizontalAlignment="center"  />
          <TextField
            v-model="searching"
            col="1"
            background="whitesmoke"
            borderRadius="20"
            horizontalAlignment="center"
            width="100%"
            height="30"
            fontSize="11"
            padding="5"
            color="black"
            hint="Tìm kiếm"
          />
          <Label  col="2" fontSize="22" :text="iconDown | fonticon" class="fas" @tap="valueSort(-1)" verticalAlignment="center" textAlignment="center" />
            <Label col="3" fontSize="22" :text="iconUp | fonticon" class="fas" @tap="valueSort(1)" verticalAlignment="center" textAlignment="center" /> 
        </GridLayout>
      
     
        <ListView for="(item,index) in filterName" height="700" ref="listView">
          <v-template>
            <FlexboxLayout flexDirection="row">
              <StackLayout orientation="vertical">
                <GridLayout
                  columns="170,150"
                  row="auto,auto"
                  @tap="showDetail(item)"
                >
                  <Image
                    :src="item.image"
                    col="0"
                    verticalAlignment="center" textAlignment="center"
                    horizontalAlignment="center"
                    margin="3"
                    height="100"
                  />
                  <StackLayout col="1" orientation="vertical">
                    <Label
                    fontWeight="bold"
                      fontSize="18"
                      color="black"
                      margin="3"
                      :text="item.name"
                    ></Label>
                  <StackLayout orientation="horizontal">
                    <Label text="Giá : " fontSize="13"
                      color="#fe2121"
                      margin="5"/>

                      <Label
                      fontSize="13"
                      color="#fe2121"
                      margin="5"
                      :text="item.price | dollars"
                    ></Label>
                  </StackLayout>
                    
                    <StackLayout orientation="horizontal" margin="3">
                      <Label
                        :text="iconStart | fonticon"
                        class="fas"
                        color="#eee515"
                        
                        fontSize="13"
                        v-show="Items[index].rating > 1"
                      />
                      <Label
                        :text="iconStart | fonticon"
                      class="fas"
                        color="#eee515"
                        fontSize="13"
                        v-show="Items[index].rating >= 2"
                      />
                      <Label
                        :text="iconStart | fonticon"
                class="fas"
                        color="#eee515"
                        fontSize="13"
                        v-show="Items[index].rating >= 3"
                      />
                      <Label
                        :text="iconStart | fonticon"
                    class="fas"
                        color="#eee515"
                        fontSize="13"
                        v-show="Items[index].rating >= 4"
                      />
                      <Label
                        :text="iconStart | fonticon"
                     class="fas"
                        color="#eee515"
                        fontSize="13"
                        v-show="Items[index].rating >= 5"
                      />
                       <Label
                        :text="iconStarHalf | fonticon"
                class="fas"
                        color="#eee515"
                        fontSize="13"
                        v-show="(Items[index].rating+0.5)%1==0 || 
                        (Items[index].rating+0.5)%2==0 || 
                        (Items[index].rating+0.5)%3==0 || 
                        (Items[index].rating+0.5)%4==0 ||
                        (Items[index].rating+0.5)%5==0"
                      />
                    </StackLayout>
                    <Button
                    @tap="
                      onBuy(
                        item.image,
                        item.name,
                        item.price,
                        item.quantity,
                        item.quantityStore
                      )"
                    fontWeight="bold"
                    
                    text="Mua ngay"
                    background="#fa4b4b"
                    height="45"
                    color="white"
                    fontSize="12"
                  />
                  </StackLayout>
                  
                  
                </GridLayout>
              </StackLayout>
            </FlexboxLayout>
          </v-template>
        </ListView>
       
       
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
    showDetail(item) {
      this.$navigateTo(Detail, {
        props: {
          title: item.name,
          imgsrc: item.image,
          price: item.price,
          inStore: item.quantityStore,
          rating : item.rating,
          listImage : item.listImage,
        },
        animated: true,
        transition: {
          name: "slideLeft",
          duration: 150,
          curve: "easeIn",
        },
      });
    },
    onBuy(image, name, price, quantity, quantityStore) {
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
      this.$store.commit("inStore", quantityStore);
      this.$store.commit("price", price);
      this.$store.commit("quantity", quantity);
      this.$store.commit("name", name);
      this.$store.commit("img", image);
      this.$store.commit("add");
    }
    },
    valueSort(value){ 
      this.onSort = value
      this.$refs.listView.refresh(); 
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
      x = this.product.length
      return x
    },
    rowCount() {
      return Math.ceil(this.Items.length / this.itemsPerRow);
    },
    Items (){
      return this.$store.state.Foods
    },
    filterName: function() {
      if (this.onSort){
         this.Items = this.Items.sort((a, b) => {
            if (a.price > b.price) return this.onSort
            else if (a.price < b.price) return -this.onSort
            else return 0
          })
      }
      if (this.searching == null) {
        return this.Items
      } else {
        if (this.searching) {
          return  this.Items.filter((item) => {
            return item.name
              .toLowerCase()
              .includes(this.searching.toLowerCase());
          });
        } else {
          return this.Items
        }
      }  
    },
  },
  filters: {
    dollars: (num) => `$${num / 100}`,
  },
  data() {
    return {
          cat : this.$store.state.cat,
      product : this.$store.state.product,
      isLoginAccount : this.$store.state.isLoginAccount,
      searching: null,
      user : this.$store.state.user,
      iconStarHalf : "fa-star-half-alt",
      iconStart: "fa-star",
      iconStartNone: "fa-star-o",
      iconSearch: "fa-search",
      iconCart: "fa-cart-arrow-down",
      iconBell: "fa-bell",
      iconUp:"fa-arrow-alt-circle-up",
      iconDown : "fa-arrow-alt-circle-down",
      onSort : null,
      itemsPerRow: 2,
    };
  },
};
</script>
<style scoped>
ActionBar {
  background-color: #f03232;
  color: white;
  font-weight: bold;
}
.go-food {
  font-weight: bold;
  color: white;
  font-size: 20px;
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
