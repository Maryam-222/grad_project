function Form(){
    return(
        <div>
            <h1>Patient Form</h1>
            <form id="form">
                <div className="form-control">
                    <label htmlFor="firstName" id="first-label-name">
                        First Name
                    </label>
                    <input type="text" id="firstName" placeholder="Enter your first name" />
                </div>

                <div className="form-control">
                    <label htmlFor="lastName" id="last-label-name">
                        Last Name
                    </label>
                    <input type="text" id="lastName" placeholder="Enter your last name" />
                </div>

                <div className="form-control">
                    <label htmlFor="age" id="label-age">
                        Age
                    </label>
                    <input type="text" id="age" placeholder="Enter your age" />
                </div>

                <div className="form-control">
                    <label>Sex</label>
                    <label htmlFor="female-1">
                    <input type="radio" id="female-1" name="sex" />
                    female
                    </label>
                    <label htmlFor="male-2">
                    <input type="radio" id="male-2" name="sex" />
                    male
                    </label>
                </div>

                <div className="form-control">
                    <label>Do you have heart disease?</label>
                    <label htmlFor="HeartDisease-1">
                    <input type="radio" id="HeartDisease-1" name="HeartDisease" />
                    Yes
                    </label>
                    <label htmlFor="HeartDisease-2">
                    <input type="radio" id="HeartDisease-2" name="HeartDisease" />
                    No
                    </label>
                </div>

                <div className="form-control">
                    <label>Do you have HighBP?</label>
                    <label htmlFor="HighBP-1">
                        <input type="radio" id="HighBP-1" name="HighBP" />
                            Yes
                    </label>
                    <label htmlFor="HighBP-2">
                        <input type="radio" id="HighBP-2" name="HighBP" />
                            No
                    </label>
                </div>

                <div className="form-control">
                    <label>Do you have High Cholesterol?</label>
                    <label htmlFor="HighChol-1">
                        <input type="radio" id="HighChol-1" name="HighChol" />
                            Yes
                    </label>
                    <label htmlFor="HighChol-2">
                        <input type="radio" id="HighChol-2" name="HighChol" />
                            No
                    </label>
                </div>

                <div className="form-control">
                    <label>Did You do Cholesterol Check before?</label>
                    <label htmlFor="CholCheck-1">
                        <input type="radio" id="CholCheck-1" name="CholCheck" />
                            Yes
                    </label>
                    <label htmlFor="CholCheck-2">
                        <input type="radio" id="CholCheck-2" name="CholCheck" />
                            No
                    </label>
                </div>

                <div className="form-control">
                    <label>Do you know your BMI?</label>
                    <label htmlFor="BMI-1">
                        <input type="radio" id="BMI-1" name="BMI" />
                            Yes
                    </label>
                    <label htmlFor="BMI-2">
                        <input type="radio" id="BMI-2" name="BMI" />
                            No
                    </label>
                </div>

                <div className="form-control">
                    <label>Are you a smoker?</label>
                    <label htmlFor="Smoker-1">
                        <input type="radio" id="Smoker-1" name="Smoker" />
                            Yes
                    </label>
                    <label htmlFor="Smoker-2">
                        <input type="radio" id="Smoker-2" name="Smoker" />
                            No
                    </label>
                </div>

                <div className="form-control">
                    <label>Did you have a stroke before?</label>
                    <label htmlFor="Stroke-1">
                        <input type="radio" id="Stroke-1" name="Stroke" />
                            Yes
                    </label>
                    <label htmlFor="Stroke-2">
                        <input type="radio" id="Stroke-2" name="Stroke" />
                            No
                    </label>
                </div>

                <div className="form-control">
                    <label>Do you have Diabetes?</label>
                    <label htmlFor="Diabetes-1">
                        <input type="radio" id="Diabetes-1" name="Diabetes" />
                            Type 1
                    </label>
                    <label htmlFor="Diabetes-2">
                        <input type="radio" id="Diabetes-2" name="Diabetes" />
                            Type 2
                    </label>
                    <label htmlFor="Diabetes-3">
                        <input type="radio" id="Diabetes-3" name="Diabetes" />
                            No
                    </label>
                </div>

                <div className="form-control">
                    <label>Do you do Physical Activities?</label>
                    <label htmlFor="PhyActivities-1">
                        <input type="radio" id="PhyActivities-1" name="PhyActivities" />
                            Yes
                    </label>
                    <label htmlFor="PhyActivities-2">
                        <input type="radio" id="PhyActivities-2" name="PhyActivities" />
                            No
                    </label>
                </div>

                <div className="form-control">
                    <label>Do you eat fruits?</label>
                    <label htmlFor="Fruits-1">
                        <input type="radio" id="Fruits-1" name="Fruits" />
                            Yes
                    </label>
                    <label htmlFor="Fruits-2">
                        <input type="radio" id="Fruits-2" name="Fruits" />
                            No
                    </label>
                </div>

                <div className="form-control">
                    <label>Do you eat veggies?</label>
                    <label htmlFor="Veggies-1">
                        <input type="radio" id="Veggies-1" name="Veggies" />
                            Yes
                    </label>
                    <label htmlFor="Veggies-2">
                        <input type="radio" id="Veggies-2" name="Veggies" />
                            No
                    </label>
                </div>

                <div className="form-control">
                    <label>Do you drink Heavy Alchol?</label>
                    <label htmlFor="HvyAlchol-1">
                        <input type="radio" id="HvyAlchol-1" name="HvyAlchol" />
                            Yes
                    </label>
                    <label htmlFor="HvyAlchol-2">
                        <input type="radio" id="HvyAlchol-2" name="HvyAlchol" />
                            No
                    </label>
                </div>

                <div className="form-control">
                    <label>Did you have ant Any Health before?</label>
                    <label htmlFor="AnyHealth-1">
                        <input type="radio" id="AnyHealth-1" name="AnyHealth" />
                            Yes
                    </label>
                    <label htmlFor="AnyHealth-2">
                        <input type="radio" id="AnyHealth-2" name="AnyHealth" />
                            No
                    </label>
                </div>

                <div className="form-control">
                    <label>NoDocbcCost?</label>
                    <label htmlFor="NoDocbcCost-1">
                        <input type="radio" id="NoDocbcCost-1" name="NoDocbcCost" />
                            Yes
                    </label>
                    <label htmlFor="NoDocbcCost-2">
                        <input type="radio" id="NoDocbcCost-2" name="NoDocbcCost" />
                            No
                    </label>
                </div>

                <div className="form-control">
                    <label htmlFor="GenHlth" id="label-GenHlth">
                        How about your General Health
                    </label>
                    <select name="GenHlth" id="GenHlth">
                        <option value="one">One</option>
                        <option value="two">Two</option>
                        <option value="three">Three</option>
                        <option value="four">Four</option>
                        <option value="five">Five</option>
                    </select>
                </div>

                <div className="form-control">
                    <label htmlFor="MenHlth" id="label-GenHlth">
                        How about your Mental Health
                    </label>
                    <select name="MenHlth" id="MenHlth">
                        <option value="one">0</option>
                        <option value="two">1</option>
                        <option value="three">2</option>
                        <option value="four">3</option>
                        <option value="five">5</option>
                        <option value="five">6</option>
                        <option value="five">7</option>
                        <option value="five">8</option>
                        <option value="five">9</option>
                        <option value="five">12</option>
                        <option value="five">14</option>
                        <option value="five">15</option>
                        <option value="five">18</option>
                        <option value="five">20</option>
                        <option value="five">24</option>
                        <option value="five">25</option>
                        <option value="five">27</option>
                        <option value="five">30</option>
                    </select>
                </div>

                <div className="form-control">
                    <label htmlFor="PhyHlth" id="label-GenHlth">
                        How about your Physical Health
                    </label>
                    <select name="PhyHlth" id="PhyHlth">
                        <option value="one">0</option>
                        <option value="two">1</option>
                        <option value="three">2</option>
                        <option value="four">3</option>
                        <option value="five">4</option>
                        <option value="five">7</option>
                        <option value="five">8</option>
                        <option value="five">12</option>
                        <option value="five">14</option>
                        <option value="five">15</option>
                        <option value="five">18</option>
                        <option value="five">20</option>
                        <option value="five">21</option>
                        <option value="five">23</option>
                        <option value="five">25</option>
                        <option value="five">26</option>
                        <option value="five">28</option>
                        <option value="five">29</option>
                        <option value="five">30</option>
                    </select>
                </div>

                <div className="form-control">
                    <label htmlFor="education" id="label-education">
                        What about your Education
                    </label>
                    <select name="education" id="education">
                        <option value="one">2</option>
                        <option value="two">3</option>
                        <option value="three">4</option>
                        <option value="four">5</option>
                        <option value="five">6</option>
                    </select>
                </div>

                <div className="form-control">
                    <label htmlFor="income" id="label-income">
                        What is your income
                    </label>
                    <select name="income" id="income">
                        <option value="one">1</option>
                        <option value="two">2</option>
                        <option value="three">3</option>
                        <option value="four">4</option>
                        <option value="five">5</option>
                        <option value="five">6</option>
                        <option value="five">7</option>
                        <option value="five">8</option>
                    </select>
                </div>

                <div className="form-control">
                    <label>Do you do Different Walks</label>
                    <label htmlFor="DiffWalk-1">
                        <input type="radio" id="DiffWalk-1" name="DiffWalk" />
                            Yes
                    </label>
                    <label htmlFor="DiffWalk-2">
                        <input type="radio" id="DiffWalk-2" name="DiffWalk" />
                            No
                    </label>
                </div>

                <button type="submit" value="submit">
                        Submit
                </button>

            </form>
        </div>
    )
}
export default Form