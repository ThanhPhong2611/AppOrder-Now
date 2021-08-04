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
          text="Chi tiết"
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
        <ScrollView orientation="vertical">
          <GridLayout rows="*,*,*,*,*" background="#eeeeee">
            <Image v-show="listImage==null" :src="imgsrc" width="100%" height="400" row="0"/>
            <GridLayout row="0" v-show="listImage!=null">
             <ScrollView orientation="horizontal">
            <StackLayout orientation="horizontal">
              <StackLayout v-for="item in listImage" :key="item.image">
                <Image :src="item.image" width="100%" height="400"  />
              </StackLayout>
            </StackLayout>
          </ScrollView>
            </GridLayout>
            <Label
            
              row="1"
              verticalAlignment="center" textAlignment="center" horizontalAlignment="center"
              :text="title"
              color="#fe2121"
              fontSize="25"
              fontWeight="bold"
              
              margin="3"
            />
            <StackLayout  row="2" background="white" marginTop="8">
            <StackLayout orientation="horizontal" >
              <Label
                text="Đánh giá : "
                color="black"
                margin="3"
                fontSize="14"
                horizontalAlignment="left"
              />
              <StackLayout orientation="horizontal" margin="5">
                      <Label
                        :text="iconStart | fonticon"
                        class="fas"
                        color="#eee515"
                        
                        fontSize="13"
                        v-show="rating > 1"
                      />
                      <Label
                        :text="iconStart | fonticon"
                      class="fas"
                        color="#eee515"
                        fontSize="13"
                        v-show="rating >= 2"
                      />
                      <Label
                        :text="iconStart | fonticon"
                class="fas"
                        color="#eee515"
                        fontSize="13"
                        v-show="rating >= 3"
                      />
                      
                      <Label
                        :text="iconStart | fonticon"
                    class="fas"
                        color="#eee515"
                        fontSize="13"
                        v-show="rating >= 4"
                      />
                      <Label
                        :text="iconStart | fonticon"
                     class="fas"
                        color="#eee515"
                        fontSize="13"
                        v-show="rating >= 5"
                      />
                       <Label
                        :text="iconStarHalf | fonticon"
                class="fas"
                        color="#eee515"
                        fontSize="13"
                        v-show="(rating+0.5)%1==0 || 
                        (rating+0.5)%2==0 || 
                        (rating+0.5)%3==0 || 
                        (rating+0.5)%4==0 ||
                        (rating+0.5)%5==0"
                      />
                    </StackLayout>
            </StackLayout>
            <StackLayout orientation="horizontal">
              <Label
                text="Giá : "
                color="black"
                margin="3"
                fontSize="14"
                horizontalAlignment="left"
              />
              <Label
                :text="price | dollars"
                color="#fe2121"
                fontSize="14"
                margin="3"
              />
            </StackLayout>
            <Label
              v-if="inStore==0"
              
              text="Hết hàng!"
              color="#fe2121"
              fontSize="18"
              horizontalAlignment="left"
              margin="3"
            />
            <Label
              v-if="inStore>0"
              
              :text="'Số lượng còn: ' + inStore"
              color="black"
              fontSize="14"
              horizontalAlignment="left"
              margin="3"
            />
            </StackLayout>
            <StackLayout row="3" background="white" marginTop="8">
            <StackLayout  orientation="horizontal">
              <!-- v-if="item.quantityCart !== 0" -->
              <Label
                text="Chọn số lượng :"
                color="black"
                fontSize="14"
                horizontalAlignment="left"
                margin="3"
                class="num"
                verticalAlignment="center"
              />
              <Button
                class="hi"
                verticalAlignment="right"
                horizontalAlignment="right"
                margin="3"
                width="40"
                height="40"
                text="-"
                background="#f0f2f5"
                @tap="low(-1)"
                color="black"
              />
              <Label
                :text="quantity"
                verticalAlignment="center"
                horizontalAlignment="center"
                color="black"
              />
              <Button
                verticalAlignment="right"
                horizontalAlignment="right"
                margin="3"
                width="40"
                height="40"
                text="+"
                background="#f0f2f5"
                @tap="grow(1, inStore)"
                color="black"
              />
              
            </StackLayout>
            <Button
              borderRadius="10%"
             
              verticalAlignment="center"
              horizontalAlignment="center"
              margin="3"
              width="160"
              height="50"
              text="Thêm vào giỏ"
              background="#fa4b4b"
              @tap="onBuy(imgsrc, title, price, quantity,inStore)"
              color="white"
            />
            </StackLayout>
            <StackLayout row="4" marginTop="8"  background="white">
              <GridLayout padding="20" columns="220,100">
                  <Label text="Bình luận" marginLeft="20" col="0" color="#fe2121" />
                  <StackLayout col="1" orientation="horizontal" horizontalAlignment="left" textAlignment="left">
                    <Image src="https://image.flaticon.com/icons/png/512/565/565620.png" width="12"/>
                    <Label text="Sắp xếp :" fontSize="10" color="gray"/> 
                    <Label text="Mới nhất" fontSize="10" color="#fe2121"/>
                  </StackLayout>
              </GridLayout>
              <StackLayout>
                  <GridLayout columns="60,220,50" rows="auto" padding="10" >
                    <StackLayout col="0" horizontalAlignment="center" verticalAlignment="center">
                      <Image v-if="avatar" :src="avatar" width="50"/>
                      <Label v-if="user" :text="user+':'" col="0" row="0"  fontSize="15" textAlignment="center" horizontalAlignment="center"/>
                    </StackLayout>
                  <TextField col="1" row="0" class="input" hint="Bạn đang nghĩ gì ?"  v-model="text" height="40"
                  borderRadius="10" background="whitesmoke" padding="10" width="80%" fontSize="10"
                  />
                  <Button @tap="onComment(text)" text="Đăng" borderRadius="5" color="white" fontWeight="bold" fontSize="9" width="55" height="40" background="#fa4b4b" col="2"/>
                </GridLayout>
                  <StackLayout v-for="i in comment" :key="i" orientation="horizontal" padding="15">
                    <GridLayout orientation="horizontal" columns="60,210,60">
                      <StackLayout col="0">
                        <Image :src="i.avatar" height="55" width="50"/>
                        <Label :text="i.user"  fontSize="13" textAlignment="center" horizontalAlignment="center"/>
                      </StackLayout>
                      <StackLayout col="1" padding="5">
                      <StackLayout width="100%"  height="73" borderRadius="8" background="whitesmoke" padding="10">
                        <Label :text="i.text" fontSize="13" />
                      </StackLayout>
                        <StackLayout orientation="horizontal" verticalAlignment="left">
                        <Label @tap="onLike(i.text,i.user)" fontSize="13" fontWeight="bold" :text="'fa-thumbs-up' | fonticon" :class="[i.isLike == true ? 'fas active': 'fas']" />
                        <Label fontSize="11" :text="i.like"/>
                        </StackLayout>
                      </StackLayout>
                      <StackLayout col="2" horizontalAlignment="center" textAlignment="center" verticalAlignment="center">
                      <Label v-if="i.date" :text="i.date" fontSize="8"/>
                      <Label v-if="i.time" :text="'lúc : '+i.time" fontSize="8"/>
                      <Button  @tap="deleteComment(i.text,i.user)" verticalAlignment="center"
                horizontalAlignment="center" textAlignment="center" text="Xóa" borderRadius="5" color="white" fontWeight="bold" fontSize="8" width="40" height="30" background="#fe2121" />    
                      </StackLayout>
                    </GridLayout>
                  </StackLayout>
              </StackLayout>
            </StackLayout>
          </GridLayout>
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
import Cart from "./Cart.vue";
import Home from './App.vue'
import Login from './Login.vue'
export default {
  computed : {
    
   numberCat(){
    
      return this.cat.length;
    },
     numberCart(){
      var x = 0
      x = this.product.length;
      return x
    },
  },
  methods: {
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
     onLike(text,name){
       if (this.user == null){
         confirm({
          title: "Thông báo",
          message: "Bạn chưa đăng nhập",
          okButtonText: "Ok",
        });
       }
       else{
        for (var i = 0; i < this.comment.length; i++){
          if (this.comment[i].text == text || this.comment[i].user == name){
            if (this.comment[i].isLike == false){
                this.comment[i].isLike = true
                this.comment[i].like +=1
            }else{
              this.comment[i].isLike = false
              this.comment[i].like -=1
            }
            
          }
        } 
       }
    },
    deleteComment(text,name){
      if (this.user == "ly"){
        for (var i = 0; i < this.comment.length; i++){
          if (this.comment[i].text == text || this.comment[i].user == name){
            this.comment.splice(i,1)
          }
        }
      }else{
          confirm({
              title: "Thông báo",
              message: "Bạn không đủ quyền",
              okButtonText: "Ok",
            });
      
    
    }
    },
    onComment(text){
      if (this.user == null){
        confirm({
          title: "Thông báo",
          message: "Bạn chưa đăng nhập",
          okButtonText: "Ok",
        });
      }else{
        if (text==""){
          confirm({
          title: "Thông báo",
          message: "Hãy nhập bình luận",
          okButtonText: "Ok",
        });
        }else{
          var today = new Date();
          var xDay = null;
          var date = today.getDate()+'-'+(today.getMonth()+1);
          var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
          if (date){
            if (today.getDate()==18 || today.getMonth()+1==7){
              date = 'Hôm nay'
            }else{
              xDay = today.getDate()-18
              date = xDay + 'ngày trước'
            }
            this.comment.unshift({text : text,avatar : this.avatar,user : this.user,like :1,isLike:false,time:time,date : date});
          }
          this.text = ""
        }
      }
    },
     onReturnPress(e)
     {
       this.comment.push(this.text);
     },
    low(value) {
      if (this.quantity > 1) {
        this.quantity += value;
      }
    },
    grow(value, inStore) {
      if (this.quantity < inStore) {
        this.quantity += value;
      }else {
        confirm({
          title: "Thông báo",
          message: "Hết hàng !",
          okButtonText: "Ok",
        });
      }
    },
    onBuy(imgsrc, title, price, quantity,inStore) {
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
        this.$store.commit('inStore',inStore)
        this.$store.commit('price',price)
        this.$store.commit('quantity',quantity)
        this.$store.commit('name',title)
        this.$store.commit('img',imgsrc)
        this.$store.commit("add");
      }       
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
  },
  filters: {
    dollars: (num) => `$${num / 100}`,
  },
  props: ["imgsrc", "title", "price", "inStore","rating","listImage"],
  data() {
    return {
           cat : this.$store.state.cat,
      comment : this.$store.state.comment,
      product : this.$store.state.product,
      user : this.$store.state.user,
      avatar : this.$store.state.avatar,
      isLoginAccount : this.$store.state.isLoginAccount,
      quantity: 1,
      iconStarHalf : "fa-star-half-alt",
      iconStart: "fa-star",
      iconSearch: "fa-search",
      iconCart: "fa-cart-arrow-down",
      iconBell: "fa-bell",
      iconHome: "fa-home",
      iconUser: "fa-user",
      iconHeart: "fa-heart",
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
.active{
  color:#fe2121
}
.num {
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

</style>
