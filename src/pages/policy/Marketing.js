import React from 'react'

const Marketing = () => {
   return (
      <div className="subpage policy">
         <h2 className="policy-title">
            마케팅 정보 수신 동의
         </h2>
         <div className="policy-page">

            <div className="fulltext-menu">
               주식회사 마인드아이티 (이하 '마인드아이티')는 개인정보보호법 및 정보통신망이용촉진 및 정보보호 등에 관한 법률 등 관계법령에 따라 광고성 정보를 전송하기 위해 이용자의 사전 수신 동의를 받고 있습니다. <br />
               본 내용은 마인드아이티 회원 서비스가 적용되는 개별서비스의 마케팅 수신동의를 포함하고 있으며, 마케팅 정보 수신 동의 시개별서비스의 마케팅 수신에 일괄 동의한 것으로 처리됩니다.
            </div>

            <div className="fulltext-item">
               <p className="fulltext-title fulltext-title-bold">
                  1. 전송방법
               </p>
               마케팅 정보 전송 방법은 마인드아이티의 각 개별서비스에서 정한 방식에 따라 전송됩니다.
            </div>
            <div className="fulltext-item">
               <p className="fulltext-title fulltext-title-bold">
                  2. 전송내용
               </p>
               발송되는 마케팅 정보는 수신자에게 마인드아이티 및 개별서비스에서 제공하는 혜택(포인트, 쿠폰 등) 정보, 각종 이벤트, 신규 상품 관련 소식 등 광고성 정보로 관련 법의 규정을 준수하여 발송됩니다. 단, 광고성 정보 이외에 의무적으로 안내 되어야 하는 정보성 내용은 수신동의 여부와 무관하게 제공됩니다.
            </div>
            <div className="fulltext-item">
               <p className="fulltext-title fulltext-title-bold">
                  3. 수집항목
               </p>
               - 이메일, 이름, 전화번호, 회사 주소
            </div>
            <div className="fulltext-item">
               <p className="fulltext-title fulltext-title-bold">
                  4. 이용목적
               </p>
               - 소식지 서비스 제공, 신제품 및 이벤트 안내, 이벤트 경품/사은품 제공, 할인행사, 고객 맞춤 마케팅/판촉 등 관련 이메일 및 SMS 등 발송
            </div>
            <div className="fulltext-item">
               <p className="fulltext-title fulltext-title-bold">
                  5. 철회안내
               </p>
               - 수신동의 이후에라도 언제든지 동의를 철회할 수 있으며, 수신을 동의하지 않아도 회사가 제공하는 기본적인 서비스를 이용하실 수 있습니다. 다만 수신 거부할 경우 신규 서비스나 상품 관련 소식 등의 마케팅 정보를 제공받지 못할 수 있습니다.
            </div>
            <div className="fulltext-item">
               <p className="fulltext-title fulltext-title-bold">
                  6. 수신동의 변경 및 보유기간
               </p>
               <p className="padding-bottom">
                  - 보유 기간 : 마케팅 정보 수신 동의로부터 2년, 기간 초과 시 동의 절차 재진행 (미동의 시, 즉시 파기)
               </p>
               마인드아이티 정보수정 페이지에서 개별서비스의 마케팅 수신동의를 변경(동의/철회)할 수 있으며, 동의일로부터 회원 탈퇴 혹은 마케팅 수신 동의 해제 시까지 광고성 정보 전달을 위하여 보유ㆍ이용 됩니다.
            </div>
         </div>

      </div>
   )
}

export default Marketing