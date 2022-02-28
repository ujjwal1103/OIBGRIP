const btn = document.querySelector('#btn');
        const sb = document.querySelector('#select')
        let result = document.querySelector('#result')
        let input = document.querySelector('#input');
        let error = document.querySelector('#error');
        
        
        //
        const fahrenheitToCelcius = ()=> {
            let newint = input.value;
            newint = parseFloat(newint)
            let newvar = (newint*(9/5)+32)
            // newvar = Math.ceil(newvar); 
            newvar = parseFloat(newvar).toFixed(0);
            console.log(newvar)
           result.innerHTML=`${newint} °F is equal to ${newvar} °C`;
        }
        const cToF = ()=>{ 
            let newint = input.value;
            newint = parseFloat(newint)
            let newvar = ((newint-32)*(5/9))
            newvar = parseFloat(newvar).toFixed(2);
            // newvar = Math.ceil(newvar);
            console.log(newvar)
            result.innerHTML =`${newint} °C is equal to ${newvar} °F` 
        }
        

       
         
        btn.onclick = () => {
                if(input.value ==""){
                    error.innerHTML = "Enter Some Value";
                    result.innerHTML = ""

                }
                else if(isNaN(input.value)){
                    error.innerHTML = "Enter only numbers";
                    input.value = ""
                    result.innerHTML = ""
                }
                // show the selected index
                else if(sb.selectedIndex == 0){
                    fahrenheitToCelcius();
                    input.value = ""
                    error.innerHTML = ""
                }
                else{
                    cToF();
                    input.value = ""
                    error.innerHTML = ""
                }
            }
        
       