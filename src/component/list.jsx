import {useState } from "react";


const Todo = () => {


    const [value,setValue] =useState();
    const [list,setList] = useState([]);

    const onChangeMyValue = (e)=>{
        e.preventDefault();
        setValue(e.target.value)
    }
    const addNewValue = ()=>{
        setList([...list,{
            title:value
        }])
    }

    const rmwItem = (id)=>{
        const alaki = list.filter((item,index) => index !== id)        
        setList(alaki)
    }


    console.log(list);

    return ( 
        <div className="bg-dark-subtle position-fixed top-0 bottom-0 start-0 end-0  d-flex flex-column align-content-center justify-content-center ">
            <h1 className="mx-auto mb-3">Todo List</h1>
            <div className="col-6 rounded-4 bg-light-subtle  shadow-lg  h-50 w mx-auto  border-1 ">
                <div className="d-flex flex-column gap-3  px-4 py-5">
                    <div className=" d-flex flex-row gap-2  justify-content-between ">
                        <input 
                            onChange={onChangeMyValue} 
                            className="w-100 px-4 rounded-1" 
                            type="text" 
                        />
                        <button 
                            onClick={addNewValue}
                            className="px-4 py-2 rounded-1 bg-success text-white "
                        >
                            Add
                        </button>
                    </div>
                    <div style={{"height":'300px'}} className="overflow-y-auto">
                        {list.map((item,index)=>(
                            <div 
                                className="bg-success-subtle rounded-1 d-flex flex-row my-1 gap-2 align-items-center t px-4" 
                                key={index}
                            >
                                <p className="w-100 mt-3">
                                    {item.title}
                                </p>
                                <button 
                                    onClick={()=>rmwItem(index)}
                                    className="h-50 px-4 py-2 bg-danger-subtle rounded-1"
                                >
                                    delete
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Todo;