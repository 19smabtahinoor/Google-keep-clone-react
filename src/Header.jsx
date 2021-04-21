import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';


function Header() {
    return (
        <>
            <header className="keep-header">
                <div className="keep-logo-heading">
                    <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="keepLogo" className='logo'/>
                    <h1 className="keep-heading-text">Keep</h1>
                </div>

                <div className="keep-searchbar">
                    <Button className="searchBtn">
                        <SearchIcon className="search-icon"/>
                    </Button>
                    <input placeholder="Search" type="text"/>
                </div>
            </header>
        </>
    )
}
export default Header