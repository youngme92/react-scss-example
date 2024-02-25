import Collapsible from "@/components/Collapsible";
import Icon_pakage from "@/assets/img/Icons_package.svg";
import Icon_pakage_GS from "@/assets/img/Icons_package_gs.svg";
import Icon_shinhan from "@/assets/img/Icons_Shinhan_card.svg";

export default function PaymentPage() {
  return (
    <>
      <header className="header">
        <h1 className="h1">결제</h1>
        <div className="title_menu">
          <div>
            <button className="btn-prev" aria-label="이전"></button>
          </div>
        </div>
      </header>
      <main>
        <Collapsible className="toggle-box" initialOpen={true}>
          <Collapsible.Trigger className="toggle-box__btn">
            택배상품 정보
          </Collapsible.Trigger>
          <Collapsible.Content className="toggle-box__content">
            <a className="parcel-info">
              <div className="parcel-info__thumb">
                <img src={Icon_pakage} alt="" />
              </div>
              <div className="parcel-info__company">
                <img src={Icon_pakage_GS} alt="gs 편의점 택배" />
              </div>
              <div className="parcel-info__title">
                물품정보(물품명/물품가격) 최대 1줄 노출.. 세척사과(1입/봉)
              </div>
              <div className="parcel-info__pare-info">기본운임</div>
              <div className="parcel-info__premium">고액할증(+2,000원)</div>
              <div className="parcel-info__pay">4,500원</div>
            </a>
          </Collapsible.Content>
        </Collapsible>
        <hr className="hr-line" />
        <Collapsible className="toggle-box" initialOpen={true}>
          <Collapsible.Trigger className="toggle-box__btn">
            배송정보
          </Collapsible.Trigger>
          <Collapsible.Content className="toggle-box__content">
            <ul className="address-list">
              <li>
                <strong className="address-list__title">보내는 분</strong>
                <div className="address-list__address">
                  서울 용산구 한강대로 15 (한강로2가, 용산 더 센트럴) C동 1021호
                </div>
                <div className="address-list__name">홍길동</div>
                <div className="address-list__tel">010-1234-5678</div>
              </li>
              <li>
                <strong className="address-list__title">받는 분</strong>
                <div className="address-list__address">
                  서울 강남구 봉은사로 23 (역삼동 654-1) 상세주소
                </div>
                <div className="address-list__name">홍길자</div>
                <div className="address-list__tel">010-1234-5678</div>
                <div className="address-list__message">
                  파손에 주의해주세요.
                </div>
              </li>
            </ul>
          </Collapsible.Content>
        </Collapsible>
        <hr className="hr-line" />
        <Collapsible className="toggle-box" initialOpen={true}>
          <Collapsible.Trigger className="toggle-box__btn">
            할인·포인트
          </Collapsible.Trigger>
          <Collapsible.Content className="toggle-box__content">
            <div className="point-box line">
              <div className="align both">
                <div className="point-box__info">
                  할인쿠폰 <b>3개</b>
                </div>
                <div>
                  <a className="btn-arrow" href="">
                    변경하기
                  </a>
                </div>
              </div>
              <div className="point-box__input-type1">
                <input type="text" value="5,000 원" readOnly />
              </div>
            </div>
            <div className="point-box">
              <div className="point-box__info">
                POINT <b>4,947P</b>
              </div>
              <div className="point-box__input-type2">
                <input type="text" value="0 p" />
                <button className="btn black">전액사용</button>
              </div>
            </div>
            <div className="point-box">
              <div className="point-box__info">
                리워즈 <b>24,400점</b>
              </div>
              <div className="point-box__input-type2">
                <input type="text" value="0 점" />
                <button className="btn black">전액사용</button>
              </div>
            </div>
          </Collapsible.Content>
        </Collapsible>
        <hr className="hr-line" />
        <Collapsible className="toggle-box" initialOpen={true}>
          <Collapsible.Trigger className="toggle-box__btn">
            결제 수단
          </Collapsible.Trigger>
          <Collapsible.Content className="toggle-box__content">
            <div className="payment-box">
              <div className="align both">
                <div className="payment-box__info">선택한 결제 수단 저장</div>
                <div>
                  <input type="checkbox" name="" id="chk2_1" />
                  <label htmlFor="chk2_1"></label>
                </div>
              </div>
            </div>
            <div className="payment-box">
              <div className="payment-box__method">
                <div className="payment-box__method-info">
                  <input type="radio" name="payment" id="payment1" checked />
                  <label htmlFor="payment1">
                    <div className="payment-box__card-gs"></div>
                    <div className="badge green">계좌결제 시 2% 적립</div>
                  </label>
                </div>
                <div className="payment-box__card">
                  <div className="payment-box__card-info">
                    * 기본 0.1% + 추가 1.9%(익월 20일 일괄 적립)
                  </div>
                  <div className="payment-box__card-list">
                    <div
                      className="payment-box__card-item"
                      aria-label="신용카드"
                    >
                      <img src={Icon_shinhan} alt="" />
                    </div>
                    <div
                      className="payment-box__card-item"
                      aria-label="신용카드"
                    >
                      <div className="payment-box__card-empty">
                        <button className="btn-card" aria-label="카드 추가" />
                        <p>결제 수단 추가</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="payment-box__method">
                <input type="radio" name="payment" id="payment2" />
                <label htmlFor="payment2">다른 결제 수단</label>
              </div>
            </div>
          </Collapsible.Content>
        </Collapsible>
        <hr className="hr-line" />
        <div className="paymentAmount-box">
          <div className="paymentAmount-box__title">결제 금액</div>
          <Collapsible>
            할인·포인트
            <Collapsible.Trigger className="paymentAmount-box__toggle"></Collapsible.Trigger>
            -250원
          </Collapsible>
          <ul>
            <li>
              <div className="align both">
                <div>상품금액</div>
                <div>152,000원</div>
              </div>
            </li>
          </ul>
        </div>

        <hr className="hr-line" />
        <div className="agree-box">
          <ul>
            <li>
              <input type="checkbox" name="" id="chk1_1" />
              <label htmlFor="chk1_1">(필수) 주문내역 확인</label>
              <a className="btn-agree" href="" aria-label="약관 읽기"></a>
            </li>
            <li>
              <input type="checkbox" name="" id="chk1_2" />
              <label htmlFor="chk1_2">(필수) 개인정보 수집 및 이용 동의</label>
              <a className="btn-agree" href="" aria-label="약관 읽기"></a>
            </li>
            <li>
              <input type="checkbox" name="" id="chk1_3" />
              <label htmlFor="chk1_3">(필수) 택배서비스 이용 동의</label>
              <a className="btn-agree" href="" aria-label="약관 읽기"></a>
            </li>
            <li>
              <input type="checkbox" name="" id="chk1_4" />
              <label htmlFor="chk1_4">(필수) 개인정보 제3자 제공 동의</label>
              <a className="btn-agree" href="" aria-label="약관 읽기"></a>
            </li>
          </ul>
        </div>
        <div className="bottom-fix">
          <button className="btn black">56,855원 결제하기</button>
        </div>
      </main>
    </>
  );
}
