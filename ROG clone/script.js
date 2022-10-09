
function bannerChanger(len){
    // this function creates a loop repeats at specified time delay
    // then with that we make image scrolling transition

    let imgCont = document.getElementById("banner-cont"); // image container
    let num = 100; // value to move the image left 
    let limit = len*100; // making limit Eg. len = 5 then limit will be 500

    let time = setInterval(() => {
        // sets an time intervel loop
        
        imgCont.style.transform = 'translateX(-'+num+'%)'; // moving images using transition

        num=num+100; // adding the value of num for keep moving towards left

        if(num>=limit){
            // checks if reach the end of the images || last image

            num = 0; // reset the value of num
        };

    }, 5000); // here the 5000 is 5s || delay time

}

bannerChanger(5); // calling function with total number of images
