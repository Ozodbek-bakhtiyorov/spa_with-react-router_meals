import styled from "styled-components";
import {useState,useEffect} from "react";
import {getAllCategories} from "../api";
import {useHistory,useLocation} from "react-router-dom";
import {CategoryList, Loader, Search} from "../components";
export default function Home(){
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog,setFilteredCatalog] = useState([]);
    const {pathname , search} = useLocation();
    const {push} = useHistory();
    const handleSearch = (str)=>{
        console.log('Cb chaqirildi....')
        if(str) {
            setFilteredCatalog(catalog.filter(item =>item.strCategory.toLowerCase().includes(str.toLowerCase())));
            push({
                pathname,
                search:`?search=${str}`
            })
        }
        else {
            setFilteredCatalog(catalog)
        }
    }
    useEffect(()=>{
        getAllCategories()
                .then((data)=>{
                    setCatalog(data.categories)
                setFilteredCatalog(search ? data.categories.filter(item=>{
                    item.strCategory
                        .toLowerCase()
                        .includes(search.split('=')[1].toLowerCase())
                }, []):data.categories)

            })
    },[search])
    return(
        <Content >
            <Search cb={handleSearch}/>
            {filteredCatalog.length ? <CategoryList catalog={filteredCatalog}/>:<Loader/>}
        </Content>
    )
}
const Content = styled.div`
  
`;