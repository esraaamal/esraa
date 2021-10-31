         const loginText = document.querySelector(".title-text .login");
         const loginForm = document.querySelector("form.login");
         const loginBtn = document.querySelector("label.login");
         const signupBtn = document.querySelector("label.signup");
         const signupLink = document.querySelector("form .signup-link a");
         signupBtn.onclick = (()=>{
           loginForm.style.marginLeft = "-50%";
           loginText.style.marginLeft = "-50%";
         });
         loginBtn.onclick = (()=>{
           loginForm.style.marginLeft = "0%";
           loginText.style.marginLeft = "0%";
         });
         signupLink.onclick = (()=>{
           signupBtn.click();
           return false;
         });

         let signuBtn = document.querySelector('.signup-btn');
         let mainSectionReg = document.querySelector('.main-section-reg');
         let closingTap = document.querySelector('.closing-tap')

         signuBtn.addEventListener('click', popup);
         closingTap.addEventListener('click',closing);

         function popup() {
            mainSectionReg.style.display = "block";
         }
         function closing() {
            mainSectionReg.style.display = "none"
         }

        

         