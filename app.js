console.log("connected");





const container = document.querySelector(".main-container");


// const info = document.getElementsByClassName("your-info");

const info = document.querySelector(".your-info");

console.log(info)

const plan = document.querySelector(".select-plan");

const addOns = document.querySelector(".add-ons");

const finsh = document.querySelector(".Finishing");

const confirm = document.querySelector(".thankYou");


// getting next step buttons 

const infoBtnNext = document.getElementById("your-info-btn");

const planBtnNext = document.getElementById("plan-btn-next");

const addOnBtn = document.getElementById("addOn-btn-next");

const finishBtn = document.getElementById("finish-btn");


// getting go back button

const planBtnBack = document.getElementById("plan-goBack-btn");

const addOnBtnBack = document.getElementById("addOn-btn-back");

const finishBtnBack = document.getElementById("finish-btn-back");


// code for plan select 

const checkbox = document.getElementById('toggle');
const Arcade_Price = document.getElementById('ArcadePrice');
const pro_price = document.getElementById('proPrice');
const Advance_Price = document.getElementById('AdvancePrice');



// code for addon

let addOnOne = document.getElementById("addOn-One");
let addOnTwo = document.getElementById("addOn-Two");
let addOnThree = document.getElementById("addOn-Three");


// for billing

let arcadePrice = document.getElementById("arcadeId");
let advancePrice = document.getElementById("advanceId");
let proPrice = document.getElementById("proId");



// finishing up

let finishingPlanInfo = document.getElementById("finishing-Plan-Info");

let finishingItemPrice = document.getElementById("item-price");


// add ons selection

const onlineService = document.getElementById("onlineService");
const largerStorage = document.getElementById("largerStorage");
const customizableProfile = document.getElementById("customizableProfile");

// console.log(onlineService.checked + "-=-=-=--");




// console.log(borderColor + " [[[[");



let flag = false;

container.addEventListener("click", (event) => {

    // console.log(onlineService.checked + "-=-=-=--");


    console.log(event.target.name + " ++++++++ ")

    const toggleBtn = (event.target);


    if(event.target.id == 'toggle'){
        sliderBtn(toggleBtn)
    }


    else if (event.target == infoBtnNext) {
        info.style.display = "none";
        plan.style.display = "flex";
    }

    else if (event.target == planBtnNext) {
        console.log("zzzz ", addOnOne.innerText);

        plan.style.display = "none";
        addOns.style.display = "flex"
    }

    else if (event.target == addOnBtn) {

        addOns.style.display = "none";
        finsh.style.display = "flex";
    }

    else if (event.target == finishBtn) {
        finsh.style.display = "none";
        confirm.style.display = "flex"
    }

    else if (event.target == planBtnBack) {
        plan.style.display = "none";
        info.style.display = "flex";
    }

    else if (event.target == addOnBtnBack) {
        addOns.style.display = "none";
        plan.style.display = "flex";
    }

    else if (event.target == finishBtnBack) {
        finsh.style.display = "none";
        addOns.style.display = "flex";
    }

    else if(event.target.type == 'checkbox'){
        // console.log(event.target + " checking")
        // billingAddOn(event.target);
       const onlineServicePrice = document.getElementById("addOn-One"); 
       const largerStoragePrice = document.getElementById("addOn-Two");
       const customizableProfilePrice = document.getElementById("addOn-Three");


       const addOn1data = document.getElementById('addOn1');
       const addOn2data = document.getElementById('addOn2');
       const addOn3data = document.getElementById('addOn3');
        
       
       if(event.target.name == 'Online Service'){
           
        if(event.target.checked){

            addOn1data.children[0].textContent = event.target.name;
            addOn1data.children[1].textContent = onlineServicePrice.textContent;
        }
        else{
            addOn1data.children[0].textContent = "";
            addOn1data.children[1].textContent = "";
        }

        }

        if(event.target.name == 'Larger Storage'){
          
            if(event.target.checked){

                addOn2data.children[0].textContent = event.target.name;
                addOn2data.children[1].textContent = onlineServicePrice.textContent;
            }
            else{
                addOn2data.children[0].textContent = "";
                addOn2data.children[1].textContent = "";
            }

        }

        if(event.target.name == 'Customizable Profile'){
            
            if(event.target.checked){

                addOn3data.children[0].textContent = event.target.name;
                addOn3data.children[1].textContent = onlineServicePrice.textContent;
            }
            else{
                addOn3data.children[0].textContent = "";
                addOn3data.children[1].textContent = "";
            }

        }


    }



    // code for billing 

    if(event.target == arcadePrice){
        console.log("aaaarccade")

        if(flag == true){
            // console.log("yearly ---- ")
            finishingPlanInfo.textContent = `Arcade (Yearly)`;
            finishingItemPrice.textContent = `$90/yr`;
        }
        else{
            // console.log("monthly ---- ")
            finishingPlanInfo.textContent = `Arcade (Monthly)`;
            finishingItemPrice.textContent = `$9/mo`;
        }

    }

    if (event.target == advancePrice) {
        // console.log("advancePrice")

        if (flag == true) {
            // console.log("yearly ---- advancePrice")
            finishingPlanInfo.textContent = `Advance (Yearly)`;
            finishingItemPrice.textContent = `$120/yr`;
        }
        else {
            // console.log("monthly ---- advancePrice")
            finishingPlanInfo.textContent = `Advance (Monthly)`;
            finishingItemPrice.textContent = `$12/mo`;
        }

    }

    if (event.target == proPrice) {
        // console.log("proPrice")

        if (flag == true) {
            // console.log("yearly ----proPrice ")
            finishingPlanInfo.textContent = `Pro (Yearly)`;
            finishingItemPrice.textContent = `$150/yr`;
        }
        else {
            // console.log("monthly ----proPrice ")
            finishingPlanInfo.textContent = `Pro (Monthly)`;
            finishingItemPrice.textContent = `$15/mo`;
        }

    }


    


})




function sliderBtn(toggleBtn){
    if (toggleBtn.checked) {
        // console.log("abe jaaaan ana");
        Arcade_Price.textContent = `$90/yr`;
        Advance_Price.textContent = `$120/yr`;
        pro_price.textContent = `$150/yr`;

        document.querySelectorAll(".added-plan")[0].innerText = '2 Month Free';
        document.querySelectorAll(".added-plan")[1].innerText = '2 Month Free';
        document.querySelectorAll(".added-plan")[2].innerText = '2 Month Free';


        addOnOne.textContent = '+$10/yr';
        addOnTwo.textContent = '+$20/yr';
        addOnThree.textContent = '+$20/yr';

        flag = true;

        console.log("checked flag " + flag)

    }
    else if (toggleBtn.checked == false) {
        // console.log("abe jaa");

        Arcade_Price.textContent = `$9/mo`;
        Advance_Price.textContent = `$12/mo`;
        pro_price.textContent = `$15/mo`;

        document.querySelectorAll(".added-plan")[0].innerText = '';
        document.querySelectorAll(".added-plan")[1].innerText = '';
        document.querySelectorAll(".added-plan")[2].innerText = '';

        addOnOne.textContent = '+$1/mo';
        addOnTwo.textContent = '+$2/mo';
        addOnThree.textContent = '+$2/mo';

        flag = false;

        console.log("uncheckedflag " + flag)
    }
}



function billingAddOn(event){
    console.log(event + " function")
}