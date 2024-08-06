import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
// import api from "./../../api/axios.js"

import "../../../assets/FooterComponents/botemFooter.css"
export default function Footer() {

    // 사이트 기본설정 set
    const [footerData, setFooterData] = useState();

    // 사이트 기본설정 불러오기
    // async function getUserData (){
    //     try{
    //         const res = await api.get('/super/setting/basic');
    //         setFooterData(res.data);
    //     }catch(e){
    //         console.log(e);
    //     }
    // }
    useEffect(() => {
        // getUserData();
    }, []);

  return (

    <footer className="botem-footer-section">

        <div className="botem-footer-title">
            <div className="footer-logo-div">
                <img src="images/Header/chit-header/logo.png" alt="logo_b"/>
            </div>
            <div className="botem-footer-modal">
                <NavLink to={''}>이용약관</NavLink>
                &nbsp; <span>|</span> &nbsp;
                <NavLink to={''}>개인정보처리방침</NavLink>
            </div>
            <p></p>
        </div>


        {/*{footerData &&*/}
            <div className="botem-footer-info">
                {/*{footerData.company_name}*/}
                <span>사업자명: UBT Korea</span>
                &nbsp; <span>|</span> &nbsp;
                {/*{footerData.company_privacy_name}*/}
                <span>대표자명: 유티비 </span>
                &nbsp; <span>|</span> &nbsp;
                <span>팩스: 02-0000-0000 </span>
                &nbsp; <span>|</span> &nbsp;
                <br/>
                {/*{footerData.company_address}*/}
                <span>주소:  서울특별시 강남구 </span>
                &nbsp; <span>|</span> &nbsp;
                {/*{footerData.company_tel}*/}
                <span>대표전화: 1644-0000</span>
                &nbsp; <span>|</span> &nbsp;
                <br/>
                {/*{footerData.company_biznum}*/}
                <span>사업자등록번호: </span>
                02-0000-0000
                &nbsp; <span>|</span> &nbsp;
                {/* {footerData.company_shopnum}*/}
                <span>통신판매업신고번호: 0000-0000-0000</span>
                <br/>

                <br/>
                <span>Copyright 반석전자 All Rights Reserved.</span>

            </div>
        {/*}*/}

    </footer>
  )
}
