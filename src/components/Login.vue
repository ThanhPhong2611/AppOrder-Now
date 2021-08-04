<template>

    <Page >
       <ActionBar background="#f03232">
      <GridLayout columns="100,130,30,60" rows="auto" >
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
          text="Login"
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
    
      textAlignment="center"
            :text="iconCart | fonticon"
            verticalAlignment="center"
          />
    
      </GridLayout>
    </ActionBar>
        <FlexboxLayout class="page" backgroundColor="#ffff">
			<StackLayout class="form">
				<Image class="logo" src="https://yt3.ggpht.com/ytc/AKedOLRBxutIeUn_yBzZLZW8V13A5rVrdCkYWNPYSGyltw=s900-c-k-c0x00ffffff-no-rj" />
				<Label marginLeft="5" class="header" fontSize="20" color="#fa4b4b" fontWeight="bold" text="Đăng nhập Now bây giờ" />

				<StackLayout class="input-field" marginBottom="10">
					<!-- <TextField class="input" hint="Email" keyboardType="email" autocorrect="false"
                     autocapitalizationType="none" v-model="user1"
					 returnKeyType="next" @returnPress="focusPassword" fontSize="18" /> -->
           <TextField class="input" hint="Tên" autocorrect="false" padding="15"
               borderRadius="20" width="230" background="whitesmoke"     autocapitalizationType="none" v-model="user"
					 returnKeyType="next" @returnPress="focusPassword" fontSize="18" />
					<StackLayout class="hr-light" />
				</StackLayout>

				<StackLayout class="input-field" marginBottom="10">
					<TextField ref="password" class="input" hint="Mật khẩu" secure="true" padding="15" background="whitesmoke"
              borderRadius="20"   width="230"      v-model="pass" :returnKeyType="isLoggingIn ? 'done' : 'next'"
					 @returnPress="focusConfirmPassword" fontSize="18" />
					<StackLayout class="hr-light" />
				</StackLayout>

				<StackLayout v-show="!isLoggingIn" class="input-field">
					<TextField  width="230"   ref="confirmPassword" padding="15" class="input" hint="Nhập lại mật khẩu" secure="true" v-model="confirmPass" returnKeyType="done"
				borderRadius="20"	background="whitesmoke" fontSize="18" />
					<StackLayout class="hr-light" />
				</StackLayout>

				<Button color="white" borderRadius="20" marginTop="10"  background="#fe2121" :text="isLoggingIn ? 'Đăng nhập':'Đăng ký'" @tap="submit(user,pass,confirmPass)" class="btn m-t-20" />
				<Label v-show="isLoggingIn" text="Quên mật khẩu?" marginTop="3" class="login-label" @tap="forgotPassword(user)" />
			</StackLayout>
<Button width="270" color="white" borderRadius="20" marginTop="10"  background="#5281fa" text="Đăng nhập với Facebook" class="btn m-t-20" />
<Button width="270" color="white" borderRadius="20" marginTop="10"  background="#dd4b39" text="Đăng nhập với Google" class="btn m-t-20" />
			<Label class="login-label sign-up-label" @tap="toggleForm">
	          <FormattedString>
	            <Span :text="isLoggingIn ? 'Bạn chưa có tài khoản? ' : 'Trở về đăng nhập'" />
	            <Span :text="isLoggingIn ? 'Đăng ký' : ''" class="bold" />
	          </FormattedString>
	        </Label>
		</FlexboxLayout>
        
       
    </Page>
    
</template>

<script >
import App from './App'
export default {
  
  data() {
    return {
         iconCart: "fa-cart-arrow-down",
          iconBell: "fa-bell",
            isLoggingIn:true,
            user:'',
            pass:'',
            confirmPass:'',
            // gia su co 1 dối tuọng
            users: this.$store.state.users
       
    };
  },
  // tính số dòng
 methods: {
   submit(user,pass,confirmPass)
   {
     if (this.isLoggingIn==true){
       var isLoggin = null
    for (var i = 0; i <this.users.length; i++) {
    //  if(user.localeCompare(this.users[i].user) || pass.localeCompare(this.users[i].password))
    if(this.users[i].user === this.user || this.users[i].password === this.pass)
     {
         isLoggin = true
     }else{
        isLoggin = false
     }
   }
   if(isLoggin == true){
     confirm({
          title: "Thông báo",
          message: "Đăng nhập thành công",
          okButtonText: "Ok",
        });
        this.$store.commit('changeLoginAccount')
        this.$store.commit('changeUser',this.user)
        for (var i = 0; i <this.users.length; i++){
          if (this.users[i].user == this.user){
            if (this.users[i].avatar){
              this.$store.commit('changeAvatar',this.users[i].avatar)
            }else{
              this.$store.commit('changeAvatar',"https://i.pinimg.com/originals/b6/bb/1f/b6bb1f98d48a1402a1b33c6a6da0c276.jpg")
            }
              
          }
        }
       this.$navigateTo(App,{
       });    
   }else{
     confirm({
          title: "Thông báo",
          message: "Sai tên tài khoản hoặc mật khẩu",
          okButtonText: "Ok",
        });
   }
   
     }else{
       if (this.user == '' || this.pass == '' || this.confirmPass == ''){
          confirm({
          title: "Thông báo",
          message: "Vui lòng nhập đủ thông tin",
          okButtonText: "Ok",
          });
       }else{
         if (this.pass != this.confirmPass){
           confirm({
          title: "Thông báo",
          message: "Mật khẩu phải trùng khớp",
          okButtonText: "Ok",
          });
         }else{
           var check = true
           for (var i = 0; i <this.users.length; i++) {
              if (this.user == this.users[i].user){
                check = false
                confirm({
                title: "Thông báo",
                message: "Tài khoản đã tồn tại",
                okButtonText: "Ok",
              });
              }
            }
          if(check ==true){
              // this.users.push({user : user,password : pass,conformPassWord : confirmPass})
              this.$store.commit('user',this.user)
              this.$store.commit('password',this.pass)
              this.$store.commit('conformPassWord',this.confirmPass)
              this.$store.commit('userPush')
              confirm({
                title: "Thông báo",
                message: "Đăng ký thành công",
                okButtonText: "Ok",
              })
              this.isLoggingIn = true
          }
       }
       
     }

   }
   },
   forgotPassword(name){
     if (this.user == ''){
       confirm({
          title: "Thông báo",
          message: "Nhập tài khoản để tìm mật khẩu",
          okButtonText: "Ok",
        });
    }else{
      var found = null
      for(var i = 0; i <this.users.length; i++){
       if (this.users[i].user==this.user){
         found = true
         
       }else{
         found = false
          
       }
     }
     if (found == true){
       for(var i = 0; i <this.users.length; i++){
       if (this.users[i].user==this.user){
           confirm({
          title: "Thông báo",
          message: "Mật khẩu của bạn là : "+ this.users[i].password,
          okButtonText: "Ok",
        });
       }
       }
      
     }else{
       confirm({
          title: "Thông báo",
          message: "Không tìm thấy tài khoản nào trùng khớp",
          okButtonText: "Ok",
        });
     }
    }
   }
   ,
   toggleForm() {
            this.isLoggingIn = !this.isLoggingIn;
        },
   focusPassword() {
            this.$refs.password.nativeView.focus();
        },
    focusConfirmPassword() {
            if (!this.isLoggingIn) {
                this.$refs.confirmPassword.nativeView.focus();
            }
        },

 },
 
 
};
</script>

<style scoped>
ActionBar {
        background-color: #fa4b4b;
        color: #ffffff;
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
    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
    Image{
        text-align: center;
         width: 100;
        height: 100;
    }
    .page {
    align-items: center;
    flex-direction: column;
    }
    .form {
    margin-left: 10;
    margin-right: 10;
    flex-grow: 2;
    vertical-align: middle;
    }
</style>
