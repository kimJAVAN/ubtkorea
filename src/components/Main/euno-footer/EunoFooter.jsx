import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import './euno-footer.css'

export default function EunoFooter() {

    // // 사이트 기본설정 set
    // const [footerData, setFooterData] = useState();
    //
    // // 사이트 기본설정 불러오기
    // async function getUserData (){
    //     try{
    //         const res = await api.get('/super/setting/basic');
    //         setFooterData(res.data);
    //     }catch(e){
    //         console.log(e);
    //     }
    // }
    // useEffect(() => {
    //     getUserData();
    // }, []);

    return (

        <footer className="euno-footer-section">

            <div className="euno-footer-title">
                <div className="footer-logo-div">
                    <img src="images/Main/euno-footer/logo-c.png" alt="logo_b"/>
                </div>
                <div className="euno-footer-modal">
                    <NavLink to={'/members/termsofuse'}>이용약관</NavLink>
                    &nbsp; <span>|</span> &nbsp;
                    <NavLink to={'/members/privacypolicy'}>개인정보처리방침</NavLink>
                </div>
                <p></p>
            </div>


            <div className="euno-footer-info">
                {/*<span>사업자명: {footerData.company_name}</span>*/}
                <span>사업자명: 퓨론티어</span>
                &nbsp; <span>|</span> &nbsp;
                <span>대표자명: 퓨론티어 </span>
                {/*&nbsp; <span>|</span> &nbsp;*/}
                {/*<span>팩스: 02-2179-9410 </span>*/}
                {/*&nbsp; <span>|</span> &nbsp;*/}
                <br/>

                <span>주소: 서울시 -- </span>
                &nbsp; <span>|</span> &nbsp;
                <span>대표전화:010-1234-1234</span>
                &nbsp; <span>|</span> &nbsp;
                <br/>

                <span>사업자등록번호:1234-123-12455</span>
                {/* 사업자정보확인모달 */}
                &nbsp; <span>|</span> &nbsp;

                <span>통신판매업신고번호: 1234-123-1234451-123 </span>
                <br/>

                <br/>
                <span>Copyright ONEQ All Rights Reserved.</span>

            </div>

        </footer>
    )
}
