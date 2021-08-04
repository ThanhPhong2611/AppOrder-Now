<template>
  <Page>
    <StackLayout class="" backgroundColor="white" width="320" height="560">
      <Label color="#fe2121" text="Chọn Mèo" verticalAlignment="center" textAlignment="center" horizontalAlignment="center" fontWeight="bold" fontSize="18" />
       <Label color="#fe2121" :text="'Lần chọn : '+ numberClick" verticalAlignment="center" textAlignment="left" horizontalAlignment="left" fontWeight="bold" fontSize="15" />
      <StackLayout v-for="cat in cats" :key="cat" orientation="horizontal" height="105">
          <GridLayout columns="200,50" orientation="horizontal" rows="105">
            <StackLayout row="0" col="0" :class="cat.choose==true ? 'border' : 'none'" height="105">
              <Image :src="cat.image" width="100%" @tap="isChoose(cat.id)" height="100%" verticalAlignment="center" textAlignment="center" horizontalAlignment="center"/>
            </StackLayout> 
              <Image row="0" col="1" v-show="cat.choose==true"  verticalAlignment="center" textAlignment="center" horizontalAlignment="center" src="https://image.flaticon.com/icons/png/512/716/716225.png" width="20"/>
          </GridLayout>
      </StackLayout>

      <Button
        class="btn btn-info"
        background="#fa4b4b"
        text="Xác nhận"
        fontWeight="bold"
        color="white"
           width="70%"
        @tap="onConfirm"
        verticalAlignment="bottom"
        horizontalAlignment="center"
      />
      <Button
        class="btn btn-danger"
        background="gray"
        text="Hủy"
        fontWeight="bold"
        color="white"
        width="70%"
        @tap="closeThisModel"
        verticalAlignment="bottom"
        horizontalAlignment="center"
      />
    </StackLayout>
  </Page>
</template>
<script>

export default {
  props : ["number"],
  computed : {
      numberClick(){
        var result = 0
        var i = 0
        if (this.number){
          i = Math.floor(this.number/10)
          if (i>=1){
            result = i
          }
        }
        return result
      },
      data(){
          var result = []
          for (var i = 0; i <this.cats.length;i++){
            
              if (this.cats[i].choose==true){
                  result.push({image : this.cats[i].image})
              }
          }
          return result
      }
  },
  data() {
    return {
      cats : [
          {id:1,image : "https://thucung.farmvina.com/wp-content/uploads/2020/03/c%C3%A1ch-nu%C3%B4i-m%C3%A8o-t%E1%BB%AB-chuy%C3%AAn-gia.jpg",choose: false},
          {id:2,image : "https://media.healthplus.vn/thumb_x650x382/Images/Uploaded/Share/2015/03/16/11-ly-do-ban-nen-nuoi-meo-p211426487994.jpg",choose: false},
          {id:3,image : "https://pdp.edu.vn/wp-content/uploads/2021/04/hinh-anh-nen-con-meo-cute.jpg",choose: false},
          {id:4,image : "https://mypet.vn/wp-content/uploads/2020/08/Meo-ba-tu-18.jpg",choose: false}
      ]
    };
  },
  methods: {
      isChoose(id){
          for (var i = 0; i <this.cats.length; i++){
              if (this.cats[i].id == id){
                if(this.cats[i].choose==false){
                  if (this.number>=10){
                    this.cats[i].choose = true
                    this.number-=10
                  }else{
                     confirm({
                        title: "Thông báo",
                        message: "Hết lượt chọn !",
                        okButtonText: "Ok",
                      });
                  }
                }else{
                  this.cats[i].choose = false
                  this.number+=10
                }
              }
          }
      },
    onConfirm() {
        this.$modal.close(this.data);
      },

    closeThisModel() {
      this.$modal.close();
    }
}
}
</script>
<style scoped>
.none{
  border: none;
}
  .border{
    border : 3px solid #fa4b4b
  }
</style>
