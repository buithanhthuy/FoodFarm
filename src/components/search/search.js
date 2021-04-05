import React,{useState} from 'react';
import { Input } from 'antd';
import axios from 'axios';
const Search = () => {
//Dùng hook để lấy đc data trong ô input
 const [keyWord, setKeyWord] = useState("")

 function handleInputChange(e) {
    setKeyWord(e.target.value)
}
async function handleSearch() {
    const { data } = await axios.get(`/search/products?q=${keyWord}`);
    console.log(data);
}
    return (
        <Input.Search 
        value={keyWord}
        onChange={handleInputChange}
        onSearch={handleSearch}
        placeholder="Tìm kiếm theo tên sản phẩm" enterButton />
    );
}

export default Search;