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
          text="Giỏ hàng"
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
 
      <StackLayout height="335">
        <Label
        v-if="product.length==0"
          text="CHƯA CÓ SẢN PHẨM"
          color="#fe2121"
          textAlignment="center"
          verticalAlignment="center"
          horizontalAlignment="center"
          fontSize="23"
          fontWeight="bold"
        />
        <RadListView for="(item,index) in product" ref="listView" swipeActions="true"
        @itemSwipeProgressStarted="onSwipeStarted">
          <v-template>
            <FlexboxLayout flexDirection="row" backgroundColor="white">
              <StackLayout orientation="vertical">
                <GridLayout columns="auto,*" row="auto,auto">
                  <Image
                    :src="item.imgsrc"
                    col="0"
                    height="110"
                    margin="3"
                    width="200"
                    
                  />
                  <StackLayout col="1" width="200">
                  <Label
                    fontSize="18"
                    fontWeight="bold"
                     height="30"
                    color="#fe2121"
                    marginTop="10"
                    :text="item.title"
                    />
                     <StackLayout orientation="horizontal"  height="30">
                        <Label text="Giá : " fontSize="13"   color="black"/>
                        <Label
                    fontSize="13"
                 
                    color="black"
                    :text="item.price*item.quantity| dollars"
                    />

                     </StackLayout>
                  <StackLayout orientation="horizontal">
                    <Button
                    color="gray"
                      textAlignment="center"
                      verticalAlignment="right"
                      horizontalAlignment="right"
                      width="30"
                      height="40"
                      text="-"
                      background="#f0f2f5"
                      @tap="low(item)"
                    />
                    <Label
                    marginLeft="10"
                    color="black"
                      :text="item.quantity "
                      textAlignment="center"
                      verticalAlignment="center"
                      horizontalAlignment="center"
                    />
                    <Button
                    marginLeft="10"
                    color="gray"
                          
                      textAlignment="center"
                      verticalAlignment="center"
                      horizontalAlignment="right"
                      width="30"
                      height="40"
                      text="+"
                      background="#f0f2f5"
                      @tap="grow(item)"
                    />
                  </StackLayout>
                  </StackLayout>
                  
                 
                </GridLayout>
              </StackLayout>
            </FlexboxLayout>
          </v-template>
          <v-template name="itemswipe">
            <GridLayout columns="*,auto">
             <StackLayout
              id="delete-view"
              width="80"
               verticalAlignment="center"
              col="1"
              class="swipe-item right"
              orientation="horizontal"
              paddingTop="30"
              
            >
             <Button
                  fontSize="13"
      
                  class="fas"
                    col="2"
                    color="white"
                    height="50"
                    width="50"
                    @tap="onRightSwipeClick"
                    verticalAlignment="center"
                    horizontalAlignment="center"
                  borderRadius="10"
                    background="#fe2121"
                    :text="trash | fonticon"
                    
                  />
             </StackLayout>
            </GridLayout>
          </v-template>
        </RadListView>
      </StackLayout>
      <StackLayout padding="10" height="185">
        <Button text="Thêm tráng miệng" background="#fa4b4b" color="white" fontWeight="bold" @tap="showFood()" width="100%"/>
            <ListView for="food in Food" ref="list" v-if="show==true">
          <v-template>
            <FlexboxLayout flexDirection="row">
              <StackLayout orientation="vertical">
                <GridLayout columns="20,120,100,80" row="auto,auto">
                  <Image v-show="food.check==true" col="0" horizontalAlignment="left" src="https://image.flaticon.com/icons/png/512/716/716225.png" width="15"/>
                  <Image width="70" col="1" :src="food.image" height="60"/>
                  <StackLayout col="2">
                    <Label margin="2" :text="food.name" color="black" fontSize="17" fontWeight="bold"/>
                    <Label margin="2" :text="food.price | dollars" color="#fa4b4b" fontSize="13"/>
       
                  </StackLayout>
                  <Button textAlignment="center"
                  width="50"
                  @tap="onAdd(food.name)"
                  height="40"
                  fontSize="13"
                      verticalAlignment="center"
                      horizontalAlignment="right" col="3" text="Add" borderRadius="10" fontWeight="bold" color="white" background="#fa4b4b"/>
                </GridLayout>
              </StackLayout>
            </FlexboxLayout>
          </v-template>
        </ListView>
      </StackLayout>
        <StackLayout height="60" padding="3" verticalAlignment="bottom" background="#fa4b4b">
        <GridLayout columns="180,150" verticalAlignment="center" marginTop="10">
             <StackLayout col="0"
          orientation="horizontal"
          verticalAlignment="center"
          horizontalAlignment="center"
        >
          <Label
            text="Tổng tiền : "
            textAlignment="center"
            verticalAlignment="center"
            horizontalAlignment="center"
            fontSize="17"
            fontWeight="bold"
            color="white"
          />
          <Label
            :text="getTotal | dollars"
            textAlignment="center"
            verticalAlignment="center"
            horizontalAlignment="center"
            fontSize="17"
            fontWeight="bold"
            color="white"
          />
        </StackLayout>
        <Button
        col="1"
        fontSize="12"
          @tap="showModal()"
          borderRadius="10%"
          color="black"
          fontWeight="bold"
          text="Thanh toán"
          textAlignment="center"
          
          horizontalAlignment="center"
          background="white"
        />
        </GridLayout>
      </StackLayout>
    </FlexboxLayout>
 
  </Page>
</template>
<script>
import Home from "./App.vue";
import Modal from "./Modal.vue";
export default {
  
  computed: {
    numberCart(){
      var x = 0
      for (var i = 0; i < this.product.length; i++){
        x += this.product[i].quantity
      }
      return x
    },
    getTotal() {
      this.tong = 0;
      for (var i = 0; i < this.product.length; i++) {
        this.tong += this.product[i].quantity * this.product[i].price;
      }
       for (var i = 0; i < this.Food.length; i++) {
        if(this.Food[i].check==true){
          this.tong +=this.Food[i].price
        }
      }
      return this.tong;
    },
  },
  methods: {
     onSwipeStarted({ data, object }) {
      const swipeLimits = data.swipeLimits;
      const swipeView = object; // đối tượng hiện tại đag kéo
      const rightItem = swipeView.getViewById("delete-view"); //Delete
      swipeLimits.right = rightItem.getMeasuredWidth(); //do rong cua right item 70
    
    },
    onAdd(name){
     for (var i = 0; i < this.Food.length; i++) {
        if(this.Food[i].name==name){
          this.Food[i].check = !this.Food[i].check
        }
    }
    },
    showFood(){
      this.show = !this.show
    },
    showModal() {
      this.$showModal(Modal,{
        props : { 
          name : this.user,
          total : this.getTotal
        }
      }).then((data) => {
        if (data === true) {
          var number = 0
          var next = null
          for (var i = 0; i < this.product.length; i++){
            number += this.product[i].quantity
          }
          if (number!=0){
            this.$store.commit('changeProgressValue',number*10)
            next = true
          }else{
            next = true
          }
           if (next == true){
             this.$store.commit("deleteAll");     
              this.$refs.listView.refresh();
              this.$refs.list.refresh();
              for (var i = 0; i < this.Food.length; i++){
                this.Food[i].check = false
              }
            }
          
        }
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
    low(item) {
      var name = item.title;
      if (item.quantity > 1) {
        this.$store.commit("low", name);
        this.$refs.listView.refresh();
      }
    },
    grow(item) {
      var name = item.title;
      if (item.quantity < item.inStore) {
        this.$store.commit("grow", name);
        this.$refs.listView.refresh();
      } else {
        confirm({
          title: "Thông báo",
          message: "Hết hàng !",
          okButtonText: "Ok",
        });
      }
    },
    onRightSwipeClick({object}) {
      var x = this.product.indexOf(object.bindingContext)
      var name = this.product[x].title;
      confirm({
        title: "Xoá",
        message: "Bạn có muốn xóa sản phẩm này ?",
        cancelButtonText: "Không",
        okButtonText: "Có",
      }).then((result) => {
        if (result === true) {
          this.$store.commit("delete", name);
          this.$refs.listView.refresh();
        }
      });
    },
  },
  filters: {
    dollars: (num) => `$${num / 100}`,
  },
  data() {
    return {
      show : false,
      Food : [
        {check:false,name : "Kem Plane",image:"https://media.shoptretho.com.vn/upload/image/news/20170809/mach-me-cach-lam-mon-trang-mieng-tu-phomai-8.jpg",price:100},
        {check:false,name : "Kem dâu",image:"https://wiki-travel.com.vn/Uploads/Picture/NguyenBinhVTV-165412115451-PannaCotta.jpg",price:100},
        {check:false,name : "Kem trộn",image:"https://i.ytimg.com/vi/NYcOt-YKkyA/maxresdefault.jpg",price:200},
        {check:false,name : "Kem Cotta",image:"https://lh4.googleusercontent.com/tx2NoHN7gL_Q-ejmRvBV-JXEG_vxvk1_0fyVNVtMSPOEGSSmBOK75hD4R2wWFsVkUSM-upHHadNrJXnmL_5avyGhq-FFRpqwPvbjpmsjarvvDEGC1A2ls3qHFdCyHlazEH-3DNvg",price:200}
      ],
      trash : "fa-trash",
      user : this.$store.state.user,
      product : this.$store.state.product,
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
  background-color:  #fa4b4b;
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

</style>
