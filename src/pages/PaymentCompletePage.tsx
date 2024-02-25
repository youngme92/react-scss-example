export default function PaymentCompletePage() {
  return (
    <>
      <header className="header">
        <h1 className="h1">결제완료</h1>
        <div className="title_menu">
          <div>
            <button className="btn-close" aria-label="닫기"></button>
          </div>
          <div>
            <button className="btn-home" aria-label="홈으로"></button>
          </div>
        </div>
      </header>
      <main>
        <div className="empty-content height-type1">
          <div className="empty-content__text">
            <h3>주문 완료!</h3>
            <div>빠르고 안전하게 배송해 드릴게요.</div>
          </div>
          <div className="empty-content__img2"></div>
        </div>
        <div className="bottom-fix">
          <button className="btn black">주문 상세 보기</button>
        </div>
      </main>
    </>
  );
}
