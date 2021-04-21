import React from 'react'

function Footer(){
    const year = new Date().getFullYear()
    return(
        <>
            <footer>
                <span className="footerText">Made by S.M.Abtahi Noor. © {year}</span>
            </footer>
        </>
    )
}
export default Footer