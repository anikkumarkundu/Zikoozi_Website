function fun_java(){
    const userName = document.getElementById("username").value 
    const userNumber = document.getElementById("numbers").value
    const userEmail = document.getElementById("gmail").value
    const userAddress = document.getElementById("area").value

    if(userName && userNumber && userEmail && userAddress)
        {

        if(userNumber.length === 10)
        {

        alert('Document submitted successfully')

         document.getElementById("username").value=" "
         document.getElementById("numbers").value=" "
         document.getElementById("gmail").value=" "
         document.getElementById("area").value=" "
           
        }
        
        else
        { 
        alert('\nPlease check!!\n *enter 10 digit number!')
        }
    } 
    else{
        
        alert('Please fill up the all field')
    }

}