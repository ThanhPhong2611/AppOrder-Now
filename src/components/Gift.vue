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
          text="Quà tặng"
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
      <ScrollView orientation="vertical">
        <StackLayout>
                <StackLayout row="0" v-for="i in cat" :key="i" orientation="vertical" height="200">
                  <GridLayout height="200">
                    <Image width="100%" height="100%" :src="i.image"/>
                  </GridLayout>
                </StackLayout>
        <StackLayout row="1" marginTop="10"> 
            <Button @tap="showModal()" width="65%" fontWeight="bold" text="Nhận ngay" fontSize="17" background="#fa4b4b" color="white" verticalAlignment="center" textAlignment="center" horizontalAlignment="center" borderRadius="10"/>
        </StackLayout>
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
              <Image src="https://image.flaticon.com/icons/png/512/1139/1139931.png" width="23"/>
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
import Modal from './Modal.vue'
import Cart from "./Cart.vue";
import Login from './Login.vue'
import Home from "./App.vue";
export default {
  methods: {
    showModal() {
      this.$showModal(Modal,{
        props : {
          name : this.user,
          total : 0
        }
      }).then((data) => {
        if (data === true) {
          for(var i = 0; i <this.cat.length; i++) {
            this.cat.splice(this.cat,this.cat.length)
          }
        }
      })
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
  },
  computed: {
    numberCart(){
      var x = 0
      x = this.product.length
      return x
    },
    numberCat(){
      return this.cat.length;
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
