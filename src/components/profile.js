import React from 'react'


function Userprofile(){
    return(

         <div>
            <h2 style={{ textAlign: "center"}}>User Profile Page</h2>
            <br></br>
            <div className='userprofile'>
                <form>
                    <label>
                        <b>First Name</b>
                    </label>
                    <input type="text" name='firstname' id='firstname'></input>
                    <br></br>
                    <br></br>
                    <label>
                        <b>Last Name</b>
                    </label>
                    <input type="text" name='lastname' id='lastname'></input>
                    <br></br>
                    <br></br>
                    <label>
                        <b>Email</b>
                    </label>
                    <input type="text" name='email' id='email'></input>
                    <br></br>
                    <br></br>
                    <label>
                        <b>Password</b>
                    </label>
                    <input type="text" name='psw' id='psw'></input>
                    <br></br>
                    <br></br>
                </form>
            </div>
    </div> 




        


    )
}

export default Userprofile;
