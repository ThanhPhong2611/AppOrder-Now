<template>
  <Page>
    <ActionBar background="#f03232">
      <GridLayout columns="100,130,30,60,15" rows="auto" >
        <Image 
         src="https://vutapos.vn/wp-content/uploads/2020/12/beauty-upload-api-1200x630-191030172514.jpg"
          col="0"
          row="0"
           width="100%"
          height="65"
          horizontalAlignment="left"
        />
        <Label
          class="go-food"
          text="Trang chủ"
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
    <FlexboxLayout flexDirection="column" background="#eeeeee">
      <StackLayout>
        <ScrollView orientation="vertical">
          <GridLayout rows="*,*,*,*,*,*,*,*">
            <GridLayout row="0" background="white" padding="10">
              <Image
                class="bg-image"
                src="https://ss-images.saostar.vn/fb1200png_2/pc/1617011218516/saostar-q2yai0so6q4h7ecx.jpg/fbsscover.png"
                width="100%"
                
              />
            </GridLayout>
            <StackLayout row="1" padding="10" background="white">
              <Label text="Tổng quan" color="#fe2121" fontSize="15" fontWeight="bold" />
                <ScrollView orientation="horizontal">
                 <StackLayout orientation="horizontal">
                    <GridLayout width="95" borderRadius="20" rows="auto,*" class="border">
                        <Image row="0" src="https://image.flaticon.com/icons/png/512/3225/3225196.png" width="55"/>
                        <Label row="1" text="MART" fontSize="16" verticalAlignment="center" textAlignment="center" horizontalAlignment="center" 
                        fontWeight="900" />
                    </GridLayout>
                    <GridLayout width="95" borderRadius="20" rows="auto,*" class="border" >
                        <Image row="0" src="https://image.flaticon.com/icons/png/512/673/673339.png" width="55"/>
                        <Label row="1" text="KITCHEN" fontSize="16" verticalAlignment="center" textAlignment="center" horizontalAlignment="center" 
                        fontWeight="900" />
                    </GridLayout>
                    <GridLayout width="95"  borderRadius="20" rows="auto,*" class="border" >
                        <Image row="0" src="https://image.flaticon.com/icons/png/512/4392/4392787.png" width="55"/>
                        <Label row="1" text="STUDIO" fontSize="16" verticalAlignment="center" textAlignment="center" horizontalAlignment="center" 
                        fontWeight="900" />
                    </GridLayout>
                    <GridLayout width="95"  borderRadius="20" rows="auto,*" class="border">
                        <Image row="0" src="https://image.flaticon.com/icons/png/512/5116/5116363.png" width="55"/>
                        <Label row="1" text="TOUCHER" fontSize="16" verticalAlignment="center" textAlignment="center" horizontalAlignment="center" 
                        fontWeight="900" />
                    </GridLayout>
                 </StackLayout>
                </ScrollView>
          </StackLayout>
          <StackLayout row="2" background="white" marginTop="8">
            <StackLayout orientation="horizontal">
            <Label marginLeft="10" text="Danh mục & Lựa chọn" color="#fe2121" fontSize="15" fontWeight="bold" />
            <Label marginLeft="135" text="Chi tiết" fontSize="13" fontWeight="bold"/>
            <Label class="fas" fontSize="18" verticalAlignment="center" marginLeft="5" :text="iconRight | fonticon" color="#f13233" textAlignment="center" fontWeight="800" horizontalAlignment="center" />
            </StackLayout>
          <GridLayout  class="icon-food" columns="*,*,*,*" rows="80" orientation="horizontal"
					paddingLeft="20" paddingRight="20" marginLeft="20">
					<StackLayout col="0" rows="0"   orientation="horizontal">
						<Image class="icon-img" src="https://image.flaticon.com/icons/png/512/1531/1531385.png"/>
            
					</StackLayout>
					<StackLayout col="1" rows="0"   orientation="horizontal">
						<Image class="icon-img" src="https://image.flaticon.com/icons/png/512/3260/3260113.png" />
					</StackLayout>
					<StackLayout col="2" rows="0"   orientation="horizontal">
						<Image class="icon-img" src="https://image.flaticon.com/icons/png/512/3165/3165589.png" />
					</StackLayout>
					<StackLayout col="3" rows="0"   orientation="horizontal">
						<Image class="icon-img" src="https://image.flaticon.com/icons/png/512/3571/3571437.png" />
					</StackLayout>
				</GridLayout>
				<Label text="-----------------------------------------------------------------------"
				 	marginLeft="30"/>
				<!-- Icon banner drink -->
				<GridLayout  class="icon-drink" columns="*,*,*,*" rows="80" orientation="horizontal"
					paddingLeft="20" paddingRight="20" marginLeft="20">
					<StackLayout col="0" rows="1"   orientation="horizontal">
						<Image class="icon-img" src="https://image.flaticon.com/icons/png/512/305/305433.png" />
					</StackLayout>
					<StackLayout col="1" rows="1"   orientation="horizontal">
						<Image class="icon-img" src="https://image.flaticon.com/icons/png/512/305/305350.png" />
					</StackLayout>
					<StackLayout col="2" rows="1"   orientation="horizontal">
						<Image class="icon-img" src="https://image.flaticon.com/icons/png/512/305/305429.png" />
					</StackLayout>
					<StackLayout col="3" rows="1"   orientation="horizontal">
						<Image class="icon-img" src="https://image.flaticon.com/icons/png/512/684/684279.png" />
					</StackLayout>
				</GridLayout>
          </StackLayout>
          <GridLayout
              row="3"
              background="white" marginTop="8"
              padding="10"
              columns="auto,*"
            >
              <StackLayout
                col="0"
                width="170"
                backgroundColor="#fa4b4b"
                margin="5"
                borderRadius="10"
                @tap="goFood()"
              >
                <Image
                  src="https://image.flaticon.com/icons/png/512/3075/3075929.png"
                  height="60"
                  width="80"
                />
                <Label
                  text="ĐỒ ĂN"
                  fontWeight="bold"
                  fontSize="16"
                  color="white"
                  textAlignment="center"
                />
              </StackLayout>
              <StackLayout
                col="1"
                width="170"
                backgroundColor="#fa4b4b"
                margin="5"
                borderRadius="10"
                @tap="goDrink()"
              >
                <Image
                  src="https://image.flaticon.com/icons/png/512/1473/1473279.png"
                  height="60"
                  width="80"
                />
                <Label
                  text="THỨC UỐNG"
                  fontWeight="bold"
                  fontSize="16"
                  color="white"
                  textAlignment="center"
                />
              </StackLayout>
            </GridLayout>
            <GridLayout row="4" padding="10" background="white" marginTop="8">
           <StackLayout orientation="horizontal" >
                <Image src="https://image.flaticon.com/icons/png/512/1374/1374072.png" width="50"/>
                <Label verticalAlignment="center" marginLeft="20" text="Bạn ơi, 12 mã giảm giá vẫy gọi nè" color="#fe2121" />
                 <Label class="fas" fontSize="18" verticalAlignment="center" marginLeft="50" :text="iconRight | fonticon" color="#f13233" textAlignment="center" fontWeight="800" horizontalAlignment="center" />
           </StackLayout>
            </GridLayout>
            <GridLayout row="5" padding="10" background="white" marginTop="8">
              <StackLayout>
              <StackLayout orientation="horizontal" >
                <StackLayout>
              <Label text="TÍCH ĐƠN NHẬN MÈO" color="#fe2121" fontWeight="bold" fontSize="16"/>
              <Label text="Mỗi lần đặt 1 sản phẩm, nhận 1 điểm" fontSize="14"/>
                </StackLayout>
                 <Label class="fas" fontSize="18" verticalAlignment="center" marginLeft="90" :text="iconRight | fonticon" color="#f13233" textAlignment="center" fontWeight="800" horizontalAlignment="center" />
              </StackLayout>
               <StackLayout orientation="horizontal">
                  <Image @tap="goChoose()" src="https://image.flaticon.com/icons/png/512/1864/1864514.png" width="50"/>
                  <Progress height="25" width="200" color="gray" :value="progressValue" maxValue="100" verticalAlignment="center" textAlignment="center" horizontalAlignment="center" />
                  <Label marginLeft="15" verticalAlignment="center" textAlignment="center" horizontalAlignment="center" :text="progressValueAuto" color="#fe2121"/>
                  <Label verticalAlignment="center" textAlignment="center" horizontalAlignment="center" text="/10" color="gray"/>
               </StackLayout>
              </StackLayout>
            </GridLayout>
          <GridLayout row="6" padding="10" background="white" marginTop="8">
            <StackLayout>
             <Label text="Quanh đây có gì ngon ?" color="#fe2121" fontSize="17" fontWeight="bold" />
              <ListView for="item in positions" marginTop="10" padding="7" height="390">
          <v-template>
            <FlexboxLayout flexDirection="row">
              <StackLayout orientation="vertical">
                <GridLayout columns="110,*" row="auto,auto">
                  <StackLayout col="0" borderRadius="10" padding="7">
                    <Image :src="item.image" height="80" width="95" borderRadius="30" />
                  </StackLayout>
                  <StackLayout col="1">
                    <StackLayout  orientation="horizontal">
                      <Image src="https://image.flaticon.com/icons/png/512/294/294432.png" width="20"/>
                      <Label :text="' '+item.name" verticalAlignment="center" textAlignment="center" horizontalAlignment="center" color="#fe2121" fontSize="17"/>
                    </StackLayout>
                    <Label :text="item.types" height="43" />
                    <StackLayout col="1" orientation="horizontal" verticalAlignment="bottom" textAlignment="bottom" horizontalAlignment="bottom">
                      <Label :text="iconStar | fonticon" class="fas" color="#eee515" fontSize="13"/>
                      <Label :text="item.star"/>
                      <Label text="(999+)"/>
                      <Label marginLeft="20" text="-"/>
                      <Label marginLeft="20" :text="item.km"/>
                    </StackLayout>
                  </StackLayout>
                </GridLayout>
              </StackLayout>
            </FlexboxLayout>
          </v-template>
              </ListView>
            </StackLayout>
            </GridLayout>
            
            
            <GridLayout row="7" padding="10" background="white">
              <Image
                class="bg-image"
                src="https://cf.shopee.vn/file/563d86f39f2bba4185c40d09f733fd37"
              />
            </GridLayout>
          </GridLayout>
        </ScrollView>
      </StackLayout>
      <StackLayout height="130" padding="5" verticalAlignment="top" background="white">
        <GridLayout columns="auto,*,*,*,*" verticalAlignment="center" marginTop="10">
          <StackLayout marginLeft="5" col="0" rows="auto,*" verticalAlignment="center" textAlignment="center" horizontalAlignment="center">
            <Image row="0" src="https://image.flaticon.com/icons/png/512/1946/1946488.png" width="23"/>
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
import Food from './Food.vue'
import Drink from './Drink.vue'
import Cart from './Cart.vue'
import Choose from './Choose.vue'
import Login from './Login.vue'
import Gift from './Gift.vue'
export default {
  computed : {
    numberCat(){
      return this.cat.length;
    },
    progressValueAuto(){
      var result = null;
      return result = this.progressValue/10 
    },
     numberCart(){
      var x = 0
      x = this.product.length
      return x
    },
  },
  methods : {
    goChoose(){
        this.$showModal(Choose, {
          props : {
            number : this.progressValueAuto
          }
      }).then((data) => {
        if (data!=false){
          for (var i = 0; i<data.length; i++){
            this.$store.commit('addCat',data[i].image)
          }
          this.$store.commit('changeProgressValue',-(data.length*100))
        }
      })
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
    goFood(){
      this.$navigateTo(Food, {
        animated: true,
        transition: {
          name: "slideLeft",
          duration: 250,
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
     goDrink(){
      this.$navigateTo(Drink, {
        animated: true,
        transition: {
          name: "slideLeft",
          duration: 250,
          curve: "easeIn",
        },
      });
    }
  },
  data() {
    return {
      cat : this.$store.state.cat,
      positions : [
        {name :"Big C Miền Đông",types : 'Siêu thị',image : "https://tranbaothi.com/wp-content/uploads/2020/09/7857570-e893325df0a38484f40d1731225c55b3_big-c.jpg",star:4.8,km:"2.7km"},
        {name :"Coop Tân Phú",types : 'Siêu thị',image : "https://greatjobs.vn/upload/employer/_6205.png",star:4.4,km:"1.1km"},
        {name :"Lotteria Miền Tây",types : 'Cửa hàng',image : "https://tenpack.com.vn/wp-content/uploads/2016/02/lotteria-logo.jpg",star:4.6,km:"0.3km"},
        {name :"Jollibee",types : 'Cửa hàng',image : "https://gigamall.com.vn/data/2019/05/06/09314542_logo-jollibee-500x500.jpg",star:4.4,km:"1.7km"},
      ],
      quantityChooseCat : this.$store.state.quantityChooseCat,
      product : this.$store.state.product,
      user : this.$store.state.user,
      progressValue : this.$store.state.progressValue,
      iconRight :"fa-angle-right",
      iconCart: "fa-cart-arrow-down",
      iconBell: "fa-bell", 
      iconStar: "fa-star",
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
.cart {
  font-size: 25px;
  font-weight: bold;
}
.bell {
  font-size: 25px;
  font-weight: bold;
}
.icon-img{
  width: 50%;
}
</style>
