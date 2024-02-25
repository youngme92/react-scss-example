export default function Header() {
  return (
    <header className="header">
      <h1 className="h1">샐러드 과일 채소</h1>
      <div className="title_menu">
        <div>
          <button className="btn-prev" aria-label="이전으로"></button>
        </div>
        <div>
          <button className="btn-list" aria-label="전체메뉴"></button>
          <button className="btn-cart" aria-label="장바구니">
            <span>1</span>
          </button>
        </div>
      </div>
    </header>
  );
}
