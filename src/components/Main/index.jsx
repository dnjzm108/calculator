import './index.css'
import React,{useState} from 'react'

function Main() {
    const [nums,setNums] = useState('')
    const [result,setResult] = useState('')

    const onChage = (e) =>{
        if(e === 'c'){
            setNums('')
            setResult('')
        }else if(e === 'x'){
            setNums( nums.substr(0,nums.length-1));
        }else if(e === '='){
            setResult(eval(nums));
        }else{
            setNums(nums+e)
            
        }
    }
    return (
        <>
            <div className='main_wrap'>
                <h1 className='header'>Calculator</h1>

                <div className='numbers'>
                    <ul>
                        <li>{nums}</li>
                        <li>{result}</li>
                    </ul>
                </div>


                <ul className='bnt'>
                    <li onClick={()=>{onChage('c')}} className='gray'><span className='item'>C</span></li>
                    <li onClick={()=>{onChage('%')}}  className='gray'><img src="img/icon_percentage.png" alt="" /></li>
                    <li onClick={()=>{onChage('/')}}  className='gray'><img src="img/icon_divide.png" alt="" /></li>
                    <li onClick={()=>{onChage('*')}}  className='gray'><img src="img/icon_mulitple.png" alt="" /></li>
                    <li onClick={()=>{onChage(7)}}  className='silver'>7</li>
                    <li onClick={()=>{onChage(8)}}  className='silver'>8</li>
                    <li onClick={()=>{onChage(9)}}  className='silver'>9</li>
                    <li onClick={()=>{onChage('-')}}  className='gray'><img src="img/icon_minus.png" alt="" /></li>
                    <li onClick={()=>{onChage(4)}}  className='silver'>4</li>
                    <li onClick={()=>{onChage(5)}}  className='silver'>5</li>
                    <li onClick={()=>{onChage(6)}}  className='silver'>6</li>
                    <li onClick={()=>{onChage('+')}}  className='gray'><img src="img/icon_add.png" alt="" /></li>
                    <li onClick={()=>{onChage(1)}}  className='silver'>1</li>
                    <li onClick={()=>{onChage(2)}}  className='silver'>2</li>
                    <li onClick={()=>{onChage(3)}}  className='silver'>3</li>
                    <li onClick={()=>{onChage('=')}}  className='other'><img src="img/icon_equal.png" alt="" /></li>
                    <li onClick={()=>{onChage('x')}}  className='gray'><img src="img/icon_cancle.png" alt="" /></li>
                    <li onClick={()=>{onChage(0)}}  className='silver'>0</li>
                    <li onClick={()=>{onChage('.')}}  className='silver'>.</li>
                </ul>


            </div>
        </>
    )
}

export default Main;