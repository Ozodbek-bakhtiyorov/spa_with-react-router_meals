import styled from "styled-components";
import {useState} from "react";

export default function Search({cb = Function.prototype}){
    const [value,setValue] = useState('');
    const HandleKey = (e)=>{
        if(e.key === 'Enter'){
            cb(value);
        }
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        cb(value);
    }
    return(
        <Content>
            <div className="row">
                    <form className="col s12"  onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="input-field col s8">
                                <i className="material-icons prefix">search</i>
                                <input
                                    id="icon_prefix"
                                    type="text"
                                    className="validate"
                                    onKeyDown={HandleKey}
                                    onChange={e=>setValue(e.target.value)}
                                    value={value}
                                />
                                    <label htmlFor="icon_prefix">Search</label>
                            </div>
                            <div className="input-field col s4">
                               <button
                                   type='submit'
                                   className={'btn '}
                               >Search Meal</button>
                            </div>
                        </div>
                    </form>
                </div>
        </Content>
    )
}
const Content = styled.div``;
