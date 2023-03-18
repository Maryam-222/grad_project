import React from 'react';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import "./patient-list.css"

const testData = [{
    firstName: 'Maryam',
    lastName: 'TEst',
    HighBloodPressure: true,
    Cholesterol: true,
    Result: true
},
{
    firstName: 'Omnya',
    lastName: 'test2',
    HighBloodPressure: false,
    Cholesterol: false,
    Result: false
},
{
    firstName: 'Alaa',
    lastName: 'Test3',
    HighBloodPressure: false,
    Cholesterol: false,
    Result: true
},
{
    firstName: 'Ahmed',
    lastName: 'Test 4',
    HighBloodPressure: '',
    Cholesterol: '',
    Result: ''
},
{
    firstName: 'Abdulrahman',
    lastName: 'Test5',
    HighBloodPressure: '',
    Cholesterol: '',
    Result: ''
}]
const PatientsList = () => {

    //call to the api
    //setSearchArray with the array coming from the backend
    
    const [searchArray, setSearchArray] = useState([...testData])
    const [resultArray, setResultsArray] = useState([...testData])

    const onTextChange = (value) => {

        if (value !== "") {

            var tempArray = searchArray.filter((item) => item.firstName.toLowerCase().includes(value.toLowerCase()))
            setResultsArray(tempArray)
        }
        else {
            setResultsArray(searchArray)
        }
    }

    return (
        <div className='patient-list-container'>
            <h1>Patients List</h1>
            <div>
                <div><input onChange={(evt) => onTextChange(evt.target.value)} /></div>
                <Sidebar></Sidebar>
                <div className='table-div'>
                    <table class="table user-list-table">
                        <thead>
                            <tr>
                                <th className='w-25'>First Name</th>
                                <th className='w-25'>Last Name</th>
                                <th className='w-15'>High Blood Pressure</th>
                                <th className='w-15'>Cholestrol</th>
                                <th className='w-10'>Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            {resultArray.map((item, index) => (
                                <tr>
                                    <td scope='row'>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.HighBloodPressure ? (<>Yes</>) : (<>No</>)}</td>
                                    <td>{item.Cholesterol ? (<>Yes</>) : (<>No</>)}</td>
                                    <td>{item.Result ? (<>Yes</>) : (<>No</>)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>

             <div style={{ width: "10%", float: "right", marginRight: "50px", marginTop: "50px", textAlign: "center", paddingTop: "3px", backgroundColor: "lightblue", height: "20px", height: "30px" }}>
                <a style={{ color: "black" }} href='/form'>Add User</a>
            </div>


        </div>
    );
};

export default PatientsList;