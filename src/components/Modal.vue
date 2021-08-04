<template>
  <Page>
    <StackLayout class="" backgroundColor="white" width="320" height="420">
      <Label color="#fe2121" text="THANH TOÁN" verticalAlignment="center" textAlignment="center" horizontalAlignment="center" fontWeight="bold" fontSize="20" />
       <Label color="#fe2121" text="Voucher : Giảm 25%" verticalAlignment="center" textAlignment="left" horizontalAlignment="left" fontWeight="bold" fontSize="15" />
       <TextField @textChange="ontextChange(voucher)" v-model="voucher" hint="Ly" padding="8" width="80%" borderRadius="6" background="whitesmoke" />
      <Label color="#fe2121" text="Thông tin khách hàng" verticalAlignment="center" textAlignment="center" horizontalAlignment="center" fontWeight="bold" fontSize="17" />
      <Label text="Nhập địa chỉ của bạn:" />
      <TextField v-model="address" hint="Location..." padding="8" width="80%" borderRadius="6" background="whitesmoke" />
      <Label text="Sđt:" />
      <TextField v-model="sdt" hint="Number..." padding="8" width="80%" borderRadius="6" background="whitesmoke" />
      <Label text="Tên:" />
      <TextField v-model="name" hint="Name..." padding="8" width="80%" borderRadius="6" background="whitesmoke" />
      <StackLayout>
      <Label v-if="i==0" color="#fe2121" :text="'Chi phí :'+total+' vnđ'" verticalAlignment="center" textAlignment="center" horizontalAlignment="center" fontWeight="bold" fontSize="20" />
      <Label v-if="i!=0" color="#fe2121" :text="'Chi phí :'+i+' vnđ'" verticalAlignment="center" textAlignment="center" horizontalAlignment="center" fontWeight="bold" fontSize="20" />
      </StackLayout>
      <Button
        class="btn btn-info"
        background="#fa4b4b"
        text="Xác nhận"
        fontWeight="bold"
        color="white"
        @tap="onConfirm"
        verticalAlignment="bottm"
        horizontalAlignment="bottom"
      />
      <Button
        class="btn btn-danger"
        background="gray"
        text="Hủy"
        fontWeight="bold"
        color="white"
        @tap="closeThisModel"
        verticalAlignment="bottom"
        horizontalAlignment="bottom"
      />
    </StackLayout>
  </Page>
</template>
<script>

export default {
  props : ["name","total"],
  data() {
    return {
      address :"",
      sdt:"",
      name:"",
      voucher:"",
      i:0
    };
  },
  computed : {
    tong(){
      var result = null
      return result = this.total 
    }
  },
  methods: {
    ontextChange(voucher){
        if (voucher=="Ly"){
          this.i = this.total- (this.total*25)/100
        }else{
          this.i = 0
        }
    },
    onReturnPress(voucher){
      console.log("enter ------------> " + voucher);
      if (voucher=="Ly"){
        this.i = (this.total * 25)/100
      }else{
        this.i = 0
      }
      console.log("enter ------------> " + this.i);
    },
    onConfirm() {
      var data = null;
      if (this.address === ""|| this.sdt === ""  || this.name ==="") {
        confirm({
          title: "Thông báo",
          message: "Vui lòng điền đủ thông tin !",
          okButtonText: "Ok",
        });
        data = false;
      } else {
        data = true;
        this.$modal.close(data);
      }
    },
    closeThisModel() {
      var data = false;
      this.$modal.close(data);
    },
  },
};
</script>
