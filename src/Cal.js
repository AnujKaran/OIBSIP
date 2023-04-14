
import { useState } from "react";
import './Cal.css';

function Login() {
    const [result, setResult] = useState("");


    let sliceBeforeOptr = result.slice(0, result.length - 1);
    let check = result.slice(result.length - 1, result.length);


    // function for onButton click
    const onBtnClick = (e) => {
        setResult(result + e.target.name);
    }

    // function for clear screen
    const clearScreen = () => {
        setResult('');
    }
    // function for add operator symbol
    const operator = (e) => {


        let userOpr = e.target.name;

        if (check === "*" || check === "/" || check === "+" || check === "-" || check === ".") {
            setResult(sliceBeforeOptr + userOpr);

        }

        else {
            setResult(result + userOpr);
        }

    }

    // function for show total    
    const total = () => {
        setResult(eval(result).toString());


    }



    return (

        <div className="">
           
            <div className="cal-body">
            <h4><code>ANUJ's calculator</code></h4>
                <input type="text" placeholder="0" value={result} />
                <button className="button" name="8" onClick={onBtnClick}>8</button>
                <button className="button" name="9" onClick={onBtnClick}>9</button>
                <button className="button optr_btn" name="/" onClick={operator}>/</button>
                <button className="button" name="6" onClick={onBtnClick}>6</button>
                <button className="button" name="7" onClick={onBtnClick}>7</button>
                <button className="button optr_btn" name="*" onClick={operator}>*</button>
                <button className="button" name="4" onClick={onBtnClick}>4</button>
                <button className="button" name="5" onClick={onBtnClick}>5</button>
                <button className="button optr_btn" name="." onClick={operator}>.</button>
                <button className="button" name="2" onClick={onBtnClick}>2</button>
                <button className="button" name="3" onClick={onBtnClick}>3</button>
                <button className="button optr_btn" name="+" onClick={operator}>+</button>
                <button className="button" name="0" onClick={onBtnClick}>0</button>
                <button className="button" name="1" onClick={onBtnClick}>1</button>
                <button className="button optr_btn" name="-" onClick={operator}>-</button>
                <button className="button button1" onClick={clearScreen}>CC</button>
                <button className="button button1" onClick={total}>=</button>
            </div>

        </div>

    )
}
export default Login;