import Header from "../components/Header";
import Footer from "../components/Footer";
import thumnail1 from "../assets/img/@Thumbnail1.svg";
import thumnail2 from "../assets/img/@Thumbnail2.svg";
import Collapsible from "../components/Collapsible";

export default function StyleGuidePage() {
  return (
    <div>
      <Header />
      <main className="guide-pd">
        <nav className="guide">
          <ul>
            <li>
              <a href="#guide1">탭메뉴</a>
            </li>
            <li>
              <a href="#guide2">상품리스트</a>
            </li>
            <li>
              <a href="#guide3">버튼</a>
            </li>
            <li>
              <a href="#guide4">온라인 서식</a>
            </li>
            <li>
              <a href="#guide5">콘텐츠 제목</a>
            </li>
            <li>
              <a href="#guide6">텍스트</a>
            </li>
            <li>
              <a href="#guide7">토글 컨텐츠</a>
            </li>
            <li>
              <a href="#guide8">기타UI</a>
            </li>
          </ul>
        </nav>
        <h2 className="h2 mt100" id="guide1">
          탭메뉴
        </h2>
        <nav>
          <ul className="tab-type1">
            <li className="tab-type1--active">
              <button>탭1</button>
            </li>
            <li>
              <button>탭2</button>
            </li>
          </ul>
        </nav>
        <nav>
          <ul className="tab-type2">
            <li className="tab-type2--active">
              <a>탭1</a>
            </li>
            <li>
              <a>탭2</a>
            </li>
            <li>
              <a>탭3</a>
            </li>
            <li>
              <a>탭4</a>
            </li>
            <li>
              <a>탭5</a>
            </li>
            <li>
              <a>탭6</a>
            </li>
            <li>
              <a>탭7</a>
            </li>
            <li>
              <a>탭8</a>
            </li>
            <li>
              <a>탭9</a>
            </li>
            <li>
              <a>탭9</a>
            </li>
            <li>
              <a>탭9</a>
            </li>
            <li>
              <a>탭9</a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul className="tab-type3">
            <li className="tab-type3--active">
              <a>탭1</a>
            </li>
            <li>
              <a>탭2</a>
            </li>
            <li>
              <a>탭3</a>
            </li>
            <li>
              <a>탭4</a>
            </li>
          </ul>
        </nav>
        <h2 className="h2 mt100" id="guide2">
          상품리스트
        </h2>
        <h3 className="h3 mt30">상품리스트 타입1</h3>
        <ul className="shop-list">
          {Array.from({ length: 4 }).map((_, index: number) => (
            <li key={index}>
              <a href="">
                <div className="shop-list__thumb">
                  <div className="badge black" aria-label="상품구매혜택">
                    N+1
                  </div>
                  <img
                    className="shop-list__thumb__large"
                    src={thumnail1}
                    alt=""
                  />
                  <img
                    className="shop-list__thumb__small"
                    src={thumnail2}
                    alt=""
                  />
                </div>
              </a>
              <div className="badge-list mt12">
                <div>
                  <div className="badge purple">배달</div>
                </div>
                <div className="shop-list__funcBtn">
                  <button
                    className="btn-like"
                    aria-label="좋아요 즐겨찾기"
                  ></button>
                  <button
                    className="btn-cart"
                    aria-label="장바구니 담기"
                  ></button>
                </div>
              </div>
              <a href="" className="shop-list__info mt8">
                <div className="shop-list__title">
                  신라면 컵라면 + 신라면 봉지라면 (2입)
                </div>
                <div className="shop-list__price">
                  <div className="shop-list__price--sale" aria-label="할인율">
                    50%
                  </div>
                  <div className="shop-list__price--original" aria-label="원가">
                    1,400원
                  </div>
                  <div className="shop-list__price--sell" ariga-label="판매가">
                    700원
                  </div>
                </div>
                <div className="shop-list__hashtag" aria-label="상품태그">
                  <div className="badge gray">POP할인</div>
                </div>
                <div className="shop-list__rating" aria-label="별점">
                  4.6 (00)
                </div>
              </a>
            </li>
          ))}
        </ul>
        <h3 className="h3 mt30">상품리스트 타입2</h3>
        <ul className="shop-list list mt30">
          {Array.from({ length: 4 }).map((_, index: number) => (
            <li key={index}>
              <a href="">
                <div className="shop-list__thumb">
                  <div className="badge skyblue" aria-label="상품구매혜택">
                    1
                  </div>
                  <img
                    className="shop-list__thumb__large"
                    src={thumnail1}
                    alt=""
                  />
                  <img
                    className="shop-list__thumb__small"
                    src={thumnail2}
                    alt=""
                  />
                </div>
              </a>
              <a href="" className="shop-list__info mt8">
                <div className="badge-list">
                  <div className="badge black2">스파클링</div>
                  <div className="badge white">칠레</div>
                  <div className="badge purple">배달</div>
                  <div className="badge gray">카드할인</div>
                </div>
                <div className="shop-list__title">
                  신라면 컵라면 + 신라면 봉지라면 (2입)
                </div>
                <div className="shop-list__price">
                  <div className="shop-list__price--sale" aria-label="할인율">
                    50%
                  </div>
                  <div className="shop-list__price--original" aria-label="원가">
                    1,400원
                  </div>
                  <div className="shop-list__price--sell" ariga-label="판매가">
                    700원
                  </div>
                </div>
                <div className="shop-list__hashtag" aria-label="상품태그">
                  <div className="badge gray">POP할인</div>
                </div>
              </a>
              <div className="badge-list">
                <div className="shop-list__rating" aria-label="별점">
                  4.6 (00)
                </div>
                <div>
                  <button
                    className="btn-like"
                    aria-label="좋아요 즐겨찾기"
                  ></button>
                  <button
                    className="btn-cart ml10"
                    aria-label="장바구니 담기"
                  ></button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <h3 className="h3 mt30">상품리스트 타입3</h3>
        <ul className="shop-list card mt30">
          {Array.from({ length: 4 }).map((_, index: number) => (
            <li key={index}>
              <a href="">
                <div className="shop-list__thumb">
                  <div className="badge black" aria-label="상품구매혜택">
                    N+1
                  </div>
                  <img
                    className="shop-list__thumb__large"
                    src={thumnail1}
                    alt=""
                  />
                  <img
                    className="shop-list__thumb__small"
                    src={thumnail2}
                    alt=""
                  />
                </div>
              </a>
              <div className="badge-list mt12">
                <div>
                  <div className="badge purple">배달</div>
                </div>
                <div className="shop-list__funcBtn">
                  <button
                    className="btn-like"
                    aria-label="좋아요 즐겨찾기"
                  ></button>
                  <button
                    className="btn-cart"
                    aria-label="장바구니 담기"
                  ></button>
                </div>
              </div>
              <a href="" className="shop-list__info mt8">
                <div className="shop-list__title">
                  신라면 컵라면 + 신라면 봉지라면 (2입)
                </div>
                <div className="shop-list__price">
                  <div className="shop-list__price--sale" aria-label="할인율">
                    50%
                  </div>
                  <div className="shop-list__price--original" aria-label="원가">
                    1,400원
                  </div>
                  <div className="shop-list__price--sell" ariga-label="판매가">
                    700원
                  </div>
                </div>
                <div className="shop-list__hashtag" aria-label="상품태그">
                  <div className="badge gray">POP할인</div>
                </div>
                <div className="shop-list__rating" aria-label="별점">
                  4.6 (00)
                </div>
              </a>
            </li>
          ))}
        </ul>
        <h2 className="h2 mt100" id="guide3">
          <button className="btn white">흰색버튼</button>
          <a className="btn black" href="">
            검정버튼
          </a>
          버튼
        </h2>
        <h2 className="h2 mt100" id="guide4">
          온라인 서식(form)
        </h2>
        <input type="text" />
        <input type="text" readOnly value={"5,000원"} />
        <br />
        <input type="radio" name="radio" id="radio1_1" />
        <label htmlFor="radio1_1">라디오1</label>
        <input type="radio" name="radio" id="radio1_2" />
        <label htmlFor="radio1_2">라디오2</label>
        <br />
        <input type="checkbox" name="checkbox" id="checkbox1_1" />
        <label htmlFor="checkbox1_1">체크박스1</label>
        <input type="checkbox" name="checkbox" id="checkbox1_2" />
        <label htmlFor="checkbox1_2">체크박스2</label>
        <br />
        <div className="spinner">
          <input type="number" value={1} disabled />
          <button className="minus" disabled></button>
          <button className="plus"></button>
        </div>
        <h2 className="h2 mt100" id="guide5">
          콘텐츠 제목
        </h2>
        <h1 className="h1">h1</h1>
        <h2 className="h2 mt100">h2</h2>
        <h2 className="h2-2 mt100">h2-2</h2>
        <h2 className="h2-3 mt100">h2-3</h2>
        <h3 className="h3">h3</h3>
        <h2 className="h2 mt100" id="guide6">
          텍스트
        </h2>
        <h2 className="h2 mt100" id="guide7">
          토글 콘텐츠
        </h2>
        <Collapsible className="toggle-box">
          <Collapsible.Trigger className="toggle-box__btn">
            제목
          </Collapsible.Trigger>
          <Collapsible.Content className="toggle-box__content">
            5토글 컨텐츠 8/16/20/16
          </Collapsible.Content>
        </Collapsible>

        <h2 className="h2 mt100" id="guide8">
          기타UI
        </h2>
        <hr className="hr-line" />
      </main>
      <Footer />
    </div>
  );
}
